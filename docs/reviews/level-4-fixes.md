# Level 4 Fixes — Persistence

> Datum: 2026-03-08
> Konsolidiert aus: level-4-expert-review.md + level-4-user-walkthrough.md

## Zusammenfassung

- **Expert-Review:** 1 FAIL / 4 WARN / 9 OK
- **User-Walkthrough:** 4 FAIL / 17 WARN / 63 OK
- **Fixes umgesetzt:** 1 P0, 4 P1, 3 P2 — alle in DE + EN

---

## P0 — Fachlich falsch / Code funktioniert nicht

### P0-1: Defekte Quellen-URL (A9)

**Problem:** `https://ai-sdk.dev/docs/ai-sdk-ui/chatbot-persistence` gibt 404 zurueck. Betrifft 5 von 7 Dateien (01, 03, 04, 05, 06).

**Fix:** URL geaendert zu `chatbot-message-persistence` in allen 10 Dateien (5 DE + 5 EN).

**Dateien:** 01-briefing, 03-chat-id, 04-persistence, 05-message-validation, 06-boss-fight (DE+EN)

---

## P1 — Anfaenger bleibt stecken

### P1-1: onFinish-Tabelle suggeriert Vollstaendigkeit (A8)

**Problem:** Die Property-Tabelle in 02-on-finish.mdx listet 4 Properties ohne zu erwaehnen, dass es weitere gibt (`steps`, `totalUsage`, etc.).

**Fix:** Text geaendert zu "Die wichtigsten Properties" + Link zur vollstaendigen API-Referenz ergaenzt.

**Dateien:** 02-on-finish.mdx (DE+EN)

### P1-2: Fehlende Dateinamen bei TRY-Aufgaben (B3)

**Problem:** Kein TRY-Block hat einen Dateinamen — der Lerner weiss nicht, welche Datei er erstellen soll.

**Fix:** Dateinamen ergaenzt: `challenge-4-1.ts`, `challenge-4-2.ts`, `challenge-4-3.ts`, `challenge-4-4.ts`, `boss-fight-4.ts`.

**Dateien:** 02-on-finish, 03-chat-id, 04-persistence, 05-message-validation, 06-boss-fight (DE+EN)

### P1-3: Fehlende Ausfuehrungsbefehle (B4)

**Problem:** Kein einziger `npx tsx`-Befehl in Level 4.

**Fix:** `npx tsx <dateiname>.ts` bei jeder TRY-Aufgabe und Boss Fight ergaenzt.

**Dateien:** 02-on-finish, 03-chat-id, 04-persistence, 05-message-validation, 06-boss-fight (DE+EN)

### P1-4: Fehlender erwarteter Output (B6)

**Problem:** Keine TRY-Loesung zeigt konkreten Terminal-Output.

**Fix:** Erwarteter Output-Block nach jeder Loesung ergaenzt (02, 03, 04). Challenge 05 hatte bereits Output als Code-Kommentare — ausreichend.

**Dateien:** 02-on-finish, 03-chat-id, 04-persistence (DE+EN)

---

## P2 — Verbesserbar aber funktional

### P2-1: Level Complete ohne emotionale Belohnung (A14)

**Problem:** Keine Glueckwunsch-Nachricht oder Achievement-Hinweis.

**Fix:** "Level 4 abgeschlossen!" Absatz mit motivierendem Text ergaenzt.

**Dateien:** 07-level-complete.mdx (DE+EN)

### P2-2: Projektverzeichnis unklar (B8)

**Problem:** Kein Hinweis, ob im bestehenden Verzeichnis weitergearbeitet wird.

**Fix:** Hinweis in Voraussetzungen: "Arbeite im selben Projektverzeichnis wie in Level 1 weiter".

**Dateien:** 01-briefing.mdx (DE+EN)

### P2-3: Zod-Rueckverweis auf Level 3 fehlt (B1)

**Problem:** `import { z } from 'zod'` wird eingefuehrt ohne Hinweis, dass Zod in Level 3 bereits genutzt wurde.

**Fix:** Hinweis ergaenzt: "Du kennst Zod bereits aus Level 3 (Tool Calling) — falls noch nicht installiert: `npm install zod`."

**Dateien:** 05-message-validation.mdx (DE+EN)

---

## Nicht adressierte WARNs (P2, nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-4-spezifische Fehler (konsistent mit Level 1-3)
2. `as const` in 04-persistence.mdx nicht erklaert (TypeScript-Feinheit)
3. `crypto.randomUUID()` Node.js v19-Anforderung nicht explizit als Mindestversion
4. COMBINE-Uebungen haben keinen erwarteten Output (Design-Entscheidung: offene Aufgaben)

---

## Sonderpruefung: Fehlende Lektion "Persistence in a Normalized DB"

Das Curriculum listet 5 Lektionen, Level 4 hat nur 4 Challenges. "Persistence in a Normalized DB" ist als Schicht 5 (Ausblick) in 04-persistence.mdx integriert. Bewertung: Vertretbar — eine eigene Lektion ohne echte DB-Anbindung waere zu abstrakt.
