# Bikram Daya Foundation

A mission-focused website for Bikram Daya to showcase educational impact, goals, support options, gallery stories, and contact information.

This README is a full project blueprint for:
- You (owner)
- Future collaborators
- Any AI assistant that needs to safely continue development

## 1) Current Project Health (Verified)

As of this audit:
- `npm run lint` passes
- `npx tsc --noEmit` passes
- `npm run build` passes (Next.js 16 / Turbopack)

## 2) Tech Stack

- Next.js `16.2.6` (App Router)
- React `19.2.4`
- TypeScript `5`
- Tailwind CSS `4`
- CSS Modules for section-specific styling
- `lucide-react` for icons
- `clsx` + `tailwind-merge` for class composition

## 3) High-Level Architecture

Single-page layout rendered by `src/app/page.tsx` with section components:

1. Hero
2. About
3. Goal
4. Support
5. Gallery
6. Contact
7. Footer

Top nav is fixed and scrolls to section IDs via `scrollIntoView`.

SEO is handled through:
- rich metadata in `src/app/layout.tsx`
- `src/app/robots.ts` for robots policy
- `src/app/sitemap.ts` for sitemap generation
- JSON-LD organization schema in root layout

## 4) Directory Blueprint

```text
.
├── public/
│   ├── images/                    # All content images (single folder)
│   └── *.svg                      # default static assets
├── src/
│   ├── app/
│   │   ├── layout.tsx             # Root layout + metadata + navbar
│   │   ├── loading.tsx            # App-level loading animation
│   │   ├── page.tsx               # Single-page section composition
│   │   ├── robots.ts              # robots.txt metadata route
│   │   └── sitemap.ts             # sitemap.xml metadata route
│   ├── content/
│   │   └── media.ts               # Central media path config
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Navbar.module.css
│   │   │   ├── FooterBar.tsx
│   │   │   └── FooterBar.module.css
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── HeroSection.module.css
│   │   │   ├── AboutSection.tsx
│   │   │   ├── AboutSection.module.css
│   │   │   ├── GoalSection.tsx
│   │   │   ├── GoalSection.module.css
│   │   │   ├── SupportSection.tsx
│   │   │   ├── SupportSection.module.css
│   │   │   ├── GallerySection.tsx
│   │   │   ├── GallerySection.module.css
│   │   │   ├── ContactSection.tsx
│   │   │   └── ContactSection.module.css
│   │   └── ui/
│   │       ├── DonationCard.tsx
│   │       ├── SectionLabel.tsx
│   │       ├── CurveDivider.tsx
│   │       ├── CursorFx.tsx
│   │       ├── CursorFx.module.css
│   │       └── ScrollRevealInit.tsx
│   ├── hooks/
│   │   └── useScrollReveal.ts
│   ├── lib/
│   │   └── utils.ts
│   └── styles/
│       └── globals.css            # active global styles imported by layout
├── AGENTS.md
├── IMAGE_STRUCTURE.md
├── next.config.ts
├── tsconfig.json
├── package.json
└── README.md
```

## 5) File-by-File Guide

### Root Config Files

`package.json`
- Scripts: `dev`, `build`, `start`, `lint`
- Dependency source of truth

`tsconfig.json`
- Strict TS enabled
- Path alias `@/* -> src/*`
- Excludes `all_files`

`next.config.ts`
- Performance and DX config (`compress`, `poweredByHeader`, image formats, allowed dev origins)

`postcss.config.mjs`
- Tailwind v4 PostCSS integration via `@tailwindcss/postcss`

`eslint.config.mjs`
- Next core-web-vitals + TS rules

`AGENTS.md`
- Instruction to read Next 16 docs from local `node_modules/next/dist/docs`

`IMAGE_STRUCTURE.md`
- Current image workflow instructions

### App Layer

`src/app/layout.tsx`
- Global metadata and social metadata
- Imports active global stylesheet: `src/styles/globals.css`
- Renders Navbar globally
- Injects JSON-LD organization schema

`src/app/loading.tsx`
- Loading screen animation shown during app loading states

`src/app/robots.ts`
- Crawl rules and sitemap declaration

`src/app/sitemap.ts`
- Static sitemap metadata route

`src/app/page.tsx`
- Single-page assembly of all sections
- Mounts `ScrollRevealInit` for reveal animation

### Content Layer

`src/content/media.ts`
- Centralized media references for sections
- `heroMedia`, `aboutMedia`, `goalMedia`, `galleryItems`
- Best place to swap image paths without editing component logic

### Shared Utility Layer

`src/lib/utils.ts`
- `cn()` utility
- `scrollToSection()` for nav buttons
- constants: `donationAmounts`, `navLinks`, `siteConfig`

### Hooks

`src/hooks/useScrollReveal.ts`
- IntersectionObserver helper for `.reveal` elements
- Triggered by `ScrollRevealInit`

### Layout Components

`src/components/layout/Navbar.tsx`
- Fixed top nav
- Desktop + mobile menu
- Scroll-to-section behavior

`src/components/layout/FooterBar.tsx`
- Footer text and placeholders

### Section Components

`HeroSection.tsx/.module.css`
- Full-screen photo background hero
- Layered blur edges + vignette + overlay
- Single title text (`Education`)

