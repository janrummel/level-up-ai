# Quality Scorecard — Level Up AI

> Letztes Update: 2026-03-09 | Gesamt-Score: **92 / 100**
>
> Dieses Dokument wird nach jedem Review aktualisiert. Es ist die zentrale Steuerungsansicht fuer die Qualitaet aller Lerninhalte.

---

## Dashboard

```
Level 1  ██████████ 100%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 2  █████████░  90%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 3  █████████░  92%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 4  █████████░  91%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 5  █████████░  92%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 6  █████████░  93%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 7  █████████░  91%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 8  █████████░  92%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 9  █████████░  92%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Ref.     █████████░  90%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
                                                         Gesamt: 92%
```

---

## Scoring-Modell

Jedes Level wird auf **100 Punkte** bewertet. Der Gesamt-Score ist der Durchschnitt aller 10 Bereiche (9 Levels + Reference).

### Punkteverteilung pro Level

| Kategorie | Max. Punkte | Was wird gemessen |
|-----------|-------------|-------------------|
| **Fachliche Korrektheit** | 25 | Code kompiliert, APIs aktuell, Erklaerungen stimmen, keine Fehlinformationen |
| **Didaktische Qualitaet** | 25 | 6-Step-Pattern konsistent, Progression logisch, THINK/WHY/COMBINE wirksam |
| **Operative Tauglichkeit** | 25 | Setup-Guide, Ausfuehrungsbefehle, erwarteter Output, Troubleshooting |
| **Quellen & Nachweise** | 15 | Quellen-Abdeckung >= 80%, Rang 1-3, Links funktionieren |
| **Vollstaendigkeit** | 10 | DE+EN vorhanden, Briefing+Challenges+BossFight+Complete komplett |

### Bewertungsskala

| Score | Bewertung | Bedeutung |
|-------|-----------|-----------|
| 90-100 | **PASS** | Veroeffentlichungsreif, keine offenen FAILs |
| 70-89 | **PASS MIT VORBEHALTEN** | Funktional, aber WARNs offen — Fix empfohlen |
| 50-69 | **REVIEW NOETIG** | Strukturell OK, aber wesentliche Luecken |
| 0-49 | **FAIL** | Nicht veroeffentlichungsreif |

### PASS-Kriterien (Pflicht fuer Score >= 90)

- [ ] 0 FAIL-Bewertungen nach Fixes
- [ ] Quellen-Abdeckung >= 80% der Challenge-Seiten
- [ ] Alle Code-Beispiele kompilieren
- [ ] Alle TRY-Bloecke haben Ausfuehrungsbefehl + erwarteten Output
- [ ] 6-Step-Pattern in allen Challenges konsistent
- [ ] DE + EN strukturell identisch

---

## Level 1: AI SDK Basics — Score: 95/100 PASS

> Review: 2026-03-08 | Fixes: 2026-03-08 | Commit: ddf0730

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **23/25** | Code korrekt, APIs aktuell. -2: codex-mini im Diagramm war falsch (gefixt), Vereinfachung bei den 3 Bibliotheken |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, COMBINE-Vernetzung exzellent, Mermaid-Diagramme stark. -1: Ueberlappung system-Param zwischen 1.3 und 1.6 (adressiert) |
| Operative Tauglichkeit | **23/25** | Nach Fixes: Setup-Guide, npx tsx, .env, Troubleshooting vorhanden. -2: Erwarteter Output nur ungefaehr, kein exakter Vergleichswert moeglich (LLM-Output variiert) |
| Quellen & Nachweise | **15/15** | 8/9 Seiten mit Quellen (89%), alle Rang 1-2, Links plausibel. Briefing bewusst ohne (korrekt) |
| Vollstaendigkeit | **10/10** | 9 DE + 9 EN Dateien, Briefing+6 Challenges+BossFight+Complete komplett |
| **Gesamt** | **95/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 0 | 8 | 6+n/a | 0 FAIL, 3 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 5 | 10 | — | 0 FAIL, 4 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Erst ab Level 2 pruefbar |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 89% (>= 80%)
- [x] Alle Code-Beispiele kompilieren
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Drei-Bibliotheken-Vereinfachung koennte Hinweis vertragen (02-what-is-ai-sdk)
2. Modellnamen-Aktualitaetshinweis bei Google-Modellen (03-choosing-your-model)
3. Schema-Validierungsfehler nicht thematisiert (06-structured-output)
4. performance.now() Import-Frage bei Node.js (05-streaming-text)

