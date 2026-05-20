# Product

## Register

product

## Users

**Harness field sellers** — Account Executives, Solutions Architects/Engineers, and sales leadership — preparing for or running customer conversations about the Harness AR product line. Secondary readers: enablement and product marketing, who use the same surface to brief new reps.

Context of use: at a desk between meetings, on a call with a customer, or 15 minutes before a discovery. Goal is fast retrieval of the right answer — the SKU that fits, the persona's pains, the competitive counter, the discovery question, the proof point. Most sessions are short and lookup-shaped, not exploratory. Okta-gated, internal-only.

## Product Purpose

A single, opinionated reference surface that gives every Harness seller the same canonical story for AR: what the SKUs do, who they're sold to, how customers have succeeded, where competitors fall short, which discovery questions move deals, and what's shipping next.

Success = a rep can walk into a customer conversation having read one section here instead of stitching together five tabs of Drive, Highspot, and Slack. The content is the product; the UI exists to make that content scannable, navigable, and trustworthy.

The current navigation surfaces ten sections: Overview, SKUs, Personas, Customers, Roadmap, Competitive, Cross-Sell, Maturity, Q&A, and Knowledge Hub. Each section is currently a scaffold awaiting AR-specific content; the design system, app shell, auth, and section routing are all in place.

## Brand Personality

Three words: **editorial, direct, expert.**

- **Editorial** — Newsreader serif headlines paired with Geist sans body. Reads like a well-set reference book, not a marketing site or a generic admin panel. Headlines are quiet; the substance does the work.
- **Direct** — Copy is outcome-first. Concrete numbers, specific tiers, no marketing softeners. If a SKU is "fastest ROI", it says so.
- **Expert confidence** — Written for a reader who already knows the domain vocabulary. No re-explaining basics. No reassurance copy. Assumes the seller is competent and respects their time.

Emotional goal: the rep closes the tab feeling **prepared** — not impressed, not entertained.

## Anti-references

- **The SaaS hero-metric template.** Big gradient number, small label, supporting stats in identical cards, "Trusted by [logos]". Generic sales-enablement tools all look like this. We deliberately don't.
- **Dark-mode terminal-cool** (Datadog/Grafana lane). Category reflex #1 for any tool adjacent to observability or FinOps. We are intentionally light, editorial, and warmer than the category default.
- **Navy + gold financial-services lane.** Category reflex #2 for cost/FinOps software. We sit in teal as the single accent, not corporate-finance blue.
- **Notion/Confluence wiki sprawl.** Long-form indented documents where you scroll for the answer. Sections here are structured, not prose-y.
- **Internal-tool ugliness.** "It's just for sellers" is not an excuse for low craft. The UI should make the seller feel the product they're selling is well-built.

## Design Principles

1. **The content is the surface.** Headlines, numbers, and structured lists are the design. Chrome (nav, cards, dividers) should recede. If a decoration competes with a stat, remove the decoration.
2. **Editorial inside utility.** Newsreader serif for headlines, stats, and quoted stories. Geist sans for navigation, labels, and body. The two-typeface contrast is the brand signature; protect it everywhere.
3. **One accent, many tints.** FinOps teal (`--color-finops`) is the product's pillar identity. SKU and persona families derive from a small named palette (devops green, appsec blue, quality purple, finops teal, near-black) using `color-mix` tints — never invent a sixth.
4. **Density without noise.** Soft shadows (`--shadow-whisper`), low-chroma tints, generous spacing scale, 1px light borders. Information is dense; visual weight is light.
5. **Direct prose, always.** No "Welcome!", no "Let's get started", no restating the section title in the section sub. Every word earns its place. Numbers over adjectives.

## Accessibility & Inclusion

Target: **WCAG 2.1 AA** on all in-app surfaces. Internal app, but reps work on laptops in varied lighting (airports, hotel rooms, coffee shops) — readable contrast matters.

Existing patterns to preserve and extend:
- Every interactive element has a `:focus-visible` outline using `--accent` with `outline-offset`.
- Buttons use real `<button>` elements with `aria-label`, `aria-expanded`, `aria-current` where appropriate.
- 44px minimum hit target on primary nav.
- `prefers-reduced-motion: reduce` is honored globally in `ar.module.scss`.

Gaps to address as content lands:
- **Color-only signaling**: roadmap badges (Now/Soon/Later), competitive table marks (Y/Partial/No), and persona dot indicators rely on color. Pair with iconography or text labels.
- **Type scale audit**: body sizes go down to `--text-label` (0.75rem) and `--text-micro` (0.625rem). Confirm label sizes are only used for true labels, not running text.
- **Sign-in screen palette drift**: the sign-in page still uses `#0a3364` (navy) and `--primary-7` (`#0278d5`) from the legacy template. The in-app surface has migrated to teal-and-cream; sign-in hasn't.
