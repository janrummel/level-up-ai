# Level 7: Streaming — User-Walkthrough Review

**Datum:** 2026-03-09
**Perspektive:** Technik-affiner Anfaenger (TypeScript-Dev mit ChatGPT-Erfahrung, hat Level 1-6 absolviert)
**Bewertungsskala:** OK | WARNUNG | FEHLT | KRITISCH

---

## Datei 1: 01-briefing.mdx

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | WARNUNG | Keine neuen Pakete noetig (alles aus Level 1), aber kein expliziter Hinweis darauf: "Du brauchst nur `ai` und `@ai-sdk/anthropic` — bereits aus Level 1 installiert." |
| B2 | Erster Befehl | FEHLT | Kein konkreter erster Befehl. Weder `mkdir level-7-streaming` noch Verweis auf bestehenden Ordner. |
| B3 | Fehlende Mini-Steps | WARNUNG | Kein Hinweis auf Projektverzeichnis (neues Verzeichnis? Bestehendes erweitern?). |
| B4 | Ausfuehrungsbefehle | n/a | Kein Code im Briefing. |
| B5 | Environment Setup | OK | Kein neuer API Key noetig — weiterhin `ANTHROPIC_API_KEY` aus Level 1. |
| B6 | Erwarteter Output | n/a | Kein ausfuehrbarer Code. |
| B7 | Fehler-Szenarien | FEHLT | Keine Troubleshooting-Hinweise. |
| B8 | Projekt-Struktur | WARNUNG | Unklar: Neues Projekt? Bestehend erweitern? Wo sollen die TS-Dateien hin? |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen noetig. |
| B10 | Copy-Paste-Tauglichkeit | n/a | Kein Code. |
| B11 | Reihenfolge | OK | Challenges sind klar nummeriert und verlinkt. CardGrid mit Beschreibungen. |
| B12 | Begriffe | OK | "Custom Data Parts", "Message Metadata", "Stream Transforms", "Error Handling" werden alle im TL;DR/Was-Du-lernst erklaert. |

---

## Datei 2: 02-custom-data-parts.mdx (Challenge 7.1)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | Keine neuen Dependencies. `ai` und `@ai-sdk/anthropic` aus Level 1 genuegen. |
| B2 | Erster Befehl | FEHLT | Kein "Erstelle die Datei `custom-data-parts.ts`" und kein `npx tsx`-Befehl. |
| B3 | Fehlende Mini-Steps | WARNUNG | Dateiname fehlt im TRY-Block. Der User muss raten, wie die Datei heissen soll. Code ist als TODO-Kommentar — klar, aber der Dateierstellungs-Schritt fehlt. |
| B4 | Ausfuehrungsbefehle | FEHLT | Kein `npx tsx custom-data-parts.ts` oder aehnliches. Die Loesung hat `process.stdout.write(chunk)`, ist also CLI-basiert, aber wie man sie ausfuehrt steht nirgends. |
| B5 | Environment Setup | OK | Nutzt `@ai-sdk/anthropic` — ANTHROPIC_API_KEY aus Level 1 reicht. |
| B6 | Erwarteter Output | WARNUNG | Loesung erklaert: "Im Output siehst Du abwechselnd Data Parts (als JSON-Zeilen) und Text-Chunks." Aber kein konkretes Output-Beispiel (wie sehen die JSON-Zeilen aus? Welches Format?). |
| B7 | Fehler-Szenarien | FEHLT | Was wenn createDataStream fehlschlaegt? Was wenn writeData mit ungueltigem JSON aufgerufen wird? |
| B8 | Projekt-Struktur | OK | Eigenstaendige Datei, keine Abhaengigkeiten zu vorherigen Level-Dateien. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen. |
| B10 | Copy-Paste-Tauglichkeit | OK | Loesung ist vollstaendig mit allen Imports. Direkt kopierbar und ausfuehrbar (wenn man weiss wie). |
| B11 | Reihenfolge | OK | Walkthrough: Types → Senden → Frontend → Typisiert. Klar. |
| B12 | Begriffe | OK | "Data Part", "createDataStream", "writeData", "mergeIntoDataStream" werden beim ersten Auftreten mit Inline-Erklaerung versehen. "fullStream" wird als bekannt aus Level 1 referenziert. |

