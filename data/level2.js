/* ==========================================================
   LEVEL 2 - DUA SAMPAI TIGA GAMBAR PER SOAL (LEBIH MENANTANG)
   Kartu: { svg, badgeHtml } | { letter: "B" } | { operator: "+" }
   ========================================================== */

// Pakai ulang gambar dari Level 1 (berdasarkan nama tokoh & urutan kartu)
const fromLevel1 = (name, cardIndex = 0) => LEVEL1.find(q => q.name === name).cards[cardIndex].svg;

/* ---------- Gambar benda baru (viewBox 240x190) ---------- */
const ART = {
  bola: art(`
    <defs>
      <clipPath id="l2BolaClip"><circle cx="120" cy="92" r="55" /></clipPath>
      <radialGradient id="l2BolaG" cx="38%" cy="32%" r="75%">
        <stop offset="0%" stop-color="#ffffff" />
        <stop offset="70%" stop-color="#e2e8f0" />
        <stop offset="100%" stop-color="#94a3b8" />
      </radialGradient>
    </defs>
    <ellipse class="a-hopshadow" style="--d:1.2s" cx="120" cy="166" rx="55" ry="10" fill="rgba(0,0,0,0.3)" />
    <g class="a-hop vb" style="--d:1.2s; transform-origin:120px 147px">
      <g class="a-spin" style="--d:2.4s">
        <circle cx="120" cy="92" r="55" fill="url(#l2BolaG)" stroke="#334155" stroke-width="2" />
        <g clip-path="url(#l2BolaClip)" fill="#1e293b">
          <polygon points="120,76 135.2,87.1 129.4,104.9 110.6,104.9 104.8,87.1" />
          <circle cx="120" cy="46" r="14" />
          <circle cx="163.7" cy="77.8" r="14" />
          <circle cx="147" cy="129.2" r="14" />
          <circle cx="93" cy="129.2" r="14" />
          <circle cx="76.3" cy="77.8" r="14" />
        </g>
        <path d="M 120 76 L 120 60 M 135.2 87.1 L 150 82 M 129.4 104.9 L 138 118 M 110.6 104.9 L 102 118 M 104.8 87.1 L 90 82" stroke="#1e293b" stroke-width="2.5" />
      </g>
    </g>
  `),

  nanas: art(`
    <defs>
      <radialGradient id="l2NanasG" cx="40%" cy="40%" r="70%">
        <stop offset="0%" stop-color="#fde047" />
        <stop offset="60%" stop-color="#f59e0b" />
        <stop offset="100%" stop-color="#b45309" />
      </radialGradient>
      <clipPath id="l2NanasClip"><ellipse cx="120" cy="115" rx="40" ry="50" /></clipPath>
    </defs>
    <ellipse cx="120" cy="170" rx="55" ry="9" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:4deg; --d:1.4s; transform-origin:120px 165px">
      <g class="a-rock ob" style="--a:7deg; --d:0.9s">
        <path d="M 120 72 L 92 32 L 112 62 L 102 16 L 120 56 L 138 16 L 128 62 L 148 32 Z" fill="#16a34a" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
        <path d="M 120 70 L 120 24" stroke="#22c55e" stroke-width="3" />
      </g>
      <ellipse cx="120" cy="115" rx="40" ry="50" fill="url(#l2NanasG)" stroke="#92400e" stroke-width="2" />
      <g clip-path="url(#l2NanasClip)" stroke="#92400e" stroke-width="2" opacity="0.7">
        <path d="M 60 80 L 160 180 M 60 110 L 140 190 M 80 60 L 180 160 M 100 50 L 180 130 M 180 80 L 80 180 M 180 110 L 100 190 M 160 60 L 60 160 M 140 50 L 60 130" />
      </g>
    </g>
  `),

  mata: art(`
    <defs>
      <clipPath id="l2MataClip"><path d="M 25 95 Q 120 15 215 95 Q 120 175 25 95 Z" /></clipPath>
    </defs>
    <ellipse cx="120" cy="168" rx="70" ry="8" fill="rgba(0,0,0,0.25)" />
    <g class="a-blink" style="--d:3s">
      <path d="M 25 95 Q 120 15 215 95 Q 120 175 25 95 Z" fill="#f8fafc" />
      <g clip-path="url(#l2MataClip)">
        <g class="a-driftx" style="--d:3.2s">
          <circle cx="120" cy="95" r="33" fill="#0ea5e9" stroke="#0369a1" stroke-width="4" />
          <circle cx="120" cy="95" r="15" fill="#0f172a" />
          <circle cx="130" cy="84" r="7" fill="#ffffff" />
        </g>
      </g>
      <path d="M 25 95 Q 120 15 215 95 Q 120 175 25 95 Z" fill="none" stroke="#1e293b" stroke-width="4" />
      <path d="M 50 72 L 38 54 M 80 56 L 72 36 M 120 50 L 120 28 M 160 56 L 168 36 M 190 72 L 202 54" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />
    </g>
  `),

  bus: art(`
    <ellipse cx="120" cy="170" rx="105" ry="8" fill="rgba(0,0,0,0.3)" />
    <path class="a-flicker" style="--d:0.6s" d="M 4 92 L 20 92 M 0 110 L 18 110 M 6 128 L 20 128" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
    <g class="a-bob" style="--d:0.25s; --y:-2px">
      <rect x="26" y="50" width="196" height="98" rx="16" fill="#facc15" stroke="#a16207" stroke-width="3" />
      <rect x="27" y="118" width="194" height="10" fill="#ef4444" />
      <rect x="40" y="62" width="34" height="32" rx="5" fill="#bae6fd" stroke="#a16207" stroke-width="2" />
      <rect x="82" y="62" width="34" height="32" rx="5" fill="#bae6fd" stroke="#a16207" stroke-width="2" />
      <rect x="124" y="62" width="34" height="32" rx="5" fill="#bae6fd" stroke="#a16207" stroke-width="2" />
      <rect x="166" y="62" width="24" height="72" rx="4" fill="#93c5fd" stroke="#a16207" stroke-width="2" />
      <line x1="178" y1="62" x2="178" y2="134" stroke="#a16207" stroke-width="2" />
      <rect x="196" y="62" width="20" height="44" rx="5" fill="#bae6fd" stroke="#a16207" stroke-width="2" />
      <circle cx="214" cy="134" r="5" fill="#fef9c3" />
    </g>
    <g class="a-spin" style="--d:0.8s">
      <circle cx="70" cy="148" r="19" fill="#1e293b" stroke="#475569" stroke-width="3" />
      <circle cx="70" cy="148" r="7" fill="#94a3b8" />
      <path d="M 70 134 L 70 162 M 56 148 L 84 148" stroke="#94a3b8" stroke-width="3" />
    </g>
    <g class="a-spin" style="--d:0.8s">
      <circle cx="176" cy="148" r="19" fill="#1e293b" stroke="#475569" stroke-width="3" />
      <circle cx="176" cy="148" r="7" fill="#94a3b8" />
      <path d="M 176 134 L 176 162 M 162 148 L 190 148" stroke="#94a3b8" stroke-width="3" />
    </g>
  `),

  rusa: art(`
    <ellipse cx="125" cy="172" rx="80" ry="8" fill="rgba(0,0,0,0.3)" />
    <path d="M 92 120 L 88 166 M 108 124 L 110 166 M 150 124 L 146 166 M 166 120 L 170 166" stroke="#78350f" stroke-width="8" stroke-linecap="round" />
    <g class="a-rock vb" style="--a:18deg; --d:0.5s; transform-origin:180px 98px">
      <path d="M 180 98 Q 198 88 194 104 Q 188 108 180 102 Z" fill="#fef3c7" />
    </g>
    <ellipse cx="130" cy="108" rx="52" ry="26" fill="#b45309" />
    <ellipse cx="130" cy="120" rx="40" ry="11" fill="#fde68a" opacity="0.6" />
    <circle cx="115" cy="98" r="4" fill="#fef3c7" />
    <circle cx="132" cy="93" r="3.5" fill="#fef3c7" />
    <circle cx="150" cy="99" r="4" fill="#fef3c7" />
    <circle cx="125" cy="107" r="3" fill="#fef3c7" />
    <g class="a-rock vb" style="--a:5deg; --d:1.6s; transform-origin:92px 104px">
      <path d="M 82 110 L 70 60 L 92 58 L 104 100 Z" fill="#b45309" />
      <path d="M 70 42 L 66 18 L 56 6 M 66 18 L 78 8 M 68 28 L 58 22 M 80 42 L 88 20 L 84 6 M 88 20 L 100 12 M 85 30 L 97 26" stroke="#78350f" stroke-width="4" fill="none" stroke-linecap="round" />
      <ellipse cx="88" cy="48" rx="11" ry="5" fill="#92400e" transform="rotate(-30 88 48)" />
      <ellipse cx="66" cy="56" rx="22" ry="15" fill="#b45309" />
      <ellipse cx="46" cy="62" rx="11" ry="8" fill="#92400e" />
      <circle cx="39" cy="60" r="4" fill="#1e293b" />
      <g class="a-blink" style="--d:3.5s"><circle cx="66" cy="52" r="3.5" fill="#0f172a" /></g>
    </g>
  `),

  benang: art(`
    <defs>
      <linearGradient id="l2BenangG" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stop-color="#991b1b" />
        <stop offset="45%" stop-color="#f87171" />
        <stop offset="100%" stop-color="#991b1b" />
      </linearGradient>
    </defs>
    <ellipse cx="115" cy="168" rx="70" ry="9" fill="rgba(0,0,0,0.3)" />
    <path class="a-draw" style="--len:260; --d:2.2s" d="M 148 100 C 185 100, 200 130, 185 150 C 172 166, 210 170, 225 150" stroke="#ef4444" stroke-width="4" fill="none" stroke-linecap="round" />
    <g class="a-rock vb" style="--a:3deg; --d:1.2s; transform-origin:110px 160px">
      <ellipse cx="110" cy="152" rx="48" ry="12" fill="#b45309" stroke="#78350f" stroke-width="2" />
      <rect x="72" y="50" width="76" height="100" fill="url(#l2BenangG)" />
      <path d="M 72 62 L 148 58 M 72 76 L 148 72 M 72 90 L 148 86 M 72 104 L 148 100 M 72 118 L 148 114 M 72 132 L 148 128 M 72 146 L 148 142" stroke="#7f1d1d" stroke-width="1.5" opacity="0.6" />
      <ellipse cx="110" cy="48" rx="48" ry="12" fill="#d97706" stroke="#78350f" stroke-width="2" />
      <ellipse cx="110" cy="48" rx="10" ry="3" fill="#78350f" />
    </g>
  `),

  nasi: art(`
    <ellipse cx="120" cy="172" rx="70" ry="8" fill="rgba(0,0,0,0.3)" />
    <path class="a-rise" style="--d:2.4s" d="M 95 46 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <path class="a-rise" style="--d:2.4s; animation-delay:0.8s" d="M 120 40 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <path class="a-rise" style="--d:2.4s; animation-delay:1.6s" d="M 145 46 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M 45 105 C 50 52, 190 52, 195 105 Z" fill="#f8fafc" stroke="#e2e8f0" stroke-width="2" />
    <g fill="#cbd5e1">
      <ellipse cx="80" cy="88" rx="4" ry="2" /><ellipse cx="100" cy="74" rx="4" ry="2" /><ellipse cx="125" cy="68" rx="4" ry="2" />
      <ellipse cx="150" cy="78" rx="4" ry="2" /><ellipse cx="170" cy="92" rx="4" ry="2" /><ellipse cx="112" cy="92" rx="4" ry="2" />
      <ellipse cx="140" cy="92" rx="4" ry="2" /><ellipse cx="92" cy="100" rx="4" ry="2" /><ellipse cx="160" cy="100" rx="4" ry="2" />
    </g>
    <path d="M 35 105 L 205 105 Q 200 160 120 162 Q 40 160 35 105 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="3" />
    <path d="M 45 125 Q 120 136 195 125" stroke="#bfdbfe" stroke-width="4" fill="none" />
    <rect x="95" y="158" width="50" height="10" rx="4" fill="#1d4ed8" />
    ${spark(210, 60, 0.8, 0.3)}
  `),

  tangan: art(`
    <ellipse cx="120" cy="182" rx="50" ry="7" fill="rgba(0,0,0,0.3)" />
    <path class="a-flicker" style="--d:1s" d="M 36 40 Q 26 60 36 80 M 204 40 Q 214 60 204 80" stroke="#fde68a" stroke-width="4" fill="none" stroke-linecap="round" />
    <g class="a-rock vb" style="--a:14deg; --d:0.45s; transform-origin:120px 175px">
      <rect x="88" y="150" width="64" height="32" rx="6" fill="#3b82f6" />
      <rect x="72" y="50" width="20" height="62" rx="10" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
      <rect x="95" y="36" width="20" height="74" rx="10" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
      <rect x="118" y="40" width="20" height="70" rx="10" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
      <rect x="141" y="54" width="19" height="58" rx="9.5" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
      <g transform="rotate(-38 62 120)">
        <rect x="52" y="88" width="20" height="56" rx="10" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
      </g>
      <rect x="70" y="88" width="92" height="66" rx="24" fill="#fdba74" stroke="#c2410c" stroke-width="2" />
      <path d="M 95 125 Q 115 118 140 126" stroke="#ea580c" stroke-width="2" fill="none" opacity="0.6" />
    </g>
  `),

  kasur: art(`
    <ellipse cx="125" cy="168" rx="100" ry="8" fill="rgba(0,0,0,0.3)" />
    <text class="a-rise" style="--d:2.4s" x="186" y="50" font-size="24" font-weight="900" fill="#c4b5fd" font-family="system-ui, sans-serif">Z</text>
    <text class="a-rise" style="--d:2.4s; animation-delay:0.8s" x="204" y="34" font-size="18" font-weight="900" fill="#c4b5fd" font-family="system-ui, sans-serif">Z</text>
    <text class="a-rise" style="--d:2.4s; animation-delay:1.6s" x="216" y="20" font-size="13" font-weight="900" fill="#c4b5fd" font-family="system-ui, sans-serif">Z</text>
    <g class="a-squeeze vb" style="--d:2s; transform-origin:125px 150px">
      <path d="M 30 100 L 80 70 L 220 70 L 170 100 Z" fill="#e0f2fe" stroke="#0369a1" stroke-width="2.5" />
      <rect x="30" y="100" width="140" height="50" fill="#bae6fd" stroke="#0369a1" stroke-width="2.5" />
      <path d="M 170 100 L 220 70 L 220 120 L 170 150 Z" fill="#7dd3fc" stroke="#0369a1" stroke-width="2.5" />
      <path d="M 50 104 V 146 M 70 104 V 146 M 90 104 V 146 M 110 104 V 146 M 130 104 V 146 M 150 104 V 146" stroke="#7dd3fc" stroke-width="3" />
      <g fill="#0369a1">
        <circle cx="75" cy="92" r="2.5" /><circle cx="110" cy="92" r="2.5" /><circle cx="145" cy="92" r="2.5" />
        <circle cx="105" cy="78" r="2.5" /><circle cx="140" cy="78" r="2.5" /><circle cx="175" cy="78" r="2.5" />
      </g>
      <path d="M 96 74 Q 94 60 112 58 L 154 58 Q 170 60 168 72 Q 154 80 110 80 Q 98 80 96 74 Z" fill="#ffffff" stroke="#94a3b8" stroke-width="2" />
    </g>
  `),

  yoyo: art(`
    <defs>
      <clipPath id="l2YoyoClip"><rect x="0" y="0" width="240" height="190" /></clipPath>
    </defs>
    <ellipse cx="120" cy="174" rx="45" ry="8" fill="rgba(0,0,0,0.3)" />
    <circle cx="120" cy="10" r="7" fill="none" stroke="#fde68a" stroke-width="3" />
    <g clip-path="url(#l2YoyoClip)">
      <g class="a-bob" style="--d:0.7s; --y:34px">
        <line x1="120" y1="-30" x2="120" y2="70" stroke="#fde68a" stroke-width="3" />
        <g class="a-spin" style="--d:0.6s">
          <circle cx="120" cy="92" r="40" fill="#ef4444" stroke="#b91c1c" stroke-width="3" />
          <circle cx="120" cy="92" r="26" fill="none" stroke="#fecaca" stroke-width="5" stroke-dasharray="14 10" />
          <circle cx="120" cy="92" r="9" fill="#fef08a" stroke="#ca8a04" stroke-width="2" />
        </g>
      </g>
    </g>
  `),

  susu: art(`
    <ellipse cx="125" cy="170" rx="90" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:3deg; --d:1.4s; transform-origin:100px 165px">
      <rect x="60" y="70" width="70" height="95" fill="#f8fafc" stroke="#64748b" stroke-width="2" />
      <path d="M 130 70 L 150 58 L 150 152 L 130 165 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
      <path d="M 60 70 L 95 40 L 130 70 Z" fill="#e2e8f0" stroke="#64748b" stroke-width="2" />
      <path d="M 95 40 L 115 28 L 150 58 L 130 70 Z" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
      <path d="M 92 42 L 112 30 L 112 22 L 92 34 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
      <path d="M 60 120 Q 78 110 95 120 T 130 120 L 130 165 L 60 165 Z" fill="#3b82f6" />
      <path d="M 95 80 Q 83 98 95 105 Q 107 98 95 80 Z" fill="#3b82f6" />
    </g>
    <path d="M 172 100 L 214 100 L 208 165 L 178 165 Z" fill="rgba(255,255,255,0.12)" stroke="#e2e8f0" stroke-width="2" />
    <path d="M 175 118 L 211 118 L 208 165 L 178 165 Z" fill="#f8fafc" />
    ${drop(193, 70, 0, 40, "#f8fafc")}
  `),

  sampan: art(`
    <defs>
      <clipPath id="l2AirSampan"><rect x="0" y="120" width="240" height="70" /></clipPath>
    </defs>
    <g class="a-bob" style="--d:1.4s; --y:-5px">
      <g class="a-rock vb" style="--a:3deg; --d:1.8s; transform-origin:120px 130px">
        <path d="M 75 105 Q 120 52 165 105 Z" fill="#a16207" stroke="#713f12" stroke-width="2.5" />
        <path d="M 90 102 Q 120 68 150 102 M 105 104 Q 120 84 135 104" stroke="#ca8a04" stroke-width="2" fill="none" />
        <path d="M 20 105 L 220 105 Q 205 145 120 148 Q 35 145 20 105 Z" fill="#92400e" stroke="#451a03" stroke-width="3" />
        <path d="M 28 116 Q 120 124 212 116" stroke="#d97706" stroke-width="3" fill="none" />
        <line x1="188" y1="66" x2="214" y2="156" stroke="#d97706" stroke-width="5" stroke-linecap="round" />
        <ellipse cx="214" cy="158" rx="6" ry="14" fill="#d97706" transform="rotate(-16 214 158)" />
      </g>
    </g>
    <g clip-path="url(#l2AirSampan)">
      <g class="a-wave" style="--w:-60px; --d:1.8s">
        <path d="M -60 145 Q -45 137 -30 145 T 0 145 T 30 145 T 60 145 T 90 145 T 120 145 T 150 145 T 180 145 T 210 145 T 240 145 T 270 145 T 300 145 L 300 190 L -60 190 Z" fill="#0ea5e9" opacity="0.8" />
      </g>
    </g>
  `),

  kue: art(`
    <ellipse cx="120" cy="172" rx="85" ry="8" fill="rgba(0,0,0,0.3)" />
    <ellipse cx="120" cy="160" rx="82" ry="10" fill="#e2e8f0" />
    <rect x="50" y="112" width="140" height="48" rx="8" fill="#f472b6" />
    <path d="M 50 116 L 190 116 L 190 124 Q 180 134 172 124 Q 162 136 152 124 Q 140 134 130 124 Q 118 136 108 124 Q 96 134 86 124 Q 74 136 64 124 Q 56 132 50 124 Z" fill="#fdf2f8" />
    <rect x="75" y="80" width="90" height="34" rx="8" fill="#a78bfa" />
    <path d="M 75 84 L 165 84 L 165 90 Q 156 100 148 90 Q 138 100 128 90 Q 118 100 108 90 Q 98 100 90 90 Q 82 98 75 90 Z" fill="#fdf2f8" />
    <g fill="#facc15">
      <rect x="62" y="140" width="8" height="3" rx="1.5" /><rect x="96" y="146" width="8" height="3" rx="1.5" />
      <rect x="140" y="140" width="8" height="3" rx="1.5" /><rect x="172" y="148" width="8" height="3" rx="1.5" />
      <rect x="100" y="102" width="8" height="3" rx="1.5" /><rect x="138" y="104" width="8" height="3" rx="1.5" />
    </g>
    <rect x="96" y="52" width="8" height="30" rx="2" fill="#38bdf8" />
    <rect x="116" y="48" width="8" height="34" rx="2" fill="#4ade80" />
    <rect x="136" y="52" width="8" height="30" rx="2" fill="#fbbf24" />
    <g class="a-pulse ob" style="--s:1.3; --d:0.3s">
      <path d="M 100 34 Q 93 45 100 50 Q 107 45 100 34 Z" fill="#f59e0b" />
    </g>
    <g class="a-pulse ob" style="--s:1.3; --d:0.3s; animation-delay:0.1s">
      <path d="M 120 30 Q 113 41 120 46 Q 127 41 120 30 Z" fill="#f59e0b" />
    </g>
    <g class="a-pulse ob" style="--s:1.3; --d:0.3s; animation-delay:0.2s">
      <path d="M 140 34 Q 133 45 140 50 Q 147 45 140 34 Z" fill="#f59e0b" />
    </g>
    ${spark(40, 70, 0.8, 0)}
    ${spark(205, 80, 0.7, 0.6)}
  `),

  hati: art(`
    <defs>
      <radialGradient id="l2HatiG" cx="35%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#fda4af" />
        <stop offset="45%" stop-color="#e11d48" />
        <stop offset="100%" stop-color="#881337" />
      </radialGradient>
    </defs>
    <ellipse cx="120" cy="174" rx="55" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-pulse" style="--s:1.12; --d:0.45s">
      <path d="M 120 160 C 40 112, 28 62, 68 44 C 94 33, 114 48, 120 64 C 126 48, 146 33, 172 44 C 212 62, 200 112, 120 160 Z" fill="url(#l2HatiG)" stroke="#9f1239" stroke-width="3" />
      <ellipse cx="80" cy="70" rx="14" ry="8" fill="#ffffff" opacity="0.5" transform="rotate(-35 80 70)" />
    </g>
    ${spark(30, 40, 0.9, 0, "#fda4af")}
    ${spark(212, 50, 0.7, 0.5, "#fda4af")}
    ${spark(205, 140, 0.6, 1, "#fda4af")}
  `),

  sisir: art(`
    <ellipse cx="120" cy="165" rx="95" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-driftx" style="--d:1.6s">
      <g transform="rotate(-12 120 95)">
        <path d="M 40 84 V 132 M 50 84 V 132 M 60 84 V 132 M 70 84 V 132 M 80 84 V 132 M 90 84 V 132 M 100 84 V 132 M 110 84 V 132 M 120 84 V 132 M 130 84 V 132 M 140 84 V 132 M 150 84 V 132 M 160 84 V 132 M 170 84 V 132 M 180 84 V 132 M 190 84 V 132 M 200 84 V 132" stroke="#ec4899" stroke-width="6" stroke-linecap="round" />
        <rect x="30" y="60" width="180" height="28" rx="10" fill="#ec4899" stroke="#9d174d" stroke-width="2" />
        <rect x="42" y="66" width="150" height="5" rx="2.5" fill="#fbcfe8" />
      </g>
    </g>
    ${spark(36, 40, 0.9, 0)}
    ${spark(214, 150, 0.6, 0.7)}
  `),

  lampu: art(`
    <ellipse cx="120" cy="180" rx="40" ry="6" fill="rgba(0,0,0,0.3)" />
    <circle class="a-pulse" style="--s:1.25; --d:0.8s" cx="120" cy="78" r="62" fill="#fde047" opacity="0.18" />
    <path class="a-flicker" style="--d:1.6s" d="M 120 20 L 120 8 M 161 37 L 169.5 28.5 M 178 78 L 190 78 M 62 78 L 50 78 M 79 37 L 70.5 28.5 M 161 119 L 169.5 127.5 M 79 119 L 70.5 127.5" stroke="#fde047" stroke-width="5" stroke-linecap="round" />
    <path d="M 120 30 C 158 30, 172 70, 152 100 C 144 112, 140 120, 140 130 L 100 130 C 100 120, 96 112, 88 100 C 68 70, 82 30, 120 30 Z" fill="#fef9c3" stroke="#ca8a04" stroke-width="3" />
    <path d="M 108 130 L 108 100 Q 114 88 120 100 Q 126 88 132 100 L 132 130" stroke="#f59e0b" stroke-width="3" fill="none" />
    <ellipse cx="104" cy="56" rx="8" ry="14" fill="#ffffff" opacity="0.6" transform="rotate(25 104 56)" />
    <rect x="100" y="130" width="40" height="11" rx="3" fill="#94a3b8" />
    <rect x="102" y="142" width="36" height="11" rx="3" fill="#64748b" />
    <rect x="104" y="154" width="32" height="11" rx="3" fill="#94a3b8" />
    <path d="M 108 166 L 132 166 L 124 174 L 116 174 Z" fill="#475569" />
  `),

  lilin: art(`
    <ellipse cx="120" cy="176" rx="60" ry="7" fill="rgba(0,0,0,0.3)" />
    <path d="M 172 158 Q 198 150 188 134 Q 180 126 168 140" stroke="#ca8a04" stroke-width="6" fill="none" />
    <ellipse cx="120" cy="160" rx="55" ry="12" fill="#ca8a04" stroke="#854d0e" stroke-width="2" />
    <rect x="98" y="70" width="44" height="90" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
    <path d="M 98 72 L 142 72 L 142 86 Q 138 94 134 86 L 134 80 Q 128 100 122 82 Q 112 90 108 80 Q 104 96 98 84 Z" fill="#e2e8f0" />
    <line x1="120" y1="72" x2="120" y2="58" stroke="#1e293b" stroke-width="3" />
    <circle class="a-pulse" style="--s:1.3; --d:0.6s" cx="120" cy="42" r="32" fill="#fde047" opacity="0.2" />
    <g class="a-rock ob" style="--a:7deg; --d:0.35s">
      <path d="M 120 16 Q 102 44 120 60 Q 138 44 120 16 Z" fill="#f59e0b" />
      <path d="M 120 32 Q 111 48 120 58 Q 129 48 120 32 Z" fill="#fef08a" />
    </g>
  `),

  sapi: art(`
    <ellipse cx="125" cy="174" rx="85" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:18deg; --d:0.6s; transform-origin:192px 90px">
      <path d="M 192 90 Q 212 110 206 140" stroke="#f8fafc" stroke-width="4" fill="none" stroke-linecap="round" />
      <circle cx="206" cy="142" r="6" fill="#1e293b" />
    </g>
    <path d="M 88 125 V 164 M 108 128 V 164 M 160 128 V 164 M 178 125 V 164" stroke="#f8fafc" stroke-width="12" stroke-linecap="round" />
    <path d="M 88 162 V 168 M 108 162 V 168 M 160 162 V 168 M 178 162 V 168" stroke="#1e293b" stroke-width="12" />
    <rect x="70" y="72" width="125" height="62" rx="28" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
    <path d="M 100 74 Q 122 70 126 90 Q 116 106 98 96 Z" fill="#1e293b" />
    <ellipse cx="160" cy="110" rx="16" ry="12" fill="#1e293b" />
    <ellipse cx="180" cy="86" rx="9" ry="7" fill="#1e293b" />
    <ellipse cx="150" cy="136" rx="14" ry="8" fill="#f9a8d4" />
    <g class="a-rock vb" style="--a:4deg; --d:1.2s; transform-origin:80px 92px">
      <path d="M 60 60 Q 62 44 74 42 M 44 60 Q 38 46 30 48" stroke="#fde68a" stroke-width="5" fill="none" stroke-linecap="round" />
      <ellipse cx="80" cy="68" rx="12" ry="6" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
      <ellipse cx="52" cy="80" rx="26" ry="22" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
      <ellipse cx="38" cy="95" rx="18" ry="13" fill="#f9a8d4" />
      <circle cx="32" cy="95" r="2.5" fill="#9d174d" />
      <circle cx="44" cy="95" r="2.5" fill="#9d174d" />
      <g class="a-blink" style="--d:3s"><circle cx="58" cy="74" r="4" fill="#0f172a" /></g>
    </g>
  `),

  ikan: art(`
    <defs>
      <linearGradient id="l2IkanG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#fb923c" />
        <stop offset="100%" stop-color="#c2410c" />
      </linearGradient>
    </defs>
    <ellipse cx="120" cy="172" rx="70" ry="7" fill="rgba(0,0,0,0.25)" />
    <circle class="a-rise" style="--d:2s" cx="42" cy="70" r="5" fill="#bae6fd" opacity="0.7" />
    <circle class="a-rise" style="--d:2.4s; animation-delay:0.8s" cx="30" cy="50" r="4" fill="#bae6fd" opacity="0.7" />
    <g class="a-bob" style="--d:1.3s; --y:-8px">
      <path class="a-rock vb" style="--a:14deg; --d:0.4s; transform-origin:170px 95px" d="M 168 95 L 214 60 Q 204 95 214 130 Z" fill="#ea580c" stroke="#9a3412" stroke-width="2" />
      <path d="M 95 62 Q 122 30 150 66 Z" fill="#ea580c" />
      <path d="M 110 128 Q 125 150 140 126 Z" fill="#ea580c" />
      <ellipse cx="115" cy="95" rx="62" ry="38" fill="url(#l2IkanG)" stroke="#9a3412" stroke-width="2" />
      <path d="M 120 75 Q 130 85 120 95 M 136 75 Q 146 85 136 95 M 120 95 Q 130 105 120 115 M 136 95 Q 146 105 136 115 M 152 82 Q 160 92 152 102" stroke="#fdba74" stroke-width="2" fill="none" />
      <path d="M 82 72 Q 95 95 82 118" stroke="#9a3412" stroke-width="2.5" fill="none" />
      <circle cx="68" cy="86" r="8" fill="#ffffff" />
      <circle cx="66" cy="86" r="4" fill="#0f172a" />
      <path d="M 54 102 Q 60 106 66 102" stroke="#9a3412" stroke-width="2" fill="none" />
    </g>
  `),

  mie: art(`
    <ellipse cx="120" cy="174" rx="75" ry="7" fill="rgba(0,0,0,0.3)" />
    <path class="a-rise" style="--d:2.4s" d="M 70 70 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <path class="a-rise" style="--d:2.4s; animation-delay:1.2s" d="M 180 72 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <ellipse cx="120" cy="108" rx="85" ry="11" fill="#fde68a" />
    <path d="M 50 106 Q 60 100 70 106 T 90 106 T 110 106 T 130 106 T 150 106 T 170 106 T 190 106" stroke="#eab308" stroke-width="3" fill="none" />
    <ellipse cx="80" cy="104" rx="12" ry="7" fill="#ffffff" />
    <ellipse cx="80" cy="104" rx="5" ry="4" fill="#facc15" />
    <circle cx="160" cy="104" r="3" fill="#22c55e" /><circle cx="168" cy="108" r="3" fill="#22c55e" /><circle cx="150" cy="109" r="3" fill="#22c55e" />
    <g class="a-bob" style="--d:1.2s; --y:-10px">
      <line x1="152" y1="8" x2="118" y2="70" stroke="#92400e" stroke-width="5" stroke-linecap="round" />
      <line x1="164" y1="12" x2="128" y2="72" stroke="#92400e" stroke-width="5" stroke-linecap="round" />
      <path d="M 118 70 Q 112 85 120 95 Q 127 104 118 116 M 124 72 Q 132 86 124 96 Q 118 104 126 116 M 130 72 Q 124 88 132 98 Q 138 106 130 116" stroke="#facc15" stroke-width="4" fill="none" stroke-linecap="round" />
    </g>
    <path d="M 35 108 L 205 108 Q 200 162 120 164 Q 40 162 35 108 Z" fill="#dc2626" stroke="#7f1d1d" stroke-width="3" />
    <path d="M 48 126 L 60 120 L 72 126 L 84 120 L 96 126 L 108 120 L 120 126 L 132 120 L 144 126 L 156 120 L 168 126 L 180 120 L 192 126" stroke="#fecaca" stroke-width="3" fill="none" />
    <rect x="95" y="160" width="50" height="9" rx="4" fill="#7f1d1d" />
  `),

  ayam: art(`
    <ellipse cx="140" cy="170" rx="65" ry="10" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:8deg; --d:0.9s; transform-origin:88px 120px">
      <path d="M 88 105 Q 70 58 48 70 Q 70 90 82 118 Z" fill="#166534" />
      <path d="M 85 110 Q 55 70 65 115 Q 45 90 75 130 Z" fill="#15803d" />
    </g>
    <path d="M 125 135 L 125 160 L 117 164 M 125 160 L 133 164 M 145 135 L 145 160 L 137 164 M 145 160 L 153 164" stroke="#f59e0b" stroke-width="4" fill="none" stroke-linecap="round" />
    <path d="M 95 120 C 80 80, 160 80, 175 120 C 160 145, 105 145, 95 120 Z" fill="#ea580c" />
    <path class="a-rock vb" style="--a:-8deg; --d:0.9s; transform-origin:112px 106px" d="M 110 106 Q 135 94 152 112 Q 130 130 110 106 Z" fill="#c2410c" />
    <g class="a-rock vb" style="--a:10deg; --d:0.7s; transform-origin:168px 118px">
      <path d="M 160 115 L 180 75 L 195 90 L 175 120 Z" fill="#dc2626" />
      <circle cx="182" cy="72" r="14" fill="#dc2626" />
      <path d="M 172 62 Q 177 45 183 60 Q 190 48 193 62 Z" fill="#ef4444" />
      <ellipse cx="192" cy="86" rx="4" ry="7" fill="#ef4444" />
      <polygon points="196,68 213,73 196,79" fill="#facc15" />
      <circle cx="186" cy="69" r="3.5" fill="#ffffff" />
      <circle cx="187" cy="69" r="2" fill="#0f172a" />
    </g>
  `, "0 0 280 200"),

  timun: art(`
    <defs>
      <linearGradient id="l2TimunG" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stop-color="#4ade80" />
        <stop offset="50%" stop-color="#16a34a" />
        <stop offset="100%" stop-color="#14532d" />
      </linearGradient>
    </defs>
    <ellipse cx="115" cy="168" rx="95" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:4deg; --d:1.5s; transform-origin:100px 150px">
      <g transform="rotate(-18 100 100)">
        <rect x="18" y="78" width="168" height="46" rx="23" fill="url(#l2TimunG)" stroke="#14532d" stroke-width="2" />
        <path d="M 32 90 Q 100 82 176 90" stroke="#bbf7d0" stroke-width="3" fill="none" opacity="0.5" />
        <g fill="#bbf7d0">
          <circle cx="45" cy="100" r="2.5" /><circle cx="70" cy="110" r="2.5" /><circle cx="95" cy="96" r="2.5" />
          <circle cx="120" cy="112" r="2.5" /><circle cx="145" cy="98" r="2.5" /><circle cx="165" cy="110" r="2.5" />
        </g>
        <rect x="182" y="96" width="14" height="9" rx="3" fill="#65a30d" />
      </g>
    </g>
    <g class="a-spin" style="--d:8s">
      <circle cx="194" cy="142" r="28" fill="#bbf7d0" stroke="#15803d" stroke-width="5" />
      <circle cx="194" cy="142" r="14" fill="#dcfce7" />
      <g fill="#86efac">
        <ellipse cx="194" cy="133" rx="2.5" ry="4" /><ellipse cx="203" cy="142" rx="4" ry="2.5" />
        <ellipse cx="194" cy="151" rx="2.5" ry="4" /><ellipse cx="185" cy="142" rx="4" ry="2.5" />
      </g>
    </g>
  `),

  biola: art(`
    <defs>
      <radialGradient id="l2BiolaG" cx="40%" cy="35%" r="70%">
        <stop offset="0%" stop-color="#f59e0b" />
        <stop offset="60%" stop-color="#b45309" />
        <stop offset="100%" stop-color="#78350f" />
      </radialGradient>
    </defs>
    <ellipse cx="120" cy="174" rx="80" ry="7" fill="rgba(0,0,0,0.3)" />
    <g class="a-rise" style="--d:2s"><ellipse cx="204" cy="58" rx="7" ry="5" fill="#fde047" /><path d="M 210 58 V 34 Q 218 38 220 44" stroke="#fde047" stroke-width="3" fill="none" /></g>
    <g class="a-rise" style="--d:2s; animation-delay:1s"><ellipse cx="36" cy="54" rx="7" ry="5" fill="#fde047" /><path d="M 42 54 V 30 Q 50 34 52 40" stroke="#fde047" stroke-width="3" fill="none" /></g>
    <g class="a-rock vb" style="--a:3deg; --d:1.6s; transform-origin:120px 160px">
      <g transform="rotate(-25 120 100)">
        <rect x="114" y="10" width="12" height="64" rx="3" fill="#1e293b" />
        <circle cx="120" cy="8" r="8" fill="#78350f" />
        <path d="M 110 16 L 104 16 M 110 26 L 104 26 M 130 16 L 136 16 M 130 26 L 136 26" stroke="#78350f" stroke-width="4" stroke-linecap="round" />
        <path d="M 120 70 C 150 70, 160 85, 150 100 C 145 108, 145 112, 150 120 C 165 140, 150 165, 120 165 C 90 165, 75 140, 90 120 C 95 112, 95 108, 90 100 C 80 85, 90 70, 120 70 Z" fill="url(#l2BiolaG)" stroke="#451a03" stroke-width="3" />
        <path d="M 104 112 Q 99 124 105 136 M 136 112 Q 141 124 135 136" stroke="#451a03" stroke-width="3" fill="none" />
        <rect x="108" y="128" width="24" height="4" rx="1" fill="#fef3c7" />
        <path d="M 112 140 L 128 140 L 124 162 L 116 162 Z" fill="#1e293b" />
        <path d="M 116 12 V 150 M 119 12 V 150 M 122 12 V 150 M 125 12 V 150" stroke="#e2e8f0" stroke-width="0.8" />
      </g>
    </g>
    <g class="a-saw" style="--d:0.5s">
      <line x1="30" y1="95" x2="215" y2="150" stroke="#78350f" stroke-width="4" stroke-linecap="round" />
      <line x1="34" y1="100" x2="210" y2="153" stroke="#f8fafc" stroke-width="1.5" />
    </g>
  `),

  bor: art(`
    <defs>
      <clipPath id="l2MataBor"><rect x="184" y="71" width="44" height="8" /></clipPath>
    </defs>
    <ellipse cx="120" cy="178" rx="85" ry="7" fill="rgba(0,0,0,0.3)" />
    <path class="a-flicker" style="--d:0.4s" d="M 190 60 Q 206 54 222 60 M 190 90 Q 206 96 222 90" stroke="#e2e8f0" stroke-width="2.5" fill="none" stroke-linecap="round" />
    <g class="a-vibrate" style="--d:0.1s">
      <rect x="184" y="71" width="44" height="8" rx="2" fill="#cbd5e1" />
      <g clip-path="url(#l2MataBor)">
        <g class="a-wave" style="--w:-10px; --d:0.15s">
          <path d="M 180 71 L 186 79 M 190 71 L 196 79 M 200 71 L 206 79 M 210 71 L 216 79 M 220 71 L 226 79 M 230 71 L 236 79" stroke="#64748b" stroke-width="2.5" />
        </g>
      </g>
      <rect x="158" y="61" width="28" height="28" rx="5" fill="#475569" stroke="#1e293b" stroke-width="2" />
      <path d="M 165 61 V 89 M 172 61 V 89 M 179 61 V 89" stroke="#1e293b" stroke-width="2" />
      <rect x="40" y="50" width="122" height="50" rx="20" fill="#f59e0b" stroke="#92400e" stroke-width="3" />
      <rect x="34" y="56" width="20" height="38" rx="8" fill="#1e293b" />
      <path d="M 62 64 V 86 M 70 64 V 86 M 78 64 V 86" stroke="#92400e" stroke-width="3" stroke-linecap="round" />
      <path d="M 80 95 L 122 95 L 114 150 L 76 150 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2" />
      <rect x="116" y="100" width="10" height="20" rx="4" fill="#ef4444" />
      <rect x="66" y="148" width="62" height="22" rx="6" fill="#f59e0b" stroke="#92400e" stroke-width="3" />
    </g>
    ${spark(234, 76, 0.7, 0, "#fde047")}
    ${spark(226, 98, 0.5, 0.4, "#fde047")}
  `),

  handuk: art(`
    <ellipse cx="120" cy="182" rx="60" ry="6" fill="rgba(0,0,0,0.25)" />
    <rect x="28" y="34" width="184" height="8" rx="4" fill="#94a3b8" />
    <circle cx="32" cy="38" r="8" fill="#64748b" />
    <circle cx="208" cy="38" r="8" fill="#64748b" />
    <g class="a-rock vb" style="--a:4deg; --d:1.6s; transform-origin:120px 38px">
      <rect x="72" y="40" width="96" height="80" rx="4" fill="#0d9488" />
      <path d="M 66 40 L 174 40 L 174 150 Q 120 158 66 150 Z" fill="#14b8a6" stroke="#0f766e" stroke-width="2" />
      <rect x="66" y="118" width="108" height="9" fill="#f8fafc" />
      <rect x="66" y="132" width="108" height="4" fill="#f8fafc" />
      <path d="M 72 152 v 9 M 82 153 v 9 M 92 154 v 9 M 102 154 v 9 M 112 155 v 9 M 122 155 v 9 M 132 155 v 9 M 142 154 v 9 M 152 154 v 9 M 162 153 v 9 M 170 152 v 9" stroke="#5eead4" stroke-width="2.5" stroke-linecap="round" />
      <rect x="62" y="31" width="116" height="15" rx="7" fill="#2dd4bf" />
    </g>
    ${drop(100, 162, 0, 18)}
    ${drop(142, 164, 0.7, 16)}
  `),

  piring: art(`
    <ellipse cx="120" cy="164" rx="100" ry="12" fill="rgba(0,0,0,0.3)" />
    <g class="a-hop vb" style="--d:2s; transform-origin:120px 152px">
      <ellipse cx="120" cy="118" rx="100" ry="40" fill="#cbd5e1" />
      <ellipse cx="120" cy="110" rx="100" ry="40" fill="#f8fafc" stroke="#94a3b8" stroke-width="3" />
      <ellipse cx="120" cy="110" rx="86" ry="32" fill="none" stroke="#3b82f6" stroke-width="4" />
      <ellipse cx="120" cy="112" rx="58" ry="20" fill="#e2e8f0" />
      <ellipse cx="86" cy="96" rx="20" ry="5" fill="#ffffff" />
    </g>
    ${spark(50, 50, 1, 0)}
    ${spark(190, 46, 0.8, 0.5)}
    ${spark(214, 112, 0.6, 1)}
  `),

  kaktus: art(`
    <ellipse cx="120" cy="178" rx="55" ry="7" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:4deg; --d:1.4s; transform-origin:120px 125px">
      <path d="M 104 92 L 80 92 Q 68 92 68 80 L 68 56 Q 68 46 78 46 Q 88 46 88 56 L 88 76 L 104 76 Z" fill="#16a34a" stroke="#14532d" stroke-width="2.5" />
      <path d="M 136 80 L 156 80 Q 168 80 168 68 L 168 50 Q 168 40 158 40 Q 148 40 148 50 L 148 64 L 136 64 Z" fill="#16a34a" stroke="#14532d" stroke-width="2.5" />
      <rect x="103" y="30" width="34" height="100" rx="17" fill="#16a34a" stroke="#14532d" stroke-width="2.5" />
      <path d="M 120 38 V 124 M 111 44 V 122 M 129 44 V 122" stroke="#15803d" stroke-width="2" />
      <path d="M 103 50 l -7 -3 M 103 72 l -7 -2 M 137 52 l 7 -3 M 137 98 l 7 -2 M 103 112 l -7 -2 M 68 64 l -7 -2 M 168 60 l 7 -2 M 78 46 l -2 -7 M 158 40 l 2 -7" stroke="#fef9c3" stroke-width="2" stroke-linecap="round" />
      <g class="a-pulse" style="--s:1.2; --d:0.8s">
        <circle cx="120" cy="28" r="10" fill="#f472b6" />
        <circle cx="120" cy="28" r="4" fill="#facc15" />
      </g>
    </g>
    <rect x="76" y="122" width="88" height="14" rx="4" fill="#ea580c" stroke="#7c2d12" stroke-width="2.5" />
    <path d="M 82 136 L 158 136 L 150 174 L 90 174 Z" fill="#c2410c" stroke="#7c2d12" stroke-width="2.5" />
  `),

  daun: art(`
    <defs>
      <linearGradient id="l2DaunG" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#4ade80" />
        <stop offset="60%" stop-color="#16a34a" />
        <stop offset="100%" stop-color="#14532d" />
      </linearGradient>
    </defs>
    <ellipse cx="140" cy="172" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />
    <g class="a-drift" style="--d:3s">
      <path d="M 50 140 C 40 40, 150 20, 230 40 C 210 130, 130 170, 50 140 Z" fill="url(#l2DaunG)" stroke="#22c55e" stroke-width="3" />
      <path d="M 40 155 Q 120 110 230 40" stroke="#86efac" stroke-width="4" fill="none" stroke-linecap="round" />
      <path d="M 100 115 Q 130 90 140 70 M 125 105 Q 155 125 180 120 M 155 85 Q 185 70 195 55" stroke="#86efac" stroke-width="2.5" fill="none" />
      <circle class="a-pulse" style="--s:1.2; --d:0.9s" cx="170" cy="65" r="7" fill="#bae6fd" opacity="0.85" />
    </g>
  `, "0 0 280 200"),

  gigi: art(`
    <ellipse cx="120" cy="176" rx="55" ry="7" fill="rgba(0,0,0,0.3)" />
    <g class="a-hop vb" style="--d:1.6s; transform-origin:120px 166px">
      <path d="M 70 60 C 70 30, 105 28, 120 40 C 135 28, 170 30, 170 60 C 170 90, 160 100, 158 130 C 156 160, 140 165, 134 140 C 130 122, 110 122, 106 140 C 100 165, 84 160, 82 130 C 80 100, 70 90, 70 60 Z" fill="#f8fafc" stroke="#94a3b8" stroke-width="3" />
      <path d="M 84 54 Q 88 42 100 41" stroke="#ffffff" stroke-width="5" fill="none" stroke-linecap="round" />
      <g class="a-blink" style="--d:3s">
        <circle cx="103" cy="74" r="5" fill="#0f172a" />
        <circle cx="137" cy="74" r="5" fill="#0f172a" />
      </g>
      <ellipse cx="93" cy="88" rx="7" ry="4" fill="#fda4af" />
      <ellipse cx="147" cy="88" rx="7" ry="4" fill="#fda4af" />
      <path d="M 106 90 Q 120 102 134 90" stroke="#0f172a" stroke-width="3" fill="none" stroke-linecap="round" />
    </g>
    ${spark(50, 50, 1, 0, "#ffffff")}
    ${spark(196, 64, 0.8, 0.6, "#ffffff")}
    ${spark(190, 140, 0.6, 1.1, "#ffffff")}
  `),

  balon: art(`
    <defs>
      <radialGradient id="l2BalonR" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#fca5a5" />
        <stop offset="50%" stop-color="#ef4444" />
        <stop offset="100%" stop-color="#991b1b" />
      </radialGradient>
      <radialGradient id="l2BalonB" cx="35%" cy="30%" r="75%">
        <stop offset="0%" stop-color="#bae6fd" />
        <stop offset="50%" stop-color="#3b82f6" />
        <stop offset="100%" stop-color="#1e3a8a" />
      </radialGradient>
    </defs>
    <g class="a-bob" style="--d:1.8s; --y:-10px">
      <g class="a-rock vb" style="--a:-6deg; --d:1.9s; transform-origin:110px 180px">
        <path d="M 160 120 Q 150 152 110 180" stroke="#e2e8f0" stroke-width="2" fill="none" />
        <ellipse cx="160" cy="84" rx="32" ry="37" fill="url(#l2BalonB)" />
        <path d="M 155 122 L 165 122 L 160 115 Z" fill="#1e3a8a" />
        <ellipse cx="149" cy="70" rx="7" ry="11" fill="#ffffff" opacity="0.45" />
      </g>
      <g class="a-rock vb" style="--a:5deg; --d:2.2s; transform-origin:110px 180px">
        <path d="M 95 114 Q 85 145 110 180" stroke="#e2e8f0" stroke-width="2" fill="none" />
        <ellipse cx="95" cy="66" rx="40" ry="46" fill="url(#l2BalonR)" />
        <path d="M 89 116 L 101 116 L 95 108 Z" fill="#991b1b" />
        <ellipse cx="81" cy="48" rx="9" ry="14" fill="#ffffff" opacity="0.45" />
      </g>
    </g>
  `),

  pizza: art(`
    <ellipse cx="120" cy="176" rx="80" ry="7" fill="rgba(0,0,0,0.3)" />
    <path class="a-rise" style="--d:2.4s" d="M 90 22 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <path class="a-rise" style="--d:2.4s; animation-delay:1.2s" d="M 150 20 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <g class="a-rock vb" style="--a:4deg; --d:1.4s; transform-origin:120px 164px">
      <path d="M 38 56 Q 120 26 202 56 L 120 162 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
      <path d="M 112 150 Q 113 172 118 164 Q 121 176 125 160 L 127 150 Z" fill="#fbbf24" />
      <circle cx="90" cy="76" r="12" fill="#dc2626" />
      <circle cx="146" cy="72" r="12" fill="#dc2626" />
      <circle cx="120" cy="104" r="11" fill="#dc2626" />
      <circle cx="116" cy="134" r="8" fill="#dc2626" />
      <g fill="#16a34a">
        <rect x="104" y="80" width="7" height="3" rx="1.5" /><rect x="158" y="90" width="7" height="3" rx="1.5" />
        <rect x="72" y="92" width="7" height="3" rx="1.5" /><rect x="132" y="122" width="7" height="3" rx="1.5" />
      </g>
      <path d="M 34 52 Q 120 18 206 52 Q 210 68 198 66 Q 120 38 42 66 Q 30 68 34 52 Z" fill="#c2410c" stroke="#7c2d12" stroke-width="2" />
    </g>
  `),
};

