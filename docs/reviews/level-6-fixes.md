# Konsolidierte Fixes: Level 6 — Evals

> Datum: 2026-03-09 | Basis: Expert Review + User Walkthrough

## Zusammenfassung

| Prioritaet | Anzahl | Status |
|-----------|--------|--------|
| P0 (FAIL) | 4 | Erledigt |
| P1 (Steckenbleiben) | 4 | Erledigt |
| P2 (Verbesserung) | 4 | Erledigt |

---

## P0 — Fachlich falsch / Blocker

### P0-1: OPENAI_API_KEY Setup fehlt komplett (01, 02, 04, 07)

**Problem:** Level 6 wechselt von Anthropic zu OpenAI als Provider. Kein `.env`-Setup, kein `export`-Befehl, kein Hinweis auf den Provider-Wechsel. Anfaenger wird beim ersten LLM-Call blockiert.

**Fix:** Im Briefing (01) einen Hinweis-Block einfuegen:
- Erklaeren warum OpenAI (Evalite-Beispiele und Autoevals nutzen OpenAI, gpt-4o eignet sich gut als Judge)
- `.env`-Setup: `OPENAI_API_KEY=sk-...`
- Link zu OpenAI API Key Seite

### P0-2: pnpm vs. npm nicht erklaert (01, 02)

**Problem:** Ploetzlicher Wechsel zu `pnpm` ohne Erklaerung. Fruehere Levels nutzen `npm`/`npx`.

**Fix:** Im Briefing (01) kurzen Hinweis einfuegen:
- Evalite nutzt pnpm — `npm install -g pnpm` falls noch nicht installiert
- Alternative: `npm install -D` funktioniert auch, aber Evalite-Docs nutzen pnpm

### P0-3: Vollstaendige Paketliste fehlt (02, 04, 07)

**Problem:** `zod`, `ai`, `@ai-sdk/openai` werden in Imports verwendet aber nie als Install-Befehl gezeigt.

**Fix:** In 02-evalite-basics.mdx den Install-Befehl erweitern:
`pnpm add -D evalite vitest autoevals ai @ai-sdk/openai zod`

### P0-4: Grade E Score-Skala Tabelle falsch (04)

**Problem:** Tabelle sagt Grade E = 0.0 "Antwort hat nichts mit der Frage zu tun". Code sagt E = 1.0. Braintrust-Original: E = "Differences don't matter for factuality" (positiv, ~1.0).

**Fix:** Tabelle korrigieren:
- E: Score 1.0, Beschreibung "Irrelevanter Unterschied — Antworten unterscheiden sich, aber die Unterschiede sind fuer die Faktizitaet nicht relevant"
- Reihenfolge in Tabelle anpassen: A(niedrigster Score) bis E(hoechster Score) oder umgekehrt konsistent machen

---

## P1 — Anfaenger bleibt stecken

### P1-1: Fehlende Dateinamen + Ausfuehrungsbefehle (02, 03, 04, 05, 07)

**Problem:** TRY-Sections nennen keinen Dateinamen und keinen `pnpm eval:dev`-Befehl.

**Fix:** Vor jedem TRY-Code-Block einfuegen:

| Datei | Dateiname | Befehl |
|-------|-----------|--------|
| 02-evalite-basics.mdx | `hello.eval.ts` | `pnpm eval:dev` |
| 03-deterministic-eval.mdx | `capitals.eval.ts` | `pnpm eval:dev` |
| 04-llm-as-judge.mdx | `factuality.eval.ts` | `pnpm eval:dev` |
| 05-dataset-management.mdx | `dataset.eval.ts` | `pnpm eval:dev` |
| 07-boss-fight.mdx | `chat-titles.eval.ts` | `pnpm eval:dev` |

### P1-2: Levenshtein beim ersten Auftreten nicht erklaert (02)

**Problem:** `Levenshtein` wird in 6.1 Schicht 3 importiert, aber erst in 6.2 als "Edit-Distanz" erklaert.

**Fix:** Beim ersten Import in 02 einen Inline-Kommentar oder Satz einfuegen: "Levenshtein misst die Edit-Distanz — wie viele Zeichenaenderungen noetig sind, um vom Output zum Expected zu kommen."

### P1-3: Projekt-Setup unklar (01, 02)

**Problem:** Unklar ob neues Projekt oder existierendes erweitern. Keine `tsconfig.json`-Erwaehnung.

**Fix:** Im Briefing (01) Voraussetzungen-Block ergaenzen:
- "Erstelle ein neues Projektverzeichnis fuer dieses Level oder arbeite im bestehenden Projekt weiter"
- tsconfig.json Hinweis in 02

### P1-4: Langfuse zeigt manuelle SDK-Variante statt OTel (06)

**Problem:** OVERVIEW erwaehnt OpenTelemetry, Code zeigt manuelle `Langfuse()`-Variante.

**Fix:** Klarstellung einfuegen: "Dieser Code zeigt die manuelle Variante, um die Konzepte explizit zu machen. In Production wuerdest Du die OpenTelemetry-basierte Integration nutzen (`LangfuseExporter`)."

---

## P2 — Verbesserungen (nicht blockierend)

### P2-1: Level Complete ohne emotionale Belohnung (08)

**Fix:** Glueckwunsch-Block am Anfang einfuegen.

### P2-2: Boss Fight erwaehnt nicht dass Langfuse fehlt (07)

**Fix:** Satz einfuegen: "Langfuse (Challenge 6.5) wuerdest Du in Production ergaenzen — hier fokussieren wir auf die Eval-Pipeline."

### P2-3: OpenAI als Judge-Provider nicht erklaert (04)

**Fix:** Kurze Erklaerung: "Wir nutzen `gpt-4o` als Judge-Modell — es eignet sich besonders gut fuer nuancierte inhaltliche Bewertungen."

### P2-4: Erwarteter Output vage (02, 03, 05)

**Fix:** Konkretere Output-Angaben nach TRY-Loesungen einfuegen.
