# Level 2: LLM Fundamentals — Experten-Review

> Datum: 2026-03-08 | Reviewer: Agent A (Experte/Paedagoge)

## Zusammenfassung

2 FAIL / 5 WARN / 7 OK

## Checkliste

| # | Kategorie | Bewertung | Befund |
|---|-----------|-----------|--------|
| A1 | Didaktische Progression | OK | Logischer Aufbau: Tokens → Usage Tracking → Context Window → Prompt Caching. Jedes Konzept wird eingefuehrt, bevor es in der naechsten Challenge genutzt wird. |
| A2 | THINK-Qualitaet | OK | Alle vier THINK-Fragen aktivieren Vorwissen und sind offen genug zum Nachdenken. Gute Progression von konkret ("Liest ein LLM Woerter wie Du?") zu abstrakt ("Zahlt der Provider jedes Mal neu?"). |
| A3 | OVERVIEW-Klarheit | OK | Alle Mermaid-Diagramme zeigen klar die Position im Gesamtbild. Lesbar, korrekt, konsistentes Farbschema. |
| A4 | WHY-Motivierung | OK | Jede Challenge hat ein klares Vorher/Nachher-Szenario. Konkrete Probleme (unvorhersehbare Kosten, kryptische Fehler, voller Preis fuer gecachten Content). |
| A5 | WALKTHROUGH-Tiefe | WARN | Grundsaetzlich gut geschichtet (3-4 Schichten pro Challenge). Aber in 03-usage-tracking.mdx Schicht 3 wird `experimental_providerMetadata` erwaehnt — dieser Name ist in AI SDK v6 veraltet (jetzt `providerMetadata`). In Schicht 4 wird `onFinish` bei `generateText` genutzt, was in der AI SDK-Dokumentation nicht als offizieller Parameter fuer `generateText` gefuehrt wird. |
| A6 | TRY-Machbarkeit | OK | Alle TRY-Aufgaben sind in 15-25 Min loesbar. TODOs klar nummeriert, Checklisten vorhanden, Loesungen korrekt und vollstaendig. |
| A7 | COMBINE-Vernetzung | OK | Jede Challenge greift auf vorherige zurueck: 2.2 nutzt Token-Wissen aus 2.1, 2.3 baut auf Usage aus 2.2, 2.4 erweitert den Cost Calculator aus 2.2. Level-1-Referenzen (`selectModel`) sind vorhanden. |
| A8 | Code-Korrektheit | FAIL | Zwei Probleme: (1) `onFinish({ usage })` bei `generateText` ist in AI SDK v6 kein dokumentierter Parameter — `onFinish` existiert bei `streamText`, nicht bei `generateText`. Bei `generateText` greift man nach dem `await` direkt auf `result.usage` zu. (2) In 05-prompt-caching.mdx Schicht 3 steht im Kommentar "~200+ Woerter → weit ueber 1024 Tokens" — das ist falsch. 200 Woerter sind ca. 260-350 Tokens, weit UNTER 1024 Tokens. Der System Prompt in der Loesung (TRY-Sektion) ist laenger, aber der Walkthrough-Kommentar ist irrefuehrend. |
| A9 | Quellen-Qualitaet | OK | Alle Seiten haben 3-4 Quellen. Ausschliesslich Rang 1-2 (offizielle Anthropic Docs, Vercel AI SDK Docs, OpenAI Docs). Links sind plausibel und existieren. |
| A10 | Text-Grafik-Code-Balance | OK | Gute Balance aus Mermaid-Diagrammen, Tabellen, Code-Bloecken und erklaerenden Textabschnitten. Kein Abschnitt ist zu lang ohne visuelle Auflockerung. |
| A11 | Fachliche Korrektheit | FAIL | (1) `experimental_providerMetadata` heisst in AI SDK v6 `providerMetadata` (der `experimental_`-Prefix wurde entfernt). (2) Der Kommentar in 05-prompt-caching.mdx, dass ein ~200-Woerter-Prompt "weit ueber 1024 Tokens" liege, ist fachlich falsch. (3) `onFinish` bei `generateText` ist nicht die offizielle API — siehe A8. Die Preistabellen und Token-Erklaerungen sind ansonsten korrekt. |
| A12 | Boss Fight Integration | WARN | Alle vier Challenges werden kombiniert (Token-Counting, Context-Window-Check, Kostenberechnung, Cache-Tracking). Schwierigkeit angemessen. ABER: Der Boss Fight erwaehnt `onFinish`-Callback als Option fuer Session-Tracking (Hinweis 3) — gleicher Fehler wie in 03-usage-tracking.mdx. |
| A13 | Briefing-Vollstaendigkeit | OK | Lernziele (4 Punkte), Voraussetzungen (Level 1 + API-Kosten-Verstaendnis), Skip-Hinweis (direkt zur Boss Fight), Quellen (4 Stueck). Alles vorhanden. |
| A14 | Level Complete | WARN | Zusammenfassung korrekt, Skill Tree zeigt Level 1+2 als freigeschaltet, Level 3 als naechstes. Aber: Keine explizite emotionale Belohnung (z.B. "Glueckwunsch", Achievement-Badge o.ae.). Level 1 hatte ebenfalls keinen, daher Konsistenz — aber didaktisch waere eine kleine Belohnung motivierend. |

