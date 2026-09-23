# Portofolio: Software Engineering & Data Analytics

Website portofolio satu halaman dengan dua bagian project yang terpisah atas bawah
(Software Engineering di atas, Data Analytics di bawah), masing-masing menampilkan
5 project plus tombol **Lihat lebih banyak**.

Dibangun supaya kamu cukup mengedit **satu file** waktu mau menambah project baru.

---

## Daftar isi

1. [Stack yang dipakai dan alasannya](#1-stack-yang-dipakai-dan-alasannya)
2. [Struktur folder](#2-struktur-folder)
3. [Menjalankan di komputer sendiri](#3-menjalankan-di-komputer-sendiri)
4. [Menambah atau mengubah project](#4-menambah-atau-mengubah-project)
5. [Mengganti identitas, warna, dan teks](#5-mengganti-identitas-warna-dan-teks)
6. [Build untuk produksi](#6-build-untuk-produksi)
7. [Deploy ke Hostinger](#7-deploy-ke-hostinger)
8. [Checklist sebelum go-live](#8-checklist-sebelum-go-live)

---

## 1. Stack yang dipakai dan alasannya

| Bagian | Pilihan | Alasan |
| --- | --- | --- |
| Framework | [Astro](https://astro.build) v7 | Hasil build-nya **HTML + CSS statis murni**. Hostinger shared hosting memang hanya melayani file statis dan PHP, jadi ini paling pas. Tidak butuh Node.js di server. |
| Styling | CSS modern (custom properties, grid, `clamp()`) | Tanpa Tailwind atau library CSS, jadi tidak ada versi yang bisa breaking waktu di-update. Semua warna terkumpul di satu file token. |
| Interaksi | Vanilla JavaScript | Tombol show more, dark mode, dan menu mobile ditulis langsung tanpa React/Vue. Total JS yang dikirim ke browser sangat kecil dan ikut ditempel di dalam HTML. |
| Font | Plus Jakarta Sans (Google Fonts) | Modern, tebalnya lengkap, dan enak dibaca di ukuran kecil. |

Kenapa bukan Next.js atau React SPA: keduanya butuh Node.js runtime atau konfigurasi
tambahan untuk hosting statis, sementara Astro langsung menghasilkan folder `dist/`
yang tinggal di-drag ke `public_html`. Untuk portofolio, ini yang paling ringan dirawat.

**Fitur yang sudah jalan:**

- Mode terang dan gelap dengan tombol di header (pilihan tersimpan di browser pengunjung)
- Responsif dari layar HP sampai desktop lebar
- Preview otomatis (gradient + inisial judul) kalau project belum punya screenshot
- Animasi muncul saat di-scroll, otomatis nonaktif kalau pengunjung mengaktifkan
  "reduce motion" di sistem operasinya
- SEO dasar: meta tag, Open Graph, JSON-LD, `robots.txt`, `sitemap.xml`
- `.htaccess` siap pakai: paksa HTTPS, kompresi, cache, header keamanan
- Tetap terbaca walaupun JavaScript pengunjung mati

---

## 2. Struktur folder

```
portofolio/
├─ src/
│  ├─ data/
│  │  ├─ projects.ts      <-- DAFTAR PROJECT (paling sering kamu edit)
│  │  └─ site.ts          <-- Nama, bio, kontak, skill, teks section
│  ├─ components/         <-- Potongan tampilan (header, kartu, dll)
│  ├─ layouts/
│  │  └─ BaseLayout.astro <-- Kerangka HTML, meta tag, script global
│  ├─ pages/
│  │  ├─ index.astro      <-- Halaman utama
│  │  └─ 404.astro        <-- Halaman error
│  └─ styles/
│     └─ global.css       <-- Semua warna dan gaya dasar
├─ public/                <-- File yang di-copy apa adanya ke hasil build
│  ├─ .htaccess           <-- Konfigurasi server Hostinger
│  ├─ favicon.svg
│  ├─ og-image.svg
│  ├─ robots.txt
│  ├─ sitemap.xml
│  └─ previews/           <-- Taruh screenshot project di sini
├─ .github/workflows/
│  └─ deploy-hostinger.yml <-- Deploy otomatis (opsional)
├─ astro.config.mjs        <-- Isi domain kamu di sini
├─ HOSTINGER.md            <-- Panduan setup Hostinger dari nol
└─ package.json
```

---

## 3. Menjalankan di komputer sendiri

Prasyarat: **Node.js versi 22.12 atau lebih baru** (unduh di <https://nodejs.org>).

```bash
# sekali saja, waktu pertama clone
npm install

# jalankan mode development, buka http://localhost:4321
npm run dev
```

Simpan file mana pun, browser akan refresh sendiri.

Perintah lain:

| Perintah | Fungsi |
| --- | --- |
| `npm run dev` | Server development dengan auto-reload |
| `npm run build` | Build ke folder `dist/` (ini yang diupload ke Hostinger) |
| `npm run preview` | Melihat hasil build persis seperti di server |
| `npm run check` | Mengecek error pengetikan di kode |
| `npm run zip` | Build lalu bungkus jadi `portfolio-dist.zip` siap upload (butuh perintah `zip`: tersedia di macOS, Linux, dan Git Bash) |

---

## 4. Menambah atau mengubah project

Buka **`src/data/projects.ts`**. Isinya dua daftar: `softwareProjects` dan `dataProjects`.

Untuk menambah project, copy satu blok lalu ubah isinya:

```ts
{
  title: 'Sistem Manajemen Inventori',
  description: 'Aplikasi web untuk pencatatan stok gudang dengan role-based access.',
  link: 'https://inventori-app.vercel.app',   // link Vercel kamu
  tags: ['Next.js', 'TypeScript', 'PostgreSQL'],
  cover: '/previews/inventori.png',           // opsional
  repo: 'https://github.com/frgwnabim/inventori', // opsional
  year: '2025',                               // opsional
  status: 'live',                             // 'live' | 'wip' | 'private'
  highlight: 'Proses stok 3x lebih cepat',    // opsional
},
```

**Yang wajib** cuma 4: `title`, `description`, `link`, `tags`. Sisanya boleh dihapus.

### Aturan main tombol "Lihat lebih banyak"

Project ke-1 sampai ke-5 tampil langsung, sisanya otomatis masuk ke balik tombol.
Jadi kamu tidak perlu mengubah kode apa pun waktu menambah project ke-6, ke-7, dan seterusnya.

Mau mengubah jumlah yang tampil? Ubah satu angka di file yang sama:

```ts
export const PROJECTS_VISIBLE = 5;   // ganti jadi 6, 3, berapa pun
```

### Menambah screenshot project

1. Simpan gambar ke folder `public/previews/`, ukuran ideal 1280 x 720 piksel.
2. Tambahkan `cover: '/previews/nama-file.png'` di project tersebut.

Kalau `cover` tidak diisi, website otomatis membuat preview gradient berisi inisial
judul project, jadi tampilannya tetap rapi dan konsisten.

### Urutan project

Urutan di website persis sama dengan urutan di file. Project terbaik taruh di paling atas,
karena project pertama tiap bagian otomatis jadi kartu besar (featured).

---

## 5. Mengganti identitas, warna, dan teks

### Identitas dan kontak

Semua ada di **`src/data/site.ts`**: nama, inisial logo, peran, lokasi, email,
paragraf "Tentang Saya", angka statistik, link sosial, dan daftar skill.

Jangan lupa juga:

- `astro.config.mjs` baris `SITE_URL`, isi dengan domain Hostinger kamu
- `public/robots.txt` dan `public/sitemap.xml`, ganti `namadomainkamu.com`

### Warna

Semua warna ada di bagian atas **`src/styles/global.css`**. Palet sekarang memakai
biru muda (azure) sebagai warna utama dan teal sebagai aksen bagian Data Analytics.

Kombinasi yang dipakai:

| Peran | Terang | Gelap |
| --- | --- | --- |
| Latar halaman | `#f3f8fd` | `#081524` |
| Kartu / panel | `#ffffff` | `#0f2237` |
| Warna utama | `#338eef` | `#6fb8ff` |
| Aksen (Data Analytics) | `#14a8a0` | `#34c9c0` |
| Teks judul | `#0d2137` | `#e8f1fa` |
| Teks isi | `#395a76` | `#a9c3d9` |

Kombinasi teks dan latar di atas sudah memenuhi standar kontras WCAG AA, jadi tetap
nyaman dibaca lama. Kalau mau ganti nuansa biru, ubah saja skala `--blue-50` sampai
`--blue-900`, seluruh website ikut menyesuaikan.

### Ikon dan gambar share

- `public/favicon.svg`: ikon di tab browser, ganti huruf `FA` di dalamnya
- `public/og-image.svg`: gambar yang muncul waktu link dibagikan ke WhatsApp/LinkedIn

Catatan: sebagian platform sosial tidak membaca format SVG. Kalau mau preview link
tampil sempurna di semua tempat, ekspor gambar 1200 x 630 piksel berformat PNG,
simpan sebagai `public/og-image.png`, lalu ubah `ogImage: '/og-image.png'` di `site.ts`.

---

## 6. Build untuk produksi

```bash
npm run build
```

Hasilnya ada di folder **`dist/`**. Isi folder itulah yang diupload ke Hostinger,
bukan seluruh project. Folder `dist/` sudah termasuk `.htaccess` (file tersembunyi,
pastikan ikut terupload).

---

## 7. Deploy ke Hostinger

Panduan lengkap langkah demi langkah ada di file terpisah: **[HOSTINGER.md](./HOSTINGER.md)**

Ringkasnya ada tiga cara:

1. **Upload manual lewat File Manager** (paling gampang, cocok untuk pertama kali)
2. **FTP pakai FileZilla** (enak untuk update rutin)
3. **Deploy otomatis lewat GitHub Actions + fitur Git Hostinger** (branch `deploy`, sekali setup, selanjutnya tinggal `git push`)

---

## 8. Checklist sebelum go-live

- [ ] `astro.config.mjs`: `SITE_URL` sudah diisi domain asli
- [ ] `src/data/site.ts`: nama, email, dan link sosial sudah benar
- [ ] `public/robots.txt` dan `public/sitemap.xml`: domain sudah diganti
- [ ] Semua project contoh sudah diganti dengan project asli
- [ ] Setiap `link` project sudah dites dan benar-benar terbuka
- [ ] SSL di hPanel sudah aktif dan website terbuka dengan `https://`
- [ ] Coba buka di HP untuk memastikan tampilan mobile aman
