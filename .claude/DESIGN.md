---
name: AR Sales Enablement
description: Internal sales-enablement reference for Harness AR. Editorial-meets-utility.
colors:
  finops-teal: "#0891b2"
  devops-green: "#2d8a5e"
  appsec-blue: "#0677d4"
  quality-violet: "#8b5cf6"
  near-black: "#14120b"
  brand-cyan: "#00ade4"
  text-primary: "#202020"
  text-secondary: "#5a5a62"
  text-muted: "#6e6e74"
  bg-canvas: "#f7f7f4"
  bg-surface: "#eeeeeb"
  bg-white: "#ffffff"
  border-light: "#e2e8f0"
  border-standard: "#d9dae5"
  border-medium: "#cbd5e0"
  state-success: "#2d8a5e"
  state-warning: "#f59e0b"
  state-danger: "#ef4444"
typography:
  hero:
    fontFamily: "Newsreader, Georgia, 'Times New Roman', serif"
    fontSize: "4rem"
    fontWeight: 400
    lineHeight: 1.1
    letterSpacing: "normal"
  display:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "3rem"
    fontWeight: 400
    lineHeight: 1.1
  headline:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.75rem"
    fontWeight: 400
    lineHeight: 1.2
  title:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 600
    lineHeight: 1.25
  body:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.875rem"
    fontWeight: 400
    lineHeight: 1.6
  label:
    fontFamily: "Geist, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    lineHeight: 1.25
    letterSpacing: "0.07em"
  metric:
    fontFamily: "Newsreader, Georgia, serif"
    fontSize: "1.5rem"
    fontWeight: 400
    lineHeight: 1.1
rounded:
  sharp: "4px"
  subtle: "6px"
  card: "8px"
  input: "12px"
  featured: "16px"
  pill: "24px"
spacing:
  xs: "0.25rem"
  sm: "0.5rem"
  base: "0.75rem"
  md: "1rem"
  lg: "1.5rem"
  xl: "2rem"
  "2xl": "2.5rem"
  "3xl": "3rem"
components:
  button-primary:
    backgroundColor: "{colors.near-black}"
    textColor: "{colors.bg-white}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "0.5rem 1rem"
  button-primary-hover:
    backgroundColor: "{colors.finops-teal}"
    textColor: "{colors.bg-white}"
  button-ghost:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    rounded: "{rounded.card}"
    padding: "0.5rem 1rem"
  button-ghost-hover:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
  nav-button:
    backgroundColor: "transparent"
    textColor: "{colors.text-muted}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "0.75rem 1rem"
    height: "44px"
  nav-button-active:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
  card:
    backgroundColor: "{colors.bg-white}"
    rounded: "{rounded.card}"
    padding: "1.5rem"
  stat-card:
    backgroundColor: "{colors.bg-white}"
    rounded: "{rounded.card}"
    padding: "1rem"
  badge-now:
    backgroundColor: "#e8f5ee"
    textColor: "{colors.state-success}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 0.5rem"
  badge-soon:
    backgroundColor: "#fef5e7"
    textColor: "{colors.state-warning}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 0.5rem"
  badge-later:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-muted}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 0.5rem"
  chip-accent:
    backgroundColor: "#e6f6fa"
    textColor: "{colors.finops-teal}"
    typography: "{typography.label}"
    rounded: "{rounded.pill}"
    padding: "2px 0.5rem"
  input-select:
    backgroundColor: "{colors.bg-surface}"
    textColor: "{colors.text-primary}"
    typography: "{typography.body}"
    rounded: "{rounded.card}"
    padding: "0.5rem 1rem"
  announcement-bar:
    backgroundColor: "#eff8fb"
    textColor: "{colors.text-secondary}"
    typography: "{typography.label}"
    padding: "0.5rem 2rem"
---

# Design System: AR Sales Enablement

## 1. Overview

**Creative North Star: "The Briefing Annual"**

This is a reference work, not an application. A bound annual that lives on the desk of every Harness seller — its job is to be found, flipped to the right page, and trusted at a glance. The typography sets the tone: Newsreader serif headlines have the weight of a printed feature article, while Geist sans carries the running utility (navigation, labels, captions) without ever competing. The page is warm off-white (`#f7f7f4`), not screen-white, because this surface is meant to feel published rather than rendered.

