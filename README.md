# Level Up AI — Vom Vibe Coder zum AI Engineer

Ein interaktiver Lernpfad fuer AI Engineering mit dem [Vercel AI SDK v6](https://ai-sdk.dev). 9 Level, 41+ Challenges, Boss Fights und eine Referenz-Sektion — auf Deutsch und Englisch.

## Was ist das?

Ein gamifiziertes Docs-Projekt (Astro Starlight), das die Kernkonzepte von AI Engineering abdeckt:

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

## Tech Stack

- [Astro](https://astro.build) + [Starlight](https://starlight.astro.build) (Docs Framework)
- TypeScript, MDX
- i18n: Deutsch (default) + English
- Mermaid Diagramme via [@pasqal-io/starlight-client-mermaid](https://github.com/pasqal-io/starlight-client-mermaid)

## Lokale Entwicklung

```bash
npm install
npm run dev        # Dev-Server auf localhost:4321
npm run build      # Production Build
npm run preview    # Production Preview
```

## Struktur

```
src/content/docs/
  de/                    # Deutsche Inhalte
  en/                    # Englische Inhalte
    level-1-ai-sdk-basics/
    level-2-llm-fundamentals/
    ...
    level-9-advanced/
    reference/
    start/
```

Jede Challenge folgt dem 6-Step-Pattern: **THINK → OVERVIEW → WHY → WALKTHROUGH → TRY → COMBINE**

## Quellen

Basiert auf dem Open-Source Curriculum von [ai-hero-dev/ai-sdk-v6-crash-course](https://github.com/ai-hero-dev/ai-sdk-v6-crash-course) und den offiziellen Docs von [ai-sdk.dev](https://ai-sdk.dev), [Anthropic](https://docs.anthropic.com), [Evalite](https://github.com/mattpocock/evalite) und [Langfuse](https://langfuse.com).

## Lizenz

Privates Projekt.
