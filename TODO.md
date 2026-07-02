# TODO — actions Sylvain (Nuada)

## 🔴 Domaines & marque — à faire au plus vite

- [ ] **Réserver `nuada.dev`** — domaine principal (~12 €/an, OVH / Gandi / Porkbun).
      Vérifié LIBRE au registre Google le 2026-07-02. Les robots de squatteurs scannent : ne pas traîner.
- [ ] **Réserver `nuada-audit.fr`** (~7 €/an) — redirection 301 vers nuada.dev (marché FR).
- [ ] **Activer la protection WHOIS** sur les deux (gratuite ; le .fr anonymise d'office les particuliers,
      pour le .dev l'activer chez le registrar).
- [ ] **Poser un backorder sur `nuada.fr`** — détenu par le revendeur Nomio24 (NL), **expire le 2026-11-28**.
      Service « récupération à l'expiration » chez OVH/Gandi (qq €) : s'il n'est pas renouvelé, il tombe automatiquement.
- [ ] **Recherche d'antériorité INPI** — [data.inpi.fr](https://data.inpi.fr), marques « Nuada », classes 35 et 42.
- [ ] **Déposer la marque « Nuada » à l'INPI** — classes 35 (conseil) + 42 (services informatiques),
      ~190 € pour 10 ans, dépôt en ligne.
- [ ] Après achat : **brancher `nuada.dev` sur Netlify** (Site settings → Domain management ; HTTPS automatique).

## 🛡️ Règles permanentes (squatteurs & arnaques)

- **Ignorer tout email non sollicité** concernant les domaines : offres de vente de nuada.com,
  « alertes » de registrars asiatiques (nuada.cn…), fausses factures de renouvellement.
  Ne jamais répondre, même pour refuser (toute réponse fait monter le prix).
- **Ne jamais racheter `nuada.com` au squatteur.** Si un jour le .com devient vraiment nécessaire :
  courtier anonyme (Sedo / broker du registrar).
- Renouvellements : uniquement sur le site de TON registrar.

## ⚖️ Mentions légales — données à fournir par Sylvain (Opquast 101/105/106 + LCEN)

Un site professionnel français doit publier : identité de l'éditeur (nom, statut), **SIREN/SIRET**,
adresse, moyen de contact, identité de l'hébergeur (Netlify, Inc. — 512 2nd Street, San Francisco).
- [x] Page `/mentions-legales` créée (avec politique de confidentialité complète)
- [ ] **Compléter les 3 placeholders `<mark>`** dès l'immatriculation : statut exact, SIREN, adresse pro

## 🤔 Arbitrages Opquast documentés (choix assumés, pas des oublis)

- **R141** (liens visités différenciés) : non appliqué — one-page à ancres internes, la distinction
  visité/non-visité créerait du bruit sans bénéfice. À réévaluer si le site devient multi-pages.
- **R135** (négociation Accept-Language serveur) : non appliqué — FR servi par défaut à la racine,
  hreflang + sélecteur visible. Une redirection par langue casserait le canonical SEO.
- **R168/171** (moteur de recherche, plan du site) : non applicables — one-page, tout est
  atteignable depuis l'accueil (cas particulier prévu).

## 📋 Backlog site (rappel)

- [ ] **Auto-audit RGAA complet** avec la grille Access42 (`rgaa-private/ressources/rgaa41-modele-grille-d-audit-Access42.xlsx`)
      + tests de restitution NVDA/Firefox — puis publier une **page /accessibilite** avec la vraie
      déclaration (état de conformité, taux, base de référence, moyen de contact). Ne JAMAIS afficher
      « totalement conforme » sans audit réel. Excellent exercice de prépa certif + preuve commerciale.
- [x] Socle SEO/GEO : sitemap i18n, robots.txt, canonical, OG, JSON-LD ProfessionalService+Offers, llms.txt
- [ ] **FAQ sur la landing** + JSON-LD FAQPage (prochaine session — meilleur ratio GEO)
- [ ] 3 pages piliers : `/audit-rgaa`, `/european-accessibility-act` (+ quiz Svelte), `/auditoria-accesibilidad`
- [ ] Image OG 1200×630 (main d'argent sur vert-nuit)
- [ ] Google Search Console dès le domaine branché ; vérifier notifications Netlify Forms
- [ ] DA celtique v2 : logo main d'argent, entrelacs discrets, typographie display
- [ ] Calculateur de coût interactif (futur composant Svelte)
- [ ] Études de cas dès les premiers clients
- [ ] Renommer le repo GitHub `website-audit-rgaa` → `nuada` (optionnel, GitHub redirige l'ancien nom)
