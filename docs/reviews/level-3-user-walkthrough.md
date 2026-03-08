# Level 3: Agents & MCP — User-Walkthrough

> Datum: 2026-03-08 | Reviewer: Agent B (Anfaenger-Perspektive)
> Perspektive: TypeScript-Entwickler mit ChatGPT-Erfahrung, kein Vorwissen zu AI SDK, MCP oder Tool Calling. Hat Level 1 + 2 durchgearbeitet.

## Zusammenfassung

**6 FAIL / 12 WARN / 78 OK** (ueber 8 Dateien x 12 Pruefpunkte = 96 Bewertungen)

### Kritische Findings

1. **P1: Fehlende Dateinamen und Ausfuehrungsbefehle in ALLEN Challenges und Boss Fight** — Wie in Level 2 fehlen durchgaengig Dateinamen (`challenge-3-1.ts`) und Ausfuehrungsbefehle (`npx tsx challenge-3-1.ts`). Das bekannte Muster aus Level 1 wird nicht fortgefuehrt.

2. **P0: Fehlende npm-Install-Anweisungen fuer neue Pakete in Challenge 3.4 (MCP)** — `@ai-sdk/mcp` und `@modelcontextprotocol/sdk` sind NEUE Pakete, die nicht in Level 1 installiert wurden. Nirgendwo in Level 3 steht `npm install @ai-sdk/mcp @modelcontextprotocol/sdk`. Ein Anfaenger bekommt `Cannot find module`-Fehler und weiss nicht warum.

3. **P1: Fehlender erwarteter Output bei allen TRY-Aufgaben** — Kein einziges TRY zeigt konkreten Terminal-Output. Der Lerner weiss nicht, ob sein Code korrekt funktioniert.

4. **P1: Kein Troubleshooting in Level 3** — Keine Fehler-Szenarien dokumentiert. Typische Fehler wie falsche Zod-Schemas, MCP-Verbindungsfehler oder Approval-Timeouts werden nicht behandelt.

5. **P2: Projektverzeichnis weiterhin unklar** — Soll der Lerner im Level-1-Verzeichnis weiterarbeiten? Ein neues erstellen? Stillschweigend vorausgesetzt.

6. **P2: `stepCountIs` wird ohne API-Erklaerung eingefuehrt** — Die Funktion taucht in Challenge 3.3 auf, aber es wird nicht erklaert, dass sie aus `'ai'` importiert wird (erst im Code sichtbar) und was genau ein "Step" im Kontext des AI SDK bedeutet (Abgrenzung zu Tool Call).

---

## Detail-Befunde je Datei

### 01-briefing.mdx

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | WARN | Voraussetzungen klar ("Level 1 abgeschlossen", Zod, async/await). Aber: Es fehlt der Hinweis, dass Level 3 NEUE npm-Pakete einfuehrt (`@ai-sdk/mcp`, `@modelcontextprotocol/sdk`). Der Lerner erwartet, mit dem bestehenden Setup weiterzuarbeiten. |
| B2 | OK | Kein neues Setup noetig auf der Briefing-Seite. Challenges bauen auf Level 1 auf. |
| B3 | OK | Briefing-Seite — keine Mini-Steps noetig. |
| B4 | OK | Kein ausfuehrbarer Code auf der Briefing-Seite. |
| B5 | OK | Keine neuen Environment Variables noetig. |
| B6 | OK | Kein ausfuehrbarer Code. |
| B7 | WARN | Kein Troubleshooting. Mindestens ein Hinweis waere gut: "Fuer Challenge 3.4 brauchst Du zusaetzliche Pakete — die Installation wird dort erklaert." (Wird sie aber nicht.) |
| B8 | WARN | Wie in Level 2: Kein Hinweis ob neues Projektverzeichnis oder Weiterarbeit im Level-1-Verzeichnis. Das Briefing schweigt. |
| B9 | OK | Keine neue Konfiguration auf Briefing-Ebene. |
| B10 | OK | Kein kopierbarer Code. |
| B11 | OK | Challenges-Reihenfolge klar: 3.1 bis 3.5, dann Boss Fight. CardGrid zeigt die Reihenfolge. |
| B12 | OK | "Tool Calling", "MCP", "Tool Approval", "Human-in-the-Loop" werden als Lernziele positioniert, nicht vorausgesetzt. Gute Einleitungssaetze erklaeren den Kontext. |

