# Expert Review: Level 5 — Context Engineering

> Datum: 2026-03-09 | Reviewer: AI Expert Agent

## Zusammenfassung

Level 5 ist didaktisch stark aufgebaut und vermittelt die fuenf Kernkonzepte des Context Engineering (Template, XML Tags, Exemplars, RAG, Chain of Thought) in einer sauberen Progression. Die Code-Beispiele sind korrekt und gut kommentiert, die AI SDK v6 APIs werden richtig verwendet. **Zwei FAILs:** Saemtliche Anthropic-Quellen-URLs (docs.anthropic.com) sind defekt — die Dokumentation wurde auf platform.claude.com migriert und konsolidiert, wobei die alten Sub-Pfade nicht mehr existieren. Ausserdem fehlen in allen TRY-Sektionen Dateinamen und Ausfuehrungsbefehle (konsistenter P1-Fehler aus Level 1-4). Die fachliche Darstellung der Prompt-Patterns ist korrekt, die XML Tag-Namen stammen aus dem ai-hero-dev Kurs und sind konsistent verwendet, auch wenn Anthropic selbst andere Tag-Namen in der offiziellen Doku empfiehlt.

## Checkliste A — Detail-Ergebnisse

### A1: Didaktische Progression
**Bewertung: OK**

Die fuenf Challenges bauen sauber aufeinander auf:
- 5.1 (The Template) fuehrt XML Tags und die `buildSystemPrompt()`-Funktion ein — die Grundlage fuer alle weiteren Challenges.
- 5.2 (Basic Prompting) vertieft die XML-Struktur und zeigt die Transformation von vagen zu strukturierten Prompts. Baut auf 5.1 auf (COMBINE verweist auf `buildSystemPrompt()`).
- 5.3 (Exemplars) fuegt den `<examples>`-Tag hinzu. Baut auf `<task-context>` und `<the-ask>` aus 5.1/5.2 auf.
- 5.4 (Retrieval) fuegt `<background-data>` hinzu und setzt XML Tags, Template und Exemplars voraus. COMBINE verweist explizit auf 5.1-5.3.
- 5.5 (Chain of Thought) fuegt `<thinking-instructions>` und `<output-format>` als letzte Bausteine hinzu. COMBINE vereint alle 5 Konzepte.

Kein Konzept wird genutzt, bevor es eingefuehrt wurde. Die Progression ist linear und nachvollziehbar.

### A2: THINK-Qualitaet
**Bewertung: OK**

Alle fuenf THINK-Fragen aktivieren Vorwissen und sind spezifisch genug:
- 5.1: "Wenn Du einen System Prompt schreibst — wie stellst Du sicher, dass er bei 20 verschiedenen API-Calls konsistent bleibt?" — Praxisnahe Frage, oeffnet das DRY-Problem.
- 5.2: "Was ist der Unterschied zwischen 'Fasse das zusammen' und einem Prompt mit klarer Rolle, Kontext und Formatvorgabe?" — Direkte Kontrastierung, aktiviert Erfahrung.
- 5.3: "Wie wuerdest Du einem neuen Mitarbeiter einen bestimmten Schreibstil erklaeren — mit Regeln oder mit Beispielen?" — Starke Analogie, sofort verstaendlich.
- 5.4: "Was passiert, wenn Du ein LLM nach aktuellen Nachrichten fragst? Woher weiss es, ob seine Antwort stimmt?" — Trifft das Kernproblem (Trainingsdatum, Halluzination).
- 5.5: "Wenn Du eine komplexe Rechenaufgabe loest — rechnest Du im Kopf oder schreibst Du Zwischenschritte auf?" — Gute Analogie, macht das Konzept sofort greifbar.

### A3: OVERVIEW-Klarheit
**Bewertung: OK**

