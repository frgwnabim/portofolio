# Folder gambar preview project

Taruh screenshot project kamu di folder ini.

**Aturan singkat:**

- Format: `.png`, `.jpg`, atau `.webp` (paling ringan: `.webp`).
- Ukuran ideal: **1280 x 720 px** (rasio 16:9).
- Usahakan di bawah 300 KB per gambar supaya website tetap cepat.
- Nama file tanpa spasi, contoh: `inventori-app.png`.

**Cara pakai:** buka `src/data/projects.ts`, lalu tambahkan baris `cover` pada project:

```ts
{
  title: 'Sistem Manajemen Inventori',
  cover: '/previews/inventori-app.png',
  ...
}
```

Kalau `cover` dikosongkan, website otomatis membuat preview gradient
berisi inisial judul project, jadi tampilannya tetap rapi.
