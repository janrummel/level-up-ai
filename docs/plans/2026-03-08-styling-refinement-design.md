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