Alle Mermaid-Diagramme zeigen klar die Position im Gesamtbild mit konsistentem "Du bist HIER"-Highlighting (orangener Rahmen). Die Farbcodierung ist durchgaengig:
- Blau: Input/Variablen
- Gruen: Verarbeitung (LLM, Tags, Funktionen)
- Orange: Aktueller Fokus / Output
- Rot: Fehlerhafter Pfad (z.B. Halluzination in 5.4, unvorhersehbare Ausgabe in 5.2)

Die Diagramme in 5.4 (RAG-Datenfluss mit gestrichelter "Halluzination"-Linie) und 5.5 (Vergleich mit/ohne CoT) sind besonders informativ. Das Briefing-Diagramm (Skill Tree) zeigt Level 1-4 als freigeschaltet und Level 5 als aktiv — korrekt.

### A4: WHY-Motivierung
**Bewertung: OK**

Jede Challenge hat ein starkes Vorher/Nachher:
- 5.1: "Du kopierst Prompts per Copy-Paste in jede Datei" vs. "Ein Prompt, eine Stelle, viele Aufgaben" (02-the-template.mdx:49-51)
- 5.2: "Mal bekommst Du eine Liste mit 10 Punkten, mal einen Absatz" vs. "Die Ergebnisse sind reproduzierbar, messbar und iterierbar" (03-basic-prompting.mdx:47-49)
- 5.3: "Du schreibst ausfuehrliche Regeln, aber das LLM haelt sich nicht immer daran" vs. "Weniger Regeln noetig, konsistentere Ergebnisse" (04-exemplars.mdx:39-41)
- 5.4: "Es wird halluzinieren — eine plausibel klingende, aber falsche Antwort" vs. "Die Antwort ist verifizierbar, aktuell und mit Quellenangabe" (05-retrieval.mdx:66-68)
- 5.5: "Bei komplexen Aufgaben fuehrt das zu oberflaechlichen oder fehlerhaften Antworten" vs. "Die Reasoning-Kette ist nachpruefbar, Fehler sind lokalisierbar" (06-chain-of-thought.mdx:41-43)

Das Briefing (01-briefing.mdx:67-69) liefert zusaetzlich das starke Simon-Willison-Zitat und die praktische Problembeschreibung.

### A5: WALKTHROUGH-Tiefe
**Bewertung: OK**

Alle Challenges haben 3-4 Schichten, logisch aufgebaut:
- 5.1: Grundstruktur (XML Tags) → Variables → buildSystemPrompt Funktion (3 Schichten)
- 5.2: XML Tag Struktur → Jedes Tag erklaert mit Beispiel → Schlecht zu gut Transformation (3 Schichten)
- 5.3: Was sind Exemplars → XML Tag Struktur → Wie viele Exemplars / dynamische Generierung (3 Schichten)
- 5.4: RAG-Prinzip (3 Schritte) → Datenquellen-Tabelle → Integration ins Template → Anti-Halluzinations-Regel (4 Schichten)
- 5.5: Was ist CoT → thinking-instructions Tag → output-format Trennung → Wann CoT nutzen (4 Schichten)

Code ist durchgehend mit `// ←` Inline-Kommentaren annotiert. Die Tabelle in 5.4 (Datenquellen) und 5.5 (Wann CoT sinnvoll) sind besonders hilfreich. Keine fehlenden Zwischenschritte.

### A6: TRY-Machbarkeit
**Bewertung: WARN**

Aufgaben sind in 15-25 Minuten loesbar. TODOs sind klar formuliert, Checklisten vorhanden, Loesungen korrekt und vollstaendig mit Erklaerungen in `<details>`-Tags.

**Probleme (konsistent mit Level 1-4):**
- Keine Dateinamen fuer die Uebungsdateien (z.B. `challenge-5-1.ts`)
- Keine Ausfuehrungsbefehle (z.B. `npx tsx challenge-5-1.ts`)
- Kein erwarteter Output (was sollte in der Konsole erscheinen?)
- Kein Hinweis auf benoetigte Packages (`npm install ai @ai-sdk/anthropic`)
- Kein Hinweis auf benoetigte Umgebungsvariable (`ANTHROPIC_API_KEY`)

