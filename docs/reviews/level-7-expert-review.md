# Expert Review: Level 7 — Streaming

> Datum: 2026-03-09 | Reviewer: AI Expert Agent

## Zusammenfassung

Level 7 ist didaktisch gut aufgebaut mit einer klaren Progression von Custom Data Parts ueber Message Metadata und Stream Transforms zu Error Handling. Die Code-Beispiele sind umfangreich und gut kommentiert. Hauptkritikpunkte: Die `experimental_transform` API-Option koennte in AI SDK v6 bereits zu `transform` stabilisiert worden sein (Verifikation noetig), das Retry-Pattern in 7.4 hat einen subtilen Bug (erster Chunk geht verloren), die ai-hero-dev Exercise-Mappings fuer 7.2 und 7.3 koennten falsch sein (07.02 im Original ist "Stream Object", nicht "Message Metadata"), und die Vermischung von CLI- und Web-Framework-Code ohne klare Abgrenzung koennte verwirren.

## Checkliste A — Detail-Ergebnisse

### A1: Didaktische Progression
**Bewertung:** OK

Die Reihenfolge ist sinnvoll: 7.1 fuehrt Custom Data Parts ein (Daten neben Text im Stream), 7.2 Message Metadata (Daten an Messages, die das LLM nicht sieht), 7.3 Stream Transforms (Stream nachbearbeiten), 7.4 Error Handling (Robustheit). Jedes Konzept ist eigenstaendig und baut trotzdem aufeinander auf. In 7.3 COMBINE wird auf 7.1 zurueckgegriffen, in 7.4 COMBINE auf 7.3. Kein Konzept wird verwendet bevor es eingefuehrt wurde.

### A2: THINK-Qualitaet
**Bewertung:** OK

Alle THINK-Fragen sind spezifisch und aktivieren praktisches Vorwissen:
- 7.1: "Was wenn Du neben Text auch strukturierte Daten..." — konkreter Use Case (Fortschrittsbalken)
- 7.2: "Wie haengst Du zusaetzliche Infos an eine Message an, die NICHT zum LLM gehen sollen?" — klares Problem
- 7.3: "Hast Du bemerkt, dass LLM-Streams manchmal stottern..." — erfahrungsbasiert, relatable
- 7.4: "Was passiert wenn der LLM-Provider mitten im Stream einen Fehler wirft?" — Production-Realitaet

### A3: OVERVIEW-Klarheit
**Bewertung:** OK

Alle Mermaid-Diagramme haben die "Du bist HIER"-Markierung und konsistentes Styling. Gelungen:
- 7.1: Sequence Diagram zeigt den zeitlichen Ablauf von Stream Events — passend fuer das Streaming-Thema
- 7.2: Graph zeigt Metadata-Routing (Content → LLM, Metadata → DB) — klar und praegnant
- 7.3: Pipeline-Darstellung (Raw → Transform 1 → Transform 2 → UI) — intuitive Analogie
- 7.4: Flowchart mit Entscheidungslogik (Erfolg/Fehler → Handler → Retry?) — vollstaendig

### A4: WHY-Motivierung
**Bewertung:** OK

Jede Challenge hat ein klares Vorher/Nachher:
- 7.1: "haesslich, schwer parsbar" vs. "typisierte Objekte direkt in der UI" — ueberzeugend
- 7.2: "verschwendet Tokens, verwirrt LLM" vs. "saubere Trennung" — Token-Kosten-Argument stark
- 7.3: "stottert, fuehlt sich unpoliert an" vs. "fluessig, flexibel" — UX-Argument
- 7.4: "weisse Seite" vs. "hilfreiche Fehlermeldung" — Production-Argument

### A5: WALKTHROUGH-Tiefe
**Bewertung:** OK

Die Schichten bauen logisch aufeinander auf:
- 7.1: 4 Schichten (Types → Senden → Frontend → Typisiert) — korrekte Progression vom Konzept zur Praxis
- 7.2: 4 Schichten (Konzept → Server → Response → Persistence) — gute Integration mit Level 4
- 7.3: 4 Schichten (smoothStream → Custom → Verketten → Praxisbeispiel) — mit Achtung-Hinweis zu Chunk-Grenzen
- 7.4: 5 Schichten (streamText onError → toUIMessageStreamResponse onError → Error Types → Retry → try/catch) — sehr gruendlich

