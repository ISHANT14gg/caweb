import React from 'react';
import Link from 'next/link';
import {
    ArrowRight,
    FileCheck2,
    Building2,
    LineChart,
    Rocket,
    CheckCircle2,
    ChevronRight,
    Users,
    Briefcase,
    Lightbulb
} from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Financial Services & Structuring | Jyoti Thakur & Associates',
    description: 'Expert financial compliance, business structuring, and performance advisory designed around framework and stability, not just task completion.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#C9A227]/20 overflow-hidden">

            {/* SECTION 1 — HERO (Gradient matching homepage) */}
            <section
                className="relative pt-[120px] md:pt-[160px] pb-20 md:pb-[120px] px-6 w-full text-white overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0B1F3A 0%, #132B50 60%, #0F2B46 100%)',
                }}
            >
                {/* Subtle grid pattern overlay matching homepage */}
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                {/* Soft ambient glows for a more human touch */}
                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <div className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse"></span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#E2E8F0] font-medium">Compliance. Advisory. Continuity.</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.15} duration={0.8}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 md:mb-8 max-w-4xl leading-tight">
                            Services Designed Around <span className="text-[#C9A227] italic">Structure</span>, Not Tasks.
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="max-w-2xl text-base md:text-xl text-gray-300 space-y-6 leading-relaxed mb-12 md:mb-16 font-light">
                        <p>Financial services are often presented as isolated tasks — tax filing, GST submission, company registration.</p>
                        <p className="text-white font-medium text-xl md:text-2xl font-serif py-2">We approach them differently.</p>
                        <p>Every service we offer is built around a structured framework:</p>

                        <div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 max-w-lg mx-auto my-8 text-left backdrop-blur-sm shadow-xl">
                            <ul className="space-y-4 md:space-y-5 text-gray-200 text-sm md:text-base">
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 md:mr-4 shrink-0" size={18} /> Understand the current position</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 md:mr-4 shrink-0" size={18} /> Identify risk exposure</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 md:mr-4 shrink-0" size={18} /> Implement discipline</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 md:mr-4 shrink-0" size={18} /> Align financial systems with long-term objectives</li>
                            </ul>
                        </div>

                        <p className="py-2">
                            Whether the requirement is routine compliance or strategic advisory, the foundation remains the same — <span className="font-serif text-xl md:text-2xl text-white">structure before scale.</span>
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8} className="w-full">
                        <div className="pt-10 md:pt-12 border-t border-white/5 max-w-2xl mx-auto">
                            <p className="text-xl md:text-2xl font-serif text-white/90 leading-relaxed font-light">
                                Execution without architecture creates instability.<br />
                                <span className="text-[#C9A227] italic">Our services are designed to prevent that.</span>
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 2 — CORE SERVICE ARCHITECTURE (Clean, Minimal Cards) */}
            < section className="bg-slate-50 py-20 md:py-[120px] px-6 w-full relative" >
                <div className="max-w-[1200px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-12 md:mb-16 md:text-center max-w-3xl mx-auto">
                        <span className="text-xs md:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4">
                            Four Pillars. One Structured System.
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3A] leading-tight mb-4">
                            Our Core Financial Service Framework
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 mb-16 md:mb-20">
                        {/* PILLAR 1: Compliance */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 h-full flex flex-col group relative overflow-hidden">
                                { /* minimal top accent line instead of heavy border */}
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1F3A]/20 via-[#0B1F3A] to-[#0B1F3A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="bg-slate-50 p-4 rounded-full text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-white transition-all duration-300">
                                        <FileCheck2 size={26} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-semibold px-3 py-1 bg-slate-50 rounded-full">Pillar 1</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Compliance & Regulatory Management</h3>
                                <p className="text-base md:text-lg text-slate-600 mb-8 font-light leading-relaxed border-b border-slate-100 pb-8">
                                    Compliance is the financial foundation. We ensure it remains stable, timely, and defensible.
                                </p>

                                <div className="flex-grow">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#0B1F3A] font-bold mb-5">Scope Includes:</p>
                                    <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Income Tax Return filing (Individuals & Businesses)</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> GST registration, filing & reconciliation</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> TDS compliance & reporting</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> ROC / MCA compliance (where applicable)</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Compliance calendar integration</li>
                                    </ul>
                                </div>

                                <div className="mt-10 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                                    <p className="text-xs text-[#0B1F3A] font-bold uppercase tracking-wider mb-2">Structured Approach</p>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">Every compliance engagement includes deadline mapping, documentation review, and error-prevention checks — not just submission.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* PILLAR 2: Structuring */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 h-full flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="bg-slate-50 p-4 rounded-full text-[#0B1F3A] group-hover:bg-[#C9A227] group-hover:text-white transition-all duration-300">
                                        <Building2 size={26} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-semibold px-3 py-1 bg-slate-50 rounded-full">Pillar 2</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Business Structuring & Tax Alignment</h3>
                                <p className="text-base md:text-lg text-slate-600 mb-8 font-light leading-relaxed border-b border-slate-100 pb-8">
                                    Financial structure influences risk, tax exposure, and scalability.
                                </p>

                                <div className="flex-grow">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#0B1F3A] font-bold mb-5">Scope Includes:</p>
                                    <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Entity selection advisory (Proprietorship, LLP, Pvt Ltd etc.)</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Tax positioning review</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Business restructuring support</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Capital structure alignment</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Interplay between personal & business tax planning</li>
                                    </ul>
                                </div>

                                <div className="mt-10 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                                    <p className="text-xs text-[#0B1F3A] font-bold uppercase tracking-wider mb-2">Structured Approach</p>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">We evaluate implications before execution — ensuring structure supports future growth, not just current convenience.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* PILLAR 3: Advisory */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 h-full flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="bg-slate-50 p-4 rounded-full text-[#0B1F3A] group-hover:bg-[#C9A227] group-hover:text-white transition-all duration-300">
                                        <LineChart size={26} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-semibold px-3 py-1 bg-slate-50 rounded-full">Pillar 3</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Financial Review & Performance Advisory</h3>
                                <p className="text-base md:text-lg text-slate-600 mb-8 font-light leading-relaxed border-b border-slate-100 pb-8">
                                    Numbers without interpretation limit decision-making.
                                </p>

                                <div className="flex-grow">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#0B1F3A] font-bold mb-5">Scope Includes:</p>
                                    <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Profitability analysis</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Cash flow review & discipline planning</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Cost structure evaluation</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Ratio-level financial health assessment</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#0B1F3A]/60 mr-3 shrink-0 mt-0.5" size={16} /> Periodic advisory reviews</li>
                                    </ul>
                                </div>

                                <div className="mt-10 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                                    <p className="text-xs text-[#0B1F3A] font-bold uppercase tracking-wider mb-2">Structured Approach</p>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">This is not bookkeeping. This is structured financial interpretation for stability and measured growth.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* PILLAR 4: Startup Layout */}
                        <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 transition-all hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-1 h-full flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1F3A]/20 via-[#0B1F3A] to-[#0B1F3A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="flex items-center justify-between mb-8">
                                    <div className="bg-slate-50 p-4 rounded-full text-[#0B1F3A] group-hover:bg-[#0B1F3A] group-hover:text-white transition-all duration-300">
                                        <Rocket size={26} strokeWidth={1.5} />
                                    </div>
                                    <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-400 font-semibold px-3 py-1 bg-slate-50 rounded-full">Pillar 4</span>
                                </div>

                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Startup & Growth Strategy Support</h3>
                                <p className="text-base md:text-lg text-slate-600 mb-8 font-light leading-relaxed border-b border-slate-100 pb-8">
                                    Scaling requires preparation beyond pitch decks.
                                </p>

                                <div className="flex-grow">
                                    <p className="text-[10px] md:text-xs uppercase tracking-widest text-[#0B1F3A] font-bold mb-5">Scope Includes:</p>
                                    <ul className="space-y-4 text-slate-600 text-sm md:text-base">
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Pre-fundraising financial structuring</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Investor readiness preparation</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Financial model review inputs</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Compliance planning for growth stage</li>
                                        <li className="flex items-start"><ChevronRight className="text-[#C9A227] mr-3 shrink-0 mt-0.5" size={16} /> Governance & documentation discipline</li>
                                    </ul>
                                </div>

                                <div className="mt-10 bg-slate-50/50 p-6 rounded-xl border border-slate-100">
                                    <p className="text-xs text-[#0B1F3A] font-bold uppercase tracking-wider mb-2">Structured Approach</p>
                                    <p className="text-sm text-slate-600 leading-relaxed font-light">Growth without structural clarity increases risk exposure. We align systems before expansion.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation type="fade" direction="up" delay={0.6} duration={0.8} className="text-center pt-8 border-t border-slate-200/60 max-w-2xl mx-auto">
                        <p className="text-xl md:text-2xl font-serif text-[#0B1F3A] leading-relaxed">
                            Each service can function independently.<br />
                            <span className="text-[#C9A227] italic font-light">Together, they create financial continuity.</span>
                        </p>
                    </ScrollAnimation>
                </div>
            </section >

            {/* SECTION 3 — SERVICE PATHWAYS (Human Touch/Friendly Approach) */}
            < section className="bg-white py-20 md:py-[120px] px-6 w-full border-t border-slate-100 relative" >
                <div className="max-w-[1200px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="text-center mb-16 md:mb-20">
                        <span className="text-xs md:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4">
                            Structured Solutions Based on Your Current Stage.
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3A] mb-4">
                            Choose Your Financial Starting Point.
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-20">
                        {/* PATHWAY 1: Individuals */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="h-full">
                            <Link href="/consultation?type=individual" className="block h-full group">
                                <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#0B1F3A]/20 hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F9FA] rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="bg-[#0B1F3A]/5 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-[#0B1F3A]">
                                            <Users size={24} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-2xl font-serif text-[#0B1F3A] mb-3">Individuals & Professionals</h3>
                                        <p className="text-slate-500 mb-8 leading-relaxed font-light flex-grow">
                                            For salaried individuals, consultants, and independent professionals seeking clarity and compliance discipline.
                                        </p>

                                        <div className="bg-slate-50 p-5 rounded-xl mb-8 border border-slate-100 mt-auto">
                                            <p className="text-[10px] uppercase tracking-widest text-[#0B1F3A] font-bold mb-3">What We Focus On:</p>
                                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                                Reducing last-minute stress, improving tax visibility, and aligning personal financial decisions with regulatory discipline.
                                            </p>
                                        </div>

                                        <div className="pt-5 flex items-center justify-between text-[#0B1F3A] font-medium text-sm md:text-base group-hover:text-[#C9A227] transition-colors mt-2 border-t border-slate-100">
                                            Explore Individual Services
                                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transform transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* PATHWAY 2: SMEs */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="h-full">
                            <Link href="/consultation?type=sme" className="block h-full group">
                                <div className="bg-[#0A1628] text-white border border-[#0A1628] rounded-2xl p-8 h-full flex flex-col transition-all duration-300 shadow-md hover:shadow-[0_20px_40px_rgb(11,31,58,0.2)] hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="bg-white/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-white">
                                            <Briefcase size={24} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-2xl font-serif text-white mb-3">Small & Medium Businesses</h3>
                                        <p className="text-white/70 mb-8 leading-relaxed font-light flex-grow">
                                            For businesses seeking operational stability and financial clarity.
                                        </p>

                                        <div className="bg-white/5 p-5 rounded-xl mb-8 border border-white/10 backdrop-blur-sm mt-auto">
                                            <p className="text-[10px] uppercase tracking-widest text-white font-bold mb-3">What We Focus On:</p>
                                            <p className="text-white/80 text-sm leading-relaxed font-light">
                                                Building predictable financial systems that support steady growth without regulatory disruption.
                                            </p>
                                        </div>

                                        <div className="pt-5 flex items-center justify-between text-white font-medium text-sm md:text-base group-hover:text-[#C9A227] transition-colors mt-2 border-t border-white/10">
                                            Explore SME Solutions
                                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transform transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* PATHWAY 3: Startups */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8} className="h-full">
                            <Link href="/consultation?type=startup" className="block h-full group">
                                <div className="bg-white border border-slate-200 rounded-2xl p-8 h-full flex flex-col transition-all duration-300 shadow-sm hover:shadow-[0_20px_40px_rgb(0,0,0,0.06)] hover:border-[#C9A227]/40 hover:-translate-y-1 relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#C9A227]/5 rounded-bl-full -mr-10 -mt-10 transition-transform duration-500 group-hover:scale-110 z-0" />

                                    <div className="relative z-10 flex flex-col h-full">
                                        <div className="bg-[#C9A227]/10 w-14 h-14 rounded-xl flex items-center justify-center mb-6 text-[#C9A227]">
                                            <Lightbulb size={24} strokeWidth={1.5} />
                                        </div>

                                        <h3 className="text-2xl font-serif text-[#0B1F3A] mb-3">Startups & Growth Ventures</h3>
                                        <p className="text-slate-500 mb-8 leading-relaxed font-light flex-grow">
                                            For founders preparing to scale responsibly.
                                        </p>

                                        <div className="bg-[#C9A227]/5 p-5 rounded-xl mb-8 border border-[#C9A227]/10 mt-auto">
                                            <p className="text-[10px] uppercase tracking-widest text-[#0B1F3A] font-bold mb-3">What We Focus On:</p>
                                            <p className="text-slate-600 text-sm leading-relaxed font-light">
                                                Ensuring structure precedes scale — reducing friction during investor conversations and expansion phases.
                                            </p>
                                        </div>

                                        <div className="pt-5 flex items-center justify-between text-[#0B1F3A] font-medium text-sm md:text-base group-hover:text-[#C9A227] transition-colors mt-2 border-t border-slate-100">
                                            Explore Startup Advisory
                                            <ArrowRight className="h-4 w-4 md:h-5 md:w-5 transform transition-transform group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation type="fade" direction="up" delay={0.6} duration={0.8} className="text-center">
                        <p className="text-base md:text-lg text-slate-500 mb-3 md:mb-4">Not sure where you fit?</p>
                        <Link href="/consultation" className="inline-flex items-center text-[#0B1F3A] font-medium hover:text-[#C9A227] transition-colors border-b border-[#0B1F3A]/20 hover:border-[#C9A227] pb-1">
                            Start with a structured diagnostic conversation.
                        </Link>
                    </ScrollAnimation>
                </div>
            </section >

            {/* SECTION 4 — CONSULTATION CTA (Softer, clean) */}
            < section className="bg-slate-50 py-20 md:py-[140px] px-6 w-full" >
                <div className="max-w-[1000px] mx-auto text-center border border-slate-200/60 bg-white p-10 md:p-20 rounded-[2rem] shadow-xl relative overflow-hidden">
                    {/* Background accent */}
                    <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[80px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[80px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="relative z-10">
                        <div className="inline-block bg-[#0B1F3A]/5 text-[#0B1F3A] font-bold uppercase tracking-widest text-xs px-4 py-1.5 rounded-full mb-8">
                            Next Steps
                        </div>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif text-[#0B1F3A] mb-6 leading-tight">
                            Start With Clarity.
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-[#C9A227] uppercase font-bold mb-12 md:mb-16">
                            A Structured Conversation Before Any Commitment.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="max-w-2xl mx-auto mb-12 md:mb-16 relative z-10">
                        <p className="text-lg md:text-xl font-light text-slate-600 leading-relaxed mb-10">
                            Before engaging in compliance or advisory,<br />
                            we begin with structured understanding.
                        </p>

                        <div className="text-left bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 shadow-sm mb-10 max-w-xl mx-auto flex flex-col items-center">
                            <p className="text-slate-400 mb-5 font-bold tracking-widest uppercase text-xs w-full">A focused discussion helps determine:</p>
                            <ul className="space-y-4 text-[#0B1F3A] text-sm md:text-base w-full">
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Your current financial stage</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Compliance exposure</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Structural gaps</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Immediate priorities</li>
                                <li className="flex items-center"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Suitable engagement model</li>
                            </ul>
                        </div>

                        <p className="text-base md:text-lg text-slate-500 font-medium">
                            No generic calls. No vague discussions.<br />
                            <span className="text-[#0B1F3A] font-serif text-xl inline-block mt-2">Just clarity on next steps.</span>
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8} className="flex flex-col items-center justify-center space-y-6 relative z-10">
                        {/* Primary CTA */}
                        <Link href="/consultation" className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-[#0B1F3A] text-white font-medium text-base md:text-lg leading-none transition-all hover:bg-[#C9A227] hover:-translate-y-1 rounded-xl shadow-lg hover:shadow-xl">
                            Schedule a Structured Consultation
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>

                        {/* Secondary Line */}
                        <div className="text-center pt-4">
                            <p className="text-slate-500 text-sm md:text-base mb-2">Prefer to outline your requirement first?</p>
                            <Link href="/contact" className="text-[#0B1F3A] text-sm md:text-base font-medium border-b border-[#0B1F3A]/30 hover:text-[#C9A227] hover:border-[#C9A227] transition-colors pb-0.5">
                                Submit a brief service request →
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section >
        </div >
    );
}
