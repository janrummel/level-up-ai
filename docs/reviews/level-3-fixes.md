# Level 3: Agents & MCP — Konsolidierte Fixes

> Datum: 2026-03-08 | Basis: Expert-Review (0 FAIL, 5 WARN) + User-Walkthrough (6 FAIL, 12 WARN)

## Zusammenfassung

| Prio | Finding | Dateien | Aufwand |
|------|---------|---------|---------|
| **P0** | Fehlende `npm install` fuer MCP-Pakete | 05-mcp (DE+EN) | 5 min |
| **P0** | Unspezifische Quelle `platform.claude.com` | 06-tool-approval (DE+EN) | 2 min |
| **P1** | Fehlende Dateinamen bei TRY-Bloecken | 02-07 (DE+EN) | 15 min |
| **P1** | Fehlende Ausfuehrungsbefehle (`npx tsx`) | 02-07 (DE+EN) | 10 min |
| **P1** | Fehlender erwarteter Output bei TRY-Loesungen | 02-06 (DE+EN) | 20 min |
| **P2** | `eval()` im Lernmaterial ersetzen | 04 (DE+EN) | 5 min |
| **P2** | Keine emotionale Belohnung in Level Complete | 08 (DE+EN) | 3 min |
| **P2** | `readline` nicht als Node.js builtin markiert | 06 (DE+EN) | 2 min |
| **P2** | "Step" nicht praezise definiert | 04 (DE+EN) | 3 min |

## P0-Fixes

### Fix 1: npm install fuer MCP-Pakete (05-mcp.mdx)

Vor Schicht 1 / Layer 1 einfuegen:

```markdown
### Setup fuer diese Challenge

MCP erfordert zwei zusaetzliche Pakete:

\`\`\`bash
npm install @ai-sdk/mcp @modelcontextprotocol/sdk
\`\`\`
```

### Fix 2: Quelle in 06-tool-approval.mdx

Ersetze:
```
- [Anthropic: Agentic Systems — Autonomy vs. Safety](https://platform.claude.com)
```
Durch:
```
- [Anthropic: Building Effective Agents](https://docs.anthropic.com/en/docs/build-with-claude/agentic-systems)
```

## P1-Fixes

### Fix 3-5: Dateinamen + Ausfuehrungsbefehle + erwarteter Output

Bei jedem TRY-Block vor dem Code:
```
**Datei:** `challenge-3-X.ts`
```

Nach jeder Loesung:
```
**Ausfuehren:** `npx tsx challenge-3-X.ts`

**Erwarteter Output (ungefaehr):**
\`\`\`
[konkreter Output]
\`\`\`
```

## P2-Fixes

### Fix 6: eval() ersetzen (04-tool-loop-agent.mdx Schicht 3)
Calculator-Tool mit explizitem switch/case statt eval().

### Fix 7: Emotionale Belohnung (08-level-complete.mdx)
Glueckwunsch + Boss-Fight-Referenz ergaenzen.

### Fix 8: readline als Node.js builtin (06-tool-approval.mdx)
Hinweis in Schicht 3 bei `import * as readline from 'readline'`.

### Fix 9: Step-Definition (04-tool-loop-agent.mdx)
Praezise Definition: "Ein Step = ein LLM-Aufruf (der mehrere Tool Calls enthalten kann)."