---

## Level 2: LLM Fundamentals — Score: 90/100 PASS

> Review: 2026-03-08 | Fixes: 2026-03-08

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **22/25** | Nach Fixes korrekt: `providerMetadata` statt `experimental_`, `onFinish` durch `result.usage` ersetzt, Token-Schaetzung korrigiert. -3: Walkthrough-System-Prompt in 05 zeigt Caching-Mechanik mit einem zu kurzen Prompt (unter 1024 Tokens), koennte Lernende irritieren |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, THINK-Fragen stark, Mermaid-Diagramme klar, Progression logisch (Tokens → Usage → Context → Caching). -1: Level Complete koennte Boss-Fight-Ergebnis staerker referenzieren |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen + `npx tsx` bei allen Challenges, erwarteter Output bei Loesungen, Projektverzeichnis-Hinweis im Briefing. -3: Kein Troubleshooting-Abschnitt fuer Level-2-spezifische Fehler (Cache Miss ohne Meldung, TTL-Verfall) |
| Quellen & Nachweise | **12/15** | 6/7 Seiten mit Quellen (86%), alle Rang 1. -3: Level Complete ohne Quellen (konsistent mit Pattern, aber koennte auf Challenge-Quellen verweisen) |
| Vollstaendigkeit | **10/10** | 7 DE + 7 EN Dateien, Briefing+4 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **90/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 2 | 5 | 7 | 0 FAIL, 3 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 2 | 5 | 5 | 0 FAIL, 3 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Erste Pruefung: Progression L1→L2 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 86% (>= 80%)
- [x] Alle Code-Beispiele kompilieren (Build erfolgreich)
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-2-spezifische Fehler
2. COMBINE-Referenzen auf `selectModel()` ohne detaillierte Import-Anleitung
3. Walkthrough-System-Prompt in 05 ist unter 1024 Tokens (zeigt Mechanik, aber kein echtes Caching)

---

## Level 3: Agents & MCP — Score: 92/100 PASS

> Review: 2026-03-08 | Fixes: 2026-03-08

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **24/25** | Alle AI SDK v6 APIs korrekt (`tool()`, `inputSchema`, `stopWhen: stepCountIs()`, `createMCPClient`, `toolCallApproval`, `needsApproval`). Modellname korrekt. -1: `eval()` war im Lernmaterial (gefixt zu switch/case) |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, THINK-Fragen stark, COMBINE-Vernetzung exzellent (Level- und Challenge-uebergreifend). -1: Progression L2→L3 koennte expliziter verknuepft werden |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen, npx tsx, erwarteter Output, npm install fuer MCP-Pakete. -3: Kein Troubleshooting-Abschnitt (konsistentes P2 ueber alle Levels) |
| Quellen & Nachweise | **12/15** | 7/8 Seiten mit Quellen (88%), alle Rang 1-2. -3: Level Complete ohne Quellen (konsistent), Anthropic-Quelle war unspezifisch (gefixt) |
| Vollstaendigkeit | **10/10** | 8 DE + 8 EN Dateien, Briefing+5 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **92/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 0 | 5 | 9 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 6 | 12 | 78 | 0 FAIL, 4 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L2→L3 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 88% (>= 80%)
- [x] Alle Code-Beispiele kompilieren
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl + erwarteten Output
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-3-spezifische Fehler
2. Projektverzeichnis weiterhin nicht explizit im Briefing genannt

---

## Level 4: Persistence — Score: 91/100 PASS

