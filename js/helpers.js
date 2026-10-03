/* ==========================================================
   HELPER UNTUK BADGE & GAMBAR
   ========================================================== */
const del = (t) => `<span class="b-del">${t}</span>`;
const add = (t) => `<span class="b-add">${t}</span>`;
const TO = `<span class="b-arrow">➔</span>`;
const X = `<span class="b-x">✕</span>`;
const DOT = `<span class="b-dot">•</span>`;
const AKHIR = `<span class="b-note">(akhir)</span>`;
const AWAL = `<span class="b-note">(awal)</span>`;

const STAR_PATH = "M 0 -10 Q 2 -2 10 0 Q 2 2 0 10 Q -2 2 -10 0 Q -2 -2 0 -10 Z";

// Bintang berkelip (animasi)
function spark(x, y, s = 1, delay = 0, color = "#fde68a") {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path class="a-twinkle" style="animation-delay:${delay}s" d="${STAR_PATH}" fill="${color}" /></g>`;
}

// Bintang diam (dipakai di dalam grup yang sudah beranimasi)
function star(x, y, s = 1, color = "#fde047") {
  return `<g transform="translate(${x} ${y}) scale(${s})"><path d="${STAR_PATH}" fill="${color}" /></g>`;
}

// Tetes hujan / air yang jatuh
function drop(x, y, delay = 0, fall = 60, color = "#7dd3fc") {
  return `<path class="a-fall" style="--y:${fall}px; animation-delay:${delay}s" d="M ${x} ${y} Q ${x - 6} ${y + 12} ${x} ${y + 16} Q ${x + 6} ${y + 12} ${x} ${y} Z" fill="${color}" />`;
}

// Kartu huruf tambahan (misal "+ B")
function letterSvg(ch) {
  return `
    <svg width="100%" height="100%" viewBox="0 0 140 180" xmlns="http://www.w3.org/2000/svg">
      <ellipse class="a-shadow" style="--d:1.4s" cx="70" cy="152" rx="40" ry="10" fill="rgba(0,0,0,0.3)" />
      <g class="a-bob" style="--d:1.4s; --y:-10px">
        <circle cx="70" cy="82" r="48" fill="#0f172a" stroke="#fbbf24" stroke-width="6" />
        <text x="70" y="${ch.length > 1 ? 99 : 102}" text-anchor="middle" fill="#fbbf24" font-size="${ch.length > 1 ? 44 : 58}" font-weight="900" font-family="system-ui, sans-serif">${ch}</text>
      </g>
      ${spark(112, 40, 0.9, 0)}
      ${spark(28, 130, 0.6, 0.7)}
    </svg>
  `;
}

// Bungkus isi gambar menjadi <svg> (ukuran standar 240x190)
function art(content, viewBox = "0 0 240 190") {
  return `<svg width="100%" height="100%" viewBox="${viewBox}" xmlns="http://www.w3.org/2000/svg">${content}</svg>`;
}
