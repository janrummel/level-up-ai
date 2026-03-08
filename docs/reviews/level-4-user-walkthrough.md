# Level 4: Persistence — User-Walkthrough

> Datum: 2026-03-08 | Reviewer: Agent B (Anfaenger-Perspektive)
> Perspektive: TypeScript-Entwickler mit ChatGPT-Erfahrung, kein AI SDK Experte. Hat Level 1-3 durchgearbeitet. Arbeitet Level 4 von Null durch.

## Zusammenfassung

**4 FAIL / 17 WARN / 63 OK** (ueber 7 Dateien x 12 Pruefpunkte = 84 Bewertungen)

Level 4 ist inhaltlich gut aufgebaut: Die vier Bausteine (onFinish, Chat ID, Persistence, Validation) werden logisch aufeinander aufgebaut und in der Boss Fight kombiniert. Die Walkthrough-Erklaerungen sind klar und die Code-Beispiele nachvollziehbar. Die bekannten P1-Patterns aus Level 1-3 setzen sich aber fort: Fehlende Dateinamen, fehlende Ausfuehrungsbefehle (`npx tsx ...`), fehlender erwarteter Terminal-Output bei TRY-Aufgaben und fehlendes Troubleshooting. Neu in Level 4: Die Challenge 05 (Message Validation) fuehrt `zod` ein, ohne einen `npm install zod`-Befehl zu zeigen — allerdings wurde Zod bereits in Level 1 oder 3 genutzt, das ist aber nirgends explizit bestaetigt.

### Kritische Findings

1. **P1: Fehlende Dateinamen und Ausfuehrungsbefehle in ALLEN Challenges und Boss Fight** — Wie in Level 1-3 fehlen durchgaengig Dateinamen (`challenge-4-1.ts`) und Ausfuehrungsbefehle (`npx tsx challenge-4-1.ts`). Der Lerner weiss nicht, wohin mit dem Code und wie er ihn ausfuehrt.

2. **P1: Fehlender erwarteter Output bei allen TRY-Aufgaben** — Kein TRY und keine Loesung zeigt konkreten Terminal-Output. Die Loesungen in den `<details>`-Bloecken haben zwar Kommentare wie `// → "Loaded 2 messages"`, aber nur in den Walkthrough-Code-Beispielen, nicht bei den eigentlichen TRY-Aufgaben. Der Lerner weiss nicht, ob sein Code korrekt funktioniert.

3. **P1: Kein Troubleshooting in Level 4** — Keine Fehler-Szenarien dokumentiert. Typische Fehler wie `ANTHROPIC_API_KEY` nicht gesetzt, `zod` nicht installiert, `crypto.randomUUID()` auf aelteren Node-Versionen nicht verfuegbar, oder `onFinish` asynchron missverstanden (async Save in onFinish) werden nicht behandelt.

4. **P2: Projektverzeichnis weiterhin unklar** — Kein Hinweis, ob im Level-1-Verzeichnis weitergearbeitet wird oder ein neues Verzeichnis angelegt werden soll.

5. **P2: npm install fuer zod nicht explizit** — In Challenge 4.4 wird `import { z } from 'zod'` eingefuehrt. Zod wurde in Level 3 (Tool Calling mit Zod Schemas) bereits verwendet, aber es gibt keinen expliziten Rueckverweis ("zod wurde in Level 3 installiert"). Ein Anfaenger, der sich nicht erinnert, koennte unsicher sein.

---

## Detail-Befunde je Datei

