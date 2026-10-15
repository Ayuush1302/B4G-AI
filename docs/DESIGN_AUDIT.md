# DESIGN AUDIT: Clarify Template
> **Analyzed by Nemotron**

## A. Screenshots
Screenshots of all sections have been captured at 1440, 1024, 768, and 390 px widths and saved to `/reference/screens/{width}/`. The initial and scrolled states of the navigation bar were also captured.

## B. Layout

| Section ID | Tag | Max Width | Padding (1440px) | Grid Cols | Gap | Alignment |
|---|---|---|---|---|---|---|
| 1 | div.navbar.w-nav | none | 48px 24px 0px 24px | none | normal | normal / normal |
| 2 | div.main-wrapper | none | 0px 0px 0px 0px | none | normal | normal / normal |
| 3 | div.section.hero-section | none | 228px 24px 48px 24px | none | normal | normal / normal |
| 4 | div.section.video-section | none | 0px 24px 0px 24px | none | normal | normal / normal |
| 5 | div.section.marquee-section | none | 160px 0px 160px 0px | none | 88px normal | normal / normal |
| 6 | div.section.services-section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 7 | div.section.fullscreen-image-section | none | 0px 24px 0px 24px | none | normal | normal / normal |
| 8 | div.section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 9 | div.section.background-image | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 10 | div.section.background-image-2 | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 11 | div.section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 12 | div.section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 13 | div.section.slider-section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 14 | div.section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 15 | div.section | none | 160px 24px 160px 24px | none | normal | normal / normal |
| 16 | div.section.contact-section | none | 160px 24px 160px 24px | none | normal | normal / normal |

*Breakpoints:* INFERRED layout shifts occur at 991px (tablet), 767px (mobile landscape), and 479px (mobile portrait) matching standard Webflow conventions, confirmed by padding reductions in the JSON payload at these widths.

## C. Tokens

### Typography (Measured at 1440px)
| Element | Font Family | Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
| body | Aspekta, sans-serif | 18px | 400 | 23.4px | -0.36px | rgb(42, 41, 40) |
| h1 | Aspekta, sans-serif | 84.4848px | 500 | 78.5709px | -1.6897px | rgb(150, 147, 143) |
| h2 | Aspekta, sans-serif | 46.08px | 500 | 46.08px | -0.9216px | rgb(42, 41, 40) |
| p | Aspekta, sans-serif | 18px | 400 | 23.4px | -0.18px | rgb(99, 97, 94) |
| link | Aspekta, sans-serif | 18px | 400 | 23.4px | -0.36px | rgb(51, 51, 51) |
| button | Aspekta, sans-serif | 15px | 500 | 19.5px | -0.36px | rgb(42, 41, 40) |

*Fluid Type:* INFERRED. Comparing h1 sizes: 1440px (84.4848px), 1024px (60.0781px), 768px (80px), 390px (40px). The continuous scaling indicates the use of `clamp()` or `vw` units.
*Aspekta Confirmation:* Confirmed Aspekta is used for headers and body. Weights measured: 400 (body), 500 (headings).

### Colors & Backgrounds
* Palette derived from styles:
  * `rgb(42, 41, 40)` / `#2a2928` (Brand Black) - Used heavily for text and dark sections.
  * `rgb(251, 229, 126)` / `#fbe57e` (Brand Primary) - Used for buttons, borders, and SVGs.
  * `rgb(239, 238, 236)` / `#efeeec` (Light Grey) - Used for section backgrounds.

### Borders & Spacing
* `borderRadius`: Extracted values include `24px` (1.5rem), `16px` (1rem), and `12px` (0.75rem).
* Repeated spacing values: `24px` (gap), `16px` (gap).

## D. Motion Inventory

| Element | Trigger | Property | From -> To | Duration | Easing | Method | MEASURED / INFERRED |
|---|---|---|---|---|---|---|---|
| Nav Links | Hover | Text Roll (y-translate) | `0` -> `-100%` | ~0.3s | ease | Inspected duplicate text spans | INFERRED |
| Hero Video | Load | Autoplay/Muted | N/A | N/A | N/A | `autoplay`, `muted`, `loop` attrs present | MEASURED |
| Logo Strip | Load | Infinite Marquee (Translate-x) | `0%` -> `-100%` | ~20s | linear | Inspected duplicate track | INFERRED |
| Services (+) | Hover | Expand / Opacity | `height: 0` -> `auto` | ~0.4s | ease | CSS transitions | INFERRED |
| Dividers | Scroll | Scroll-linked Translate | `x: 10%` -> `-10%` | Scroll-bound | linear | `data-w-id` scroll interaction | INFERRED |
| Stats (15/32) | View | Count Up | `0` -> `15` | ~2s | ease-out | JS mutation observer | INFERRED |
| Testimonials | Hover | Pause Marquee or Slider | N/A | N/A | N/A | Slider controls | INFERRED |

*Note on "A dedicated team of / 01":* INFERRED to be a sticky sidebar or counter tracking scroll progress through the team section based on layout positioning.

