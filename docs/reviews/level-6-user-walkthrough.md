# Level 6: Evals — User-Walkthrough Review

**Datum:** 2026-03-09
**Perspektive:** Technik-affiner Anfaenger (TypeScript-Dev mit ChatGPT-Erfahrung, ohne AI SDK / Evalite Kenntnisse)
**Bewertungsskala:** OK | WARNUNG | FEHLT | KRITISCH

---

## Datei 1: 01-briefing.mdx

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | WARNUNG | Keine Installationsanweisungen — ist ein Briefing, aber es fehlt der Hinweis "Setup kommt in 6.1". Kein Hinweis, dass `pnpm` statt `npm` verwendet wird. Kein Hinweis, dass OpenAI statt Anthropic als Provider dient. |
| B2 | Erster Befehl | FEHLT | Kein konkreter Befehl. Fuer ein Briefing akzeptabel, aber ein "Dein erstes Kommando kommt in Challenge 6.1" waere hilfreich. |
| B3 | Fehlende Mini-Steps | WARNUNG | Kein Hinweis auf Projekt-Struktur: Neues Projekt oder existierendes erweitern? Kein Hinweis auf benoetigte API Keys (OpenAI). |
| B4 | Ausfuehrungsbefehle | n/a | Kein Code im Briefing. |
| B5 | Environment Setup | KRITISCH | Kein Wort zu API Keys. Der User braucht einen **OpenAI API Key** fuer dieses Level — das ist ein Provider-Wechsel gegenueber frueheren Levels, wird aber nirgends erwaehnt. |
| B6 | Erwarteter Output | n/a | Kein ausfuehrbarer Code. |
| B7 | Fehler-Szenarien | FEHLT | Keine Troubleshooting-Hinweise. |
| B8 | Projekt-Struktur | KRITISCH | Unklar: Ein neues Projekt pro Level? Pro Challenge? Wo sollen die `.eval.ts` Dateien hin? |
| B9 | Package.json/tsconfig | FEHLT | Keine Konfigurationshinweise im Briefing. |
| B10 | Copy-Paste-Tauglichkeit | n/a | Kein Code. |
| B11 | Reihenfolge | OK | Challenges sind klar nummeriert und verlinkt. |
| B12 | Begriffe | WARNUNG | "Evals" wird im TL;DR knapp erklaert. "Scorer" wird erwaehnt aber nicht erklaert. "Evalite" wird als "Dein Vitest fuer AI" beschrieben — guter Vergleich, aber koennte ausfuehrlicher sein. |

---

