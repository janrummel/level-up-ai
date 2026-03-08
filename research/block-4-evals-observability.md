# Block 4: Evals & Observability — Forschungsergebnis

> Status: seed | Quellen: github.com/mattpocock/evalite, langfuse.com, ai-hero-dev | Stand: 2026-03-07

## Zusammenfassung

Evals sind automatisierte Tests fuer LLM-Anwendungen. Anders als Unit Tests pruefen sie nicht "richtig/falsch", sondern bewerten Qualitaet auf einer Skala. Evalite ist ein TypeScript-natives Eval-Framework, Langfuse bietet Production-Observability.

## Kernkonzepte

### Was sind Evals?

Evals beantworten: "Wie gut funktioniert mein LLM-System?" Sie messen:
- **Faktentreue** (Halluziniert das LLM?)
- **Formatkonformitaet** (Stimmt die Ausgabe mit dem erwarteten Format?)
- **Relevanz** (Beantwortet es die Frage?)
- **Tonalitaet** (Stimmt der Ton?)

### Eval-Typen

| Typ | Wie | Beispiel |
|-----|-----|---------|
| **Deterministisch** | String-Vergleich, Regex | Levenshtein-Distanz |
| **LLM-as-a-Judge** | Ein LLM bewertet ein anderes | Factuality Scorer |
| **Menschlich** | Human Review | Annotation in Langfuse |

### Evalite — TypeScript-natives Eval-Framework

Von Matt Pocock. Basiert auf Vitest. Lokal, datenschutzkonform.

#### Installation & Setup

```bash
pnpm add -D evalite vitest autoevals
```

```json
{
  "scripts": {
    "eval:dev": "evalite watch"
  }
}
```

#### Grundstruktur

```typescript
// my-eval.eval.ts

import { evalite } from 'evalite';
import { Levenshtein } from 'autoevals';

evalite('My Eval', {
  // Test-Daten: Input + erwarteter Output
  data: [{ input: 'Hello', expected: 'Hello World!' }],

  // Die zu testende Funktion (Dein LLM-Call)
  task: async (input) => {
    return input + ' World!';
  },

  // Bewertungsfunktionen
  scorers: [Levenshtein],
});
```

**Ablauf:**
1. `data` liefert Test-Cases
2. `task` wird pro Test-Case ausgefuehrt
3. `scorers` bewerten den Output
4. Ergebnisse in SQLite (node_modules/.evalite)
5. UI unter http://localhost:3006

#### Dateikonvention

`.eval.ts` — Evalite sucht nach dieser Endung (analog zu `.test.ts` bei Vitest).

#### Scorers

**Inline Scorer:**
```typescript
scorers: [{
  name: 'Contains Paris',
  description: 'Prueft ob Paris vorkommt.',
  scorer: ({ output }) => output.includes('Paris') ? 1 : 0,
}]
```

**Reusable Scorer:**
```typescript
import { createScorer } from 'evalite';

const containsWord = createScorer<string, string, string>({
  name: 'Contains Word',
  description: 'Prueft ob ein bestimmtes Wort vorkommt.',
  scorer: ({ output, expected }) => output.includes(expected) ? 1 : 0,
});
```

**LLM-as-a-Judge Scorer:**
```typescript
import { createScorer } from 'evalite';
import { generateObject } from 'ai';
import { openai } from '@ai-sdk/openai';
import { z } from 'zod';

const Factuality = createScorer<string, string, string>({
  name: 'Factuality',
  scorer: async ({ input, expected, output }) => {
    const { object } = await generateObject({
      model: openai('gpt-4o'),
      prompt: `Compare submission to expert answer...
        [Question]: ${input}
        [Expert]: ${expected}
        [Submission]: ${output}
        Select: (A) subset (B) superset (C) identical (D) conflict (E) irrelevant diff`,
      schema: z.object({
        answer: z.enum(['A', 'B', 'C', 'D', 'E']),
        rationale: z.string(),
      }),
    });

    const scores = { A: 0.4, B: 0.6, C: 1, D: 0, E: 1 };
    return { score: scores[object.answer], metadata: { rationale: object.rationale } };
  },
});
```

**Autoevals Library:** Vorgefertigte Scorer (Factuality, Levenshtein, etc.) von Braintrust.

#### AI SDK Integration

```typescript
import { traceAISDKModel } from 'evalite/ai-sdk';
import { openai } from '@ai-sdk/openai';
import { streamText } from 'ai';

evalite('Capital Cities', {
  data: async () => [
    { input: 'What is the capital of France?', expected: 'Paris' },
    { input: 'What is the capital of Germany?', expected: 'Berlin' },
  ],
  task: async (input) => {
    const result = streamText({
      model: traceAISDKModel(openai('gpt-4o-mini')),  // Tracing!
      system: 'Answer concisely. No periods.',
      prompt: input,
    });
    return await result.text;
  },
  scorers: [Factuality, Levenshtein],
});
```

`traceAISDKModel` — Wrapper der LLM-Calls in Evalite-Traces erfasst.

#### Konversations-Tests

```typescript
import type { CoreMessage } from 'ai';

evalite<CoreMessage[], string, string>('Chat Test', {
  data: async () => [{
    input: [{ content: 'Hauptstadt von Frankreich?', role: 'user' }],
    expected: 'Paris',
  }],
  task: async (input) => {
    const result = streamText({ model, messages: input });
    return await result.text;
  },
  scorers: [Levenshtein],
});
```

### Langfuse — Production Observability

Langfuse erfasst LLM-Calls in Production und ermoeglicht:
- **Traces:** Vollstaendige Aufruf-Ketten
- **Evaluationen:** Model-basiert, menschlich, custom
- **Datasets:** Konsistente Test-Datensaetze
- **Experiments:** Performance-Vergleiche

#### Integration mit AI SDK

Ueber OpenTelemetry / Vercel AI SDK Telemetry (eigene Recherche noetig).

### Eval-Driven Development (Workflow)

1. **Dataset erstellen** — Repraesentative Input-Output-Paare sammeln
2. **Baseline messen** — Aktuelle Performance mit Scorern bewerten
3. **Prompt aendern** — Verbesserung vornehmen
4. **Erneut messen** — Vergleich mit Baseline
5. **Iterieren** — Bis gewuenschte Qualitaet erreicht

"Your App Is Only As Good As Its Evals" — Matt Pocock

### ai-hero-dev Exercises (Level 6)

| Exercise | Thema |
|----------|-------|
| 06.01 | Evalite Basics — Setup und erste Eval |
| 06.02 | Deterministic Eval — String-Matching |
| 06.03 | LLM-as-a-Judge — KI bewertet KI |
| 06.04 | Dataset Management — Test-Daten pflegen |
| 06.05 | Chat Title Generation — Praxis-Eval |
| 06.06 | Critiquing Datasets — Qualitaet der Test-Daten pruefen |
| 06.07 | Langfuse Basics — Observability einrichten |

## Quellen

1. github.com/mattpocock/evalite — Evalite Repo + Docs
2. npmjs.com/package/evalite
3. langfuse.com/docs/evaluation/overview
4. aihero.dev/what-are-evals
5. ai-hero-dev Exercises 06.01-06.07
6. github.com/braintrustdata/autoevals — Autoevals Library

## Offene Fragen

- Wie integriert man Langfuse mit dem AI SDK in Production?
- Wie baut man ein CI/CD-Pipeline mit Evalite (Score-Thresholds)?
- Welche Scorer eignen sich fuer welche Anwendungsfaelle?
- Wie gross sollte ein Eval-Dataset mindestens sein?