Fuer Einsteiger ist das eine Huerde — sie wissen moeglicherweise nicht, wie sie den Code ausfuehren sollen. Bewertung WARN statt FAIL, weil die TODOs und Loesungen inhaltlich korrekt sind und Level 1 die Grundlagen (Installation, Ausfuehrung) bereits abdeckt.

### A7: COMBINE-Vernetzung
**Bewertung: OK**

Jede Challenge greift explizit auf vorherige zurueck:
- 5.1 COMBINE: `streamText` aus Level 1 + Template aus 5.1
- 5.2 COMBINE: `buildSystemPrompt()` aus 5.1 + XML Tags aus 5.2
- 5.3 COMBINE: `PromptConfig`-Interface aus 5.1 + `examples`-Slot erweitern
- 5.4 COMBINE: Template (5.1) + XML (5.2) + Exemplars (5.3) + RAG (5.4) — explizite Referenzen im Diagramm
- 5.5 COMBINE: ALLE 5 Konzepte in einer `buildFullPrompt`-Funktion — explizites Diagramm mit 5.1-5.5 Labels

Die COMBINE-Uebungen sind progressiv und nicht isoliert. Besonders gut: Die COMBINE-Diagramme zeigen in jedem Schritt die kumulierten Bausteine mit Challenge-Nummern.

### A8: Code-Korrektheit
**Bewertung: OK**

**Korrekt:**
- Imports: `import { generateText } from 'ai'`, `import { streamText } from 'ai'`, `import { anthropic } from '@ai-sdk/anthropic'` — alle korrekt fuer AI SDK v6.
- Modellname: `anthropic('claude-sonnet-4-5-20250514')` — wird durchgaengig korrekt verwendet. Dies ist der korrekte Modellname fuer AI SDK v6 (Maerz 2026).
- API-Aufrufe: `generateText({ model, system, prompt })` und `streamText({ model, prompt })` — korrekte Signaturen.
- `streamText` Streaming Pattern: `for await (const chunk of result.textStream) { process.stdout.write(chunk); }` — korrekt fuer AI SDK v6.
- Template Literals mit XML Tags — syntaktisch korrekt, `.trim()` am Ende.
- TypeScript Interfaces (`PromptConfig`) — korrekt typisiert.
- Exemplars `.map()` Pattern fuer dynamische XML-Generierung — korrekt.

**Anmerkung:** In 5.2 (03-basic-prompting.mdx:156) wird der gesamte Prompt (inkl. `<task-context>`) in den `prompt`-Parameter statt in `system` gesetzt. Das ist technisch korrekt (funktioniert), aber nicht Best Practice — `<task-context>` gehoert eigentlich in den `system`-Parameter. In der Loesung wird dasselbe Pattern verwendet. Dies ist eine bewusste Vereinfachung fuer den Lernkontext (nur ein Parameter statt zwei), die fachlich vertretbar ist, aber erwaehnt werden sollte.

### A9: Quellen-Qualitaet
**Bewertung: FAIL**

**Defekte Anthropic-URLs (betrifft alle 8 Dateien):**

Die Anthropic-Dokumentation wurde von `docs.anthropic.com` nach `platform.claude.com` migriert. Dabei wurden die URL-Strukturen konsolidiert. Alle im Kurs verwendeten Anthropic-URLs leiten per 301 weiter und fuehren dann zu 404-Seiten:

| Verwendete URL | Status | Betroffen in |
|----------------|--------|-------------|
| `docs.anthropic.com/.../prompt-engineering` | 301 → 404 | 01, 02, 03, 07 |
| `docs.anthropic.com/.../prompt-engineering/use-examples` | 301 → 404 | 04 |
| `docs.anthropic.com/.../retrieval-augmented-generation` | 301 → 404 | 05, 07 |
| `docs.anthropic.com/.../prompt-engineering/chain-of-thought` | 301 → existiert* | 06 |
| `docs.anthropic.com/.../extended-thinking` | 301 → existiert | 06 |