/* ---------- 24 SOAL LEVEL 2 ---------- */
const LEVEL2 = [
  {
    id: 1,
    name: "BOAS",
    formula: "(BOLA - LA) + (NANAS - NAN) = BOAS",
    story: "Pemilik ladang yang kaya dan baik hati di Betlehem. Ia membiarkan Rut memungut jelai di ladangnya, lalu menikahinya. Boas menjadi kakek buyut Raja Daud.",
    verse: "Rut 2:8-12; 4:13, 17",
    hint: "Kisah: Pemilik ladang di Betlehem yang baik hati kepada Rut, lalu menikahinya.",
    cards: [
      { svg: ART.bola, badgeHtml: `${del("LA")} ${X}` },
      { operator: "+" },
      { svg: ART.nanas, badgeHtml: `${del("NAN")} ${X}` }
    ]
  },
  {
    id: 2,
    name: "MATIUS",
    formula: "MATA (A terakhir ➔ I) + (BUS - B) = MATIUS",
    story: "Seorang pemungut cukai yang sedang duduk di rumah cukai ketika Yesus berkata kepadanya, 'Ikutlah Aku.' Ia segera berdiri dan mengikut Yesus, lalu menulis Injil yang pertama dalam Perjanjian Baru.",
    verse: "Matius 9:9",
    hint: "Kisah: Pemungut cukai yang langsung meninggalkan meja cukainya ketika Yesus berkata, 'Ikutlah Aku.'",
    cards: [
      { svg: ART.mata, badgeHtml: `${del("A")}${AKHIR} ${TO} ${add("I")}` },
      { operator: "+" },
      { svg: ART.bus, badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 3,
    name: "RUBEN",
    formula: "(RUSA - SA) + (BENANG - ANG) = RUBEN",
    story: "Anak sulung Yakub. Ketika saudara-saudaranya ingin membunuh Yusuf, Ruben membujuk mereka supaya Yusuf dimasukkan ke dalam sumur saja, karena ia ingin menyelamatkannya.",
    verse: "Kejadian 37:21-22",
    hint: "Kisah: Anak sulung Yakub yang berusaha menyelamatkan Yusuf dari saudara-saudaranya.",
    cards: [
      { svg: ART.rusa, badgeHtml: `${del("SA")} ${X}` },
      { operator: "+" },
      { svg: ART.benang, badgeHtml: `${del("ANG")} ${X}` }
    ]
  },
  {
    id: 4,
    name: "MARKUS",
    formula: "(MARTIL - TIL) + (TIKUS - TI) = MARKUS",
    story: "Disebut juga Yohanes Markus, kemenakan Barnabas. Ia pernah ikut perjalanan misi Paulus dan Barnabas, lalu menjadi pelayan yang berguna bagi Paulus. Ia menulis Injil yang kedua.",
    verse: "Kisah Para Rasul 12:25; Kolose 4:10; 2 Timotius 4:11",
    hint: "Kisah: Penulis Injil kedua, kemenakan Barnabas, yang pernah ikut perjalanan misi Paulus.",
    cards: [
      { svg: fromLevel1("MARTA"), badgeHtml: `${del("TIL")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("TITUS"), badgeHtml: `${del("TI")} ${X}` }
    ]
  },
  {
    id: 5,
    name: "NATAN",
    formula: "(NASI - SI) + (TANGAN - GAN) = NATAN",
    story: "Nabi yang diutus Tuhan untuk menegur Raja Daud dengan cerita tentang orang kaya yang mengambil anak domba milik orang miskin. Natan berkata kepada Daud: 'Engkaulah orang itu!'",
    verse: "2 Samuel 12:1-7",
    hint: "Kisah: Nabi yang menegur Raja Daud dengan perumpamaan anak domba milik orang miskin.",
    cards: [
      { svg: ART.nasi, badgeHtml: `${del("SI")} ${X}` },
      { operator: "+" },
      { svg: ART.tangan, badgeHtml: `${del("GAN")} ${X}` }
    ]
  },
  {
    id: 6,
    name: "LUKAS",
    formula: "(BULU - BU) + (KASUR - UR) = LUKAS",
    story: "Seorang tabib (dokter) yang dikasihi dan teman perjalanan Rasul Paulus. Ia menulis Injil yang ketiga dan Kitab Kisah Para Rasul.",
    verse: "Kolose 4:14; Lukas 1:1-4",
    hint: "Kisah: Seorang tabib, teman Paulus, yang menulis Injil ketiga dan Kisah Para Rasul.",
    cards: [
      { svg: fromLevel1("PAULUS", 2), badgeHtml: `${del("BU")} ${X}` },
      { operator: "+" },
      { svg: ART.kasur, badgeHtml: `${del("UR")} ${X}` }
    ]
  },
  {
    id: 7,
    name: "EZRA",
    formula: "ES (S ➔ Z) + (RAKET - KET) = EZRA",
    story: "Imam dan ahli Taurat yang pulang dari pembuangan di Babel. Ia berdiri di atas mimbar kayu dan membacakan kitab Taurat kepada seluruh bangsa dari pagi sampai tengah hari.",
    verse: "Ezra 7:6, 10; Nehemia 8:1-6",
    hint: "Kisah: Ahli Taurat yang membacakan kitab Taurat dari atas mimbar kayu kepada seluruh bangsa.",
    cards: [
      { svg: fromLevel1("ESAU", 0), badgeHtml: `${del("S")} ${TO} ${add("Z")}` },
      { operator: "+" },
      { svg: fromLevel1("RAHEL"), badgeHtml: `${del("KET")} ${X}` }
    ]
  },
  {
    id: 8,
    name: "NAAMAN",
    formula: "(NANAS - NAS) + (TAMAN - T) = NAAMAN",
    story: "Panglima tentara Aram yang sakit kusta. Atas petunjuk Nabi Elisa, ia mandi tujuh kali di Sungai Yordan, lalu kulitnya pulih kembali seperti kulit seorang anak.",
    verse: "2 Raja-raja 5:1, 10, 14",
    hint: "Kisah: Panglima yang sembuh dari kusta setelah mandi tujuh kali di Sungai Yordan.",
    cards: [
      { svg: ART.nanas, badgeHtml: `${del("NAS")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("HAMAN"), badgeHtml: `${del("T")} ${X}` }
    ]
  },
  {
    id: 9,
    name: "YAKOBUS",
    formula: "PAKU (P ➔ Y, U ➔ O) + BUS = YAKOBUS",
    story: "Nelayan, anak Zebedeus dan saudara Yohanes, yang dipanggil Yesus ketika sedang membereskan jala. Ia termasuk tiga murid terdekat Yesus dan menjadi rasul pertama yang mati syahid.",
    verse: "Markus 1:19-20; Kisah Para Rasul 12:2",
    hint: "Kisah: Anak Zebedeus dan saudara Yohanes, salah satu dari tiga murid terdekat Yesus.",
    cards: [
      { svg: fromLevel1("YAKUB", 0), badgeHtml: `${del("P")} ${TO} ${add("Y")} ${DOT} ${del("U")} ${TO} ${add("O")}` },
      { operator: "+" },
      { svg: ART.bus, badgeHtml: null }
    ]
  },
  {
    id: 10,
    name: "YOSUA",
    formula: "(YOYO - YO) + (SUSU - SU) + A = YOSUA",
    story: "Pemimpin bangsa Israel sesudah Musa. Ia memimpin bangsa itu mengelilingi kota Yerikho selama tujuh hari, lalu tembok kota itu runtuh setelah mereka bersorak.",
    verse: "Yosua 1:1-9; 6:20",
    hint: "Kisah: Pengganti Musa yang memimpin Israel mengelilingi tembok Yerikho sampai runtuh.",
    cards: [
      { svg: ART.yoyo, badgeHtml: `${del("YO")} ${X}` },
      { operator: "+" },
      { svg: ART.susu, badgeHtml: `${del("SU")} ${X}` },
      { operator: "+" },
      { letter: "A" }
    ]
  },
  {
    id: 11,
    name: "SAMUEL",
    formula: "(SAMPAN - PAN) + (KUE - K) + L = SAMUEL",
    story: "Anak Hana yang sejak kecil melayani di rumah Tuhan. Ketika Tuhan memanggilnya pada malam hari, ia menjawab: 'Berbicaralah, sebab hamba-Mu ini mendengar.' Kelak ia mengurapi Saul dan Daud menjadi raja.",
    verse: "1 Samuel 3:10; 16:13",
    hint: "Kisah: Anak kecil yang dipanggil Tuhan pada malam hari dan menjawab, 'Berbicaralah, sebab hamba-Mu ini mendengar.'",
    cards: [
      { svg: ART.sampan, badgeHtml: `${del("PAN")} ${X}` },
      { operator: "+" },
      { svg: ART.kue, badgeHtml: `${del("K")} ${X}` },
      { operator: "+" },
      { letter: "L" }
    ]
  },
  {
    id: 12,
    name: "RAHAB",
    formula: "(RAKET - KET) + (HATI - TI) + B = RAHAB",
    story: "Perempuan di Yerikho yang menyembunyikan dua pengintai Israel di atap rumahnya. Ia menurunkan mereka dengan tali dari jendela, dan keluarganya diselamatkan karena tali kirmizi di jendelanya.",
    verse: "Yosua 2:1-21; Ibrani 11:31",
    hint: "Kisah: Perempuan di Yerikho yang menyembunyikan dua pengintai dan menggantung tali kirmizi di jendelanya.",
    cards: [
      { svg: fromLevel1("RAHEL"), badgeHtml: `${del("KET")} ${X}` },
      { operator: "+" },
      { svg: ART.hati, badgeHtml: `${del("TI")} ${X}` },
      { operator: "+" },
      { letter: "B" }
    ]
  },
  {
    id: 13,
    name: "SILAS",
    formula: "(SISIR - SIR) + (LAMPU - MPU) + S = SILAS",
    story: "Teman pelayanan Rasul Paulus. Ketika dipenjara di Filipi, Paulus dan Silas berdoa dan menyanyikan pujian tengah malam, lalu terjadi gempa bumi dan semua pintu penjara terbuka.",
    verse: "Kisah Para Rasul 16:25-26",
    hint: "Kisah: Teman Paulus yang bernyanyi memuji Tuhan di penjara Filipi pada tengah malam.",
    cards: [
      { svg: ART.sisir, badgeHtml: `${del("SIR")} ${X}` },
      { operator: "+" },
      { svg: ART.lampu, badgeHtml: `${del("MPU")} ${X}` },
      { operator: "+" },
      { letter: "S" }
    ]
  },
  {
    id: 14,
    name: "ELISA",
    formula: "E + (LILIN - LIN) + (SAPI - PI) = ELISA",
    story: "Murid dan pengganti Nabi Elia yang meminta dua bagian dari roh Elia. Ia membuat banyak mukjizat, seperti menyembuhkan Naaman dan menghidupkan kembali anak perempuan Sunem.",
    verse: "2 Raja-raja 2:9-15; 4:32-35",
    hint: "Kisah: Murid Nabi Elia yang meminta dua bagian dari rohnya ketika Elia terangkat ke surga.",
    cards: [
      { letter: "E" },
      { operator: "+" },
      { svg: ART.lilin, badgeHtml: `${del("LIN")} ${X}` },
      { operator: "+" },
      { svg: ART.sapi, badgeHtml: `${del("PI")} ${X}` }
    ]
  },
  {
    id: 15,
    name: "YONATAN",
    formula: "(YOYO - YO) + (NASI - SI) + (TANGAN - GAN) = YONATAN",
    story: "Anak Raja Saul yang menjadi sahabat sejati Daud. Ia mengasihi Daud seperti dirinya sendiri, memberikan jubah dan pedangnya, dan melindungi Daud dari kemarahan ayahnya.",
    verse: "1 Samuel 18:1-4; 20:42",
    hint: "Kisah: Anak Raja Saul yang menjadi sahabat paling setia Daud.",
    cards: [
      { svg: ART.yoyo, badgeHtml: `${del("YO")} ${X}` },
      { operator: "+" },
      { svg: ART.nasi, badgeHtml: `${del("SI")} ${X}` },
      { operator: "+" },
      { svg: ART.tangan, badgeHtml: `${del("GAN")} ${X}` }
    ]
  },
  {
    id: 16,
    name: "MIRYAM",
    formula: "(MIE - E) + R + (AYAM - A awal) = MIRYAM",
    story: "Kakak perempuan Musa yang menjaga bayi Musa di tepi Sungai Nil. Setelah Israel menyeberangi Laut Teberau, ia memimpin para perempuan menari sambil memukul rebana.",
    verse: "Keluaran 2:4-8; 15:20-21",
    hint: "Kisah: Kakak Musa yang menjaga bayi Musa di sungai, lalu menari dengan rebana setelah menyeberangi Laut Teberau.",
    cards: [
      { svg: ART.mie, badgeHtml: `${del("E")} ${X}` },
      { operator: "+" },
      { letter: "R" },
      { operator: "+" },
      { svg: ART.ayam, badgeHtml: `${del("A")}${AWAL} ${X}` }
    ]
  },
  {
    id: 17,
    name: "TIMOTIUS",
    formula: "(TIMUN - UN) + (ROTI - R) + (TIKUS - TIK) = TIMOTIUS",
    story: "Pemuda yang sejak kecil diajar Kitab Suci oleh neneknya Lois dan ibunya Eunike. Ia menjadi rekan sekerja Paulus. Paulus menasihatinya: 'Jangan seorang pun menganggap engkau rendah karena engkau muda.'",
    verse: "1 Timotius 4:12; 2 Timotius 1:5; 3:15",
    hint: "Kisah: Pemuda yang diajar Kitab Suci sejak kecil oleh neneknya Lois dan ibunya Eunike.",
    cards: [
      { svg: ART.timun, badgeHtml: `${del("UN")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("RUT"), badgeHtml: `${del("R")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("TITUS"), badgeHtml: `${del("TIK")} ${X}` }
    ]
  },
  {
    id: 18,
    name: "BILEAM",
    formula: "(BIOLA - OLA) + (LEMON - MON) + (AYAM - AY) = BILEAM",
    story: "Seorang nabi yang dipanggil Raja Balak untuk mengutuk Israel. Di tengah jalan, keledainya melihat malaikat Tuhan dan berbicara kepadanya! Akhirnya Bileam justru memberkati Israel.",
    verse: "Bilangan 22:28-31; 23:11-12",
    hint: "Kisah: Orang yang keledainya dapat berbicara karena melihat malaikat Tuhan menghadang di jalan.",
    cards: [
      { svg: ART.biola, badgeHtml: `${del("OLA")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("SIMON"), badgeHtml: `${del("MON")} ${X}` },
      { operator: "+" },
      { svg: ART.ayam, badgeHtml: `${del("AY")} ${X}` }
    ]
  },
  {
    id: 19,
    name: "DEBORA",
    formula: "(DELIMA - LIMA) + BOR + A = DEBORA",
    story: "Seorang nabiah dan hakim perempuan yang memutuskan perkara di bawah pohon korma. Ia memberi semangat kepada Barak untuk berperang, dan Tuhan memberi kemenangan atas Sisera.",
    verse: "Hakim-hakim 4:4-5, 14",
    hint: "Kisah: Nabiah dan hakim perempuan yang duduk di bawah pohon korma dan mendampingi Barak berperang.",
    cards: [
      { svg: fromLevel1("DELILA"), badgeHtml: `${del("LIMA")} ${X}` },
      { operator: "+" },
      { svg: ART.bor, badgeHtml: null },
      { operator: "+" },
      { letter: "A" }
    ]
  },
  {
    id: 20,
    name: "YOHANES",
    formula: "(YOYO - YO) + (HANDUK - DUK) + ES = YOHANES",
    story: "Yohanes Pembaptis tinggal di padang gurun, berpakaian bulu unta, dan makan belalang serta madu hutan. Ia mempersiapkan jalan bagi Tuhan dan membaptis Yesus di Sungai Yordan.",
    verse: "Matius 3:1-4, 13-17",
    hint: "Kisah: Pengkhotbah di padang gurun yang makan belalang dan madu hutan, lalu membaptis Yesus.",
    cards: [
      { svg: ART.yoyo, badgeHtml: `${del("YO")} ${X}` },
      { operator: "+" },
      { svg: ART.handuk, badgeHtml: `${del("DUK")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("ESAU", 0), badgeHtml: null }
    ]
  },
  {
    id: 21,
    name: "PILATUS",
    formula: "(PIRING - RING) + (BOLA - BO) + (KAKTUS - KAK) = PILATUS",
    story: "Wali negeri Romawi yang mengadili Yesus. Ia tidak menemukan kesalahan apa pun pada Yesus, tetapi karena takut kepada orang banyak, ia mencuci tangannya dan menyerahkan Yesus untuk disalibkan.",
    verse: "Matius 27:22-26; Lukas 23:4",
    hint: "Kisah: Wali negeri yang mencuci tangannya di depan orang banyak ketika mengadili Yesus.",
    cards: [
      { svg: ART.piring, badgeHtml: `${del("RING")} ${X}` },
      { operator: "+" },
      { svg: ART.bola, badgeHtml: `${del("BO")} ${X}` },
      { operator: "+" },
      { svg: ART.kaktus, badgeHtml: `${del("KAK")} ${X}` }
    ]
  },
  {
    id: 22,
    name: "DANIEL",
    formula: "(DAUN - U) + (IKAN - KAN) + (ELANG - ANG) = DANIEL",
    story: "Pemuda Israel di Babel yang tetap berdoa kepada Allah tiga kali sehari walaupun dilarang raja. Ia dilemparkan ke gua singa, tetapi Allah mengutus malaikat-Nya untuk mengatupkan mulut singa-singa itu.",
    verse: "Daniel 6:10, 16, 22",
    hint: "Kisah: Orang yang tetap berdoa tiga kali sehari dan diselamatkan Allah di gua singa.",
    cards: [
      { svg: ART.daun, badgeHtml: `${del("U")} ${X}` },
      { operator: "+" },
      { svg: ART.ikan, badgeHtml: `${del("KAN")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("ELIA"), badgeHtml: `${del("ANG")} ${X}` }
    ]
  },
  {
    id: 23,
    name: "GIDEON",
    formula: "(GIGI - GI) + (DELIMA - LIMA) + (BALON - BAL) = GIDEON",
    story: "Hakim Israel yang dipanggil Tuhan ketika sedang mengirik gandum. Dengan hanya 300 orang yang membawa sangkakala dan obor di dalam buyung, Tuhan memberinya kemenangan atas tentara Midian.",
    verse: "Hakim-hakim 6:11-12; 7:7, 19-21",
    hint: "Kisah: Hakim yang mengalahkan Midian hanya dengan 300 orang, sangkakala, dan obor di dalam buyung.",
    cards: [
      { svg: ART.gigi, badgeHtml: `${del("GI")} ${X}` },
      { operator: "+" },
      { svg: fromLevel1("DELILA"), badgeHtml: `${del("LIMA")} ${X}` },
      { operator: "+" },
      { svg: ART.balon, badgeHtml: `${del("BAL")} ${X}` }
    ]
  },
  {
    id: 24,
    name: "LAZARUS",
    formula: "(BOLA - BO) + (PIZZA - PIZ) + (RUSA - A) = LAZARUS",
    story: "Sahabat Yesus dari Betania, saudara Maria dan Marta. Ia sudah empat hari dikubur, tetapi Yesus berseru, 'Lazarus, marilah ke luar!' lalu ia bangkit dari kematian.",
    verse: "Yohanes 11:38-44",
    hint: "Kisah: Sahabat Yesus yang sudah empat hari dikubur, lalu dibangkitkan oleh Yesus.",
    cards: [
      { svg: ART.bola, badgeHtml: `${del("BO")} ${X}` },
      { operator: "+" },
      { svg: ART.pizza, badgeHtml: `${del("PIZ")} ${X}` },
      { operator: "+" },
      { svg: ART.rusa, badgeHtml: `${del("A")} ${X}` }
    ]
  }
];