## Datei 2: 02-evalite-basics.mdx (Challenge 6.1)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | WARNUNG | `pnpm add -D evalite vitest autoevals` — aber woher weiss der User, dass er `pnpm` braucht? Kein Hinweis auf pnpm-Installation. Kein Hinweis auf `@ai-sdk/openai` als Dependency (wird erst in Schicht 5 gebraucht, aber im Install-Schritt nicht erwaehnt). Kein Hinweis auf `zod` (wird spaeter gebraucht). |
| B2 | Erster Befehl | OK | `pnpm add -D evalite vitest autoevals` ist klar und konkret. |
| B3 | Fehlende Mini-Steps | KRITISCH | **Wo soll die Datei erstellt werden?** Es wird gesagt `.eval.ts` Dateien unter `src/`, aber es gibt keinen `mkdir`-Befehl, keinen Hinweis auf bestehendes Projekt. Der User weiss nicht, ob er in einem existierenden Projekt oder einem neuen arbeiten soll. **Es fehlt:** `touch hello.eval.ts` oder aehnliches. |
| B4 | Ausfuehrungsbefehle | OK | `pnpm eval:dev` wird genannt und erklaert. |
| B5 | Environment Setup | KRITISCH | In Schicht 5 wird `openai('gpt-4o-mini')` verwendet — aber **kein Wort zum OPENAI_API_KEY**. Kein `.env`-Setup, kein `export OPENAI_API_KEY=...`. Ein Anfaenger wird einen kryptischen Fehler bekommen. |
| B6 | Erwarteter Output | WARNUNG | Dashboard unter `localhost:3006` wird erwaehnt und Features beschrieben, aber kein Screenshot oder konkreter erwarteter Output (z.B. "Du siehst Score: 1.0 fuer alle 3 Test-Cases"). |
| B7 | Fehler-Szenarien | FEHLT | Was passiert wenn: pnpm nicht installiert ist? OPENAI_API_KEY fehlt? Port 3006 belegt? evalite Befehl nicht gefunden? |
| B8 | Projekt-Struktur | WARNUNG | Zeigt `src/` Struktur mit `.eval.ts` neben `.test.ts` — gut. Aber: Existiert `src/` schon? In welchem Projekt? |
| B9 | Package.json/tsconfig | WARNUNG | `package.json` Scripts werden gezeigt — gut. Aber: Existiert die `package.json` schon? Braucht der User eine `tsconfig.json`? Evalite basiert auf Vitest — braucht es eine `vitest.config.ts`? |
| B10 | Copy-Paste-Tauglichkeit | OK | Code-Bloecke sind vollstaendig mit allen Imports. Loesung ist direkt kopierbar. |
| B11 | Reihenfolge | OK | Schichten bauen logisch aufeinander auf: Install → Konvention → Grundstruktur → Async Data → AI SDK → UI. |
| B12 | Begriffe | OK | "Levenshtein" wird in Schicht 5 als "Edit-Distanz" erklaert — aber erst dort, obwohl er in Schicht 3 schon verwendet wird. Beim ersten Auftreten fehlt die Erklaerung. "traceAISDKModel" wird gut erklaert. |

---

## Datei 3: 03-deterministic-eval.mdx (Challenge 6.2)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | Keine neuen Dependencies noetig — baut auf 6.1 auf. |
| B2 | Erster Befehl | n/a | Kein neuer Setup-Schritt. |
| B3 | Fehlende Mini-Steps | WARNUNG | Der User soll eine `capitals.eval.ts` erstellen — aber es wird nicht gesagt "Erstelle eine neue Datei `capitals.eval.ts`". Der Dateiname steht nur im Code-Kommentar. |
| B4 | Ausfuehrungsbefehle | WARNUNG | Kein expliziter Ausfuehrungsbefehl in der TRY-Section. Der User muss sich erinnern, dass `pnpm eval:dev` aus 6.1 hier auch gilt. |
| B5 | Environment Setup | OK | Kein LLM-Call in den Beispielen — kein API Key noetig. |
| B6 | Erwarteter Output | WARNUNG | Erklaerung sagt "containsKeyword gibt 1.0, Levenshtein gibt niedrigere Scores" — aber keine konkreten Zahlen. |
| B7 | Fehler-Szenarien | FEHLT | Kein Troubleshooting. |
| B8 | Projekt-Struktur | OK | Baut implizit auf 6.1 auf. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen noetig. |
| B10 | Copy-Paste-Tauglichkeit | OK | Alle Imports vorhanden, Loesung direkt ausfuehrbar. |
| B11 | Reihenfolge | OK | Klar: Inline → Dynamisch → createScorer → Abgestuft → Autoevals → Kombiniert. |
| B12 | Begriffe | OK | "Inline Scorer", "createScorer", "Levenshtein" (Edit-Distanz) werden gut erklaert. |

---

