# Block 5: Production Patterns — Forschungsergebnis

> Status: seed | Quellen: ai-sdk.dev, platform.claude.com, vercel.com/blog/ai-sdk-6 | Stand: 2026-03-07

## Zusammenfassung

Production Patterns umfassen Streaming, Workflows, Guardrails, Model Routing und Error Handling. Sie machen den Unterschied zwischen einem Prototyp und einer robusten AI-Anwendung.

## Kernkonzepte

### Streaming

#### Custom Data Parts

Neben Text koennen Streams strukturierte Daten transportieren:

```typescript
// Custom Data Parts mit streamText
const result = streamText({
  model,
  prompt: '...',
  onChunk({ chunk }) {
    if (chunk.type === 'text') { /* Text */ }
    // Weitere Typen: reasoning, source, tool-call, tool-result
  },
});
```

#### Stream Transformations

```typescript
import { smoothStream, streamText } from 'ai';

// Built-in Smoothing (weniger stotternde Ausgabe)
const result = streamText({
  model,
  prompt,
  experimental_transform: smoothStream(),
});

// Custom Transform
const upperCase = () => (options) =>
  new TransformStream({
    transform(chunk, controller) {
      controller.enqueue(
        chunk.type === 'text-delta'
          ? { ...chunk, text: chunk.text.toUpperCase() }
          : chunk,
      );
    },
  });

// Mehrere Transforms verketten
experimental_transform: [smoothStream(), upperCase()],
```

#### Message Metadata

Zusaetzliche Daten an Messages anhaengen, die nicht zum LLM gehen.

#### Error Handling in Streams

```typescript
const result = streamText({
  model,
  prompt,
  onError({ error }) {
    console.error('Stream error:', error);
  },
});

// Oder im UI-Stream
return result.toUIMessageStreamResponse({
  onError: (error) => {
    if (NoSuchToolError.isInstance(error)) return 'Unknown tool.';
    return 'An error occurred.';
  },
});
```

### Workflows (Agent Patterns)

#### Einfacher Workflow

Sequentielle Schritte, jeder mit eigenem LLM-Call:

```typescript
// Schritt 1: Recherchieren
const research = await generateText({ model, prompt: 'Research X' });

// Schritt 2: Zusammenfassen
const summary = await generateText({
  model,
  prompt: `Summarize: ${research.text}`,
});

// Schritt 3: Formatieren
const formatted = await generateText({
  model,
  prompt: `Format as email: ${summary.text}`,
});
```

#### Custom Agent Loop

```typescript
// Eigener Loop statt ToolLoopAgent
let messages = [{ role: 'user', content: prompt }];
let done = false;

while (!done) {
  const result = await generateText({ model, tools, messages });

  if (result.finishReason === 'stop') {
    done = true;
  } else {
    messages.push(...result.response.messages);
  }

  // Eigene Abbruchbedingung
  if (messages.length > 50) {
    done = true;  // Loop brechen
  }
}
```

#### Breaking the Loop Early

Vorzeitiger Abbruch basierend auf Tool-Ergebnissen oder Zeitlimits.

### Guardrails

Sicherheitschecks vor, waehrend und nach LLM-Calls.

```typescript
// Input-Guardrail: Prompt pruefen
function checkInput(input: string): boolean {
  // PII-Check, Injection-Check, etc.
  return !input.includes('ignore previous instructions');
}

// Output-Guardrail: Ergebnis pruefen
function checkOutput(output: string): boolean {
  // Toxizitaets-Check, Format-Check, etc.
  return output.length > 0 && output.length < 10000;
}

// Im Workflow
const input = userMessage;
if (!checkInput(input)) throw new Error('Invalid input');

const result = await generateText({ model, prompt: input });

if (!checkOutput(result.text)) throw new Error('Output check failed');
```

### Model Router

Verschiedene Modelle fuer verschiedene Aufgaben:

