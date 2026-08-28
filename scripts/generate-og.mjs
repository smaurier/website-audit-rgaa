// Genere /public/og-image.png a partir de /public/og-image.svg (1200x630).
// Appel : npm run og
import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';
import sharp from 'sharp';

const here = dirname(fileURLToPath(import.meta.url));
const svgPath = resolve(here, '..', 'public', 'og-image.svg');
const pngPath = resolve(here, '..', 'public', 'og-image.png');

const svg = readFileSync(svgPath);
const png = await sharp(svg, { density: 288 })
  .resize(1200, 630, { fit: 'contain', background: { r: 11, g: 81, b: 56, alpha: 1 } })
  .png({ compressionLevel: 9 })
  .toBuffer();

writeFileSync(pngPath, png);
console.log(`OG image regeneree : ${pngPath} (${png.byteLength} octets).`);
