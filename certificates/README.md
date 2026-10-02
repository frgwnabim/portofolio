# Folder file sertifikat

Taruh gambar atau PDF sertifikat kamu di folder ini.

- Format gambar: `.webp` (paling ringan), `.png`, atau `.jpg`. Usahakan di bawah 300 KB.
- PDF juga boleh, pakai sebagai `link` supaya dibuka di tab baru.
- Nama file tanpa spasi, contoh: `google-data-analytics.webp`.

**Cara pakai:** buka `src/data/certificates.ts`, lalu tambahkan sertifikat:

```ts
{
  title: 'Google Data Analytics',
  issuer: 'Google',
  date: 'Mar 2025',
  image: '/certificates/google-data-analytics.webp',
  link: '/certificates/google-data-analytics.pdf',
  category: 'da',
}
```
