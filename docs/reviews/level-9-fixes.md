# Fixes: Level 9 — Advanced Patterns

> Datum: 2026-03-09 | Konsolidiert aus Expert Review + User Walkthrough

## Uebersicht

| Prioritaet | Anzahl | Beschreibung |
|------------|--------|--------------|
| P0 (Critical) | 0 | — |
| P1 (Should fix) | 5 | Dateinamen+Befehle, erwarteter Output, `parameters`→`inputSchema`, Messages-Typ, "37 Challenges" |
| P2 (Nice-to-have) | 5 | Projektverzeichnis, Judge-Modell, Production-Guardrail-Hinweis, Reference-Sektion, Streaming-Rueckverweis |

---

## P1 Fixes (werden umgesetzt)

### Fix 1: Dateinamen + Ausfuehrungsbefehle in allen TRY-Sektionen

**Dateien:** 02-guardrails.mdx, 03-model-router.mdx, 04-comparing-outputs.mdx, 05-research-workflow.mdx (DE+EN = 8 Dateien)

**Aenderung:** Vor jedem TRY-Code-Block einfuegen:
- 9.1: `Erstelle **guardrails.ts** und fuehre aus: **npx tsx guardrails.ts**` / `Create **guardrails.ts** and run: **npx tsx guardrails.ts**`
- 9.2: `Erstelle **model-router.ts** und fuehre aus: **npx tsx model-router.ts**` / `Create **model-router.ts** and run: **npx tsx model-router.ts**`
- 9.3: `Erstelle **compare-outputs.ts** und fuehre aus: **npx tsx compare-outputs.ts**` / `Create **compare-outputs.ts** and run: **npx tsx compare-outputs.ts**`
- 9.4: `Erstelle **research-pipeline.ts** und fuehre aus: **npx tsx research-pipeline.ts**` / `Create **research-pipeline.ts** and run: **npx tsx research-pipeline.ts**`

### Fix 2: Erwarteter Output bei Loesungen

**Dateien:** 02-guardrails.mdx, 03-model-router.mdx, 04-comparing-outputs.mdx, 05-research-workflow.mdx (DE+EN = 8 Dateien)

**Aenderung:** Nach der Erklaerung in jeder Loesung einen Output-Block hinzufuegen.

### Fix 3: `parameters` → `inputSchema` in tool()-Aufrufen

**Dateien:** 05-research-workflow.mdx (DE+EN = 2 Dateien)

**Aenderung:** In allen `tool()`-Aufrufen `parameters` durch `inputSchema` ersetzen. Betrifft:
- Walkthrough Schicht 2: searchTool Definition
- TRY Loesung: searchTool Definition

### Fix 4: Messages-Array Typ korrigieren

**Dateien:** 05-research-workflow.mdx (DE+EN = 2 Dateien)

**Aenderung:** Von `Array<{ role: string; content: string }>` zu `any[]` aendern. Erklaerenden Kommentar hinzufuegen.

### Fix 5: "37 Challenges" → "41 Challenges"

**Dateien:** 07-level-complete.mdx (DE+EN = 2 Dateien)

**Aenderung:** "37 Challenges" durch "41 Challenges" ersetzen.

---

## P2 Fixes (empfohlen, nicht blockierend)

### Fix 6: Projektverzeichnis-Hinweis im Briefing

**Dateien:** 01-briefing.mdx (DE+EN = 2 Dateien)

**Aenderung:** In der "Voraussetzungen"-Sektion einfuegen:
- DE: "> **Projektverzeichnis:** Erstelle einen neuen Ordner `level-9-advanced/` und arbeite dort."
- EN: "> **Project directory:** Create a new folder `level-9-advanced/` and work there."

### Fix 7: Judge-Modell Hinweis in 9.3

**Dateien:** 04-comparing-outputs.mdx (DE+EN = 2 Dateien)

**Aenderung:** In Schicht 3 nach der Code-Block-Erklaerung einen Hinweis einfuegen:
- "Hinweis: Idealerweise nutzt Du als Judge ein Modell, das nicht gleichzeitig bewertet wird. In Production wuerdest Du Opus als Judge einsetzen. Hier nutzen wir Sonnet als pragmatische Wahl (Kostengruende)."

### Fix 8: Production-Guardrail-Hinweis in 9.1

**Dateien:** 02-guardrails.mdx (DE+EN = 2 Dateien)

**Aenderung:** Am Ende von Schicht 1 (Input Guards) einfuegen:
- "Hinweis: Diese Keyword-basierten Checks sind ein Startpunkt. In Production nutzt Du ML-basierte Classifier oder spezialisierte APIs (z.B. OpenAI Moderation API) fuer robustere Erkennung."

### Fix 9: Reference-Sektion erwaehnen in Level Complete

**Dateien:** 07-level-complete.mdx (DE+EN = 2 Dateien)

**Aenderung:** Nicht umgesetzt — Reference-Sektion ist noch nicht erstellt. Wird ergaenzt wenn die 9 Reference-Seiten existieren.

### Fix 10: Streaming-Rueckverweis in Boss Fight

**Dateien:** 06-boss-fight.mdx (DE+EN = 2 Dateien)

**Aenderung:** Bei Anforderung 7 (Streaming) einfuegen:
- "(Nutze `createDataStream` + `writeData` wie in Challenge 8.2)"

---

## Betroffene Dateien (Gesamt)

| Datei | Fixes |
|-------|-------|
| DE 01-briefing.mdx | P2-6 |
| DE 02-guardrails.mdx | P1-1, P1-2, P2-8 |
| DE 03-model-router.mdx | P1-1, P1-2 |
| DE 04-comparing-outputs.mdx | P1-1, P1-2, P2-7 |
| DE 05-research-workflow.mdx | P1-1, P1-2, P1-3, P1-4 |
| DE 06-boss-fight.mdx | P2-10 |
| DE 07-level-complete.mdx | P1-5 |
| EN 01-briefing.mdx | P2-6 |
| EN 02-guardrails.mdx | P1-1, P1-2, P2-8 |
| EN 03-model-router.mdx | P1-1, P1-2 |
| EN 04-comparing-outputs.mdx | P1-1, P1-2, P2-7 |
| EN 05-research-workflow.mdx | P1-1, P1-2, P1-3, P1-4 |
| EN 06-boss-fight.mdx | P2-10 |
| EN 07-level-complete.mdx | P1-5 |
