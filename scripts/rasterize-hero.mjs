// Rasterise l'illustration hero (SVG lourd 164 KB) en WebP + AVIF
// pour reduire drastiquement le poids servi sur le LCP.
// L'SVG source reste dans le repo pour fallback / impression / zoom.
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(here, '..', 'public', 'illustrations', 'nuada-bust.svg');
const webpPath = resolve(here, '..', 'public', 'illustrations', 'nuada-bust.webp');
const avifPath = resolve(here, '..', 'public', 'illustrations', 'nuada-bust.avif');

const svg = readFileSync(svgPath);

// 800x1080 = double densite pour ecrans HiDPI (retina 400x540 CSS pixels).
const webp = await sharp(svg, { density: 288 })
  .resize(800, 1080, { fit: 'contain', background: { r: 243, g: 247, b: 244, alpha: 1 } })
  .webp({ quality: 82, effort: 6 })
  .toBuffer();
writeFileSync(webpPath, webp);
console.log(`WebP : ${webp.byteLength} octets`);

const avif = await sharp(svg, { density: 288 })
  .resize(800, 1080, { fit: 'contain', background: { r: 243, g: 247, b: 244, alpha: 1 } })
  .avif({ quality: 55, effort: 5 })
  .toBuffer();
writeFileSync(avifPath, avif);
console.log(`AVIF : ${avif.byteLength} octets`);
