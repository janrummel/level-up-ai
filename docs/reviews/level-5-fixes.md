# Konsolidierte Fixes: Level 5 — Context Engineering

> Datum: 2026-03-09 | Basis: Expert Review + User Walkthrough

## Zusammenfassung

| Prioritaet | Anzahl | Status |
|-----------|--------|--------|
| P0 (FAIL) | 1 | Offen |
| P1 (Steckenbleiben) | 4 | Offen |
| P2 (Verbesserung) | 3 | Offen |

---

## P0 — Fachlich falsch / defekte Quellen

### P0-1: Defekte Anthropic-Quellen-URLs (alle 8 Dateien)

**Problem:** Anthropic Docs von `docs.anthropic.com` nach `platform.claude.com` migriert. Alle alten URLs geben 301 → 404.

**Fix:** URLs ersetzen:

| Alte URL | Neue URL | Betroffen |
|----------|----------|-----------|
| `docs.anthropic.com/en/docs/build-with-claude/prompt-engineering` | `platform.claude.com/docs/en/build-with-claude/prompt-engineering/overview` | 01, 02, 03, 07 |
| `docs.anthropic.com/.../prompt-engineering/use-examples` | `platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices` | 04 |
| `docs.anthropic.com/.../retrieval-augmented-generation` | `platform.claude.com/docs/en/build-with-claude/search-results` | 05, 07 |
| `docs.anthropic.com/.../prompt-engineering/chain-of-thought` | `platform.claude.com/docs/en/build-with-claude/prompt-engineering/claude-prompting-best-practices` | 06 |
| `docs.anthropic.com/.../extended-thinking` | `platform.claude.com/docs/en/build-with-claude/extended-thinking` | 06 |

Link-Texte anpassen:
- "Prompt Engineering Guide" → "Prompt Engineering Overview"
- "Use Examples" → "Prompting Best Practices (Examples)"
- "RAG Overview" → "Search Results (RAG)"
- "Chain of Thought Prompting" → "Prompting Best Practices (Chain of Thought)"

---

## P1 — Anfaenger bleibt stecken

### P1-1: Fehlende Dateinamen + Ausfuehrungsbefehle (5 Challenges + Boss Fight)

**Problem:** Kein TRY-Block nennt einen Dateinamen oder `npx tsx`-Befehl. Anfaenger weiss nicht wohin mit dem Code.

**Fix:** Vor jedem TRY-Code-Block einfuegen:

| Datei | Dateiname | Befehl |
|-------|-----------|--------|
| 02-the-template.mdx | `challenge-5-1.ts` | `npx tsx challenge-5-1.ts` |
| 03-basic-prompting.mdx | `challenge-5-2.ts` | `npx tsx challenge-5-2.ts` |
| 04-exemplars.mdx | `challenge-5-3.ts` | `npx tsx challenge-5-3.ts` |
| 05-retrieval.mdx | `challenge-5-4.ts` | `npx tsx challenge-5-4.ts` |
| 06-chain-of-thought.mdx | `challenge-5-5.ts` | `npx tsx challenge-5-5.ts` |
| 07-boss-fight.mdx | `boss-fight-5.ts` | `npx tsx boss-fight-5.ts` |

### P1-2: Fehlender erwarteter Output (5 Challenges + Boss Fight)

**Problem:** Nur Challenge 5.3 zeigt erwarteten Output (`// Erwartete Ausgabe: "neutral"`).

**Fix:** Nach jeder Loesung einen "Erwarteter Output"-Block einfuegen (ungefaehr, da LLM-Output variiert).

### P1-3: TODO-Kommentare im Template Literal (04-exemplars.mdx)

**Problem:** TRY-Starter-Code in 04-exemplars.mdx hat `// TODO`-Kommentare innerhalb eines Template-Literal-Strings (Zeile 159-162). Werden als Text an LLM geschickt.

**Fix:** TODOs vor den Code-Block als Markdown-Anweisungen verschieben.

### P1-4: "Anthropic Prompt Template" Zuschreibung (03-basic-prompting.mdx)

**Problem:** Die XML Tag-Namen (`<task-context>`, `<the-ask>`) werden als "das Anthropic Prompt Template" praesentiert, stammen aber aus dem ai-hero-dev Kurs.

**Fix:** "Das Anthropic Prompt Template" → "Ein Prompt Template basierend auf Anthropic Best Practices"

---

## P2 — Verbesserungen (nicht blockierend)

### P2-1: Level Complete ohne emotionale Belohnung (08-level-complete.mdx)

**Fix:** Glueckwunsch-Absatz am Anfang ergaenzen.

### P2-2: Projektverzeichnis-Hinweis (01-briefing.mdx)

**Fix:** Im Voraussetzungen-Abschnitt: "Du arbeitest weiterhin im Projektverzeichnis aus Level 1."

### P2-3: Hinweis system vs. prompt Parameter (03-basic-prompting.mdx)

**Fix:** Kurzer Hinweis dass `<task-context>` in Production im `system`-Parameter steht.
