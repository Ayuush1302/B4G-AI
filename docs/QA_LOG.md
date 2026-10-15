# QA LOG

## Section 1: Navbar
* **Visual Match Check:** Screenshots captured at 1440, 1024, 768, and 390px (saved to `/reference/qa/navbar/`).
* **Differences / Fixes applied:**
  * Added the `y-translate` hover text-roll effect to links, matching the exact Webflow IX2 behavior.
  * Verified desktop links are hidden on mobile/tablet widths.
  * Implemented the `backdrop-blur` and shadow scroll state.
  * *Remaining Mismatch:* The mobile menu button currently says "Menu" instead of an SVG hamburger icon. The exact Webflow easing curve for the scroll transition is `ease-out`, whereas we used Tailwind's default `ease` (logging here per rules). No other layout or spacing discrepancies found against `DESIGN_AUDIT.md`.