The system explicitly rejects three category reflexes: the **dark-mode terminal aesthetic** that observability-adjacent tools default to; the **SaaS hero-metric template** (gradient number, "Trusted by", three identical stat cards); and the **navy-and-gold corporate-finance lane** that financial software gravitates toward. We sit between editorial and utility, with FinOps teal as the only saturated voice on the page.

Density is high — every section is a structured reference page, not a marketing tile — but visual weight stays light. Borders are 1px, shadows are whispers (4-8% opacity), accents are tints (8-25% mixed with white). The reader's eye lands on the content, not the chrome.

**Key Characteristics:**
- Editorial serif (Newsreader) for headlines and metrics; technical sans (Geist) for everything else.
- Warm tinted neutrals (`#f7f7f4` canvas, never pure white as the page).
- One pillar accent (FinOps teal `#0891b2`); product/persona families are tints of a small named palette.
- Soft, large-radius shadows — never crisp drop-shadows.
- 1px borders with `color-mix` tints for state, not hard color swaps.
- Generous spacing scale (11 steps); rhythm comes from spacing variety, not size variety.

## 2. Colors

A warm-cream stage with one teal voice for the product and four supporting hues reserved for taxonomy (SKU families, personas). State colors are used sparingly and only for state.

### Primary
- **FinOps Teal** (`#0891b2`): the product's pillar identity. The single accent for buttons, active states, focus rings, dividers, accent chips, hover borders on interactive elements, and every "Harness" voice in copy. Tinted via `color-mix` (typically 6–25% mixed with white) for backgrounds, borders, and surface washes.

### Secondary (taxonomy palette — used only to differentiate SKUs and personas)
- **DevOps Green** (`#2d8a5e`): SKU/persona Tier 2. Also doubles as state-success.
- **AppSec Blue** (`#0677d4`): SKU/persona Tier 3.
- **Quality Violet** (`#8b5cf6`): SKU/persona Tier 4. Also the AI-highlight accent on the roadmap.
- **Near Black** (`#14120b`): SKU/persona Tier 5. Doubles as primary-button surface.

### Neutral
- **Warm Canvas** (`#f7f7f4`): the page background. Off-white, warm — the printed-paper tone.
- **Surface** (`#eeeeeb`): inset panels, hovered ghost buttons, secondary card backgrounds, segmented-control track.
- **Card White** (`#ffffff`): elevated card surfaces only. Never the canvas.
- **Border Light** (`#e2e8f0`): default 1px borders.
- **Border Medium** (`#cbd5e0`): hover-state borders.
- **Text Primary** (`#202020`): headlines, primary body, active labels. Not pure black.
- **Text Secondary** (`#5a5a62`): body and descriptive text.
- **Text Muted** (`#6e6e74`): labels, captions, inactive states.

### State (use only for genuine state, not decoration)
- **Success** (`#2d8a5e`) with bg `#e8f5ee`: checkmarks, "Now" roadmap badges, quiz-correct, timeline-green.
- **Warning** (`#f59e0b`) with mixed bg: "Soon" badges, timeline-yellow, partial-coverage marks.
- **Danger** (`#ef4444`) with mixed bg: timeline-red incidents, quiz-wrong.

### Named Rules

**The Pillar Accent Rule.** FinOps teal is the only saturated color allowed in chrome (buttons, focus rings, active nav, dividers, hover borders). The four taxonomy hues are *content-only* — they appear inside SKU and persona cards to tag identity, never in the nav, never in buttons, never in toasts. If you reach for `--color-quality` to make a button look "different", stop.

**The Tinted Neutral Rule.** Never use `#000` or `#fff` as a *page background*. Canvas is warm `#f7f7f4`; cards on canvas are `#ffffff` because the contrast is what reads as elevation. The near-black for primary buttons is `#14120b`, not `#000` — it carries a hint of warm hue.