*Die Chain-of-Thought-URL fuehrt zur konsolidierten "Prompting best practices" Seite, die CoT als Abschnitt enthaelt — nicht zu einer eigenen Seite.

**Korrekte aktuelle URLs waeren:**
- Prompt Engineering Overview: `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview`
- Prompting Best Practices (inkl. Examples, CoT): `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-prompting-best-practices`
- Extended Thinking: `https://docs.anthropic.com/en/docs/build-with-claude/extended-thinking` (funktioniert nach Redirect)
- RAG: Kein direktes Aequivalent gefunden — die RAG-Seite scheint entfernt worden zu sein.

**Sonstige Quellen:**
- Vercel AI SDK: `ai-sdk.dev/docs/foundations/prompts` — existiert, Rang 1
- ai-hero-dev GitHub Exercises 05.01-05.05 — existiert, Rang 2
- Jede Seite hat 2-3 Quellen — Mindestanforderung erfuellt

Bewertung FAIL, weil die primaere Quelle (Anthropic Prompt Engineering) in 6 von 8 Dateien defekt ist. Das ist ein systematischer Fehler, der die Glaubwuerdigkeit des Kurses beeintraechtigt.

### A10: Text-Grafik-Code-Balance
**Bewertung: OK**

Gute Balance in allen Dateien:
- Jede Challenge hat 2 Mermaid-Diagramme (OVERVIEW + COMBINE)
- Tabellen werden sinnvoll eingesetzt (Datenquellen in 5.4, Wann CoT in 5.5, Exemplar-Anzahl in 5.3)
- Code-Bloecke sind angemessen lang (10-30 Zeilen) mit Inline-Kommentaren
- Text-Abschnitte sind kurz (3-6 Saetze) und lockern den Code auf
- Die Boss Fight hat ein integrierendes Mermaid-Diagramm
- XML-Code-Bloecke zeigen die Tag-Struktur separat vor dem TypeScript-Code

Kein Abschnitt ist zu lang ohne visuelle Auflockerung.

### A11: Fachliche Korrektheit
**Bewertung: WARN**

**Korrekt:**
- XML Tags als Strukturierungsmittel fuer Prompts — korrekt, Anthropic empfiehlt dies explizit.
- Reihenfolge (Anfang/Ende wichtiger als Mitte) — korrekt, entspricht der Aufmerksamkeitsverteilung bei LLMs. Anthropic empfiehlt "Put longform data at the top" und "Queries at the end can improve response quality by up to 30%".
- RAG-Definition (Retrieval-Augmented Generation, 3 Schritte: Retrieve, Augment, Generate) — korrekt.
- Chain of Thought Erklaerung (Zwischenschritte explizit machen, Tokens fuer Denkprozess "verbrennen") — korrekt.
- Unterscheidung CoT vs Extended Thinking (06-chain-of-thought.mdx:58): "Moderne Modelle wie Claude bieten Extended Thinking als eingebautes Feature an. Das hier beschriebene Prompt-basierte CoT ist die manuelle Variante, die mit jedem Modell funktioniert." — Korrekt und wichtig.
- Exemplars Best Practice (2-5 Stueck, verschiedene Faelle abdecken) — korrekt, Anthropic empfiehlt "3-5 examples for best results".
- Anti-Halluzinations-Regel in RAG — korrekt und wichtig, wird mehrfach betont.

