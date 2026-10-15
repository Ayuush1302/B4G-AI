import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ShoppingBag,
  Building2,
  Activity,
  Factory,
  Briefcase,
  CheckCircle2,
  Shield,
  ArrowUpRight,
  Sparkles,
  Zap,
  Check,
  ChevronRight,
  AlertCircle,
  Lock,
} from 'lucide-react';
import { solutionsData } from '../data/solutionData';
import { BrandButton } from './BrandButton';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { FourMonolineGraphic } from '../Graphics';

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string; strokeWidth?: number }>> = {
  ShoppingBag,
  Building2,
  Activity,
  Factory,
  Briefcase,
};

interface SolutionPageProps {
  solutionSlug: string;
  onNavigateHome: () => void;
}

export const SolutionPage: React.FC<SolutionPageProps> = ({ solutionSlug, onNavigateHome }) => {
  const solution = solutionsData[solutionSlug] || solutionsData['retail-ecommerce'];
  const IconComponent = iconMap[solution.iconName] || Building2;

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.email) {
      setFormSubmitted(true);
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById('solution-inquiry');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-brand-white font-sans selection:bg-[#ffe071] selection:text-[#2a2928] relative overflow-x-hidden">
      {/* Background Graphic Ambient Accent */}
      <div className="absolute top-0 right-0 w-full h-[720px] lg:h-[840px] pointer-events-none overflow-hidden select-none z-0">
        <div className="absolute top-8 md:top-12 lg:top-16 right-4 sm:right-8 md:right-12 lg:right-16 xl:right-24 w-[360px] sm:w-[440px] md:w-[520px] lg:w-[620px] xl:w-[680px] h-auto pointer-events-none opacity-80">
          <FourMonolineGraphic className="w-full h-auto" strokeColor="#EFEDEB" strokeWidth={1.5} />
        </div>
      </div>

      {/* Persistent Navbar */}
      <Navbar />

      <main className="relative z-10">
        {/* ============================================================ */}
        {/* 1. HERO SECTION */}
        {/* ============================================================ */}
        <section className="pt-10 sm:pt-16 pb-16 lg:pb-24 px-[24px] w-full">
          <div className="max-w-[1440px] mx-auto w-full">
            {/* Breadcrumb Bar */}
            <div className="flex items-center gap-2 text-[14px] font-[450] text-[#707070] mb-8">
              <button
                onClick={onNavigateHome}
                className="hover:text-[#2a2928] transition-colors focus:outline-none"
              >
                Home
              </button>
              <ChevronRight size={14} className="text-[#a09e9b]" />
              <span className="text-[#a09e9b]">Solutions</span>
              <ChevronRight size={14} className="text-[#a09e9b]" />
              <span className="text-[#2a2928] font-medium">{solution.name}</span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
              {/* Left Column: Headline & Action Buttons */}
              <div className="lg:col-span-7 flex flex-col items-start gap-6">
                {/* Eyebrow & Badge */}
                <div className="flex items-center gap-3 flex-wrap">
                  <div className="flex items-center gap-2 bg-[#f4f4f4] px-3.5 py-1.5 rounded-full border border-[#2a2928]/5">
                    <div className="w-2 h-2 bg-[#ffe071] rounded-full" />
                    <span className="text-[12.5px] font-[550] uppercase tracking-wider text-[#2a2928]">
                      {solution.eyebrow}
                    </span>
                  </div>
                  <span className="text-[12px] font-[500] text-[#707070] bg-[#efeeec]/60 px-3 py-1 rounded-full">
                    {solution.badge}
                  </span>
                </div>

                {/* Main Heading */}
                <h1 className="text-[clamp(2.75rem,5.2vw,5.5vw)] font-[550] leading-[100%] tracking-[-0.035em] text-[#2a2928] m-0">
                  {solution.name}
                </h1>

                {/* Tagline */}
                <p className="text-[clamp(1.25rem,2vw,1.65rem)] font-[500] text-[#2a2928] leading-[130%] tracking-[-0.02em] m-0">
                  {solution.tagline}
                </p>

                {/* Subheadline Details */}
                <p className="text-[16px] sm:text-[18px] text-[#707070] font-[450] leading-[150%] max-w-[620px] m-0">
                  {solution.heroDescription}
                </p>

                {/* Dual Action CTAs */}
                <div className="flex items-center gap-4 pt-3 flex-wrap">
                  <BrandButton
                    text="Request Industry Blueprint"
                    onClick={scrollToContact}
                    bgClassName="bg-white"
                  />
                  <a
                    href="#how-it-works"
                    className="inline-flex items-center gap-2 text-[16px] font-[550] text-[#2a2928] hover:text-black px-5 py-3 rounded-2xl hover:bg-[#f4f4f4] transition-all"
                  >
                    <span>View Architecture</span>
                    <ArrowDownRight size={16} />
                  </a>
                </div>

                {/* Mini Trust Badges */}
                <div className="flex items-center gap-6 pt-6 border-t border-[#efeeec] w-full text-[13px] text-[#707070] font-[450] flex-wrap">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#2a2928]" />
                    <span>Industry Compliance Certified</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#2a2928]" />
                    <span>Dedicated Private VPC</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 size={16} className="text-[#2a2928]" />
                    <span>Zero Data Leakage SLA</span>
                  </div>
                </div>
              </div>

              {/* Right Column: Interactive Live Sector Telemetry Dashboard */}
              <div className="lg:col-span-5 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-white rounded-[32px] border border-[#2a2928]/10 p-6 sm:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.08)] relative overflow-hidden group"
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#ffe071]/20 rounded-full blur-3xl pointer-events-none" />

                  {/* Header Bar */}
                  <div className="flex items-center justify-between pb-4 border-b border-[#efeeec]">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-[#ffe071] flex items-center justify-center text-[#2a2928] shadow-sm">
                        <IconComponent size={20} strokeWidth={2} />
                      </div>
                      <div>
                        <div className="text-[15px] font-[550] text-[#2a2928]">{solution.mockupData.title}</div>
                        <div className="text-[12px] text-[#707070]">{solution.mockupData.subtitle}</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-1.5 bg-[#eaf8ee] text-[#1c843c] px-2.5 py-1 rounded-full text-[11px] font-[550]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#1c843c] animate-pulse" />
                      Sector Engine
                    </div>
                  </div>

                  {/* 3 Metric Cards */}
                  <div className="grid grid-cols-3 gap-3 my-5">
                    {solution.mockupData.stats.map((stat, idx) => (
                      <div key={idx} className="bg-[#f9f8f6] p-3 rounded-xl border border-[#efeeec]/60">
                        <div className="text-[11px] text-[#707070] font-[450] truncate">{stat.label}</div>
                        <div className="text-[18px] sm:text-[20px] font-[550] text-[#2a2928] mt-0.5">{stat.value}</div>
                      </div>
                    ))}
                  </div>

                  {/* Live Activity Telemetry Feed */}
                  <div className="flex flex-col gap-2.5">
                    <div className="text-[11.5px] font-[550] uppercase tracking-wider text-[#707070] mb-1">
                      Sector Automation Stream
                    </div>
                    {solution.mockupData.activityLog.map((log, idx) => (
                      <div
                        key={idx}
                        className="flex items-start justify-between gap-3 p-3 bg-white rounded-xl border border-[#efeeec] hover:border-[#2a2928]/20 transition-all text-[13px]"
                      >
                        <div className="flex items-start gap-2.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-[#ffe071] mt-2 shrink-0" />
                          <div className="flex flex-col">
                            <span className="font-medium text-[#2a2928] leading-snug">{log.action}</span>
                            <span className="text-[11.5px] text-[#8c8a87] mt-0.5">{log.time}</span>
                          </div>
                        </div>
                        <span className="text-[11px] font-[550] px-2 py-0.5 bg-[#f4f4f4] rounded-md text-[#2a2928] shrink-0">
                          {log.status}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 2. THE CHALLENGE VS. THE B4G SOLUTION */}
        {/* ============================================================ */}
        <section className="py-16 lg:py-24 px-[24px] w-full bg-[#faf9f8] border-y border-[#efeeec]">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              {/* Left Column: The Problem */}
              <div className="lg:col-span-6 flex flex-col gap-6">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#2a2928] rounded-[2px]" />
                  <span className="text-[13px] font-[550] uppercase tracking-wider text-[#707070]">
                    Sector Challenges
                  </span>
                </div>
                <h2 className="text-[clamp(2.2rem,3.8vw,3.8vw)] font-[550] leading-[105%] tracking-[-0.03em] text-[#2a2928] m-0">
                  {solution.problem.headline}
                </h2>
                <p className="text-[17px] text-[#707070] font-[450] leading-[150%] max-w-[540px] m-0">
                  {solution.problem.subheadline}
                </p>

                {/* 4 Pain Points */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                  {solution.problem.points.map((pt, idx) => (
                    <div
                      key={idx}
                      className="bg-white p-5 rounded-2xl border border-[#efeeec] flex flex-col gap-2 shadow-xs"
                    >
                      <div className="w-7 h-7 rounded-lg bg-[#fef2f2] text-[#b91c1c] flex items-center justify-center font-bold text-xs shrink-0">
                        <AlertCircle size={15} />
                      </div>
                      <h4 className="text-[15px] font-[550] text-[#2a2928] m-0 tracking-tight">{pt.title}</h4>
                      <p className="text-[13px] text-[#707070] font-[450] leading-[140%] m-0">{pt.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column: The B4G Solution */}
              <div className="lg:col-span-6 flex flex-col gap-6 bg-white p-8 sm:p-10 rounded-[32px] border border-[#2a2928]/10 shadow-sm relative overflow-hidden">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
                  <span className="text-[13px] font-[550] uppercase tracking-wider text-[#2a2928]">
                    The B4G Solution
                  </span>
                </div>
                <h3 className="text-[clamp(1.9rem,3.2vw,3.2vw)] font-[550] leading-[110%] tracking-[-0.025em] text-[#2a2928] m-0">
                  {solution.solution.headline}
                </h3>
                <p className="text-[16px] sm:text-[17px] text-[#707070] font-[450] leading-[155%] m-0">
                  {solution.solution.description}
                </p>

                {/* 4 Highlighted Capabilities */}
                <div className="flex flex-col gap-3.5 mt-2">
                  {solution.solution.capabilities.map((cap, idx) => (
                    <div key={idx} className="flex items-start gap-3 p-3.5 bg-[#faf8f5] rounded-xl border border-[#efeeec]/60">
                      <div className="w-5 h-5 rounded-full bg-[#ffe071] text-[#2a2928] flex items-center justify-center shrink-0 mt-0.5">
                        <Check size={12} strokeWidth={3} />
                      </div>
                      <span className="text-[14px] text-[#2a2928] font-[450] leading-[145%]">{cap}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 3. HOW IT WORKS (END-TO-END WORKFLOW) */}
        {/* ============================================================ */}
        <section id="how-it-works" className="py-16 lg:py-24 px-[24px] w-full">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
                  <span className="text-[13px] font-[550] uppercase tracking-wider text-[#707070]">
                    Deployment Pipeline
                  </span>
                </div>
                <h2 className="text-[clamp(2.2rem,4vw,4.5rem)] font-[550] leading-[100%] tracking-[-0.03em] text-[#2a2928] m-0">
                  How the {solution.name} Pipeline Operates
                </h2>
              </div>
              <p className="text-[16px] text-[#707070] max-w-[420px] m-0 font-[450]">
                A coordinated, multi-modal autonomous architecture configured specifically for your vertical.
              </p>
            </div>

            {/* 4 Steps Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {solution.howItWorks.map((step) => (
                <div
                  key={step.step}
                  className="bg-[#fbfaf9] p-7 rounded-[24px] border border-[#efeeec] flex flex-col justify-between min-h-[260px] group hover:border-[#2a2928]/20 transition-all hover:shadow-md"
                >
                  <div className="flex flex-col gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white border border-[#efeeec] flex items-center justify-center font-[550] text-[15px] text-[#2a2928] group-hover:bg-[#ffe071] transition-colors">
                      {step.step}
                    </div>
                    <h3 className="text-[19px] font-[550] text-[#2a2928] tracking-tight m-0 leading-snug">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-[14px] text-[#707070] font-[450] leading-[150%] m-0 mt-4">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 4. CORE CAPABILITIES (BENTO GRID) */}
        {/* ============================================================ */}
        <section className="py-16 lg:py-24 px-[24px] w-full bg-[#faf9f8] border-y border-[#efeeec]">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="text-center max-w-[640px] mx-auto mb-14 sm:mb-20">
              <div className="inline-flex items-center gap-2 bg-white px-3.5 py-1.5 rounded-full border border-[#efeeec] mb-4">
                <Sparkles size={14} className="text-[#ffe071]" />
                <span className="text-[12.5px] font-[550] uppercase tracking-wider text-[#2a2928]">
                  Domain Capabilities
                </span>
              </div>
              <h2 className="text-[clamp(2.2rem,4vw,4.5rem)] font-[550] leading-[100%] tracking-[-0.03em] text-[#2a2928] m-0">
                Built for {solution.name}
              </h2>
              <p className="text-[16px] sm:text-[18px] text-[#707070] font-[450] mt-3 m-0">
                Turnkey architectures designed to handle unique sector regulations, protocols, and workflows.
              </p>
            </div>

            {/* 6 Bento Grid Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {solution.features.map((feat, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-[24px] border border-[#efeeec] hover:border-[#2a2928]/20 transition-all hover:shadow-md flex flex-col justify-between group"
                >
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11.5px] font-[550] uppercase tracking-wider px-2.5 py-1 bg-[#f4f4f4] rounded-md text-[#707070] group-hover:bg-[#ffe071] group-hover:text-[#2a2928] transition-colors">
                        {feat.tag}
                      </span>
                      <ArrowUpRight size={16} className="text-[#a09e9b] group-hover:text-[#2a2928] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                    </div>
                    <h3 className="text-[19px] font-[550] text-[#2a2928] tracking-tight m-0 mt-2">
                      {feat.title}
                    </h3>
                    <p className="text-[14px] text-[#707070] font-[450] leading-[150%] m-0">
                      {feat.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 5. MEASURABLE ROI & METRICS */}
        {/* ============================================================ */}
        <section className="py-16 lg:py-24 px-[24px] w-full">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="bg-[#2a2928] text-white rounded-[32px] p-8 sm:p-14 lg:p-20 relative overflow-hidden">
              <div className="max-w-[620px] mb-12 sm:mb-16 relative z-10">
                <div className="inline-flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-full mb-4">
                  <div className="w-2 h-2 bg-[#ffe071] rounded-full" />
                  <span className="text-[12.5px] font-[550] uppercase tracking-wider text-white">
                    Proven Industry Impact
                  </span>
                </div>
                <h2 className="text-[clamp(2.2rem,4vw,4.5rem)] font-[550] leading-[100%] tracking-[-0.03em] m-0">
                  Measured Enterprise ROI
                </h2>
                <p className="text-[16px] text-white/70 font-[450] mt-3 m-0">
                  Demonstrated business outcomes achieved by organizations running B4G {solution.name}.
                </p>
              </div>

              {/* 3 Metric Pillars */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-12 relative z-10">
                {solution.metrics.map((metric, idx) => (
                  <div key={idx} className="flex flex-col border-t border-white/15 pt-6">
                    <span className="text-[clamp(3rem,6vw,5.5rem)] font-[550] leading-none tracking-[-0.04em] text-[#ffe071]">
                      {metric.value}
                    </span>
                    <span className="text-[18px] sm:text-[20px] font-[550] text-white mt-3">
                      {metric.label}
                    </span>
                    <span className="text-[14px] text-white/60 font-[450] mt-1">
                      {metric.detail}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 6. WHY ENTERPRISES CHOOSE THIS SOLUTION */}
        {/* ============================================================ */}
        <section className="py-16 lg:py-24 px-[24px] w-full bg-[#faf9f8] border-y border-[#efeeec]">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
              <div className="lg:col-span-5 flex flex-col gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 bg-[#ffe071] rounded-[2px]" />
                  <span className="text-[13px] font-[550] uppercase tracking-wider text-[#707070]">
                    Strategic Advantage
                  </span>
                </div>
                <h2 className="text-[clamp(2.2rem,3.8vw,3.8vw)] font-[550] leading-[105%] tracking-[-0.03em] text-[#2a2928] m-0">
                  Why Leaders Choose B4G for {solution.name}
                </h2>
                <p className="text-[16px] text-[#707070] font-[450] leading-[150%] m-0">
                  Built to satisfy rigorous institutional governance, compliance mandates, and mission-critical SLAs.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {solution.whyChoose.map((pt, idx) => (
                  <div
                    key={idx}
                    className="bg-white p-7 rounded-[24px] border border-[#efeeec] flex flex-col gap-2.5 shadow-xs"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#ffe071]/30 text-[#2a2928] flex items-center justify-center font-bold text-sm shrink-0">
                      <Zap size={18} />
                    </div>
                    <h3 className="text-[18px] font-[550] text-[#2a2928] m-0 tracking-tight">
                      {pt.title}
                    </h3>
                    <p className="text-[14px] text-[#707070] font-[450] leading-[150%] m-0">
                      {pt.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 7. VERTICAL USE CASES */}
        {/* ============================================================ */}
        <section className="py-16 lg:py-24 px-[24px] w-full">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="text-center max-w-[620px] mx-auto mb-14 sm:mb-16">
              <div className="inline-flex items-center gap-2 bg-[#f4f4f4] px-3.5 py-1.5 rounded-full mb-3">
                <span className="text-[12.5px] font-[550] uppercase tracking-wider text-[#707070]">
                  Targeted Deployments
                </span>
              </div>
              <h2 className="text-[clamp(2.2rem,4vw,4.5rem)] font-[550] leading-[100%] tracking-[-0.03em] text-[#2a2928] m-0">
                Specialized Sub-Sector Workflows
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {solution.useCases.map((uc, idx) => (
                <div
                  key={idx}
                  className="bg-[#fcfbf9] p-8 rounded-[28px] border border-[#efeeec] flex flex-col justify-between hover:shadow-md transition-shadow"
                >
                  <div className="flex flex-col gap-3">
                    <span className="text-[12px] font-[550] uppercase tracking-wider text-[#2a2928] bg-[#ffe071] px-3 py-1 rounded-full w-fit">
                      {uc.sector}
                    </span>
                    <h3 className="text-[20px] font-[550] text-[#2a2928] tracking-tight m-0 mt-2">
                      {uc.title}
                    </h3>
                    <p className="text-[14px] text-[#707070] font-[450] leading-[150%] m-0">
                      {uc.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 8. SECURITY & COMPLIANCE BANNER */}
        {/* ============================================================ */}
        <section className="py-12 px-[24px] w-full">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="bg-[#f6ab65]/20 border border-[#f6ab65]/40 rounded-[28px] p-8 sm:p-12 flex flex-col lg:flex-row items-center justify-between gap-8">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#2a2928] text-[#ffe071] flex items-center justify-center shrink-0 shadow-md">
                  <Shield size={24} />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-[22px] font-[550] text-[#2a2928] m-0 tracking-tight">
                    Industry-Specific Security & Compliance Mandates Enforced
                  </h3>
                  <p className="text-[15px] text-[#2a2928]/80 font-[450] mt-1 max-w-[680px] m-0">
                    B4G {solution.name} is engineered to meet sector compliance standards. We support dedicated on-premises and private VPC deployments with Customer-Managed Encryption Keys (CMEK) and strict zero-data-retention guarantees.
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-4 shrink-0">
                <div className="flex items-center gap-2 bg-white px-4 py-2 rounded-xl border border-[#2a2928]/10 text-xs font-[550] text-[#2a2928]">
                  <Lock size={14} />
                  <span>Sector Certified Isolation</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 9. INDUSTRY CONSULTATION / CONTACT SECTION */}
        {/* ============================================================ */}
        <section id="solution-inquiry" className="py-16 lg:py-24 px-[24px] w-full">
          <div className="max-w-[1440px] mx-auto w-full">
            <div className="bg-[#fbe57e] rounded-[32px] p-8 sm:p-14 lg:p-16 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
                {/* Left Column: Heading and info */}
                <div className="lg:col-span-6 flex flex-col gap-6">
                  <div className="flex items-center gap-2.5">
                    <div className="w-2.5 h-2.5 bg-[#2a2928] rounded-[2px]" />
                    <span className="text-[#2a2928] font-[550] text-[14px] uppercase tracking-wider">
                      Request Solution Blueprint
                    </span>
                  </div>
                  <h2 className="text-[clamp(2.5rem,4.8vw,4.5rem)] font-[550] text-[#2a2928] leading-[100%] tracking-[-0.03em] m-0">
                    Deploy AI in {solution.name}
                  </h2>
                  <p className="text-[#2a2928]/85 text-[17px] sm:text-[18px] leading-[140%] max-w-[480px] font-[450] m-0">
                    Schedule a private strategy briefing with an industry AI architect to map integration with your existing legacy systems, data pipelines, and compliance frameworks.
                  </p>
                </div>

                {/* Right Column: Form */}
                <div className="lg:col-span-6">
                  {formSubmitted ? (
                    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center flex flex-col items-center justify-center gap-4 min-h-[300px]">
                      <div className="w-12 h-12 bg-[#ffe071] rounded-full flex items-center justify-center text-[#2a2928]">
                        <Check size={24} strokeWidth={2.5} />
                      </div>
                      <h3 className="text-[24px] font-[550] text-[#2a2928] tracking-tight m-0">
                        Blueprint Request Received!
                      </h3>
                      <p className="text-[#707070] text-[15px] max-w-[340px] m-0">
                        A senior architect specializing in <strong>{solution.name}</strong> will connect with you within 2 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-5 w-full">
                      <input
                        type="text"
                        required
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-[#2a2928]/20 focus:border-[#2a2928] py-3.5 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/60 text-[16px] font-[450] transition-colors"
                      />

                      <input
                        type="email"
                        required
                        placeholder="Work Email"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-[#2a2928]/20 focus:border-[#2a2928] py-3.5 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/60 text-[16px] font-[450] transition-colors"
                      />

                      <input
                        type="text"
                        placeholder="Company & Approximate Headcount"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-[#2a2928]/20 focus:border-[#2a2928] py-3.5 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/60 text-[16px] font-[450] transition-colors"
                      />

                      <textarea
                        rows={2}
                        placeholder={`Tell us about your operational priorities in ${solution.name}...`}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-0 border-b border-[#2a2928]/20 focus:border-[#2a2928] py-3.5 px-0 outline-none text-[#2a2928] placeholder:text-[#2a2928]/60 text-[16px] font-[450] transition-colors resize-none"
                      />

                      <BrandButton
                        type="submit"
                        text={`Request ${solution.name} Blueprint`}
                        bgClassName="bg-white"
                        className="mt-4 self-start"
                      />
                    </form>
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

const ArrowDownRight = ({ size = 16 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="7" y1="7" x2="17" y2="17" />
    <polyline points="17 7 17 17 7 17" />
  </svg>
);
