# Backlog acquisition · Nuada

> Nuada capte les **missions de conformité** : audits RGAA/WCAG, mises en conformité EAA,
> accompagnement. Cible : entreprises soumises à obligation + agences/ESN en sous-traitance.
> Nahual (repo `portfolio`) capte l'autre type de mission (création/refonte), voir son
> `BACKLOG-ACQUISITION.md`. Stratégie complète : mémoire `project_strategie_acquisition`.
>
> Priorité absolue à la certification en cours jusqu'à fin octobre : ce fichier prépare,
> il ne déclenche rien avant.

## Phase 0 · avant le 23/10 (coût zéro)

- [ ] Conserver proprement les livrables des audits d'entraînement (La commune, etc.) :
      chaque grille + rapport = future étude de cas anonymisée.

## Phase 1 · post-certif (fin oct → déc)

- [ ] **Afficher la certification** dès obtention : badge « Auditeur RGAA certifié » +
      lien France Compétences RS6582 (Access42). C'est LE signal de confiance, le placer
      au-dessus du pli et dans le JSON-LD (credential).
- [ ] **Page /references** structurée façon Code Média : catégories Grands comptes /
      TPE-PME / Associatif-culturel + bloc témoignages. Créer le moule même vide :
      il doit exister avant la première mission.
- [ ] **2-3 études de cas PDF** anonymisées depuis les audits d'entraînement
      (déjà au TODO ligne « Études de cas », version débloquée sans attendre un client payant).
- [ ] Auto-audit RGAA du site + vraie déclaration /accessibilite (déjà au TODO) :
      preuve commerciale n°1, à faire AVANT le premier pitch agence.
- [ ] **Formulaire audit express gratuit** branché sur radar-signaux (pré-rempli si le
      domaine a déjà été scanné). Fusion avec Dashboard V2 radar-signaux.
- [ ] **Profil Malt** « Consultant accessibilité RGAA certifié + dev React » : ouverture
      quand le SIRET tombe (nov-déc, Malt exige un statut pour contractualiser).
      Canal passif n°2, la sous-traitance directe reste le n°1.
- [ ] **Productiser l'offre** : 3 formules à prix fixe (audit express / audit complet +
      code de correction / **accompagnement conformité mensuel**). Le retainer mensuel
      (veille, re-tests, support des devs du client) = revenu récurrent, pas du one-shot.
      Aligner la page Offre + le calculateur d'estimation sur ces 3 formules.
- [ ] **Annuaires spécialisés** (1h, une fois) : annuaire des certifiés Access42 si
      public, répertoires a11y, CCI. S'inscrire partout où les acheteurs cherchent.
- [ ] **Amorçage références via l'associatif** : 2-3 audits à prix coûtant pour des
      associations (idéalement champ du handicap) contre témoignage public + fiche
      référence. Remplit la page /references en 2 mois au lieu de 12, effet de halo.

## Phase 2 · canal sous-traitance (déc → mi-2027)

- [ ] Constituer la liste : 10-15 agences web Lyon + ESN cibles.
      Pitch : « votre client doit être conforme EAA, je livre l'audit certifié ET le code
      de correction ». Objectif : 2-3 relations récurrentes, pas 15 one-shots.
- [ ] Tracking prospects/relances dans radar-signaux (module acquisition commerciale).
- [ ] **Rituel post-mission, sans exception** : témoignage écrit demandé + fiche référence
      publiée (autorisation ou anonymisée) + date de relance posée.
- [ ] Cross-sell systématique vers Nahual : tout audit livré = proposition de remédiation
      ou refonte (l'auditeur qui code la solution).
- [ ] **Marchés publics** : le secteur public est le seul acheteur légalement obligé
      d'auditer (RGAA depuis 2019). Mode veille **BOAMP** dans radar-signaux (mots-clés
      « RGAA », « audit accessibilité ») ; viser les MAPA < 40 k€ (attribution sans appel
      d'offres formel, accessible à un solo certifié). Cibler en priorité les agences qui
      ont des clients publics : elles ont besoin d'un sous-traitant certifié.
- [ ] **Outreach semi-automatique piloté par le radar** : site non conforme détecté →
      email personnalisé avec 2-3 problèmes concrets trouvés chez eux (jamais de template
      creux). Quota : 5/semaine. B2B légal (intérêt légitime + opt-out).
- [ ] **Métrique pipeline mensuelle** : leads → RDV → devis → missions, revue une fois
      par mois. Sans mesure, pas de stratégie.

## Phase 3 · dépassement (suite)

- [ ] **Formation accessibilité en entreprise** : former les équipes du client (modèle
      mission APICIL de Code Média). TJM élevé, récurrent, demande EAA énorme.

## Leviers profil (différenciateurs propres, personne d'autre sur ce créneau)

- [ ] **Audit accessibilité MOBILE (React Native)** : l'EN 301 549 et l'EAA couvrent les
      applications mobiles (banques, e-commerce, transport), et quasi aucun auditeur
      français ne sait tester ET corriger une app RN. Niche dans la niche : page pilier
      dédiée + offre spécifique dès la phase 1.
- [ ] **Offre « conformité qui ne régresse pas »** : audit + suite de tests a11y
      automatisés installée en CI chez le client (axe-core, Playwright). Transforme
      l'audit one-shot en retainer technique : le client paie pour que ça ne recasse
      jamais. À intégrer aux 3 formules productisées.
- [ ] **Pitch agences créatives haut de gamme** : « je rends vos sites primés conformes
      sans tuer la DA ». Segment inadressable par les auditeurs non creative-dev ;
      preuve vivante = nahual.fr conforme. Sous-segment prioritaire de la liste agences.
- [ ] **Outil open-source RGAA** comme aimant à leads (ex : MCP server d'audit
      automatisable, plugin de checks). Visibilité GitHub + inbound développeurs +
      preuve d'expertise permanente.
- [ ] **Contenu signé** : cas concrets d'audit racontés (ton expert, humour maîtrisé),
      alimente le SEO/GEO. Le contenu accessibilité FR est institutionnel ou anxiogène :
      une vraie plume se différencie vite.

## Phase 3 · dépassement

- [ ] Contenu GEO/LLM : entretenir llms.txt + pages piliers pour être cité par les
      assistants IA sur « qui peut auditer mon site RGAA ».
- [ ] Relais hispanophone/LATAM (horizon 2027+, pas avant).
