import { useState, useEffect, useRef } from 'react';
import { motion, useReducedMotion, type Variants } from 'framer-motion';
import { FourMonolineGraphic } from './Graphics';
import Styleguide from './Styleguide';
import { Navbar } from './components/Navbar';
import { Services } from './components/Services';
import { FullscreenBanner } from './components/FullscreenBanner';
import { Approach } from './components/Approach';
import { TwoUpValues } from './components/TwoUpValues';
import { Stats } from './components/Stats';
import { FullscreenBanner2 } from './components/FullscreenBanner2';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { BrandButton } from './components/BrandButton';
import { ProductPage } from './components/ProductPage';
import { SolutionPage } from './components/SolutionPage';
import { PartnerPage } from './components/PartnerPage';
import { PartnerApplyPage } from './components/PartnerApplyPage';






const heroMaskReveal1: Variants = {
  hidden: { y: '105%' },
  visible: {
    y: '0%',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.1 }
  }
};

const heroMaskReveal2: Variants = {
  hidden: { y: '105%' },
  visible: {
    y: '0%',
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1], delay: 0.22 }
  }
};

const heroSubtextReveal: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.38 }
  }
};

const Hero = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="section hero-section pt-[228px] pb-[48px] px-[24px] w-full relative">
      
      {/* Container with 24px padding */}
      <div className="container hero-container max-w-[1440px] mx-auto w-full p-[24px]">
        {/* 12-Column Grid */}
        <div className="w-layout-grid main-grid row-gap-medium grid grid-cols-1 lg:grid-cols-12 gap-x-6 gap-y-12 w-full items-stretch">
          {/* Hero Heading: cols 2 to 9 */}
          <div className="hero-heading col-span-1 lg:col-start-2 lg:col-span-7 flex flex-col justify-start items-start">
            {/* Hero Text Wrap 1: Down-to-Up masked reveal */}
            <div className="hero-text-wrap overflow-hidden relative w-full">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={shouldReduceMotion ? undefined : heroMaskReveal1}
                className="text-light text-[clamp(3.5rem,5.867vw,5.867vw)] font-medium leading-[93%] tracking-[-0.02em] text-[#96938f] pb-[0.8vw] m-0 block"
              >
                Your Message.
              </motion.h1>
            </div>
            
            {/* Hero Text Wrap 2: Down-to-Up masked reveal */}
            <div className="hero-text-wrap overflow-hidden relative w-full">
              <motion.h1
                initial="hidden"
                animate="visible"
                variants={shouldReduceMotion ? undefined : heroMaskReveal2}
                className="text-[clamp(3.5rem,5.867vw,5.867vw)] font-medium leading-[93%] tracking-[-0.02em] text-[#2a2928] pb-[0.8vw] m-0 block"
              >
                Crystal Clear.
              </motion.h1>
            </div>
          </div>
          
          {/* Right Column: Hero subtext down-to-up fade reveal */}
          <motion.div 
            initial="hidden"
            animate="visible"
            variants={shouldReduceMotion ? undefined : heroSubtextReveal}
            className="hero-text-wrapper col-span-1 lg:col-start-9 lg:col-span-4 flex flex-col justify-between items-start self-stretch pt-[.5vw] max-w-[384.34px]"
          >
            {/* Small yellow dot square at top */}
            <div className="small-dot w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
            
            {/* Paragraph at bottom */}
            <p className="hero-paragraph font-[450] text-[18px] leading-[1.3] text-[#666666] w-full max-w-[384.34px] m-0 pt-6 lg:pt-0">
              Helping brands connect with their audiences through strategic communication
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const HeroVideo = () => {
  const shouldReduceMotion = useReducedMotion();
  return (
    <div className="section video-section py-0 px-[24px] w-full">
      <div className="max-w-[1440px] mx-auto w-full">
        <div className="hero-video-wrap w-full aspect-video rounded-[32px] overflow-hidden relative group cursor-pointer bg-brand-black">
          {/* Video element with subtle initial scale settle */}
          <motion.div
            initial={shouldReduceMotion ? false : { scale: 1.08 }}
            animate={shouldReduceMotion ? false : { scale: 1 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1], delay: 0.35 }}
            className="w-full h-full"
          >
            {!shouldReduceMotion && (
              <video 
                autoPlay 
                muted 
                loop 
                playsInline 
                className="w-full h-full object-cover"
                src="https://videos.pexels.com/video-files/3129977/3129977-uhd_2560_1440_30fps.mp4"
              />
            )}
            <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
          </motion.div>

          {/* White Curtain Image-Revealer that wipes from Left to Right */}
          {!shouldReduceMotion && (
            <motion.div
              initial={{ x: '0%' }}
              animate={{ x: '101%' }}
              transition={{ duration: 1.15, ease: [0.65, 0, 0.35, 1], delay: 0.35 }}
              className="image-revealer absolute inset-0 bg-white z-20 pointer-events-none rounded-[32px]"
            />
          )}
          
          {/* Play Button Overlay (fades in after wipe begins) */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.85, ease: [0.22, 1, 0.36, 1] }}
            className="absolute top-8 left-8 z-10"
          >
            <button 
              type="button"
              className="group/play flex items-center gap-4 focus:outline-none"
              aria-label="Play Video"
            >
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center transition-all duration-300 group-hover/play:scale-110 shadow-sm group-hover/play:shadow-md text-brand-black">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="transition-transform duration-300 group-hover/play:translate-x-0.5">
                  <path d="M8 5v14l11-7z"/>
                </svg>
              </div>
              <span className="text-white font-medium text-sm drop-shadow-sm transition-opacity group-hover/play:opacity-90">
                Play Video
              </span>
            </button>
          </motion.div>

          {/* Bottom-right: See our services CTA button with expanding hover animation */}
          <motion.div 
            initial={shouldReduceMotion ? false : { opacity: 0, y: 10 }}
            animate={shouldReduceMotion ? false : { opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.95, ease: [0.22, 1, 0.36, 1] }}
            className="absolute bottom-6 right-6 sm:bottom-8 sm:right-8 z-10 hidden sm:inline-block"
          >
            <BrandButton text="See our services" href="#Services" bgClassName="bg-white" />
          </motion.div>
        </div>
      </div>
    </div>
  );
};




