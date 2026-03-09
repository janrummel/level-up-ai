# Expert Review: Level 6 — Evals

> Datum: 2026-03-09 | Reviewer: AI Expert Agent

## Zusammenfassung

Level 6 ist insgesamt sehr solide aufgebaut. Die didaktische Progression von Evalite-Grundlagen ueber deterministische Scorer zu LLM-as-Judge und dann Dataset Management ist logisch und gut durchdacht. Die Code-Beispiele sind korrekt, gut kommentiert und die API-Signaturen stimmen mit den aktuellen Evalite/AI-SDK-Versionen ueberein. Hauptkritikpunkte sind: Die Factuality-Score-Skala weicht vom Braintrust-Original ab (E ist dort 0.0, nicht 1.0), die Langfuse-Integration zeigt die manuelle SDK-Variante statt der empfohlenen OpenTelemetry-Integration, und die Level-Complete-Seite hat keine emotionale Belohnung.

## Checkliste A — Detail-Ergebnisse

### A1: Didaktische Progression
**Bewertung:** OK

Die Reihenfolge ist sauber: 6.1 fuehrt `evalite()`, `data`, `task`, `scorers` ein. 6.2 baut darauf auf mit eigenen Scorern (`createScorer`). 6.3 erhoet die Komplexitaet mit LLM-as-Judge. 6.4 adressiert die Datenqualitaet (logisch erst jetzt, weil man vorher verstehen muss, wofuer man Daten braucht). 6.5 weitet den Blick auf Production. Kein Konzept wird verwendet, bevor es eingefuehrt wurde. `traceAISDKModel` wird in 6.1 Schicht 5 eingefuehrt und ab dann konsistent genutzt.

### A2: THINK-Qualitaet
**Bewertung:** OK

Alle THINK-Fragen aktivieren Vorwissen und sind spezifisch genug:
- 6.1: "Wie testest Du..." — aktiviert Pain Point aus manueller Arbeit
- 6.2: "Wann deterministisch vs. LLM?" — Entscheidungskompetenz
- 6.3: "Wie bewertest Du offene Antworten?" — Problem klar benannt
- 6.4: "Wie viele Test-Cases und woher?" — Meta-Ebene
- 6.5: "Was passiert in Production?" — Perspektivwechsel

### A3: OVERVIEW-Klarheit
**Bewertung:** OK

Alle Mermaid-Diagramme zeigen klar die Position im Gesamtbild mit "Du bist HIER"-Markierung. Die Diagramme sind konsistent gestyled (Blau=Input, Gruen=Verarbeitung, Orange=Output). Die Entscheidungsbaum-Darstellung in 6.2 (deterministisch vs. LLM) ist besonders gelungen.

### A4: WHY-Motivierung
**Bewertung:** OK

Jede Challenge hat ein klares Vorher/Nachher-Pattern:
- 6.1: "hoffst vs. misst" — ueberzeugend
- 6.2: "LLM fuer triviale Checks vs. Mikrosekunden" — Kosten-Argument
- 6.3: "Stunden manuell vs. Sekunden automatisch" — Skalierungsargument
- 6.4: "false confidence vs. repraesentativ" — Qualitaetsargument
- 6.5: "blind vs. Dashboard" — Observability-Argument

### A5: WALKTHROUGH-Tiefe
**Bewertung:** OK

Die Schichten bauen logisch aufeinander auf. Besonders gut:
- 6.1: 6 Schichten von Installation bis Dashboard-UI — keine Luecke
- 6.2: Von Inline Scorer ueber createScorer zu Autoevals — schrittweiser Komplexitaetsanstieg
- 6.3: Vom Problem (offene Antworten) ueber die Score-Skala zum fertigen Scorer — nachvollziehbar
- Code ist durchgehend kommentiert mit Inline-Erklaerungen (Pfeile ←)

### A6: TRY-Machbarkeit
**Bewertung:** WARN

Die TRY-Aufgaben sind klar formuliert mit TODOs und Checklisten. Loesungen sind korrekt und vollstaendig. Zeitschaetzung:
- 6.1: ~10 Min (angemessen)
- 6.2: ~15 Min (angemessen)
- 6.3: ~20 Min (angemessen)
- 6.4: ~20 Min (angemessen)
- 6.5: Kein Coding — konzeptuell (explizit begruendet, OK)

**Problem:** In 6.1, 6.2, 6.3 fehlt der explizite Ausfuehrungsbefehl im TRY-Block. Erst bei der Checkliste steht `pnpm eval:dev`, aber der Zusammenhang "erstelle die Datei, dann fuehre diesen Befehl aus" ist nicht explizit. Bekanntes P1-Pattern aus frueheren Reviews.

### A7: COMBINE-Vernetzung
**Bewertung:** OK

