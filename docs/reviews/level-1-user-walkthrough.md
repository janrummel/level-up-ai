# Level 1: User Walkthrough Review

**Perspektive:** TypeScript-Entwickler, 2 Jahre Erfahrung, ChatGPT-Nutzer, noch nie programmatisch mit LLM-APIs gearbeitet.
**Datum:** 2026-03-08

---

## 01-briefing.mdx (Level 1: AI SDK Basics -- Briefing)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | WARN | Node.js 18+ und npm/pnpm werden erwaehnt, aber es fehlt: Welche Node-Version genau empfohlen ist, wie ich pruefen kann ob meine Version reicht (`node -v`), und WO ich den API-Key besorge (kein Link zu Anthropic Console, OpenAI Platform, etc.). "Ein API-Key fuer mindestens einen Provider" ist zu vage fuer einen Einsteiger. |
| B2 | FAIL | Kein erster Befehl. Kein `mkdir`, kein `npm init`, kein `npm install`. Das Briefing ist rein konzeptuell. Ich weiss nicht, ob ich jetzt ein Verzeichnis erstellen soll oder ob das in der naechsten Challenge kommt. |
| B3 | FAIL | Es fehlt komplett: Wie erstelle ich mein Projekt? Ein Ordner? Ein Ordner pro Challenge? Muss ich `npm init` machen? Brauche ich eine `tsconfig.json`? Wie fuehre ich TypeScript-Dateien aus? (`npx tsx`? `ts-node`? `tsc` + `node`?) |
| B4 | OK | Keine Code-Beispiele auf dieser Seite -- ist akzeptabel fuer ein Briefing. |
| B5 | WARN | API-Key wird erwaehnt ("Ein API-Key fuer mindestens einen Provider"), aber kein Wort darueber, WIE er gesetzt wird. Das kommt erst in Challenge 1.1. Fuer einen Einsteiger waere ein Vorgriff hilfreich: "Du brauchst den Key spaeter als Environment Variable." |
| B6 | OK | Kein ausfuehrbarer Code, kein erwarteter Output noetig. |
| B7 | FAIL | Kein Troubleshooting. Was, wenn ich Node.js 16 habe? Was, wenn ich keinen API-Key bekomme? Was kostet ein API-Key ueberhaupt? Gibt es kostenlose Tiers? |
| B8 | FAIL | Voellig unklar. Ein Projekt fuer das ganze Level? Ein Ordner pro Challenge? Soll ich ein Git-Repo erstellen? |
| B9 | FAIL | Keine Erwaehnung von `package.json` oder `tsconfig.json`. Als TS-Entwickler weiss ich, dass ich beides brauche -- aber ich weiss nicht, welche Konfiguration. |
| B10 | OK | Kein kopierbarer Code -- ist fuer ein Briefing in Ordnung. |
| B11 | WARN | Die Reihenfolge der Challenges ist klar (1.1 bis 1.6, dann Boss Fight). Aber es fehlt: "Starte mit Challenge 1.1" oder "Arbeite die Challenges der Reihe nach durch." |
| B12 | WARN | "AI SDK Core", "AI SDK UI", "AI SDK RSC" werden nur in der "Was Du lernst"-Liste erwaehnt, nicht erklaert. "Provider" wird nicht definiert. "Structured Output" und "System Prompts" werden vorausgesetzt. Das ist fuer die Briefing-Seite grenzwertig OK, weil die Erklaerungen in den Challenges kommen. |

### Walkthrough-Protokoll

Ich lese das Briefing. OK, ich soll das AI SDK lernen. Skill Tree sieht gut aus -- ich sehe wo ich stehe. Die "Was Du lernst"-Liste gibt mir einen guten Ueberblick. Voraussetzungen: Node.js 18+, TypeScript-Kenntnisse, API-Key. Soweit klar.

Jetzt will ich loslegen. Aber... was mache ich als Erstes? Soll ich ein Terminal oeffnen? Einen Ordner erstellen? Die Seite sagt mir nicht, was mein naechster konkreter Schritt ist. Ich scrolle runter zu den Challenges und klicke auf "1.1 -- Was ist das AI SDK?" in der Hoffnung, dass dort die Setup-Anleitung kommt.

Ich bin leicht unsicher: Brauche ich fuer jede Challenge einen eigenen Ordner? Oder arbeite ich in einem Projekt? Und wo bekomme ich diesen API-Key her? Die Seite sagt "Anthropic, OpenAI oder Google" -- aber keinen Link. Ich muesste jetzt selbst googlen. Das ist ein Reibungspunkt.

---

