# Level 3: Agents & MCP — Experten-Review

> Datum: 2026-03-08 | Reviewer: Agent A (Experte/Paedagoge)

## Zusammenfassung

0 FAIL / 5 WARN / 9 OK

Level 3 ist insgesamt solide aufgebaut. Die didaktische Progression ist stark — jede Challenge baut logisch auf der vorherigen auf. Die AI SDK v6 API-Nutzung (`tool()`, `inputSchema`, `stopWhen: stepCountIs()`, `createMCPClient`, `toolCallApproval`, `needsApproval`) ist durchgehend korrekt. Kein einziger FAIL. Die WARNs betreffen fehlende Dateinamen/Ausfuehrungsbefehle, eine fehlende emotionale Belohnung in Level Complete und kleinere Luecken bei Quellen und Troubleshooting.

## Checkliste

| # | Kategorie | Bewertung | Befund |
|---|-----------|-----------|--------|
| A1 | Didaktische Progression | OK | Sauberer Aufbau: Tool Calling (Grundlagen) → Frontend Events (Darstellung) → Agentic Loop (Multi-Step) → MCP (Externe Tools) → Tool Approval (Sicherheit). Jedes Konzept wird eingefuehrt, bevor es genutzt wird. |
| A2 | THINK-Qualitaet | OK | Alle fuenf THINK-Fragen aktivieren Vorwissen und sind spezifisch genug. Gute Progression von "Was wenn ein LLM handeln koennte?" bis "Wuerdest Du einem Agenten erlauben, Dateien zu loeschen?" |
| A3 | OVERVIEW-Klarheit | OK | Alle Mermaid-Diagramme zeigen klar die Position im Gesamtbild. Konsistentes Farbschema. Diagramme lesbar und korrekt. |
| A4 | WHY-Motivierung | OK | Jede Challenge hat ein starkes Vorher/Nachher-Szenario. Besonders ueberzeugend: "Ohne Tools kann ein LLM nur reden" (3.1) und "Der User sieht eine lange Pause" vs. "Echtzeit-Feedback" (3.2). |
| A5 | WALKTHROUGH-Tiefe | OK | 3-5 Schichten pro Challenge, logisch aufgebaut. Keine fehlenden Zwischenschritte. Code durchgehend kommentiert mit `// ←` Annotations. |
| A6 | TRY-Machbarkeit | WARN | Aufgaben sind in 15-25 Min loesbar. TODOs klar, Loesungen korrekt. Aber: Keine Dateinamen angegeben (z.B. `challenge-3-1.ts`), keine Ausfuehrungsbefehle (`npx tsx challenge-3-1.ts`), kein erwarteter Output. |
| A7 | COMBINE-Vernetzung | OK | Jede Challenge greift auf vorherige zurueck. 3.2 referenziert streamText aus 1.4. 3.3 nutzt Tools aus 3.1. 3.4 kombiniert MCP mit Agentic Loop aus 3.3. 3.5 erweitert den Research Agent aus 3.3. Sehr gute Vernetzung. |
| A8 | Code-Korrektheit | WARN | Code kompiliert. Imports korrekt. API-Signaturen stimmen fuer AI SDK v6 (`inputSchema`, `stopWhen: stepCountIs()`, `toolCallApproval`). Modellname `claude-sonnet-4-5-20250514` korrekt. Einziger Punkt: In 04-tool-loop-agent.mdx Schicht 3 wird `eval(expression)` verwendet — zwar als "Nur fuer Demo" markiert, aber ein `Function`-basierter Ansatz oder explizite Operatoren waeren paedagogisch besser, um keine schlechten Gewohnheiten zu lehren. |
| A9 | Quellen-Qualitaet | WARN | Alle Seiten haben 2-4 Quellen. Ueberwiegend Rang 1-2 (Vercel AI SDK Docs, MCP Docs). Aber: 06-tool-approval.mdx hat als zweite Quelle `https://platform.claude.com` — das ist kein spezifischer Artikel/Abschnitt, sondern die Startseite der Anthropic Platform. Sollte auf einen konkreten Docs-Abschnitt verweisen (z.B. Anthropic Agent Safety Guidelines oder aehnlich). |
| A10 | Text-Grafik-Code-Balance | OK | Gute Balance. Jede Challenge hat Mermaid-Diagramm (OVERVIEW + COMBINE), Tabelle (wo sinnvoll), Code-Bloecke und erklaerende Textabschnitte. Kein Abschnitt ist zu lang ohne Auflockerung. |
| A11 | Fachliche Korrektheit | OK | AI SDK v6 APIs sind korrekt: `tool({ description, inputSchema, execute })`, `stopWhen: stepCountIs()`, `createMCPClient`, `client.tools()`, `client.close()`, `needsApproval`, `toolCallApproval`. Transport-Typen (HTTP, SSE, stdio) korrekt beschrieben. `toolChoice`-Optionen korrekt. Keine veralteten APIs oder falschen Parameter gefunden. |
| A12 | Boss Fight Integration | OK | Alle 5 Challenges kombiniert: Tool Calling (search, summarize, saveResults), Frontend Events (formatierte Ausgabe), Agentic Loop (stopWhen), MCP (optional als Bonus), Tool Approval (saveResults mit needsApproval). Schwierigkeit angemessen. Bewertungskriterien klar und vollstaendig. |
| A13 | Briefing-Vollstaendigkeit | OK | Lernziele (5 Punkte), Voraussetzungen (Level 1, Zod, async/await), Skip-Hinweis (direkt zur Boss Fight), Challenge-CardGrid, Boss Fight Teaser, Quellen (6 Stueck). Alles vorhanden. |
| A14 | Level Complete | WARN | Zusammenfassung korrekt. Skill Tree zeigt Level 1-3 freigeschaltet, Level 4 als naechstes. Level 4 Teaser vorhanden und motivierend. Aber: Keine emotionale Belohnung (Glueckwunsch, Achievement). Selbes Problem wie in Level 1 und 2 — konsistent, aber didaktisch waere eine Belohnung motivierend. |