### 01-briefing.mdx

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Voraussetzungen klar: Level 1 (generateText, streamText, Callbacks), TypeScript Grundkenntnisse, API-Grundverstaendnis. Keine neuen Pakete auf Briefing-Ebene angekuendigt. |
| B2 | OK | Kein neues Setup noetig auf der Briefing-Seite. |
| B3 | OK | Briefing-Seite — keine Mini-Steps noetig. |
| B4 | OK | Kein ausfuehrbarer Code auf der Briefing-Seite. |
| B5 | OK | Keine neuen Environment Variables noetig. |
| B6 | OK | Kein ausfuehrbarer Code. |
| B7 | WARN | Kein Troubleshooting auf Briefing-Ebene. Ein Hinweis wie "Fuer Challenge 4.4 brauchst Du `zod` — falls noch nicht installiert, wird das dort erklaert" waere hilfreich. |
| B8 | WARN | Wie in Level 2 und 3: Kein Hinweis ob neues Projektverzeichnis oder Weiterarbeit im bestehenden Verzeichnis. |
| B9 | OK | Keine neue Konfiguration auf Briefing-Ebene. |
| B10 | OK | Kein kopierbarer Code. |
| B11 | OK | Challenges-Reihenfolge klar: 4.1 bis 4.4, dann Boss Fight. CardGrid zeigt die Reihenfolge. |
| B12 | OK | "onFinish Callback", "Chat ID", "Persistence", "Message Validation" werden als Lernziele positioniert. "Persistence" wird gut metaphorisch erklaert ("Goldfish — kein Gedaechtnis"). |

### 02-on-finish.mdx (Challenge 4.1)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete noetig. `generateText` aus `'ai'`, `anthropic` aus `'@ai-sdk/anthropic'` — beides in Level 1 installiert. |
| B2 | OK | Kein neuer Installationsbefehl noetig. |
| B3 | FAIL | **Kein Dateiname angegeben.** TRY-Block sagt nicht "Erstelle `challenge-4-1.ts`". Kein Ausfuehrungsbefehl (`npx tsx challenge-4-1.ts`) vorhanden. Der Lerner hat TODO-Kommentare, weiss aber nicht, welche Datei er erstellen soll. |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** Weder beim TRY noch bei der Loesung steht, wie man den Code ausfuehrt. |
| B5 | OK | Keine neuen Environment Variables. `ANTHROPIC_API_KEY` aus Level 1 reicht. |
| B6 | WARN | Walkthrough-Code zeigt erwartete Werte als Kommentare (z.B. `// ← Wird nach Completion aufgerufen`). Aber die TRY-Loesung zeigt keinen konkreten Terminal-Output. Der Lerner weiss nicht, wie ein korrektes Audit-Log im Terminal aussieht. Die COMBINE-Uebung hat ebenfalls keinen erwarteten Output. |
| B7 | WARN | Kein Troubleshooting. Typische Fragen: (1) Ist `onFinish` synchron oder asynchron? (2) Was passiert, wenn der `onFinish`-Code einen Fehler wirft — wird die Exception verschluckt? (3) Kann man `await` im `onFinish` nutzen (z.B. fuer echtes DB-Speichern)? |
| B8 | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration noetig. |
| B10 | OK | Code-Bloecke haben vollstaendige Imports. TRY-Aufgabe als TODO-Kommentare. Loesung kopierbar und lauffaehig. |
| B11 | OK | Walkthrough baut logisch auf: Schicht 1 (Grundlagen) → Schicht 2 (Timing) → Schicht 3 (Use Cases) → Schicht 4 (streamText-Variante). Sehr gut strukturiert. |
| B12 | OK | "onFinish", "usage", "finishReason", "Completion" werden im Kontext erklaert. Property-Tabelle mit Typen ist hilfreich. |

### 03-chat-id.mdx (Challenge 4.2)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete. `crypto.randomUUID()` ist eingebaut. |
| B2 | OK | Kein neuer Installationsbefehl. |
| B3 | FAIL | **Kein Dateiname und kein Ausfuehrungsbefehl.** TRY-Block sagt nicht, welche Datei erstellt werden soll. Kein `npx tsx`-Kommando. |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** |
| B5 | OK | Keine neuen Environment Variables. Diese Challenge macht keine LLM-Calls, nur In-Memory-Operationen. |
| B6 | WARN | Walkthrough zeigt erwartete Ausgaben als Kommentare (z.B. `// chat1 hat 2 Messages, chat2 hat 1 Message — sauber getrennt`). Aber die TRY-Loesung zeigt keinen konkreten Terminal-Output. Der Lerner sieht nicht, was `console.log` genau ausgibt. Die Loesung in `<details>` hat Kommentare nach den console.log-Zeilen, aber keinen zusammenhaengenden erwarteten Output-Block. |
| B7 | WARN | Kein Troubleshooting. Typische Frage: `crypto.randomUUID()` ist erst ab Node.js v19 verfuegbar — was wenn der Lerner eine aeltere Version hat? Kein Hinweis darauf. |
| B8 | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Code kopierbar. Imports nicht noetig (nur `crypto`, global verfuegbar). TRY-Aufgabe als TODOs. Loesung direkt lauffaehig. |
| B11 | OK | Logischer Aufbau: ID generieren → mitschicken → Backend lesen → mehrere Chats verwalten. COMBINE referenziert klar Challenge 4.1 (onFinish). |
| B12 | OK | "UUID", "Session", `crypto.randomUUID()`, "Chat ID" werden erklaert. Der Hinweis auf UUID-Kollisionswahrscheinlichkeit (2^122) ist ein nettes Detail. |

