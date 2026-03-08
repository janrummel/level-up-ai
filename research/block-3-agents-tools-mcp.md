# Block 3: Agents, Tools & MCP — Forschungsergebnis

> Status: seed | Quellen: ai-sdk.dev, platform.claude.com, modelcontextprotocol.io | Stand: 2026-03-07

## Zusammenfassung

Agents sind LLM-Systeme, die autonom Werkzeuge nutzen, um Aufgaben zu loesen. Das AI SDK v6 bietet mit ToolLoopAgent eine Production-ready Agent-Abstraktion. MCP (Model Context Protocol) standardisiert die Verbindung zu externen Tool-Servern.

## Kernkonzepte

### Tools — Die Bausteine

Tools sind Funktionen, die ein LLM aufrufen kann. Das LLM entscheidet WANN und MIT WELCHEN PARAMETERN ein Tool aufgerufen wird.

```typescript
import { tool } from 'ai';
import { z } from 'zod';

const weatherTool = tool({
  description: 'Get the weather in a location',        // Beeinflusst wann das Tool gewaehlt wird
  inputSchema: z.object({                               // Zod-Schema fuer Parameter
    location: z.string().describe('The location'),      // .describe() hilft dem LLM
  }),
  execute: async ({ location }) => ({                   // Async Ausfuehrung
    location,
    temperature: 22,
    condition: 'sunny',
  }),
});
```

### Tool-Definition — Vollstaendige API

| Property | Typ | Beschreibung |
|----------|-----|-------------|
| `description` | string | Beeinflusst Tool-Auswahl durch LLM |
| `inputSchema` | Zod/JSON Schema | Validiert LLM-Input |
| `execute` | async function | Fuehrt das Tool aus |
| `strict` | boolean | Erzwingt valide Inputs (provider-abhaengig) |
| `needsApproval` | boolean/function | Human-in-the-Loop |
| `inputExamples` | array | Beispiel-Inputs (nativ: Anthropic) |
| `toModelOutput` | function | Trennt Execution-Result von Model-Input |

### Tool Choice — Steuerung

```typescript
await generateText({
  tools: { weather: weatherTool },
  toolChoice: 'auto',      // LLM entscheidet (default)
  // toolChoice: 'required', // LLM MUSS Tool nutzen
  // toolChoice: 'none',     // Keine Tools
  // toolChoice: { type: 'tool', toolName: 'weather' }, // Bestimmtes Tool erzwingen
});
```

### Multi-Step Tool Calls

```typescript
const { text, steps } = await generateText({
  model,
  tools: { weather: weatherTool, calendar: calendarTool },
  stopWhen: stepCountIs(5),   // Max 5 Schritte
  prompt: 'Plane einen Ausflug basierend auf dem Wetter.',
});

// Steps auswerten:
const allToolCalls = steps.flatMap(step => step.toolCalls);
```

**Ablauf:** LLM generiert → Tool Call? → Tool ausfuehren → Ergebnis zurueck → LLM generiert erneut → bis Text oder stopWhen.

### Tool Approval (Human-in-the-Loop)

```typescript
const dangerousTool = tool({
  description: 'Delete a file',
  inputSchema: z.object({ path: z.string() }),
  needsApproval: true,  // Immer fragen
  // ODER dynamisch:
  // needsApproval: async ({ path }) => path.includes('/important/'),
  execute: async ({ path }) => { /* ... */ },
});
```

**Flow:** LLM generiert Tool Call → `tool-approval-request` → User entscheidet → `tool-approval-response` → Tool laeuft (oder nicht).

### prepareStep — Dynamische Konfiguration pro Schritt

```typescript
await generateText({
  prepareStep: async ({ stepNumber, messages }) => {
    // Erstes Step: nur bestimmtes Tool erlauben
    if (stepNumber === 0) {
      return { toolChoice: { type: 'tool', toolName: 'search' } };
    }
    // Context-Kompression bei langen Konversationen
    if (messages.length > 20) {
      return { messages: messages.slice(-10) };
    }
    return {};
  },
});
```

### ToolLoopAgent (AI SDK v6)

