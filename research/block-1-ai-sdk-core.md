# Block 1: AI SDK Core — Forschungsergebnis

> Status: seed | Quellen: ai-sdk.dev, vercel.com/blog/ai-sdk-6 | Stand: 2026-03-07

## Zusammenfassung

Das Vercel AI SDK (v6) ist ein TypeScript-Toolkit fuer AI-Anwendungen. Es abstrahiert Provider-Unterschiede und bietet eine einheitliche API fuer Text-Generierung, Streaming, Tool Calling, Structured Output und Agent-Loops. 24+ offizielle Provider, 32+ Community Provider.

## Kernkonzepte

### Drei Bibliotheken

1. **AI SDK Core** — Backend: Text-Generierung, Tools, Agents, Structured Output
2. **AI SDK UI** — Frontend: Framework-agnostische Hooks fuer Chat-UIs
3. **AI SDK RSC** — React Server Components: Streaming React Components

### Kern-Funktionen

| Funktion | Zweck | Einsatz |
|----------|-------|---------|
| `generateText` | Text generieren (nicht-interaktiv) | Automation, E-Mail, Zusammenfassungen |
| `streamText` | Text streamen (interaktiv) | Chatbots, Echtzeit-Feedback |
| `Output.object()` | Strukturiertes Objekt generieren | Datenextraktion, Klassifikation |
| `Output.array()` | Array von Objekten generieren | Listen, Batch-Verarbeitung |
| `Output.choice()` | Auswahl aus Optionen | Klassifikation, Routing |

### generateText — Return-Objekt

```typescript
const result = await generateText({
  model: anthropic('claude-sonnet-4-5-20250514'),
  system: 'Du bist ein hilfreicher Assistent.',
  prompt: 'Erklaere Promises in JavaScript.',
});

// Verfuegbare Properties:
result.text           // Generierter Text
result.toolCalls      // Tool-Aufrufe
result.toolResults    // Tool-Ergebnisse
result.usage          // Token-Verbrauch
result.finishReason   // Warum gestoppt
result.steps          // Alle Schritte (bei Multi-Step)
result.response       // Headers, Body, Messages
result.output         // Strukturierter Output
```

### streamText — Streaming-spezifisch

```typescript
const result = streamText({
  model: anthropic('claude-sonnet-4-5-20250514'),
  prompt: 'Erzaehle eine Geschichte.',
});

// Streaming-Optionen:
result.textStream                    // AsyncIterable fuer Text-Chunks
result.fullStream                    // Alle Events (text-delta, tool-call, etc.)
result.toUIMessageStreamResponse()   // Fuer Next.js API Routes
result.pipeUIMessageStreamToResponse() // Pipe in Response-Objekt
```

### fullStream Events

```typescript
for await (const part of result.fullStream) {
  switch (part.type) {
    case 'start':           // Stream beginnt
    case 'text-delta':      // Text-Chunk
    case 'reasoning-delta': // Reasoning-Chunk
    case 'tool-call':       // Tool wird aufgerufen
    case 'tool-result':     // Tool-Ergebnis
    case 'finish':          // Stream endet
    case 'error':           // Fehler
  }
}
```

### Structured Output

```typescript
import { Output } from 'ai';
import { z } from 'zod';

// Objekt
const { output } = await generateText({
  model,
  output: Output.object({
    schema: z.object({
      name: z.string(),
      age: z.number().nullable(),
      labels: z.array(z.string()),
    }),
  }),
  prompt: 'Generiere Testdaten.',
});

// Array
const { output } = await generateText({
  output: Output.array({
    element: z.object({
      city: z.string(),
      temp: z.number(),
    }),
  }),
  prompt: 'Wetter fuer 3 Staedte.',
});

// Auswahl
const { output } = await generateText({
  output: Output.choice({
    options: ['positive', 'negative', 'neutral'],
  }),
  prompt: 'Sentiment: "Das Produkt ist grossartig!"',
});
```

### Provider-System

- 24+ offizielle Provider (Anthropic, OpenAI, Google, Mistral, etc.)
- Einheitliche API — Provider wechseln ohne Code-Aenderung
- Konfiguration ueber Provider-spezifische Packages (@ai-sdk/anthropic, etc.)

```typescript
import { anthropic } from '@ai-sdk/anthropic';
import { openai } from '@ai-sdk/openai';
import { google } from '@ai-sdk/google';

// Selbes API, anderes Modell:
await generateText({ model: anthropic('claude-sonnet-4-5-20250514'), prompt: '...' });
await generateText({ model: openai('gpt-4o'), prompt: '...' });
await generateText({ model: google('gemini-2.5-flash'), prompt: '...' });
```

### Callbacks & Lifecycle

```typescript
// generateText
await generateText({
  onFinish({ text, finishReason, usage, response, steps }) { },
  experimental_onStart({ model, settings }) { },
  experimental_onStepStart({ stepNumber, model }) { },
  experimental_onToolCallStart({ toolName, input }) { },
  experimental_onToolCallFinish({ toolName, durationMs }) { },
  onStepFinish({ stepNumber, finishReason, usage }) { },
});

// streamText (zusaetzlich)
streamText({
  onChunk({ chunk }) { },  // Pro Chunk
  onError({ error }) { },   // Bei Fehlern
});
```

### AI SDK v6 Neuerungen (vs. v5)

- ToolLoopAgent Klasse (Agent-Abstraktion)
- Tool Approval (needsApproval)
- DevTools (npx @ai-sdk/devtools)
- MCP Support (stabil, @ai-sdk/mcp)
- Output API (Output.object, Output.array, Output.choice)
- Strict Mode fuer Tools
- Input Examples fuer Tools
- Reranking Support
- Erweiterte Usage-Details (cache tokens, reasoning tokens)

## Quellen

1. ai-sdk.dev/docs/introduction
2. ai-sdk.dev/docs/ai-sdk-core/generating-text
3. ai-sdk.dev/docs/ai-sdk-core/generating-structured-data
4. ai-sdk.dev/docs/foundations/providers-and-models
5. vercel.com/blog/ai-sdk-6

## Offene Fragen

- Wie genau funktioniert das Provider-Registry-Pattern?
- Was sind die Unterschiede in der Token-Zaehlung zwischen Providern?
- Wie funktioniert Stream-Smoothing im Detail?