## Detail-Befunde

### A1: Didaktische Progression
**OK** — Die fuenf Challenges bauen sauber aufeinander auf:
- 3.1 (Tool Calling) fuehrt das Grundkonzept ein: `tool()`, `inputSchema`, `execute`, `generateText`-Integration.
- 3.2 (Tools im Frontend) zeigt, wie Tool Calls im Stream sichtbar werden — setzt 3.1 voraus (man muss wissen, was ein Tool Call ist).
- 3.3 (Tool Loop Agent) erweitert von Single-Step zu Multi-Step — setzt 3.1 voraus und nutzt das Konzept der Tool Events aus 3.2 fuer `onStepFinish`.
- 3.4 (MCP) fuehrt ein alternatives Tool-System ein — setzt Verstaendnis von Tools (3.1) und Agentic Loop (3.3) voraus fuer die COMBINE-Uebung.
- 3.5 (Tool Approval) ist logisch am Ende: Erst muss man verstehen, was Tools tun, bevor man sie kontrollieren will. Baut auf dem Agent-Pattern aus 3.3 auf.

Kein Konzept wird genutzt, bevor es eingefuehrt wurde.

### A2: THINK-Qualitaet
**OK** — Alle fuenf THINK-Fragen funktionieren:
- 3.1: "Was wenn ein LLM nicht nur Text generieren, sondern auch Aktionen ausfuehren koennte?" — Guter Einstieg, aktiviert Vorwissen ueber Chatbots.
- 3.2: "Wenn ein LLM ein Tool aufruft — wie zeigst Du das dem User im UI?" — Praxisnah, provoziert Nachdenken ueber UX.
- 3.3: "Was wenn ein LLM mehrere Tools nacheinander aufrufen muss?" — Logische Erweiterung von 3.1.
- 3.4: "Wie verbindest Du Dein LLM mit externen Diensten — ohne fuer jeden eine eigene Integration?" — Gute Problem-Motivation.
- 3.5: "Wuerdest Du einem Agenten erlauben, ohne Rueckfrage Dateien zu loeschen?" — Starke emotionale Frage, weckt sofort Sicherheitsbewusstsein.

### A3: OVERVIEW-Klarheit
**OK** — Alle Mermaid-Diagramme sind klar:
- 3.1: Sequence Diagram (User → LLM → Tool → LLM → User). Zeigt den Tool Call Flow kompakt.
- 3.2: Sequence Diagram mit Events (tool-call, tool-result, text). Zeigt die zeitliche Abfolge klar.
- 3.3: Graph mit Agentic Loop (LLM → Check → Execute → Result → LLM). Zeigt die Schleife visuell.
- 3.4: Graph mit MCP Client/Protocol/Server-Architektur. Zeigt die Abstraktionsschichten klar.
- 3.5: Sequence Diagram mit Approval Guard. Zeigt den Entscheidungspunkt (Genehmigt/Abgelehnt) klar.

Konsistentes Farbschema: Blau = Input, Gruen = Verarbeitung, Orange = Aktuelle Position/Output, Rot = Ablehnung.

