import { motion, useReducedMotion, type Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

// Exact Webflow SVGs from clarify template
const TelescopeIcon = () => (
  <svg width="64" height="64" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
    <rect width="44" height="44" rx="12" fill="#FBE57E"/>
    <path d="M20.0664 22.4929L13.8864 23.8109C13.6465 23.863 13.3958 23.8185 13.1884 23.6871C12.9811 23.5558 12.8338 23.348 12.7784 23.1089L12.2414 20.9589C12.1782 20.6999 12.2141 20.4266 12.3419 20.1926C12.4697 19.9586 12.6803 19.7808 12.9324 19.6939L26.4364 15.2539" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M23.5586 21.7463L27.8906 20.8223" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M25.9995 30.9991L22.8945 24.7891" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M26.4854 15.9396C26.3569 15.4251 26.4379 14.8806 26.7108 14.4258C26.9837 13.9711 27.426 13.6433 27.9404 13.5146L29.0304 13.2426C29.2875 13.1785 29.5596 13.219 29.7869 13.3553C30.0141 13.4917 30.178 13.7126 30.2424 13.9696L31.7574 20.0296C31.8219 20.2869 31.7815 20.5592 31.6451 20.7867C31.5088 21.0142 31.2877 21.1782 31.0304 21.2426L29.9404 21.5146C29.4259 21.6432 28.8814 21.5621 28.4267 21.2893C27.9719 21.0164 27.6441 20.5741 27.5154 20.0596L26.4854 15.9396Z" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M16.1562 18.6328L17.2702 23.0888" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M18 30.9991L21.105 24.7891" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <circle cx="22" cy="23" r="2" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const DiamondIcon = () => (
  <svg width="64" height="64" viewBox="0 0 45 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
    <rect x="0.5" width="44" height="44" rx="12" fill="#FBE57E"/>
    <path d="M16 13H28L32 19L22 32L12 19L16 13Z" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M21 13L18 19L22 32L26 19L23 13" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 19H32" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const TrophyIcon = () => (
  <svg width="64" height="64" viewBox="0 0 44 44" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-16 h-16 sm:w-20 sm:h-20">
    <rect width="44" height="44" rx="12" fill="#FBE57E"/>
    <path d="M16 19H14.5C13.837 19 13.2011 18.7366 12.7322 18.2678C12.2634 17.7989 12 17.163 12 16.5C12 15.837 12.2634 15.2011 12.7322 14.7322C13.2011 14.2634 13.837 14 14.5 14H16" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 19H29.5C30.163 19 30.7989 18.7366 31.2678 18.2678C31.7366 17.7989 32 17.163 32 16.5C32 15.837 31.7366 15.2011 31.2678 14.7322C30.7989 14.2634 30.163 14 29.5 14H28" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M14 32H30" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M20 24.6602V27.0002C20 27.5502 19.53 27.9802 19.03 28.2102C17.85 28.7502 17 30.2402 17 32.0002" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M24 24.6602V27.0002C24 27.5502 24.47 27.9802 24.97 28.2102C26.15 28.7502 27 30.2402 27 32.0002" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M28 12H16V19C16 20.5913 16.6321 22.1174 17.7574 23.2426C18.8826 24.3679 20.4087 25 22 25C23.5913 25 25.1174 24.3679 26.2426 23.2426C27.3679 22.1174 28 20.5913 28 19V12Z" stroke="#2A2928" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const approachItems = [
  {
    step: "01",
    Icon: TelescopeIcon,
    title: "Understanding Your Vision",
    description:
      "We begin by diving deep into your brand’s mission, values, and audience. This insight allows us to craft a communication strategy that reflects your unique identity and objectives."
  },
  {
    step: "02",
    Icon: DiamondIcon,
    title: "Crafting Tailored Strategies",
    description:
      "We develop customized solutions that meet your specific goals. Whether it’s a targeted media campaign or a complete brand overhaul, our strategies are designed to maximize impact."
  },
  {
    step: "03",
    Icon: TrophyIcon,
    title: "Collaborate for Success",
    description:
      "We believe that great results come from working closely with our clients. Throughout the process, we keep you involved, ensuring transparency, alignment, and a shared vision for success."
  }
];

export const Approach = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="about" className="section py-20 lg:py-32 px-[24px] w-full bg-white"><div id="approach" className="hidden" />
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Grid Header matching Webflow & Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Label: Cols 1-4 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="col-span-1 lg:col-span-4 flex items-center gap-3 pt-2"
          >
            <div className="w-3 h-3 bg-[#ffe071] rounded-[2px]" />
            <span className="text-[18px] font-[450] text-[#2a2928]">Our approach</span>
          </motion.div>

          {/* Heading: Cols 5-12 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="col-span-1 lg:col-span-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.3rem,3.2vw,3.2vw)] font-[550] leading-[105%] tracking-[-0.02em] text-[#2a2928] max-w-[23ch] m-0">
              We focus on clarity, creativity, and collaboration to ensure every campaign is aligned with your business goals.
            </h2>
          </motion.div>
        </div>

        {/* 3 Cards matching Image 2 */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={shouldReduceMotion ? undefined : staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 lg:mt-24"
        >
          {approachItems.map((item, idx) => {
            const Icon = item.Icon;
            return (
              <motion.div
                key={idx}
                variants={shouldReduceMotion ? undefined : fadeUpVariant}
                className="bg-[#f5f4f3] rounded-[24px] p-8 lg:p-10 flex flex-col justify-between min-h-[460px] lg:min-h-[500px] transition-all duration-300 hover:shadow-sm"
              >
                {/* Top Label */}
                <div className="flex items-center gap-2.5">
                  <div className="w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
                  <span className="text-[16px] font-[450] text-[#2a2928]">{item.step}</span>
                </div>

                {/* Bottom Body */}
                <div className="flex flex-col items-start mt-12">
                  <div className="mb-8 sm:mb-12">
                    <Icon />
                  </div>
                  <h3 className="text-2xl sm:text-[28px] font-[550] text-[#2a2928] leading-[1.1] mb-4 tracking-[-0.01em]">
                    {item.title}
                  </h3>
                  <p className="text-[#63615e] font-[450] text-[15px] sm:text-[16px] leading-[1.5] max-w-[40ch] m-0">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
