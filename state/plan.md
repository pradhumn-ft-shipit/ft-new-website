# Plan

Living checklist of website build progress. Update as work moves.

---

## Done

- [x] Reconciled `CLAUDE.md` with reality (status section, tokens pointer, frontend-design skill, CTA + SVG guardrails)
- [x] Removed `05-decisions-and-guardrails.md` cross-references from `guideline-copy/01-website-structure.md`
- [x] Seeded `state/plan.md` and `state/decisions.md`
- [x] **Step 1 — Scaffold** Astro 5 + Tailwind 4 + sitemap; TypeScript on; static output; Vite-plugin Tailwind
- [x] **Step 2 — Design tokens** in `src/styles/tokens.css` via `@theme` + responsive `@utility` classes (text-display, text-h1..h4, text-body-*, text-eyebrow, section-y/-md/-sm, container-site)
- [x] **Step 3 — Sitewide chrome** — `Header.astro` (sticky 72px, three dropdowns, Book a Demo CTA, mobile drawer with focus trap, scroll-shadow) + `Footer.astro` (5-col grid, podcast block, social/legal strip) wired into `BaseLayout.astro` with skip-link
- [x] **Step 4 — Reusable components** — Button, Card, StatCard, ICPCard, TestimonialCard (default + featured), FAQItem (native `<details>`), SectionShell, Eyebrow
- [x] **Step 5 — Custom SVGs** — Logo, IconChevronDown, IconMenu, IconClose, SocialIcons (5), HeroAccent, FlywheelLoop (desktop compass + mobile chain), StepConnector, DotAccent, monoline Icon library
- [x] **Step 6 — Homepage** — all 12 sections (§1–§12), copy verbatim from `02-homepage.md`
- [x] **Step 7 — ICP pages (5)** — single `ICPLayout` content-driven, routes under `/who-we-serve/`
- [x] **Step 8 — Solutions pages (4)** — Advisor Transitions (deep), Client Onboarding, Meeting Assistant, Document Intelligence
- [x] **Step 9 — Pricing + About + Contact + legal stubs** — contact form posts to Vercel serverless `/api/demo.js` → Resend (honeypot + redirect-based UX with `?status=success|error`)
- [x] **Step 10 — Performance pass (bundle proxy)** — per-page HTML 24–72KB, shared CSS 30KB. Real Lighthouse run still owed (see Next).

## In progress

_(none)_

## Next — owed before launch

- [ ] **Real Lighthouse run** — `npm run dev` then run Lighthouse mobile + desktop on `/`, `/who-we-serve/transition-consultants`, `/solutions/advisor-transitions`, `/pricing`, `/contact`. Confirm LCP < 2.5s mobile, CLS < 0.1, TTI < 3.5s.
- [ ] **Visual QA in a browser** — agent never opened a browser. Check Header dropdowns, mobile drawer, FAQ accordions, FlywheelLoop on both layouts, hero accent, contact form happy + error states.
- [ ] **Self-host Inter font** — currently the CSS falls back through system stack. Add `@font-face` with locally hosted Inter variable file in `public/fonts/` and `<link rel="preload">` in `BaseLayout`.
- [ ] **Replace logo placeholders** — `SocialProof.astro` and `Integrations.astro` ship text placeholders. Swap with cleared logos before launch.
- [ ] **Real product screenshots** for `HowItWorks` step visuals (currently abstract panel placeholders).
- [ ] **Avatar photos** for `Testimonials.astro` and `About.astro` (currently initials fallbacks).
- [ ] **Privacy + Terms copy** from counsel — pages exist as stubs at `/privacy-policy` and `/tos`.
- [ ] **Step 11 — Vercel deploy** (user action — needs auth):
  1. `npm i -g vercel` (or `npx vercel` ad-hoc)
  2. `vercel login`
  3. From the project root: `vercel link` then `vercel --prod` (or push to a GitHub repo connected to Vercel)
  4. In Vercel project → Settings → Environment Variables, set:
     - `RESEND_API_KEY` (required)
     - `DEMO_FORM_TO` (defaults to `vineet@fasttrackr.ai`)
     - `DEMO_FORM_FROM` (defaults to `FastTrackr Demo <noreply@fasttrackr.ai>` — needs a verified Resend sender)
  5. Smoke-test the demo form on the preview URL before promoting.

---

## Targets (per CLAUDE.md)

- LCP < 2.5s mobile · CLS < 0.1 · TTI < 3.5s · Page weight < 500kb
- Mobile-first 375px base, no horizontal scroll
- Every CTA → Book a Demo
- All decorative + iconographic visuals = inline SVG
