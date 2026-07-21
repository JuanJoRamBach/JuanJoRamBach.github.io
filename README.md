# Juan José Ramírez — UX/UI Portfolio

Personal portfolio built with React + Vite. Bilingual (EN/ES), WCAG-AA-minded, deployed on GitHub Pages.

## Highlights

- **Bilingual** — full English/Spanish content with a persistent language toggle
- **Accessible** — semantic landmarks, keyboard navigation with visible focus, skip link, alt text on all imagery, AA color contrast, `prefers-reduced-motion` support
- **Fast** — static Vite build, no runtime compilation, lazy-loaded images
- **Case studies** — KeepeX (research-driven business pivot) and RunQuest (behavioral UX)

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Images

Screenshots and photos live in `public/images/`:

| File | Used in |
|------|---------|
| `profile.jpg` | Home hero + About page |
| `keepex-homepage.png` | KeepeX gallery — Homepage |
| `keepex-entity.png` | KeepeX gallery — Entity selection |
| `keepex-robot-select.png` | KeepeX gallery — Robot selection |
| `keepex-booking.png` | KeepeX gallery — Booking |
| `keepex-dashboard.png` | KeepeX gallery — Dashboard |

## Deploy (GitHub Pages)

1. Create a repository (e.g. `YOUR-USERNAME.github.io` or any name).
2. Push this project to the `main` branch.
3. In the repo: **Settings → Pages → Source: GitHub Actions**.
4. The included workflow (`.github/workflows/deploy.yml`) builds and publishes automatically on every push.
5. After the first deploy, update the `og:image` / `og:url` URLs in `index.html` with your real Pages URL so the LinkedIn link preview works.
