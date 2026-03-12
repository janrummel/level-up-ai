/**
 * Skill Tree SVG template for Level Up AI.
 * Generates a horizontal 9-level skill tree with unlocked/active/locked states.
 */

import { getSvgDefs, getRoleGradient, getRoleGlow } from '../svg-defs.mjs';

const LEVELS = [
  'AI SDK Basics', 'LLM Fundamentals', 'Agents &amp; MCP',
  'Persistence', 'Context Eng.', 'Evals',
  'Streaming', 'Workflows', 'Advanced',
];

const NODE_W = 75;
const NODE_H = 45;
const GAP = 10;
const VIEWBOX_W = 800;
const VIEWBOX_H = 140;

// Layout: 9 nodes * 75 + 8 gaps * 10 = 675 + 80 = 755. Left padding to center.
const LEFT_PAD = (VIEWBOX_W - (LEVELS.length * NODE_W + (LEVELS.length - 1) * GAP)) / 2;
const NODE_Y = 55;
const LABEL_Y = 40;

/**
 * Determine the role for each level node.
 * @param {number} levelIdx - 0-based level index
 * @param {number} current - 1-based current level
 * @param {string} variant - 'briefing' | 'complete'
 * @returns {{ role: string, state: string }}
 */
function getNodeState(levelIdx, current, variant) {
  const levelNum = levelIdx + 1; // 1-based

  if (variant === 'briefing') {
    if (levelNum < current) return { role: 'process', state: 'unlocked' };
    if (levelNum === current) return { role: 'output', state: 'active' };
    return { role: 'neutral', state: 'locked' };
  }

  // variant === 'complete'
  if (levelNum <= current) return { role: 'process', state: 'unlocked' };
  if (levelNum === current + 1) return { role: 'output', state: 'next' };
  return { role: 'neutral', state: 'locked' };
}

/**
 * Compute the x position for a node by 0-based index.
 */
function nodeX(idx) {
  return LEFT_PAD + idx * (NODE_W + GAP);
}

/**
 * Build subgraph label groups.
 * Returns an array of { label, startIdx, endIdx } (inclusive, 0-based).
 */
function getSubgraphGroups(current, variant) {
  const groups = [];

  if (variant === 'briefing') {
    // Unlocked: levels < current
    if (current > 1) {
      groups.push({ label: 'Freigeschaltet', startIdx: 0, endIdx: current - 2 });
    }
    // Active: current level
    groups.push({ label: 'Aktuelles Level', startIdx: current - 1, endIdx: current - 1 });
    // Locked: levels > current
    if (current < 9) {
      groups.push({ label: 'Gesperrt', startIdx: current, endIdx: 8 });
    }
  } else {
    // variant === 'complete'
    // Unlocked: levels <= current
    groups.push({ label: 'Freigeschaltet', startIdx: 0, endIdx: current - 1 });
    // Next: current + 1
    if (current < 9) {
      groups.push({ label: 'Naechstes Level', startIdx: current, endIdx: current });
    }
    // Locked: levels > current + 1
    if (current + 1 < 9) {
      groups.push({ label: 'Gesperrt', startIdx: current + 1, endIdx: 8 });
    }
  }

  return groups;
}

/**
 * Generate the skill tree SVG.
 * @param {{ level: number, variant: string }} options
 * @returns {string} SVG markup
 */
export function generateSkillTree({ level, variant }) {
  if (variant !== 'briefing' && variant !== 'complete') {
    throw new Error(`Unknown variant "${variant}". Expected "briefing" or "complete".`);
  }
  const current = Math.max(1, Math.min(9, level));
  const parts = [];

  // SVG open
  parts.push(
    `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${VIEWBOX_W} ${VIEWBOX_H}" width="${VIEWBOX_W}" height="${VIEWBOX_H}">`,
  );

  // Defs
  parts.push(getSvgDefs());

  // Background
  parts.push(
    `<rect width="${VIEWBOX_W}" height="${VIEWBOX_H}" fill="#0f172a" rx="12"/>`,
  );

  // Subgraph labels
  const groups = getSubgraphGroups(current, variant);
  for (const g of groups) {
    const x1 = nodeX(g.startIdx);
    const x2 = nodeX(g.endIdx) + NODE_W;
    const cx = (x1 + x2) / 2;
    parts.push(
      `<text x="${cx}" y="${LABEL_Y}" text-anchor="middle" fill="#64748b" font-family="system-ui, -apple-system, sans-serif" font-size="10">${g.label}</text>`,
    );
  }

  // Edges (drawn before nodes so nodes appear on top)
  for (let i = 0; i < LEVELS.length - 1; i++) {
    const fromState = getNodeState(i, current, variant);
    const toState = getNodeState(i + 1, current, variant);
    const x1 = nodeX(i) + NODE_W;
    const x2 = nodeX(i + 1);
    const cy = NODE_Y + NODE_H / 2;

    const bothUnlocked =
      fromState.state !== 'locked' && toState.state !== 'locked';
    const dashAttr = bothUnlocked ? '' : ' stroke-dasharray="4 3"';

    parts.push(
      `<path d="M ${x1} ${cy} L ${x2} ${cy}" stroke="#64748b" stroke-width="2" stroke-linecap="round"${dashAttr} marker-end="url(#arrow)"/>`,
    );
  }

  // Nodes
  for (let i = 0; i < LEVELS.length; i++) {
    const { role } = getNodeState(i, current, variant);
    const x = nodeX(i);
    const grad = getRoleGradient(role);
    const glow = getRoleGlow(role);
    const filterAttr = glow !== 'none' ? ` filter="${glow}"` : '';

    parts.push(`<g${filterAttr}>`);
    parts.push(
      `<rect x="${x}" y="${NODE_Y}" width="${NODE_W}" height="${NODE_H}" rx="6" fill="${grad}" filter="url(#shadow)"/>`,
    );

    const cx = x + NODE_W / 2;
    // "LEVEL N" label — small, semi-transparent
    parts.push(
      `<text x="${cx}" y="${NODE_Y + 17}" text-anchor="middle" fill="#fff" font-family="system-ui, -apple-system, sans-serif" font-size="9" font-weight="600" letter-spacing="0.5" opacity="0.7">LEVEL ${i + 1}</text>`,
    );
    // Level name — bold. Add textLength for long labels to prevent overflow.
    const label = LEVELS[i];
    const maxTextW = NODE_W - 8;
    const estWidth = label.replace('&amp;', '&').length * 6.5;
    const textLenAttr = estWidth > maxTextW ? ` textLength="${maxTextW}" lengthAdjust="spacingAndGlyphs"` : '';
    parts.push(
      `<text x="${cx}" y="${NODE_Y + 33}" text-anchor="middle" fill="#fff" font-family="system-ui, -apple-system, sans-serif" font-size="11" font-weight="700"${textLenAttr}>${label}</text>`,
    );

    parts.push('</g>');
  }

  // SVG close
  parts.push('</svg>');

  return parts.join('\n');
}