## Detail-Befunde

### A1: Didaktische Progression
**OK** — Die vier Challenges bauen sauber aufeinander auf:
- 2.1 (Tokens) fuehrt das Grundkonzept ein: Was sind Tokens, wie zaehlt man sie.
- 2.2 (Usage Tracking) nutzt Token-Wissen und fuegt Kostenberechnung hinzu.
- 2.3 (Context Window) erweitert um die Frage "wie viele Tokens passen rein" — setzt Token-Verstaendnis aus 2.1 voraus.
- 2.4 (Prompt Caching) baut auf Kostenberechnung (2.2) und Context-Verstaendnis (2.3) auf.

Kein Konzept wird genutzt, bevor es eingefuehrt wurde. Die Progression ist logisch und nachvollziehbar.

### A2: THINK-Qualitaet
**OK** — Alle vier THINK-Fragen funktionieren:
- 2.1: "Liest ein LLM Woerter wie Du — oder sieht es etwas ganz anderes?" — Aktiviert Alltagsverstaendnis von Textverarbeitung.
- 2.2: "Was kostet ein einzelner LLM-Call — und wie findest Du das heraus?" — Direkt, praktisch, aktiviert Kosten-Bewusstsein.
- 2.3: "Was passiert wenn Du einem LLM einen Roman schickst — kann es den komplett lesen?" — Gutes Bild, provoziert Nachdenken ueber Limits.
- 2.4: "Wenn Du denselben System Prompt bei jedem Request schickst — zahlt der Provider jedes Mal neu dafuer?" — Starke Frage, weckt sofort Interesse an der Loesung.

### A3: OVERVIEW-Klarheit
**OK** — Alle Mermaid-Diagramme sind klar und lesbar:
- 2.1: Tokenisierungs-Pipeline (Text → Tokenizer → IDs → LLM → Output). Gut.
- 2.2: generateText → usage → Kostenberechnung. Klar.
- 2.3: Context Window als Container mit System, Messages, Tools, Output-Platz. Sehr gut — zeigt visuell, dass alles "reinpassen" muss.
- 2.4: Zwei Requests nebeneinander (Cache Miss vs. Cache Hit). Effektiv.

Konsistentes Farbschema ueber alle Challenges hinweg (blau = Input, gruen = Verarbeitung, orange = aktuelle Position/Output, rot = Fehler).

### A4: WHY-Motivierung
**OK** — Jede WHY-Sektion folgt dem gleichen Muster: "Ohne X passiert [konkretes Problem]", "Mit X kannst Du [konkreter Nutzen]". Die Szenarien sind realistisch und motivierend. Besonders stark in 2.4 (Prompt Caching): Die Kostenersparnis von 90% ist ein sofort verstaendlicher Motivator.

### A5: WALKTHROUGH-Tiefe
**WARN** — Grundsaetzlich gut, aber zwei technische Ungenauigkeiten:

1. **03-usage-tracking.mdx, Schicht 3 (Zeile 113):** Text sagt "Ab AI SDK v6 liefern manche Provider erweiterte Token-Details. Diese findest Du in `result.usage` oder im `experimental_providerMetadata`". In AI SDK v6 wurde der `experimental_`-Prefix entfernt — der korrekte Name ist `providerMetadata`.

2. **03-usage-tracking.mdx, Schicht 4 (Zeile 138-166):** `onFinish({ usage })` wird als Callback-Parameter von `generateText` gezeigt. In der offiziellen AI SDK-Dokumentation ist `onFinish` ein Callback von `streamText` (und `streamObject`), nicht von `generateText`. Bei `generateText` wartet man auf das Ergebnis und greift direkt auf `result.usage` zu. Der Code im TRY-Abschnitt (ohne `onFinish`) ist korrekt, aber der Walkthrough vermittelt ein falsches API-Bild.

