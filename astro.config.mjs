// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine principal acheté le 2026-08-28 (nuada.com squatté, écarté).
  site: 'https://nuada-audit.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('404'),
      i18n: {
        defaultLocale: 'fr',
        locales: { fr: 'fr', en: 'en', es: 'es' },
      },
    }),
  ],
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
    routing: {
      // FR = racine (/), EN = /en, ES = /es
      prefixDefaultLocale: false,
    },
  },
});