**Zusaetzliche Beobachtung:** Der Walkthrough zeigt React/Next.js Code (`useChat`, `'use client'`, `export async function POST`), aber die TRY-Uebung ist CLI-basiert. Ein Anfaenger koennte versuchen, den React-Code zu schreiben und sich wundern, warum die Uebung was anderes verlangt. Klare Abgrenzung fehlt.

---

## Datei 3: 03-message-metadata.mdx (Challenge 7.2)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | `UIMessage` Type aus `ai` — bereits installiert. |
| B2 | Erster Befehl | FEHLT | Kein Dateierstellungs-Befehl. |
| B3 | Fehlende Mini-Steps | WARNUNG | Dateiname fehlt. |
| B4 | Ausfuehrungsbefehle | FEHLT | Kein `npx tsx` Befehl. |
| B5 | Environment Setup | OK | ANTHROPIC_API_KEY reicht. |
| B6 | Erwarteter Output | WARNUNG | Loesung zeigt `console.log` Ausgaben fuer Metadata, aber kein konkretes Beispiel des vollstaendigen Terminal-Outputs. Der User weiss nicht genau, was er im Terminal sehen sollte. Besonders: "Die Antwort sollte NUR den Text-Content erwaehnen, NICHT userId, sessionId oder timestamp" — aber wie sieht das konkret aus? |
| B7 | Fehler-Szenarien | FEHLT | Kein Troubleshooting. |
| B8 | Projekt-Struktur | OK | Eigenstaendige Datei. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen. |
| B10 | Copy-Paste-Tauglichkeit | OK | Loesung ist vollstaendig mit allen Imports. `UIMessage` Type-Import vorhanden. |
| B11 | Reihenfolge | OK | Klar aufgebaut: Konzept → Server → Response → Persistence. |
| B12 | Begriffe | OK | "Metadata" wird klar definiert. "UIMessage" wird mit Beispiel eingefuehrt. `messageMetadata` in `toUIMessageStreamResponse` wird mit Code-Kommentar erklaert. |

---

## Datei 4: 04-stream-transforms.mdx (Challenge 7.3)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | `smoothStream` aus `ai` — bereits installiert. |
| B2 | Erster Befehl | FEHLT | Kein Dateierstellungs-Befehl. |
| B3 | Fehlende Mini-Steps | WARNUNG | Dateiname fehlt im TRY. |
| B4 | Ausfuehrungsbefehle | FEHLT | Kein `npx tsx`. |
| B5 | Environment Setup | OK | ANTHROPIC_API_KEY reicht. |
| B6 | Erwarteter Output | WARNUNG | Walkthrough zeigt Vorher/Nachher-Vergleich fuer smoothStream (`"S" "t" "r"` vs. `"Stream " "Transforms "`), aber die Loesung hat keinen konkreten erwarteten Output-Block. |
| B7 | Fehler-Szenarien | FEHLT | Was wenn experimental_transform nicht erkannt wird (falsche AI SDK Version)? Was wenn ein Transform einen ungefilterten Chunk-Typ blockiert? |
| B8 | Projekt-Struktur | OK | Eigenstaendige Datei. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen. |
| B10 | Copy-Paste-Tauglichkeit | OK | Loesung ist vollstaendig. `smoothStream` Import vorhanden. |
| B11 | Reihenfolge | OK | smoothStream → Custom Transform → Verketten. Logisch. |
| B12 | Begriffe | OK | "TransformStream" wird erklaert (Web API Standard). "experimental_transform" wird als AI SDK Option eingefuehrt. "Pipeline" als Unix-Analogie — gut. |

---