### A4: WHY-Motivierung
**OK** — Starke Vorher/Nachher-Szenarien:
- 3.1: "Ohne Tools kann ein LLM nur reden" → "Mit Tools wird es zum Agenten" — klar und motivierend.
- 3.2: "Lange Pause ohne Feedback" → "Echtzeit-Transparenz schafft Vertrauen" — UX-Argument ueberzeugt.
- 3.3: "Nur ein Tool Call pro Request" → "Autonome Multi-Step Agents" — zeigt den Leistungssprung.
- 3.4: "10 verschiedene Integrationen pflegen" → "Ein Protokoll fuer alle Tools" — klassisches DRY-Argument.
- 3.5: "Agent fuehrt alles ohne Rueckfrage aus" → "Kontrollierte Ausfuehrung kritischer Operationen" — Sicherheits-Argument.

### A5: WALKTHROUGH-Tiefe
**OK** — Gute Schichtung:
- 3.1: 4 Schichten (Tool definieren → generateText → toolChoice → toolCalls/toolResults). Lueckenlos.
- 3.2: 4 Schichten (Message Parts → Stream Events → Loading States → Mehrere Parts rendern). Sauber aufgebaut.
- 3.3: 4 Schichten (stopWhen → Steps auswerten → Mehrere Tools → onStepFinish). Logisch.
- 3.4: 5 Schichten (Client erstellen → Transports → Tools laden → Typisierte Tools → Lifecycle). Ausfuehrlichste Challenge, angemessen fuer MCP-Komplexitaet.
- 3.5: 4 Schichten (Statisch → Dynamisch → Approval Flow → Dangerous/Safe Pattern). Gutes Pattern-Teaching.

Code ist durchgehend mit `// ←` Inline-Kommentaren annotiert. Keine fehlenden Zwischenschritte gefunden.

### A6: TRY-Machbarkeit
**WARN** — Aufgaben sind gut strukturiert und loesbar, ABER drei bekannte P1-Fehler-Muster fehlen:

1. **Keine Dateinamen**: Keiner der TRY-Bloecke nennt einen Dateinamen (z.B. `challenge-3-1.ts`). Der Lernende weiss nicht, wie die Datei heissen soll.
2. **Keine Ausfuehrungsbefehle**: Kein `npx tsx challenge-3-1.ts` oder aehnlich. Der Lernende weiss nicht, wie er den Code ausfuehrt.
3. **Kein erwarteter Output**: Die Loesungen zeigen den Code, aber nicht den erwarteten Terminal-Output. Nur die `Erklaerung` am Ende beschreibt, was passieren sollte — ein konkreter Output-Block waere hilfreicher.

Diese Luecken sind konsistent ueber alle 5 Challenges. Kein einzelner Ausreisser.

Positiv: TODOs sind klar nummeriert, Checklisten vorhanden, Loesungen sind korrekt und vollstaendig.

### A7: COMBINE-Vernetzung
**OK** — Sehr gute Vernetzung ueber alle Challenges:
- 3.1 COMBINE referenziert System Prompt aus 1.6 und fuegt ein zweites Tool hinzu.
- 3.2 COMBINE referenziert streamText aus 1.4 und kombiniert weatherTool + calculatorTool (3.1).
- 3.3 COMBINE erweitert den Research Agent um calculatorTool aus 3.1.
- 3.4 COMBINE mischt MCP Tools mit lokalem calculatorTool (3.1) und Agentic Loop (3.3).
- 3.5 COMBINE erweitert den Research Agent (3.3) um saveResults mit Approval.

Die COMBINE-Diagramme zeigen die Vernetzung visuell. Kein COMBINE ist eine isolierte Uebung.

### A8: Code-Korrektheit
**WARN** — Grundsaetzlich korrekt, ein paedagogischer Punkt:

**AI SDK v6 API — korrekt:**
- `tool({ description, inputSchema, execute })` — korrekt (nicht `parameters`)
- `stopWhen: stepCountIs(n)` — korrekt (nicht `maxSteps`)
- `createMCPClient` von `@ai-sdk/mcp` — korrekt
- `StdioClientTransport` von `@modelcontextprotocol/sdk/client/stdio.js` — korrekt
- `client.tools()` und `client.close()` — korrekt
- `needsApproval: true` und als async Function — korrekt
- `toolCallApproval` Handler auf `generateText` mit `'approve'`/`'reject'` — korrekt
- `import { stepCountIs } from 'ai'` — korrekt
- Modellname `claude-sonnet-4-5-20250514` — korrekt (Stand Maerz 2026)

