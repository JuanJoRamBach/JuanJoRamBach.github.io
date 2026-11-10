import { useState, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { T } from "./tokens.js";
import { useLang } from "./lang.jsx";
import { links } from "./content.js";

export function nav(hash) {
  window.location.hash = hash;
}

// Individual project pages live under Projects in the nav hierarchy.
export const PROJECT_ROUTES = ["#keepex", "#runquest", "#pulso", "#sismico", "#navi"];

const REDUCED_MOTION =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

/* Renders **bold** segments inside copy strings */
export function Rich({ text }) {
  const parts = text.split("**");
  return (
    <>
      {parts.map((p, i) =>
        i % 2 === 1 ? (
          <strong key={i} style={{ color: T.ink, fontWeight: 600 }}>{p}</strong>
        ) : (
          <span key={i}>{p}</span>
        )
      )}
    </>
  );
}

/* Sliding EN/ES segmented control */
function LangSwitch() {
  const { t, lang, setLang } = useLang();
  const SEG_W = 40;
  return (
    <div
      role="group"
      aria-label={t.langSwitch.groupLabel}
      style={{
        position: "relative", display: "flex", alignItems: "center",
        border: `1.5px solid ${T.border}`, borderRadius: 8, padding: 3,
        backgroundColor: T.bgAlt,
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: "absolute", top: 3, left: 3, width: SEG_W, height: "calc(100% - 6px)",
          borderRadius: 6, backgroundColor: T.accent,
          transform: lang === "es" ? `translateX(${SEG_W}px)` : "translateX(0)",
          transition: "transform 0.22s cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      />
      {["en", "es"].map((code) => (
        <button
          key={code}
          onClick={() => setLang(code)}
          aria-pressed={lang === code}
          aria-label={t.langSwitch[code]}
          style={{
            position: "relative", zIndex: 1, width: SEG_W, padding: "4px 0",
            fontFamily: T.fontMono, fontSize: 12, fontWeight: 500, textAlign: "center",
            color: lang === code ? T.white : T.inkSoft,
            backgroundColor: "transparent", border: "none", cursor: "pointer",
            transition: "color 0.22s",
          }}
        >
          {code.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export function NavBar({ hash }) {
  const { t } = useLang();
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", fn);
    return () => window.removeEventListener("scroll", fn);
  }, []);
  // Case studies live under Work: keep "Work" highlighted while reading them
  // so users never lose track of where they are in the site's hierarchy.
  const isActive = (href) =>
    hash === href || (href === "#portfolio" && PROJECT_ROUTES.includes(hash));
  return (
    <header
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100, padding: "0 24px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12,
        backgroundColor: scrolled ? "rgba(255,255,255,0.97)" : "rgba(255,255,255,0.6)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
        boxShadow: scrolled ? "0 1px 8px rgba(0,0,0,0.06)" : "none",
        borderBottom: scrolled ? "1px solid rgba(0,0,0,0.04)" : "1px solid transparent",
        transition: "background-color 0.25s ease, box-shadow 0.25s ease",
      }}
    >
      <a
        className="nav-name"
        href="#home"
        style={{ fontFamily: T.fontHeading, fontSize: 16, fontWeight: 700, color: T.ink, textDecoration: "none", letterSpacing: "-0.03em", whiteSpace: "nowrap" }}
      >
        <span className="nav-name-full">{t.fullName}</span>
        <span className="nav-name-short">{t.name}</span>
      </a>
      <nav aria-label={t.navAria} className="nav-links" style={{ display: "flex", alignItems: "center" }}>
        {t.nav.map((l) => {
          const active = isActive(l.href);
          return (
            <a
              key={l.href}
              href={l.href}
              aria-current={hash === l.href ? "page" : undefined}
              className="nav-link"
              style={{
                fontFamily: T.fontBody, fontSize: 14, textDecoration: "none",
                fontWeight: active ? 600 : 500,
                color: active ? T.accent : T.inkSoft,
                backgroundColor: active ? T.accentLight : "transparent",
                padding: "6px 12px", borderRadius: 8, whiteSpace: "nowrap",
                transition: "color 0.15s, background-color 0.15s",
              }}
            >
              {l.label}
            </a>
          );
        })}
        <LangSwitch />
      </nav>
    </header>
  );
}

export function Foot() {
  const { t } = useLang();
  return (
    <footer style={{ padding: "40px 24px", borderTop: `1px solid ${T.border}` }}>
      <div style={{ maxWidth: T.maxW, margin: "0 auto", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
        <span style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkMuted }}>{t.footer.rights}</span>
        <div style={{ display: "flex", gap: 20 }}>
          <a href={links.LINKEDIN} target="_blank" rel="noopener noreferrer" style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkSoft, textDecoration: "none" }}>LinkedIn</a>
          <a href={`mailto:${links.EMAIL}`} style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkSoft, textDecoration: "none" }}>Email</a>
        </div>
      </div>
    </footer>
  );
}

export function FadeIn({ children, delay = 0, style = {} }) {
  const ref = useRef(null);
  const [v, setV] = useState(REDUCED_MOTION);
  useEffect(() => {
    if (REDUCED_MOTION) return;
    const o = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setV(true); o.disconnect(); } },
      { threshold: 0.08 }
    );
    if (ref.current) o.observe(ref.current);
    return () => o.disconnect();
  }, []);
  return (
    <div
      ref={ref}
      style={{
        opacity: v ? 1 : 0,
        transform: v ? "translateY(0)" : "translateY(20px)",
        transition: `opacity 0.6s ease ${delay}s, transform 0.6s ease ${delay}s`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export function Label({ children }) {
  return <div style={{ fontFamily: T.fontMono, fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: T.accent, marginBottom: 10 }}>{children}</div>;
}

export function Tag({ children }) {
  return <span style={{ display: "inline-block", padding: "3px 10px", borderRadius: 6, backgroundColor: T.bgAlt, fontFamily: T.fontBody, fontSize: 12, fontWeight: 500, color: T.inkSoft }}>{children}</span>;
}

export function Stat({ n, label }) {
  return (
    <div style={{ textAlign: "center", padding: "20px 24px", borderRadius: T.radius, backgroundColor: T.bgAlt, flex: "1 1 160px" }}>
      <div style={{ fontFamily: T.fontHeading, fontSize: 32, fontWeight: 700, color: T.accent, lineHeight: 1, marginBottom: 4 }}>{n}</div>
      <div style={{ fontFamily: T.fontBody, fontSize: 12, fontWeight: 500, color: T.inkSoft }}>{label}</div>
    </div>
  );
}

/* Line icons (24px grid, stroked) replacing the emoji markers used in the copy.
   Content still names icons by emoji, so the copy files stay readable. */
const ICON_PATHS = {
  "💡": <><path d="M9 18h6M10 21h4" /><path d="M12 3a6 6 0 0 0-3.5 10.9V16h7v-2.1A6 6 0 0 0 12 3z" /></>,
  "✅": <><circle cx="12" cy="12" r="9" /><path d="M8 12.5l2.7 2.7L16 9.5" /></>,
  "📊": <><path d="M4 4v16h16" /><path d="M8 16v-4M12 16V8M16 16v-6" /></>,
  "🔍": <><circle cx="11" cy="11" r="6.5" /><path d="M20 20l-4.2-4.2" /></>,
  "🎓": <><path d="M22 9.5L12 5 2 9.5l10 4.5 10-4.5z" /><path d="M6 11.5V16c3.5 2.2 8.5 2.2 12 0v-4.5" /></>,
  "🧠": <><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z" /><path d="M19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8z" /></>,
};

export function Icon({ name, size = 18 }) {
  const paths = ICON_PATHS[name];
  if (!paths) return <span aria-hidden="true">{name}</span>;
  return (
    <svg aria-hidden="true" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" style={{ display: "block", flexShrink: 0 }}>
      {paths}
    </svg>
  );
}

export function Callout({ children, icon = "💡" }) {
  return (
    <div style={{ padding: "16px 18px", borderRadius: T.radius, backgroundColor: T.accentLight, borderLeft: `3px solid ${T.accent}`, margin: "20px 0", display: "flex", gap: 12, alignItems: "flex-start" }}>
      <span style={{ color: T.accent, marginTop: 3 }}><Icon name={icon} /></span>
      <div style={{ fontFamily: T.fontBody, fontSize: 14, lineHeight: 1.7, color: T.ink }}>{children}</div>
    </div>
  );
}

/* "In short" box at the top of a case study, for recruiters who skim. */
export function SummaryBox({ data }) {
  const { t } = useLang();
  if (!data) return null;
  const rows = [["problem", data.problem], ["role", data.role], ["did", data.did], ["result", data.result]];
  return (
    <section style={{ padding: "0 24px", maxWidth: 720, margin: "0 auto 44px" }}>
      <FadeIn>
        <div style={{ borderRadius: T.radius, border: `1.5px solid ${T.accent}`, backgroundColor: T.white, padding: "20px 24px" }}>
          <div style={{ fontFamily: T.fontMono, fontSize: 11, fontWeight: 500, textTransform: "uppercase", letterSpacing: "0.1em", color: T.accent, marginBottom: 14 }}>{t.summary.label}</div>
          <dl style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: "16px 28px", margin: 0 }}>
            {rows.map(([k, v]) => (
              <div key={k}>
                <dt style={{ fontFamily: T.fontHeading, fontSize: 13, fontWeight: 700, color: T.ink, marginBottom: 3 }}>{t.summary[k]}</dt>
                <dd style={{ fontFamily: T.fontBody, fontSize: 14, lineHeight: 1.6, color: T.inkSoft, margin: 0 }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </FadeIn>
    </section>
  );
}

export function ContactCTA() {
  const { t } = useLang();
  return (
    <section style={{ padding: "72px 24px", textAlign: "center" }}>
      <FadeIn>
        <Label>{t.cta.label}</Label>
        <h2 style={{ fontFamily: T.fontHeading, fontSize: 32, fontWeight: 700, color: T.ink, margin: "0 0 12px", letterSpacing: "-0.02em" }}>{t.cta.title}</h2>
        <p style={{ fontFamily: T.fontBody, fontSize: 15, color: T.inkSoft, margin: "0 auto 24px", maxWidth: 440, lineHeight: 1.6 }}>{t.cta.body}</p>
        <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href={links.LINKEDIN}
            target="_blank"
            rel="noopener noreferrer"
            style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.white, backgroundColor: T.accent, padding: "10px 24px", borderRadius: 8, textDecoration: "none", transition: "background-color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = T.accentHover)}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = T.accent)}
          >
            {t.cta.connect}
          </a>
          <a href={`mailto:${links.EMAIL}`} style={{ fontFamily: T.fontBody, fontSize: 14, fontWeight: 600, color: T.ink, padding: "10px 24px", borderRadius: 8, textDecoration: "none", border: `1.5px solid ${T.border}` }}>
            {links.EMAIL}
          </a>
        </div>
      </FadeIn>
    </section>
  );
}

export function ProjectCard({ title, subtitle, desc, tags, metric, metricLabel, href, idx, badge, linkLabel, cover, coverPos = "top center" }) {
  const { t } = useLang();
  const [h, setH] = useState(false);
  return (
    <FadeIn delay={idx * 0.12}>
      <a
        href={href}
        onMouseEnter={() => setH(true)}
        onMouseLeave={() => setH(false)}
        style={{
          display: "block", padding: "32px 28px", borderRadius: T.radius, textDecoration: "none",
          border: `1.5px solid ${h ? T.accent : T.border}`,
          backgroundColor: h ? T.accentLight : T.white,
          transition: "border-color 0.2s ease, background-color 0.2s ease",
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 20, flexWrap: "wrap" }}>
          <div style={{ flex: 1, minWidth: 240 }}>
            <Label>{subtitle}</Label>
            <h3 style={{ fontFamily: T.fontHeading, fontSize: 26, fontWeight: 700, color: T.ink, margin: "0 0 10px", letterSpacing: "-0.02em", lineHeight: 1.2, display: "flex", alignItems: "center", gap: 10, flexWrap: "wrap" }}>
              {title}
              {badge && <InProgressBadge />}
            </h3>
            <p style={{ fontFamily: T.fontBody, fontSize: 14, lineHeight: 1.7, color: T.inkSoft, margin: "0 0 14px", maxWidth: 500 }}>{desc}</p>
            <div style={{ display: "flex", gap: 6, flexWrap: "wrap" }}>{tags.map((x) => <Tag key={x}>{x}</Tag>)}</div>
          </div>
          {cover && (
            <div className="card-cover" style={{ flex: "0 1 300px", minWidth: 220, display: "flex", flexDirection: "column", gap: 10 }}>
              <div style={{ width: "100%", aspectRatio: "16 / 10", borderRadius: 10, overflow: "hidden", border: `1px solid ${T.border}`, backgroundColor: T.bgAlt }}>
                <img
                  src={cover} alt="" loading="lazy"
                  style={{ display: "block", width: "100%", height: "100%", objectFit: "cover", objectPosition: coverPos, transform: h ? "scale(1.04)" : "none", transition: "transform 0.4s ease" }}
                />
              </div>
              {metric && (
                <div style={{ display: "flex", alignItems: "baseline", gap: 8 }}>
                  <span style={{ fontFamily: T.fontHeading, fontSize: 22, fontWeight: 700, color: T.accent, lineHeight: 1 }}>{metric}</span>
                  <span style={{ fontFamily: T.fontMono, fontSize: 11, color: T.inkMuted }}>{metricLabel}</span>
                </div>
              )}
            </div>
          )}
          {metric && !cover && (
            <div style={{ padding: "16px 24px", borderRadius: 10, backgroundColor: h ? T.white : T.bgAlt, textAlign: "center", flexShrink: 0, transition: "background-color 0.2s" }}>
              <div style={{ fontFamily: T.fontHeading, fontSize: 28, fontWeight: 700, color: T.accent, lineHeight: 1 }}>{metric}</div>
              <div style={{ fontFamily: T.fontMono, fontSize: 11, color: T.inkMuted, marginTop: 4 }}>{metricLabel}</div>
            </div>
          )}
        </div>
        <div style={{ marginTop: 16, fontFamily: T.fontBody, fontSize: 13, fontWeight: 600, color: T.accent, display: "flex", alignItems: "center", gap: 4 }}>
          {linkLabel || t.readCase} <span aria-hidden="true" style={{ transform: h ? "translateX(3px)" : "none", transition: "transform 0.2s" }}>→</span>
        </div>
      </a>
    </FadeIn>
  );
}

export function InProgressBadge() {
  const { t } = useLang();
  return (
    <span style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "3px 10px", borderRadius: 999, backgroundColor: "#FEF3C7", color: "#92400E", fontFamily: T.fontMono, fontSize: 11, fontWeight: 500, letterSpacing: "0.04em", textTransform: "uppercase" }}>
      <span aria-hidden="true" style={{ width: 6, height: 6, borderRadius: "50%", backgroundColor: "#D97706" }} />
      {t.inProgress}
    </span>
  );
}

/* Image with graceful placeholder while the real file isn't in /public/images yet.
   mode "cover" fills a fixed frame (crops); mode "full" shows the whole image at
   natural aspect ratio (for tall full-page screenshots viewed in a scroll frame). */
export function ImgFrame({ src, alt, style = {}, mode = "cover" }) {
  const { t } = useLang();
  const [failed, setFailed] = useState(false);
  useEffect(() => setFailed(false), [src]);
  if (failed) {
    return (
      <div
        role="img"
        aria-label={alt}
        style={{
          width: "100%", height: mode === "full" ? 240 : "100%", display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center", gap: 8,
          backgroundColor: "#E9E9EB", color: T.inkMuted,
          fontFamily: T.fontMono, fontSize: 12, textAlign: "center", padding: 16, ...style,
        }}
      >
        <span aria-hidden="true" style={{ fontSize: 26 }}>🖼️</span>
        {t.imgPending}
      </div>
    );
  }
  const fitStyle =
    mode === "full"
      ? { width: "100%", height: "auto" }
      : { width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" };
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onError={() => setFailed(true)}
      className="shot-img"
      style={{ display: "block", ...fitStyle, ...style }}
    />
  );
}

/* phone: frames a mobile screenshot at phone size instead of a 640px desktop viewport */
export function ScreenShowcase({ screens, groupLabel, scrollHint, phone = false }) {
  const { t } = useLang();
  const [i, setI] = useState(0);
  const [zoom, setZoom] = useState(false);
  const enlargeRef = useRef(null);
  const s = screens[i];
  return (
    <div style={{ margin: "28px 0" }}>
      <div style={{ borderRadius: T.radius, border: `1px solid ${T.border}`, overflow: "hidden", backgroundColor: T.bgAlt, marginBottom: 12 }}>
        <div style={{ padding: "20px 20px 8px" }}>
          <div style={{ fontFamily: T.fontMono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", color: T.accent, marginBottom: 4 }}>{s.label}</div>
          <div style={{ fontFamily: T.fontHeading, fontSize: 15, fontWeight: 600, color: T.ink }}>{s.title}</div>
          <div style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkSoft, marginTop: 2, lineHeight: 1.5 }}>{s.desc}</div>
        </div>
        <div style={{ padding: "8px 20px 20px", display: "flex", flexDirection: "column", alignItems: "center" }}>
          <div style={{ position: "relative", width: "100%", maxWidth: phone ? 300 : 640 }}>
            <div
              tabIndex={0}
              role="group"
              aria-label={`${s.title} — full screen, scrollable`}
              style={{ width: "100%", height: phone ? 600 : 460, borderRadius: phone ? 24 : 8, border: phone ? `6px solid ${T.ink}` : `1px solid ${T.border}`, overflowY: "auto", overflowX: "hidden", backgroundColor: "#E9E9EB" }}
            >
              <ImgFrame key={s.src} src={s.src} alt={s.alt} mode="full" />
            </div>
            <button
              ref={enlargeRef}
              onClick={() => setZoom(true)}
              aria-label={`${t.enlarge}: ${s.title}`}
              style={{
                position: "absolute", top: phone ? 16 : 10, right: phone ? 16 : 18, display: "inline-flex", alignItems: "center", gap: 6,
                padding: "6px 10px", borderRadius: 8, border: `1px solid ${T.border}`, backgroundColor: "rgba(255,255,255,0.94)",
                color: T.ink, fontFamily: T.fontBody, fontSize: 12, fontWeight: 600, cursor: "pointer", boxShadow: "0 2px 8px rgba(0,0,0,0.12)",
              }}
            >
              <svg aria-hidden="true" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" /></svg>
              {t.enlarge}
            </button>
          </div>
          <div aria-hidden="true" style={{ fontFamily: T.fontMono, fontSize: 10, color: T.inkMuted, marginTop: 6 }}>
            {scrollHint}
          </div>
        </div>
      </div>
      <div role="group" aria-label={groupLabel} style={{ display: "flex", gap: 6, overflowX: "auto", paddingBottom: 2 }}>
        {screens.map((sc, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-pressed={idx === i}
            style={{
              flexShrink: 0, padding: "6px 14px", borderRadius: 6, cursor: "pointer", fontFamily: T.fontBody, fontSize: 12, fontWeight: 500,
              border: `1.5px solid ${idx === i ? T.accent : T.border}`,
              backgroundColor: idx === i ? T.accentLight : T.white,
              color: idx === i ? T.accent : T.inkSoft,
              transition: "border-color 0.15s, background-color 0.15s, color 0.15s",
            }}
          >
            {sc.label}
          </button>
        ))}
      </div>
      {zoom && <Lightbox src={s.src} alt={s.alt} phone={phone} onClose={() => { setZoom(false); enlargeRef.current?.focus(); }} />}
    </div>
  );
}

function Lightbox({ src, alt, phone, onClose }) {
  const { t } = useLang();
  const closeRef = useRef(null);
  useEffect(() => {
    closeRef.current?.focus();
    const onKey = (e) => { if (e.key === "Escape") onClose(); };
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("keydown", onKey); document.body.style.overflow = prevOverflow; };
  }, [onClose]);
  // Portal to <body>: FadeIn's transform would otherwise trap position:fixed inside the gallery.
  return createPortal(
    <div
      role="dialog"
      aria-modal="true"
      aria-label={t.enlargedView}
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
      className="page"
      style={{ position: "fixed", inset: 0, zIndex: 300, backgroundColor: "rgba(10,10,12,0.88)", overflowY: "auto", padding: "64px 16px 32px", display: "flex", justifyContent: "center", alignItems: "flex-start" }}
    >
      <button
        ref={closeRef}
        onClick={onClose}
        style={{ position: "fixed", top: 14, right: 16, padding: "8px 14px", borderRadius: 8, border: "1px solid rgba(255,255,255,0.3)", backgroundColor: "rgba(255,255,255,0.12)", color: T.white, fontFamily: T.fontBody, fontSize: 13, fontWeight: 600, cursor: "pointer" }}
      >
        ✕ {t.close}
      </button>
      <img src={src} alt={alt} style={{ display: "block", width: "100%", maxWidth: phone ? 430 : 1400, height: "auto", borderRadius: 8, boxShadow: "0 12px 40px rgba(0,0,0,0.5)" }} />
    </div>,
    document.body
  );
}

export function CaseHero({ title, subtitle, desc, meta, badge }) {
  const { t } = useLang();
  return (
    <section style={{ padding: "72px 24px 40px", maxWidth: 720, margin: "0 auto" }}>
      <FadeIn>
        <a href="#portfolio" style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkMuted, textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 4, marginBottom: 20 }}>{t.backToWork}</a>
        {badge && <div style={{ marginBottom: 12 }}><InProgressBadge /></div>}
        <Label>{subtitle}</Label>
        <h1 style={{ fontFamily: T.fontHeading, fontSize: "clamp(30px, 5vw, 48px)", fontWeight: 700, color: T.ink, margin: "0 0 16px", lineHeight: 1.15, letterSpacing: "-0.025em" }}>{title}</h1>
        <p style={{ fontFamily: T.fontBody, fontSize: 16, lineHeight: 1.7, color: T.inkSoft, margin: "0 0 28px", maxWidth: 580 }}>{desc}</p>
      </FadeIn>
      <FadeIn delay={0.08}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(130px, 1fr))", gap: 16, padding: "20px 24px", borderRadius: T.radius, backgroundColor: T.bgAlt, border: `1px solid ${T.borderLight}` }}>
          {meta.map((m) => (
            <div key={m.l}>
              <div style={{ fontFamily: T.fontMono, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.08em", color: T.inkMuted, marginBottom: 3 }}>{m.l}</div>
              <div style={{ fontFamily: T.fontBody, fontSize: 13, fontWeight: 600, color: T.ink }}>{m.v}</div>
            </div>
          ))}
        </div>
      </FadeIn>
    </section>
  );
}

export function Sec({ label, title, children }) {
  return (
    <section style={{ padding: "0 24px", maxWidth: 720, margin: "0 auto 40px" }}>
      <FadeIn>
        <Label>{label}</Label>
        {title && <h2 style={{ fontFamily: T.fontHeading, fontSize: 24, fontWeight: 700, color: T.ink, margin: "0 0 12px", letterSpacing: "-0.02em", lineHeight: 1.25 }}>{title}</h2>}
        <div style={{ fontFamily: T.fontBody, fontSize: 15, lineHeight: 1.75, color: T.inkSoft }}>{children}</div>
      </FadeIn>
    </section>
  );
}

export function FeatureCard({ title, desc, tag }) {
  return (
    <div style={{ padding: "14px 18px", borderRadius: 10, backgroundColor: T.bgAlt, border: `1px solid ${T.borderLight}` }}>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "baseline", flexWrap: "wrap", gap: 6 }}>
        <span style={{ fontFamily: T.fontHeading, fontSize: 14, fontWeight: 600, color: T.ink }}>{title}</span>
        {tag && <span style={{ fontFamily: T.fontMono, fontSize: 11, color: T.accent }}>{tag}</span>}
      </div>
      <div style={{ fontFamily: T.fontBody, fontSize: 13, color: T.inkSoft, lineHeight: 1.6, marginTop: 4 }}>{desc}</div>
    </div>
  );
}
