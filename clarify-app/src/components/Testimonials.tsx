import { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  avatar: string;
  isYellow?: boolean;
}

const testimonialsData: TestimonialItem[] = [
  {
    quote:
      '"The level of professionalism and attention to detail is unmatched. They truly understand our needs and deliver beyond expectations."',
    author: 'Clarissa Johnson',
    role: 'CEO, Elevate PR Group',
    avatar:
      'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66ffe97e818584020ea92aca_pexels-divinetechygirl-1181686.webp',
    isYellow: false
  },
  {
    quote:
      '“Working with Clarify has been a game-changer. Their strategies have boosted our media presence and audience engagement.”',
    author: 'Lisa Kim',
    role: 'Head of Communications, Vertex',
    avatar:
      'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66ffe97d6da2d99274dd47fe_pexels-olly-774909.webp',
    isYellow: true
  },
  {
    quote:
      '"Clarify helped us transform our brand’s voice and expand our reach. Their team is incredibly dedicated and results-driven"',
    author: 'Sarah Thompson',
    role: 'Marketing Director, Brightwave Media',
    avatar:
      'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66ffe97dde3f9040d18b01cc_pexels-olly-785667.webp',
    isYellow: false
  },
  {
    quote:
      '"The team at Clarify exceeded our expectations. Their clear, strategic approach helped us navigate a challenging product launch"',
    author: 'Kim Lopez',
    role: 'Founder, Horizon Tech',
    avatar:
      'https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66ffe97f3a98d387d5c2f4fc_pexels-divinetechygirl-1181695.webp',
    isYellow: true
  }
];

export const Testimonials = () => {
  const shouldReduceMotion = useReducedMotion();
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 2 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev >= testimonialsData.length - 2 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="section slider-section py-20 lg:py-32 px-[24px] w-full bg-white overflow-hidden"><div id="Testimonials" className="hidden" />
      <div className="max-w-[1440px] mx-auto w-full">
        {/* Header matching Image 2 */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 lg:mb-20">
          {/* Label: Cols 1-4 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="col-span-1 lg:col-span-4 flex items-center gap-3 pt-2"
          >
            <div className="w-3 h-3 bg-[#ffe071] rounded-[2px]" />
            <span className="text-[18px] font-[450] text-[#2a2928]">Our clients say</span>
          </motion.div>

          {/* Heading and Arrow Controls: Cols 5-12 */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            variants={shouldReduceMotion ? undefined : fadeUpVariant}
            className="col-span-1 lg:col-span-8 flex flex-col md:flex-row md:items-start justify-between gap-8"
          >
            <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.3rem,3.2vw,3.2vw)] font-[550] leading-[105%] tracking-[-0.02em] text-[#2a2928] max-w-[26ch] m-0">
              We take pride in building strong relationships with clients. Hear what some of our clients have to say about working with us.
            </h2>

            {/* Slider navigation arrows */}
            <div className="flex items-center gap-3 shrink-0 self-end md:self-start pt-2">
              <button
                onClick={prevSlide}
                aria-label="Previous testimonials"
                className="group/arrow w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#e6e6e6] hover:border-[#2a2928] bg-white hover:bg-[#f5f5f5] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover/arrow:-translate-x-0.5"
                >
                  <path d="M15 18l-6-6 6-6" />
                </svg>
              </button>
              <button
                onClick={nextSlide}
                aria-label="Next testimonials"
                className="group/arrow w-12 h-12 lg:w-14 lg:h-14 rounded-full border border-[#e6e6e6] hover:border-[#2a2928] bg-white hover:bg-[#f5f5f5] flex items-center justify-center transition-all duration-200 shadow-sm hover:shadow focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.75"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="transition-transform duration-200 group-hover/arrow:translate-x-0.5"
                >
                  <path d="M9 18l6-6-6-6" />
                </svg>
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Slider Cards Container */}
        <div className="relative w-full overflow-hidden">
          <motion.div
            animate={{ x: `-${currentIndex * 50}%` }}
            transition={{ ease: [0.22, 1, 0.36, 1], duration: 0.6 }}
            className="flex gap-6 w-[200%] sm:w-[200%] lg:w-[200%]"
          >
            {testimonialsData.map((item, idx) => (
              <div
                key={idx}
                className={`w-1/2 rounded-[24px] p-8 lg:p-10 flex flex-col justify-between min-h-[420px] transition-all duration-300 ${
                  item.isYellow ? 'bg-[#fbe57e] text-[#2a2928]' : 'bg-[#f5f4f3] text-[#2a2928]'
                }`}
              >
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 h-full">
                  {/* Left: Quote + Author info */}
                  <div className="flex flex-col justify-between h-full flex-1 pr-4">
                    <p className="text-xl sm:text-2xl lg:text-[24px] font-[550] leading-[1.25] tracking-[-0.02em] text-[#2a2928] max-w-[28ch] m-0 mb-12">
                      {item.quote}
                    </p>
                    <div className="flex flex-col gap-1 mt-auto">
                      <span className="font-[550] text-[17px] text-[#2a2928]">{item.author}</span>
                      <span className={`text-[15px] font-[450] ${item.isYellow ? 'text-[#2a2928]/80' : 'text-[#63615e]'}`}>
                        {item.role}
                      </span>
                    </div>
                  </div>

                  {/* Right: Avatar Photo */}
                  <div className="w-40 sm:w-48 lg:w-60 aspect-square rounded-[20px] overflow-hidden shrink-0 self-start">
                    <img
                      src={item.avatar}
                      alt={item.author}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
