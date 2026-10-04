# Folder file CV

Taruh file CV kamu (format **PDF**) di folder ini.

> Jangan ganti nama folder ini jadi `cv`. Folder `cv/` bentrok dengan halaman `/cv`,
> server Hostinger akan membuka foldernya (bukan halamannya) dan hasilnya 403 Forbidden.

- Nama file tanpa spasi, contoh: `cv-fergiawan-abimanyu.pdf`.
- CV dari Word (`.docx`) harus di-export dulu ke PDF: di Word pilih
  **File > Save As / Export > PDF**. Browser tidak bisa menampilkan file Word.

**Cara pakai:** buka `src/data/site.ts`, lalu isi `socials.resume`:

```ts
resume: '/resume/cv-fergiawan-abimanyu.pdf',
```

CV otomatis tampil di halaman `/cv`, lengkap dengan tombol download.
Kalau mau ganti CV, cukup timpa file PDF-nya dengan nama yang sama, lalu build ulang.
