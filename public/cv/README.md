# Folder file CV

Taruh file CV kamu (format **PDF**) di folder ini. Situs mendukung 2 CV:
satu untuk **Software Engineer** dan satu untuk **Data Engineer**.

- Nama file tanpa spasi, contoh: `cv-fergiawan-abimanyu-se.pdf` dan
  `cv-fergiawan-abimanyu-de.pdf`.
- CV dari Word (`.docx`) harus di-export dulu ke PDF: di Word pilih
  **File > Save As / Export > PDF**. Browser tidak bisa menampilkan file Word.

**Cara pakai:** buka `src/data/site.ts`, lalu isi `file` di `resumes`:

```ts
resumes: [
  { id: 'se', label: 'Software Engineer', accent: 'se', file: '/cv/cv-fergiawan-abimanyu-se.pdf' },
  { id: 'de', label: 'Data Engineer', accent: 'da', file: '/cv/cv-fergiawan-abimanyu-de.pdf' },
],
```

Kedua CV tampil sebagai tab di halaman `/cv`, masing-masing dengan tombol download.
Link langsung ke CV tertentu: `/cv?v=se` atau `/cv?v=de` (bisa dikirim ke HRD).

- Kalau `file` salah satu dikosongkan, CV itu disembunyikan (tab otomatis hilang).
- Mau ganti nama tab? Ubah `label`, misalnya jadi `'Data Analyst'`.
- Mau ganti CV, cukup timpa file PDF-nya dengan nama yang sama, lalu build ulang.
