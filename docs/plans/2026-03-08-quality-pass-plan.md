# Quality Pass — Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Systematischer Quality Review aller 9 Levels aus zwei Perspektiven (Experte + Anfaenger), danach Fixes umsetzen und Reference-Sektion erstellen.

**Architecture:** Jedes Level wird von zwei parallelen Agents reviewt — ein Experten-Agent (Didaktik, Progression, Erklaerqualitaet) und ein User-Walkthrough-Agent (Anfaenger-Tauglichkeit, Setup, fehlende Schritte). Findings werden als strukturierte Review-Docs gespeichert, dann priorisiert und gefixt. Abschliessend werden 9 Reference-Seiten erstellt.

**Tech Stack:** Astro Starlight, MDX, Mermaid, TypeScript — keine neuen Dependencies.

---

## Phase 1: Review-Framework definieren

### Task 1: Review-Checklisten erstellen

**Files:**
- Create: `docs/reviews/checklists.md`

Die zwei Review-Perspektiven mit konkreten Pruefpunkten:

#### Perspektive A: Experten-Review (Tutor/Paedagoge)

Prueft ob der Inhalt didaktisch sauber und fachlich korrekt ist.

| # | Kategorie | Prueffrage |
|---|-----------|-----------|
| A1 | **Didaktische Progression** | Baut jede Challenge logisch auf der vorherigen auf? Werden Konzepte eingefuehrt bevor sie genutzt werden? |
| A2 | **THINK-Qualitaet** | Aktiviert die Frage wirklich Vorwissen? Ist sie offen genug zum Nachdenken, aber spezifisch genug fuer das Thema? |
| A3 | **OVERVIEW-Klarheit** | Zeigt das Mermaid-Diagramm klar, wo das Konzept im Gesamtbild sitzt? Ist es lesbar und korrekt? |
| A4 | **WHY-Motivierung** | Wird das "Vorher/Nachher" ueberzeugend dargestellt? Versteht der Leser WARUM dieses Konzept wichtig ist? |
| A5 | **WALKTHROUGH-Tiefe** | Sind die Schichten (Layers) logisch aufgebaut? Fehlen Zwischenschritte? Ist der Code kommentiert und erklaert? |
| A6 | **TRY-Machbarkeit** | Ist die Aufgabe in 15-25 Min loesbar? Sind TODOs klar genug? Ist die Loesung korrekt und vollstaendig? |
| A7 | **COMBINE-Vernetzung** | Wird wirklich auf vorherige Challenges zurueckgegriffen? Oder ist es nur eine weitere isolierte Uebung? |
| A8 | **Code-Korrektheit** | Kompiliert der Code? Stimmen Imports, API-Signaturen, Typen? Passen die Modellnamen zur aktuellen API? |
| A9 | **Quellen-Qualitaet** | Sind Quellen aus Rang 1-3 (Offizielle Docs, getesteter Code, ai-hero-dev)? Sind Links erreichbar? |
| A10 | **Text-Grafik-Code-Balance** | Gibt es genug visuelle Elemente? Ist der Text zu lang ohne Auflockerung? Fehlen Diagramme? |
| A11 | **Fachliche Korrektheit** | Stimmen Erklaerungen fachlich? Keine veralteten APIs, falsche Parameter, irreführende Vereinfachungen? |
| A12 | **Boss Fight Integration** | Werden wirklich ALLE Challenges des Levels im Boss Fight kombiniert? Ist die Schwierigkeit angemessen? |
| A13 | **Briefing-Vollstaendigkeit** | Sind Lernziele, Voraussetzungen, Skip-Hinweis und Quellen vorhanden und korrekt? |
| A14 | **Level Complete** | Fasst die Zusammenfassung wirklich alle gelernten Konzepte zusammen? Stimmt der Skill Tree? |

#### Perspektive B: User-Walkthrough (technik-affiner Anfaenger)

Prueft ob ein TypeScript-Dev mit ChatGPT-Erfahrung das Level von Null durcharbeiten kann.

