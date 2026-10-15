import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  label: string;
  heading: string;
  description: string;
  productSlug: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'ai-agents',
    title: 'AI Agents',
    image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80',
    label: 'Autonomous Enterprise Execution',
    heading: 'Deploy autonomous agents that handle complex business tasks end-to-end without human intervention.',
    description: 'Our autonomous AI agents reason, plan, and execute multi-step business workflows across your digital systems. From deep research, lead enrichment, and CRM updates to cross-system data synchronization and document analysis, our agents operate reliably 24/7 with human-in-the-loop governance.',
    productSlug: 'ai-agents'
  },
  {
    id: 'voice-bots',
    title: 'Voice Bots',
    image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?auto=format&fit=crop&w=600&q=80',
    label: 'Sub-400ms Conversational Voice',
    heading: 'Natural voice assistants for inbound and outbound calls that sound human and convert leads.',
    description: 'Transform customer phone experiences with natural, conversational voice assistants that sound indistinguishable from humans. Powered by sub-400ms latency voice synthesis, intelligent interruption handling, and native PBX integrations that qualify prospects, book meetings, and resolve support tickets instantly.',
    productSlug: 'voicebots'
  },
  {
    id: 'software-aggregator',
    title: 'Software Aggregator',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=600&q=80',
    label: 'Unified Command & Orchestration',
    heading: 'A unified dashboard to manage, monitor, and orchestrate all your AI tools, workflows, and spend.',
    description: 'Eliminate SaaS fragmentation and tool sprawl with a centralized intelligence hub. Monitor all active AI models, agent deployments, API call quotas, and enterprise data connectors from a single, SOC2-compliant command center with real-time telemetry and access control.',
    productSlug: 'software-aggregator'
  },
  {
    id: 'ai-chatbots',
    title: 'AI Chatbots',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80',
    label: '24/7 Omnichannel Intelligence',
    heading: 'Intelligent conversational AI that handles customer inquiries, support tickets, and sales 24/7.',
    description: 'Deliver instant, context-aware customer support and sales conversion across your website, mobile app, WhatsApp, and social channels. Fine-tuned on your proprietary knowledge base, product catalog, and policies, our chatbots resolve over 85% of tier-1 support requests with zero human wait time.',
    productSlug: 'ai-chatbots'
  }
];