Jede Challenge verweist explizit auf vorherige:
- 6.2 COMBINE: "Erweitere Deine Eval aus Challenge 6.1"
- 6.3 COMBINE: "Kombiniere deterministischen Scorer (6.2) mit Factuality (6.3)"
- 6.4 COMBINE: "Nutze Dein Dataset (6.4) mit Scorern aus 6.2 und 6.3"
- 6.5 COMBINE: "Evalite (6.1-6.4) fuer Development, Langfuse (6.5) fuer Production"
Die Mermaid-Diagramme in COMBINE zeigen die Vernetzung visuell mit Rueckverweisen auf Challenge-Nummern.

### A8: Code-Korrektheit
**Bewertung:** WARN

**Korrekt:**
- `evalite()` API-Signatur: `{ data, task, scorers }` — stimmt
- `createScorer<Input, Output, Expected>` — stimmt (3 Generics)
- `traceAISDKModel` Import aus `evalite/ai-sdk` — stimmt
- `import { Levenshtein } from 'autoevals'` — stimmt
- `import { generateObject } from 'ai'` mit Zod Schema — stimmt
- `import { openai } from '@ai-sdk/openai'` — stimmt
- Modellnamen `gpt-4o`, `gpt-4o-mini` — aktuell

**Problem 1 (WARN):** In 6.3, die Score-Skala fuer Grade E wird als 1.0 definiert mit der Beschreibung "Irrelevant diff — Unterschiede egal". Die Tabelle in Schicht 2 sagt jedoch "Irrelevant — Antwort hat nichts mit der Frage zu tun" mit Score 0.0. Widerspruch: Die Tabelle sagt E=0.0, der Code sagt E=1.0. Der Code-Kommentar sagt "Irrelevant diff — Unterschiede egal" (was eher dem Braintrust-Original entspricht, wo E "The answers differ, but these differences don't matter from the perspective of factuality" bedeutet und Score ~1.0 ergibt). Die Tabelle-Beschreibung "Antwort hat nichts mit der Frage zu tun" ist inkorrekt — das ist NICHT was E bedeutet. Die Tabelle muss korrigiert werden.

**Problem 2 (WARN):** Kein `tsconfig.json`-Hinweis. Evalite braucht TypeScript-Konfiguration. Fuer Einsteiger koennte das ein Stolperstein sein.

### A9: Quellen-Qualitaet
**Bewertung:** OK

Jede Seite hat mindestens 2 Quellen. Die Quellen-Qualitaet ist gut:
- Rang 1: GitHub Repos (evalite, autoevals) — primaer, direkt verifizierbar
- Rang 2: npmjs.com, langfuse.com/docs — offizielle Dokumentation
- Rang 3: ai-hero-dev Exercises — Lernmaterial

Links sind plausibel und folgen konsistenten Patterns. Die ai-hero-dev Exercise-Links verweisen auf spezifische Unterordner (06.01, 06.02, etc.).

**Hinweis:** Die Links konnten nicht live verifiziert werden. Die ai-hero-dev Repo-Struktur muss manuell geprueft werden (evtl. sind Pfade anders benannt).

### A10: Text-Grafik-Code-Balance
**Bewertung:** OK

Gute Balance:
- Jede Challenge hat 2-3 Mermaid-Diagramme (OVERVIEW, COMBINE, ggf. im Walkthrough)
- Code-Bloecke alle 2-3 Absaetze
- Tabellen fuer Vergleiche (6.3: Det vs. LLM, 6.5: Evalite vs. Langfuse)
- Kein langer Fliesstext ohne Auflockerung
- Die Langfuse-Challenge (6.5) hat etwas mehr Text ohne Code, aber das ist begruendet (konzeptuelle Challenge).

### A11: Fachliche Korrektheit
**Bewertung:** WARN

**Korrekt:**
- Evalite als "Vitest fuer AI" — passende Analogie
- `traceAISDKModel` Erklaerung als Wrapper — korrekt
- Deterministic vs. LLM-as-Judge Entscheidungslogik — korrekt
- Dataset Management Zyklus — korrekt
- Langfuse Konzepte (Trace, Generation, Score, Span) — korrekt
- `generateObject` mit Zod Schema — korrekt

**Problem 1 (WARN):** Factuality Score-Skala Tabelle vs. Code (siehe A8, Problem 1). Die Tabelle-Beschreibung fuer Grade E ("Antwort hat nichts mit der Frage zu tun") ist falsch. E bedeutet im Braintrust-Original: "The answers differ, but these differences don't matter from the perspective of factuality." Das ist ein inhaltlich relevanter Unterschied.

