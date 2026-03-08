# Expert Review: Level 1 — AI SDK Basics

**Reviewer:** AI-Engineering-Tutor & Didaktik-Review
**Datum:** 2026-03-08
**Scope:** Alle 9 Dateien unter `src/content/docs/de/level-1-ai-sdk-basics/`

---

## 01-briefing.mdx

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Klare Struktur: TL;DR, Skill Tree, Lernziele, Voraussetzungen, Challenge-Uebersicht. Logische Reihenfolge der Challenges. |
| A2 | n/a | Kein THINK (Briefing-Seite, korrekt so). |
| A3 | OK | Skill Tree zeigt klar die Position im Gesamtlernpfad. Alle 9 Levels sichtbar, aktuelles Level hervorgehoben. |
| A4 | OK | "Warum das wichtig ist" motiviert gut: konkretes Problem (verschiedene Provider-APIs) und Loesung (eine API). |
| A5 | n/a | Kein WALKTHROUGH (Briefing-Seite, korrekt so). |
| A6 | n/a | Kein TRY (Briefing-Seite, korrekt so). |
| A7 | n/a | Kein COMBINE (Briefing-Seite, korrekt so). |
| A8 | OK | Keine Code-Beispiele im Briefing (korrekt). |
| A9 | OK | 4 Quellen: Offizielle AI SDK Docs, Vercel Blog, ai-hero-dev Exercises. Alle Rang 1-3. |
| A10 | OK | Gutes Verhaeltnis: TL;DR, Mermaid-Diagramm, Tabellen-artige Aufzaehlung, CardGrid. Nicht zu lang. |
| A11 | WARN | `Output.array` wird im Briefing erwaehnt ("Was Du lernst") -- das ist korrekt, aber `Output.choice` wird in Challenge 1.5 gelehrt und fehlt hier in der Lernziel-Liste. |
| A12 | OK | Boss Fight wird klar beschrieben: CLI-Chat mit streamText + Output.object. |
| A13 | OK | Lernziele, Voraussetzungen, Skip-Hinweis und Quellen sind vorhanden. Node.js 18+, TypeScript, API-Key -- alles genannt. |
| A14 | n/a | Keine Level-Complete-Pruefung (Briefing-Seite). |

---

