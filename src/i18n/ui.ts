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
    contact: string;
    langLabel: string;
    footerRights: string;
    footerProof: string;
  };
  hero: {
    eyebrow: string;
    h1Html: string;
    leadHtml: string;
    ctaPrimary: string;
    ctaSecondary: string;
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
  proof: { title: string; p1Html: string; p2Html: string };
  contact: { title: string; body: string; lead: string; subject: string };
}

export const ui: Record<Lang, Dict> = {
  fr: {
    meta: {
      title: "Audit RGAA — l'auditeur qui code la solution",
      description:
        "Audits d'accessibilité RGAA / WCAG 2.2 par un dev fullstack. Pas un PDF de 80 pages : un audit + les PR de remédiation livrées. Conformité European Accessibility Act 2025.",
    },
    layout: {
      skip: 'Aller au contenu principal',
      nav: 'Navigation principale',
      offer: 'Offre',
      method: 'Méthode',
      contact: 'Contact',
      langLabel: 'Choisir la langue',
      footerRights: 'Audit RGAA — Accessibilité numérique FR · EN · ES.',
      footerProof:
        'Ce site vise la conformité <strong>WCAG 2.2 niveau AAA</strong>. Il est sa propre démonstration.',
    },
    hero: {
      eyebrow: 'Accessibilité numérique · RGAA · WCAG 2.2',
      h1Html: `L'auditeur qui <span style="color:var(--c-primary);">code la solution</span>.`,
      leadHtml: `La plupart des audits livrent un PDF de 80 pages que personne ne sait appliquer.
        Moi je suis développeur fullstack : je livre l'audit <strong>et les <span lang="en">pull requests</span> de
        correction</strong>. Je parle aux équipes dev et j'arbitre conformité vs UX réelle.`,
      ctaPrimary: 'Demander un audit',
      ctaSecondary: 'Voir la méthode',
    },
    legal: {
      titleHtml: `<span lang="en">European Accessibility Act</span> : applicable depuis juin 2025`,
      bodyHtml: `L'EAA impose l'accessibilité à un large périmètre de services numériques (e-commerce,
        banque, transport, etc.). En France, le RGAA — déclinaison de WCAG — en est le cadre
        de référence. La non-conformité expose à des sanctions et ferme des marchés publics.
        <strong>Un audit maintenant, c'est de la conformité, pas du rattrapage.</strong>`,
    },
    offer: {
      title: 'Trois façons de travailler ensemble',
      subtitle:
        "Offre à prix fixe. Pas de temps facturé à l'aveugle : un périmètre, un livrable.",
      badge: 'Le plus demandé',
      paliers: [
        {
          nom: 'Diagnostic',
          cible: 'Site vitrine / landing',
          contenu: [
            'Audit des pages clés (parcours principal)',
            'Rapport priorisé par impact utilisateur',
            'Restitution visio 45 min',
          ],
          livrable: 'Rapport actionnable',
        },
        {
          nom: 'Audit + Remédiation',
          cible: 'Application / e-commerce',
          contenu: [
            'Audit RGAA complet sur périmètre défini',
            'Pull requests de correction livrées (React / RN)',
            'Vérification post-correction',
          ],
          livrable: 'Audit + code corrigé',
          phare: true,
        },
        {
          nom: 'Mise en conformité EAA',
          cible: 'Grand compte / obligation légale',
          contenu: [
            "Audit multi-parcours + déclaration d'accessibilité",
            'Accompagnement équipes dev (revue, pairing)',
            'Suivi de conformité dans le temps',
          ],
          livrable: 'Conformité EAA documentée',
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
    },
    contact: {
      title: 'Parlons de votre projet',
      body: 'Décrivez votre site ou application et le cadre légal visé. Réponse sous 48 h.',
      lead: 'Écrivez-moi :',
      subject: "Demande d'audit RGAA",
    },
  },

  en: {
    meta: {
      title: 'Accessibility Audits — the auditor who codes the fix',
      description:
        'WCAG 2.2 accessibility audits by a fullstack developer. Not an 80-page PDF: an audit plus the remediation pull requests, delivered. EAA, ADA and Section 508 compliance.',
    },
    layout: {
      skip: 'Skip to main content',
      nav: 'Main navigation',
      offer: 'Services',
      method: 'Method',
      contact: 'Contact',
      langLabel: 'Choose language',
      footerRights: 'Accessibility audits — FR · EN · ES.',
      footerProof:
        'This site targets <strong>WCAG 2.2 level AAA</strong> conformance. It is its own demo.',
    },
    hero: {
      eyebrow: 'Digital accessibility · WCAG 2.2 · EAA / ADA',
      h1Html: `The auditor who <span style="color:var(--c-primary);">codes the fix</span>.`,
      leadHtml: `Most audits deliver an 80-page PDF nobody knows how to apply.
        I'm a fullstack developer: I deliver the audit <strong>and the remediation pull
        requests</strong>. I speak dev, and I balance strict conformance with real-world UX.`,
      ctaPrimary: 'Request an audit',
      ctaSecondary: 'See the method',
    },
    legal: {
      titleHtml: `EAA, ADA, Section 508: accessibility is now a legal requirement`,
      bodyHtml: `The <strong>European Accessibility Act</strong> (in force since June 2025) applies to any
        company selling digital services into the EU — wherever it is based. In the US, ADA lawsuits
        over inaccessible websites keep rising. Non-compliance means legal exposure and lost contracts.
        <strong>An audit now is compliance, not damage control.</strong>`,
    },
    offer: {
      title: 'Three ways to work together',
      subtitle: 'Fixed-price offer. No blind hourly billing: one scope, one deliverable.',
      badge: 'Most requested',
      paliers: [
        {
          nom: 'Assessment',
          cible: 'Marketing site / landing page',
          contenu: [
            'Audit of key pages (main user journey)',
            'Report prioritised by user impact',
            '45-minute debrief call',
          ],
          livrable: 'Actionable report',
        },
        {
          nom: 'Audit + Remediation',
          cible: 'Web app / e-commerce',
          contenu: [
            'Full WCAG 2.2 audit on a defined scope',
            'Remediation pull requests delivered (React / RN)',
            'Post-fix verification',
          ],
          livrable: 'Audit + fixed code',
          phare: true,
        },
        {
          nom: 'Compliance program',
          cible: 'Enterprise / legal obligation',
          contenu: [
            'Multi-journey audit + accessibility statement',
            'Dev team enablement (reviews, pairing)',
            'Ongoing conformance monitoring',
          ],
          livrable: 'Documented EAA / ADA compliance',
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
    },
    contact: {
      title: "Let's talk about your project",
      body: 'Describe your site or app and the legal framework you target. Reply within 48 hours.',
      lead: 'Write to me:',
      subject: 'Accessibility audit request',
    },
  },

  es: {
    meta: {
      title: 'Auditorías de accesibilidad — el auditor que programa la solución',
      description:
        'Auditorías de accesibilidad WCAG 2.2 / UNE-EN 301 549 por un desarrollador fullstack. No un PDF de 80 páginas: la auditoría más las pull requests de corrección. Conformidad con la EAA 2025.',
    },
    layout: {
      skip: 'Saltar al contenido principal',
      nav: 'Navegación principal',
      offer: 'Oferta',
      method: 'Método',
      contact: 'Contacto',
      langLabel: 'Elegir idioma',
      footerRights: 'Auditorías de accesibilidad — FR · EN · ES.',
      footerProof:
        'Este sitio apunta a la conformidad <strong>WCAG 2.2 nivel AAA</strong>. Es su propia demostración.',
    },
    hero: {
      eyebrow: 'Accesibilidad digital · WCAG 2.2 · UNE-EN 301 549',
      h1Html: `El auditor que <span style="color:var(--c-primary);">programa la solución</span>.`,
      leadHtml: `La mayoría de las auditorías entregan un PDF de 80 páginas que nadie sabe aplicar.
        Yo soy desarrollador fullstack: entrego la auditoría <strong>y las <span lang="en">pull requests</span>
        de corrección</strong>. Hablo el idioma de los equipos dev y equilibrio conformidad y UX real.`,
      ctaPrimary: 'Solicitar una auditoría',
      ctaSecondary: 'Ver el método',
    },
    legal: {
      titleHtml: `<span lang="en">European Accessibility Act</span>: aplicable desde junio de 2025`,
      bodyHtml: `La EAA exige accesibilidad a un amplio conjunto de servicios digitales (e-commerce, banca,
        transporte…) y se aplica a <strong>cualquier empresa que venda en la UE</strong>, esté donde esté.
        En España, la referencia es la norma UNE-EN 301 549, basada en WCAG.
        <strong>Auditar ahora es conformidad, no rescate.</strong>`,
    },
    offer: {
      title: 'Tres formas de trabajar juntos',
      subtitle: 'Oferta a precio fijo. Sin horas facturadas a ciegas: un alcance, un entregable.',
      badge: 'El más solicitado',
      paliers: [
        {
          nom: 'Diagnóstico',
          cible: 'Sitio corporativo / landing',
          contenu: [
            'Auditoría de las páginas clave (recorrido principal)',
            'Informe priorizado por impacto en el usuario',
            'Sesión de restitución de 45 min',
          ],
          livrable: 'Informe accionable',
        },
        {
          nom: 'Auditoría + Corrección',
          cible: 'Aplicación / e-commerce',
          contenu: [
            'Auditoría WCAG 2.2 completa sobre un alcance definido',
            'Pull requests de corrección entregadas (React / RN)',
            'Verificación posterior a la corrección',
          ],
          livrable: 'Auditoría + código corregido',
          phare: true,
        },
        {
          nom: 'Conformidad EAA',
          cible: 'Gran cuenta / obligación legal',
          contenu: [
            'Auditoría multi-recorrido + declaración de accesibilidad',
            'Acompañamiento a equipos dev (revisiones, pairing)',
            'Seguimiento de conformidad en el tiempo',
          ],
          livrable: 'Conformidad EAA documentada',
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
    },
    contact: {
      title: 'Hablemos de su proyecto',
      body: 'Describa su sitio o aplicación y el marco legal objetivo. Respuesta en 48 h.',
      lead: 'Escríbame:',
      subject: 'Solicitud de auditoría de accesibilidad',
    },
  },
};
