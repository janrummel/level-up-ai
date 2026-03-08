# Quality Framework — Level Up AI

> Zentrale Referenz fuer alle Qualitaetsmassnahmen. Jeder Reviewer, jeder Autor, jeder Agent arbeitet nach diesem Dokument.

## 1. Qualitaetsanspruch

**Senior-Level:** Jeder Inhalt muss so korrekt und durchdacht sein, als kaeme er von einem erfahrenen AI Engineer. Kein Inhalt ohne Quelle, kein Code ohne Test, keine Behauptung ohne Beleg.

**Drei Qualitaetsdimensionen:**

| Dimension | Frage | Verantwortlich |
|-----------|-------|----------------|
| **Fachlich** | Stimmt das inhaltlich? | Experten-Review (Checkliste A) |
| **Didaktisch** | Lernt man das effektiv? | Experten-Review (Checkliste A) |
| **Operativ** | Kann man das von Null durcharbeiten? | User-Walkthrough (Checkliste B) |

---

## 2. Didaktische Methodik

### 2.1 Gewaaehltes Modell: 6-Step Challenge Structure

Jede Challenge folgt einem festen Pattern, das auf bewaehrten EdTech-Prinzipien basiert:

| Schritt | Zweck | Methodik-Quelle |
|---------|-------|-----------------|
| **THINK** | Vorwissen aktivieren | Brilliant.org "Pretest before teaching" — Lerner denken nach, bevor sie erklaert bekommen |
| **OVERVIEW** | Einordnung im Gesamtbild | Visual-First Learning — Mermaid-Diagramm mit "Du bist HIER" Markierung |
| **WHY** | Motivation schaffen | Problem-Based Learning — Vorher/Nachher zeigt den konkreten Nutzen |
| **WALKTHROUGH** | Schicht fuer Schicht erklaeren | Josh Comeau "Poke & Prod" — Layer-by-Layer mit annotierten Code-Snippets |
| **TRY** | Selbst anwenden | Guided Practice → Independent Practice (Gradual Release of Responsibility) |
| **COMBINE** | Vernetzen mit Vorwissen | Progressive Independence / Tutorial Fade — Rueckgriff auf vorherige Challenges |

### 2.2 Level-Struktur

| Seitentyp | Zweck | Zeitschaetzung |
|-----------|-------|----------------|
| Briefing | Ueberblick, Lernziele, Setup | 5-10 Min |
| Challenge (×4-6) | Konzept lernen + anwenden | 15-25 Min |
| Boss Fight | Alle Konzepte kombinieren | 30-60 Min |
| Level Complete | Zusammenfassung, Skill Tree Update | 3-5 Min |

### 2.3 Inspirationsquellen (dokumentiert)