| # | Kategorie | Prueffrage |
|---|-----------|-----------|
| B1 | **Setup-Vollstaendigkeit** | Weiss der User nach dem Briefing exakt, was er installieren muss? (Node.js Version, npm/pnpm, API-Key besorgen) |
| B2 | **Erster Befehl** | Gibt es einen konkreten ersten Befehl zum Ausfuehren? (npm init, npm install, mkdir, etc.) |
| B3 | **Fehlende Mini-Steps** | Fehlen Schritte die ein Anfaenger braucht? (z.B. "erstelle eine Datei `index.ts`", "fuehre mit `npx tsx index.ts` aus") |
| B4 | **Ausfuehrungsbefehle** | Steht bei JEDEM Code-Beispiel, wie man es ausfuehrt? (`npx tsx datei.ts`, `npm run dev`, etc.) |
| B5 | **Environment Setup** | Ist klar, wie der API-Key gesetzt wird? (.env Datei? export? dotenv?) Funktioniert das plattformuebergreifend? |
| B6 | **Erwarteter Output** | Steht bei jedem ausfuehrbaren Beispiel, was der User im Terminal sehen sollte? |
| B7 | **Fehler-Szenarien** | Was passiert wenn der API-Key fehlt? Wenn das falsche Package installiert ist? Gibt es Troubleshooting-Hinweise? |
| B8 | **Projekt-Struktur** | Soll der User ein neues Projekt pro Challenge anlegen? Oder ein Projekt pro Level? Ist das klar kommuniziert? |
| B9 | **Package.json** | Braucht der User eine `tsconfig.json`? Welche `type` in `package.json`? Ist das dokumentiert? |
| B10 | **Copy-Paste-Tauglichkeit** | Kann der User die Code-Bloecke direkt kopieren und ausfuehren? Oder fehlen Imports/Variablen? |
| B11 | **Reihenfolge** | Ist die Reihenfolge der Schritte eindeutig? Keine impliziten Abhaengigkeiten? |
| B12 | **Begriffe** | Werden Fachbegriffe beim ersten Auftreten erklaert? (Provider, Model Instance, Streaming, Zod Schema) |

**Step 1:** Erstelle `docs/reviews/checklists.md` mit den obigen Tabellen.

**Step 2:** Commit.

```bash
git add docs/reviews/checklists.md
git commit -m "docs: add quality pass review checklists (expert + user walkthrough)"
```

---

## Phase 2: Level 1 Review (Pilot)

Level 1 wird als erstes reviewed — beide Perspektiven parallel. Findings werden als strukturiertes Dokument gespeichert.

### Task 2: Experten-Review Level 1

**Files:**
- Read (alle 9 Dateien):
  - `src/content/docs/de/level-1-ai-sdk-basics/01-briefing.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/02-what-is-ai-sdk.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/03-choosing-your-model.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/04-generating-text.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/05-streaming-text.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/06-structured-output.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/07-system-prompts.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/08-boss-fight.mdx`
  - `src/content/docs/de/level-1-ai-sdk-basics/09-level-complete.mdx`
- Create: `docs/reviews/level-1-expert-review.md`

**Agent-Prompt fuer Experten-Review:**

```
Du bist ein erfahrener AI-Engineering-Tutor und Didaktik-Experte.
Reviewe Level 1 (AI SDK Basics) anhand der Checkliste A1-A14.

Fuer JEDE Challenge (1.1 bis 1.6), das Briefing, den Boss Fight und Level Complete:
1. Pruefe jeden Checkpunkt A1-A14
2. Bewerte: OK / WARN (verbesserbar) / FAIL (muss gefixt werden)
3. Bei WARN/FAIL: Beschreibe das Problem und schlage einen konkreten Fix vor

Output-Format pro Seite:
## [Seitenname]
| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK/WARN/FAIL | ... |

Am Ende: Zusammenfassung mit priorisierten Fixes (FAIL zuerst, dann WARN).
```

