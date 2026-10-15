# Phase 2: Design Tokens (Tailwind Configuration)

Based on the Phase 1 audit, here are the design tokens mapped to Tailwind CSS configuration values.

## Colors
We will extend Tailwind's theme colors:
- `brand-primary`: `#fbe57e`
- `brand-black`: `#2a2928`
- `brand-white`: `#ffffff`
- `brand-dark-grey`: `#63615e`
- `brand-medium-grey`: `#96938f`
- `brand-light-grey`: `#efeeec`
- `brand-lightest-grey`: `#f5f4f3`

## Typography
We will set up custom font families and sizes in Tailwind:
- `fontFamily`:
  - `sans`: `['Aspekta', 'sans-serif']`
  - `secondary`: `['IBM Plex Sans', 'sans-serif']`

Tailwind `fontSize` configuration based on fluid sizes (`clamp()` calculations will be applied in CSS or as arbitrary values if needed, but we will define the core fluid steps):
- `base`: `clamp(1.125rem, 1.2vw, 1.2vw)`
- `large`: `1.5rem`
- `3xl`: `2.667vw`
- `4xl`: `3.2vw`
- `8xl`: `5.867vw`

## Spacing & Border Radius
- `spacing`:
  - `gap-default`: `1.5rem`
  - `section-desktop`: `1.5rem`
  - `section-tablet`: `1rem`
  - `section-mobile`: `0.75rem`
- `borderRadius`:
  - `xs`: `0.5rem`
  - `sm`: `0.75rem`
  - `md`: `1rem`
  - `lg`: `1.5rem`

*These tokens will be directly implemented in `tailwind.config.ts` during Phase 4 (Build).*
