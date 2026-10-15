import React, { useRef } from 'react';
import { motion, useSpring, useReducedMotion } from 'framer-motion';

interface MagneticProps {
  children: React.ReactElement<{ className?: string }>;
  intensity?: number;
  springOptions?: {
    stiffness?: number;
    damping?: number;
    mass?: number;
  };
}

export const Magnetic = ({
  children,
  intensity = 0.35,
  springOptions = { stiffness: 150, damping: 15, mass: 0.1 }
}: MagneticProps) => {
  const shouldReduceMotion = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);

  const x = useSpring(0, springOptions);
  const y = useSpring(0, springOptions);

  if (shouldReduceMotion) {
    return children;
  }

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const { clientX, clientY } = e;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = clientX - centerX;
    const distanceY = clientY - centerY;

    x.set(distanceX * intensity);
    y.set(distanceY * intensity);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x, y }}
      className="inline-block"
    >
      {children}
    </motion.div>
  );
};
