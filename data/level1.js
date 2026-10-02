/* ==========================================================
   LEVEL 1 - SATU GAMBAR PER SOAL (MURNI TANPA SPOILER)
   Kartu: { svg, badgeHtml } | { letter: "B" } | { operator: "+" }
   ========================================================== */
const LEVEL1 = [
  {
    id: 1,
    name: "ELIA",
    formula: "ELANG (A ➔ I, NG ➔ A) = ELIA",
    story: "Nabi yang berdoa sehingga api turun dari langit di Gunung Karmel dan mengalahkan nabi-nabi Baal. Ia pernah diberi makan burung gagak, lalu terangkat ke surga dengan kereta berapi.",
    verse: "1 Raja-raja 17:6; 18:36-38; 2 Raja-raja 2:11",
    hint: "Kisah: Nabi yang diberi makan burung gagak dan naik ke langit dengan kereta berapi.",
    cards: [
      {
        badgeHtml: `${del("A")} ${TO} ${add("I")} ${DOT} ${del("NG")} ${TO} ${add("A")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse class="a-shadow" style="--d:1.2s" cx="140" cy="188" rx="70" ry="9" fill="rgba(0,0,0,0.3)" />
            <g class="a-bob" style="--d:1.2s; --y:-12px">
              <!-- Sayap kiri (mengepak) -->
              <g class="a-rock vb" style="--a:16deg; --d:0.6s; transform-origin:140px 100px">
                <path d="M 140 95 C 110 55, 60 45, 15 65 C 40 78, 45 88, 32 100 C 65 94, 100 106, 140 115 Z" fill="#78350f" stroke="#451a03" stroke-width="2" />
                <path d="M 40 82 L 70 88 M 55 72 L 85 82" stroke="#b45309" stroke-width="3" stroke-linecap="round" />
              </g>
              <!-- Sayap kanan (mengepak) -->
              <g class="a-rock vb" style="--a:-16deg; --d:0.6s; transform-origin:140px 100px">
                <path d="M 140 95 C 170 55, 220 45, 265 65 C 240 78, 235 88, 248 100 C 215 94, 180 106, 140 115 Z" fill="#78350f" stroke="#451a03" stroke-width="2" />
                <path d="M 240 82 L 210 88 M 225 72 L 195 82" stroke="#b45309" stroke-width="3" stroke-linecap="round" />
              </g>
              <!-- Ekor, badan, cakar -->
              <path d="M 124 140 L 140 172 L 156 140 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
              <ellipse cx="140" cy="115" rx="24" ry="36" fill="#92400e" />
              <path d="M 130 146 L 126 158 M 150 146 L 154 158" stroke="#facc15" stroke-width="4" stroke-linecap="round" />
              <!-- Kepala putih -->
              <circle cx="140" cy="70" r="20" fill="#f8fafc" />
              <path d="M 128 62 L 137 65 M 152 62 L 143 65" stroke="#1e293b" stroke-width="2.5" stroke-linecap="round" />
              <g class="a-blink">
                <circle cx="133" cy="68" r="3" fill="#0f172a" />
                <circle cx="147" cy="68" r="3" fill="#0f172a" />
              </g>
              <path d="M 132 76 Q 150 72 147 90 Q 142 82 134 82 Z" fill="#facc15" stroke="#ca8a04" stroke-width="1.5" />
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 2,
    name: "TOMAS",
    formula: "TOMAT (T terakhir ➔ S) = TOMAS",
    story: "Salah satu dari 12 murid Yesus yang tidak mau percaya Yesus bangkit sebelum melihat sendiri bekas paku di tangan-Nya. Saat Yesus menampakkan diri, ia berseru: 'Ya Tuhanku dan Allahku!'",
    verse: "Yohanes 20:24-28",
    hint: "Kisah: Murid yang ingin mencucukkan jarinya ke bekas paku di tangan Yesus sebelum percaya.",
    cards: [
      {
        badgeHtml: `${del("T")}${AKHIR} ${TO} ${add("S")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="gTomat" cx="40%" cy="35%" r="70%">
                <stop offset="0%" stop-color="#fca5a5" />
                <stop offset="35%" stop-color="#ef4444" />
                <stop offset="100%" stop-color="#991b1b" />
              </radialGradient>
            </defs>
            <ellipse class="a-hopshadow" style="--d:1.8s" cx="140" cy="168" rx="70" ry="14" fill="rgba(0,0,0,0.3)" />
            ${spark(58, 60, 1, 0)}
            ${spark(225, 72, 0.8, 0.6)}
            ${spark(228, 145, 0.6, 1.1)}
            <g class="a-hop vb" style="--d:1.8s; transform-origin:140px 163px">
              <ellipse cx="140" cy="105" rx="68" ry="58" fill="url(#gTomat)" stroke="#b91c1c" stroke-width="2" />
              <path d="M 140 52 L 120 40 L 132 58 L 108 60 L 132 66 L 140 78 L 148 66 L 172 60 L 148 58 L 160 40 Z" fill="#16a34a" stroke="#15803d" stroke-width="2" stroke-linejoin="round" />
              <rect x="137" y="32" width="6" height="18" rx="3" fill="#15803d" />
              <ellipse cx="112" cy="88" rx="12" ry="7" fill="#ffffff" opacity="0.45" transform="rotate(-30 112 88)" />
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 3,
    name: "HARUN",
    formula: "JARUM (J ➔ H, M ➔ N) = HARUN",
    story: "Kakak Musa yang menjadi juru bicaranya di hadapan Firaun. Tongkatnya berubah menjadi ular di depan Firaun, dan ia menjadi imam besar pertama bangsa Israel.",
    verse: "Keluaran 4:14-16; 7:10; 28:1",
    hint: "Kisah: Kakak Musa yang menjadi juru bicaranya di hadapan Firaun dan menjadi imam besar pertama.",
    cards: [
      {
        badgeHtml: `${del("J")} ${TO} ${add("H")} ${DOT} ${del("M")} ${TO} ${add("N")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gJarum" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f8fafc" />
                <stop offset="100%" stop-color="#64748b" />
              </linearGradient>
            </defs>
            <ellipse cx="140" cy="172" rx="100" ry="12" fill="rgba(0,0,0,0.3)" />
            <!-- Benang (seperti sedang menjahit) -->
            <path class="a-draw" style="--len:460; --d:2.4s" d="M 198 73 C 240 40, 265 120, 225 140 C 190 158, 165 120, 130 150 C 110 166, 90 160, 75 150" stroke="#ef4444" stroke-width="4" fill="none" stroke-linecap="round" />
            <!-- Jarum -->
            <g class="a-rock vb" style="--a:4deg; --d:1.2s; transform-origin:198px 73px">
              <g transform="rotate(-25 140 100)">
                <rect x="50" y="95" width="170" height="10" rx="5" fill="url(#gJarum)" stroke="#475569" stroke-width="1.5" />
                <polygon points="52,95 18,100 52,105" fill="#cbd5e1" stroke="#475569" stroke-width="1.5" />
                <ellipse cx="204" cy="100" rx="10" ry="2.5" fill="#1e293b" />
              </g>
            </g>
            ${spark(26, 158, 0.9, 0.3, "#ffffff")}
            ${spark(120, 60, 0.7, 1, "#ffffff")}
          </svg>
        `
      }
    ]
  },
  {
    id: 4,
    name: "SARA",
    formula: "SARANG - NG = SARA",
    story: "Istri Abraham yang tertawa ketika dijanjikan akan mempunyai anak di masa tuanya. Allah menepati janji-Nya dan Sara melahirkan Ishak pada usia 90 tahun.",
    verse: "Kejadian 18:12-14; 21:1-3",
    hint: "Kisah: Istri Abraham yang tertawa mendengar ia akan punya anak di masa tua.",
    cards: [
      {
        badgeHtml: `${del("NG")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="168" rx="95" ry="14" fill="rgba(0,0,0,0.3)" />
            ${spark(60, 45, 1, 0)}
            ${spark(222, 40, 0.8, 0.8)}
            <!-- Sarang bagian belakang -->
            <ellipse cx="140" cy="95" rx="88" ry="20" fill="#78350f" />
            <!-- Telur bergoyang -->
            <ellipse class="a-rock ob" style="--a:7deg; --d:0.8s" cx="108" cy="86" rx="17" ry="22" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2" />
            <ellipse class="a-rock ob" style="--a:-7deg; --d:0.8s; animation-delay:0.4s" cx="172" cy="86" rx="17" ry="22" fill="#e0f2fe" stroke="#7dd3fc" stroke-width="2" />
            <g class="a-hop vb" style="--d:1.6s; transform-origin:140px 104px">
              <ellipse cx="140" cy="80" rx="18" ry="24" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
              <path d="M 126 76 L 133 70 L 139 78 L 146 70 L 154 77" stroke="#94a3b8" stroke-width="2" fill="none" stroke-linejoin="round" />
            </g>
            <!-- Sarang bagian depan -->
            <path d="M 52 95 C 58 165, 222 165, 228 95 Z" fill="#92400e" stroke="#78350f" stroke-width="3" />
            <path d="M 60 105 Q 140 130 220 102" stroke="#d97706" stroke-width="3" fill="none" />
            <path d="M 66 120 Q 140 145 214 118" stroke="#b45309" stroke-width="3" fill="none" />
            <path d="M 80 135 Q 140 155 200 133" stroke="#d97706" stroke-width="3" fill="none" />
            <path d="M 48 92 L 75 112 M 232 92 L 205 110 M 100 100 L 125 140 M 180 100 L 160 142" stroke="#b45309" stroke-width="3" stroke-linecap="round" />
          </svg>
        `
      }
    ]
  },
  {
    id: 5,
    name: "MARIA",
    formula: "MERIAM (E ➔ A, M terakhir ✕) = MARIA",
    story: "Perempuan muda dari Nazaret yang dikunjungi malaikat Gabriel dan dipilih Allah menjadi ibu Tuhan Yesus. Ia menjawab dengan rendah hati: 'Sesungguhnya aku ini adalah hamba Tuhan.'",
    verse: "Lukas 1:26-38",
    hint: "Kisah: Perempuan dari Nazaret yang dikunjungi malaikat Gabriel dan menjadi ibu Yesus.",
    cards: [
      {
        badgeHtml: `${del("E")} ${TO} ${add("A")} ${DOT} ${del("M")}${AKHIR} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gMeriam" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#94a3b8" />
                <stop offset="50%" stop-color="#334155" />
                <stop offset="100%" stop-color="#0f172a" />
              </linearGradient>
            </defs>
            <ellipse cx="140" cy="168" rx="115" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Meriam (mundur saat menembak) -->
            <g class="a-recoil" style="--d:3s">
              <g transform="rotate(-22 120 105)">
                <circle cx="48" cy="105" r="13" fill="#1e293b" stroke="#64748b" stroke-width="2" />
                <rect x="52" y="86" width="150" height="38" rx="16" fill="url(#gMeriam)" stroke="#0f172a" stroke-width="2" />
                <rect x="194" y="81" width="16" height="48" rx="4" fill="#475569" stroke="#0f172a" stroke-width="2" />
                <rect x="100" y="84" width="10" height="42" rx="2" fill="#fbbf24" opacity="0.8" />
              </g>
              <circle cx="105" cy="132" r="34" fill="#78350f" stroke="#451a03" stroke-width="5" />
              <path d="M 105 98 L 105 166 M 71 132 L 139 132 M 81 108 L 129 156 M 129 108 L 81 156" stroke="#451a03" stroke-width="4" />
              <circle cx="105" cy="132" r="9" fill="#fbbf24" stroke="#92400e" stroke-width="2" />
            </g>
            <!-- Kilatan & asap tembakan -->
            <path class="a-flash" style="--d:3s" d="M 222 62 L 230 46 L 234 60 L 250 54 L 238 66 L 252 76 L 234 72 L 228 88 L 224 72 L 208 74 Z" fill="#fbbf24" />
            <circle class="a-puff" style="--d:3s" cx="232" cy="52" r="14" fill="#e2e8f0" />
            <circle class="a-puff" style="--d:3s; animation-delay:0.08s" cx="250" cy="38" r="10" fill="#e2e8f0" />
            <circle class="a-puff" style="--d:3s; animation-delay:0.16s" cx="248" cy="64" r="8" fill="#e2e8f0" />
            <!-- Peluru meriam -->
            <circle cx="205" cy="158" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />
            <circle cx="231" cy="158" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />
            <circle cx="218" cy="138" r="12" fill="#475569" stroke="#94a3b8" stroke-width="2" />
            <circle cx="214" cy="134" r="3" fill="#cbd5e1" />
            <circle cx="201" cy="154" r="3" fill="#cbd5e1" />
            <circle cx="227" cy="154" r="3" fill="#cbd5e1" />
          </svg>
        `
      }
    ]
  },
  {
    id: 6,
    name: "YAKUB",
    formula: "PAKU (P ➔ Y) + B = YAKUB",
    story: "Anak Ishak dan adik kembar Esau. Di Betel ia bermimpi melihat tangga yang sampai ke langit. Setelah bergumul dengan Allah, namanya diganti menjadi Israel. Ayah dari 12 suku Israel.",
    verse: "Kejadian 28:12; 32:28",
    hint: "Kisah: Bermimpi melihat tangga yang sampai ke langit, dan namanya diganti menjadi Israel.",
    cards: [
      {
        badgeHtml: `${del("P")} ${TO} ${add("Y")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gPaku" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#64748b" />
                <stop offset="50%" stop-color="#e2e8f0" />
                <stop offset="100%" stop-color="#64748b" />
              </linearGradient>
            </defs>
            <ellipse cx="120" cy="158" rx="60" ry="12" fill="rgba(0,0,0,0.3)" />
            <!-- Paku (seperti sedang dipukul masuk) -->
            <g class="a-tap" style="--d:1.4s">
              <g transform="rotate(25 120 90)">
                <ellipse cx="120" cy="30" rx="30" ry="9" fill="#cbd5e1" stroke="#64748b" stroke-width="2" />
                <rect x="113" y="36" width="14" height="96" fill="url(#gPaku)" />
                <polygon points="113,132 127,132 120,156" fill="#94a3b8" />
                <line x1="113" y1="44" x2="127" y2="48" stroke="#64748b" stroke-width="2" />
                <line x1="113" y1="52" x2="127" y2="56" stroke="#64748b" stroke-width="2" />
              </g>
            </g>
            <g class="a-impact" style="--d:1.4s">
              ${star(168, 20, 0.9)}
              ${star(126, 14, 0.7)}
              ${star(176, 50, 0.6)}
            </g>
          </svg>
        `
      },
      {
        operator: "+"
      },
      {
        letter: "B"
      }
    ]
  },
  {
    id: 7,
    name: "HAGAR",
    formula: "PAGAR (P ➔ H) = HAGAR",
    story: "Hamba perempuan Sara yang berasal dari Mesir, ibu dari Ismael. Ketika ia dan anaknya kehausan di padang gurun, Allah mendengar suara anak itu dan menunjukkan sebuah sumur.",
    verse: "Kejadian 16:1, 15; 21:17-19",
    hint: "Kisah: Hamba Sara dari Mesir, ibu Ismael, yang ditolong Allah dengan sumur di padang gurun.",
    cards: [
      {
        badgeHtml: `${del("P")} ${TO} ${add("H")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="168" rx="125" ry="16" fill="#166534" opacity="0.8" />
            <!-- Palang -->
            <rect x="22" y="82" width="236" height="13" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2" />
            <rect x="22" y="128" width="236" height="13" rx="3" fill="#b45309" stroke="#78350f" stroke-width="2" />
            <!-- Tiang Pagar -->
            <polygon points="34,62 51,38 68,62 68,165 34,165" fill="#f59e0b" stroke="#92400e" stroke-width="2.5" />
            <polygon points="82,62 99,38 116,62 116,165 82,165" fill="#f59e0b" stroke="#92400e" stroke-width="2.5" />
            <polygon points="130,62 147,38 164,62 164,165 130,165" fill="#f59e0b" stroke="#92400e" stroke-width="2.5" />
            <polygon points="178,62 195,38 212,62 212,165 178,165" fill="#f59e0b" stroke="#92400e" stroke-width="2.5" />
            <polygon points="226,62 243,38 260,62 260,165 226,165" fill="#f59e0b" stroke="#92400e" stroke-width="2.5" />
            <!-- Rumput bergoyang -->
            <path class="a-rock ob" style="--a:8deg; --d:1.4s" d="M 20 168 L 28 152 L 34 168 L 42 150 L 50 168" stroke="#22c55e" stroke-width="3" fill="none" />
            <path class="a-rock ob" style="--a:8deg; --d:1.4s; animation-delay:0.3s" d="M 100 168 L 108 150 L 114 168" stroke="#22c55e" stroke-width="3" fill="none" />
            <path class="a-rock ob" style="--a:8deg; --d:1.4s; animation-delay:0.6s" d="M 180 168 L 188 152 L 194 168 L 202 150 L 210 168" stroke="#22c55e" stroke-width="3" fill="none" />
            <!-- Kupu-kupu terbang -->
            <g class="a-flyabout" style="--d:7s">
              <g transform="translate(222 30)">
                <g class="a-flapx" style="--d:0.15s">
                  <ellipse cx="-8" cy="-4" rx="9" ry="11" fill="#f472b6" />
                  <ellipse cx="8" cy="-4" rx="9" ry="11" fill="#f472b6" />
                  <ellipse cx="-6" cy="8" rx="6" ry="7" fill="#c084fc" />
                  <ellipse cx="6" cy="8" rx="6" ry="7" fill="#c084fc" />
                </g>
                <rect x="-1.5" y="-10" width="3" height="22" rx="1.5" fill="#1e293b" />
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 8,
    name: "RUT",
    formula: "ROTI (O ➔ U, I ✕) = RUT",
    story: "Perempuan Moab yang setia kepada mertuanya Naomi: 'Ke mana engkau pergi, ke situ jugalah aku pergi.' Ia memungut jelai di ladang Boas, lalu menikah dengannya dan menjadi nenek buyut Raja Daud.",
    verse: "Rut 1:16; 4:13-17",
    hint: "Kisah: Menantu setia yang ikut mertuanya Naomi ke Betlehem dan memungut jelai di ladang Boas.",
    cards: [
      {
        badgeHtml: `${del("O")} ${TO} ${add("U")} ${DOT} ${del("I")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gRoti" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#d97706" />
                <stop offset="100%" stop-color="#92400e" />
              </linearGradient>
            </defs>
            <ellipse cx="140" cy="184" rx="85" ry="10" fill="rgba(0,0,0,0.3)" />
            <!-- Uap hangat -->
            <path class="a-rise" style="--d:2.4s" d="M 110 34 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
            <path class="a-rise" style="--d:2.4s; animation-delay:0.8s" d="M 140 30 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
            <path class="a-rise" style="--d:2.4s; animation-delay:1.6s" d="M 170 34 q -7 -6 0 -12 q 7 -6 0 -12" stroke="#e2e8f0" stroke-width="4" fill="none" stroke-linecap="round" />
            <!-- Roti Tawar (irisan) -->
            <g transform="translate(0 20)">
              <g class="a-pulse ob" style="--s:1.04; --d:1.2s">
                <path d="M 80 160 L 80 85 C 45 80, 50 28, 100 32 C 120 18, 160 18, 180 32 C 230 28, 235 80, 200 85 L 200 160 Z" fill="url(#gRoti)" stroke="#78350f" stroke-width="3" />
                <path transform="translate(140 95) scale(0.84) translate(-140 -95)" d="M 80 160 L 80 85 C 45 80, 50 28, 100 32 C 120 18, 160 18, 180 32 C 230 28, 235 80, 200 85 L 200 160 Z" fill="#fef3c7" />
                <circle cx="115" cy="80" r="3" fill="#fcd34d" />
                <circle cx="155" cy="70" r="2.5" fill="#fcd34d" />
                <circle cx="140" cy="115" r="3" fill="#fcd34d" />
                <circle cx="170" cy="120" r="2.5" fill="#fcd34d" />
                <circle cx="110" cy="130" r="2.5" fill="#fcd34d" />
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 9,
    name: "KALEB",
    formula: "KALENG (NG ➔ B) = KALEB",
    story: "Salah satu dari 12 pengintai tanah Kanaan. Bersama Yosua ia percaya Tuhan sanggup memberi kemenangan. Karena setia, ia boleh masuk tanah perjanjian dan menerima Hebron pada usia 85 tahun.",
    verse: "Bilangan 13:30; 14:24; Yosua 14:10-13",
    hint: "Kisah: Pengintai yang setia bersama Yosua dan berkata: 'Kita akan sanggup mengalahkannya!'",
    cards: [
      {
        badgeHtml: `${del("NG")} ${TO} ${add("B")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gKaleng" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#64748b" />
                <stop offset="35%" stop-color="#f1f5f9" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>
            </defs>
            <ellipse cx="140" cy="172" rx="70" ry="12" fill="rgba(0,0,0,0.3)" />
            <!-- Kaleng bergoyang -->
            <g class="a-rock vb" style="--a:4deg; --d:1.1s; transform-origin:140px 170px">
              <ellipse cx="140" cy="160" rx="48" ry="13" fill="#475569" />
              <rect x="92" y="45" width="96" height="115" fill="url(#gKaleng)" />
              <path d="M 92 62 Q 140 74 188 62 M 92 145 Q 140 157 188 145" stroke="#94a3b8" stroke-width="3" fill="none" />
              <path d="M 92 78 Q 140 90 188 78 L 188 132 Q 140 144 92 132 Z" fill="#ef4444" />
              <path d="M 92 88 Q 140 100 188 88 M 92 122 Q 140 134 188 122" stroke="#fbbf24" stroke-width="3" fill="none" />
              <circle cx="140" cy="108" r="12" fill="#fef3c7" />
              <ellipse cx="140" cy="45" rx="48" ry="13" fill="#e2e8f0" stroke="#94a3b8" stroke-width="2" />
              <ellipse cx="140" cy="45" rx="40" ry="9" fill="none" stroke="#94a3b8" stroke-width="1.5" />
              <ellipse cx="152" cy="43" rx="10" ry="4" fill="none" stroke="#64748b" stroke-width="2.5" />
            </g>
            ${spark(78, 50, 1, 0, "#ffffff")}
            ${spark(205, 75, 0.8, 0.5)}
            ${spark(208, 150, 0.6, 1)}
          </svg>
        `
      }
    ]
  },
  {
    id: 10,
    name: "SAUL",
    formula: "SAUS (S terakhir ➔ L) = SAUL",
    story: "Raja pertama Israel yang diurapi Nabi Samuel. Badannya lebih tinggi dari semua orang, tetapi kemudian tidak taat kepada Tuhan dan iri hati kepada Daud.",
    verse: "1 Samuel 10:1, 23-24; 18:8-9",
    hint: "Kisah: Raja pertama bangsa Israel yang diurapi Nabi Samuel, lalu iri hati kepada Daud.",
    cards: [
      {
        badgeHtml: `${del("S")}${AKHIR} ${TO} ${add("L")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="168" rx="60" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Botol Saus Tomat (dipencet) -->
            <g class="a-squeeze vb" style="--d:1.6s; transform-origin:140px 164px">
              <rect x="132" y="6" width="16" height="12" rx="3" fill="#e2e8f0" />
              <rect x="122" y="16" width="36" height="20" rx="4" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
              <path d="M 120 62 L 126 36 L 154 36 L 160 62 Z" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
              <rect x="102" y="60" width="76" height="104" rx="18" fill="#dc2626" stroke="#991b1b" stroke-width="3" />
              <rect x="112" y="70" width="8" height="80" rx="4" fill="#ffffff" opacity="0.3" />
              <rect x="112" y="90" width="56" height="46" rx="8" fill="#fef3c7" />
              <circle cx="140" cy="115" r="14" fill="#ef4444" />
              <path d="M 133 102 L 140 106 L 147 102 L 144 108 L 136 108 Z" fill="#16a34a" />
            </g>
            <!-- Tetesan saus jatuh -->
            <ellipse class="a-pulse" style="--s:1.15; --d:0.8s" cx="215" cy="166" rx="18" ry="5" fill="#b91c1c" />
            ${drop(215, 128, 0, 22, "#dc2626")}
            ${drop(232, 120, 0.7, 30, "#dc2626")}
          </svg>
        `
      }
    ]
  },
  {
    id: 11,
    name: "AYUB",
    formula: "PAYUNG (P ✕, NG ➔ B) = AYUB",
    story: "Orang saleh dari tanah Us yang kehilangan hartanya, anak-anaknya, dan kesehatannya, tetapi tetap tidak berbuat dosa dengan bibirnya. Pada akhirnya Tuhan memulihkan keadaannya dua kali lipat.",
    verse: "Ayub 1:21-22; 42:10",
    hint: "Kisah: Orang saleh yang kehilangan segalanya tetapi tetap setia: 'TUHAN yang memberi, TUHAN yang mengambil.'",
    cards: [
      {
        badgeHtml: `${del("P")} ${X} ${DOT} ${del("NG")} ${TO} ${add("B")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="184" rx="60" ry="10" fill="rgba(0,0,0,0.3)" />
            <!-- Hujan (tertutup payung) -->
            ${drop(70, 6, 0, 70)}
            ${drop(110, 0, 0.5, 60)}
            ${drop(170, 4, 0.9, 60)}
            ${drop(210, 10, 0.3, 70)}
            ${drop(140, 0, 1.2, 50)}
            ${drop(26, 80, 0.7, 70)}
            ${drop(254, 76, 0.2, 70)}
            ${drop(40, 30, 1.1, 60)}
            ${drop(244, 26, 0.6, 60)}
            <!-- Payung bergoyang ditiup angin -->
            <g class="a-rock vb" style="--a:5deg; --d:1.8s; transform-origin:140px 178px">
              <line x1="140" y1="30" x2="140" y2="160" stroke="#475569" stroke-width="5" stroke-linecap="round" />
              <path d="M 140 158 Q 140 180 124 180 Q 110 180 110 166" stroke="#92400e" stroke-width="8" fill="none" stroke-linecap="round" />
              <path d="M 40 105 C 40 35, 240 35, 240 105 Q 215 88 190 105 Q 165 88 140 105 Q 115 88 90 105 Q 65 88 40 105 Z" fill="#3b82f6" stroke="#1d4ed8" stroke-width="2.5" />
              <path d="M 140 45 Q 105 70 90 105 Q 115 88 140 105 Z" fill="#facc15" opacity="0.85" />
              <path d="M 140 45 Q 175 70 190 105 Q 215 88 240 105 C 240 70, 200 47, 140 45 Z" fill="#facc15" opacity="0.85" />
              <path d="M 140 45 Q 105 70 90 105 M 140 45 Q 175 70 190 105 M 140 45 L 140 105" stroke="#1d4ed8" stroke-width="2.5" fill="none" />
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 12,
    name: "ESAU",
    formula: "ES + (PISAU - PIS) = ESAU",
    story: "Kakak kembar Yakub, seorang pemburu yang tubuhnya berbulu. Karena sangat lapar, ia menjual hak kesulungannya kepada Yakub hanya demi semangkuk sup kacang merah.",
    verse: "Kejadian 25:27-34",
    hint: "Kisah: Pemburu yang menukar hak kesulungannya dengan semangkuk sup kacang merah.",
    cards: [
      {
        badgeHtml: null,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gEs" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stop-color="#e0f2fe" />
                <stop offset="100%" stop-color="#7dd3fc" />
              </linearGradient>
            </defs>
            <ellipse class="a-shadow" style="--d:1.8s" cx="105" cy="150" rx="55" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Es batu mengambang -->
            <g class="a-bob" style="--d:1.8s; --y:-10px">
              <path d="M 60 70 L 110 50 L 150 70 L 100 90 Z" fill="#bae6fd" stroke="#0284c7" stroke-width="2" />
              <path d="M 60 70 L 100 90 L 100 135 L 60 115 Z" fill="url(#gEs)" stroke="#0284c7" stroke-width="2" />
              <path d="M 100 90 L 150 70 L 150 115 L 100 135 Z" fill="#38bdf8" stroke="#0284c7" stroke-width="2" />
              <path d="M 72 82 L 72 100" stroke="#ffffff" stroke-width="4" stroke-linecap="round" opacity="0.7" />
            </g>
            ${spark(160, 42, 1, 0, "#ffffff")}
            ${spark(48, 52, 0.7, 0.7, "#ffffff")}
            ${drop(130, 132, 0.4, 16, "#bae6fd")}
          </svg>
        `
      },
      {
        operator: "+"
      },
      {
        badgeHtml: `${del("PIS")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gPisau" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#f8fafc" />
                <stop offset="100%" stop-color="#94a3b8" />
              </linearGradient>
            </defs>
            <ellipse cx="120" cy="145" rx="80" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Pisau -->
            <g class="a-rock" style="--a:5deg; --d:1.5s">
              <g transform="rotate(-15 120 95)">
                <path d="M 25 100 L 140 80 L 140 112 Q 80 116 25 100 Z" fill="url(#gPisau)" stroke="#64748b" stroke-width="2" />
                <rect x="138" y="76" width="8" height="40" rx="2" fill="#475569" />
                <rect x="146" y="82" width="68" height="28" rx="9" fill="#92400e" stroke="#78350f" stroke-width="2" />
                <circle cx="165" cy="96" r="3.5" fill="#e2e8f0" />
                <circle cx="195" cy="96" r="3.5" fill="#e2e8f0" />
              </g>
            </g>
            ${spark(70, 98, 1, 0.2, "#ffffff")}
            ${spark(115, 84, 0.6, 0.9, "#ffffff")}
          </svg>
        `
      }
    ]
  },
  {
    id: 13,
    name: "HANA",
    formula: "PANAH (P ➔ H, H terakhir ✕) = HANA",
    story: "Perempuan yang berdoa sungguh-sungguh sambil menangis di rumah Tuhan di Silo, memohon seorang anak. Allah menjawab doanya, dan ia menyerahkan anaknya, Samuel, untuk melayani Tuhan seumur hidupnya.",
    verse: "1 Samuel 1:10-11, 20, 27-28",
    hint: "Kisah: Ibu yang berdoa sambil menangis di rumah Tuhan memohon anak, lalu melahirkan Samuel.",
    cards: [
      {
        badgeHtml: `${del("P")} ${TO} ${add("H")} ${DOT} ${del("H")}${AKHIR} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="175" rx="110" ry="12" fill="rgba(0,0,0,0.3)" />
            <!-- Papan sasaran (bergetar saat kena) -->
            <g class="a-target" style="--d:3s">
              <circle cx="215" cy="95" r="52" fill="#ef4444" stroke="#991b1b" stroke-width="3" />
              <circle cx="215" cy="95" r="38" fill="#f8fafc" />
              <circle cx="215" cy="95" r="25" fill="#ef4444" />
              <circle cx="215" cy="95" r="11" fill="#facc15" />
            </g>
            <!-- Anak panah melesat -->
            <g class="a-arrow vb" style="--d:3s; transform-origin:216px 95px">
              <line x1="30" y1="160" x2="205" y2="99" stroke="#92400e" stroke-width="6" stroke-linecap="round" />
              <polygon points="216,95 194,92 200,110" fill="#94a3b8" stroke="#475569" stroke-width="2" />
              <polygon points="30,160 22,140 52,150" fill="#22c55e" />
              <polygon points="30,160 42,178 52,153" fill="#16a34a" />
              <polygon points="46,154 38,134 66,145" fill="#22c55e" />
              <polygon points="46,154 58,172 66,148" fill="#16a34a" />
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 14,
    name: "KAIN",
    formula: "KAIL (L ➔ N) = KAIN",
    story: "Anak sulung Adam dan Hawa, seorang petani. Ketika persembahannya tidak diindahkan Tuhan, ia iri hati dan membunuh adiknya sendiri, Habel.",
    verse: "Kejadian 4:2-9",
    hint: "Kisah: Anak sulung Adam yang bertanya: 'Apakah aku penjaga adikku?'",
    cards: [
      {
        badgeHtml: `${del("L")} ${TO} ${add("N")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clipAirKail">
                <rect x="10" y="0" width="260" height="60" />
              </clipPath>
            </defs>
            <!-- Permukaan air berombak -->
            <g clip-path="url(#clipAirKail)">
              <g class="a-wave" style="--w:-100px; --d:2.5s">
                <path d="M -100 30 Q -75 20 -50 30 T 0 30 T 50 30 T 100 30 T 150 30 T 200 30 T 250 30 T 300 30 T 350 30 T 400 30" stroke="#38bdf8" stroke-width="4" fill="none" opacity="0.7" />
              </g>
            </g>
            <!-- Gelembung -->
            <circle class="a-rise" style="--d:2.2s" cx="70" cy="110" r="5" fill="#bae6fd" opacity="0.6" />
            <circle class="a-rise" style="--d:2.6s; animation-delay:0.9s" cx="205" cy="130" r="7" fill="#bae6fd" opacity="0.5" />
            <circle class="a-rise" style="--d:2s; animation-delay:1.5s" cx="230" cy="90" r="4" fill="#bae6fd" opacity="0.6" />
            <!-- Pelampung, senar & mata kail -->
            <g class="a-bob" style="--d:1.6s; --y:6px">
              <line x1="150" y1="-20" x2="150" y2="68" stroke="#e2e8f0" stroke-width="2.5" />
              <ellipse cx="150" cy="30" rx="9" ry="13" fill="#ef4444" />
              <path d="M 141 30 A 9 13 0 0 0 159 30 Z" fill="#ffffff" />
              <circle cx="150" cy="74" r="7" fill="none" stroke="#cbd5e1" stroke-width="4" />
              <path d="M 150 81 L 150 140 A 32 32 0 0 1 86 140 L 86 112" stroke="#cbd5e1" stroke-width="8" fill="none" stroke-linecap="round" />
              <polygon points="86,96 76,118 96,116" fill="#cbd5e1" />
              <!-- Umpan cacing menggeliat -->
              <path class="a-rock" style="--a:10deg; --d:0.5s" d="M 112 170 q 8 -10 16 0 q 8 10 16 0 q 8 -10 16 0" stroke="#f472b6" stroke-width="7" fill="none" stroke-linecap="round" />
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 15,
    name: "RAHEL",
    formula: "RAKET (K ➔ H, T ➔ L) = RAHEL",
    story: "Anak bungsu Laban yang cantik. Yakub sangat mengasihinya sehingga rela bekerja bertahun-tahun untuk menikahinya; tujuh tahun terasa seperti beberapa hari saja. Ia menjadi ibu dari Yusuf dan Benyamin.",
    verse: "Kejadian 29:18, 20; 35:24",
    hint: "Kisah: Istri yang paling dikasihi Yakub, ibu dari Yusuf dan Benyamin.",
    cards: [
      {
        badgeHtml: `${del("K")} ${TO} ${add("H")} ${DOT} ${del("T")} ${TO} ${add("L")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clipRaket">
                <ellipse cx="120" cy="72" rx="36" ry="48" />
              </clipPath>
            </defs>
            <ellipse cx="140" cy="182" rx="100" ry="10" fill="rgba(0,0,0,0.3)" />
            <!-- Raket mengayun -->
            <g class="a-rock vb" style="--a:12deg; --d:0.9s; transform-origin:165px 192px">
              <g transform="rotate(-28 120 110)">
                <g clip-path="url(#clipRaket)" stroke="#e2e8f0" stroke-width="1.5">
                  <path d="M 90 20 V 125 M 100 20 V 125 M 110 20 V 125 M 120 20 V 125 M 130 20 V 125 M 140 20 V 125 M 150 20 V 125" />
                  <path d="M 80 30 H 160 M 80 40 H 160 M 80 50 H 160 M 80 60 H 160 M 80 70 H 160 M 80 80 H 160 M 80 90 H 160 M 80 100 H 160 M 80 110 H 160" />
                </g>
                <ellipse cx="120" cy="72" rx="38" ry="50" fill="none" stroke="#ef4444" stroke-width="7" />
                <path d="M 108 120 L 120 142 L 132 120" stroke="#ef4444" stroke-width="5" fill="none" />
                <rect x="116" y="140" width="8" height="30" fill="#94a3b8" />
                <rect x="113" y="168" width="14" height="38" rx="5" fill="#1e293b" />
              </g>
            </g>
            <!-- Kok melambung -->
            <g class="a-shuttle" style="--d:1.8s">
              <g transform="rotate(30 225 120)">
                <path d="M 212 85 L 238 85 L 232 125 L 218 125 Z" fill="#f8fafc" stroke="#cbd5e1" stroke-width="2" />
                <path d="M 218 85 L 221 125 M 225 85 L 225 125 M 232 85 L 229 125" stroke="#cbd5e1" stroke-width="1.5" />
                <path d="M 218 125 Q 225 142 232 125 Z" fill="#fbbf24" stroke="#d97706" stroke-width="2" />
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 16,
    name: "HABEL",
    formula: "KABEL (K ➔ H) = HABEL",
    story: "Anak kedua Adam dan Hawa, seorang gembala kambing domba. Ia mempersembahkan anak sulung kambing dombanya yang terbaik, sehingga Tuhan mengindahkan persembahannya.",
    verse: "Kejadian 4:2-4; Ibrani 11:4",
    hint: "Kisah: Gembala yang mempersembahkan yang terbaik dan persembahannya diterima Tuhan.",
    cards: [
      {
        badgeHtml: `${del("K")} ${TO} ${add("H")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="140" cy="165" rx="105" ry="18" fill="rgba(0,0,0,0.3)" />
            <!-- Kabel + aliran listrik -->
            <path d="M 25 150 C 60 50, 110 190, 158 100" stroke="#1e293b" stroke-width="12" fill="none" stroke-linecap="round" />
            <path d="M 25 150 C 60 50, 110 190, 158 100" stroke="#475569" stroke-width="4" fill="none" stroke-linecap="round" />
            <path class="a-flow" style="--d:1.2s" d="M 25 150 C 60 50, 110 190, 158 100" stroke="#fde047" stroke-width="5" fill="none" stroke-linecap="round" />
            <!-- Steker -->
            <rect x="155" y="78" width="54" height="44" rx="10" fill="#334155" stroke="#64748b" stroke-width="3" />
            <rect x="163" y="86" width="6" height="28" rx="3" fill="#475569" />
            <rect x="209" y="87" width="28" height="7" rx="2" fill="#fbbf24" />
            <rect x="209" y="106" width="28" height="7" rx="2" fill="#fbbf24" />
            <!-- Percikan listrik -->
            <polygon class="a-flicker" style="--d:1s" points="250,70 242,90 252,90 244,110 262,84 252,84 258,70" fill="#facc15" />
            ${spark(258, 125, 0.7, 0.3, "#fde047")}
            ${spark(236, 62, 0.5, 0.8, "#fde047")}
          </svg>
        `
      }
    ]
  },
  {
    id: 17,
    name: "TITUS",
    formula: "TIKUS (K ➔ T) = TITUS",
    story: "Rekan sekerja Rasul Paulus yang setia. Ia ditinggalkan di Pulau Kreta untuk mengatur jemaat dan menetapkan penatua di setiap kota. Paulus menulis sebuah surat kepadanya yang ada di Alkitab.",
    verse: "Titus 1:4-5; 2 Korintus 8:23",
    hint: "Kisah: Rekan Paulus yang ditugaskan di Pulau Kreta dan menerima surat dari Paulus.",
    cards: [
      {
        badgeHtml: `${del("K")} ${TO} ${add("T")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="145" cy="165" rx="95" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Ekor bergoyang -->
            <path class="a-rock vb" style="--a:10deg; --d:0.8s; transform-origin:210px 125px" d="M 210 125 C 255 125, 262 70, 238 52 C 225 44, 220 60, 232 62" stroke="#f9a8d4" stroke-width="5" fill="none" stroke-linecap="round" />
            <!-- Badan (bernapas) -->
            <ellipse class="a-pulse ob" style="--s:1.03; --d:0.9s" cx="160" cy="118" rx="62" ry="42" fill="#9ca3af" stroke="#6b7280" stroke-width="2" />
            <ellipse cx="135" cy="158" rx="12" ry="5" fill="#f9a8d4" />
            <ellipse cx="190" cy="158" rx="12" ry="5" fill="#f9a8d4" />
            <!-- Kepala -->
            <path d="M 130 92 Q 75 80 42 118 Q 75 140 130 138 Z" fill="#9ca3af" />
            <path d="M 125 91 Q 75 80 42 118 Q 75 140 125 139" fill="none" stroke="#6b7280" stroke-width="2" />
            <!-- Telinga -->
            <circle cx="100" cy="82" r="20" fill="#9ca3af" stroke="#6b7280" stroke-width="2" />
            <circle cx="100" cy="82" r="12" fill="#fda4af" />
            <g class="a-rock ob" style="--a:8deg; --d:1.2s">
              <circle cx="124" cy="78" r="18" fill="#9ca3af" stroke="#6b7280" stroke-width="2" />
              <circle cx="124" cy="78" r="10" fill="#fda4af" />
            </g>
            <!-- Mata berkedip -->
            <g class="a-blink" style="--d:3s">
              <circle cx="80" cy="107" r="5" fill="#0f172a" />
              <circle cx="82" cy="105" r="1.8" fill="#ffffff" />
            </g>
            <!-- Kumis & hidung bergerak -->
            <g class="a-rock vb" style="--a:6deg; --d:0.3s; transform-origin:58px 120px">
              <path d="M 58 116 L 30 106 M 58 120 L 28 122 M 58 124 L 32 136" stroke="#e2e8f0" stroke-width="1.5" />
            </g>
            <circle class="a-pulse" style="--s:1.3; --d:0.3s" cx="42" cy="118" r="6" fill="#f472b6" />
          </svg>
        `
      }
    ]
  },
  {
    id: 18,
    name: "MARTA",
    formula: "MARTIL (IL ➔ A) = MARTA",
    story: "Saudara Maria dan Lazarus dari Betania. Ketika Yesus berkunjung, ia sibuk sekali melayani, sedangkan Maria duduk mendengarkan. Yesus berkata Maria telah memilih bagian yang terbaik.",
    verse: "Lukas 10:38-42",
    hint: "Kisah: Perempuan dari Betania yang sibuk melayani Yesus di rumah, sementara saudarinya duduk mendengarkan.",
    cards: [
      {
        badgeHtml: `${del("IL")} ${TO} ${add("A")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gKayuMartil" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stop-color="#92400e" />
                <stop offset="50%" stop-color="#d97706" />
                <stop offset="100%" stop-color="#92400e" />
              </linearGradient>
              <linearGradient id="gBesiMartil" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#cbd5e1" />
                <stop offset="100%" stop-color="#475569" />
              </linearGradient>
            </defs>
            <ellipse cx="140" cy="172" rx="80" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Martil mengayun memukul -->
            <g class="a-hammer vb" style="--d:1.6s; transform-origin:175px 160px">
              <g transform="rotate(-30 140 100)">
                <rect x="131" y="62" width="18" height="108" rx="7" fill="url(#gKayuMartil)" stroke="#78350f" stroke-width="2" />
                <rect x="96" y="34" width="70" height="34" rx="5" fill="url(#gBesiMartil)" stroke="#334155" stroke-width="2" />
                <path d="M 166 38 Q 195 30 205 14 Q 200 42 166 64 Z" fill="url(#gBesiMartil)" stroke="#334155" stroke-width="2" />
                <rect x="86" y="38" width="12" height="26" rx="2" fill="#64748b" />
              </g>
            </g>
            <!-- Bintang benturan -->
            <g class="a-impact" style="--d:1.6s">
              ${star(48, 100, 1)}
              ${star(62, 130, 0.7)}
              ${star(36, 74, 0.6)}
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 19,
    name: "SEM",
    formula: "SEMUT - UT = SEM",
    story: "Salah satu dari tiga anak Nuh, bersama Ham dan Yafet. Ia ikut masuk ke dalam bahtera dan selamat dari air bah. Abraham dan bangsa Israel adalah keturunan Sem.",
    verse: "Kejadian 6:10; 7:13; 11:10, 26",
    hint: "Kisah: Salah satu dari tiga anak Nuh (bersama Ham dan Yafet) yang selamat di dalam bahtera.",
    cards: [
      {
        badgeHtml: `${del("UT")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <ellipse cx="145" cy="164" rx="110" ry="12" fill="rgba(0,0,0,0.3)" />
            <!-- Semut berjalan -->
            <g class="a-bob" style="--d:0.25s; --y:-3px">
              <g class="a-rock vb" style="--a:7deg; --d:0.25s; transform-origin:128px 106px">
                <path d="M 120 112 L 95 135 L 85 158 M 136 112 L 160 135 L 168 158 M 128 98 L 132 75 L 120 64" stroke="#7f1d1d" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <g class="a-rock vb" style="--a:-7deg; --d:0.25s; transform-origin:128px 106px">
                <path d="M 128 115 L 125 140 L 115 160 M 118 100 L 92 80 L 80 92 M 138 100 L 165 82 L 178 92" stroke="#7f1d1d" stroke-width="4" fill="none" stroke-linecap="round" stroke-linejoin="round" />
              </g>
              <ellipse cx="200" cy="108" rx="44" ry="32" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2" />
              <ellipse cx="128" cy="106" rx="22" ry="15" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2" />
              <circle cx="78" cy="98" r="24" fill="#b91c1c" stroke="#7f1d1d" stroke-width="2" />
              <ellipse cx="190" cy="96" rx="16" ry="8" fill="#fca5a5" opacity="0.5" />
              <g class="a-blink" style="--d:3.5s">
                <circle cx="68" cy="92" r="6" fill="#ffffff" />
                <circle cx="66" cy="92" r="3" fill="#0f172a" />
              </g>
              <!-- Antena -->
              <g class="a-rock vb" style="--a:8deg; --d:0.7s; transform-origin:78px 78px">
                <path d="M 70 76 Q 55 45 35 40 M 86 76 Q 92 45 110 36" stroke="#7f1d1d" stroke-width="3.5" fill="none" stroke-linecap="round" />
                <circle cx="35" cy="40" r="4" fill="#7f1d1d" />
                <circle cx="110" cy="36" r="4" fill="#7f1d1d" />
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 20,
    name: "SIMON",
    formula: "LEMON (LE ➔ SI) = SIMON",
    story: "Orang dari Kirene yang sedang lewat ketika Yesus dibawa ke Golgota. Tentara Romawi memaksanya untuk memikul salib Yesus.",
    verse: "Lukas 23:26; Markus 15:21",
    hint: "Kisah: Orang dari Kirene yang dipaksa tentara memikul salib Yesus.",
    cards: [
      {
        badgeHtml: `${del("LE")} ${TO} ${add("SI")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="gLemon" cx="40%" cy="35%" r="70%">
                <stop offset="0%" stop-color="#fef9c3" />
                <stop offset="40%" stop-color="#fde047" />
                <stop offset="100%" stop-color="#ca8a04" />
              </radialGradient>
            </defs>
            <ellipse cx="140" cy="168" rx="100" ry="14" fill="rgba(0,0,0,0.3)" />
            <!-- Buah Lemon bergoyang -->
            <g class="a-rock vb" style="--a:5deg; --d:1.4s; transform-origin:115px 150px">
              <circle cx="42" cy="95" r="8" fill="#eab308" />
              <circle cx="188" cy="95" r="8" fill="#eab308" />
              <path d="M 46 95 Q 56 40 115 40 Q 174 40 184 95 Q 174 150 115 150 Q 56 150 46 95 Z" fill="url(#gLemon)" stroke="#ca8a04" stroke-width="2" />
              <path d="M 115 40 Q 125 15 150 18 Q 140 40 115 40 Z" fill="#22c55e" stroke="#15803d" stroke-width="2" />
              <ellipse cx="90" cy="72" rx="16" ry="7" fill="#ffffff" opacity="0.5" transform="rotate(-20 90 72)" />
            </g>
            <!-- Irisan Lemon berputar -->
            <g class="a-spin" style="--d:10s">
              <circle cx="215" cy="135" r="32" fill="#fde047" stroke="#eab308" stroke-width="4" />
              <circle cx="215" cy="135" r="25" fill="#fef9c3" />
              <path d="M 215 112 L 215 158 M 192 135 L 238 135 M 199 119 L 231 151 M 231 119 L 199 151" stroke="#fde047" stroke-width="3" />
            </g>
            ${spark(230, 50, 1, 0)}
            ${spark(30, 150, 0.7, 0.8)}
          </svg>
        `
      }
    ]
  },
  {
    id: 21,
    name: "DELILA",
    formula: "DELIMA (M ➔ L) = DELILA",
    story: "Perempuan dari lembah Sorek yang dibujuk raja-raja kota Filistin untuk mencari tahu rahasia kekuatan Simson. Rambut Simson dicukur ketika ia tidur, sehingga kekuatannya hilang.",
    verse: "Hakim-hakim 16:4-6, 19",
    hint: "Kisah: Perempuan yang terus membujuk Simson sampai ia membuka rahasia kekuatannya.",
    cards: [
      {
        badgeHtml: `${del("M")} ${TO} ${add("L")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <radialGradient id="gDelima" cx="40%" cy="35%" r="70%">
                <stop offset="0%" stop-color="#fda4af" />
                <stop offset="40%" stop-color="#e11d48" />
                <stop offset="100%" stop-color="#881337" />
              </radialGradient>
            </defs>
            <ellipse class="a-hopshadow" style="--d:1.8s" cx="115" cy="168" rx="65" ry="12" fill="rgba(0,0,0,0.3)" />
            <ellipse cx="218" cy="170" rx="40" ry="8" fill="rgba(0,0,0,0.3)" />
            <!-- Buah Delima utuh (melompat) -->
            <g class="a-hop vb" style="--d:1.8s; transform-origin:115px 163px">
              <polygon points="98,52 100,30 108,44 115,26 122,44 130,30 132,52" fill="#9f1239" stroke="#881337" stroke-width="2" stroke-linejoin="round" />
              <circle cx="115" cy="105" r="58" fill="url(#gDelima)" stroke="#881337" stroke-width="2" />
              <ellipse cx="92" cy="82" rx="14" ry="7" fill="#ffffff" opacity="0.4" transform="rotate(-30 92 82)" />
            </g>
            <!-- Delima terbelah, biji berkilau -->
            <circle cx="218" cy="132" r="40" fill="#fecdd3" stroke="#be123c" stroke-width="6" />
            <g fill="#e11d48">
              <circle class="a-pulse" style="--s:1.25; --d:0.6s" cx="205" cy="118" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.2s" cx="220" cy="114" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.4s" cx="234" cy="122" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.1s" cx="200" cy="133" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.3s" cx="215" cy="130" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.5s" cx="230" cy="137" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.25s" cx="207" cy="147" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.45s" cx="222" cy="150" r="6" />
              <circle class="a-pulse" style="--s:1.25; --d:0.6s; animation-delay:0.15s" cx="237" cy="150" r="5" />
            </g>
            ${spark(250, 90, 0.8, 0.3)}
          </svg>
        `
      }
    ]
  },
  {
    id: 22,
    name: "LEA",
    formula: "LEBAH (B ✕, H ✕) = LEA",
    story: "Anak sulung Laban dan kakak Rahel. Laban menipu Yakub sehingga Yakub menikahi Lea lebih dulu. Lea menjadi ibu dari Yehuda, nenek moyang Raja Daud.",
    verse: "Kejadian 29:16-25, 35",
    hint: "Kisah: Kakak Rahel yang dinikahkan Laban kepada Yakub dengan cara menipu.",
    cards: [
      {
        badgeHtml: `${del("B")} ${X} ${DOT} ${del("H")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <clipPath id="clipLebah">
                <ellipse cx="150" cy="110" rx="62" ry="42" />
              </clipPath>
            </defs>
            <ellipse class="a-shadow" style="--d:1.3s" cx="145" cy="180" rx="80" ry="10" fill="rgba(0,0,0,0.3)" />
            <!-- Jejak terbang -->
            <path d="M 236 112 Q 262 140 250 165 Q 238 185 268 192" stroke="#fde68a" stroke-width="2.5" stroke-dasharray="4 7" fill="none" opacity="0.6" />
            <!-- Lebah terbang ke sana kemari -->
            <g class="a-buzz" style="--d:2.6s">
              <!-- Sayap bergetar cepat -->
              <g class="a-flutter ob" style="--d:0.07s">
                <ellipse cx="135" cy="58" rx="26" ry="38" fill="#e0f2fe" opacity="0.75" stroke="#7dd3fc" stroke-width="2" transform="rotate(-25 135 58)" />
              </g>
              <g class="a-flutter ob" style="--d:0.07s; animation-delay:0.035s">
                <ellipse cx="172" cy="60" rx="22" ry="32" fill="#e0f2fe" opacity="0.75" stroke="#7dd3fc" stroke-width="2" transform="rotate(20 172 60)" />
              </g>
              <polygon points="208,104 236,112 208,120" fill="#3f3f46" stroke="#facc15" stroke-width="2" stroke-linejoin="round" />
              <ellipse cx="150" cy="110" rx="62" ry="42" fill="#facc15" stroke="#ca8a04" stroke-width="2" />
              <g clip-path="url(#clipLebah)">
                <rect x="128" y="60" width="16" height="100" fill="#1e293b" />
                <rect x="162" y="60" width="16" height="100" fill="#1e293b" />
                <rect x="196" y="60" width="16" height="100" fill="#1e293b" />
              </g>
              <circle cx="84" cy="108" r="28" fill="#3f3f46" stroke="#facc15" stroke-width="3" />
              <g class="a-blink" style="--d:3s">
                <circle cx="74" cy="100" r="8" fill="#ffffff" />
                <circle cx="72" cy="100" r="4" fill="#0f172a" />
              </g>
              <path d="M 70 118 Q 78 124 86 118" stroke="#facc15" stroke-width="2.5" fill="none" stroke-linecap="round" />
              <g class="a-rock vb" style="--a:8deg; --d:0.6s; transform-origin:86px 82px">
                <path d="M 80 82 Q 70 55 55 52 M 92 82 Q 95 55 108 48" stroke="#fde047" stroke-width="3" fill="none" stroke-linecap="round" />
                <circle cx="55" cy="52" r="5" fill="#fde047" />
                <circle cx="108" cy="48" r="5" fill="#fde047" />
              </g>
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 23,
    name: "HAMAN",
    formula: "TAMAN (T ➔ H) = HAMAN",
    story: "Pembesar jahat Raja Ahasyweros yang sangat marah karena Mordekhai tidak mau sujud kepadanya. Ia merencanakan untuk membinasakan semua orang Yahudi, tetapi rencananya digagalkan oleh Ratu Ester.",
    verse: "Ester 3:5-6; 7:6, 10",
    hint: "Kisah: Pembesar jahat yang ingin membinasakan orang Yahudi, tetapi digagalkan oleh Ratu Ester.",
    cards: [
      {
        badgeHtml: `${del("T")} ${TO} ${add("H")}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 280 200" xmlns="http://www.w3.org/2000/svg">
            <!-- Matahari bersinar -->
            <g class="a-spin" style="--d:12s">
              <path d="M 262 35 L 270 35 M 255.6 50.6 L 261.2 56.2 M 240 57 L 240 65 M 224.4 50.6 L 218.8 56.2 M 218 35 L 210 35 M 224.4 19.4 L 218.8 13.8 M 240 13 L 240 5 M 255.6 19.4 L 261.2 13.8" stroke="#facc15" stroke-width="4" stroke-linecap="round" />
            </g>
            <circle class="a-pulse" style="--s:1.12; --d:1.2s" cx="240" cy="35" r="16" fill="#facc15" />
            <!-- Awan berarak -->
            <g class="a-driftx" style="--d:8s">
              <circle cx="130" cy="34" r="12" fill="#e2e8f0" opacity="0.85" />
              <circle cx="146" cy="27" r="15" fill="#e2e8f0" opacity="0.85" />
              <circle cx="163" cy="34" r="12" fill="#e2e8f0" opacity="0.85" />
              <rect x="130" y="34" width="33" height="12" fill="#e2e8f0" opacity="0.85" />
            </g>
            <!-- Rumput -->
            <ellipse cx="140" cy="165" rx="132" ry="26" fill="#15803d" />
            <path d="M 120 190 Q 135 165 160 150 L 180 150 Q 160 168 150 190 Z" fill="#d6d3d1" opacity="0.8" />
            <!-- Pohon bergoyang -->
            <g class="a-rock vb" style="--a:2.5deg; --d:2s; transform-origin:58px 160px">
              <rect x="50" y="95" width="16" height="65" rx="3" fill="#78350f" />
              <circle cx="58" cy="70" r="34" fill="#16a34a" />
              <circle cx="35" cy="88" r="22" fill="#22c55e" />
              <circle cx="82" cy="86" r="22" fill="#15803d" />
              <circle cx="45" cy="62" r="4" fill="#ef4444" />
              <circle cx="72" cy="78" r="4" fill="#ef4444" />
            </g>
            <!-- Bangku taman -->
            <rect x="160" y="95" width="90" height="8" rx="2" fill="#b45309" />
            <rect x="160" y="108" width="90" height="8" rx="2" fill="#b45309" />
            <rect x="155" y="125" width="100" height="10" rx="2" fill="#d97706" />
            <path d="M 165 103 L 165 150 M 245 103 L 245 150" stroke="#1e293b" stroke-width="5" stroke-linecap="round" />
            <!-- Bunga bergoyang -->
            <g class="a-rock ob" style="--a:10deg; --d:1.2s">
              <line x1="105" y1="160" x2="105" y2="140" stroke="#22c55e" stroke-width="3" />
              <circle cx="105" cy="136" r="7" fill="#f472b6" /><circle cx="105" cy="136" r="3" fill="#facc15" />
            </g>
            <g class="a-rock ob" style="--a:10deg; --d:1.2s; animation-delay:0.4s">
              <line x1="125" y1="168" x2="125" y2="148" stroke="#22c55e" stroke-width="3" />
              <circle cx="125" cy="144" r="7" fill="#facc15" /><circle cx="125" cy="144" r="3" fill="#f97316" />
            </g>
            <g class="a-rock ob" style="--a:10deg; --d:1.2s; animation-delay:0.8s">
              <line x1="22" y1="168" x2="22" y2="150" stroke="#22c55e" stroke-width="3" />
              <circle cx="22" cy="146" r="7" fill="#a78bfa" /><circle cx="22" cy="146" r="3" fill="#facc15" />
            </g>
          </svg>
        `
      }
    ]
  },
  {
    id: 24,
    name: "PAULUS",
    formula: "(PAUS - S) + (BULU - BU) + S = PAULUS",
    story: "Dahulu bernama Saulus dan menganiaya jemaat. Di jalan ke Damsyik ia dikelilingi cahaya dari langit dan bertemu Yesus. Ia lalu menjadi rasul bagi bangsa-bangsa lain dan menulis banyak surat dalam Perjanjian Baru.",
    verse: "Kisah Para Rasul 9:3-6; 13:9",
    hint: "Kisah: Penganiaya jemaat yang bertemu Yesus dalam cahaya terang di jalan ke Damsyik, lalu menjadi rasul besar.",
    cards: [
      {
        badgeHtml: `${del("S")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 240 190" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <linearGradient id="gPaus" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stop-color="#3b82f6" />
                <stop offset="100%" stop-color="#1e3a8a" />
              </linearGradient>
            </defs>
            <ellipse class="a-shadow" style="--d:2s" cx="120" cy="158" rx="80" ry="12" fill="rgba(0,0,0,0.3)" />
            <g class="a-bob" style="--d:2s; --y:-8px">
              <!-- Semburan air -->
              <g class="a-spout vb" style="--d:1s; transform-origin:80px 58px">
                <path d="M 80 58 Q 70 30 55 28 M 80 58 Q 80 25 80 18 M 80 58 Q 90 30 105 28" stroke="#7dd3fc" stroke-width="4" fill="none" stroke-linecap="round" />
                <circle cx="55" cy="26" r="4" fill="#7dd3fc" />
                <circle cx="105" cy="26" r="4" fill="#7dd3fc" />
              </g>
              <!-- Ikan Paus -->
              <path d="M 25 105 C 25 55, 150 50, 180 95 L 220 65 L 208 105 L 220 140 L 180 118 C 150 150, 25 150, 25 105 Z" fill="url(#gPaus)" stroke="#1e40af" stroke-width="2" />
              <path d="M 30 115 C 60 140, 140 140, 172 116" fill="#bfdbfe" opacity="0.8" />
              <g class="a-blink" style="--d:3.5s">
                <circle cx="58" cy="95" r="6" fill="#ffffff" />
                <circle cx="59" cy="96" r="3" fill="#0f172a" />
              </g>
              <path d="M 30 112 Q 45 118 58 112" stroke="#1e3a8a" stroke-width="2" fill="none" />
            </g>
          </svg>
        `
      },
      {
        operator: "+"
      },
      {
        badgeHtml: `${del("BU")} ${X}`,
        svg: `
          <svg width="100%" height="100%" viewBox="0 0 200 180" xmlns="http://www.w3.org/2000/svg">
            <ellipse class="a-shadow" style="--d:1.5s" cx="100" cy="160" rx="50" ry="10" fill="rgba(0,0,0,0.3)" />
            <!-- Bulu melayang -->
            <g class="a-drift" style="--d:3s">
              <path d="M 150 18 C 185 60, 135 125, 70 142 C 72 98, 105 48, 150 18 Z" fill="#a78bfa" stroke="#7c3aed" stroke-width="2" />
              <path d="M 50 165 L 150 18" stroke="#f5f3ff" stroke-width="4" stroke-linecap="round" />
              <path d="M 120 62 L 150 70 M 108 80 L 140 92 M 96 98 L 126 112 M 120 62 L 102 52 M 108 80 L 88 74 M 96 98 L 80 98" stroke="#7c3aed" stroke-width="2" />
            </g>
            ${spark(40, 40, 0.8, 0.4)}
          </svg>
        `
      },
      {
        operator: "+"
      },
      {
        letter: "S"
      }
    ]
  }
];