**The Color-Mix Rule.** Tints are always derived via `color-mix(in srgb, var(--color-X) N%, transparent|white)`, not picked from a swatch wheel. This keeps every tint in-family and predictable. Common steps: 6% (subtle wash), 10% (chip background), 16% (announcement bar border), 20–25% (chip border), 30% (focus ring shadow).

## 3. Typography

**Display Font:** Newsreader (Georgia, Times New Roman fallback)
**Body Font:** Geist (system-ui, -apple-system fallback)

**Character:** A reference-book pairing. Newsreader is a contemporary editorial serif with high-contrast modulation — it gives stat values and section titles the gravitas of a published feature. Geist is a modern grotesque with high x-height — it carries the dense utility of navigation, labels, and data tables without feeling like UI chrome. The contrast is deliberate and load-bearing: serif for *meaning* (headlines, stats, quotes); sans for *use* (buttons, labels, body, nav).

### Hierarchy

- **Hero** (Newsreader, 400, 4rem / 64px, leading 1.1): reserved for true hero moments. Not used in current product surface.
- **Display** (Newsreader, 400, 3rem / 48px, leading 1.1): top-of-page titles on standalone pages.
- **H3** (Newsreader, 400, 2rem / 32px, leading 1.2): section titles inside the app shell. **The default section headline.**
- **H4** (Newsreader, 400, 1.75rem / 28px, leading 1.2): stat-card numbers, quiz score, hero-style metrics.
- **Headline** (Newsreader, 400, 1.5rem / 24px, leading 1.2): persona titles, ROI result values, big metric on stat cards.
- **Body-LG** (Newsreader, 400, 1.25rem / 20px, leading 1.2): editorial body, quiz question text, discovery question prompts. Newsreader at body size — used for emphasis, sparingly.
- **Body** (Geist, 400, 1rem / 16px, leading 1.6): default body. Cap at 65–75ch when running paragraph-style.
- **Body-SM** (Geist, 400–500, 0.875rem / 14px, leading 1.6): the **default UI body** — most card text, button labels, nav.
- **Label** (Geist, 500–700, 0.75rem / 12px, letter-spacing 0.06–0.1em, uppercase): eyebrows, badges, table headers, stat labels, section labels.
- **Micro** (Geist, 500, 0.625rem / 10px): table cell text, table headers in dense data displays.

### Named Rules

**The Serif-for-Meaning Rule.** Newsreader appears on: section titles, all numerical metrics, quoted customer stories, quiz question text, persona names, and discovery question prompts. Never on: buttons, nav, labels, tags, or body paragraphs. The serif marks *content the reader is asked to remember*; everything else is in Geist.

**The Weight-400 Doctrine.** Newsreader runs at `weight-normal` (400) only, never bold. Hierarchy comes from *size* between Newsreader elements, not weight contrast. Geist carries the weight spectrum (400 body, 500 medium, 600 semibold, 700 bold) for UI emphasis.

**The Uppercase Label Rule.** Anything with `text-transform: uppercase` must also carry letter-spacing between 0.06em and 0.1em and use Geist 500–700. Eyebrows above section titles get 0.1em; in-card labels get 0.07em; chips and badges get 0.06em.

## 4. Elevation

A flat-by-default system with a three-tier soft-shadow vocabulary. Depth is conveyed through 1px borders and ambient shadows, not crisp drop-shadows. Hover lifts via combined `translateY(-2px)` + shadow upgrade, never via background-color change alone.

### Shadow Vocabulary

- **Whisper** (`box-shadow: 0px 4px 24px rgba(0, 0, 0, 0.05)`): the **default elevated state** for every card, stat card, panel, and roadmap item at rest. So soft it reads more as luminance than as drop-shadow.
- **Lift** (`box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.12)`): the hover state for cards that lift. Also used on user-menu dropdown and the quiz container.
- **Subtle** (`box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.08)`): reserved for tighter components (used sparingly).
- **Ring-Light** (`box-shadow: 0 0 0 1px var(--border-medium)`): focus halo on round avatar buttons, where outline doesn't fit.
- **Elevation-3** (`0 0 2px rgba(40,41,61,0.04), 0 4px 8px rgba(96,97,112,0.16)`) and **Elevation-4** (`0 2px 4px rgba(40,41,61,0.04), 0 8px 16px rgba(96,97,112,0.16)`): two-layer shadows held in reserve for modals or floating panels (not currently used).