**Paedagogischer Punkt:**
In 04-tool-loop-agent.mdx Schicht 3 wird `eval(expression)` im calculatorTool verwendet. Zwar steht der Kommentar "Nur fuer Demo! Nie eval in Production", aber in einem Lernmaterial ist das problematisch. Ein `switch`-basierter Ansatz (wie in 3.1) oder ein expliziter Parser waere paedagogisch besser. Lernende koepieren oft Code-Beispiele 1:1.

Kein Kompilierfehler. Imports, Typen und API-Signaturen sind korrekt.

### A9: Quellen-Qualitaet
**WARN** — Grundsaetzlich gut, ein Problem:

Alle Seiten haben mindestens 2 Quellen. Ueberwiegend Rang 1-2:
- Vercel AI SDK Docs (offizielle Dokumentation) — Rang 1
- Model Context Protocol Docs (offizielle Spec) — Rang 1
- ai-hero-dev Exercises (Lernmaterial von Matt Pocock) — Rang 2
- Vercel Blog (offizieller Blog) — Rang 2

**Problem:** In 06-tool-approval.mdx ist die zweite Quelle "Anthropic: Agentic Systems — Autonomy vs. Safety" mit Link `https://platform.claude.com`. Das ist kein spezifischer Artikel, sondern die Anthropic Platform-Startseite. Der Titel suggeriert einen konkreten Artikel ueber Agent Safety, aber der Link fuehrt nicht dorthin. Entweder den korrekten Link zum Anthropic-Docs-Abschnitt ueber Agent Safety finden oder die Quelle entfernen/ersetzen.

### A10: Text-Grafik-Code-Balance
**OK** — Gute Balance:
- Jede Challenge hat mindestens 2 Mermaid-Diagramme (OVERVIEW + COMBINE).
- Tabellen werden sinnvoll eingesetzt (toolChoice-Optionen in 3.1, Transport-Typen in 3.4).
- Code-Bloecke sind mittellang (10-30 Zeilen), nicht zu lang.
- Erklaerende Textabschnitte zwischen den Code-Bloecken halten die Balance.
- Keine Challenge hat einen Textblock laenger als 5 Saetze ohne visuelles Element.

### A11: Fachliche Korrektheit
**OK** — Alle fachlichen Aussagen sind korrekt:
- Tool Calling Mechanismus korrekt erklaert (LLM generiert strukturierte Anfrage, execute wird aufgerufen, Ergebnis geht zurueck).
- `toolChoice`-Optionen korrekt beschrieben (auto, required, none, specific).
- Message Parts korrekt erklaert (text, tool-call, tool-result mit toolCallId-Verknuepfung).
- Agentic Loop korrekt beschrieben (Generate → Check → Execute → Result → Generate).
- MCP-Architektur korrekt (Client → Protocol → Server, drei Transport-Typen).
- Approval-Mechanismus korrekt (`needsApproval` verhindert automatische Ausfuehrung, `toolCallApproval` ist der Handler).
- `steps.flatMap(s => s.toolCalls)` als Pattern korrekt beschrieben.
- Aussage "Ohne `stopWhen` fuehrt `generateText` nur einen einzelnen Tool Call aus" ist korrekt fuer AI SDK v6.
- Dangerous/Safe Pattern ist ein anerkanntes Best Practice.

Keine veralteten APIs, falschen Parameter oder irrefuehrenden Vereinfachungen gefunden.

### A12: Boss Fight Integration
**OK** — Alle 5 Challenges werden kombiniert:
1. **Tool Calling (3.1):** search, summarize, saveResults als `tool()`-Definitionen.
2. **Frontend Events (3.2):** Formatierte Terminal-Ausgabe aller Tool Calls und Results.
3. **Agentic Loop (3.3):** `stopWhen: stepCountIs(n)` fuer autonomes Multi-Step.
4. **MCP (3.4):** Optional als Bonus fuer search — gute Differenzierung.
5. **Tool Approval (3.5):** `saveResults` mit `needsApproval: true` + Terminal-Approval.

Bewertungskriterien sind klar (8 Checkboxen). Hinweise in Spoiler-Tags. Schwierigkeit angemessen — anspruchsvoll, aber machbar mit dem Wissen aus allen 5 Challenges.

Das Mermaid-Diagramm im Boss Fight zeigt den kompletten Datenfluss (Input → Agent mit Loop/Tools/Approval → Formatierte Ausgabe). Gute visuelle Zusammenfassung.

Starter-Code ist minimal genug, um den Lernenden nicht zu fuehren, aber strukturiert genug als Orientierung.