## Datei 4: 04-llm-as-judge.mdx (Challenge 6.3)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | WARNUNG | Braucht `zod` und `@ai-sdk/openai` — beides wird importiert, aber nie als Installationsschritt erwaehnt. Wo/wann wurde `pnpm add zod @ai-sdk/openai` ausgefuehrt? |
| B2 | Erster Befehl | FEHLT | Kein Installationsbefehl fuer die neuen Dependencies. |
| B3 | Fehlende Mini-Steps | WARNUNG | `factuality.eval.ts` soll erstellt werden — steht nur im Code-Kommentar. Kein expliziter "Erstelle die Datei"-Schritt. |
| B4 | Ausfuehrungsbefehle | WARNUNG | Kein `pnpm eval:dev` in der TRY-Section. |
| B5 | Environment Setup | KRITISCH | `openai('gpt-4o')` wird im Scorer verwendet — braucht OPENAI_API_KEY. **Immer noch nicht dokumentiert.** Ein Anfaenger scheitert hier garantiert. |
| B6 | Erwarteter Output | OK | Score-Tabelle (A-E mit numerischen Werten) ist klar. Erklaerung der erwarteten Grades pro Test-Case in der Loesung. |
| B7 | Fehler-Szenarien | FEHLT | Was wenn der API Key fehlt? Was wenn das Judge-LLM eine unerwartete Antwort gibt? Was wenn rate-limited? |
| B8 | Projekt-Struktur | OK | Baut auf vorherige Challenges auf. |
| B9 | Package.json/tsconfig | WARNUNG | `zod` muss installiert sein — wird nie als Installationsschritt erwaehnt. |
| B10 | Copy-Paste-Tauglichkeit | OK | Loesung ist vollstaendig mit allen Imports, direkt kopierbar. |
| B11 | Reihenfolge | OK | Logischer Aufbau: Problem → Skala → Implementierung → Einsatz → Trade-offs. |
| B12 | Begriffe | OK | "LLM-as-a-Judge" wird klar erklaert. "Rationale" wird als "Begruendung" uebersetzt. "generateObject" und "Zod Schema" werden im Kontext erklaert. Score-Skala A-E ist gut dokumentiert. |

---

## Datei 5: 05-dataset-management.mdx (Challenge 6.4)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | Keine neuen Dependencies. |
| B2 | Erster Befehl | n/a | Konzeptuelle Challenge. |
| B3 | Fehlende Mini-Steps | OK | Klar strukturiert mit Kategorien und konkreten Beispielen. |
| B4 | Ausfuehrungsbefehle | WARNUNG | Kein expliziter `pnpm eval:dev`-Befehl in TRY-Section. |
| B5 | Environment Setup | OK | Simulierte Task ohne LLM — kein Key noetig. Aber: critiqueDataset in Schicht 4 braucht openai('gpt-4o') — API Key? |
| B6 | Erwarteter Output | WARNUNG | "Levenshtein-Scores werden niedrig sein" — aber keine konkreten Zahlen oder Screenshot. |
| B7 | Fehler-Szenarien | FEHLT | Kein Troubleshooting. |
| B8 | Projekt-Struktur | OK | Zeigt Dataset-Versionierung in separater Datei — gutes Pattern. |
| B9 | Package.json/tsconfig | OK | Keine neuen Konfigurationen. |
| B10 | Copy-Paste-Tauglichkeit | OK | Loesung ist vollstaendig und kopierbar. |
| B11 | Reihenfolge | OK | Klar: Async Data → Groesse → Kategorien → Critiquing → Versionierung. |
| B12 | Begriffe | OK | "Dataset Critiquing", "Seed Data", "Edge Cases" werden im Kontext erklaert. |

---

## Datei 6: 06-langfuse.mdx (Challenge 6.5)

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | OK | Bewusst konzeptuell — kein lokales Setup. Quickstart-Link vorhanden. |
| B2 | Erster Befehl | OK | "Gehe zu langfuse.com und erstelle einen Account" — klar. |
| B3 | Fehlende Mini-Steps | OK | Fuer eine konzeptuelle Challenge angemessen. |
| B4 | Ausfuehrungsbefehle | n/a | Kein lokaler Code auszufuehren. |
| B5 | Environment Setup | WARNUNG | Code zeigt `LANGFUSE_PUBLIC_KEY` und `LANGFUSE_SECRET_KEY` — aber sagt explizit, dass Coding nicht Teil dieser Challenge ist. Koennte verwirren: "Brauche ich die Keys jetzt oder nicht?" |
| B6 | Erwarteter Output | OK | Dashboard-Features werden tabellarisch beschrieben. |
| B7 | Fehler-Szenarien | n/a | Konzeptuell, keine Ausfuehrung. |
| B8 | Projekt-Struktur | OK | Klar abgegrenzt: Evalite = Development, Langfuse = Production. |
| B9 | Package.json/tsconfig | n/a | Kein Code-Setup. |
| B10 | Copy-Paste-Tauglichkeit | WARNUNG | Code-Beispiel zeigt Langfuse-Integration, ist aber nicht ausfuehrbar (soll auch nicht). Koennte Anfaenger verwirren, die es trotzdem versuchen. |
| B11 | Reihenfolge | OK | Konzepte → Integration → Dashboard → Vergleich mit Evalite. |
| B12 | Begriffe | OK | "Trace", "Generation", "Score", "Span", "Observability" werden alle beim ersten Auftreten erklaert. Gute Tabelle. |