### 04-persistence.mdx (Challenge 4.3)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete. `generateText` aus `'ai'`, `anthropic` aus `'@ai-sdk/anthropic'`. Map als DB-Ersatz. |
| B2 | OK | Kein neuer Installationsbefehl. |
| B3 | WARN | **Kein Dateiname angegeben.** TRY-Block hat keinen Dateinamen. Kein Ausfuehrungsbefehl. Allerdings: Der Code ist so umfangreich, dass der Lerner vermutlich eine Datei anlegt — aber welche? `challenge-4-3.ts`? `persistence.ts`? Unklar. |
| B4 | WARN | **Kein `npx tsx`-Kommando.** Der Code macht echte LLM-Calls, der Lerner muss ihn ausfuehren koennen. |
| B5 | OK | Keine neuen Environment Variables. |
| B6 | WARN | Walkthrough zeigt Kommentare mit erwarteten Werten (z.B. `// → "Loaded 2 messages"`). Aber weder TRY noch Loesung zeigen konkreten Terminal-Output-Block. Der Lerner weiss nicht, ob 4 Messages am Ende korrekt sind oder nicht (steht nur in der Checkliste, nicht als Output-Beispiel). |
| B7 | WARN | Kein Troubleshooting. Typische Fragen: (1) `onFinish` und `saveMessages` — ist das synchron? Was passiert wenn `saveMessages` async ist und ein `await` braucht? (2) Was wenn `loadMessages` einen leeren Array zurueckgibt und der LLM-Call ohne System-Message oder Kontext laeuft? (3) Was passiert mit der `as const` Assertion bei `role: 'user' as const`? Warum ist das noetig? |
| B8 | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Code kopierbar. Alle Imports vorhanden. `as const` in Zeile 129 koennte einen Anfaenger stolpern lassen — wird aber im Code gezeigt. |
| B11 | OK | Logischer Aufbau: Persistence-Cycle → Save → Load → Chat fortsetzen → Normalisiertes Schema (Ausblick). Schicht 5 (Ausblick) ist sauber als "nicht implementieren, nur verstehen" markiert. |
| B12 | OK | "Persistence-Cycle", "In-Memory DB", "normalisiertes Schema", "Foreign Key" werden im Kontext erklaert. Die Interface-Definition fuer das DB-Schema ist klar. |

### 05-message-validation.mdx (Challenge 4.4)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | WARN | `import { z } from 'zod'` wird eingefuehrt. Zod wurde in Level 3 (Tool Calling) bereits verwendet, aber es gibt keinen Rueckverweis. Ein Anfaenger koennte unsicher sein, ob zod bereits installiert ist. Ein Satz wie "Zod hast Du in Level 3 bereits genutzt" wuerde reichen. |
| B2 | OK | Kein neuer Installationsbefehl noetig (zod sollte bereits installiert sein). |
| B3 | WARN | **Kein Dateiname und kein Ausfuehrungsbefehl.** Die TRY-Aufgabe hat keinen Hinweis auf Dateinamen. Der Code macht keine LLM-Calls (pure Validation), laeuft also auch ohne API-Key. Aber der Lerner weiss nicht, wohin damit. |
| B4 | WARN | **Kein `npx tsx`-Kommando.** |
| B5 | OK | Keine neuen Environment Variables. Der Code in dieser Challenge macht keine LLM-Calls, nur Validation. |
| B6 | WARN | Die Loesung zeigt erwarteten Output als Kommentare am Ende (`// Test 1: VALID`, `// Test 2: INVALID → messages.0.role: Invalid enum value...`). Das ist gut — aber es steht innerhalb des Code-Blocks als Kommentar, nicht als separater "Erwarteter Output"-Block. Ein Anfaenger koennte die Kommentare uebersehen. |
| B7 | WARN | Kein Troubleshooting. Typischer Fehler: (1) `zod` nicht installiert → `Cannot find module 'zod'`. (2) `.refine()` Injection-Check blockiert harmlose Inhalte, die zufaellig Teilstrings enthalten. (3) Verwechslung von `parse` vs `safeParse` — unbehandelter Error vs. Result-Objekt. |
| B8 | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Code direkt kopierbar. Alle Imports vorhanden. TRY hat vordefinierte `testCases` — sehr gut, der Lerner muss sie nicht selbst erfinden. |
| B11 | OK | Logischer Aufbau: Schema definieren → parse/safeParse → Fehlerbehandlung → Injection-Schutz → API-Handler. Jede Schicht baut auf der vorherigen auf. |
| B12 | OK | "Zod Schema", "safeParse", "parse", ".refine()", "Injection", "Schema-Drift" werden im Kontext erklaert. Die Warnung zu Injection-Checks ("erster Schritt, kein vollstaendiger Schutz") ist ehrlich und richtig. |

