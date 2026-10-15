import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  Palette,
  Wrench,
  PlugZap,
  Handshake,
  Percent,
  Rocket,
  Coins,
  PackageCheck,
  CheckCircle2,
  ArrowRight,
  Award,
  HelpCircle,
  Users,
} from 'lucide-react';
import { partnerProgramsData, type PartnerProgramDetail } from '../data/partnerData';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { BrandButton } from './BrandButton';
import { FourMonolineGraphic } from '../Graphics';
import { PARTNER_TYPES } from './PartnerApplyPage';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  Palette,
  Wrench,
  PlugZap,
  Handshake,
  Percent,
  Rocket,
  Coins,
  PackageCheck,
};

interface PartnerPageProps {
  partnerSlug: string;
  onNavigateHome: () => void;
}

export const PartnerPage: React.FC<PartnerPageProps> = ({ partnerSlug, onNavigateHome }) => {
  const program: PartnerProgramDetail =
    partnerProgramsData[partnerSlug] || partnerProgramsData['white-label'];

  const IconComponent = iconMap[program.iconName] || Palette;

  // On-page quick application form state
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    partnerType: program.selectValue,
    fullName: '',
    email: '',
    companyName: '',
    companyWebsite: '',
    phoneNumber: '',
    businessDescription: '',
    relevantExperience: '',
    additionalInformation: '',
  });

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.fullName && formData.email) {
      setFormSubmitted(true);
    }
  };

  const scrollToApply = () => {
    const el = document.getElementById('apply-section');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-white font-sans selection:bg-[#ffe071] selection:text-[#2a2928] relative overflow-x-hidden">
      {/* Background Four Monoline Graphic */}
      <div className="absolute top-0 right-0 w-full h-[720px] pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-12 right-6 sm:right-16 md:right-24 w-[420px] sm:w-[580px] lg:w-[680px] h-auto pointer-events-none opacity-60">
          <FourMonolineGraphic className="w-full h-auto" strokeColor="#EFEDEB" strokeWidth={1.5} />
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />

        {/* Breadcrumb Navigation */}
        <div className="max-w-[1440px] mx-auto px-6 pt-8 pb-4">
          <div className="flex items-center gap-2 text-xs md:text-sm text-[#707070]">
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                onNavigateHome();
              }}
              className="hover:text-[#2a2928] transition-colors"
            >
              Home
            </a>
            <span>/</span>
            <span className="text-[#2a2928]">Partners</span>
            <span>/</span>
            <span className="text-[#2a2928] font-medium">{program.name}</span>
          </div>
        </div>

        {/* Hero Section */}
        <section className="max-w-[1440px] mx-auto px-6 pt-6 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 flex flex-col items-start">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#f4f4f4] border border-[#2a2928]/10 text-xs font-[550] tracking-wider uppercase text-[#2a2928] mb-6">
                <div className="w-2 h-2 rounded-full bg-[#ffe071]" />
                <span>{program.eyebrow}</span>
              </div>

              {/* Title & Tagline */}
              <h1 className="text-[clamp(2.5rem,4.6vw,4.4rem)] font-medium leading-[1.04] tracking-[-0.03em] text-[#2a2928] mb-4">
                {program.name}
              </h1>

              <p className="text-xl md:text-2xl font-[450] text-[#2a2928]/80 leading-snug mb-6">
                {program.tagline}
              </p>

              <p className="text-base md:text-lg text-[#666666] leading-relaxed max-w-[620px] mb-8">
                {program.heroDescription}
              </p>

              {/* Hero CTAs */}
              <div className="flex flex-wrap items-center gap-4">
                <BrandButton
                  text="Apply for this Program"
                  href="#apply-section"
                  onClick={(e) => {
                    e?.preventDefault();
                    scrollToApply();
                  }}
                />
                <a
                  href="/partners/apply"
                  onClick={(e) => {
                    e.preventDefault();
                    window.history.pushState({}, '', `/partners/apply?type=${encodeURIComponent(program.selectValue)}`);
                    window.dispatchEvent(new Event('navigationchange'));
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="px-6 py-3.5 rounded-full text-sm font-semibold text-[#2a2928] bg-[#f4f4f4] hover:bg-[#eae8e4] transition-colors border border-[#2a2928]/10 flex items-center gap-1.5"
                >
                  <span>Full Application Page</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>

            {/* Right: Interactive Partner Telemetry Card */}
            <div className="lg:col-span-5">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-[28px] p-6 sm:p-7 border border-[#2a2928]/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] relative overflow-hidden"
              >
                {/* Header Row */}
                <div className="flex items-center justify-between pb-4 border-b border-[#efeeec] mb-5">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#ffe071] flex items-center justify-center text-[#2a2928]">
                      <IconComponent size={20} strokeWidth={2} />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-[#2a2928]">{program.name}</div>
                      <div className="text-xs text-[#707070]">{program.badge}</div>
                    </div>
                  </div>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-50 text-emerald-700 border border-emerald-200">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Accepting Partners
                  </span>
                </div>

                {/* Key Program Highlights */}
                <div className="space-y-3 mb-6">
                  {program.overview.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#4a4947]">
                      <CheckCircle2 size={16} className="text-[#2a2928] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>

                {/* Quick Snapshot Metrics */}
                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-[#efeeec] bg-[#fbf9f5] -mx-6 -mb-6 p-6 rounded-b-[27px]">
                  {program.economics.metrics.slice(0, 2).map((m, i) => (
                    <div key={i}>
                      <div className="text-xl font-semibold text-[#2a2928]">{m.value}</div>
                      <div className="text-xs text-[#707070] leading-snug mt-0.5">{m.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Section: Challenge & How This Program Solves It */}
        <section className="bg-[#f7f6f4] py-20 px-6 border-y border-[#efeeec]">
          <div className="max-w-[1440px] mx-auto">
            <div className="max-w-[760px] mb-14">
              <span className="text-xs font-[550] uppercase tracking-wider text-[#707070] block mb-2">
                Problem & Solution
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2a2928] mb-4">
                {program.howItSolves.solutionHeadline}
              </h2>
              <p className="text-base md:text-lg text-[#666666] leading-relaxed">
                {program.howItSolves.solutionDescription}
              </p>
            </div>

            {/* 4 Core Pillars */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.howItSolves.pillars.map((pillar, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-2xl p-6 border border-[#2a2928]/8 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-8 h-8 rounded-lg bg-[#ffe071] flex items-center justify-center text-[#2a2928] font-bold text-xs mb-4">
                    0{idx + 1}
                  </div>
                  <h3 className="text-base font-semibold text-[#2a2928] mb-2">{pillar.title}</h3>
                  <p className="text-xs md:text-sm text-[#707070] leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Economics & Tier Progression (High Impact Dark Section) */}
        <section className="bg-[#2a2928] text-white py-24 px-6 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#ffe071]/10 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-[1440px] mx-auto relative z-10">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16 pb-8 border-b border-white/10">
              <div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-[550] tracking-wider uppercase text-[#ffe071] mb-3">
                  <Award size={14} />
                  <span>Program Economics</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-2">
                  {program.economics.headline}
                </h2>
                <p className="text-sm md:text-base text-[#a09e9b] max-w-[600px]">
                  {program.economics.subheadline}
                </p>
              </div>

              <div className="shrink-0">
                <button
                  onClick={scrollToApply}
                  className="bg-[#ffe071] hover:bg-[#fad859] text-[#2a2928] font-semibold text-sm px-6 py-3 rounded-full transition-colors flex items-center gap-2 cursor-pointer shadow-md"
                >
                  <span>Apply Now</span>
                  <ArrowRight size={14} />
                </button>
              </div>
            </div>

            {/* 3 Metric Callouts */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
              {program.economics.metrics.map((metric, i) => (
                <div key={i} className="bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-xs">
                  <div className="text-4xl font-medium text-[#ffe071] mb-1">{metric.value}</div>
                  <div className="text-sm font-semibold text-white mb-1">{metric.label}</div>
                  <div className="text-xs text-[#a09e9b] leading-relaxed">{metric.detail}</div>
                </div>
              ))}
            </div>

            {/* Tier Progression Cards */}
            <div>
              <h3 className="text-lg font-medium text-white mb-6">Tier Progression & Margins</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {program.economics.tiers.map((tier, idx) => (
                  <div
                    key={idx}
                    className="bg-white/5 border border-white/10 hover:border-[#ffe071]/50 rounded-2xl p-6 transition-colors flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-base font-semibold text-white">{tier.tierName}</span>
                        <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-[#ffe071]/20 text-[#ffe071]">
                          Tier {idx + 1}
                        </span>
                      </div>
                      <div className="text-xs text-[#a09e9b] mb-4 pb-3 border-b border-white/10">
                        <strong>Qualification:</strong> {tier.qualification}
                      </div>
                      <p className="text-xs text-[#d4d2ce] leading-relaxed mb-6">
                        {tier.benefits}
                      </p>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <div className="text-xs text-[#a09e9b] mb-0.5">Partner Earning / Margin:</div>
                      <div className="text-sm font-semibold text-[#ffe071]">{tier.margin}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section: Why Choose B4G as Your Partner */}
        <section className="py-24 px-6 max-w-[1440px] mx-auto">
          <div className="max-w-[700px] mb-16">
            <span className="text-xs font-[550] uppercase tracking-wider text-[#707070] block mb-2">
              Competitive Advantage
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2a2928] mb-4">
              Why Partner with B4G AI
            </h2>
            <p className="text-base md:text-lg text-[#666666]">
              We treat our partners as an extension of our core team. Here is what makes our partner foundation unique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {program.whyChoose.map((item, idx) => (
              <div
                key={idx}
                className="p-8 rounded-2xl border border-[#2a2928]/10 hover:border-[#2a2928]/25 transition-all bg-[#fdfdfd]"
              >
                <div className="w-10 h-10 rounded-xl bg-[#f4f4f4] flex items-center justify-center text-[#2a2928] mb-4 font-bold text-sm">
                  ✓
                </div>
                <h3 className="text-lg font-semibold text-[#2a2928] mb-2">{item.title}</h3>
                <p className="text-sm text-[#666666] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Onboarding Process */}
        <section className="bg-[#f7f6f4] py-20 px-6 border-y border-[#efeeec]">
          <div className="max-w-[1440px] mx-auto">
            <div className="text-center max-w-[640px] mx-auto mb-16">
              <span className="text-xs font-[550] uppercase tracking-wider text-[#707070] block mb-2">
                Roadmap
              </span>
              <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2a2928] mb-4">
                How It Works: 4 Steps to Launch
              </h2>
              <p className="text-sm md:text-base text-[#666666]">
                Our streamlined onboarding path gets your team approved and actively generating revenue in days.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {program.processSteps.map((step, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#2a2928]/10 relative">
                  <div className="text-3xl font-mono font-bold text-[#ffe071] mb-3">{step.step}</div>
                  <h3 className="text-base font-semibold text-[#2a2928] mb-2">{step.title}</h3>
                  <p className="text-xs md:text-sm text-[#707070] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Who It Is For */}
        <section className="py-20 px-6 max-w-[1440px] mx-auto">
          <div className="max-w-[700px] mb-12">
            <span className="text-xs font-[550] uppercase tracking-wider text-[#707070] block mb-2">
              Ideal Partner Profiles
            </span>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-[#2a2928] mb-4">
              Who Is This Program Designed For?
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {program.whoItIsFor.map((w, idx) => (
              <div key={idx} className="p-6 rounded-2xl bg-[#faf9f7] border border-[#2a2928]/8">
                <div className="w-8 h-8 rounded-lg bg-[#2a2928] text-white flex items-center justify-center text-xs font-semibold mb-4">
                  <Users size={14} />
                </div>
                <h3 className="text-sm font-semibold text-[#2a2928] mb-1.5">{w.persona}</h3>
                <p className="text-xs text-[#707070] leading-relaxed">{w.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Section: FAQs */}
        <section className="bg-[#f7f6f4] py-20 px-6 border-t border-[#efeeec]">
          <div className="max-w-[840px] mx-auto">
            <div className="text-center mb-12">
              <span className="text-xs font-[550] uppercase tracking-wider text-[#707070] block mb-2">
                Frequently Asked Questions
              </span>
              <h2 className="text-3xl font-medium text-[#2a2928]">Program Details & Terms</h2>
            </div>

            <div className="space-y-4">
              {program.faqs.map((faq, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-[#2a2928]/10 shadow-xs">
                  <h3 className="text-base font-semibold text-[#2a2928] mb-2 flex items-start gap-2">
                    <HelpCircle size={18} className="text-[#ffe071] shrink-0 mt-0.5" />
                    <span>{faq.question}</span>
                  </h3>
                  <p className="text-sm text-[#666666] leading-relaxed pl-6">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Dedicated Application Form on the Page */}
        <section id="apply-section" className="py-24 px-6 max-w-[1000px] mx-auto">
          <div className="bg-white rounded-[32px] p-8 sm:p-12 border border-[#2a2928]/12 shadow-xl relative overflow-hidden">
            <div className="max-w-[680px] mb-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#f4f4f4] text-xs font-[550] tracking-wider uppercase text-[#2a2928] mb-3">
                <div className="w-2 h-2 rounded-full bg-[#ffe071]" />
                <span>Partner Application</span>
              </div>
              <h2 className="text-3xl font-medium text-[#2a2928] mb-2">
                Apply for {program.name}
              </h2>
              <p className="text-sm text-[#707070]">
                Submit your credentials below to access wholesale pricing, developer sandboxes, and sales enablement resources.
              </p>
            </div>

            {formSubmitted ? (
              <div className="py-12 text-center flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-[#ffe071] flex items-center justify-center text-[#2a2928] mb-4">
                  <CheckCircle2 size={36} strokeWidth={2.2} />
                </div>
                <h3 className="text-2xl font-medium text-[#2a2928] mb-2">Application Submitted!</h3>
                <p className="text-sm text-[#707070] max-w-[420px] mb-6">
                  Thank you, {formData.fullName}. Our Partner Directors will review your application for {program.name} and contact you within 48 hours.
                </p>
                <BrandButton
                  text="Return to Home"
                  href="/"
                  onClick={(e) => {
                    e?.preventDefault();
                    onNavigateHome();
                  }}
                />
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                {/* Partner Type Selector (pre-selected to this program) */}
                <div>
                  <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                    Partner Program <span className="text-[#e03131]">*</span>
                  </label>
                  <select
                    value={formData.partnerType}
                    onChange={(e) => setFormData({ ...formData, partnerType: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071] cursor-pointer"
                  >
                    {PARTNER_TYPES.slice(1).map((type) => (
                      <option key={type} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                {/* Name & Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                      Full Name <span className="text-[#e03131]">*</span>
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="Jane Doe"
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                      Email Address <span className="text-[#e03131]">*</span>
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="jane@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                    />
                  </div>
                </div>

                {/* Company Name & Website */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="Acme Global"
                      value={formData.companyName}
                      onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                      Company Website
                    </label>
                    <input
                      type="url"
                      placeholder="https://acme.com"
                      value={formData.companyWebsite}
                      onChange={(e) => setFormData({ ...formData, companyWebsite: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                    />
                  </div>
                </div>

                {/* Phone Number */}
                <div>
                  <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 (555) 123-4567"
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                  />
                </div>

                {/* Business Description */}
                <div>
                  <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                    Tell us about your business
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Briefly describe your company, team size, and core focus..."
                    value={formData.businessDescription}
                    onChange={(e) => setFormData({ ...formData, businessDescription: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                  />
                </div>

                {/* Relevant Experience */}
                <div>
                  <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                    Relevant Experience with AI solutions or partnerships
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Describe any previous integrations, AI tools, or partner programs..."
                    value={formData.relevantExperience}
                    onChange={(e) => setFormData({ ...formData, relevantExperience: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                  />
                </div>

                {/* Additional Information */}
                <div>
                  <label className="block text-xs font-[550] text-[#2a2928] uppercase tracking-wider mb-2">
                    Additional Information
                  </label>
                  <textarea
                    rows={2}
                    placeholder="Any specific questions, timelines, or active opportunities..."
                    value={formData.additionalInformation}
                    onChange={(e) => setFormData({ ...formData, additionalInformation: e.target.value })}
                    className="w-full px-4 py-3 rounded-xl bg-[#fbf9f5] border border-[#2a2928]/15 text-[#2a2928] text-sm focus:outline-none focus:ring-2 focus:ring-[#ffe071]"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full bg-[#2a2928] hover:bg-[#1a1918] text-[#ffe071] font-semibold text-sm py-4 rounded-full transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
                  >
                    <span>Submit Application for {program.name}</span>
                    <ArrowRight size={16} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>
    </div>
  );
};
