/**
 * Diagram generation entry point for Level Up AI.
 * Reads data files and generates SVG diagrams into src/assets/diagrams/.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { generateSkillTree } from './templates/skill-tree.mjs';
import { generateFlow } from './templates/flow.mjs';
import { generateSequence } from './templates/sequence.mjs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const PROJECT_ROOT = join(__dirname, '..');

const OUTPUT_DIR = join(PROJECT_ROOT, 'src', 'assets', 'diagrams');

// Ensure output directory exists
if (!existsSync(OUTPUT_DIR)) {
  mkdirSync(OUTPUT_DIR, { recursive: true });
}

// ─── Skill Trees ──────────────────────────────────────────────────────────────

const skillTreesData = JSON.parse(
  readFileSync(join(PROJECT_ROOT, 'src', 'diagrams', 'skill-trees.json'), 'utf8'),
);

let skillTreeCount = 0;

for (const entry of skillTreesData) {
  const svg = generateSkillTree(entry);
  const filename = `skill-tree-l${entry.level}-${entry.variant}.svg`;
  writeFileSync(join(OUTPUT_DIR, filename), svg, 'utf8');
  skillTreeCount++;
}

console.log(`Generated ${skillTreeCount} skill tree SVG(s) → ${OUTPUT_DIR}`);

// ─── Flow Diagrams ───────────────────────────────────────────────────────────

import { readdirSync } from 'fs';

let flowCount = 0;
let seqCount = 0;
const diagramsDir = join(PROJECT_ROOT, 'src', 'diagrams');

// Glob level-*/c*-*.json
const levelDirs = readdirSync(diagramsDir, { withFileTypes: true })
  .filter(d => d.isDirectory() && d.name.startsWith('level-'));

for (const dir of levelDirs) {
  const levelPath = join(diagramsDir, dir.name);
  const jsonFiles = readdirSync(levelPath)
    .filter(f => f.endsWith('.json') && f.match(/^c\d+.*\.json$|^boss.*\.json$/));

  for (const file of jsonFiles) {
    const data = JSON.parse(readFileSync(join(levelPath, file), 'utf8'));
    if (data.type === 'sequence' || data.participants) {
      const svg = generateSequence(data);
      writeFileSync(join(OUTPUT_DIR, `${data.id}.svg`), svg, 'utf8');
      seqCount++;
    } else if (data.nodes) {
      const svg = generateFlow(data);
      writeFileSync(join(OUTPUT_DIR, `${data.id}.svg`), svg, 'utf8');
      flowCount++;
    }
  }
}

console.log(`Generated ${flowCount} flow diagram SVG(s) → ${OUTPUT_DIR}`);
console.log(`Generated ${seqCount} sequence diagram SVG(s) → ${OUTPUT_DIR}`);

// ─── Summary ──────────────────────────────────────────────────────────────────

const totalCount = skillTreeCount + flowCount + seqCount;
console.log(`\nTotal diagrams generated: ${totalCount}`);
