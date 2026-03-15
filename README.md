<p align="center">
  <img src="https://em-content.zobj.net/source/apple/391/rocket_1f680.png" width="80" alt="Level Up AI">
</p>

<h1 align="center">Level Up AI</h1>

<p align="center">
  <strong>From Vibe Coder to AI Engineer.</strong><br>
  9 levels. 41 challenges. 9 boss fights. Built on official sources and tested code.
</p>

<p align="center">
  <a href="https://janrummel.github.io/level-up-ai/">Website</a> ·
  <a href="#curriculum">Curriculum</a> ·
  <a href="#who-is-this-for">Who is this for</a> ·
  <a href="#run-locally">Run locally</a> ·
  <a href="#sources">Sources</a>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/levels-9-E67E22" alt="Levels">
  <img src="https://img.shields.io/badge/challenges-41+-F1C40F" alt="Challenges">
  <img src="https://img.shields.io/badge/languages-EN%20%2B%20DE-58a6ff" alt="Languages">
  <img src="https://img.shields.io/badge/license-MIT-lightgrey" alt="License">
</p>

---

## Why?

Vibe Coding gets you to a prototype fast — but not to production code. This course closes the gap: learn step by step how AI applications really work and how to build them robustly. Free, open source, bilingual.

## Curriculum

| Level | Topic | What you'll build |
|-------|-------|-------------------|
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

## How each challenge works

Every challenge follows the same 6-step pattern:

**THINK** (activate prior knowledge) → **OVERVIEW** (big picture) → **WHY** (the problem) → **WALKTHROUGH** (step by step) → **TRY** (hands-on) → **COMBINE** (connect the dots)

Each level ends with a **Boss Fight** — a project that combines all building blocks without a provided solution. You build it, you verify it, you own it.

## Who is this for?

- **TypeScript developers** who want to integrate AI into real projects
- **"Vibe Coders"** who want to systematically understand what happens under the hood
- **Prerequisites:** Node.js 20+, basic TypeScript, an API key (Anthropic, OpenAI, or Google)
- **Time:** ~25-50 hours at your own pace

## Built on

Based on the [Vercel AI SDK v6.x](https://ai-sdk.dev) (as of March 2026). 50+ generated SVG diagrams. Every code example tested. All concepts linked to official documentation.

## Run locally

```bash
npm install
npm run dev        # Dev server on localhost:4321
npm run build      # Production build
```

## Tech Stack

[Astro](https://astro.build) + [Starlight](https://starlight.astro.build) · TypeScript · MDX · i18n (EN/DE)

## Sources

Built on the open-source curriculum from [ai-hero-dev/ai-sdk-v6-crash-course](https://github.com/ai-hero-dev/ai-sdk-v6-crash-course) and official docs from [ai-sdk.dev](https://ai-sdk.dev), [Anthropic](https://docs.anthropic.com), [Evalite](https://github.com/mattpocock/evalite), and [Langfuse](https://langfuse.com).

## Related Project

**[AI Product Thinking](https://github.com/janrummel/ai-product-thinking)** — The counterpart for Product Managers: a free AI PM curriculum with decision scenarios instead of code.

## Contributing

Found an error? Have a suggestion? Issues and pull requests are welcome — whether it's a typo, a broken code example, a translation improvement, or a content correction.

## License

MIT
