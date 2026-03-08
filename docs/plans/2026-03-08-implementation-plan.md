# Level Up AI — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build all 9 levels of the "Level Up AI" learning path with the approved didactic concept (THINK→OVERVIEW→WHY→WALKTHROUGH→TRY→COMBINE).

**Architecture:** Each level consists of MDX files in `src/content/docs/de/level-N-*/`. Every challenge file follows the 6-step didactic structure. Research docs in `research/` provide the source material. Mermaid diagrams are used for visual support. EN translations follow after DE content is stable.

**Tech Stack:** Astro Starlight, MDX, Mermaid diagrams, TypeScript code examples

**Design Doc:** `docs/plans/2026-03-08-didaktik-konzept-design.md`

**Research Docs:**
- `research/block-1-ai-sdk-core.md` → Level 1, 7
- `research/block-2-prompting-context-engineering.md` → Level 2, 5
- `research/block-3-agents-tools-mcp.md` → Level 3, 8
- `research/block-4-evals-observability.md` → Level 6
- `research/block-5-production-patterns.md` → Level 4, 7, 8, 9

**Curriculum Reference:** `~/.claude/orchestrator/projects/ai-engineering-lernpfad.md` (full exercise list)

---

## Conventions

### File Naming

```
src/content/docs/de/level-N-<slug>/
  01-briefing.mdx          # sidebar order: 1
  02-<challenge-slug>.mdx  # sidebar order: 2 (Challenge N.1)
  03-<challenge-slug>.mdx  # sidebar order: 3 (Challenge N.2)
  ...
  NN-boss-fight.mdx        # sidebar order: last-1
  NN-level-complete.mdx    # sidebar order: last
```

### Challenge MDX Template

Every challenge file MUST follow this structure (from design doc):

```mdx
---
title: "Challenge N.X: [Name]"
description: [One sentence]
sidebar:
  order: [N]
---

## THINK

[1 question to the reader BEFORE explaining the concept]

## OVERVIEW

```mermaid
[Diagram showing where this concept fits in the bigger picture]
[Mark current concept with "Du bist HIER" or highlight color]
```

## WHY

**Ohne [Konzept]:** [What goes wrong — 1-2 sentences]

**Mit [Konzept]:** [What improves — 1-2 sentences]

[Optional: Vorher/Nachher code comparison]

## WALKTHROUGH

[Layer-by-layer explanation of the OVERVIEW diagram]
[Each layer: explanation + annotated code snippet]
[Comments mark the 2-3 critical lines]

## TRY

**Aufgabe:** [Clear task description]

```typescript
// Starter-Code mit TODOs
```

**Checkliste:**
- [ ] [Criterion 1]
- [ ] [Criterion 2]

<details>
<summary>Loesung anzeigen</summary>

```typescript
// Complete solution
```

</details>

## COMBINE

[OVERVIEW diagram reappears with new piece added]
[Exercise connecting this concept to previous challenges]
[Less guidance than TRY — progressive independence]

**Optional Stretch Goal:** [Bonus task]

## Quellen

- [Source 1](url)
- [Source 2](url)
```

### Briefing MDX Template

```mdx
---
title: "Level N: [Thema] — Briefing"
description: [One sentence]
sidebar:
  order: 1
---

## TL;DR

[30-second summary for advanced learners — what this level covers and why]

## Skill Tree

```mermaid
graph LR
  subgraph "Freigeschaltet"
    [previous levels]
  end
  subgraph "Aktuelles Level"
    [current level highlighted]
  end
  subgraph "Gesperrt"
    [future levels]
  end
```

## Was Du lernst

- [Bullet 1]
- [Bullet 2]
- [Bullet 3]

## Warum das wichtig ist

[2-3 sentences: concrete problem this level solves]

## Voraussetzungen

- [Prerequisite 1]
- [Prerequisite 2]

> **Skip-Hinweis:** [For advanced learners — when to skip]

## Challenges

| # | Challenge | Konzept |
|---|-----------|---------|
| 1 | [Name] | [What you learn] |
| 2 | [Name] | [What you learn] |
| ... | ... | ... |

## Boss Fight

[Brief description of the final challenge]
```

### Boss Fight MDX Template

