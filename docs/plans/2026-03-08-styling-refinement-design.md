# Styling Refinement — Design Doc

> Status: Approved | Erstellt: 2026-03-08

## Ziel

Von "Docs-Site mit Farbe" zu "Lernplattform mit Identitaet". Inspiration: Total TypeScript (Premium Dark Theme, narratives Gamification) und Brilliant.org (Farbgradienten, Completion-States, Journey-Metapher).

## Aenderungen

### 1. Identitaet

- Custom Wortmarke "Level Up AI" als SVG (ersetzt Text-Titel)
- Passendes Favicon (Pfeil-nach-oben oder Level-Up Icon)
- Beides in `public/` und `src/assets/`

### 2. Farbwelt

- Dark Mode als Default
- Gradient-Akzente: Orange → Gold (inspiriert von TotalTS)
- Sidebar-Hintergrund subtil dunkler als Content
- Code-Bloecke mit leicht erhoehtem Kontrast

### 3. Sidebar

- Sidebar-Badges pro Level mit Schwierigkeits-Farbe:
  - Level 1-2: Blau (Grundlagen)
  - Level 3-5: Gruen (Aufbau)
  - Level 6-7: Orange (Fortgeschritten)
  - Level 9: Rot (Experte)
- Collapsed per Default (nur aktuelles Level offen)

### 4. Briefing-Seiten

- Starlight Hero-Komponente mit Skill-Tree Diagramm
- CardGrid fuer die Challenges des Levels (statt Tabelle)
- Klarer CTA "Challenge 1 starten"

### 5. Boss Fight Seiten

- Visuell abgehobener Banner-Stil
- "Final Challenge" Badge im Frontmatter
- Warnungs-Aesthetik: Rot/Orange Gradient-Border

### 6. Level Complete Seiten

- Celebrations-Stil: Erfolgs-Banner
- "Level Unlocked" Badge
- Freigeschalteter Skill-Tree-Bereich visuell hervorgehoben

### 7. Roadmap

- Visueller Lernpfad statt nur Mermaid-Diagramm
- LinkCards zu jedem Level mit Kurzinfo

### 8. Welcome-Seite (Hauptseite)

> Recherche-Grundlage: Analyse von Total TypeScript, EpicWeb.dev, Brilliant.org, Scrimba, EdTech Best Practices (13 Plattformen). Vollstaendige Recherche: `~/.claude/data/research/2026-03-08-lernplattform-landing-page-patterns.md`

Die aktuelle Welcome-Seite listet Features (CardGrid + Methodik). Die besten Lernplattformen erzaehlen stattdessen eine Geschichte: Problem → Transformation → Methodik → Curriculum → Vertrauen.

**Neue Seitenstruktur (inspiriert von Total TypeScript + EpicWeb):**

#### 8a. Hero (bereits vorhanden — erweitern)

- Tagline bleibt: "Vom Vibe Coder zum AI Engineer"
- **Neu:** Unter-Tagline mit konkretem Outcome: "Nach 9 Levels baust Du AI-Systeme mit Tool Calling, Evals und Production-Workflows — nicht Copy-Paste aus ChatGPT."
- CTAs bleiben: "Level 1 starten" + "Roadmap ansehen"

#### 8b. Problem Statement (NEU — nach Hero)

- Ueberschrift: "Du nutzt AI — aber baust Du auch damit?"
- 3-4 konkrete Pain Points die die Zielgruppe kennt:
  - Copy-Paste aus ChatGPT ohne Verstaendnis
  - Keine Ahnung wie Agents, Tools, MCP funktionieren
  - Kein systematischer Lernpfad fuer AI Engineering
  - Angst, den Anschluss zu verpassen
- Inspiration: TotalTS "You're good, but you want to be great"

#### 8c. Transformation Promise (NEU)

- Ueberschrift: "Nach 9 Levels kannst Du..."
- 4-6 konkrete Faehigkeiten als Ergebnis:
  - AI SDK programmatisch nutzen (nicht nur Chat)
  - Agents mit Tool Calling und MCP bauen
  - Prompt Engineering mit Context Engineering kombinieren
  - Evals schreiben und AI-Qualitaet messen
  - Streaming-UIs und Multi-Step Workflows implementieren
  - Production-Ready Guardrails und Model Routing einsetzen
- Inspiration: TotalTS "I feel like I have superpowers"

#### 8d. Methodik (vorhanden — umgestalten)

- Ueberschrift: "Wie es funktioniert" bleibt
- Statt nummerierter Liste: **Visuellere Darstellung** mit Cards
- Briefing → Challenges → Boss Fight → Level Complete als Flow
- 6-Step Challenge-Struktur (THINK/OVERVIEW/WHY/WALKTHROUGH/TRY/COMBINE) kompakter

#### 8e. Curriculum Preview (vorhanden — erweitern)

- Statt 4 generischen Cards: **LinkCards zu jedem Level** (wie Roadmap)
- Jede Card mit Anzahl Challenges + Kern-Skill
- Farbcodierung nach Schwierigkeit (Blau/Gruen/Orange/Rot)

#### 8f. Warum diesen Inhalten vertrauen? (NEU — zentral)

- Ueberschrift: "Gebaut auf offiziellen Quellen"
- Erklaerung des Qualitaetsansatzes:
  - Alle Inhalte basieren auf offiziellen Docs (ai-sdk.dev, Anthropic, MCP)
  - Code-Beispiele getestet und lauffaehig
  - Open-Source Referenz-Uebungen als Grundlage
  - Quellen am Ende jeder Seite verlinkt
- Quellen-Logos oder Links als Trust-Signale
- Inspiration: EdTech Best Practice "Quellen-Transparenz als Differenzierung"

#### 8g. Fuer wen? (NEU)

- Ueberschrift: "Fuer wen ist Level Up AI?"
- Zielgruppe klar benennen:
  - TypeScript-Entwickler die AI in ihre Projekte einbauen wollen
  - "Vibe Coder" die systematisch lernen wollen
  - Devs mit ChatGPT-Erfahrung aber ohne SDK-Wissen
- Auch klar sagen fuer wen NICHT:
  - Nicht fuer absolute Programmier-Anfaenger
  - Nicht fuer Data Scientists / ML Engineers (anderer Fokus)

#### 8h. Zeitschaetzung (NEU)

- "~40-80 Stunden, im eigenen Tempo"
- "2-4 Stunden pro Woche = ca. 3 Monate"
- Inspiration: TotalTS Learning Path Zeitschaetzung

## Nicht im Scope (YAGNI)

- Kein XP-System (braucht Backend)
- Keine Custom-Fonts (Ladezeit)
- Keine JavaScript-Animationen
- Kein User-Login/Tracking
- Keine Component Overrides (nur CSS + Starlight Config)

## Technische Umsetzung

- Nur CSS (`src/custom-styles.css`) + Starlight Config (`astro.config.mjs`)
- MDX-Frontmatter Aenderungen (Badges, Hero)
- SVG-Assets in `public/` und `src/assets/`
- Keine neuen Dependencies
