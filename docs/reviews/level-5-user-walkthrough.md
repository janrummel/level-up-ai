# User Walkthrough: Level 5 — Context Engineering

> Datum: 2026-03-09 | Perspektive: Anfaenger (TypeScript-Dev, keine AI SDK Erfahrung)

## Zusammenfassung

Level 5 ist inhaltlich das staerkste Level im gesamten Lernpfad: Die fuenf Bausteine (Template, Basic Prompting, Exemplars, RAG, Chain of Thought) werden sauber aufeinander aufgebaut, jede Challenge referenziert die vorherigen explizit, und die COMBINE-Uebungen verbinden kumulativ alle bisherigen Konzepte. Alle Fachbegriffe (Context Engineering, XML Tags, Few-Shot Learning, RAG, Chain of Thought) werden beim ersten Auftreten verstaendlich erklaert. Die bekannten P1-Patterns aus Level 1-4 setzen sich jedoch unveraendert fort: Fehlende Dateinamen, fehlende Ausfuehrungsbefehle, fehlender erwarteter Output und fehlendes Troubleshooting. Es gibt keine P0-Fehler (keine falschen API-Signaturen, keine fehlenden npm-Pakete).

## Checkliste B — Detail-Ergebnisse pro Datei

### 01-briefing.mdx

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Voraussetzungen klar: Level 1 (generateText, streamText) und Grundverstaendnis LLMs. Keine neuen Pakete noetig. `ai` und `@ai-sdk/anthropic` wurden in Level 1 installiert. |
| B2 | Erster Befehl | WARN | Kein konkreter erster Befehl vorhanden. Es wird nicht erwaehnt, ob der Lerner im bestehenden Projektverzeichnis weiterarbeitet oder ein neues anlegen soll. Ein Befehl wie `npx tsx challenge-5-1.ts` fehlt. Level 1 hat das vorbildlich geloest mit `mkdir level-1-ai-sdk && cd level-1-ai-sdk`. |
| B3 | Mini-Steps | OK | Briefing-Seite — keine Mini-Steps erwartet. Challenges, Boss Fight und Skip-Hinweis sind klar verlinkt. |
| B4 | Ausfuehrungsbefehl | OK | Kein ausfuehrbarer Code auf der Briefing-Seite. |
| B5 | Environment | OK | Keine neuen Environment Variables noetig. `ANTHROPIC_API_KEY` aus Level 1 reicht. |
| B6 | Erwarteter Output | OK | Kein ausfuehrbarer Code, daher kein Output erwartet. |
| B7 | Troubleshooting | WARN | Kein Troubleshooting auf Briefing-Ebene. Level 1 hat einen vorbildlichen Troubleshooting-Block mit drei typischen Fehlern. Ein kurzer Rueckverweis ("Dein Setup aus Level 1 sollte funktionieren. Falls nicht: siehe Level 1 Troubleshooting.") fehlt. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis ob neues Verzeichnis (`level-5-context-engineering/`) oder Weiterarbeit im Level-1-Verzeichnis. Level 1 hat klar gesagt: "Erstelle ein Projektverzeichnis fuer dieses Level." Level 5 sagt dazu nichts. |
| B9 | Package.json | OK | Keine neue Konfiguration noetig. Alles aus Level 1 reicht. |
| B10 | Copy-Paste | OK | Kein kopierbarer Code auf der Briefing-Seite. |
| B11 | Reihenfolge | OK | Challenges 5.1-5.5 klar benannt und verlinkt per CardGrid. Reihenfolge eindeutig. Skip-Hinweis fuer Fortgeschrittene vorhanden. |
| B12 | Begriffe | OK | "Context Engineering", "XML Tags", "Few-Shot Learning", "RAG", "Chain of Thought" werden im TL;DR eingefuehrt und erklaert. Simon-Willison-Zitat motiviert. "Halluzinationen" wird im Kontext erklaert. |