### Named Rules

**The Whisper-Default Rule.** Cards at rest get `--shadow-whisper`. Cards on hover get `--shadow-lift` plus `translateY(-2px)`. No card ever gets a hard `box-shadow: 0 2px 4px rgba(0,0,0,0.2)` or similar mid-tier shadow — that crispness reads as 2014 SaaS and breaks the published-paper feel.

**The Border-Before-Shadow Rule.** Depth starts with a 1px `var(--border-light)` border. Shadow is layered on top to lift a card off canvas. If a surface only has a shadow without a border, it will feel un-anchored. The pair is required.

**The No-Crisp-Drop Rule.** All shadows have radius ≥4px and opacity ≤12%. If a designer instinct says "make the shadow tighter and darker to emphasize", the answer is no — increase the border contrast or add a serif headline instead.

## 5. Components

Every component reads as *typeset content with light chrome*. Borders are 1px `var(--border-light)`. Radius is `var(--r-md)` (8px) by default; `var(--r-lg)` (8px) for cards; `var(--r-xl)` (16px) only for the quiz master container; `var(--radius-large)` (24px = pill) for badges and chips. Transitions are `0.2s ease`.

Primitives are implemented in `src/components/ui/` (`SectionHeader`, `StatCard` + `StatGrid`, `Card`, `Badge`). They consume `:root` tokens directly so they work outside `.arRoot`. Use them by default; only drop down to raw SCSS when you need a one-off composition that doesn't fit the primitives.

### Buttons

- **Shape:** `border-radius: var(--r-md)` = 8px on most; pill (`var(--radius-large)` = 24px) on badge-like chips.
- **Primary** (`quizBtnPrimary`, sign-in CTA): background `var(--near-black)` (`#14120b`), text `var(--bg-white)`, padding `0.5rem 1rem`, font-size body-sm (14px), font-weight 600. Hover: background shifts toward `var(--color-finops)` (sign-in) or `var(--hover-dark)` (quiz).
- **Ghost** (`quizBtnGhost`, `lessonPanelNavBtn`): background `var(--bg-panel)`, border 1px `var(--border)`, text `var(--text-secondary)`. Hover: border `var(--border-hover)`, text `var(--text-primary)`, background `var(--bg-surface)`.
- **Nav button** (`navBtn` in top nav): transparent, text `var(--text-muted)`, body-sm 14px, padding `0.75rem 1rem`, min-height 44px. Hover: text `var(--text-primary)`, background `var(--bg-surface)`. Active variant adds a 2px teal underbar via `::after`.
- **Deep-link** (`ciDeepLink`): bordered ghost, text color `var(--accent)`, hover fills with `var(--accent-sub)` (8% teal wash).
- **Focus:** every button gets `outline: 2px solid var(--accent)` with `outline-offset: 2px` (or `-2px` for buttons on tinted backgrounds). No exceptions.

### Chips & Badges

Two distinct families. Don't confuse them.

- **Pill chip**: `border-radius: var(--radius-large)` = 24px (full pill), padding `2-3px 0.5rem`, font-size 0.75rem label-700 uppercase. Used for: SKU targets, score badges, persona role hints.
- **Sharp badge**: `border-radius: var(--r-sm)` = 4px, padding `3px 0.5rem`. Used for: roadmap status (Now/Soon/Later), Q&A category, lesson section. Distinguishes "navigation/filter" from "label-on-content".
- **Roadmap status semantics:** Now → `state-success` palette; Soon → `state-warning` palette; Later → muted neutral. Always paired with the text "Now"/"Soon"/"Later", never color-only.

The `<Badge>` primitive (`src/components/ui/Badge.tsx`) covers all variants: `now | soon | later | accent | success | warning | danger | muted`, in `pill` or `sharp` shape, with optional custom-hue override.

### Cards

