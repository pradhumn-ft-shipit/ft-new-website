# Visual Design Guide

_Visual specifications for the FastTrackr AI website. Light theme, dark fonts, very dark green for buttons. Clean, professional, B2B-conservative. This document is the source of truth for visual decisions — copy lives in the other markdown files; this one tells you how to render it._

---

## 1. Design System Foundation

### 1.1 Color Palette

**Backgrounds**
| Token | Hex | Use |
|---|---|---|
| `bg-primary` | `#FFFFFF` | Default page background |
| `bg-secondary` | `#F7F9F8` | Subtle section dividers, alternating sections |
| `bg-tint` | `#F0F5F2` | Final CTA section, optional emphasis blocks (very subtle green tint) |

**Text**
| Token | Hex | Use |
|---|---|---|
| `text-primary` | `#0F172A` | Headlines, body emphasis (very dark navy) |
| `text-secondary` | `#475569` | Body copy, descriptions |
| `text-muted` | `#94A3B8` | Captions, small print, footer secondary |

**Brand & Accent**
| Token | Hex | Use |
|---|---|---|
| `brand-green` | `#2DD4A0` | Logo accent, hover highlights, small icon strokes |
| `button-primary` | `#0A3D2E` | Primary buttons (very dark green) |
| `button-hover` | `#15523E` | Primary button hover state |
| `button-text` | `#FFFFFF` | Text inside primary button |

**Borders & Dividers**
| Token | Hex | Use |
|---|---|---|
| `border-subtle` | `#E2E8F0` | Card borders, dividers |
| `border-strong` | `#CBD5E1` | Form inputs, accordions |

**Rule of thumb:** 90% of the page is `bg-primary` + `text-primary`/`text-secondary`. Brand green is an accent, not a wash. Dark green buttons are the only dense color application — they should feel intentional.

### 1.2 Typography

**Font family:** Single family across the entire site. Variable font weights.

**Type scale (desktop / mobile):**

| Style | Desktop | Mobile | Weight | Use |
|---|---|---|---|---|
| Display | 72px / 80px line | 44px / 52px | 700 | Hero headline only |
| H1 | 56px / 64px | 36px / 44px | 700 | Page titles |
| H2 | 40px / 48px | 30px / 38px | 700 | Section headlines |
| H3 | 28px / 36px | 22px / 30px | 600 | Card headlines, subsections |
| H4 | 20px / 28px | 18px / 26px | 600 | Small subheads, FAQ questions |
| Body Large | 20px / 30px | 18px / 28px | 400 | Hero subhead, section subheads |
| Body | 16px / 26px | 16px / 26px | 400 | Default body |
| Body Small | 14px / 22px | 14px / 22px | 400 | Captions, secondary |
| Eyebrow | 13px / 16px | 13px / 16px | 600 uppercase | Section labels above headlines |

**Letter spacing:** Default tracking. Tighten Display and H1 by –0.02em. Eyebrow text uses +0.08em.

**Line length:** Max 65 characters for body copy. Headlines can run longer.

### 1.3 Spacing & Grid

- Container max-width: **1280px** with 24px side padding (desktop), 16px (mobile).
- Section vertical padding: **120px top + bottom** (desktop), **64px** (mobile).
- Card internal padding: **32px** (desktop), **24px** (mobile).
- Grid gap between cards: **24px** standard, **16px** for tight grids.
- Gap between Hero and first scroll section: large (160px+) — let the hero breathe.

### 1.4 Buttons

