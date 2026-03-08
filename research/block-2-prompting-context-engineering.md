# Block 2: Prompting & Context Engineering — Forschungsergebnis

> Status: seed | Quellen: platform.claude.com, ai-sdk.dev, ai-hero-dev | Stand: 2026-03-07

## Zusammenfassung

Context Engineering ist die Kunst, dem LLM den optimalen Input zu geben. Es umfasst Prompt-Struktur, Few-Shot Learning, RAG und Chain of Thought. Anthropic betont: Es geht nicht nur um Prompting, sondern um das gesamte Input-Management.

## Kernkonzepte

### Anthropic Best Practices (Claude 4.6)

#### 1. Klarheit und Direktheit

"Think of Claude as a brilliant but new employee who lacks context." Je praeziser die Anweisung, desto besser das Ergebnis.

- Spezifisch sein beim Output-Format
- Nummerierte Schritte fuer sequentielle Aufgaben
- Golden Rule: "Show your prompt to a colleague — if they'd be confused, Claude will be too."

#### 2. Kontext hinzufuegen

Nicht nur sagen WAS, sondern WARUM. Claude generalisiert aus der Begruendung.

```
Schlecht: "NEVER use ellipses"
Besser:  "Your response will be read aloud by a text-to-speech engine,
          so never use ellipses since the TTS engine won't know how to
          pronounce them."
```

#### 3. Beispiele (Few-Shot Prompting)

- 3-5 Beispiele fuer beste Ergebnisse
- In <example> Tags wrappen
- Relevant, divers, strukturiert

```xml
<examples>
  <example>
    <input>Was ist die Hauptstadt von Frankreich?</input>
    <expected>Paris</expected>
  </example>
</examples>
```

#### 4. XML Tags fuer Struktur

XML Tags helfen bei der Prompt-Segmentierung — reduzieren Fehlinterpretationen bei laengeren Prompts.

```xml
<instructions>...</instructions>
<context>...</context>
<input>...</input>
```

#### 5. Rollen-Prompting

Rolle im System Prompt setzen — fokussiert Verhalten und Tonalitaet.

```python
system="You are a helpful coding assistant specializing in Python."
```

#### 6. Long Context (20K+ Tokens)

- Lange Dokumente OBEN im Prompt (vor der Frage)
- Queries am Ende verbessern Qualitaet um bis zu 30%
- Dokumente mit XML Tags strukturieren (<document index="1">)
- "Ground responses in quotes" — erst zitieren, dann antworten

### Das Anthropic Prompt Template

Struktur, die LLM-Aufmerksamkeitsverteilung nutzt:

```
1. <task-context>      — Rolle, Aufgabe (ANFANG = hoher Einfluss)
2. <tone-context>      — Tonalitaet (optional)
3. <background-data>   — Dokumente, Kontext (MITTE)
4. <rules>             — Detaillierte Anweisungen (MITTE)
5. <examples>          — Few-Shot Beispiele (MITTE)
6. <conversation-history> — Chat-Verlauf (MITTE)
7. <the-ask>           — Die eigentliche Frage (ENDE = hoher Einfluss)
8. <thinking-instructions> — Chain of Thought (ENDE)
9. <output-format>     — Ausgabeformat (ENDE = hoher Einfluss)
```

**Warum diese Reihenfolge:** LLMs gewichten Anfang und Ende staerker als die Mitte. Kritische Anweisungen gehoeren an die Raender.

Quelle: Anthropic Prompt Template (youtube.com/watch?v=ysPbXH0LpIE), rekonstruiert in ai-hero-dev Exercise 05.01

### RAG (Retrieval-Augmented Generation)

1. **Retrieve:** Relevante Daten aus externer Quelle laden
2. **Augment:** In den Prompt einfuegen (als <background-data>)
3. **Generate:** LLM antwortet basierend auf dem Kontext

Kritische Regel: "Wenn die Frage nicht beantwortbar ist, sage das ehrlich" — verhindert Halluzinationen.

Quellen-Typen:
- Web Scraping (Tavily, Firecrawl)
- Vector Database (Pinecone, Chroma, pgvector)
- SQL/API (eigene DB)
- Dateisystem (fs.readFileSync)

### Chain of Thought (CoT)

LLM "denkt" bevor es antwortet — verbrennt Tokens fuer Planung, verbessert Ausfuehrung.

Zwei Varianten:
1. **Prompt-basiert:** `<thinking-instructions>` im Prompt
2. **Eingebaut:** Claude Adaptive Thinking / Extended Thinking

```xml
<thinking-instructions>
Think about your answer first. Consider knowledge dependencies —
pieces of knowledge that rely on other pieces.
Create a list in order of dependency.
</thinking-instructions>

<output-format>
Return a <thinking> block and then your answer (unwrapped).
</output-format>
```

### Claude 4.6 — Spezifische Hinweise

- **Adaptive Thinking:** `thinking: {type: "adaptive"}` — Claude entscheidet selbst wann/wie viel es denkt
- **Effort Parameter:** Steuert Denktiefe (low, medium, high, max)
- **Kein Prefill mehr:** Prefilled responses auf letztem Assistant Turn deprecated
- **Weniger Anti-Laziness Prompting noetig:** Claude 4.6 ist proaktiver als Vorgaenger
- **Overthinking moeglich:** Bei hohem Effort kann Claude zu ausfuehrlich werden

### Output-Kontrolle

- Positiv formulieren ("Write in prose paragraphs" statt "Don't use markdown")
- XML Tags fuer Format (`<smoothly_flowing_prose_paragraphs>`)
- Prompt-Stil an gewuenschten Output anpassen
- Claude 4.6 neigt zu LaTeX bei Mathe — explizit plain text anfordern wenn noetig

## AI SDK Prompt-API

```typescript
// Text Prompt (einfach)
await generateText({
  model,
  prompt: 'Erklaere Promises.',
});

// System + Text Prompt
await generateText({
  model,
  system: 'Du bist ein TypeScript-Experte.',
  prompt: 'Erklaere Generics.',
});

// Message Prompt (Chat)
await generateText({
  model,
  messages: [
    { role: 'user', content: 'Hallo!' },
    { role: 'assistant', content: 'Hi! Wie kann ich helfen?' },
    { role: 'user', content: 'Erklaere mir RAG.' },
  ],
});

// Multi-Modal (Bilder, PDFs, Audio)
await generateText({
  model,
  messages: [{
    role: 'user',
    content: [
      { type: 'text', text: 'Beschreibe das Bild.' },
      { type: 'image', image: fs.readFileSync('./bild.png') },
    ],
  }],
});
```

## Quellen

1. platform.claude.com — Prompting Best Practices (Claude 4.6)
2. youtube.com/watch?v=ysPbXH0LpIE — Anthropic Prompt Template
3. ai-sdk.dev/docs/foundations/prompts
4. ai-hero-dev Exercises 05.01-05.05
5. docs.anthropic.com/en/docs/build-with-claude/prompt-engineering

## Offene Fragen

- Wie unterscheidet sich Adaptive Thinking von Extended Thinking in der Praxis?
- Welche Prompt-Muster funktionieren besser mit Claude vs. GPT vs. Gemini?
- Wie baut man ein robustes RAG-System mit dem AI SDK? (Vector DB Integration)