### 02-the-template.mdx (Challenge 5.1)

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Keine neuen Pakete noetig. `generateText` aus `ai`, `anthropic` aus `@ai-sdk/anthropic` — beides in Level 1 installiert. |
| B2 | Erster Befehl | FAIL | Kein Befehl vorhanden. Weder "Erstelle `challenge-5-1.ts`" noch `npx tsx challenge-5-1.ts`. Das ist die erste Challenge des Levels — hier muss klar sein, was der Lerner tun soll. Level 1 Challenge 1.1 hatte das mit `npx tsx challenge-1-1.ts` geloest. |
| B3 | Mini-Steps | FAIL | Es fehlt: (1) Dateiname fuer die TRY-Aufgabe, (2) Ausfuehrungsbefehl, (3) bei der COMBINE-Uebung fehlt ein Starter-Code-Block. Der Lerner soll `streamText` statt `generateText` nutzen und ueber `result.textStream` iterieren — aber es wird kein Code-Skelett gegeben, nur die drei Schritte als Text. |
| B4 | Ausfuehrungsbefehl | FAIL | Kein `npx tsx`-Kommando. Weder beim TRY, bei der Loesung noch beim COMBINE. Der Code macht echte LLM-Calls — ohne Ausfuehrungsbefehl ist der Lerner blockiert. |
| B5 | Environment | OK | Keine neuen Environment Variables. |
| B6 | Erwarteter Output | FAIL | Kein erwarteter Terminal-Output. `console.log(result.text)` steht im Code, aber der Lerner sieht nicht, was erscheint. Ein Beispiel wie "Context Engineering ist die Kunst, einem LLM den richtigen Kontext..." wuerde zeigen, dass der Code funktioniert. |
| B7 | Troubleshooting | WARN | Kein Troubleshooting. Typische Anfaenger-Fehler: (1) Template Literals mit einfachen Anfuehrungszeichen `'...'` statt Backticks `` `...` `` — sehr haeufiger TypeScript-Anfaenger-Fehler. (2) Vergessen von `.trim()` fuehrt zu fuehrendem Whitespace im Prompt. (3) `ANTHROPIC_API_KEY` nicht gesetzt. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | Package.json | OK | Keine neue Konfiguration noetig. |
| B10 | Copy-Paste | OK | Code-Bloecke haben vollstaendige Imports (`import { generateText } from 'ai'` und `import { anthropic } from '@ai-sdk/anthropic'`). TRY hat klare TODO-Kommentare. Loesung in `<details>` ist direkt kopierbar und lauffaehig. Walkthrough-Code baut sauber in 3 Schichten auf. |
| B11 | Reihenfolge | OK | Hervorragender Aufbau: Schicht 1 (XML Tags Grundstruktur) -> Schicht 2 (Template Literals mit Variablen) -> Schicht 3 (buildSystemPrompt Funktion). Jede Schicht motiviert die naechste. COMBINE verweist auf `streamText` aus Level 1. |
| B12 | Begriffe | OK | "XML Tags" werden erklaert inkl. warum man sie nutzt (Aufmerksamkeitsverteilung von LLMs: Anfang/Ende hoeher gewichtet). "Template Literals" (TypeScript Backtick-Strings), "DRY (Don't Repeat Yourself)", "System Prompt", `buildSystemPrompt` — alles erklaert. Sehr gut: Erklaerung warum `<task-context>` am Anfang und `<output-format>` am Ende stehen (Aufmerksamkeitsverteilung). |

### 03-basic-prompting.mdx (Challenge 5.2)

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Keine neuen Pakete. `streamText` und `generateText` aus `ai`, `anthropic` aus `@ai-sdk/anthropic`. |
| B2 | Erster Befehl | WARN | Kein konkreter Befehl. Der Lerner muss wissen, welche Datei er erstellen und wie er sie ausfuehren soll. |
| B3 | Mini-Steps | WARN | Kein Dateiname angegeben. TRY-Aufgabe ist inhaltlich klar (schlechten Prompt strukturieren), aber der Lerner weiss nicht wohin mit dem Code. Ein `challenge-5-2.ts` wuerde reichen. |
| B4 | Ausfuehrungsbefehl | WARN | Kein `npx tsx`-Kommando. Die TRY-Aufgabe nutzt `generateText` mit `console.log`. |
| B5 | Environment | OK | Keine neuen Environment Variables. |
| B6 | Erwarteter Output | FAIL | Kein erwarteter Terminal-Output — weder beim TRY noch bei der Loesung noch beim Walkthrough (Vorher/Nachher-Vergleich). Gerade hier waere konkreter Output extrem lehrreich gewesen: Der Lerner koennte sehen, wie ein vager Prompt zu "Research on Induction Hobs and AGA Cooker Replacement" fuehrt, waehrend der strukturierte Prompt "Induction Range Cookers" produziert (kurz, Title Case, ohne Punkt). Das Vorher/Nachher wuerde den Unterschied greifbar machen. |
| B7 | Troubleshooting | WARN | Kein Troubleshooting. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | Package.json | OK | Keine neue Konfiguration. |
| B10 | Copy-Paste | OK | Code kopierbar. Alle Imports vorhanden. Walkthrough-Beispiele (Vorher/Nachher) sind vollstaendig und lauffaehig. TRY-Aufgabe hat klare TODOs. Loesung direkt kopierbar. Hinweis: Die Walkthrough-Codeblocks wechseln zwischen `streamText` (Vorher/Nachher) und `generateText` (TRY) — das ist bewusst und ok, aber koennte einen Anfaenger irritieren. |
| B11 | Reihenfolge | OK | Logischer Aufbau: XML Tags einzeln erklaert -> konkretes Szenario (Chat Title Generator) -> Schlecht-zu-Gut-Transformation -> TRY (eigene Aufgabe). COMBINE verweist klar auf Challenge 5.1 (`buildSystemPrompt`). |
| B12 | Begriffe | OK | "Anthropic Prompt Template", "Title Case" werden erklaert. Jeder XML Tag (`<task-context>`, `<rules>`, `<the-ask>`, `<output-format>`, `<background-data>`, `<conversation-history>`) wird mit seiner Funktion und Position beschrieben. Gut: Der Hinweis "LLMs gewichten den Anfang und das Ende eines Prompts staerker als die Mitte." |