## 02-what-is-ai-sdk.mdx (Challenge 1.1)

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Perfekter Einstieg: Was ist das SDK, wie installiere ich es, erster Call. Fuehrt alle Grundkonzepte ein, die spaeter gebraucht werden. |
| A2 | OK | "Brauchst Du fuer jeden Provider eine andere Library?" -- aktiviert Vorwissen ueber das Chaos verschiedener APIs. Offen genug zum Nachdenken, aber mit klarer Richtung. |
| A3 | OK | Mermaid-Diagramm zeigt klar: Dein Code -> SDK -> Provider -> Anthropic/OpenAI/Google. Architektur auf einen Blick verstaendlich. |
| A4 | OK | Vorher/Nachher ueberzeugend: "Fuer jeden Provider andere API" vs. "Eine Import-Zeile aendern". |
| A5 | OK | Drei Schichten logisch aufgebaut: (1) Bibliotheken-Uebersicht, (2) Installation, (3) erster Call. Code gut kommentiert mit Inline-Erklaerungen. |
| A6 | OK | 5 TODOs, klar formuliert. In 15-20 Min loesbar. Loesung korrekt. Checkliste vorhanden. |
| A7 | OK | COMBINE greift sinnvoll voraus: Provider wechseln (Vorbereitung auf Challenge 1.2). Optional Stretch Goal: beide Provider vergleichen. |
| A8 | WARN | Modellname `claude-sonnet-4-5-20250514` -- dieser Modellname ist technisch korrekt als AI SDK Model-ID. Allerdings koennte er fuer Einsteiger verwirrend wirken gegenueber dem Marketing-Namen "Claude Sonnet 4.5". Ein kurzer Kommentar im Code wuerde helfen. |
| A9 | OK | 4 Quellen, alle Rang 1-2 (offizielle Docs, Vercel Blog, ai-hero-dev). |
| A10 | OK | Gute Balance: Mermaid-Diagramm, Tabelle (3 Bibliotheken), Code-Bloecke, Inline-Kommentare. Text nie zu lang am Stueck. |
| A11 | WARN | Die Tabelle der drei Bibliotheken sagt, alle kommen aus dem Package `ai` (gleicher Import). Das stimmt fuer die Haupt-Exports, ist aber eine Vereinfachung -- UI-Hooks wie `useChat` kommen auch aus `ai`, RSC-Exports koennen anders geroutet sein. Fuer Level 1 akzeptabel, aber ein Hinweis wie "Details in spaeteren Levels" waere sauberer. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 03-choosing-your-model.mdx (Challenge 1.2)

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Baut logisch auf 1.1 auf: Dort wurde ein Modell hardcoded, hier wird die Auswahl bewusst gemacht. `generateText` aus 1.1 wird vorausgesetzt und genutzt. |
| A2 | OK | "Woran entscheidest Du -- Kosten, Qualitaet, Geschwindigkeit?" -- gute offene Frage, die zum Nachdenken anregt. |
| A3 | WARN | Das Mermaid-Diagramm zeigt einen Entscheidungsbaum mit `codex-mini` als Code-Modell. Dieses Modell existiert so nicht als eigenstaendiger Modellname im AI SDK. Die aktuellen OpenAI-Codex-Modelle heissen `gpt-5-codex`, `gpt-5.1-codex` oder `gpt-5.1-codex-mini`. Der Name im Diagramm sollte korrigiert oder als generischer Platzhalter gekennzeichnet werden. |
| A4 | OK | Vorher/Nachher stark: "Immer dasselbe Modell -> Kosten explodieren oder Qualitaet leidet" vs. "Flash fuer einfach, Pro fuer komplex". |
| A5 | OK | Drei Schichten sauber: (1) Provider importieren, (2) Modell instanziieren, (3) Provider wechseln. Vorher/Nachher Code-Vergleich sehr gut. |
| A6 | OK | Aufgabe klar: Zwei Provider vergleichen. In 15-20 Min loesbar. Loesung korrekt. |
| A7 | OK | COMBINE baut eine `selectModel`-Funktion, die in spaeteren Challenges wiederverwendet wird. Gute Vernetzung. |
| A8 | WARN | `selectModel` gibt `LanguageModel` als Type zurueck -- korrekt. Aber `codex-mini` im OVERVIEW-Diagramm ist kein gueltiger Modellname. Im Code selbst wird `codex-mini` nicht verwendet (dort steht korrekt `claude-sonnet-4-5-20250514` und `gemini-2.5-flash`), also nur ein Diagramm-Problem. |
| A9 | OK | 3 Quellen, alle Rang 1-2. |
| A10 | OK | Zwei Mermaid-Diagramme, mehrere Code-Bloecke, Vorher/Nachher-Vergleich. Gute Auflockerung. |
| A11 | WARN | `gemini-2.5-flash` wird als Flash-Modell empfohlen. Das ist aktuell korrekt. Allerdings aendert Google Modellnamen haeufig -- ein Hinweis darauf, dass man aktuelle Modellnamen in der Provider-Dokumentation pruefen sollte, waere nuetzlich. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 04-generating-text.mdx (Challenge 1.3)

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Baut auf 1.1 (erster Call) und 1.2 (Modell-Auswahl) auf. Vertieft das Result-Objekt, das in 1.1 nur angerissen wurde. Logische Vertiefung. |
| A2 | OK | "Was bekommst Du zurueck -- nur den Text, oder mehr?" -- direkt, neugierig machend, laesst den Lerner ueberlegen. |
| A3 | OK | Mermaid-Diagramm zeigt alle Result-Properties: text, usage, finishReason, steps, response. Klar und vollstaendig. |
| A4 | OK | Vorher/Nachher gut: "Nur result.text nutzen -> Blackbox" vs. "Volle Kontrolle ueber Kosten, Debugging, Monitoring". |
| A5 | OK | Vier Schichten, sauber gestaffelt: (1) Basics, (2) Result-Objekt Detail, (3) system+prompt Combo, (4) Callbacks. Guter Tiefenaufbau. |
| A6 | OK | Aufgabe klar und in 15-20 Min machbar. Loesung vollstaendig und korrekt. onFinish Callback gut erklaert. |
| A7 | OK | COMBINE referenziert explizit `selectModel` aus 1.2 und baut darauf auf. Token-Vergleich zwischen Modellen ist eine gute Vertiefung. |
| A8 | OK | Code kompiliert. Imports korrekt. `onFinish` und `onStepFinish` Signaturen stimmen mit der AI SDK API ueberein. |
| A9 | OK | 3 Quellen, alle Rang 1-2. Inkl. API Reference Link. |
| A10 | OK | Mermaid-Diagramm, mehrere Code-Bloecke mit Inline-Kommentaren, Tabelle (Result-Properties implizit). Gut aufgelockert. |
| A11 | WARN | Schicht 3 fuehrt den `system`-Parameter ein. Das ist inhaltlich korrekt, aber Challenge 1.6 behandelt System Prompts als eigenes Thema. Es entsteht eine leichte Redundanz. Didaktisch vertretbar als "Vorschau", aber ein expliziter Hinweis wie "Details zu System Prompts folgen in Challenge 1.6" wuerde die Erwartung klaeren. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 05-streaming-text.mdx (Challenge 1.4)

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Baut direkt auf 1.3 auf: Dort generateText (alles auf einmal), hier streamText (Token fuer Token). Kontrast ist klar. |
| A2 | OK | "Warum siehst Du in ChatGPT die Antwort Wort fuer Wort?" -- alltagsnahe Frage, die sofort Vorwissen aktiviert. Sehr gut. |
| A3 | OK | Sequenzdiagramm statt Graph -- hervorragende Wahl fuer einen zeitlichen Ablauf. Zeigt klar den Unterschied zum Batch-Modus. Visuell ansprechend. |
| A4 | OK | Vorher/Nachher stark: "5-10 Sekunden leere Seite" vs. "Erster Token nach Millisekunden". Emotional nachvollziehbar. |
| A5 | OK | Vier Schichten, sauber gestaffelt: (1) Basics, (2) textStream, (3) fullStream, (4) toUIMessageStreamResponse Vorschau. Sehr guter Aufbau. |
| A6 | OK | Aufgabe in 15 Min machbar. Zwei Varianten (textStream + fullStream) als Bonus. TODOs klar. Loesung korrekt. |
| A7 | OK | COMBINE verbindet streamText mit selectModel aus 1.2. TTFT-Messung als Stretch Goal ist eine excellente Vertiefung. |
| A8 | OK | Code korrekt. `streamText` wird korrekt ohne `await` aufgerufen. `process.stdout.write` korrekt erklaert. `fullStream` Event-Typen stimmen. |
| A9 | OK | 3 Quellen, alle Rang 1-2. |
| A10 | OK | Sequenzdiagramm, Tabelle (Event-Typen), mehrere Code-Varianten, Mermaid-Graph im COMBINE. Hervorragende visuelle Vielfalt. |
| A11 | OK | Fachlich korrekt. Wichtiger Punkt korrekt erklaert: `streamText` gibt synchron zurueck, der API-Call startet erst beim Konsumieren des Streams. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 06-structured-output.mdx (Challenge 1.5)

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Logisch nach Text generieren und streamen: Jetzt steuern wir die *Struktur* des Outputs. Baut auf `generateText` aus 1.3 auf. |
| A2 | OK | "Wie bringst Du ein LLM dazu, JSON statt Freitext zurueckzugeben -- zuverlaessig, jedes Mal?" -- gute Frage, trifft ein echtes Pain Point. |
| A3 | OK | Mermaid-Diagramm zeigt klar den Kontrast: Mit Schema -> typisiertes Objekt vs. ohne -> Freitext. Dual-Path Visualisierung ist sehr effektiv. |
| A4 | OK | Vorher/Nachher stark: "JSON.parse bricht, Regex-Hacks" vs. "Kein Parsing, kein any". Pain Point gut getroffen. |
| A5 | OK | Vier Schichten sauber: (1) Zod Schema, (2) Output.object, (3) Output.array, (4) Output.choice. Logischer Aufbau von einfach zu komplex. |
| A6 | OK | Aufgabe (Produktbewertung extrahieren) ist konkret, motivierend und in 20 Min loesbar. Checkliste mit z.describe() Anforderung ist gut. |
| A7 | OK | COMBINE baut eine Zwei-Schritt-Pipeline: Output.choice -> Output.object. Referenziert selectModel aus 1.2 als Stretch Goal. Gute Vernetzung. |
| A8 | OK | Code korrekt. `Output.object`, `Output.array`, `Output.choice` alle mit korrekter API-Signatur. Zod-Imports stimmen. |
| A9 | OK | 4 Quellen inkl. Zod-Dokumentation. Alle Rang 1-2. |
| A10 | OK | Mermaid-Diagramme, Code-Bloecke mit Kommentaren, Tipp-Box. Gute Auflockerung. |
| A11 | OK | Fachlich korrekt. `Output.choice` Nutzung fuer Klassifikation ist ein guter Use Case. `z.describe()` korrekt erklaert. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 07-system-prompts.mdx (Challenge 1.6)

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | WARN | System Prompts wurden bereits in Challenge 1.3 (Schicht 3) eingefuehrt. Challenge 1.6 vertieft das Thema, aber es gibt eine Ueberlappung: Der Lerner hat den `system`-Parameter schon in 1.3 kennengelernt und verwendet. Die Progression fuehlt sich dadurch weniger wie ein "neues Konzept" und mehr wie eine Wiederholung an. Das ist didaktisch nicht falsch (Spiralcurriculum), sollte aber explizit adressiert werden: "Du kennst den system-Parameter bereits aus Challenge 1.3. Hier vertiefst Du..." |
| A2 | OK | "Was ist der Unterschied zwischen System Prompt und User Prompt?" -- gut, aber durch die Vorerfahrung aus 1.3 weniger aktivierend. Funktioniert trotzdem. |
| A3 | OK | Mermaid-Diagramm zeigt klar die Trennung: system (Rolle/Regeln/Stil) + prompt (Aufgabe) -> LLM -> Antwort. Simpel und korrekt. |
| A4 | OK | Vorher/Nachher: "Generisch, jedes Mal anders" vs. "Definierte Rolle, konsistenter Stil". Ueberzeugend. |
| A5 | OK | Drei Schichten gut aufgebaut: (1) Trennung system/prompt, (2) Was gehoert rein (4-Baustein-Tabelle), (3) Drei verschiedene Rollen mit Code. Die Tabelle der 4 Bausteine (Rolle, Tonalitaet, Regeln, Output-Format) ist besonders wertvoll. |
| A6 | OK | Drei System Prompts schreiben und vergleichen -- kreative Aufgabe, in 15-20 Min loesbar. Gut. |
| A7 | OK | COMBINE verbindet System Prompts mit Output.object aus 1.5. Code-Reviewer-Szenario ist praxisnah und motivierend. |
| A8 | OK | Code korrekt. Keine API-Fehler. Template Literals fuer mehrzeilige System Prompts korrekt. |
| A9 | OK | 3 Quellen, alle Rang 1-2. |
| A10 | OK | Mermaid-Diagramm, Tabelle (4 Bausteine), drei ausfuehrliche Code-Beispiele mit unterschiedlichen Rollen. Gute Vielfalt. |
| A11 | OK | Fachlich korrekt. Die Unterscheidung "system steuert WIE, prompt steuert WORUEBER" ist praezise und hilfreich. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 08-boss-fight.mdx

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Kommt nach allen 6 Challenges und kombiniert sie. Richtige Position. |
| A2 | n/a | Kein THINK (Boss Fight, korrekt so). |
| A3 | OK | Mermaid-Diagramm zeigt klar, wie alle 6 Bausteine zusammenfliessen. Referenziert explizit Challenge-Nummern (1.1-1.6). |
| A4 | n/a | Kein WHY (Boss Fight, korrekt so). |
| A5 | n/a | Kein WALKTHROUGH (Boss Fight -- Starter-Code stattdessen). |
| A6 | WARN | Machbarkeit: Der Boss Fight ist ambitioniert. readline + async/await + streamText + Output.object + selectModel + Usage-Tracking in einem Script. Fuer Einsteiger koennte das 30-45 Min dauern statt 25 Min. Die Hinweise helfen gut, aber ein Hinweis auf die erwartete Zeitdauer fehlt. |
| A7 | n/a | COMBINE ist der gesamte Boss Fight. |
| A8 | OK | Starter-Code ist syntaktisch korrekt. readline-Setup funktioniert. TODOs sind klar platziert. |
| A9 | OK | 4 Quellen inkl. Node.js readline-Docs. Alle Rang 1-2. |
| A10 | OK | Mermaid-Diagramm, Terminal-Output-Beispiel, Code-Block, Checkliste, 3 Hint-Sections. Gut strukturiert. |
| A11 | WARN | Hinweis 2 erwaehnt `result.usage` als Promise, das man nach dem Stream awaiten kann. Das ist korrekt fuer die aktuelle AI SDK API (`streamText` Result hat `usage` als PromiseLike). Aber diese Nuance wurde in Challenge 1.4 nicht explizit behandelt -- dort wurde nur `fullStream` mit dem `finish`-Event als Weg zum Token-Verbrauch gezeigt. Lerner koennten hier irritiert sein. Ein kurzer Einzeiler in Challenge 1.4 ("Alternativ: `await result.usage` nach dem Stream") wuerde das loesen. |
| A12 | OK | Alle 6 Challenges werden kombiniert: (1.1) SDK Setup/Imports, (1.2) selectModel, (1.3) generateText + Usage, (1.4) streamText, (1.5) Output.object + Zod, (1.6) System Prompt. Vollstaendig. Schwierigkeit angemessen als Abschluss-Challenge. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | n/a | Nicht Level-Complete-Seite. |

