import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion';
import { copy } from '../content/copy';
import { DotMotif } from '../Graphics';

export const Divider = ({ textOverride }: { textOverride?: string }) => {
  const shouldReduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  
  // Scroll-linked translate from 10% to -10%
  const x = useTransform(scrollYProgress, [0, 1], ["10%", "-10%"]);

  return (
    <section className="section-padding py-16 overflow-hidden bg-brand-white flex items-center justify-center">
      <motion.div 
        style={{ x: shouldReduceMotion ? 0 : x }}
        className="flex items-center gap-12 whitespace-nowrap"
      >
        <DotMotif size={24} />
        <span className="text-4xl md:text-8xl font-bold text-brand-black tracking-tighter">
          {textOverride || copy.divider.beats.join(" ")}
        </span>
        <DotMotif size={24} />
      </motion.div>
    </section>
  );
};
