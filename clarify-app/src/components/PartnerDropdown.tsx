import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Palette,
  Wrench,
  PlugZap,
  Handshake,
  Percent,
  Rocket,
  Coins,
  PackageCheck,
  ArrowUpRight,
  ArrowRight,
  Sparkles,
} from 'lucide-react';

export interface PartnerProgramItem {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
}

export const partnerProgramsList: PartnerProgramItem[] = [
  {
    id: 'white-label',
    name: 'White Label',
    description: 'Rebrand our entire platform as your own and offer AI solutions under your company name.',
    icon: Palette,
  },
  {
    id: 'implementation',
    name: 'Implementation',
    description: 'Become a certified partner to deploy and customize B4G AI solutions for your clients.',
    icon: Wrench,
  },
  {
    id: 'technology',
    name: 'Technology',
    description: 'Integrate your products with B4G AI platform or build extensions using our APIs.',
    icon: PlugZap,
  },
  {
    id: 'strategic',
    name: 'Strategic',
    description: 'Form a long-term partnership for joint ventures, co-development, and market expansion.',
    icon: Handshake,
  },
  {
    id: 'sales-partner',
    name: 'Sales Partner',
    description: 'Refer customers and earn competitive commissions on every successful deal you close.',
    icon: Percent,
  },
  {
    id: 'startup-program',
    name: 'Startup Program',
    description: 'Special pricing and support for early-stage startups building with AI technology.',
    icon: Rocket,
  },
  {
    id: 'royalty-program',
    name: 'Royalty Program',
    description: 'Earn ongoing revenue share from customers you bring to the B4G AI ecosystem.',
    icon: Coins,
  },
  {
    id: 'reseller-program',
    name: 'Reseller Program',
    description: 'Purchase B4G AI products at wholesale prices and resell to your customer base.',
    icon: PackageCheck,
  },
];

interface PartnerDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export const PartnerDropdown: React.FC<PartnerDropdownProps> = ({
  isOpen,
  onMouseEnter,
  onMouseLeave,
  onClose,
}) => {
  const navigateTo = (path: string) => {
    window.history.pushState({}, '', path);
    window.dispatchEvent(new Event('navigationchange'));
    window.scrollTo({ top: 0, behavior: 'smooth' });
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 8, scale: 0.985 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 6, scale: 0.985 }}
          transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="absolute left-1/2 -translate-x-1/2 top-full pt-2.5 w-[760px] max-w-[calc(100vw-48px)] z-50 pointer-events-auto"
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
                  Partner Programs
                </span>
              </div>
              <a
                href="/partners/apply"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/partners/apply');
                }}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-[550] text-[#2a2928] hover:text-black hover:underline transition-colors"
              >
                <span>Apply to become a partner</span>
                <ArrowRight size={13} />
              </a>
            </div>

            {/* 2-Column Grid: 8 Partner Programs */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2.5">
              {partnerProgramsList.map((prog) => {
                const IconComponent = prog.icon;
                return (
                  <a
                    key={prog.id}
                    href={`/partners/${prog.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      navigateTo(`/partners/${prog.id}`);
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
                          {prog.name}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[#2a2928]"
                        />
                      </div>
                      <p className="text-[12px] leading-[1.38] text-[#707070] font-[450] mt-0.5 line-clamp-2">
                        {prog.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Bar with CTA to Application Form */}
            <div className="mt-4 pt-3 border-t border-[#efeeec] flex items-center justify-between bg-[#faf8f5] -mx-6 -mb-6 px-6 py-3 rounded-b-[23px]">
              <div className="flex items-center gap-2">
                <Sparkles size={14} className="text-[#2a2928]" />
                <span className="text-[12.5px] font-[450] text-[#707070]">
                  Over 150+ consultancies, MSPs, and ISVs scale with B4G AI.
                </span>
              </div>
              <a
                href="/partners/apply"
                onClick={(e) => {
                  e.preventDefault();
                  navigateTo('/partners/apply');
                }}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-[550] text-[#2a2928] hover:text-black transition-colors group bg-[#ffe071] hover:bg-[#fad859] px-3.5 py-1.5 rounded-full shadow-xs"
              >
                <span>Apply to become a partner</span>
                <ArrowRight size={13} className="group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
