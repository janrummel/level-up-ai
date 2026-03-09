# Level 7: Streaming — Konsolidierte Fixes

> Datum: 2026-03-09 | Quellen: Expert Review + User Walkthrough

## P0 — Fachlich falsch (muss gefixt werden)

### Fix 1: Retry-Pattern verliert ersten Chunk
**Datei:** 05-error-handling.mdx (DE+EN), Schicht 4
**Problem:** `reader.read()` konsumiert den ersten Chunk, dann wird `result` zurueckgegeben. Der Caller verliert den ersten Chunk.
**Fix:** Hinweis einfuegen, dass das Pattern vereinfacht ist. Das `throw error` im onError-Callback entfernen (unnoetig). Alternativ: Pattern durch `result.text` Promise mit Timeout ersetzen — aber das aendert die Didaktik. Pragmatischer Fix: Warnhinweis + Kommentar.

## P1 — Anfaenger bleibt stecken (sollte gefixt werden)

### Fix 2: Dateinamen in allen TRY-Sections
**Dateien:** 02-05 (DE+EN)
**Problem:** Kein Dateiname in den TRY-Bloecken.
**Fix:** Vor jedem TRY-Code-Block: "Erstelle die Datei `<name>.ts`:"
- 7.1: `custom-data-parts.ts`
- 7.2: `message-metadata.ts`
- 7.3: `stream-transforms.ts`
- 7.4: `error-handling.ts`

### Fix 3: Ausfuehrungsbefehle in allen TRY-Sections
**Dateien:** 02-06 (DE+EN)
**Problem:** Kein `npx tsx` Befehl.
**Fix:** Nach der Checkliste: "Fuehre aus: `npx tsx <name>.ts`"

### Fix 4: Erwarteter Output bei Loesungen
**Dateien:** 02-05 (DE+EN)
**Problem:** Kein konkreter Terminal-Output.
**Fix:** Nach jeder Loesung einen Output-Block einfuegen.

### Fix 5: CLI vs. Web Abgrenzung
**Dateien:** 02-05 (DE+EN)
**Problem:** Walkthroughs zeigen Next.js/React, TRY ist CLI.
**Fix:** Vor Web-Framework Code-Bloecken im Walkthrough: "> **Web-App Kontext:** Dieser Code zeigt das Konzept in einer Next.js/React App. Deine TRY-Uebung arbeitet im Terminal."

## P2 — Nice-to-have (verbessert die Qualitaet)

### Fix 6: Level Complete — Emotionale Belohnung
**Datei:** 07-level-complete.mdx (DE+EN)
**Fix:** Achievement-Block am Anfang einfuegen.

### Fix 7: Briefing — Projektverzeichnis-Hinweis
**Datei:** 01-briefing.mdx (DE+EN)
**Fix:** Im Voraussetzungen-Abschnitt: Arbeitsverzeichnis-Hinweis.

### Fix 8: ai-hero-dev Exercise-Links pruefen
**Dateien:** 03-message-metadata.mdx, 04-stream-transforms.mdx (DE+EN)
**Problem:** 07.02 im Original ist "Stream Object", nicht "Message Metadata". 07.03 ist "Message Metadata", nicht "Stream Transforms".
**Fix:** Links korrigieren oder transparent machen.

## Zusammenfassung

| Prioritaet | Anzahl | Fix-Nummern |
|------------|--------|-------------|
| P0 | 1 | Fix 1 |
| P1 | 4 | Fix 2, 3, 4, 5 |
| P2 | 3 | Fix 6, 7, 8 |
| **Gesamt** | **8** | |
