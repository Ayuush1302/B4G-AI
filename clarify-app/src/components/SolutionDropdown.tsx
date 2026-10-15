import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShoppingBag,
  Building2,
  Activity,
  Factory,
  Briefcase,
  Sparkles,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

export interface IndustrySolutionItem {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
}

export const solutions: IndustrySolutionItem[] = [
  {
    id: 'retail-ecommerce',
    name: 'Retail & E-commerce',
    description: 'Boost sales with AI chatbots, automate customer support, and personalize shopping experiences',
    icon: ShoppingBag,
  },
  {
    id: 'financial-services',
    name: 'Financial Services',
    description: 'Automate compliance, streamline client onboarding, and enhance fraud detection with AI.',
    icon: Building2,
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    description: 'Improve patient engagement with appointment scheduling, FAQ bots, and care coordination.',
    icon: Activity,
  },
  {
    id: 'manufacturing',
    name: 'Manufacturing',
    description: 'Optimize operations with predictive maintenance, quality control, and supply chain automation.',
    icon: Factory,
  },
  {
    id: 'professional-services',
    name: 'Professional Services',
    description: 'Streamline client management, automate intake processes, and accelerate project delivery with autonomous agent workflows.',
    icon: Briefcase,
  },
];

interface SolutionDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export const SolutionDropdown: React.FC<SolutionDropdownProps> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClose,
}) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.985 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-[-20px] top-full pt-2.5 w-[720px] max-w-[calc(100vw-60px)] z-50 pointer-events-auto"
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Card Container */}
          <div className="bg-white/95 backdrop-blur-2xl border border-[#2a2928]/10 rounded-[24px] p-6 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.12)] ring-1 ring-black/5 overflow-hidden">
            {/* Header Eyebrow Row */}
            <div className="flex items-center justify-between pb-3 mb-4 border-b border-[#efeeec]">
              <div className="flex items-center gap-2">
                <div className="w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
                <span className="text-[12px] font-[550] tracking-wider uppercase text-[#707070]">
                  Industry Solutions
                </span>
              </div>
              <span className="text-[12px] font-[450] text-[#8c8a87]">
                Tailored Sector Architectures
              </span>
            </div>

            {/* 2-Column Grid: 5 Industry Solutions + 1 Custom Blueprint */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {solutions.map((solution) => {
                const IconComponent = solution.icon;
                return (
                  <a
                    key={solution.id}
                    href={`/solution/${solution.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', `/solution/${solution.id}`);
                      window.dispatchEvent(new Event('navigationchange'));
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                      onClose();
                    }}
                    className="group relative flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f7f6f4] transition-all duration-200 border border-transparent hover:border-[#2a2928]/5"
                  >
                    {/* Icon Box */}
                    <div className="w-9 h-9 rounded-xl bg-[#f4f4f4] group-hover:bg-[#ffe071] flex items-center justify-center shrink-0 transition-all duration-300 text-[#2a2928] group-hover:scale-105 shadow-xs mt-0.5">
                      <IconComponent size={18} strokeWidth={1.8} />
                    </div>

                    {/* Content */}
                    <div className="flex flex-col min-w-0 pr-1">
                      <div className="flex items-center gap-1">
                        <span className="font-[550] text-[14.5px] text-[#2a2928] tracking-tight group-hover:text-black leading-snug">
                          {solution.name}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[#2a2928]"
                        />
                      </div>
                      <p className="text-[12px] leading-[1.38] text-[#707070] font-[450] mt-0.5 line-clamp-2">
                        {solution.description}
                      </p>
                    </div>
                  </a>
                );
              })}

              {/* 6th Card: Custom Sector Blueprint */}
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  onClose();
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
                className="group relative flex items-start gap-3 p-2.5 rounded-xl bg-[#fbf9f5] hover:bg-[#ffe071]/20 transition-all duration-200 border border-[#ffe071]/40"
              >
                <div className="w-9 h-9 rounded-xl bg-[#ffe071] flex items-center justify-center shrink-0 transition-all duration-300 text-[#2a2928] group-hover:scale-105 shadow-xs mt-0.5">
                  <Sparkles size={18} strokeWidth={2} />
                </div>
                <div className="flex flex-col min-w-0 pr-1">
                  <div className="flex items-center gap-1">
                    <span className="font-[550] text-[14.5px] text-[#2a2928] tracking-tight group-hover:text-black leading-snug">
                      Custom Sector Blueprint
                    </span>
                    <ArrowUpRight
                      size={13}
                      className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[#2a2928]"
                    />
                  </div>
                  <p className="text-[12px] leading-[1.38] text-[#707070] font-[450] mt-0.5 line-clamp-2">
                    Have unique compliance, on-premises, or air-gapped constraints? Let's engineer a bespoke pipeline.
                  </p>
                </div>
              </a>
            </div>

            {/* Bottom Bar */}
            <div className="mt-4 pt-3 border-t border-[#efeeec] flex items-center justify-between bg-[#faf8f5] -mx-6 -mb-6 px-6 py-3 rounded-b-[23px]">
              <div className="flex items-center gap-2">
                <span className="text-[12.5px] font-[450] text-[#707070]">
                  Ready to deploy AI in your vertical?
                </span>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-[550] text-[#2a2928] hover:text-black transition-colors group"
              >
                <span>Request an Industry Blueprint</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