### A13: Briefing-Vollstaendigkeit
**OK** — Alle Elemente vorhanden:
- **Lernziele:** 5 klar formulierte Punkte (Tool Calling, Tools im Frontend, Tool Loop Agent, MCP, Tool Approval).
- **Skill Tree:** Mermaid-Diagramm zeigt Level 1-2 freigeschaltet, Level 3 aktuell, Level 4-9 gesperrt. Korrekt.
- **Voraussetzungen:** Level 1 (generateText, streamText, System Prompts, Zod), Zod Grundkenntnisse, async/await. Angemessen.
- **Skip-Hinweis:** Direkt zur Boss Fight bei Vorkenntnissen. Nennt die drei Key-APIs (`tool()`, `stopWhen: stepCountIs()`, `createMCPClient`).
- **Challenge-CardGrid:** Alle 5 Challenges mit Kurzbeschreibung.
- **Boss Fight Teaser:** "Research Agent" mit Beschreibung.
- **Quellen:** 6 Stueck (AI SDK Docs x3, Vercel Blog, MCP, ai-hero-dev). Alle Rang 1-2.

### A14: Level Complete
**WARN** — Zwei Punkte:

**Positiv:**
- Zusammenfassung korrekt — alle 5 Konzepte werden praezise beschrieben.
- Skill Tree zeigt Level 1-3 als freigeschaltet, Level 4 als naechstes. Korrekt.
- Level 4 Teaser ist motivierend: "Dein Agent kann jetzt handeln, aber er vergisst alles" — gutes Uebergangsproblem.

**Verbesserbar:**
- Keine emotionale Belohnung (Glueckwunsch, Achievement-Badge, motivierender Satz). Selbes Problem wie in Level 1 und 2 — konsistent, aber didaktisch suboptimal. Ein "Glueckwunsch! Du hast Deinen ersten autonomen Agenten gebaut." wuerde den Abschluss wertschaetzen.
- Kein Rueckblick auf den Boss Fight. Die Zusammenfassung listet die Konzepte, aber verknuepft sie nicht mit dem Research Agent. "Im Boss Fight hast Du all das in einem Research Agent kombiniert" waere eine staerkere Klammer.

## P0/P1/P2 Fehler-Muster Check

### P0 (Fachlich falsch — muss gefixt werden)
Keine P0-Fehler gefunden. Alle API-Signaturen, Parameter-Namen und Modellnamen sind korrekt fuer AI SDK v6.

### P1 (Strukturell fehlend — sollte gefixt werden)
- **Fehlende Dateinamen:** Keine TRY-Aufgabe nennt einen Dateinamen (z.B. `challenge-3-1.ts`).
- **Fehlende Ausfuehrungsbefehle:** Kein `npx tsx` oder aehnliches in den TRY-Sektionen.
- **Fehlender erwarteter Output:** Die Loesungen zeigen Code, aber keinen konkreten Terminal-Output.

### P2 (Nice-to-have — bei Gelegenheit)
- **Kein Troubleshooting:** Keine Hinweise fuer typische Fehler (z.B. "Vergessenes `await` bei `client.tools()`", "Tool wird nicht aufgerufen — description ueberpruefen", "`ANTHROPIC_API_KEY` nicht gesetzt").
- **Keine emotionale Belohnung in Level Complete.**
- **`eval()` im Lernmaterial:** Paedagogisch problematisch (04-tool-loop-agent.mdx).
- **Unspezifische Quelle:** `https://platform.claude.com` in 06-tool-approval.mdx.
- **Projektverzeichnis unklar:** Nirgendwo steht, in welchem Verzeichnis der Lernende arbeiten soll oder ob ein `package.json` mit den Dependencies existiert/erstellt werden muss.

## Empfohlene Fixes (priorisiert)

1. **P1: Dateinamen + Ausfuehrungsbefehle** — In jeder TRY-Sektion oben ergaenzen: `Datei: challenge-3-1.ts` und `Ausfuehren: npx tsx challenge-3-1.ts`. Konsistent in allen 5 Challenges.

2. **P1: Erwarteter Output** — Nach jeder Loesung einen `Erwarteter Output:`-Block ergaenzen, der zeigt, was im Terminal erscheinen sollte.

3. **P2: Troubleshooting** — Mindestens 2-3 typische Fehler pro Challenge in einem klappbaren `<details>` Block.

4. **P2: eval() ersetzen** — In 04-tool-loop-agent.mdx den `eval(expression)` durch einen expliziten switch/case ersetzen (konsistent mit dem calculatorTool aus 3.1).

5. **P2: Quelle fixen** — In 06-tool-approval.mdx die Quelle `https://platform.claude.com` durch einen spezifischen Link ersetzen oder entfernen.

6. **P2: Emotionale Belohnung** — In 08-level-complete.mdx einen motivierenden Satz ergaenzen.