**Anmerkung — XML Tag-Namen:**
Die im Kurs verwendeten Tag-Namen (`<task-context>`, `<background-data>`, `<the-ask>`, `<conversation-history>`, `<thinking-instructions>`, `<output-format>`) stammen aus dem ai-hero-dev Kurs und werden als "Anthropic Prompt Template" praesentiert (03-basic-prompting.mdx:55). Anthropic selbst empfiehlt in der aktuellen Dokumentation (Maerz 2026) andere Tag-Namen: `<instructions>`, `<context>`, `<input>`, `<example>`, `<examples>`, `<document>`, `<document_content>`, `<source>`. Anthropic sagt aber auch: "Use consistent, descriptive tag names across your prompts" — die verwendeten Tag-Namen sind also nicht falsch, sondern eine alternative Konvention. Die Darstellung als "Anthropic Prompt Template" ist aber leicht irrefuehrend, da es sich um ein ai-hero-dev Pattern handelt, nicht um ein offizielles Anthropic Template.

Bewertung WARN, weil die fachlichen Erklaerungen korrekt sind, aber die Zuschreibung "Anthropic Prompt Template" fuer die spezifischen Tag-Namen nicht exakt stimmt. Eine Klarstellung ("basierend auf Anthropic Best Practices" statt "das Anthropic Prompt Template") waere ehrlicher.

### A12: Boss Fight Integration
**Bewertung: OK**

Die Boss Fight (07-boss-fight.mdx) kombiniert alle fuenf Challenges:
1. Template-Funktion `buildDocAssistantPrompt()` (5.1) — Anforderung 1
2. XML Tags in der richtigen Reihenfolge (5.2) — Anforderung 2 (explizite Reihenfolge angegeben)
3. Mindestens 2 Exemplars mit `<thinking>` Block (5.3) — Anforderung 3
4. `<background-data>` mit `<url>` und `<content>` (5.4) — Anforderung 4
5. `<thinking-instructions>` fuer strukturiertes Denken (5.5) — Anforderung 5
6. Anti-Halluzinations-Regeln in `<rules>` — Anforderung aus 5.4
7. `streamText` fuer Ausgabe (Level 1) — Anforderung 6

Zusaetzlich:
- 8 Bewertungskriterien als Checkliste
- 3 Hinweise in `<details>`-Tags fuer gestufte Hilfe
- Simulierte Dokumentation als realistischer Content
- Frage ("How do I protect a route that only admins can access?") erfordert Inferenz — die Doku beschreibt `requireAuth()` aber nicht Admin-Schutz, was den Halluzinations-Test aktiviert

Das Szenario (Documentation Assistant) ist realistisch und angemessen schwierig. Die Frage ist bewusst so gewaehlt, dass die Doku keine direkte Antwort hat — ein guter Test fuer die Anti-Halluzinations-Regel.

### A13: Briefing-Vollstaendigkeit
**Bewertung: OK**

Das Briefing (01-briefing.mdx) enthaelt:
- **TL;DR** (Zeile 14): Kompakte Zusammenfassung mit allen fuenf Konzepten
- **Skill Tree** (Zeile 18-52): Mermaid-Diagramm mit Level 1-4 freigeschaltet, Level 5 aktiv, Level 6-9 gesperrt
- **Lernziele** (Zeile 54-60): Fuenf Punkte, klar formuliert (Template, Basic Prompting, Exemplars, RAG, CoT)
- **Warum das wichtig ist** (Zeile 62-69): Simon-Willison-Zitat + konkretes Problem (Copy-Paste Prompts)
- **Voraussetzungen** (Zeile 71-74): Level 1 + Grundverstaendnis LLM
- **Skip-Hinweis** (Zeile 76): Link zur Boss Fight fuer Fortgeschrittene
- **Challenges** (Zeile 80-86): CardGrid mit allen fuenf Challenges
- **Boss Fight Teaser** (Zeile 88-90): Beschreibung des Documentation Assistant
- **Quellen** (Zeile 92-96): 3 Quellen (davon 1 defekt — siehe A9)

Alles vorhanden und vollstaendig.

### A14: Level Complete
**Bewertung: WARN**