---

## 09-level-complete.mdx

| # | Bewertung | Kommentar |
|---|-----------|-----------|
| A1 | OK | Sauberer Abschluss nach dem Boss Fight. |
| A2 | n/a | Kein THINK (Level Complete, korrekt so). |
| A3 | n/a | Kein OVERVIEW (Level Complete, korrekt so). |
| A4 | n/a | Kein WHY (Level Complete, korrekt so). |
| A5 | n/a | Kein WALKTHROUGH (Level Complete, korrekt so). |
| A6 | n/a | Kein TRY (Level Complete, korrekt so). |
| A7 | n/a | Kein COMBINE (Level Complete, korrekt so). |
| A8 | n/a | Kein Code (Level Complete, korrekt so). |
| A9 | n/a | Keine Quellen auf der Abschluss-Seite (akzeptabel, da alle Quellen in den Challenges stehen). |
| A10 | WARN | Die Seite ist sehr kurz -- nur "Was Du gelernt hast" (Bullet-Liste), Skill Tree und ein Satz zum naechsten Level. Es fehlt ein Abschluss-Gefuehl: kein "Glueckwunsch", kein Rueckblick auf den Boss Fight, kein "Was Du jetzt kannst, was Du vorher nicht konntest". Fuer eine Gamification-Seite ("Level Complete") fehlt die emotionale Belohnung. |
| A11 | OK | Alle 6 Konzepte korrekt zusammengefasst. Fachlich akkurat. |
| A12 | n/a | Nicht Boss-Fight-Seite. |
| A13 | n/a | Nicht Briefing-Seite. |
| A14 | WARN | Die Zusammenfassung listet alle 6 Konzepte korrekt auf (AI SDK, Provider-System, generateText, streamText, Structured Output, System Prompts). `Output.choice` wird in der Zusammenfassung erwaehnt -- gut. Skill Tree ist korrekt aktualisiert (Level 1 gruen, Level 2 hervorgehoben). Allerdings fehlt ein Bezug zum Boss Fight: "Du hast einen CLI-Chat gebaut, der all das kombiniert." Die Teaser-Beschreibung fuer Level 2 ist gut, aber koennte konkreter sein. |

