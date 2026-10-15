# Motion & UI Interactivity Guidelines (Motion Primitives & Watermelon UI)

When the user asks for enhanced UI animations, motion graphics, or interactive components, follow this architecture:

## 1. Libraries & Sources
- **Motion Primitives (https://motion-primitives.com)**:
  - Use for micro-interactions and motion physics (e.g. `magnetic`, `text-effect`, `text-roll`, `spotlight`, `tilt`, `infinite-slider`).
  - Store reusable primitives in `clarify-app/src/components/core/`.
- **Watermelon UI (https://ui.watermelon.sh)**:
  - Use for full section blocks, interactive tabs, animated bento cards, and landing page compositions.
  - Inspect `https://ui.watermelon.sh/llms.txt` for machine-readable components and code schemas.
  - Store section blocks in `clarify-app/src/components/blocks/` or `clarify-app/src/components/`.

## 2. Technical Standards
- Always use the `cn()` helper from `@/lib/utils` or `../lib/utils`.
- Rely on `framer-motion` for spring physics and transitions.
- Strictly respect accessibility: incorporate `useReducedMotion()` from `framer-motion` so users with motion sensitivity experience simple opacity fades or static states.

## 3. Brand Theme Mapping
When importing components from either catalog, adapt styling to match B4G Clarify's brand design system:
- **Primary Yellow**: `#ffe071` / `#fbe57e`
- **Dark Neutral**: `#2a2928`
- **Light Grey Backgrounds**: `#f5f4f3` / `#efeeec`
- **Typography**: Aspekta font with `-0.02em` tracking and +50 weight adjustments (`font-[450]` for normal body, `font-[550]` for headings).
- **Border Radius**: 16px to 24px (`rounded-2xl` to `rounded-3xl`).