### 02-tool-calling.mdx (Challenge 3.1)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete noetig. `tool` kommt aus `'ai'`, `z` aus `'zod'` — beides in Level 1 installiert. |
| B2 | OK | Kein neuer Installationsbefehl noetig. |
| B3 | FAIL | **Kein Dateiname angegeben.** Der TRY-Block sagt nicht "Erstelle `challenge-3-1.ts`" oder aehnliches. Der Lerner weiss nicht, wohin mit dem Code. Kein Ausfuehrungsbefehl (`npx tsx challenge-3-1.ts`) vorhanden. |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** Weder beim TRY noch bei der Loesung steht, wie man den Code ausfuehrt. In Level 1 war das bei jeder Challenge dabei. |
| B5 | OK | Keine neuen Environment Variables. `ANTHROPIC_API_KEY` aus Level 1 reicht. |
| B6 | WARN | Die Walkthrough-Code-Beispiele zeigen erwarteten Output als Kommentare (`// → "In Berlin sind es aktuell 22 Grad..."`, `// → "weather"`, `// → { location: "Berlin" }`). Gut. Aber die TRY-Loesung zeigt keinen konkreten Terminal-Output. Die Erklaerung sagt "das LLM ruft calculator mit { operation: 'multiply', a: 42, b: 17 } auf", aber der Lerner sieht nicht, was genau `console.log('Tool Calls:', result.toolCalls)` im Terminal ausgibt. |
| B7 | WARN | Kein Troubleshooting. Typische Fehler: (1) Zod-Schema falsch definiert — LLM kann Tool nicht nutzen, (2) `.describe()` vergessen — LLM versteht Parameter nicht, (3) `execute` gibt `undefined` zurueck weil switch-case nicht alle Faelle abdeckt. |
| B8 | WARN | Kein Hinweis auf Projektverzeichnis. Implizit: Gleiches Verzeichnis wie Level 1. |
| B9 | OK | Keine neue Konfiguration noetig. |
| B10 | OK | Alle Code-Bloecke haben vollstaendige Imports. TRY-Aufgabe ist als auskommentierter TODO-Code angelegt. Loesung ist direkt kopierbar und lauffaehig. |
| B11 | OK | Walkthrough baut logisch auf: Tool definieren → mit generateText nutzen → toolChoice → Results auswerten. COMBINE referenziert Challenge 1.6 (System Prompt) — klar und nachvollziehbar. |
| B12 | OK | "Tool Call", "inputSchema", "execute", "toolChoice" werden im Kontext erklaert. `.describe()` wird erklaert. "Tool Results" vs. "Tool Calls" klar unterschieden. |

### 03-tools-in-frontend.mdx (Challenge 3.2)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete. `streamText` und `tool` aus `'ai'`. |
| B2 | OK | Kein neuer Installationsbefehl. |
| B3 | FAIL | **Kein Dateiname und kein Ausfuehrungsbefehl.** TRY-Block hat keinen Hinweis auf Dateinamen oder wie man den Code startet. |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** |
| B5 | OK | Keine neuen Environment Variables. |
| B6 | WARN | Walkthrough zeigt formatierte Ausgabe als Code-Kommentare (gut). TRY-Loesung zeigt keinen konkreten erwarteten Terminal-Output. Der Lerner weiss nicht, ob die Reihenfolge `[TOOL CALL]` → `[TOOL RESULT]` → Text korrekt ist oder ob es Variationen gibt. |
| B7 | WARN | Kein Troubleshooting. Typischer Fehler: `result.fullStream` mit `for await` ohne `async` Wrapper — Top-Level await funktioniert mit `tsx`, aber der Lerner koennte unsicher sein. |
| B8 | OK | Implizit: Gleiches Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Code direkt kopierbar. Imports vollstaendig. Das Tool ist im TRY-Block vorgegeben — der Lerner muss nur die TODO-Teile ergaenzen. |
| B11 | OK | Logischer Aufbau: Message Parts → Tool Events im Stream → Loading State → Mehrere Parts rendern. COMBINE referenziert Challenge 1.4 (streamText) — klar. |
| B12 | OK | "Message Parts", "fullStream", "text-delta", "tool-call", "tool-result", "finish" werden im Kontext erklaert. `Map<string, string>` fuer Tool-Tracking wird erklaert. Der Titel "Tools im Frontend" koennte verwirrend sein, da alles im Terminal laeuft — aber der Text erklaert, dass Terminal-Ausgabe ein Ersatz fuer echtes Frontend-Rendering ist. |