> Review: 2026-03-08 | Fixes: 2026-03-08

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **23/25** | Alle AI SDK v6 APIs korrekt (`onFinish`, `generateText`, `streamText`, `crypto.randomUUID()`, Zod Schemas). -2: onFinish-Property-Tabelle war unvollstaendig (gefixt mit Qualifier + API-Ref-Link), Defekte Quellen-URL war systematisch in 5/7 Dateien (gefixt) |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, THINK-Fragen stark, COMBINE-Vernetzung exzellent (Challenge-uebergreifend + Level-2-Rueckgriff). -1: "Persistence in Normalized DB" nur als Ausblick integriert, keine eigene Challenge |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen, `npx tsx`, erwarteter Output bei Loesungen, Zod-Rueckverweis, Projektverzeichnis im Briefing. -3: Kein Troubleshooting-Abschnitt (konsistent mit Level 1-3) |
| Quellen & Nachweise | **12/15** | 6/7 Seiten mit Quellen (86%), alle Rang 1-2. -3: Level Complete ohne Quellen (konsistent mit Pattern), URL-Fix war noetig |
| Vollstaendigkeit | **10/10** | 7 DE + 7 EN Dateien, Briefing+4 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **91/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 1 | 4 | 9 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 4 | 17 | 63 | 0 FAIL, 4 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L3→L4 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 86% (>= 80%)
- [x] Alle Code-Beispiele kompilieren
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-4-spezifische Fehler
2. `as const` Assertion in 04-persistence nicht erklaert
3. `crypto.randomUUID()` Node.js v19-Anforderung nicht als Mindestversion
4. COMBINE-Uebungen ohne erwarteten Output (Design-Entscheidung)

---

## Level 5: Context Engineering — Score: 92/100 PASS

> Review: 2026-03-09 | Fixes: 2026-03-09

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **23/25** | Alle AI SDK v6 APIs korrekt (`generateText`, `streamText`, `anthropic()`), Modellname aktuell. -2: Alle Anthropic-Quellen-URLs waren defekt (301→404, docs.anthropic.com→platform.claude.com Migration, gefixt), XML Tag-Namen als "Anthropic Prompt Template" zugeschrieben (korrigiert zu "basierend auf Anthropic Best Practices") |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, hervorragende kumulative Progression (jede COMBINE-Uebung verbindet alle bisherigen Konzepte). THINK-Fragen stark, OVERVIEW-Diagramme klar. -1: Level Complete relativ knapp, keine Boss Fight Musterloesung |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen, `npx tsx`, erwarteter Output, Projektverzeichnis-Hinweis im Briefing. -3: Kein Troubleshooting-Abschnitt (konsistent mit Level 1-4) |
| Quellen & Nachweise | **13/15** | Nach URL-Fix: 7/8 Seiten mit Quellen (88%), alle Rang 1-2. -2: Level Complete ohne Quellen (konsistent), URL-Fix war noetig |
| Vollstaendigkeit | **10/10** | 8 DE + 8 EN Dateien, Briefing+5 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **92/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 2 | 2 | 10 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 5 | 26 | 65 | 0 FAIL, 4 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L4→L5 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 88% (>= 80%)
- [x] Alle Code-Beispiele kompilieren (Build erfolgreich)
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-5-spezifische Fehler
2. Level Complete knapp — kein Rueckblick auf Boss Fight
3. Boss Fight ohne Musterloesung (bewusste Entscheidung: Pruefung)
4. COMBINE-Uebungen ohne erwarteten Output (Design-Entscheidung)

---

## Level 6: Evals — Score: 93/100 PASS

