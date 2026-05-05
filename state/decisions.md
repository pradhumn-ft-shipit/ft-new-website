# Decisions

Append-only log of non-obvious decisions made during the build. Newest at the bottom. Each entry: date, decision, why.

---

## 2026-05-05, Dropped `05-decisions-and-guardrails.md`

**Decision:** Removed all references to `05-decisions-and-guardrails.md` from `CLAUDE.md` and `guideline-copy/01-website-structure.md`. The file does not exist in the repo and is not planned.

**Why:** Guardrails that matter live directly in `CLAUDE.md`; per-section visual rules live in `06-visuals.md`. A separate doc was redundant.

## 2026-05-05, Frontend-design skill is global, not project-local

**Decision:** Removed the instruction to load `skills/frontend-design.md`. Replaced with "Invoke the `frontend-design` skill", the skill is installed globally via the Claude plugins marketplace.

**Why:** No project-local skill file exists; pretending one does would mislead future sessions.

## 2026-05-05, SVG-first for all decorative + iconographic visuals

**Decision:** All icons, decorative shapes, flywheels, and animations are authored as inline SVG Astro components. Photographs reserved for testimonial avatars and product screenshots only.

**Why:** Page-weight budget is 500kb. Inline SVGs scale, theme cleanly with `currentColor`, and avoid image-decoding LCP penalties.

## 2026-05-05, Astro 5 + Tailwind 4 (Vite plugin), no `@astrojs/tailwind`

**Decision:** Stack is Astro 5 with Tailwind 4 wired via the `@tailwindcss/vite` plugin (not the legacy `@astrojs/tailwind` integration). Sitemap is the only other Astro integration. No CSS-in-JS, no UI framework dependency (no React/Vue), pages and components are plain `.astro`.

**Why:** Tailwind 4 deprecated the Astro integration in favor of the Vite plugin. CLAUDE.md mandates "no CSS-in-JS" and "justify any new dependency." Keeping the dependency surface to Astro + Tailwind + sitemap keeps page weight low and aligns with the static-export target.

## 2026-05-05, Vercel-native serverless function for the demo form, not Astro API route

**Decision:** The Book-a-Demo form posts to `/api/demo.js` at the project root, a Vercel serverless function authored as plain ES-module JS, rather than a `src/pages/api/demo.ts` Astro API route.

**Why:** `astro.config.mjs` is `output: 'static'`, which doesn't emit Astro API routes. Vercel's filesystem routing picks up `/api/*.js` independently of the framework, so this gives us a real backend for the form without abandoning static export, and without adding `@astrojs/vercel` to dependencies. The function calls Resend's REST API via plain `fetch` so we don't need the `resend` SDK either. Required env vars: `RESEND_API_KEY` (mandatory), `DEMO_FORM_TO` (defaults to `hello@fasttrackr.ai`), `DEMO_FORM_FROM`. Form supports both `application/x-www-form-urlencoded` (no-JS post + redirect) and `application/json`.

## 2026-05-05, Lighthouse not run; bundle inspection used as proxy

**Decision:** Step 10 was verified by inspecting build output sizes rather than running Lighthouse. Per-page HTML ranges from 24KB (legal stubs) to 72KB (homepage). Single shared CSS file is 30KB. First paint: ~30–100KB depending on page, well under the 500KB budget.

**Why:** Real Lighthouse needs a headless Chrome runtime. The user should run `npm run dev` and either Chrome DevTools Lighthouse or `npx lighthouse http://localhost:4321` for actual LCP/CLS/TTI numbers before marking the perf gate green.

## 2026-05-05, Tokens live in `src/styles/tokens.css` via `@theme`

**Decision:** Design tokens are defined once in `src/styles/tokens.css` using Tailwind 4's `@theme` block. The responsive type ramp is exposed as `@utility` classes (`text-display`, `text-h1`–`h4`, `text-body-lg`/`body`/`body-sm`, `text-eyebrow`) because `@theme` alone can't express the mobile-vs-desktop pairs that `06-visuals.md` specifies. Section padding rhythm and the 1280px container also live as utilities (`section-y`, `section-y-md`, `section-y-sm`, `container-site`).

**Why:** Single source of truth, one pass to swap themes, and components avoid hard-coded hexes. Responsive-pair utilities mean each heading is a single class, not a Tailwind `text-X md:text-Y` chain repeated 30 times.
