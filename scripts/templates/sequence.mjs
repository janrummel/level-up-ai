/**
 * Sequence diagram SVG template for Level Up AI.
 *
 * Accepts a JSON diagram definition with participants, messages, and optional
 * rect/note/alt regions, returns a self-contained SVG string suitable for
 * embedding in Astro pages.
 *
 * @module scripts/templates/sequence
 */

import { getSvgDefs, getRoleGradient } from '../svg-defs.mjs';

// ─── Constants ───────────────────────────────────────────────────────────────

const PARTICIPANT_MIN_W = 120;
const PARTICIPANT_H = 36;
const PARTICIPANT_GAP = 100;
const PARTICIPANT_RX = 10;

const MSG_VERTICAL_STEP = 32;
const MSG_LABEL_FONT_SIZE = 10;
const MSG_ARROW_STROKE = '#94a3b8';

const NOTE_FONT_SIZE = 9;
const NOTE_PAD_X = 8;
const NOTE_PAD_Y = 5;
const NOTE_RX = 4;
const NOTE_MAX_W = 130;

const RECT_PAD = 10;
const RECT_LABEL_FONT_SIZE = 10;
const RECT_RX = 8;

const TOP_PAD = 20;
const BOTTOM_PAD = 30;
const SIDE_PAD = 30;

const LIFELINE_STROKE = '#334155';

const FONT_FAMILY = 'system-ui, -apple-system, sans-serif';

// ─── Helpers ─────────────────────────────────────────────────────────────────

/**
 * Escape XML special characters.
 * @param {string} str
 * @returns {string}
 */