### 04-exemplars.mdx (Challenge 5.3)

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Keine neuen Pakete. `generateText` und `anthropic` aus frueheren Levels. |
| B2 | Erster Befehl | WARN | Kein konkreter Befehl. |
| B3 | Mini-Steps | WARN | Kein Dateiname angegeben. |
| B4 | Ausfuehrungsbefehl | WARN | Kein `npx tsx`-Kommando. |
| B5 | Environment | OK | Keine neuen Environment Variables. |
| B6 | Erwarteter Output | OK | Die Loesung zeigt als einzige in Level 5 einen erwarteten Output: `// Erwartete Ausgabe: "neutral"` (Zeile 224). Das ist gut — zeigt dem Lerner, was korrekt ist. Allerdings fehlt erwarteter Output beim Walkthrough und bei der COMBINE-Uebung. |
| B7 | Troubleshooting | WARN | Kein Troubleshooting. Typische Frage: Was wenn das LLM trotz Exemplars nicht das exakte Format liefert (z.B. "neutral." statt "neutral" oder "Das ist neutral")? Hinweis auf `<output-format>` als Ergaenzung oder auf die Wichtigkeit guter Exemplars waere sinnvoll. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | Package.json | OK | Keine neue Konfiguration. |
| B10 | Copy-Paste | WARN | Grundsaetzlich gut: Imports vorhanden, Loesung lauffaehig. Problem: Der TRY-Starter-Code (Zeile 157-163) hat TODO-Kommentare (`// TODO: Dein strukturierter Prompt hier` und `// Verwende <task-context>, <examples> und <the-ask>`) innerhalb eines Template-Literal-Strings. Wenn der Lerner den Code direkt kopiert und ausfuehrt, werden diese Kommentare als Prompt-Text an das LLM geschickt — `//` ist kein XML-Kommentar. Das fuehrt zu unerwarteten Ergebnissen. |
| B11 | Reihenfolge | OK | Logischer Aufbau: Few-Shot Prinzip (Analogie: neuer Mitarbeiter) -> XML Struktur fuer Exemplars -> Wieviele Exemplars (Faustregel 2-5) -> Dynamische Integration mit `.map()`. COMBINE verweist auf Challenge 5.1 (Template erweitern um examples-Slot). |
| B12 | Begriffe | OK | "Few-Shot Learning", "Exemplars", "Shots" werden beim ersten Auftreten erklaert. Die Analogie "Wenn Du einem neuen Mitarbeiter zeigst, wie drei fertige E-Mails aussehen" ist verstaendlich. Die Faustregel "2-5 Exemplars sind optimal" mit Begruendung (1 = Einzelfall, >5 = sinkender Ertrag) ist praxisnah. |