> Review: 2026-03-09 | Fixes: 2026-03-09

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **24/25** | Alle Evalite/AI SDK APIs korrekt (`evalite()`, `createScorer`, `traceAISDKModel`, `generateObject` mit Zod). -1: Grade E Score-Tabelle war falsch (0.0 statt 1.0, Beschreibung irreführend — gefixt), Langfuse zeigte manuelle SDK-Variante statt OTel (klargestellt) |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, starke Progression (Evalite→Deterministic→LLM-Judge→Dataset→Production), COMBINE-Vernetzung exzellent. -1: Langfuse Challenge rein konzeptuell (begruendet, aber kein Coding) |
| Operative Tauglichkeit | **23/25** | Nach Fixes: Dateinamen, `pnpm eval:dev`, erwarteter Output, vollstaendiger Install-Befehl, OpenAI Key Setup, pnpm-Erklaerung. -2: Kein Troubleshooting-Abschnitt (konsistent mit L1-5) |
| Quellen & Nachweise | **12/15** | 7/8 Seiten mit Quellen (88%), alle Rang 1-2 (GitHub Repos, npmjs, Langfuse Docs). -3: Level Complete ohne Quellen (konsistent), ai-hero-dev Links nicht live verifiziert |
| Vollstaendigkeit | **10/10** | 8 DE + 8 EN Dateien, Briefing+5 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **93/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 0 | 4 | 10 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 4 | 19 | 73 | 0 FAIL, 3 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L5→L6 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 88% (>= 80%)
- [x] Alle Code-Beispiele kompilieren (Build erfolgreich)
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-6-spezifische Fehler
2. ai-hero-dev Exercise-Links nicht live verifiziert
3. Langfuse-Challenge ohne Coding (bewusste Entscheidung)

---

## Level 7: Streaming — Score: 91/100 PASS

> Review: 2026-03-09 | Fixes: 2026-03-09

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **23/25** | APIs korrekt (createDataStream, writeData, mergeIntoDataStream, smoothStream, onError, NoSuchToolError). -2: Retry-Pattern hatte Bug (gefixt), experimental_transform Prefix moeglicherweise veraltet (nicht verifizierbar) |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, THINK-Fragen stark, COMBINE-Vernetzung exzellent. -1: CLI vs. Web-Framework Vermischung in Walkthroughs (adressiert mit Kontext-Hinweisen) |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen, npx tsx, erwarteter Output, Web-App-Kontext-Hinweise. -3: Kein Troubleshooting-Abschnitt (konsistentes P2) |
| Quellen & Nachweise | **12/15** | 6/7 Seiten mit Quellen (86%), alle Rang 1-2. -3: ai-hero-dev Exercise-Mappings fuer 7.2/7.3 korrigiert, Level Complete ohne Quellen |
| Vollstaendigkeit | **10/10** | 7 DE + 7 EN Dateien, Briefing+4 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **91/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 0 | 4 | 10 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 5 | 14 | 65 | 0 FAIL, 3 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L6→L7 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 86% (>= 80%)
- [x] Alle Code-Beispiele kompilieren (Build erfolgreich)
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-7-spezifische Fehler
2. experimental_transform Prefix nicht erklaert (stabil oder nicht?)
3. Keine emotionale Belohnung im Boss-Fight-Rueckblick (Level Complete hat jetzt Achievement-Text)

---

## Level 8: Workflows — Score: 92/100 PASS

> Review: 2026-03-09 | Fixes: 2026-03-09

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **24/25** | Alle AI SDK v6 APIs korrekt (generateText, streamText, createDataStream, tool mit inputSchema, AbortController). Kein Code-Bug. -1: `ToolLoopAgent` Referenz war unspezifisch (gefixt zu `maxSteps`/`stopWhen`) |
| Didaktische Qualitaet | **24/25** | 6-Step 100% konsistent, starke Progression (Workflow→Streaming→Loop→Guards). COMBINE-Vernetzung exzellent. Boss Fight Output-Block erstmalig im Kurs. -1: Custom Loop TRY ohne Safeguard (bewusst, aber Sicherheitshinweis war noetig — gefixt) |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen, npx tsx, erwarteter Output, Projektverzeichnis-Hinweis, Ctrl+C-Tipp, Stream-Consumer-Verweis. -3: Kein Troubleshooting-Abschnitt (konsistentes P2) |
| Quellen & Nachweise | **12/15** | 6/7 Seiten mit Quellen (86%), alle Rang 1-2. MDN-Quelle fuer AbortController. -3: ai-hero-dev Links nicht live verifiziert, Level Complete ohne Quellen |
| Vollstaendigkeit | **10/10** | 7 DE + 7 EN Dateien, Briefing+4 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **92/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 0 | 3 | 11 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 0 | 13 | 50 | 0 FAIL, 3 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L7→L8 konsistent |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 86% (>= 80%)
- [x] Alle Code-Beispiele kompilieren
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-8-spezifische Fehler
2. `experimental_transform` Referenz in 8.2 COMBINE (gleiche Frage wie L7)
3. ai-hero-dev Exercise-Links nicht live verifiziert