```typescript
import { ToolLoopAgent } from 'ai';

const researchAgent = new ToolLoopAgent({
  model: anthropic('claude-sonnet-4-5-20250514'),
  instructions: 'Du bist ein Research-Assistent.',
  tools: { search: searchTool, summarize: summarizeTool },
  // stopWhen: stepCountIs(20),  // Default: 20 Schritte
});

// Einmal definieren, ueberall nutzen:
const result = await researchAgent.generate({ prompt: 'Recherchiere X.' });
const stream = await researchAgent.stream({ prompt: 'Erzaehle ueber Y.' });
```

**Vorteile gegenueber generateText mit Tools:**
- Wiederverwendbar (einmal definiert, mehrfach genutzt)
- Konsistent (gleiche Config ueberall)
- Weniger Boilerplate
- TypeScript Type Safety

**Agent ist ein Interface** — ToolLoopAgent ist die Standard-Implementierung. Custom Agents moeglich.

### MCP (Model Context Protocol)

MCP standardisiert die Kommunikation zwischen AI-Anwendungen und Tool-Servern.

#### Transport-Optionen

| Transport | Einsatz | Production |
|-----------|---------|-----------|
| HTTP (Streamable) | Remote Server | Ja (empfohlen) |
| SSE | Alternative HTTP | Ja |
| stdio | Lokale Server | Nein (nur Dev) |

#### MCP Client erstellen

```typescript
import { createMCPClient } from '@ai-sdk/mcp';

// HTTP (Production)
const client = await createMCPClient({
  transport: {
    type: 'http',
    url: 'https://server.com/mcp',
    headers: { Authorization: 'Bearer key' },
  },
});

// stdio (Lokal)
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';
const client = await createMCPClient({
  transport: new StdioClientTransport({
    command: 'node',
    args: ['server.js'],
  }),
});
```

#### MCP Tools nutzen

```typescript
// Automatisch (alle Tools laden)
const tools = await client.tools();

// Typisiert (mit Zod-Schemas)
const tools = await client.tools({
  schemas: {
    'get-weather': {
      inputSchema: z.object({ location: z.string() }),
      outputSchema: z.object({ temperature: z.number() }),
    },
  },
});

// Mit generateText/streamText
const result = await streamText({
  model,
  tools,
  prompt: 'Wie ist das Wetter?',
  onFinish: async () => await client.close(),
});
```

#### MCP Resources & Prompts

```typescript
// Resources (Application-driven, nicht LLM-driven)
const resources = await client.listResources();
const data = await client.readResource({ uri: 'file:///doc.txt' });

// Prompts (experimentell)
const prompts = await client.experimental_listPrompts();
const prompt = await client.experimental_getPrompt({
  name: 'code_review',
  arguments: { code: '...' },
});
```

### Anthropic Agentic Patterns (Claude 4.6)

#### Subagent-Orchestrierung

Claude 4.6 erkennt selbststaendig wann Subagents sinnvoll sind. Aber: Kann uebermaessig delegieren.

```
Nutze Subagents wenn:
- Aufgaben parallel laufen koennen
- Isolierter Kontext noetig ist
- Unabhaengige Arbeitsstroeme existieren

Arbeite direkt wenn:
- Einfache Aufgaben
- Sequentielle Operationen
- Single-File Edits
- Kontext ueber Schritte hinweg noetig
```

#### Long-Horizon Reasoning

- Claude 4.6 verfolgt State ueber lange Sessions
- Context Awareness: Modell weiss wie viel Kontext noch uebrig ist
- Git fuer State-Tracking ueber Sessions hinweg
- Strukturierte Formate (JSON) fuer State-Daten
- Unstrukturierter Text fuer Progress Notes

#### Autonomie vs. Sicherheit

Ohne Guidance nimmt Claude 4.6 schwer umkehrbare Aktionen vor. Explizite Anweisungen noetig:
- Lokale, reversible Aktionen: frei ausfuehren
- Shared Systems, destruktive Ops: erst fragen

## Quellen

1. ai-sdk.dev/docs/ai-sdk-core/tools-and-tool-calling
2. ai-sdk.dev/docs/agents/building-agents
3. ai-sdk.dev/docs/ai-sdk-core/mcp-tools
4. vercel.com/blog/ai-sdk-6
5. platform.claude.com — Prompting Best Practices (Agentic Systems)

## Offene Fragen

- Wie implementiert man Custom Agents (Agent Interface)?
- Was ist der Workflow DevKit DurableAgent genau?
- Wie funktioniert MCP OAuth/PKCE Flow im Detail?
- Wie orchestriert man Multi-Agent-Systeme mit dem AI SDK?