## 02-what-is-ai-sdk.mdx (Challenge 1.1: Was ist das AI SDK?)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | WARN | `npm install ai @ai-sdk/anthropic` ist da -- gut. Aber es fehlt: Wo genau fuehre ich das aus? Muss ich vorher `npm init -y` machen? In welchem Verzeichnis? |
| B2 | WARN | `npm install ai @ai-sdk/anthropic` ist ein konkreter erster Befehl -- aber davor muesste `mkdir level-1 && cd level-1 && npm init -y` stehen. |
| B3 | FAIL | Es fehlen kritische Schritte: (1) Projektverzeichnis erstellen, (2) `npm init -y` oder `package.json` anlegen, (3) Dateiname fuer den Code (z.B. `index.ts`), (4) Ausfuehrungsbefehl (`npx tsx index.ts`). |
| B4 | FAIL | Kein einziger Ausfuehrungsbefehl. Ich habe Code-Bloecke, aber kein "Fuehre das so aus: `npx tsx index.ts`". Als TypeScript-Einsteiger im LLM-Bereich weiss ich nicht automatisch, wie ich eine einzelne .ts-Datei ausfuehre. |
| B5 | WARN | `export ANTHROPIC_API_KEY="sk-ant-..."` steht da -- aber: Gilt das nur fuer die aktuelle Terminal-Session? Soll ich eine `.env`-Datei nutzen? Was ist best practice? Der `export`-Befehl ist fluechtig -- schliesst der User das Terminal, ist der Key weg. Keine Erwaehnung von `dotenv`. |
| B6 | FAIL | Kein erwarteter Output. Ich weiss nicht, was `result.text` ungefaehr ausgeben wird, wie `result.usage` aussieht (Zahlenbeispiel?), oder was `result.finishReason` konkret zeigt. |
| B7 | FAIL | Was passiert, wenn der API-Key falsch ist? Wenn die Installation fehlschlaegt? Wenn ich Node.js 16 habe? Null Troubleshooting. |
| B8 | FAIL | Immer noch unklar ob ich ein dediziertes Projekt brauche oder alle Challenges in einem Ordner liegen. |
| B9 | FAIL | Kein Wort ueber `package.json` (brauche ich `"type": "module"`?), keine `tsconfig.json`. Top-Level `await` in der Loesung erfordert bestimmte Konfiguration. |
| B10 | WARN | Die Loesung ist kopierbar und hat alle Imports. Aber: Top-Level `await` funktioniert nur mit `"type": "module"` in `package.json` oder mit `tsx`. Das wird nicht erwaehnt. |
| B11 | WARN | Walkthrough ist von oben nach unten logisch. Aber "Schicht 2: Installation und Setup" haette Schicht 1 sein sollen -- erst installieren, dann verstehen. |
| B12 | OK | "Provider" wird im Kontext erklaert. "Environment Variable" wird nicht erklaert, ist aber allgemeines Entwickler-Wissen. "Modell-Instanz" koennte einen Halbsatz Erklaerung vertragen. |

### Walkthrough-Protokoll

Ich oeffne die Seite. THINK-Frage ist gut, regt zum Nachdenken an. Das Diagramm zeigt mir die Architektur -- drei Bibliotheken, Provider-System, verstanden.

Dann kommt "Installation und Setup": `npm install ai @ai-sdk/anthropic`. Moment -- wo soll ich das ausfuehren? Ich habe kein Projekt. Soll ich jetzt eins erstellen? Ich oeffne ein Terminal, erstelle mir spontan einen Ordner, mache `npm init -y`. Dann `npm install ai @ai-sdk/anthropic`. OK, funktioniert.

Jetzt der Code. Ich kopiere den `generateText`-Block. Aber in welche Datei? Ich erstelle mal eine `index.ts`. Ich paste den Code rein. Jetzt... wie fuehre ich das aus? `tsc index.ts && node index.js`? Aber da ist Top-Level `await` drin, das geht nur mit `"type": "module"`. Oder brauche ich `tsx`? Ich probiere `npx tsx index.ts`. Das muesste funktionieren -- aber die Seite sagt mir das nicht.

Ich versuche es. Fehler: `ANTHROPIC_API_KEY` nicht gesetzt. Richtig, ich muss den Key exportieren. `export ANTHROPIC_API_KEY="sk-ant-..."`. Hmm, ich brauche einen echten Key. Die Seite sagt nicht, wo ich den herbekomme. Ich google "Anthropic API Key", finde die Console, registriere mich, bekomme einen Key. Das hat 10 Minuten gedauert, die die Seite haette sparen koennen mit einem Link.

Am Ende sehe ich eine Ausgabe im Terminal -- aber ich weiss nicht, ob sie richtig ist, weil kein erwarteter Output angegeben ist.

---