### 06-boss-fight.mdx

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Alle benoetigten Pakete (`ai`, `@ai-sdk/anthropic`, `zod`) wurden in frueheren Levels/Challenges eingefuehrt. Keine neuen Pakete. |
| B2 | OK | Kein neuer Installationsbefehl. Der Starter-Code hat alle Imports. |
| B3 | WARN | **Kein Dateiname angegeben.** Der Starter-Code-Block hat keinen Dateinamen. Ein Anfaenger weiss nicht, ob er `boss-fight-4.ts`, `persistent-chat.ts` oder etwas anderes erstellen soll. Kein Ausfuehrungsbefehl. |
| B4 | WARN | **Kein `npx tsx`-Kommando.** Die Boss Fight macht echte LLM-Calls — der Lerner muss wissen, wie er den Code ausfuehrt. |
| B5 | OK | Keine neuen Environment Variables. |
| B6 | OK | Das Szenario-Beispiel am Anfang zeigt konkreten erwarteten Output — sehr gut! Der Lerner sieht genau, wie das fertige System sich verhalten soll. Das ist die einzige Stelle in Level 4, die wirklich konkreten Output zeigt. |
| B7 | WARN | Kein Troubleshooting. Die Hinweise (in `<details>`) sind gut und helfen bei Architektur-Entscheidungen, aber typische Laufzeit-Fehler fehlen: (1) `onFinish` speichert async, aber `saveMessages` ist synchron — was bei echtem DB-Zugriff? (2) `messages.push()` mutiert das Array im `onFinish` — ist das sicher? |
| B8 | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Starter-Code ist direkt kopierbar. Imports vollstaendig (`ai`, `@ai-sdk/anthropic`, `zod`). TODO-Kommentare sind klar und strukturiert. |
| B11 | OK | Phasen-Struktur (Phase 1-4) ist klar. Jede Phase hat konkrete TODOs. Die Anforderungsliste referenziert die Challenges (4.1-4.4) — der Lerner weiss genau, welche Konzepte er kombinieren muss. |
| B12 | OK | Keine neuen Fachbegriffe. Alle Konzepte wurden in den Challenges eingefuehrt. |

### 07-level-complete.mdx

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Zusammenfassungsseite — kein Setup noetig. |
| B2 | OK | Kein neuer Befehl. |
| B3 | OK | Keine fehlenden Steps. |
| B4 | OK | Kein ausfuehrbarer Code. |
| B5 | OK | Keine Environment-Themen. |
| B6 | OK | Kein ausfuehrbarer Code. |
| B7 | OK | Zusammenfassung — kein Troubleshooting erwartet. |
| B8 | OK | Kein Projektstruktur-Thema. |
| B9 | OK | Keine Konfiguration. |
| B10 | OK | Kein kopierbarer Code. |
| B11 | OK | Klare Zusammenfassung der vier Konzepte. Skill Tree zeigt Level 4 als "freigeschaltet". Naechstes Level (5: Context Engineering) wird gut angeteast. |
| B12 | OK | Fachbegriffe werden nochmals kurz zusammengefasst. "Schema-Drift" und "Injection" aus Challenge 4.4 werden wiederholt. |

