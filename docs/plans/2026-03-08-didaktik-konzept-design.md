# Didaktik-Konzept: Level Up AI

> Design-Dokument | Erstellt: 2026-03-08 | Status: Approved

## Vision

"Vom Vibe Coder zum AI Engineer" — ein gamifizierter, visueller Lernpfad der technisches Wissen so vermittelt, dass es wirklich in den Koepfen ankommt. Kostenlos, Open Source, Senior-Level Qualitaet.

## Zielgruppe

- **Mindestens:** ChatGPT-Erfahrung, Grundverstaendnis was ein LLM ist
- **Optimal:** TypeScript-Kenntnisse, npm/CLI kein Problem
- **Skip-Pfade** fuer Fortgeschrittene die Grundlagen ueberspringen wollen

## Lernmodell

**Visual-First → Warum → Beispiel → Selbst machen**

Basierend auf dem Lernmuster:
1. Erst das Gesamtbild sehen (Diagramm, Architektur)
2. Verstehen warum etwas existiert (Problem → Loesung)
3. Ein fertiges Beispiel auseinandernehmen
4. Selbst Code schreiben und experimentieren

## Challenge-Struktur (6 Schritte)

Jede Lerneinheit folgt diesem Rhythmus:

### 0. THINK (Vorwissen aktivieren)
- **Inspiration:** Brilliant.org ("Pretest before teaching")
- **Format:** 1 Frage an den Leser, BEVOR das Konzept erklaert wird
- **Zweck:** Aktiviert Vorwissen, erzeugt Neugier, macht empfaenglich fuer die Erklaerung
- **Beispiel:** "Was passiert, wenn Du ein LLM nach aktuellen Nachrichten fragst? Woher weiss es, ob seine Antwort stimmt?"

### 1. OVERVIEW (Das Gesamtbild)
- **Format:** Mermaid-Diagramm (Flow, Sequenz oder Box)
- **Inhalt:** Zeigt wo das aktuelle Konzept im Gesamtsystem sitzt
- **Visuell markiert:** "Du bist HIER" — welcher Baustein wird gerade gelernt
- **Prinzip:** Einfachste Version zuerst (Brilliant.org: "Simplest version first")

### 2. WHY (Das Problem)
- **Format:** 2-3 Saetze + Vorher/Nachher Vergleich
- **Inhalt:** Welches konkrete Problem loest dieses Konzept?
- **Prinzip:** Problem vor Loesung. Nie "X ist eine Technik die..." — stattdessen: "Ohne X passiert Y (schlecht)"

### 3. WALKTHROUGH (Schicht fuer Schicht)
- **Format:** OVERVIEW-Diagramm wird Schicht fuer Schicht aufgeloest
- Jede Schicht: Erklaerung + annotiertes Code-Snippet
- **Code-Annotationen:** Kommentare markieren die 2-3 kritischen Zeilen
- **Interaktiv wo moeglich:** "Aendere diesen Wert und beobachte was passiert" (Josh Comeau: "Poke and prod")
- Reihenfolge folgt Wissens-Abhaengigkeiten

### 4. TRY (Isolierte Uebung)
- **Format:** Aufgabenstellung + Starter-Code mit TODOs
- **Scope:** Genau EIN Konzept, keine Ablenkung
- Loesung hinter `<details>` aufklappbar
- Bewertungskriterien als Checkliste
- **Stark gefuehrt** — klare Schritte, wenig Raum fuer Fehler

### 5. COMBINE (Baustein einsetzen)
- **Format:** Gesamtbild-Diagramm erscheint erneut, neuer Baustein eingesetzt
- Uebung verbindet aktuelles Konzept mit vorherigen Challenges
- **Weniger Hilfe** als TRY — Progressive Unabhaengigkeit (Josh Comeau: "Tutorial Fade")
- **Optionale Stretch Goals:** "Bonus: Fuege X hinzu"

## Level-Struktur (Makro)

```
Level N: [Thema]
|
+-- BRIEFING
|   +-- Skill-Tree-Diagramm: "Du bist HIER"
|   +-- Was Du lernst (3-5 Bullet Points)
|   +-- Warum das wichtig ist
|   +-- Voraussetzungen
|   +-- Skip-Hinweis fuer Fortgeschrittene
|   +-- TL;DR Box (30 Sekunden Zusammenfassung)
|
+-- CHALLENGE 1: [Konzept]
|   +-- THINK → OVERVIEW → WHY → WALKTHROUGH → TRY → COMBINE
|
+-- CHALLENGE 2-N: [weitere Konzepte]
|   +-- (aufbauend, ein Konzept pro Challenge)
|
+-- BOSS FIGHT
|   +-- Kombiniert alle Bausteine des Levels
|   +-- Realistisches Szenario
|   +-- Keine vorgefertigte Loesung — nur Bewertungskriterien
|   +-- Gesamtbild-Diagramm zeigt alle Bausteine zusammen
|
+-- LEVEL COMPLETE
    +-- Zusammenfassung: Was Du gelernt hast
    +-- Aktualisierter Skill Tree (neuer Bereich freigeschaltet)
    +-- Naechstes Level: Vorschau
```

### Zeitaufwand pro Level (geschaetzt)

- Briefing: 5 Minuten
- Pro Challenge: 15-25 Minuten
- Boss Fight: 30-45 Minuten
- Gesamt pro Level: 1-2 Stunden

## Visuelle Sprache

### Diagramm-Katalog

| Konzept-Typ | Diagramm-Typ | Einsatz |
|-------------|-------------|---------|
| Datenfluesse | Flow (links→rechts) | User → Prompt → LLM → Antwort |
| Architektur | Box mit Schichten | AI SDK Core / UI / RSC |
| Entscheidungen | Entscheidungsbaum | generateText vs. streamText |
| Ablaeufe | Sequenz-Diagramm | Tool Call Lifecycle |
| Vergleiche | Gegenueber-Stellung | Ohne CoT vs. Mit CoT |
| Fortschritt | Skill Tree / Abhaengigkeits-Graph | Level-Roadmap |