Code ist durchgehend mit Inline-Kommentaren versehen (← Pfeile). Die Trennung zwischen server-seitigem und client-seitigem Code ist in 7.2 und 7.4 gut erklaert.

### A6: TRY-Machbarkeit
**Bewertung:** WARN

Die TRY-Aufgaben sind klar formuliert mit TODOs und Checklisten. Loesungen sind vollstaendig.

**Problem 1 (P1):** Keiner der 4 TRY-Bloecke hat einen expliziten Dateinamen ("Erstelle die Datei `custom-data-parts.ts`") oder Ausfuehrungsbefehl (`npx tsx custom-data-parts.ts`). Bekanntes Pattern aus Level 1-6.

**Problem 2 (P1):** Kein erwarteter Terminal-Output bei den Loesungen. Die Erklaerungen beschreiben, was passiert ("Im Output siehst Du..."), aber zeigen keinen konkreten Output-Block.

### A7: COMBINE-Vernetzung
**Bewertung:** OK

Jede Challenge verweist auf vorherige:
- 7.1 COMBINE: Verknuepft mit 1.4 (streamText) — Mermaid zeigt Datenfluss
- 7.2 COMBINE: Verknuepft mit Level 4 (Persistence) und 1.4 (streamText) — realistischer Use Case
- 7.3 COMBINE: Verknuepft mit 7.1 (Data Parts) — Pipeline-Erweiterung
- 7.4 COMBINE: Verknuepft mit 7.3 (Transforms) — Error in Transform-Pipeline

Die Mermaid-Diagramme in COMBINE zeigen Challenge-Nummern als Referenzen — konsistent mit dem Pattern aus Level 1-6.

### A8: Code-Korrektheit
**Bewertung:** WARN

**Korrekt:**
- `createDataStream({ execute(dataStream) { ... } })` — korrekte AI SDK v6 API
- `dataStream.writeData(value)` — korrekt
- `result.mergeIntoDataStream(dataStream)` — korrekt
- `dataStream.toDataStreamResponse()` und `dataStream.toDataStream()` — korrekt (Web vs. CLI)
- `UIMessage` Type mit `metadata` Property — korrekt in AI SDK v6
- `toUIMessageStreamResponse({ messageMetadata })` — korrekt
- `smoothStream({ delayInMs, chunking })` — korrekt
- `NoSuchToolError.isInstance(error)` — korrekt
- `onError({ error })` in `streamText` — korrekt
- Modellname `claude-sonnet-4-5-20250514` — aktuell (Maerz 2026)
- Alle Imports korrekt: `ai`, `@ai-sdk/anthropic`, `@ai-sdk/react`

**Problem 1 (WARN — Verifikation noetig):** `experimental_transform` in 7.3 — in AI SDK v6 koennte diese Option bereits zu `transform` stabilisiert worden sein (das `experimental_`-Prefix wird typischerweise nach Stabilisierung entfernt). Muss gegen aktuelle Docs verifiziert werden. Betrifft: 7.3 Walkthrough, TRY, Loesung.

**Problem 2 (WARN):** Retry-Pattern in 7.4 Schicht 4 hat einen subtilen Bug:
```typescript
const reader = result.textStream.getReader();
const { value, done } = await reader.read();
reader.releaseLock();
if (!done && value) {
  return result;  // ← Erster Chunk ist bereits konsumiert und geht verloren
}
```
Nach `reader.read()` ist der erste Text-Chunk konsumiert. Wenn der Caller dann `result.textStream` iteriert, fehlt der erste Chunk. Das Pattern ist konzeptuell richtig (Stream "testen"), aber die Implementierung verliert Daten. Ein Hinweis oder eine korrekte Alternative (z.B. `result.text` Promise abwarten mit Timeout) waere besser.

**Problem 3 (WARN):** In 7.4 Schicht 4, die `throw error` Zeile im `onError` Callback ist unnoetig und potentiell verwirrend. Der Kommentar sagt "Re-throw fuer Retry-Loop", aber `onError` ist ein Event-Callback — der Fehler propagiert ohnehin zum Stream-Consumer. Das Re-throw koennte zu doppelten Error-Events fuehren.