**Korrekt:**
- Zusammenfassung (08-level-complete.mdx:12-17): Alle fuenf Konzepte korrekt zusammengefasst mit den richtigen Details (Templates, XML Tags, Exemplars, RAG, Chain of Thought)
- Skill Tree (Zeile 20-55): Level 1-5 freigeschaltet (gruen), Level 6 als naechstes (orange), Level 7-9 gesperrt (grau) — korrekt
- Level 6 Teaser (Zeile 58-59): "Evals" mit Beschreibung — motivierend und inhaltlich passend
- Pfeil von L5 zu L6 ist durchgezogen (nicht gestrichelt) — korrekt, Level 5 ist jetzt freigeschaltet

**Probleme:**
- Keine emotionale Belohnung (kein "Glueckwunsch!", kein Achievement-Badge, kein Lob). Konsistent mit Level 1-4 (selbes Problem in allen bisherigen Reviews). Gerade bei einem Gamification-Konzept ("Level Up") ist eine Belohnung beim Level-Abschluss ein erwartetes Element.
- Keine Quellen in Level Complete — vertretbar, da es eine Zusammenfassung ist.
- Relativ knapp (60 Zeilen). Kein Rueckblick auf die Boss Fight, kein "Was Du jetzt kannst"-Absatz, der das Gelernte in einen groesseren Kontext stellt.

## Findings nach Datei

### 01-briefing.mdx
- [OK] TL;DR, Skill Tree, Lernziele, Voraussetzungen, Skip-Hinweis, CardGrid, Boss Fight Teaser vorhanden
- [FAIL] Quelle `docs.anthropic.com/.../prompt-engineering` gibt 404 nach Redirect (Zeile 94)
- [OK] Challenges korrekt verlinkt (5.1-5.5, Boss Fight, Level Complete)
- [OK] Voraussetzungen passend (Level 1 + LLM-Grundverstaendnis)
- [OK] Simon-Willison-Zitat als starke Motivation

### 02-the-template.mdx
- [OK] THINK, OVERVIEW, WHY, WALKTHROUGH, TRY, COMBINE, Quellen — alle Sektionen vorhanden
- [OK] 3 Schichten im Walkthrough (Grundstruktur → Variables → buildSystemPrompt)
- [OK] Code kompiliert, Imports korrekt, Modellname aktuell
- [OK] Loesung korrekt und identisch mit dem Walkthrough-Code — sinnvolle Redundanz fuer Einsteiger
- [WARN] Keine Dateinamen oder Ausfuehrungsbefehle in TRY
- [FAIL] Quelle `docs.anthropic.com/.../prompt-engineering` gibt 404 nach Redirect (Zeile 294)
- [OK] COMBINE-Uebung verweist sinnvoll auf `streamText` aus Level 1

### 03-basic-prompting.mdx
- [OK] Alle Sektionen vorhanden, didaktisch sauber aufgebaut
- [OK] Vorher/Nachher-Transformation (schlechter Prompt → strukturierter Prompt) ueberzeugend
- [OK] Code kompiliert, beide Varianten (schlecht/gut) lauffaehig
- [WARN] Gesamter Prompt (inkl. `<task-context>`) im `prompt`-Parameter statt `system` — funktioniert, ist aber nicht Best Practice. Sollte zumindest erwaehnt werden.
- [WARN] Keine Dateinamen oder Ausfuehrungsbefehle in TRY
- [FAIL] Quelle `docs.anthropic.com/.../prompt-engineering` gibt 404 nach Redirect (Zeile 305)
- [OK] COMBINE-Uebung kombiniert sinnvoll `buildSystemPrompt()` (5.1) mit strukturiertem Prompt (5.2)

### 04-exemplars.mdx
- [OK] Alle Sektionen vorhanden, 3 Schichten im Walkthrough
- [OK] Faustregel "2-5 Exemplars" korrekt, stimmt mit Anthropic-Empfehlung ("3-5 examples") ueberein
- [OK] Sentiment Classifier als TRY-Aufgabe — realistisch, verschiedene Faelle abgedeckt
- [OK] Dynamische Exemplar-Generierung mit `.map()` — gutes Pattern
- [OK] Erwarteter Output in der Loesung angegeben (`// Erwartete Ausgabe: "neutral"`)
- [WARN] Keine Dateinamen oder Ausfuehrungsbefehle in TRY
- [FAIL] Quelle `docs.anthropic.com/.../prompt-engineering/use-examples` gibt 404 nach Redirect (Zeile 260)
- [OK] COMBINE-Uebung erweitert sinnvoll das `PromptConfig`-Interface um `exemplars`