---

## Level 9: Advanced Patterns — Score: 92/100 PASS

> Review: 2026-03-09 | Fixes: 2026-03-09

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **23/25** | Alle AI SDK v6 APIs korrekt (generateText, tool, Output.enum, Output.object, Promise.all, AbortController). -2: `parameters` statt `inputSchema` in tool() (gefixt), Messages-Array falsch getypt (gefixt) |
| Didaktische Qualitaet | **25/25** | 6-Step 100% konsistent, staerkste Progression im Kurs (Guardrails→Router→Compare→Pipeline). COMBINE 9.4 zeigt das Big Picture aller 9 Levels. Level Complete ist das beste im Kurs ("Vom Vibe Coder zum AI Engineer"). Boss Fight mit 10 Anforderungen als wuerdiges Finale |
| Operative Tauglichkeit | **22/25** | Nach Fixes: Dateinamen, npx tsx, erwarteter Output, Projektverzeichnis-Hinweis, Production-Guardrail-Hinweis, Streaming-Rueckverweis. -3: Kein Troubleshooting-Abschnitt (konsistentes P2) |
| Quellen & Nachweise | **12/15** | 6/7 Seiten mit Quellen (86%), alle Rang 1-2. OWASP LLM Top 10 als externe Security-Quelle. -3: ai-hero-dev Links nicht live verifiziert, Level Complete ohne dedizierte Quellen-Sektion (hat stattdessen Ressourcen-Links) |
| Vollstaendigkeit | **10/10** | 7 DE + 7 EN Dateien, Briefing+4 Challenges+BossFight+Complete komplett, strukturell identisch |
| **Gesamt** | **92/100** | **PASS** |

### Checklisten-Ergebnis

| Checkliste | FAIL | WARN | OK | Nach Fix |
|------------|------|------|-----|----------|
| A (Experte, 14 Punkte) | 0 | 3 | 11 | 0 FAIL, 2 WARN offen (P2) |
| B (Anfaenger, 12 Punkte) | 12 | 11 | 40 | 0 FAIL, 3 WARN offen (P2) |
| C (Level-uebergreifend) | — | — | — | Progression L8→L9 konsistent, Kurs-Abschluss |

### PASS-Kriterien

- [x] 0 FAIL-Bewertungen nach Fixes
- [x] Quellen-Abdeckung 86% (>= 80%)
- [x] Alle Code-Beispiele kompilieren
- [x] Alle TRY-Bloecke haben Ausfuehrungsbefehl
- [x] 6-Step-Pattern konsistent
- [x] DE + EN strukturell identisch

### Offene P2-WARNs (nicht blockierend)

1. Kein Troubleshooting-Abschnitt fuer Level-9-spezifische Fehler
2. `experimental_output` Prefix moeglicherweise veraltet (gleiche Frage wie L7/L8 mit `experimental_transform`)
3. ai-hero-dev Exercise-Links nicht live verifiziert

---

## Reference — Score: 90/100 PASS

> Review: 2026-03-09 | 9 Seiten erstellt (DE+EN)

### Punktevergabe

