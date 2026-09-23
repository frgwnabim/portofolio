# Panduan Setup di Hostinger (dari nol sampai online)

Panduan ini ditulis untuk Hostinger **shared hosting** (paket Premium / Business),
yaitu paket yang memakai hPanel dan folder `public_html`.

> ### Baca dulu sebelum mulai
>
> Kamu bilang di domain ini **sudah ada website lain**. Mengupload website baru ke
> `public_html` akan **menimpa** website lama itu. Jadi kerjakan Langkah 0 dulu.

---

## Langkah 0. Amankan website yang sekarang

1. Masuk ke [hpanel.hostinger.com](https://hpanel.hostinger.com).
2. Pilih **Websites** lalu klik **Dashboard** pada domain kamu.
3. Buka **Files > Backups**, klik **Files backup**, lalu **Create new backup**.
   Tunggu sampai selesai, ini jaring pengaman kalau ada yang salah.
4. Tambahan (disarankan): buka **Files > File Manager**, masuk ke `public_html`,
   blok semua isinya, klik kanan lalu **Compress** jadi `backup-web-lama.zip`.
   Unduh file zip itu ke komputer kamu, lalu simpan baik-baik.

**Mau coba dulu tanpa mengganggu website lama?** Bikin subdomain untuk uji coba:

- hPanel > **Domains > Subdomains**
- Isi misalnya `coba`, hasilnya `coba.namadomainkamu.com`
- Hostinger otomatis membuat folder baru, biasanya `public_html/coba`
- Upload hasil build ke folder itu dulu. Kalau sudah yakin, baru pindah ke `public_html`

---

## Langkah 1. Pastikan domain sudah mengarah ke Hostinger

Lewati langkah ini kalau website lama kamu sudah bisa dibuka di domain tersebut,
berarti domainnya memang sudah nyambung.

**Kalau domain dibeli di Hostinger:** biasanya sudah otomatis terhubung.

**Kalau domain dibeli di tempat lain** (Niagahoster, Namecheap, GoDaddy, dan sebagainya):

1. Di hPanel, buka **Websites > Dashboard > Domains**, catat nameserver Hostinger:
   ```
   ns1.dns-parking.com
   ns2.dns-parking.com
   ```
2. Login ke tempat kamu beli domain, cari menu **Nameserver** atau **DNS**.
3. Ganti nameserver ke dua alamat di atas.
4. Tunggu propagasi, umumnya 30 menit sampai 24 jam. Cek di
   <https://dnschecker.org> dengan mengetik domain kamu.

---

## Langkah 2. Aktifkan SSL (HTTPS)

1. hPanel > **Security > SSL**.
2. Kalau statusnya belum aktif, klik **Install SSL**. Gratis, dari Let's Encrypt.
3. Tunggu sampai statusnya jadi **Active**, biasanya beberapa menit.

File `.htaccess` di website ini sudah memaksa semua pengunjung ke `https://`,
jadi kamu tidak perlu mengaktifkan opsi "Force HTTPS" di hPanel. Kalau kamu
aktifkan juga tidak masalah.

---

## Langkah 3. Build website di komputer

```bash
# di folder project
npm install       # cukup sekali
npm run build     # hasilnya di folder dist/
```

Kalau mau langsung dapat file zip siap upload:

```bash
npm run zip       # menghasilkan portfolio-dist.zip
```

Perintah `zip` tersedia di macOS, Linux, dan Git Bash. **Kalau kamu pakai Windows
tanpa Git Bash**, cukup jalankan `npm run build`, lalu buka folder `dist`, blok semua
isinya (termasuk file tersembunyi `.htaccess`), klik kanan dan pilih
**Send to > Compressed (zipped) folder**.

> **Penting:** yang diupload adalah **isi** folder `dist/`, bukan folder `dist`-nya.
> Di dalam `public_html` nanti harus ada `index.html` langsung, bukan `dist/index.html`.

---

## Cara 1. Upload lewat File Manager (paling gampang)

Cocok untuk upload pertama kali dan untuk update sesekali.

1. Jalankan `npm run zip` di komputer, kamu akan dapat `portfolio-dist.zip`.
2. hPanel > **Files > File Manager**.
3. Masuk ke folder `public_html`.
4. **Hapus isi website lama** (pastikan backup Langkah 0 sudah beres):
   blok semua file dan folder di dalam `public_html`, lalu klik ikon tempat sampah.
   Yang dihapus isinya saja, folder `public_html`-nya jangan ikut dihapus.
5. Klik ikon **Upload** di kanan atas, pilih `portfolio-dist.zip`.
6. Setelah selesai, klik kanan file zip tadi lalu pilih **Extract**,
   ekstrak ke folder yang sama (`public_html`).
7. Hapus `portfolio-dist.zip` yang sudah diekstrak.
8. Pastikan file `.htaccess` ikut ada. Kalau tidak kelihatan, klik menu
   **Settings** (ikon gerigi) di File Manager lalu centang **Show hidden files**.
9. Buka `https://namadomainkamu.com`. Selesai.

### Update berikutnya

Ulangi langkah 1 sampai 7. Tidak perlu menyentuh pengaturan apa pun lagi.

---

## Cara 2. Upload lewat FTP (FileZilla)

Lebih cepat untuk update rutin karena hanya file yang berubah yang diupload.

### Ambil data login FTP

1. hPanel > **Files > FTP Accounts**.
2. Catat: **FTP hostname**, **FTP username**, dan **port** (biasanya 21).
3. Password: pakai yang kamu buat, atau klik **Change account password** untuk membuat baru.

### Sambungkan FileZilla

1. Unduh FileZilla di <https://filezilla-project.org>.
2. Buka **File > Site Manager > New site**.
3. Isi:
   - Protocol: **FTP**
   - Host: hostname dari hPanel
   - Encryption: **Require explicit FTP over TLS**
   - Logon Type: **Normal**
   - User dan Password: dari hPanel
4. Klik **Connect**.

### Upload

1. Panel kiri (komputer kamu): masuk ke folder `dist` di dalam project.
2. Panel kanan (server): masuk ke `public_html`.
3. Hapus isi lama di panel kanan (sekali saja, waktu pertama pindah dari web lama).
4. Blok **semua isi** folder `dist` di panel kiri, klik kanan lalu **Upload**.
5. Pastikan FileZilla menampilkan file tersembunyi:
   **Server > Force showing hidden files**, supaya `.htaccess` ikut terkirim.

---

## Cara 3. Deploy otomatis: GitHub Actions + fitur Git Hostinger (paling nyaman jangka panjang)

Setelah setup sekali, alur kerjamu jadi: edit `projects.ts` > `git push` > website
otomatis ter-update dalam beberapa menit. Tidak perlu build manual, tidak perlu upload,
dan tidak perlu password FTP.

### Kenapa tidak langsung auto deploy dari `main`?

Fitur **Advanced > GIT** di hPanel hanya meng-clone isi repository ke `public_html`.
**Hostinger tidak menjalankan `npm run build`**, jadi kalau diarahkan ke `main`, yang
tersalin hanyalah kode sumber (`src/`, `package.json`, dan seterusnya) tanpa `index.html`.
Hasilnya website menampilkan **403 Forbidden**.

Solusinya: workflow `.github/workflows/deploy-hostinger.yml` melakukan build setiap kali
ada push ke `main`, lalu menaruh isi folder `dist/` di branch khusus bernama `deploy`.
Hostinger cukup menarik branch `deploy` itu.

```
push ke main  ->  GitHub Actions build  ->  branch deploy (isi dist/)  ->  Hostinger pull ke public_html
```

### Setup

1. Push project ini ke GitHub (repo `frgwnabim/portofolio`).
2. Tunggu workflow **Deploy ke Hostinger** selesai di tab **Actions** (centang hijau).
   Setelah itu akan muncul branch baru bernama `deploy`. Kalau belum ada push baru,
   jalankan manual: tab **Actions > Deploy ke Hostinger > Run workflow**.
3. Pastikan GitHub Actions boleh push ke repo:
   **Settings > Actions > General > Workflow permissions**, pilih
   **Read and write permissions**, lalu **Save**.
4. Di hPanel, buka **Advanced > GIT**.
   - Kalau sudah ada repository yang terhubung ke branch `main`, hapus dulu.
   - Kosongkan folder `public_html` lewat File Manager (Hostinger mensyaratkan folder
     tujuan kosong waktu pertama kali deploy). Jangan lupa backup dulu kalau perlu.
5. Tambahkan repository baru:

   | Kolom | Isi |
   | --- | --- |
   | Repository | `https://github.com/frgwnabim/portofolio.git` |
   | Branch | `deploy` |
   | Directory | kosongkan (artinya langsung ke `public_html`) |

   Kalau repository kamu private, tambahkan dulu SSH key dari hPanel ke
   GitHub (**Settings > Deploy keys**) dan pakai alamat `git@github.com:frgwnabim/portofolio.git`.
6. Klik **Create**, lalu klik **Deploy** sekali.
7. Aktifkan **Auto Deployment**. hPanel akan memberi **Webhook URL**. Salin, lalu di GitHub
   buka **Settings > Webhooks > Add webhook**, tempel di kolom **Payload URL**, pilih
   **Just the push event**, lalu **Add webhook**.

Selesai. Setiap workflow mendorong commit baru ke branch `deploy`, webhook memberi tahu
Hostinger untuk menarik versi terbaru.

### Cek hasilnya

- Tab **Actions** di GitHub harus centang hijau.
- Di File Manager, `public_html` harus berisi `index.html`, `404.html`, `_astro/`,
  dan `.htaccess` langsung di dalamnya.

### Kalau gagal

- **Workflow gagal di langkah "Push hasil build ke branch deploy"** dengan error 403:
  ulangi langkah 3 (Workflow permissions harus Read and write).
- **Website masih 403**: cek apakah branch di hPanel sudah `deploy`, bukan `main`.
  Kalau di `public_html` masih ada `src/` atau `package.json`, berarti yang ter-deploy
  masih branch `main`.
- **Update tidak muncul**: cek webhook di GitHub (**Settings > Webhooks**), klik webhook-nya
  dan lihat tab **Recent Deliveries**. Bisa juga klik **Deploy** manual di hPanel.

---

## Setelah website online

### Bersihkan cache Hostinger

Hostinger memakai LiteSpeed Cache. Kalau perubahan belum kelihatan:

1. hPanel > **Performance > Cache Manager** (atau **Advanced > Cache Manager**)
2. Klik **Purge all**
3. Di browser, buka halaman dengan `Ctrl + Shift + R` (Mac: `Cmd + Shift + R`)

### Daftarkan ke Google

1. Buka <https://search.google.com/search-console>
2. Tambahkan property dengan domain kamu, verifikasi lewat DNS record di hPanel
3. Kirim sitemap: `https://namadomainkamu.com/sitemap.xml`

---

## Masalah yang sering muncul

| Gejala | Penyebab dan solusi |
| --- | --- |
| Muncul halaman "Index of /" atau daftar file | File `index.html` tidak ada di `public_html`. Kemungkinan kamu mengupload folder `dist`-nya, bukan isinya. Pindahkan semua file dari `public_html/dist/` ke `public_html/`. |
| Website masih menampilkan halaman lama | Cache. Purge di **Cache Manager** lalu hard refresh browser. |
| Error 403 Forbidden | Kalau pakai fitur Git Hostinger: pastikan branch yang dipakai `deploy`, bukan `main` (lihat Cara 3). Selain itu bisa karena permission folder salah. Di File Manager, klik kanan `public_html` > **Permissions**, set folder ke `755` dan file ke `644`. |
| Halaman tampil tapi tanpa warna dan tata letak | Folder `_astro` tidak ikut terupload. Upload ulang seluruh isi `dist/`. |
| HTTPS belum aktif atau muncul peringatan "not secure" | SSL belum selesai dipasang. Cek **Security > SSL**, tunggu statusnya **Active**. |
| Redirect berputar terus (`ERR_TOO_MANY_REDIRECTS`) | "Force HTTPS" di hPanel bentrok dengan aturan di `.htaccess`. Matikan salah satunya, cukup pakai yang di `.htaccess`. |
| Font tidak berubah | Koneksi ke Google Fonts diblokir. Cek tab Network di DevTools browser. |
| Gambar preview project tidak muncul | Nama file harus persis sama, termasuk besar kecil hurufnya. `Foto.PNG` berbeda dengan `foto.png` di server Linux. |
| `.htaccess` hilang setelah upload | File tersembunyi. Aktifkan **Show hidden files** di File Manager atau **Force showing hidden files** di FileZilla. |

---

## Ringkasan alur kerja harian

Setelah semua tersetup, menambah project baru cuma butuh ini:

```bash
# 1. Edit daftar project
#    src/data/projects.ts  -> tambahkan blok project baru

# 2. Cek dulu di lokal
npm run dev

# 3a. Kalau pakai deploy otomatis (Cara 3)
git add .
git commit -m "tambah project X"
git push

# 3b. Kalau upload manual
npm run zip
#    lalu upload portfolio-dist.zip lewat File Manager dan extract
```
