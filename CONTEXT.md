# Nikos Benakis — Personal Website

## About
A minimal personal website to showcase business and personal experience.
Goal: show the world a brief of business & personal experience.

---

## Owner
- **Name:** Nikos Benakis
- **Location:** Athens, Greece
- **Current role:** Ben Labs — Engineering
- **Previous:** Uizard/Miro (Tech Lead), Multiplier Holdings (Engineering), Workable (Software Engineer), EY (Consultant), snapcar.gr (Founder)
- **Experience:** ~10 years professional
- **Focus:** AI, Product, Engineering
- **Primary language:** TypeScript, full-stack web development
- **GitHub:** github.com/NickolasBenakis (132 repos, notable: cloudflare-images-client, secure-pdf-chat)
- **X:** x.com/nickolasbenakis
- **Connections:** Worked with Noah Pepper (CEO) and Dexter Zhuang (PM) at Multiplier Holdings

---

## Design Inspirations

### 1. Noah Pepper — noahpepper.com
- Radically minimal, single-page, ~200 words total
- Hugo + Tufte CSS, zero JavaScript, no analytics
- Monochrome (black text on white), academic/literary typography
- Circular profile photo (120x120px), floated left
- Sections: bio paragraph, Writing (4 items), Work (3 items), Elsewhere (social links)
- Simple top nav: Home, About, Startups, Syllabus
- Philosophy: "substance over style", "my time and yours is valuable"
- Noah is CEO of Multiplier Holdings — Nikos worked with him there

