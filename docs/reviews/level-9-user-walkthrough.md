# User Walkthrough: Level 9 — Advanced Patterns

> Datum: 2026-03-09 | Perspektive: Anfaenger der Level 1-8 abgeschlossen hat

## Methodik

Ich gehe jede Seite als Lernender durch, der Level 1-8 erfolgreich bearbeitet hat und jetzt das Finale angeht. Fragen:
- Kann ich der Seite folgen?
- Weiss ich was ich tun muss?
- Kann ich den Code ausfuehren?
- Verstehe ich warum das wichtig ist?

---

## 01-briefing.mdx

**Erster Eindruck:** Klar — ich weiss was mich erwartet. 4 Challenges, eine Boss Fight, Expert-Badge.

**Was funktioniert:**
- TL;DR fasst das Level in einem Satz zusammen ✓
- Skill Tree zeigt mir wo ich bin (Level 1-8 gruen, Level 9 orange) ✓
- 4 Lernziele sind konkret und verstaendlich ✓
- "Warum das wichtig ist" motiviert gut (Prototyp vs. Production) ✓
- Skip-Hinweis mit Boss-Fight-Link ✓
- CardGrid mit 4 Challenges ✓

**Probleme:**
- **WARN:** Kein Projektverzeichnis-Hinweis. Wo soll ich arbeiten? In Level 1-8 wurde das nach Fixes hinzugefuegt. Hier fehlt es.
- **WARN:** Voraussetzungen listen Level 1, 3, 5, 8 — gut dass empfohlene Levels (2, 6, 7) separat stehen. Aber Level 4 (Persistence) fehlt komplett — ist das Absicht? (Ja, Level 9 nutzt kein Persistence.)

---

## 02-guardrails.mdx (Challenge 9.1)

**THINK:** "Was passiert wenn ein User sagt 'Ignoriere alle Anweisungen'?" — starke Frage, motiviert das Thema sofort.

**OVERVIEW:** Mermaid-Diagramm zeigt die doppelte Absicherung (Input-Guard → LLM → Output-Guard). Klar.

**WHY:** Vorher/Nachher ueberzeugend. "Sicherheitsrisiko in Production" vs. "kontrollierte, sichere Anwendung".

**WALKTHROUGH:**
- Schicht 1 (Input Guards): 3 separate Check-Funktionen. Verstaendlich, gut kommentiert. ✓
- Schicht 2 (Output Guards): Laenge, Format, Toxizitaet. Die `checkToxicity`-Funktion warnt nur (return true) statt zu blocken — gut erklaert warum. ✓
- Schicht 3 (Integration): `safeGenerate` bringt alles zusammen. Drei Phasen klar getrennt. ✓
- Schicht 4 (Middleware): `Guardrail`-Typ + `runGuardrails`-Funktion. Composable Pattern. ✓

**TRY:**
- **FAIL:** Kein Dateiname. Wo speichere ich den Code? (Erwartung aus Level 1-8: `guardrails.ts`)
- **FAIL:** Kein Ausfuehrungsbefehl. (Erwartung: `npx tsx guardrails.ts`)
- TODOs sind klar, 4 Schritte, Checkliste vorhanden. ✓
- Loesung in `<details>` ist vollstaendig. ✓
- **FAIL:** Kein erwarteter Output-Block bei der Loesung. Was sollte im Terminal erscheinen?

**COMBINE:**
- Guardrails + Context Engineering (5.x) — doppelte Absicherung (Code + Prompt). Gute Idee. ✓
- Stretch Goal (LLM-basierter Input-Guardrail) — ambitioniert aber machbar. ✓

---

## 03-model-router.mdx (Challenge 9.2)

**THINK:** "Wuerdest Du fuer 'Wie spaet ist es?' dasselbe Modell nutzen wie fuer 500-Zeilen-Code-Analyse?" — sofort nachvollziehbar.

