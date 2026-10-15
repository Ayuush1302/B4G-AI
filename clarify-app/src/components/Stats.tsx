import { motion, useReducedMotion, type Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const statsItems = [
  {
    label: "A dedicated team of",
    value: "01"
  },
  {
    label: "Years of experience",
    value: "15"
  },
  {
    label: "Active clients",
    value: "32"
  },
  {
    label: "Successful strategies this year",
    value: "14"
  }
];

export const Stats = () => {
  const shouldReduceMotion = useReducedMotion();

  return (
    <section id="team" className="section py-20 lg:py-32 px-[24px] w-full bg-white"><div id="numbers" className="hidden" />
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Header matching Image 5 */}
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
            <span className="text-[18px] font-[450] text-[#2a2928]">By the numbers</span>
          </motion.div>

          {/* Heading: Cols 5-12 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="col-span-1 lg:col-span-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.3rem,3.2vw,3.2vw)] font-[550] leading-[105%] tracking-[-0.02em] text-[#2a2928] max-w-[28ch] m-0">
              We’ve helped brands achieve measurable impact across industries. Here’s a few of the numbers behind our success.
            </h2>
          </motion.div>
        </div>

        {/* 4 Metrics Columns with border-left */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={shouldReduceMotion ? undefined : staggerContainer}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-12 sm:gap-y-16 gap-x-6 mt-20 lg:mt-28"
        >
          {statsItems.map((item, idx) => (
            <motion.div
              key={idx}
              variants={shouldReduceMotion ? undefined : fadeUpVariant}
              className="border-l border-[#efeeec] pl-6 sm:pl-8 lg:pl-10 flex flex-col justify-between min-h-[260px] sm:min-h-[300px] lg:min-h-[360px] group transition-colors"
            >
              {/* Top label with yellow dot */}
              <div className="flex flex-col items-start gap-3">
                <div className="w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
                <span className="text-[16px] sm:text-[17px] font-[450] text-[#2a2928] leading-[1.3] max-w-[20ch]">
                  {item.label}
                </span>
              </div>

              {/* Giant Number */}
              <div className="text-[clamp(4.5rem,8vw,10.5vw)] font-medium leading-[80%] text-[#2a2928] tracking-[-0.03em] mt-12 lg:mt-20 select-none">
                {item.value}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