function App() {
  const [footerHeight, setFooterHeight] = useState(0);
  const footerRef = useRef<HTMLDivElement>(null);
  const spacerRef = useRef<HTMLDivElement>(null);
  const [isNearBottom, setIsNearBottom] = useState(false);

  useEffect(() => {
    if (!footerRef.current) return;
    const updateHeight = () => {
      if (footerRef.current) {
        setFooterHeight(footerRef.current.offsetHeight);
      }
    };
    updateHeight();
    const observer = new ResizeObserver(updateHeight);
    observer.observe(footerRef.current);
    window.addEventListener('resize', updateHeight);
    return () => {
      observer.disconnect();
      window.removeEventListener('resize', updateHeight);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!spacerRef.current) return;
      const rect = spacerRef.current.getBoundingClientRect();
      // Start revealing the footer as user reaches the end of the content
      setIsNearBottom(rect.top < window.innerHeight * 1.5);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handleLocationChange = () => {
      setCurrentPath(window.location.pathname);
    };
    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('navigationchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('navigationchange', handleLocationChange);
    };
  }, []);

  if (currentPath === '/styleguide') {
    return <Styleguide />;
  }

  if (currentPath.startsWith('/product/')) {
    const slug = currentPath.replace('/product/', '').replace(/\/$/, '');
    return (
      <ProductPage
        productSlug={slug}
        onNavigateHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  if (currentPath.startsWith('/solution/')) {
    const slug = currentPath.replace('/solution/', '').replace(/\/$/, '');
    return (
      <SolutionPage
        solutionSlug={slug}
        onNavigateHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  if (currentPath === '/partners/apply' || currentPath === '/partner/apply') {
    return (
      <PartnerApplyPage
        onNavigateHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  if (currentPath.startsWith('/partners/') || currentPath.startsWith('/partner/')) {
    const slug = currentPath
      .replace('/partners/', '')
      .replace('/partner/', '')
      .replace(/\/$/, '');
    return (
      <PartnerPage
        partnerSlug={slug}
        onNavigateHome={() => {
          window.history.pushState({}, '', '/');
          setCurrentPath('/');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    );
  }

  return (
    <div className="min-h-screen bg-brand-white font-sans selection:bg-brand-primary selection:text-brand-black relative">
      {/* Main Content Sheet with high z-index and solid background (slides up to reveal footer) */}
      <div className="relative z-10 bg-brand-white min-h-screen overflow-x-hidden">
        {/* Background Four Monoline Graphic: Visible in Hero section behind text and navbar, matching other pages */}
        <div className="absolute top-0 right-0 w-full h-[720px] lg:h-[840px] pointer-events-none overflow-hidden select-none z-0">
          <div className="absolute top-8 md:top-12 lg:top-16 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-24 w-[360px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[680px] h-auto pointer-events-none opacity-80">
            <FourMonolineGraphic className="w-full h-auto" strokeColor="#EFEDEB" strokeWidth={1.5} />
          </div>
        </div>

        <Navbar />
        <main className="relative z-10">
          <Hero />
          <HeroVideo />
          <Services />
          <FullscreenBanner />
          <Approach />
          <TwoUpValues />
          <Stats />
          <FullscreenBanner2 />
          <Testimonials />
          <Contact />
        </main>
      </div>

      {/* Spacer that creates scroll room so Contact slides up and reveals footer underneath */}
      <div
        ref={spacerRef}
        style={{ height: footerHeight || 'auto' }}
        className="w-full pointer-events-none"
      />

      {/* Fixed Footer underneath that is revealed as contact section scrolls up */}
      <div
        ref={footerRef}
        style={{
          visibility: isNearBottom ? 'visible' : 'hidden',
          opacity: isNearBottom ? 1 : 0,
          pointerEvents: isNearBottom ? 'auto' : 'none'
        }}
        className="fixed bottom-0 left-0 w-full z-0 transition-opacity duration-200"
      >
        <Footer />
      </div>
    </div>
  );
}

export default App;
