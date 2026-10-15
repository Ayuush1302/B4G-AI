# Clarify | Enterprise Digital Strategy

This project is a React + TypeScript + Tailwind CSS + Framer Motion implementation of a high-performance, accessible, and dynamic enterprise digital agency website.

## Project Structure
- `src/App.tsx`: The main application entry point. Sequences all 14 semantic `<section>` components.
- `src/components/`: Modular React components for each section (`Navbar`, `Hero`, `About`, `Services`, `Approach`, `Stats`, `Contact`, etc.).
- `src/content/copy.ts`: The single source of truth for all text content, ensuring no hard-coded strings in the UI.
- `src/Graphics.tsx`: Contains all inline SVG assets generated systematically (Logo, Hero Background, Dot Motif, Client Logos).
- `index.html`: Optimized entry point containing critical preloads, Open Graph SEO metadata, and semantic document structure.
- `public/`: Static assets (fonts, robots.txt, sitemap.xml, favicon).

## Design Tokens & Styling
The styling is completely driven by design tokens established during the initial design audit.
- **Tokens**: Located in `tailwind.config.js` and `index.css`.
- **Colors**: Strict palette (`brand-black`, `brand-white`, `brand-primary` #fbe57e, and grayscale variants).
- **Typography**: Aspekta (OFL) hosted locally, fluid type clamp for responsiveness.
- **Aesthetics**: Clean, geometric, thin strokes (1-2px), high contrast.

## Content Management (`copy.ts`)
To update the text on the website:
1. Open `src/content/copy.ts`.
2. Edit the strictly typed JSON object.
3. The UI components will automatically reflect the changes without requiring layout adjustments.

## How to Swap Assets
- **Photos/Videos**: To use your own media instead of the placeholder Pexels URLs, place your optimized WebP/MP4 files in `public/media/` and update the `src="..."` paths in the respective components (`App.tsx`, `Approach.tsx`, etc.).
- **Icons**: The project uses `lucide-react`. To change an icon, import the new icon in the component and pass the `strokeWidth={1.5}` prop to maintain the design system's thin-stroke aesthetic.
- **Client Logos**: The placeholder client logos in `Graphics.tsx` are generated via a custom SVG path array. To use real client logos, replace the `<ClientLogos />` component in the `About` section with actual SVG imports or `<img>` tags.

## Remaining UNKNOWN/INFERRED Items
The following items were identified during the audit and have been implemented using best approximations:
- **Exact Bezier Curves**: Webflow IX2 animations use minified easing curves. We approximate this with Framer Motion's `easeOut` and `ease: [0.22, 1, 0.36, 1]`.
- **Form Submission**: The Contact form validation and state logic is implemented, but the actual submission endpoint (e.g., Formspree, Next.js API route) is stubbed and must be wired up (`Contact.tsx` -> `handleSubmit`).
- **Testimonial Slider**: Currently implemented as a grid. If the testimonials dataset grows beyond 2 items, it should be converted into an infinite sliding marquee that pauses on hover.

## Accessibility & Motion
This project strictly enforces `prefers-reduced-motion`. All complex animations (count-ups, scroll-linked translation, video autoplay) fall back to static or instantly-resolved states for users who prefer reduced motion. Semantic landmarks (`nav`, `main`, `section`, `footer`) and ARIA labels are used throughout.
