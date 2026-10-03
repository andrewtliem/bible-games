/* ==========================================================
   LEVEL 3 - 100 SOAL, 2-4 KARTU, OPERASI HURUF GANDA (PALING SULIT)
   Dibuat dari data/spec yang sudah diverifikasi huruf demi huruf.
   ========================================================== */
const LEVEL1_PIC = {"ELANG": ["ELIA", 0], "TOMAT": ["TOMAS", 0], "JARUM": ["HARUN", 0], "SARANG": ["SARA", 0], "MERIAM": ["MARIA", 0], "PAKU": ["YAKUB", 0], "PAGAR": ["HAGAR", 0], "ROTI": ["RUT", 0], "KALENG": ["KALEB", 0], "SAUS": ["SAUL", 0], "PAYUNG": ["AYUB", 0], "ES": ["ESAU", 0], "PISAU": ["ESAU", 2], "PANAH": ["HANA", 0], "KAIL": ["KAIN", 0], "RAKET": ["RAHEL", 0], "KABEL": ["HABEL", 0], "TIKUS": ["TITUS", 0], "MARTIL": ["MARTA", 0], "SEMUT": ["SEM", 0], "LEMON": ["SIMON", 0], "DELIMA": ["DELILA", 0], "LEBAH": ["LEA", 0], "TAMAN": ["HAMAN", 0], "PAUS": ["PAULUS", 0], "BULU": ["PAULUS", 2]};
function pic(word) {
  const key = word.toLowerCase();
  if (ART3[key]) return ART3[key];
  if (ART[key]) return ART[key];
  const [name, index] = LEVEL1_PIC[word];
  return fromLevel1(name, index);
}