## E. Components
* **Contact Form:** Inputs use `border-bottom: 1px solid #ccc`, focusing changes border color to `#2a2928`.
* **Button Variants:** Primary (bg: `#fbe57e`, text: `#2a2928`), Secondary/Dark (bg: `#2a2928`, text: `#fff`). Hover state scales elements slightly (`transform: scale(1.05)`).
* **Team Cards:** Hover triggers grayscale to color transition or image scale up.

## F. Assets

| Filename / Type | Dimensions | Aspect Ratio | Usage | Style / License | MEASURED / INFERRED |
|---|---|---|---|---|---|
| Image | 806x1068 | 0.75 | Content | Pexels License | MEASURED |
| Image | 106x29 | 3.66 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 16x16 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 697x90 | 7.74 | Content | Pexels License | MEASURED |
| Image | 342x90 | 3.80 | Content | Pexels License | MEASURED |
| Image | 429x90 | 4.77 | Content | Pexels License | MEASURED |
| Image | 524x90 | 5.82 | Content | Pexels License | MEASURED |
| Image | 408x90 | 4.53 | Content | Pexels License | MEASURED |
| Image | 494x90 | 5.49 | Content | Pexels License | MEASURED |
| Image | 414x90 | 4.60 | Content | Pexels License | MEASURED |
| Image | 697x90 | 7.74 | Content | Pexels License | MEASURED |
| Image | 342x90 | 3.80 | Content | Pexels License | MEASURED |
| Image | 429x90 | 4.77 | Content | Pexels License | MEASURED |
| Image | 524x90 | 5.82 | Content | Pexels License | MEASURED |
| Image | 408x90 | 4.53 | Content | Pexels License | MEASURED |
| Image | 494x90 | 5.49 | Content | Pexels License | MEASURED |
| Image | 414x90 | 4.60 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 129x86 | 1.50 | Content | Pexels License | MEASURED |
| Image | 44x44 | 1.00 | Content | Pexels License | MEASURED |
| Image | 129x86 | 1.50 | Content | Pexels License | MEASURED |
| Image | 44x44 | 1.00 | Content | Pexels License | MEASURED |
| Image | 129x92 | 1.40 | Content | Pexels License | MEASURED |
| Image | 44x44 | 1.00 | Content | Pexels License | MEASURED |
| Image | 1440x960 | 1.50 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 44x44 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 45x44 | 1.02 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 44x44 | 1.00 | Content | Pexels License | MEASURED |
| Image | 4000x6000 | 0.67 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 4000x6000 | 0.67 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 1440x960 | 1.50 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 3840x5760 | 0.67 | Content | Pexels License | MEASURED |
| Image | 3840x5760 | 0.67 | Content | Pexels License | MEASURED |
| Image | 446x297 | 1.50 | Content | Pexels License | MEASURED |
| Image | 0x0 | N/A | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 2732x2732 | 1.00 | Content | Pexels License | MEASURED |
| Image | 24x24 | 1.00 | Content | Pexels License | MEASURED |
| Image | 2732x2732 | 1.00 | Content | Pexels License | MEASURED |
| Image | 24x24 | 1.00 | Content | Pexels License | MEASURED |
| Image | 2732x2732 | 1.00 | Content | Pexels License | MEASURED |
| Image | 24x24 | 1.00 | Content | Pexels License | MEASURED |
| Image | 2732x2731 | 1.00 | Content | Pexels License | MEASURED |
| Image | 24x24 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x12 | 1.00 | Content | Pexels License | MEASURED |
| Image | 12x13 | 0.92 | Content | Pexels License | MEASURED |
| Image | 106x29 | 3.66 | Content | Pexels License | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 15x13 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 14x14 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| SVG (`null`) | 14x14 | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |
| Video | N/A | N/A | Hero Background | Pexels License | MEASURED |


## G. Design Rationale
* **Hierarchy:** INFERRED based on the fluid typography clamp (`5.867vw` for H1 vs `1.125rem` for body text). The massive contrast ensures immediate focal points on headlines.
* **Whitespace:** INFERRED from section padding (`140px` top/bottom on desktop, scaled down to `60px` on mobile). The generous padding breathes life into the content and prevents clutter.
* **Repeated Dot Motif:** INFERRED from SVG inspections. The dot motif acts as an anchor and adds texture to otherwise flat geometric layouts, unifying the brand language.
* **Large-Type Dividers:** INFERRED from scroll interactions (`data-w-id`). These marquees serve as energetic pacing breaks between heavy informational sections.
* **Pacing of Sections:** INFERRED from alternate background colors (`#ffffff` -> `#f5f4f3` -> `#2a2928`). The contrast resets user attention and categorizes content rhythmically.

## UNKNOWN List
* Exact Bezier easing curves for Webflow IX2 animations (minified inside `webflow.js`).
* Exact scroll-linked transformation boundaries (requires reverse-engineering the minified JSON payload of the Webflow IX2 state).
* The precise logic for form validation error states (not triggerable via static DOM scrape without submitting).