### A9: Quellen-Qualitaet
**Bewertung:** WARN

Jede Challenge-Seite hat mindestens 2-3 Quellen. Die ai-sdk.dev Links folgen konsistenten URL-Patterns. Boss Fight hat 4 Quellen.

**Problem (WARN):** Die ai-hero-dev Exercise-Mappings koennten falsch sein:
- 7.2 verweist auf `07.02-message-metadata`, aber im Original-Curriculum ist Exercise 07.02 = "Custom Data Parts with Stream Object". Exercise 07.03 ist "Message Metadata".
- 7.3 verweist auf `07.03-stream-transforms`, aber im Original-Curriculum gibt es kein Exercise "Stream Transforms". Exercise 07.03 ist "Message Metadata".
- Entweder stimmen die Folder-Namen im Repo nicht mit dem Curriculum ueberein, oder die Mappings sind falsch.

**Empfehlung:** ai-hero-dev Repo pruefen und Exercise-Links korrigieren falls noetig. Falls 7.3 (Stream Transforms) kein Pendant im Kurs hat, sollte das transparent gemacht werden (z.B. "Dieses Thema basiert auf der offiziellen AI SDK Dokumentation und hat kein direktes Pendant im ai-hero-dev Kurs.").

### A10: Text-Grafik-Code-Balance
**Bewertung:** OK

Gute Balance:
- Jede Challenge hat 2 Mermaid-Diagramme (OVERVIEW + COMBINE)
- Code-Bloecke alle 2-3 Absaetze
- Tabellen fuer Data Part Types (7.1), smoothStream Options (7.3), Error Types (7.4)
- Boss Fight hat ein umfassendes Architektur-Diagramm
- Kein langer Fliesstext ohne Auflockerung

### A11: Fachliche Korrektheit
**Bewertung:** WARN

**Korrekt:**
- Custom Data Parts Konzept (writeData, mergeIntoDataStream, fullStream Types) — korrekt
- Message Metadata als nicht-an-LLM-gesendete Daten — korrekt
- smoothStream Mechanik (Buffering, Wort-Gruppierung) — korrekt
- TransformStream API (transform-Methode, controller.enqueue) — korrekt (Web API Standard)
- Error Handling Zwei-Ebenen-Modell (Server-Logging vs. Client-Message) — korrekt und wichtig
- Exponential Backoff Formel `Math.min(1000 * Math.pow(2, attempt - 1), 10000)` — korrekt
- `NoSuchToolError`, `InvalidToolArgumentsError`, `APICallError` — korrekte AI SDK Error Types

**Problem 1 (WARN):** Vermischung von CLI- und Web-Framework-Code ohne klare Abgrenzung. Die Walkthroughs zeigen Next.js API Routes (`export async function POST(req: Request)`) und React Components (`useChat`, `'use client'`), aber die TRY-Sektionen sind CLI-basiert (`process.stdout.write`, `for await`). Fuer den Lernenden ist unklar, welchen Kontext er tatsaechlich aufbauen muss. Empfehlung: Klar kennzeichnen "Dieser Code zeigt das Konzept in einer Web-App. Fuer die TRY-Uebung arbeitest Du im Terminal."

**Problem 2 (WARN):** In 7.3, der E-Mail-Redaction-Transform arbeitet chunk-weise. Der Hinweis "Achtung: Eine E-Mail-Adresse koennte ueber zwei Chunks verteilt sein" ist vorhanden — gut. Aber es fehlt ein Hinweis, dass `smoothStream` dieses Problem teilweise loest (da es zu groesseren Chunks zusammenfasst). Die Empfehlung "smoothStream vor redactEmails" im Praxisbeispiel ist korrekt, aber die Begruendung fehlt.

### A12: Boss Fight Integration
**Bewertung:** OK

Die Boss Fight kombiniert alle 4 Challenges:
1. Custom Data Parts (7.1) ✓ — Status-Updates und Fortschritts-Counter
2. Message Metadata (7.2) ✓ — userId, timestamp, sessionId + Response-Metadata
3. Stream Transforms (7.3) ✓ — smoothStream + Custom Transform
4. Error Handling (7.4) ✓ — onError + try/catch
5. Session-Statistik — sinnvolle Integrations-Aufgabe

