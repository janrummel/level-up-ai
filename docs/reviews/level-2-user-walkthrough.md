# Level 2: LLM Fundamentals — User-Walkthrough

> Datum: 2026-03-08 | Reviewer: Agent B (Anfaenger-Perspektive)

## Zusammenfassung

2 FAIL / 5 WARN / 5 OK

## Checkliste

| # | Kategorie | Bewertung | Befund |
|---|-----------|-----------|--------|
| B1 | Setup-Vollstaendigkeit | OK | Level 2 hat keine neuen Dependencies. Alles was benoetigt wird (`ai`, `@ai-sdk/anthropic`) wurde in Level 1 installiert. Kein zusaetzliches Setup noetig. |
| B2 | Erster Befehl | OK | Nicht noetig — Level 2 baut auf dem bestehenden Projekt aus Level 1 auf. Der Briefing-Text verweist klar auf "Level 1 abgeschlossen" als Voraussetzung. |
| B3 | Fehlende Mini-Steps | FAIL | In keiner der 4 Challenges (02-05) wird gesagt, in welche Datei der Code geschrieben werden soll und wie man sie ausfuehrt. Level 1 hat das Muster `challenge-1-1.ts` / `npx tsx challenge-1-1.ts` etabliert — Level 2 uebernimmt dieses Muster nicht und gibt keinen Dateinamen oder Ausfuehrungsbefehl an. |
| B4 | Ausfuehrungsbefehle | FAIL | Kein einziges `npx tsx`-Kommando in den Dateien 02-05 und 06. Ein Anfaenger, der Level 1 durchgearbeitet hat, weiss zwar dass `npx tsx` noetig ist, aber er weiss nicht welchen Dateinamen er verwenden soll. Level 1 hat bei jeder Loesung explizit `npx tsx challenge-1-1.ts` angegeben. Level 2 laesst das komplett weg. |
| B5 | Environment Setup | OK | Keine neuen API-Keys oder Environment Variables noetig. Alles aus Level 1 funktioniert weiter. |
| B6 | Erwarteter Output | WARN | Die WALKTHROUGH-Code-Beispiele in 02-05 zeigen erwarteten Output als Kommentare (z.B. `// → { promptTokens: 18, ... }`). Aber die TRY-Aufgaben und die Boss Fight zeigen keinen erwarteten Output. Der Lerner weiss beim Walkthrough was kommen sollte, aber bei den eigenen Uebungen nicht. |
| B7 | Fehler-Szenarien | WARN | Kein Troubleshooting-Abschnitt in Level 2. Level 1 hatte einen. Level-2-spezifische Fehler die auftreten koennen: System Prompt zu kurz fuer Caching (keine Fehlermeldung, einfach kein Cache), Context-Window-Ueberschreitung (Fehlermeldung wird in 04 erwaehnt aber nicht als Troubleshooting), Rate Limits bei mehreren schnellen Calls in 05. |
| B8 | Projekt-Struktur | WARN | Es wird nicht explizit gesagt, ob der Lerner im selben Projektverzeichnis (`level-1-ai-sdk/`) weiterarbeiten soll oder ein neues erstellen soll. Level 1 sagt `mkdir level-1-ai-sdk`, aber Level 2 schweigt dazu. Ein Anfaenger koennte unsicher sein. |
| B9 | Package.json/tsconfig | OK | Keine neuen Packages noetig. `ai` und `@ai-sdk/anthropic` aus Level 1 reichen. `tsx` braucht kein tsconfig. |
| B10 | Copy-Paste-Tauglichkeit | OK | Alle Code-Bloecke haben vollstaendige Imports (`import { generateText } from 'ai'` etc.). Die TRY-Aufgaben sind als auskommentierter Code angelegt — der Lerner muss nur Kommentare entfernen. Die Loesungen sind direkt kopierbar. |
| B11 | Reihenfolge | WARN | Die COMBINE-Uebung in 02 (Tokens) referenziert `selectModel()` aus Level 1.2. Es wird gesagt "Importiere `selectModel` aus Challenge 1.2 (oder reimplementiere sie)" — aber es wird nicht erklaert, wie man eine Funktion aus einer anderen Datei importiert, oder ob man sie einfach in dieselbe Datei kopieren soll. Aehnlich in 03 (COMBINE). |
| B12 | Begriffe | WARN | Die meisten Begriffe werden gut erklaert: Tokens, Subword Units, Token IDs, Tokenizer/Detokenizer (02), Context Window (04), Prefix Matching (05). Aber: "Truncation" (04) wird nur als Strategie-Name verwendet ohne zu erklaeren was das Wort bedeutet. "Break-Even" (05) wird verwendet ohne Erklaerung. "onFinish Callback" (03) — Callback wird nicht erklaert, aber ein TypeScript-Entwickler kennt das. |

