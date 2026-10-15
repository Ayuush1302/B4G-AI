import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Share2,
  Bot,
  MessageSquare,
  Mic,
  Store,
  Eye,
  Receipt,
  LayoutGrid,
  Handshake,
  ArrowUpRight,
  ArrowRight,
} from 'lucide-react';

export interface ProductItem {
  id: string;
  name: string;
  description: string;
  icon: React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>;
}

export const products: ProductItem[] = [
  {
    id: 'b4g-social',
    name: 'B4G Social',
    description: 'Automate your social media presence with AI-powered content creation, scheduling, and engagement tools',
    icon: Share2,
  },
  {
    id: 'ai-agents',
    name: 'AI Agents',
    description: 'Deploy autonomous agents that handle complex business tasks end-to-end without human intervention.',
    icon: Bot,
  },
  {
    id: 'ai-chatbots',
    name: 'AI Chatbots',
    description: 'Intelligent conversational AI that handles customer inquiries, support tickets, and sales 24/7',
    icon: MessageSquare,
  },
  {
    id: 'voicebots',
    name: 'Voicebots',
    description: 'Natural voice assistants for inbound and outbound calls that sound human and convert leads.',
    icon: Mic,
  },
  {
    id: 'ai-marketplace',
    name: 'AI Marketplace',
    description: 'Browse and deploy pre-built AI solutions tailored for specific industries and use cases.',
    icon: Store,
  },
  {
    id: 'ai-surveillance',
    name: 'AI Surveillance',
    description: 'Real-time intelligent monitoring with automated incident detection and smart alerting.',
    icon: Eye,
  },
  {
    id: 'invoice-processing',
    name: 'Invoice Processing',
    description: 'Automate invoice handling, data extraction, validation, and payment processing workflows.',
    icon: Receipt,
  },
  {
    id: 'software-aggregator',
    name: 'Software Aggregator',
    description: 'Unified dashboard to manage all your SaaS tools, licenses, and subscriptions in one place.',
    icon: LayoutGrid,
  },
  {
    id: 'intelligent-sourcing',
    name: 'Intelligent Sourcing',
    description: 'AI-powered procurement platform that finds the best vendors and negotiates',
    icon: Handshake,
  },
];

interface ProductDropdownProps {
  isOpen: boolean;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}

export const ProductDropdown: React.FC<ProductDropdownProps> = ({
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
          className="absolute left-[-24px] top-full pt-2.5 w-[860px] max-w-[calc(100vw-60px)] z-50 pointer-events-auto"
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
                  B4G AI Product Suites
                </span>
              </div>
              <span className="text-[12px] font-[450] text-[#8c8a87]">
                9 Enterprise Autonomous Solutions
              </span>
            </div>

            {/* 3x3 Grid */}
            <div className="grid grid-cols-3 gap-x-4 gap-y-2.5">
              {products.map((product) => {
                const IconComponent = product.icon;
                return (
                  <a
                    key={product.id}
                    href={`/product/${product.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      window.history.pushState({}, '', `/product/${product.id}`);
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
                          {product.name}
                        </span>
                        <ArrowUpRight
                          size={13}
                          className="opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200 text-[#2a2928]"
                        />
                      </div>
                      <p className="text-[12px] leading-[1.38] text-[#707070] font-[450] mt-0.5 line-clamp-2">
                        {product.description}
                      </p>
                    </div>
                  </a>
                );
              })}
            </div>

            {/* Bottom Bar matching design system */}
            <div className="mt-4 pt-3 border-t border-[#efeeec] flex items-center justify-between bg-[#faf8f5] -mx-6 -mb-6 px-6 py-3 rounded-b-[23px]">
              <div className="flex items-center gap-2">
                <span className="text-[12.5px] font-[450] text-[#707070]">
                  Need a custom AI architecture for your enterprise?
                </span>
              </div>
              <a
                href="#contact"
                onClick={onClose}
                className="inline-flex items-center gap-1.5 text-[12.5px] font-[550] text-[#2a2928] hover:text-black transition-colors group"
              >
                <span>Speak with an AI architect</span>
                <ArrowRight size={13} className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