---

## Datei 7: 07-boss-fight.mdx

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | WARNUNG | Imports zeigen alle noetigen Pakete, aber kein Installationsbefehl. Anfaenger muss sich aus 6.1 erinnern — und zusaetzlich `zod` und `@ai-sdk/openai` installiert haben (was nie explizit stand). |
| B2 | Erster Befehl | FEHLT | Kein "Erstelle eine Datei `chat-titles.eval.ts`" und kein `pnpm eval:dev`. |
| B3 | Fehlende Mini-Steps | WARNUNG | Starter-Code zeigt Imports — gut. Aber: Welche Datei? Wo erstellen? Wie ausfuehren? |
| B4 | Ausfuehrungsbefehle | FEHLT | Kein Ausfuehrungsbefehl. Der User muss wissen, dass `pnpm eval:dev` die Datei findet. |
| B5 | Environment Setup | KRITISCH | `openai('gpt-4o-mini')` und `openai('gpt-4o')` werden verwendet. OPENAI_API_KEY ist zwingend — **immer noch nirgends dokumentiert im gesamten Level**. |
| B6 | Erwarteter Output | WARNUNG | Kein erwarteter Output. "Hat sich der Score verbessert?" — aber keine Baseline oder Erwartung angegeben. |
| B7 | Fehler-Szenarien | FEHLT | Kein Troubleshooting. |
| B8 | Projekt-Struktur | OK | Eine `.eval.ts` Datei fuer die Boss Fight — klar. |
| B9 | Package.json/tsconfig | WARNUNG | Setzt voraus, dass `package.json` mit eval-Scripts existiert (aus 6.1). |
| B10 | Copy-Paste-Tauglichkeit | OK | Starter-Code mit allen Imports ist kopierbar. TODOs sind klar formuliert. |
| B11 | Reihenfolge | OK | TODOs sind nummeriert und logisch geordnet. |
| B12 | Begriffe | OK | Keine neuen Begriffe — alles wurde in vorherigen Challenges erklaert. |

---

## Datei 8: 08-level-complete.mdx

| # | Kriterium | Bewertung | Kommentar |
|---|-----------|-----------|-----------|
| B1-B12 | Alle | OK | Zusammenfassung, kein ausfuehrbarer Content. Gute Uebersicht der gelernten Konzepte. |

---

## Querschnitt-Checks (Anfaenger-Perspektive Level 6)

### 1. Weiss der User was "Evals" sind?
**WARNUNG.** Im Briefing steht: "Evals sind automatisierte Tests fuer LLM-Anwendungen." Das ist knapp, aber ausreichend. Challenge 6.1 WHY-Section erklaert das Problem gut. Koennte im Briefing etwas ausfuehrlicher sein (z.B. "Evals = Evaluations, also Bewertungen").

### 2. Weiss der User was "Evalite" ist?
**OK.** "Dein Vitest fuer AI" ist ein guter Vergleich. Wird in 6.1 ausfuehrlich erklaert.

### 3. Weiss der User was ein "Scorer" ist?
**WARNUNG.** Wird im Briefing erwaehnt ("Scorer, die Qualitaet auf einer Skala messen") aber erst in 6.1 richtig erklaert. Beim ersten Auftreten im Briefing fehlt eine Mini-Erklaerung.

