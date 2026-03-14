/**
 * Flow diagram SVG template with Dagre auto-layout.
 *
 * Accepts a JSON diagram definition with nodes, edges, and optional groups,
 * returns a self-contained SVG string suitable for embedding in Astro pages.
 *
 * @module scripts/templates/flow
 */

import dagre from '@dagrejs/dagre';
import { getSvgDefs, getRoleGradient, getRoleGlow } from '../svg-defs.mjs';

/**
 * Escape XML special characters in text content.
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
 * Turn a label (string or string[]) into an array of lines.
 * @param {string | string[]} label
 * @returns {string[]}
 */
function toLines(label) {
  return Array.isArray(label) ? label : [label];
}

/**
 * Calculate node dimensions from its label.
 * @param {string[]} lines
 * @returns {{ width: number, height: number }}
 */
function nodeDimensions(lines) {
  const longest = Math.max(...lines.map((l) => l.length));
  const width = Math.max(100, Math.min(180, longest * 9 + 24));
  const height = lines.length === 1 ? 36 : 36 + (lines.length - 1) * 18;
  return { width, height };
}

/**
 * Generate a flow-diagram SVG string from structured data.
 *
 * @param {object} data - Diagram definition (see task spec for schema)
 * @returns {string} Complete SVG markup
 */
export function generateFlow(data) {
  const { id, direction = 'LR', nodes, edges, groups = [] } = data;

  // --- 1. Build dagre graph ---
  const g = new dagre.graphlib.Graph();
  g.setGraph({ rankdir: direction, nodesep: 25, ranksep: 60, edgesep: 15 });
  g.setDefaultEdgeLabel(() => ({}));

  // Map for quick lookup
  const nodeMap = new Map();
  for (const n of nodes) {
    const lines = toLines(n.label);
    const { width, height } = nodeDimensions(lines);
    g.setNode(n.id, { width, height });
    nodeMap.set(n.id, { ...n, lines, width, height });
  }

  for (const e of edges) {
    g.setEdge(e.from, e.to);
  }

  dagre.layout(g);

  // --- 2. Compute viewBox ---
  const graphInfo = g.graph();
  const pad = 40;
  const svgW = Math.ceil(graphInfo.width) + pad * 2;
  const svgH = Math.ceil(graphInfo.height) + pad * 2;

  // Offset so that dagre coordinates (centered around width/2) map to padded canvas
  const ox = pad;
  const oy = pad;

  // --- 3. Build highlight set (nodes that are in a highlight group) ---
  const highlightNodes = new Set();
  for (const grp of groups) {
    if (grp.style === 'highlight') {
      for (const nid of grp.nodes) highlightNodes.add(nid);
    }
  }

  // --- 4. Render groups (behind nodes) ---
  const groupsSvg = groups.map((grp) => {
    // Bounding box from member nodes
    let minX = Infinity, minY = Infinity, maxX = -Infinity, maxY = -Infinity;
    for (const nid of grp.nodes) {
      const layout = g.node(nid);
      const info = nodeMap.get(nid);
      if (!layout || !info) continue;
      const nx = layout.x - info.width / 2;
      const ny = layout.y - info.height / 2;
      minX = Math.min(minX, nx);
      minY = Math.min(minY, ny);
      maxX = Math.max(maxX, nx + info.width);
      maxY = Math.max(maxY, ny + info.height);
    }
    const gpad = 12;
    const rx = ox + minX - gpad;
    const ry = oy + minY - gpad;
    const rw = maxX - minX + gpad * 2;
    const rh = maxY - minY + gpad * 2;

    const isHighlight = grp.style === 'highlight';
    const rectAttrs = isHighlight
      ? `stroke="#E67E22" stroke-dasharray="5 5" fill="none" stroke-width="2"`
      : `stroke="#1e293b" fill="rgba(30,41,59,0.3)" stroke-width="1"`;

    let labelSvg = '';
    if (grp.label) {
      labelSvg = `<text x="${rx + rw / 2}" y="${ry - 4}" text-anchor="middle" fill="#94a3b8" font-size="10" font-family="system-ui, -apple-system, sans-serif">${esc(grp.label)}</text>`;
    }

    return `${labelSvg}\n    <rect x="${rx}" y="${ry}" width="${rw}" height="${rh}" rx="6" ${rectAttrs}/>`;
  }).join('\n    ');

  // --- 5. Render nodes ---
  const nodesSvg = nodes.map((n) => {
    const layout = g.node(n.id);
    const info = nodeMap.get(n.id);
    const nx = ox + layout.x - info.width / 2;
    const ny = oy + layout.y - info.height / 2;

    const useGlow = highlightNodes.has(n.id);
    const glowFilter = useGlow ? getRoleGlow(n.role) : 'none';
    const filterAttr = glowFilter !== 'none' ? ` filter="${glowFilter}"` : '';

    const rectSvg = `<rect x="${nx}" y="${ny}" width="${info.width}" height="${info.height}" rx="10" fill="${getRoleGradient(n.role)}" filter="url(#shadow)"/>`;

    // Text lines centered in the rect
    const textLines = info.lines.map((line, i) => {
      const tx = nx + info.width / 2;
      const totalTextH = info.lines.length * 16;
      const startY = ny + info.height / 2 - totalTextH / 2 + 12; // 12 ≈ baseline offset for 12px font
      const ty = startY + i * 16;
      return `<text x="${tx}" y="${ty}" text-anchor="middle" fill="#fff" font-size="12" font-weight="600" font-family="system-ui, -apple-system, sans-serif">${esc(line)}</text>`;
    }).join('\n      ');

    if (filterAttr) {
      return `<g${filterAttr}>\n      ${rectSvg}\n      ${textLines}\n    </g>`;
    }
    return `${rectSvg}\n      ${textLines}`;
  }).join('\n    ');

  // --- 6. Render edges ---
  // Build edge style lookup
  const edgeStyleMap = new Map();
  for (const e of edges) {
    edgeStyleMap.set(`${e.from}->${e.to}`, e.style || 'solid');
  }

  const edgesSvg = g.edges().map((e) => {
    const edgeData = g.edge(e);
    const pts = edgeData.points;
    const key = `${e.v}->${e.w}`;
    const style = edgeStyleMap.get(key) || 'solid';

    let d;
    if (pts.length < 2) return '';
    if (pts.length === 2) {
      d = `M ${ox + pts[0].x},${oy + pts[0].y} L ${ox + pts[1].x},${oy + pts[1].y}`;
    } else {
      // Line segments through all points
      d = `M ${ox + pts[0].x},${oy + pts[0].y}`;
      for (let i = 1; i < pts.length; i++) {
        d += ` L ${ox + pts[i].x},${oy + pts[i].y}`;
      }
    }

    const dashAttr = style === 'dashed' ? ' stroke-dasharray="6 4"' : '';
    return `<path d="${d}" stroke="#64748b" stroke-width="2" fill="none" stroke-linecap="round"${dashAttr} marker-end="url(#arrow)"/>`;
  }).join('\n    ');

  // --- 7. Assemble SVG ---
  return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${svgW} ${svgH}" role="img" aria-label="${esc(id)}">
  ${getSvgDefs()}
  <rect width="${svgW}" height="${svgH}" fill="#0f172a" rx="16"/>
  <!-- Groups -->
  ${groupsSvg}
  <!-- Edges -->
  ${edgesSvg}
  <!-- Nodes -->
  ${nodesSvg}
</svg>`;
}