const LEVEL3 = [
  {
    id: 1,
    name: "METUSALAH",
    formula: "(MEJA - JA) + (KAKTUS - KAK) + (KAPAL - KAP) + (GAJAH - GAJ) = METUSALAH",
    story: "Orang yang paling panjang umurnya di dalam Alkitab: ia hidup sampai 969 tahun. Ia adalah kakek Nuh.",
    verse: "Kejadian 5:25-27",
    hint: "Kisah: Tokoh yang hidup paling lama di Alkitab, yaitu 969 tahun.",
    cards: [
      { svg: pic("MEJA"), badgeHtml: `${del("JA")} ${X}` },
      { operator: "+" },
      { svg: pic("KAKTUS"), badgeHtml: `${del("KAK")} ${X}` },
      { operator: "+" },
      { svg: pic("KAPAL"), badgeHtml: `${del("KAP")} ${X}` },
      { operator: "+" },
      { svg: pic("GAJAH"), badgeHtml: `${del("GAJ")} ${X}` }
    ]
  },
  {
    id: 2,
    name: "MELKISEDEK",
    formula: "APEL (A ✕, P ➔ M) + (KIPAS - PAS) + (SEMUT - MUT) + TEKO (T ➔ D, O ✕) = MELKISEDEK",
    story: "Raja Salem dan imam Allah Yang Mahatinggi. Ia menyambut Abram dengan roti dan anggur lalu memberkatinya, dan Abram memberikan sepersepuluh dari semuanya kepadanya.",
    verse: "Kejadian 14:18-20",
    hint: "Kisah: Raja Salem dan imam Allah Yang Mahatinggi yang memberkati Abram dengan roti dan anggur.",
    cards: [
      { svg: pic("APEL"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("M")}` },
      { operator: "+" },
      { svg: pic("KIPAS"), badgeHtml: `${del("PAS")} ${X}` },
      { operator: "+" },
      { svg: pic("SEMUT"), badgeHtml: `${del("MUT")} ${X}` },
      { operator: "+" },
      { svg: pic("TEKO"), badgeHtml: `${del("T")} ${TO} ${add("D")} ${DOT} ${del("O")} ${X}` }
    ]
  },
  {
    id: 3,
    name: "ABRAHAM",
    formula: "(KABEL - K - EL) + (RAKET - KET) + JAM (J ➔ H) = ABRAHAM",
    story: "Bapa orang beriman. Ia taat ketika Allah menyuruhnya meninggalkan negerinya, dan Allah berjanji keturunannya akan sebanyak bintang di langit.",
    verse: "Kejadian 12:1-4; 15:5-6",
    hint: "Kisah: Bapa orang beriman yang dijanjikan keturunan sebanyak bintang di langit.",
    cards: [
      { svg: pic("KABEL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("EL")} ${X}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("KET")} ${X}` },
      { operator: "+" },
      { svg: pic("JAM"), badgeHtml: `${del("J")} ${TO} ${add("H")}` }
    ]
  },
  {
    id: 4,
    name: "ELIEZER",
    formula: "(APEL - AP) + (MIE - M) + EMBER (EM ✕, B ➔ Z) = ELIEZER",
    story: "Hamba Abraham, orang Damsyik. Sebelum Ishak lahir, Abraham mengira hamba inilah yang akan menjadi ahli warisnya, tetapi Allah berjanji memberi Abraham anak kandung.",
    verse: "Kejadian 15:2-4",
    hint: "Kisah: Hamba Abraham dari Damsyik yang hampir menjadi ahli waris Abraham.",
    cards: [
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("M")} ${X}` },
      { operator: "+" },
      { svg: pic("EMBER"), badgeHtml: `${del("EM")} ${X} ${DOT} ${del("B")} ${TO} ${add("Z")}` }
    ]
  },
  {
    id: 5,
    name: "ISMAEL",
    formula: "(PISAU - P - AU) + (MATA - TA) + (APEL - AP) = ISMAEL",
    story: "Anak Abraham dan Hagar. Ketika ia kehausan di padang gurun, Allah mendengar suaranya dan berjanji menjadikannya bangsa yang besar.",
    verse: "Kejadian 16:11; 21:17-18",
    hint: "Kisah: Anak Abraham dan Hagar yang suaranya didengar Allah di padang gurun.",
    cards: [
      { svg: pic("PISAU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("AU")} ${X}` },
      { operator: "+" },
      { svg: pic("MATA"), badgeHtml: `${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 6,
    name: "ISHAK",
    formula: "(SISIR - S - IR) + (HATI - TI) + K = ISHAK",
    story: "Anak yang dijanjikan Allah kepada Abraham dan Sara di masa tua mereka; namanya berarti \"tertawa\". Di Gunung Moria, Allah menyediakan seekor domba jantan sebagai gantinya.",
    verse: "Kejadian 21:1-6; 22:13",
    hint: "Kisah: Anak Abraham yang namanya berarti 'tertawa'.",
    cards: [
      { svg: pic("SISIR"), badgeHtml: `${del("S")}${AWAL} ${X} ${DOT} ${del("IR")} ${X}` },
      { operator: "+" },
      { svg: pic("HATI"), badgeHtml: `${del("TI")} ${X}` },
      { operator: "+" },
      { letter: "K" }
    ]
  },
  {
    id: 7,
    name: "BETUEL",
    formula: "(BENANG - NANG) + (BATU - BA) + (APEL - AP) = BETUEL",
    story: "Ayah Ribka dan Laban. Hamba Abraham datang ke rumahnya untuk meminang Ribka bagi Ishak, dan ia berkata, \"Semuanya ini datang dari TUHAN.\"",
    verse: "Kejadian 24:15, 50",
    hint: "Kisah: Ayah Ribka dan Laban, yang setuju Ribka dipinang untuk Ishak.",
    cards: [
      { svg: pic("BENANG"), badgeHtml: `${del("NANG")} ${X}` },
      { operator: "+" },
      { svg: pic("BATU"), badgeHtml: `${del("BA")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 8,
    name: "RIBKA",
    formula: "(PIRING - PI - NG) + B + (KAIL - IL) = RIBKA",
    story: "Gadis yang dengan murah hati memberi minum hamba Abraham dan juga semua untanya. Ia kemudian menjadi istri Ishak.",
    verse: "Kejadian 24:15-20, 67",
    hint: "Kisah: Gadis yang menimba air untuk unta-unta hamba Abraham, lalu menjadi istri Ishak.",
    cards: [
      { svg: pic("PIRING"), badgeHtml: `${del("PI")} ${X} ${DOT} ${del("NG")} ${X}` },
      { operator: "+" },
      { letter: "B" },
      { operator: "+" },
      { svg: pic("KAIL"), badgeHtml: `${del("IL")} ${X}` }
    ]
  },
  {
    id: 9,
    name: "ZEBULON",
    formula: "(ZEBRA - BRA) + (BUS - S) + (BALON - BA) = ZEBULON",
    story: "Anak keenam Lea dan Yakub. Yakub memberkatinya dan berkata keturunannya akan tinggal di tepi pantai.",
    verse: "Kejadian 30:20; 49:13",
    hint: "Kisah: Anak keenam Lea yang keturunannya akan tinggal di tepi pantai.",
    cards: [
      { svg: pic("ZEBRA"), badgeHtml: `${del("BRA")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("S")} ${X}` },
      { operator: "+" },
      { svg: pic("BALON"), badgeHtml: `${del("BA")} ${X}` }
    ]
  },
  {
    id: 10,
    name: "NAFTALI",
    formula: "NASI (S ➔ F, I ✕) + (TAS - S) + (TALI - TA) = NAFTALI",
    story: "Anak Yakub dari Bilha, hamba Rahel. Rahel menamainya demikian karena berkata, \"Aku telah bergulat dengan kakakku, dan aku pun menang.\"",
    verse: "Kejadian 30:7-8",
    hint: "Kisah: Anak Yakub dari Bilha yang namanya berhubungan dengan 'bergulat'.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("S")} ${TO} ${add("F")} ${DOT} ${del("I")} ${X}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("S")} ${X}` },
      { operator: "+" },
      { svg: pic("TALI"), badgeHtml: `${del("TA")} ${X}` }
    ]
  },
  {
    id: 11,
    name: "YEHUDA",
    formula: "(MONYET - MON - T) + BUS (B ➔ H, S ✕) + (DAUN - UN) = YEHUDA",
    story: "Anak Yakub yang rela menjadi budak menggantikan Benyamin. Dari sukunya lahir Raja Daud dan Tuhan Yesus.",
    verse: "Kejadian 44:33; 49:10",
    hint: "Kisah: Saudara Yusuf yang rela menjadi budak menggantikan adiknya Benyamin.",
    cards: [
      { svg: pic("MONYET"), badgeHtml: `${del("MON")} ${X} ${DOT} ${del("T")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${TO} ${add("H")} ${DOT} ${del("S")} ${X}` },
      { operator: "+" },
      { svg: pic("DAUN"), badgeHtml: `${del("UN")} ${X}` }
    ]
  },
  {
    id: 12,
    name: "BENYAMIN",
    formula: "(BENANG - ANG) + (AYAM - A) + (LILIN - LIL) = BENYAMIN",
    story: "Anak bungsu Yakub dan Rahel. Piala perak Yusuf ditemukan di dalam karung gandumnya.",
    verse: "Kejadian 35:18; 44:12",
    hint: "Kisah: Anak bungsu Yakub yang di karungnya ditemukan piala perak Yusuf.",
    cards: [
      { svg: pic("BENANG"), badgeHtml: `${del("ANG")} ${X}` },
      { operator: "+" },
      { svg: pic("AYAM"), badgeHtml: `${del("A")}${AWAL} ${X}` },
      { operator: "+" },
      { svg: pic("LILIN"), badgeHtml: `${del("LIL")} ${X}` }
    ]
  },
  {
    id: 13,
    name: "EFRAIM",
    formula: "ES (S ➔ F) + (RAKET - KET) + (TIMUN - T - UN) = EFRAIM",
    story: "Anak kedua Yusuf. Yakub sengaja meletakkan tangan kanannya ke atas kepalanya, sehingga ia diberkati lebih dari kakaknya, Manasye.",
    verse: "Kejadian 48:14-20",
    hint: "Kisah: Cucu Yakub yang menerima berkat tangan kanan walaupun ia anak yang lebih muda.",
    cards: [
      { svg: pic("ES"), badgeHtml: `${del("S")} ${TO} ${add("F")}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("KET")} ${X}` },
      { operator: "+" },
      { svg: pic("TIMUN"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("UN")} ${X}` }
    ]
  },
  {
    id: 14,
    name: "POTIFAR",
    formula: "(POHON - HON) + (ROTI - RO) + ULAR (U ✕, L ➔ F) = POTIFAR",
    story: "Pegawai istana Firaun dan kepala pengawal raja. Ia membeli Yusuf dan mempercayakan seluruh rumahnya kepada Yusuf.",
    verse: "Kejadian 39:1-6",
    hint: "Kisah: Kepala pengawal Firaun yang membeli Yusuf sebagai budak.",
    cards: [
      { svg: pic("POHON"), badgeHtml: `${del("HON")} ${X}` },
      { operator: "+" },
      { svg: pic("ROTI"), badgeHtml: `${del("RO")} ${X}` },
      { operator: "+" },
      { svg: pic("ULAR"), badgeHtml: `${del("U")} ${X} ${DOT} ${del("L")} ${TO} ${add("F")}` }
    ]
  },
  {
    id: 15,
    name: "YOKHEBED",
    formula: "(YOYO - YO) + KUE (U ➔ H) + EMBER (EM ✕, R ➔ D) = YOKHEBED",
    story: "Ibu Musa. Ia menyembunyikan bayinya selama tiga bulan, lalu meletakkannya di dalam peti pandan di tepi Sungai Nil.",
    verse: "Keluaran 2:1-3; 6:20",
    hint: "Kisah: Ibu yang menyembunyikan bayi Musa di dalam peti pandan di Sungai Nil.",
    cards: [
      { svg: pic("YOYO"), badgeHtml: `${del("YO")}${AWAL} ${X}` },
      { operator: "+" },
      { svg: pic("KUE"), badgeHtml: `${del("U")} ${TO} ${add("H")}` },
      { operator: "+" },
      { svg: pic("EMBER"), badgeHtml: `${del("EM")} ${X} ${DOT} ${del("R")} ${TO} ${add("D")}` }
    ]
  },
  {
    id: 16,
    name: "ZIPORA",
    formula: "API (A ✕, P ➔ Z) + (POHON - HON) + (RAKET - KET) = ZIPORA",
    story: "Istri Musa, anak imam Midian. Musa menolong dia dan saudara-saudaranya memberi minum kambing domba di dekat sumur.",
    verse: "Keluaran 2:16-21",
    hint: "Kisah: Istri Musa, anak imam Midian yang ditolong Musa di dekat sumur.",
    cards: [
      { svg: pic("API"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("Z")}` },
      { operator: "+" },
      { svg: pic("POHON"), badgeHtml: `${del("HON")} ${X}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("KET")} ${X}` }
    ]
  },
  {
    id: 17,
    name: "GERSOM",
    formula: "(GELAS - LAS) + ES (E ➔ R) + (TOMAT - T - AT) = GERSOM",
    story: "Anak sulung Musa dan Zipora. Musa berkata, \"Aku telah menjadi seorang pendatang di negeri asing.\"",
    verse: "Keluaran 2:22",
    hint: "Kisah: Anak sulung Musa yang lahir ketika Musa tinggal di tanah Midian.",
    cards: [
      { svg: pic("GELAS"), badgeHtml: `${del("LAS")} ${X}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: `${del("E")} ${TO} ${add("R")}` },
      { operator: "+" },
      { svg: pic("TOMAT"), badgeHtml: `${del("T")}${AWAL} ${X} ${DOT} ${del("AT")} ${X}` }
    ]
  },
  {
    id: 18,
    name: "KORAH",
    formula: "BOR (B ➔ K) + (GAJAH - GAJ) = KORAH",
    story: "Orang Lewi yang memberontak melawan Musa dan Harun. Tanah terbuka dan menelan para pemberontak itu.",
    verse: "Bilangan 16:1-3, 31-33",
    hint: "Kisah: Pemimpin pemberontakan melawan Musa; tanah terbuka dan menelan para pemberontak.",
    cards: [
      { svg: pic("BOR"), badgeHtml: `${del("B")} ${TO} ${add("K")}` },
      { operator: "+" },
      { svg: pic("GAJAH"), badgeHtml: `${del("GAJ")} ${X}` }
    ]
  },
  {
    id: 19,
    name: "BALAK",
    formula: "(BATU - TU) + (BOLA - BO) + K = BALAK",
    story: "Raja Moab yang memanggil Bileam untuk mengutuk bangsa Israel, tetapi Bileam justru memberkati Israel.",
    verse: "Bilangan 22:4-6; 23:11",
    hint: "Kisah: Raja Moab yang menyuruh Bileam mengutuk Israel.",
    cards: [
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("BOLA"), badgeHtml: `${del("BO")} ${X}` },
      { operator: "+" },
      { letter: "K" }
    ]
  },
  {
    id: 20,
    name: "OTNIEL",
    formula: "(ROTI - R - I) + MIE (M ➔ N, E ✕) + (APEL - AP) = OTNIEL",
    story: "Hakim pertama bangsa Israel, kemenakan Kaleb. Roh TUHAN menghinggapinya dan ia melepaskan Israel dari musuhnya.",
    verse: "Hakim-hakim 3:9-11",
    hint: "Kisah: Hakim pertama Israel, kemenakan Kaleb.",
    cards: [
      { svg: pic("ROTI"), badgeHtml: `${del("R")} ${X} ${DOT} ${del("I")} ${X}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("M")} ${TO} ${add("N")} ${DOT} ${del("E")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 21,
    name: "SISERA",
    formula: "(NASI - NA) + (SEMUT - MUT) + (RAKET - KET) = SISERA",
    story: "Panglima tentara Kanaan yang mempunyai 900 kereta besi. Ia dikalahkan oleh Barak bersama Debora.",
    verse: "Hakim-hakim 4:2-3, 15",
    hint: "Kisah: Panglima dengan 900 kereta besi yang dikalahkan Barak dan Debora.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("NA")} ${X}` },
      { operator: "+" },
      { svg: pic("SEMUT"), badgeHtml: `${del("MUT")} ${X}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("KET")} ${X}` }
    ]
  },
  {
    id: 22,
    name: "SAMGAR",
    formula: "(SAMPAN - PAN) + (PAGAR - PA) = SAMGAR",
    story: "Hakim Israel yang menewaskan 600 orang Filistin hanya dengan sebuah tongkat penghalau lembu.",
    verse: "Hakim-hakim 3:31",
    hint: "Kisah: Hakim yang mengalahkan 600 orang Filistin dengan tongkat penghalau lembu.",
    cards: [
      { svg: pic("SAMPAN"), badgeHtml: `${del("PAN")} ${X}` },
      { operator: "+" },
      { svg: pic("PAGAR"), badgeHtml: `${del("PA")} ${X}` }
    ]
  },
  {
    id: 23,
    name: "MANOAH",
    formula: "(MATA - TA) + BOR (B ➔ N, R ✕) + (GAJAH - GAJ) = MANOAH",
    story: "Ayah Simson. Malaikat TUHAN memberitahukan kelahiran anaknya, lalu naik ke langit di dalam nyala api dari mezbah.",
    verse: "Hakim-hakim 13:2-3, 20",
    hint: "Kisah: Ayah Simson yang melihat malaikat TUHAN naik dalam nyala api mezbah.",
    cards: [
      { svg: pic("MATA"), badgeHtml: `${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("BOR"), badgeHtml: `${del("B")} ${TO} ${add("N")} ${DOT} ${del("R")} ${X}` },
      { operator: "+" },
      { svg: pic("GAJAH"), badgeHtml: `${del("GAJ")} ${X}` }
    ]
  },
  {
    id: 24,
    name: "SIMSON",
    formula: "(NASI - NA) + ES (E ➔ M) + (LEMON - LEM) = SIMSON",
    story: "Hakim yang sangat kuat. Kekuatannya hilang ketika rambutnya dicukur, tetapi pada akhirnya ia berdoa dan Tuhan memulihkan kekuatannya.",
    verse: "Hakim-hakim 16:17, 28-30",
    hint: "Kisah: Hakim yang kekuatannya hilang ketika rambutnya dicukur.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("NA")} ${X}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: `${del("E")} ${TO} ${add("M")}` },
      { operator: "+" },
      { svg: pic("LEMON"), badgeHtml: `${del("LEM")} ${X}` }
    ]
  },
  {
    id: 25,
    name: "ELIMELEKH",
    formula: "(DELIMA - D - A) + (APEL - AP) + TEKO (T ✕, O ➔ H) = ELIMELEKH",
    story: "Suami Naomi. Karena ada kelaparan, ia membawa keluarganya pindah dari Betlehem ke tanah Moab.",
    verse: "Rut 1:1-3",
    hint: "Kisah: Suami Naomi yang pindah dari Betlehem ke Moab karena kelaparan.",
    cards: [
      { svg: pic("DELIMA"), badgeHtml: `${del("D")} ${X} ${DOT} ${del("A")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` },
      { operator: "+" },
      { svg: pic("TEKO"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("O")} ${TO} ${add("H")}` }
    ]
  },
  {
    id: 26,
    name: "NAOMI",
    formula: "(NASI - SI) + O + (MIE - E) = NAOMI",
    story: "Mertua Rut. Ia pulang ke Betlehem dengan sedih, tetapi kemudian bersukacita menggendong cucunya, Obed.",
    verse: "Rut 1:20-22; 4:16",
    hint: "Kisah: Mertua Rut yang kembali ke Betlehem dan kemudian menggendong cucunya.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("SI")} ${X}` },
      { operator: "+" },
      { letter: "O" },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("E")} ${X}` }
    ]
  },
  {
    id: 27,
    name: "ELKANA",
    formula: "(APEL - AP) + (KAIL - IL) + (NANAS - NAS) = ELKANA",
    story: "Suami Hana dan ayah Samuel. Setiap tahun ia pergi ke Silo untuk beribadah dan mempersembahkan korban kepada TUHAN.",
    verse: "1 Samuel 1:1-3, 8",
    hint: "Kisah: Suami Hana dan ayah Samuel yang setiap tahun beribadah di Silo.",
    cards: [
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` },
      { operator: "+" },
      { svg: pic("KAIL"), badgeHtml: `${del("IL")} ${X}` },
      { operator: "+" },
      { svg: pic("NANAS"), badgeHtml: `${del("NAS")} ${X}` }
    ]
  },
  {
    id: 28,
    name: "PENINA",
    formula: "(APEL - A - L) + MIE (M ➔ N, E ✕) + (NASI - SI) = PENINA",
    story: "Istri kedua Elkana yang selalu menyakiti hati Hana karena Hana belum mempunyai anak.",
    verse: "1 Samuel 1:2, 6",
    hint: "Kisah: Istri kedua Elkana yang selalu menyakiti hati Hana.",
    cards: [
      { svg: pic("APEL"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("L")} ${X}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("M")} ${TO} ${add("N")} ${DOT} ${del("E")} ${X}` },
      { operator: "+" },
      { svg: pic("NASI"), badgeHtml: `${del("SI")} ${X}` }
    ]
  },
  {
    id: 29,
    name: "MIKHAL",
    formula: "(MIE - E) + KH + (KAPAL - KAP) = MIKHAL",
    story: "Anak Raja Saul dan istri Daud. Ia menurunkan Daud dari jendela supaya Daud dapat melarikan diri dari Saul.",
    verse: "1 Samuel 19:11-12",
    hint: "Kisah: Anak Raja Saul yang menurunkan Daud dari jendela supaya dapat melarikan diri.",
    cards: [
      { svg: pic("MIE"), badgeHtml: `${del("E")} ${X}` },
      { operator: "+" },
      { letter: "KH" },
      { operator: "+" },
      { svg: pic("KAPAL"), badgeHtml: `${del("KAP")} ${X}` }
    ]
  },
  {
    id: 30,
    name: "ABIGAIL",
    formula: "API (P ➔ B) + (GAJAH - JAH) + (KAIL - KA) = ABIGAIL",
    story: "Perempuan yang bijak. Ia membawa banyak makanan dan dengan rendah hati mencegah Daud membalas dendam kepada suaminya, Nabal.",
    verse: "1 Samuel 25:18, 32-33",
    hint: "Kisah: Perempuan bijak yang membawa makanan dan mencegah Daud membalas dendam.",
    cards: [
      { svg: pic("API"), badgeHtml: `${del("P")} ${TO} ${add("B")}` },
      { operator: "+" },
      { svg: pic("GAJAH"), badgeHtml: `${del("JAH")} ${X}` },
      { operator: "+" },
      { svg: pic("KAIL"), badgeHtml: `${del("KA")} ${X}` }
    ]
  },
  {
    id: 31,
    name: "NABAL",
    formula: "(NASI - SI) + (BATU - TU) + L = NABAL",
    story: "Orang kaya yang kasar dan bebal. Ia menolak memberi makanan kepada anak buah Daud yang telah menjaga gembala-gembalanya.",
    verse: "1 Samuel 25:3, 10-11",
    hint: "Kisah: Orang kaya yang kasar dan menolak memberi makanan kepada anak buah Daud.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("SI")} ${X}` },
      { operator: "+" },
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { letter: "L" }
    ]
  },
  {
    id: 32,
    name: "ABISAI",
    formula: "(KABEL - K - EL) + (PISAU - P - AU) + (KAIL - K - L) = ABISAI",
    story: "Keponakan Daud yang ikut masuk ke perkemahan Saul pada malam hari. Daud melarangnya membunuh Saul, orang yang diurapi TUHAN.",
    verse: "1 Samuel 26:6-9",
    hint: "Kisah: Keponakan Daud yang ikut menyusup ke perkemahan Saul pada malam hari.",
    cards: [
      { svg: pic("KABEL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("EL")} ${X}` },
      { operator: "+" },
      { svg: pic("PISAU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("AU")} ${X}` },
      { operator: "+" },
      { svg: pic("KAIL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("L")} ${X}` }
    ]
  },
  {
    id: 33,
    name: "BENAYA",
    formula: "(BENANG - NANG) + (NANAS - NAS) + (AYAM - A - M) = BENAYA",
    story: "Pahlawan Daud yang gagah berani. Ia turun ke dalam lubang dan membunuh seekor singa pada hari bersalju.",
    verse: "2 Samuel 23:20",
    hint: "Kisah: Pahlawan Daud yang membunuh seekor singa di dalam lubang pada hari bersalju.",
    cards: [
      { svg: pic("BENANG"), badgeHtml: `${del("NANG")} ${X}` },
      { operator: "+" },
      { svg: pic("NANAS"), badgeHtml: `${del("NAS")} ${X}` },
      { operator: "+" },
      { svg: pic("AYAM"), badgeHtml: `${del("A")}${AWAL} ${X} ${DOT} ${del("M")} ${X}` }
    ]
  },
  {
    id: 34,
    name: "MEFIBOSET",
    formula: "MERIAM (R ➔ F, AM ✕) + BUS (U ➔ O) + (RAKET - RAK) = MEFIBOSET",
    story: "Anak Yonatan yang lumpuh kakinya. Raja Daud menunjukkan kasih dengan mengundangnya makan sehidangan dengan raja setiap hari.",
    verse: "2 Samuel 9:3, 7",
    hint: "Kisah: Anak Yonatan yang lumpuh dan diundang Daud makan di meja raja.",
    cards: [
      { svg: pic("MERIAM"), badgeHtml: `${del("R")} ${TO} ${add("F")} ${DOT} ${del("AM")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("U")} ${TO} ${add("O")}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("RAK")} ${X}` }
    ]
  },
  {
    id: 35,
    name: "BATSYEBA",
    formula: "BATU (U ➔ S) + (MONYET - MON - T) + (BALON - LON) = BATSYEBA",
    story: "Ibu Raja Salomo. Ia memohon kepada Raja Daud supaya Salomo menjadi raja sesudahnya.",
    verse: "2 Samuel 12:24; 1 Raja-raja 1:15-17, 30",
    hint: "Kisah: Ibu Raja Salomo yang memohon supaya Salomo menjadi raja.",
    cards: [
      { svg: pic("BATU"), badgeHtml: `${del("U")} ${TO} ${add("S")}` },
      { operator: "+" },
      { svg: pic("MONYET"), badgeHtml: `${del("MON")} ${X} ${DOT} ${del("T")} ${X}` },
      { operator: "+" },
      { svg: pic("BALON"), badgeHtml: `${del("LON")} ${X}` }
    ]
  },
  {
    id: 36,
    name: "ABSALOM",
    formula: "(KABEL - K - EL) + (RUSA - RU) + BALON (BA ✕, N ➔ M) = ABSALOM",
    story: "Anak Daud yang memberontak melawan ayahnya. Kepalanya tersangkut pada dahan pohon tarbantin ketika ia melarikan diri.",
    verse: "2 Samuel 15:10; 18:9",
    hint: "Kisah: Anak Daud yang memberontak dan tersangkut pada pohon tarbantin.",
    cards: [
      { svg: pic("KABEL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("EL")} ${X}` },
      { operator: "+" },
      { svg: pic("RUSA"), badgeHtml: `${del("RU")} ${X}` },
      { operator: "+" },
      { svg: pic("BALON"), badgeHtml: `${del("BA")} ${X} ${DOT} ${del("N")} ${TO} ${add("M")}` }
    ]
  },
  {
    id: 37,
    name: "BARZILAI",
    formula: "(BATU - TU) + MARTIL (MA ✕, T ➔ Z) + (KAIL - K - L) = BARZILAI",
    story: "Orang tua yang kaya dari Gilead. Ia membawa makanan bagi Daud dan pasukannya ketika Daud melarikan diri dari Absalom.",
    verse: "2 Samuel 17:27-29; 19:32",
    hint: "Kisah: Orang tua kaya dari Gilead yang membawa makanan bagi Daud ketika melarikan diri.",
    cards: [
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("MARTIL"), badgeHtml: `${del("MA")} ${X} ${DOT} ${del("T")} ${TO} ${add("Z")}` },
      { operator: "+" },
      { svg: pic("KAIL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("L")} ${X}` }
    ]
  },
  {
    id: 38,
    name: "HIRAM",
    formula: "H + (SISIR - SIS) + (JAM - J) = HIRAM",
    story: "Raja Tirus, sahabat Daud, yang mengirim kayu aras dan kayu sanobar untuk pembangunan Bait Allah Salomo.",
    verse: "1 Raja-raja 5:1, 8-10",
    hint: "Kisah: Raja Tirus yang mengirim kayu aras untuk Bait Allah Salomo.",
    cards: [
      { letter: "H" },
      { operator: "+" },
      { svg: pic("SISIR"), badgeHtml: `${del("SIS")} ${X}` },
      { operator: "+" },
      { svg: pic("JAM"), badgeHtml: `${del("J")} ${X}` }
    ]
  },
  {
    id: 39,
    name: "REHABEAM",
    formula: "(KERETA - KE - TA) + (HATI - TI) + (BENANG - NANG) + (JAM - J) = REHABEAM",
    story: "Anak Salomo yang menolak nasihat para tua-tua dan mengikuti nasihat teman-teman mudanya, sehingga kerajaan Israel terpecah dua.",
    verse: "1 Raja-raja 12:13-16",
    hint: "Kisah: Anak Salomo yang menolak nasihat tua-tua sehingga kerajaan terpecah dua.",
    cards: [
      { svg: pic("KERETA"), badgeHtml: `${del("KE")} ${X} ${DOT} ${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("HATI"), badgeHtml: `${del("TI")} ${X}` },
      { operator: "+" },
      { svg: pic("BENANG"), badgeHtml: `${del("NANG")} ${X}` },
      { operator: "+" },
      { svg: pic("JAM"), badgeHtml: `${del("J")} ${X}` }
    ]
  },
  {
    id: 40,
    name: "YEROBEAM",
    formula: "(MONYET - MON - T) + (RODA - DA) + (BENANG - NANG) + (AYAM - AY) = YEROBEAM",
    story: "Raja pertama kerajaan Israel utara. Ia membuat dua anak lembu emas dan menyuruh rakyat menyembahnya.",
    verse: "1 Raja-raja 12:20, 28",
    hint: "Kisah: Raja Israel utara yang membuat dua anak lembu emas.",
    cards: [
      { svg: pic("MONYET"), badgeHtml: `${del("MON")} ${X} ${DOT} ${del("T")} ${X}` },
      { operator: "+" },
      { svg: pic("RODA"), badgeHtml: `${del("DA")} ${X}` },
      { operator: "+" },
      { svg: pic("BENANG"), badgeHtml: `${del("NANG")} ${X}` },
      { operator: "+" },
      { svg: pic("AYAM"), badgeHtml: `${del("AY")} ${X}` }
    ]
  },
  {
    id: 41,
    name: "IZEBEL",
    formula: "(PIZZA - P - ZA) + (LEBAH - L - AH) + (APEL - AP) = IZEBEL",
    story: "Ratu yang jahat, istri Raja Ahab. Ia menyembah Baal dan mengancam akan membunuh Nabi Elia.",
    verse: "1 Raja-raja 19:1-2; 21:25",
    hint: "Kisah: Ratu jahat istri Raja Ahab yang mengancam Nabi Elia.",
    cards: [
      { svg: pic("PIZZA"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("ZA")} ${X}` },
      { operator: "+" },
      { svg: pic("LEBAH"), badgeHtml: `${del("L")} ${X} ${DOT} ${del("AH")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 42,
    name: "OBAJA",
    formula: "O + (BATU - TU) + (JAM - M) = OBAJA",
    story: "Kepala istana Raja Ahab yang sangat takut akan TUHAN. Ia menyembunyikan seratus nabi di dalam gua dan memberi mereka makan.",
    verse: "1 Raja-raja 18:3-4",
    hint: "Kisah: Kepala istana Ahab yang menyembunyikan seratus nabi di dalam gua.",
    cards: [
      { letter: "O" },
      { operator: "+" },
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("JAM"), badgeHtml: `${del("M")} ${X}` }
    ]
  },
  {
    id: 43,
    name: "NABOT",
    formula: "(NASI - SI) + (BOR - R) + T = NABOT",
    story: "Pemilik kebun anggur yang tidak mau menjual tanah warisan nenek moyangnya kepada Raja Ahab.",
    verse: "1 Raja-raja 21:1-3",
    hint: "Kisah: Pemilik kebun anggur yang tidak mau menjual warisannya kepada Raja Ahab.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("SI")} ${X}` },
      { operator: "+" },
      { svg: pic("BOR"), badgeHtml: `${del("R")} ${X}` },
      { operator: "+" },
      { letter: "T" }
    ]
  },
  {
    id: 44,
    name: "GEHAZI",
    formula: "(GELAS - LAS) + (HATI - TI) + API (A ✕, P ➔ Z) = GEHAZI",
    story: "Hamba Nabi Elisa yang serakah. Ia berbohong untuk meminta hadiah dari Naaman, lalu terkena penyakit kusta.",
    verse: "2 Raja-raja 5:20-27",
    hint: "Kisah: Hamba Elisa yang serakah meminta hadiah dari Naaman.",
    cards: [
      { svg: pic("GELAS"), badgeHtml: `${del("LAS")} ${X}` },
      { operator: "+" },
      { svg: pic("HATI"), badgeHtml: `${del("TI")} ${X}` },
      { operator: "+" },
      { svg: pic("API"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("Z")}` }
    ]
  },
  {
    id: 45,
    name: "HAZAEL",
    formula: "(HANDUK - NDUK) + (PIZZA - PIZ) + (APEL - AP) = HAZAEL",
    story: "Pegawai raja Aram. Nabi Elisa menangis karena tahu kejahatan yang akan dilakukannya terhadap Israel; kemudian ia menjadi raja Aram.",
    verse: "2 Raja-raja 8:11-15",
    hint: "Kisah: Orang Aram yang membuat Nabi Elisa menangis, lalu menjadi raja Aram.",
    cards: [
      { svg: pic("HANDUK"), badgeHtml: `${del("NDUK")} ${X}` },
      { operator: "+" },
      { svg: pic("PIZZA"), badgeHtml: `${del("PIZ")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 46,
    name: "ATALYA",
    formula: "(TOMAT - TOM) + (TALI - T - I) + (AYAM - A - M) = ATALYA",
    story: "Ratu jahat yang berusaha membinasakan seluruh keturunan raja. Bayi Yoas disembunyikan di rumah TUHAN selama enam tahun.",
    verse: "2 Raja-raja 11:1-3",
    hint: "Kisah: Ratu jahat yang ingin membinasakan keturunan raja, tetapi bayi Yoas disembunyikan.",
    cards: [
      { svg: pic("TOMAT"), badgeHtml: `${del("TOM")} ${X}` },
      { operator: "+" },
      { svg: pic("TALI"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("I")} ${X}` },
      { operator: "+" },
      { svg: pic("AYAM"), badgeHtml: `${del("A")}${AWAL} ${X} ${DOT} ${del("M")} ${X}` }
    ]
  },
  {
    id: 47,
    name: "YOSAFAT",
    formula: "(YOYO - YO) + (SAPI - PI) + BATU (B ➔ F, U ✕) = YOSAFAT",
    story: "Raja Yehuda yang menghadapi musuh dengan menyuruh para penyanyi berjalan di depan tentara sambil memuji TUHAN.",
    verse: "2 Tawarikh 20:21-22",
    hint: "Kisah: Raja yang menempatkan para penyanyi pujian di depan tentaranya.",
    cards: [
      { svg: pic("YOYO"), badgeHtml: `${del("YO")}${AWAL} ${X}` },
      { operator: "+" },
      { svg: pic("SAPI"), badgeHtml: `${del("PI")} ${X}` },
      { operator: "+" },
      { svg: pic("BATU"), badgeHtml: `${del("B")} ${TO} ${add("F")} ${DOT} ${del("U")} ${X}` }
    ]
  },
  {
    id: 48,
    name: "HIZKIA",
    formula: "API (A ✕, P ➔ H) + Z + KIPAS (P ➔ A, AS ✕) = HIZKIA",
    story: "Raja Yehuda yang berdoa sambil menangis ketika sakit keras. TUHAN mendengar doanya dan menambah umurnya lima belas tahun.",
    verse: "2 Raja-raja 20:1-6",
    hint: "Kisah: Raja yang berdoa ketika sakit, lalu umurnya ditambah lima belas tahun.",
    cards: [
      { svg: pic("API"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("H")}` },
      { operator: "+" },
      { letter: "Z" },
      { operator: "+" },
      { svg: pic("KIPAS"), badgeHtml: `${del("P")} ${TO} ${add("A")} ${DOT} ${del("AS")} ${X}` }
    ]
  },
  {
    id: 49,
    name: "SANHERIB",
    formula: "SAUS (U ➔ N, S (akhir) ✕) + (HELM - LM) + ROBOT (O (awal) ➔ I, OT ✕) = SANHERIB",
    story: "Raja Asyur yang mengepung Yerusalem dan menghina Allah. Dalam satu malam, malaikat TUHAN membinasakan tentaranya.",
    verse: "2 Raja-raja 19:35-36",
    hint: "Kisah: Raja Asyur yang tentaranya dibinasakan malaikat TUHAN dalam satu malam.",
    cards: [
      { svg: pic("SAUS"), badgeHtml: `${del("U")} ${TO} ${add("N")} ${DOT} ${del("S")}${AKHIR} ${X}` },
      { operator: "+" },
      { svg: pic("HELM"), badgeHtml: `${del("LM")} ${X}` },
      { operator: "+" },
      { svg: pic("ROBOT"), badgeHtml: `${del("O")}${AWAL} ${TO} ${add("I")} ${DOT} ${del("OT")} ${X}` }
    ]
  },
  {
    id: 50,
    name: "YOSIA",
    formula: "(YOYO - YO) + (NASI - NA) + A = YOSIA",
    story: "Raja yang mulai memerintah pada umur delapan tahun. Ketika kitab Taurat ditemukan di rumah TUHAN, ia membarui ibadah seluruh bangsa.",
    verse: "2 Raja-raja 22:1-2, 8-11",
    hint: "Kisah: Raja yang mulai memerintah pada umur delapan tahun.",
    cards: [
      { svg: pic("YOYO"), badgeHtml: `${del("YO")}${AWAL} ${X}` },
      { operator: "+" },
      { svg: pic("NASI"), badgeHtml: `${del("NA")} ${X}` },
      { operator: "+" },
      { letter: "A" }
    ]
  },
  {
    id: 51,
    name: "YOYAKIM",
    formula: "(YOYO - O) + (PAKU - P - U) + (TIMUN - T - UN) = YOYAKIM",
    story: "Raja Yehuda yang memotong-motong gulungan kitab berisi firman TUHAN dari Nabi Yeremia, lalu membakarnya di perapian.",
    verse: "Yeremia 36:22-23",
    hint: "Kisah: Raja yang membakar gulungan kitab berisi firman TUHAN dari Yeremia.",
    cards: [
      { svg: pic("YOYO"), badgeHtml: `${del("O")}${AKHIR} ${X}` },
      { operator: "+" },
      { svg: pic("PAKU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("U")} ${X}` },
      { operator: "+" },
      { svg: pic("TIMUN"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("UN")} ${X}` }
    ]
  },
  {
    id: 52,
    name: "ZEDEKIA",
    formula: "(ZEBRA - BRA) + (DELIMA - LIMA) + KIPAS (P ➔ A, AS ✕) = ZEDEKIA",
    story: "Raja terakhir Yehuda. Ia tidak mendengarkan peringatan Nabi Yeremia, dan pada zamannya Yerusalem dihancurkan oleh Babel.",
    verse: "Yeremia 39:1-7",
    hint: "Kisah: Raja terakhir Yehuda yang tidak mendengarkan Nabi Yeremia.",
    cards: [
      { svg: pic("ZEBRA"), badgeHtml: `${del("BRA")} ${X}` },
      { operator: "+" },
      { svg: pic("DELIMA"), badgeHtml: `${del("LIMA")} ${X}` },
      { operator: "+" },
      { svg: pic("KIPAS"), badgeHtml: `${del("P")} ${TO} ${add("A")} ${DOT} ${del("AS")} ${X}` }
    ]
  },
  {
    id: 53,
    name: "YESAYA",
    formula: "(MONYET - MON - T) + (RUSA - RU) + (AYAM - A - M) = YESAYA",
    story: "Nabi besar yang berkata, \"Ini aku, utuslah aku!\" Ia juga menubuatkan kelahiran Imanuel.",
    verse: "Yesaya 6:8; 7:14",
    hint: "Kisah: Nabi yang berkata, 'Ini aku, utuslah aku!'",
    cards: [
      { svg: pic("MONYET"), badgeHtml: `${del("MON")} ${X} ${DOT} ${del("T")} ${X}` },
      { operator: "+" },
      { svg: pic("RUSA"), badgeHtml: `${del("RU")} ${X}` },
      { operator: "+" },
      { svg: pic("AYAM"), badgeHtml: `${del("A")}${AWAL} ${X} ${DOT} ${del("M")} ${X}` }
    ]
  },
  {
    id: 54,
    name: "YEREMIA",
    formula: "(MONYET - MON - T) + (KERETA - KE - TA) + MIE (E ➔ A) = YEREMIA",
    story: "Nabi yang pernah dimasukkan ke dalam perigi berlumpur, tetapi diselamatkan oleh Ebed-Melekh.",
    verse: "Yeremia 1:5; 38:6-13",
    hint: "Kisah: Nabi yang dimasukkan ke dalam perigi berlumpur lalu ditarik keluar dengan tali.",
    cards: [
      { svg: pic("MONYET"), badgeHtml: `${del("MON")} ${X} ${DOT} ${del("T")} ${X}` },
      { operator: "+" },
      { svg: pic("KERETA"), badgeHtml: `${del("KE")} ${X} ${DOT} ${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("E")} ${TO} ${add("A")}` }
    ]
  },
  {
    id: 55,
    name: "BARUKH",
    formula: "(BATU - TU) + (RUSA - SA) + KH = BARUKH",
    story: "Juru tulis Nabi Yeremia yang menuliskan semua firman TUHAN pada sebuah gulungan kitab.",
    verse: "Yeremia 36:4",
    hint: "Kisah: Juru tulis Nabi Yeremia.",
    cards: [
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("RUSA"), badgeHtml: `${del("SA")} ${X}` },
      { operator: "+" },
      { letter: "KH" }
    ]
  },
  {
    id: 56,
    name: "YEHEZKIEL",
    formula: "MONYET (MON ✕, T ➔ H) + ES (S ➔ Z) + (KIPAS - PAS) + (APEL - AP) = YEHEZKIEL",
    story: "Nabi yang dalam penglihatan melihat lembah penuh tulang-tulang kering yang hidup kembali.",
    verse: "Yehezkiel 37:1-10",
    hint: "Kisah: Nabi yang melihat lembah penuh tulang-tulang kering hidup kembali.",
    cards: [
      { svg: pic("MONYET"), badgeHtml: `${del("MON")} ${X} ${DOT} ${del("T")} ${TO} ${add("H")}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: `${del("S")} ${TO} ${add("Z")}` },
      { operator: "+" },
      { svg: pic("KIPAS"), badgeHtml: `${del("PAS")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 57,
    name: "SADRAKH",
    formula: "(RUSA - RU) + (DRUM - UM) + PAKU (P ✕, U ➔ H) = SADRAKH",
    story: "Salah satu dari tiga sahabat Daniel yang tidak mau menyembah patung emas. Ia selamat di dalam perapian yang menyala-nyala.",
    verse: "Daniel 3:19-27",
    hint: "Kisah: Sahabat Daniel yang selamat di dalam perapian yang menyala-nyala.",
    cards: [
      { svg: pic("RUSA"), badgeHtml: `${del("RU")} ${X}` },
      { operator: "+" },
      { svg: pic("DRUM"), badgeHtml: `${del("UM")} ${X}` },
      { operator: "+" },
      { svg: pic("PAKU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("U")} ${TO} ${add("H")}` }
    ]
  },
  {
    id: 58,
    name: "MESAKH",
    formula: "(MEJA - JA) + (RUSA - RU) + KH = MESAKH",
    story: "Salah satu dari tiga sahabat Daniel yang dilemparkan ke dalam perapian karena tidak mau menyembah patung emas, tetapi tidak terbakar.",
    verse: "Daniel 3:12, 26-27",
    hint: "Kisah: Sahabat Daniel yang tidak terbakar di dalam perapian.",
    cards: [
      { svg: pic("MEJA"), badgeHtml: `${del("JA")} ${X}` },
      { operator: "+" },
      { svg: pic("RUSA"), badgeHtml: `${del("RU")} ${X}` },
      { operator: "+" },
      { letter: "KH" }
    ]
  },
  {
    id: 59,
    name: "ABEDNEGO",
    formula: "KABEL (K ✕, L ➔ D) + N + TEKO (T ✕, K ➔ G) = ABEDNEGO",
    story: "Salah satu dari tiga sahabat Daniel. Bersama Sadrakh dan Mesakh, ia berkata Allah sanggup melepaskan mereka dari perapian.",
    verse: "Daniel 3:17-18, 26",
    hint: "Kisah: Sahabat Daniel yang yakin Allah sanggup melepaskan mereka dari perapian.",
    cards: [
      { svg: pic("KABEL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("L")} ${TO} ${add("D")}` },
      { operator: "+" },
      { letter: "N" },
      { operator: "+" },
      { svg: pic("TEKO"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("K")} ${TO} ${add("G")}` }
    ]
  },
  {
    id: 60,
    name: "DARIUS",
    formula: "(DAUN - UN) + (MERIAM - ME - AM) + (BUS - B) = DARIUS",
    story: "Raja yang terpaksa memasukkan Daniel ke gua singa. Pagi-pagi ia bergegas ke gua itu dan bersukacita karena Daniel selamat.",
    verse: "Daniel 6:16-23",
    hint: "Kisah: Raja yang bersukacita ketika menemukan Daniel selamat di gua singa.",
    cards: [
      { svg: pic("DAUN"), badgeHtml: `${del("UN")} ${X}` },
      { operator: "+" },
      { svg: pic("MERIAM"), badgeHtml: `${del("ME")} ${X} ${DOT} ${del("AM")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 61,
    name: "NEHEMIA",
    formula: "NASI (A ➔ E, SI ✕) + (HELM - LM) + MIE (E ➔ A) = NEHEMIA",
    story: "Juru minuman raja Persia yang memimpin pembangunan kembali tembok Yerusalem. Tembok itu selesai dalam 52 hari.",
    verse: "Nehemia 2:1-5; 6:15",
    hint: "Kisah: Juru minuman raja yang membangun kembali tembok Yerusalem dalam 52 hari.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("A")} ${TO} ${add("E")} ${DOT} ${del("SI")} ${X}` },
      { operator: "+" },
      { svg: pic("HELM"), badgeHtml: `${del("LM")} ${X}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("E")} ${TO} ${add("A")}` }
    ]
  },
  {
    id: 62,
    name: "ZERUBABEL",
    formula: "(ZEBRA - BRA) + (RUSA - SA) + (BATU - TU) + (KABEL - KA) = ZERUBABEL",
    story: "Pemimpin orang Yahudi yang pulang dari pembuangan dan memimpin pembangunan kembali Bait Allah.",
    verse: "Ezra 3:8; Zakharia 4:9",
    hint: "Kisah: Pemimpin yang membangun kembali Bait Allah setelah pembuangan.",
    cards: [
      { svg: pic("ZEBRA"), badgeHtml: `${del("BRA")} ${X}` },
      { operator: "+" },
      { svg: pic("RUSA"), badgeHtml: `${del("SA")} ${X}` },
      { operator: "+" },
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("KABEL"), badgeHtml: `${del("KA")} ${X}` }
    ]
  },
  {
    id: 63,
    name: "MORDEKHAI",
    formula: "BOR (B ➔ M) + (DELIMA - LIMA) + KH + (KAIL - K - L) = MORDEKHAI",
    story: "Sepupu yang membesarkan Ester. Ia tidak mau sujud kepada Haman, dan kemudian dihormati oleh raja.",
    verse: "Ester 2:7; 6:10-11",
    hint: "Kisah: Sepupu yang membesarkan Ester dan tidak mau sujud kepada Haman.",
    cards: [
      { svg: pic("BOR"), badgeHtml: `${del("B")} ${TO} ${add("M")}` },
      { operator: "+" },
      { svg: pic("DELIMA"), badgeHtml: `${del("LIMA")} ${X}` },
      { operator: "+" },
      { letter: "KH" },
      { operator: "+" },
      { svg: pic("KAIL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("L")} ${X}` }
    ]
  },
  {
    id: 64,
    name: "HABAKUK",
    formula: "(HATI - TI) + (BATU - TU) + KUE (E ➔ K) = HABAKUK",
    story: "Nabi yang berkata, \"Sekalipun pohon ara tidak berbunga ... namun aku akan bersorak-sorak di dalam TUHAN.\"",
    verse: "Habakuk 3:17-18",
    hint: "Kisah: Nabi yang tetap bersukacita di dalam TUHAN sekalipun pohon ara tidak berbunga.",
    cards: [
      { svg: pic("HATI"), badgeHtml: `${del("TI")} ${X}` },
      { operator: "+" },
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("KUE"), badgeHtml: `${del("E")} ${TO} ${add("K")}` }
    ]
  },
  {
    id: 65,
    name: "MALEAKHI",
    formula: "(MATA - TA) + (LEMON - MON) + (PAKU - P - U) + API (A ✕, P ➔ H) = MALEAKHI",
    story: "Nabi terakhir dalam Perjanjian Lama. Ia mengajak umat membawa persembahan persepuluhan ke rumah perbendaharaan.",
    verse: "Maleakhi 3:10",
    hint: "Kisah: Nabi terakhir Perjanjian Lama yang mengajak umat membawa persepuluhan.",
    cards: [
      { svg: pic("MATA"), badgeHtml: `${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("LEMON"), badgeHtml: `${del("MON")} ${X}` },
      { operator: "+" },
      { svg: pic("PAKU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("U")} ${X}` },
      { operator: "+" },
      { svg: pic("API"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("H")}` }
    ]
  },
  {
    id: 66,
    name: "ZAKHARIA",
    formula: "RAKET (R ➔ Z, ET ✕) + (HATI - TI) + (MERIAM - ME - M) = ZAKHARIA",
    story: "Imam, ayah Yohanes Pembaptis. Ia menjadi bisu karena tidak percaya kepada malaikat Gabriel, lalu dapat berbicara lagi setelah anaknya lahir.",
    verse: "Lukas 1:13, 20, 63-64",
    hint: "Kisah: Imam yang menjadi bisu karena tidak percaya kepada malaikat Gabriel.",
    cards: [
      { svg: pic("RAKET"), badgeHtml: `${del("R")} ${TO} ${add("Z")} ${DOT} ${del("ET")} ${X}` },
      { operator: "+" },
      { svg: pic("HATI"), badgeHtml: `${del("TI")} ${X}` },
      { operator: "+" },
      { svg: pic("MERIAM"), badgeHtml: `${del("ME")} ${X} ${DOT} ${del("M")} ${X}` }
    ]
  },
  {
    id: 67,
    name: "ELISABET",
    formula: "(APEL - AP) + PISAU (P ✕, U ➔ B) + (RAKET - RAK) = ELISABET",
    story: "Istri Zakharia yang mengandung Yohanes Pembaptis di masa tuanya. Anak dalam kandungannya melonjak ketika Maria datang.",
    verse: "Lukas 1:36, 41-42",
    hint: "Kisah: Ibu Yohanes Pembaptis; anak dalam kandungannya melonjak ketika Maria datang.",
    cards: [
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` },
      { operator: "+" },
      { svg: pic("PISAU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("U")} ${TO} ${add("B")}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("RAK")} ${X}` }
    ]
  },
  {
    id: 68,
    name: "SIMEON",
    formula: "(NASI - NA) + (MEJA - JA) + (BALON - BAL) = SIMEON",
    story: "Orang benar di Yerusalem yang menggendong bayi Yesus di Bait Allah dan memuji Allah karena telah melihat keselamatan.",
    verse: "Lukas 2:25-32",
    hint: "Kisah: Orang tua yang menggendong bayi Yesus di Bait Allah.",
    cards: [
      { svg: pic("NASI"), badgeHtml: `${del("NA")} ${X}` },
      { operator: "+" },
      { svg: pic("MEJA"), badgeHtml: `${del("JA")} ${X}` },
      { operator: "+" },
      { svg: pic("BALON"), badgeHtml: `${del("BAL")} ${X}` }
    ]
  },
  {
    id: 69,
    name: "HERODES",
    formula: "(HELM - LM) + (RODA - A) + ES = HERODES",
    story: "Raja yang ketakutan mendengar kabar dari orang-orang Majus, lalu menyuruh membunuh bayi-bayi di Betlehem.",
    verse: "Matius 2:3, 16",
    hint: "Kisah: Raja yang ketakutan mendengar kabar dari orang Majus.",
    cards: [
      { svg: pic("HELM"), badgeHtml: `${del("LM")} ${X}` },
      { operator: "+" },
      { svg: pic("RODA"), badgeHtml: `${del("A")} ${X}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: null }
    ]
  },
  {
    id: 70,
    name: "ANDREAS",
    formula: "(AWAN - AW) + (DRUM - UM) + TAS (T ➔ E) = ANDREAS",
    story: "Saudara Simon Petrus. Ia membawa seorang anak yang mempunyai lima roti dan dua ikan kepada Yesus.",
    verse: "Yohanes 1:40-41; 6:8-9",
    hint: "Kisah: Saudara Petrus yang membawa anak dengan lima roti dan dua ikan kepada Yesus.",
    cards: [
      { svg: pic("AWAN"), badgeHtml: `${del("AW")} ${X}` },
      { operator: "+" },
      { svg: pic("DRUM"), badgeHtml: `${del("UM")} ${X}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("T")} ${TO} ${add("E")}` }
    ]
  },
  {
    id: 71,
    name: "FILIPUS",
    formula: "LILIN (L (awal) ➔ F, IN ✕) + (KIPAS - K - AS) + (BUS - B) = FILIPUS",
    story: "Murid Yesus dari Betsaida. Ia berkata kepada Natanael, \"Mari dan lihatlah!\"",
    verse: "Yohanes 1:43-46",
    hint: "Kisah: Murid dari Betsaida yang berkata kepada Natanael, 'Mari dan lihatlah!'",
    cards: [
      { svg: pic("LILIN"), badgeHtml: `${del("L")}${AWAL} ${TO} ${add("F")} ${DOT} ${del("IN")} ${X}` },
      { operator: "+" },
      { svg: pic("KIPAS"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("AS")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 72,
    name: "NATANAEL",
    formula: "MATA (M ➔ N) + (NANAS - NAS) + (APEL - AP) = NATANAEL",
    story: "Murid yang dilihat Yesus sedang duduk di bawah pohon ara. Ia berseru, \"Rabi, Engkau Anak Allah!\"",
    verse: "Yohanes 1:48-49",
    hint: "Kisah: Murid yang dilihat Yesus ketika duduk di bawah pohon ara.",
    cards: [
      { svg: pic("MATA"), badgeHtml: `${del("M")} ${TO} ${add("N")}` },
      { operator: "+" },
      { svg: pic("NANAS"), badgeHtml: `${del("NAS")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  },
  {
    id: 73,
    name: "MATIAS",
    formula: "(MATA - TA) + (ROTI - RO) + (TAS - T) = MATIAS",
    story: "Murid yang dipilih melalui undian untuk menggantikan Yudas Iskariot menjadi rasul.",
    verse: "Kisah Para Rasul 1:23-26",
    hint: "Kisah: Murid yang dipilih dengan undian untuk menggantikan Yudas Iskariot.",
    cards: [
      { svg: pic("MATA"), badgeHtml: `${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("ROTI"), badgeHtml: `${del("RO")} ${X}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("T")} ${X}` }
    ]
  },
  {
    id: 74,
    name: "ZAKHEUS",
    formula: "(PIZZA - PIZ) + KUE (U ➔ H) + (BUS - B) = ZAKHEUS",
    story: "Kepala pemungut cukai yang badannya pendek. Ia memanjat pohon ara untuk melihat Yesus, lalu bertobat dan mengembalikan empat kali lipat.",
    verse: "Lukas 19:1-8",
    hint: "Kisah: Pemungut cukai bertubuh pendek yang memanjat pohon ara untuk melihat Yesus.",
    cards: [
      { svg: pic("PIZZA"), badgeHtml: `${del("PIZ")} ${X}` },
      { operator: "+" },
      { svg: pic("KUE"), badgeHtml: `${del("U")} ${TO} ${add("H")}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 75,
    name: "BARTIMEUS",
    formula: "MARTIL (M ➔ B, L ✕) + (MEJA - JA) + (BUS - B) = BARTIMEUS",
    story: "Pengemis buta di Yerikho yang berseru, \"Yesus, Anak Daud, kasihanilah aku!\" lalu dapat melihat.",
    verse: "Markus 10:46-52",
    hint: "Kisah: Pengemis buta di Yerikho yang berseru, 'Yesus, Anak Daud, kasihanilah aku!'",
    cards: [
      { svg: pic("MARTIL"), badgeHtml: `${del("M")} ${TO} ${add("B")} ${DOT} ${del("L")} ${X}` },
      { operator: "+" },
      { svg: pic("MEJA"), badgeHtml: `${del("JA")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 76,
    name: "NIKODEMUS",
    formula: "TIKUS (T ➔ N, US ✕) + (RODA - R - A) + (EMBER - BER) + (BUS - B) = NIKODEMUS",
    story: "Pemimpin agama Yahudi yang datang kepada Yesus pada waktu malam dan mendengar bahwa ia harus dilahirkan kembali.",
    verse: "Yohanes 3:1-5",
    hint: "Kisah: Pemimpin Yahudi yang datang kepada Yesus pada waktu malam.",
    cards: [
      { svg: pic("TIKUS"), badgeHtml: `${del("T")} ${TO} ${add("N")} ${DOT} ${del("US")} ${X}` },
      { operator: "+" },
      { svg: pic("RODA"), badgeHtml: `${del("R")} ${X} ${DOT} ${del("A")} ${X}` },
      { operator: "+" },
      { svg: pic("EMBER"), badgeHtml: `${del("BER")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 77,
    name: "YAIRUS",
    formula: "(AYAM - A - M) + (SISIR - SIS) + (BUS - B) = YAIRUS",
    story: "Kepala rumah ibadat yang anak perempuannya dibangkitkan Yesus dengan kata-kata, \"Talita kum!\"",
    verse: "Markus 5:22-23, 41-42",
    hint: "Kisah: Kepala rumah ibadat yang anak perempuannya dibangkitkan Yesus.",
    cards: [
      { svg: pic("AYAM"), badgeHtml: `${del("A")}${AWAL} ${X} ${DOT} ${del("M")} ${X}` },
      { operator: "+" },
      { svg: pic("SISIR"), badgeHtml: `${del("SIS")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 78,
    name: "MALKUS",
    formula: "MATA (T ➔ L, A (akhir) ✕) + (TIKUS - TI) = MALKUS",
    story: "Hamba Imam Besar yang telinganya ditetak Petrus. Yesus menjamah telinganya dan menyembuhkannya.",
    verse: "Yohanes 18:10; Lukas 22:50-51",
    hint: "Kisah: Hamba Imam Besar yang telinganya disembuhkan Yesus.",
    cards: [
      { svg: pic("MATA"), badgeHtml: `${del("T")} ${TO} ${add("L")} ${DOT} ${del("A")}${AKHIR} ${X}` },
      { operator: "+" },
      { svg: pic("TIKUS"), badgeHtml: `${del("TI")} ${X}` }
    ]
  },
  {
    id: 79,
    name: "KAYAFAS",
    formula: "(KAIL - IL) + (AYAM - A - M) + TAS (T ➔ F) = KAYAFAS",
    story: "Imam Besar yang mengadili Yesus. Ia pernah berkata lebih berguna jika satu orang mati untuk seluruh bangsa.",
    verse: "Yohanes 11:49-50; Matius 26:57",
    hint: "Kisah: Imam Besar yang mengadili Yesus.",
    cards: [
      { svg: pic("KAIL"), badgeHtml: `${del("IL")} ${X}` },
      { operator: "+" },
      { svg: pic("AYAM"), badgeHtml: `${del("A")}${AWAL} ${X} ${DOT} ${del("M")} ${X}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("T")} ${TO} ${add("F")}` }
    ]
  },
  {
    id: 80,
    name: "BARABAS",
    formula: "(BATU - TU) + (RAKET - KET) + TAS (T ➔ B) = BARABAS",
    story: "Seorang penjahat terkenal yang dibebaskan Pilatus atas permintaan orang banyak, sementara Yesus disalibkan.",
    verse: "Matius 27:16-26",
    hint: "Kisah: Penjahat yang dibebaskan Pilatus sebagai ganti Yesus.",
    cards: [
      { svg: pic("BATU"), badgeHtml: `${del("TU")} ${X}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("KET")} ${X}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("T")} ${TO} ${add("B")}` }
    ]
  },
  {
    id: 81,
    name: "KLEOPAS",
    formula: "KUE (U ➔ L) + (TOPI - T - I) + (TAS - T) = KLEOPAS",
    story: "Salah satu dari dua murid yang berjalan ke Emaus. Mereka baru mengenali Yesus ketika Ia memecah-mecahkan roti.",
    verse: "Lukas 24:18, 30-31",
    hint: "Kisah: Murid yang berjalan ke Emaus dan mengenali Yesus saat Ia memecahkan roti.",
    cards: [
      { svg: pic("KUE"), badgeHtml: `${del("U")} ${TO} ${add("L")}` },
      { operator: "+" },
      { svg: pic("TOPI"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("I")} ${X}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("T")} ${X}` }
    ]
  },
  {
    id: 82,
    name: "SUSANA",
    formula: "(SUSU - SU) + (RUSA - RU) + (NASI - SI) = SUSANA",
    story: "Salah satu perempuan yang mengikut Yesus dan melayani rombongan-Nya dengan harta miliknya.",
    verse: "Lukas 8:1-3",
    hint: "Kisah: Perempuan yang melayani Yesus dan murid-murid-Nya dengan harta miliknya.",
    cards: [
      { svg: pic("SUSU"), badgeHtml: `${del("SU")}${AWAL} ${X}` },
      { operator: "+" },
      { svg: pic("RUSA"), badgeHtml: `${del("RU")} ${X}` },
      { operator: "+" },
      { svg: pic("NASI"), badgeHtml: `${del("SI")} ${X}` }
    ]
  },
  {
    id: 83,
    name: "STEFANUS",
    formula: "S + (TEKO - KO) + AWAN (A (awal) ✕, W ➔ F) + (BUS - B) = STEFANUS",
    story: "Pelayan jemaat yang penuh iman dan Roh Kudus, martir pertama. Ketika dilempari batu, ia berdoa bagi orang-orang yang membunuhnya.",
    verse: "Kisah Para Rasul 6:5; 7:59-60",
    hint: "Kisah: Martir pertama yang berdoa bagi orang-orang yang melemparinya dengan batu.",
    cards: [
      { letter: "S" },
      { operator: "+" },
      { svg: pic("TEKO"), badgeHtml: `${del("KO")} ${X}` },
      { operator: "+" },
      { svg: pic("AWAN"), badgeHtml: `${del("A")}${AWAL} ${X} ${DOT} ${del("W")} ${TO} ${add("F")}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 84,
    name: "ANANIAS",
    formula: "(AWAN - AW) + API (P ➔ N) + (TAS - T) = ANANIAS",
    story: "Murid di Damsyik yang diutus Tuhan untuk menumpangkan tangan atas Saulus, sehingga Saulus dapat melihat kembali.",
    verse: "Kisah Para Rasul 9:10-18",
    hint: "Kisah: Murid di Damsyik yang menumpangkan tangan atas Saulus yang buta.",
    cards: [
      { svg: pic("AWAN"), badgeHtml: `${del("AW")} ${X}` },
      { operator: "+" },
      { svg: pic("API"), badgeHtml: `${del("P")} ${TO} ${add("N")}` },
      { operator: "+" },
      { svg: pic("TAS"), badgeHtml: `${del("T")} ${X}` }
    ]
  },
  {
    id: 85,
    name: "SAFIRA",
    formula: "(RUSA - RU) + MIE (M ➔ F, E ✕) + (RAKET - KET) = SAFIRA",
    story: "Perempuan yang bersama suaminya berbohong kepada para rasul tentang hasil penjualan tanah mereka.",
    verse: "Kisah Para Rasul 5:1-10",
    hint: "Kisah: Perempuan yang bersama suaminya berbohong tentang hasil penjualan tanah.",
    cards: [
      { svg: pic("RUSA"), badgeHtml: `${del("RU")} ${X}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("M")} ${TO} ${add("F")} ${DOT} ${del("E")} ${X}` },
      { operator: "+" },
      { svg: pic("RAKET"), badgeHtml: `${del("KET")} ${X}` }
    ]
  },
  {
    id: 86,
    name: "KORNELIUS",
    formula: "BOR (B ➔ K) + N + (DELIMA - D - MA) + (BUS - B) = KORNELIUS",
    story: "Perwira Romawi yang saleh. Petrus datang ke rumahnya, dan Roh Kudus turun atas orang-orang bukan Yahudi yang mendengar firman.",
    verse: "Kisah Para Rasul 10:1-2, 44",
    hint: "Kisah: Perwira Romawi yang saleh; Petrus datang ke rumahnya.",
    cards: [
      { svg: pic("BOR"), badgeHtml: `${del("B")} ${TO} ${add("K")}` },
      { operator: "+" },
      { letter: "N" },
      { operator: "+" },
      { svg: pic("DELIMA"), badgeHtml: `${del("D")} ${X} ${DOT} ${del("MA")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 87,
    name: "TABITA",
    formula: "(TAS - S) + (BIOLA - OLA) + (MATA - MA) = TABITA",
    story: "Murid perempuan di Yope yang banyak berbuat baik dan membuat pakaian bagi para janda. Petrus berdoa dan ia hidup kembali.",
    verse: "Kisah Para Rasul 9:36-41",
    hint: "Kisah: Perempuan di Yope yang membuat pakaian bagi para janda dan dibangkitkan.",
    cards: [
      { svg: pic("TAS"), badgeHtml: `${del("S")} ${X}` },
      { operator: "+" },
      { svg: pic("BIOLA"), badgeHtml: `${del("OLA")} ${X}` },
      { operator: "+" },
      { svg: pic("MATA"), badgeHtml: `${del("MA")} ${X}` }
    ]
  },
  {
    id: 88,
    name: "BARNABAS",
    formula: "BOR (O ➔ A) + (NASI - SI) + BUS (U ➔ A) = BARNABAS",
    story: "Murid yang dijuluki \"anak penghiburan\". Ia menjual ladangnya dan membawa uangnya kepada para rasul.",
    verse: "Kisah Para Rasul 4:36-37",
    hint: "Kisah: Murid yang dijuluki 'anak penghiburan'.",
    cards: [
      { svg: pic("BOR"), badgeHtml: `${del("O")} ${TO} ${add("A")}` },
      { operator: "+" },
      { svg: pic("NASI"), badgeHtml: `${del("SI")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("U")} ${TO} ${add("A")}` }
    ]
  },
  {
    id: 89,
    name: "LIDIA",
    formula: "(TALI - TA) + D + (MERIAM - MER - M) = LIDIA",
    story: "Penjual kain ungu dari Tiatira. Tuhan membuka hatinya; ia dibaptis dan menerima Paulus di rumahnya.",
    verse: "Kisah Para Rasul 16:14-15",
    hint: "Kisah: Penjual kain ungu yang hatinya dibuka Tuhan.",
    cards: [
      { svg: pic("TALI"), badgeHtml: `${del("TA")} ${X}` },
      { operator: "+" },
      { letter: "D" },
      { operator: "+" },
      { svg: pic("MERIAM"), badgeHtml: `${del("MER")} ${X} ${DOT} ${del("M")} ${X}` }
    ]
  },
  {
    id: 90,
    name: "AKWILA",
    formula: "(PAKU - P - U) + API (A ✕, P ➔ W) + (BOLA - BO) = AKWILA",
    story: "Tukang kemah, suami Priskila, yang bekerja bersama Paulus di Korintus.",
    verse: "Kisah Para Rasul 18:2-3",
    hint: "Kisah: Tukang kemah yang bekerja bersama Paulus di Korintus.",
    cards: [
      { svg: pic("PAKU"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("U")} ${X}` },
      { operator: "+" },
      { svg: pic("API"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("W")}` },
      { operator: "+" },
      { svg: pic("BOLA"), badgeHtml: `${del("BO")} ${X}` }
    ]
  },
  {
    id: 91,
    name: "PRISKILA",
    formula: "BOR (B ✕, O ➔ P) + (SISIR - S - IR) + (KIPAS - PAS) + (BOLA - BO) = PRISKILA",
    story: "Istri Akwila. Bersama suaminya ia menjelaskan jalan Allah dengan lebih teliti kepada Apolos.",
    verse: "Kisah Para Rasul 18:26",
    hint: "Kisah: Istri tukang kemah yang mengajar Apolos tentang jalan Allah.",
    cards: [
      { svg: pic("BOR"), badgeHtml: `${del("B")} ${X} ${DOT} ${del("O")} ${TO} ${add("P")}` },
      { operator: "+" },
      { svg: pic("SISIR"), badgeHtml: `${del("S")}${AWAL} ${X} ${DOT} ${del("IR")} ${X}` },
      { operator: "+" },
      { svg: pic("KIPAS"), badgeHtml: `${del("PAS")} ${X}` },
      { operator: "+" },
      { svg: pic("BOLA"), badgeHtml: `${del("BO")} ${X}` }
    ]
  },
  {
    id: 92,
    name: "APOLOS",
    formula: "(API - I) + (BOLA - B - A) + ES (E ➔ O) = APOLOS",
    story: "Orang Yahudi dari Aleksandria yang fasih berbicara dan sangat mahir dalam Kitab Suci.",
    verse: "Kisah Para Rasul 18:24-25",
    hint: "Kisah: Orang Yahudi dari Aleksandria yang fasih berbicara dan mahir dalam Kitab Suci.",
    cards: [
      { svg: pic("API"), badgeHtml: `${del("I")} ${X}` },
      { operator: "+" },
      { svg: pic("BOLA"), badgeHtml: `${del("B")} ${X} ${DOT} ${del("A")} ${X}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: `${del("E")} ${TO} ${add("O")}` }
    ]
  },
  {
    id: 93,
    name: "EUTIKHUS",
    formula: "ES (S ➔ U) + (TIKUS - US) + BUS (B ➔ H) = EUTIKHUS",
    story: "Pemuda yang tertidur ketika Paulus berkhotbah sampai tengah malam. Ia jatuh dari tingkat ketiga, lalu dihidupkan kembali.",
    verse: "Kisah Para Rasul 20:9-12",
    hint: "Kisah: Pemuda yang tertidur saat Paulus berkhotbah dan jatuh dari jendela.",
    cards: [
      { svg: pic("ES"), badgeHtml: `${del("S")} ${TO} ${add("U")}` },
      { operator: "+" },
      { svg: pic("TIKUS"), badgeHtml: `${del("US")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${TO} ${add("H")}` }
    ]
  },
  {
    id: 94,
    name: "AGABUS",
    formula: "(PAGAR - P - AR) + (KABEL - K - EL) + (BUS - B) = AGABUS",
    story: "Nabi yang mengikat kaki dan tangannya sendiri dengan ikat pinggang Paulus untuk menyatakan bahwa Paulus akan diikat di Yerusalem.",
    verse: "Kisah Para Rasul 21:10-11",
    hint: "Kisah: Nabi yang memakai ikat pinggang Paulus untuk menyampaikan nubuat.",
    cards: [
      { svg: pic("PAGAR"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("AR")} ${X}` },
      { operator: "+" },
      { svg: pic("KABEL"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("EL")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 95,
    name: "FELIKS",
    formula: "KUE (K ✕, U ➔ F) + (TALI - TA) + ES (E ➔ K) = FELIKS",
    story: "Wali negeri yang menjadi takut ketika Paulus berbicara tentang kebenaran, penguasaan diri, dan penghakiman.",
    verse: "Kisah Para Rasul 24:24-25",
    hint: "Kisah: Wali negeri yang menjadi takut ketika Paulus berbicara tentang penghakiman.",
    cards: [
      { svg: pic("KUE"), badgeHtml: `${del("K")} ${X} ${DOT} ${del("U")} ${TO} ${add("F")}` },
      { operator: "+" },
      { svg: pic("TALI"), badgeHtml: `${del("TA")} ${X}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: `${del("E")} ${TO} ${add("K")}` }
    ]
  },
  {
    id: 96,
    name: "AGRIPA",
    formula: "(PAGAR - P - AR) + (PIRING - PI - NG) + (PAKU - KU) = AGRIPA",
    story: "Raja yang mendengar pembelaan Paulus dan berkata, \"Hampir-hampir saja kauyakinkan aku menjadi orang Kristen!\"",
    verse: "Kisah Para Rasul 26:28",
    hint: "Kisah: Raja yang berkata, 'Hampir-hampir saja kauyakinkan aku menjadi orang Kristen!'",
    cards: [
      { svg: pic("PAGAR"), badgeHtml: `${del("P")} ${X} ${DOT} ${del("AR")} ${X}` },
      { operator: "+" },
      { svg: pic("PIRING"), badgeHtml: `${del("PI")} ${X} ${DOT} ${del("NG")} ${X}` },
      { operator: "+" },
      { svg: pic("PAKU"), badgeHtml: `${del("KU")} ${X}` }
    ]
  },
  {
    id: 97,
    name: "ONESIMUS",
    formula: "(BALON - BAL) + ES + (TIMUN - T - UN) + (BUS - B) = ONESIMUS",
    story: "Budak yang melarikan diri dari tuannya, lalu menjadi percaya melalui Paulus dan dikirim kembali sebagai saudara yang kekasih.",
    verse: "Filemon 1:10-16",
    hint: "Kisah: Budak yang melarikan diri, lalu menjadi percaya melalui Paulus.",
    cards: [
      { svg: pic("BALON"), badgeHtml: `${del("BAL")} ${X}` },
      { operator: "+" },
      { svg: pic("ES"), badgeHtml: null },
      { operator: "+" },
      { svg: pic("TIMUN"), badgeHtml: `${del("T")} ${X} ${DOT} ${del("UN")} ${X}` },
      { operator: "+" },
      { svg: pic("BUS"), badgeHtml: `${del("B")} ${X}` }
    ]
  },
  {
    id: 98,
    name: "FILEMON",
    formula: "API (A ✕, P ➔ F) + LEMON = FILEMON",
    story: "Orang Kristen yang menerima surat dari Paulus. Paulus memintanya menerima kembali Onesimus sebagai saudara yang kekasih.",
    verse: "Filemon 1:1, 15-17",
    hint: "Kisah: Penerima surat Paulus yang diminta menerima kembali budaknya sebagai saudara.",
    cards: [
      { svg: pic("API"), badgeHtml: `${del("A")} ${X} ${DOT} ${del("P")} ${TO} ${add("F")}` },
      { operator: "+" },
      { svg: pic("LEMON"), badgeHtml: null }
    ]
  },
  {
    id: 99,
    name: "EUNIKE",
    formula: "ES (S ➔ U) + MIE (M ➔ N, E ✕) + (KERETA - RETA) = EUNIKE",
    story: "Ibu Timotius, perempuan yang beriman tulus ikhlas dan mengajar anaknya Kitab Suci sejak kecil.",
    verse: "2 Timotius 1:5; Kisah Para Rasul 16:1",
    hint: "Kisah: Ibu Timotius yang memiliki iman yang tulus ikhlas.",
    cards: [
      { svg: pic("ES"), badgeHtml: `${del("S")} ${TO} ${add("U")}` },
      { operator: "+" },
      { svg: pic("MIE"), badgeHtml: `${del("M")} ${TO} ${add("N")} ${DOT} ${del("E")} ${X}` },
      { operator: "+" },
      { svg: pic("KERETA"), badgeHtml: `${del("RETA")} ${X}` }
    ]
  },
  {
    id: 100,
    name: "GAMALIEL",
    formula: "JAM (J ➔ G) + (TALI - T) + (APEL - AP) = GAMALIEL",
    story: "Ahli Taurat yang dihormati, guru Paulus. Ia menasihati Mahkamah Agama supaya tidak menentang para rasul.",
    verse: "Kisah Para Rasul 5:34-39; 22:3",
    hint: "Kisah: Ahli Taurat, guru Paulus, yang menasihati Mahkamah Agama.",
    cards: [
      { svg: pic("JAM"), badgeHtml: `${del("J")} ${TO} ${add("G")}` },
      { operator: "+" },
      { svg: pic("TALI"), badgeHtml: `${del("T")} ${X}` },
      { operator: "+" },
      { svg: pic("APEL"), badgeHtml: `${del("AP")} ${X}` }
    ]
  }
];
