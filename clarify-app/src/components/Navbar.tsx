import { useState, useRef } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Logo } from '../Graphics';
import { BrandButton } from './BrandButton';
import { ProductDropdown, products } from './ProductDropdown';
import { SolutionDropdown, solutions } from './SolutionDropdown';
import { PartnerDropdown, partnerProgramsList } from './PartnerDropdown';

const NavLink = ({ text, href, onClick }: { text: string; href: string; onClick?: (e: React.MouseEvent<HTMLAnchorElement>) => void }) => {
  return (
    <a 
      href={href}
      onClick={onClick}
      className="relative overflow-hidden group flex flex-col h-[28px] text-[#707070] hover:text-[#2a2928] transition-colors duration-300 font-medium text-[19px] leading-[28px]"
    >
      <span className="transform transition-transform duration-300 group-hover:-translate-y-full leading-[28px]">{text}</span>
      <span className="absolute top-full transform transition-transform duration-300 group-hover:-translate-y-full leading-[28px] text-[#2a2928]">{text}</span>
    </a>
  );
};

export const Navbar = () => {
  const [isProductOpen, setIsProductOpen] = useState(false);
  const [isSolutionOpen, setIsSolutionOpen] = useState(false);
  const [isPartnerOpen, setIsPartnerOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const [mobilePartnersOpen, setMobilePartnersOpen] = useState(false);
  const productTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const solutionTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const partnerTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleProductEnter = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setIsProductOpen(true);
  };

  const handleProductLeave = () => {
    productTimeoutRef.current = setTimeout(() => {
      setIsProductOpen(false);
    }, 180);
  };

  const closeProduct = () => {
    if (productTimeoutRef.current) clearTimeout(productTimeoutRef.current);
    setIsProductOpen(false);
  };

  const handleSolutionEnter = () => {
    if (solutionTimeoutRef.current) clearTimeout(solutionTimeoutRef.current);
    setIsSolutionOpen(true);
  };

  const handleSolutionLeave = () => {
    solutionTimeoutRef.current = setTimeout(() => {
      setIsSolutionOpen(false);
    }, 180);
  };

  const closeSolution = () => {
    if (solutionTimeoutRef.current) clearTimeout(solutionTimeoutRef.current);
    setIsSolutionOpen(false);
  };

  const handlePartnerEnter = () => {
    if (partnerTimeoutRef.current) clearTimeout(partnerTimeoutRef.current);
    setIsPartnerOpen(true);
  };

  const handlePartnerLeave = () => {
    partnerTimeoutRef.current = setTimeout(() => {
      setIsPartnerOpen(false);
    }, 180);
  };

  const closePartner = () => {
    if (partnerTimeoutRef.current) clearTimeout(partnerTimeoutRef.current);
    setIsPartnerOpen(false);
  };

  const scrollToSection = (e: React.MouseEvent, targetId: string) => {
    e.preventDefault();
    if (window.location.pathname !== "/") {
      window.history.pushState({}, "", `/#${targetId}`);
      window.dispatchEvent(new Event("navigationchange"));
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: "smooth" });
        }
      }, 150);
    } else {
      const el = document.getElementById(targetId);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
        window.history.pushState({}, "", `#${targetId}`);
      }
    }
  };

  return (
    <nav id="Navbar" className="navbar relative w-full z-50 pt-[36px] sm:pt-[48px] px-[24px] pb-0 bg-transparent">
      {/* Container with max-w-[1440px] matching Hero and all sections */}
      <div className="max-w-[1440px] mx-auto w-full relative">
        {/* Equal 3-flank distribution: Left (Logo), Center (Nav Links), Right (Button) */}
        <div className="flex items-center justify-between w-full">
          {/* Left Flank: Logo */}
          <div className="flex-1 flex items-center justify-start">
            <a 
              href="/" 
              onClick={(e) => {
                e.preventDefault();
                window.history.pushState({}, '', '/');
                window.dispatchEvent(new Event('navigationchange'));
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="flex items-center hover:opacity-80 transition-opacity flex-shrink-0" 
              aria-label="B4G AI"
            >
              <Logo className="h-7 w-auto text-brand-black" />
            </a>
          </div>

          {/* Center Flank: Desktop Links (dead center of the navbar) */}
          <div className="hidden lg:flex items-center justify-center gap-8 xl:gap-10 flex-shrink-0">
            <NavLink text="About" href="#about" onClick={(e) => scrollToSection(e, "about")} />

            {/* Product with Hover Mega-Menu Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handleProductEnter}
              onMouseLeave={handleProductLeave}
            >
              <button
                type="button"
                className="relative overflow-hidden group flex items-center gap-1.5 h-[28px] text-[#707070] hover:text-[#2a2928] transition-colors duration-300 font-medium text-[19px] leading-[28px] focus:outline-none cursor-pointer"
                aria-expanded={isProductOpen}
              >
                <div className="relative overflow-hidden flex flex-col h-[28px]">
                  <span
                    className={`transform transition-transform duration-300 ${
                      isProductOpen ? '-translate-y-full text-[#2a2928]' : 'group-hover:-translate-y-full'
                    } leading-[28px]`}
                  >
                    Product
                  </span>
                  <span
                    className={`absolute top-full transform transition-transform duration-300 ${
                      isProductOpen ? '-translate-y-full text-[#2a2928]' : 'group-hover:-translate-y-full'
                    } leading-[28px] text-[#2a2928]`}
                  >
                    Product
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isProductOpen ? 'rotate-180 text-[#2a2928]' : 'text-[#707070] group-hover:text-[#2a2928]'
                  }`}
                />
              </button>

              {/* Desktop 3x3 Mega-Menu Dropdown directly anchored below Product */}
              <div className="hidden lg:block">
                <ProductDropdown
                  isOpen={isProductOpen}
                  onMouseEnter={handleProductEnter}
                  onMouseLeave={handleProductLeave}
                  onClose={closeProduct}
                />
              </div>
            </div>

            {/* Solution with Hover Mega-Menu Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handleSolutionEnter}
              onMouseLeave={handleSolutionLeave}
            >
              <button
                type="button"
                className="relative overflow-hidden group flex items-center gap-1.5 h-[28px] text-[#707070] hover:text-[#2a2928] transition-colors duration-300 font-medium text-[19px] leading-[28px] focus:outline-none cursor-pointer"
                aria-expanded={isSolutionOpen}
              >
                <div className="relative overflow-hidden flex flex-col h-[28px]">
                  <span
                    className={`transform transition-transform duration-300 ${
                      isSolutionOpen ? '-translate-y-full text-[#2a2928]' : 'group-hover:-translate-y-full'
                    } leading-[28px]`}
                  >
                    Solution
                  </span>
                  <span
                    className={`absolute top-full transform transition-transform duration-300 ${
                      isSolutionOpen ? '-translate-y-full text-[#2a2928]' : 'group-hover:-translate-y-full'
                    } leading-[28px] text-[#2a2928]`}
                  >
                    Solution
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isSolutionOpen ? 'rotate-180 text-[#2a2928]' : 'text-[#707070] group-hover:text-[#2a2928]'
                  }`}
                />
              </button>

              {/* Desktop Mega-Menu Dropdown directly anchored below Solution */}
              <div className="hidden lg:block">
                <SolutionDropdown
                  isOpen={isSolutionOpen}
                  onMouseEnter={handleSolutionEnter}
                  onMouseLeave={handleSolutionLeave}
                  onClose={closeSolution}
                />
              </div>
            </div>

            {/* Partners with Hover Mega-Menu Dropdown */}
            <div
              className="relative py-1"
              onMouseEnter={handlePartnerEnter}
              onMouseLeave={handlePartnerLeave}
            >
              <button
                type="button"
                className="relative overflow-hidden group flex items-center gap-1.5 h-[28px] text-[#707070] hover:text-[#2a2928] transition-colors duration-300 font-medium text-[19px] leading-[28px] focus:outline-none cursor-pointer"
                aria-expanded={isPartnerOpen}
              >
                <div className="relative overflow-hidden flex flex-col h-[28px]">
                  <span
                    className={`transform transition-transform duration-300 ${
                      isPartnerOpen ? '-translate-y-full text-[#2a2928]' : 'group-hover:-translate-y-full'
                    } leading-[28px]`}
                  >
                    Partners
                  </span>
                  <span
                    className={`absolute top-full transform transition-transform duration-300 ${
                      isPartnerOpen ? '-translate-y-full text-[#2a2928]' : 'group-hover:-translate-y-full'
                    } leading-[28px] text-[#2a2928]`}
                  >
                    Partners
                  </span>
                </div>
                <ChevronDown
                  size={16}
                  className={`transition-transform duration-300 ${
                    isPartnerOpen ? 'rotate-180 text-[#2a2928]' : 'text-[#707070] group-hover:text-[#2a2928]'
                  }`}
                />
              </button>

              {/* Desktop Mega-Menu Dropdown centered below Partners */}
              <div className="hidden lg:block">
                <PartnerDropdown
                  isOpen={isPartnerOpen}
                  onMouseEnter={handlePartnerEnter}
                  onMouseLeave={handlePartnerLeave}
                  onClose={closePartner}
                />
              </div>
            </div>

            <NavLink text="Testimonials" href="#testimonials" onClick={(e) => scrollToSection(e, "testimonials")} />
            <NavLink text="Team" href="#team" onClick={(e) => scrollToSection(e, "team")} />
          </div>

          {/* Right Flank: CTA Button & Mobile Menu Button */}
          <div className="flex-1 flex items-center justify-end">
            {/* Desktop CTA */}
            <div className="hidden lg:block">
              <BrandButton text="Get in touch" href="#contact" bgClassName="bg-[#f4f4f4]" onClick={(e) => scrollToSection(e as any, "contact")} />
            </div>

            {/* Mobile Menu Button - completely hidden on desktop */}
            <div className="lg:hidden flex items-center">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-brand-black rounded-xl hover:bg-black/5 transition-colors focus:outline-none"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="lg:hidden absolute top-full left-0 right-0 mt-3 bg-white/95 backdrop-blur-2xl border border-[#2a2928]/10 rounded-3xl p-6 shadow-2xl z-50 flex flex-col gap-4 max-h-[80vh] overflow-y-auto"
            >
              <a
                href="#about"
                onClick={(e) => {
                  scrollToSection(e, "about");
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-[#2a2928] py-2 border-b border-[#efeeec]"
              >
                About
              </a>

              {/* Mobile Products Accordion */}
              <div className="border-b border-[#efeeec] pb-2">
                <button
                  type="button"
                  onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#2a2928] py-2 focus:outline-none"
                >
                  <span>Product</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileProductsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileProductsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 pt-2 pl-2 overflow-hidden"
                    >
                      {products.map((p) => {
                        const Icon = p.icon;
                        return (
                          <a
                            key={p.id}
                            href={`/product/${p.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              window.history.pushState({}, '', `/product/${p.id}`);
                              window.dispatchEvent(new Event('navigationchange'));
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f6f5f3] transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#ffe071] flex items-center justify-center shrink-0 text-[#2a2928] mt-0.5">
                              <Icon size={16} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-[550] text-[14px] text-[#2a2928]">{p.name}</span>
                              <span className="text-[12px] text-[#707070] leading-snug line-clamp-2">
                                {p.description}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Solutions Accordion */}
              <div className="border-b border-[#efeeec] pb-2">
                <button
                  type="button"
                  onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#2a2928] py-2 focus:outline-none"
                >
                  <span>Solution</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobileSolutionsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobileSolutionsOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 pt-2 pl-2 overflow-hidden"
                    >
                      {solutions.map((s) => {
                        const Icon = s.icon;
                        return (
                          <a
                            key={s.id}
                            href={`/solution/${s.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              window.history.pushState({}, '', `/solution/${s.id}`);
                              window.dispatchEvent(new Event('navigationchange'));
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f6f5f3] transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#ffe071] flex items-center justify-center shrink-0 text-[#2a2928] mt-0.5">
                              <Icon size={16} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-[550] text-[14px] text-[#2a2928]">{s.name}</span>
                              <span className="text-[12px] text-[#707070] leading-snug line-clamp-2">
                                {s.description}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* Mobile Partners Accordion */}
              <div className="border-b border-[#efeeec] pb-2">
                <button
                  type="button"
                  onClick={() => setMobilePartnersOpen(!mobilePartnersOpen)}
                  className="flex items-center justify-between w-full text-lg font-medium text-[#2a2928] py-2 focus:outline-none"
                >
                  <span>Partners</span>
                  <ChevronDown
                    size={18}
                    className={`transition-transform duration-200 ${mobilePartnersOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                <AnimatePresence>
                  {mobilePartnersOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      className="flex flex-col gap-2 pt-2 pl-2 overflow-hidden"
                    >
                      {/* Apply button highlight in mobile drawer */}
                      <a
                        href="/partners/apply"
                        onClick={(e) => {
                          e.preventDefault();
                          window.history.pushState({}, '', '/partners/apply');
                          window.dispatchEvent(new Event('navigationchange'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                          setMobileMenuOpen(false);
                        }}
                        className="flex items-center justify-between p-2.5 rounded-xl bg-[#ffe071]/30 hover:bg-[#ffe071]/50 border border-[#ffe071] transition-colors"
                      >
                        <span className="font-semibold text-[13.5px] text-[#2a2928]">Apply to become a partner</span>
                        <span className="text-xs font-bold text-[#2a2928]">Apply →</span>
                      </a>

                      {partnerProgramsList.map((p) => {
                        const Icon = p.icon;
                        return (
                          <a
                            key={p.id}
                            href={`/partners/${p.id}`}
                            onClick={(e) => {
                              e.preventDefault();
                              window.history.pushState({}, '', `/partners/${p.id}`);
                              window.dispatchEvent(new Event('navigationchange'));
                              window.scrollTo({ top: 0, behavior: 'smooth' });
                              setMobileMenuOpen(false);
                            }}
                            className="flex items-start gap-3 p-2.5 rounded-xl hover:bg-[#f6f5f3] transition-colors"
                          >
                            <div className="w-8 h-8 rounded-lg bg-[#ffe071] flex items-center justify-center shrink-0 text-[#2a2928] mt-0.5">
                              <Icon size={16} strokeWidth={2} />
                            </div>
                            <div className="flex flex-col">
                              <span className="font-[550] text-[14px] text-[#2a2928]">{p.name}</span>
                              <span className="text-[12px] text-[#707070] leading-snug line-clamp-2">
                                {p.description}
                              </span>
                            </div>
                          </a>
                        );
                      })}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <a
                href="#testimonials"
                onClick={(e) => {
                  scrollToSection(e, "testimonials");
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-[#2a2928] py-2 border-b border-[#efeeec]"
              >
                Testimonials
              </a>
              <a
                href="#team"
                onClick={(e) => {
                  scrollToSection(e, "team");
                  setMobileMenuOpen(false);
                }}
                className="text-lg font-medium text-[#2a2928] py-2 border-b border-[#efeeec]"
              >
                Team
              </a>

              <div className="pt-2">
                <BrandButton
                  text="Get in touch"
                  href="#contact"
                  bgClassName="bg-[#f4f4f4]"
                  className="w-full justify-between"
                  onClick={(e) => {
                    scrollToSection(e as any, "contact");
                    setMobileMenuOpen(false);
                  }}
                />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};