Starter-Code, 4 gestufte Hinweise und 8 Bewertungskriterien als Checkliste. Schwierigkeit angemessen — es ist eine Integrationsaufgabe, die alle Bausteine verbindet.

**Hinweis:** Die Boss Fight erwaehnt `toUIMessageStreamResponse` in den Anforderungen, was eine Web-API voraussetzt. Die TRY-Uebungen waren aber alle CLI-basiert. Der Lernende muss hier moeglicherweise erstmals eine Web-API Route bauen — das ist ein Sprung.

### A13: Briefing-Vollstaendigkeit
**Bewertung:** OK

- Lernziele: 4 Bullet Points, klar formuliert ✓
- Voraussetzungen: Level 1 (streamText), TypeScript (async/await, AsyncIterable), Web Streams — spezifisch ✓
- Skip-Hinweis: Vorhanden, mit Link zur Boss Fight ✓
- Quellen: 4 Quellen ✓
- Skill Tree: Korrekt, Level 7 orange ✓
- TL;DR: Praegnant ✓
- Boss Fight Vorschau: "Real-Time Dashboard" — konkret ✓

**Hinweis (P2):** Kein Projektverzeichnis-Hinweis ("Arbeite in einem neuen Ordner `level-7-streaming/`"). Bekanntes Pattern.

### A14: Level Complete
**Bewertung:** WARN

**Korrekt:**
- Zusammenfassung deckt alle 4 Challenges ab — korrekt und vollstaendig
- Skill Tree aktualisiert: Level 7 gruen, Level 8 orange
- Naechstes Level korrekt benannt: "Level 8: Workflows"
- Vorschau auf Level 8 Inhalt vorhanden

**Problem (P2):** Keine emotionale Belohnung. Kein "Congratulations", kein Achievement-Framing. Der Lernende hat gerade Production-Streaming-Patterns gelernt — das verdient Anerkennung. Bekanntes Pattern aus Level 1-6.

---

## Findings nach Datei

### 01-briefing.mdx
- **P2-WARN:** Kein Projektverzeichnis-Hinweis.
- Sonst vollstaendig und gut strukturiert.

### 02-custom-data-parts.mdx (Challenge 7.1)
- **P1-WARN:** TRY: Kein Dateiname, kein Ausfuehrungsbefehl.
- **P1-WARN:** Loesung: Kein konkreter erwarteter Output-Block.
- **WARN:** Frontend-Code (useChat, @ai-sdk/react) ohne Hinweis, dass das nur zur Illustration dient und nicht fuer die TRY-Uebung noetig ist.
- **WARN:** ai-hero-dev Exercise 07.01 Link nicht verifiziert.

### 03-message-metadata.mdx (Challenge 7.2)
- **P1-WARN:** TRY: Kein Dateiname, kein Ausfuehrungsbefehl.
- **P1-WARN:** Loesung: Kein konkreter erwarteter Output-Block.
- **WARN:** `toUIMessageStreamResponse({ messageMetadata })` API-Signatur gegen aktuelle Docs pruefen.
- **WARN:** ai-hero-dev Exercise 07.02 Link koennte falsch gemappt sein (07.02 im Original = "Stream Object", nicht "Message Metadata").

### 04-stream-transforms.mdx (Challenge 7.3)
- **P1-WARN:** TRY: Kein Dateiname, kein Ausfuehrungsbefehl.
- **P1-WARN:** Loesung: Kein konkreter erwarteter Output-Block.
- **WARN:** `experimental_transform` koennte in AI SDK v6 bereits zu `transform` umbenannt sein — pruefen.
- **WARN:** ai-hero-dev Exercise 07.03 Link koennte falsch gemappt sein (07.03 im Original = "Message Metadata", nicht "Stream Transforms"). Falls es kein Pendant gibt, transparent machen.