### 4. Weiss der User was "Levenshtein" bedeutet?
**WARNUNG.** Wird in 6.1 Schicht 3 als Import verwendet, aber erst in der Loesung als "Aehnlichkeit zwischen Output und Expected" erklaert. Die Erklaerung als "Edit-Distanz" kommt erst in 6.2 Schicht 5. Beim ersten Auftreten in 6.1 fehlt die Erklaerung.

### 5. Weiss der User was "LLM-as-a-Judge" bedeutet?
**OK.** Challenge 6.3 erklaert das Konzept ausfuehrlich und nachvollziehbar.

### 6. Weiss der User was "Langfuse" ist?
**OK.** "Open-Source Observability-Tool fuer LLM-Anwendungen. Wie Datadog oder Sentry — aber speziell fuer LLMs." Sehr guter Vergleich.

### 7. Weiss der User dass Level 6 pnpm statt npm verwendet?
**KRITISCH.** Nein. `pnpm add -D evalite vitest autoevals` steht in 6.1 — aber es gibt keinen Hinweis, warum `pnpm` statt `npm` verwendet wird, ob der User pnpm installieren muss, oder ob `npm install -D` auch funktioniert. Fruehere Levels verwendeten moeglicherweise `npm` — der ploetzliche Wechsel wird nicht erklaert.

### 8. Weiss der User dass Level 6 OpenAI statt Anthropic nutzt?
**KRITISCH.** Nein. In 6.1 Schicht 5 taucht ploetzlich `import { openai } from '@ai-sdk/openai'` auf. Kein Wort dazu, dass dies ein Provider-Wechsel ist. Kein Hinweis, dass ein OpenAI API Key benoetigt wird. Ein Anfaenger, der bisher mit Anthropic gearbeitet hat, wird hier komplett blockiert.

### 9. Weiss der User welche Pakete er installieren muss?
**KRITISCH.** Die vollstaendige Paketliste wird nie an einer Stelle gezeigt. Verteilt ueber die Challenges:
- 6.1: `evalite vitest autoevals` (explizit)
- 6.3: `zod @ai-sdk/openai` (nur in Imports sichtbar, nie als `pnpm add`)
- 6.3: `ai` (AI SDK Core — in Imports, nie als Install)
Fehlender konsolidierter Installationsbefehl: `pnpm add -D evalite vitest autoevals zod ai @ai-sdk/openai`

### 10. Weiss der User wie er Evals ausfuehrt?
**OK.** `pnpm eval:dev` wird in 6.1 erklaert und das Script in `package.json` gezeigt. Wird allerdings in spaeter Challenges (6.2-6.4 TRY-Sections) nicht wiederholt.

### 11. Weiss der User welche Datei er erstellen soll?
**WARNUNG.** Dateinamen stehen in Code-Kommentaren (`// hello.eval.ts`, `// capitals.eval.ts`), aber es gibt keinen expliziten Schritt "Erstelle eine neue Datei namens ...". Ein Anfaenger koennte das uebersehen.

### 12. Kann der User den Code kopieren und direkt ausfuehren?
**WARNUNG.** Die Loesungen selbst sind copy-paste-tauglich (alle Imports vorhanden). Aber: Ohne das korrekte Environment-Setup (pnpm, OpenAI API Key, alle Pakete installiert) wird nichts laufen. Die Code-Bloecke sind gut, aber der Kontext drumherum fehlt.

---

## Zusammenfassung

### Staerken
- **Didaktischer Aufbau** ist sehr gut: THINK → OVERVIEW → WHY → WALKTHROUGH → TRY → COMBINE
- **Schichten-Ansatz** baut Komplexitaet schrittweise auf
- **Code-Qualitaet** ist hoch: Alle Imports, konsistente Patterns, gute Kommentare
- **Erklaerungen** sind fuer die meisten Konzepte verstaendlich und praezise
- **Mermaid-Diagramme** helfen beim Verstaendnis der Zusammenhaenge
- **COMBINE-Sections** verknuepfen Challenges gut miteinander
- **Score-Tabelle (A-E)** in 6.3 ist ausgezeichnet erklaert

### Kritische Luecken (Blocker fuer Anfaenger)

