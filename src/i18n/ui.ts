// Dictionnaire i18n — FR (défaut), EN, ES.
// Les chaînes contenant du balisage (lang="en", strong…) sont rendues avec set:html
// dans Landing.astro : contenu maîtrisé, pas de saisie utilisateur.

export type Lang = 'fr' | 'en' | 'es';

export const locales: Record<Lang, { label: string; path: string }> = {
  fr: { label: 'Français', path: '/' },
  en: { label: 'English', path: '/en/' },
  es: { label: 'Español', path: '/es/' },
};

interface Palier {
  nom: string;
  cible: string;
  prix: string;
  scope: string;
  contenu: string[];
  livrable: string;
  phare?: boolean;
}

export interface Dict {
  meta: { title: string; description: string };
  layout: {
    skip: string;
    nav: string;
    offer: string;
    method: string;
    faq: string;
    contact: string;
    langLabel: string;
    footerRights: string;
    footerProof: string;
    legalLink: string;
    theme: { label: string; auto: string; light: string; dark: string };
  };
  hero: {
    eyebrow: string;
    h1Html: string;
    leadHtml: string;
    ctaPrimary: string;
    ctaSecondary: string;
    pills: { text: string; lang?: string }[];
    storyLink: string;
  };
  legal: { titleHtml: string; bodyHtml: string };
  offer: {
    title: string;
    subtitle: string;
    badge: string;
    paliers: Palier[];
  };
  method: {
    title: string;
    steps: { t: string; dHtml: string }[];
  };
  proof: {
    title: string;
    p1Html: string;
    p2Html: string;
    pr: {
      figLabel: string;
      title: string;
      badge: string;
      lines: { t: string; k: 'ctx' | 'del' | 'add' }[];
      checks: string[];
      ready: string;
    };
  };
  story: { title: string; p1Html: string; p2Html: string };
  faq: {
    title: string;
    intro: string;
    items: { q: string; aHtml: string }[];
  };
  contact: {
    title: string;
    body: string;
    lead: string;
    subject: string;
    form: {
      name: string;
      email: string;
      emailHint: string;
      url: string;
      urlHint: string;
      message: string;
      required: string;
      submit: string;
      or: string;
      action: string;
      privacyHtml: string;
    };
  };
  success: { title: string; body: string; back: string };
  estimation: {
    metaTitle: string;
    metaDescription: string;
    eyebrow: string;
    h1: string;
    lead: string;
    typeLabel: string;
    typeOptions: { value: 'vitrine' | 'app' | 'mobile' | 'ecommerce'; label: string }[];
    pagesLabel: string;
    pagesHint: string;
    refsLabel: string;
    refsHint: string;
    refsOptions: { value: string; label: string }[];
    remediationLabel: string;
    remediationOptions: { value: 'oui' | 'non'; label: string }[];
    submit: string;
    resultTitle: string;
    resultIdle: string;
    palierLabel: string;
    priceLabel: string;
    justificationLabel: string;
    ctaLabel: string;
    ctaHref: string;
    paliers: {
      diagnostic: { name: string; price: string; justify: string };
      audit: { name: string; price: string; justify: string };
      surmesure: { name: string; price: string; justify: string };
    };
    disclaimer: string;
  };
}