### 05-retrieval.mdx
- [OK] Alle Sektionen vorhanden, 4 Schichten im Walkthrough
- [OK] RAG-Definition korrekt (Retrieve, Augment, Generate — 3 Schritte)
- [OK] Datenquellen-Tabelle (Web Scraping, Vector DB, SQL/API, Dateisystem) informativ
- [OK] Anti-Halluzinations-Regel korrekt und mehrfach betont
- [OK] "Weiter denken" Abschnitt (Vector Search) — guter Ausblick ohne Ueberforderung
- [WARN] Keine Dateinamen oder Ausfuehrungsbefehle in TRY
- [WARN] TRY-Aufgabe enthaelt `// TODO` Kommentare innerhalb des Template-Literal-Strings — das wuerde als Text an das LLM gesendet werden, nicht als TypeScript-Kommentar (Zeile 200-220). In der Loesung sind die TODOs entfernt — korrekt. Aber im Starter-Code sind sie irrefuehrend.
- [FAIL] Quelle `docs.anthropic.com/.../retrieval-augmented-generation` gibt 404 nach Redirect (Zeile 340)
- [OK] COMBINE-Uebung integriert alle 4 bisherigen Konzepte

### 06-chain-of-thought.mdx
- [OK] Alle Sektionen vorhanden, 4 Schichten im Walkthrough
- [OK] CoT-Erklaerung korrekt: Tokens fuer Denkprozess "verbrennen", Zwischenschritte beeinflussen Ausgabe
- [OK] Unterscheidung CoT vs Extended Thinking korrekt und explizit (Zeile 58)
- [OK] Tabelle "Wann CoT nutzen" — praxisnah und hilfreich
- [OK] Code Review als TRY-Aufgabe — realistisch, gute Komplexitaet
- [WARN] Keine Dateinamen oder Ausfuehrungsbefehle in TRY
- [WARN] TRY-Aufgabe enthaelt `// TODO` Kommentare innerhalb des Template-Literal-Strings (Zeile 167-178) — selbes Problem wie in 5.4.
- [OK] Quellen: `chain-of-thought` URL fuehrt zur konsolidierten Prompting-Best-Practices-Seite (funktioniert). `extended-thinking` URL existiert.
- [OK] COMBINE-Uebung vereint alle 5 Konzepte als Vorbereitung auf Boss Fight

### 07-boss-fight.mdx
- [OK] Szenario klar beschrieben (Documentation Assistant)
- [OK] Alle 5 Challenges integriert, Mermaid-Diagramm mit Challenge-Referenzen
- [OK] 8 Bewertungskriterien als Checkliste
- [OK] 3 Hinweise in `<details>`-Tags fuer gestufte Hilfe
- [OK] Starter-Code mit simulierter Dokumentation und klaren TODOs
- [OK] Frage bewusst so gewaehlt, dass Anti-Halluzinations-Regel getestet wird
- [OK] Schwierigkeit angemessen — herausfordernd, aber loesbar
- [FAIL] Quellen: `docs.anthropic.com/.../prompt-engineering` und `.../retrieval-augmented-generation` geben 404 (Zeile 150-153)
- [WARN] Keine Musterloesung in der Boss Fight — bewusste Entscheidung (Pruefung), aber inkonsistent mit den Challenges, die alle Loesungen haben. Fuer Selbstlerner waere eine Loesung hilfreich.