### 04-tool-loop-agent.mdx (Challenge 3.3)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete. `stepCountIs` kommt aus `'ai'`. |
| B2 | OK | Kein neuer Installationsbefehl. |
| B3 | FAIL | **Kein Dateiname und kein Ausfuehrungsbefehl.** |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** |
| B5 | OK | Keine neuen Environment Variables. |
| B6 | WARN | Walkthrough zeigt guten Output als Inline-Kommentare. TRY-Loesung zeigt keinen konkreten Terminal-Output. Der Lerner weiss nicht, wie viele Schritte der Agent tatsaechlich braucht und wie die `onStepFinish`-Ausgabe aussieht. |
| B7 | WARN | Kein Troubleshooting. Typische Fehler: (1) Agent dreht sich im Kreis — ruft dasselbe Tool mit denselben Parametern auf, (2) `stepCountIs` zu niedrig — Agent bricht mitten in der Arbeit ab, (3) `eval()` im calculatorTool (Schicht 3) — funktioniert fuer die Demo, aber ein sicherheitsbewusster Entwickler koennte hier stutzen. Es wird immerhin "Nur fuer Demo! Nie eval in Production." kommentiert. |
| B8 | OK | Implizit: Gleiches Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Code direkt kopierbar. Alle Imports vorhanden (`generateText`, `tool`, `stepCountIs` aus `'ai'`). |
| B11 | OK | Logischer Aufbau: stopWhen → Steps auswerten → Mehrere Tools → onStepFinish. Jede Schicht baut auf der vorherigen auf. COMBINE referenziert Challenge 3.1 — klar. |
| B12 | WARN | **"Step"** wird nicht praezise definiert. Der Text sagt "jeder Schritt kann einen oder mehrere Tool Calls enthalten", aber die Abgrenzung bleibt unklar: Ist ein Step = ein LLM-Aufruf? Oder ein Step = ein Tool Call? Die Antwort ist: ein Step = ein LLM-Aufruf (der mehrere Tool Calls enthalten kann), aber das wird nie explizit gesagt. Auch **`flatMap`** wird ohne Erklaerung verwendet — ein Anfaenger der nur `map` kennt, versteht nicht sofort, warum `flatMap` noetig ist. |

### 05-mcp.mdx (Challenge 3.4)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | FAIL | **NEUE Pakete ohne Installationsanweisung.** `@ai-sdk/mcp` und `@modelcontextprotocol/sdk` werden importiert, aber nirgendwo steht `npm install @ai-sdk/mcp @modelcontextprotocol/sdk`. Ein Anfaenger bekommt `Cannot find module '@ai-sdk/mcp'` und steckt fest. Das ist der schwerste Fehler in Level 3. |
| B2 | FAIL | **Fehlender Installationsbefehl.** Vor dem ersten Code-Beispiel muss stehen: `npm install @ai-sdk/mcp @modelcontextprotocol/sdk`. |
| B3 | FAIL | **Fehlende Mini-Steps:** (1) `npm install @ai-sdk/mcp @modelcontextprotocol/sdk` fehlt komplett. (2) Kein Dateiname. (3) Kein Ausfuehrungsbefehl. (4) Beim stdio-Transport mit `npx -y @modelcontextprotocol/server-everything`: Es wird nicht erklaert, dass `npx -y` den Demo-Server automatisch installiert und startet — ein Anfaenger koennte denken, er muss den Server vorher manuell installieren. |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** |
| B5 | OK | Keine neuen Environment Variables fuer den Demo-Server. HTTP-Beispiele zeigen Auth-Header — das ist ein Erklaerungsbeispiel, kein ausfuehrbarer Code. |
| B6 | WARN | Die TRY-Loesung nutzt `@modelcontextprotocol/server-everything`, aber es wird nicht gezeigt, welche Tools dieser Server bereitstellt. Die Erklaerung sagt "(echo, add, etc.)" — aber der Lerner weiss nicht, welche Tool-Namen er im Output sehen wird. Ein konkretes Beispiel waere: `Verfuegbare Tools: ['echo', 'add', 'longRunningOperation', ...]`. |
| B7 | WARN | Kein Troubleshooting. Typische Fehler: (1) `Cannot find module '@ai-sdk/mcp'` — Paket nicht installiert (der haeufigste Fehler!), (2) stdio-Server startet nicht — falsche Node-Version oder npx-Probleme, (3) `client.close()` vergessen — Prozess haengt. |
| B8 | OK | Implizit: Gleiches Projektverzeichnis. |
| B9 | WARN | `@ai-sdk/mcp` und `@modelcontextprotocol/sdk` muessen in `package.json` stehen. Ohne Installationsanweisung wird das nie passieren. |
| B10 | OK | Code-Bloecke haben vollstaendige Imports. Die Loesung ist kopierbar — WENN die Pakete installiert sind. |
| B11 | OK | Logischer Aufbau: Client erstellen → Transport-Optionen → Tools laden → Typisierte Schemas → Lifecycle. COMBINE referenziert Challenge 3.3 (Agentic Loop) — klar. |
| B12 | OK | "MCP" wird gut eingefuehrt und erklaert. "Transport" wird mit HTTP/SSE/stdio erklaert. "Capabilities" wird erwaehnt aber koennte einen Halbsatz mehr vertragen. "stdio" wird als "stdin/stdout-Kommunikation" erklaert — ausreichend fuer einen TypeScript-Entwickler. |

