/* ==========================================================
   GAMBAR BENDA TAMBAHAN UNTUK LEVEL 3 (viewBox 240x190)
   ========================================================== */
const ART3 = {
  meja: art(`
    <ellipse cx="120" cy="170" rx="95" ry="8" fill="rgba(0,0,0,0.3)" />
    ${spark(36, 40, 0.9, 0)}
    ${spark(214, 48, 0.7, 0.6)}
    <g class="a-hop vb" style="--d:2.2s; transform-origin:120px 165px">
      <path d="M 78 80 V 140 M 200 76 V 136" stroke="#78350f" stroke-width="10" stroke-linecap="round" />
      <path d="M 30 88 L 70 64 L 210 64 L 190 88 Z" fill="#d97706" stroke="#78350f" stroke-width="3" stroke-linejoin="round" />
      <path d="M 190 88 L 210 64 L 210 76 L 190 100 Z" fill="#92400e" stroke="#78350f" stroke-width="2" stroke-linejoin="round" />
      <rect x="30" y="88" width="160" height="12" fill="#b45309" stroke="#78350f" stroke-width="2" />
      <path d="M 42 100 V 162 M 178 100 V 162" stroke="#92400e" stroke-width="11" stroke-linecap="round" />
      <path d="M 60 76 L 180 76" stroke="#fbbf24" stroke-width="3" opacity="0.5" />
    </g>
  `),

  kapal: art(`
    <defs>
      <clipPath id="l3AirKapal"><rect x="0" y="130" width="240" height="60" /></clipPath>
    </defs>
    <circle class="a-rise" style="--d:2.2s" cx="151" cy="36" r="9" fill="#cbd5e1" opacity="0.8" />
    <circle class="a-rise" style="--d:2.2s; animation-delay:0.7s" cx="158" cy="26" r="7" fill="#cbd5e1" opacity="0.7" />
    <circle class="a-rise" style="--d:2.2s; animation-delay:1.4s" cx="148" cy="20" r="6" fill="#cbd5e1" opacity="0.6" />
    <g class="a-bob" style="--d:1.6s; --y:-4px">
      <rect x="140" y="46" width="22" height="34" fill="#ef4444" />
      <rect x="140" y="46" width="22" height="8" fill="#0f172a" />
      <rect x="60" y="78" width="112" height="32" rx="4" fill="#f8fafc" stroke="#94a3b8" stroke-width="2" />
      <g fill="#38bdf8">
        <circle cx="76" cy="94" r="6" /><circle cx="96" cy="94" r="6" /><circle cx="116" cy="94" r="6" /><circle cx="136" cy="94" r="6" /><circle cx="156" cy="94" r="6" />
      </g>
      <path d="M 18 110 L 222 110 L 202 152 L 38 152 Z" fill="#1e3a8a" stroke="#0f172a" stroke-width="3" stroke-linejoin="round" />
      <rect x="28" y="122" width="185" height="8" fill="#ef4444" />
    </g>
    <g clip-path="url(#l3AirKapal)">
      <g class="a-wave" style="--w:-60px; --d:1.8s">
        <path d="M -60 148 Q -45 140 -30 148 T 0 148 T 30 148 T 60 148 T 90 148 T 120 148 T 150 148 T 180 148 T 210 148 T 240 148 T 270 148 T 300 148 L 300 190 L -60 190 Z" fill="#0ea5e9" opacity="0.85" />
      </g>
    </g>
  `),

  gajah: art(`
    <ellipse cx="135" cy="172" rx="85" ry="8" fill="rgba(0,0,0,0.3)" />
    <path d="M 204 100 Q 220 112 212 130" stroke="#64748b" stroke-width="4" fill="none" stroke-linecap="round" />
    <rect x="88" y="118" width="22" height="50" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <rect x="116" y="122" width="22" height="46" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <rect x="160" y="122" width="22" height="46" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <rect x="184" y="118" width="20" height="50" rx="8" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <ellipse cx="148" cy="104" rx="60" ry="42" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <path class="a-rock vb" style="--a:12deg; --d:1.4s; transform-origin:58px 100px" d="M 58 96 Q 36 120 44 146 Q 48 160 36 162" stroke="#94a3b8" stroke-width="16" fill="none" stroke-linecap="round" />
    <circle cx="78" cy="86" r="34" fill="#94a3b8" stroke="#64748b" stroke-width="2" />
    <path d="M 62 112 Q 56 128 68 132" stroke="#f8fafc" stroke-width="5" fill="none" stroke-linecap="round" />
    <path class="a-rock vb" style="--a:10deg; --d:1s; transform-origin:100px 72px" d="M 98 60 Q 132 56 130 94 Q 126 124 98 112 Z" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
    <g class="a-blink" style="--d:3s"><circle cx="72" cy="78" r="4.5" fill="#0f172a" /></g>
  `),

  kipas: art(`
    <ellipse cx="120" cy="174" rx="45" ry="8" fill="#334155" />
    <rect x="114" y="110" width="12" height="62" rx="4" fill="#475569" />
    <path class="a-flicker" style="--d:0.8s" d="M 186 64 Q 206 60 222 68 M 190 86 Q 212 84 228 92 M 186 108 Q 206 108 220 116" stroke="#bae6fd" stroke-width="3" fill="none" stroke-linecap="round" />
    <circle cx="120" cy="80" r="56" fill="rgba(255,255,255,0.05)" stroke="#94a3b8" stroke-width="3" />
    <g class="a-spin vb" style="--d:0.5s; transform-origin:120px 80px">
      <ellipse cx="120" cy="52" rx="15" ry="26" fill="#38bdf8" />
      <ellipse cx="120" cy="52" rx="15" ry="26" fill="#0ea5e9" transform="rotate(120 120 80)" />
      <ellipse cx="120" cy="52" rx="15" ry="26" fill="#7dd3fc" transform="rotate(240 120 80)" />
    </g>
    <circle cx="120" cy="80" r="10" fill="#1e293b" stroke="#94a3b8" stroke-width="2" />
    <path d="M 120 24 V 136 M 64 80 H 176 M 80 40 L 160 120 M 160 40 L 80 120" stroke="#94a3b8" stroke-width="1.2" opacity="0.5" />
  `),

  teko: art(`
    <ellipse cx="120" cy="168" rx="80" ry="8" fill="rgba(0,0,0,0.3)" />
    <path class="a-rise" style="--d:2.2s" d="M 32 72 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <path class="a-rise" style="--d:2.2s; animation-delay:1.1s" d="M 44 66 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
    <g class="a-rock vb" style="--a:3deg; --d:1.6s; transform-origin:120px 160px">
      <path d="M 166 100 Q 206 102 196 132 Q 188 148 166 140" stroke="#9d174d" stroke-width="8" fill="none" />
      <path d="M 72 122 Q 42 114 30 84 L 42 80 Q 54 104 76 108 Z" fill="#f472b6" stroke="#9d174d" stroke-width="3" stroke-linejoin="round" />
      <path d="M 70 158 Q 54 96 120 82 Q 186 96 170 158 Z" fill="#f472b6" stroke="#9d174d" stroke-width="3" />
      <path d="M 92 86 Q 120 62 148 86 Z" fill="#ec4899" stroke="#9d174d" stroke-width="3" />
      <circle cx="120" cy="66" r="7" fill="#ec4899" stroke="#9d174d" stroke-width="2" />
      <g fill="#fdf2f8"><circle cx="100" cy="118" r="5" /><circle cx="122" cy="128" r="5" /><circle cx="144" cy="116" r="5" /><circle cx="112" cy="144" r="4" /><circle cx="138" cy="142" r="4" /></g>
    </g>
  `),

  apel: art(`
    <defs>
      <radialGradient id="l3ApelG" cx="38%" cy="35%" r="75%">
        <stop offset="0%" stop-color="#fca5a5" />
        <stop offset="45%" stop-color="#dc2626" />
        <stop offset="100%" stop-color="#7f1d1d" />
      </radialGradient>
    </defs>
    <ellipse class="a-hopshadow" style="--d:1.8s" cx="120" cy="168" rx="60" ry="10" fill="rgba(0,0,0,0.3)" />
    ${spark(44, 50, 0.9, 0)}
    ${spark(204, 120, 0.7, 0.8)}
    <g class="a-hop vb" style="--d:1.8s; transform-origin:120px 158px">
      <path d="M 120 62 C 95 45, 55 55, 58 100 C 60 140, 92 165, 120 152 C 148 165, 180 140, 182 100 C 185 55, 145 45, 120 62 Z" fill="url(#l3ApelG)" stroke="#7f1d1d" stroke-width="2" />
      <path d="M 120 64 Q 118 46 126 34" stroke="#78350f" stroke-width="5" fill="none" stroke-linecap="round" />
      <path class="a-rock vb" style="--a:10deg; --d:1s; transform-origin:126px 44px" d="M 126 44 Q 150 26 168 40 Q 148 58 126 44 Z" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <ellipse cx="88" cy="88" rx="10" ry="16" fill="#ffffff" opacity="0.35" transform="rotate(20 88 88)" />
    </g>
  `),

  ember: art(`
    <ellipse cx="120" cy="170" rx="70" ry="8" fill="rgba(0,0,0,0.3)" />
    <path class="a-rock vb" style="--a:12deg; --d:1.2s; transform-origin:120px 72px" d="M 64 72 Q 120 2 176 72" stroke="#94a3b8" stroke-width="5" fill="none" stroke-linecap="round" />
    <path d="M 62 72 L 178 72 L 162 162 L 78 162 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round" />
    <path d="M 66 96 L 174 96 M 70 136 L 170 136" stroke="#1e3a8a" stroke-width="3" />
    <ellipse cx="120" cy="72" rx="58" ry="12" fill="#93c5fd" stroke="#1e3a8a" stroke-width="3" />
    <ellipse class="a-pulse" style="--s:1.05; --d:0.7s" cx="120" cy="74" rx="48" ry="8" fill="#0ea5e9" />
    ${drop(176, 92, 0, 60)}
    ${drop(66, 96, 0.6, 56)}
  `),

  batu: art(`
    <defs>
      <radialGradient id="l3BatuG" cx="38%" cy="30%" r="80%">
        <stop offset="0%" stop-color="#cbd5e1" />
        <stop offset="55%" stop-color="#64748b" />
        <stop offset="100%" stop-color="#334155" />
      </radialGradient>
    </defs>
    <ellipse cx="120" cy="164" rx="100" ry="10" fill="rgba(0,0,0,0.35)" />
    ${spark(40, 54, 0.8, 0, "#ffffff")}
    ${spark(210, 64, 0.6, 0.7, "#ffffff")}
    <g class="a-rock vb" style="--a:2deg; --d:1.8s; transform-origin:120px 160px">
      <path d="M 40 156 Q 28 104 70 80 Q 92 50 136 56 Q 186 60 202 108 Q 212 150 176 158 Z" fill="url(#l3BatuG)" stroke="#334155" stroke-width="3" />
      <path d="M 120 64 L 112 92 L 126 108 M 160 100 L 176 124" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M 82 78 Q 100 62 124 66 Q 112 76 90 82 Z" fill="#4ade80" opacity="0.8" />
    </g>
    <ellipse cx="216" cy="158" rx="12" ry="8" fill="#64748b" stroke="#334155" stroke-width="2" />
    <ellipse cx="24" cy="160" rx="9" ry="6" fill="#94a3b8" stroke="#334155" stroke-width="2" />
  `),

  zebra: art(`
    <defs>
      <clipPath id="l3ZebraBadan"><ellipse cx="142" cy="100" rx="58" ry="30" /></clipPath>
      <clipPath id="l3ZebraLeher"><path d="M 104 92 L 80 50 Q 70 36 54 40 L 30 62 Q 26 74 38 76 L 60 72 L 86 112 Z" /></clipPath>
    </defs>
    <ellipse cx="135" cy="172" rx="85" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:15deg; --d:0.6s; transform-origin:198px 92px">
      <path d="M 198 92 Q 214 110 208 132" stroke="#0f172a" stroke-width="4" fill="none" stroke-linecap="round" />
    </g>
    <path d="M 108 120 V 166 M 128 124 V 166 M 160 124 V 166 M 180 120 V 166" stroke="#f8fafc" stroke-width="10" stroke-linecap="round" />
    <path d="M 108 126 V 166 M 128 128 V 166 M 160 128 V 166 M 180 126 V 166" stroke="#0f172a" stroke-width="10" stroke-dasharray="5 7" />
    <ellipse cx="142" cy="100" rx="58" ry="30" fill="#f8fafc" stroke="#0f172a" stroke-width="2" />
    <g clip-path="url(#l3ZebraBadan)" stroke="#0f172a" stroke-width="7" fill="none">
      <path d="M 104 66 Q 112 100 100 134 M 124 66 Q 132 100 120 134 M 144 66 Q 152 100 140 134 M 164 66 Q 172 100 160 134 M 184 66 Q 192 100 180 134" />
    </g>
    <g class="a-rock vb" style="--a:4deg; --d:1.6s; transform-origin:96px 104px">
      <path d="M 104 92 L 80 50 Q 70 36 54 40 L 30 62 Q 26 74 38 76 L 60 72 L 86 112 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="2" />
      <g clip-path="url(#l3ZebraLeher)" stroke="#0f172a" stroke-width="6">
        <path d="M 70 40 L 92 60 M 76 56 L 98 74 M 82 72 L 104 88 M 54 46 L 64 60" />
      </g>
      <path d="M 80 46 L 100 88" stroke="#0f172a" stroke-width="7" stroke-dasharray="4 3" />
      <ellipse cx="34" cy="68" rx="8" ry="7" fill="#1e293b" />
      <g class="a-blink" style="--d:3s"><circle cx="58" cy="52" r="4" fill="#0f172a" /></g>
      <path d="M 66 38 L 70 24 L 76 36 Z" fill="#f8fafc" stroke="#0f172a" stroke-width="2" />
    </g>
  `),

  tas: art(`
    <ellipse cx="120" cy="172" rx="60" ry="8" fill="rgba(0,0,0,0.3)" />
    <g class="a-rock vb" style="--a:4deg; --d:1.3s; transform-origin:120px 40px">
      <path d="M 95 52 Q 120 24 145 52" stroke="#1e3a8a" stroke-width="7" fill="none" stroke-linecap="round" />
      <rect x="70" y="48" width="100" height="114" rx="26" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3" />
      <path d="M 70 82 Q 120 100 170 82" stroke="#1e3a8a" stroke-width="2.5" fill="none" />
      <rect x="84" y="104" width="72" height="44" rx="12" fill="#60a5fa" stroke="#1e3a8a" stroke-width="2.5" />
      <path d="M 92 114 H 148" stroke="#fde047" stroke-width="3" stroke-dasharray="4 3" />
      <rect x="142" y="110" width="8" height="12" rx="2" fill="#fde047" />
      <circle cx="120" cy="70" r="6" fill="#fde047" />
    </g>
  `),

  tali: art(`
    <ellipse cx="115" cy="160" rx="85" ry="10" fill="rgba(0,0,0,0.3)" />
    <path class="a-draw" style="--len:240; --d:2s" d="M 172 116 C 206 104, 220 70, 198 48 C 180 30, 150 40, 160 62" stroke="#d97706" stroke-width="10" fill="none" stroke-linecap="round" />
    <g class="a-pulse ob" style="--s:1.03; --d:1s">
      <ellipse cx="110" cy="122" rx="70" ry="30" fill="none" stroke="#d97706" stroke-width="12" />
      <ellipse cx="110" cy="122" rx="70" ry="30" fill="none" stroke="#92400e" stroke-width="12" stroke-dasharray="3 7" />
      <ellipse cx="110" cy="118" rx="50" ry="21" fill="none" stroke="#f59e0b" stroke-width="12" />
      <ellipse cx="110" cy="118" rx="50" ry="21" fill="none" stroke="#92400e" stroke-width="12" stroke-dasharray="3 7" />
      <ellipse cx="110" cy="114" rx="30" ry="12" fill="none" stroke="#d97706" stroke-width="12" />
      <ellipse cx="110" cy="114" rx="30" ry="12" fill="none" stroke="#92400e" stroke-width="12" stroke-dasharray="3 7" />
    </g>
  `),

  monyet: art(`
    <path d="M 16 26 Q 120 14 224 30" stroke="#78350f" stroke-width="10" fill="none" stroke-linecap="round" />
    <ellipse cx="40" cy="24" rx="14" ry="7" fill="#22c55e" transform="rotate(-20 40 24)" />
    <ellipse cx="200" cy="30" rx="14" ry="7" fill="#16a34a" transform="rotate(20 200 30)" />
    <g class="a-rock vb" style="--a:12deg; --d:1.2s; transform-origin:120px 26px">
      <path d="M 120 26 L 102 112" stroke="#92400e" stroke-width="10" stroke-linecap="round" />
      <path d="M 142 146 Q 178 154 174 122 Q 170 106 158 114" stroke="#92400e" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M 108 156 L 102 176 M 136 156 L 142 176" stroke="#92400e" stroke-width="9" stroke-linecap="round" />
      <ellipse cx="122" cy="132" rx="26" ry="30" fill="#92400e" />
      <ellipse cx="122" cy="138" rx="15" ry="19" fill="#fde68a" />
      <circle cx="88" cy="84" r="13" fill="#92400e" /><circle cx="88" cy="84" r="6" fill="#fde68a" />
      <circle cx="156" cy="84" r="13" fill="#92400e" /><circle cx="156" cy="84" r="6" fill="#fde68a" />
      <circle cx="122" cy="86" r="32" fill="#92400e" />
      <path d="M 100 86 Q 100 72 112 72 Q 122 76 132 72 Q 144 72 144 86 Q 144 110 122 110 Q 100 110 100 86 Z" fill="#fde68a" />
      <g class="a-blink" style="--d:3.2s"><circle cx="113" cy="84" r="4" fill="#0f172a" /><circle cx="131" cy="84" r="4" fill="#0f172a" /></g>
      <circle cx="119" cy="94" r="1.8" fill="#78350f" /><circle cx="125" cy="94" r="1.8" fill="#78350f" />
      <path d="M 112 101 Q 122 108 132 101" stroke="#78350f" stroke-width="2.5" fill="none" stroke-linecap="round" />
    </g>
  `),

  pohon: art(`
    <ellipse cx="120" cy="172" rx="95" ry="10" fill="#166534" opacity="0.8" />
    <path d="M 108 172 L 112 110 L 128 110 L 132 172 Z" fill="#78350f" />
    <path d="M 120 128 L 96 104 M 122 136 L 146 112" stroke="#78350f" stroke-width="7" stroke-linecap="round" />
    <g class="a-rock vb" style="--a:2.5deg; --d:2s; transform-origin:120px 140px">
      <circle cx="120" cy="64" r="44" fill="#16a34a" />
      <circle cx="80" cy="90" r="32" fill="#22c55e" />
      <circle cx="160" cy="90" r="32" fill="#15803d" />
      <circle cx="104" cy="44" r="22" fill="#22c55e" />
      <circle cx="146" cy="50" r="20" fill="#4ade80" opacity="0.8" />
    </g>
    <path class="a-fall" style="--y:90px; --d:3s" d="M 172 70 Q 184 64 186 76 Q 174 82 172 70 Z" fill="#4ade80" />
    <path class="a-fall" style="--y:80px; --d:3s; animation-delay:1.5s" d="M 64 80 Q 76 74 78 86 Q 66 92 64 80 Z" fill="#86efac" />
  `),

  robot: art(`
    <ellipse cx="120" cy="178" rx="60" ry="7" fill="rgba(0,0,0,0.3)" />
    <line x1="120" y1="40" x2="120" y2="20" stroke="#94a3b8" stroke-width="4" />
    <circle class="a-flicker" style="--d:1.2s" cx="120" cy="16" r="7" fill="#ef4444" />
    <rect x="86" y="40" width="68" height="50" rx="12" fill="#94a3b8" stroke="#475569" stroke-width="3" />
    <circle class="a-pulse" style="--s:1.2; --d:0.6s" cx="106" cy="62" r="8" fill="#22d3ee" />
    <circle class="a-pulse" style="--s:1.2; --d:0.6s; animation-delay:0.3s" cx="134" cy="62" r="8" fill="#22d3ee" />
    <path d="M 104 78 H 136" stroke="#475569" stroke-width="4" stroke-dasharray="4 3" />
    <g class="a-rock vb" style="--a:22deg; --d:0.6s; transform-origin:76px 104px">
      <rect x="44" y="98" width="34" height="12" rx="6" fill="#64748b" />
      <circle cx="42" cy="104" r="9" fill="#475569" />
    </g>
    <rect x="162" y="98" width="34" height="12" rx="6" fill="#64748b" />
    <circle cx="198" cy="104" r="9" fill="#475569" />
    <rect x="76" y="94" width="88" height="62" rx="10" fill="#64748b" stroke="#334155" stroke-width="3" />
    <rect x="96" y="108" width="48" height="26" rx="4" fill="#1e293b" />
    <circle class="a-flicker" style="--d:0.9s" cx="108" cy="121" r="4" fill="#4ade80" />
    <circle class="a-flicker" style="--d:1.3s" cx="120" cy="121" r="4" fill="#facc15" />
    <circle class="a-flicker" style="--d:0.7s" cx="132" cy="121" r="4" fill="#f472b6" />
    <rect x="90" y="156" width="20" height="20" rx="4" fill="#475569" />
    <rect x="130" y="156" width="20" height="20" rx="4" fill="#475569" />
  `),

  helm: art(`
    <ellipse cx="122" cy="168" rx="85" ry="8" fill="rgba(0,0,0,0.3)" />
    ${spark(36, 50, 0.8, 0, "#ffffff")}
    <g class="a-rock vb" style="--a:4deg; --d:1.4s; transform-origin:122px 150px">
      <path d="M 48 136 Q 42 50 120 44 Q 198 46 198 120 L 198 136 Z" fill="#ef4444" stroke="#7f1d1d" stroke-width="3" />
      <path d="M 124 80 Q 192 76 199 112 L 152 116 Q 130 112 124 80 Z" fill="#1e293b" stroke="#0f172a" stroke-width="2" />
      <path d="M 140 86 Q 170 84 184 98" stroke="#64748b" stroke-width="3" fill="none" stroke-linecap="round" />
      <path d="M 62 86 Q 96 54 148 54" stroke="#f8fafc" stroke-width="8" fill="none" stroke-linecap="round" />
      <rect x="44" y="132" width="158" height="12" rx="6" fill="#7f1d1d" />
      <ellipse cx="82" cy="76" rx="9" ry="16" fill="#ffffff" opacity="0.3" transform="rotate(35 82 76)" />
    </g>
  `),

  jam: art(`
    <ellipse cx="120" cy="174" rx="60" ry="7" fill="rgba(0,0,0,0.3)" />
    <path d="M 80 142 L 66 168 M 160 142 L 174 168" stroke="#475569" stroke-width="7" stroke-linecap="round" />
    <path d="M 64 52 A 22 22 0 0 1 98 30 Z" fill="#facc15" stroke="#a16207" stroke-width="2" />
    <path d="M 176 52 A 22 22 0 0 0 142 30 Z" fill="#facc15" stroke="#a16207" stroke-width="2" />
    <circle cx="120" cy="98" r="58" fill="#ef4444" stroke="#7f1d1d" stroke-width="3" />
    <circle cx="120" cy="98" r="47" fill="#f8fafc" />
    <path d="M 120 56 V 64 M 120 132 V 140 M 78 98 H 86 M 154 98 H 162" stroke="#1e293b" stroke-width="4" stroke-linecap="round" />
    <line class="a-spin vb" style="--d:12s; transform-origin:120px 98px" x1="120" y1="98" x2="120" y2="72" stroke="#1e293b" stroke-width="6" stroke-linecap="round" />
    <line class="a-spin vb" style="--d:2s; transform-origin:120px 98px" x1="120" y1="98" x2="146" y2="98" stroke="#ef4444" stroke-width="3" stroke-linecap="round" />
    <circle cx="120" cy="98" r="5" fill="#1e293b" />
  `),

  roda: art(`
    <ellipse cx="120" cy="168" rx="75" ry="8" fill="rgba(0,0,0,0.3)" />
    <path class="a-flicker" style="--d:0.6s" d="M 22 80 H 44 M 14 100 H 40 M 22 120 H 44" stroke="#94a3b8" stroke-width="4" stroke-linecap="round" />
    <g class="a-spin vb" style="--d:1.2s; transform-origin:128px 96px">
      <circle cx="128" cy="96" r="64" fill="#1e293b" />
      <circle cx="128" cy="96" r="64" fill="none" stroke="#334155" stroke-width="10" stroke-dasharray="10 8" />
      <circle cx="128" cy="96" r="40" fill="#94a3b8" stroke="#cbd5e1" stroke-width="3" />
      <path d="M 128 58 V 134 M 90 96 H 166 M 101 69 L 155 123 M 155 69 L 101 123" stroke="#475569" stroke-width="6" />
      <circle cx="128" cy="96" r="12" fill="#475569" stroke="#cbd5e1" stroke-width="2" />
    </g>
  `),

  drum: art(`
    <ellipse cx="120" cy="174" rx="80" ry="8" fill="rgba(0,0,0,0.3)" />
    <path d="M 50 92 L 50 152 Q 120 178 190 152 L 190 92 Z" fill="#dc2626" stroke="#7f1d1d" stroke-width="3" />
    <path d="M 50 100 L 82 158 L 104 102 L 136 162 L 158 102 L 190 154" stroke="#fde047" stroke-width="3" fill="none" />
    <path d="M 50 150 Q 120 176 190 150" stroke="#e2e8f0" stroke-width="6" fill="none" />
    <ellipse cx="120" cy="92" rx="70" ry="20" fill="#f8fafc" stroke="#94a3b8" stroke-width="4" />
    <g class="a-hammer vb" style="--d:0.8s; transform-origin:190px 60px">
      <line x1="190" y1="60" x2="134" y2="84" stroke="#d97706" stroke-width="6" stroke-linecap="round" />
      <circle cx="132" cy="85" r="6" fill="#fef3c7" />
    </g>
    <g class="a-hammer vb" style="--d:0.8s; animation-delay:0.4s; transform-origin:50px 56px">
      <line x1="50" y1="56" x2="102" y2="82" stroke="#d97706" stroke-width="6" stroke-linecap="round" />
      <circle cx="104" cy="83" r="6" fill="#fef3c7" />
    </g>
    <g class="a-impact" style="--d:0.8s">${star(150, 70, 0.6)}${star(90, 68, 0.6)}</g>
  `),

  topi: art(`
    <ellipse cx="120" cy="164" rx="90" ry="9" fill="rgba(0,0,0,0.3)" />
    ${spark(40, 46, 0.8, 0)}
    ${spark(206, 52, 0.7, 0.6)}
    <g class="a-hop vb" style="--d:2s; transform-origin:120px 150px">
      <path d="M 140 128 Q 200 124 220 140 Q 196 152 140 146 Z" fill="#1d4ed8" stroke="#1e3a8a" stroke-width="3" stroke-linejoin="round" />
      <path d="M 44 134 Q 40 62 112 56 Q 176 58 172 134 Z" fill="#3b82f6" stroke="#1e3a8a" stroke-width="3" />
      <path d="M 108 58 Q 100 96 104 134 M 136 64 Q 150 98 146 134" stroke="#1e3a8a" stroke-width="2" fill="none" />
      <circle cx="112" cy="56" r="7" fill="#1e3a8a" />
      <path d="M 44 128 Q 108 142 172 128 L 172 138 Q 108 152 44 138 Z" fill="#facc15" />
    </g>
  `),

  awan: art(`
    <ellipse cx="120" cy="174" rx="70" ry="6" fill="rgba(0,0,0,0.2)" />
    <g class="a-driftx" style="--d:4s">
      <g class="a-bob" style="--d:1.6s; --y:-6px">
        <circle cx="80" cy="96" r="32" fill="#f8fafc" />
        <circle cx="122" cy="74" r="42" fill="#f8fafc" />
        <circle cx="164" cy="96" r="30" fill="#f8fafc" />
        <rect x="80" y="96" width="84" height="32" fill="#f8fafc" />
        <ellipse cx="122" cy="126" rx="84" ry="8" fill="#e2e8f0" />
        <g class="a-blink" style="--d:3s"><circle cx="106" cy="94" r="4.5" fill="#334155" /><circle cx="138" cy="94" r="4.5" fill="#334155" /></g>
        <path d="M 110 106 Q 122 114 134 106" stroke="#334155" stroke-width="3" fill="none" stroke-linecap="round" />
        <ellipse cx="96" cy="104" rx="6" ry="3.5" fill="#fda4af" /><ellipse cx="148" cy="104" rx="6" ry="3.5" fill="#fda4af" />
      </g>
    </g>
  `),

  kereta: art(`
    <ellipse cx="120" cy="174" rx="105" ry="7" fill="rgba(0,0,0,0.3)" />
    <path d="M 10 168 H 230" stroke="#78350f" stroke-width="4" />
    <circle class="a-rise" style="--d:2s" cx="64" cy="34" r="9" fill="#e2e8f0" opacity="0.8" />
    <circle class="a-rise" style="--d:2s; animation-delay:0.7s" cx="58" cy="22" r="7" fill="#e2e8f0" opacity="0.7" />
    <g class="a-bob" style="--d:0.3s; --y:-2px">
      <rect x="54" y="42" width="20" height="38" fill="#1e293b" />
      <rect x="50" y="38" width="28" height="8" rx="2" fill="#334155" />
      <rect x="30" y="76" width="120" height="66" rx="10" fill="#16a34a" stroke="#14532d" stroke-width="3" />
      <rect x="140" y="48" width="70" height="94" rx="8" fill="#22c55e" stroke="#14532d" stroke-width="3" />
      <rect x="152" y="60" width="46" height="32" rx="5" fill="#bae6fd" stroke="#14532d" stroke-width="2" />
      <rect x="134" y="40" width="82" height="12" rx="4" fill="#ef4444" />
      <rect x="30" y="118" width="180" height="10" fill="#facc15" />
      <path d="M 14 142 L 30 120 L 30 142 Z" fill="#94a3b8" />
    </g>
    <g class="a-spin" style="--d:0.8s"><circle cx="64" cy="150" r="17" fill="#1e293b" stroke="#94a3b8" stroke-width="3" /><path d="M 64 136 V 164 M 50 150 H 78" stroke="#94a3b8" stroke-width="3" /></g>
    <g class="a-spin" style="--d:0.8s"><circle cx="116" cy="150" r="17" fill="#1e293b" stroke="#94a3b8" stroke-width="3" /><path d="M 116 136 V 164 M 102 150 H 130" stroke="#94a3b8" stroke-width="3" /></g>
    <g class="a-spin" style="--d:0.8s"><circle cx="176" cy="150" r="17" fill="#1e293b" stroke="#94a3b8" stroke-width="3" /><path d="M 176 136 V 164 M 162 150 H 190" stroke="#94a3b8" stroke-width="3" /></g>
  `),

  gelas: art(`
    <defs>
      <clipPath id="l3GelasIsi"><path d="M 78 74 L 162 74 L 152 164 L 88 164 Z" /></clipPath>
    </defs>
    <ellipse cx="120" cy="170" rx="55" ry="7" fill="rgba(0,0,0,0.3)" />
    <path d="M 150 26 L 134 110" stroke="#f472b6" stroke-width="7" stroke-linecap="round" />
    <g clip-path="url(#l3GelasIsi)">
      <rect x="70" y="80" width="100" height="90" fill="#fb923c" />
      <g class="a-wave" style="--w:-40px; --d:1.5s">
        <path d="M 40 84 Q 50 78 60 84 T 80 84 T 100 84 T 120 84 T 140 84 T 160 84 T 180 84 T 200 84 L 200 70 L 40 70 Z" fill="#fdba74" />
      </g>
      <circle class="a-rise" style="--d:1.8s" cx="104" cy="148" r="4" fill="#fed7aa" />
      <circle class="a-rise" style="--d:2.2s; animation-delay:0.8s" cx="134" cy="140" r="3" fill="#fed7aa" />
    </g>
    <path d="M 74 50 L 166 50 L 152 166 L 88 166 Z" fill="rgba(255,255,255,0.12)" stroke="#e2e8f0" stroke-width="3" stroke-linejoin="round" />
    <path d="M 86 62 L 96 154" stroke="#ffffff" stroke-width="5" opacity="0.4" stroke-linecap="round" />
    <circle cx="160" cy="54" r="14" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
    <path d="M 160 42 V 66 M 148 54 H 172" stroke="#ca8a04" stroke-width="2" />
  `),

  api: art(`
    <ellipse cx="120" cy="172" rx="75" ry="8" fill="rgba(0,0,0,0.3)" />
    <circle class="a-pulse" style="--s:1.25; --d:0.6s" cx="120" cy="104" r="62" fill="#fb923c" opacity="0.15" />
    <path d="M 56 166 L 184 138 M 56 138 L 184 166" stroke="#78350f" stroke-width="14" stroke-linecap="round" />
    <g class="a-rock ob" style="--a:5deg; --d:0.4s">
      <path d="M 120 20 C 150 60, 176 80, 170 120 C 166 148, 146 160, 120 160 C 94 160, 74 148, 70 120 C 66 92, 92 84, 96 54 C 106 70, 110 80, 112 92 C 120 70, 112 44, 120 20 Z" fill="#ef4444" />
    </g>
    <g class="a-rock ob" style="--a:-6deg; --d:0.33s">
      <path d="M 120 60 C 140 86, 152 104, 148 126 C 145 146, 132 156, 120 156 C 106 156, 92 146, 92 126 C 92 110, 106 100, 110 84 C 116 96, 118 104, 120 112 C 126 96, 122 78, 120 60 Z" fill="#f97316" />
    </g>
    <g class="a-pulse ob" style="--s:1.15; --d:0.3s">
      <path d="M 120 100 C 132 116, 136 128, 132 140 C 129 150, 124 154, 120 154 C 114 154, 108 150, 108 140 C 108 128, 116 118, 120 100 Z" fill="#fde047" />
    </g>
    ${spark(60, 50, 0.6, 0, "#fde047")}
    ${spark(186, 60, 0.5, 0.5, "#fde047")}
  `),

  ular: art(`
    <ellipse cx="120" cy="170" rx="95" ry="8" fill="rgba(0,0,0,0.3)" />
    <path d="M 196 150 Q 222 146 222 132" stroke="#16a34a" stroke-width="10" fill="none" stroke-linecap="round" />
    <path d="M 40 150 Q 80 172 120 150 Q 160 128 196 150" stroke="#22c55e" stroke-width="22" fill="none" stroke-linecap="round" />
    <path d="M 40 150 Q 80 172 120 150 Q 160 128 196 150" stroke="#facc15" stroke-width="22" fill="none" stroke-linecap="round" stroke-dasharray="6 18" opacity="0.8" />
    <g class="a-rock vb" style="--a:8deg; --d:0.9s; transform-origin:42px 150px">
      <path d="M 42 150 Q 28 120 42 92 Q 54 70 74 70" stroke="#22c55e" stroke-width="22" fill="none" stroke-linecap="round" />
      <ellipse cx="86" cy="68" rx="24" ry="17" fill="#22c55e" stroke="#15803d" stroke-width="2" />
      <g class="a-blink" style="--d:3s"><circle cx="90" cy="61" r="5" fill="#ffffff" /><circle cx="91" cy="61" r="2.5" fill="#0f172a" /></g>
      <g class="a-flicker" style="--d:0.8s">
        <path d="M 108 72 L 124 74 L 132 68 M 124 74 L 132 80" stroke="#ef4444" stroke-width="3" fill="none" stroke-linecap="round" />
      </g>
    </g>
  `),
};