## 03-choosing-your-model.mdx (Challenge 1.2: Dein erstes Modell)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK | Setup wurde in 1.1 abgehandelt. Zusaetzliche Provider-Installation (`npm install @ai-sdk/openai`, `@ai-sdk/google`) wird erwaehnt. |
| B2 | OK | Kein neuer erster Befehl noetig -- man baut auf dem bestehenden Projekt auf. |
| B3 | WARN | Fuer die TRY-Aufgabe brauche ich ZWEI API-Keys (Anthropic + OpenAI). Das wird nicht explizit gesagt. Wenn ich nur einen habe, kann ich die Aufgabe nicht loesen. |
| B4 | FAIL | Kein Ausfuehrungsbefehl. Wo speichere ich den Code? Selbe Datei wie vorher oder eine neue? Wie fuehre ich es aus? |
| B5 | WARN | Fuer zwei Provider brauche ich zwei API-Keys. `OPENAI_API_KEY` wird nicht gezeigt (nur im COMBINE-Teil erwaehnt). Google API-Key (`GOOGLE_GENERATIVE_AI_KEY`?) wird gar nicht erwaehnt. |
| B6 | FAIL | Kein erwarteter Output. Wie sieht ein typischer Vergleich zweier Modelle aus? |
| B7 | WARN | Was, wenn ich nur einen API-Key habe? Kann ich die Aufgabe trotzdem machen? Kein Fallback-Hinweis. |
| B8 | FAIL | Weiterhin unklar: Neue Datei? Selber Ordner? |
| B9 | FAIL | Immer noch kein Wort ueber `package.json` oder `tsconfig.json`. |
| B10 | OK | Code-Bloecke sind kopierbar mit vollstaendigen Imports. |
| B11 | OK | Logischer Aufbau: Provider importieren, Modell instanziieren, Provider wechseln. |
| B12 | OK | "Flash-Modell", "Pro-Modell" werden im Kontext erklaert. `LanguageModel` Type wird genutzt, aber kurz im Code-Kommentar erklaert. |

### Walkthrough-Protokoll

Ich lese die Seite. Provider-System, Modell-Auswahl -- alles nachvollziehbar. Die Diagramme helfen.

Dann kommt die TRY-Aufgabe: Zwei Provider vergleichen. Hmm, ich habe nur einen Anthropic-Key. Soll ich jetzt auch noch einen OpenAI-Account erstellen? Oder einen Google-Account? Die Seite sagt nicht: "Du brauchst mindestens zwei API-Keys fuer diese Aufgabe."

Ich registriere mich bei OpenAI, bekomme einen Key, setze `export OPENAI_API_KEY=...`. Dann kopiere ich die Loesung, paste sie in... ja, wohin? `index.ts`? `compare-models.ts`? Ich ueberschreibe einfach meine alte `index.ts`. Fuehre aus mit `npx tsx index.ts`. Funktioniert.

Die COMBINE-Aufgabe mit `selectModel` ist cool -- ich verstehe den Nutzen. Aber: Der `LanguageModel`-Type wird importiert mit `import type { LanguageModel } from 'ai';` -- das ist das erste Mal, dass ich `import type` sehe im Kurs. Koennte einen Einsteiger irritieren, ist aber generell TypeScript-Wissen.

---

## 04-generating-text.mdx (Challenge 1.3: Text generieren)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK | Kein zusaetzliches Setup noetig. |
| B2 | OK | Baut auf bestehendem Projekt auf. |
| B3 | OK | Schritte sind vollstaendig fuer den Inhalt dieser Challenge. |
| B4 | FAIL | Kein Ausfuehrungsbefehl. Gleiches Problem wie vorher. |
| B5 | OK | Keine neuen Environment-Variablen noetig. |
| B6 | WARN | Im Walkthrough gibt es Kommentare wie `// -> "Promises in JavaScript sind..."` und `// -> { promptTokens: 12, completionTokens: 150, totalTokens: 162 }`. Das ist gut! Aber bei der Loesung fehlt ein beispielhafter Output. |
| B7 | FAIL | Was passiert bei `finishReason: 'length'`? Die Seite erklaert, dass die Antwort abgeschnitten wurde -- aber nicht, was ich dann tun soll. `maxTokens` erhoehen? Wie? |
| B8 | FAIL | Immer noch unklar. |
| B9 | FAIL | Immer noch kein Wort. |
| B10 | OK | Code-Bloecke sind kopierbar mit vollstaendigen Imports. |
| B11 | OK | Logischer Aufbau von Basics ueber Result-Objekt zu Callbacks. Vier Schichten, gut strukturiert. |
| B12 | OK | "Callbacks", "onFinish", "onStepFinish" werden im Kontext erklaert. "Multi-Step-Verarbeitung" wird auf Level 3 verwiesen. |

### Walkthrough-Protokoll

