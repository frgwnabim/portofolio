/* =============================================================================
   DATA PROFIL & KONFIGURASI SITUS
   -----------------------------------------------------------------------------
   Edit file ini untuk mengganti nama, bio, kontak, skill, dan teks landing page.
   Tidak perlu menyentuh file komponen sama sekali.
============================================================================= */

export const site = {
  /** Nama yang tampil di header, hero, dan footer. */
  name: 'Fergiawan Abim',
  /** Inisial untuk logo. Maksimal 2 huruf. */
  initials: 'FA',
  /** Peran singkat, tampil di bawah nama pada header dan di meta title. */
  role: 'Software Engineer & Data Analyst',
  /** Domain final di Hostinger. Dipakai untuk canonical URL dan Open Graph. */
  url: 'https://namadomainkamu.com',
  /** Lokasi, tampil di hero. Kosongkan ('') kalau tidak mau ditampilkan. */
  location: 'Indonesia',
  /** Status ketersediaan di badge hero. Kosongkan ('') untuk menyembunyikan badge. */
  availability: 'Terbuka untuk peluang & kolaborasi',
  /** Alamat email untuk tombol kontak. */
  email: 'fergiawanabim@gmail.com',

  /** Judul & deskripsi untuk SEO / preview waktu link dibagikan. */
  seo: {
    title: 'Fergiawan Abim | Software Engineer & Data Analyst',
    description:
      'Portofolio project software engineering dan data analytics: aplikasi web, API, dashboard, dan analisis data end-to-end.',
    /** Gambar preview saat link dibagikan (taruh di folder public/). */
    ogImage: '/og-image.svg',
  },

  /** Teks besar di hero. Kata di dalam tanda {} akan diberi warna gradient. */
  hero: {
    headline: 'Membangun {perangkat lunak} yang rapi dan {analisis data} yang berguna.',
    subheadline:
      'Saya mengerjakan dua hal yang saling melengkapi: merancang aplikasi yang stabil dan enak dipakai, lalu menggali data di baliknya menjadi keputusan yang bisa ditindaklanjuti.',
  },

  /** Paragraf pada bagian "Tentang Saya". Tambah/kurangi baris sesukanya. */
  about: [
    'Halo, saya Fergiawan. Saya menulis kode untuk menyelesaikan masalah nyata, bukan sekadar menambah fitur. Fokus saya ada pada aplikasi web modern: arsitektur yang jelas, kode yang gampang dirawat, dan pengalaman pengguna yang terasa ringan.',
    'Di sisi lain, saya senang mengolah data mentah yang berantakan menjadi cerita yang mudah dipahami. Mulai dari membersihkan data, membangun pipeline, sampai menyusun dashboard dan model yang dipakai untuk mengambil keputusan.',
  ],

  /** Angka singkat di bawah hero. Hapus item yang tidak perlu. */
  stats: [
    { value: '10+', label: 'Project selesai' },
    { value: '2', label: 'Bidang keahlian' },
    { value: '15+', label: 'Tools & teknologi' },
  ],

  /** Tautan sosial. Kosongkan url ('') untuk menyembunyikan salah satu. */
  socials: {
    github: 'https://github.com/frgwnabim',
    linkedin: 'https://www.linkedin.com/in/',
    instagram: '',
    /** File CV di folder public/, contoh '/cv-fergiawan-abim.pdf'. Kosongkan kalau belum ada. */
    resume: '',
  },

  /** Keahlian, dikelompokkan supaya gampang dibaca. */
  skills: [
    {
      group: 'Software Engineering',
      accent: 'se' as const,
      items: [
        'TypeScript',
        'JavaScript',
        'React',
        'Next.js',
        'Node.js',
        'Express',
        'PostgreSQL',
        'REST API',
        'Git',
        'Docker',
      ],
    },
    {
      group: 'Data Analytics',
      accent: 'da' as const,
      items: [
        'Python',
        'Pandas',
        'NumPy',
        'SQL',
        'scikit-learn',
        'Power BI',
        'Looker Studio',
        'Matplotlib',
        'Excel',
        'ETL',
      ],
    },
  ],

  /** Isi bagian kontak di bagian bawah halaman. */
  contact: {
    title: 'Mari bikin sesuatu bersama',
    description:
      'Punya project, tawaran kerja, atau sekadar mau diskusi soal kode dan data? Kirim pesan, biasanya saya balas dalam 1 sampai 2 hari kerja.',
  },
};

/** Menu navigasi di header. `href` harus cocok dengan id section di halaman. */
export const navLinks = [
  { label: 'Tentang', href: '#tentang' },
  { label: 'Software Engineering', href: '#software-engineering' },
  { label: 'Data Analytics', href: '#data-analytics' },
  { label: 'Kontak', href: '#kontak' },
];

/** Judul & deskripsi untuk dua section project. */
export const sections = {
  software: {
    id: 'software-engineering',
    eyebrow: 'Bagian 01',
    title: 'Software Engineering',
    description:
      'Aplikasi web, API, dan tooling yang saya rancang dari nol sampai rilis. Klik kartunya untuk membuka demo langsung.',
  },
  data: {
    id: 'data-analytics',
    eyebrow: 'Bagian 02',
    title: 'Data Analytics',
    description:
      'Analisis, dashboard, dan model prediktif dari data nyata. Klik kartunya untuk melihat hasil dan visualisasinya.',
  },
};
