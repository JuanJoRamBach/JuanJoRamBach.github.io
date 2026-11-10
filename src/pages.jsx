import { T } from "./tokens.js";
import { useLang } from "./lang.jsx";
import { links } from "./content.js";
import {
  FadeIn, Label, Tag, Stat, Callout, ContactCTA, Foot,
  ProjectCard, ScreenShowcase, CaseHero, Sec, FeatureCard, Rich, ImgFrame, SummaryBox,
} from "./components.jsx";

const PHOTO = "images/profile.jpg";

// Card previews: image + which part of it to show in the 16:10 crop.
const COVERS = {
  pulso: { cover: "images/pulso-feed.jpg", coverPos: "center 40%" },
  keepex: { cover: "images/keepex-homepage.jpg", coverPos: "top center" },
  sismico: { cover: "images/sismico-map.jpg", coverPos: "center 45%" },
  navi: { cover: "images/navi-workflows.jpg", coverPos: "center 45%" },
};

export function Home() {
  const { t } = useLang();
  return (
    <div style={{ paddingTop: 60 }}>
      <section style={{ padding: "72px 24px 56px", maxWidth: T.maxW, margin: "0 auto" }}>
        <div style={{ display: "flex", gap: 40, alignItems: "center", flexWrap: "wrap" }}>
          <div style={{ flex: "1 1 480px", minWidth: 280 }}>
            <FadeIn>
              <p style={{ fontFamily: T.fontHeading, fontSize: 18, fontWeight: 600, color: T.ink, margin: "0 0 10px" }}>{t.home.greeting}</p>
              <Label>{t.home.heroLabel}</Label>
            </FadeIn>
            <FadeIn delay={0.08}>
              <h1 style={{ fontFamily: T.fontHeading, fontSize: "clamp(30px, 4.5vw, 48px)", fontWeight: 700, color: T.ink, lineHeight: 1.12, margin: "0 0 16px", letterSpacing: "-0.025em" }}>
                {t.home.heroTitle}
              </h1>
            </FadeIn>
            <FadeIn delay={0.14}>
              <p style={{ fontFamily: T.fontBody, fontSize: 16, lineHeight: 1.75, color: T.inkSoft, margin: "0 0 24px", maxWidth: 520 }}>
                <Rich text={t.home.heroBody} />
              </p>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div style={{ display: "flex", gap: 12 }}>
                <a href="#portfolio" style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.white, backgroundColor: T.accent, padding: "10px 24px", borderRadius: 8, textDecoration: "none", display: "inline-block" }}>{t.home.viewWork}</a>
                <a href="#contact" style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.ink, padding: "10px 24px", borderRadius: 8, textDecoration: "none", border: `1.5px solid ${T.border}`, display: "inline-block" }}>{t.home.getInTouch}</a>
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.15} style={{ flex: "0 1 220px", display: "flex", justifyContent: "center" }}>
            <div className="hero-photo" style={{ width: 200, height: 240, borderRadius: T.radius, overflow: "hidden", border: `2px solid ${T.border}` }}>
              <ImgFrame src={PHOTO} alt={t.photoAlt} style={{ objectPosition: "center 15%" }} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section style={{ padding: "0 24px 72px", maxWidth: T.maxW, margin: "0 auto" }}>
        <FadeIn>
          <h2 style={{ fontFamily: T.fontMono, fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: T.inkMuted, margin: "0 0 24px", paddingBottom: 12, borderBottom: `1px solid ${T.border}` }}>{t.home.selectedWork}</h2>
        </FadeIn>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          <ProjectCard idx={0} {...t.projects.pulso} {...COVERS.pulso} href="#pulso" />
          <ProjectCard idx={1} {...t.projects.keepex} {...COVERS.keepex} href="#keepex" />
          <ProjectCard idx={2} {...t.projects.runquest} href="#runquest" />
        </div>
        <FadeIn>
          <a href="#portfolio" style={{ display: "inline-block", marginTop: 20, fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.accent, textDecoration: "none" }}>{t.home.seeAll}</a>
        </FadeIn>
      </section>

      <section style={{ padding: "56px 24px", backgroundColor: T.bgAlt, borderTop: `1px solid ${T.borderLight}`, borderBottom: `1px solid ${T.borderLight}` }}>
        <div style={{ maxWidth: T.maxW - 48, margin: "0 auto", display: "flex", gap: 40, flexWrap: "wrap", alignItems: "center" }}>
          <FadeIn style={{ flex: 1, minWidth: 280 }}>
            <Label>{t.home.aboutLabel}</Label>
            <h2 style={{ fontFamily: T.fontHeading, fontSize: 26, fontWeight: 700, color: T.ink, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{t.home.aboutTitle}</h2>
            <p style={{ fontFamily: T.fontBody, fontSize: 14, lineHeight: 1.7, color: T.inkSoft, margin: "0 0 16px" }}>{t.home.aboutBody}</p>
            <a href="#about" style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.accent, textDecoration: "none" }}>{t.home.moreAbout}</a>
          </FadeIn>
          <FadeIn delay={0.1} style={{ display: "flex", gap: 16, flexWrap: "wrap", alignItems: "stretch" }}>
            <div style={{ textAlign: "center", padding: "20px 24px", borderRadius: T.radius, backgroundColor: T.bg, border: `1px solid ${T.borderLight}`, flex: "1 1 120px" }}>
              <div style={{ fontFamily: T.fontHeading, fontSize: 32, fontWeight: 700, color: T.accent, lineHeight: 1, marginBottom: 4 }}>{t.home.statNumber}</div>
              <div style={{ fontFamily: T.fontBody, fontSize: 12, fontWeight: 500, color: T.inkSoft }}>{t.home.statYears}</div>
            </div>
            <div style={{ textAlign: "center", padding: "20px 24px", borderRadius: T.radius, backgroundColor: T.bg, border: `1px solid ${T.borderLight}`, flex: "1 1 120px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center" }}>
              <div style={{ fontFamily: T.fontMono, fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.08em", color: T.accent, marginBottom: 4 }}>{t.home.statCurrently}</div>
              <div style={{ fontFamily: T.fontBody, fontSize: 12, fontWeight: 500, color: T.inkSoft, lineHeight: 1.4 }}>{t.home.statCert}</div>
            </div>
          </FadeIn>
        </div>
      </section>
      <ContactCTA />
      <Foot />
    </div>
  );
}