Ich lese die Seite. THINK-Frage gut. Das Result-Objekt mit den fuenf Properties wird klar erklaert. Besonders hilfreich: die Inline-Kommentare mit Beispielwerten (`// -> { promptTokens: 12, ... }`).

Die Schicht-fuer-Schicht-Erklaerung funktioniert gut. Erst Basics, dann Result-Objekt, dann `system + prompt`, dann Callbacks. Ich verstehe jedes Konzept.

Die TRY-Aufgabe ist machbar. Ich kopiere die Loesung, paste sie in meine `index.ts`, fuehre aus. Funktioniert. Ich sehe den generierten Text, den Token-Verbrauch und `finishReason: 'stop'`.

Einziger Haken: Wenn ich `finishReason: 'length'` bekomme, weiss ich nicht, was ich tun soll. Die Seite erklaert das Problem, aber nicht die Loesung.

---

## 05-streaming-text.mdx (Challenge 1.4: Text streamen)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK | Kein zusaetzliches Setup noetig. |
| B2 | OK | Baut auf bestehendem Projekt auf. |
| B3 | OK | `streamText` vs. `generateText` Unterschiede sind klar. Wichtiger Hinweis: "Kein await noetig!" ist explizit erwaehnt. |
| B4 | FAIL | Kein Ausfuehrungsbefehl. |
| B5 | OK | Keine neuen Environment-Variablen. |
| B6 | WARN | Kein konkreter erwarteter Output. Die Seite sagt "Text erscheint Token fuer Token" -- aber ein Terminal-Screenshot oder eine Simulation waere hilfreicher. |
| B7 | FAIL | Was, wenn der Stream abbricht? Was bei Netzwerkfehler? Kein Error Handling gezeigt (obwohl `error`-Event in `fullStream` erwaehnt wird). |
| B8 | FAIL | Weiterhin unklar. |
| B9 | FAIL | Weiterhin nicht erwaehnt. |
| B10 | OK | Code-Bloecke kopierbar, Imports vollstaendig. |
| B11 | OK | Logischer Aufbau: textStream, dann fullStream, dann Web-API-Vorschau. |
| B12 | OK | "AsyncIterable", "for await...of", "`process.stdout.write`" werden im Kontext erklaert. Gut: Warum `process.stdout.write` statt `console.log` wird begruendet. |

### Walkthrough-Protokoll

Ich lese die Seite. Die `streamText`-Erklaerung ist gut -- besonders der Hinweis "Kein await noetig!" spart mir einen typischen Anfaengerfehler.

`textStream` mit `for await...of` ist nachvollziehbar. `process.stdout.write` vs. `console.log` -- gute Erklaerung, das haette ich sonst falsch gemacht.

`fullStream` mit dem Switch-Case ist etwas komplexer, aber die Event-Tabelle hilft. Ich kopiere die Variante 2 (fullStream), paste sie ein, fuehre aus. Funktioniert. Der Text erscheint Wort fuer Wort. Cool, das ist der ChatGPT-Effekt!

Die COMBINE-Aufgabe mit `performance.now()` fuer Time-to-First-Token ist eine gute Idee. Aber: `performance.now()` erfordert `import { performance } from 'perf_hooks'` in Node.js -- oder eben nicht, wenn die Node-Version neu genug ist. Das koennte verwirrend sein.

---

## 06-structured-output.mdx (Challenge 1.5: Strukturierte Ausgabe)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | WARN | `zod` muss installiert werden (`npm install zod`), aber das wird NICHT explizit als Installationsbefehl gezeigt. Der Import `import { z } from 'zod'` steht da, aber kein `npm install zod`. |
| B2 | OK | Baut auf bestehendem Projekt auf. |
| B3 | FAIL | Es fehlt: `npm install zod`. Die Seite geht davon aus, dass Zod bereits installiert ist. Fuer einen Einsteiger, der noch nie mit Zod gearbeitet hat, fehlt auch eine Mini-Erklaerung was Zod ist (nicht nur was ein Schema ist). |
| B4 | FAIL | Kein Ausfuehrungsbefehl. |
| B5 | OK | Keine neuen Environment-Variablen. |
| B6 | WARN | Die Inline-Kommentare geben Typ-Hinweise (`// <- string -- typisiert!`), aber keinen konkreten erwarteten Output (z.B. wie ein generiertes Rezept tatsaechlich aussieht). |
| B7 | WARN | Was, wenn das LLM kein valides JSON liefert? Passiert das? Wie geht die Output API damit um? Das wird nicht thematisiert. |
| B8 | FAIL | Weiterhin unklar. |
| B9 | FAIL | Weiterhin nicht erwaehnt. |
| B10 | WARN | Code ist kopierbar, aber `zod` muss vorher installiert sein. Ohne den Hinweis `npm install zod` bricht der Code beim Import. |
| B11 | OK | Logischer Aufbau: Schema definieren, Output.object, Output.array, Output.choice. Gut geschichtet. |
| B12 | WARN | "Zod" wird nicht eingefuehrt. Der erste Satz ist "Ein Zod Schema beschreibt die Struktur..." -- aber was IST Zod? Eine Validierungs-Library? Eine Schema-Library? Ein Einsteiger, der noch nie mit Zod gearbeitet hat, braucht einen Satz Kontext. |

