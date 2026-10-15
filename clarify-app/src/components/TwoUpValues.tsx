import { motion, useReducedMotion, type Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const TwoUpValues = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1: Image 3 - Building impact through clear communication */}
      <section
        className="section py-20 sm:py-32 px-[24px] w-full relative"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/670d54d26bda66dca6c8c77d_Background%203.svg')",
          backgroundPosition: '100% 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Image (woman at flipchart board) */}
          <div className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden relative group bg-[#f5f4f3]">
            {/* Image with initial scale settle */}
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 1.08 }}
              whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="w-full h-full absolute inset-0"
            >
              <img
                src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fd8fb77db2867de294c8ae_pexels-mikhail-nilov-6592678.webp"
                alt="Building impact through clear communication"
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
          </div>

          {/* Right: Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="flex flex-col items-start lg:pl-6"
          >
            {/* Small yellow dot */}
            <div className="w-3 h-3 bg-[#ffe071] rounded-[2px] mb-6" />

            <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.3rem,3.2vw,3.2vw)] font-[550] leading-[105%] tracking-[-0.02em] text-[#2a2928] mb-10 sm:mb-14">
              Building impact through clear communication
            </h2>

            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] sm:text-[20px] font-[550] text-[#2a2928]">
                  Clear Communication
                </h4>
                <p className="text-[15px] sm:text-[16px] font-[450] text-[#63615e] leading-[1.6] max-w-[44ch] m-0">
                  At Clarify, we understand that clarity is key to effective communication. We distill complex ideas into simple, impactful messages that resonate with your audience.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] sm:text-[20px] font-[550] text-[#2a2928]">
                  Driving Meaningful Engagement
                </h4>
                <p className="text-[15px] sm:text-[16px] font-[450] text-[#63615e] leading-[1.6] max-w-[44ch] m-0">
                  Our strategies go beyond one-time interactions; we focus on fostering long-term engagement. We create opportunities for your audience to connect with your brand on a deeper level, inspiring loyalty and interest.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2: Image 4 - Delivering real results that matter with strategic precision */}
      <section
        className="section py-20 sm:py-32 px-[24px] w-full relative"
        style={{
          backgroundImage:
            "url('https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/670d57cf79fd0b4bdb83d391_Background%203%201.svg')",
          backgroundPosition: '0 0',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}
      >
        <div className="max-w-[1440px] mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Left: Text content */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="flex flex-col items-start lg:pr-6 order-2 lg:order-1"
          >
            {/* Small yellow dot */}
            <div className="w-3 h-3 bg-[#ffe071] rounded-[2px] mb-6" />

            <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.3rem,3.2vw,3.2vw)] font-[550] leading-[105%] tracking-[-0.02em] text-[#2a2928] mb-10 sm:mb-14">
              Delivering real results that matter with strategic precision
            </h2>

            <div className="flex flex-col gap-8 sm:gap-10">
              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] sm:text-[20px] font-[550] text-[#2a2928]">
                  Maximizing Your Reach
                </h4>
                <p className="text-[15px] sm:text-[16px] font-[450] text-[#63615e] leading-[1.6] max-w-[44ch] m-0">
                  With our targeted approach, we help you reach the right audience at the right time. We amplify your message to ensure it cuts through the noise and reaches those who matter most to your business.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                <h4 className="text-[18px] sm:text-[20px] font-[550] text-[#2a2928]">
                  Achieving Measurable Success
                </h4>
                <p className="text-[15px] sm:text-[16px] font-[450] text-[#63615e] leading-[1.6] max-w-[44ch] m-0">
                  We believe in results that you can see. Every campaign we craft is designed with clear objectives and measurable outcomes in mind. Our work delivers the impact you need to achieve your business goals.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Right: Image (woman sitting on beanbag) */}
          <div className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-[4/5] rounded-[24px] sm:rounded-[32px] overflow-hidden relative group bg-[#f5f4f3] order-1 lg:order-2">
            {/* Image with initial scale settle */}
            <motion.div
              initial={shouldReduceMotion ? false : { scale: 1.08 }}
              whileInView={shouldReduceMotion ? undefined : { scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              className="w-full h-full absolute inset-0"
            >
              <img
                src="https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66fd8fb8d3259ec50fa47975_pexels-mikhail-nilov-6592675.webp"
                alt="Delivering real results that matter with strategic precision"
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
          </div>
        </div>
      </section>
    </div>
  );
};