export const ui: Record<Lang, Dict> = {
  fr: {
    meta: {
      title: "Nuada — Audit & remédiation accessibilité (RGAA · WCAG 2.2)",
      description:
        "Audits d'accessibilité RGAA / WCAG 2.2 par un dev fullstack. Pas un PDF de 80 pages : un audit + les PR de remédiation livrées. Conformité European Accessibility Act 2025.",
    },
    layout: {
      skip: 'Aller au contenu principal',
      nav: 'Navigation principale',
      offer: 'Offre',
      method: 'Méthode',
      faq: 'Questions',
      contact: 'Contact',
      langLabel: 'Choisir la langue',
      footerRights: 'Nuada — Accessibilité numérique FR · EN · ES.',
      footerProof:
        'Ce site vise la conformité <strong><a href="https://www.w3.org/TR/WCAG22/" hreflang="en">WCAG 2.2 (en anglais)</a> niveau AAA</strong>. Il est sa propre démonstration.',
      theme: { label: 'Thème', auto: 'auto', light: 'clair', dark: 'sombre' },
      legalLink: 'Mentions légales & confidentialité',
    },
    hero: {
      eyebrow: 'Audit & remédiation · RGAA / WCAG 2.2',
      h1Html: `L'auditeur qui <em>code la solution</em>.`,
      leadHtml: `Auditeur RGAA <em>et</em> développeur fullstack senior : je relève les non-conformités,
        puis — si vous le souhaitez — je livre le code qui les corrige, directement dans votre dépôt.`,
      ctaPrimary: 'Demander un audit',
      ctaSecondary: 'Voir la méthode',
      pills: [
        { text: 'France — RGAA · EAA' },
        { text: 'Español — WCAG · UNE-EN 301 549', lang: 'es' },
        { text: 'English — WCAG · ADA', lang: 'en' },
      ],
      storyLink: "Pourquoi « Nuada » ? L'histoire du roi à la main d'argent",
    },
    legal: {
      titleHtml: `<span lang="en">European Accessibility Act</span> : applicable depuis juin 2025`,
      bodyHtml: `L'EAA impose l'accessibilité à un large périmètre de services numériques (e-commerce,
        banque, transport, etc.). En France, le <abbr title="Référentiel général d'amélioration de l'accessibilité">RGAA</abbr>
        — déclinaison des <abbr lang="en" title="Web Content Accessibility Guidelines">WCAG</abbr> — en est le cadre
        de référence. La non-conformité expose à des sanctions et ferme des marchés publics.
        <strong>Un audit maintenant, c'est de la conformité, pas du rattrapage.</strong>`,
    },
    offer: {
      title: 'Trois façons de travailler ensemble',
      subtitle:
        "Offre à prix fixe, audit 100 % manuel. Pas de temps facturé à l'aveugle : un périmètre, un livrable. Vous hésitez sur le palier : <a href=\"/estimation/\">calculateur de coût en 30 secondes</a>.",
      badge: 'Le plus demandé',
      paliers: [
        {
          nom: 'Diagnostic',
          cible: 'Site vitrine / landing',
          prix: '1 200 €',
          scope: "Jusqu'à 5 pages ou parcours clés",
          contenu: [
            'Audit des pages clés (parcours principal)',
            'Rapport priorisé par impact utilisateur',
            'Restitution visio 45 min',
          ],
          livrable: 'Rapport actionnable',
        },
        {
          nom: 'Audit + Remédiation',
          cible: 'Application web ou mobile / e-commerce',
          prix: 'À partir de 4 900 €',
          scope: "Échantillon jusqu'à 10 pages · 106 critères RGAA",
          contenu: [
            'Audit RGAA complet sur périmètre défini',
            'Rapport technique + synthèse pour décideurs',
            '<span lang="en">Pull requests</span> de correction livrées (React / React Native)',
            'Vérification post-correction',
          ],
          livrable: 'Audit + code corrigé',
          phare: true,
        },
        {
          nom: 'Mise en conformité RGAA',
          cible: 'Grand compte / obligation légale',
          prix: 'Sur devis',
          scope: 'Périmètre multi-parcours',
          contenu: [
            "Audit multi-parcours + déclaration d'accessibilité",
            'Accompagnement équipes dev (revue, pairing)',
            'Suivi de conformité dans le temps',
          ],
          livrable: 'Conformité RGAA documentée',
        },
      ],
    },
    method: {
      title: 'La méthode : du diagnostic au code',
      steps: [
        {
          t: '1. Cadrage',
          dHtml:
            'On définit le périmètre (parcours critiques) et le référentiel applicable (RGAA, WCAG 2.2, EAA).',
        },
        {
          t: '2. Audit',
          dHtml:
            "Tests automatisés + manuels : clavier, lecteur d'écran, contrastes, structure. Priorisation par impact réel.",
        },
        {
          t: '3. Remédiation',
          dHtml:
            'Je livre les correctifs sous forme de <span lang="en">pull requests</span> dans votre code, pas de recommandations abstraites.',
        },
        {
          t: '4. Vérification',
          dHtml:
            "Contrôle post-correction et, si besoin, déclaration d'accessibilité conforme.",
        },
      ],
    },
    proof: {
      title: 'Une double compétence, un travail garanti',
      p1Html: `Développeur fullstack <em>et</em> spécialiste de l'accessibilité : je ne me contente pas de pointer
        les problèmes, je livre les corrections. Faire appel à moi, c'est la certitude d'un travail rigoureux,
        mené de bout en bout — de l'audit jusqu'au code en production.`,
      p2Html: `Ce site en est la garantie silencieuse : entièrement accessible, il applique au quotidien
        ce que je livre à mes clients.`,
      pr: {
        figLabel: 'Exemple de livrable : pull request de correction',
        title: 'fix(a11y) : labels, contraste, focus',
        badge: 'PR #217',
        lines: [
          { t: '  src/components/ContactForm.tsx', k: 'ctx' },
          { t: '− <div class="btn" onclick="send()">OK</div>', k: 'del' },
          { t: '+ <button type="submit" class="btn">', k: 'add' },
          { t: '+   Envoyer le message', k: 'add' },
          { t: '+ </button>', k: 'add' },
          { t: '', k: 'ctx' },
          { t: '  src/pages/index.astro', k: 'ctx' },
          { t: '− <img src="equipe.jpg">', k: 'del' },
          { t: '+ <img src="equipe.jpg" alt="L\'équipe', k: 'add' },
          { t: '+   au complet devant l\'atelier">', k: 'add' },
        ],
        checks: ['✓ axe : 0 violation', '✓ contraste AAA'],
        ready: 'prêt à merger',
      },
    },
    story: {
      title: 'Pourquoi « Nuada » ?',
      p1Html: `Dans la mythologie irlandaise, <strong>Nuada</strong>, roi des Tuatha Dé Danann, perd un bras
        au combat. La loi l'écarte du trône : un roi doit être « intact ». Le médecin des dieux lui forge
        alors une <strong>main d'argent</strong>, entièrement fonctionnelle — et Nuada remonte sur le trône.`,
      p2Html: `La barrière n'était pas dans son corps : elle était dans la règle. C'est la technologie qui l'a
        levée. L'accessibilité numérique dit exactement cela : ce ne sont pas vos utilisateurs qui sont
        inadaptés, ce sont les interfaces. <strong>Je forge des mains d'argent pour les vôtres.</strong>`,
    },
    faq: {
      title: 'Questions fréquentes',
      intro: "Les huit questions qui reviennent le plus souvent avant un audit : cadre légal, coût, délai, livrable.",
      items: [
        {
          q: "Combien coûte un audit d'accessibilité ?",
          aHtml: `Trois paliers à prix affichés. <strong>Diagnostic</strong> à 1 200 € (jusqu'à 5 pages, priorités A/AA).
            <strong>Audit + Remédiation</strong> à partir de 4 900 € (échantillon jusqu'à 10 pages, 106 critères RGAA,
            <span lang="en">pull requests</span> de correction livrées). <strong>Mise en conformité</strong> sur devis
            pour les grands comptes. Pas de temps facturé à l'aveugle : un périmètre, un livrable.`,
        },
        {
          q: "Quelle différence entre RGAA, WCAG et European Accessibility Act ?",
          aHtml: `Les <abbr lang="en" title="Web Content Accessibility Guidelines">WCAG</abbr> sont la norme technique
            internationale du W3C. Le <abbr title="Référentiel général d'amélioration de l'accessibilité">RGAA</abbr>
            est la déclinaison française pour le secteur public et les entreprises de plus de 250 M€ de chiffre d'affaires :
            il s'appuie sur les WCAG 2.1 niveau AA et ajoute une méthode d'audit officielle (106 critères).
            L'<span lang="en">European Accessibility Act</span> (directive 2019/882) est une obligation légale
            européenne applicable depuis le <strong>28 juin 2025</strong> pour le e-commerce, la banque, le transport
            et les télécommunications.
            <a href="/audit-rgaa/">Guide complet de l'audit RGAA</a>.`,
        },
        {
          q: "Mon site est-il concerné par l'European Accessibility Act ?",
          aHtml: `Si vous vendez en ligne à des consommateurs européens, ou si vous êtes une banque, un transporteur,
            un opérateur télécom ou un service audiovisuel : <strong>oui, depuis le 28 juin 2025</strong>. La directive
            s'applique aussi aux entreprises hors UE qui servent des consommateurs européens. Les micro-entreprises
            (moins de 10 salariés <em>et</em> moins de 2 M€ de chiffre d'affaires) sont exemptées pour les services.
            <a href="/en/european-accessibility-act/" hreflang="en" lang="en">Full EAA guide (in English)</a>.`,
        },
        {
          q: 'Quel est le délai pour un audit ?',
          aHtml: `<strong>Diagnostic</strong> : 5 à 7 jours ouvrés. <strong>Audit + Remédiation</strong> : 3 à 4 semaines.
            La phase de correction du code est planifiée après la restitution, au rythme convenu avec votre équipe technique.`,
        },
        {
          q: 'Que livre concrètement Nuada ?',
          aHtml: `Un rapport d'audit sourcé sur le référentiel applicable (RGAA, WCAG 2.2 ou EN 301 549), une grille de
            criticité priorisée par impact utilisateur, et surtout des <strong><span lang="en">pull requests</span>
            de correction poussées directement dans votre dépôt</strong> (React, React Native, Vue, Astro).
            Pas de PDF orphelin. Restitution en visio de 45 min.`,
        },
        {
          q: 'Vous corrigez le code, pas seulement l\'audit ?',
          aHtml: `Oui, c'est le positionnement. Développeur fullstack senior <em>et</em> auditeur RGAA. La plupart des
            cabinets livrent une liste de non-conformités ; Nuada livre les correctifs testés au clavier et au lecteur
            d'écran, prêts à merger.`,
        },
        {
          q: 'Quelles langues et quels référentiels couvrez-vous ?',
          aHtml: `Français avec le RGAA 4.1. Anglais avec les WCAG 2.2, l'<abbr lang="en" title="Americans with Disabilities Act">ADA</abbr>
            américaine et la Section 508. Espagnol avec la norme UNE-EN 301 549, y compris pour le marché latino-américain.
            Un audit, trois cadres réglementaires selon votre marché cible.
            Guides détaillés :
            <a href="/audit-rgaa/">RGAA</a>,
            <a href="/en/european-accessibility-act/" hreflang="en" lang="en">EAA</a>,
            <a href="/es/auditoria-accesibilidad/" hreflang="es" lang="es">España + LATAM</a>.`,
        },
        {
          q: "Que se passe-t-il si mon site n'est pas conforme au 28 juin 2025 ?",
          aHtml: `Les sanctions administratives sont fixées par chaque État membre. En France, la <abbr title="Direction générale de la concurrence, de la consommation et de la répression des fraudes">DGCCRF</abbr>
            peut prononcer des amendes pouvant atteindre 50 000 € par service non conforme, avec possibilité de retrait du service.
            Les contentieux privés (associations d'usagers) sont également recevables. L'exposition légale est réelle :
            la mise en conformité doit être engagée sans attendre.
            <a href="/audit-rgaa/">Détails du régime français dans le guide RGAA</a>.`,
        },
      ],
    },
    contact: {
      title: 'Parlons de votre projet',
      body: 'Décrivez votre site ou application et le cadre légal visé. Réponse sous 48 h.',
      lead: 'Écrivez-moi :',
      subject: "Demande d'audit RGAA",
      form: {
        name: 'Votre nom',
        email: 'Votre adresse e-mail',
        emailHint: 'Format attendu : prenom.nom@domaine.fr',
        url: 'Adresse de votre site (facultatif)',
        urlHint: 'Format attendu : https://www.votre-site.fr',
        message: 'Votre message',
        required: 'obligatoire',
        submit: 'Envoyer le message',
        or: 'Ou directement par e-mail :',
        action: '/merci/',
        privacyHtml: `Vos nom et adresse e-mail servent uniquement à répondre à votre demande.
          Ils ne sont ni transmis à des tiers, ni utilisés à d'autres fins. Vous pouvez demander
          l'accès, la rectification ou la suppression de vos données en écrivant à la même adresse.`,
      },
    },
    success: {
      title: 'Message envoyé',
      body: 'Merci, votre message est bien parti. Je vous réponds sous 48 h.',
      back: "Retour à l'accueil",
    },
    estimation: {
      metaTitle: "Calculateur de coût d'audit d'accessibilité | Nuada",
      metaDescription:
        "Estimez en 30 secondes le palier d'audit d'accessibilité adapté à votre projet (RGAA, WCAG, EAA) : type de site, volume, référentiel visé, remédiation incluse ou non.",
      eyebrow: 'Estimation en 30 secondes',
      h1: "Calculateur de coût d'audit d'accessibilité.",
      lead: "Quatre questions, une fourchette de prix indicative et le palier recommandé. La cotation finale se fait toujours après un cadrage précis.",
      typeLabel: 'Type de projet',
      typeOptions: [
        { value: 'vitrine', label: 'Site vitrine ou landing' },
        { value: 'app', label: 'Application web' },
        { value: 'mobile', label: 'Application mobile (React Native)' },
        { value: 'ecommerce', label: 'E-commerce ou plateforme transactionnelle' },
      ],
      pagesLabel: 'Nombre de pages ou écrans clés',
      pagesHint: 'Compter les parcours critiques (accueil, catalogue, panier, compte, etc.).',
      refsLabel: 'Référentiels visés',
      refsHint: 'Cochez tout ce qui s\'applique.',
      refsOptions: [
        { value: 'rgaa', label: 'RGAA 4.1 (France)' },
        { value: 'wcag', label: 'WCAG 2.2 (international)' },
        { value: 'eaa', label: 'European Accessibility Act' },
        { value: 'en301', label: 'UNE-EN 301 549 (Espagne / LATAM)' },
        { value: 'ada', label: 'ADA / Section 508 (États-Unis)' },
      ],
      remediationLabel: 'Souhaitez-vous la remédiation code ?',
      remediationOptions: [
        { value: 'oui', label: 'Oui, livrer les PR de correction' },
        { value: 'non', label: 'Non, seulement le rapport d\'audit' },
      ],
      submit: "Calculer l'estimation",
      resultTitle: 'Palier recommandé',
      resultIdle: 'Renseignez le formulaire pour voir l\'estimation.',
      palierLabel: 'Palier',
      priceLabel: 'Fourchette indicative',
      justificationLabel: 'Pourquoi ce palier',
      ctaLabel: 'Demander un devis précis',
      ctaHref: '/#contact',
      paliers: {
        diagnostic: {
          name: 'Diagnostic',
          price: '1 200 € HT',
          justify:
            "Périmètre restreint, sans remédiation code. Idéal pour un premier état des lieux sur un site vitrine et prioriser une action.",
        },
        audit: {
          name: 'Audit + Remédiation',
          price: 'À partir de 4 900 € HT',
          justify:
            "Périmètre étendu ou remédiation code demandée. Audit exhaustif sur l'échantillon défini, avec pull requests de correction livrées dans votre dépôt.",
        },
        surmesure: {
          name: 'Mise en conformité sur-mesure',
          price: 'Sur devis',
          justify:
            "Projet de grande ampleur, plusieurs référentiels cumulés ou obligation légale complexe. Cadrage dédié et accompagnement dans le temps.",
        },
      },
      disclaimer:
        "Cette estimation est indicative. Le prix final dépend de la profondeur des parcours, du volume réel de non-conformités et du contexte technique (framework, dette, monorepo). Un cadrage de 30 min permet de figer la cotation.",
    },
  },

  en: {
    meta: {
      title: 'Nuada — Accessibility audit & remediation (WCAG 2.2)',
      description:
        'WCAG 2.2 accessibility audits by a fullstack developer. Not an 80-page PDF: an audit plus the remediation pull requests, delivered. EAA, ADA and Section 508 compliance.',
    },
    layout: {
      skip: 'Skip to main content',
      nav: 'Main navigation',
      offer: 'Services',
      method: 'Method',
      faq: 'FAQ',
      contact: 'Contact',
      langLabel: 'Choose language',
      footerRights: 'Nuada — Digital accessibility FR · EN · ES.',
      footerProof:
        'This site targets <strong><a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a> level AAA</strong> conformance. It is its own demo.',
      theme: { label: 'Theme', auto: 'auto', light: 'light', dark: 'dark' },
      legalLink: 'Legal notice & privacy (in French)',
    },
    hero: {
      eyebrow: 'Accessibility audit & remediation · WCAG 2.2',
      h1Html: `The auditor who <em>codes the fix</em>.`,
      leadHtml: `Accessibility auditor <em>and</em> senior fullstack developer: I find the barriers,
        then — if you want — I ship the code that removes them, right in your repository.`,
      ctaPrimary: 'Request an audit',
      ctaSecondary: 'See the method',
      pills: [
        { text: 'English — WCAG · ADA' },
        { text: 'France — RGAA · EAA', lang: 'fr' },
        { text: 'Español — WCAG · UNE-EN 301 549', lang: 'es' },
      ],
      storyLink: 'Why "Nuada"? The story of the silver-handed king',
    },
    legal: {
      titleHtml: `EAA, ADA, Section 508: accessibility is now a legal requirement`,
      bodyHtml: `The <strong>European Accessibility Act</strong> (in force since June 2025) applies to any
        company selling digital services into the EU — wherever it is based. In the US,
        <abbr title="Americans with Disabilities Act">ADA</abbr> lawsuits
        over inaccessible websites keep rising. Non-compliance means legal exposure and lost contracts.
        <strong>An audit now is compliance, not damage control.</strong>`,
    },
    offer: {
      title: 'Three ways to work together',
      subtitle: 'Fixed prices, 100% manual audits. No blind hourly billing: one scope, one deliverable. Not sure which tier: <a href="/en/estimator/">30-second cost estimator</a>.',
      badge: 'Most requested',
      paliers: [
        {
          nom: 'Assessment',
          cible: 'Marketing site / landing page',
          prix: '€1,200',
          scope: 'Up to 5 pages or key journeys',
          contenu: [
            'Audit of key pages (main user journey)',
            'Report prioritised by user impact',
            '45-minute debrief call',
          ],
          livrable: 'Actionable report',
        },
        {
          nom: 'Audit + Remediation',
          cible: 'Web or mobile app / e-commerce',
          prix: 'From €4,900',
          scope: 'Sample up to 10 pages · full WCAG 2.2 audit',
          contenu: [
            'Full WCAG 2.2 audit on a defined scope',
            'Technical report + executive summary',
            'Remediation pull requests delivered (React / React Native)',
            'Post-fix verification',
          ],
          livrable: 'Audit + fixed code',
          phare: true,
        },
        {
          nom: 'WCAG compliance program',
          cible: 'Enterprise / legal obligation',
          prix: 'Custom quote',
          scope: 'Multi-journey scope',
          contenu: [
            'Multi-journey audit + accessibility statement',
            'Dev team enablement (reviews, pairing)',
            'Ongoing conformance monitoring',
          ],
          livrable: 'Documented WCAG compliance (EAA / ADA ready)',
        },
      ],
    },
    method: {
      title: 'The method: from assessment to code',
      steps: [
        {
          t: '1. Scoping',
          dHtml:
            'We define the scope (critical journeys) and the applicable framework (WCAG 2.2, EAA, ADA, Section 508).',
        },
        {
          t: '2. Audit',
          dHtml:
            'Automated + manual testing: keyboard, screen reader, contrast, structure. Prioritised by real impact.',
        },
        {
          t: '3. Remediation',
          dHtml:
            'I deliver fixes as pull requests in your codebase, not abstract recommendations.',
        },
        {
          t: '4. Verification',
          dHtml:
            'Post-fix review and, where required, a compliant accessibility statement.',
        },
      ],
    },
    proof: {
      title: 'Two skill sets, one guarantee',
      p1Html: `Fullstack developer <em>and</em> accessibility specialist: I don't just point at problems,
        I ship the fixes. Working with me means rigorous work carried end to end — from the audit
        to code in production.`,
      p2Html: `This site is the quiet proof: fully accessible, it practises daily what I deliver to clients.`,
      pr: {
        figLabel: 'Sample deliverable: a remediation pull request',
        title: 'fix(a11y): labels, contrast, focus',
        badge: 'PR #217',
        lines: [
          { t: '  src/components/ContactForm.tsx', k: 'ctx' },
          { t: '− <div class="btn" onclick="send()">OK</div>', k: 'del' },
          { t: '+ <button type="submit" class="btn">', k: 'add' },
          { t: '+   Send message', k: 'add' },
          { t: '+ </button>', k: 'add' },
          { t: '', k: 'ctx' },
          { t: '  src/pages/index.astro', k: 'ctx' },
          { t: '− <img src="team.jpg">', k: 'del' },
          { t: '+ <img src="team.jpg" alt="The whole', k: 'add' },
          { t: '+   team outside the workshop">', k: 'add' },
        ],
        checks: ['✓ axe: 0 violations', '✓ AAA contrast'],
        ready: 'ready to merge',
      },
    },
    story: {
      title: 'Why "Nuada"?',
      p1Html: `In Irish mythology, <strong>Nuada</strong>, king of the Tuatha Dé Danann, loses an arm in
        battle. The law bars him from the throne: a king must be "whole". The physician of the gods then
        forges him a fully functional <strong>silver hand</strong> — and Nuada reigns again.`,
      p2Html: `The barrier was never his body: it was the rule. Technology lifted it. That is precisely what
        digital accessibility means: your users are not unfit, your interfaces are.
        <strong>I forge silver hands for yours.</strong>`,
    },
    faq: {
      title: 'Frequently asked questions',
      intro: 'The eight questions clients ask most before an audit: legal framework, cost, timeline, deliverables.',
      items: [
        {
          q: 'How much does an accessibility audit cost?',
          aHtml: `Three tiers with published prices. <strong>Assessment</strong> at €1,200 (up to 5 pages, A/AA priorities).
            <strong>Audit + Remediation</strong> from €4,900 (sample up to 10 pages, full WCAG 2.2 audit,
            remediation pull requests delivered). <strong>Compliance program</strong> on custom quote for
            enterprise clients. No blind hourly billing: one scope, one deliverable.`,
        },
        {
          q: 'What is the difference between WCAG, RGAA, EAA and ADA?',
          aHtml: `<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> is the international W3C
            technical standard. <abbr title="Référentiel général d'amélioration de l'accessibilité" lang="fr">RGAA</abbr>
            is the French adaptation (public sector + companies above €250M revenue), 106 criteria based on
            WCAG 2.1 AA with an official audit method. The <strong>European Accessibility Act</strong>
            (Directive 2019/882) is binding EU law since <strong>28 June 2025</strong> for e-commerce, banking,
            transport and telecom. The <abbr title="Americans with Disabilities Act">ADA</abbr> is US civil-rights
            law under which private lawsuits over inaccessible websites keep rising, with courts applying WCAG.
            <a href="/en/european-accessibility-act/">Full EAA guide</a>.`,
        },
        {
          q: 'Does the European Accessibility Act apply to my company?',
          aHtml: `If you sell online to EU consumers, or operate a bank, transport company, telecom or audiovisual
            service: <strong>yes, since 28 June 2025</strong>. The directive also applies to non-EU companies
            serving EU consumers. Micro-enterprises (fewer than 10 employees <em>and</em> less than €2M revenue)
            are exempted for services.
            <a href="/en/european-accessibility-act/">Detailed scope, exemptions and enforcement</a>.`,
        },
        {
          q: 'How long does an audit take?',
          aHtml: `<strong>Assessment</strong>: 5 to 7 business days. <strong>Audit + Remediation</strong>: 3 to 4 weeks.
            Code fixes are scheduled after the debrief, at a cadence agreed with your engineering team.`,
        },
        {
          q: 'What does Nuada actually deliver?',
          aHtml: `A sourced audit report against the applicable framework (WCAG 2.2, EN 301 549 or ADA), a severity
            matrix prioritised by user impact, and the differentiator: <strong>remediation pull requests pushed
            directly into your repository</strong> (React, React Native, Vue, Astro). Not a lonely PDF.
            45-minute debrief on video call.`,
        },
        {
          q: 'You fix the code, not just audit it?',
          aHtml: `Yes, that is the position. Senior fullstack developer <em>and</em> accessibility auditor. Most
            firms hand off a list of findings; Nuada hands off fixes tested with keyboard and screen reader,
            ready to merge.`,
        },
        {
          q: 'Which markets and frameworks do you cover?',
          aHtml: `French with RGAA 4.1. English with WCAG 2.2, the US <abbr title="Americans with Disabilities Act">ADA</abbr>
            and Section 508. Spanish with UNE-EN 301 549, including the Latin American market. One audit,
            three regulatory frames depending on your target market.
            In-depth guides:
            <a href="/en/european-accessibility-act/">EAA</a>,
            <a href="/audit-rgaa/" hreflang="fr" lang="fr">RGAA (French)</a>,
            <a href="/es/auditoria-accesibilidad/" hreflang="es" lang="es">Spain + LATAM (Spanish)</a>.`,
        },
        {
          q: 'What happens if my site is not compliant on 28 June 2025?',
          aHtml: `Administrative penalties are set by each Member State. In France, the
            <abbr title="Direction générale de la concurrence, de la consommation et de la répression des fraudes" lang="fr">DGCCRF</abbr>
            can impose fines up to €50,000 per non-compliant service, with possible service withdrawal.
            Private lawsuits (user associations) are admissible. Legal exposure is real: remediation should
            start without delay.
            <a href="/en/european-accessibility-act/">Member States, EN 301 549 and exemptions in the EAA guide</a>.`,
        },
      ],
    },
    contact: {
      title: "Let's talk about your project",
      body: 'Describe your site or app and the legal framework you target. Reply within 48 hours.',
      lead: 'Write to me:',
      subject: 'Accessibility audit request',
      form: {
        name: 'Your name',
        email: 'Your email address',
        emailHint: 'Expected format: firstname.lastname@domain.com',
        url: 'Your website URL (optional)',
        urlHint: 'Expected format: https://www.your-site.com',
        message: 'Your message',
        required: 'required',
        submit: 'Send message',
        or: 'Or by email:',
        action: '/en/thanks/',
        privacyHtml: `Your name and email address are used solely to answer your request.
          They are never shared with third parties or used for any other purpose. You can request
          access, rectification or deletion of your data by writing to the same address.`,
      },
    },
    success: {
      title: 'Message sent',
      body: 'Thank you, your message is on its way. I will reply within 48 hours.',
      back: 'Back to home',
    },
    estimation: {
      metaTitle: 'Accessibility audit cost estimator | Nuada',
      metaDescription:
        'Estimate in 30 seconds the audit tier that fits your project (WCAG, EAA, ADA): project type, scope, target framework, remediation included or not.',
      eyebrow: '30-second estimate',
      h1: 'Accessibility audit cost estimator.',
      lead: 'Four questions, one indicative price range and the recommended tier. Final quotes always follow a proper scoping call.',
      typeLabel: 'Project type',
      typeOptions: [
        { value: 'vitrine', label: 'Marketing site or landing page' },
        { value: 'app', label: 'Web application' },
        { value: 'mobile', label: 'Mobile application (React Native)' },
        { value: 'ecommerce', label: 'E-commerce or transactional platform' },
      ],
      pagesLabel: 'Number of key pages or screens',
      pagesHint: 'Count critical journeys (home, catalogue, cart, account, etc.).',
      refsLabel: 'Target frameworks',
      refsHint: 'Tick every framework that applies.',
      refsOptions: [
        { value: 'wcag', label: 'WCAG 2.2 (international)' },
        { value: 'eaa', label: 'European Accessibility Act' },
        { value: 'ada', label: 'ADA / Section 508 (United States)' },
        { value: 'rgaa', label: 'RGAA 4.1 (France)' },
        { value: 'en301', label: 'UNE-EN 301 549 (Spain / LATAM)' },
      ],
      remediationLabel: 'Do you want code remediation?',
      remediationOptions: [
        { value: 'oui', label: 'Yes, deliver remediation pull requests' },
        { value: 'non', label: 'No, audit report only' },
      ],
      submit: 'Compute estimate',
      resultTitle: 'Recommended tier',
      resultIdle: 'Fill in the form to see the estimate.',
      palierLabel: 'Tier',
      priceLabel: 'Indicative range',
      justificationLabel: 'Why this tier',
      ctaLabel: 'Request a precise quote',
      ctaHref: '/en/#contact',
      paliers: {
        diagnostic: {
          name: 'Assessment',
          price: '€1,200 (excl. VAT)',
          justify:
            'Small scope, no code remediation. A good first look at a marketing site to prioritise action.',
        },
        audit: {
          name: 'Audit + Remediation',
          price: 'From €4,900 (excl. VAT)',
          justify:
            'Broader scope or code remediation requested. Exhaustive audit on the defined sample, with remediation pull requests pushed into your repository.',
        },
        surmesure: {
          name: 'Custom compliance program',
          price: 'Custom quote',
          justify:
            'Large scope, multiple stacked frameworks or complex legal obligation. Dedicated scoping and ongoing enablement.',
        },
      },
      disclaimer:
        'This is an indicative estimate. The final price depends on journey depth, actual non-conformance volume and technical context (framework, tech debt, monorepo). A 30-minute scoping call locks the quote.',
    },
  },

  es: {
    meta: {
      title: 'Nuada — Auditoría y corrección de accesibilidad (WCAG 2.2)',
      description:
        'Auditorías de accesibilidad WCAG 2.2 / UNE-EN 301 549 por un desarrollador fullstack. No un PDF de 80 páginas: la auditoría más las pull requests de corrección. Conformidad con la EAA 2025.',
    },
    layout: {
      skip: 'Saltar al contenido principal',
      nav: 'Navegación principal',
      offer: 'Oferta',
      method: 'Método',
      faq: 'Preguntas',
      contact: 'Contacto',
      langLabel: 'Elegir idioma',
      footerRights: 'Nuada — Accesibilidad digital FR · EN · ES.',
      footerProof:
        'Este sitio apunta a la conformidad <strong><a href="https://www.w3.org/TR/WCAG22/" hreflang="en">WCAG 2.2 (en inglés)</a> nivel AAA</strong>. Es su propia demostración.',
      theme: { label: 'Tema', auto: 'auto', light: 'claro', dark: 'oscuro' },
      legalLink: 'Aviso legal y privacidad (en francés)',
    },
    hero: {
      eyebrow: 'Auditoría y corrección · WCAG 2.2 · UNE-EN 301 549',
      h1Html: `El auditor que <em>programa la solución</em>.`,
      leadHtml: `Auditor de accesibilidad <em>y</em> desarrollador fullstack senior: detecto las no
        conformidades y — si lo desea — entrego el código que las corrige, directamente en su repositorio.`,
      ctaPrimary: 'Solicitar una auditoría',
      ctaSecondary: 'Ver el método',
      pills: [
        { text: 'Español — WCAG · UNE-EN 301 549' },
        { text: 'France — RGAA · EAA', lang: 'fr' },
        { text: 'English — WCAG · ADA', lang: 'en' },
      ],
      storyLink: '¿Por qué «Nuada»? La historia del rey de la mano de plata',
    },
    legal: {
      titleHtml: `<span lang="en">European Accessibility Act</span>: aplicable desde junio de 2025`,
      bodyHtml: `La EAA exige accesibilidad a un amplio conjunto de servicios digitales (e-commerce, banca,
        transporte…) y se aplica a <strong>cualquier empresa que venda en la UE</strong>, esté donde esté.
        En España, la referencia es la norma UNE-EN 301 549, basada en las
        <abbr lang="en" title="Web Content Accessibility Guidelines">WCAG</abbr>.
        <strong>Auditar ahora es conformidad, no rescate.</strong>`,
    },
    offer: {
      title: 'Tres formas de trabajar juntos',
      subtitle: 'Precios fijos, auditoría 100 % manual. Sin horas facturadas a ciegas: un alcance, un entregable. ¿Dudas sobre el nivel?: <a href="/es/estimacion/">calculadora de coste en 30 segundos</a>.',
      badge: 'El más solicitado',
      paliers: [
        {
          nom: 'Diagnóstico',
          cible: 'Sitio corporativo / landing',
          prix: '1 200 €',
          scope: 'Hasta 5 páginas o recorridos clave',
          contenu: [
            'Auditoría de las páginas clave (recorrido principal)',
            'Informe priorizado por impacto en el usuario',
            'Sesión de restitución de 45 min',
          ],
          livrable: 'Informe accionable',
        },
        {
          nom: 'Auditoría + Corrección',
          cible: 'Aplicación web o móvil / e-commerce',
          prix: 'Desde 4 900 €',
          scope: 'Muestra de hasta 10 páginas · auditoría completa',
          contenu: [
            'Auditoría WCAG 2.2 completa sobre un alcance definido',
            'Informe técnico + síntesis para decisores',
            '<span lang="en">Pull requests</span> de corrección entregadas (React / React Native)',
            'Verificación posterior a la corrección',
          ],
          livrable: 'Auditoría + código corregido',
          phare: true,
        },
        {
          nom: 'Conformidad WCAG',
          cible: 'Gran cuenta / obligación legal',
          prix: 'Presupuesto a medida',
          scope: 'Alcance multi-recorrido',
          contenu: [
            'Auditoría multi-recorrido + declaración de accesibilidad',
            'Acompañamiento a equipos dev (revisiones, pairing)',
            'Seguimiento de conformidad en el tiempo',
          ],
          livrable: 'Conformidad WCAG documentada (lista para la EAA)',
        },
      ],
    },
    method: {
      title: 'El método: del diagnóstico al código',
      steps: [
        {
          t: '1. Alcance',
          dHtml:
            'Definimos el perímetro (recorridos críticos) y el marco aplicable (WCAG 2.2, UNE-EN 301 549, EAA).',
        },
        {
          t: '2. Auditoría',
          dHtml:
            'Pruebas automáticas y manuales: teclado, lector de pantalla, contrastes, estructura. Priorización por impacto real.',
        },
        {
          t: '3. Corrección',
          dHtml:
            'Entrego las correcciones como <span lang="en">pull requests</span> en su código, no recomendaciones abstractas.',
        },
        {
          t: '4. Verificación',
          dHtml:
            'Control posterior a la corrección y, si hace falta, declaración de accesibilidad conforme.',
        },
      ],
    },
    proof: {
      title: 'Una doble competencia, un trabajo garantizado',
      p1Html: `Desarrollador fullstack <em>y</em> especialista en accesibilidad: no me limito a señalar
        los problemas, entrego las correcciones. Trabajar conmigo es la certeza de un trabajo riguroso,
        llevado de principio a fin — de la auditoría al código en producción.`,
      p2Html: `Este sitio es la garantía silenciosa: totalmente accesible, aplica a diario lo que entrego a mis clientes.`,
      pr: {
        figLabel: 'Ejemplo de entregable: pull request de corrección',
        title: 'fix(a11y): labels, contraste, focus',
        badge: 'PR #217',
        lines: [
          { t: '  src/components/ContactForm.tsx', k: 'ctx' },
          { t: '− <div class="btn" onclick="send()">OK</div>', k: 'del' },
          { t: '+ <button type="submit" class="btn">', k: 'add' },
          { t: '+   Enviar el mensaje', k: 'add' },
          { t: '+ </button>', k: 'add' },
          { t: '', k: 'ctx' },
          { t: '  src/pages/index.astro', k: 'ctx' },
          { t: '− <img src="equipo.jpg">', k: 'del' },
          { t: '+ <img src="equipo.jpg" alt="El equipo', k: 'add' },
          { t: '+   al completo frente al taller">', k: 'add' },
        ],
        checks: ['✓ axe: 0 violaciones', '✓ contraste AAA'],
        ready: 'listo para merge',
      },
    },
    story: {
      title: '¿Por qué «Nuada»?',
      p1Html: `En la mitología irlandesa, <strong>Nuada</strong>, rey de los Tuatha Dé Danann, pierde un brazo
        en combate. La ley lo aparta del trono: un rey debe estar «íntegro». El médico de los dioses le forja
        entonces una <strong>mano de plata</strong> totalmente funcional — y Nuada vuelve a reinar.`,
      p2Html: `La barrera nunca estuvo en su cuerpo: estaba en la regla. Fue la tecnología la que la levantó.
        Eso es exactamente la accesibilidad digital: sus usuarios no son inadecuados, lo son las interfaces.
        <strong>Yo forjo manos de plata para las suyas.</strong>`,
    },
    faq: {
      title: 'Preguntas frecuentes',
      intro: 'Las ocho preguntas más habituales antes de una auditoría: marco legal, coste, plazo, entregable.',
      items: [
        {
          q: '¿Cuánto cuesta una auditoría de accesibilidad?',
          aHtml: `Tres niveles con precios publicados. <strong>Diagnóstico</strong> a 1 200 € (hasta 5 páginas,
            prioridades A/AA). <strong>Auditoría + Corrección</strong> desde 4 900 € (muestra de hasta 10 páginas,
            auditoría WCAG 2.2 completa, <span lang="en">pull requests</span> de corrección entregadas).
            <strong>Conformidad WCAG</strong> a medida para grandes cuentas. Sin horas facturadas a ciegas:
            un alcance, un entregable.`,
        },
        {
          q: '¿Diferencia entre WCAG, UNE-EN 301 549 y la EAA?',
          aHtml: `<abbr title="Web Content Accessibility Guidelines" lang="en">WCAG</abbr> es la norma técnica
            internacional del W3C. <strong>UNE-EN 301 549</strong> es la norma armonizada europea, referencia
            en España y en la mayoría de los países latinoamericanos, basada en WCAG. La
            <strong><span lang="en">European Accessibility Act</span></strong> (Directiva UE 2019/882) es una
            obligación legal aplicable desde el <strong>28 de junio de 2025</strong> para el e-commerce, la banca,
            el transporte y las telecomunicaciones.
            <a href="/es/auditoria-accesibilidad/">Guía completa España y LATAM</a>.`,
        },
        {
          q: '¿Mi sitio está afectado por la European Accessibility Act?',
          aHtml: `Si vende en línea a consumidores de la UE, o es banco, transportista, operador de telecomunicaciones
            o servicio audiovisual: <strong>sí, desde el 28 de junio de 2025</strong>. La directiva también se aplica
            a empresas no comunitarias que sirven a consumidores UE. Las microempresas (menos de 10 empleados
            <em>y</em> menos de 2 M€ de facturación) están exentas para los servicios.
            <a href="/en/european-accessibility-act/" hreflang="en" lang="en">Detailed EAA scope (in English)</a>.`,
        },
        {
          q: '¿Cuál es el plazo de una auditoría?',
          aHtml: `<strong>Diagnóstico</strong>: 5 a 7 días laborables. <strong>Auditoría + Corrección</strong>:
            3 a 4 semanas. Las correcciones de código se planifican tras la restitución, al ritmo acordado con
            su equipo técnico.`,
        },
        {
          q: '¿Qué entrega Nuada exactamente?',
          aHtml: `Un informe de auditoría con fuentes del marco aplicable (WCAG 2.2, UNE-EN 301 549 o EAA),
            una matriz de criticidad priorizada por impacto en el usuario, y sobre todo <strong>pull requests
            de corrección subidas directamente a su repositorio</strong> (React, React Native, Vue, Astro).
            No un PDF huérfano. Restitución en videollamada de 45 min.`,
        },
        {
          q: '¿Corrige el código, no solo audita?',
          aHtml: `Sí, es el posicionamiento. Desarrollador fullstack senior <em>y</em> auditor de accesibilidad.
            La mayoría de los gabinetes entregan una lista de no conformidades; Nuada entrega correcciones probadas
            con teclado y lector de pantalla, listas para hacer merge.`,
        },
        {
          q: '¿Qué mercados y marcos regulatorios cubre?',
          aHtml: `Francés con RGAA 4.1. Inglés con WCAG 2.2, la <abbr title="Americans with Disabilities Act" lang="en">ADA</abbr>
            estadounidense y la Section 508. Español con UNE-EN 301 549, incluido el mercado latinoamericano.
            Una auditoría, tres marcos regulatorios según su mercado objetivo.
            Guías detalladas:
            <a href="/es/auditoria-accesibilidad/">España y LATAM</a>,
            <a href="/en/european-accessibility-act/" hreflang="en" lang="en">EAA (inglés)</a>,
            <a href="/audit-rgaa/" hreflang="fr" lang="fr">RGAA (francés)</a>.`,
        },
        {
          q: '¿Qué ocurre si mi sitio no cumple el 28 de junio de 2025?',
          aHtml: `Las sanciones administrativas las fija cada Estado miembro. En España, la autoridad de consumo
            competente puede imponer multas según la legislación de transposición, con posibilidad de retirada
            del servicio. Los recursos privados (asociaciones de usuarios) también son admisibles. La exposición
            legal es real: la puesta en conformidad debe iniciarse sin demora.
            <a href="/es/auditoria-accesibilidad/">Detalles del régimen español y del panorama LATAM</a>.`,
        },
      ],
    },
    contact: {
      title: 'Hablemos de su proyecto',
      body: 'Describa su sitio o aplicación y el marco legal objetivo. Respuesta en 48 h.',
      lead: 'Escríbame:',
      subject: 'Solicitud de auditoría de accesibilidad',
      form: {
        name: 'Su nombre',
        email: 'Su correo electrónico',
        emailHint: 'Formato esperado: nombre.apellido@dominio.com',
        url: 'La URL de su sitio (opcional)',
        urlHint: 'Formato esperado: https://www.su-sitio.com',
        message: 'Su mensaje',
        required: 'obligatorio',
        submit: 'Enviar el mensaje',
        or: 'O directamente por correo:',
        action: '/es/gracias/',
        privacyHtml: `Su nombre y correo electrónico se utilizan únicamente para responder a su
          solicitud. No se transmiten a terceros ni se usan con otros fines. Puede solicitar el
          acceso, la rectificación o la supresión de sus datos escribiendo a la misma dirección.`,
      },
    },
    success: {
      title: 'Mensaje enviado',
      body: 'Gracias, su mensaje está en camino. Le responderé en 48 h.',
      back: 'Volver al inicio',
    },
    estimation: {
      metaTitle: 'Calculadora de coste de auditoría de accesibilidad | Nuada',
      metaDescription:
        'Estime en 30 segundos el nivel de auditoría adecuado para su proyecto (WCAG, UNE-EN 301 549, EAA): tipo de proyecto, alcance, marco objetivo, corrección incluida o no.',
      eyebrow: 'Estimación en 30 segundos',
      h1: 'Calculadora de coste de auditoría de accesibilidad.',
      lead: 'Cuatro preguntas, una franja de precio orientativa y el nivel recomendado. El presupuesto final siempre se cierra tras una sesión de alcance.',
      typeLabel: 'Tipo de proyecto',
      typeOptions: [
        { value: 'vitrine', label: 'Sitio corporativo o landing' },
        { value: 'app', label: 'Aplicación web' },
        { value: 'mobile', label: 'Aplicación móvil (React Native)' },
        { value: 'ecommerce', label: 'E-commerce o plataforma transaccional' },
      ],
      pagesLabel: 'Número de páginas o pantallas clave',
      pagesHint: 'Cuente los recorridos críticos (inicio, catálogo, carrito, cuenta, etc.).',
      refsLabel: 'Marcos objetivo',
      refsHint: 'Marque todo lo que aplique.',
      refsOptions: [
        { value: 'wcag', label: 'WCAG 2.2 (internacional)' },
        { value: 'en301', label: 'UNE-EN 301 549 (España / LATAM)' },
        { value: 'eaa', label: 'European Accessibility Act' },
        { value: 'rgaa', label: 'RGAA 4.1 (Francia)' },
        { value: 'ada', label: 'ADA / Section 508 (Estados Unidos)' },
      ],
      remediationLabel: '¿Desea la corrección del código?',
      remediationOptions: [
        { value: 'oui', label: 'Sí, entregar los pull requests de corrección' },
        { value: 'non', label: 'No, solo el informe de auditoría' },
      ],
      submit: 'Calcular la estimación',
      resultTitle: 'Nivel recomendado',
      resultIdle: 'Rellene el formulario para ver la estimación.',
      palierLabel: 'Nivel',
      priceLabel: 'Franja orientativa',
      justificationLabel: 'Por qué este nivel',
      ctaLabel: 'Solicitar un presupuesto detallado',
      ctaHref: '/es/#contact',
      paliers: {
        diagnostic: {
          name: 'Diagnóstico',
          price: '1 200 € (sin IVA)',
          justify:
            'Alcance reducido, sin corrección de código. Ideal para un primer análisis de un sitio corporativo y priorizar acciones.',
        },
        audit: {
          name: 'Auditoría + Corrección',
          price: 'Desde 4 900 € (sin IVA)',
          justify:
            'Alcance amplio o corrección de código solicitada. Auditoría exhaustiva sobre la muestra definida, con pull requests de corrección subidas a su repositorio.',
        },
        surmesure: {
          name: 'Conformidad a medida',
          price: 'Presupuesto a medida',
          justify:
            'Proyecto de gran envergadura, varios marcos regulatorios acumulados u obligación legal compleja. Alcance dedicado y acompañamiento en el tiempo.',
        },
      },
      disclaimer:
        'Esta estimación es orientativa. El precio final depende de la profundidad de los recorridos, del volumen real de no conformidades y del contexto técnico (framework, deuda, monorepo). Una sesión de alcance de 30 min cierra el presupuesto.',
    },
  },
};