### Walkthrough-Protokoll

Ich lese die Seite. THINK-Frage ist relevant -- ja, LLMs geben manchmal komisches JSON zurueck, kenne ich von ChatGPT.

Dann sofort: `import { z } from 'zod'`. Moment -- muss ich Zod installieren? Ich suche auf der Seite nach `npm install zod`. Steht nirgends. Ich mache es einfach: `npm install zod`. Funktioniert.

Das Rezept-Schema ist ein gutes Beispiel. `z.describe()` fuer zusaetzlichen Kontext -- clever. `Output.object` verbindet Schema mit `generateText` -- das ist elegant. Kein `JSON.parse`, kein `any`. Als TypeScript-Entwickler gefaellt mir das.

`Output.array` und `Output.choice` sind logische Erweiterungen. Die COMBINE-Aufgabe (erst Kategorie bestimmen, dann Details extrahieren) ist eine realistische Anwendung.

Aber: Ich stolpere darueber, dass ich nicht weiss, was passiert wenn das Schema nicht passt. Gibt es einen Fehler? Einen Retry? Die Seite laesst mich im Unklaren.

---

## 07-system-prompts.mdx (Challenge 1.6: System Prompts)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK | Kein zusaetzliches Setup noetig. |
| B2 | OK | Baut auf bestehendem Projekt auf. |
| B3 | OK | Alle Schritte sind vollstaendig fuer diese Challenge. |
| B4 | FAIL | Kein Ausfuehrungsbefehl. |
| B5 | OK | Keine neuen Environment-Variablen. |
| B6 | WARN | Die Inline-Kommentare bei der Pirat-Rolle zeigen einen erwarteten Output (`// -> "Arr, TypeScript sei..."`). Das ist gut! Aber bei der Loesung fehlt ein konkreter Output. |
| B7 | OK | Fuer diese Challenge sind keine typischen Fehler zu erwarten. |
| B8 | FAIL | Weiterhin unklar. |
| B9 | FAIL | Weiterhin nicht erwaehnt. |
| B10 | OK | Code-Bloecke sind kopierbar mit vollstaendigen Imports. Die for-Schleife in der Loesung ist elegant und direkt ausfuehrbar. |
| B11 | OK | Logischer Aufbau: Trennung system/prompt, Bausteine, drei Rollen vergleichen. |
| B12 | OK | "System Prompt", "User Prompt" werden klar abgegrenzt. "Tonalitaet" ist ein Fachbegriff, der aber im Kontext verstaendlich ist. |

### Walkthrough-Protokoll

Ich lese die Seite. Die Pirat-Rolle ist lustig und macht den Punkt sofort klar. Die Tabelle mit den vier Bausteinen (Rolle, Tonalitaet, Regeln, Output-Format) ist hilfreich -- ich kann mir sofort eigene System Prompts bauen.

Die drei Beispiel-Rollen (Technischer Redakteur, ELI5, Code-Reviewer) zeigen den Unterschied dramatisch. Ich kopiere die Loesung mit der for-Schleife, paste ein, fuehre aus. Drei verschiedene Antworten auf dieselbe Frage. Das ist ueberzeugend.

Die COMBINE-Aufgabe (System Prompt + Structured Output) ist eine gute Vorbereitung auf die Boss Fight. Ich verstehe, wie `system` und `Output.object` zusammenspielen.

Diese Seite hat am wenigsten Reibung. Der Inhalt ist klar, die Beispiele sind gut, die Aufgabe ist machbar.

---

