# Phase 5: Motion

The motion phase has been successfully completed using `framer-motion` in `App.tsx`.

## Accomplishments
1. **Entrance Animations:** Implemented `fadeUpVariant` for headings, paragraphs, and sections to smoothly fade in and translate up (`y: 30` to `0`) on scroll, mimicking the original template's load behavior.
2. **Scroll Triggers:** Used `whileInView` with `viewport={{ once: true, margin: "-50px" }}` to trigger animations only when elements enter the viewport, preventing repeated jitter.
3. **Staggered Children:** Applied `staggerContainer` to grid layouts (Services, Testimonials, Team, Pricing) so that cards fade in sequentially rather than all at once.
4. **Hover States:** 
   - Primary and secondary buttons now feature `whileHover={{ scale: 1.05 }}` and `whileTap={{ scale: 0.95 }}`.
   - Service cards translate up on hover (`whileHover={{ y: -8 }}`).
   - Team member portraits subtly scale on hover (`scale: 1.02`).
5. **Accessibility Compliance:** Imported and utilized `useReducedMotion()` hook from framer-motion. All `variants` evaluate to an empty object `{}` if the user prefers reduced motion, disabling scroll translations and layout animations instantly.

## Next Steps
- **Phase 6 (Graphics):** Integrate Pexels imagery and build the original SVGs (logo, hero motif).
- **Phase 7 (QA):** Final review and wrap up.