**Step 1:** Starte einen Agent der alle 9 DE-Dateien liest und den Experten-Review durchfuehrt.

**Step 2:** Speichere das Ergebnis als `docs/reviews/level-1-expert-review.md`.

### Task 3: User-Walkthrough Level 1

**Files:**
- Read: dieselben 9 Dateien wie Task 2
- Create: `docs/reviews/level-1-user-walkthrough.md`

**Agent-Prompt fuer User-Walkthrough:**

```
Du bist ein technik-affiner Einsteiger: TypeScript-Entwickler mit 2 Jahren Erfahrung,
ChatGPT-Nutzer, aber noch nie programmatisch mit LLM-APIs gearbeitet.

Arbeite Level 1 Schritt fuer Schritt durch — vom Briefing bis Level Complete.
Stelle Dir vor, Du sitzt vor einem leeren Terminal und willst loslegen.

Fuer JEDE Seite, pruefe die Checkpunkte B1-B12:
- Wo bleibst Du haengen?
- Welcher Schritt fehlt?
- Welche Frage bleibt offen?

Output-Format pro Seite:
## [Seitenname]
| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK/WARN/FAIL | ... |

### Walkthrough-Protokoll
Beschreibe Deinen Weg durch die Seite als Anfaenger:
"Ich lese... Ich will jetzt... Aber ich weiss nicht..."

Am Ende: Top-5 Stellen wo ein Anfaenger aufgibt oder steckenbleibt.
```

**Step 1:** Starte einen Agent der den User-Walkthrough durchfuehrt.

**Step 2:** Speichere das Ergebnis als `docs/reviews/level-1-user-walkthrough.md`.

### Task 4: Review-Findings priorisieren und konsolidieren

**Files:**
- Read: `docs/reviews/level-1-expert-review.md`, `docs/reviews/level-1-user-walkthrough.md`
- Create: `docs/reviews/level-1-fixes.md`

**Step 1:** Konsolidiere alle FAIL und WARN Findings aus beiden Reviews.

**Step 2:** Priorisiere:
- **P0 (FAIL):** Fachlich falsch, Code kompiliert nicht, fehlende essentielle Schritte
- **P1 (WARN-hoch):** Anfaenger bleibt stecken, didaktische Luecke, fehlender Output
- **P2 (WARN-niedrig):** Verbesserbar aber funktional, Style-Issues, optionale Ergaenzungen

**Step 3:** Erstelle `docs/reviews/level-1-fixes.md` mit:
- Priorisierte Fix-Liste
- Betroffene Datei + Zeile
- Konkreter Fix-Vorschlag
- Geschaetzter Aufwand (S/M/L)

**Step 4:** Commit.

```bash
git add docs/reviews/
git commit -m "docs: level 1 quality review — expert + user walkthrough findings"
```

---

## Phase 3: Level 1 Fixes umsetzen

### Task 5: P0 Fixes (FAIL — muessen sofort gefixt werden)

**Files:** Abhaengig von den Findings aus Task 4.

**Step 1:** Lies `docs/reviews/level-1-fixes.md`.

**Step 2:** Setze alle P0-Fixes um — sowohl in DE als auch in EN.

**Step 3:** Commit pro logischer Aenderung.

### Task 6: P1 Fixes (WARN-hoch — Anfaenger-Blocker)

**Step 1:** Setze alle P1-Fixes um. Typische Fixes:

- **Fehlende Setup-Anleitung:** Am Anfang von Level 1 eine "Projekt aufsetzen" Box ergaenzen:
  ```
  mkdir level-1-exercises && cd level-1-exercises
  npm init -y
  npm install ai @ai-sdk/anthropic typescript tsx
  echo 'ANTHROPIC_API_KEY=sk-ant-...' > .env
  ```