export function About() {
  const { t } = useLang();
  const a = t.about;
  return (
    <div style={{ paddingTop: 60 }}>
      <section style={{ padding: "72px 24px 0", maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <Label>{a.label}</Label>
          <h1 style={{ fontFamily: T.fontHeading, fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 700, color: T.ink, margin: "0 0 28px", lineHeight: 1.12, letterSpacing: "-0.025em" }}>
            {a.title}
          </h1>
        </FadeIn>
        <FadeIn delay={0.06}>
          <div style={{ width: 140, height: 170, borderRadius: T.radius, overflow: "hidden", border: `2px solid ${T.border}`, marginBottom: 28 }}>
            <ImgFrame src={PHOTO} alt={t.photoAlt} style={{ objectPosition: "center 15%" }} />
          </div>
        </FadeIn>
        <FadeIn delay={0.1}>
          {a.paragraphs.map((p, i) => (
            <p key={i} style={{ fontFamily: T.fontBody, fontSize: 16, lineHeight: 1.75, color: T.inkSoft, margin: i === a.paragraphs.length - 1 ? "0 0 40px" : "0 0 16px" }}>{p}</p>
          ))}
        </FadeIn>

        <FadeIn delay={0.12}>
          <div style={{ padding: "28px 28px 8px", borderRadius: T.radius, backgroundColor: T.bgAlt, border: `1px solid ${T.borderLight}`, marginBottom: 44 }}>
            <Label>{a.cert.label}</Label>
            <h2 style={{ fontFamily: T.fontHeading, fontSize: 26, fontWeight: 700, color: T.ink, margin: "0 0 14px", letterSpacing: "-0.02em" }}>{a.cert.title}</h2>
            {a.cert.paras.map((p, i) => (
              <p key={i} style={{ fontFamily: T.fontBody, fontSize: 15, lineHeight: 1.75, color: T.inkSoft, margin: "0 0 14px" }}>{p}</p>
            ))}
            <Callout icon="💡"><Rich text={a.cert.callout} /></Callout>
          </div>
        </FadeIn>

        <FadeIn delay={0.14}>
          <Label>{a.experienceLabel}</Label>
          {a.experience.map((e, i) => (
            <div key={i} style={{ padding: "18px 22px", borderRadius: T.radius, border: `1px solid ${T.borderLight}`, marginBottom: 12 }}>
              <div style={{ display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
                <span style={{ fontFamily: T.fontHeading, fontSize: 15, fontWeight: 600, color: T.ink }}>{e.r}{e.c && <span style={{ fontWeight: 400, color: T.inkSoft }}> {e.at} {e.c}</span>}</span>
                <span style={{ fontFamily: T.fontMono, fontSize: 12, color: T.inkMuted }}>{e.p}</span>
              </div>
              <p style={{ fontFamily: T.fontBody, fontSize: 13, lineHeight: 1.65, color: T.inkSoft, margin: 0 }}>{e.d}</p>
            </div>
          ))}
        </FadeIn>

        <div style={{ height: 36 }} />
        <FadeIn delay={0.18}>
          <Label>{a.educationLabel}</Label>
          {a.education.map((e, i) => (
            <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", padding: "14px 0", borderBottom: `1px solid ${T.borderLight}`, flexWrap: "wrap", gap: 6 }}>
              <div>
                <div style={{ fontFamily: T.fontHeading, fontSize: 15, fontWeight: 600, color: T.ink }}>{e.s}</div>
                <div style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkSoft }}>{e.d}</div>
              </div>
              <span style={{ fontFamily: T.fontMono, fontSize: 12, color: T.inkMuted }}>{e.y}</span>
            </div>
          ))}
        </FadeIn>

        <div style={{ height: 36 }} />
        <FadeIn delay={0.22}>
          <Label>{a.toolsLabel}</Label>
          <div style={{ display: "flex", gap: 6, flexWrap: "wrap", marginBottom: 36 }}>
            {a.tools.map((s) => <Tag key={s}>{s}</Tag>)}
          </div>
          <Label>{a.languagesLabel}</Label>
          <div style={{ display: "flex", gap: 28, marginBottom: 56 }}>
            {a.languages.map((x) => (
              <div key={x.l}>
                <div style={{ fontFamily: T.fontHeading, fontSize: 14, fontWeight: 600, color: T.ink }}>{x.l}</div>
                <div style={{ fontFamily: T.fontMono, fontSize: 12, color: T.inkMuted }}>{x.v}</div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>
      <ContactCTA />
      <Foot />
    </div>
  );
}

export function Portfolio() {
  const { t } = useLang();
  return (
    <div style={{ paddingTop: 60 }}>
      <section style={{ padding: "72px 24px 0", maxWidth: T.maxW, margin: "0 auto" }}>
        <FadeIn>
          <Label>{t.portfolio.label}</Label>
          <h1 style={{ fontFamily: T.fontHeading, fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 700, color: T.ink, margin: "0 0 8px", letterSpacing: "-0.025em" }}>{t.portfolio.title}</h1>
          <p style={{ fontFamily: T.fontBody, fontSize: 16, color: T.inkSoft, margin: "0 0 40px", maxWidth: 520, lineHeight: 1.6 }}>{t.portfolio.body}</p>
        </FadeIn>
        <GroupHeading>{t.portfolio.groupCase}</GroupHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingBottom: 56 }}>
          <ShortCard idx={0} p={t.projects.pulso} href="#pulso" cover={COVERS.pulso} />
          <ShortCard idx={1} p={{ ...t.projects.keepex, subtitle: t.portfolio.keepexSubtitle }} href="#keepex" cover={COVERS.keepex} />
          <ShortCard idx={2} p={{ ...t.projects.runquest, subtitle: t.portfolio.runquestSubtitle }} href="#runquest" />
        </div>
        <GroupHeading body={t.portfolio.groupBuiltBody}>{t.portfolio.groupBuilt}</GroupHeading>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, paddingBottom: 72 }}>
          <ShortCard idx={0} p={t.projects.navi} href="#navi" linkLabel={t.readProject} cover={COVERS.navi} />
          <ShortCard idx={1} p={t.projects.sismico} href="#sismico" linkLabel={t.readProject} cover={COVERS.sismico} />
        </div>
      </section>
      <ContactCTA />
      <Foot />
    </div>
  );
}

function GroupHeading({ children, body }) {
  return (
    <FadeIn>
      <h2 style={{ fontFamily: T.fontMono, fontSize: 12, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: T.inkMuted, margin: body ? "0 0 6px" : "0 0 24px", paddingBottom: 12, borderBottom: `1px solid ${T.border}` }}>{children}</h2>
      {body && <p style={{ fontFamily: T.fontBody, fontSize: 14, color: T.inkSoft, margin: "0 0 20px", lineHeight: 1.6 }}>{body}</p>}
    </FadeIn>
  );
}

function ShortCard({ idx, p, href, linkLabel, cover }) {
  return (
    <ProjectCard
      idx={idx} href={href} linkLabel={linkLabel} badge={p.badge} {...cover}
      title={p.title} subtitle={p.subtitle} desc={p.descShort} tags={p.tagsShort}
      metric={p.metric} metricLabel={p.metricLabel}
    />
  );
}

/* Renders the newer project pages from a shared data shape (see pulsoPage etc. in content.js). */
function ProjectPage({ data, badge }) {
  const { t } = useLang();
  return (
    <div style={{ paddingTop: 60 }}>
      <CaseHero {...data.hero} badge={badge} />
      <SummaryBox data={data.summary} />

      {data.stats && (
        <div style={{ padding: "0 24px", maxWidth: 720, margin: "0 auto 36px" }}>
          <FadeIn>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              {data.stats.map((s) => <Stat key={s.label} n={s.n} label={s.label} />)}
            </div>
          </FadeIn>
        </div>
      )}

      {data.sections.map((s) =>
        s.type === "gallery" ? (
          <section key={s.title} style={{ padding: "0 24px", maxWidth: 720, margin: "0 auto 40px" }}>
            <FadeIn>
              <Label>{s.label}</Label>
              <h2 style={{ fontFamily: T.fontHeading, fontSize: 24, fontWeight: 700, color: T.ink, margin: "0 0 4px", letterSpacing: "-0.02em" }}>{s.title}</h2>
              <ScreenShowcase screens={s.screens} groupLabel={s.title} scrollHint={t.keepex.scrollHint} phone={s.phone} />
            </FadeIn>
          </section>
        ) : (
          <Sec key={s.title} label={s.label} title={s.title}>
            {s.paras?.map((p, i) => <p key={i} style={{ margin: i === s.paras.length - 1 ? 0 : "0 0 12px" }}>{p}</p>)}
            {s.features && (
              <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: s.paras ? "16px 0 0" : "12px 0 0" }}>
                {s.features.map((f) => <FeatureCard key={f.title} {...f} />)}
              </div>
            )}
            {s.callout && <Callout icon={s.callout.icon}><Rich text={s.callout.text} /></Callout>}
          </Sec>
        )
      )}

      <Sec label={data.ai.label} title={data.ai.title}>
        {data.ai.points.map((p, i) => (
          <Callout key={i} icon="🧠"><Rich text={p} /></Callout>
        ))}
      </Sec>

      {data.links && (
        <Sec label={data.links.label} title={data.links.title}>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {data.links.items.map((l) => (
              <a key={l.href} href={l.href} target="_blank" rel="noopener noreferrer"
                style={l.primary
                  ? { fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.white, backgroundColor: T.accent, padding: "10px 22px", borderRadius: 8, textDecoration: "none" }
                  : { fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.ink, padding: "10px 22px", borderRadius: 8, textDecoration: "none", border: `1.5px solid ${T.border}` }}>
                {l.label}
              </a>
            ))}
          </div>
        </Sec>
      )}
      <ContactCTA />
      <Foot />
    </div>
  );
}