Die uebrigen Walkthroughs sind sauber geschichtet und logisch aufgebaut. Besonders gut: 04-context-window.mdx mit den drei Truncation-Strategien (nach Nachrichten-Anzahl, nach Token-Budget, per Zusammenfassung).

### A6: TRY-Machbarkeit
**OK** — Alle vier TRY-Aufgaben sind in der angegebenen Zeit loesbar:
- 2.1: Token-Vergleich DE vs. EN — 4 TODOs, alle mit konkreten Hinweisen. ~15 Min.
- 2.2: Cost Calculator — 4 TODOs, klare Formel im Walkthrough. ~20 Min.
- 2.3: Context-Window-Simulation — 6 TODOs, etwas umfangreicher aber gut gefuehrt. ~20-25 Min.
- 2.4: Cache-Vergleich zweier Requests — 4 TODOs, klar. ~15-20 Min.

Alle Loesungen sind vollstaendig und kompilierbar. Checklisten helfen bei der Selbstkontrolle.

### A7: COMBINE-Vernetzung
**OK** — Jede COMBINE-Sektion greift auf vorherige Challenges zurueck:
- 2.1 COMBINE: Token-Counting + `selectModel()` aus Level 1.2.
- 2.2 COMBINE: Cost Calculator + `selectModel()` + verschiedene Modelle.
- 2.3 COMBINE: Context Manager als Vorstufe fuer `generateText`-Call.
- 2.4 COMBINE: Cache-Aware Cost Calculator, der 2.2 erweitert.

Die Stretch Goals sind sinnvoll und optional. Keine isolierten Uebungen.

### A8: Code-Korrektheit
**FAIL** — Zwei Probleme, die Lernende in die Irre fuehren:

**Problem 1: `onFinish` bei `generateText` (03-usage-tracking.mdx, Zeile 153)**
```typescript
const result = await generateText({
  model: anthropic(modelId),
  prompt,
  onFinish({ usage }) {  // ← Nicht dokumentiert fuer generateText
    // ...
  },
});
```
In AI SDK v6 hat `generateText` keinen `onFinish`-Callback. Dieser existiert bei `streamText`. Bei `generateText` ist das Ergebnis synchron nach dem `await` verfuegbar. **Fix:** Session-Tracking nach dem `await` implementieren (wie im TRY-Abschnitt korrekt gezeigt), nicht via Callback.

**Problem 2: Token-Schaetzung im Kommentar (05-prompt-caching.mdx, Zeile 118)**
```
// Dieser System Prompt hat ca. 200+ Woerter → weit ueber 1024 Tokens
```
200 Woerter sind bei der Faustregel 1 Token ≈ 0.75 Woerter (EN) ca. 260 Tokens, bei Deutsch-lastigen Texten vielleicht 300-350 Tokens. Das ist weit UNTER 1024 Tokens. Die Schaetzung ist um Faktor 3 daneben. Der System Prompt in der Loesung (TRY-Sektion) ist laenger und koennte 1024 erreichen, aber der Walkthrough-Prompt tut es definitiv nicht. **Fix:** Entweder den Walkthrough-System-Prompt verlaengern oder den Kommentar korrigieren.

Modellnamen (`claude-sonnet-4-5-20250514`), Imports (`ai`, `@ai-sdk/anthropic`), und Typen (`result.usage.promptTokens` etc.) sind korrekt.

### A9: Quellen-Qualitaet
**OK** — Quellen-Uebersicht:

| Seite | Anzahl | Quellen |
|-------|--------|---------|
| 01-briefing | 4 | AI SDK Docs (Rang 1), Anthropic Docs (Rang 1) |
| 02-tokens | 3 | Anthropic Token Counting (Rang 1), AI SDK Docs (Rang 1), OpenAI Tokenizer (Rang 1) |
| 03-usage-tracking | 3 | AI SDK Docs (Rang 1), Anthropic Pricing (Rang 1), AI SDK API Reference (Rang 1) |
| 04-context-window | 3 | Anthropic Models (Rang 1), AI SDK Prompts (Rang 1), Anthropic Long Context (Rang 1) |
| 05-prompt-caching | 3 | Anthropic Prompt Caching (Rang 1), AI SDK Docs (Rang 1), Anthropic Pricing (Rang 1) |
| 06-boss-fight | 4 | AI SDK Docs (Rang 1), Anthropic Docs (Rang 1) |

