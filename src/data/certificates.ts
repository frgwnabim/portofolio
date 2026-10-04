/* =============================================================================
   DATA SERTIFIKAT
   -----------------------------------------------------------------------------
   Edit file ini untuk menambah / mengubah sertifikat. Semua sertifikat tampil
   di halaman terpisah (/sertifikat), dibuka dari tombol di bagian "Tentang saya".

   Cara nambah sertifikat baru:
   1. Taruh file sertifikat di folder `public/certificates/`.
      PDF isi ke `link` (contoh: '/certificates/google-da.pdf'), thumbnail
      otomatis dibuat seragam. Gambar (.webp/.png/.jpg) boleh diisi ke `image`.
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
   * Gambar sertifikat (opsional). Harus file gambar (.webp/.png/.jpg), BUKAN PDF,
   * karena browser tidak bisa menampilkan PDF sebagai gambar.
   * Contoh: '/certificates/google-da.webp'. Rasio ideal landscape (4:3 atau 16:9).
   * Kalau dikosongkan, kartu otomatis pakai thumbnail desain seragam
   * (ilustrasi sertifikat + inisial penerbit). File PDF taruh di `link`.
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
  {
    title: 'BNSP - Software and Game Development',
    issuer: 'Badan Nasional Sertifikasi Profesi',
    date: '2024',
    link: '/certificates/sertif1.pdf',
    // credentialId: 'ABC123XYZ',
    // category: 'da',
    // skills: ['SQL', 'Tableau', 'R'],
  },
  {
    title: 'Implementasi Quality Assurance Dalam Pengembangan Aplikasi SmartGov di PT Cartenz Technology',
    issuer: 'SMK Telkom Jakarta',
    date: '2024',
    link: '/certificates/sertif2.pdf',
  },
  {
    title: 'Pembuatan CRUD Untuk Website Dinamis Sederhana Menggunakan Bootstrap',
    issuer: 'SMK Telkom Jakarta',
    date: '2023',
    link: '/certificates/sertif3.pdf',
  },
  {
    title: 'Membuat Aplikasi Pelayanan Pengaduan Sekolah Sederhana Berbasis Website Menggunakan Bahasa Pemrograman PHP, Basis Data dengan MySQL dan Desain Front End Dengan Bootstrap',
    issuer: 'SMK Telkom Jakarta',
    date: '2024',
    link: '/certificates/sertif4.pdf',
  },
];

