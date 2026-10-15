import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUp } from 'lucide-react';

export interface BrandButtonProps {
  text: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  bgClassName?: string;
  iconDirection?: 'right' | 'up';
  size?: 'md' | 'lg';
  ariaLabel?: string;
}

export const BrandButton: React.FC<BrandButtonProps> = ({
  text,
  href,
  onClick,
  type = 'button',
  className = '',
  bgClassName = 'bg-white',
  iconDirection = 'right',
  size = 'md',
  ariaLabel,
}) => {
  const isLg = size === 'lg';
  const iconSize = isLg ? 42 : 38;
  const containerHeight = isLg ? 'h-[52px]' : 'h-[48px]';
  const textHeight = isLg ? 'h-[28px] leading-[28px]' : 'h-[26px] leading-[26px]';
  const fontSize = isLg ? 'text-[16px] sm:text-[17px]' : 'text-[15px] sm:text-[16px]';
  const pr = isLg ? 'pr-7' : 'pr-6';

  const content = (
    <>
      {/* Expanding yellow background */}
      <motion.div
        className="absolute left-1.5 top-1.5 bottom-1.5 bg-[#ffe071] rounded-xl z-0 pointer-events-none"
        variants={{
          rest: { width: `${iconSize}px` },
          hover: { width: 'calc(100% - 12px)' },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      />

      {/* Arrow Icon with slight shift on hover */}
      <motion.div
        className="flex items-center justify-center relative z-10 text-[#2a2928] shrink-0 pointer-events-none"
        style={{ width: `${iconSize}px`, height: `${iconSize}px` }}
        variants={{
          rest: { x: 0, y: 0 },
          hover: iconDirection === 'up' ? { x: 0, y: -4 } : { x: 4, y: 0 },
        }}
        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      >
        {iconDirection === 'up' ? (
          <ArrowUp size={isLg ? 21 : 19} strokeWidth={1.9} />
        ) : (
          <ArrowRight size={isLg ? 21 : 19} strokeWidth={1.9} />
        )}
      </motion.div>

      {/* Rolling Text Animation */}
      <div
        className={`relative ${textHeight} overflow-hidden ml-3 sm:ml-3.5 flex flex-col z-10 font-[550] ${fontSize} text-[#2a2928] whitespace-nowrap pointer-events-none tracking-tight`}
      >
        <motion.span
          variants={{
            rest: { y: '0%' },
            hover: { y: '-100%' },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.span>
        <motion.span
          className="absolute top-full left-0 whitespace-nowrap"
          variants={{
            rest: { y: '0%' },
            hover: { y: '-100%' },
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
        >
          {text}
        </motion.span>
      </div>
    </>
  );

  const commonClasses = `group relative inline-flex items-center ${bgClassName} rounded-2xl p-1.5 ${pr} overflow-hidden text-[#2a2928] ${containerHeight} shadow-sm hover:shadow-md transition-shadow cursor-pointer select-none focus:outline-none focus:ring-4 focus:ring-[#ffe071]/50 ${className}`;

  if (href) {
    return (
      <motion.a
        href={href}
        className={commonClasses}
        whileHover="hover"
        initial="rest"
        aria-label={ariaLabel || text}
      >
        {content}
      </motion.a>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      className={commonClasses}
      whileHover="hover"
      initial="rest"
      aria-label={ariaLabel || text}
    >
      {content}
    </motion.button>
  );
};