Alle Quellen sind Rang 1 (offizielle Dokumentation). Mindestens 3 pro Seite. Links sind plausibel.

### A10: Text-Grafik-Code-Balance
**OK** — Jede Challenge hat:
- 1 Mermaid-Diagramm (OVERVIEW + COMBINE)
- 1-2 Tabellen (Preise, Context-Window-Groessen)
- 3-6 Code-Bloecke (WALKTHROUGH + TRY + Loesung)
- Erklaerende Textabschnitte zwischen den Code-Bloecken

Kein Abschnitt hat mehr als ~10 Zeilen Text ohne visuelles Element. Die Balance ist gut.

### A11: Fachliche Korrektheit
**FAIL** — Drei fachliche Probleme:

1. **`experimental_providerMetadata` (03-usage-tracking.mdx, Zeile 113):** In AI SDK v6 heisst das Feld `providerMetadata` (ohne `experimental_`-Prefix). Der Text erwaehnt explizit "Ab AI SDK v6" und nutzt gleichzeitig den veralteten Namen. Das ist widerspruechlich und wird Lernende verwirren, die die v6-Docs lesen.

2. **Token-Schaetzung des Walkthrough-System-Prompts (05-prompt-caching.mdx, Zeile 118):** Der Kommentar behauptet, ein ~200-Woerter-Prompt liege "weit ueber 1024 Tokens". Korrekt waeren ca. 260-350 Tokens. Lernende, die die Faustregel aus Challenge 2.1 anwenden, werden die Diskrepanz bemerken.

3. **`onFinish` bei `generateText` (03-usage-tracking.mdx, Zeile 153):** Vermittelt ein falsches API-Bild. Lernende, die den Code kopieren, bekommen entweder einen TypeScript-Fehler oder der Callback wird stillschweigend ignoriert. Siehe A8 fuer Details.

Ansonsten korrekt:
- Token-Erklaerungen (Subword Units, BPE, Sprachunterschiede) sind fachlich richtig.
- Preistabellen sind in plausibler Groessenordnung.
- Context-Window-Groessen stimmen (200K fuer Claude, 128K fuer GPT-4o, 1M+ fuer Gemini 2.5 Flash).
- Prompt-Caching-Mechanik (Prefix Matching, 1024-Token-Minimum, Cache-Dauer) ist korrekt.
- Kostenformeln und Break-Even-Berechnungen sind mathematisch korrekt.

### A12: Boss Fight Integration
**WARN** — Die Boss Fight kombiniert alle vier Challenges:
- Token-Counting aus 2.1 (estimateTokens)
- Context-Window-Check aus 2.3 (checkContextWindow)
- Kostenberechnung aus 2.2 (calculateCost)
- Cache-Tracking aus 2.4 (Session-Hit-Rate)

Die Schwierigkeit ist angemessen — herausfordernd, aber machbar mit dem Wissen aus den Challenges. Starter-Code und Hinweise sind hilfreich.

**Problem:** Hinweis 3 (Zeile 143) erwaehnt "Aktualisiere es im `onFinish`-Callback oder nach jedem `generateText`-Call" — der gleiche `onFinish`-Fehler wie in 03-usage-tracking.mdx. Die Alternative "oder nach jedem `generateText`-Call" ist korrekt, aber die Erwaehnung von `onFinish` propagiert den Fehler.

### A13: Briefing-Vollstaendigkeit
**OK** — Das Briefing (01-briefing.mdx) enthaelt alle geforderten Elemente:
- **Lernziele:** 4 klare Punkte (Tokens, Usage Tracking, Context Window, Prompt Caching).
- **Voraussetzungen:** Level 1 abgeschlossen, Grundverstaendnis API-Kosten.
- **Skip-Hinweis:** "Du weisst bereits, was Subword Tokenization ist [...] Spring direkt zur Boss Fight."
- **Quellen:** 4 Quellen (AI SDK Docs, Anthropic Docs).
- **Challenge-Uebersicht:** CardGrid mit allen 4 Challenges + Boss-Fight-Beschreibung.
- **Skill Tree:** Zeigt Levels 1-9, aktuelles Level hervorgehoben.

