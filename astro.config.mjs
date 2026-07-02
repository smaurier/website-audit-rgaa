// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // TODO: remplacer par le domaine réel avant mise en prod
  site: 'https://audit-rgaa.fr',
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'es'],
    routing: {
      // FR = racine (/), EN = /en, ES = /es
      prefixDefaultLocale: false,
    },
  },
});