### 05-retrieval.mdx (Challenge 5.4)

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Keine neuen Pakete. `streamText` und `anthropic` aus frueheren Levels. Simulierter Content statt echtem Fetch — keine zusaetzliche Dependency noetig. |
| B2 | Erster Befehl | WARN | Kein konkreter Befehl. |
| B3 | Mini-Steps | WARN | Kein Dateiname angegeben. Die TRY-Aufgabe hat klare TODO-Kommentare im XML-Stil (als `// TODO:` innerhalb des Prompt-Strings), was hier weniger problematisch ist als bei Challenge 5.3, da der Lerner die TODOs durch XML Tags ersetzen soll. |
| B4 | Ausfuehrungsbefehl | WARN | Kein `npx tsx`-Kommando. Der Code nutzt `streamText` mit `for await...of` — die Streaming-Schleife ist gezeigt, aber kein Befehl zum Starten. |
| B5 | Environment | OK | Keine neuen Environment Variables. |
| B6 | Erwarteter Output | WARN | Kein erwarteter Terminal-Output. Die Frage lautet "What did Guillermo Rauch say about Matt Pocock?" und die Antwort steht im simulierten Content — aber der Lerner sieht nicht, wie eine korrekte Antwort im Terminal aussieht. Ein Beispiel wie "According to the website (https://www.aihero.dev/), Guillermo Rauch said: 'Matt is one of the best educators in the TypeScript ecosystem.'" wuerde helfen. |
| B7 | Troubleshooting | WARN | Kein Troubleshooting. Relevante Fragen: (1) Was passiert wenn der Content zu lang ist (Token-Limit)? (2) Was wenn das LLM trotz Anti-Halluzinations-Regel Informationen erfindet? (3) Hinweis auf Kosten bei langem `<background-data>` Content. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | Package.json | OK | Keine neue Konfiguration. |
| B10 | Copy-Paste | OK | Code kopierbar. Alle Imports vorhanden. TRY hat klare TODO-Kommentare. Loesung in `<details>` direkt lauffaehig mit vollstaendiger `for await...of`-Schleife. Simulierter Content als Konstante — der Lerner muss nichts extern laden. |
| B11 | Reihenfolge | OK | Sehr guter Aufbau: RAG-Prinzip (3 Schritte: Retrieve, Augment, Generate) -> Datenquellen-Tabelle -> `<background-data>` Tag Integration -> Anti-Halluzinations-Regel (die wichtigste Zeile). COMBINE verbindet alle 4 bisherigen Konzepte. "Weiter denken"-Abschnitt (Vector Search) ist ein guter Ausblick ohne den Anfaenger zu ueberfordern. |
| B12 | Begriffe | OK | "RAG (Retrieval-Augmented Generation)" wird mit den 3 Schritten erklaert. "Halluzination" wird als "plausibel klingende, aber falsche Antwort" definiert. "Vector Database", "Embeddings", "Chunks" werden im Ausblick erwaehnt und kurz kontextualisiert. Datenquellen-Tabelle (Web Scraping, Vector DB, SQL/API, Dateisystem) ist hilfreich. |

### 06-chain-of-thought.mdx (Challenge 5.5)

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Keine neuen Pakete. `streamText` und `anthropic` aus frueheren Levels. |
| B2 | Erster Befehl | WARN | Kein konkreter Befehl. |
| B3 | Mini-Steps | WARN | Kein Dateiname angegeben. |
| B4 | Ausfuehrungsbefehl | WARN | Kein `npx tsx`-Kommando. |
| B5 | Environment | OK | Keine neuen Environment Variables. |
| B6 | Erwarteter Output | WARN | Kein konkreter erwarteter Terminal-Output fuer TRY und Loesung. Positiv: Der Walkthrough zeigt in Schicht 3 (Zeile 91-101) ein Beispiel der `<thinking>`-Block-Struktur, das dem Lerner das Konzept verdeutlicht. Aber bei der TRY-Aufgabe (Code Review) fehlt ein konkretes Beispiel, wie die Ausgabe aussehen soll (z.B. ein `<thinking>`-Block mit den Code-Issues, gefolgt von der formatierten Review-Ausgabe). |
| B7 | Troubleshooting | WARN | Kein Troubleshooting. Typische Fragen: (1) Was wenn das LLM den `<thinking>`-Block nicht sauber trennt oder den Tag nicht schliesst? (2) Extended Thinking wird erwaehnt — wie aktiviert man das? Der Satz "Moderne Modelle wie Claude bieten 'Extended Thinking' als eingebautes Feature an" weckt Neugier, aber es fehlt ein Codebeispiel oder zumindest ein Link. (3) Kosten: CoT verdoppelt+ den Token-Verbrauch — ein Hinweis auf die Kostenimplikation fehlt. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | Package.json | OK | Keine neue Konfiguration. |
| B10 | Copy-Paste | OK | Code kopierbar. Alle Imports vorhanden. TRY hat klare TODOs. Loesung ist direkt lauffaehig. Die `<thinking-instructions>` in der Loesung sind ausfuehrlich (6 Schritte) und zeigen dem Lerner, wie granular man den Denkprozess steuern kann. |
| B11 | Reihenfolge | OK | Hervorragender Aufbau: CoT-Prinzip (Rechenbeispiel 17*24) -> `<thinking-instructions>` Tag -> `<output-format>` fuer Trennung -> Wann CoT nutzen (Tabelle). COMBINE vereint alle 5 Konzepte in einer `buildFullPrompt`-Funktion — perfekte Boss-Fight-Vorbereitung. |
| B12 | Begriffe | OK | "Chain of Thought (CoT)" wird mit dem Rechenbeispiel anschaulich erklaert. "Extended Thinking" wird als eingebautes Feature erwaehnt und von manuellem CoT abgegrenzt. Der Unterschied `<thinking-instructions>` (steuert Denkprozess) vs. `<rules>` (steuert Ausgabe) wird explizit gemacht. Tabelle "Sinnvoll vs. Nicht noetig" ist sehr praxisnah. Faustregel "Wenn Du als Mensch Zwischenschritte aufschreiben wuerdest" ist einpraegbar. |