## Detail-Befunde je Datei

### 01-briefing.mdx
- B1: OK — Voraussetzungen klar benannt ("Level 1 abgeschlossen").
- B2: OK — Skip-Hinweis fuer erfahrene User vorhanden.
- B8: WARN — Kein Hinweis ob neues Projektverzeichnis oder Weiterarbeit im Level-1-Verzeichnis. In Level 1 stand explizit `mkdir level-1-ai-sdk && cd level-1-ai-sdk`. Hier fehlt ein analoger Hinweis (z.B. "Arbeite im selben Projektverzeichnis weiter" oder "Erstelle ein neues Verzeichnis `level-2-llm-fundamentals`").
- B12: OK — Begriffe im TL;DR werden als Lernziele positioniert, nicht vorausgesetzt.

### 02-tokens.mdx
- B3: FAIL — Kein Dateiname angegeben. Der Lerner weiss nicht, ob er `challenge-2-1.ts`, `tokens.ts`, oder etwas anderes erstellen soll.
- B4: FAIL — Kein `npx tsx`-Kommando. Level 1 hatte bei jeder Loesung einen expliziten Ausfuehrungsbefehl.
- B6: WARN — Walkthrough-Code zeigt erwarteten Output als Kommentar (`// → { promptTokens: 18, ... }`). TRY-Loesung erklaert nur textuell ("Du wirst sehen, dass [...] 20-40% mehr Tokens verbrauchen"), gibt aber keinen konkreten Terminal-Output.
- B10: OK — Imports vollstaendig, Code direkt kopierbar.
- B11: WARN — COMBINE referenziert `selectModel()` aus Level 1.2 ohne zu erklaeren, wie man diese Funktion aus der anderen Datei bekommt. Ein Anfaenger koennte blockiert sein.
- B12: OK — Subword Units, Token IDs, Tokenizer/Detokenizer werden klar erklaert.

### 03-usage-tracking.mdx
- B3: FAIL — Kein Dateiname angegeben.
- B4: FAIL — Kein Ausfuehrungsbefehl.
- B6: WARN — Walkthrough zeigt konkreten Output als Kommentare. TRY-Loesung zeigt keinen erwarteten Terminal-Output.
- B10: OK — Code ist direkt kopierbar. Schicht 4 (Session-Tracking) verwendet `calculateCost` aus Schicht 2 — beide stehen in derselben Datei, also kein Import-Problem.
- B11: WARN — COMBINE referenziert `selectModel` aus Challenge 1.2 ohne klare Anweisung wie man die Funktion einbindet.
- B12: OK — "Extended Usage Details", `onFinish`, `experimental_providerMetadata` werden im Kontext erklaert.

### 04-context-window.mdx
- B3: FAIL — Kein Dateiname angegeben.
- B4: FAIL — Kein Ausfuehrungsbefehl.
- B6: WARN — TRY-Loesung zeigt keinen konkreten erwarteten Terminal-Output (kein Beispiel wie "System: 45 Tokens, Messages: 6871 Tokens, ...").
- B10: OK — Alle Code-Bloecke haben Imports, TRY-Loesung ist eigenstaendig lauffaehig (kein `generateText`-Call noetig, reine Token-Berechnung). Hinweis: Die TRY-Loesung macht keinen API-Call — das ist clever, weil es kostenlos testbar ist.
- B12: WARN — "Truncation" wird als Strategiename verwendet ("Truncation (aelteste Messages entfernen)"), aber das Wort selbst nicht erklaert. Ein deutscher Anfaenger koennte es nicht kennen. "Summarization" ebenfalls — wird aber immerhin in Klammern als "Zusammenfassung" beschrieben.

### 05-prompt-caching.mdx
- B3: FAIL — Kein Dateiname angegeben.
- B4: FAIL — Kein Ausfuehrungsbefehl.
- B6: WARN — Schicht 3 sagt "Beim zweiten Request solltest Du niedrigere effektive Kosten sehen" — aber zeigt nicht konkret was im Terminal erscheint. Der Lerner weiss nicht, wie er den Cache-Hit erkennt. Die Usage-Felder `cacheReadTokens` / `cacheCreationTokens` werden in 03 erwaehnt, aber in 05 nicht nochmal aufgegriffen und es wird nicht gezeigt, wie man sie ausliest.
- B7: WARN — Kein Hinweis was passiert wenn der System Prompt zu kurz ist fuer Caching (<1024 Tokens). Die Tabelle in Schicht 2 nennt das Minimum, aber es fehlt: "Wenn Dein System Prompt zu kurz ist, passiert einfach nichts — kein Fehler, aber auch kein Caching." Ausserdem kein Hinweis auf das 5-Minuten-TTL: Wenn der Lerner zwischen den Calls zu lange wartet, verfaellt der Cache.
- B10: OK — Code direkt kopierbar, Imports vorhanden.
- B12: WARN — "Break-Even" (Schicht 4) wird ohne Erklaerung verwendet. "Prefix Matching" wird in Schicht 1 gut erklaert. "TTL" (Time To Live) fehlt — die 5-Minuten-Cache-Dauer wird in der Tabelle erwaehnt, aber nicht erklaert was passiert wenn sie ablaeuft.