## 08-boss-fight.mdx (Boss Fight: CLI Chat)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK | Kein zusaetzliches Setup noetig -- alles wurde in vorherigen Challenges installiert. |
| B2 | OK | Starter-Code ist vorhanden. |
| B3 | WARN | Der Starter-Code importiert `readline`, aber es fehlt der Hinweis: Ist `readline` built-in oder muss ich es installieren? (Es ist built-in, aber ein Einsteiger weiss das nicht unbedingt.) Ausserdem fehlt: In welche Datei kommt der Code? `cli-chat.ts`? `boss-fight.ts`? `index.ts`? |
| B4 | FAIL | Kein Ausfuehrungsbefehl. Wie starte ich den CLI-Chat? `npx tsx cli-chat.ts`? Das ist fuer die Boss Fight besonders wichtig, weil es ein interaktives Programm ist. |
| B5 | OK | Keine neuen Environment-Variablen. |
| B6 | WARN | Die Terminal-Simulation am Anfang zeigt ungefaehr, wie der Chat aussehen soll. Das ist gut! Aber es fehlt: Was passiert bei `/json` genau? Wie sieht der Token-Counter aus? |
| B7 | WARN | Keine Fehlerbehandlung erwaehnt. Was, wenn der API-Call fehlschlaegt? Was, wenn der User Unsinn eingibt? |
| B8 | WARN | Implizit ist klar, dass das ein Projekt ist. Aber: Soll ich eine neue Datei im bestehenden Projekt erstellen oder ein neues Projekt? |
| B9 | FAIL | Top-Level-Code mit `readline` und Callbacks -- brauche ich spezielle `tsconfig`-Einstellungen? |
| B10 | WARN | Der Starter-Code ist ein gutes Geruest, aber die TODOs sind etwas vage. "TODO: Importiere AI SDK Funktionen" -- welche genau? Ein Einsteiger, der die vorherigen Challenges nicht perfekt erinnert, muss zurueckblaettern. |
| B11 | OK | Die 6 Anforderungen sind klar nummeriert. Die Hinweise (Details/Summary) sind eine gute Hilfestellung. |
| B12 | OK | Begriffe wurden in vorherigen Challenges eingefuehrt. |

### Walkthrough-Protokoll

Ich oeffne die Boss Fight. Das Szenario ist klar: Ein CLI-Chat wie ein Mini-ChatGPT. Die Terminal-Simulation zeigt mir, wie es aussehen soll. Cool.

Die sechs Anforderungen sind klar. Ich starte mit dem Starter-Code. Kopiere ihn in... ja, welche Datei? Ich nenne sie `chat.ts`.

Jetzt muss ich die TODOs ausfuellen. Imports -- ich schaue in meine vorherigen Dateien: `generateText`, `streamText`, `Output` aus `'ai'`, `anthropic` aus `'@ai-sdk/anthropic'`, `z` aus `'zod'`. System Prompt -- kein Problem, habe ich in 1.6 gelernt. Zod Schema -- kann ich.

`selectModel` basierend auf Nachrichtenlaenge: Kurze Nachrichten < 50 Zeichen -> Flash-Modell. Aber welches Flash-Modell? In Challenge 1.2 wurde `google('gemini-2.5-flash')` erwaehnt -- brauche ich jetzt einen Google API-Key? Oder soll ich ein Anthropic-Flash-Modell nehmen? Die Seite ist hier nicht spezifisch genug. Ich entscheide mich, fuer beide Pfade Anthropic zu nutzen (mit `claude-haiku` als Flash-Alternative), weil ich nur einen Anthropic-Key habe. Aber das entspricht nicht dem, was in 1.2 gezeigt wurde.

Die drei Hinweise (Details/Summary) sind hilfreich. Besonders Hinweis 3 (Prompt-Extraktion mit `message.slice(5).trim()`) spart mir Debugging-Zeit.

Ich baue den Chat zusammen. Ausfuehren mit... `npx tsx chat.ts`? Steht nirgends. Ich probiere es. Funktioniert. Der Chat laeuft. Ich tippe Nachrichten, bekomme Streaming-Antworten, `/json` liefert strukturierten Output.

Aber: Ich bemerke, dass `result.usage` bei `streamText` ein Promise ist, das ich awaiten muss. Das steht im Hinweis 2 -- aber haette mich fast gestolpert. Und: Wo bekomme ich das `usage` bei `streamText` her? `fullStream` mit `finish`-Event oder `await result.usage`? Beides wird erwaehnt, aber die Bevorzugung ist unklar.

---

## 09-level-complete.mdx (Level 1 Complete)

### Checkliste

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| B1 | OK | Zusammenfassungsseite, kein Setup noetig. |
| B2 | OK | Kein Befehl noetig. |
| B3 | OK | Keine Schritte noetig. |
| B4 | OK | Kein Code zum Ausfuehren. |
| B5 | OK | Keine Environment-Variablen. |
| B6 | OK | Kein Output erwartet. |
| B7 | OK | Kein Troubleshooting noetig. |
| B8 | OK | Zusammenfassung. |
| B9 | OK | Keine Konfiguration noetig. |
| B10 | OK | Kein Code zum Kopieren. |
| B11 | OK | Sauberer Abschluss mit Skill Tree. |
| B12 | OK | Alle Begriffe wurden in vorherigen Challenges eingefuehrt. |

### Walkthrough-Protokoll

Ich lese die Zusammenfassung. Alle sechs Konzepte werden kurz wiederholt. Der Skill Tree zeigt mir, dass Level 1 gruen ist und Level 2 als Naechstes kommt. Gutes Gefuehl -- ich habe etwas abgeschlossen.