---

## Stellen wo ich stecken bleibe (priorisiert)

| # | Datei | Stelle | Problem | Prioritaet |
|---|-------|--------|---------|------------|
| 1 | 02-on-finish.mdx | TRY-Block (Zeile 171-195) | Kein Dateiname angegeben. Wohin soll ich den Code schreiben? Kein `npx tsx`-Befehl zum Ausfuehren. | P1 |
| 2 | 02-on-finish.mdx | Loesung (Zeile 207-243) | Kein erwarteter Terminal-Output. Ich sehe die `console.log`-Befehle, aber nicht was genau im Terminal erscheint. | P1 |
| 3 | 03-chat-id.mdx | TRY-Block (Zeile 127-145) | Kein Dateiname, kein Ausfuehrungsbefehl. | P1 |
| 4 | 03-chat-id.mdx | Loesung (Zeile 157-195) | Kein zusammenhaengender erwarteter Output. | P1 |
| 5 | 04-persistence.mdx | TRY-Block (Zeile 186-209) | Kein Dateiname, kein Ausfuehrungsbefehl. Code macht echte LLM-Calls — ohne Ausfuehrungsbefehl bin ich verloren. | P1 |
| 6 | 04-persistence.mdx | Loesung (Zeile 221-279) | Kein erwarteter Terminal-Output. "4 Messages" steht nur in der Checkliste. | P1 |
| 7 | 05-message-validation.mdx | TRY-Block (Zeile 203-233) | Kein Dateiname, kein Ausfuehrungsbefehl. | P1 |
| 8 | 06-boss-fight.mdx | Starter-Code (Zeile 80-123) | Kein Dateiname fuer den Starter-Code. Kein `npx tsx`-Befehl. | P1 |
| 9 | 02-on-finish.mdx | Schicht 4 (Zeile 146-167) | `onFinish` bei `streamText`: Wird nicht erklaert, ob `onFinish` bei streamText ein Promise zurueckgeben kann (async Callback). In AI SDK v6 ist `onFinish` bei `streamText` async — das ist ein subtiler Unterschied zu `generateText`. | P2 |
| 10 | 03-chat-id.mdx | Schicht 1 (Zeile 46-54) | `crypto.randomUUID()` ab Node.js v19 — was wenn ich Node 18 LTS nutze? Kein Fallback oder Mindestversion angegeben. | P2 |
| 11 | 04-persistence.mdx | Schicht 4 (Zeile 129) | `role: 'user' as const` — warum `as const`? Wird nicht erklaert. Ein Anfaenger stolpert ueber diese TypeScript-Feinheit. | P2 |
| 12 | 05-message-validation.mdx | Schicht 1 (Zeile 43-59) | `import { z } from 'zod'` — kein Rueckverweis auf Level 3 wo zod eingefuehrt wurde. Kein `npm install zod` falls nicht installiert. | P2 |
| 13 | Alle Challenge-Dateien | COMBINE-Uebungen | Die COMBINE-Uebungen haben nie erwarteten Output. Sie sind "offene Aufgaben" ohne Loesung — das ist als Design-Entscheidung OK, aber der fehlende Output macht es schwer zu pruefen, ob man auf dem richtigen Weg ist. | P2 |
| 14 | 01-briefing.mdx | Voraussetzungen (Zeile 68-73) | Kein Hinweis auf Projektstruktur: Soll ich im Level-1-Verzeichnis weiterarbeiten? Ein neues Verzeichnis pro Level? | P2 |

## Checkliste B -- Gesamtbewertung

### B1: Setup-Vollstaendigkeit
**Bewertung: WARN**
Alle benoetigten Pakete (`ai`, `@ai-sdk/anthropic`, `zod`) wurden in frueheren Levels eingefuehrt, aber es fehlt ein expliziter Rueckverweis auf deren Installation. Fuer `zod` (Challenge 4.4) fehlt der Hinweis "bereits in Level 3 installiert". Ein Anfaenger, der sich nicht erinnert, koennte unsicher sein.