**Problem 2 (WARN):** Langfuse-Integration (6.5, Schicht 3): Der gezeigte Code verwendet die manuelle `Langfuse` SDK-Variante (`new Langfuse()`, `langfuse.trace()`, `trace.generation()`). Die aktuelle Best Practice fuer AI SDK Integration ist die OpenTelemetry-basierte Integration (`@langfuse/vercel-ai-sdk` oder `LangfuseExporter`). Die OVERVIEW erwaehnt OpenTelemetry, der Code zeigt aber die manuelle Variante. Das ist nicht falsch, aber potentiell irrefuehrend — der Lernende denkt, er muss manuell Traces erstellen, obwohl es automatisch gehen wuerde.

**Problem 3 (WARN):** In 6.5 wird nicht erklaert, warum `openai` statt `anthropic` als Provider verwendet wird. In Level 1-5 wurde vermutlich ein bestimmter Provider eingefuehrt. Hier wird `openai('gpt-4o')` und `openai('gpt-4o-mini')` ohne Begruendung verwendet. Fuer den Factuality Scorer (6.3) waere eine Erklaerung sinnvoll: "Warum nutzen wir hier OpenAI als Judge?" (z.B. weil gpt-4o besonders gut als Judge funktioniert, oder weil Evalite-Beispiele standardmaessig OpenAI verwenden).

### A12: Boss Fight Integration
**Bewertung:** OK

Die Boss Fight kombiniert alle 5 Challenges:
- Dataset (6.4): 20+ diverse Test-Cases gefordert
- generateText + traceAISDKModel (6.1): Task-Funktion
- Deterministic Scorer (6.2): titleLength, noTrailingPeriod
- LLM-as-Judge (6.3): titleRelevance
- Eval-Driven Iteration: Prompt anpassen, erneut evaluieren

Die Schwierigkeit ist angemessen — es ist eine Integrations-Aufgabe, kein neues Konzept. Starter-Code mit klaren TODOs vorhanden. Drei gestufte Hinweise. Bewertungskriterien als Checkliste.

**Hinweis:** Langfuse (6.5) fehlt in der Boss Fight. Das ist begruendbar (Langfuse ist konzeptuell, keine Code-Integration in der Challenge), aber koennte explizit erwaehnt werden: "Langfuse wuerde in Production hinzukommen."

### A13: Briefing-Vollstaendigkeit
**Bewertung:** OK

- Lernziele: 5 Bullet Points, klar formuliert
- Voraussetzungen: Level 1 (generateText) und Level 5 (System Prompts) — spezifisch
- Skip-Hinweis: Vorhanden, mit Link zur Boss Fight
- Quellen: 5 Quellen, alle relevant
- Skill Tree: Korrekt, Level 6 orange hervorgehoben
- TL;DR: Praegnant
- Zitat: Matt Pocock — passend (Evalite-Autor)

### A14: Level Complete
**Bewertung:** WARN

**Korrekt:**
- Zusammenfassung deckt alle 5 Challenges ab — korrekt und vollstaendig
- Skill Tree aktualisiert: Level 6 gruen, Level 7 orange
- Naechstes Level korrekt benannt: "Level 7: Streaming"
- Vorschau auf Level 7 Inhalt vorhanden

**Problem (WARN):** Keine emotionale Belohnung. Kein "Congratulations", kein Achievement-Framing, keine Wuerdigung der Leistung. Bekanntes P2-Pattern aus Level 1-5 Reviews. Der Lernende hat gerade ein komplexes Level abgeschlossen (Eval-Pipeline mit deterministischen und LLM-Scorern, Dataset Management, Production Monitoring) — das verdient Anerkennung.

---

## Findings nach Datei

### 01-briefing.mdx
- Keine Findings. Vollstaendig und gut strukturiert.

### 02-evalite-basics.mdx
- **P1-WARN:** TRY-Block: Kein expliziter Ausfuehrungsbefehl ("Erstelle die Datei `hello.eval.ts` und fuehre `pnpm eval:dev` aus"). Steht nur in der Checkliste.
- **P1-WARN:** Schicht 1: Kein Hinweis auf benoetigte `tsconfig.json` oder vorausgesetztes TypeScript-Setup.

### 03-deterministic-eval.mdx
- **P1-WARN:** TRY-Block: Kein expliziter Ausfuehrungsbefehl.
- Sonst sauber. Code korrekt, `createScorer` API stimmt.

### 04-llm-as-judge.mdx
- **P0-WARN:** Score-Skala Tabelle (Schicht 2): Grade E Beschreibung "Antwort hat nichts mit der Frage zu tun" ist falsch. Im Prompt und Code bedeutet E: "The answers differ, but these differences don't matter from the perspective of factuality." Die Tabelle suggeriert, E sei negativ (Irrelevanz), der Code gibt aber 1.0 (positiv). **Muss korrigiert werden.**
- **P1-WARN:** TRY-Block: Kein expliziter Ausfuehrungsbefehl.
- **P2-WARN:** Keine Erklaerung, warum OpenAI als Judge-Provider gewahlt wird.