```typescript
function selectModel(task: string) {
  if (task === 'simple') return google('gemini-2.5-flash-lite');
  if (task === 'complex') return anthropic('claude-opus-4-6');
  return anthropic('claude-sonnet-4-5-20250514');  // Default
}

// Oder dynamisch basierend auf Input-Laenge
function selectModel(tokens: number) {
  if (tokens < 100) return google('gemini-2.5-flash-lite');  // Guenstig
  return anthropic('claude-sonnet-4-5-20250514');             // Qualitaet
}
```

### Comparing Multiple Outputs

Mehrere Modelle parallel befragen und vergleichen:

```typescript
const models = [
  anthropic('claude-sonnet-4-5-20250514'),
  openai('gpt-4o'),
  google('gemini-2.5-flash'),
];

const results = await Promise.all(
  models.map(model => generateText({ model, prompt }))
);

// Ergebnisse vergleichen (z.B. via LLM-as-a-Judge)
```

### Persistence

#### On Finish Callback

```typescript
await generateText({
  model,
  prompt,
  onFinish({ text, usage, response }) {
    // In DB speichern
    await db.insert('chats', {
      messages: response.messages,
      tokens: usage.totalTokens,
    });
  },
});
```

#### Chat ID und Message Persistence

```typescript
// Frontend: Chat ID mitschicken
const response = await fetch('/api/chat', {
  body: JSON.stringify({ chatId, messages }),
});

// Backend: Messages laden und speichern
const history = await db.getMessages(chatId);
const result = await generateText({
  model,
  messages: [...history, ...newMessages],
  onFinish({ response }) {
    db.saveMessages(chatId, response.messages);
  },
});
```

#### Message Validation

Nachrichten vor dem Senden ans LLM validieren — gegen Schema-Drift und Injection.

### DevTools

```bash
npx @ai-sdk/devtools
```

Oeffnet UI unter http://localhost:4983:
- Alle LLM-Calls inspizieren
- Inputs, Outputs, Token Usage
- Timing und Latenz
- Raw Provider Requests/Responses

### Anthropic Production Patterns (Claude 4.6)

#### Context Window Management

- Claude 4.6 hat Context Awareness — weiss wie viel Platz noch ist
- Fuer lange Sessions: Auto-Compaction oder Save-to-File

```
Your context window will be automatically compacted as it approaches
its limit. Do not stop tasks early due to token budget concerns.
Save progress before context refreshes.
```

#### Multi-Context-Window Workflows

1. Erste Session: Framework aufsetzen (Tests, Setup Scripts)
2. Folge-Sessions: Iterieren auf Todo-Liste
3. Git fuer State-Tracking
4. tests.json fuer strukturierten Fortschritt
5. progress.txt fuer unstrukturierte Notizen

#### Parallelism

Claude 4.6 nutzt parallel Tool Calls aggressiv. Steuerbar:

```
Maximiere parallele Tool-Calls wenn keine Abhaengigkeiten bestehen.
Sequentiell wenn Ergebnisse voneinander abhaengen.
```

### ai-hero-dev Exercises (Module 7-9)

| Modul | Exercise | Thema |
|-------|----------|-------|
| 7 | 07.01-07.04 | Custom Data Parts, Message Metadata, Error Handling |
| 8 | 08.01-08.04 | Workflows, Custom Loops, Breaking Loops |
| 9 | 09.01-09.04 | Guardrails, Model Router, Multi-Output, Research Workflow |

## Quellen

1. ai-sdk.dev/docs/ai-sdk-core/generating-text (Streaming, Callbacks)
2. ai-sdk.dev/docs/agents/building-agents (ToolLoopAgent, stopWhen)
3. vercel.com/blog/ai-sdk-6 (DevTools, neue Features)
4. platform.claude.com — Prompting Best Practices (Agentic Systems, Production)
5. ai-hero-dev Exercises 07-09

## Offene Fragen

- Wie implementiert man Guardrails als Middleware im AI SDK?
- Was ist der Workflow DevKit (DurableAgent, resumable workflows)?
- Wie baut man ein robustes Retry-System fuer LLM-Calls?
- Wie misst man Latenz und Kosten in Production (OpenTelemetry)?