export function Pulso() {
  const { t } = useLang();
  return <ProjectPage data={t.pulsoPage} />;
}

export function Sismico() {
  const { t } = useLang();
  return <ProjectPage data={t.sismicoPage} />;
}

export function Navi() {
  const { t } = useLang();
  return <ProjectPage data={t.naviPage} badge />;
}

export function Keepex() {
  const { t } = useLang();
  const k = t.keepex;
  return (
    <div style={{ paddingTop: 60 }}>
      <CaseHero title={k.heroTitle} subtitle={k.heroSubtitle} desc={k.heroDesc} meta={k.meta} />
      <SummaryBox data={k.summary} />

      <Sec label={k.challenge.label} title={k.challenge.title}>
        <p style={{ margin: "0 0 12px" }}>{k.challenge.p1}</p>
        <p style={{ margin: 0 }}>{k.challenge.p2}</p>
      </Sec>

      <Sec label={k.discovery.label} title={k.discovery.title}>
        <p style={{ margin: "0 0 16px" }}>{k.discovery.intro}</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "16px 0" }}>
          {k.discovery.phases.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
        <Callout icon="💡"><Rich text={k.discovery.callout} /></Callout>
      </Sec>

      <Sec label={k.design.label} title={k.design.title}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "12px 0" }}>
          {k.design.features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
        <p style={{ margin: "14px 0 0" }}>{k.design.outro}</p>
      </Sec>

      <section style={{ padding: "0 24px", maxWidth: 720, margin: "0 auto 40px" }}>
        <FadeIn>
          <Label>{k.finalLabel}</Label>
          <h2 style={{ fontFamily: T.fontHeading, fontSize: 24, fontWeight: 700, color: T.ink, margin: "0 0 4px", letterSpacing: "-0.02em" }}>{k.finalTitle}</h2>
          <ScreenShowcase screens={k.screens} groupLabel={k.finalTitle} scrollHint={k.scrollHint} />
        </FadeIn>
      </section>

      <Sec label={k.testing.label} title={k.testing.title}>
        <p style={{ margin: "0 0 12px" }}>{k.testing.intro}</p>
        {k.testing.callouts.map((c, i) => (
          <Callout key={i} icon={c.icon}><Rich text={c.text} /></Callout>
        ))}
      </Sec>

      <Sec label={k.prototype.label} title={k.prototype.title}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
          <a href={links.FIGMA_PROTO} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.white, backgroundColor: T.accent, padding: "10px 22px", borderRadius: 8, textDecoration: "none" }}>{k.prototype.figma}</a>
          <a href={links.SLIDESHARE} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.ink, padding: "10px 22px", borderRadius: 8, textDecoration: "none", border: `1.5px solid ${T.border}` }}>{k.prototype.caseStudy}</a>
        </div>
      </Sec>

      <Sec label={k.reflection.label} title={k.reflection.title}>
        {k.reflection.callouts.map((c, i) => (
          <Callout key={i} icon="🎓"><Rich text={c} /></Callout>
        ))}
      </Sec>
      <ContactCTA />
      <Foot />
    </div>
  );
}