### 07-boss-fight.mdx

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Alle Pakete (`ai`, `@ai-sdk/anthropic`) aus Level 1. Keine neuen Dependencies. |
| B2 | Erster Befehl | WARN | Kein konkreter Befehl. Starter-Code ist vorhanden, aber kein "Erstelle `boss-fight-5.ts`" und kein `npx tsx boss-fight-5.ts`. |
| B3 | Mini-Steps | WARN | Kein Dateiname fuer den Starter-Code. Der Lerner weiss nicht, ob er `boss-fight-5.ts`, `doc-assistant.ts` oder etwas anderes erstellen soll. Die 6 TODOs im Starter-Code (Zeile 95-101) sind klar nummeriert und strukturiert. |
| B4 | Ausfuehrungsbefehl | WARN | Kein `npx tsx`-Kommando. Die Boss Fight macht echte LLM-Calls mit `streamText`. |
| B5 | Environment | OK | Keine neuen Environment Variables. |
| B6 | Erwarteter Output | WARN | Kein konkreter erwarteter Terminal-Output. Die 8 Bewertungskriterien (Checkliste) beschreiben WAS der Code tun soll, aber nicht WIE die Ausgabe im Terminal aussieht. Im Vergleich: Die Level-4-Boss-Fight hatte ein konkretes Szenario-Beispiel mit Terminal-Dialogen. Hier fehlt ein Beispiel wie ein `<thinking>`-Block gefolgt von einer quellenbasierten Antwort im Terminal erscheint. |
| B7 | Troubleshooting | OK | Die drei Hinweis-Bloecke (`<details>`) adressieren die richtigen Architektur-Fragen: (1) Funktions-Struktur, (2) Exemplar-Design (beantwortbar + nicht beantwortbar), (3) Anti-Halluzinations-Regel. Das ist kein klassisches Troubleshooting, aber die Hinweise helfen bei den typischen Stellen, an denen ein Anfaenger haengen bleibt. |
| B8 | Projekt-Struktur | WARN | Kein Hinweis auf Projektverzeichnis. |
| B9 | Package.json | OK | Keine neue Konfiguration. |
| B10 | Copy-Paste | OK | Starter-Code direkt kopierbar. Imports vollstaendig. TODO-Kommentare klar und nummeriert. Die simulierte Dokumentation (Authentication API) ist realistisch, lang genug und enthaelt Code-Beispiele — ein guter Testfall. |
| B11 | Reihenfolge | OK | Anforderungsliste referenziert klar alle 5 Challenges (5.1-5.5) und die zugehoerigen Konzepte. Bewertungskriterien als 8-Punkt-Checkliste. Hinweise bauen aufeinander auf. Der Lerner weiss genau, was erwartet wird. |
| B12 | Begriffe | OK | Keine neuen Fachbegriffe. Alle Konzepte wurden in den Challenges eingefuehrt. Die Bewertungskriterien verwenden die gelernten Begriffe korrekt. |

### 08-level-complete.mdx

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Zusammenfassungsseite — kein Setup noetig. |
| B2 | Erster Befehl | OK | Kein Befehl erwartet. |
| B3 | Mini-Steps | OK | Keine fehlenden Steps. |
| B4 | Ausfuehrungsbefehl | OK | Kein ausfuehrbarer Code. |
| B5 | Environment | OK | Keine Environment-Themen. |
| B6 | Erwarteter Output | OK | Kein ausfuehrbarer Code. |
| B7 | Troubleshooting | OK | Zusammenfassung — kein Troubleshooting erwartet. |
| B8 | Projekt-Struktur | OK | Kein Projektstruktur-Thema. |
| B9 | Package.json | OK | Keine Konfiguration. |
| B10 | Copy-Paste | OK | Kein kopierbarer Code. |
| B11 | Reihenfolge | OK | Klare Zusammenfassung der fuenf Konzepte. Skill Tree zeigt Level 5 als "freigeschaltet" (gruen). Naechstes Level (6: Evals) wird gut angeteast: "Wie misst Du, ob Dein AI-System gut funktioniert?" |
| B12 | Begriffe | OK | Fachbegriffe werden nochmals kurz zusammengefasst: Templates, XML Tags, Exemplars, RAG, Chain of Thought. Jeder mit dem zugehoerigen technischen Artefakt (`buildSystemPrompt()`, `<background-data>`, `<thinking-instructions>`). |

---

## Querschnitt-Checks (gelten fuer das ganze Level)