**WALKTHROUGH:**
- Schicht 1: Einfacher Switch. Drei Modelle, drei Anbieter (`google`, `anthropic`). Ich muss `@ai-sdk/google` installiert haben — steht nicht explizit. WARN.
- Schicht 2: Token-basiertes Routing. `estimateTokens` ist eine Heuristik — gut erklaert dass Laenge kein perfekter Proxy ist. ✓
- Schicht 3: LLM-basiertes Routing mit `Output.enum`. Clever — ein billiges Modell klassifiziert, das Ergebnis bestimmt das teure Modell. ✓
- Schicht 4: Kostenvergleichstabelle. **Exzellent.** Konkrete Preise pro Modell, Rechenbeispiel ($900 vs. $55). Das ueberzeugt sofort. ✓

**TRY:**
- **FAIL:** Kein Dateiname, kein Ausfuehrungsbefehl, kein erwarteter Output.
- TODOs und Checkliste klar. ✓
- Loesung vollstaendig mit Erklaerung. ✓

**Problem:** Ich brauche API-Keys fuer Google UND Anthropic (und in 9.3 auch OpenAI). Das ist ein Setup-Aufwand der im Briefing nicht erwaehnt wird. In Level 1 wurden API-Key-Links bereitgestellt.

---

## 04-comparing-outputs.mdx (Challenge 9.3)

**THINK:** "Wie findest Du heraus welches Modell die beste Antwort gibt?" — relevante Frage.

**WALKTHROUGH:**
- Schicht 1: `Promise.all` mit 3 Modellen. Klar erklaert (Gesamtdauer = langsamster Call). ✓
- Schicht 2: Einfache Metriken (Laenge, Geschwindigkeit, Tokens). Tabellenformat. ✓
- Schicht 3: LLM-as-a-Judge mit Zod Schema (`JudgmentSchema`). Pattern aus Level 6.3. ✓
  - **WARN:** Der Judge ist `claude-sonnet-4-5-20250514`, gleichzeitig eines der bewerteten Modelle. Der Text sagt "idealerweise nicht eines der bewerteten Modelle" — Widerspruch.
- Schicht 4: Evalite-Integration. Reproduzierbarer Vergleich. Guter Abschluss. ✓

**TRY:**
- **FAIL:** Kein Dateiname, kein Ausfuehrungsbefehl, kein erwarteter Output.
- **WARN:** Ich brauche 3 API-Keys (Anthropic, OpenAI, Google). Hoher Setup-Aufwand fuer eine TRY-Uebung.

---

## 05-research-workflow.mdx (Challenge 9.4)

**THINK:** "Wie baust Du ein End-to-End AI-System?" — grosse Frage, passend fuer die Capstone-Challenge.

**OVERVIEW:** Mermaid mit 3 Subgraphs (Research/Processing/Quality). Komplex aber uebersichtlich.

**WALKTHROUGH:**
- Schicht 1: Architektur-Tabelle. Zeigt mir welches Level wo zum Einsatz kommt. **Exzellent** als Orientierung. ✓
- Schicht 2: Research-Phase. Custom Loop mit search-Tool, Break Conditions, AbortController. Alles aus Level 8 bekannt. ✓
  - **WARN:** Das search-Tool gibt "simulierte" Ergebnisse zurueck. Klar kommentiert, aber fuer den Lernenden waere ein Hinweis hilfreich, wie man eine echte Search API einbinden wuerde.
- Schicht 3: Processing-Phase. XML-Prompts (Level 5), Structured Output (Level 1.5). ✓
- Schicht 4: Quality-Phase. Guardrails (9.1), vollstaendige Pipeline-Funktion. ✓

**TRY:**
- **FAIL:** Kein Dateiname, kein Ausfuehrungsbefehl, kein erwarteter Output.
- Die Mini-Pipeline ist eine gute Vereinfachung der vollen Pipeline. ✓

**COMBINE:** Das "Big Picture" — alle 9 Levels in einem Diagramm. Beeindruckend. Gibt mir das Gefuehl, dass alles zusammenpasst. ✓

---

## 06-boss-fight.mdx

