import { useState, useEffect, useRef } from "react";
import { T } from "./tokens.js";
import { LangProvider, useLang } from "./lang.jsx";
import { NavBar } from "./components.jsx";
import { Home, About, Portfolio, Keepex, RunQuest, Contact } from "./pages.jsx";

function useHash() {
  const [hash, setHash] = useState(window.location.hash || "#home");
  useEffect(() => {
    const h = () => setHash(window.location.hash || "#home");
    window.addEventListener("hashchange", h);
    return () => window.removeEventListener("hashchange", h);
  }, []);
  return hash;
}

const ROUTES = {
  "#home": { page: Home, title: "home" },
  "#about": { page: About, title: "about" },
  "#portfolio": { page: Portfolio, title: "portfolio" },
  "#keepex": { page: Keepex, title: "keepex" },
  "#runquest": { page: RunQuest, title: "runquest" },
  "#contact": { page: Contact, title: "contact" },
};

function Shell() {
  const hash = useHash();
  const { t, lang } = useLang();
  const route = ROUTES[hash] || ROUTES["#home"];
  const Page = route.page;
  const mainRef = useRef(null);
  const firstRender = useRef(true);

  useEffect(() => {
    document.title = t.titles[route.title];
  }, [route, lang, t]);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
    // Move focus to the page container on route change so screen reader and
    // keyboard users land at the top of the new page, not mid-document.
    if (firstRender.current) {
      firstRender.current = false;
    } else {
      mainRef.current?.focus({ preventScroll: true });
    }
  }, [hash]);

  return (
    <div style={{ backgroundColor: T.bg, minHeight: "100vh" }}>
      <a className="skip-link" href="#main-content">{t.skipLink}</a>
      <NavBar hash={hash} />
      <main
        id="main-content"
        ref={mainRef}
        tabIndex={-1}
        key={hash + lang}
        className="page"
        style={{ outline: "none" }}
      >
        <Page />
      </main>
    </div>
  );
}

export default function App() {
  return (
    <LangProvider>
      <Shell />
    </LangProvider>
  );
}
