// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // Domaine principal (à enregistrer : nuada.dev + nuada-audit.fr en redirection)
  site: 'https://nuada.dev',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
    routing: {
      // FR = racine (/), EN = /en, ES = /es
      prefixDefaultLocale: false,
    },
  },
});