export function RunQuest() {
  const { t } = useLang();
  const r = t.runquest;
  return (
    <div style={{ paddingTop: 60 }}>
      <CaseHero title={r.heroTitle} subtitle={r.heroSubtitle} desc={r.heroDesc} meta={r.meta} />
      <SummaryBox data={r.summary} />

      <div style={{ padding: "0 24px", maxWidth: 720, margin: "0 auto 36px" }}>
        <FadeIn>
          <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
            {r.stats.map((s) => <Stat key={s.label} n={s.n} label={s.label} />)}
          </div>
        </FadeIn>
      </div>

      <Sec label={r.problem.label} title={r.problem.title}>
        <p style={{ margin: "0 0 12px" }}>{r.problem.p1}</p>
        <p style={{ margin: 0 }}>{r.problem.p2}</p>
      </Sec>

      <Sec label={r.research.label} title={r.research.title}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "12px 0" }}>
          {r.research.features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
        <Callout><Rich text={r.research.callout} /></Callout>
      </Sec>

      <Sec label={r.findings.label} title={r.findings.title}>
        <div style={{ display: "flex", gap: 10, flexWrap: "wrap", margin: "12px 0" }}>
          {r.findings.stats.map((s) => <Stat key={s.label} n={s.n} label={s.label} />)}
        </div>
        <p style={{ margin: "12px 0 0" }}>{r.findings.outro}</p>
      </Sec>

      <Sec label={r.design.label} title={r.design.title}>
        <div style={{ display: "flex", flexDirection: "column", gap: 10, margin: "12px 0" }}>
          {r.design.features.map((f) => <FeatureCard key={f.title} {...f} />)}
        </div>
      </Sec>

      <Sec label={r.testing.label} title={r.testing.title}>
        {r.testing.rounds.map((x, i) => (
          <div key={i} style={{ display: "flex", gap: 14, padding: "10px 0", borderBottom: `1px solid ${T.borderLight}`, alignItems: "baseline", flexWrap: "wrap" }}>
            <span style={{ fontFamily: T.fontMono, fontSize: 12, color: T.accent, fontWeight: 600, width: 64, flexShrink: 0 }}>{x.r}</span>
            <span style={{ fontFamily: T.fontHeading, fontSize: 14, fontWeight: 600, color: T.ink, width: 170, flexShrink: 0 }}>{x.f}</span>
            <span style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkSoft }}>{x.res}</span>
          </div>
        ))}
        <Callout icon="📊"><Rich text={r.testing.callout} /></Callout>
      </Sec>

      <Sec label={r.reflection.label} title={r.reflection.title}>
        {r.reflection.callouts.map((c, i) => (
          <Callout key={i} icon="🎓"><Rich text={c} /></Callout>
        ))}
      </Sec>
      <ContactCTA />
      <Foot />
    </div>
  );
}