### 06-tool-approval.mdx (Challenge 3.5)

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete. `readline` ist Node.js builtin. |
| B2 | OK | Kein neuer Installationsbefehl. |
| B3 | FAIL | **Kein Dateiname und kein Ausfuehrungsbefehl.** Besonders wichtig hier: Das Programm ist interaktiv (readline), der Lerner muss wissen, wie er es startet und wie er im Terminal antwortet. |
| B4 | FAIL | **Kein `npx tsx`-Kommando.** |
| B5 | OK | Keine neuen Environment Variables. |
| B6 | WARN | Kein konkreter Terminal-Output fuer die TRY-Aufgabe. Der Walkthrough-Code in Schicht 3 zeigt den Approval-Dialog als Kommentare, was gut ist. Aber die TRY-Loesung zeigt nicht, wie der vollstaendige Dialog im Terminal aussieht (wann kommt der Approval-Prompt? Was passiert nach "y"? Was nach "n"?). |
| B7 | WARN | Kein Troubleshooting. Typische Fehler: (1) readline blockiert — User gibt nichts ein und wartet ewig, (2) `rl.close()` vergessen — Prozess haengt, (3) Gross/Kleinschreibung bei "y"/"Y" — die Loesung behandelt das mit `.toLowerCase()`, aber der Lerner koennte "yes" eingeben und scheitern. |
| B8 | OK | Implizit: Gleiches Projektverzeichnis. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Code direkt kopierbar. Imports vollstaendig. `readline` ist Node.js builtin — das wird implizit klar durch `import * as readline from 'readline'`, aber nicht explizit gesagt. |
| B11 | OK | Logischer Aufbau: Statisches Approval → Dynamisches Approval → Approval Flow mit generateText → Safe/Dangerous Pattern. Gut aufgebaut. |
| B12 | OK | "needsApproval", "toolCallApproval", "Human-in-the-Loop" werden im Kontext erklaert. "readline" wird nicht als "Node.js builtin" markiert — ein Anfaenger koennte denken, er braucht ein zusaetzliches Paket. |

### 07-boss-fight.mdx

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine neuen Pakete im Basis-Szenario. MCP ist optional ("Du kannst es als lokales Tool oder als MCP Tool (Bonus) anbinden"). |
| B2 | OK | Kein Installationsbefehl noetig (ausser der Lerner will MCP nutzen — dann fehlen die Install-Anweisungen, aber das ist als "Bonus" markiert). |
| B3 | WARN | **Kein Dateiname** (z.B. `boss-fight-3.ts`). Kein Ausfuehrungsbefehl. Aber: Der Starter-Code ist als Geruest angelegt — der Lerner hat zumindest eine Struktur. |
| B4 | WARN | **Kein `npx tsx`-Kommando.** Da das Programm interaktiv ist (readline fuer User-Input und Approval), waere ein Hinweis wie "Starte mit `npx tsx boss-fight-3.ts` — das Programm wartet auf Deine Eingabe" besonders wichtig. |
| B5 | OK | Keine neuen Environment Variables. |
| B6 | OK | **Guter erwarteter Output.** Das "Szenario" oben zeigt exakt, wie das fertige Programm aussehen soll — mit Tool Calls, Approval-Dialog und Zusammenfassung. Das ist der beste erwartete Output in Level 3. |
| B7 | WARN | Kein Troubleshooting. Aber die 3 Hinweise in Details-Bloecken helfen bei typischen Problemen (Tool-Beschreibungen, onStepFinish, Ablehnung-Verhalten). |
| B8 | OK | Eigenstaendiges Programm, klarer Scope. |
| B9 | OK | Keine neue Konfiguration. |
| B10 | OK | Starter-Code hat Imports und ist als Geruest nutzbar. |
| B11 | OK | Anforderungen sind nummeriert (1-8), referenzieren die jeweilige Challenge und sind klar priorisiert. |
| B12 | OK | Alle Begriffe wurden in den vorherigen Challenges eingefuehrt. |

