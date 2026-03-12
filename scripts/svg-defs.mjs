/**
 * Shared SVG <defs> module for Level Up AI diagram generation.
 * Provides gradients, glow filters, shadow filter, and arrow marker
 * used across all SVG templates (skill-tree, flow, sequence).
 */

/**
 * Returns the full <defs> block as an XML string.
 * @returns {string}
 */
export function getSvgDefs() {
  return `<defs>
  <!-- Gradients -->
  <linearGradient id="grad-input" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#5B9FE6"/>
    <stop offset="100%" stop-color="#4A90D9"/>
  </linearGradient>
  <linearGradient id="grad-process" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#43C67A"/>
    <stop offset="100%" stop-color="#27AE60"/>
  </linearGradient>
  <linearGradient id="grad-output" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#F0944D"/>
    <stop offset="100%" stop-color="#E67E22"/>
  </linearGradient>
  <linearGradient id="grad-warning" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#EF6B6B"/>
    <stop offset="100%" stop-color="#E74C3C"/>
  </linearGradient>
  <linearGradient id="grad-neutral" x1="0" y1="0" x2="0" y2="1">
    <stop offset="0%" stop-color="#64748b"/>
    <stop offset="100%" stop-color="#475569"/>
  </linearGradient>

  <!-- Glow filters -->
  <filter id="glow-blue" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="4" result="blur"/>
    <feFlood flood-color="#4A90D9" flood-opacity="0.3"/>
    <feComposite in2="blur" operator="in"/>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="glow-green" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="4" result="blur"/>
    <feFlood flood-color="#27AE60" flood-opacity="0.3"/>
    <feComposite in2="blur" operator="in"/>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="glow-orange" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="4" result="blur"/>
    <feFlood flood-color="#E67E22" flood-opacity="0.3"/>
    <feComposite in2="blur" operator="in"/>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>
  <filter id="glow-red" x="-20%" y="-20%" width="140%" height="140%">
    <feGaussianBlur stdDeviation="4" result="blur"/>
    <feFlood flood-color="#E74C3C" flood-opacity="0.3"/>
    <feComposite in2="blur" operator="in"/>
    <feMerge><feMergeNode/><feMergeNode in="SourceGraphic"/></feMerge>
  </filter>

  <!-- Shadow filter -->
  <filter id="shadow">
    <feDropShadow dx="0" dy="2" stdDeviation="3" flood-color="#000" flood-opacity="0.15"/>
  </filter>

  <!-- Arrow marker -->
  <marker id="arrow" viewBox="0 0 10 7" refX="10" refY="3.5" markerWidth="8" markerHeight="6" orient="auto-start-reverse">
    <path d="M 0 0 L 10 3.5 L 0 7 z" fill="#64748b"/>
  </marker>
</defs>`;
}

/**
 * Returns the gradient ID for a given role.
 * @param {string} role - One of: input, process, output, warning, neutral
 * @returns {string} Gradient ID (e.g. "url(#grad-input)")
 */
export function getRoleGradient(role) {
  const map = {
    input: 'grad-input',
    process: 'grad-process',
    output: 'grad-output',
    warning: 'grad-warning',
    neutral: 'grad-neutral',
  };
  const id = map[role] ?? 'grad-neutral';
  return `url(#${id})`;
}

/**
 * Returns the glow filter ID for a given role.
 * @param {string} role - One of: input, process, output, warning, neutral
 * @returns {string} Filter ID (e.g. "url(#glow-blue)")
 */
export function getRoleGlow(role) {
  const map = {
    input: 'glow-blue',
    process: 'glow-green',
    output: 'glow-orange',
    warning: 'glow-red',
    neutral: null,
  };
  const id = map[role];
  return id ? `url(#${id})` : 'none';
}
