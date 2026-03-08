# Level 1 Fixes — Priorisiert

> Konsolidiert aus: Expert Review + User Walkthrough (2026-03-08)

## P0 — FAIL (muss sofort gefixt werden)

| # | Datei | Problem | Fix | Aufwand |
|---|-------|---------|-----|---------|
| P0-1 | `01-briefing.mdx` | Kein Projekt-Setup-Guide, kein erster Befehl, Projektstruktur unklar | "Bevor Du loslegst" Box mit mkdir, npm init, npm install, .env, Ausfuehrungshinweis | M |
| P0-2 | `02-07` (alle Challenges) | Kein Ausfuehrungsbefehl (`npx tsx`) bei keinem Code-Beispiel | Nach jedem TRY/Loesung: Dateiname + `npx tsx dateiname.ts` | M |
| P0-3 | `01-briefing.mdx` | Keine Links zu API-Key-Registrierung | Links zu Anthropic Console, OpenAI Platform, Google AI Studio + Kostentransparenz | S |
| P0-4 | `06-structured-output.mdx` | `npm install zod` fehlt | Install-Befehl + 1 Satz "Was ist Zod?" | S |
| P0-5 | `01-briefing.mdx` | `package.json` ("type": "module") und tsconfig nie erwaehnt | Im Setup-Block klaeren: "tsx regelt das" oder konkrete package.json zeigen | S |

## P1 — WARN-hoch (Anfaenger-Blocker)

| # | Datei | Problem | Fix | Aufwand |
|---|-------|---------|-----|---------|
| P1-1 | `02-07` (alle) | Kein erwarteter Output nach Code-Beispielen | Beispiel-Terminal-Output nach jeder Loesung | M |
| P1-2 | `02-what-is-ai-sdk.mdx` | API-Key per `export` ist fluechtig, .env nicht erwaehnt | .env-Ansatz zeigen, Hinweis dass tsx .env automatisch laedt | S |
| P1-3 | `03-choosing-your-model.mdx` | Zwei API-Keys noetig, nicht gesagt | Hinweis: "Ein Key reicht — nutze zwei Modelle desselben Providers" | S |
| P1-4 | `08-boss-fight.mdx` | selectModel erwartet verschiedene Provider | Kommentar im Starter-Code: Fallback auf claude-haiku + claude-sonnet | S |
| P1-5 | `01-briefing.mdx` | Troubleshooting fehlt komplett | 3-4 haeufigste Fehler als Aside/Callout | S |
| P1-6 | `09-level-complete.mdx` | Zu knapp, keine emotionale Belohnung, kein Boss-Fight-Rueckbezug | Glueckwunsch-Absatz + Boss-Fight-Referenz | S |

## P2 — WARN-niedrig (Verbesserungen)

| # | Datei | Problem | Fix | Aufwand |
|---|-------|---------|-----|---------|
| P2-1 | `03-choosing-your-model.mdx` | `codex-mini` im Diagramm ist kein gueltiger Modellname | Aendern zu realem Modellnamen oder generisch "Code-Modell" | S |
| P2-2 | `04-generating-text.mdx` | system-Parameter eingefuehrt ohne Verweis auf 1.6 | 1 Satz: "Details in Challenge 1.6" | S |
| P2-3 | `07-system-prompts.mdx` | Ueberlappung mit 1.3 nicht adressiert | Einleitung: "Du kennst system bereits aus 1.3 — hier vertiefst Du..." | S |
| P2-4 | `08-boss-fight.mdx` | Kein Zeithinweis | "Erwartete Dauer: 30-45 Minuten" | S |
| P2-5 | `05-streaming-text.mdx` | result.usage als PromiseLike nicht erwaehnt (wird im Boss Fight gebraucht) | 1 Satz in Schicht 2/3 | S |
| P2-6 | `01-briefing.mdx` | Output.choice fehlt in Lernziel-Liste | Ergaenzen bei Structured Output Bullet | S |
| P2-7 | `04-generating-text.mdx` | finishReason 'length' ohne Fix-Vorschlag | maxTokens Beispiel ergaenzen | S |
| P2-8 | `06-structured-output.mdx` | Zod nicht als Library eingefuehrt | 1 Satz vor erstem Schema | S |