### 08-level-complete.mdx

| # | Bewertung | Begruendung |
|---|-----------|-------------|
| B1 | OK | Keine aktionsrelevanten Pruefpunkte. Zusammenfassungsseite. |
| B2 | OK | — |
| B3 | OK | — |
| B4 | OK | — |
| B5 | OK | — |
| B6 | OK | — |
| B7 | OK | — |
| B8 | OK | — |
| B9 | OK | — |
| B10 | OK | — |
| B11 | OK | Skill Tree ist aktualisiert. Ausblick auf Level 4 (Persistence) vorhanden. |
| B12 | OK | Zusammenfassung ist praezise und korrekt. Keine neuen ungeklaerten Begriffe. |

---

## Querschnitt-Findings (Level-uebergreifend)

### FAIL 1: Fehlende npm-Install-Anweisungen fuer MCP-Pakete (P0)

**Betroffene Dateien:** 05-mcp.mdx, indirekt 07-boss-fight.mdx (MCP-Bonus)

Level 3 fuehrt zwei komplett neue npm-Pakete ein:
- `@ai-sdk/mcp` (fuer `createMCPClient`)
- `@modelcontextprotocol/sdk` (fuer `StdioClientTransport`)

Nirgendwo in Level 3 steht eine Installationsanweisung. Der Import `import { createMCPClient } from '@ai-sdk/mcp'` schlaegt fehl mit `Cannot find module`. Das ist der schwerste Fehler, weil der Lerner hier komplett blockiert wird.

**Fix:** In 05-mcp.mdx vor Schicht 1 einen Setup-Block einfuegen:
```
### Setup fuer diese Challenge

MCP erfordert zwei zusaetzliche Pakete:

\`\`\`bash
npm install @ai-sdk/mcp @modelcontextprotocol/sdk
\`\`\`
```

### FAIL 2: Fehlende Dateinamen und Ausfuehrungsbefehle (P1)

**Betroffene Dateien:** 02-tool-calling.mdx, 03-tools-in-frontend.mdx, 04-tool-loop-agent.mdx, 05-mcp.mdx, 06-tool-approval.mdx, 07-boss-fight.mdx

Konsistentes Muster aus Level 1 wird nicht fortgefuehrt. In Level 1 stand bei jeder Loesung explizit ein Dateiname und ein Ausfuehrungsbefehl. Level 2 und 3 lassen beides weg.

**Fix:** Bei jedem TRY-Block und jeder Loesung ergaenzen:
- Dateiname: `challenge-3-1.ts`, `challenge-3-2.ts`, ..., `boss-fight-3.ts`
- Ausfuehrungsbefehl: `npx tsx challenge-3-1.ts`

### FAIL 3: Fehlender erwarteter Output bei TRY-Aufgaben (P1)

**Betroffene Dateien:** 02 bis 06 (alle TRY-Bloecke)

Die Walkthrough-Code-Beispiele zeigen erwarteten Output als Inline-Kommentare — das ist gut. Aber die TRY-Aufgaben und Loesungen zeigen nie, was der Lerner im Terminal sehen sollte. Nur die Boss Fight (07) hat einen guten erwarteten Output im "Szenario"-Block.

**Fix:** Nach jeder Loesung einen Block ergaenzen:
```
**Erwarteter Output (ungefaehr):**
\`\`\`
Antwort: 42 mal 17 ist 714.
Tool Calls: [{ toolName: 'calculator', args: { operation: 'multiply', a: 42, b: 17 } }]
Tool Results: [{ result: { operation: 'multiply', a: 42, b: 17, result: 714 } }]
\`\`\`
```