- **Corner Style:** `var(--r-lg)` = 8px standard. Larger containers (quiz, master card) step up to `var(--r-xl)` = 16px.
- **Background:** `var(--bg-card)` (`#ffffff`) on the warm canvas.
- **Shadow Strategy:** `var(--shadow-whisper)` at rest, `var(--shadow-lift)` on hover, with `translateY(-2px)` for interactive cards (SKU, roadmap, customer-nav). Non-interactive panels skip the translate.
- **Border:** `1px solid var(--border)` (light gray-200) → `var(--border-hover)` on hover.
- **Internal Padding:** `var(--space-lg)` (24px) for major content cards; `var(--space-md)` (16px) for stat cards and inline list items; `var(--space-base)` (12px) for compact list rows.
- **Accent card variant**: background `var(--accent-sub)` (~8% teal mix), border `var(--accent-bdr)` (~20% teal mix). Used to call out a synthesizing summary inside a longer section.

The `<Card>` primitive (`src/components/ui/Card.tsx`) takes `padding={'sm'|'md'|'lg'}` and an optional `interactive` prop that renders the card as a `<button>` with the hover-lift treatment baked in.

### Inputs

- **Select** (`ciDdSelect`): background `var(--bg-panel)`, 1px `var(--border)`, radius `var(--r-md)`, padding `0.5rem 1rem`. Hover lifts border to `var(--border-hover)`. Focus: 2px teal outline + border color shift to teal.
- **Slider**: 4px track in `var(--border)`, 16px round thumb in `var(--accent)` (teal). Focus: 2px teal outline on the track with 4px offset.
- **Toggle group** (`csIcpToggle`): two adjacent ghost buttons inside one row, flex-1; selected variant fills with `var(--accent-sub)` and accent border.

### Navigation

The top nav is the system's defining UI surface. It's a single bar:

- **Brand block** (left): logo image + serif-adjacent wordmark in Geist 500. Body-sm size, not body.
- **Nav items** (center, flex-1, horizontal scroll, scrollbars hidden): ghost buttons. Inactive = muted text + transparent bg; hover = primary text + `bg-surface`; active = primary text + `bg-surface` + 2px teal underbar via `::after`.
- **User menu** (right): 32px round avatar with initials in teal-tinted background. Click opens a 216px-wide dropdown with header (initials + name + email) and a single sign-out action. Dropdown uses `dropIn` keyframe (`cubic-bezier(0.16, 1, 0.3, 1)` for 150ms).
- **Mobile:** the nav row horizontally scrolls; layout doesn't collapse to a hamburger. Reflects the desk-and-laptop primary context.

### Tabs

Three distinct tab patterns coexist by purpose:

- **Filter tabs** (`tabBtn`, `qaSkuTab`): pill-style ghost buttons in a row, active state fills with `var(--accent-sub)` + accent border + accent text. Use when filtering content.
- **Segmented control** (`ciModeTabs` / `ciModeTab`): grouped pill inside a `bg-panel` track with internal padding, active tab gets `bg-white` + whisper shadow + primary text. Use for mode switches.
- **Underlined tabs** (`lessonTabRow` / `lessonTabBtn`): inline ghost text, active state adds 2px teal bottom border. Use for sub-views within a panel.

### Announcement Bar

Full-width strip at the very top: 6% finops-teal wash background, 16% finops-teal-mix border-bottom, label-medium uppercase letter-spacing 0.03em text in `text-secondary`. Used for one-line product update broadcasts. Single line, ellipsis if longer.

### Tables (Competitive comparison)

- Headers in `var(--primary-1, #effbff)` background, 10px uppercase label-text, 1px borders.
- "Harness" column header gets `var(--accent-sub)` + accent text to signal the home team.
- Row groups (`ciRowGrp`): `var(--bg-panel)` background, bold uppercase label.
- Cell values use single-character marks (`Y` / `P` / `N`) in success/warning/muted colors with optional inline note in `text-muted`.

### Signature Components