---

## Zusammenfassung

### FAIL (muss gefixt werden)

Keine FAILs gefunden. Level 1 ist fachlich korrekt und didaktisch solide.

### WARN (sollte verbessert werden)

1. **03-choosing-your-model.mdx (A3/A8):** Modellname `codex-mini` im OVERVIEW-Diagramm ist kein gueltiger AI SDK Modellname. Die aktuellen OpenAI-Codex-Modelle heissen `gpt-5-codex`, `gpt-5.1-codex` oder `gpt-5.1-codex-mini`. Fix: Diagramm-Text aendern zu z.B. `gpt-5.1-codex-mini` oder generisch "Code-Modell" ohne konkreten Modellnamen.

2. **04-generating-text.mdx (A11):** System Prompt wird in Schicht 3 eingefuehrt, obwohl Challenge 1.6 dieses Thema dediziert behandelt. Fix: Einen Satz ergaenzen: "Details zu System Prompts und wie Du sie optimal gestaltest, lernst Du in Challenge 1.6."

3. **07-system-prompts.mdx (A1):** Ueberlappung mit Challenge 1.3, wo der `system`-Parameter bereits eingefuehrt wurde. Fix: Im THINK oder zu Beginn des WALKTHROUGH adressieren: "Du kennst den system-Parameter bereits aus Challenge 1.3. Hier vertiefst Du, wie Du ihn fuer konsistentes Verhalten einsetzt."