| Quelle | Uebernommenes Prinzip |
|--------|----------------------|
| [Brilliant.org](https://brilliant.org) | Pretest, Simplest Version First, Gamification |
| [Josh Comeau](https://joshwcomeau.com) | Interactive Widgets, Progressive Independence |
| [Fireship](https://fireship.io) | Hohe Informationsdichte, TL;DR Format |
| [Kent C. Dodds / EpicReact](https://epicreact.dev) | Workshop-Style, Open Source Exercises |
| [Total TypeScript](https://totaltypescript.com) | Dark Theme, Narrative Gamification, Learning Path |

---

## 3. Quellen-Standard

### 3.1 Quellen-Hierarchie

| Rang | Quelle | Verbindlichkeit | Beispiel |
|------|--------|-----------------|----------|
| 1 | Offizielle Docs | **Pflicht** | ai-sdk.dev, docs.anthropic.com, modelcontextprotocol.io |
| 2 | Lauffaehiger, getesteter Code | **Pflicht** | Eigene Code-Beispiele, lokal ausgefuehrt |
| 3 | Open-Source Referenz (geprueft) | **Pflicht** | ai-hero-dev Exercises, evalite Repo |
| 4 | Offizielle Blogposts, Maintainer-Talks | Ergaenzend, mit Angabe | Vercel Blog, Anthropic Blog |
| 5 | Community (Blogs, Tutorials) | Nur mit Gegencheck gegen Rang 1-3 | Dev.to, Medium, YouTube |

**Regel:** Kein Inhalt ohne mindestens eine Quelle aus Rang 1-3.

### 3.2 Zitierformat

Jede Challenge-Seite endet mit einer `## Quellen`-Sektion:

```markdown
## Quellen

- [Vercel AI SDK: Generating Text](https://ai-sdk.dev/docs/ai-sdk-core/generating-text)
- [ai-hero-dev Exercise 01.05](https://github.com/ai-hero-dev/ai-sdk-v6-crash-course/tree/main/exercises/01-ai-sdk-basics/01.05-generate-text)
```

**Regeln:**
- Mindestens 2 Quellen pro Challenge-Seite
- Links muessen erreichbar sein (keine toten Links)
- Briefings und Level-Complete-Seiten koennen Quellen weglassen (Verweis auf Challenge-Quellen)
- Bei Unsicherheit kennzeichnen: "Stand: Maerz 2026, pruefe aktuelle Docs"

### 3.3 Verbote

- Konzepte "aus dem Kopf" erklaeren ohne Gegencheck gegen Docs
- API-Signaturen oder Parameter raten statt nachschlagen
- Analogien erfinden, die fachlich nicht stimmen
- Uebungen schreiben, deren Loesung nicht getestet ist
- Veraltete API-Versionen verwenden ohne Kennzeichnung

---

## 4. Review-Prozess

### 4.1 Zwei-Perspektiven-Review

Jedes Level wird aus zwei Perspektiven reviewt, jeweils mit strukturierter Checkliste:

**Perspektive A: Experten-Review** (Tutor/Paedagoge)
Prueft: Didaktik, Progression, Erklaerqualitaet, fachliche Korrektheit.

**Perspektive B: User-Walkthrough** (technik-affiner Anfaenger)
Prueft: Kann ein TypeScript-Dev mit ChatGPT-Erfahrung das von Null durcharbeiten?

### 4.2 Checkliste A — Experten-Review (14 Punkte)

| # | Kategorie | Prueffrage |
|---|-----------|-----------|
| A1 | Didaktische Progression | Baut jede Challenge logisch auf der vorherigen auf? Konzepte eingefuehrt bevor sie genutzt werden? |
| A2 | THINK-Qualitaet | Aktiviert die Frage Vorwissen? Offen genug, aber spezifisch? |
| A3 | OVERVIEW-Klarheit | Mermaid-Diagramm zeigt klar die Position im Gesamtbild? Lesbar und korrekt? |
| A4 | WHY-Motivierung | Vorher/Nachher ueberzeugend dargestellt? |
| A5 | WALKTHROUGH-Tiefe | Schichten logisch aufgebaut? Keine fehlenden Zwischenschritte? Code kommentiert? |
| A6 | TRY-Machbarkeit | Aufgabe in 15-25 Min loesbar? TODOs klar? Loesung korrekt und vollstaendig? |
| A7 | COMBINE-Vernetzung | Rueckgriff auf vorherige Challenges? Nicht nur isolierte Uebung? |
| A8 | Code-Korrektheit | Kompiliert? Imports, API-Signaturen, Typen stimmen? Modellnamen aktuell? |
| A9 | Quellen-Qualitaet | Rang 1-3? Links vorhanden und plausibel? Mindestens 2 pro Seite? |
| A10 | Text-Grafik-Code-Balance | Genug visuelle Elemente? Text nicht zu lang ohne Auflockerung? |
| A11 | Fachliche Korrektheit | Erklaerungen stimmen? Keine veralteten APIs, falsche Parameter, irrefuehrende Vereinfachungen? |
| A12 | Boss Fight Integration | ALLE Challenges des Levels kombiniert? Schwierigkeit angemessen? |
| A13 | Briefing-Vollstaendigkeit | Lernziele, Voraussetzungen, Skip-Hinweis, Quellen? |
| A14 | Level Complete | Zusammenfassung korrekt? Skill Tree stimmt? Emotionale Belohnung? |

### 4.3 Checkliste B — User-Walkthrough (12 Punkte)

| # | Kategorie | Prueffrage |
|---|-----------|-----------|
| B1 | Setup-Vollstaendigkeit | Weiss der User exakt, was er installieren muss? |
| B2 | Erster Befehl | Konkreter erster Befehl vorhanden? (mkdir, npm init, npm install) |
| B3 | Fehlende Mini-Steps | Fehlen Schritte? (Datei erstellen, Ausfuehrungsbefehl, etc.) |
| B4 | Ausfuehrungsbefehle | Bei JEDEM Code-Beispiel steht, wie man es ausfuehrt? (`npx tsx`) |
| B5 | Environment Setup | API-Key-Setup klar? .env vs. export? Plattformuebergreifend? |
| B6 | Erwarteter Output | Bei jedem ausfuehrbaren Beispiel: was sieht der User im Terminal? |
| B7 | Fehler-Szenarien | Troubleshooting bei typischen Fehlern? |
| B8 | Projekt-Struktur | Klar ob ein Projekt pro Level oder pro Challenge? |
| B9 | Package.json/tsconfig | Noetige Konfiguration dokumentiert? |
| B10 | Copy-Paste-Tauglichkeit | Code-Bloecke direkt kopierbar? Alle Imports vorhanden? |
| B11 | Reihenfolge | Schritte eindeutig? Keine impliziten Abhaengigkeiten? |
| B12 | Begriffe | Fachbegriffe beim ersten Auftreten erklaert? |

### 4.4 Checkliste C — Level-uebergreifend (5 Punkte)

| # | Kategorie | Prueffrage |
|---|-----------|-----------|
| C1 | Progression | Baut Level N korrekt auf Level N-1 auf? Konzepte referenziert? |
| C2 | Redundanz | Keine unnoetige Wiederholung zwischen Levels? |
| C3 | Schwierigkeitskurve | L1-2 Blau, L3-5 Gruen, L6-7 Orange, L8-9 Rot — stimmt das? |
| C4 | Boss Fight Schwierigkeit | Deutlich schwerer als einzelne Challenges? |
| C5 | Level Complete Konsistenz | Zusammenfassung passt zum tatsaechlichen Inhalt? |

---

## 5. Bewertungssystem

### 5.1 Bewertungsstufen

| Stufe | Bedeutung | Aktion |
|-------|-----------|--------|
| **OK** | Pruefpunkt erfuellt | Keine Aktion noetig |
| **WARN** | Verbesserbar, aber funktional | Fix empfohlen, nicht blockierend |
| **FAIL** | Fachlich falsch, Anfaenger blockiert, essentieller Schritt fehlt | Muss vor Veroeffentlichung gefixt werden |

### 5.2 Prioritaeten fuer Fixes

| Prioritaet | Kriterium | Beispiele |
|-----------|-----------|-----------|
| **P0** | Fachlich falsch oder Code kompiliert nicht | Falscher API-Parameter, fehlender Import, ungueltige Modellnamen |
| **P1** | Anfaenger bleibt stecken | Fehlender Ausfuehrungsbefehl, kein Setup-Guide, kein erwarteter Output |
| **P2** | Verbesserbar aber funktional | Cross-Referenzen, emotionale Belohnung, optionale Erklarungen |

---

## 6. Quality Scorecard (pro Level)

Nach dem Review wird pro Level eine Scorecard erstellt:

```markdown
# Quality Scorecard: Level X

| Metrik | Wert |
|--------|------|
| **Review-Datum** | YYYY-MM-DD |
| **Experten-Review** | X FAIL / X WARN / X OK |
| **User-Walkthrough** | X FAIL / X WARN / X OK |
| **Quellen-Abdeckung** | X/Y Seiten mit Quellen (Z%) |
| **Code-Kompilierung** | Alle Beispiele kompilieren: Ja/Nein |
| **Ausfuehrungsbefehle** | Alle TRY-Bloecke mit npx tsx: Ja/Nein |
| **Erwarteter Output** | Alle Loesungen mit Output: Ja/Nein |
| **6-Step-Konsistenz** | Alle Challenges folgen Pattern: Ja/Nein |
| **Fixes umgesetzt** | P0: X/X, P1: X/X, P2: X/X |
| **Gesamtbewertung** | PASS / PASS MIT VORBEHALTEN / FAIL |

### PASS-Kriterien
- 0 FAIL nach Fixes
- Quellen-Abdeckung >= 80%
- Alle Code-Beispiele kompilieren
- Alle TRY-Bloecke haben Ausfuehrungsbefehl
```

### Aktueller Stand

| Level | Expert Review | User Walkthrough | Fixes | Status |
|-------|--------------|-----------------|-------|--------|
| Level 1 | 0 FAIL, 8 WARN | 0 FAIL (nach Fix), 10 WARN | P0-P2 done | **PASS** |
| Level 2 | Ausstehend | Ausstehend | — | Offen |
| Level 3 | Ausstehend | Ausstehend | — | Offen |
| Level 4 | Ausstehend | Ausstehend | — | Offen |
| Level 5 | Ausstehend | Ausstehend | — | Offen |
| Level 6 | Ausstehend | Ausstehend | — | Offen |
| Level 7 | Ausstehend | Ausstehend | — | Offen |
| Level 8 | Ausstehend | Ausstehend | — | Offen |
| Level 9 | Ausstehend | Ausstehend | — | Offen |

---

## 7. Content-Erstellungsprozess

### 7.1 Pro Challenge (7 Schritte)

1. **Offizielle Docs lesen** — Primaerquelle fuer das Thema identifizieren und durcharbeiten
2. **ai-hero-dev Exercise lesen** — Referenz-Implementierung verstehen, Aufgabenstellung pruefen
3. **Theorie schreiben** — Nur was durch Quellen aus Rang 1-3 gedeckt ist
4. **Code schreiben + lokal ausfuehren** — Output pruefen, Screenshot/Beispiel dokumentieren
5. **Challenge formulieren + Loesung testen** — Muss kompilieren und korrekt laufen
6. **Quellen angeben** — Mindestens 2, Links pruefen
7. **Signal-Check** — Ist das faktisch korrekt? Fehlt Kontext? Wuerde ein Senior das so erklaeren?

### 7.2 Pro Level (nach allen Challenges)

1. Briefing schreiben (Lernziele, Voraussetzungen, Setup, Challenge-Links)
2. Boss Fight entwerfen (alle Challenges kombinieren, Starter-Code, Bewertungskriterien)
3. Level Complete (Zusammenfassung, Skill Tree, Teaser fuer naechstes Level)
4. EN-Uebersetzung (strukturell identisch, nicht woertlich)
5. Zwei-Perspektiven-Review durchfuehren
6. Fixes umsetzen (DE + EN)
7. Quality Scorecard erstellen und ablegen

---

## 8. Automatisierbare Checks

Diese Pruefungen koennen als Script oder CI-Check implementiert werden:

| Check | Methode | Status |
|-------|---------|--------|
| **Quellen-Sektion vorhanden** | Grep nach `## Quellen` in allen Challenge-MDX | Umsetzbar |
| **6-Step-Pattern vollstaendig** | Grep nach THINK, OVERVIEW, WHY, WALKTHROUGH, TRY, COMBINE | Umsetzbar |
| **Ausfuehrungsbefehl vorhanden** | Grep nach `npx tsx` in TRY/Loesung-Abschnitten | Umsetzbar |
| **Loesung vorhanden** | Grep nach `<details>` in Challenge-Dateien | Umsetzbar |
| **Build erfolgreich** | `npm run build` ohne Fehler | Bereits im Workflow |
| **DE/EN Paritaet** | Dateianzahl DE == Dateianzahl EN | Umsetzbar |
| **Tote Links** | Link-Checker auf Build-Output | Umsetzbar |

---

## 9. Laufende Qualitaetspflege

- **Bei neuen Erkenntnissen:** Sofort als Qualitaetspunkt in diesem Dokument ergaenzen
- **Vor Veroeffentlichung:** Jeden Inhalt gegen aktuelle Docs pruefen (APIs aendern sich)
- **Bei API-Updates:** Modellnamen, Signaturen und Imports in allen betroffenen Dateien aktualisieren
- **Ehrlich kennzeichnen** wo Unsicherheit besteht: "Stand: Maerz 2026, pruefe aktuelle Docs"

---

## Referenzen

| Dokument | Pfad |
|----------|------|
| Projekt-State | `~/.claude/orchestrator/projects/ai-engineering-lernpfad.md` |
| Didaktik-Konzept | `docs/plans/2026-03-08-didaktik-konzept-design.md` |
| Quality Pass Plan | `docs/plans/2026-03-08-quality-pass-plan.md` |
| Review-Checklisten (Level 1) | `docs/reviews/level-1-*.md` |
| Styling Design Doc | `docs/plans/2026-03-08-styling-refinement-design.md` |
| Templates | `docs/templates/` |
