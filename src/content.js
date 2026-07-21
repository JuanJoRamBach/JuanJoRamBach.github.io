// All user-facing copy, in both languages. Components never hard-code strings.
// In the Spanish copy, industry-standard terms that Spanish-speaking UX teams
// use in English (research, testing, onboarding, wireframes, stakeholders…)
// are deliberately kept in English.

const LINKEDIN =
  "https://www.linkedin.com/in/juan-jos%C3%A9-ram%C3%ADrez-bachmann-4b52bb1b8/";
const EMAIL = "juanjo.rambach@gmail.com";
const FIGMA_PROTO =
  "https://www.figma.com/proto/A0obAX5D0XaoH9oqSaFIyP/Keepex-webpage?page-id=0%3A1&type=design&node-id=89-1017&viewport=541%2C304%2C0.04&t=Q1TMSTwiQ53jvI7C-1&scaling=min-zoom&starting-point-node-id=89%3A1017&show-proto-sidebar=1&mode=design";
const SLIDESHARE =
  "https://www.slideshare.net/JuanJosRamrezBachman/keepex-case-study";

export const links = { LINKEDIN, EMAIL, FIGMA_PROTO, SLIDESHARE };

export const content = {
  /* ─────────────────────────── ENGLISH ─────────────────────────── */
  en: {
    name: "Juan José Ramírez B.",
    fullName: "Juan José Ramírez Bachmann",
    skipLink: "Skip to main content",
    langSwitch: { groupLabel: "Language", en: "English", es: "Español" },
    titles: {
      home: "Juan José Ramírez — UX/UI Designer",
      about: "About — Juan José Ramírez",
      portfolio: "Projects — Juan José Ramírez",
      keepex: "KeepeX Case Study — Juan José Ramírez",
      runquest: "RunQuest Case Study — Juan José Ramírez",
      contact: "Contact — Juan José Ramírez",
    },
    nav: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    navAria: "Main navigation",
    footer: { rights: "© 2025 Juan José Ramírez Bachmann" },
    cta: {
      label: "Get in touch",
      title: "Looking for a UX/UI Designer?",
      body: "Based in Spain. Available across Europe and the US — remote, hybrid, or on-site.",
      connect: "Connect on LinkedIn",
    },
    readCase: "Read case study",
    backToWork: "← Back to projects",
    photoAlt: "Portrait of Juan José Ramírez Bachmann",
    imgPending: "Image coming soon",

    home: {
      heroLabel: "UX/UI Designer · Spain · Open to Europe & US",
      heroTitle: "I design digital products grounded in research, not guesswork",
      heroBody:
        "Master's in UX Design (Barcelona Technology School) with a software engineering foundation. I've led end-to-end product design — from discovery research through tested prototypes — at companies like **SilverBrain**. Currently pursuing the **AI for Designers** certification (IxDF) to integrate AI into my design workflow.",
      viewWork: "View my work",
      getInTouch: "Get in touch",
      selectedWork: "Selected Projects",
      aboutLabel: "About me",
      aboutTitle: "Research-driven designer with an engineering mindset",
      aboutBody:
        "Master's in UX Design (Barcelona Technology School), Bachelor's in Graphic Design, plus software engineering studies. I've done end-to-end product design at SilverBrain and visual strategy at Brandbits. I also build games in Godot.",
      moreAbout: "More about me →",
      statYears: "Years in UX",
      statCurrently: "Currently",
      statCert: "AI for Designers certification (IxDF)",
    },

    projects: {
      keepex: {
        title: "KeepeX",
        subtitle: "Final Master's Project · 16 weeks",
        desc: "Designed a rental robot platform through 7 research rounds across 4 continents. User interviews revealed a price-expectation gap that pivoted the business model from purchase to rental.",
        descShort:
          "Rental robot platform. 7 research rounds, 4 continents, business model pivot from user evidence.",
        tags: ["UX Research", "Product Design", "Prototyping", "Figma"],
        tagsShort: ["UX Research", "Product Design", "Prototyping"],
        metric: "7",
        metricLabel: "research rounds",
      },
      runquest: {
        title: "RunQuest",
        subtitle: "Behavioral UX · Gamification",
        desc: "Gamified running app grounded in behavioral science. Applied BJ Fogg's Behavior Model and the Hook Model to increase onboarding completion from 65% to 92% across 3 testing rounds.",
        descShort:
          "Gamified running app. 65% → 92% onboarding completion across 3 testing rounds.",
        tags: ["Behavioral UX", "User Research", "Gamification", "Testing"],
        tagsShort: ["Behavioral UX", "User Research", "Gamification"],
        metric: "65→92%",
        metricLabel: "onboarding rate",
      },
    },

    about: {
      label: "About",
      title: "I ask why before designing how",
      paragraphs: [
        "I'm Juan José Ramírez Bachmann — a UX/UI Designer based in Spain with a background spanning graphic design, software engineering, and user experience research.",
        "Every interface decision should trace back to a user need, a research finding, or a tested hypothesis. I work best across the full product design cycle and bring enough technical literacy to collaborate closely with engineers.",
        "Outside product design, I build games in Godot (GDScript & C#). Game UX principles — feedback loops, progressive disclosure, motivation systems — are underutilized in product design, and I bring that lens to every project.",
        "I'm currently integrating AI into my design workflow — from accelerating research synthesis to generating and stress-testing design variations. I'm pursuing the AI for Designers certification through the Interaction Design Foundation to formalize this practice. I see AI as a multiplier for UX work, not a replacement: it lets me spend less time on production and more time on the decisions that actually shape user experience.",
      ],
      educationLabel: "Education",
      education: [
        { s: "Interaction Design Foundation", d: "AI for Designers (certification in progress)", y: "2025" },
        { s: "Barcelona Technology School", d: "Master's, UX Design", y: "2022–2023" },
        { s: "DUOC UC, Chile", d: "Bachelor's, Graphic Design", y: "2016–2019" },
        { s: "Software Engineering", d: "2 years formal coursework", y: "" },
      ],
      experienceLabel: "Experience",
      experience: [
        {
          r: "UX & AI — Independent specialization",
          c: "",
          at: "",
          p: "2024 – Present",
          d: "Self-directed professional development: AI for Designers certification (IxDF, in progress), building AI-assisted UX workflows — research synthesis, rapid prototyping, and design iteration with AI tools — and game UX experiments in Godot. New product projects in progress.",
        },
        {
          r: "UX Designer",
          c: "SilverBrain",
          at: "at",
          p: "Nov 2023 – Mar 2024",
          d: "User research, synthesis, end-to-end design (wireframes → prototypes → final UI). Usability testing and iteration based on qualitative feedback and metrics.",
        },
        {
          r: "Visual Designer",
          c: "Brandbits, Chile",
          at: "at",
          p: "2022",
          d: "Visual content across websites and social media. Analytics-informed visual strategy. Stakeholder alignment on creative direction.",
        },
      ],
      toolsLabel: "Tools",
      tools: ["Figma", "Miro", "Adobe Suite", "AI Tools", "HTML/CSS", "JavaScript", "Godot", "C#", "User Research", "Usability Testing", "Wireframing", "Prototyping", "IA"],
      languagesLabel: "Languages",
      languages: [
        { l: "Spanish", v: "Native" },
        { l: "English", v: "Professional" },
      ],
    },

    portfolio: {
      label: "Portfolio",
      title: "Selected projects",
      body: "End-to-end case studies from research through tested prototypes.",
      keepexSubtitle: "Final Master's · 16 weeks",
      runquestSubtitle: "Behavioral UX · Gamification",
    },

    keepex: {
      heroTitle: "KeepeX — Rental platform for household robots",
      heroSubtitle: "Master's Final Project · Barcelona Technology School",
      heroDesc:
        "Designed a rental robot platform through 7 rounds of user research across 4 continents and 3 languages. Research uncovered a critical price-expectation gap that pivoted the entire business model from purchase to rental.",
      meta: [
        { l: "Role", v: "UX Designer" },
        { l: "Team", v: "2 members" },
        { l: "Duration", v: "16 weeks" },
        { l: "Tools", v: "Figma, Miro, Adobe, Notion" },
      ],
      challenge: {
        label: "Challenge",
        title: "Robot tech is advancing — but ownership isn't accessible",
        p1: "The household robot market is projected to reach $31.99B by 2030, yet most consumers can't justify the cost. We saw an opportunity to bring the rental model to robotic technology.",
        p2: "The design challenge: make an unfamiliar category feel trustworthy while handling the complexity of matching users to the right robot for their tasks and space.",
      },
      discovery: {
        label: "Discovery",
        title: "7 research rounds before a single screen",
        intro: "We ran a Double Diamond process with 7 distinct research phases — each one narrowing focus based on evidence, not assumptions.",
        phases: [
          { title: "Phase 1–2: Desk research + scoring matrix", desc: "Evaluated 4 robotics verticals (caring, smart city, industrial, domotics) against access to market data, user reachability, and 10-year predictability. Domotics scored highest." },
          { title: "Phase 3–4: Smart home interviews (5 users, 4 continents)", desc: "Interviewed smart speaker owners to understand automation expectations. Key pain: devices weren't smart enough — users wanted them to take burdens off their shoulders, not just play music." },
          { title: "Phase 5: Multilingual survey (68 participants)", desc: "Deployed in English, Spanish, and Persian to capture cross-cultural housework patterns. Cleaning, cooking, and bathroom maintenance emerged as the most painful chores — 1–2 hours daily." },
          { title: "Phase 6: Robot expectation interviews (4 users)", desc: "Discovered a critical price gap: users expected ~€10K for a home robot, but real costs are far higher. This insight killed the purchase model." },
          { title: "Phase 7: Rental model validation (3 users)", desc: "Tested the rental concept directly. Users preferred on-demand access over ownership. This validated the entire business pivot." },
        ],
        callout: "**The pivot that defined the product:** Users wanted robots but couldn't afford them. Interviews revealed the price expectation gap was too wide for a purchase model — so we pivoted to rental. The business model emerged from research, not a brainstorm.",
      },
      design: {
        label: "Design",
        title: "Smart matching over manual browsing",
        features: [
          { title: "Task-based robot matching", desc: "Users describe their space and tasks — the system recommends the right robot." },
          { title: "Flexible scheduling", desc: "Recurring smart schedule + on-demand rental, both from the same flow." },
          { title: "Proactive notifications", desc: "Status updates so users never wonder where their robot is." },
          { title: "Usage dashboard", desc: "Rental history with performance data — making value tangible over time." },
        ],
        outro: "We chose web-first over native. Research showed user resistance to installing another app — web reduced the barrier to first use.",
      },
      finalLabel: "Final Design",
      finalTitle: "Key screens",
      screens: [
        { label: "Homepage", title: "Hero & service categories", desc: "Landing page with clear CTAs and task-based robot categories.", src: "images/keepex-homepage.jpg", alt: "KeepeX homepage design with hero section and robot service categories" },
        { label: "Entity Select", title: "User segmentation", desc: "Users self-identify as personal, community, or business — shaping the experience.", src: "images/keepex-entity.jpg", alt: "KeepeX entity selection screen where users choose personal, community, or business profile" },
        { label: "Robot Select", title: "Task-based browsing", desc: "Users choose by task category instead of browsing a generic catalog.", src: "images/keepex-robot-select.jpg", alt: "KeepeX robot selection screen organized by household task categories" },
        { label: "Booking", title: "Confirm & schedule", desc: "Multi-step flow with progress indicator, pre-filled data, and service area map.", src: "images/keepex-booking.jpg", alt: "KeepeX booking confirmation flow with progress indicator and service area map" },
        { label: "Dashboard", title: "Account & subscription", desc: "At-a-glance status: subscription, rentals left, settings, and history.", src: "images/keepex-dashboard.jpg", alt: "KeepeX account dashboard showing subscription status, remaining rentals, and history" },
      ],
      testing: {
        label: "Testing",
        title: "Usability testing revealed what we missed",
        intro: "Tested mid-fidelity Figma prototype with participants across different age ranges and geographic locations.",
        callouts: [
          { icon: "✅", text: "**What worked:** All users completed their intended tasks. The proposed customer journeys guided users to their goals effectively — the core flow was solid." },
          { icon: "📊", text: "**Critical issue:** Almost all participants confused \"Plans\" with \"Entity types.\" This was an information architecture problem, not visual — the fix was rewriting UX copy and restructuring the pricing page to lead with tasks, not tiers." },
          { icon: "🔍", text: "**Design insight:** Users expected the robot to \"know what to do\" from the moment it's turned on — scanning the environment and identifying obstacles autonomously. This shaped how we framed the onboarding experience and robot capabilities in the UI." },
        ],
      },
      prototype: {
        label: "Prototype",
        title: "Try the experience",
        figma: "Open Figma prototype →",
        caseStudy: "Full case study",
      },
      reflection: {
        label: "Reflection",
        title: "What I learned",
        callouts: [
          "**Research can change the business model.** The purchase-to-rental pivot wasn't a creative hunch — it came directly from user interviews revealing a price expectation gap. That's the kind of impact UX research should have.",
          "**Cross-cultural research adds real signal.** Translating the survey to 3 languages and interviewing across 4 continents wasn't just inclusive — it surfaced universal patterns (cleaning as the top pain) that a single-market study would have missed.",
          "**Naming is information architecture.** The Plans vs. Entity confusion wasn't a visual problem — it was a structural one. The fix was in words and hierarchy, not colors and layout.",
          "**Web-first was research-driven.** Users explicitly said they didn't want another app for infrequent use. Platform choice came from evidence, not assumption.",
        ],
      },
    },

    runquest: {
      heroTitle: "RunQuest — Habit formation through gamification",
      heroSubtitle: "Behavioral UX · Master's Project",
      heroDesc:
        "Gamified running app applying behavioral science to help beginners build lasting habits. Increased onboarding completion from 65% to 92%.",
      meta: [
        { l: "Role", v: "UX Designer" },
        { l: "Team", v: "5 members" },
        { l: "Duration", v: "6 weeks" },
        { l: "Tools", v: "Figma, Miro" },
      ],
      stats: [
        { n: "65→92%", label: "Onboarding rate" },
        { n: "15", label: "Test participants" },
        { n: "10", label: "User interviews" },
      ],
      problem: {
        label: "Problem",
        title: "80% of beginners quit within 2 weeks",
        p1: "New runners face a motivation cliff. 70% abandoned within two weeks; 80% said they lacked any feedback loop to know if they were improving.",
        p2: "The question: how do we design an experience that makes the first 30 days stick?",
      },
      research: {
        label: "Research",
        title: "Grounded in behavioral science",
        features: [
          { title: "BJ Fogg's Behavior Model", desc: "Behavior = Motivation × Ability × Trigger. We designed for all three." },
          { title: "The Hook Model (Nir Eyal)", desc: "Trigger → Action → Reward → Investment. Each session follows this loop." },
          { title: "Self-Determination Theory", desc: "Autonomy (choose quests), competence (visible progress), relatedness (community)." },
        ],
        callout: "**Not academic decoration.** When we debated a leaderboard, SDT told us it could hurt beginners' autonomy. We built personal quests instead.",
      },
      findings: {
        label: "Findings",
        title: "Surveys confirmed interview insights",
        stats: [
          { n: "80%", label: "No feedback loop" },
          { n: "70%", label: "Quit in ≤2 weeks" },
        ],
        outro: "Key distinction: runners didn't want to compete — they wanted to feel progress. This shaped our gamification toward personal consistency, not rankings.",
      },
      design: {
        label: "Design",
        title: "Gamification as a tool, not a gimmick",
        features: [
          { title: "Quest system", desc: "Missions that reward showing up, not speed. Early wins in week one.", tag: "→ 70% quit from unclear goals" },
          { title: "3-step onboarding", desc: "Goal-setting in under a minute. Just enough to feel ownership.", tag: "→ 65% to 92% completion" },
          { title: "Progress dashboard", desc: "Streaks, badges, stats answering: Am I getting better?", tag: "→ 80% lacked feedback" },
          { title: "Accessibility-first", desc: "High contrast, voice prompts, large tap targets. Works outdoors in sunlight.", tag: "→ Contextual design" },
        ],
      },
      testing: {
        label: "Testing",
        title: "3 rounds, 15 participants",
        rounds: [
          { r: "Round 1", f: "Onboarding flow", res: "65% — too many steps, unclear value" },
          { r: "Round 2", f: "Simplified + quests", res: "84% — cut 7 steps to 3, added first quest" },
          { r: "Round 3", f: "Full flow + dashboard", res: "92% — progress visibility drove confidence" },
        ],
        callout: "**Biggest impact:** 7 steps → 3 + an immediate first quest turned onboarding from a form into a commitment. The first 5 minutes determine if a user builds a habit or uninstalls.",
      },
      reflection: {
        label: "Reflection",
        title: "What I learned",
        callouts: [
          "**Gamification must be research-grounded.** We designed mechanics that address why people quit — not generic points and badges.",
          "**Theory is a design tool.** BJ Fogg and Hook Model were decision frameworks, not citations.",
          "**First 5 minutes define retention.** Onboarding redesign, not core experience, drove the biggest metric improvement.",
        ],
      },
    },

    contact: {
      label: "Contact",
      title: "Let's talk",
      body: "Looking for full-time UX/UI roles. Based in Spain, available across Europe and the US.",
      channels: [
        { l: "LinkedIn", u: LINKEDIN, d: "Connect and message me", external: true },
        { l: "Email", u: `mailto:${EMAIL}`, d: EMAIL, external: false },
      ],
      availabilityLabel: "Availability",
      availability: [
        { l: "Location", v: "Spain (EU)" },
        { l: "Type", v: "Full-time" },
        { l: "Remote", v: "Europe & US" },
        { l: "On-site", v: "Open to relocation" },
      ],
    },
  },

  /* ─────────────────────────── ESPAÑOL ─────────────────────────── */
  es: {
    name: "Juan José Ramírez B.",
    fullName: "Juan José Ramírez Bachmann",
    skipLink: "Saltar al contenido principal",
    langSwitch: { groupLabel: "Idioma", en: "English", es: "Español" },
    titles: {
      home: "Juan José Ramírez — Diseñador UX/UI",
      about: "Sobre mí — Juan José Ramírez",
      portfolio: "Proyectos — Juan José Ramírez",
      keepex: "Caso de estudio KeepeX — Juan José Ramírez",
      runquest: "Caso de estudio RunQuest — Juan José Ramírez",
      contact: "Contacto — Juan José Ramírez",
    },
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Proyectos", href: "#portfolio" },
      { label: "Sobre mí", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    navAria: "Navegación principal",
    footer: { rights: "© 2025 Juan José Ramírez Bachmann" },
    cta: {
      label: "Contacto",
      title: "¿Buscas un diseñador UX/UI?",
      body: "Con base en España. Disponible en toda Europa y EE. UU. — en remoto, híbrido o presencial.",
      connect: "Conecta en LinkedIn",
    },
    readCase: "Leer caso de estudio",
    backToWork: "← Volver a proyectos",
    photoAlt: "Retrato de Juan José Ramírez Bachmann",
    imgPending: "Imagen próximamente",

    home: {
      heroLabel: "Diseñador UX/UI · España · Abierto a Europa y EE. UU.",
      heroTitle: "Diseño productos digitales basados en investigación, no en suposiciones",
      heroBody:
        "Máster en UX Design (Barcelona Technology School) con base en ingeniería de software. He liderado diseño de producto end-to-end — desde el research de descubrimiento hasta prototipos testados — en empresas como **SilverBrain**. Actualmente curso la certificación **AI for Designers** (IxDF) para integrar la IA en mi flujo de diseño.",
      viewWork: "Ver mi trabajo",
      getInTouch: "Contáctame",
      selectedWork: "Proyectos seleccionados",
      aboutLabel: "Sobre mí",
      aboutTitle: "Diseñador guiado por research con mentalidad de ingeniería",
      aboutBody:
        "Máster en UX Design (Barcelona Technology School), Grado en Diseño Gráfico y estudios de ingeniería de software. He hecho diseño de producto end-to-end en SilverBrain y estrategia visual en Brandbits. También desarrollo juegos en Godot.",
      moreAbout: "Más sobre mí →",
      statYears: "Años en UX",
      statCurrently: "Actualmente",
      statCert: "Certificación AI for Designers (IxDF)",
    },

    projects: {
      keepex: {
        title: "KeepeX",
        subtitle: "Proyecto Final de Máster · 16 semanas",
        desc: "Diseñé una plataforma de alquiler de robots a través de 7 rondas de research en 4 continentes. Las entrevistas revelaron una brecha entre el precio esperado y el real que pivotó el modelo de negocio de compra a alquiler.",
        descShort:
          "Plataforma de alquiler de robots. 7 rondas de research, 4 continentes y un pivote del modelo de negocio basado en evidencia de usuarios.",
        tags: ["UX Research", "Diseño de Producto", "Prototipado", "Figma"],
        tagsShort: ["UX Research", "Diseño de Producto", "Prototipado"],
        metric: "7",
        metricLabel: "rondas de research",
      },
      runquest: {
        title: "RunQuest",
        subtitle: "UX Conductual · Gamificación",
        desc: "App de running gamificada fundamentada en ciencia del comportamiento. Apliqué el modelo de conducta de BJ Fogg y el Hook Model para aumentar la finalización del onboarding del 65% al 92% en 3 rondas de testing.",
        descShort:
          "App de running gamificada. Finalización del onboarding del 65% → 92% en 3 rondas de testing.",
        tags: ["UX Conductual", "UX Research", "Gamificación", "Testing"],
        tagsShort: ["UX Conductual", "UX Research", "Gamificación"],
        metric: "65→92%",
        metricLabel: "onboarding completado",
      },
    },

    about: {
      label: "Sobre mí",
      title: "Pregunto el porqué antes de diseñar el cómo",
      paragraphs: [
        "Soy Juan José Ramírez Bachmann — diseñador UX/UI con base en España y un recorrido que abarca diseño gráfico, ingeniería de software e investigación de experiencia de usuario.",
        "Cada decisión de interfaz debería poder rastrearse hasta una necesidad de usuario, un hallazgo de research o una hipótesis testada. Trabajo mejor a lo largo de todo el ciclo de diseño de producto y aporto la cultura técnica suficiente para colaborar de cerca con ingeniería.",
        "Fuera del diseño de producto, desarrollo juegos en Godot (GDScript y C#). Los principios de UX de videojuegos — bucles de feedback, revelación progresiva, sistemas de motivación — están infrautilizados en el diseño de producto, y aporto esa mirada a cada proyecto.",
        "Actualmente estoy integrando la IA en mi flujo de diseño — desde acelerar la síntesis de research hasta generar y poner a prueba variaciones de diseño. Curso la certificación AI for Designers de la Interaction Design Foundation para formalizar esta práctica. Veo la IA como un multiplicador del trabajo de UX, no un reemplazo: me permite dedicar menos tiempo a producción y más a las decisiones que realmente definen la experiencia de usuario.",
      ],
      educationLabel: "Educación",
      education: [
        { s: "Interaction Design Foundation", d: "AI for Designers (certificación en curso)", y: "2025" },
        { s: "Barcelona Technology School", d: "Máster en UX Design", y: "2022–2023" },
        { s: "DUOC UC, Chile", d: "Grado en Diseño Gráfico", y: "2016–2019" },
        { s: "Ingeniería de Software", d: "2 años de estudios formales", y: "" },
      ],
      experienceLabel: "Experiencia",
      experience: [
        {
          r: "UX e IA — Especialización independiente",
          c: "",
          at: "",
          p: "2024 – Presente",
          d: "Desarrollo profesional autodirigido: certificación AI for Designers (IxDF, en curso), construcción de flujos de trabajo UX asistidos por IA — síntesis de research, prototipado rápido e iteración de diseño con herramientas de IA — y experimentos de UX de videojuegos en Godot. Nuevos proyectos de producto en camino.",
        },
        {
          r: "UX Designer",
          c: "SilverBrain",
          at: "en",
          p: "Nov 2023 – Mar 2024",
          d: "Research con usuarios, síntesis y diseño end-to-end (wireframes → prototipos → UI final). Tests de usabilidad e iteración a partir de feedback cualitativo y métricas.",
        },
        {
          r: "Diseñador Visual",
          c: "Brandbits, Chile",
          at: "en",
          p: "2022",
          d: "Contenido visual para webs y redes sociales. Estrategia visual informada por analítica. Alineación con stakeholders en la dirección creativa.",
        },
      ],
      toolsLabel: "Herramientas",
      tools: ["Figma", "Miro", "Adobe Suite", "Herramientas de IA", "HTML/CSS", "JavaScript", "Godot", "C#", "UX Research", "Tests de usabilidad", "Wireframing", "Prototipado", "Arquitectura de información"],
      languagesLabel: "Idiomas",
      languages: [
        { l: "Español", v: "Nativo" },
        { l: "Inglés", v: "Profesional" },
      ],
    },

    portfolio: {
      label: "Portafolio",
      title: "Proyectos seleccionados",
      body: "Casos de estudio end-to-end, desde el research hasta prototipos testados.",
      keepexSubtitle: "Proyecto Final de Máster · 16 semanas",
      runquestSubtitle: "UX Conductual · Gamificación",
    },

    keepex: {
      heroTitle: "KeepeX — Plataforma de alquiler de robots domésticos",
      heroSubtitle: "Proyecto Final de Máster · Barcelona Technology School",
      heroDesc:
        "Diseñé una plataforma de alquiler de robots a través de 7 rondas de research con usuarios en 4 continentes y 3 idiomas. El research destapó una brecha crítica entre el precio esperado y el real que pivotó todo el modelo de negocio de compra a alquiler.",
      meta: [
        { l: "Rol", v: "UX Designer" },
        { l: "Equipo", v: "2 personas" },
        { l: "Duración", v: "16 semanas" },
        { l: "Herramientas", v: "Figma, Miro, Adobe, Notion" },
      ],
      challenge: {
        label: "Desafío",
        title: "La robótica avanza — pero ser propietario no es accesible",
        p1: "Se proyecta que el mercado de robots domésticos alcance los 31.990 M$ en 2030, pero la mayoría de consumidores no puede justificar el coste. Vimos la oportunidad de llevar el modelo de alquiler a la tecnología robótica.",
        p2: "El reto de diseño: hacer que una categoría desconocida inspire confianza, gestionando a la vez la complejidad de emparejar a cada usuario con el robot adecuado para sus tareas y su espacio.",
      },
      discovery: {
        label: "Descubrimiento",
        title: "7 rondas de research antes de una sola pantalla",
        intro: "Seguimos un proceso Double Diamond con 7 fases de research diferenciadas — cada una acotando el foco a partir de evidencia, no de suposiciones.",
        phases: [
          { title: "Fases 1–2: Desk research + matriz de puntuación", desc: "Evaluamos 4 verticales de robótica (cuidados, smart city, industrial, domótica) según acceso a datos de mercado, alcance de usuarios y previsibilidad a 10 años. Domótica obtuvo la mayor puntuación." },
          { title: "Fases 3–4: Entrevistas de smart home (5 usuarios, 4 continentes)", desc: "Entrevistamos a dueños de altavoces inteligentes para entender sus expectativas de automatización. Dolor clave: los dispositivos no eran lo bastante inteligentes — querían que les quitaran cargas de encima, no solo reproducir música." },
          { title: "Fase 5: Encuesta multilingüe (68 participantes)", desc: "Desplegada en inglés, español y persa para capturar patrones transculturales de tareas domésticas. Limpiar, cocinar y el mantenimiento del baño emergieron como las tareas más dolorosas — 1–2 horas diarias." },
          { title: "Fase 6: Entrevistas de expectativas sobre robots (4 usuarios)", desc: "Descubrimos una brecha de precio crítica: los usuarios esperaban ~10.000 € por un robot doméstico, pero los costes reales son mucho mayores. Este insight mató el modelo de compra." },
          { title: "Fase 7: Validación del modelo de alquiler (3 usuarios)", desc: "Testamos el concepto de alquiler directamente. Los usuarios preferían el acceso bajo demanda a la propiedad. Esto validó todo el pivote de negocio." },
        ],
        callout: "**El pivote que definió el producto:** los usuarios querían robots pero no podían pagarlos. Las entrevistas revelaron que la brecha de expectativas de precio era demasiado grande para un modelo de compra — así que pivotamos a alquiler. El modelo de negocio nació del research, no de un brainstorm.",
      },
      design: {
        label: "Diseño",
        title: "Emparejamiento inteligente en vez de navegación manual",
        features: [
          { title: "Emparejamiento de robots por tarea", desc: "El usuario describe su espacio y sus tareas — el sistema recomienda el robot adecuado." },
          { title: "Programación flexible", desc: "Agenda inteligente recurrente + alquiler bajo demanda, ambos desde el mismo flujo." },
          { title: "Notificaciones proactivas", desc: "Actualizaciones de estado para que el usuario nunca se pregunte dónde está su robot." },
          { title: "Panel de uso", desc: "Historial de alquileres con datos de rendimiento — haciendo tangible el valor a lo largo del tiempo." },
        ],
        outro: "Elegimos web-first frente a app nativa. El research mostró resistencia a instalar otra app — la web redujo la barrera del primer uso.",
      },
      finalLabel: "Diseño final",
      finalTitle: "Pantallas clave",
      screens: [
        { label: "Homepage", title: "Hero y categorías de servicio", desc: "Página de inicio con CTAs claros y categorías de robots organizadas por tarea.", src: "images/keepex-homepage.jpg", alt: "Diseño de la homepage de KeepeX con sección hero y categorías de servicios robóticos" },
        { label: "Tipo de usuario", title: "Segmentación de usuarios", desc: "Los usuarios se identifican como personal, comunidad o empresa — dando forma a la experiencia.", alt: "Pantalla de selección de tipo de usuario de KeepeX: personal, comunidad o empresa", src: "images/keepex-entity.jpg" },
        { label: "Elegir robot", title: "Navegación por tarea", desc: "Los usuarios eligen por categoría de tarea en vez de navegar un catálogo genérico.", src: "images/keepex-robot-select.jpg", alt: "Pantalla de selección de robots de KeepeX organizada por categorías de tareas domésticas" },
        { label: "Reserva", title: "Confirmar y programar", desc: "Flujo multipaso con indicador de progreso, datos prellenados y mapa del área de servicio.", src: "images/keepex-booking.jpg", alt: "Flujo de confirmación de reserva de KeepeX con indicador de progreso y mapa del área de servicio" },
        { label: "Panel", title: "Cuenta y suscripción", desc: "Estado de un vistazo: suscripción, alquileres restantes, ajustes e historial.", src: "images/keepex-dashboard.jpg", alt: "Panel de cuenta de KeepeX con estado de suscripción, alquileres restantes e historial" },
      ],
      testing: {
        label: "Testing",
        title: "Los tests de usabilidad revelaron lo que se nos escapaba",
        intro: "Testamos un prototipo de fidelidad media en Figma con participantes de distintos rangos de edad y ubicaciones geográficas.",
        callouts: [
          { icon: "✅", text: "**Lo que funcionó:** todos los usuarios completaron sus tareas. Los customer journeys propuestos guiaron a los usuarios hasta sus objetivos con eficacia — el flujo central era sólido." },
          { icon: "📊", text: "**Problema crítico:** casi todos los participantes confundieron «Planes» con «Tipos de usuario». Era un problema de arquitectura de información, no visual — la solución fue reescribir el UX writing y reestructurar la página de precios para partir de tareas, no de niveles." },
          { icon: "🔍", text: "**Insight de diseño:** los usuarios esperaban que el robot «supiera qué hacer» desde el momento de encenderlo — escaneando el entorno e identificando obstáculos de forma autónoma. Esto definió cómo planteamos el onboarding y las capacidades del robot en la UI." },
        ],
      },
      prototype: {
        label: "Prototipo",
        title: "Prueba la experiencia",
        figma: "Abrir prototipo en Figma →",
        caseStudy: "Caso de estudio completo",
      },
      reflection: {
        label: "Reflexión",
        title: "Lo que aprendí",
        callouts: [
          "**El research puede cambiar el modelo de negocio.** El pivote de compra a alquiler no fue una corazonada creativa — salió directamente de entrevistas que revelaron una brecha de expectativas de precio. Ese es el tipo de impacto que el UX research debería tener.",
          "**El research transcultural aporta señal real.** Traducir la encuesta a 3 idiomas y entrevistar en 4 continentes no fue solo inclusivo — hizo emerger patrones universales (la limpieza como dolor principal) que un estudio de un solo mercado habría pasado por alto.",
          "**Nombrar es arquitectura de información.** La confusión entre Planes y Tipos de usuario no era un problema visual — era estructural. La solución estaba en las palabras y la jerarquía, no en colores ni layout.",
          "**Web-first fue una decisión de research.** Los usuarios dijeron explícitamente que no querían otra app para un uso poco frecuente. La elección de plataforma vino de la evidencia, no de una suposición.",
        ],
      },
    },

    runquest: {
      heroTitle: "RunQuest — Creación de hábitos mediante gamificación",
      heroSubtitle: "UX Conductual · Proyecto de Máster",
      heroDesc:
        "App de running gamificada que aplica ciencia del comportamiento para ayudar a principiantes a construir hábitos duraderos. La finalización del onboarding subió del 65% al 92%.",
      meta: [
        { l: "Rol", v: "UX Designer" },
        { l: "Equipo", v: "5 personas" },
        { l: "Duración", v: "6 semanas" },
        { l: "Herramientas", v: "Figma, Miro" },
      ],
      stats: [
        { n: "65→92%", label: "Finalización de onboarding" },
        { n: "15", label: "Participantes en tests" },
        { n: "10", label: "Entrevistas con usuarios" },
      ],
      problem: {
        label: "Problema",
        title: "El 80% de los principiantes abandona en 2 semanas",
        p1: "Quien empieza a correr se enfrenta a un precipicio de motivación. El 70% abandonaba en dos semanas; el 80% decía no tener ningún bucle de feedback para saber si estaba mejorando.",
        p2: "La pregunta: ¿cómo diseñamos una experiencia que haga que los primeros 30 días se consoliden?",
      },
      research: {
        label: "Research",
        title: "Fundamentado en ciencia del comportamiento",
        features: [
          { title: "Modelo de conducta de BJ Fogg", desc: "Conducta = Motivación × Capacidad × Detonante. Diseñamos para los tres." },
          { title: "El Hook Model (Nir Eyal)", desc: "Detonante → Acción → Recompensa → Inversión. Cada sesión sigue este bucle." },
          { title: "Teoría de la Autodeterminación", desc: "Autonomía (elegir misiones), competencia (progreso visible), relación (comunidad)." },
        ],
        callout: "**No es decoración académica.** Cuando debatimos un ranking, la teoría de la autodeterminación nos indicó que podía dañar la autonomía de los principiantes. Construimos misiones personales en su lugar.",
      },
      findings: {
        label: "Hallazgos",
        title: "Las encuestas confirmaron los insights de las entrevistas",
        stats: [
          { n: "80%", label: "Sin bucle de feedback" },
          { n: "70%", label: "Abandono en ≤2 semanas" },
        ],
        outro: "Distinción clave: los corredores no querían competir — querían sentir el progreso. Esto orientó la gamificación hacia la constancia personal, no los rankings.",
      },
      design: {
        label: "Diseño",
        title: "La gamificación como herramienta, no como truco",
        features: [
          { title: "Sistema de misiones", desc: "Misiones que premian presentarse, no la velocidad. Victorias tempranas en la primera semana.", tag: "→ 70% abandonaba por metas difusas" },
          { title: "Onboarding en 3 pasos", desc: "Definición de objetivos en menos de un minuto. Lo justo para sentir el proyecto como propio.", tag: "→ del 65% al 92% de finalización" },
          { title: "Panel de progreso", desc: "Rachas, insignias y estadísticas que responden: ¿estoy mejorando?", tag: "→ el 80% carecía de feedback" },
          { title: "Accesibilidad primero", desc: "Alto contraste, indicaciones de voz, zonas táctiles grandes. Funciona al aire libre a pleno sol.", tag: "→ Diseño contextual" },
        ],
      },
      testing: {
        label: "Testing",
        title: "3 rondas, 15 participantes",
        rounds: [
          { r: "Ronda 1", f: "Flujo de onboarding", res: "65% — demasiados pasos, valor poco claro" },
          { r: "Ronda 2", f: "Simplificado + misiones", res: "84% — de 7 pasos a 3, primera misión añadida" },
          { r: "Ronda 3", f: "Flujo completo + panel", res: "92% — la visibilidad del progreso generó confianza" },
        ],
        callout: "**El mayor impacto:** pasar de 7 pasos a 3 + una primera misión inmediata convirtió el onboarding de un formulario en un compromiso. Los primeros 5 minutos deciden si el usuario construye un hábito o desinstala.",
      },
      reflection: {
        label: "Reflexión",
        title: "Lo que aprendí",
        callouts: [
          "**La gamificación debe fundamentarse en research.** Diseñamos mecánicas que atacan las razones por las que la gente abandona — no puntos e insignias genéricos.",
          "**La teoría es una herramienta de diseño.** BJ Fogg y el Hook Model fueron marcos de decisión, no citas bibliográficas.",
          "**Los primeros 5 minutos definen la retención.** El rediseño del onboarding, no la experiencia central, produjo la mayor mejora en métricas.",
        ],
      },
    },

    contact: {
      label: "Contacto",
      title: "Hablemos",
      body: "Busco roles UX/UI a tiempo completo. Con base en España, disponible en toda Europa y EE. UU.",
      channels: [
        { l: "LinkedIn", u: LINKEDIN, d: "Conecta y escríbeme", external: true },
        { l: "Email", u: `mailto:${EMAIL}`, d: EMAIL, external: false },
      ],
      availabilityLabel: "Disponibilidad",
      availability: [
        { l: "Ubicación", v: "España (UE)" },
        { l: "Tipo", v: "Tiempo completo" },
        { l: "Remoto", v: "Europa y EE. UU." },
        { l: "Presencial", v: "Abierto a reubicación" },
      ],
    },
  },
};