### A14: Level Complete
**WARN** — Die Level-Complete-Seite (07-level-complete.mdx) enthaelt:
- **Zusammenfassung:** 4 Bullet Points, je einer pro Challenge. Inhaltlich korrekt.
- **Skill Tree:** Zeigt Level 1+2 als freigeschaltet (gruen), Level 3 als naechstes (orange). Korrekt.
- **Naechstes Level:** Teaser auf Level 3 (Agents & MCP) mit kurzer Beschreibung. Gut.

**Fehlt:** Eine emotionale Belohnung / Anerkennung ("Glueckwunsch", "Level 2 geschafft!", Achievement-Grafik o.ae.). Die Seite ist rein informativ. Fuer ein gamifiziertes Lernformat waere ein kurzer emotionaler Moment motivierend, besonders nach einer Boss Fight. Dies ist konsistent mit Level 1 (dort fehlt es ebenfalls), aber es bleibt ein didaktischer Verbesserungspunkt fuer das gesamte Format.

## Zusammenfassung der Findings

### FAILs (P0)

1. **A8/A11: `onFinish` bei `generateText` ist kein dokumentierter AI SDK v6 Parameter** (03-usage-tracking.mdx, Zeile 138-166). Lernende kopieren Code, der nicht funktioniert oder ein falsches API-Bild vermittelt. **Fix:** Schicht 4 umschreiben — Session-Tracking nach dem `await` auf `result.usage` implementieren, nicht via Callback. `onFinish` kann als Hinweis auf `streamText` erwaehnt werden ("bei `streamText` gibt es einen `onFinish`-Callback, bei `generateText` greifst Du direkt auf `result.usage` zu").

2. **A8/A11: Token-Schaetzung im Prompt-Caching-Walkthrough ist falsch** (05-prompt-caching.mdx, Zeile 118). Kommentar behauptet ~200 Woerter = "weit ueber 1024 Tokens". Korrekt: ~260-350 Tokens. **Fix:** Entweder den System Prompt im Walkthrough auf >1024 Tokens verlaengern (analog zur Loesung im TRY-Abschnitt) oder den Kommentar korrigieren und erklaeren, dass dieser Prompt fuer die Demonstration zu kurz ist.

3. **A11: `experimental_providerMetadata` statt `providerMetadata`** (03-usage-tracking.mdx, Zeile 113). In AI SDK v6 wurde der `experimental_`-Prefix entfernt. **Fix:** Durch `providerMetadata` ersetzen.

### WARNs (P1/P2)

1. **A5: Walkthrough nutzt nicht-dokumentierte API** — Geht in die FAILs auf (siehe oben). Zusaetzlich: Der Uebergang von Schicht 3 (Extended Usage) zu Schicht 4 (Session Tracking) koennte fliessender sein. Schicht 3 endet mit einem Verweis auf Challenge 2.4, Schicht 4 springt zu einem anderen Thema.

2. **A12: Boss Fight Hinweis propagiert `onFinish`-Fehler** (06-boss-fight.mdx, Zeile 143). **Fix:** "im `onFinish`-Callback oder" entfernen, nur "nach jedem `generateText`-Call" stehen lassen.

3. **A14: Keine emotionale Belohnung in Level Complete** (07-level-complete.mdx). **Fix:** Ein kurzes "Level 2 abgeschlossen! Du verstehst jetzt die Mechanik hinter LLM-Kosten" o.ae. als Einstieg hinzufuegen. Optional: ASCII-Art-Badge oder Achievement-Box.

4. **A5: Prompt-Caching TRY-Abschnitt — Lernende koennen Cache-Hit nicht verifizieren** (05-prompt-caching.mdx, Zeile 206-213). Die TRY-Aufgabe sagt "Vergleiche die Usage", aber der Code loggt nur `promptTokens` und `completionTokens` — es fehlt eine Anleitung, wie man den Cache-Hit in den Usage-Daten erkennt. Der Walkthrough erwaehnt es ("Anthropic zeigt Cache-Details in erweiterten Usage-Feldern an"), aber zeigt nicht, wie man darauf zugreift. **Fix:** Im TRY-Abschnitt oder in der Loesung zeigen, wie man `providerMetadata` ausliest.

5. **A14: Level-Complete-Zusammenfassung koennte auf die Boss Fight verweisen** — Die Zusammenfassung erwaehnt nur die einzelnen Challenges, nicht das integrierte Projekt. Ein Satz wie "In der Boss Fight hast Du alle Bausteine zu einem Token-Budget-Rechner kombiniert" wuerde die Vollstaendigkeit erhoehen.
