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
    highlight: '',
  },
  {
    title: 'Contoh: REST API Layanan Booking',
    description:
      'Backend service untuk reservasi dengan autentikasi JWT, rate limiting, dan dokumentasi OpenAPI yang siap dipakai tim frontend.',
    link: 'https://contoh-booking-api.vercel.app',
    tags: ['Node.js', 'Express', 'Redis', 'Docker'],
    repo: 'https://github.com/frgwnabim',
    year: '2025',
    status: 'live',
    highlight: '120ms rata-rata respons',
  },
  {
    title: 'Contoh: Aplikasi Catatan Realtime',
    description:
      'Editor kolaboratif multi-user dengan sinkronisasi realtime, mode offline, dan riwayat versi tiap dokumen.',
    link: 'https://contoh-notes.vercel.app',
    tags: ['React', 'Supabase', 'WebSocket', 'Tailwind'],
    year: '2024',
    status: 'live',
  },
  {
    title: 'Contoh: Dashboard Admin E-Commerce',
    description:
      'Panel admin untuk kelola produk, pesanan, dan pengguna lengkap dengan grafik penjualan serta ekspor data.',
    link: 'https://contoh-admin.vercel.app',
    tags: ['Vue 3', 'Pinia', 'Chart.js', 'Firebase'],
    year: '2024',
    status: 'live',
  },
  {
    title: 'Contoh: URL Shortener + Analitik',
    description:
      'Layanan pemendek tautan dengan custom slug, QR code otomatis, dan statistik klik per wilayah dan perangkat.',
    link: 'https://contoh-shortener.vercel.app',
    tags: ['Go', 'PostgreSQL', 'HTMX'],
    year: '2024',
    status: 'live',
  },
  {
    title: 'Contoh: CLI Generator Boilerplate',
    description:
      'Tool baris perintah untuk scaffolding project baru beserta konfigurasi linting, testing, dan CI/CD.',
    link: 'https://contoh-cli.vercel.app',
    tags: ['TypeScript', 'Node.js', 'GitHub Actions'],
    year: '2023',
    status: 'wip',
  },
];

/* -----------------------------------------------------------------------------
   DATA ANALYTICS
----------------------------------------------------------------------------- */
export const dataProjects: Project[] = [
  {
    title: 'Contoh: Analisis Perilaku Pelanggan Retail',
    description:
      'Segmentasi pelanggan memakai RFM dan K-Means untuk menentukan prioritas kampanye promosi per kelompok.',
    link: 'https://contoh-rfm.vercel.app',
    tags: ['Python', 'Pandas', 'scikit-learn', 'Plotly'],
    repo: 'https://github.com/frgwnabim',
    year: '2025',
    status: 'live',
    highlight: '5 segmen pelanggan',
  },
  {
    title: 'Contoh: Dashboard Penjualan Interaktif',
    description:
      'Visualisasi tren penjualan multi-cabang dengan filter periode, drill-down kategori, dan perbandingan target.',
    link: 'https://contoh-sales-dashboard.vercel.app',
    tags: ['Power BI', 'SQL', 'DAX'],
    year: '2025',
    status: 'live',
    highlight: '18 KPI terpantau',
  },
  {
    title: 'Contoh: Prediksi Churn Pelanggan',
    description:
      'Model klasifikasi untuk menandai pelanggan berisiko berhenti berlangganan beserta faktor pendorongnya.',
    link: 'https://contoh-churn.vercel.app',
    tags: ['Python', 'XGBoost', 'SHAP', 'Streamlit'],
    year: '2024',
    status: 'live',
    highlight: 'ROC-AUC 0.91',
  },
  {
    title: 'Contoh: Pipeline ETL Data Publik',
    description:
      'Otomatisasi pengambilan, pembersihan, dan pemuatan data terjadwal dari beberapa sumber terbuka ke warehouse.',
    link: 'https://contoh-etl.vercel.app',
    tags: ['Airflow', 'BigQuery', 'dbt'],
    year: '2024',
    status: 'live',
  },
  {
    title: 'Contoh: Analisis Sentimen Ulasan Produk',
    description:
      'Klasifikasi sentimen ribuan ulasan marketplace plus ekstraksi topik keluhan yang paling sering muncul.',
    link: 'https://contoh-sentimen.vercel.app',
    tags: ['Python', 'NLTK', 'Transformers', 'Seaborn'],
    year: '2024',
    status: 'live',
  },
  {
    title: 'Contoh: Laporan Kohort Retensi Pengguna',
    description:
      'Analisis kohort bulanan untuk melihat retensi pengguna aplikasi dan dampak tiap rilis fitur baru.',
    link: 'https://contoh-kohort.vercel.app',
    tags: ['SQL', 'Looker Studio', 'Google Sheets'],
    year: '2023',
    status: 'live',
  },
];