**Szenario:** "Production-Ready AI-System" — das ultimative Projekt.

**Erwarteter Output-Block:** Zeigt mir genau was mein System tun soll. [Input Guard] → [Phase 1] → [Phase 2] → [Phase 3] → [Output Guard] → [Stats]. **Sehr hilfreich.** ✓

**Anforderungen:** 10 Stueck. Das ist viel — aber es ist das Finale. Jede Anforderung referenziert spezifische Challenges/Levels. ✓

**Starter-Code:** Gute Struktur mit TODOs fuer jeden Abschnitt. ✓

**Hinweise:** 4 gestufte Hinweise. Besonders Hinweis 3 ("Vergleich muss nicht Pipeline doppelt laufen lassen") reduziert die Komplexitaet. ✓

**Bewertungskriterien:** 10 Checkboxen. Klar und messbar. ✓

**Bedenken:**
- **WARN:** Anforderung 7 (Streaming) wurde in Level 9 nicht geuebt. Ich muesste auf Level 7 + 8.2 zurueckgreifen. Das ist machbar, aber ein Sprung.
- **WARN:** Keine Musterloesung. Das ist konsistent mit frueheren Boss Fights (bewusste Entscheidung), aber bei der umfassendsten Boss Fight im Kurs waere zumindest eine partielle Loesung hilfreich.
- **WARN:** 10 Anforderungen + 3 Provider (Google, Anthropic, OpenAI) = hoher Setup- und Implementierungsaufwand. Das ist ambitioniert, aber als Finale angemessen.

---

## 07-level-complete.mdx

**Erster Eindruck:** Das beste Level Complete im Kurs. **Endlich** eine emotionale Belohnung.

**Was funktioniert:**
- "Was Du gelernt hast" — 4 Punkte, alle korrekt. ✓
- Skill Tree: Alle 9 Levels gruen. Visuell befriedigend. ✓
- "Du bist kein Vibe Coder mehr" — **starker Abschluss**. Die Vibe Coder vs. AI Engineer Tabelle ist motivierend und fasst den gesamten Lernpfad zusammen. ✓
- "Was Du jetzt kannst" — 4 konkrete Projektideen (Research Assistant, Code Review Bot, Multi-Model Chat, Content Pipeline). Gibt mir sofort Lust weiterzumachen. ✓
- Offizielle Docs, Tools, Community — alle relevanten Links. ✓
- "Danke" — angemessener, persoenlicher Abschluss. ✓

**Probleme:**
- **WARN:** "37 Challenges gemeistert" — stimmt das? Wenn ich nachzaehle: L1(6)+L2(4)+L3(5)+L4(4)+L5(5)+L6(5)+L7(4)+L8(4)+L9(4) = 41. Das ist falsch.
- **WARN:** Kein Hinweis auf die Reference-Sektion (die es noch nicht gibt, aber als "Coming Soon" erwaehnenswert waere).

---

## Zusammenfassung

| Seite | FAIL | WARN |
|-------|------|------|
| 01-briefing | 0 | 2 |
| 02-guardrails | 3 | 0 |
| 03-model-router | 3 | 1 |
| 04-comparing-outputs | 3 | 2 |
| 05-research-workflow | 3 | 1 |
| 06-boss-fight | 0 | 3 |
| 07-level-complete | 0 | 2 |
| **Gesamt** | **12** | **11** |

Alle 12 FAILs sind bekannte Muster: fehlende Dateinamen (4×), fehlende Ausfuehrungsbefehle (4×), fehlender erwarteter Output (4×). Nach Fix wie in Level 1-8 werden alle zu PASS.

**Gesamteindruck:** Level 9 ist ein wuerdiges Finale. Die Inhalte sind stark, die Progression ueberzeugend, das Level Complete emotional befriedigend. Die bekannten operativen Luecken (Dateinamen, Befehle, Output) sind die gleichen wie in Level 1-8 vor dem Fix. Nach Anwendung der gleichen Fixes wird Level 9 mindestens auf dem Niveau der vorherigen Levels liegen.