### 05-error-handling.mdx (Challenge 7.4)
- **P1-WARN:** TRY: Kein Dateiname, kein Ausfuehrungsbefehl.
- **P1-WARN:** Loesung: Kein konkreter erwarteter Output-Block.
- **WARN:** Retry-Pattern Schicht 4: Erster Chunk geht nach reader.read() verloren. Code-Bug.
- **WARN:** `throw error` in onError Callback ist unnoetig/verwirrend (Fehler propagiert ohnehin).

### 06-boss-fight.mdx
- **WARN:** Erwartet `toUIMessageStreamResponse` (Web-API), aber alle TRY-Uebungen waren CLI-basiert. Sprung im Kontext.
- Sonst: Sehr gute Integration aller Bausteine. Starter-Code, Hinweise und Bewertungskriterien klar.

### 07-level-complete.mdx
- **P2-WARN:** Keine emotionale Belohnung / Achievement-Framing. Bekanntes Pattern.
- **P2-WARN:** Kein Rueckblick auf die Boss Fight.

---

## Zusammenfassung

| Bewertung | Anzahl |
|-----------|--------|
| OK        | 10     |
| WARN      | 4      |
| FAIL      | 0      |

---

## Empfohlene Fixes (nach Prioritaet)

### Prioritaet 0 (Fachlich falsch — muss gefixt werden)

1. **05-error-handling.mdx, Schicht 4 Retry-Pattern:** Erster Chunk geht nach `reader.read()` verloren. Entweder das Pattern korrigieren (z.B. tee() den Stream oder nutze `result.text` Promise mit Timeout als Test) oder einen deutlichen Hinweis einfuegen, dass das Pattern vereinfacht ist und in Production einen Stream-Tee braucht.

### Prioritaet 1 (Fehlende Schritte — sollte gefixt werden)

2. **Alle TRY-Sections (02-05):** Dateinamen und Ausfuehrungsbefehle hinzufuegen. Vorschlag pro Challenge:
   - 7.1: "Erstelle `custom-data-parts.ts` und fuehre aus: `npx tsx custom-data-parts.ts`"
   - 7.2: "Erstelle `message-metadata.ts` und fuehre aus: `npx tsx message-metadata.ts`"
   - 7.3: "Erstelle `stream-transforms.ts` und fuehre aus: `npx tsx stream-transforms.ts`"
   - 7.4: "Erstelle `error-handling.ts` und fuehre aus: `npx tsx error-handling.ts`"

3. **Alle Loesungen (02-05):** Konkreten erwarteten Output-Block hinzufuegen. Beispiel fuer 7.1:
   ```
   Erwarteter Output (ungefaehr):
   2:["status","searching"]
   0:"Die Analyse"
   0:" zeigt..."
   2:["status","done"]
   --- Stream beendet ---
   ```

4. **04-stream-transforms.mdx:** `experimental_transform` gegen aktuelle AI SDK v6 Docs pruefen. Falls zu `transform` stabilisiert: Alle Vorkommen in 7.3, Boss Fight und Loesungen aktualisieren.

5. **02-05, Walkthroughs:** Bei Web-Framework-Code (Next.js API Routes, React Components) klar kennzeichnen: "Dieser Code zeigt das Konzept in einer Web-App. Deine TRY-Uebung ist CLI-basiert."

### Prioritaet 2 (Nice-to-have — verbessert die Qualitaet)

6. **07-level-complete.mdx:** Emotionale Belohnung hinzufuegen. Vorschlag: "Du beherrschst jetzt Production-Streaming — Custom Data Parts, Message Metadata, Stream Transforms und Error Handling. Deine Apps liefern nicht mehr nur Text, sondern strukturierte Echtzeit-Erlebnisse."

7. **03-message-metadata.mdx, 04-stream-transforms.mdx:** ai-hero-dev Exercise-Links gegen das Repo pruefen. Falls 7.3 kein Pendant hat: "Dieses Thema basiert auf der offiziellen AI SDK Dokumentation."

8. **05-error-handling.mdx, Schicht 4:** `throw error` im onError Callback entfernen oder mit Kommentar erklaeren, dass es unnoetig ist (Fehler propagiert ohnehin zum Consumer).

9. **01-briefing.mdx:** Projektverzeichnis-Hinweis einfuegen: "Arbeite in einem neuen Ordner `level-7-streaming/`."
