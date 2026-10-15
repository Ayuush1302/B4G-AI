import { motion, useReducedMotion } from 'framer-motion';
import { BrandButton } from './BrandButton';

export const FullscreenBanner2 = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section className="section fullscreen-image-section py-0 px-[24px] w-full">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="fullscreen-image-wrap w-full aspect-[16/9] min-h-[460px] sm:min-h-[560px] lg:min-h-[640px] rounded-[24px] sm:rounded-[32px] overflow-hidden relative group bg-[#2a2928] text-white">
          {/* Background Image with initial scale settle */}
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.08 }}
            whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="w-full h-full absolute inset-0"
          >
            <img
              src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fd8fb87802867051752e33_pexels-mikhail-nilov-6592666.webp"
              alt="Engage. Empower. Elevate."
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              loading="lazy"
            />
          </motion.div>

          {/* White Curtain Image-Revealer that wipes from Left to Right */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ x: '0%' }}
              whileInView={{ x: '101%' }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.15, ease: [0.65, 0, 0.35, 1], delay: 0.2 }}
              className="image-revealer absolute inset-0 bg-white z-20 pointer-events-none rounded-[24px] sm:rounded-[32px]"
            />
          )}

          {/* Subtle vignette gradient overlay for readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none z-10" />

          {/* Top-Right Text Overlay (matching 1st image) */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="fullscreen-image-text-wrap absolute top-6 right-6 sm:top-12 sm:right-12 lg:top-14 lg:right-14 flex flex-col items-start gap-4 z-10 text-left"
          >
            <div className="small-dot w-3 h-3 bg-[#ffe071] rounded-[2px]" />
            <h2 className="display-large text-white text-[clamp(2.75rem,5.5vw,5.5vw)] font-[550] leading-[95%] tracking-[-0.04em] m-0">
              Engage.<br />Empower. Elevate.
            </h2>
          </motion.div>

          {/* Bottom-Left CTA Button with expanding hover animation */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
            whileInView={shouldReduceMotion ? undefined : { opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 left-6 sm:bottom-10 sm:left-10 z-30"
          >
            <BrandButton text="Get in touch with us" href="#Contact" bgClassName="bg-white" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};