### 05-dataset-management.mdx
- Keine kritischen Findings. Gut strukturiert mit Kategorien-Systematik und Dataset Critiquing.

### 06-langfuse.mdx
- **P1-WARN:** Schicht 3 zeigt manuelle Langfuse-SDK-Integration statt der empfohlenen OpenTelemetry-Variante. Die OVERVIEW erwaehnt OTel, der Code weicht ab.
- **P2-WARN:** TRY ist rein konzeptuell (kein Code). Begruendung ist vorhanden und nachvollziehbar, aber ein optionales Mini-Coding-Beispiel (z.B. "erstelle einen Trace mit dem Langfuse SDK") wuerde den Lerneffekt steigern.
- **P2-WARN:** Der Quickstart-Link `https://langfuse.com/docs/get-started` sollte verifiziert werden — Langfuse aendert URL-Strukturen gelegentlich.

### 07-boss-fight.mdx
- **P2-WARN:** Langfuse (6.5) wird nicht explizit als "nicht Teil der Boss Fight" erwaehnt. Der Lernende koennte sich fragen, warum Challenge 6.5 fehlt.
- Sonst: Sehr gute Integration aller Bausteine. Starter-Code, Hinweise und Bewertungskriterien sind klar.

### 08-level-complete.mdx
- **P2-WARN:** Keine emotionale Belohnung / Achievement-Framing. Bekanntes Pattern.
- **P2-WARN:** Kein Rueckblick auf die Boss Fight ("Du hast eine komplette Eval-Pipeline gebaut...").

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

1. **04-llm-as-judge.mdx, Schicht 2, Score-Skala Tabelle:** Grade E Beschreibung korrigieren. Aktuell: "Irrelevant — Antwort hat nichts mit der Frage zu tun" mit Score 0.0. Korrekt: "Irrelevant Difference — Antworten unterscheiden sich, aber die Unterschiede sind fuer die Faktizitaet nicht relevant" mit Score 1.0. Die Tabelle muss mit dem Code (E: 1.0) und dem Prompt (Option E: "The answers differ, but these differences don't matter from the perspective of factuality") konsistent sein.

### Prioritaet 1 (Fehlende Schritte — sollte gefixt werden)

2. **02-evalite-basics.mdx, 03-deterministic-eval.mdx, 04-llm-as-judge.mdx:** Im TRY-Block expliziten Ausfuehrungsbefehl hinzufuegen. Vorschlag: Vor der Checkliste einen Absatz "Erstelle die Datei `<name>.eval.ts`, fuehre `pnpm eval:dev` aus und pruefe die Ergebnisse im Dashboard unter `http://localhost:3006`."

3. **02-evalite-basics.mdx, Schicht 1:** Hinweis auf benoetigtes TypeScript-Setup hinzufuegen. Z.B.: "Stelle sicher, dass Dein Projekt eine `tsconfig.json` hat. Falls nicht: `pnpm tsc --init`."

4. **06-langfuse.mdx, Schicht 3:** Klarstellen, dass der gezeigte Code die manuelle SDK-Variante ist. Hinweis hinzufuegen: "Fuer AI SDK Integration empfiehlt Langfuse die OpenTelemetry-basierte Variante (`LangfuseExporter`). Die manuelle Variante zeigt die Konzepte explizit — in Production wuerdest Du die OTel-Integration nutzen."

### Prioritaet 2 (Nice-to-have — verbessert die Qualitaet)

5. **08-level-complete.mdx:** Emotionale Belohnung hinzufuegen. Vorschlag: Ein Achievement-Block am Anfang: "Du hast eine komplette Eval-Pipeline gebaut — von der ersten Evalite-Eval bis zu Production-Monitoring mit Langfuse. Du kannst jetzt LLM-Ausgaben systematisch messen, vergleichen und verbessern. Das ist ein Skill, den die meisten AI Engineers erst spaet lernen."

6. **07-boss-fight.mdx:** Explizit erwaehnen, dass Langfuse (6.5) konzeptionell abgedeckt ist: "Langfuse wuerdest Du in Production ergaenzen — hier fokussieren wir auf die Eval-Pipeline."

7. **04-llm-as-judge.mdx:** Kurze Erklaerung hinzufuegen, warum `openai('gpt-4o')` als Judge-Modell verwendet wird (z.B. "GPT-4o eignet sich besonders gut als Judge-Modell wegen seiner Faehigkeit, nuancierte inhaltliche Bewertungen abzugeben").

8. **06-langfuse.mdx:** Quellen-Link `https://langfuse.com/docs/get-started` auf Gueltigkeit pruefen.