| # | Check | Bewertung | Detail |
|---|-------|-----------|--------|
| B1 | Setup | OK | Alle benoetigten Pakete (`ai`, `@ai-sdk/anthropic`) wurden in Level 1 eingefuehrt. Keine neuen Pakete in Level 5 noetig. Das Level ist ein reines Prompt-Engineering-Level — es werden keine neuen Dependencies eingefuehrt. Kein P0-Fehler (fehlende `npm install`). |
| B2 | Erster Befehl | WARN | Kein konkreter erster Befehl in Level 5. Der Lerner weiss nicht, ob er im bestehenden Verzeichnis weiterarbeitet oder ein neues anlegen soll. Kein Rueckverweis auf das Setup aus Level 1. Ein Satz wie "Du arbeitest weiterhin im Projektverzeichnis aus Level 1. Erstelle `challenge-5-1.ts` und fuehre sie mit `npx tsx challenge-5-1.ts` aus." wuerde reichen. |
| B5 | Environment | OK | Keine neuen Environment Variables. `ANTHROPIC_API_KEY` aus Level 1 reicht. Das ist unproblematisch. |
| B7 | Troubleshooting | FAIL | Kein einziges Troubleshooting-Szenario in Level 5 (weder im Briefing noch in einer Challenge). Level 1 hat 3 typische Fehler dokumentiert. Relevante Szenarien fuer Level 5: (1) API-Key nicht gesetzt -> `Error: Missing API key`. (2) Template Literal mit einfachen Quotes statt Backticks -> Syntax Error. (3) LLM ignoriert XML-Tag-Struktur -> Prompt iterieren. (4) Token-Limit bei langem `<background-data>` in RAG-Szenarien. (5) `<thinking>`-Block wird nicht sauber getrennt. |
| B8 | Projekt-Struktur | WARN | Wie in Level 2-4: Kein Hinweis auf Projektstruktur. Implizit wird angenommen, der Lerner arbeitet im bestehenden Verzeichnis weiter. Level 1 hat das vorbildlich geloest mit "Erstelle ein Projektverzeichnis fuer dieses Level. Jede Challenge wird als eigene TypeScript-Datei gespeichert." |
| B9 | Package.json | OK | Keine neuen Konfigurationsaenderungen noetig. Alles aus Level 1 reicht. |
| B11 | Reihenfolge | OK | Hervorragend strukturiert: Template (5.1) -> Basic Prompting (5.2) -> Exemplars (5.3) -> RAG (5.4) -> Chain of Thought (5.5) -> Boss Fight -> Complete. Jede Challenge baut explizit auf den vorherigen auf. Die COMBINE-Uebungen verbinden kumulativ alle bisherigen Konzepte (5.3 COMBINE = 5.1 + 5.3, 5.4 COMBINE = 5.1 + 5.2 + 5.3 + 5.4, 5.5 COMBINE = alle 5). Keine impliziten Abhaengigkeiten. |

---

## Spezifische Anfaenger-Fragen fuer Level 5

| Frage | Beantwortet? | Wo? | Detail |
|-------|-------------|-----|--------|
| Was ist "Context Engineering"? | Ja | 01-briefing.mdx (TL;DR + WHY) | Klar erklaert: "die Kunst, einem LLM den optimalen Input zu geben". Simon-Willison-Zitat. Konkretes Problem (Copy-Paste-Prompts vs. strukturiertes System). |
| Was sind XML Tags und warum nutzt man sie in Prompts? | Ja | 02-the-template.mdx (Schicht 1) + 03-basic-prompting.mdx (Schicht 1) | Ausfuehrlich erklaert mit konkreten Beispielen. Aufmerksamkeitsverteilung (Anfang/Ende hoeher). Jeder Tag mit Funktion und Position. |
| Was ist RAG (Retrieval-Augmented Generation)? | Ja | 05-retrieval.mdx (Schicht 1) | Klar mit 3-Schritt-Erklaerung (Retrieve, Augment, Generate). Datenquellen-Tabelle. Halluzinations-Problem motiviert. |
| Was ist "Few-Shot Learning" / "Exemplars"? | Ja | 04-exemplars.mdx (Schicht 1) | Verstaendliche Analogie (neuer Mitarbeiter + E-Mail-Beispiele). Faustregel 2-5 Exemplars. |
| Was ist "Chain of Thought"? | Ja | 06-chain-of-thought.mdx (Schicht 1) | Rechenbeispiel (17*24) macht das Konzept greifbar. Tabelle wann sinnvoll vs. nicht noetig. |
| Welche Datei soll ich erstellen? | Nein | Nirgends | Kein TRY-Block und kein Starter-Code nennt einen Dateinamen. |
| Wie fuehre ich den Code aus? | Nein | Nirgends | Kein `npx tsx challenge-5-X.ts` in Level 5. |
| Was erscheint im Terminal? | Teilweise | 04-exemplars.mdx (Loesung) | Nur `// Erwartete Ausgabe: "neutral"` in Challenge 5.3. Alle anderen Challenges: kein Output. |
| Kann ich den Code direkt kopieren und ausfuehren? | Ja | Alle Challenges (Loesungen) | Alle Loesungen in `<details>` haben vollstaendige Imports und sind direkt lauffaehig. Ausnahme: TRY-Starter in 5.3 hat TODO-Kommentare im Template Literal (WARN). |