- **Fehlende Ausfuehrungsbefehle:** Bei jedem TRY-Block `npx tsx datei.ts` ergaenzen
- **Fehlender erwarteter Output:** Beispiel-Terminal-Output nach jedem Code-Block
- **Fehlende Begriffserklarung:** Fachbegriffe beim ersten Auftreten erklaeren

**Step 2:** Gleiche Fixes in EN-Dateien nachziehen.

**Step 3:** Commit.

### Task 7: P2 Fixes (WARN-niedrig — optional)

**Step 1:** Setze P2-Fixes nach Aufwand-Nutzen-Abwaegung um.

**Step 2:** Commit.

### Task 8: Level 1 Re-Check

**Step 1:** Kurzer Gegen-Check: Sind alle P0/P1 Fixes korrekt umgesetzt?

**Step 2:** Build pruefen: `npm run build` im Projekt-Root.

**Step 3:** Commit + Projekt-State aktualisieren.

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
```

---

## Phase 4: Level 2-9 Review

Nach dem Pilot mit Level 1 wird das Review-Muster auf alle weiteren Levels angewendet. Pro Level werden beide Perspektiven parallel gestartet.

### Task 9-16: Review Level 2-9

Fuer jedes Level (2 bis 9) dieselbe Struktur wie Tasks 2-4:

| Task | Level | Verzeichnis | Dateien (DE) |
|------|-------|-------------|-------------|
| 9 | Level 2: LLM Fundamentals | `level-2-llm-fundamentals/` | 7 Dateien |
| 10 | Level 3: Agents & MCP | `level-3-agents/` | 8 Dateien |
| 11 | Level 4: Persistence | `level-4-persistence/` | 7 Dateien |
| 12 | Level 5: Context Engineering | `level-5-context-engineering/` | 8 Dateien |
| 13 | Level 6: Evals | `level-6-evals/` | 8 Dateien |
| 14 | Level 7: Streaming | `level-7-streaming/` | 7 Dateien |
| 15 | Level 8: Workflows | `level-8-workflows/` | 7 Dateien |
| 16 | Level 9: Advanced Patterns | `level-9-advanced/` | 7 Dateien |

**Pro Level:**

**Step 1:** Zwei Agents parallel starten:
- Agent A: Experten-Review (Checkliste A1-A14) → `docs/reviews/level-X-expert-review.md`
- Agent B: User-Walkthrough (Checkliste B1-B12) → `docs/reviews/level-X-user-walkthrough.md`

**Step 2:** Findings konsolidieren → `docs/reviews/level-X-fixes.md`

**Step 3:** P0 + P1 Fixes umsetzen (DE + EN).

**Step 4:** Commit pro Level.

**Level-uebergreifende Checks (zusaetzlich zu A1-A14, B1-B12):**

| # | Prueffrage |
|---|-----------|
| C1 | Baut Level N korrekt auf Level N-1 auf? Werden Konzepte aus vorherigen Levels referenziert? |
| C2 | Gibt es Wiederholungen zwischen Levels? (z.B. generateText wird in L1+L3 erklaert) |
| C3 | Stimmt die Schwierigkeitskurve? (L1-2 Blau, L3-5 Gruen, L6-7 Orange, L8-9 Rot) |
| C4 | Ist der Boss Fight deutlich schwerer als die einzelnen Challenges? |
| C5 | Passt die Level Complete Zusammenfassung zum tatsaechlichen Inhalt? |

---

## Phase 5: Reference-Sektion erstellen

Die Reference-Sidebar ist aktuell leer. 9 Seiten muessen erstellt werden.

### Task 17: Reference-Seiten planen

**Files:**
- Create: `docs/reviews/reference-plan.md`

Die 9 Reference-Themen aus dem Curriculum (Modul 99):

| # | Thema | Primaerquelle | Erscheint in Level |
|---|-------|---------------|--------------------|
| R1 | UI Messages vs Model Messages | ai-sdk.dev/docs/ai-sdk-ui | L1 (generateText), L4 (Persistence) |
| R2 | Defining Tools | ai-sdk.dev/docs/ai-sdk-core/tools | L3 (Tool Calling) |
| R3 | Consume Stream | ai-sdk.dev/docs/ai-sdk-core/streaming | L1 (streamText), L7 (Streaming) |
| R4 | Custom Data Parts Streaming | ai-sdk.dev/docs/ai-sdk-ui | L7 (Custom Data Parts) |
| R5 | Custom Data Parts Stream to Frontend | ai-sdk.dev/docs/ai-sdk-ui | L7-L8 |
| R6 | Custom Data Parts ID Reconciliation | ai-sdk.dev/docs/ai-sdk-ui | L7-L8 |
| R7 | Message Metadata | ai-sdk.dev/docs/ai-sdk-ui | L7 (Message Metadata) |
| R8 | Streaming Text Parts by Hand | ai-sdk.dev/docs/ai-sdk-core/streaming | L7-L8 |
| R9 | Start and Finish Parts | ai-sdk.dev/docs/ai-sdk-core/streaming | L7-L8 |

**Format jeder Reference-Seite:**
- Kein 6-Step-Pattern (Reference ≠ Challenge)
- Stattdessen: **Konzept → API-Signatur → Beispiel → Haeufige Fehler → Quellen**
- Kompakt, nachschlageorientiert, nicht lehrpfad-orientiert
- Cross-Links zu den Challenges wo das Konzept gelehrt wird

### Task 18-26: Reference-Seiten erstellen

Fuer jede der 9 Reference-Seiten:

**Files pro Seite:**
- Create: `src/content/docs/de/reference/0X-thema.mdx`
- Create: `src/content/docs/en/reference/0X-thema.mdx`

**Step 1:** Offizielle Docs lesen (Primaerquelle aus Tabelle oben).

**Step 2:** MDX-Seite schreiben mit:

```mdx
---
title: "[Thema]"
description: "[Kurzbeschreibung]"
sidebar:
  order: X
