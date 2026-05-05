# FastTrackr AI — Website Structure

_Reference document. Use this to navigate the other copy files._

---

## Site Map

```
Home
│
├── Solutions
│   ├── Advisor Transitions          ← primary product
│   ├── Client Onboarding
│   ├── Meeting Assistant
│   └── Document Intelligence
│
├── Who We Serve
│   ├── For Transition Consultants
│   ├── For Breakaway Advisors
│   ├── For Acquisitive RIAs
│   ├── For Independent Broker-Dealers
│   └── For Custodians
│
├── Resources
│   ├── Blog
│   ├── Advisor Ally Podcast
│   └── Case Studies (when ready)
│
├── Pricing
├── About
├── Contact / Book a Demo
└── Legal
    ├── Privacy Policy
    └── Terms of Service
```

---

## Navigation Recommendation

**Primary nav (left to right):**
Solutions ▾ | Who We Serve ▾ | Resources ▾ | Pricing | Contact

**Top-right CTA:** Book a Demo

**Footer:** All pages above + legal (Privacy, Terms), social (LinkedIn, YouTube, X, Facebook, Instagram), Advisor Ally podcast block.

Header and footer copy lives in `02-homepage.md` (§0 and §13) since they apply sitewide.

---

## Homepage — section order

§0. Header (sitewide)
§1. Hero
§2. Social proof bar — "Shaped by advisors and operators at"
§3. The Problem — "If you've moved a book before, you know"
§4. The Solution — "Built for transition. Not retrofitted with it."
§5. How It Works — 4 steps
§6. Outcomes — stat cards + emotional kicker + flywheel loop
§7. Built for Every Player — 5 ICP cards
§8. Beyond Transitions — Meeting Assistant + Document Intelligence
§9. Integrations
§10. Testimonials
§11. FAQs
§12. Final CTA
§13. Footer (sitewide)

Full copy in `02-homepage.md`. Visuals in `06-visuals.md`.

---

## ICP Pages — shared template

Each "Who We Serve" page follows the same structure:

1. Hero (audience-specific language)
2. Their pain in their words
3. What FastTrackr does for them specifically
4. Outcomes in their KPIs
5. Testimonial / quote (where available)
6. Audience-specific FAQ (3–5 questions)
7. CTA

Full copy in `03-icp-pages.md`.

---

## Other Pages — coverage

`04-other-pages.md` includes:

- Advisor Transitions (deep page — short version of homepage)
- Client Onboarding (new page)
- Meeting Assistant (light refresh of existing)
- Document Intelligence (light refresh of existing)
- Pricing (reframed for transition)
- About

_Note: Security & Trust page was deprioritized. Privacy Policy serves as the public reference for data handling; full security documentation is sent on request to compliance teams._

---

## Design / build notes (not copy, but worth flagging)

- **Hero CTA:** Single primary CTA — "Book a Demo." Secondary text link "See how it works ↓" anchor-scrolls to How It Works.
- **Integrations section** can be hidden via CMS toggle if the team prefers.
- **Advisor Ally podcast** block keeps its current placement near the footer.
- **Try for Free** button on current site → swap to **Book a Demo** as the primary CTA (enterprise-led positioning). Self-serve sign-up can still live behind a smaller link in the footer or pricing page if needed.
- **Logos** on social proof bar must be cleared for use. Default to "operators we've spoken with" rather than "customers."
- **Visual design system** (colors, type, spacing, components) is documented per-section in `06-visuals.md`.

---

## File index

| File | Contents |
|---|---|
| `01-website-structure.md` | This document |
| `02-homepage.md` | Homepage copy + sitewide Header (§0) and Footer (§13) |
| `03-icp-pages.md` | All 5 ICP pages |
| `04-other-pages.md` | Solutions pages + Pricing + About |
| `06-visuals.md` | Visual design system + section-by-section visual specs |