| Prioritaet | Problem | Betroffene Dateien |
|------------|---------|-------------------|
| **P0** | **OPENAI_API_KEY Setup fehlt komplett.** Kein `.env`-Beispiel, kein `export`-Befehl, kein Hinweis auf den Provider-Wechsel von Anthropic zu OpenAI. Anfaenger wird beim ersten LLM-Call in 6.1 Schicht 5 blockiert. | 01, 02, 04, 07 |
| **P0** | **pnpm vs. npm nicht erklaert.** Ploetzlicher Wechsel zu `pnpm` ohne Erklaerung oder Installationshinweis. | 01, 02 |
| **P0** | **Vollstaendige Paketliste fehlt.** `zod`, `ai`, `@ai-sdk/openai` werden in Imports verwendet aber nie als `pnpm add` gezeigt. | 02, 04, 07 |
| **P1** | **Projekt-Setup unklar.** Neues Projekt? Existierendes erweitern? Wo genau `.eval.ts` Dateien erstellen? `tsconfig.json` noetig? | 01, 02 |
| **P1** | **Levenshtein beim ersten Auftreten nicht erklaert.** Wird in 6.1 Schicht 3 importiert, aber erst spaeter erklaert. | 02 |
| **P1** | **Ausfuehrungsbefehle fehlen in TRY-Sections** ab 6.2. Nur in 6.1 steht `pnpm eval:dev`. | 03, 04, 05, 07 |
| **P2** | **Kein Troubleshooting.** Keine einzige Fehler-Hilfe im gesamten Level (fehlender Key, falsches Paket, Port belegt). | Alle |
| **P2** | **Erwarteter Output vage.** "Score wird niedrig sein" statt konkreter Zahlen oder Screenshots. | 02, 03, 05 |

### Scoring-Uebersicht

| Kriterium | 01 | 02 | 03 | 04 | 05 | 06 | 07 | 08 |
|-----------|----|----|----|----|----|----|----|----|
| B1 Setup | W | W | OK | W | OK | OK | W | OK |
| B2 Erster Befehl | F | OK | — | F | — | OK | F | — |
| B3 Mini-Steps | W | K | W | W | OK | OK | W | — |
| B4 Ausfuehrung | — | OK | W | W | W | — | F | — |
| B5 Environment | K | K | OK | K | OK | W | K | — |
| B6 Output | — | W | W | OK | W | OK | W | — |
| B7 Fehler | F | F | F | F | F | — | F | — |
| B8 Projektstruktur | K | W | OK | OK | OK | OK | OK | OK |
| B9 Config | F | W | OK | W | OK | — | W | — |
| B10 Copy-Paste | — | OK | OK | OK | OK | W | OK | — |
| B11 Reihenfolge | OK | OK | OK | OK | OK | OK | OK | OK |
| B12 Begriffe | W | OK | OK | OK | OK | OK | OK | OK |

**Legende:** OK = gut | W = Warnung | F = Fehlt | K = Kritisch | — = nicht zutreffend

### Empfohlene Fixes (Top 5)

1. **Briefing oder 6.1: Environment-Setup-Block einfuegen** — OpenAI API Key, `.env` Datei, Provider-Wechsel erklaeren, vollstaendigen `pnpm add`-Befehl mit allen Paketen
2. **Briefing oder 6.1: pnpm erklaeren** — Warum pnpm? Installation (`npm install -g pnpm`). Oder: Alternative mit npm zeigen.
3. **6.1: Projekt-Setup-Block einfuegen** — `mkdir`, `pnpm init`, `tsconfig.json` (falls noetig), klare Ordnerstruktur
4. **6.1: Levenshtein beim ersten Import erklaeren** — Ein Satz: "Levenshtein misst die Edit-Distanz — wie viele Zeichenaenderungen noetig sind, um vom Output zum Expected zu kommen."
5. **Alle TRY-Sections: Ausfuehrungsbefehl wiederholen** — Jede TRY-Section sollte enden mit "Starte mit `pnpm eval:dev` und pruefe die Ergebnisse."
