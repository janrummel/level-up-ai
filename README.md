# Level Up AI — Vom Vibe Coder zum AI Engineer

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)
[![Built with Starlight](https://astro.badg.es/v2/built-with-starlight/tiny.svg)](https://starlight.astro.build)

> **[janrummel.github.io/level-up-ai](https://janrummel.github.io/level-up-ai/)**

Ein kostenloser, interaktiver Lernpfad fuer AI Engineering mit dem [Vercel AI SDK v6](https://ai-sdk.dev). 9 Level, 41+ Challenges, Boss Fights und eine Referenz-Sektion — auf Deutsch und Englisch.

## Warum?

Vibe Coding bringt dich schnell zu einem Prototypen — aber nicht zu Production-Code. Dieser Kurs schliesst die Luecke: Du lernst Schritt fuer Schritt, wie AI-Anwendungen wirklich funktionieren und wie du sie robust baust.

## Fuer wen?

- **TypeScript-Entwickler**, die AI programmatisch in Projekte einbauen wollen
- **"Vibe Coder"**, die systematisch verstehen wollen was unter der Haube passiert
- **Voraussetzungen:** Node.js 20+, TypeScript-Grundkenntnisse, ein API Key (Anthropic, OpenAI oder Google)
- **Zeitaufwand:** ~25-50 Stunden im eigenen Tempo

## Inhalt

| Level | Thema | Challenges |
|-------|-------|------------|
| 1 | AI SDK Basics | generateText, streamText, Structured Output, System Prompts |
| 2 | LLM Fundamentals | Tokens, Usage, Context Window, Prompt Caching |
| 3 | Agents & MCP | Tool Calling, Message Parts, MCP stdio/HTTP, Tool Approval |
| 4 | Persistence | onFinish, Chat ID, DB Persistence, Message Validation |
| 5 | Context Engineering | Prompting, Exemplars, RAG, Chain of Thought |
| 6 | Evals | Evalite, Deterministic/LLM-as-Judge, Datasets, Langfuse |
| 7 | Streaming | Custom Data Parts, Message Metadata, Stream Transforms |
| 8 | Workflows | Pipelines, Streaming to Frontend, Custom Loops |
| 9 | Advanced Patterns | Guardrails, Model Router, Multi-Output, Research Workflow |
| Ref | Reference | UI/Model Messages, Tools, Streams, Data Parts, Metadata |

Jede Challenge folgt dem 6-Step-Pattern: **THINK → OVERVIEW → WHY → WALKTHROUGH → TRY → COMBINE**

## Lokale Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf localhost:4321
npm run build      # Production Build
```

## Tech Stack

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build), TypeScript, MDX, i18n (DE/EN)

## Quellen

Basiert auf dem Open-Source Curriculum von [ai-hero-dev/ai-sdk-v6-crash-course](https://github.com/ai-hero-dev/ai-sdk-v6-crash-course) und den offiziellen Docs von [ai-sdk.dev](https://ai-sdk.dev), [Anthropic](https://docs.anthropic.com), [Evalite](https://github.com/mattpocock/evalite) und [Langfuse](https://langfuse.com).

## Beitragen

Fehler gefunden? Verbesserungsvorschlag? Issues und Pull Requests sind willkommen.

## Verwandtes Projekt

**[AI Product Thinking](https://github.com/janrummel/ai-product-thinking)** — Das Gegenstueck fuer Product Manager: Ein AI PM Lernpfad mit Entscheidungsszenarien statt Code.

## Lizenz

MIT
