import React, { useState } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { BrandButton } from './BrandButton';

const fadeUpVariant: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

export const Contact = () => {
  const shouldReduceMotion = useReducedMotion();
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="section contact-section pt-12 lg:pt-20 pb-0 px-[24px] w-full"><div id="Contact" className="hidden" />
      <div className="max-w-[1440px] mx-auto w-full">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
          variants={shouldReduceMotion ? undefined : fadeUpVariant}
          className="contact-wrapper w-full rounded-[24px] sm:rounded-[32px] p-8 sm:p-12 lg:p-16 relative overflow-hidden bg-[#fbe57e]"
          style={{
            backgroundImage:
              "url('https://cdn.prod.website-files.com/66f7e75deaee2c0e17b0887d/66ff9ab68da10a4b429c4231_contact%20background.svg')",
            backgroundPosition: '50%',
            backgroundSize: 'cover'
          }}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            {/* Left Column: Indicator + bottom explanatory note (Cols 1-5) */}
            <div className="col-span-1 lg:col-span-5 flex flex-col justify-between min-h-[140px] lg:min-h-[460px]">
              {/* Top: Black dot + Contact */}
              <div className="flex items-center gap-3">
                <div className="w-2.5 h-2.5 bg-[#2a2928] rounded-[2px]" />
                <span className="text-[18px] font-[450] text-[#2a2928]">Contact</span>
              </div>

              {/* Bottom: Note */}
              <p className="text-[#2a2928] font-[450] text-[15px] sm:text-[16px] leading-[1.5] max-w-[34ch] m-0 mt-8 lg:mt-auto">
                Reach out to Clarify, and let’s discuss how we can create a communication strategy tailored to your specific business needs.
              </p>
            </div>

            {/* Right Column: Heading + Form (Cols 6-12) */}
            <div className="col-span-1 lg:col-span-7 flex flex-col">
              <h2 className="text-3xl sm:text-4xl lg:text-[clamp(2.3rem,3.2vw,3.2vw)] font-[550] leading-[105%] tracking-[-0.02em] text-[#2a2928] mb-10 sm:mb-14 m-0">
                Ready to take your brand to the next level? We look forward to hearing from you and helping you clarify your brand message.
              </h2>

              {submitted ? (
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-[#2a2928]/10">
                  <h4 className="text-2xl font-[550] text-[#2a2928] mb-2">Thank you!</h4>
                  <p className="text-[#2a2928]/80 font-[450]">
                    Your submission has been received! Our team will get back to you shortly.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-6 w-full">
                  <input
                    type="text"
                    required
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#2a2928]/15 focus:border-[#2a2928] py-4 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/70 text-[16px] font-[450] transition-colors"
                  />

                  <input
                    type="email"
                    required
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#2a2928]/15 focus:border-[#2a2928] py-4 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/70 text-[16px] font-[450] transition-colors"
                  />

                  <textarea
                    rows={2}
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full bg-transparent border-0 border-b border-[#2a2928]/15 focus:border-[#2a2928] py-4 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/70 text-[16px] font-[450] transition-colors resize-none"
                  />

                  <BrandButton
                    type="submit"
                    text="Get in touch with us"
                    bgClassName="bg-white"
                    className="mt-4 self-start"
                  />
                </form>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