| Kategorie | Punkte | Begruendung |
|-----------|--------|-------------|
| Fachliche Korrektheit | **23/25** | APIs basieren auf offiziellen AI SDK Docs (ui-message, model-message, stream-text, tools, streaming-data). TypeScript-Typen geprueft. -2: Einige experimentelle APIs (createUIMessageStreamResponse) koennen sich aendern |
| Didaktische Qualitaet | **22/25** | Referenz-Format (nicht Challenge): kurze Erklaerung, Code-Beispiel, API-Tabelle, Quellen. Konsistent ueber alle 9 Seiten. -3: Kein Challenge-Format mit TRY/COMBINE (bewusste Entscheidung: Referenz, nicht Tutorial) |
| Operative Tauglichkeit | **22/25** | Code-Beispiele lauffaehig, klare API-Tabellen, "Siehe auch" Verlinkungen zu Challenges. -3: Keine Ausfuehrungsbefehle (Referenz, nicht Uebung) |
| Quellen & Nachweise | **13/15** | 9/9 Seiten mit Quellen (100%), alle Rang 1 (ai-sdk.dev). -2: Einige Quellen-URLs nicht live verifiziert |
| Vollstaendigkeit | **10/10** | 9 DE + 9 EN Dateien, alle 9 geplanten Themen abgedeckt, strukturell identisch |
| **Gesamt** | **90/100** | **PASS** |

### Seiten-Status

| Seite | Status |
|-------|--------|
| R1: UI Messages vs Model Messages | Erstellt (DE+EN) |
| R2: Defining Tools | Erstellt (DE+EN) |
| R3: Consume Stream | Erstellt (DE+EN) |
| R4: Custom Data Parts Streaming | Erstellt (DE+EN) |
| R5: Custom Data Parts Stream to Frontend | Erstellt (DE+EN) |
| R6: Custom Data Parts ID Reconciliation | Erstellt (DE+EN) |
| R7: Message Metadata | Erstellt (DE+EN) |
| R8: Streaming Text Parts by Hand | Erstellt (DE+EN) |
| R9: Start and Finish Parts | Erstellt (DE+EN) |

---

## Aenderungshistorie

| Datum | Aenderung | Score-Aenderung |
|-------|-----------|-----------------|
| 2026-03-08 | Level 1 Review + Fixes (DE+EN), Quality Framework erstellt | 0% → 11% |
| 2026-03-08 | Level 2 Review + Fixes (DE+EN): 3 P0 (API-Fehler), 1 P1 (fehlende Befehle), 6 P2 | 11% → 19% |
| 2026-03-08 | Level 3 Review + Fixes (DE+EN): 2 P0 (fehlende npm install, falsche Quelle), 3 P1 (Dateinamen, Befehle, Output), 4 P2 | 19% → 28% |
| 2026-03-08 | Level 4 Review + Fixes (DE+EN): 1 P0 (defekte Quellen-URL in 5/7 Dateien), 4 P1 (onFinish-Tabelle, Dateinamen, Befehle, Output), 3 P2 | 28% → 37% |
| 2026-03-09 | Level 5 Review + Fixes (DE+EN): 1 P0 (defekte Anthropic-URLs in 8/8 Dateien, docs.anthropic.com→platform.claude.com), 4 P1 (Dateinamen, Befehle, Output, Zuschreibung), 3 P2 | 37% → 46% |
| 2026-03-09 | Level 6 Review + Fixes (DE+EN): 4 P0 (OPENAI_API_KEY fehlt, pnpm nicht erklaert, Pakete fehlen, Grade E Tabelle falsch), 4 P1 (Dateinamen, Levenshtein-Erklaerung, Projekt-Setup, Langfuse OTel), 4 P2 | 46% → 56% |
| 2026-03-09 | Level 7 Review + Fixes (DE+EN): 1 P0 (Retry-Pattern Bug), 4 P1 (Dateinamen, Ausfuehrungsbefehle, erwarteter Output, CLI-vs-Web-Abgrenzung), 3 P2 | 56% → 65% |
| 2026-03-09 | Level 8 Review + Fixes (DE+EN): 0 P0, 4 P1 (Dateinamen, erwarteter Output, ToolLoopAgent-Referenz, Endlosschleifen-Warnung), 4 P2 | 65% → 74% |
| 2026-03-09 | Level 9 Review + Fixes (DE+EN): 0 P0, 5 P1 (Dateinamen, erwarteter Output, parameters→inputSchema, Messages-Typ, 37→41 Challenges), 5 P2 | 74% → 83% |
| 2026-03-09 | Reference-Sektion: 9 Seiten (DE+EN) erstellt, README ersetzt | 83% → 92% |
