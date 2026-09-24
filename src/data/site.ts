/* =============================================================================
   DATA PROFIL & KONFIGURASI SITUS
   -----------------------------------------------------------------------------
   Edit file ini untuk mengganti nama, bio, kontak, skill, dan teks landing page.
   Tidak perlu menyentuh file komponen sama sekali.
============================================================================= */

export const site = {
  /** Nama yang tampil di header, hero, dan footer. */
  name: 'Fergiawan Abimanyu',
  /** Inisial untuk logo. Maksimal 2 huruf. */
  initials: 'FA',
  /** Peran singkat, tampil di bawah nama pada header dan di meta title. */
  role: 'Software Engineer & Data Analyst',
  /** Domain final di Hostinger. Dipakai untuk canonical URL dan Open Graph. */
  url: 'https://frgwnabim.site',
  /** Lokasi, tampil di hero. Kosongkan ('') kalau tidak mau ditampilkan. */
  location: 'Jakarta, Indonesia',
  /** Status ketersediaan di badge hero. Kosongkan ('') untuk menyembunyikan badge. */
  availability: '',
  /** Alamat email untuk tombol kontak. */
  email: 'fergiawanabim@gmail.com',

  /** Judul & deskripsi untuk SEO / preview waktu link dibagikan. */
  seo: {
    title: 'Fergiawan Abimanyu | Software Engineer & Data Analyst',
    description:
      'Portofolio project software engineering dan data analytics: aplikasi web, API, dashboard, dan analisis data end-to-end.',
    /** Gambar preview saat link dibagikan (taruh di folder public/). */
    ogImage: '/og-image.svg',
  },

  /** Teks besar di hero. Kata di dalam tanda {} akan diberi warna gradient. */
  hero: {
    headline: '{Software Engineer} & {Data Analyst}',
    subheadline: 'Membangun aplikasi web dan mengolah data menjadi insight.',
  },

  /** Paragraf pada bagian "Tentang Saya". Tambah/kurangi baris sesukanya. */
  about: [
    'Saya Fergiawan, software engineer dan data analyst. Saya membangun aplikasi web end-to-end serta menganalisis data menjadi dashboard dan laporan untuk pengambilan keputusan.',
  ],

  /** Angka singkat di bawah hero. Hapus item yang tidak perlu. */
  stats: [
    { value: '10+', label: 'Project selesai' },
    { value: '15+', label: 'Tools & teknologi' },
  ],

  /** Tautan sosial. Kosongkan url ('') untuk menyembunyikan salah satu. */
  socials: {
    github: 'https://github.com/frgwnabim',
    linkedin: 'https://www.linkedin.com/in/fergiawan-abimanyu-502046267/',
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
        'Matplotlib',
        'Excel',
        'ETL',
      ],
    },
  ],

  /** Isi bagian kontak di bagian bawah halaman. */
  contact: {
    title: 'Hubungi saya',
    description:
      // 'Punya project, tawaran kerja, atau sekadar mau diskusi soal kode dan data? Kirim pesan, biasanya saya balas dalam 1 sampai 2 hari kerja.',
      '',
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
    eyebrow: '',
    title: 'Software Engineering',
    description: '',
  },
  data: {
    id: 'data-analytics',
    eyebrow: '',
    title: 'Data Analytics',
    description: '',
  },
};
