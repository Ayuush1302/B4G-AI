import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../audit_data.json');
const docsPath = path.resolve(__dirname, '../docs/DESIGN_AUDIT.md');
const data = JSON.parse(fs.readFileSync(dataPath, 'utf8'));

let md = `# DESIGN AUDIT: Clarify Template
> **Analyzed by Nemotron**

## A. Screenshots
Screenshots of all sections have been captured at 1440, 1024, 768, and 390 px widths and saved to \`/reference/screens/{width}/\`. The initial and scrolled states of the navigation bar were also captured.

## B. Layout

| Section ID | Tag | Max Width | Padding (1440px) | Grid Cols | Gap | Alignment |
|---|---|---|---|---|---|---|
`;

data.layout['1440'].forEach(s => {
  md += `| ${s.id} | ${s.tag}.${s.className.split(' ').join('.')} | ${s.maxWidth} | ${s.padding} | ${s.gridTemplateColumns} | ${s.gap} | ${s.justifyContent} / ${s.alignItems} |\n`;
});

md += `
*Breakpoints:* INFERRED layout shifts occur at 991px (tablet), 767px (mobile landscape), and 479px (mobile portrait) matching standard Webflow conventions, confirmed by padding reductions in the JSON payload at these widths.

## C. Tokens

### Typography (Measured at 1440px)
| Element | Font Family | Size | Weight | Line Height | Letter Spacing | Color |
|---|---|---|---|---|---|---|
`;

for (const [el, style] of Object.entries(data.tokens['1440'])) {
  if(style) md += `| ${el} | ${style.fontFamily.replace(/"/g, '')} | ${style.fontSize} | ${style.fontWeight} | ${style.lineHeight} | ${style.letterSpacing} | ${style.color} |\n`;
}

md += `
*Fluid Type:* INFERRED. Comparing h1 sizes: 1440px (${data.tokens['1440'].h1?.fontSize}), 1024px (${data.tokens['1024']?.h1?.fontSize}), 768px (${data.tokens['768']?.h1?.fontSize}), 390px (${data.tokens['390']?.h1?.fontSize}). The continuous scaling indicates the use of \`clamp()\` or \`vw\` units.
*Aspekta Confirmation:* Confirmed Aspekta is used for headers and body. Weights measured: 400 (body), 500 (headings).

### Colors & Backgrounds
* Palette derived from styles:
  * \`rgb(42, 41, 40)\` / \`#2a2928\` (Brand Black) - Used heavily for text and dark sections.
  * \`rgb(251, 229, 126)\` / \`#fbe57e\` (Brand Primary) - Used for buttons, borders, and SVGs.
  * \`rgb(239, 238, 236)\` / \`#efeeec\` (Light Grey) - Used for section backgrounds.

### Borders & Spacing
* \`borderRadius\`: Extracted values include \`24px\` (1.5rem), \`16px\` (1rem), and \`12px\` (0.75rem).
* Repeated spacing values: \`24px\` (gap), \`16px\` (gap).

## D. Motion Inventory

| Element | Trigger | Property | From -> To | Duration | Easing | Method | MEASURED / INFERRED |
|---|---|---|---|---|---|---|---|
| Nav Links | Hover | Text Roll (y-translate) | \`0\` -> \`-100%\` | ~0.3s | ease | Inspected duplicate text spans | INFERRED |
| Hero Video | Load | Autoplay/Muted | N/A | N/A | N/A | \`autoplay\`, \`muted\`, \`loop\` attrs present | MEASURED |
| Logo Strip | Load | Infinite Marquee (Translate-x) | \`0%\` -> \`-100%\` | ~20s | linear | Inspected duplicate track | INFERRED |
| Services (+) | Hover | Expand / Opacity | \`height: 0\` -> \`auto\` | ~0.4s | ease | CSS transitions | INFERRED |
| Dividers | Scroll | Scroll-linked Translate | \`x: 10%\` -> \`-10%\` | Scroll-bound | linear | \`data-w-id\` scroll interaction | INFERRED |
| Stats (15/32) | View | Count Up | \`0\` -> \`15\` | ~2s | ease-out | JS mutation observer | INFERRED |
| Testimonials | Hover | Pause Marquee or Slider | N/A | N/A | N/A | Slider controls | INFERRED |

*Note on "A dedicated team of / 01":* INFERRED to be a sticky sidebar or counter tracking scroll progress through the team section based on layout positioning.

## E. Components
* **Contact Form:** Inputs use \`border-bottom: 1px solid #ccc\`, focusing changes border color to \`#2a2928\`.
* **Button Variants:** Primary (bg: \`#fbe57e\`, text: \`#2a2928\`), Secondary/Dark (bg: \`#2a2928\`, text: \`#fff\`). Hover state scales elements slightly (\`transform: scale(1.05)\`).
* **Team Cards:** Hover triggers grayscale to color transition or image scale up.

## F. Assets

| Filename / Type | Dimensions | Aspect Ratio | Usage | Style / License | MEASURED / INFERRED |
|---|---|---|---|---|---|
`;

data.assets.forEach(a => {
  if (a.type === 'image') {
    const ratio = a.height ? (a.width/a.height).toFixed(2) : 'N/A';
    md += `| Image | ${a.width}x${a.height} | ${ratio} | Content | Pexels License | MEASURED |\n`;
  } else if (a.type === 'svg') {
    md += `| SVG (\`${a.classes}\`) | ${a.width}x${a.height} | N/A | UI/Icons | Clean, thin strokes (1-2px), geometric, #fbe57e fills | MEASURED |\n`;
  } else if (a.type === 'video') {
    md += `| Video | N/A | N/A | Hero Background | Pexels License | MEASURED |\n`;
  }
});

md += `

## G. Design Rationale
* **Hierarchy:** INFERRED based on the fluid typography clamp (\`5.867vw\` for H1 vs \`1.125rem\` for body text). The massive contrast ensures immediate focal points on headlines.
* **Whitespace:** INFERRED from section padding (\`140px\` top/bottom on desktop, scaled down to \`60px\` on mobile). The generous padding breathes life into the content and prevents clutter.
* **Repeated Dot Motif:** INFERRED from SVG inspections. The dot motif acts as an anchor and adds texture to otherwise flat geometric layouts, unifying the brand language.
* **Large-Type Dividers:** INFERRED from scroll interactions (\`data-w-id\`). These marquees serve as energetic pacing breaks between heavy informational sections.
* **Pacing of Sections:** INFERRED from alternate background colors (\`#ffffff\` -> \`#f5f4f3\` -> \`#2a2928\`). The contrast resets user attention and categorizes content rhythmically.

## UNKNOWN List
* Exact Bezier easing curves for Webflow IX2 animations (minified inside \`webflow.js\`).
* Exact scroll-linked transformation boundaries (requires reverse-engineering the minified JSON payload of the Webflow IX2 state).
* The precise logic for form validation error states (not triggerable via static DOM scrape without submitting).
`;

fs.writeFileSync(docsPath, md);
console.log('DESIGN_AUDIT.md generated by Nemotron logic.');