### 2. Dexter Zhuang — dexterzhuang.com
- Professional authority blog, WordPress + Genesis Framework
- Source Sans Pro + Libre Baskerville (serif for body, editorial feel)
- Blue accent (#155ac1) on white, near-black body text (#111111)
- Hero section with bold intro + client logo social proof bar (Dropbox, Multiplier, Xendit, etc.)
- Extended bio ("Who Am I?") with specific metrics and achievements
- Navigation with dropdown categories (Product Management, Growth, Career, etc.)
- ConvertKit newsletter, Google Analytics, WordPress Popular Posts
- Philosophy: "professional credibility and authority"
- Dexter was a PM at Multiplier Holdings — Nikos worked with him there

### 3. Float.build
- Single-page product lab site, indie-studio aesthetic
- **Tech:** Astro v4.3.5 + Tailwind CSS v3, no JS frameworks, near-zero JS shipped
- **Fonts:** Geist (Vercel's open-source sans) for body, custom FloatSans500 for headline only
- **Colors:** Teal-tinted near-black foreground (hsl(191, 28%, 11%)) — NOT pure black. Accent: #1B9FD5 cyan. Light gray borders (#d9d9d9)
- **Typography:** Small confident text (14px body on desktop), 160-170% line height, antialiased. Section labels: 11px uppercase, tracked-wide, semibold
- **Animations:** Text reveal mask effect (translateY(100%) → 0, 0.8s, cubic-bezier(0.7, 0, 0.3, 1)), staggered delays. Continuous float wobble (4s infinite). Hover: subtle scale/opacity.
- **Layout:** No navbar, no hamburger — content IS the navigation. Fixed-width headline. Constrained content widths (320-552px). Generous padding (py-20 px-24).
- Styled ::selection (inverted foreground/background)
- Philosophy: "less fuss (simplicity) as a way to achieve elegance in design"

### 4. Railway — blog.railway.com/p/moving-railways-frontend-off-nextjs
- Published April 3, 2026 by Victor Ramirez
- Migrated from Next.js (Pages Router) → TanStack Start + Vite + Nitro
- **Why they left Next.js:** 10+ min build times (6 min was Next.js alone), app is overwhelmingly client-side (dashboard, WebSockets, real-time canvas), stuck on Pages Router with hacky shared layouts, App Router paradigm mismatch
- **Results:** Build time 10+ min → under 2 min (80%+ reduction), instant dev server start, instant HMR, per-module content-hashed chunks
- **Key stack:** TanStack Start (full-stack framework), TanStack Router (type-safe file-based), Vite (bundler/dev), Nitro (server layer), Fastly (edge CDN)
- Migrated 200+ routes in 2 PRs with zero downtime
- They sponsor Vite and TanStack financially
- Philosophy: "frontend framework should be optimized for iteration speed"

---

## Design Direction
**80% Noah + 20% Dexter + Float's craft details.**

- From Noah: single-page core, ~300 words max, monochrome, no visual noise, content IS navigation
- From Dexter: name-drop the companies, brief but specific roles, credibility layer
- From Float: tinted near-black text, small confident typography, one accent color, text reveal animation, generous whitespace, styled ::selection, antialiased

---

## Tech Stack

| Layer      | Choice                                                    |
|------------|-----------------------------------------------------------|
| Framework  | TanStack Start v1.167+ (Vite 8 + TanStack Router)        |
| Styling    | Tailwind CSS v4 (CSS-first config with @theme)            |
| Font       | Geist variable font (self-hosted woff2, 69KB)             |
| Animations | CSS only — text reveal (mask slide-up) + fade-in (gentle rise) |
| Hosting    | Vercel (planned)                                          |
| Bundler    | Vite 8 (via TanStack Start)                               |

### Why TanStack Start over Astro
Astro would be objectively better for a static personal site (zero JS, simpler). But part of the goal was to explore TanStack Start as a stack — the personal site is a low-stakes playground to learn the framework. Trade-off: React ships to the browser, more boilerplate, younger ecosystem.

### Why Vercel over Cloudflare Pages
Both work fine for a personal site. Vercel chosen because: Geist is Vercel's own font, TanStack Start deploys seamlessly, free tier is plenty, preview deployments per git push.

---

## Design System

### Colors
| Token             | Value                          | Usage                |
|-------------------|--------------------------------|----------------------|
| foreground        | hsl(191 28% 11%)              | Primary text — teal-tinted near-black, warmer than pure #000 |
| foreground-muted  | hsl(191 28% 11% / 70%)        | Secondary text, descriptions |
| accent            | #1B9FD5                        | Links, CTAs, "now" badge |
| border            | hsl(0 0% 85%)                 | Dividers, separators |
| surface           | hsl(0 0% 100%)                | Background — pure white |

### Typography
- Font: Geist (variable, 100-900 weight range)
- Body: text-sm (14px), leading-[170%], font-medium
- Headline (h1): text-2xl, font-medium, tracking-tight
- Section labels: text-[11px], font-semibold, tracking-widest, uppercase
- Footer: text-xs
- Global: -webkit-font-smoothing: antialiased

### Animations
- **Text reveal (headline):** translateY(100%) → translateY(0), opacity 0 → 1, 0.8s duration, cubic-bezier(0.7, 0, 0.3, 1) easing, overflow-hidden mask on parent
- **Fade in (sections):** translateY(12px) → translateY(0), opacity 0 → 1, 0.6s duration, ease-out, staggered delays (0.3s, 0.4s, 0.5s, 0.6s, 0.7s)

### Selection
- Background: foreground color (teal-black)
- Text: surface color (white)
- Creates an inverted selection effect

---

## Project Structure
```
nikosbenakis/
├── vite.config.ts                ← Vite + TanStack Start + Tailwind plugins
├── tsconfig.json                 ← TypeScript config, #/* path alias
├── package.json                  ← Dependencies, scripts (dev/build/preview)
├── src/
│   ├── router.tsx                ← TanStack Router setup (scroll restoration, preloading)
│   ├── styles.css                ← @font-face, @theme tokens, keyframes, global styles
│   ├── routeTree.gen.ts          ← Auto-generated route tree (do not edit)
│   ├── routes/
│   │   ├── __root.tsx            ← HTML shell, <head> meta/links, font preload
│   │   └── index.tsx             ← Homepage — all content, data arrays, SectionTitle component
│   └── components/
│       ├── TextReveal.tsx        ← Slide-up mask animation (used on headline)
│       └── FadeIn.tsx            ← Gentle fade-up wrapper (used on sections)
├── public/
│   ├── fonts/
│   │   └── GeistVF.woff2        ← Self-hosted Geist variable font (69KB)
│   ├── favicon.ico               ← Default (replace with custom)
│   ├── robots.txt
│   └── manifest.json
└── CONTEXT.md                    ← This file
```

---

## Key Implementation Decisions

### TanStack Start v1.167+ (new architecture)
- Uses standard `vite.config.ts` (NOT the old `app.config.ts` with vinxi)
- Plugin: `tanstackStart()` from `@tanstack/react-start/plugin/vite`
- Source files in `src/` (not `app/`)
- Root route uses `shellComponent` (not `component`)
- Uses `HeadContent` and `Scripts` from `@tanstack/react-router` (not `Meta`, `Html`, `Head`, `Body` from `@tanstack/react-start`)
- No manual `client.tsx` or `ssr.tsx` entry files — handled by the framework
- Path alias: `#/*` → `./src/*` (configured via tsconfig + package.json imports field)
- Route tree auto-generated at `src/routeTree.gen.ts`

### Scaffolded via @tanstack/cli
```bash
npx @tanstack/cli create nikosbenakis --no-examples --no-git --no-toolchain --package-manager npm --yes
```
Then customized: removed devtools, Header, Footer, ThemeToggle, about route, template styles. Replaced with minimal design system.

---

## Content Data (in index.tsx)

### Work
| Company              | Role              | Current |
|----------------------|-------------------|---------|
| Ben Labs             | Engineering       | yes     |
| Uizard / Miro       | Tech Lead         |         |
| Multiplier Holdings  | Engineering       |         |
| Workable             | Software Engineer |         |
| EY                   | Consultant        |         |
| snapcar.gr           | Founder           |         |

### Projects
| Name                     | Description                    | URL |
|--------------------------|--------------------------------|-----|
| cloudflare-images-client | Cloudflare Images API wrapper  | github.com/NickolasBenakis/cloudflare-images-client |
| secure-pdf-chat          | AI-powered PDF conversations   | github.com/NickolasBenakis/secure-pdf-chat |

### Social
| Label    | URL |
|----------|-----|
| GitHub   | github.com/NickolasBenakis |
| X        | x.com/nickolasbenakis |
| LinkedIn | TODO — needs real URL |
| Email    | TODO — needs real address |

---

## TODOs
- [ ] Update LinkedIn URL in `src/routes/index.tsx`
- [ ] Update email address in `src/routes/index.tsx`
- [ ] Verify work roles/descriptions are accurate
- [ ] Replace default favicon with custom one
- [ ] Deploy to Vercel
- [ ] Add custom domain
- [ ] Consider adding a /writing or /projects page later
- [ ] Consider adding a profile photo (circular, ~120px, like Noah's)