`AboutSection.tsx/.module.css`
- Left text + CTA, right masked portrait image
- Uses `aboutMedia.feature`

`GoalSection.tsx/.module.css`
- Left mission text, right masked image, bottom quote block
- Uses `goalMedia.feature`

`SupportSection.tsx/.module.css`
- Support narrative
- Impact cards
- Donation card embed
- Coffee link and collaboration pills

`GallerySection.tsx/.module.css`
- Data-driven image gallery from `galleryItems`

`ContactSection.tsx/.module.css`
- Simple CTA/contact block using `siteConfig.email`

### UI Components

`DonationCard.tsx`
- Amount selector + custom amount input
- CTA opens `siteConfig.donateUrl`

`SectionLabel.tsx`
- Reusable section mini-label with brush underline

`CurveDivider.tsx`
- Decorative section separator

`CursorFx.tsx/.module.css`
- Fine-pointer custom cursor trail effect (automatically disabled on touch/coarse pointers)

`ScrollRevealInit.tsx`
- Hook bootstrap, no visual output

## 6) Known Gaps / Technical Debt

1. Goal image still uses fallback media.
- `goalMedia.feature.src` currently points to `/images/second_page.png`.
- You should replace it with a dedicated goal image when ready.

2. Scroll animation can hide content if observer fails.
- Important sections should not rely exclusively on `.reveal` hidden default.

3. Nav is section-based only.
- No true multi-route page navigation yet.

## 7) Improvement Roadmap (Recommended)

### Phase 1: Stability Cleanup (Immediate)

1. Add the missing goal image in `public/images/` and update `goalMedia.feature.src`.
2. Add fallback UI for missing media paths.
3. Add a reduced-motion safe mode for reveal animations.

### Phase 2: Smoothness + UX Quality

1. Image optimization pipeline.
- Convert large JPEG/PNG to WebP or AVIF.
- Keep hero images at practical dimensions for target devices.
- Keep only hero image as `priority`; lazy load below-fold images.

2. Motion tuning.
- Reduce reveal delays on low-end devices.
- Avoid overusing `backdrop-filter` on mobile when not needed.

3. Better section transitions.
- Keep curve dividers but standardize spacing scale between all sections.

4. Typography consistency.
- Keep same rhythm and size scale across About/Goal/Support headings.

### Phase 3: Scalability for Future Pages

1. Introduce route-level pages gradually.
- Example: `/gallery`, `/contact`, `/mission` while keeping home sections.

2. Move section content to data objects.
- Keep text strings/config in `src/content/` so editing copy doesn’t require touching component structure.

3. Add reusable section shell pattern.
- `SectionShell` with shared max-width, label, heading spacing.

4. Add typed schema for content blocks.
- Helps AI and humans update safely without layout regressions.

### Phase 4: Quality Engineering

1. Add tests.
- Unit tests for utility logic and key interactions.
- E2E checks for navigation and external links.

2. Add CI checks.
- lint + typecheck + build on pull request.

3. Add accessibility pass.
- Keyboard navigation, contrast checks, focus states, semantic heading order.

## 8) Blueprint: How To Add a New Section (Safely)

1. Create component and module CSS.
- `src/components/sections/NewSection.tsx`
- `src/components/sections/NewSection.module.css`

2. Keep structure in TSX, visual details in module CSS.

3. Add section `id` for navbar anchor scroll.

4. Import and place section in `src/app/page.tsx`.

5. If media needed, add path in `src/content/media.ts`.

6. Run:
- `npm run lint`
- `npx tsc --noEmit`
- `npm run build`

## 9) Blueprint: How To Add a New Full Route (Future)

1. Create `src/app/<route>/page.tsx`
2. Keep layout in root `layout.tsx` unless route-specific layout needed
3. Add nav item logic.
- If route-based, use `next/link` navigation
- If section-based, keep `scrollToSection`

4. Add metadata for that route page if needed.

## 10) Media Workflow (Current)

All images live in one folder:
- `public/images/`

Use `src/content/media.ts` as the single source of truth for image paths.

Example:

```ts
export const goalMedia = {
  feature: {
    src: "/images/my-new-goal-photo.jpg",
    alt: "Bikram Daya teaching children",
  },
} as const;
```

## 11) Commands

```bash
npm install
npm run dev
npm run lint
npx tsc --noEmit
npm run build
npm run start
```

## 12) AI Handoff Notes

If another AI continues work, it should follow this order:

1. Read `AGENTS.md` and this `README.md`
2. Read `src/content/media.ts` and `src/app/page.tsx`
3. Inspect target section `.tsx` + `.module.css`
4. Make minimal scoped changes
5. Run lint + typecheck + build
6. Report changed files and rationale

## 13) Priority Actions For You Right Now

1. Upload the Goal section image and update `goalMedia.feature.src`.
2. Add a basic CI workflow for lint/typecheck/build.
3. Start creating dedicated routes once home-page content stabilizes.
4. Add performance-optimized image versions (`.webp`/`.avif`) for hero/about/goal.

---

If you want, the next step can be a **maintenance refactor pass** where we clean all dead code and lock in a `v1.0` stable baseline before adding more pages.
