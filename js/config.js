
/* Ubah nama, tagline, deskripsi, dan info pribadi di sini.*/
const CONFIG_PROFILE = {
  name:       "Grendy",   // Nama lengkap kamu
  initials:   "GAPA",                  // huruf inisial (untuk logo & avatar)
  tagline:    "Siswa Rekayasa Perangkat Lunak", // Kalimat singkat di bawah nama
  greeting:   "Ciao, im",          // Kata sapaan sebelum nama besar
  bio: [
    // Paragraf pertama
    `Saya adalah seorang <strong>Siswa</strong> yang passionate dalam mempelajari
     Pengembangan Web. Dengan Fokus di bidang web development dan UI/UX design,
     saya percaya bahwa teknologi yang baik harus terasa alami dan menyenangkan untuk digunakan.`,
    // Paragraf kedua 
    `Saat ini saya fokus mempelajari web menggunakan <strong>HTML, CSS</strong>.
     Saya juga aktif berkontribusi pada proyek open source dan selalu belajar teknologi terbaru.`,
  ],

  // Info kartu about
  location:   "Blitar, Jawa Timur",
  education:  "SMKS Brantas Karangkates — RPL 2",
  focus:      "Web Development",
  languages:  "Indonesia, English",

  // Status 
  status:        "Sedang Sekolah — 2026",   // teks saat status terbuka = false
  statusOpen:    false,                     // true = status terbuka / open, false = status default
  statusOpenText:"Open to Projects",       // teks saat statusOpen = true

  // Foto profil About — isi dengan path gambar jika ada
  photo:      "img/16.jpg", // ganti dengan path foto kamu atau kosongkan ""

  // Link tombol "Unduh CV" — ganti dengan file CV 
  cvLink:     "files/17_GRENDY ARVEL PUTRA AGUSTI_XPPLG2.pdf",     
};


/* ----------------------------------------------------------------
   📊 STATISTIK HERO
   Angka yang muncul di bagian bawah hero dengan animasi counter.
   ---------------------------------------------------------------- */
const CONFIG_STATS = [
  { number: 0,   label: "Proyek"    },
  { number: 0,    label: "Tahun pengalaman" },
  { number: 0,   label: "Klien"     },
];


/* ----------------------------------------------------------------
   🔗 SOSIAL MEDIA & KONTAK
   Ganti nilai "url" dengan link profilmu. Kosongkan ("") untuk sembunyi.
   ---------------------------------------------------------------- */
const CONFIG_SOCIAL = {
  email:     "grendy.xpplg2@gmail.com",
  instagram: "",   // kosongkan "" untuk sembunyikan
  github:    "https://github.com/grendot-coder",
  linkedin:  "https://www.linkedin.com/in/grendy-arvel-putra-agusti-803366384/",
  twitter:   "",   // kosongkan "" untuk sembunyikan
};


/* ----------------------------------------------------------------
   🛠️  KEAHLIAN (SKILLS)
   Tambah / hapus skill sesuai kemampuanmu.
   Skill bar: nilai 0–100 (persentase kemampuan).
   ---------------------------------------------------------------- */
const CONFIG_SKILLS = {
  categories: [
    {
      icon:   "fa-solid fa-desktop",
      title:  "Frontend",
      tags:   ["HTML5", "CSS3", "JavaScript"],
    },
    {
      icon:   "fa-solid fa-server",
      title:  "Backend",
      tags:   [],
    },
    {
      icon:   "fa-solid fa-wrench",
      title:  "Tools & Others",
      tags:   ["GitHub", "Figma", "VS Code"],
    },
  ],

  //Sementara biarkan, jangan diedit/dihapus
  bars: [
  ],
};


/* ----------------------------------------------------------------
   💼 PROYEK
   Tambah proyek baru dengan menambah blok { ... } di bawah.
   category harus salah satu dari: "Web App" / "Mobile" / "Game" / "Web"
   ---------------------------------------------------------------- */
const CONFIG_PROJECTS = [
  {
    title:    "Web Bouquet Shop Orang Tua",
    desc:     "Web display karya Bouquet dan Gantungan kunci dari Ibu saya",
    tags:     ["HTML", "CSS", "JavaScript"],
    category: "Web",
    image:    "img/16.jpg", // ganti dengan path gambar proyekmu
    link:     "#",   // ganti dengan URL proyekmu
  },
  {
    title:    "TinkerCAD",
    desc:     "Eksperimen IoT secara digital menggunakan TinkerCAD.",
    tags:     ["IoT", "Arduino"],
    category: "IoT",
    image:    "img/16.jpg", // ganti dengan path gambar proyekmu
    link:     "#",
  },

];


/* ----------------------------------------------------------------
   🎨 WARNA TEMA  (opsional — skip jika tidak mau ubah)
   Ganti kode warna hex sesuai selera.
   ---------------------------------------------------------------- */
const CONFIG_THEME = {
  accent:  "#6afe3d",   // warna utama (ungu)
  accent2: "rgba(177, 24, 68, 0.35)",   // warna kedua (pink)
};
