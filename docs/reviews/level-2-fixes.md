# Level 2: LLM Fundamentals — Konsolidierte Fixes

> Datum: 2026-03-08 | Basis: Expert-Review (2 FAIL, 5 WARN) + User-Walkthrough (2 FAIL, 5 WARN)

## Zusammenfassung

| Prioritaet | Anzahl | Status |
|-----------|--------|--------|
| P0 (fachlich falsch) | 3 | DONE |
| P1 (Anfaenger blockiert) | 1 (betrifft 5 Dateien) | DONE |
| P2 (WARN, verbesserbar) | 6 | DONE |

---

## P0 — Fachlich falsch (MUST FIX)

### P0-1: `experimental_providerMetadata` statt `providerMetadata`
- **Datei:** 03-usage-tracking.mdx (DE+EN), Schicht 3
- **Problem:** In AI SDK v6 wurde der `experimental_`-Prefix entfernt. Text sagt "Ab AI SDK v6" und nutzt gleichzeitig den veralteten Namen.
- **Fix:** `experimental_providerMetadata` → `providerMetadata`

### P0-2: `onFinish` bei `generateText` ist kein dokumentierter Parameter
- **Datei:** 03-usage-tracking.mdx (DE+EN), Schicht 4
- **Problem:** `onFinish` existiert bei `streamText`, nicht bei `generateText`. Code vermittelt falsches API-Bild.
- **Fix:** Schicht 4 umschreiben — Session-Tracking nach dem `await` auf `result.usage`, nicht via Callback.

### P0-3: Token-Schaetzung im Prompt-Caching-Walkthrough falsch
- **Datei:** 05-prompt-caching.mdx (DE+EN), Schicht 3, Kommentar Zeile 118
- **Problem:** Kommentar behauptet ~200 Woerter = "weit ueber 1024 Tokens". Korrekt: ~260-350 Tokens.
- **Fix:** Kommentar korrigieren — der Prompt ist fuer die Demonstration der Mechanik gedacht, nicht als Cache-eligibles Beispiel. Klarstellen dass der TRY-Prompt laenger sein muss.

---

## P1 — Anfaenger blockiert (MUST FIX)

### P1-1: Fehlende Dateinamen und Ausfuehrungsbefehle
- **Dateien:** 02-tokens.mdx, 03-usage-tracking.mdx, 04-context-window.mdx, 05-prompt-caching.mdx, 06-boss-fight.mdx (DE+EN)
- **Problem:** Level 1 hatte bei jeder Loesung Dateiname + `npx tsx`. Level 2 laesst beides komplett weg.
- **Fix:** In jeder TRY-Sektion und bei jeder Loesung ergaenzen:
  - 02: `challenge-2-1.ts` / `npx tsx challenge-2-1.ts`
  - 03: `challenge-2-2.ts` / `npx tsx challenge-2-2.ts`
  - 04: `challenge-2-3.ts` / `npx tsx challenge-2-3.ts`
  - 05: `challenge-2-4.ts` / `npx tsx challenge-2-4.ts`
  - 06: `boss-fight-2.ts` / `npx tsx boss-fight-2.ts`

---

## P2 — Verbesserbar (SELECTED FIXES)

### P2-1: Boss Fight propagiert `onFinish`-Fehler
- **Datei:** 06-boss-fight.mdx (DE+EN), Hinweis 3
- **Fix:** `onFinish`-Referenz entfernen

### P2-2: COMBINE-Uebungen referenzieren `onFinish`
- **Datei:** 03-usage-tracking.mdx (DE+EN), COMBINE Punkt 3
- **Fix:** `onFinish` durch "nach dem `await`" ersetzen

### P2-3: Projektverzeichnis unklar
- **Datei:** 01-briefing.mdx (DE+EN)
- **Fix:** Hinweis ergaenzen: "Arbeite im selben Projektverzeichnis wie Level 1 weiter"

### P2-4: Level Complete ohne emotionale Belohnung
- **Datei:** 07-level-complete.mdx (DE+EN)
- **Fix:** Einleitenden Glueckwunsch-Satz ergaenzen

### P2-5: Fachbegriffe nicht erklaert
- **Dateien:** 04-context-window.mdx (Truncation), 05-prompt-caching.mdx (Break-Even, TTL)
- **Fix:** Bei erster Verwendung in Klammern erklaeren

### P2-6: Erwarteter Output bei TRY-Loesungen
- **Dateien:** 02-05 (DE+EN)
- **Fix:** Nach jeder Loesung einen "Erwarteter Output (ungefaehr)" Block ergaenzen