## Datei 5: 05-error-handling.mdx (Challenge 7.4)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | `NoSuchToolError` aus `ai` — bereits installiert. |
| B2 | Erster Befehl | FEHLT | Kein Dateierstellungs-Befehl. |
| B3 | Fehlende Mini-Steps | WARNUNG | Dateiname fehlt. Die TRY-Aufgabe sagt "Simuliere einen Fehler" — aber wo? In welcher Datei? |
| B4 | Ausfuehrungsbefehle | FEHLT | Kein `npx tsx`. |
| B5 | Environment Setup | OK | Die TRY-Uebung nutzt absichtlich einen falschen Modellnamen — dafuer braucht man trotzdem einen ANTHROPIC_API_KEY (der Request wird gesendet und der Provider gibt einen Fehler zurueck). |
| B6 | Erwarteter Output | WARNUNG | Loesung zeigt `console.log`-Strings ("--- Fehler abgefangen ---"), aber nicht den tatsaechlichen Error-Text vom Provider. Der User weiss nicht, welchen Fehler er genau erwarten soll. |
| B7 | Fehler-Szenarien | OK | **Ironischerweise die einzige Challenge, die indirekt Troubleshooting lehrt** — aber nur fuer LLM-Fehler, nicht fuer Setup-Probleme (fehlender Key, kein Internet, etc.). |
| B8 | Projekt-Struktur | OK | Eigenstaendige Datei. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen. |
| B10 | Copy-Paste-Tauglichkeit | OK | Loesung ist vollstaendig. |
| B11 | Reihenfolge | OK | onError → toUIMessageStreamResponse → Error Types → Retry → try/catch. Klare Steigerung. |
| B12 | Begriffe | OK | "Exponential Backoff" wird erklaert. "Transiente Fehler" wird kontextualisiert. Error-Klassen werden mit Tabelle eingefuehrt. |

---

## Datei 6: 06-boss-fight.mdx

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | Imports im Starter-Code zeigen alle noetigen Pakete. Keine neuen Installationen. |
| B2 | Erster Befehl | FEHLT | Kein "Erstelle eine Datei `real-time-dashboard.ts`" und kein Ausfuehrungsbefehl. |
| B3 | Fehlende Mini-Steps | WARNUNG | Starter-Code hat TODOs — gut. Aber: Welche Datei? Wie ausfuehren? CLI oder Web? Die Anforderungen erwaehnen `toUIMessageStreamResponse` (Web), aber alle bisherigen TRY-Uebungen waren CLI-basiert. Ein Anfaenger weiss nicht, was er aufbauen soll. |
| B4 | Ausfuehrungsbefehle | FEHLT | Kein Ausfuehrungsbefehl. |
| B5 | Environment Setup | OK | ANTHROPIC_API_KEY aus Level 1 reicht. |
| B6 | Erwarteter Output | OK | Gutes Beispiel: Das Terminal-Mockup am Anfang zeigt klar, wie das fertige Dashboard aussehen soll. Einer der wenigen Stellen mit konkretem erwartetem Output! |
| B7 | Fehler-Szenarien | FEHLT | Kein Troubleshooting. |
| B8 | Projekt-Struktur | WARNUNG | Unklar ob CLI oder Web. Die Anforderungen mischen beide Kontexte. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen. |
| B10 | Copy-Paste-Tauglichkeit | OK | Starter-Code ist kopierbar. TODOs klar formuliert. 4 gestufte Hinweise vorhanden. |
| B11 | Reihenfolge | OK | TODOs folgen der Challenge-Reihenfolge: Data Parts → Metadata → Transforms → Error → Stats. |
| B12 | Begriffe | OK | Keine neuen Begriffe. Alles aus den Challenges bekannt. |

---

## Datei 7: 07-level-complete.mdx

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1-B12 | Alle | OK | Zusammenfassung, kein ausfuehrbarer Content. Gute Uebersicht der gelernten Konzepte. Skill Tree aktualisiert (L7 gruen, L8 orange). |

---

## Querschnitt-Checks (Anfaenger-Perspektive Level 7)

