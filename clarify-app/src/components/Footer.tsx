import { BrandButton } from './BrandButton';
import b4gLogo from '../assets/B4G logo final.svg';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer bg-white text-[#2a2928] pt-16 sm:pt-24 pb-12 px-[24px] w-full overflow-hidden">
      <div className="max-w-[1440px] mx-auto w-full flex flex-col">
        {/* Top Grid / Bar matching Image 4 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start mb-16 lg:mb-24">
          {/* Left: Year (Cols 1-4) */}
          <div className="col-span-1 md:col-span-4 text-[16px] font-[450] text-[#2a2928]">
            © 2026
          </div>

          {/* Center: Vertical Links List (Cols 5-8) */}
          <div className="col-span-1 md:col-span-4 flex flex-col gap-2">
            <a
              href="/styleguide"
              className="text-[#2a2928] hover:opacity-70 transition-opacity text-[16px] font-[450] w-fit"
            >
              Styleguide
            </a>
            <a
              href="#licenses"
              className="text-[#2a2928] hover:opacity-70 transition-opacity text-[16px] font-[450] w-fit"
            >
              Licenses
            </a>
            <a
              href="#changelog"
              className="text-[#2a2928] hover:opacity-70 transition-opacity text-[16px] font-[450] w-fit"
            >
              Changelog
            </a>
          </div>

          {/* Right: Back to top Button (Cols 9-12) */}
          <div className="col-span-1 md:col-span-4 flex md:justify-end">
            <BrandButton
              text="Back to top"
              onClick={scrollToTop}
              bgClassName="bg-[#f5f4f3]"
              iconDirection="up"
            />
          </div>
        </div>

        {/* Middle: Giant B4G AI Logo */}
        <div className="w-full my-8 lg:my-16 select-none overflow-hidden">
          <img
            src={b4gLogo}
            alt="B4G AI"
            className="w-full h-auto object-cover block max-w-none"
            loading="lazy"
          />
        </div>

        {/* Bottom Credits Row matching Image 4 (ignoring 'Built in webflow' as requested) */}
        <div className="flex justify-end items-center pt-8 border-t border-[#efeeec] text-[15px] font-[450] text-[#63615e]">
          <div>All rights reserved</div>
        </div>
      </div>
    </footer>
  );
};