```mdx
---
title: "Boss Fight: [Name]"
description: [One sentence]
sidebar:
  order: [N]
---

## Das Szenario

[Realistic scenario combining all level concepts]

```mermaid
[Diagram showing all building blocks together]
```

## Anforderungen

- [Requirement 1]
- [Requirement 2]
- [Requirement 3]

## Bewertungskriterien

- [ ] [Criterion 1]
- [ ] [Criterion 2]
- [ ] [Criterion 3]

[NO pre-built solution — learner must solve independently]
```

### Level Complete MDX Template

```mdx
---
title: "Level N Complete"
description: [One sentence]
sidebar:
  order: [N]
---

## Was Du gelernt hast

- [Concept 1]
- [Concept 2]
- [Concept 3]

## Aktualisierter Skill Tree

```mermaid
[Full skill tree with this level now unlocked]
```

## Naechstes Level

**Level N+1: [Name]** — [Preview sentence]
```

### Mermaid Color Coding (from design doc)

```
style nodeA fill:#4A90D9  %% Blau: Daten/Input
style nodeB fill:#27AE60  %% Gruen: Verarbeitung
style nodeC fill:#E67E22  %% Orange: Output
style nodeD fill:#E74C3C  %% Rot: Fehler/Risiko
```

### Quality Rules

1. Every code example must be complete and runnable (no `...` placeholders)
2. Every concept must link to official docs (ai-sdk.dev, docs.anthropic.com, etc.)
3. API signatures must be verified against current docs — never guess
4. Solutions in TRY sections must be tested locally before publishing
5. No concept without source from Rang 1-3 (see design doc)

---

## Task 0: Challenge Template Reference File

Create a reference file that serves as the canonical example for all future challenges.

**Files:**
- Create: `docs/templates/challenge-template.mdx`
- Create: `docs/templates/briefing-template.mdx`
- Create: `docs/templates/boss-fight-template.mdx`
- Create: `docs/templates/level-complete-template.mdx`

**Step 1:** Create `docs/templates/` directory

```bash
mkdir -p /Users/janrummel/Projects/level-up-ai/docs/templates
```

**Step 2:** Write `challenge-template.mdx` using the template from the Conventions section above. Include placeholder comments explaining what goes where.

**Step 3:** Write `briefing-template.mdx`, `boss-fight-template.mdx`, `level-complete-template.mdx` similarly.

