// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Domaine principal (à enregistrer : nuada.dev + nuada-audit.fr en redirection)
  site: 'https://nuada.dev',
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