### 06-boss-fight.mdx
- B3: FAIL — Kein Dateiname angegeben (z.B. `boss-fight-2.ts`). Kein Ausfuehrungsbefehl.
- B4: FAIL — Kein `npx tsx`-Befehl.
- B6: OK — Der erwartete Output wird oben im "Szenario" gezeigt. Das ist gut — der Lerner weiss genau wie das fertige Programm aussehen soll.
- B10: OK — Starter-Code hat den `import`-Block und ist als Geruest verwendbar.
- B11: OK — Anforderungen sind nummeriert und referenzieren klar die jeweilige Challenge. Hinweise in Details-Bloecken geben gestufte Hilfe.

### 07-level-complete.mdx
- Keine aktionsrelevanten Pruefpunkte. Zusammenfassung der Konzepte ist praeznant und korrekt. Skill Tree ist aktualisiert. Ausblick auf Level 3 vorhanden.

## Zusammenfassung der Findings

### FAILs (P0/P1)

1. **B3 + B4: Fehlende Dateinamen und Ausfuehrungsbefehle in allen Challenges und der Boss Fight** — In Level 1 wurde bei jeder Loesung explizit angegeben: "Speichere als `challenge-1-1.ts`" und "Fuehre aus mit `npx tsx challenge-1-1.ts`". Level 2 laesst beides komplett weg. Ein Anfaenger der Level 1 durchgearbeitet hat, kann sich das Muster vermutlich ableiten — aber es ist ein klarer Bruch mit dem bisherigen Standard. Besonders bei der Boss Fight fehlt ein Dateiname.

   **Fix-Vorschlag:** In jeder TRY-Sektion und bei jeder Loesung ergaenzen:
   - Vor dem TRY-Code: "Erstelle eine Datei `challenge-2-1.ts`:"
   - Nach der Loesung: `npx tsx challenge-2-1.ts`
   - Boss Fight: "Erstelle eine Datei `boss-fight-2.ts`:" + `npx tsx boss-fight-2.ts`

### WARNs (P2)

1. **B6: Kein erwarteter Output bei TRY-Aufgaben** — Die Walkthroughs zeigen Output als Kommentare, aber die TRY-Loesungen nicht. Vorschlag: Nach jeder Loesung einen "Erwarteter Output (ungefaehr):"-Block ergaenzen, wie Level 1 es tut.

2. **B7: Kein Troubleshooting** — Level-2-spezifische Fehler (Cache Miss ohne Fehlermeldung, Context-Window-Fehler, Rate Limits bei schnellen aufeinanderfolgenden Calls) werden nicht als Troubleshooting behandelt. Vorschlag: Mindestens im Briefing oder bei 05 einen kurzen Troubleshooting-Block.

3. **B8: Projektverzeichnis unklar** — Kein Hinweis ob im Level-1-Verzeichnis weitergearbeitet wird oder ein neues erstellt werden soll. Vorschlag: Im Briefing eine Zeile ergaenzen wie "Arbeite im selben Projektverzeichnis wie Level 1 weiter — alle noetige Packages sind bereits installiert."

4. **B11: COMBINE-Abschnitte referenzieren Level-1-Funktionen ohne Einbindungs-Anleitung** — `selectModel()` wird referenziert, aber nicht erklaert wie man sie aus einer anderen Datei importiert oder in die aktuelle Datei kopiert. Vorschlag: "Kopiere die `selectModel`-Funktion aus Deiner `challenge-1-2.ts` in Deine aktuelle Datei, oder reimplementiere sie."

5. **B12: Einige Fachbegriffe nicht beim ersten Auftreten erklaert** — "Truncation", "Break-Even", "TTL" werden ohne Erklaerung oder kurze Uebersetzung verwendet. Vorschlag: Bei erster Verwendung in Klammern erklaeren, z.B. "Truncation (Abschneiden aelterer Nachrichten)".