### WARN: readline nicht als Node.js builtin gekennzeichnet (P2)

**Betroffene Dateien:** 06-tool-approval.mdx, 07-boss-fight.mdx

`import * as readline from 'readline'` — ein Anfaenger koennte denken, `readline` muss separat installiert werden. Ein kurzer Hinweis "(Node.js builtin — keine Installation noetig)" wuerde helfen.

### WARN: Projektverzeichnis weiterhin unklar (P2)

**Betroffene Dateien:** 01-briefing.mdx

Wie in Level 2: Kein Hinweis ob der Lerner im Level-1-Verzeichnis weiterarbeitet oder ein neues Verzeichnis erstellt. Da Level 3 neue Pakete einfuehrt, waere ein expliziter Hinweis wichtig: "Arbeite im selben Projektverzeichnis wie Level 1 weiter."

### WARN: Kein Troubleshooting-Abschnitt (P2)

**Betroffene Dateien:** Alle Challenges (02-06)

Level 3 fuehrt signifikant komplexere Konzepte ein als Level 1+2. Typische Fehler-Szenarien die dokumentiert werden sollten:

1. **Challenge 3.1:** Zod-Schema passt nicht zum Prompt → LLM nutzt Tool nicht
2. **Challenge 3.3:** Agent dreht sich im Kreis (gleicher Tool Call wiederholt)
3. **Challenge 3.4:** `Cannot find module '@ai-sdk/mcp'` → Paket nicht installiert
4. **Challenge 3.4:** stdio-Server startet nicht → npx-Probleme, Node-Version
5. **Challenge 3.5:** readline haengt → `rl.close()` vergessen
6. **Challenge 3.5:** "yes" statt "y" eingegeben → Approval wird abgelehnt

---

## Gesamtbewertung

| Kategorie | FAIL | WARN | OK |
|-----------|------|------|-----|
| B1 Setup-Vollstaendigkeit | 1 | 1 | 6 |
| B2 Erster Befehl | 1 | 0 | 7 |
| B3 Fehlende Mini-Steps | 5 | 1 | 2 |
| B4 Ausfuehrungsbefehle | 5 | 1 | 2 |
| B5 Environment Setup | 0 | 0 | 8 |
| B6 Erwarteter Output | 0 | 5 | 3 |
| B7 Fehler-Szenarien | 0 | 6 | 2 |
| B8 Projekt-Struktur | 0 | 2 | 6 |
| B9 Package.json/tsconfig | 0 | 1 | 7 |
| B10 Copy-Paste-Tauglichkeit | 0 | 0 | 8 |
| B11 Reihenfolge | 0 | 0 | 8 |
| B12 Begriffe | 0 | 1 | 7 |
| **Gesamt** | **12** | **18** | **66** |

**Hinweis zur Zaehlung:** Die Zusammenfassung oben fasst die 12 FAIL-Bewertungen auf 6 einzigartige Findings zusammen, da B3 und B4 (fehlende Dateinamen/Ausfuehrungsbefehle) in 5 Dateien jeweils als separate Bewertungen gezaehlt werden, aber dasselbe Root-Cause haben.

### Prioritaetsliste fuer Fixes

| Prio | Finding | Aufwand | Dateien |
|------|---------|---------|---------|
| P0 | npm install fuer `@ai-sdk/mcp` + `@modelcontextprotocol/sdk` ergaenzen | 5 min | 05-mcp.mdx |
| P1 | Dateinamen + Ausfuehrungsbefehle bei allen TRY-Bloecken und Loesungen | 20 min | 02, 03, 04, 05, 06, 07 |
| P1 | Erwarteter Output bei allen TRY-Loesungen | 30 min | 02, 03, 04, 05, 06 |
| P2 | Troubleshooting-Hinweise pro Challenge | 30 min | 02, 03, 04, 05, 06 |
| P2 | Projektverzeichnis-Hinweis im Briefing | 5 min | 01-briefing.mdx |
| P2 | `readline` als Node.js builtin kennzeichnen | 2 min | 06, 07 |
| P2 | "Step" praezise definieren, `flatMap` kurz erklaeren | 5 min | 04 |