4. **08-boss-fight.mdx (A6):** Kein Zeithinweis. Der Boss Fight ist ambitioniert und koennte 30-45 Min dauern. Fix: Unter dem Szenario-Text ergaenzen: "Erwartete Dauer: 30-45 Minuten."

5. **08-boss-fight.mdx (A11):** `result.usage` als PromiseLike bei streamText wird im Hinweis erwaehnt, aber in Challenge 1.4 nicht eingefuehrt. Fix: In 05-streaming-text.mdx (Schicht 2 oder 3) einen Hinweis ergaenzen: "Alternativ zu fullStream: Du kannst nach dem Stream `await result.usage` nutzen, um den Token-Verbrauch als Promise abzurufen."

6. **09-level-complete.mdx (A10/A14):** Die Seite ist zu knapp fuer eine "Level Complete"-Seite. Es fehlt emotionale Belohnung und Boss-Fight-Rueckbezug. Fix: Einen kurzen Abschnitt ergaenzen -- z.B. "Glueckwunsch! Du hast einen interaktiven CLI-Chat gebaut, der Text streamt, strukturierte JSON-Ausgabe liefert und das Modell dynamisch waehlt. Diese 6 Bausteine bilden das Fundament fuer alles, was folgt."

7. **01-briefing.mdx (A11):** `Output.choice` wird in Challenge 1.5 gelehrt, fehlt aber in der Lernziel-Liste des Briefings. Fix: Im Lernziel "Strukturierte Ausgaben" ergaenzen: `Output.object`, `Output.array` und `Output.choice`.