### 1. Weiss der User was "Custom Data Parts" sind?
**OK.** 7.1 erklaert das Konzept gruendlich: Was sie sind, warum man sie braucht, wie man sie sendet und konsumiert. Die Data Part Types Tabelle ist hilfreich.

### 2. Weiss der User was "Message Metadata" ist?
**OK.** 7.2 definiert es klar: "Lebt neben dem Content, wird aber NICHT an das LLM gesendet." Code-Beispiel mit `UIMessage` Type macht es greifbar.

### 3. Weiss der User was "smoothStream" tut?
**OK.** 7.3 erklaert mit Vorher/Nachher: einzelne Buchstaben vs. Wortgruppen. Options-Tabelle (delayInMs, chunking) ist klar.

### 4. Weiss der User was "TransformStream" ist?
**WARNUNG.** Wird als "Web API Standard" erwaehnt und die Mechanik (transform-Methode, controller.enqueue) wird gezeigt. Aber fuer einen TypeScript-Dev, der noch nie mit Web Streams gearbeitet hat, koennte eine Zeile mehr helfen: "TransformStream ist eine Browser/Node.js-API, die einen eingehenden Datenstrom Chunk fuer Chunk transformiert — wie eine Middleware in Express."

### 5. Weiss der User was "experimental_transform" bedeutet?
**WARNUNG.** Es wird als Option von `streamText` eingefuehrt, aber das `experimental_`-Prefix wird nicht erklaert. Ein Anfaenger fragt sich: "Ist das stabil? Kann ich das in Production nutzen? Aendert sich die API?"

### 6. Weiss der User was "Exponential Backoff" ist?
**OK.** 7.4 erklaert: "1s, 2s, 4s, ... Das gibt dem Provider Zeit, sich zu erholen." Formel wird gezeigt.

### 7. Weiss der User wie er die Dateien erstellen und ausfuehren soll?
**KRITISCH.** Nein. Keiner der 4 TRY-Bloecke hat einen Dateinamen oder `npx tsx`-Befehl. Der User muss sich aus Level 1 erinnern, dass `npx tsx dateiname.ts` der Ausfuehrungsbefehl ist. Das ist nach 6 Levels moeglicherweise bekannt — aber es explizit zu sagen kostet eine Zeile und verhindert Verwirrung.

### 8. Weiss der User ob er CLI oder Web-App bauen soll?
**KRITISCH.** Nein. Die Walkthroughs zeigen abwechselnd:
- CLI-Code (`process.stdout.write`, `for await`)
- Next.js API Routes (`export async function POST`)
- React Components (`useChat`, `'use client'`)

Ohne klare Abgrenzung ("Konzept-Darstellung vs. Uebung") koennte der User versuchen, eine Next.js App aufzusetzen, obwohl die TRY-Uebungen CLI-basiert sind. Die Boss Fight verstaerkt die Verwirrung, weil sie `toUIMessageStreamResponse` fordert (Web-API).

### 9. Weiss der User was er im Terminal sehen soll?
**WARNUNG.** Nur die Boss Fight hat ein konkretes Output-Mockup. Die 4 Challenges-Loesungen beschreiben den Output verbal ("Du siehst..."), zeigen aber keinen konkreten Output-Block.

### 10. Braucht der User neue Pakete?
**OK.** Nein — alles aus Level 1 (`ai`, `@ai-sdk/anthropic`, `typescript`, `tsx`) genuegt. Frontend-Code (`@ai-sdk/react`) ist nur zur Illustration.

---

## Zusammenfassung

### Staerken
- **Didaktischer Aufbau** exzellent: THINK → OVERVIEW → WHY → WALKTHROUGH → TRY → COMBINE
- **Code-Qualitaet** hoch: Alle Imports, konsistente Patterns, gute Inline-Kommentare
- **Mermaid-Diagramme** helfen beim Verstaendnis (besonders 7.1 Sequence Diagram und 7.4 Error Flow)
- **COMBINE-Sektionen** verknuepfen Challenges gut (7.3 → 7.1, 7.4 → 7.3)
- **Boss Fight Output-Mockup** ist das beste Beispiel fuer erwarteten Output im gesamten Level
- **Keine neuen Package-Installationen** noetig — weniger Setup-Friction

