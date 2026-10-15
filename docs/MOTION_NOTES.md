# Motion Notes

This document logs the inferred and measured values from the motion inventory and how they were implemented.

## 1. Nav Links
- **Behavior**: Hover text-roll (y-translate)
- **Status**: Implemented via CSS in `Navbar.tsx`.
- **Value**: `0 -> -100%` over ~0.3s.

## 2. Hero Video
- **Behavior**: Autoplay/Muted background video.
- **Status**: Implemented in `App.tsx` (Hero component).
- **Rule enforced**: Paused (not rendered) if `prefers-reduced-motion` is active.

## 3. Logo Strip
- **Behavior**: Infinite Marquee (Translate-x)
- **Status**: Implemented in `App.tsx` (About component).
- **Value**: `0% -> -50%` over 20s linear loop.
- **Rule enforced**: Paused if `prefers-reduced-motion` is active.

## 4. Services (+)
- **Behavior**: Expand / Opacity on hover.
- **Status**: Implemented in `App.tsx` (Services component).
- **Value**: `height: 0 -> auto`, `opacity: 0 -> 1` over 0.4s.
- **TODO**: Fine-tune the easing curve if it differs from the Webflow original. Currently using framer-motion's `easeOut`.

## 5. Dividers
- **Behavior**: Scroll-linked Translate
- **Status**: Implemented in `Divider.tsx`.
- **Value**: `x: 10% -> -10%` tied to `useScroll()`.
- **Rule enforced**: Disabled under reduced motion.

## 6. Stats (15/32)
- **Behavior**: Count Up
- **Status**: Implemented in `Stats.tsx`.
- **Value**: `0 -> Target value` over 2 seconds.
- **Rule enforced**: Instantly renders the target value under reduced motion.

## 7. Testimonials
- **Behavior**: Slider / Pause Marquee on Hover
- **Status**: Currently implemented as a grid rather than a slider. 
- **TODO**: Evaluate converting the grid into an infinite slider that pauses on hover if the layout breaks on larger datasets.
