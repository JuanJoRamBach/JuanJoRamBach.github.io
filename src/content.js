// All user-facing copy, in both languages. Components never hard-code strings.
// In the Spanish copy, industry-standard terms that Spanish-speaking UX teams
// use in English (research, testing, onboarding, wireframes, stakeholders…)
// are deliberately kept in English.

const LINKEDIN =
  "https://www.linkedin.com/in/juanjorambach/";
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
      pulso: "Pulso Case Study — Juan José Ramírez",
      sismico: "Seismic Dashboard — Juan José Ramírez",
      navi: "NAVI — Juan José Ramírez",
      contact: "Contact — Juan José Ramírez",
    },
    nav: [
      { label: "Home", href: "#home" },
      { label: "Projects", href: "#portfolio" },
      { label: "About", href: "#about" },
      { label: "Contact", href: "#contact" },
    ],
    navAria: "Main navigation",
    footer: { rights: "© 2026 Juan José Ramírez Bachmann" },
    cta: {
      label: "Get in touch",
      title: "Looking for a UX/UI Designer?",
      body: "Based in Spain. Available across Europe and the US — remote, hybrid, or on-site.",
      connect: "Connect on LinkedIn",
    },
    readCase: "Read case study",
    readProject: "See the project",
    inProgress: "In progress",
    backToWork: "← Back to projects",
    photoAlt: "Portrait of Juan José Ramírez Bachmann",
    imgPending: "Image coming soon",
    enlarge: "Enlarge",
    close: "Close",
    enlargedView: "Enlarged screenshot",
    summary: { label: "In short", problem: "Problem", role: "My role", did: "What I did", result: "Result" },

    home: {
      greeting: "Hi, I'm Juan José Ramírez.",
      heroLabel: "UX/UI Designer · Spain · Open to Europe & US",
      heroTitle: "I design digital products grounded in research, not guesswork",
      heroBody:
        "Master's in UX Design (Barcelona Technology School) with a software engineering foundation. I've led end-to-end product design — from discovery research through tested prototypes — at companies like **SilverBrain**, and I've since designed and built my own products. Certified in **AI for Designers** (IxDF): I use AI to move faster, not to make the decisions for me.",
      viewWork: "View my work",
      getInTouch: "Get in touch",
      selectedWork: "Selected Projects",
      seeAll: "See all projects →",
      aboutLabel: "About me",
      aboutTitle: "Research-driven designer with an engineering mindset",
      aboutBody:
        "Master's in UX Design (Barcelona Technology School), Bachelor's in Graphic Design, plus software engineering studies. I've done end-to-end product design at SilverBrain and visual strategy at Brandbits, and I now design and build my own products.",
      moreAbout: "More about me →",
      statNumber: "5",
      statYears: "Case studies & products",
      statCurrently: "Certified",
      statCert: "AI for Designers (IxDF)",
    },

    projects: {
      pulso: {
        title: "Pulso",
        subtitle: "Self-initiated · Android app · 2026",
        desc: "A local news app for Spain that shows what's happening near you, ranked by how much it affects you. Designed AI-first and without Figma, with the whole process measured, and built as a real Android app ready for a diary study.",
        descShort: "Local news app ranked by how much each story affects you. Designed AI-first, with the process measured.",
        tags: ["Product Design", "AI-first process", "Mobile", "Privacy"],
        tagsShort: ["Product Design", "AI-first process", "Mobile"],
        metric: "0",
        metricLabel: "facts written by AI",
      },
      sismico: {
        title: "Seismic Activity Dashboard",
        subtitle: "Data visualization · Web app",
        desc: "A live earthquake dashboard for 14 countries, with maps, trends and side-by-side comparison. Both color themes were checked against real contrast math and colorblind simulations.",
        descShort: "Live earthquake data for 14 countries, with accessible light and dark themes.",
        tags: ["Data Visualization", "Accessibility", "Web"],
        tagsShort: ["Data Visualization", "Accessibility", "Web"],
        metric: "14",
        metricLabel: "countries, live",
      },
      navi: {
        title: "NAVI",
        subtitle: "Founder · AI product",
        desc: "An AI companion for small teams that handle client work. I'm designing it so the AI suggests but the product decides, with predictable costs and client data kept safe.",
        descShort: "An AI companion for small teams: the AI suggests, the product decides.",
        tags: ["AI Product Design", "UX Strategy", "Founder"],
        tagsShort: ["AI Product Design", "UX Strategy", "Founder"],
        metric: "Pilot",
        metricLabel: "opening to teams",
        badge: true,
      },
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
        "I've integrated AI into my design workflow — from speeding up research synthesis to generating and stress-testing design variations — and I completed the AI for Designers certification through the Interaction Design Foundation to formalize it. I see AI as a multiplier for UX work, not a replacement: it lets me spend less time on production and more time on the decisions that actually shape user experience. The facts, the evidence and the final call stay with people.",
      ],
      cert: {
        label: "Certified · AI for Designers (IxDF)",
        title: "From designer to director",
        paras: [
          "Finishing the AI for Designers certification changed how I see my role. When AI can produce screens, copy and code in minutes, the designer stops being the one who makes every piece, and becomes more like a director: the one who decides what's worth making, guides the work, and judges if the result is actually good for the people using it.",
          "A director has to understand every part of the production. That's why I think a designer today needs skills in every school of design, research, interaction, visual, content, accessibility, even some code, because each project needs a different mix, and you can't direct well what you don't understand.",
          "It also means there's no single UX process with AI. Every project needs its own. In Pulso, AI made the research so fast that the bottleneck moved to my own decisions; in another project it could be the testing, or the visual craft. The work is to find where the bottleneck lies, and use AI right there.",
        ],
        callout: "**Find the bottleneck, then point AI at it.** That's how AI makes design faster and better, not just faster.",
      },
      educationLabel: "Education",
      education: [
        { s: "Interaction Design Foundation", d: "AI for Designers (certified)", y: "2026" },
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
          d: "Completed the AI for Designers certification (IxDF) and designed and built my own products end to end with AI-assisted workflows: Pulso, a local news app for Android; a live seismic activity dashboard; and NAVI, an AI companion for small teams that I founded and am taking to its first pilot teams.",
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
      body: "End-to-end case studies from research through tested prototypes, plus products I've designed and built myself.",
      keepexSubtitle: "Final Master's · 16 weeks",
      runquestSubtitle: "Behavioral UX · Gamification",
      groupCase: "Case studies",
      groupBuilt: "Built projects",
      groupBuiltBody: "Products I designed and built end to end, from the first idea to a working app.",
    },

    // Shared shape for the newer project pages (rendered by ProjectPage in pages.jsx).
    pulsoPage: {
      summary: {"problem":"News that actually affects you gets lost among everything else.","role":"Solo: research, design and build.","did":"An assumptions register, an AI-first design process measured step by step, and an Android app with consent and usage tracking.","result":"A working app, ready for a one-week diary study with 15 participants."},
      hero: {
        title: "Pulso — Local news that knows what matters to you",
        subtitle: "Self-initiated case study · Android app",
        desc: "A news app for Spain that answers one question: what's happening near you today that affects you? I designed it AI-first and without Figma, measured the whole process, and built it as a real Android app ready for a one-week diary study.",
        meta: [
          { l: "Role", v: "UX Designer & builder" },
          { l: "Team", v: "Solo" },
          { l: "Started", v: "July 2026" },
          { l: "Tools", v: "Claude Code, HTML/CSS/JS" },
        ],
      },
      sections: [
        {
          label: "Challenge",
          title: "News apps tell you everything, except what affects you",
          paras: [
            "Regional and national news in Spain is spread across dozens of sources, and the stories that actually change your day, like a road closure, a weather warning or a decision from your town hall, get lost among everything else.",
            "Someone close to the project argued for \"just a news app\". I pushed back: the focus should be a narrow market, not a narrow feature set. Pulso became a personalised local feed with graded urgency, across three levels: national, autonomous community and municipality.",
          ],
        },
        {
          label: "Process",
          title: "An experiment in designing with AI",
          paras: [
            "I set Pulso up as a deliberate experiment: design AI-first, skip Figma, and instrument the process, tracking time, rework and my own confidence at each step. My master's project KeepeX (16 weeks, 7 research rounds) is the baseline to compare against.",
            "I also chose to skip upfront user research and instead froze a register of 12 risk-rated assumptions. The point wasn't to avoid research, but to measure what skipping it costs later in rework.",
          ],
          callout: { icon: "📊", text: "**Day-one finding:** product research took 37 minutes, while deciding how to work took 54. AI made the research so fast that my own decisions about the process became the bottleneck." },
        },
        {
          label: "Design",
          title: "What the app does",
          features: [
            { title: "Three levels of news", desc: "National, Andalucía and \"Near me\" tabs, with the distance to each story so you know at a glance what's close." },
            { title: "Graded urgency", desc: "Four levels, from ambient news to life-safety. Urgent things interrupt you; everything else waits quietly." },
            { title: "Official alerts only", desc: "Emergency and weather warnings come only from official sources, never from news articles, and show the official instruction word for word." },
            { title: "Read at the source", desc: "Pulso links to the original article instead of rewriting it, so journalists keep their audience and readers get the real story." },
            { title: "Privacy by design", desc: "A clear consent screen explains what is recorded and what never is. Location is only used while the app is open." },
          ],
          callout: { icon: "💡", text: "**Design principle: facts are copied, never composed.** AI can help sort and rank stories, but it never writes the facts." },
        },
        {
          type: "gallery",
          label: "Final Design",
          title: "Key screens",
          phone: true,
          screens: [
            { label: "Feed", title: "What's happening near you", desc: "Stories near you, with the place, distance and source on every item.", src: "images/pulso-feed.jpg", alt: "Pulso news feed showing local stories from Estepona with their distance and source" },
            { label: "Alert", title: "Official emergency alert", desc: "A life-safety alert with the official instruction and a link to the official source.", src: "images/pulso-alert.jpg", alt: "Pulso emergency alert for a forest fire with distance, status, source and the official instruction" },
            { label: "Consent", title: "Consent before anything", desc: "What the study records, what it never does, and the participant's rights.", src: "images/pulso-consent.jpg", alt: "Pulso consent screen listing what is recorded, what is not, and the participant's rights" },
          ],
        },
        {
          label: "Field study",
          title: "Built to be tested with real people",
          paras: [
            "Pulso runs as a real Android app, so I could test it in people's daily lives, not just in a lab. It was built for a one-week diary study with 15 participants, each with an anonymous code instead of a name.",
            "Usage is measured with consent: which sections people open, how long they read, and how they respond to alerts. That way the study answers what people actually do, not only what they say they do.",
          ],
        },
      ],
      ai: {
        label: "Designing with AI",
        title: "What I learned about UX design with AI",
        points: [
          "**AI speeds up the work, not the judgment.** When research takes minutes, deciding what's worth doing becomes the hard part. Faster isn't automatically better; it just moves the bottleneck to the human decisions.",
          "**Design around what AI gets wrong.** AI can make things up, and you can't fully prevent it. So instead of hoping it won't, I designed Pulso so it never has to state a fact: it helps sort the news, but every fact is copied from a real source.",
          "**Skipping research is a choice you should measure.** When AI makes building cheap, it's tempting to skip talking to users. I did it on purpose, with a written list of assumptions, so I could measure the cost instead of pretending there isn't one.",
        ],
      },
    },

    sismicoPage: {
      summary: {"problem":"Public earthquake data is hard for regular people to read.","role":"Solo: design and build.","did":"Maps, trends and side-by-side country comparison, with color themes verified for contrast and color blindness.","result":"A live dashboard covering 14 countries."},
      hero: {
        title: "Seismic Activity — A live earthquake dashboard",
        subtitle: "Data visualization · Web app",
        desc: "A real-time dashboard that turns live earthquake data into maps and trends anyone can read. It covers Chile, Spain and 12 more countries, and lets you compare up to three side by side.",
        meta: [
          { l: "Role", v: "UX/UI Designer & builder" },
          { l: "Team", v: "Solo" },
          { l: "Year", v: "2026" },
          { l: "Data", v: "USGS, geoBoundaries" },
        ],
      },
      stats: [
        { n: "14", label: "Countries" },
        { n: "3", label: "Compared at once" },
        { n: "2", label: "Accessible themes" },
      ],
      sections: [
        {
          label: "Challenge",
          title: "Earthquake data is public, but not readable",
          paras: [
            "Seismic data is published openly, but in tables and formats made for specialists. I wanted something a regular person in Chile or Spain could open and understand in seconds: where it's shaking, how strong, and whether it's unusual.",
          ],
        },
        {
          label: "Features",
          title: "What the dashboard does",
          features: [
            { title: "Three ways to see the map", desc: "Epicenters (one bubble per quake, sized by magnitude), a density view for hotspots, and a view by region." },
            { title: "Faults and notable quakes", desc: "Optional tectonic plate boundaries and local faults, plus a panel of recent significant earthquakes." },
            { title: "Time and depth", desc: "Magnitude over time and depth and severity analysis, for the last day, week, month or year." },
            { title: "Compare countries", desc: "Up to three countries side by side, each with its own color." },
            { title: "Honest magnitudes", desc: "Values are shown exactly as the official source reports them, with a short note on why \"Richter\" isn't always the right word." },
            { title: "Speaks your language", desc: "Spanish or English based on your browser, and light or dark based on your system, with a manual switch." },
          ],
        },
        {
          type: "gallery",
          label: "Final Design",
          title: "Key screens",
          screens: [
            { label: "Overview", title: "Period summary", desc: "Events, maximum and average magnitude, and \"felt it\" reports per country.", src: "images/sismico-dark.jpg", alt: "Seismic dashboard in dark theme showing the period summary for Chile and Spain" },
            { label: "Map", title: "Epicenters", desc: "Each earthquake as its own bubble, sized by magnitude.", src: "images/sismico-map.jpg", alt: "Seismic map of Chile and Spain with earthquake epicenters as bubbles sized by magnitude" },
            { label: "Density", title: "Density view", desc: "A soft glow per quake that adds up where activity concentrates.", src: "images/sismico-density.jpg", alt: "Density view of seismic activity in Chile and Spain in the light theme" },
            { label: "Light theme", title: "Day mode", desc: "The light theme, built to the same contrast standards as the dark one.", src: "images/sismico-light.jpg", alt: "Seismic dashboard in the light theme showing the period summary" },
          ],
        },
        {
          label: "Accessibility",
          title: "Colors checked with math, not by eye",
          paras: [
            "Both themes were built against real WCAG contrast ratios and simulated for the most common types of color blindness. A third theme was removed because it didn't earn its place.",
          ],
        },
      ],
      ai: {
        label: "Designing with AI",
        title: "What I learned about UX design with AI",
        points: [
          "**AI lets me verify instead of guess.** I used it to check every color pair against accessibility standards and colorblind simulations. AI did the math; I decided what stayed and what went.",
          "**Truthful data is a design decision.** AI can generate a chart in seconds, but it won't ask whether the chart is honest. Showing magnitudes exactly as the source reports them was my call, not the tool's.",
          "**My eyes are still the final test.** AI builds fast, so I tested every change visually myself. Something can be technically correct and still feel wrong to a person.",
        ],
      },
      links: {
        label: "Live demo",
        title: "See it for yourself",
        items: [
          { label: "Try it live →", href: "https://actividad-sismica-dashboard.drashkygolbez.workers.dev/", primary: true },
          { label: "View on GitHub", href: "https://github.com/JuanJoRamBach/actividad-sismica-dashboard" },
        ],
      },
    },

    naviPage: {
      summary: {"problem":"AI coworkers are built for large companies, not small teams that handle client work.","role":"Founder: product, UX and design.","did":"Chat, research, visual workflows, a building space and safe routing across several AI services.","result":"Opening to its first pilot teams."},
      hero: {
        title: "NAVI — An AI companion for real work",
        subtitle: "Founder · AI product in progress",
        desc: "Big AI companies are launching AI \"coworkers\" built for large companies. NAVI is for small teams that handle client work and need the opposite: control, predictable costs, and somewhere safe to put client data.",
        meta: [
          { l: "Role", v: "Founder, UX & product" },
          { l: "Team", v: "With Juan Pablo Ramírez (code review)" },
          { l: "Status", v: "Opening to pilot teams" },
          { l: "Started", v: "2026" },
        ],
      },
      sections: [
        {
          label: "Why it exists",
          title: "I wanted to understand AI from the inside",
          paras: [
            "Honestly, NAVI started because I wanted to learn how AI works on the inside, not only how to use it. I wanted to understand harnesses, the software around a model that decides what it sees, what it's allowed to do and how much it spends, and the best way I know to learn something is to build it.",
            "I also wanted to learn how to save tokens. As models get better, using them gets more expensive, and we're already seeing token prices go up. If AI is going to be part of how teams work every day, it has to be designed to spend only what each job needs, and that's a design problem as much as a technical one.",
            "What started as a way to learn turned into a product: the more I understood how the pieces work, the clearer it got what small teams were missing.",
          ],
        },
        {
          label: "Problem",
          title: "AI coworkers are built for someone else",
          paras: [
            "Each of the big AI coworkers runs only on its own company's models, decides on its own what to do and what to spend, and comes inside expensive enterprise plans. Small teams that handle client work need the opposite.",
          ],
        },
        {
          label: "Product",
          title: "What NAVI does",
          features: [
            { title: "Talk to it like a colleague", desc: "Quick questions get quick answers right in the chat, with modes for research and brainstorming." },
            { title: "Bigger work becomes a job", desc: "NAVI writes a short brief of what you asked for, you check it, and the work happens in its own focused space." },
            { title: "Research you can hand over", desc: "Research that plans first and delivers a finished report, with every claim traced to its source." },
            { title: "A building space", desc: "Describe a landing page or small app and see it built, with a live preview and undo for every change." },
            { title: "Workflows that run on their own", desc: "Routine work turned into visual workflows, like \"every Monday, gather these numbers and email me the summary\". No code needed." },
            { title: "Connected to your tools", desc: "Works with GitHub, Gmail, Google Calendar and Drive, so it can act where your team already works." },
            { title: "Never stuck with one AI supplier", desc: "If one AI service fails mid-task, the work moves to another and finishes, and you're told it switched." },
            { title: "Safe for client work", desc: "AI services that could keep or train on your data are never picked automatically, and company knowledge changes only with a second person's review." },
          ],
        },
        {
          type: "gallery",
          label: "Product",
          title: "A look at NAVI",
          screens: [
            { label: "Overview", title: "Your AI companion for real work", desc: "NAVI's chat, showing which AI answered and what it cost.", src: "images/navi-hero.jpg", alt: "NAVI landing page hero with a chat example that shows an automatic switch to a backup AI service" },
            { label: "Agent Work", title: "Visual workflows", desc: "Routine work built as steps on a canvas, like search, summarize and send, run by hand or on a schedule.", src: "images/navi-workflows.jpg", alt: "NAVI workflow canvas with three connected steps: search the web, generate with AI, and send a message, plus a run history" },
            { label: "Connections", title: "Connected to your tools", desc: "Sign in to GitHub, Gmail, Google Calendar and Drive so NAVI can work where your team already does.", src: "images/navi-connections.jpg", alt: "NAVI connections window showing GitHub and Gmail connected, and Google Calendar, Drive, Jira, Slack and Notion available" },
            { label: "Chat", title: "Chat with modes and branches", desc: "Normal, research and brainstorm modes, with branch chats to explore an idea without losing the main thread.", src: "images/navi-chat.jpg", alt: "NAVI chat screen with Normal Chat, Research and Brainstorm modes and a sidebar of branch chats" },
            { label: "Dev Slate", title: "A space to build", desc: "Ask for a change and see it in the live preview, with every change listed and undoable.", src: "images/navi-devslate.jpg", alt: "NAVI Dev Slate with a chat on the left and a live preview panel on the right" },
            { label: "Agents", title: "Reusable agents and a schedule", desc: "Save agents for repeated tasks and see what's planned on a calendar.", src: "images/navi-agents.jpg", alt: "NAVI agents panel with an empty state and a November calendar for scheduled work" },
          ],
        },
      ],
      ai: {
        label: "Designing with AI",
        title: "What I learned designing an AI product",
        points: [
          "**The model suggests, the product decides.** Anything that can be decided by clear rules shouldn't be left to an AI's guess. That's where predictability and trust come from.",
          "**Cost and waiting are part of the experience.** People feel slow answers and surprise bills. NAVI starts with the smallest model that can do the job and shows what each answer cost.",
          "**Laws are design constraints.** In Europe, client data can't just go to any AI service. Treating privacy rules as a starting point, not an obstacle, shaped the product from day one.",
          "**AI should support people's thinking, not replace it.** Important changes always get a human's approval, and the work stays the team's own.",
        ],
      },
      links: {
        label: "Learn more",
        title: "See where NAVI is going",
        items: [{ label: "Visit the NAVI page →", href: "https://juanjorambach.github.io/navi-landing/", primary: true }],
      },
    },

    keepex: {
      heroTitle: "KeepeX — Rental platform for household robots",
      heroSubtitle: "Master's Final Project · Barcelona Technology School",
      summary: {"problem":"Household robots are too expensive for most people to own.","role":"UX Designer in a team of 2, over 16 weeks.","did":"7 research rounds across 4 continents and 3 languages, information architecture, UI design and usability testing.","result":"Research pivoted the business model from purchase to rental."},
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
      scrollHint: "↕ Scroll inside the frame to see the full page",
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
          { icon: "📊", text: "**Critical issue:** 4 of 6 participants confused \"Plans\" with \"Entity types.\" This was an information architecture problem, not visual — the fix was rewriting UX copy and restructuring the pricing page to lead with tasks, not tiers." },
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
      summary: {"problem":"70% of beginner runners quit within two weeks.","role":"UX Designer in a team of 5, over 6 weeks.","did":"10 user interviews, a 54-person survey, behavioral-science frameworks and 3 rounds of usability testing with 15 participants.","result":"Onboarding completion rose from 65% to 92%."},
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
        { n: "54", label: "Survey responses" },
      ],
      problem: {
        label: "Problem",
        title: "7 in 10 beginners quit within two weeks",
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
        title: "A 54-person survey confirmed the interviews",
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
      pulso: "Caso de estudio Pulso — Juan José Ramírez",
      sismico: "Panel de actividad sísmica — Juan José Ramírez",
      navi: "NAVI — Juan José Ramírez",
      contact: "Contacto — Juan José Ramírez",
    },
    nav: [
      { label: "Inicio", href: "#home" },
      { label: "Proyectos", href: "#portfolio" },
      { label: "Sobre mí", href: "#about" },
      { label: "Contacto", href: "#contact" },
    ],
    navAria: "Navegación principal",
    footer: { rights: "© 2026 Juan José Ramírez Bachmann" },
    cta: {
      label: "Contacto",
      title: "¿Buscas un diseñador UX/UI?",
      body: "Con base en España. Disponible en toda Europa y EE. UU. — en remoto, híbrido o presencial.",
      connect: "Conecta en LinkedIn",
    },
    readCase: "Leer caso de estudio",
    readProject: "Ver el proyecto",
    inProgress: "En desarrollo",
    backToWork: "← Volver a proyectos",
    photoAlt: "Retrato de Juan José Ramírez Bachmann",
    imgPending: "Imagen próximamente",
    enlarge: "Ampliar",
    close: "Cerrar",
    enlargedView: "Captura ampliada",
    summary: { label: "En resumen", problem: "Problema", role: "Mi rol", did: "Qué hice", result: "Resultado" },

    home: {
      greeting: "Hola, soy Juan José Ramírez.",
      heroLabel: "Diseñador UX/UI · España · Abierto a Europa y EE. UU.",
      heroTitle: "Diseño productos digitales basados en investigación, no en suposiciones",
      heroBody:
        "Máster en UX Design (Barcelona Technology School) con base en ingeniería de software. He liderado diseño de producto end-to-end — desde el research de descubrimiento hasta prototipos testados — en empresas como **SilverBrain**, y desde entonces he diseñado y construido mis propios productos. Certificado en **AI for Designers** (IxDF): uso la IA para avanzar más rápido, no para que decida por mí.",
      viewWork: "Ver mi trabajo",
      getInTouch: "Contáctame",
      selectedWork: "Proyectos seleccionados",
      seeAll: "Ver todos los proyectos →",
      aboutLabel: "Sobre mí",
      aboutTitle: "Diseñador guiado por research con mentalidad de ingeniería",
      aboutBody:
        "Máster en UX Design (Barcelona Technology School), Grado en Diseño Gráfico y estudios de ingeniería de software. He hecho diseño de producto end-to-end en SilverBrain y estrategia visual en Brandbits, y ahora diseño y construyo mis propios productos.",
      moreAbout: "Más sobre mí →",
      statNumber: "5",
      statYears: "Casos y productos",
      statCurrently: "Certificado",
      statCert: "AI for Designers (IxDF)",
    },

    projects: {
      pulso: {
        title: "Pulso",
        subtitle: "Proyecto propio · App Android · 2026",
        desc: "Una app de noticias locales para España que te muestra lo que pasa cerca de ti, ordenado según cuánto te afecta. Diseñada con IA desde el inicio y sin Figma, con todo el proceso medido, y construida como una app Android real lista para un diary study.",
        descShort: "App de noticias locales ordenadas según cuánto te afecta cada historia. Diseñada con IA desde el inicio, con el proceso medido.",
        tags: ["Diseño de Producto", "Proceso con IA", "Móvil", "Privacidad"],
        tagsShort: ["Diseño de Producto", "Proceso con IA", "Móvil"],
        metric: "0",
        metricLabel: "hechos redactados por IA",
      },
      sismico: {
        title: "Panel de actividad sísmica",
        subtitle: "Visualización de datos · App web",
        desc: "Un panel de terremotos en tiempo real para 14 países, con mapas, tendencias y comparación lado a lado. Los dos temas de color se verificaron con cálculos reales de contraste y simulaciones de daltonismo.",
        descShort: "Datos sísmicos en vivo de 14 países, con temas claro y oscuro accesibles.",
        tags: ["Visualización de datos", "Accesibilidad", "Web"],
        tagsShort: ["Visualización de datos", "Accesibilidad", "Web"],
        metric: "14",
        metricLabel: "países, en vivo",
      },
      navi: {
        title: "NAVI",
        subtitle: "Fundador · Producto de IA",
        desc: "Un compañero de IA para equipos pequeños que trabajan con clientes. Lo diseño para que la IA proponga y el producto decida, con costes predecibles y los datos de clientes a salvo.",
        descShort: "Un compañero de IA para equipos pequeños: la IA propone, el producto decide.",
        tags: ["Diseño de producto con IA", "Estrategia UX", "Fundador"],
        tagsShort: ["Diseño de producto con IA", "Estrategia UX", "Fundador"],
        metric: "Piloto",
        metricLabel: "abriéndose a equipos",
        badge: true,
      },
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
        "He integrado la IA en mi flujo de diseño — desde acelerar la síntesis de research hasta generar y poner a prueba variaciones de diseño — y completé la certificación AI for Designers de la Interaction Design Foundation para formalizarlo. Veo la IA como un multiplicador del trabajo de UX, no un reemplazo: me permite dedicar menos tiempo a producción y más a las decisiones que realmente definen la experiencia de usuario. Los hechos, la evidencia y la última palabra siguen siendo de las personas.",
      ],
      cert: {
        label: "Certificado · AI for Designers (IxDF)",
        title: "De diseñador a director",
        paras: [
          "Terminar la certificación AI for Designers cambió cómo veo mi rol. Cuando la IA puede producir pantallas, textos y código en minutos, el diseñador deja de ser quien hace cada pieza, y pasa a ser más como un director: quien decide qué vale la pena hacer, guía el trabajo y juzga si el resultado es realmente bueno para las personas que lo usan.",
          "Un director tiene que entender cada parte de la producción. Por eso creo que hoy un diseñador necesita habilidades en cada escuela del diseño, research, interacción, visual, contenido, accesibilidad, incluso algo de código, porque cada proyecto necesita una mezcla distinta, y no se puede dirigir bien lo que no se entiende.",
          "También significa que no hay un solo proceso UX con IA. Cada proyecto necesita el suyo. En Pulso, la IA hizo el research tan rápido que el cuello de botella pasó a mis propias decisiones; en otro proyecto podría ser el testing, o el oficio visual. El trabajo es encontrar dónde está el cuello de botella, y usar la IA justo ahí.",
        ],
        callout: "**Encuentra el cuello de botella y apunta la IA hacia él.** Así la IA hace el diseño más rápido y mejor, no solo más rápido.",
      },
      educationLabel: "Educación",
      education: [
        { s: "Interaction Design Foundation", d: "AI for Designers (certificado)", y: "2026" },
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
          d: "Completé la certificación AI for Designers (IxDF) y diseñé y construí mis propios productos de principio a fin con flujos de trabajo asistidos por IA: Pulso, una app Android de noticias locales; un panel de actividad sísmica en tiempo real; y NAVI, un compañero de IA para equipos pequeños que fundé y que estoy llevando a sus primeros equipos piloto.",
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
      body: "Casos de estudio end-to-end, desde el research hasta prototipos testados, y productos que he diseñado y construido yo mismo.",
      keepexSubtitle: "Proyecto Final de Máster · 16 semanas",
      runquestSubtitle: "UX Conductual · Gamificación",
      groupCase: "Casos de estudio",
      groupBuilt: "Proyectos construidos",
      groupBuiltBody: "Productos que diseñé y construí de principio a fin, desde la primera idea hasta una app que funciona.",
    },

    pulsoPage: {
      summary: {"problem":"Las noticias que de verdad te afectan se pierden entre todo lo demás.","role":"En solitario: research, diseño y desarrollo.","did":"Un registro de supuestos, un proceso de diseño con IA medido paso a paso y una app Android con consentimiento y medición de uso.","result":"Una app que funciona, lista para un diary study de una semana con 15 participantes."},
      hero: {
        title: "Pulso — Noticias locales que saben qué te importa",
        subtitle: "Caso de estudio propio · App Android",
        desc: "Una app de noticias para España que responde a una pregunta: ¿qué está pasando hoy cerca de ti que te afecte? La diseñé con IA desde el inicio y sin Figma, medí todo el proceso y la construí como una app Android real, lista para un diary study de una semana.",
        meta: [
          { l: "Rol", v: "UX Designer y desarrollo" },
          { l: "Equipo", v: "En solitario" },
          { l: "Inicio", v: "Julio 2026" },
          { l: "Herramientas", v: "Claude Code, HTML/CSS/JS" },
        ],
      },
      sections: [
        {
          label: "Desafío",
          title: "Las apps de noticias te lo cuentan todo, menos lo que te afecta",
          paras: [
            "Las noticias regionales y nacionales en España están repartidas en decenas de medios, y las historias que de verdad cambian tu día, como un corte de carretera, un aviso meteorológico o una decisión de tu ayuntamiento, se pierden entre todo lo demás.",
            "Alguien cercano al proyecto defendía hacer \"solo una app de noticias\". No estuve de acuerdo: el foco debía ser un mercado acotado, no un conjunto de funciones acotado. Pulso se convirtió en un feed local personalizado con urgencia graduada, en tres niveles: nacional, comunidad autónoma y municipio.",
          ],
        },
        {
          label: "Proceso",
          title: "Un experimento de diseño con IA",
          paras: [
            "Planteé Pulso como un experimento deliberado: diseñar con IA desde el inicio, sin Figma, e instrumentar el proceso, midiendo tiempo, retrabajo y mi propia confianza en cada paso. Mi proyecto de máster KeepeX (16 semanas, 7 rondas de research) es la referencia para comparar.",
            "También decidí saltarme el research inicial con usuarios y, en su lugar, congelé un registro de 12 supuestos clasificados por riesgo. La idea no era evitar el research, sino medir cuánto cuesta después en retrabajo saltárselo.",
          ],
          callout: { icon: "📊", text: "**Hallazgo del primer día:** el research de producto llevó 37 minutos, mientras que decidir cómo trabajar llevó 54. La IA hizo el research tan rápido que mis propias decisiones sobre el proceso se convirtieron en el cuello de botella." },
        },
        {
          label: "Diseño",
          title: "Qué hace la app",
          features: [
            { title: "Tres niveles de noticias", desc: "Pestañas Nacional, Andalucía y \"Cerca de mí\", con la distancia a cada historia para ver de un vistazo qué está cerca." },
            { title: "Urgencia graduada", desc: "Cuatro niveles, desde noticias de ambiente hasta riesgo para la vida. Lo urgente te interrumpe; lo demás espera en silencio." },
            { title: "Solo avisos oficiales", desc: "Las alertas de emergencia y meteorológicas vienen solo de fuentes oficiales, nunca de noticias, y muestran la instrucción oficial palabra por palabra." },
            { title: "Leer en la fuente", desc: "Pulso enlaza al artículo original en vez de reescribirlo: los periodistas conservan su audiencia y el lector recibe la historia real." },
            { title: "Privacidad desde el diseño", desc: "Una pantalla de consentimiento clara explica qué se registra y qué nunca. La ubicación solo se usa con la app abierta." },
          ],
          callout: { icon: "💡", text: "**Principio de diseño: los hechos se copian, nunca se redactan.** La IA puede ayudar a ordenar y priorizar historias, pero nunca escribe los hechos." },
        },
        {
          type: "gallery",
          label: "Diseño final",
          title: "Pantallas clave",
          phone: true,
          screens: [
            { label: "Feed", title: "Lo que pasa cerca de ti", desc: "Historias cercanas, con el lugar, la distancia y la fuente en cada una.", src: "images/pulso-feed.jpg", alt: "Feed de noticias de Pulso con historias locales de Estepona, su distancia y su fuente" },
            { label: "Alerta", title: "Alerta oficial de emergencia", desc: "Una alerta de riesgo para la vida con la instrucción oficial y un enlace a la fuente oficial.", src: "images/pulso-alert.jpg", alt: "Alerta de emergencia de Pulso por un incendio forestal con distancia, estado, fuente e instrucción oficial" },
            { label: "Consentimiento", title: "Consentimiento antes que nada", desc: "Qué registra el estudio, qué no hace nunca y los derechos de cada participante.", src: "images/pulso-consent.jpg", alt: "Pantalla de consentimiento de Pulso con lo que se registra, lo que no y los derechos del participante" },
          ],
        },
        {
          label: "Estudio de campo",
          title: "Construida para probarse con personas reales",
          paras: [
            "Pulso funciona como una app Android real, para poder probarla en el día a día de las personas y no solo en un laboratorio. Está construida para un diary study de una semana con 15 participantes, cada uno con un código anónimo en lugar de su nombre.",
            "El uso se mide con consentimiento: qué secciones abre la gente, cuánto tiempo lee y cómo responde a las alertas. Así el estudio responde a lo que las personas hacen de verdad, no solo a lo que dicen que hacen.",
          ],
        },
      ],
      ai: {
        label: "Diseñar con IA",
        title: "Lo que aprendí sobre diseño UX con IA",
        points: [
          "**La IA acelera el trabajo, no el criterio.** Cuando el research lleva minutos, decidir qué merece la pena hacer se vuelve lo difícil. Más rápido no es automáticamente mejor; solo mueve el cuello de botella a las decisiones humanas.",
          "**Diseña alrededor de lo que la IA hace mal.** La IA puede inventar cosas, y no se puede evitar del todo. Así que, en vez de esperar que no lo haga, diseñé Pulso para que nunca tenga que afirmar un hecho: ayuda a ordenar las noticias, pero cada hecho se copia de una fuente real.",
          "**Saltarse el research es una decisión que hay que medir.** Cuando la IA abarata construir, es tentador no hablar con usuarios. Lo hice a propósito, con una lista escrita de supuestos, para medir el coste en vez de fingir que no lo hay.",
        ],
      },
    },

    sismicoPage: {
      summary: {"problem":"Los datos sísmicos públicos son difíciles de leer para cualquier persona.","role":"En solitario: diseño y desarrollo.","did":"Mapas, tendencias y comparación de países lado a lado, con temas de color verificados para contraste y daltonismo.","result":"Un panel en vivo que cubre 14 países."},
      hero: {
        title: "Actividad sísmica — Un panel de terremotos en vivo",
        subtitle: "Visualización de datos · App web",
        desc: "Un panel en tiempo real que convierte datos sísmicos en mapas y tendencias que cualquiera puede leer. Cubre Chile, España y otros 12 países, y permite comparar hasta tres lado a lado.",
        meta: [
          { l: "Rol", v: "UX/UI Designer y desarrollo" },
          { l: "Equipo", v: "En solitario" },
          { l: "Año", v: "2026" },
          { l: "Datos", v: "USGS, geoBoundaries" },
        ],
      },
      stats: [
        { n: "14", label: "Países" },
        { n: "3", label: "Comparados a la vez" },
        { n: "2", label: "Temas accesibles" },
      ],
      sections: [
        {
          label: "Desafío",
          title: "Los datos sísmicos son públicos, pero no legibles",
          paras: [
            "Los datos sísmicos se publican abiertamente, pero en tablas y formatos pensados para especialistas. Quería algo que cualquier persona en Chile o España pudiera abrir y entender en segundos: dónde tiembla, con qué fuerza y si es algo inusual.",
          ],
        },
        {
          label: "Funciones",
          title: "Qué hace el panel",
          features: [
            { title: "Tres formas de ver el mapa", desc: "Epicentros (una burbuja por sismo, según su magnitud), una vista de densidad para zonas activas y una vista por regiones." },
            { title: "Fallas y sismos destacados", desc: "Límites de placas tectónicas y fallas locales opcionales, y un panel de terremotos recientes significativos." },
            { title: "Tiempo y profundidad", desc: "Magnitud a lo largo del tiempo y análisis de profundidad y severidad, para el último día, semana, mes o año." },
            { title: "Comparar países", desc: "Hasta tres países lado a lado, cada uno con su propio color." },
            { title: "Magnitudes honestas", desc: "Los valores se muestran tal como los reporta la fuente oficial, con una nota breve sobre por qué \"Richter\" no siempre es la palabra correcta." },
            { title: "Habla tu idioma", desc: "Español o inglés según tu navegador, y tema claro u oscuro según tu sistema, con un interruptor manual." },
          ],
        },
        {
          type: "gallery",
          label: "Diseño final",
          title: "Pantallas clave",
          screens: [
            { label: "Resumen", title: "Resumen del periodo", desc: "Eventos, magnitud máxima y media, y reportes de \"lo sentí\" por país.", src: "images/sismico-dark.jpg", alt: "Panel sísmico en tema oscuro con el resumen del periodo para Chile y España" },
            { label: "Mapa", title: "Epicentros", desc: "Cada terremoto como su propia burbuja, según su magnitud.", src: "images/sismico-map.jpg", alt: "Mapa sísmico de Chile y España con los epicentros como burbujas según su magnitud" },
            { label: "Densidad", title: "Vista de densidad", desc: "Un brillo suave por sismo que se acumula donde se concentra la actividad.", src: "images/sismico-density.jpg", alt: "Vista de densidad de la actividad sísmica en Chile y España en el tema claro" },
            { label: "Tema claro", title: "Modo día", desc: "El tema claro, construido con los mismos estándares de contraste que el oscuro.", src: "images/sismico-light.jpg", alt: "Panel sísmico en el tema claro con el resumen del periodo" },
          ],
        },
        {
          label: "Accesibilidad",
          title: "Colores verificados con cálculos, no a ojo",
          paras: [
            "Los dos temas se construyeron con ratios de contraste WCAG reales y se simularon para los tipos de daltonismo más comunes. Un tercer tema se eliminó porque no se ganaba su lugar.",
          ],
        },
      ],
      ai: {
        label: "Diseñar con IA",
        title: "Lo que aprendí sobre diseño UX con IA",
        points: [
          "**La IA me permite verificar en vez de suponer.** La usé para comprobar cada par de colores con estándares de accesibilidad y simulaciones de daltonismo. La IA hizo los cálculos; yo decidí qué se quedaba y qué no.",
          "**Los datos veraces son una decisión de diseño.** La IA puede generar un gráfico en segundos, pero no se pregunta si es honesto. Mostrar las magnitudes tal como las reporta la fuente fue decisión mía, no de la herramienta.",
          "**Mis ojos siguen siendo la prueba final.** La IA construye rápido, así que probé cada cambio visualmente yo mismo. Algo puede ser técnicamente correcto y aun así sentirse mal para una persona.",
        ],
      },
      links: {
        label: "Demo en vivo",
        title: "Míralo tú mismo",
        items: [
          { label: "Pruébalo en vivo →", href: "https://actividad-sismica-dashboard.drashkygolbez.workers.dev/", primary: true },
          { label: "Ver en GitHub", href: "https://github.com/JuanJoRamBach/actividad-sismica-dashboard" },
        ],
      },
    },

    naviPage: {
      summary: {"problem":"Los compañeros de IA están hechos para grandes empresas, no para equipos pequeños que trabajan con clientes.","role":"Fundador: producto, UX y diseño.","did":"Chat, research, flujos visuales, un espacio para construir y enrutamiento seguro entre varios servicios de IA.","result":"Abriéndose a sus primeros equipos piloto."},
      hero: {
        title: "NAVI — Un compañero de IA para el trabajo real",
        subtitle: "Fundador · Producto de IA en desarrollo",
        desc: "Las grandes empresas de IA están lanzando \"compañeros de trabajo\" de IA pensados para grandes empresas. NAVI es para equipos pequeños que trabajan con clientes y necesitan lo contrario: control, costes predecibles y un lugar seguro para los datos de sus clientes.",
        meta: [
          { l: "Rol", v: "Fundador, UX y producto" },
          { l: "Equipo", v: "Con Juan Pablo Ramírez (revisión de código)" },
          { l: "Estado", v: "Abriéndose a equipos piloto" },
          { l: "Inicio", v: "2026" },
        ],
      },
      sections: [
        {
          label: "Por qué existe",
          title: "Quería entender la IA por dentro",
          paras: [
            "Siendo honesto, NAVI nació porque quería aprender cómo funciona la IA por dentro, no solo cómo usarla. Quería entender los harnesses, el software que rodea a un modelo y decide qué ve, qué puede hacer y cuánto gasta, y la mejor forma que conozco de aprender algo es construirlo.",
            "También quería aprender a ahorrar tokens. A medida que los modelos mejoran, usarlos sale más caro, y ya estamos viendo cómo suben los precios de los tokens. Si la IA va a ser parte del trabajo diario de los equipos, tiene que estar diseñada para gastar solo lo que cada tarea necesita, y eso es un problema de diseño tanto como técnico.",
            "Lo que empezó como una forma de aprender se convirtió en un producto: mientras más entendía cómo funcionan las piezas, más claro veía lo que les faltaba a los equipos pequeños.",
          ],
        },
        {
          label: "Problema",
          title: "Los compañeros de IA están hechos para otros",
          paras: [
            "Cada uno de los grandes compañeros de IA funciona solo con los modelos de su propia empresa, decide por su cuenta qué hacer y cuánto gastar, y viene dentro de planes empresariales caros. Los equipos pequeños que trabajan con clientes necesitan lo contrario.",
          ],
        },
        {
          label: "Producto",
          title: "Qué hace NAVI",
          features: [
            { title: "Háblale como a un colega", desc: "Las preguntas rápidas tienen respuestas rápidas en el chat, con modos para investigar y hacer brainstorming." },
            { title: "El trabajo grande se vuelve una tarea", desc: "NAVI escribe un breve resumen de lo que pediste, tú lo revisas y el trabajo se hace en su propio espacio enfocado." },
            { title: "Research que puedes entregar", desc: "Investigaciones que primero planifican y entregan un informe terminado, con cada afirmación vinculada a su fuente." },
            { title: "Un espacio para construir", desc: "Describe una landing o una app pequeña y mírala construirse, con vista previa en vivo y deshacer en cada cambio." },
            { title: "Flujos que funcionan solos", desc: "El trabajo rutinario se convierte en flujos visuales, como \"cada lunes, reúne estos números y envíame el resumen por email\". Sin código." },
            { title: "Conectado a tus herramientas", desc: "Funciona con GitHub, Gmail, Google Calendar y Drive, para actuar donde tu equipo ya trabaja." },
            { title: "Nunca atado a un solo proveedor de IA", desc: "Si un servicio de IA falla a mitad de una tarea, el trabajo pasa a otro y se termina, y se te avisa del cambio." },
            { title: "Seguro para trabajo con clientes", desc: "Los servicios de IA que podrían guardar o entrenar con tus datos nunca se eligen automáticamente, y el conocimiento de la empresa solo cambia con la revisión de una segunda persona." },
          ],
        },
        {
          type: "gallery",
          label: "Producto",
          title: "Un vistazo a NAVI",
          screens: [
            { label: "Resumen", title: "Tu compañero de IA para el trabajo real", desc: "El chat de NAVI, mostrando qué IA respondió y cuánto costó.", src: "images/navi-hero.jpg", alt: "Portada de la página de NAVI con un ejemplo de chat que muestra un cambio automático a un servicio de IA de respaldo" },
            { label: "Agent Work", title: "Flujos de trabajo visuales", desc: "El trabajo rutinario se arma como pasos en un lienzo, como buscar, resumir y enviar, y se ejecuta a mano o programado.", src: "images/navi-workflows.jpg", alt: "Lienzo de flujos de NAVI con tres pasos conectados: buscar en la web, generar con IA y enviar un mensaje, con historial de ejecuciones" },
            { label: "Conexiones", title: "Conectado a tus herramientas", desc: "Inicia sesión en GitHub, Gmail, Google Calendar y Drive para que NAVI trabaje donde ya trabaja tu equipo.", src: "images/navi-connections.jpg", alt: "Ventana de conexiones de NAVI con GitHub y Gmail conectados, y Google Calendar, Drive, Jira, Slack y Notion disponibles" },
            { label: "Chat", title: "Chat con modos y ramas", desc: "Modos normal, research y brainstorming, con chats en rama para explorar una idea sin perder el hilo principal.", src: "images/navi-chat.jpg", alt: "Pantalla de chat de NAVI con los modos Normal Chat, Research y Brainstorm y una barra lateral de chats en rama" },
            { label: "Dev Slate", title: "Un espacio para construir", desc: "Pide un cambio y míralo en la vista previa en vivo, con cada cambio listado y reversible.", src: "images/navi-devslate.jpg", alt: "Dev Slate de NAVI con un chat a la izquierda y un panel de vista previa en vivo a la derecha" },
            { label: "Agentes", title: "Agentes reutilizables y agenda", desc: "Guarda agentes para tareas repetidas y ve lo planificado en un calendario.", src: "images/navi-agents.jpg", alt: "Panel de agentes de NAVI vacío y un calendario de noviembre para el trabajo programado" },
          ],
        },
      ],
      ai: {
        label: "Diseñar con IA",
        title: "Lo que aprendí diseñando un producto de IA",
        points: [
          "**El modelo propone, el producto decide.** Todo lo que se puede decidir con reglas claras no debería dejarse a lo que adivine una IA. De ahí vienen la previsibilidad y la confianza.",
          "**El coste y la espera son parte de la experiencia.** La gente nota las respuestas lentas y las facturas sorpresa. NAVI empieza con el modelo más pequeño capaz de hacer el trabajo y muestra cuánto costó cada respuesta.",
          "**Las leyes son restricciones de diseño.** En Europa, los datos de clientes no pueden ir a cualquier servicio de IA. Tratar las normas de privacidad como punto de partida, y no como obstáculo, dio forma al producto desde el primer día.",
          "**La IA debe apoyar el pensamiento de las personas, no reemplazarlo.** Los cambios importantes siempre pasan por la aprobación de una persona, y el trabajo sigue siendo del equipo.",
        ],
      },
      links: {
        label: "Más información",
        title: "Mira hacia dónde va NAVI",
        items: [{ label: "Visitar la página de NAVI →", href: "https://juanjorambach.github.io/navi-landing/", primary: true }],
      },
    },

    keepex: {
      heroTitle: "KeepeX — Plataforma de alquiler de robots domésticos",
      heroSubtitle: "Proyecto Final de Máster · Barcelona Technology School",
      summary: {"problem":"Los robots domésticos son demasiado caros para que la mayoría pueda tener uno.","role":"UX Designer en un equipo de 2, durante 16 semanas.","did":"7 rondas de research en 4 continentes y 3 idiomas, arquitectura de información, diseño de UI y tests de usabilidad.","result":"El research pivotó el modelo de negocio de compra a alquiler."},
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
      scrollHint: "↕ Desplázate dentro del marco para ver la página completa",
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
          { icon: "📊", text: "**Problema crítico:** 4 de 6 participantes confundieron «Planes» con «Tipos de usuario». Era un problema de arquitectura de información, no visual — la solución fue reescribir el UX writing y reestructurar la página de precios para partir de tareas, no de niveles." },
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
      summary: {"problem":"El 70% de quienes empiezan a correr abandona en dos semanas.","role":"UX Designer en un equipo de 5, durante 6 semanas.","did":"10 entrevistas con usuarios, una encuesta a 54 personas, marcos de ciencia del comportamiento y 3 rondas de tests de usabilidad con 15 participantes.","result":"La finalización del onboarding subió del 65% al 92%."},
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
        { n: "54", label: "Respuestas a la encuesta" },
      ],
      problem: {
        label: "Problema",
        title: "7 de cada 10 principiantes abandonan en dos semanas",
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
        title: "Una encuesta a 54 personas confirmó las entrevistas",
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