function esc(str) {
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/**
 * Estimate text width based on character count and font size.
 * @param {string} text
 * @param {number} fontSize
 * @returns {number}
 */
function textWidth(text, fontSize) {
  return text.length * fontSize * 0.58;
}

// ─── Main Generator ──────────────────────────────────────────────────────────

/**
 * Generate a sequence-diagram SVG string from structured data.
 *
 * @param {object} data - Diagram definition
 * @returns {string} Complete SVG markup
 */
export function generateSequence(data) {
  const { id, participants, messages } = data;

  // --- 1. Build participant layout ---
  const pMap = new Map(); // id -> { ...participant, x, centerX }
  const pOrder = []; // ordered list of participant ids

  // Calculate participant box widths
  for (const p of participants) {
    const labelW = textWidth(p.label, 12);
    const w = Math.max(PARTICIPANT_MIN_W, labelW + 24);
    pMap.set(p.id, { ...p, width: w });
    pOrder.push(p.id);
  }

  // Position participants horizontally
  let xCursor = SIDE_PAD;
  for (const pid of pOrder) {
    const p = pMap.get(pid);
    p.x = xCursor;
    p.centerX = xCursor + p.width / 2;
    xCursor += p.width + PARTICIPANT_GAP;
  }

  const totalWidth = xCursor - PARTICIPANT_GAP + SIDE_PAD;

  // --- 2. Calculate vertical positions for all messages ---
  // We need to walk the message tree to determine y positions
  const topBoxY = TOP_PAD;
  const topBoxBottom = topBoxY + PARTICIPANT_H;
  let currentY = topBoxBottom + 25; // Start messages below participant boxes

  // Flatten messages and assign y positions
  const renderedItems = [];

  function processMessages(msgs, depth = 0) {
    for (const msg of msgs) {
      if (msg.type === 'rect') {
        const rectStartY = currentY;
        currentY += 18; // space for rect label
        processMessages(msg.messages || [], depth + 1);
        currentY += 5;
        renderedItems.push({
          type: 'rect',
          startY: rectStartY,
          endY: currentY,
          label: msg.label,
          style: msg.style || 'highlight',
          depth,
        });
        currentY += 8;
      } else if (msg.type === 'alt') {
        const altStartY = currentY;
        currentY += 18; // space for alt label
        // Process "if" branch
        processMessages(msg.ifMessages || [], depth + 1);
        const dividerY = currentY + 5;
        currentY += 18; // space for else label
        // Process "else" branch
        processMessages(msg.elseMessages || [], depth + 1);
        currentY += 5;
        renderedItems.push({
          type: 'alt',
          startY: altStartY,
          dividerY,
          endY: currentY,
          ifLabel: msg.ifLabel,
          elseLabel: msg.elseLabel,
          depth,
        });
        currentY += 8;
      } else if (msg.type === 'note') {
        renderedItems.push({
          type: 'note',
          y: currentY,
          over: msg.over,
          text: msg.text,
        });
        currentY += MSG_VERTICAL_STEP;
      } else {
        // Regular message arrow
        renderedItems.push({
          type: 'message',
          y: currentY,
          from: msg.from,
          to: msg.to,
          label: msg.label,
          style: msg.style || 'solid',
        });
        currentY += MSG_VERTICAL_STEP;
      }
    }
  }

  processMessages(messages);

  // Bottom participant boxes
  const bottomBoxY = currentY + 15;
  const svgH = bottomBoxY + PARTICIPANT_H + BOTTOM_PAD;
  const svgW = totalWidth;

  // --- 3. Render SVG parts ---
  const parts = [];

  // Background
  parts.push(`<rect width="${svgW}" height="${svgH}" fill="#0f172a" rx="16"/>`);

  // Lifelines (dashed vertical lines between top and bottom boxes)
  for (const pid of pOrder) {
    const p = pMap.get(pid);
    parts.push(
      `<line x1="${p.centerX}" y1="${topBoxBottom}" x2="${p.centerX}" y2="${bottomBoxY}" stroke="${LIFELINE_STROKE}" stroke-dasharray="4 4" stroke-width="1"/>`,
    );
  }

  // Rect/Alt regions (render behind messages)
  for (const item of renderedItems) {
    if (item.type === 'rect') {
      const rx = SIDE_PAD - 5;
      const rw = svgW - (SIDE_PAD - 5) * 2;

      let fillColor, strokeColor;
      if (item.style === 'highlight') {
        fillColor = 'rgba(230,126,34,0.08)';
        strokeColor = '#E67E22';
      } else if (item.style === 'process') {
        fillColor = 'rgba(39,174,96,0.08)';
        strokeColor = '#27AE60';
      } else if (item.style === 'input') {
        fillColor = 'rgba(74,144,217,0.08)';
        strokeColor = '#4A90D9';
      } else {
        fillColor = 'rgba(230,126,34,0.08)';
        strokeColor = '#E67E22';
      }

      parts.push(
        `<rect x="${rx}" y="${item.startY - 5}" width="${rw}" height="${item.endY - item.startY + 10}" rx="${RECT_RX}" fill="${fillColor}" stroke="${strokeColor}" stroke-dasharray="5 5" stroke-width="1.5"/>`,
      );
      if (item.label) {
        parts.push(
          `<text x="${rx + 10}" y="${item.startY + 9}" fill="${strokeColor}" font-size="${RECT_LABEL_FONT_SIZE}" font-weight="600" font-family="${FONT_FAMILY}">${esc(item.label)}</text>`,
        );
      }
    } else if (item.type === 'alt') {
      const rx = SIDE_PAD - 5;
      const rw = svgW - (SIDE_PAD - 5) * 2;
      const fillColor = 'rgba(100,116,139,0.06)';
      const strokeColor = '#64748b';

      parts.push(
        `<rect x="${rx}" y="${item.startY - 5}" width="${rw}" height="${item.endY - item.startY + 10}" rx="${RECT_RX}" fill="${fillColor}" stroke="${strokeColor}" stroke-dasharray="5 5" stroke-width="1.5"/>`,
      );
      // "alt" label box
      if (item.ifLabel) {
        const labelW = textWidth(item.ifLabel, RECT_LABEL_FONT_SIZE) + 16;
        parts.push(
          `<rect x="${rx}" y="${item.startY - 5}" width="${labelW}" height="18" rx="4" fill="${strokeColor}" opacity="0.3"/>`,
        );
        parts.push(
          `<text x="${rx + 8}" y="${item.startY + 9}" fill="#e2e8f0" font-size="${RECT_LABEL_FONT_SIZE}" font-weight="600" font-family="${FONT_FAMILY}">${esc(item.ifLabel)}</text>`,
        );
      }
      // Divider line
      parts.push(
        `<line x1="${rx}" y1="${item.dividerY}" x2="${rx + rw}" y2="${item.dividerY}" stroke="${strokeColor}" stroke-dasharray="6 4" stroke-width="1"/>`,
      );
      // "else" label
      if (item.elseLabel) {
        const labelW = textWidth(item.elseLabel, RECT_LABEL_FONT_SIZE) + 16;
        parts.push(
          `<rect x="${rx}" y="${item.dividerY}" width="${labelW}" height="18" rx="4" fill="${strokeColor}" opacity="0.3"/>`,
        );
        parts.push(
          `<text x="${rx + 8}" y="${item.dividerY + 13}" fill="#e2e8f0" font-size="${RECT_LABEL_FONT_SIZE}" font-weight="600" font-family="${FONT_FAMILY}">${esc(item.elseLabel)}</text>`,
        );
      }
    }
  }

  // Message arrows and labels
  for (const item of renderedItems) {
    if (item.type === 'message') {
      const fromP = pMap.get(item.from);
      const toP = pMap.get(item.to);
      if (!fromP || !toP) continue;

      const x1 = fromP.centerX;
      const x2 = toP.centerX;
      const y = item.y;

      const isDashed = item.style === 'dashed';
      const dashAttr = isDashed ? ' stroke-dasharray="6 4"' : '';

      parts.push(
        `<line x1="${x1}" y1="${y}" x2="${x2}" y2="${y}" stroke="${MSG_ARROW_STROKE}" stroke-width="1.5"${dashAttr} marker-end="url(#arrow)"/>`,
      );

      // Label above the arrow, centered
      const midX = (x1 + x2) / 2;
      const labelY = y - 6;
      parts.push(
        `<text x="${midX}" y="${labelY}" text-anchor="middle" fill="#cbd5e1" font-size="${MSG_LABEL_FONT_SIZE}" font-family="${FONT_FAMILY}">${esc(item.label)}</text>`,
      );
    } else if (item.type === 'note') {
      // Render note box above participant
      const overP = pMap.get(item.over);
      if (!overP) continue;

      const noteText = item.text;
      const noteW = Math.min(NOTE_MAX_W, textWidth(noteText, NOTE_FONT_SIZE) + NOTE_PAD_X * 2);
      const noteH = 20;
      const noteX = overP.centerX - noteW / 2;
      const noteY = item.y - 5;

      parts.push(
        `<rect x="${noteX}" y="${noteY}" width="${noteW}" height="${noteH}" rx="${NOTE_RX}" fill="#1e293b" stroke="#334155" stroke-width="1"/>`,
      );
      parts.push(
        `<text x="${overP.centerX}" y="${noteY + 13}" text-anchor="middle" fill="#94a3b8" font-size="${NOTE_FONT_SIZE}" font-family="${FONT_FAMILY}">${esc(noteText)}</text>`,
      );
    }
  }

  // Participant boxes (top)
  for (const pid of pOrder) {
    const p = pMap.get(pid);
    parts.push(
      `<rect x="${p.x}" y="${topBoxY}" width="${p.width}" height="${PARTICIPANT_H}" rx="${PARTICIPANT_RX}" fill="${getRoleGradient(p.role)}" filter="url(#shadow)"/>`,
    );
    parts.push(
      `<text x="${p.centerX}" y="${topBoxY + PARTICIPANT_H / 2 + 5}" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" font-family="${FONT_FAMILY}">${esc(p.label)}</text>`,
    );
  }

  // Participant boxes (bottom)
  for (const pid of pOrder) {
    const p = pMap.get(pid);
    parts.push(
      `<rect x="${p.x}" y="${bottomBoxY}" width="${p.width}" height="${PARTICIPANT_H}" rx="${PARTICIPANT_RX}" fill="${getRoleGradient(p.role)}" filter="url(#shadow)"/>`,
    );
    parts.push(
      `<text x="${p.centerX}" y="${bottomBoxY + PARTICIPANT_H / 2 + 5}" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" font-family="${FONT_FAMILY}">${esc(p.label)}</text>`,
    );
  }

  // --- 4. Assemble SVG ---
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="${esc(id)}">
  ${getSvgDefs()}
  ${parts.join('\n  ')}
</svg>`;
}