---

## Konzept

[2-3 Saetze: Was ist das? Wann braucht man es?]

## API

[Code-Block mit Signatur + Typen]

## Beispiel

[Minimales, lauffaehiges Beispiel]

## Haeufige Fehler

[2-3 typische Stolpersteine mit Loesung]

## Verwandte Challenges

- [Link zu Challenge wo Konzept gelehrt wird]

## Quellen

- [Offizielle Docs]
```

**Step 3:** EN-Version erstellen.

**Step 4:** Commit pro 2-3 Reference-Seiten.

```bash
git add src/content/docs/de/reference/ src/content/docs/en/reference/
git commit -m "docs: add reference pages R1-R3 (UI Messages, Defining Tools, Consume Stream)"
```

---

## Phase 6: Final Check

### Task 27: Gesamter Build + Cross-Check

**Step 1:** `npm run build` — keine Build-Fehler.

**Step 2:** Stichproben-Check:
- Funktionieren alle internen Links?
- Sind alle Mermaid-Diagramme korrekt?
- Stimmen DE und EN ueberein (Struktur, nicht woertlich)?

**Step 3:** Projekt-State aktualisieren: Quality Pass als erledigt markieren.

```bash
cd /Users/janrummel/Projects/level-up-ai && npm run build
```

---

## Zusammenfassung

| Phase | Tasks | Output |
|-------|-------|--------|
| 1: Framework | 1 | Review-Checklisten |
| 2: Level 1 Review | 2-4 | Expert-Review + User-Walkthrough + Fix-Liste |
| 3: Level 1 Fixes | 5-8 | Gefixte DE+EN Dateien, Build OK |
| 4: Level 2-9 Review | 9-16 | 8× Review + Fixes |
| 5: Reference-Sektion | 17-26 | 9 Reference-Seiten (DE+EN) |
| 6: Final Check | 27 | Build OK, Links OK, State aktualisiert |

**Geschaetzter Umfang:** 27 Tasks, Level 1 zuerst als Pilot.
