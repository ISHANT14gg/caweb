import React from 'react';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Financial Services & Structuring | Jyoti Thakur & Associates',
    description: 'Expert financial compliance, business structuring, and performance advisory designed around framework and stability, not just task completion.',
};

export default function ServicesPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-gray-200 overflow-hidden">
            {/* 
              Global Wrapper 
              Background: White 
              Padding: 120px top & bottom (per section)
              Max Width: 1000px 
              Centered content 
              Calm typography 
              No dramatic imagery
            */}

            {/* SECTION 1 — Structured Financial Solutions */}
            <section className="bg-white py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl leading-tight">
                            Services Designed Around Structure, Not Tasks.
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.15} duration={0.8}>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold mb-16">
                            Compliance. Advisory. Continuity.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="max-w-3xl text-lg md:text-xl text-gray-600 space-y-6 leading-relaxed mb-16">
                        <p>Financial services are often presented as isolated tasks — tax filing, GST submission, company registration.</p>
                        <p className="font-medium text-gray-800 py-2">We approach them differently.</p>
                        <p>Every service we offer is built around a structured framework:</p>

                        <ul className="text-left max-w-xl mx-auto space-y-3 py-6 text-gray-700">
                            <li className="flex items-start"><span className="text-gray-400 mr-4">•</span> Understand the current position</li>
                            <li className="flex items-start"><span className="text-gray-400 mr-4">•</span> Identify risk exposure</li>
                            <li className="flex items-start"><span className="text-gray-400 mr-4">•</span> Implement discipline</li>
                            <li className="flex items-start"><span className="text-gray-400 mr-4">•</span> Align financial systems with long-term objectives</li>
                        </ul>

                        <p className="py-2">
                            Whether the requirement is routine compliance or strategic advisory, the foundation remains the same — <span className="font-medium text-gray-900">structure before scale.</span>
                        </p>
                    </ScrollAnimation>

                    {/* Closing Line */}
                    <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8} className="w-full">
                        <div className="pt-8 border-t border-gray-100 max-w-3xl mx-auto">
                            <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                                Execution without architecture creates instability.<br />
                                <span className="text-gray-500">Our services are designed to prevent that.</span>
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 2 — CORE SERVICE ARCHITECTURE */}
            <section className="bg-[#F8F9FB] py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-16 text-center">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                            Our Core Financial Service Framework
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold">
                            Four Pillars. One Structured System.
                        </p>
                    </ScrollAnimation>

                    {/* 2x2 Structured Grid (Desktop) / Vertical Stack (Mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mb-20 overflow-visible">
                        {/* PILLAR 1: Compliance */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8}>
                            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm h-full flex flex-col group transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Pillar 1</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-4 transition-colors group-hover:border-gray-300">Compliance & Regulatory Management</h3>
                                <div className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                                    <p>Compliance is the financial foundation. We ensure it remains stable, timely, and defensible.</p>
                                </div>
                                <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Scope Includes:</p>
                                <ul className="space-y-3 text-gray-600 text-base mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Income Tax Return filing (Individuals & Businesses)</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> GST registration, filing & reconciliation</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> TDS compliance & reporting</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> ROC / MCA compliance (where applicable)</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Compliance calendar integration</li>
                                </ul>
                                <div className="bg-gray-50 p-4 border-l-4 border-gray-900 mt-auto">
                                    <p className="text-sm text-gray-900 font-medium mb-1">Structured Approach:</p>
                                    <p className="text-sm text-gray-600">Every compliance engagement includes deadline mapping, documentation review, and error-prevention checks — not just submission.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* PILLAR 2: Structuring */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8}>
                            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm h-full flex flex-col group transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Pillar 2</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-4 transition-colors group-hover:border-gray-300">Business Structuring & Tax Alignment</h3>
                                <div className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                                    <p>Financial structure influences risk, tax exposure, and scalability.</p>
                                </div>
                                <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Scope Includes:</p>
                                <ul className="space-y-3 text-gray-600 text-base mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Entity selection advisory (Proprietorship, LLP, Pvt Ltd etc.)</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Tax positioning review</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Business restructuring support</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Capital structure alignment</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Interplay between personal & business tax planning</li>
                                </ul>
                                <div className="bg-gray-50 p-4 border-l-4 border-gray-900 mt-auto">
                                    <p className="text-sm text-gray-900 font-medium mb-1">Structured Approach:</p>
                                    <p className="text-sm text-gray-600">We evaluate implications before execution — ensuring structure supports future growth, not just current convenience.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* PILLAR 3: Review & Advisory */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8}>
                            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm h-full flex flex-col group transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Pillar 3</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-4 transition-colors group-hover:border-gray-300">Financial Review & Performance Advisory</h3>
                                <div className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                                    <p>Numbers without interpretation limit decision-making.</p>
                                </div>
                                <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Scope Includes:</p>
                                <ul className="space-y-3 text-gray-600 text-base mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Profitability analysis</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Cash flow review & discipline planning</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Cost structure evaluation</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Ratio-level financial health assessment</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Periodic advisory reviews</li>
                                </ul>
                                <div className="bg-gray-50 p-4 border-l-4 border-gray-900 mt-auto">
                                    <p className="text-sm text-gray-900 font-medium mb-1">Structured Approach:</p>
                                    <p className="text-sm text-gray-600">This is not bookkeeping. This is structured financial interpretation for stability and measured growth.</p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* PILLAR 4: Startup Growth */}
                        <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8}>
                            <div className="bg-white p-8 md:p-10 border border-gray-100 shadow-sm rounded-sm h-full flex flex-col group transition-all hover:shadow-md hover:-translate-y-1">
                                <div className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-4">Pillar 4</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-4 border-b border-gray-100 pb-4 transition-colors group-hover:border-gray-300">Startup & Growth Strategy Support</h3>
                                <div className="text-lg text-gray-600 mb-6 leading-relaxed font-medium">
                                    <p>Scaling requires preparation beyond pitch decks.</p>
                                </div>
                                <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Scope Includes:</p>
                                <ul className="space-y-3 text-gray-600 text-base mb-8 flex-grow">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Pre-fundraising financial structuring</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Investor readiness preparation</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Financial model review inputs</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Compliance planning for growth stage</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Governance & documentation discipline</li>
                                </ul>
                                <div className="bg-gray-50 p-4 border-l-4 border-gray-900 mt-auto">
                                    <p className="text-sm text-gray-900 font-medium mb-1">Structured Approach:</p>
                                    <p className="text-sm text-gray-600">Growth without structural clarity increases risk exposure. We align systems before expansion.</p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Closing Line (Below Grid) */}
                    <ScrollAnimation type="fade" direction="up" delay={0.6} duration={0.8} className="text-center pt-8 border-t border-gray-200/60 max-w-3xl mx-auto">
                        <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                            Each service can function independently.<br />
                            <span className="text-gray-500">Together, they create financial continuity.</span>
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 3 — SERVICE PATHWAYS */}
            <section className="bg-white py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                            Choose Your Financial Starting Point.
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold">
                            Structured Solutions Based on Your Current Stage.
                        </p>
                    </ScrollAnimation>

                    {/* 3 Structured Cards (Horizontal on Desktop, Stack on Mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-10 mb-20">
                        {/* PATHWAY 1: Individuals */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8}>
                            <Link href="/contact" className="block h-full group">
                                <div className="border border-gray-200 p-8 h-full flex flex-col transition-all duration-300 hover:border-gray-900 hover:shadow-lg">
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">Individuals & Professionals</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        For salaried individuals, consultants, and independent professionals seeking clarity and compliance discipline.
                                    </p>

                                    <div className="mb-8 flex-grow">
                                        <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Typical Needs:</p>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li>• Income tax filing</li>
                                            <li>• Advance tax planning</li>
                                            <li>• Capital gains reporting</li>
                                            <li>• GST applicability clarity (where relevant)</li>
                                            <li>• Tax optimisation within legal framework</li>
                                        </ul>
                                    </div>

                                    <div className="mb-8 pt-6 border-t border-gray-100">
                                        <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-2">What We Focus On:</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Reducing last-minute stress, improving tax visibility, and aligning personal financial decisions with regulatory discipline.
                                        </p>
                                    </div>

                                    <div className="mt-auto border-t border-gray-900 pt-4 flex items-center justify-between text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                                        Explore Individual Services
                                        <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* PATHWAY 2: SMEs */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8}>
                            <Link href="/contact" className="block h-full group">
                                <div className="border border-gray-200 p-8 h-full flex flex-col transition-all duration-300 hover:border-gray-900 hover:shadow-lg">
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">Small & Medium Businesses (SMEs)</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        For businesses seeking operational stability and financial clarity.
                                    </p>

                                    <div className="mb-8 flex-grow">
                                        <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Typical Needs:</p>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li>• GST & TDS compliance</li>
                                            <li>• Working capital visibility</li>
                                            <li>• Cost structure optimisation</li>
                                            <li>• Periodic financial review</li>
                                            <li>• Tax alignment & risk mapping</li>
                                        </ul>
                                    </div>

                                    <div className="mb-8 pt-6 border-t border-gray-100">
                                        <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-2">What We Focus On:</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Building predictable financial systems that support steady growth without regulatory disruption.
                                        </p>
                                    </div>

                                    <div className="mt-auto border-t border-gray-900 pt-4 flex items-center justify-between text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                                        Explore SME Solutions
                                        <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>

                        {/* PATHWAY 3: Startups */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8}>
                            <Link href="/contact" className="block h-full group">
                                <div className="border border-gray-200 p-8 h-full flex flex-col transition-all duration-300 hover:border-gray-900 hover:shadow-lg">
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">Startups & Growth Ventures</h3>
                                    <p className="text-gray-600 mb-8 leading-relaxed">
                                        For founders preparing to scale responsibly.
                                    </p>

                                    <div className="mb-8 flex-grow">
                                        <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-3">Typical Needs:</p>
                                        <ul className="space-y-2 text-gray-600 text-sm">
                                            <li>• Entity structuring decisions</li>
                                            <li>• Pre-fundraising compliance readiness</li>
                                            <li>• Financial model review inputs</li>
                                            <li>• Governance discipline</li>
                                            <li>• Tax positioning clarity</li>
                                        </ul>
                                    </div>

                                    <div className="mb-8 pt-6 border-t border-gray-100">
                                        <p className="text-sm uppercase tracking-wide text-gray-900 font-bold mb-2">What We Focus On:</p>
                                        <p className="text-gray-600 text-sm leading-relaxed">
                                            Ensuring structure precedes scale — reducing friction during investor conversations and expansion phases.
                                        </p>
                                    </div>

                                    <div className="mt-auto border-t border-gray-900 pt-4 flex items-center justify-between text-gray-900 font-medium group-hover:text-blue-600 transition-colors">
                                        Explore Startup Advisory
                                        <ArrowRight className="h-5 w-5 transform transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </ScrollAnimation>
                    </div>

                    {/* Closing Micro Line */}
                    <ScrollAnimation type="fade" direction="up" delay={0.6} duration={0.8} className="text-center">
                        <p className="text-lg text-gray-600 mb-2">Not sure where you fit?</p>
                        <Link href="/contact" className="text-gray-900 font-medium border-b border-gray-900 pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                            Start with a structured diagnostic conversation.
                        </Link>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 4 — CONSULTATION CTA */}
            <section className="bg-[#1F2A37] text-white py-[140px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto text-center">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight mb-6">
                            Start With Clarity.
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-400 uppercase font-semibold mb-16">
                            A Structured Conversation Before Any Commitment.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="max-w-2xl mx-auto mb-16">
                        <p className="text-xl md:text-2xl font-light text-gray-200 leading-relaxed mb-10">
                            Before engaging in compliance or advisory,<br />
                            we begin with structured understanding.
                        </p>

                        <div className="text-left bg-white/5 border border-white/10 p-8 rounded-sm mb-10 max-w-xl mx-auto">
                            <p className="text-gray-300 mb-4 font-medium tracking-wide uppercase text-sm">A focused discussion helps determine:</p>
                            <ul className="space-y-3 text-lg text-gray-200">
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-4"></span>Your current financial stage</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-4"></span>Compliance exposure</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-4"></span>Structural gaps</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-4"></span>Immediate priorities</li>
                                <li className="flex items-center"><span className="w-1.5 h-1.5 bg-gray-400 rounded-full mr-4"></span>Suitable engagement model</li>
                            </ul>
                        </div>

                        <p className="text-lg text-gray-300 font-medium tracking-wide">
                            No generic calls. No vague discussions.<br />
                            <span className="text-white">Just clarity on next steps.</span>
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8} className="flex flex-col items-center justify-center space-y-8">
                        {/* Primary CTA */}
                        <Link href="/contact" className="inline-flex items-center justify-center px-10 py-5 bg-gray-100 text-[#1F2A37] font-medium text-lg leading-none transition-all hover:bg-white hover:scale-105 rounded-sm shadow-xl">
                            Schedule a Structured Consultation
                            <ArrowRight className="ml-3 h-5 w-5" />
                        </Link>

                        {/* Secondary Line */}
                        <div className="text-center pt-8">
                            <p className="text-gray-400 mb-2">Prefer to outline your requirement first?</p>
                            <Link href="/contact" className="text-gray-200 border-b border-gray-400 pb-1 hover:text-white hover:border-white transition-colors">
                                Submit a brief service request →
                            </Link>
                        </div>

                        {/* Optional Micro Trust Line */}
                        <p className="text-xs tracking-widest uppercase text-gray-500 font-bold mt-12">
                            Response within 24–48 working hours. <span className="mx-2 opacity-50">|</span> Confidential. Professional. Structured.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