**Step 4:** Verify the site still builds

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
```

**Step 5:** Commit

```bash
git add docs/templates/
git commit -m "docs: add MDX templates for challenge, briefing, boss fight, level complete"
```

---

## Task 1: Overhaul Level 5 — Context Engineering (Pilot)

Overhaul the existing Level 5 to match the new didactic concept. This is the pilot — it sets the quality bar for all other levels.

**Research source:** `research/block-2-prompting-context-engineering.md`
**ai-hero-dev exercises:** 05.01–05.05
**Existing files to overhaul:**
- `src/content/docs/de/level-5-context-engineering/01-briefing.mdx`
- `src/content/docs/de/level-5-context-engineering/02-the-template.mdx`
- `src/content/docs/de/level-5-context-engineering/03-basic-prompting.mdx`
- `src/content/docs/de/level-5-context-engineering/04-exemplars.mdx`
- `src/content/docs/de/level-5-context-engineering/05-retrieval.mdx`
- `src/content/docs/de/level-5-context-engineering/06-chain-of-thought.mdx`
- `src/content/docs/de/level-5-context-engineering/07-boss-fight.mdx`

### Step 1: Overhaul Briefing

Rewrite `01-briefing.mdx` to match briefing template:
- Add TL;DR box
- Add Skill Tree Mermaid diagram (Levels 1-4 unlocked, 5 current, 6-9 locked)
- Add "Was Du lernst" bullets
- Add "Warum das wichtig ist" section
- Add prerequisites
- Add skip hint
- Keep challenge table and boss fight preview

### Step 2: Overhaul Challenge 5.1 — The Template

Rewrite `02-the-template.mdx` with 6-step structure:
- **THINK:** "Wenn Du einen System Prompt schreibst — wie stellst Du sicher, dass er bei 20 verschiedenen API-Calls konsistent bleibt?"
- **OVERVIEW:** Mermaid flow showing Prompt Template → Variables → generateText → LLM
- **WHY:** Ohne Template: Copy-Paste, inkonsistent, schwer testbar. Mit Template: DRY, testbar, wartbar.
- **WALKTHROUGH:** Layer-by-layer through the Anthropic Prompt Template structure (task-context, rules, examples, output-format)
- **TRY:** Existing exercise (buildSystemPrompt) with TODOs — keep but add checklist
- **COMBINE:** "Nutze Dein Template mit streamText statt generateText"

### Step 3: Overhaul Challenge 5.2 — Basic Prompting

Rewrite `03-basic-prompting.mdx` with 6-step structure:
- **THINK:** "Was ist der Unterschied zwischen 'Fasse zusammen' und einem Prompt mit klarer Rolle, Kontext und Formatvorgabe?"
- **OVERVIEW:** Mermaid showing bad prompt vs. structured prompt → output quality
- **WHY:** Vage Prompts → unvorhersehbare Ergebnisse.
- **WALKTHROUGH:** Anthropic XML tags structure step by step
- **TRY:** Improve a bad prompt using XML tags
- **COMBINE:** Combine with Template from 5.1

### Step 4: Overhaul Challenge 5.3 — Exemplars

Rewrite `04-exemplars.mdx` with 6-step structure:
- **THINK:** "Wie wuerdest Du einem neuen Mitarbeiter einen Stil erklaeren — mit Regeln oder mit Beispielen?"
- **OVERVIEW:** Mermaid showing Prompt + Exemplars → consistent output
- **WHY:** Ohne Exemplars: LLM interpretiert Stil frei. Mit: Konsistente Ausgabe.
- **WALKTHROUGH:** Few-Shot pattern with `<examples>` XML tags
- **TRY:** Add exemplars to a classification prompt
- **COMBINE:** Add exemplars to the Template from 5.1

### Step 5: Overhaul Challenge 5.4 — Retrieval (RAG)

Rewrite `05-retrieval.mdx` with 6-step structure:
- **THINK:** "Was passiert, wenn Du ein LLM nach aktuellen Nachrichten fragst? Woher weiss es, ob seine Antwort stimmt?"
- **OVERVIEW:** Mermaid flow: User Question → Retrieve Docs → Inject into Prompt → LLM → Answer
- **WHY:** Ohne RAG: Halluzinationen bei Fachwissen. Mit RAG: Quellenbasierte Antworten.
- **WALKTHROUGH:** Layer by layer through RAG pattern with `<background-data>` XML tag
- **TRY:** Existing exercise restructured
- **COMBINE:** Build RAG + Template + Exemplars together

### Step 6: Overhaul Challenge 5.5 — Chain of Thought

Rewrite `06-chain-of-thought.mdx` with 6-step structure:
- **THINK:** "Wenn Du eine komplexe Rechenaufgabe loest — rechnest Du im Kopf oder schreibst Du Zwischenschritte auf?"
- **OVERVIEW:** Mermaid comparing direct answer vs. think-then-answer
- **WHY:** Ohne CoT: Fehler bei komplexen Aufgaben. Mit CoT: Nachvollziehbare Reasoning-Kette.
- **WALKTHROUGH:** `<thinking-instructions>` and `<output-format>` XML tags
- **TRY:** Add CoT to a multi-step analysis prompt
- **COMBINE:** Full prompt with Template + Exemplars + RAG + CoT

### Step 7: Overhaul Boss Fight

Rewrite `07-boss-fight.mdx` to match boss fight template:
- Add full Mermaid diagram showing all 5 concepts together
- Add realistic scenario (Documentation Assistant)
- Add clear requirements list
- Add evaluation criteria checklist
- Remove any pre-built solution

### Step 8: Add Level Complete page

Create `08-level-complete.mdx`:
- Summary of learned concepts
- Updated Skill Tree (Level 5 now unlocked)
- Preview of Level 6: Evals

### Step 9: Build and verify

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
```

Open in browser, check all pages render, Mermaid diagrams display correctly.

### Step 10: Commit

