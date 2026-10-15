# Phase 1: Clarify Template Design Audit

## 1. Colors
Extracting exact CSS variable values from `:root` and computed styles in `clarify.css`.
- `--colors--white`: `white`
- `--colors--black`: `#2a2928`
- `--colors--dark-grey`: `#63615e`
- `--colors--medium-grey`: `#96938f`
- `--colors--light-grey`: `#efeeec`
- `--colors--lightest-grey`: `#f5f4f3`
- `--colors--brand-primary`: `#fbe57e`

## 2. Typography
- **Primary Font Family:** `Aspekta, sans-serif`
- **Secondary Font Family:** `"IBM Plex Sans", sans-serif`
- **Body (`p`):**
  - Font size: `clamp(1.125rem, 1.2vw, 1.2vw)`
  - Color: `var(--colors--dark-grey)`
  - Letter spacing: `-.01em`
  - Font weight: `400`
  - Line height: `130%`
- **Heading 1 (`h1`):**
  - Font size: `5.867vw` (`--fluid-font-size--8xl`)
  - Letter spacing: `-.02em`
  - Font weight: `500`
  - Line height: `93%`
- **Heading 2 (`h2`):**
  - Font size: `3.2vw` (`--fluid-font-size--4xl`)
  - Letter spacing: `-.02em`
  - Font weight: `500`
  - Line height: `100%`
- **Heading 3 (`h3`):**
  - Font size: `3.2vw` (`--fluid-font-size--4xl`)
  - Letter spacing: `-.02em`
  - Font weight: `500`
  - Line height: `100%`
- **Heading 4 (`h4`):**
  - Font size: `2.667vw` (`--fluid-font-size--3xl`)
  - Font weight: `500`
  - Line height: `110%`
- **Heading 5 (`h5`):**
  - Font size: `1.5rem` (`--font-size--large`)
  - Font weight: `500`
  - Line height: `2rem`
- **Heading 6 (`h6`):**
  - Font size: `1.125rem` (`--font-size--base`)
  - Font weight: `500`
  - Line height: `130%`

## 3. Spacing & Layout
- **Global Grid / Layout (`.w-layout-grid`):**
  - Row gap: `16px`
  - Column gap: `16px`
- **Row Gap Default:** `1.5rem` (`--row-gap--default`)
- **Container / Section Padding:**
  - Desktop: `1.5rem`
  - Tablet: `1rem`
  - Mobile: `.5rem` to `1rem`
- **Border Radii:**
  - Large: `1.5rem`
  - Medium: `1rem`
  - Small: `.75rem`
  - XS: `.5rem`

## 4. Breakpoints (Media Queries)
- INFERRED: Webflow's standard breakpoints apply (991px tablet, 767px mobile landscape, 479px mobile portrait).

## 5. Interaction & Motion
- UNKNOWN: Detailed interaction transition durations and easings. We will refine this in the motion phase by inspecting hover classes like `.button-hover-background`.
