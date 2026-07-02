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
    contact: string;
    langLabel: string;
    footerRights: string;
    footerProof: string;
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
      contact: 'Contact',
      langLabel: 'Choisir la langue',
      footerRights: 'Nuada — Accessibilité numérique FR · EN · ES.',
      footerProof:
        'Ce site vise la conformité <strong><a href="https://www.w3.org/TR/WCAG22/" hreflang="en">WCAG 2.2 (en anglais)</a> niveau AAA</strong>. Il est sa propre démonstration.',
      theme: { label: 'Thème', auto: 'auto', light: 'clair', dark: 'sombre' },
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
        "Offre à prix fixe, audit 100 % manuel. Pas de temps facturé à l'aveugle : un périmètre, un livrable.",
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
      contact: 'Contact',
      langLabel: 'Choose language',
      footerRights: 'Nuada — Digital accessibility FR · EN · ES.',
      footerProof:
        'This site targets <strong><a href="https://www.w3.org/TR/WCAG22/">WCAG 2.2</a> level AAA</strong> conformance. It is its own demo.',
      theme: { label: 'Theme', auto: 'auto', light: 'light', dark: 'dark' },
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
      subtitle: 'Fixed prices, 100% manual audits. No blind hourly billing: one scope, one deliverable.',
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
        digital accessibility means: your users are not unfit — your interfaces are.
        <strong>I forge silver hands for yours.</strong>`,
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
      contact: 'Contacto',
      langLabel: 'Elegir idioma',
      footerRights: 'Nuada — Accesibilidad digital FR · EN · ES.',
      footerProof:
        'Este sitio apunta a la conformidad <strong><a href="https://www.w3.org/TR/WCAG22/" hreflang="en">WCAG 2.2 (en inglés)</a> nivel AAA</strong>. Es su propia demostración.',
      theme: { label: 'Tema', auto: 'auto', light: 'claro', dark: 'oscuro' },
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
      subtitle: 'Precios fijos, auditoría 100 % manual. Sin horas facturadas a ciegas: un alcance, un entregable.',
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
        Eso es exactamente la accesibilidad digital: sus usuarios no son inadecuados — lo son las interfaces.
        <strong>Yo forjo manos de plata para las suyas.</strong>`,
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
  },
};