export function Contact() {
  const { t } = useLang();
  const c = t.contact;
  return (
    <div style={{ paddingTop: 60 }}>
      <section style={{ padding: "72px 24px", maxWidth: 720, margin: "0 auto" }}>
        <FadeIn>
          <Label>{c.label}</Label>
          <h1 style={{ fontFamily: T.fontHeading, fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 700, color: T.ink, margin: "0 0 16px", letterSpacing: "-0.025em" }}>{c.title}</h1>
          <p style={{ fontFamily: T.fontBody, fontSize: 16, lineHeight: 1.7, color: T.inkSoft, margin: "0 0 32px", maxWidth: 460 }}>{c.body}</p>
        </FadeIn>
        <FadeIn delay={0.08}>
          {c.channels.map((ch) => (
            <a
              key={ch.l}
              href={ch.u}
              {...(ch.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "18px 22px", borderRadius: T.radius, border: `1px solid ${T.border}`, marginBottom: 10, textDecoration: "none" }}
            >
              <div>
                <div style={{ fontFamily: T.fontHeading, fontSize: 15, fontWeight: 600, color: T.ink }}>{ch.l}</div>
                <div style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkMuted, marginTop: 1 }}>{ch.d}</div>
              </div>
              <span aria-hidden="true" style={{ color: T.inkMuted }}>→</span>
            </a>
          ))}
        </FadeIn>
        <FadeIn delay={0.14}>
          <div style={{ marginTop: 40 }}>
            <Label>{c.availabilityLabel}</Label>
            <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
              {c.availability.map((av) => (
                <div key={av.l}>
                  <div style={{ fontFamily: T.fontMono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: T.inkMuted, marginBottom: 3 }}>{av.l}</div>
                  <div style={{ fontFamily: T.fontHeading, fontSize: 14, fontWeight: 600, color: T.ink }}>{av.v}</div>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>
      <Foot />
    </div>
  );
}
