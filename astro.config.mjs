// @ts-check
import { defineConfig } from 'astro/config';

// GANTI dengan domain Hostinger kamu (dipakai untuk canonical URL, OG tag, sitemap).
const SITE_URL = 'https://frgwnabim.site';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  trailingSlash: 'ignore',
  build: {
    // Hasil build: dist/index.html, dist/404.html (rapi untuk Apache/LiteSpeed Hostinger)
    format: 'file',
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
  devToolbar: {
    enabled: false,
  },
});