```bash
git add src/content/docs/de/level-5-context-engineering/
git commit -m "feat(level-5): overhaul context engineering to match didactic concept

THINK→OVERVIEW→WHY→WALKTHROUGH→TRY→COMBINE structure
Mermaid diagrams, progressive independence, quality sources"
```

---

## Task 2: Build Level 1 — AI SDK Basics

The entry point. Most important level — first impression.

**Research source:** `research/block-1-ai-sdk-core.md`
**ai-hero-dev exercises:** 01.01–01.13
**Directory:** `src/content/docs/de/level-1-ai-sdk-basics/`

**Challenges (6 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-what-is-ai-sdk.mdx | Was ist das AI SDK? | 01.01 | SDK Architektur, 3 Bibliotheken |
| 2 | 03-choosing-your-model.mdx | Dein erstes Modell | 01.04 | Provider-System, Model-Auswahl |
| 3 | 04-generating-text.mdx | Text generieren | 01.05 | generateText API |
| 4 | 05-streaming-text.mdx | Text streamen | 01.06–01.08 | streamText, UI Message Streams |
| 5 | 06-structured-output.mdx | Strukturierte Ausgabe | 01.11–01.12 | Output.object, Output.array, Zod |
| 6 | 07-system-prompts.mdx | System Prompts | 01.09 | system parameter, Rollenverhalten |
| — | 08-boss-fight.mdx | Boss Fight | — | CLI-Chat mit streamText + Output |
| — | 09-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Flow: User → AI SDK → Provider → LLM → Response

### Step 1: Create Briefing
- Skill Tree: Level 1 current, all others locked
- Prerequisites: Node.js, npm, TypeScript Grundkenntnisse, ChatGPT-Erfahrung

### Step 2: Create Challenge 1.1 — Was ist das AI SDK?
- THINK: "Wenn Du mit Claude, GPT und Gemini arbeiten willst — brauchst Du fuer jeden eine andere Library?"
- OVERVIEW: Box-Diagramm mit AI SDK Core / UI / RSC und Provider-Schicht
- WALKTHROUGH: Installation, Provider Setup, erster generateText Call
- TRY: Installiere AI SDK + Anthropic Provider, fuehre einen generateText Call aus

### Step 3: Create Challenge 1.2 — Dein erstes Modell
- THINK: "Woran entscheidest Du, welches LLM Du fuer eine Aufgabe nutzt?"
- OVERVIEW: Entscheidungsbaum: Aufgabe → Modell-Wahl
- WALKTHROUGH: Provider importieren, Modell instanziieren, Provider wechseln
- TRY: Wechsle den Provider von Anthropic zu OpenAI ohne den Rest zu aendern

### Step 4: Create Challenge 1.3 — Text generieren
- THINK: "Was bekommst Du zurueck, wenn Du ein LLM um Text bittest — nur den Text?"
- OVERVIEW: Flow: prompt → generateText → result (text, usage, finishReason)
- WALKTHROUGH: generateText Return-Objekt, Usage, finishReason
- TRY: Generiere Text und logge usage + finishReason

### Step 5: Create Challenge 1.4 — Text streamen
- THINK: "Warum siehst Du in ChatGPT die Antwort Wort fuer Wort statt alles auf einmal?"
- OVERVIEW: Sequenz-Diagramm: streamText Events (start, text-delta, finish)
- WALKTHROUGH: textStream, fullStream Events, toUIMessageStreamResponse
- TRY: Stream Text ins Terminal mit for await...of

### Step 6: Create Challenge 1.5 — Strukturierte Ausgabe
- THINK: "Wie bringst Du ein LLM dazu, JSON statt Freitext zurueckzugeben — zuverlaessig?"
- OVERVIEW: Flow: Zod Schema → Output.object → generateText → typisiertes Objekt
- WALKTHROUGH: Output.object, Output.array, Output.choice mit Zod
- TRY: Extrahiere strukturierte Daten aus einem Freitext (Name, Alter, Labels)

### Step 7: Create Challenge 1.6 — System Prompts
- THINK: "Was ist der Unterschied zwischen einem System Prompt und einem User Prompt?"
- OVERVIEW: Box-Diagramm: system + prompt → LLM Verhalten
- WALKTHROUGH: system parameter, Rollenverhalten, Tone Setting
- TRY: Erstelle System Prompts fuer verschiedene Rollen und vergleiche die Outputs

### Step 8: Create Boss Fight
- Szenario: Baue einen CLI-Chat der Text streamt UND auf Anfrage strukturierte JSON-Ausgabe liefert
- Diagramm: Alle 6 Bausteine zusammen

### Step 9: Create Level Complete
- Summary, Skill Tree (Level 1 unlocked), Preview Level 2

### Step 10: Build, verify, commit

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
git add src/content/docs/de/level-1-ai-sdk-basics/
git commit -m "feat(level-1): AI SDK Basics — 6 challenges, boss fight, complete"
```

---

## Task 3: Build Level 2 — LLM Fundamentals

**Research source:** `research/block-1-ai-sdk-core.md` (Token-related), `research/block-2-prompting-context-engineering.md`
**ai-hero-dev exercises:** 02.01–02.05
**Directory:** `src/content/docs/de/level-2-llm-fundamentals/`

**Challenges (4 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-tokens.mdx | Tokens | 02.01–02.03 | Tokenization, Token-Counting |
| 2 | 03-usage-tracking.mdx | Usage Tracking | 02.02 | usage Objekt, Kosten berechnen |
| 3 | 04-context-window.mdx | Context Window | 02.04 | Limits, Truncation, Strategie |
| 4 | 05-prompt-caching.mdx | Prompt Caching | 02.05 | Cache Tokens, Kostenreduktion |
| — | 06-boss-fight.mdx | Boss Fight | — | Token-Budget-Rechner |
| — | 07-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Box: Tokens, Context Window, Caching

### Steps: Analogous to Task 2 — create each file following the challenge template.

### Commit:

```bash
git add src/content/docs/de/level-2-llm-fundamentals/
git commit -m "feat(level-2): LLM Fundamentals — 4 challenges, boss fight, complete"
```

---

## Task 4: Build Level 3 — Agents & MCP

**Research source:** `research/block-3-agents-tools-mcp.md`
**ai-hero-dev exercises:** 03.01–03.07
**Directory:** `src/content/docs/de/level-3-agents/`

**Challenges (5 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-tool-calling.mdx | Tool Calling | 03.01–03.02 | tool(), Zod Schema, execute |
| 2 | 03-tools-in-frontend.mdx | Tools im Frontend | 03.03 | Tool Results anzeigen |
| 3 | 04-tool-loop-agent.mdx | Tool Loop Agent | 03.04 | ToolLoopAgent, stopWhen, Multi-Step |
| 4 | 05-mcp.mdx | MCP | 03.05–03.06 | createMCPClient, stdio, HTTP |
| 5 | 06-tool-approval.mdx | Tool Approval | 03.07 | needsApproval, Human-in-the-Loop |
| — | 07-boss-fight.mdx | Boss Fight | — | Research Agent mit MCP + Approval |
| — | 08-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Sequenz: LLM → Tool Call → Execute → Result → LLM Loop

### Steps: Analogous to Task 2.

### Commit:

```bash
git add src/content/docs/de/level-3-agents/
git commit -m "feat(level-3): Agents & MCP — 5 challenges, boss fight, complete"
```

---

## Task 5: Build Level 4 — Persistence

**Research source:** `research/block-5-production-patterns.md` (Persistence section)
**ai-hero-dev exercises:** 04.01–04.05
**Directory:** `src/content/docs/de/level-4-persistence/`

**Challenges (4 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-on-finish.mdx | On Finish | 04.01 | onFinish Callback, Usage speichern |
| 2 | 03-chat-id.mdx | Chat ID | 04.02 | Chat-Sessions verwalten |
| 3 | 04-persistence.mdx | Persistence | 04.03–04.04 | Messages in DB speichern/laden |
| 4 | 05-message-validation.mdx | Message Validation | 04.05 | Schema-Drift, Injection-Schutz |
| — | 06-boss-fight.mdx | Boss Fight | — | Persistenter Chat mit Reload |
| — | 07-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Flow: Chat → API → DB → Reload

### Steps: Analogous to Task 2.

### Commit:

```bash
git add src/content/docs/de/level-4-persistence/
git commit -m "feat(level-4): Persistence — 4 challenges, boss fight, complete"
```

---

## Task 6: Build Level 6 — Evals

**Research source:** `research/block-4-evals-observability.md`
**ai-hero-dev exercises:** 06.01–06.07
**Directory:** `src/content/docs/de/level-6-evals/`

**Challenges (5 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-evalite-basics.mdx | Evalite Basics | 06.01 | evalite(), .eval.ts, Scorers |
| 2 | 03-deterministic-eval.mdx | Deterministic Eval | 06.02 | Levenshtein, String-Matching |
| 3 | 04-llm-as-judge.mdx | LLM-as-a-Judge | 06.03 | createScorer, Factuality |
| 4 | 05-dataset-management.mdx | Dataset Management | 06.04–06.06 | Test-Daten, Critiquing |
| 5 | 06-langfuse.mdx | Langfuse Basics | 06.07 | Observability, Traces |
| — | 07-boss-fight.mdx | Boss Fight | — | Eval-Pipeline fuer Chat Titles |
| — | 08-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Flow: Task → Scorer → Score → Iterate

### Steps: Analogous to Task 2.

### Commit:

```bash
git add src/content/docs/de/level-6-evals/
git commit -m "feat(level-6): Evals — 5 challenges, boss fight, complete"
```

---

## Task 7: Build Level 7 — Streaming

**Research source:** `research/block-5-production-patterns.md` (Streaming section), `research/block-1-ai-sdk-core.md`
**ai-hero-dev exercises:** 07.01–07.04
**Directory:** `src/content/docs/de/level-7-streaming/`

**Challenges (4 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-custom-data-parts.mdx | Custom Data Parts | 07.01–07.02 | Strukturierte Daten im Stream |
| 2 | 03-message-metadata.mdx | Message Metadata | 07.03 | Zusaetzliche Daten an Messages |
| 3 | 04-stream-transforms.mdx | Stream Transforms | — | smoothStream, Custom Transforms |
| 4 | 05-error-handling.mdx | Error Handling | 07.04 | onError, Stream-Fehler abfangen |
| — | 06-boss-fight.mdx | Boss Fight | — | Real-Time Dashboard mit Custom Parts |
| — | 07-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Sequenz: Stream Events Timeline

### Steps: Analogous to Task 2.

### Commit:

```bash
git add src/content/docs/de/level-7-streaming/
git commit -m "feat(level-7): Streaming — 4 challenges, boss fight, complete"
```

---

## Task 8: Build Level 8 — Workflows

**Research source:** `research/block-5-production-patterns.md` (Workflows section), `research/block-3-agents-tools-mcp.md`
**ai-hero-dev exercises:** 08.01–08.04
**Directory:** `src/content/docs/de/level-8-workflows/`

**Challenges (4 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-workflow.mdx | Workflow | 08.01 | Sequentielle LLM-Calls |
| 2 | 03-streaming-to-frontend.mdx | Streaming to Frontend | 08.02 | Custom Data Parts im Workflow |
| 3 | 04-custom-loop.mdx | Custom Loop | 08.03 | Eigener Agent-Loop, State |
| 4 | 05-breaking-the-loop.mdx | Breaking the Loop | 08.04 | Abbruchbedingungen, Timeout |
| — | 06-boss-fight.mdx | Boss Fight | — | Multi-Step Research Pipeline |
| — | 07-level-complete.mdx | Level Complete | — | Summary + Skill Tree |

**Kern-Diagramm:** Flow: Multi-Step Agent Pipeline

### Steps: Analogous to Task 2.

### Commit:

```bash
git add src/content/docs/de/level-8-workflows/
git commit -m "feat(level-8): Workflows — 4 challenges, boss fight, complete"
```

---

## Task 9: Build Level 9 — Advanced Patterns

**Research source:** `research/block-5-production-patterns.md`
**ai-hero-dev exercises:** 09.01–09.04
**Directory:** `src/content/docs/de/level-9-advanced/`

**Challenges (4 per design doc):**

| # | File | Challenge | ai-hero-dev | Core Concept |
|---|------|-----------|-------------|--------------|
| — | 01-briefing.mdx | Briefing | — | Level overview |
| 1 | 02-guardrails.mdx | Guardrails | 09.01 | Input/Output Validation |
| 2 | 03-model-router.mdx | Model Router | 09.02 | Dynamische Modell-Auswahl |
| 3 | 04-comparing-outputs.mdx | Comparing Outputs | 09.03 | Multi-Model Parallel, Judge |
| 4 | 05-research-workflow.mdx | Research Workflow | 09.04 | End-to-End Agent Pipeline |
| — | 06-boss-fight.mdx | Boss Fight | — | Production-Ready AI System |
| — | 07-level-complete.mdx | Level Complete | — | Summary + Final Skill Tree |

**Kern-Diagramm:** Entscheidungsbaum: Model Router

### Steps: Analogous to Task 2.

### Commit:

```bash
git add src/content/docs/de/level-9-advanced/
git commit -m "feat(level-9): Advanced Patterns — 4 challenges, boss fight, complete"
```

---

## Task 10: Update Start Pages

After all levels are built, update the welcome and roadmap pages.

**Files:**
- Modify: `src/content/docs/de/start/welcome.mdx`
- Modify: `src/content/docs/de/start/roadmap.mdx`

### Step 1: Update welcome.mdx
- Update progress table to reflect all 9 levels
- Add explanation of the 6-step challenge structure (THINK→OVERVIEW→WHY→WALKTHROUGH→TRY→COMBINE)
- Update prerequisites

### Step 2: Update roadmap.mdx
- Replace ASCII skill tree with Mermaid diagram
- Show level dependencies and recommended paths
- Use color coding from design doc

### Step 3: Build, verify, commit

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
git add src/content/docs/de/start/
git commit -m "docs: update welcome and roadmap for all 9 levels"
```

---

## Task 11: EN Translations

After all DE content is stable and reviewed, create English versions.

**Strategy:** Translate level by level, starting with Level 1.

**Files per level:**
- Copy DE directory structure to `src/content/docs/en/level-N-*/`
- Translate content, keep code examples unchanged
- Keep technical terms in English (they already are)

### Step 1-9: Translate Level 1 through Level 9

For each level:
1. Copy DE files to EN directory
2. Translate prose sections (THINK, WHY, WALKTHROUGH explanations)
3. Keep code, Mermaid diagrams, and technical terms
4. Update internal links from `/de/` to `/en/`
5. Build and verify
6. Commit per level

### Step 10: Translate Start pages

Update existing `src/content/docs/en/start/welcome.mdx` and `roadmap.mdx`.

### Commit pattern:

```bash
git commit -m "feat(i18n): translate Level N to English"
```

---

## Task 12: Final Quality Check

### Step 1: Full site build

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
```

### Step 2: Link check

Verify all internal links work (no broken references between challenges).

### Step 3: Mermaid rendering check

Open each page in browser, verify all Mermaid diagrams render correctly.

### Step 4: Code example check

Verify all TypeScript code examples have correct imports and are syntactically valid.

### Step 5: Source check

Verify every challenge links to at least one official source (Rang 1-3).

### Step 6: Commit

```bash
git commit -m "chore: final quality review pass"
```

---

## Execution Order Summary

```
Task 0:  Templates (reference files)          — 15 min
Task 1:  Level 5 Overhaul (pilot)             — largest, sets quality bar
Task 2:  Level 1 (entry point)                — most important for new learners
Task 3:  Level 2 (LLM Fundamentals)           — builds on Level 1
Task 4:  Level 3 (Agents & MCP)               — builds on Level 1+2
Task 5:  Level 4 (Persistence)                — builds on Level 1
Task 6:  Level 6 (Evals)                      — builds on Level 1+5
Task 7:  Level 7 (Streaming)                  — builds on Level 1
Task 8:  Level 8 (Workflows)                  — builds on Level 3+7
Task 9:  Level 9 (Advanced Patterns)          — builds on everything
Task 10: Start Pages Update                   — after all levels exist
Task 11: EN Translations                      — after DE is stable
Task 12: Final Quality Check                  — last step
```

**Parallelization opportunities:**
- Tasks 3, 5, 7 are independent (all build only on Level 1) → can run in parallel after Task 2
- Task 4 only depends on Task 2 → can run parallel with Tasks 3, 5, 7
- EN translations (Task 11) can start per-level as soon as a DE level is stable
