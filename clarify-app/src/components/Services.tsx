import { useState } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';

interface ServiceItem {
  id: string;
  title: string;
  image: string;
  label: string;
  heading: string;
  description: string;
}

const servicesData: ServiceItem[] = [
  {
    id: 'media-relations',
    title: 'Media Relations',
    image: 'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fd8fb866d905ea29142eac_pexels-mikhail-nilov-6592668.webp',
    label: 'Amplify Your Presence',
    heading: 'Building strong media connections to elevate your brand’s visibility and credibility',
    description: 'Our media relations service ensures your brand gets the attention it deserves. By fostering strong relationships with journalists and influencers, we secure impactful coverage that enhances your credibility and keeps your message in the spotlight.'
  },
  {
    id: 'brand-strategy',
    title: 'Brand Strategy',
    image: 'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fd8fb83e1b0a7a9c65e4a5_pexels-mikhail-nilov-6592670.webp',
    label: 'Define Your Identity',
    heading: 'Crafting brand strategies to establish a strong and lasting market presence',
    description: 'A clear, cohesive brand strategy is essential for standing out in a crowded marketplace. Our brand strategy service helps you define your brand’s unique voice, values, and visual identity. From positioning to messaging, we create a framework that resonates.'
  },
  {
    id: 'digital-campaigns',
    title: 'Digital Campaigns',
    image: 'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fd8fb7637b275caaf0cc83_pexels-mikhail-nilov-6592684.webp',
    label: 'Engage and Influence',
    heading: 'Crafting targeted digital strategies to drive engagement, loyalty, and results',
    description: 'In today’s digital landscape, engaging your audience requires more than just a presence—it requires a strategy. Our digital campaigns blend creative content with targeted outreach to capture attention, build loyalty, and drive results. From social media to email marketing, we craft campaigns that inspire action.'
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
            From crafting compelling narratives to managing your reputation, our team delivers customized solutions.
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
