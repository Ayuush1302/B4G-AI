import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  CheckCircle2,
  ChevronDown,
  Sparkles,
  ArrowRight,
  Zap,
  Award,
  ArrowLeft,
} from 'lucide-react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BrandButton } from './BrandButton';
import { FourMonolineGraphic } from '../Graphics';

export const PARTNER_TYPES = [
  'Select partner type',
  'White Label Partners',
  'Implementation Partners',
  'Technology Partner',
  'Strategic Partner',
  'Sales Partner',
  'Startup Program',
  'Royalty Program',
  'Reseller Program',
];

interface PartnerApplyPageProps {
  initialPartnerType?: string;
  onNavigateHome: () => void;
}

export const PartnerApplyPage: React.FC<PartnerApplyPageProps> = ({
  initialPartnerType,
  onNavigateHome,
}) => {
  const [partnerType, setPartnerType] = useState<string>(
    initialPartnerType && PARTNER_TYPES.includes(initialPartnerType)
      ? initialPartnerType
      : 'Select partner type'
  );

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [companyWebsite, setCompanyWebsite] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [businessDescription, setBusinessDescription] = useState('');
  const [relevantExperience, setRelevantExperience] = useState('');
  const [additionalInformation, setAdditionalInformation] = useState('');

  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  useEffect(() => {
    // Check if URL search params or hash pre-selects a partner type
    const params = new URLSearchParams(window.location.search);
    const typeParam = params.get('type');
    if (typeParam) {
      const match = PARTNER_TYPES.find(
        (t) => t.toLowerCase().includes(typeParam.toLowerCase())
      );
      if (match) setPartnerType(match);
    }
  }, []);

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!partnerType || partnerType === 'Select partner type') {
      errs.partnerType = 'Please select a partner program';
    }
    if (!fullName.trim()) {
      errs.fullName = 'Full Name is required';
    }
    if (!email.trim() || !email.includes('@')) {
      errs.email = 'A valid business email is required';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setSubmitted(true);
      window.scrollTo({ top: 300, behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-white font-sans selection:bg-[#ffe071] selection:text-[#2a2928] relative overflow-x-hidden">
      {/* Background Graphic */}
      <div className="absolute top-0 right-0 w-full h-[720px] pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-12 right-6 sm:right-16 md:right-24 w-[420px] sm:w-[580px] lg:w-[680px] h-auto pointer-events-none opacity-60">
          <FourMonolineGraphic className="w-full h-auto" strokeColor="#EFEDEB" strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Breadcrumb Bar */}
        <div className="max-w-[1440px] mx-auto px-6 pt-8 pb-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#707070]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="hover:text-[#2a2928] transition-colors flex items-center gap-1"
            >
              <ArrowLeft size={14} />
              <span>Home</span>
            </a>
            <span>/</span>
            <span className="text-[#2a2928]">Partners</span>
            <span>/</span>
            <span className="text-[#2a2928] font-medium">Apply to Become a Partner</span>
          </div>
        </div>

        {/* Hero Header */}
        <section className="max-w-[1440px] mx-auto px-6 pt-6 pb-12">
          <div className="max-w-[820px]">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4f4f4] border border-[#2a2928]/10 text-xs font-[550] tracking-wider uppercase text-[#2a2928] mb-6">
              <div className="w-2 h-2 rounded-full bg-[#ffe071]" />
              <span>B4G Partner Ecosystem Application</span>
            </div>

            <h1 className="text-[clamp(2.5rem,4.8vw,4.2rem)] font-medium leading-[1.04] tracking-[-0.03em] text-[#2a2928] mb-6">
              Apply to become a <span className="underline decoration-[#ffe071] decoration-4 underline-offset-8">B4G AI Partner</span>
            </h1>

            <p className="text-lg md:text-xl font-[450] text-[#666666] leading-relaxed">
              Whether you are an agency looking to white-label our autonomous agent platform, a systems integrator delivering enterprise transformations, an ISV building native connectors, or an early-stage startup, we are ready to build the future of AI together.
            </p>
          </div>
        </section>

        {/* Main Application Layout: Left Info, Right Form */}
        <section className="max-w-[1440px] mx-auto px-6 pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 xl:gap-14 items-start">
            
            {/* Left Column: Program Highlights & Credibility */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              {/* Highlight Stats Card */}
              <div className="bg-[#2a2928] text-white rounded-[28px] p-8 relative overflow-hidden shadow-xl">
                <div className="absolute top-0 right-0 w-48 h-48 bg-[#ffe071]/10 rounded-full blur-3xl pointer-events-none" />
                
                <div className="flex items-center gap-2 mb-6">
                  <Award size={18} className="text-[#ffe071]" />
                  <span className="text-xs font-[550] tracking-wider uppercase text-[#ffe071]">
                    Ecosystem Advantages
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-6 pb-6 border-b border-white/10">
                  <div>
                    <div className="text-3xl font-medium text-[#ffe071]">70%+</div>
                    <div className="text-xs text-[#a09e9b] mt-1">Maximum Retained Margin on Client Deployments</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-white">48 Hours</div>
                    <div className="text-xs text-[#a09e9b] mt-1">Target Application Review & Onboarding</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-white">150+</div>
                    <div className="text-xs text-[#a09e9b] mt-1">Active Global Consultancies & MSPs</div>
                  </div>
                  <div>
                    <div className="text-3xl font-medium text-[#ffe071]">$50,000</div>
                    <div className="text-xs text-[#a09e9b] mt-1">Maximum Credits for Startup Program</div>
                  </div>
                </div>

                <div className="pt-6 flex flex-col gap-3 text-sm text-[#d4d2ce]">
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#ffe071] shrink-0" />
                    <span>Direct engineering escalation & architecture reviews</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#ffe071] shrink-0" />
                    <span>90-Day deal registration lock on enterprise accounts</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#ffe071] shrink-0" />
                    <span>Comprehensive unbranded pitch decks & sales collateral</span>
                  </div>
                  <div className="flex items-center gap-2.5">
                    <CheckCircle2 size={16} className="text-[#ffe071] shrink-0" />
                    <span>Dedicated Partner Success Manager for active accounts</span>
                  </div>
                </div>
              </div>

              {/* Partner Testimonial Card */}
              <div className="bg-[#f6f5f3] rounded-[24px] p-7 border border-[#2a2928]/10">
                <div className="flex items-center gap-1 text-[#2a2928] mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Sparkles key={i} size={14} className="fill-[#ffe071] text-[#2a2928]" />
                  ))}
                </div>
                <p className="text-[15px] italic text-[#4a4947] leading-relaxed mb-4">
                  "Partnering with B4G allowed us to package and launch enterprise-grade AI chatbots and voicebots under our agency brand in less than a week. We retained 75% gross margins and closed three Fortune 500 retainers in our first quarter."
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[#2a2928] text-white flex items-center justify-center font-medium text-sm">
                    MR
                  </div>
                  <div>
                    <div className="text-sm font-semibold text-[#2a2928]">Marcus Reynolds</div>
                    <div className="text-xs text-[#707070]">Managing Director, Nexus Digital Partners</div>
                  </div>
                </div>
              </div>

              {/* Need Quick Guidance Card */}
              <div className="p-6 rounded-[24px] border border-dashed border-[#2a2928]/20 flex items-center justify-between">
                <div>
                  <h4 className="text-sm font-semibold text-[#2a2928]">Unsure which program fits best?</h4>
                  <p className="text-xs text-[#707070] mt-0.5">Select your closest match and our partner team will advise.</p>
                </div>
                <div className="w-8 h-8 rounded-full bg-[#ffe071] flex items-center justify-center shrink-0">
                  <Zap size={16} className="text-[#2a2928]" />
                </div>
              </div>
            </div>

            {/* Right Column: The Application Form */}
            <div className="lg:col-span-7">
              <div className="bg-white rounded-[28px] p-7 sm:p-10 border border-[#2a2928]/10 shadow-[0_10px_35px_-5px_rgba(0,0,0,0.06)] relative">
                
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.96 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="py-12 px-4 text-center flex flex-col items-center justify-center"
                  >
                    <div className="w-20 h-20 rounded-full bg-[#ffe071] flex items-center justify-center text-[#2a2928] mb-6 shadow-md">
                      <CheckCircle2 size={42} strokeWidth={2.2} />
                    </div>

                    <span className="text-xs font-[550] uppercase tracking-wider text-[#707070] mb-2">
                      Application Received
                    </span>
                    <h2 className="text-3xl font-medium text-[#2a2928] mb-4">
                      Thank You, {fullName}!
                    </h2>
                    <p className="text-[#666666] max-w-[500px] text-base leading-relaxed mb-6">
                      Your application for the <strong className="text-[#2a2928]">{partnerType}</strong> program has been logged in our partner portal. A Senior Partner Director will review your profile and reach out within 48 business hours.
                    </p>

                    <div className="bg-[#f7f6f4] rounded-2xl p-6 w-full max-w-[480px] text-left text-sm text-[#4a4947] mb-8 space-y-2 border border-[#2a2928]/10">
                      <div><strong className="text-[#2a2928]">Program:</strong> {partnerType}</div>
                      <div><strong className="text-[#2a2928]">Email:</strong> {email}</div>
                      {companyName && <div><strong className="text-[#2a2928]">Company:</strong> {companyName}</div>}
                      {companyWebsite && <div><strong className="text-[#2a2928]">Website:</strong> {companyWebsite}</div>}
                    </div>

                    <div className="flex flex-wrap items-center justify-center gap-4">
                      <BrandButton
                        text="Explore Partner Programs"
                        href="/partners/white-label"
                        onClick={(e) => {
                          e?.preventDefault();
                          window.history.pushState({}, '', '/partners/white-label');
                          window.dispatchEvent(new Event('navigationchange'));
                          window.scrollTo({ top: 0, behavior: 'smooth' });
                        }}
                      />
                      <button
                        onClick={onNavigateHome}
                        className="px-6 py-3 rounded-full text-sm font-medium text-[#707070] hover:text-[#2a2928] transition-colors"
                      >
                        Return to Homepage
                      </button>
                    </div>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                    <div className="border-b border-[#efeeec] pb-4 mb-2">
                      <h3 className="text-xl font-medium text-[#2a2928]">Partner Application Form</h3>
                      <p className="text-xs text-[#707070] mt-1">Fields marked with an asterisk (*) are required.</p>
                    </div>

                    {/* Partner Type * (Dropdown with exact screenshot options) */}
                    <div>
                      <label className="block text-sm font-[550] text-[#2a2928] mb-2">
                        Partner Type <span className="text-[#e03131]">*</span>
                      </label>
                      <div className="relative">
                        <select
                          value={partnerType}
                          onChange={(e) => {
                            setPartnerType(e.target.value);
                            if (errors.partnerType) setErrors({ ...errors, partnerType: '' });
                          }}
                          className={`w-full appearance-none px-4 py-3.5 pr-10 rounded-xl bg-[#fbf9f5] border ${
                            errors.partnerType ? 'border-[#e03131]' : 'border-[#2a2928]/15'
                          } text-[#2a2928] font-medium text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent cursor-pointer`}
                        >
                          {PARTNER_TYPES.map((type) => (
                            <option
                              key={type}
                              value={type}
                              disabled={type === 'Select partner type'}
                              className={type === 'Select partner type' ? 'text-gray-400' : 'text-[#2a2928]'}
                            >
                              {type}
                            </option>
                          ))}
                        </select>
                        <ChevronDown
                          size={18}
                          className="absolute right-3.5 top-1/2 -translate-y-1/2 pointer-events-none text-[#707070]"
                        />
                      </div>
                      {errors.partnerType && (
                        <p className="text-xs text-[#e03131] mt-1.5">{errors.partnerType}</p>
                      )}

                      {/* Quick selector chips */}
                      <div className="flex flex-wrap gap-1.5 mt-2.5">
                        {PARTNER_TYPES.slice(1).map((type) => (
                          <button
                            type="button"
                            key={type}
                            onClick={() => {
                              setPartnerType(type);
                              if (errors.partnerType) setErrors({ ...errors, partnerType: '' });
                            }}
                            className={`text-[11px] px-2.5 py-1 rounded-md transition-all ${
                              partnerType === type
                                ? 'bg-[#2a2928] text-[#ffe071] font-semibold'
                                : 'bg-[#f4f4f4] text-[#707070] hover:text-[#2a2928]'
                            }`}
                          >
                            {type.replace(' Partners', '').replace(' Program', '')}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Full Name * & Email * */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-[550] text-[#2a2928] mb-2">
                          Full Name <span className="text-[#e03131]">*</span>
                        </label>
                        <input
                          type="text"
                          required
                          value={fullName}
                          onChange={(e) => {
                            setFullName(e.target.value);
                            if (errors.fullName) setErrors({ ...errors, fullName: '' });
                          }}
                          placeholder="e.g. Sarah Jenkins"
                          className={`w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border ${
                            errors.fullName ? 'border-[#e03131]' : 'border-[#2a2928]/15'
                          } text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent`}
                        />
                        {errors.fullName && (
                          <p className="text-xs text-[#e03131] mt-1.5">{errors.fullName}</p>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-[550] text-[#2a2928] mb-2">
                          Work Email <span className="text-[#e03131]">*</span>
                        </label>
                        <input
                          type="email"
                          required
                          value={email}
                          onChange={(e) => {
                            setEmail(e.target.value);
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="sarah@company.com"
                          className={`w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border ${
                            errors.email ? 'border-[#e03131]' : 'border-[#2a2928]/15'
                          } text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent`}
                        />
                        {errors.email && (
                          <p className="text-xs text-[#e03131] mt-1.5">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Company Name & Company Website */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-[550] text-[#2a2928] mb-2">
                          Company Name
                        </label>
                        <input
                          type="text"
                          value={companyName}
                          onChange={(e) => setCompanyName(e.target.value)}
                          placeholder="e.g. Acme Solutions Inc."
                          className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-[550] text-[#2a2928] mb-2">
                          Company Website
                        </label>
                        <input
                          type="url"
                          value={companyWebsite}
                          onChange={(e) => setCompanyWebsite(e.target.value)}
                          placeholder="https://company.com"
                          className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent"
                        />
                      </div>
                    </div>

                    {/* Phone Number */}
                    <div>
                      <label className="block text-sm font-[550] text-[#2a2928] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                        placeholder="+1 (555) 000-0000"
                        className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent"
                      />
                    </div>

                    {/* Business Description */}
                    <div>
                      <label className="block text-sm font-[550] text-[#2a2928] mb-1">
                        Business Description
                      </label>
                      <span className="block text-xs text-[#707070] mb-2">
                        Tell us about your business, your primary target market, and company size.
                      </span>
                      <textarea
                        rows={3}
                        value={businessDescription}
                        onChange={(e) => setBusinessDescription(e.target.value)}
                        placeholder="We are a 25-person digital transformation consultancy serving mid-market retailers..."
                        className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent resize-y"
                      />
                    </div>

                    {/* Relevant Experience */}
                    <div>
                      <label className="block text-sm font-[550] text-[#2a2928] mb-1">
                        Relevant Experience
                      </label>
                      <span className="block text-xs text-[#707070] mb-2">
                        Describe your experience with AI solutions, partnerships, or related services.
                      </span>
                      <textarea
                        rows={3}
                        value={relevantExperience}
                        onChange={(e) => setRelevantExperience(e.target.value)}
                        placeholder="We have deployed customer service chatbots and CRM integrations for over 40 clients..."
                        className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent resize-y"
                      />
                    </div>

                    {/* Additional Information */}
                    <div>
                      <label className="block text-sm font-[550] text-[#2a2928] mb-1">
                        Additional Information
                      </label>
                      <span className="block text-xs text-[#707070] mb-2">
                        Any additional information you'd like to share or specific client opportunities on your radar...
                      </span>
                      <textarea
                        rows={3}
                        value={additionalInformation}
                        onChange={(e) => setAdditionalInformation(e.target.value)}
                        placeholder="We have two pending enterprise proposals where we would like to include B4G AI..."
                        className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] focus:border-transparent resize-y"
                      />
                    </div>

                    {/* Submit Button */}
                    <div className="pt-2">
                      <button
                        type="submit"
                        className="w-full relative group overflow-hidden bg-[#2a2928] hover:bg-[#1a1918] text-[#ffe071] font-semibold text-base py-4 px-8 rounded-full transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <span className="relative z-10 font-[550]">Submit Application</span>
                        <ArrowRight size={18} className="relative z-10 transition-transform duration-300 group-hover:translate-x-1" />
                        <div className="absolute inset-0 bg-[#ffe071]/10 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                      </button>
                      <p className="text-center text-xs text-[#707070] mt-3">
                        By submitting, you agree to our confidential partner qualification and review terms.
                      </p>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
