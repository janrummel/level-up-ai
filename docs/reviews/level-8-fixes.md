# Level 8: Workflows — Konsolidierte Fixes

> Datum: 2026-03-09 | Quellen: Expert Review + User Walkthrough

## Fix-Uebersicht

| Fix | Prio | Was | Dateien | Quelle |
|-----|------|-----|---------|--------|
| F1 | P1 | Dateinamen + `npx tsx` in allen TRY-Sektionen | 02-05 (DE+EN) | A6, B2, B4 |
| F2 | P1 | Erwarteter Output bei Loesungen | 02-05 (DE+EN) | A6, B6 |
| F3 | P1 | `ToolLoopAgent` Referenz klarstellen | 04 (DE+EN) | A11, B12 |
| F4 | P1 | Sicherheitshinweis in 8.3 TRY (Endlosschleife) | 04 (DE+EN) | B7 |
| F5 | P2 | Emotionale Belohnung in Level Complete | 07 (DE+EN) | A14, B4 |
| F6 | P2 | Projektverzeichnis-Hinweis im Briefing | 01 (DE+EN) | A13, B2 |
| F7 | P2 | Boss-Fight-Rueckblick in Level Complete | 07 (DE+EN) | B5 |
| F8 | P2 | Boss Fight Starter: Stream-Consumer-Hinweis | 06 (DE+EN) | B10 |

## Nicht gefixt (bewusst)

- `experimental_transform` in 8.2 COMBINE: Nur Referenz auf Level 7, gleiches offenes WARN. Wird ggf. global gefixt.
- ai-hero-dev Exercise-Links: Nicht live verifiziert, aber Folder-Namen plausibel. Geringeres Risiko als L7.
