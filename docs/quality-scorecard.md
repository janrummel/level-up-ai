# Quality Scorecard — Level Up AI

> Letztes Update: 2026-03-08 | Gesamt-Score: **11 / 100**
>
> Dieses Dokument wird nach jedem Review aktualisiert. Es ist die zentrale Steuerungsansicht fuer die Qualitaet aller Lerninhalte.

---

## Dashboard

```
Level 1  ██████████ 100%  PASS        ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 2  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 3  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 4  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 5  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 6  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 7  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 8  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Level 9  ░░░░░░░░░░   0%  OFFEN       ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░
Ref.     ░░░░░░░░░░   0%  OFFEN       (9 Seiten geplant, 0 erstellt)
                                                         Gesamt: 11%
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

## Level 2: LLM Fundamentals — Score: –/100 OFFEN

> Review: ausstehend

| Kategorie | Punkte | Status |
|-----------|--------|--------|
| Fachliche Korrektheit | –/25 | Nicht geprueft |
| Didaktische Qualitaet | –/25 | Nicht geprueft |
| Operative Tauglichkeit | –/25 | Nicht geprueft |
| Quellen & Nachweise | –/15 | Nicht geprueft |
| Vollstaendigkeit | –/10 | Nicht geprueft |

---

## Level 3: Agents & MCP — Score: –/100 OFFEN

> Review: ausstehend

---

## Level 4: Persistence — Score: –/100 OFFEN

> Review: ausstehend

---

## Level 5: Context Engineering — Score: –/100 OFFEN

> Review: ausstehend

---

## Level 6: Evals — Score: –/100 OFFEN

> Review: ausstehend

---

## Level 7: Streaming — Score: –/100 OFFEN

> Review: ausstehend

---

## Level 8: Workflows — Score: –/100 OFFEN

> Review: ausstehend

---

## Level 9: Advanced Patterns — Score: –/100 OFFEN

> Review: ausstehend

---

## Reference — Score: –/100 OFFEN

> 9 Seiten geplant, 0 erstellt

| Seite | Status |
|-------|--------|
| R1: UI Messages vs Model Messages | Nicht erstellt |
| R2: Defining Tools | Nicht erstellt |
| R3: Consume Stream | Nicht erstellt |
| R4: Custom Data Parts Streaming | Nicht erstellt |
| R5: Custom Data Parts Stream to Frontend | Nicht erstellt |
| R6: Custom Data Parts ID Reconciliation | Nicht erstellt |
| R7: Message Metadata | Nicht erstellt |
| R8: Streaming Text Parts by Hand | Nicht erstellt |
| R9: Start and Finish Parts | Nicht erstellt |

---

## Aenderungshistorie

| Datum | Aenderung | Score-Aenderung |
|-------|-----------|-----------------|
| 2026-03-08 | Level 1 Review + Fixes (DE+EN), Quality Framework erstellt | 0% → 11% |