export const Services = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shouldReduceMotion = useReducedMotion();

  const toggleService = (index: number) => {
    setOpenIndex(prev => (prev === index ? null : index));
  };

  return (
    <div
      id="Services"
      className="section services-section py-[160px] px-[24px] w-full relative overflow-hidden"
      style={{
        backgroundImage: "url('https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/670d57cf79fd0b4bdb83d391_Background%203%201.svg')",
        backgroundPosition: '0 0',
        backgroundRepeat: 'no-repeat',
        backgroundSize: '150%'
      }}
    >
      <div className="container max-w-[1440px] mx-auto w-full relative z-10">
        {/* 12-Column Grid (main-grid row-gap-8) */}
        <div className="w-layout-grid main-grid row-gap-8 grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-16 lg:gap-y-[8rem] w-full">
          
          {/* Label wrapper: Col 1 to 4 */}
          <div className="label-wrapper col-span-1 lg:col-start-1 lg:col-span-4 flex items-center gap-4 self-start leading-none">
            <div className="small-dot w-[12px] h-[12px] bg-[#ffe071] rounded-[2px] shrink-0" />
            <span className="text-[18px] leading-[23.4px] text-[#2a2928] font-[450] inline-block">
              Our Top Services
            </span>
          </div>

          {/* Heading: Col 7 to 12 */}
          <h2 className="col-span-1 lg:col-start-7 lg:col-span-6 text-[#2a2928] text-3xl md:text-5xl lg:text-[clamp(2.5rem,3.2vw,3.2vw)] font-[550] leading-[100%] tracking-[-0.02em] max-w-[23ch] m-0">
            From autonomous multi-agent pipelines to conversational voice systems, our team delivers enterprise AI solutions.
          </h2>

          {/* Services List: Col 3 to 12 (indented by 2 cols) */}
          <div className="services-list col-span-1 lg:col-start-3 lg:col-span-10 flex flex-col gap-14 w-full">
            {servicesData.map((service, index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={service.id}
                  className="service-wrapper border-b border-[#efeeec] pb-14 w-full flex flex-col cursor-pointer group"
                  onClick={() => toggleService(index)}
                >
                  {/* Service Header */}
                  <div className="service-header flex items-center justify-between w-full select-none">
                    <div className="service-title-wrap flex items-center gap-3 sm:gap-4 lg:gap-5">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="service-image w-16 sm:w-20 md:w-24 lg:w-[9.5vw] lg:max-w-[10vw] aspect-[16/9] rounded-lg md:rounded-xl object-cover self-center mt-[0.2vw] shrink-0 transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span className="service-title text-[clamp(2.25rem,6.2vw,7.5vw)] font-[550] text-[#2a2928] tracking-[-0.03em] leading-none self-center">
                        {service.title}
                      </span>
                    </div>

                    <div
                      className={`accordion-icon w-10 h-10 mt-[0.5vw] flex items-center justify-center shrink-0 transition-transform duration-300 ease-out ${
                        isOpen ? 'rotate-45' : 'rotate-0'
                      }`}
                    >
                      <svg
                        width="44"
                        height="44"
                        viewBox="0 0 44 44"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-7 h-7 sm:w-8 sm:h-8"
                      >
                        <path
                          d="M0.472656 24.4322L0.472656 20.4802H20.1287V0.824219L24.0807 0.824219V20.4802L43.6327 20.4802V24.4322L24.0807 24.4322L24.0807 43.9842H20.1287L20.1287 24.4322H0.472656Z"
                          fill="#D1CCC7"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Accordion Body */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        key="content"
                        initial={shouldReduceMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
                        animate={shouldReduceMotion ? { opacity: 1 } : { height: 'auto', opacity: 1 }}
                        exit={shouldReduceMotion ? { opacity: 0 } : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                        className="service-body-wrapper overflow-hidden"
                      >
                        <div className="w-layout-grid service-grid grid grid-cols-1 lg:grid-cols-10 gap-x-6 gap-y-6 mt-10 lg:mt-[4.5rem]">
                          <div className="service-label col-span-1 lg:col-span-3 text-[17px] text-[#63615e] font-[450]">
                            {service.label}
                          </div>
                          <div className="flex-vertical row-gap-2 flex flex-col gap-6 lg:gap-8 col-span-1 lg:col-start-5 lg:col-span-6">
                            <div className="display-medium text-2xl sm:text-3xl lg:text-[clamp(1.5rem,1.6vw,1.6vw)] font-[550] text-[#2a2928] tracking-[-0.03em] leading-[1.1] max-w-[30ch]">
                              {service.heading}
                            </div>
                            <p className="service-paragraph text-[16px] sm:text-[17px] text-[#63615e] font-[450] leading-[1.5] max-w-[40ch] m-0">
                              {service.description}
                            </p>
                            <div>
                              <a
                                href={`/product/${service.productSlug}`}
                                onClick={(e) => {
                                  e.stopPropagation();
                                  e.preventDefault();
                                  window.history.pushState({}, '', `/product/${service.productSlug}`);
                                  window.dispatchEvent(new Event('navigationchange'));
                                  window.scrollTo({ top: 0, behavior: 'smooth' });
                                }}
                                className="inline-flex items-center gap-2 text-sm font-semibold text-[#2a2928] hover:text-black group/link pt-1"
                              >
                                <span className="underline decoration-[#ffe071] decoration-2 underline-offset-4">
                                  Explore {service.title} Product
                                </span>
                                <span className="transition-transform duration-200 group-hover/link:translate-x-1">→</span>
                              </a>
                            </div>
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </div>
  );
};