### 08-level-complete.mdx
- [OK] Zusammenfassung korrekt, alle 5 Konzepte mit richtigen Details
- [OK] Skill Tree korrekt (Level 1-5 gruen, Level 6 orange, 7-9 grau)
- [OK] Level 6 Teaser motivierend und inhaltlich passend
- [WARN] Keine emotionale Belohnung (Glueckwunsch, Achievement)
- [WARN] Relativ knapp — kein "Was Du jetzt kannst"-Absatz, kein Rueckblick auf Boss Fight

## Zusammenfassung

| Bewertung | Anzahl |
|-----------|--------|
| OK | 10 |
| WARN | 2 |
| FAIL | 2 |

## Empfohlene Fixes (nach Prioritaet)

### P0 — FAILs beheben

1. **Defekte Anthropic-Quellen-URLs fixen** (A9): Alle `docs.anthropic.com` URLs aktualisieren. Die Anthropic-Docs wurden konsolidiert. Empfohlene Ersetzungen:
   - `docs.anthropic.com/en/docs/build-with-claude/prompt-engineering` → `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/overview` (Hauptseite) oder `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-prompting-best-practices` (Techniken)
   - `docs.anthropic.com/.../prompt-engineering/use-examples` → `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-prompting-best-practices` (Abschnitt "Use examples effectively")
   - `docs.anthropic.com/.../retrieval-augmented-generation` → URL existiert nicht mehr. Alternative: Anthropic Cookbook oder die allgemeine Prompting-Best-Practices-Seite verwenden.
   - `docs.anthropic.com/.../prompt-engineering/chain-of-thought` → `https://docs.anthropic.com/en/docs/build-with-claude/prompt-engineering/claude-prompting-best-practices` (Abschnitt "Thinking and reasoning")
   - Betroffen: **alle 8 Dateien** (01-08)

### P1 — WARNs beheben

2. **TRY-Sektionen ergaenzen** (A6): In allen fuenf Challenge-Dateien Dateinamen (z.B. `challenge-5-1.ts`), Ausfuehrungsbefehle (`npx tsx challenge-5-1.ts`), erwarteten Output und ggf. Hinweis auf benoetigte Packages ergaenzen. Dies ist ein konsistenter Fehler aus Level 1-4.

3. **TODO-Kommentare in Template Literals fixen** (05-retrieval.mdx Zeile 200-220, 06-chain-of-thought.mdx Zeile 167-178): Die `// TODO` Kommentare innerhalb von Template-Literal-Strings werden als Text an das LLM gesendet. Besser: Die TODOs als Markdown-Kommentare VOR den Code-Block setzen oder die String-Interpolation so aufteilen, dass die TODOs ausserhalb des Strings stehen.

4. **"Anthropic Prompt Template" Zuschreibung korrigieren** (A11): Die Bezeichnung "das Anthropic Prompt Template" (03-basic-prompting.mdx:55) aendern zu "ein Prompt Template basierend auf Anthropic Best Practices" oder aehnlich. Die spezifischen Tag-Namen (`<task-context>`, `<the-ask>`, etc.) stammen aus dem ai-hero-dev Kurs, nicht von Anthropic direkt.

### P2 — Verbesserungen

5. **Level Complete emotionale Belohnung** (A14): Einen kurzen Glueckwunsch-Absatz ergaenzen (z.B. "Level 5 abgeschlossen! Du beherrschst jetzt die fuenf Kernbausteine des Context Engineering — von wiederverwendbaren Templates bis zu Chain of Thought.").

6. **Boss Fight Musterloesung** (07-boss-fight.mdx): Eine vollstaendige Musterloesung in einem `<details>`-Tag ergaenzen, konsistent mit den Challenges, die alle Loesungen haben.

7. **Best Practice Hinweis system vs prompt** (03-basic-prompting.mdx): Einen kurzen Hinweis ergaenzen, dass `<task-context>` in Production typischerweise im `system`-Parameter uebergeben wird, waehrend `<background-data>` und `<the-ask>` im `prompt`-Parameter stehen.