---

## Stellen wo ich als Anfaenger stecken bleibe (priorisiert)

| # | Datei | Stelle | Problem | Prioritaet |
|---|-------|--------|---------|------------|
| 1 | 02-the-template.mdx | TRY-Block (Zeile ~169-208) | Kein Dateiname. Wohin soll ich den Code schreiben? Kein `npx tsx`-Befehl. Das ist die allererste Challenge — hier muss klar sein, was ich tun soll. | P1 |
| 2 | 02-the-template.mdx | Loesung (Zeile ~219-262) | Kein erwarteter Terminal-Output. `console.log(result.text)` steht da, aber was erscheint? Funktioniert es ueberhaupt? | P1 |
| 3 | 03-basic-prompting.mdx | Walkthrough Vorher/Nachher (Zeile ~127-187) | Kein konkreter Output-Vergleich. Der Text erklaert den Unterschied, aber ich sehe nicht, wie "vorher" vs. "nachher" im Terminal aussieht. Das waere die lehrreichste Stelle fuer konkreten Output. | P1 |
| 4 | 03-basic-prompting.mdx | TRY-Block (Zeile ~189-219) | Kein Dateiname, kein Ausfuehrungsbefehl. | P1 |
| 5 | 04-exemplars.mdx | TRY-Block (Zeile ~137-166) | Kein Dateiname, kein Ausfuehrungsbefehl. Die TODO-Kommentare in Zeile 159-162 stehen innerhalb eines Template-Literal-Strings — wenn ich den Code so kopiere, landen sie als Text im Prompt. | P1 |
| 6 | 05-retrieval.mdx | TRY-Block (Zeile ~172-226) | Kein Dateiname, kein Ausfuehrungsbefehl. Kein erwarteter Output. | P1 |
| 7 | 06-chain-of-thought.mdx | TRY-Block (Zeile ~119-184) | Kein Dateiname, kein Ausfuehrungsbefehl. Kein erwarteter Output. | P1 |
| 8 | 07-boss-fight.mdx | Starter-Code (Zeile ~43-110) | Kein Dateiname, kein `npx tsx`-Befehl. Kein Beispiel-Output fuer den fertigen Documentation Assistant. | P1 |
| 9 | 04-exemplars.mdx | TRY Starter-Code (Zeile ~159-163) | `// TODO: Dein strukturierter Prompt hier` steht innerhalb eines Template-Literal-Strings. Wenn ich den Code kopiere und ausfuehre, wird der Kommentar als Prompt-Text ans LLM geschickt. | P2 |
| 10 | 01-briefing.mdx | Voraussetzungen (Zeile ~71-74) | Kein Hinweis auf Projektstruktur: Soll ich im Level-1-Verzeichnis weiterarbeiten? Ein neues anlegen? | P2 |
| 11 | Alle Challenge-Dateien | COMBINE-Uebungen | Die COMBINE-Uebungen haben nie erwarteten Output und keinen Loesungscode. Als offene Uebungen nachvollziehbar, aber ich kann nicht pruefen ob ich auf dem richtigen Weg bin. | P2 |
| 12 | 06-chain-of-thought.mdx | Extended Thinking Hinweis (Zeile ~58) | "Moderne Modelle wie Claude bieten 'Extended Thinking' als eingebautes Feature an" — das weckt meine Neugier, aber es fehlt ein Codebeispiel oder konkreter Vergleich zum manuellen CoT. Wie aktiviere ich das? | P2 |

---

## Positiv-Befunde (was als Anfaenger besonders gut ist)

1. **Didaktischer Aufbau:** Der Dreischichten-Ansatz in Challenge 5.1 (XML Tags -> Template Literals -> Funktion) ist hervorragend. Ich verstehe bei jedem Schritt WARUM die naechste Schicht noetig ist.

2. **COMBINE-Uebungen:** Die kumulative Verbindung aller Konzepte ist das beste Feature. In Challenge 5.5 werden alle 5 Bausteine zu einem `buildFullPrompt` vereint — ich sehe, wie alles zusammenhaengt.

