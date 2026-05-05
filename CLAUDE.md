# FastTrackr AI Website — Agent Instructions

Pair programmer building the FastTrackr AI marketing site. Multi-page static site, hosted on Vercel.

**Audience:** B2B marketing site for an AI tool focused on **wealth-management advisor transitions** (transition consultants, breakaway advisors, RIAs, IBDs, custodians). Tone is enterprise-conservative, not consumer-bright.

**Every session:** Read `state/plan.md` first if it exists; update it when work is done. Append non-obvious decisions to `state/decisions.md`.

Copy and structure live in `/guideline-copy`. Read those files before building any page.

---

## Status

Pre-implementation. No `package.json`, no framework scaffolded yet, no build/lint/test commands. The first non-trivial task is to scaffold Astro + Tailwind (see `state/plan.md`). Until then, work is copy-organization, design-token extraction, and component planning.

---

## Where things live

```
guideline-copy/
├── 01-website-structure.md   # Site map, nav, page index — start here
├── 02-homepage.md             # Homepage copy + sitewide Header (§0) and Footer (§13)
├── 03-icp-pages.md            # 5 "Who We Serve" pages, shared template
├── 04-other-pages.md          # Solutions sub-pages, Pricing, About
└── 06-visuals.md              # Design tokens, type scale, components — source of truth for UI

state/
├── plan.md                    # Done, in progress, next. Read first, update always.
└── decisions.md               # Append-only log of non-obvious decisions.
```

---

## Stack

- **Framework:** Astro (preferred) or Next.js with static export. Astro is the cleaner fit — content-heavy, ships near-zero JS, easy component reuse across the ICP pages.
- **Hosting:** Vercel — Git deploy, preview URLs per branch
- **Forms:** Vercel serverless function → Resend email to the team. No CRM yet.
- **Styling:** Tailwind or vanilla CSS with semantic tokens. No CSS-in-JS.

---

## Design

Mobile-first methodology, not mobile-priority. Build base styles for 375px, layer up via media queries. Desktop is fully designed, just built on a mobile foundation. No horizontal scroll ever.

Design tokens (colors, type scale, spacing, components) are defined in `guideline-copy/06-visuals.md` — that file is the source of truth. Don't invent tokens; if one is missing, add it there first, then mirror into `tailwind.config` / `tokens.css`.

**Invoke the `frontend-design` skill before building or restyling any UI.** (Installed globally; no project-local file needed.)

---

## Performance

| Metric | Target |
|---|---|
| LCP | < 2.5s on mobile |
| CLS | < 0.1 |
| TTI | < 3.5s |
| Page weight | < 500kb |

Lighthouse (mobile + desktop) before marking any page done. Static export wherever possible.

---

## Guardrails

- **Copy is sacred.** Pull from `/guideline-copy`. Don't rewrite, paraphrase, or invent.
- **No invented testimonials, stats, or logos.**
- **Every CTA goes to Book a Demo.** Single primary CTA per section. Self-serve sign-up can live behind a smaller link in the footer or pricing page if needed.
- **Always author SVGs** for icons, decorative shapes, flywheels, and animations — inline as Astro components, not raster `<img>`. Photographs only for testimonial avatars and product screenshots (per `06-visuals.md`).
- Secrets in Vercel env vars, never in code.
- More than 4 files touched → break into steps.
- Destructive actions → confirm first.
- New dependency → justify why native won't do, and log it in `state/decisions.md`.