**Primary button**
- Background: `button-primary` (#0A3D2E)
- Text: white, 16px, weight 600
- Padding: 14px vertical, 28px horizontal
- Border radius: 8px (or 999px for fully rounded — pick one and stay consistent)
- Hover: `button-hover` background, subtle scale 1.02
- No shadow at rest; subtle shadow on hover

**Secondary / text link**
- Color: `text-primary`
- 16px, weight 500
- Optional underline on hover
- Trailing arrow ` →` for forward action, ` ↓` for scroll

**Tertiary / "Learn more →"**
- Color: `text-primary` or `brand-green`
- 14–15px, weight 500
- Always with trailing ` →`

Across the site there should be **one** primary CTA per section maximum. Multiple primaries = decision fatigue.

### 1.5 Cards

**Default card**
- Background: white
- Border: 1px solid `border-subtle`
- Border radius: 12px
- Padding: 32px
- Hover (where clickable): subtle lift (translate-y –2px) + shadow `0 4px 16px rgba(15,23,42,0.06)`

**Stat card** (used in Outcomes section)
- Same as default but stat number is the focal point — see §6.

**ICP card** (used in §7)
- Default card + small icon + arrow link footer.

### 1.6 Icons

- Style: **line/monoline**, weight ~1.75–2px
- Size: 24px standard, 32px for feature blocks, 40px for hero-adjacent
- Color: `text-primary` by default; `brand-green` for emphasis
- Library: Lucide, Phosphor (regular weight), or Heroicons (outline)
- **No filled-color icons. No 3D illustrations. No emoji.**

### 1.7 Imagery

- **Photographs:** only for testimonial avatars (people), team shots on About page. Crop to circle. ~80px diameter.
- **Product screenshots:** clean, framed in a subtle browser-chrome wrapper (rounded corners, light gray header bar). Max width 1100px in section.
- **Illustrations:** minimal. If used, abstract/geometric shapes only — never characters or scenes.

### 1.8 Mobile

- Single column at <768px
- Touch targets ≥44px
- Sticky header collapses to hamburger
- All grid cards stack vertically
- Reduce section padding by ~50% on mobile (120px → 64px)

---

## 2. Section-by-Section Visual Specs

Section numbers match `02-homepage.md`.

---

### §0. HEADER

**Layout:** Full-width, sticky on scroll.
**Height:** 72px desktop, 64px mobile.
**Background:** `bg-primary` (white). On scroll, add subtle `border-bottom: 1px solid border-subtle` and slight shadow `0 1px 3px rgba(15,23,42,0.04)`.

**Content alignment:**
- Logo: left (24px from edge)
- Nav links: center-right
- CTA "Book a Demo": far right (primary button, but slightly smaller — 12px/24px padding)

**Dropdowns:** open on hover (desktop) and tap (mobile). Dropdown panel has white bg, subtle shadow, 16px padding, 240px min-width. Each item: 12px padding, hover background `bg-secondary`.

**Active page indicator:** none on top-level (keep it clean), but underline current nav item with brand-green 2px on dropdown items.

**Mobile:** Hamburger icon top-right replaces nav. Drawer slides in from right, full-height, white bg. CTA at bottom of drawer.

---

### §1. HERO

**Layout:** Full-width with 1280px container, content **left-aligned** (matches the current site's centered approach OR shift to left-aligned for a more modern editorial feel — recommend **left-aligned** with content occupying ~60% of container width).

**Background:** Pure white `bg-primary`. Optional: very subtle radial gradient or geometric shape in the upper-right, brand-green at 5% opacity, to add interest without distraction. Keep it abstract.

**Vertical spacing:** 120px top padding, content occupies ~70vh.

**Content stack (top to bottom):**
1. Optional eyebrow text — "FOR ADVISOR TRANSITIONS" — small, brand-green, uppercase, 8px below it
2. Headline — Display style, max 2 lines
3. 24px gap
4. Subhead — Body Large, max 2 lines, `text-secondary`
5. 40px gap
6. Primary CTA "Book a Demo"
7. Inline 24px right of CTA: secondary link "See how it works ↓"

**Hero visual element (right side, optional):** A subtle product mockup or abstract shape. Recommend **launching without a hero image** — typography alone, more whitespace. This matches modern B2B SaaS (Linear, Vercel, etc.) and avoids fake screenshots.

**Mobile:** Center-aligned, smaller type per scale. Stack CTA on its own row, full-width or auto-width.

---

### §2. SOCIAL PROOF BAR

**Layout:** Full-width strip, **light bg** (`bg-secondary`).
**Padding:** 48px vertical.

**Content stack:**
1. Eyebrow text (centered): "Shaped by advisors and operators at" — `text-muted`, 13px, weight 500
2. 24px gap
3. Logo strip — 5–7 logos, evenly spaced, centered

**Logo treatment:**
- Convert all logos to **monochrome** — `text-muted` (#94A3B8) or pure grayscale at 70% opacity
- Max height: 40px each. Width auto.
- On hover (if linked): full-color version
- Equal visual weight — scale logos so no single one dominates

**Mobile:** Logos in a 2 or 3-column grid, smaller (32px max height), still monochrome.

---

### §3. THE PROBLEM

**Layout:** Container 1280px, `bg-primary`.
**Vertical padding:** 120px.

**Section header (top):**
1. Optional eyebrow: "THE PROBLEM" or "WHAT'S BROKEN"
2. H2 headline — left-aligned or centered (recommend **centered** for thematic sections, **left-aligned** for product sections)
3. Subhead — Body Large, max 70 characters wide, `text-secondary`
4. 64px gap before cards

**Pain card grid:** 6 cards, **3 columns × 2 rows** on desktop, 2×3 on tablet, 1×6 on mobile. Gap: 24px.

**Each card:**
- Background: white
- Border: 1px solid `border-subtle`
- Border radius: 12px
- Padding: 32px
- **Top of card:** large stat or short phrase (the bold opener like "90 days. Sometimes longer.") rendered in **H3 size**, `text-primary`
- 16px gap
- Description: Body, `text-secondary`
- **No icons** in these cards — let the bold opener be the focal point. Adding icons would clutter.

**Optional accent:** small dot or short colored bar (4px × 32px) at top-left of each card in `text-muted` — adds rhythm without color overload.

**Hover:** Subtle lift + shadow.

**Mobile:** Cards stack. Reduce padding to 24px.

---

### §4. THE SOLUTION

**Layout:** `bg-secondary` (subtle off-white) to differentiate from §3.
**Padding:** 120px.

**Section header:** Centered. Eyebrow "WHAT WE BUILT" → H2 → body paragraph (max 700px wide, centered).

**Three capability blocks:** **3 columns** desktop, stack on mobile.

**Each block:**
- No card border — this is a more open, "feature row" style
- Icon (32px, line-style, brand-green) at top
- 16px gap
- H3 title (Data Collection / Documentation / Project Management)
- 12px gap
- Body copy, `text-secondary`

**Visual separator between blocks:** 1px vertical divider in `border-subtle` between columns (desktop only). Adds clean structure without making each one look like an isolated card.

**Optional product screenshot below the three blocks:** A unified product UI mockup spanning the full container width, framed with subtle browser chrome. This visually proves the product exists. If no screenshot is ready, **omit entirely** — don't fake it.

---

### §5. HOW IT WORKS

**Layout:** `bg-primary`. **Alternating left-right layout** for each step on desktop.
**Padding:** 120px.

**Section header:** Centered. H2 + subhead.

**Each step (4 total):** Two-column row with **120px gap** between rows.
- **Left column (or right, alternating):** Step number + headline + description
  - Step number: 16px eyebrow style, brand-green, "STEP 01"
  - 8px gap
  - H3 step title
  - 16px gap
  - Body, `text-secondary`
- **Other column:** Visual — product screenshot, simple diagram, or stylized graphic
  - Frame in subtle browser chrome or floating panel (white bg, soft shadow)
  - Max width: 540px
  - If no asset ready: render an abstract illustration (geometric shapes representing the step) OR just leave column empty with vertical numbered marker

**Vertical connector:** A subtle dotted line on the far left, connecting all 4 step numbers. This creates the "journey" feel.

**Mobile:** Stack vertically. Step number above headline. Visual below text. Connector becomes left-side dotted vertical line through all steps.

---

### §6. OUTCOMES

**Layout:** `bg-secondary`.
**Padding:** 120px.

**Section header:** Centered, H2.

**Stat cards row:** **4 cards in a single row** desktop, 2×2 tablet, 1×4 mobile. Gap: 24px.

**Each stat card:**
- Background: white
- Border: 1px `border-subtle`
- Border radius: 12px
- Padding: 32px
- Centered content
- **Stat number/phrase:** Display size (72px desktop), `button-primary` color (the dark green) — this is one of the few places the dark green appears as text, and it earns it
- 12px gap
- Stat label: H4, `text-primary`
- 8px gap
- Brief description: Body Small, `text-secondary`

**Soft kicker text below stat row:** 64px gap, then a single-line italic paragraph, centered, max 700px wide, `text-secondary`. Pulls the section back from cold numbers to human reality.

**Flywheel loop visual:** 80px gap below kicker.
- Custom SVG: 4 nodes arranged in a circle with directional arrows looping clockwise
- Each node: rounded rectangle (160×64px) with the outcome label inside, white bg, 1px brand-green border
- Arrows: brand-green, 2px stroke, with arrowhead
- Centered icon in middle (optional): a small "↻" cycle glyph
- Caption below loop: Body Small, italic, centered, `text-secondary`

**Mobile:** Flywheel rotates to vertical — 4 stacked nodes connected by down-arrows, then a final up-arrow looping back.

---

### §7. BUILT FOR EVERY PLAYER (ICP CARDS)

**Layout:** `bg-primary`.
**Padding:** 120px.

**Section header:** Centered. H2 + subhead.

**Card grid:** **5 cards** in a **3-on-top, 2-centered-below** layout (desktop). On tablet: 2×3 with one centered orphan. On mobile: 1×5 stack.

**Each ICP card:**
- White bg, 1px `border-subtle`, 12px radius, 32px padding
- Top: industry-relevant icon (32px, line-style, `text-primary`)
- 24px gap
- H3 audience name
- 12px gap
- Body description (2 lines max), `text-secondary`
- 24px gap
- "Learn more →" tertiary link, `text-primary`, hover → brand-green
- Entire card clickable, hover → lift + shadow

**Icon suggestions per ICP:**
- Transition Consultants: handshake / briefcase
- Breakaway Advisors: outbound arrow / running figure abstract
- Acquisitive RIAs: connecting nodes / merge arrow
- Independent Broker-Dealers: building / shield
- Custodians: vault / pillar / bank

Use Lucide or Phosphor — pick recognizable, conservative metaphors. Don't get cute.

---

### §8. BEYOND TRANSITIONS

**Layout:** `bg-secondary`.
**Padding:** 100px (slightly reduced — this is a secondary section).

**Section header:** Left-aligned (departs from earlier sections). Eyebrow "AND BEYOND" → H2 → subhead.

**Two cards side-by-side** (desktop), stacked mobile.

**Each card:**
- White bg, 1px border, 12px radius
- Padding: 40px (slightly larger — these are featured)
- Top: icon (40px) OR small product screenshot thumbnail (240×140px, rounded)
- 24px gap
- H3 module name
- 12px gap
- Description
- 24px gap
- "Learn more →"

**Mobile:** Stack with full-width cards.

---

### §9. INTEGRATIONS

**Layout:** `bg-primary`.
**Padding:** 80px (compressed — this is intentionally light).

**Section header:** Left-aligned. H3 (smaller than other section headers — this is utility, not narrative). Body description below.

**Logo grid:** 4 columns × 2 rows = 8 logos. Single row of 6 also fine if fewer integrations.
- Each logo cell: 1px border subtle, white bg, 16px padding
- Logos: monochrome, `text-muted` color, 32px max height, centered in cell
- Hover: full-color logo

**Footnote text:** Below grid, `text-muted`, Body Small. The "Some integrations are live..." disclaimer.

---

### §10. TESTIMONIALS

**Layout:** `bg-secondary`.
**Padding:** 120px.

**Section header:** Centered. H2.

**Layout option A — Featured + grid (recommended):**
- **Top:** Featured testimonial (Cana Wealth) full-width card, slightly larger type — H4 quote, name in H4 weight
- **Below:** 2×2 or 1×3 grid of remaining testimonials in smaller cards

**Layout option B — Carousel:**
- Single testimonial at a time, large
- Arrow controls and dot indicators
- Auto-rotate (optional)

Recommend **option A** — gives Cana Wealth the prominence the testimonial deserves, and lets visitors scan the rest.

**Testimonial card structure:**
- White bg, 1px border, 12px radius, 32px padding
- Subtle quote mark visual top-left (large, brand-green at 20% opacity)
- Quote text: Body Large or H4, `text-primary`
- 24px gap
- Avatar (circular, 56px) + name and role stacked to the right
- Name: Body, weight 600
- Role + firm: Body Small, `text-secondary`

**Mobile:** Stack all testimonials vertically. No carousel on mobile (worse UX).

---

### §11. FAQs

**Layout:** `bg-primary`. Container narrower than rest of page (max 800px).
**Padding:** 100px.

**Section header:** Centered. H2.

**Accordion list:**
- Each item: full-width row, 1px `border-subtle` bottom (no top border for first, no bottom for last)
- Question: Body Large, `text-primary`, weight 600
- Right-aligned: + (closed) / – (open) icon, 20px, `text-secondary`
- Vertical padding per row: 24px
- Click row to expand answer
- Answer: Body, `text-secondary`, 16px top padding, 24px bottom

**Animation:** Smooth height transition, 200ms ease.

**Default state:** All collapsed. (Some sites open the first one — but for B2B with 8 questions, all-collapsed is cleaner.)

---

### §12. FINAL CTA

**Layout:** `bg-tint` (subtle green tint) — this is the only section where the green wash earns its place.
**Padding:** 120px.
**Container:** narrower (max 900px), centered.

**Content stack (centered):**
1. H2 headline
2. 16px gap
3. Subhead, Body Large, `text-secondary`
4. 40px gap
5. Primary CTA "Book a Demo" — slightly larger button (16px/32px padding)
6. 16px gap
7. "Or email vineet@fasttrackr.ai" — Body Small, `text-secondary`

**Optional decorative element:** Subtle abstract shape in `brand-green` at 10% opacity behind the CTA. Keep it minimal.

---

### §13. FOOTER

**Layout:** Full-width, `bg-secondary` (lighter) OR `text-primary` background with white text (darker, more dramatic). **Recommend lighter version** for consistency with the rest of the light theme.
**Padding:** 80px top, 32px bottom.

**Top section — main grid:**
- 5 columns on desktop: Brand block (wider, ~25%) + 4 nav columns (~18.75% each)
- Brand block: logo + tagline (max 240px wide, Body Small `text-secondary`)
- Nav columns: H4-style heading (weight 600, 14px, uppercase, `text-primary`) + list of links (Body Small, `text-secondary`, hover → `text-primary`)
- Vertical gap between heading and first link: 16px
- Vertical gap between links: 12px

**Mid section — Advisor Ally Podcast block:**
- 64px above and below
- Centered or left-aligned card
- Background: white, 1px border, 12px radius, 32px padding
- Title: H4
- Description: Body Small
- 3 platform link buttons in a row: YouTube, Apple, Spotify (small text-only buttons or icon buttons)

**Bottom strip:**
- 1px top border, `border-subtle`
- 24px vertical padding
- 3-section row: left = social icons (24px each, `text-muted`, hover `text-primary`), center = legal links (`Privacy Policy · Terms of Service`, Body Small `text-muted`), right = copyright + "Backed by gAI Ventures" tag (Body Small `text-muted`)

**Mobile:**
- Brand block on top
- Nav columns stack vertically OR collapse into accordion-style expandable sections
- Podcast block stays
- Bottom strip stacks: social, then legal, then copyright

---

## 3. Page Templates Beyond Homepage

### Solutions / ICP / Other internal pages — shared template

**Hero:** Smaller than homepage hero. Display → H1, max 2 lines, with single CTA. ~60vh max.
**Sections:** Same visual rhythm as homepage — alternating `bg-primary` and `bg-secondary`, generous vertical padding, max 1280px container.
**Sidebars:** None. Single-column flow.
**Sticky elements:** Header only. Optional sticky CTA bar at bottom on mobile.

---

## 4. Build & Hand-off Notes

- **Framework:** If on Framer (current site), build using the existing component library where possible. If migrating, recommend Next.js + Tailwind for type/spacing consistency.
- **Font loading:** Self-host Inter or Geist for performance. Avoid Google Fonts CDN for compliance reasons (some buyers have restrictive infosec policies).
- **Animations:** Use sparingly. Hover lifts, fade-in on scroll for sections (subtle, 400ms), accordion transitions. **No parallax, no autoplay video, no scroll-jacking.**
- **Accessibility:** Maintain 4.5:1 contrast minimum. All buttons keyboard-accessible. Focus states visible (use brand-green outline). Alt text on every image and icon.
- **Performance:** Optimize images (WebP), lazy-load below-fold visuals, avoid heavy SVGs in flywheel — keep loop diagram simple.
- **CMS notes:** Section toggles for Integrations (§9), with default = visible. Logo grids in §2 and §9 should be CMS-managed so the team can swap logos without dev support.

---

## 5. What to avoid (visual)

- **No gradients** beyond optional 5% opacity hero accent. This is a conservative B2B audience — gradients read as consumer/startup.
- **No 3D illustrations** or character illustrations. The wealth management buyer doesn't connect with cartoon advisors.
- **No emoji** anywhere on the site.
- **No autoplay video.** If video is used (e.g., product demo), require click-to-play.
- **No "AI" stock imagery** — neural networks, glowing brains, robot hands. The current site doesn't do this; the new site shouldn't either.
- **No overly bright colors.** The brand green is bright in the logo but should feel like a quiet accent in the UI, not a wash.
- **No more than one primary CTA per section.** Decision fatigue kills conversion.
- **No carousels on mobile.** Stack vertically.
- **No pop-up exit-intent modals.** Tone-deaf for this buyer.

---

## 6. Decisions logged here that the team should confirm

- [ ] Headline alignment — left-aligned hero (modern editorial) vs centered (current site) — recommend left-aligned
- [ ] Footer background — light (`bg-secondary`) vs dark — recommend light for consistency
- [ ] Flywheel visual — custom SVG vs simple text loop with arrow icons — recommend custom SVG
- [ ] Hero visual element — typography only vs subtle product mockup — recommend typography only at launch
- [ ] Testimonials layout — featured + grid (option A) vs carousel (option B) — recommend option A
- [ ] Final CTA section background — `bg-tint` (subtle green) vs `bg-secondary` (off-white) — recommend `bg-tint`

If anything in this document conflicts with the actual brand guidelines from the FastTrackr design team, the brand guidelines win. This document is the starting point for designers who don't have those guidelines in hand.