Der Teaser fuer Level 2 ("Tokens, Context Windows und warum Deine Kosten explodieren koennen") macht neugierig. Ich wuerde weitermachen.

Die Seite ist kurz und praegnant. Kein Feedback noetig -- genau richtig als Abschluss.

---

## Top-10 Stellen wo ein Anfaenger aufgibt oder steckenbleibt

1. **01-briefing + 02-what-is-ai-sdk**: Kein Projekt-Setup. Ich weiss nicht, wie ich ein Verzeichnis erstelle, `npm init` mache, eine `tsconfig.json` konfiguriere. Das ist die groesste Huerde: Ich kann den ERSTEN Schritt nicht machen, weil er nicht beschrieben ist.

2. **02-what-is-ai-sdk**: Kein Ausfuehrungsbefehl. Ich habe Code, aber weiss nicht WIE ich ihn ausfuehre. `npx tsx`? `ts-node`? `tsc && node`? Fuer einen Einsteiger ist das ein Showstopper.

3. **01-briefing**: Kein Link zu API-Key-Registrierung. "Du brauchst einen API-Key" -- aber WO bekomme ich den? Wie viel kostet das? Gibt es Free Tiers? 10 Minuten Googlen fuer etwas, das ein Link loesen wuerde.

4. **06-structured-output**: `npm install zod` fehlt. Der Code bricht beim Import, und der Einsteiger weiss nicht warum.

5. **02-what-is-ai-sdk**: Top-Level `await` funktioniert nicht ohne richtige Konfiguration (`"type": "module"` in `package.json` oder `tsx`). Kein Hinweis darauf.

6. **03-choosing-your-model**: Zwei API-Keys noetig, aber nicht explizit gesagt. Einsteiger mit nur einem Key koennen die Aufgabe nicht loesen und fragen sich, ob sie etwas falsch machen.

7. **08-boss-fight**: `selectModel` erwartet verschiedene Provider, aber welches Flash-Modell nehme ich, wenn ich nur einen Anthropic-Key habe? Kein Fallback-Vorschlag.

8. **02-what-is-ai-sdk**: API-Key per `export` ist fluechtig. Schliesst der User das Terminal, muss er den Key erneut setzen. `.env`-Datei + `dotenv` oder `tsx`-automatische-Erkennung werden nicht erwaehnt.

9. **04-generating-text**: `finishReason: 'length'` wird erklaert, aber kein Fix gezeigt. Was mache ich, wenn meine Antwort abgeschnitten wird? `maxTokens` erhoehen? Wo? Wie?

10. **Durchgehend (alle Challenges)**: Kein erwarteter Output. Ich fuehre Code aus und weiss nicht, ob das Ergebnis "richtig" aussieht. Eine Zeile wie "Du solltest ungefaehr Folgendes sehen: ..." wuerde enorm helfen.

---

## FAIL (muss gefixt werden)

1. **01-briefing.mdx + 02-what-is-ai-sdk.mdx**: Kein Projekt-Setup-Guide. Es fehlt ein konkreter Block am Anfang:
   ```
   mkdir level-1-ai-sdk && cd level-1-ai-sdk
   npm init -y
   npm install ai @ai-sdk/anthropic zod
   npm install -D tsx typescript
   ```
   Dieser Block sollte entweder im Briefing als "Bevor Du loslegst" oder ganz am Anfang von Challenge 1.1 stehen. Zusaetzlich muss erwaehnt werden, dass `"type": "module"` in die `package.json` muss ODER dass alle Dateien mit `npx tsx dateiname.ts` ausgefuehrt werden.

2. **02-what-is-ai-sdk.mdx (und alle folgenden)**: Kein Ausfuehrungsbefehl bei Code-Beispielen. Fix: Nach jeder Loesung einen Block hinzufuegen:
   ```
   Speichere den Code als `challenge-1-1.ts` und fuehre ihn aus:
   npx tsx challenge-1-1.ts
   ```