### B2: Erster Befehl
**Bewertung: WARN**
Kein Installationsbefehl noetig (alles aus frueheren Levels), aber auch kein Ausfuehrungsbefehl. Der allererste konkrete Befehl den der Lerner tippen muesste (`npx tsx challenge-4-1.ts`) fehlt.

### B3: Fehlende Mini-Steps
**Bewertung: FAIL**
Durchgaengig fehlende Dateinamen bei allen TRY-Aufgaben und dem Boss-Fight-Starter-Code. Der Lerner hat Code, weiss aber nicht, in welche Datei er ihn schreiben soll. Das ist das haeufigste P1-Pattern aus allen bisherigen Reviews.

### B4: Ausfuehrungsbefehle
**Bewertung: FAIL**
Kein einziger `npx tsx`-Befehl in Level 4. Weder bei TRY-Aufgaben noch bei Loesungen noch bei der Boss Fight. Der Lerner muss raten, wie er den Code ausfuehrt.

### B5: Environment Setup
**Bewertung: OK**
Keine neuen Environment Variables in Level 4. `ANTHROPIC_API_KEY` aus Level 1 reicht. Das ist klar.

### B6: Erwarteter Output
**Bewertung: FAIL**
Nur die Boss Fight zeigt konkreten erwarteten Output (das Szenario-Beispiel am Anfang). Alle vier Challenges zeigen keinen zusammenhaengenden Terminal-Output. Die Loesungen haben teilweise Kommentare mit erwarteten Werten, aber keinen "Das siehst Du im Terminal"-Block.

### B7: Fehler-Szenarien
**Bewertung: FAIL**
Kein Troubleshooting in Level 4. Keine Fehler-Szenarien dokumentiert. Fehlende Szenarien: (1) API-Key nicht gesetzt, (2) zod nicht installiert, (3) `crypto.randomUUID()` auf altem Node.js, (4) async Operations im onFinish Callback, (5) TypeScript-Fehler bei Message-Typen.

### B8: Projekt-Struktur
**Bewertung: WARN**
Wie in Level 1-3: Kein Hinweis auf Projektstruktur. Implizit wird angenommen, der Lerner arbeitet im bestehenden Verzeichnis weiter.

### B9: Package.json/tsconfig
**Bewertung: OK**
Keine neuen Konfigurationsaenderungen noetig. Alles aus Level 1 reicht.

### B10: Copy-Paste-Tauglichkeit
**Bewertung: OK**
Alle Code-Bloecke sind kopierbar. Imports sind vollstaendig. TRY-Aufgaben haben klare TODO-Kommentare. Loesungen in `<details>` sind direkt lauffaehig. Boss Fight Starter-Code ist gut strukturiert.

### B11: Reihenfolge
**Bewertung: OK**
Reihenfolge ist klar und logisch: onFinish → Chat ID → Persistence → Validation → Boss Fight → Complete. Jede Challenge referenziert die vorherige. Die COMBINE-Uebungen verbinden explizit mit frueheren Challenges. Keine impliziten Abhaengigkeiten.

### B12: Begriffe
**Bewertung: OK**
Alle Fachbegriffe werden beim ersten Auftreten erklaert: "onFinish Callback", "Chat ID / UUID", "Persistence-Cycle", "safeParse", "Zod Schema", "Schema-Drift", "Injection". Die Property-Tabelle in Challenge 4.1 (text, usage, finishReason, response) ist besonders hilfreich.

## Statistik

| Bewertung | Anzahl |
|-----------|--------|
| FAIL | 4 |
| WARN | 17 |
| OK | 63 |

## Pattern-Vergleich mit Level 1-3

Die folgenden P1-Patterns setzen sich unveraendert fort:

| Pattern | Level 1 | Level 2 | Level 3 | Level 4 |
|---------|---------|---------|---------|---------|
| Fehlende Dateinamen | Ja | Ja | Ja | **Ja** |
| Fehlende Ausfuehrungsbefehle | Ja | Ja | Ja | **Ja** |
| Fehlender erwarteter Output | Ja | Ja | Ja | **Ja** |
| Fehlendes Troubleshooting | Ja | Ja | Ja | **Ja** |
| Unklare Projektstruktur | Ja | Ja | Ja | **Ja** |

**Empfehlung:** Diese fuenf Patterns sollten als globale Fixes ueber alle Levels adressiert werden, nicht pro Level einzeln.