- **Stat card** (`<StatCard>`): the most-repeated pattern. White card with whisper shadow, Newsreader serif metric in teal, uppercase Geist label below. Use for any "summary by the numbers" row. This *is* the visual fingerprint of the system.
- **SKU card** (`skuCard`): white card with whisper shadow, icon-in-tinted-square + name in top row, taglines in body, **per-SKU accent color** applied to the value number and the active-state border. The accent color is taxonomy-bound (devops/appsec/quality/finops/near-black) — not free-choice.
- **Customer timeline** (`timelineTrack` / `timelineDot`): horizontal 4px gray track with positioned colored dots (success/warning/danger). Click a dot to reveal a checkpoint card below. Distinctive to this product, worth preserving.
- **Quiz container** (`quizContainer`): the only `var(--r-xl)` (16px) radius card in the system, with `--shadow-lift` at rest, 720px max-width, centered. Top bar is `bg-panel`. The single piece of "feature surface" inside an otherwise-flat reference annual.

## 6. Do's and Don'ts

### Do:

- **Do** lead numbered content with Newsreader. Every dollar figure, percentage, ratio, and named tier value renders in serif. The serif marks the punchline.
- **Do** keep FinOps teal (`#0891b2`) as the only saturated color in chrome (nav active, buttons, focus rings, dividers, accent surfaces). One accent voice.
- **Do** tint via `color-mix(in srgb, var(--color-X) N%, transparent|white)`. The whole palette derives from `--color-finops`, `--color-devops`, `--color-appsec`, `--color-quality`, and `--near-black`. Don't introduce a new base hue without adding it to that named list first.
- **Do** use `var(--shadow-whisper)` for resting elevation and `var(--shadow-lift)` for hover. Combine hover-lift with `translateY(-2px)` on interactive cards.
- **Do** pair every color signal with a text label or shape (Now/Soon/Later text; Y/P/N letters; red/yellow/green dot + label). Color-only signaling fails for a third of seller-laptops in flight-mode brightness.
- **Do** keep 1px borders on every elevated surface — `var(--border-light)` default, `var(--border-medium)` on hover. Borders anchor cards; shadows alone don't.
- **Do** use the warm canvas (`#f7f7f4`) for the page and reserve pure white (`#ffffff`) for elevated card surfaces. Contrast = elevation.
- **Do** honor `prefers-reduced-motion: reduce` (already wired globally in `ar.module.scss`). New animations must respect this without exception.
- **Do** reuse the primitives in `src/components/ui/` (`SectionHeader`, `StatCard`, `StatGrid`, `Card`, `Badge`) before writing new SCSS.

### Don't:

- **Don't** reach for **dark mode** as a default. This is intentionally a warm light-theme reference annual.
- **Don't** use **navy + gold** combinations. That's the corporate-finance reflex.
- **Don't** build **the SaaS hero-metric template**: huge gradient number on hero, three identical card-icon-heading-text tiles below, "Trusted by [logos]".
- **Don't** use **gradient text** anywhere. `background-clip: text` + gradient is banned. Numbers earn weight from typeface, not from chromatic fill.
- **Don't** use **side-stripe borders** wider than the existing intentional 3px top-borders (`skuRelRow`, `quizHubCard`, `csMatSkuCard`). No `border-left: 4px solid accent` as a callout — use full borders, tinted backgrounds, or leading icons.
- **Don't** introduce **glassmorphism** (backdrop-filter blurs) as decoration.
- **Don't** invent **a sixth taxonomy color**. SKU and persona variants come from the five named hues (devops, appsec, quality, finops, near-black). Map any new SKU onto an existing hue or extend the named palette in `src/index.css` first.
- **Don't** use **Newsreader for UI chrome** — no Newsreader buttons, nav, labels, or tags. The serif is exclusively for headlines, metrics, quotes, and editorial body.
- **Don't** use **em dashes** in copy. Use commas, colons, semicolons, periods, or parentheses.
- **Don't** use **bouncy or elastic easings**. State transitions are `0.2s ease`; the user-menu uses `cubic-bezier(0.16, 1, 0.3, 1)` (ease-out-expo). No spring physics.
- **Don't** write **"Welcome!"** / **"Let's get started!"** / **"All set!"** anywhere.
- **Don't** wrap **everything** in a card. Section headers, eyebrows, and editorial body run directly on canvas.
