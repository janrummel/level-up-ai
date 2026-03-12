/**
 * Diagram generation entry point for Level Up AI.
 * Reads data files and generates SVG diagrams into src/assets/diagrams/.
 */

import { readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs';
import { dirname, join } from 'path';
import { fileURLToPath } from 'url';

import { generateSkillTree } from './templates/skill-tree.mjs';

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

// ─── Flow Diagrams (TODO) ──────────────────────────────────────────────────────
// Placeholder: flow diagram generation will be added here once the
// flow-diagram template and data file are created.
// Example:
//   import { generateFlowDiagram } from './templates/flow-diagram.mjs';
//   const flowData = JSON.parse(readFileSync(...));
//   for (const entry of flowData) { ... }

// ─── Summary ──────────────────────────────────────────────────────────────────

const totalCount = skillTreeCount;
console.log(`\nTotal diagrams generated: ${totalCount}`);
