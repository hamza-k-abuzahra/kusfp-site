// Doodle-style repeating page background (like a chat wallpaper), drawn in faint warm lines on a stone-cream base.
// Symbols of resistance and resilience: watermelon, olive branch, key of return, dove, Dome of the Rock,
// anemone flower, keffiyeh wave, olive tree.

export const PAGE_BG_COLOR = '#f3ebdd'; // warm "Jerusalem stone" cream
const INK = '#4a3a28';                  // warm brown line color
const INK_OPACITY = 0.15;               // raise/lower to make the pattern stronger/fainter
const TILE = 170;                       // size of one repeating tile in px (smaller = denser)

// Each symbol is drawn around (0,0) and spans roughly 50px (fits a "-30 -30 60 60" viewBox).
// Fills use currentColor so the symbols can also be reused elsewhere (e.g. the hero cards).
export const SYMBOLS: Record<string, string> = {
  watermelon: `<path d="M-20 0 A20 20 0 0 0 20 0 Z"/><path d="M-14.5 0 A14.5 14.5 0 0 0 14.5 0"/>
    <g fill="currentColor" stroke="none"><ellipse cx="-6" cy="5" rx="1.6" ry="2.4"/><ellipse cx="0" cy="8" rx="1.6" ry="2.4"/><ellipse cx="6" cy="5" rx="1.6" ry="2.4"/></g>`,
  olive: `<path d="M-26 8 Q0 2 26 -8"/>
    <ellipse cx="-14" cy="0" rx="7" ry="3" transform="rotate(-35 -14 0)"/><ellipse cx="-10" cy="11" rx="7" ry="3" transform="rotate(25 -10 11)"/>
    <ellipse cx="4" cy="-6" rx="7" ry="3" transform="rotate(-40 4 -6)"/><ellipse cx="8" cy="6" rx="7" ry="3" transform="rotate(20 8 6)"/>
    <ellipse cx="20" cy="-14" rx="6" ry="2.6" transform="rotate(-45 20 -14)"/><circle cx="22" cy="0" r="3"/>`,
  key: `<circle cx="-16" cy="0" r="8"/><circle cx="-16" cy="0" r="3"/><path d="M-8 0 H20 M14 0 V7 M20 0 V9 M8 0 V5"/>`,
  dove: `<path d="M-20 6 Q-6 -2 6 2 L18 -4 L13 6 Q2 14 -20 6 Z"/><path d="M-6 3 Q0 -16 14 -16 Q8 -4 3 4"/>`,
  dome: `<path d="M-18 14 H18 V2 H-18 Z"/><path d="M-11 2 Q-11 -15 0 -17 Q11 -15 11 2"/><path d="M0 -17 V-24"/><path d="M-2.5 -27 A3 3 0 1 0 2.5 -27"/>
    <path d="M-12 8 V12 M-6 8 V12 M0 8 V12 M6 8 V12 M12 8 V12"/>`,
  anemone: `<circle cx="0" cy="-8" r="6"/><circle cx="7.6" cy="-2.5" r="6"/><circle cx="4.7" cy="6.5" r="6"/><circle cx="-4.7" cy="6.5" r="6"/><circle cx="-7.6" cy="-2.5" r="6"/>
    <circle cx="0" cy="0" r="3" fill="currentColor"/>`,
  keffiyeh: `<path d="M-24 0 q4 -7 8 0 t8 0 t8 0 t8 0 t8 0 t8 0"/><path d="M-24 8 h48 M-24 -8 h48" stroke-dasharray="3 4"/>`,
  tree: `<path d="M0 18 V2 M0 8 L-6 2 M0 6 L6 -1"/><path d="M-16 0 Q-20 -12 -8 -14 Q-4 -24 6 -18 Q18 -20 17 -8 Q22 0 12 3 Q0 6 -10 4 Q-17 4 -16 0 Z"/><path d="M-12 18 H12"/>`,
  sparkle: `<path d="M0 -4 V4 M-4 0 H4"/>`,
  dot: `<circle cx="0" cy="0" r="1.6" fill="currentColor" stroke="none"/>`,
};

// [symbol, x, y, rotation, scale] — a jittered 4x4 grid so no symbol sits next to itself, plus small fillers in the gaps.
const PLACEMENTS: [string, number, number, number, number][] = [
  ['watermelon', 38, 36, -18, 0.85], ['olive', 108, 30, 12, 0.8], ['key', 178, 40, 35, 0.85], ['dove', 246, 32, -8, 0.85],
  ['dome', 30, 110, 0, 0.85], ['anemone', 102, 104, 15, 0.9], ['keffiyeh', 174, 100, -10, 0.85], ['tree', 244, 108, 0, 0.85],
  ['key', 36, 176, -30, 0.85], ['dove', 106, 178, 10, 0.85], ['watermelon', 176, 172, 20, 0.85], ['olive', 246, 178, -25, 0.8],
  ['anemone', 34, 246, -10, 0.9], ['tree', 104, 244, 0, 0.85], ['dome', 176, 248, 0, 0.85], ['keffiyeh', 246, 240, 15, 0.85],
  ['sparkle', 72, 70, 0, 1], ['dot', 142, 68, 0, 1], ['sparkle', 210, 72, 45, 1], ['dot', 70, 142, 0, 1],
  ['sparkle', 140, 140, 45, 1], ['dot', 212, 140, 0, 1], ['sparkle', 70, 212, 0, 1], ['dot', 140, 210, 0, 1],
  ['sparkle', 212, 210, 0, 1], ['dot', 4, 72, 0, 1], ['dot', 140, 4, 0, 1],
];

const PATTERN_SVG = `<svg xmlns="http://www.w3.org/2000/svg" width="${TILE}" height="${TILE}" viewBox="0 0 280 280">
<g color="${INK}" fill="none" stroke="${INK}" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" opacity="${INK_OPACITY}">
${PLACEMENTS.map(([s, x, y, r, k]) => `<g transform="translate(${x} ${y}) rotate(${r}) scale(${k})">${SYMBOLS[s]}</g>`).join('\n')}
</g>
</svg>`;

export const PATTERN_URL = `url("data:image/svg+xml,${encodeURIComponent(PATTERN_SVG)}")`;
export const PATTERN_SIZE = `${TILE}px ${TILE}px`;