### Kritische Luecken (Blocker fuer Anfaenger)

| Prioritaet | Problem | Betroffene Dateien |
|------------|---------|-------------------|
| **P1** | **Dateinamen fehlen in allen TRY-Sections.** Kein "Erstelle `dateiname.ts`" — User muss raten. | 02, 03, 04, 05, 06 |
| **P1** | **Ausfuehrungsbefehle fehlen in allen TRY-Sections.** Kein `npx tsx` — User muss sich aus Level 1 erinnern. | 02, 03, 04, 05, 06 |
| **P1** | **Erwarteter Output fehlt bei Loesungen.** Nur verbale Beschreibung, kein konkreter Terminal-Output. | 02, 03, 04, 05 |
| **P1** | **CLI vs. Web-App Abgrenzung fehlt.** Walkthroughs zeigen Next.js/React, TRY ist CLI, Boss Fight fordert Web-API. Verwirrend. | 02, 03, 04, 05, 06 |
| **P2** | **Kein Troubleshooting.** Keine Fehler-Hilfe im gesamten Level (ausser 7.4 lehrt Error Handling fuer LLM-Fehler). | Alle |
| **P2** | **Kein Projektverzeichnis-Hinweis.** Bekanntes Pattern. | 01 |
| **P2** | **Keine emotionale Belohnung im Level Complete.** Bekanntes Pattern. | 07 |

### Scoring-Uebersicht

| Kriterium | 01 | 02 | 03 | 04 | 05 | 06 | 07 |
|-----------|----|----|----|----|----|----|-----|
| B1 Setup | W | OK | OK | OK | OK | OK | OK |
| B2 Erster Befehl | F | F | F | F | F | F | — |
| B3 Mini-Steps | W | W | W | W | W | W | — |
| B4 Ausfuehrung | — | F | F | F | F | F | — |
| B5 Environment | OK | OK | OK | OK | OK | OK | — |
| B6 Output | — | W | W | W | W | OK | — |
| B7 Fehler | F | F | F | F | OK | F | — |
| B8 Projektstruktur | W | OK | OK | OK | OK | W | OK |
| B9 Config | OK | OK | OK | OK | OK | OK | — |
| B10 Copy-Paste | — | OK | OK | OK | OK | OK | — |
| B11 Reihenfolge | OK | OK | OK | OK | OK | OK | OK |
| B12 Begriffe | OK | OK | OK | OK | OK | OK | OK |

**Legende:** OK = gut | W = Warnung | F = Fehlt | K = Kritisch | — = nicht zutreffend

### Empfohlene Fixes (Top 5)

1. **Alle TRY-Sections (02-06): Dateinamen + Ausfuehrungsbefehle hinzufuegen.** Jede TRY-Section sollte anfangen mit: "Erstelle die Datei `<name>.ts`:" und enden mit: "Fuehre aus: `npx tsx <name>.ts`."

2. **Alle Loesungen (02-05): Erwarteten Output-Block hinzufuegen.** Nach der Loesung: "Erwarteter Output (ungefaehr):" mit konkretem Terminal-Output. LLM-Output variiert — ein Hinweis darauf genuegt.

3. **Walkthroughs (02-05): CLI vs. Web klar kennzeichnen.** Vor jedem Next.js/React Code-Block: "Hinweis: Dieser Code zeigt das Konzept in einer Web-App. Deine TRY-Uebung arbeitet im Terminal (CLI)."

4. **Briefing oder 7.1: Projektverzeichnis-Hinweis.** "Erstelle einen neuen Ordner `level-7-streaming/` (oder arbeite in Deinem bestehenden Projektverzeichnis)."

5. **07-level-complete.mdx: Emotionale Belohnung.** "Glueckwunsch! Du beherrschst jetzt Production-Streaming — strukturierte Echtzeit-Daten statt rohem Text."
