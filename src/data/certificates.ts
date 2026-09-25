/* =============================================================================
   DATA SERTIFIKAT
   -----------------------------------------------------------------------------
   Edit file ini untuk menambah / mengubah sertifikat. Semua sertifikat tampil
   di halaman terpisah (/sertifikat) yang dibuka di tab baru dari beranda.

   Cara nambah sertifikat baru:
   1. Taruh file sertifikat (gambar .webp/.png/.jpg atau .pdf) di folder
      `public/certificates/`, contoh: `public/certificates/google-da.webp`.
   2. Copy contoh blok { ... } di bawah, hapus tanda //, lalu isi datanya.
   3. Simpan, jalankan `npm run build`, upload folder dist/ ke Hostinger.
============================================================================= */

export type Certificate = {
  /** Nama sertifikat / course. */
  title: string;
  /** Penerbit, contoh: 'Google', 'Dicoding', 'Coursera'. */
  issuer: string;
  /** Tanggal terbit, bebas formatnya, contoh: 'Mar 2025' atau '2025'. */
  date: string;
  /**
   * Gambar sertifikat (opsional). Path dari folder public/,
   * contoh: '/certificates/google-da.webp'. Rasio ideal landscape (4:3 atau 16:9).
   * Kalau dikosongkan, kartu otomatis pakai tampilan gradient + inisial penerbit.
   */
  image?: string;
  /**
   * Link waktu kartu diklik (opsional): link verifikasi / credential URL,
   * atau file PDF di public/, contoh '/certificates/google-da.pdf'.
   * Kalau dikosongkan, kartu membuka `image`.
   */
  link?: string;
  /** ID kredensial (opsional). */
  credentialId?: string;
  /** Kategori (opsional). Menentukan warna badge. */
  category?: 'se' | 'da' | 'other';
  /** Skill yang dicakup (opsional). Cukup 2 sampai 4 biar rapi. */
  skills?: string[];
};

export const certificates: Certificate[] = [
  // {
  //   title: 'Google Data Analytics Professional Certificate',
  //   issuer: 'Google',
  //   date: 'Mar 2025',
  //   image: '/certificates/google-da.webp',
  //   link: 'https://www.coursera.org/account/accomplishments/...',
  //   credentialId: 'ABC123XYZ',
  //   category: 'da',
  //   skills: ['SQL', 'Tableau', 'R'],
  // },
];