### Technische Umsetzung

- **Mermaid** im Markdown (Starlight rendert nativ)
- Versionierbar in Git, aenderbar ohne Designer
- Spaeter moeglich: interaktive Widgets via MDX (Sandpack, StackBlitz)

### Farbkodierung

| Farbe | Bedeutung |
|-------|-----------|
| Blau | Daten / Input (User, Dokumente) |
| Gruen | Verarbeitung (LLM, Tools) |
| Orange | Output (Antwort, Stream) |
| Rot | Fehler / Risiko (Halluzination, fehlender Kontext) |
| Gestrichelt | Optional / Conditional |

## Didaktische Prinzipien

### Kern-Prinzipien

1. **Zeigen bevor Erklaeren** — Erst Diagramm, dann Text. Nie umgekehrt.
2. **Problem vor Loesung** — Jedes Konzept startet mit dem Problem, das es loest.
3. **Eine Sache pro Einheit** — Jede Challenge lehrt genau EIN Konzept.
4. **Weniger Text, mehr Struktur** — Max 3 Absaetze Fliesstext, dann visueller Wechsel.
5. **Code der laeuft** — Jedes Beispiel vollstaendig und ausfuehrbar.
6. **Fortgeschrittene abholen** — Skip-Hinweise, TL;DR Boxen.
7. **Ehrlichkeit bei Grenzen** — Kennzeichnen wo Wissen endet oder APIs sich aendern.

### Uebernommen von Best-in-Class

8. **Pretest before teaching** (Brilliant.org) — THINK-Schritt aktiviert Vorwissen.
9. **Simplest version first** (Brilliant.org) — Diagramme starten minimal, Komplexitaet wird schrittweise hinzugefuegt.
10. **Poke and prod** (Josh Comeau) — Uebungen die zum Experimentieren auffordern: "Aendere X, beobachte Y."
11. **Progressive Unabhaengigkeit** (Josh Comeau) — TRY gefuehrt → COMBINE weniger Hilfe → Boss Fight eigenstaendig.
12. **Kein Fuelltext** (Fireship) — Hohe Informationsdichte, TL;DR Boxen fuer Fortgeschrittene.

## Qualitaetssicherung

### Quellen-Hierarchie

| Rang | Quelle | Verbindlichkeit |
|------|--------|----------------|
| 1 | Offizielle Docs (ai-sdk.dev, platform.claude.com) | Pflicht |
| 2 | Lauffaehiger, getesteter Code | Pflicht |
| 3 | Open-Source Referenz (ai-hero-dev Exercises) | Pflicht |
| 4 | Offizielle Blogposts, Maintainer-Talks | Ergaenzend |
| 5 | Community (Blogs, Tutorials) | Nur mit Gegencheck |

### Content-Erstellungsprozess

1. Offizielle Docs lesen
2. ai-hero-dev Exercise + Loesung lesen
3. THINK-Frage formulieren
4. OVERVIEW-Diagramm erstellen
5. WHY schreiben (Problem → Loesung)
6. WALKTHROUGH mit annotierten Code-Snippets
7. Code lokal ausfuehren und Output pruefen
8. TRY + COMBINE Uebungen schreiben und Loesungen testen
9. Quellen am Ende der Seite
10. Signal-Check: Wuerde ein Senior das so erklaeren?

### Verbote

- Konzepte ohne Gegencheck gegen Docs erklaeren
- API-Signaturen raten statt nachschlagen
- Uebungen mit ungetesteten Loesungen
- Veraltete APIs ohne Kennzeichnung

## Inspirationsquellen

| Quelle | Was wir uebernehmen |
|--------|---------------------|
| [Brilliant.org](https://brilliant.org/about/) | Pretest, Simplest version first, Intuition vor Theorie |
| [Josh Comeau](https://www.joshwcomeau.com/blog/how-to-learn-stuff-quickly/) | Interactive Widgets, Poke & Prod, Tutorial Fade, Progressive Unabhaengigkeit |
| [Fireship](https://fireship.io/) | Informationsdichte, kein Fuelltext, TL;DR Format |
| [Kent C. Dodds (EpicReact)](https://www.epicreact.dev/) | Workshop-Style, Open Source Exercises |

## Technischer Stack

- **Framework:** Astro Starlight (i18n DE/EN, Mermaid, MDX)
- **Diagramme:** Mermaid (nativ in Starlight)
- **Code-Playgrounds:** Spaeter: Sandpack oder StackBlitz Embeds
- **Sprache:** Deutsch + Englisch (Switch)
- **Hosting:** GitHub Pages (spaeter, wenn oeffentlich)

## 9 Level im Ueberblick

| Level | Thema | Challenges | Kern-Diagramm |
|-------|-------|-----------|----------------|
| 1 | AI SDK Basics | 6 | Flow: User → SDK → Provider → LLM |
| 2 | LLM Fundamentals | 4 | Box: Tokens, Context Window, Caching |
| 3 | Agents & MCP | 5 | Sequenz: LLM → Tool → LLM Loop |
| 4 | Persistence | 4 | Flow: Chat → API → DB → Reload |
| 5 | Context Engineering | 5 | Box: Prompt Template Schichten |
| 6 | Evals | 5 | Flow: Task → Scorer → Score → Iterate |
| 7 | Streaming | 4 | Sequenz: Stream Events Timeline |
| 8 | Workflows | 4 | Flow: Multi-Step Agent Pipeline |
| 9 | Advanced Patterns | 4 | Entscheidungsbaum: Model Router |