3. **Fachbegriff-Erklaerungen:** Jeder Begriff wird mit Analogie oder Beispiel erklaert. "Neuer Mitarbeiter + E-Mails" fuer Few-Shot, "17*24" fuer CoT, "Goldfish" (aus Level 4) fuer Persistence. Die Tabellen (Datenquellen in 5.4, CoT-Eignung in 5.5) sind besonders hilfreich.

4. **Mermaid-Diagramme:** Jede Challenge hat ein klares Diagramm mit "Du bist HIER"-Markierung. Als Anfaenger weiss ich immer, wo ich im Gesamtbild stehe.

5. **Keine API-Fehler:** Kein einziger P0-Fehler. `generateText`, `streamText`, `anthropic()` werden korrekt verwendet. Das ist eine klare Verbesserung gegenueber frueheren Levels.

6. **Boss-Fight-Hinweise:** Die drei `<details>`-Bloecke in der Boss Fight adressieren genau die richtigen Stellen, an denen ich haengen bleibe: Funktions-Struktur, Exemplar-Design, Anti-Halluzinations-Regel.

7. **Anti-Halluzinations-Regel:** In Challenge 5.4 wird die wichtigste Zeile jedes RAG-Prompts explizit hervorgehoben und erklaert. "Sage ehrlich, wenn die Frage nicht beantwortbar ist" — klar und praxisrelevant.

---

## Zusammenfassung

| Bewertung | Anzahl |
|-----------|--------|
| OK | 65 |
| WARN | 26 |
| FAIL | 5 |

### Aufschluesselung der FAILs

| FAIL | Kategorie | Detail |
|------|-----------|--------|
| 1 | B3 (Mini-Steps) | 02-the-template.mdx: Kein Dateiname, kein Ausfuehrungsbefehl bei der ersten Challenge des Levels |
| 2 | B4 (Ausfuehrungsbefehl) | 02-the-template.mdx: Kein `npx tsx`-Kommando bei echten LLM-Calls |
| 3 | B6 (Erwarteter Output) | 02-the-template.mdx: Kein Terminal-Output gezeigt |
| 4 | B6 (Erwarteter Output) | 03-basic-prompting.mdx: Kein Vorher/Nachher-Output-Vergleich — die lehrreichste Stelle des ganzen Levels ohne konkreten Output |
| 5 | B7 (Troubleshooting) | Querschnitt: Kein einziges Troubleshooting-Szenario im gesamten Level |

### Aufschluesselung der WARNs (thematisch gruppiert)

| Thema | Anzahl | Betroffene Dateien |
|-------|--------|-------------------|
| Fehlender Dateiname | 5 | 03, 04, 05, 06, 07 (Challenge 5.2-5.5 + Boss Fight) |
| Fehlender Ausfuehrungsbefehl | 5 | 03, 04, 05, 06, 07 |
| Fehlender erwarteter Output | 3 | 05, 06, 07 (Challenge 5.4, 5.5, Boss Fight) |
| Projektverzeichnis unklar | 6 | 01-07 (alle ausser 08) |
| Fehlender Troubleshooting-Hinweis | 5 | 01, 02, 04, 05, 06 (Briefing + Challenges) |
| Copy-Paste-Problem (TODOs im Template Literal) | 1 | 04-exemplars.mdx |
| Fehlender erster Befehl | 1 | Querschnitt |

---

## Pattern-Vergleich mit Level 1-4

| Pattern | L1 | L2 | L3 | L4 | L5 |
|---------|----|----|----|----|-----|
| Fehlende Dateinamen | Ja | Ja | Ja | Ja | **Ja** |
| Fehlende Ausfuehrungsbefehle | Ja | Ja | Ja | Ja | **Ja** |
| Fehlender erwarteter Output | Ja | Ja | Ja | Ja | **Ja** |
| Fehlendes Troubleshooting | Ja | Ja | Ja | Ja | **Ja** |
| Unklare Projektstruktur | Ja | Ja | Ja | Ja | **Ja** |
| P0-Fehler (falsche API, fehlende npm install) | Ja | Ja | Ja | Nein | **Nein** |

Neu in Level 5 (positiv): Keine P0-Fehler. Keine falschen API-Signaturen, keine fehlenden Pakete. Das ist eine klare Verbesserung.

**Empfehlung:** Die fuenf wiederkehrenden Patterns (Dateinamen, Ausfuehrungsbefehle, erwarteter Output, Troubleshooting, Projektstruktur) sollten als globale Fixes ueber alle Levels adressiert werden. Level 5 profitiert inhaltlich am meisten von erwarteten Output-Beispielen — besonders bei Challenge 5.2 (Vorher/Nachher-Vergleich mit konkretem Terminal-Output) und bei der Boss Fight (ein Beispiel wie der Documentation Assistant im Terminal antwortet).