8. **02-what-is-ai-sdk.mdx (A11):** Die Aussage, alle drei Bibliotheken kommen aus dem gleichen `ai`-Import, ist eine Vereinfachung. Fix: Fussnote oder Klammer: "(Alle aus dem `ai` Package -- Details zur Abgrenzung in spaeteren Levels)."

### OK Highlights

- **Durchgaengig sauberes 6-Step-Pattern:** Alle Challenges folgen dem THINK -> OVERVIEW -> WHY -> WALKTHROUGH -> TRY -> COMBINE Muster konsistent. Das gibt dem Lerner eine verlassliche Struktur.
- **Hervorragende Mermaid-Diagramme:** Besonders das Sequenzdiagramm in 05-streaming-text.mdx und der Dual-Path-Vergleich in 06-structured-output.mdx sind didaktisch exzellent.
- **Progressive COMBINE-Vernetzung:** Jede Challenge baut im COMBINE-Abschnitt explizit auf vorherige Challenges auf. Die `selectModel`-Funktion aus 1.2 wird in 1.3, 1.4 und 1.5 wiederverwendet. Das erzeugt echte kumulative Kompetenz.
- **TRY-Aufgaben sind praxisnah:** Keine kuenstlichen Uebungen, sondern Szenarien die ein Entwickler real braucht (Produktbewertung extrahieren, Modelle vergleichen, verschiedene Rollen testen).
- **Code-Qualitaet durchgaengig hoch:** Alle Code-Beispiele kompilieren, Imports sind korrekt, API-Signaturen stimmen, Inline-Kommentare erlaeutern die wichtigen Stellen.
- **WHY-Abschnitte treffen Pain Points:** Besonders "JSON.parse bricht" (1.5) und "5-10 Sekunden leere Seite" (1.4) sind emotional nachvollziehbar und motivieren den Lerner, die Loesung zu lernen.
- **Boss Fight integriert alle 6 Bausteine:** Kein Challenge-Baustein wird ausgelassen. Die Checkliste ist klar und pruefbar.
- **Quellen durchgaengig Rang 1-2:** Ausschliesslich offizielle AI SDK Docs, Vercel Blog und ai-hero-dev Exercises. Keine fragwuerdigen Quellen.
