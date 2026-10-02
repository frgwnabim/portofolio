/* =============================================================================
   DATA PROJECT
   -----------------------------------------------------------------------------
   INI SATU-SATUNYA FILE YANG PERLU KAMU EDIT KALAU MAU NAMBAH / UBAH PROJECT.

   Cara nambah project baru:
   1. Copy satu blok { ... } di bawah.
   2. Ganti title, description, link, tags.
   3. Simpan, jalankan `npm run build`, upload folder dist/ ke Hostinger.

   Project ke-1 sampai ke-5 tampil langsung, sisanya sembunyi di balik
   tombol "Lihat lebih banyak" (otomatis, tanpa perlu ngoding lagi).
   Ubah angka 5 lewat PROJECTS_VISIBLE di bawah kalau mau beda.
============================================================================= */

export type Project = {
  /** Judul project yang tampil di kartu. */
  title: string;
  /** Deskripsi singkat, idealnya 1 sampai 2 kalimat (maksimal ~160 karakter). */
  description: string;
  /** URL tujuan waktu kartu diklik, biasanya link Vercel kamu. */
  link: string;
  /** Teknologi / tools. Tampil sebagai badge kecil. Cukup 3 sampai 5 biar rapi. */
  tags: string[];
  /**
   * Gambar preview (opsional). Taruh file di folder `public/previews/`
   * lalu tulis path-nya: '/previews/nama-file.png'. Rasio ideal 16:9 (1280x720).
   * Kalau dikosongkan, otomatis dibuatkan preview gradient + inisial judul.
   */
  cover?: string;
  /** Link repository GitHub (opsional). Tampil sebagai tombol kecil di kartu. */
  repo?: string;
  /** Tahun pengerjaan (opsional). */
  year?: string;
  /** Status project (opsional): 'live' | 'wip' | 'private'. Default 'live'. */
  status?: 'live' | 'wip' | 'private';
  /** Satu angka/hasil yang paling nendang (opsional). Contoh: 'Akurasi 92%'. */
  highlight?: string;
};

/** Berapa project yang tampil sebelum tombol "Lihat lebih banyak" ditekan. */
export const PROJECTS_VISIBLE = 5;

/* -----------------------------------------------------------------------------
   SOFTWARE ENGINEERING
----------------------------------------------------------------------------- */
export const softwareProjects: Project[] = [
  {
    title: 'Banijya Shop - Ecommerce',
    description:
      'Aplikasi web untuk transaksi online dengan fitur keranjang belanja, pembayaran, dan manajemen produk.',
    link: 'https://web-production-5f7507.up.railway.app/',
    tags: ['PHP', 'Laravel', 'PostgreSQL', 'Bootstrap'],
    repo: 'https://github.com/frgwnabim/banijya_shop',
    year: '2026',
    status: 'live',
    cover: '/previews/preview-banijya_shop.png',
  },
  {
    title: 'Noisecore',
    description:
      'Website pembelian Noisecore secara online.',
    link: 'https://noisecore.vercel.app/',
    tags: ['HTML', 'CSS', 'JavaScript'],
    repo: 'https://github.com/frgwnabim/noisecore-project',
    year: '2025',
    status: 'live',
    cover: '/previews/preview-noisecore.png',
  },
  {
    title: 'Finance Management App',
    description:
      'Website Pengelolaan Keuangan secara online.',
    link: 'https://finance-management-app-f001.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'PostgreSQL', 'Tailwind CSS', 'Auth.js', 'Recharts'],
    repo: 'https://github.com/frgwnabim/finance_management_app',
    year: '2025',
    status: 'live',
    cover: '/previews/preview-finance_management_app.png',
  },
  {
    title: 'ToddlerTime',
    description:
      'Tontonan aman dan ceria untuk anak balita, dengan kontrol orang tua yang lengkap.',
    link: 'https://toddler-time-chi.vercel.app/',
    tags: ['Next.js', 'TypeScript', 'Supabase', 'Tailwind CSS', 'bcryptjs'],
    repo: 'https://github.com/frgwnabim/ToddlerTime',
    year: '2025',
    status: 'live',
    cover: '/previews/preview-toddler_time.png',
  },
];

/* -----------------------------------------------------------------------------
   DATA ANALYTICS
----------------------------------------------------------------------------- */
export const dataProjects: Project[] = [
  {
    title: 'TransJakarta Fleet Dashboard',
    description:
      'Membuat model yang menganalisis alokasi armada TransJakarta untuk meningkatkan efisiensi operasional.',
    link: 'https://da-trans-jakarta-bus-allocated.vercel.app/',
    tags: ['Python', 'PDI', 'PostgreSQL', 'Power BI'],
    repo: 'https://github.com/frgwnabim/DA-TransJakarta_Bus_Allocated',
    year: '2025',
    status: 'live',
    cover: '/previews/preview-da_trans_jakarta_bus_allocated.png',
  },
  {
    title: 'Hotel Booking Analysis',
    description:
      'Pembatalan pemesanan hotel dianalisis untuk mengidentifikasi pola dan tren.',
    link: 'https://da-hotel-booking-analyst.vercel.app/',
    tags: ['Power BI', 'SQL', 'Python'],
    repo: 'https://github.com/frgwnabim/DA-Hotel_Booking_Analyst',
    year: '2026',
    status: 'live',
    cover: '/previews/preview-da_hotel_booking_analyst.png',
  },
  {
    title: 'Amazon India Sales Analysis',
    description:
      'Analisis data penjualan Amazon India untuk mengidentifikasi tren dan pola pembelian.',
    link: 'https://da-amazon-india-analyst.vercel.app/',
    tags: ['Power BI', 'SQL', 'Python'],
    repo: 'https://github.com/frgwnabim/DA-Amazon_India_analyst',
    year: '2026',
    status: 'live',
    cover: '/previews/preview-da_amazon_india_analyst.png',
  },
    {
    title: 'Garbage Classification',
    description:
      'Klasifikasi Sampah dengan CNN dan Transfer Learning',
    link: 'https://da-garbageclassification.vercel.app/',
    tags: ['CNN', 'MobileNetV2 ', 'Deep Learning', 'Python'],
    repo: 'https://github.com/frgwnabim/DA-Garbage_Classification',
    year: '2026',
    status: 'live',
    cover: '/previews/preview-da_garbageclassification.png',
  },
];