3. **01-briefing.mdx**: Keine Links zu API-Key-Registrierung. Fix: Links zu den drei Haupt-Providern hinzufuegen:
   - [Anthropic Console](https://console.anthropic.com/) -- API-Key unter "API Keys" erstellen
   - [OpenAI Platform](https://platform.openai.com/) -- API-Key unter "API Keys" erstellen
   - [Google AI Studio](https://aistudio.google.com/) -- API-Key erstellen
   Dazu ein Satz: "Alle Provider bieten ein kostenloses Startguthaben oder Free Tier an."

4. **06-structured-output.mdx**: `npm install zod` fehlt. Fix: Vor dem ersten Zod-Code-Block einfuegen:
   ```
   Falls noch nicht installiert:
   npm install zod
   ```

5. **01-briefing.mdx oder 02-what-is-ai-sdk.mdx**: `package.json` und `tsconfig.json` werden nie thematisiert. Fix: Im Setup-Block folgende `package.json` zeigen:
   ```json
   {
     "type": "module"
   }
   ```
   Oder alternativ klar sagen: "Wir verwenden `tsx` als TypeScript-Runner. Du brauchst keine `tsconfig.json` und kein `"type": "module"` -- `tsx` regelt das fuer Dich."

---

## WARN (sollte verbessert werden)

1. **Alle Challenges (02-07)**: Kein erwarteter Output nach ausfuehrbaren Code-Beispielen. Fix: Nach jeder Loesung einen Kasten hinzufuegen:
   ```
   Erwarteter Output (ungefaehr):
   Text: TypeScript ist eine typisierte Erweiterung von JavaScript...
   Usage: { promptTokens: 14, completionTokens: 89, totalTokens: 103 }
   Finish Reason: stop
   ```

2. **02-what-is-ai-sdk.mdx**: Environment-Variable per `export` ist fluechtig. Fix: Einen Absatz hinzufuegen, der `.env`-Dateien erwaehnt und erklaert, dass `tsx` `.env`-Dateien automatisch laedt (ab tsx 4.x) oder alternativ `dotenv` genutzt werden kann. Ideal: Konkrete `.env`-Datei zeigen:
   ```
   ANTHROPIC_API_KEY=sk-ant-...
   ```

3. **03-choosing-your-model.mdx**: Zwei API-Keys als Voraussetzung nicht explizit genannt. Fix: Am Anfang der Seite einen Hinweis:
   ```
   Fuer diese Challenge brauchst Du idealerweise zwei verschiedene API-Keys.
   Wenn Du nur einen hast: Kein Problem -- nutze denselben Provider mit zwei
   verschiedenen Modellen (z.B. claude-sonnet und claude-haiku).
   ```

4. **08-boss-fight.mdx**: Kein Ausfuehrungsbefehl, unklar welche Datei. Fix: Am Anfang des Starter-Codes:
   ```
   Erstelle eine Datei `chat.ts` und fuege den folgenden Code ein.
   Starte den Chat mit: npx tsx chat.ts
   ```

5. **04-generating-text.mdx**: `finishReason: 'length'` wird erklaert, aber kein Fix. Fix: Einen Satz hinzufuegen:
   ```
   Wenn Du 'length' siehst, kannst Du maxTokens erhoehen:
   const result = await generateText({
     model: anthropic('claude-sonnet-4-5-20250514'),
     maxTokens: 4096,  // Standard ist oft niedriger
     prompt: '...',
   });
   ```

6. **06-structured-output.mdx**: Zod wird nicht eingefuehrt. Fix: Vor dem ersten Schema-Beispiel einen Satz:
   ```
   Zod ist eine TypeScript-first Schema-Validierungs-Library. Du definierst
   die erwartete Struktur, und Zod sorgt dafuer, dass die Daten dieser
   Struktur entsprechen -- inklusive TypeScript-Typen.
   ```

7. **08-boss-fight.mdx**: `selectModel` erfordert verschiedene Provider, aber nur ein Key vorhanden. Fix: Im Starter-Code einen Kommentar:
   ```typescript
   // Tipp: Wenn Du nur einen Provider hast, nutze verschiedene Modelle
   // desselben Providers -- z.B. anthropic('claude-haiku-3-5-20241022')
   // fuer einfache und anthropic('claude-sonnet-4-5-20250514') fuer komplexe Aufgaben.
   ```

8. **01-briefing.mdx**: Projektstruktur unklar. Fix: Einen Absatz hinzufuegen:
   ```
   Fuer dieses Level arbeitest Du in einem einzigen Projektordner. Jede
   Challenge wird als eigene TypeScript-Datei gespeichert. Die Boss Fight
   kombiniert alles in einer finalen Datei.
   ```

9. **Alle Challenges**: Keine Troubleshooting-Sektion. Fix: Mindestens im Briefing die drei haeufigsten Fehler auflisten:
   ```
   - "API key not found": Pruefe ob Dein API-Key korrekt gesetzt ist (echo $ANTHROPIC_API_KEY)
   - "Cannot use import statement": Du brauchst "type": "module" in package.json oder nutze npx tsx
   - "Module not found": Pruefe ob alle Packages installiert sind (npm ls)
   ```

10. **02-what-is-ai-sdk.mdx**: Reihenfolge der Schichten. "Schicht 1: Die drei Bibliotheken" ist Theorie, "Schicht 2: Installation und Setup" ist Praxis. Fix: Erst Installation, dann Theorie. Einsteiger wollen erst loslegen, dann verstehen.
