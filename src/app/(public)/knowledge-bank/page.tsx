import { Metadata } from 'next';
import { BookOpen, BookText, Compass, MapPin, Search, ArrowRight, TrendingUp, Landmark, ShieldCheck } from 'lucide-react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export const metadata: Metadata = {
    title: 'Knowledge Bank | Jyoti Thakur & Associates',
    description: 'Structured financial clarity. Explore zero-jargon guides on income tax, GST, business structuring, and financial interpretation.',
};

import ExploreSection from './ExploreSection';

export default function KnowledgeBankPage() {
    return (
        <main className="bg-[#F8F9FA] text-[#0B1F3A] font-sans selection:bg-[#C9A227]/20 flex flex-col items-center overflow-hidden">

            {/* SECTION 1: HERO (Gradient matching homepage) */}
            <section
                className="relative w-full pt-[160px] pb-[120px] px-6 text-white overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0B1F3A 0%, #132B50 60%, #0F2B46 100%)',
                }}
            >
                {/* Subtle grid pattern overlay matching homepage */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <div className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
                            <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">Research & Insights</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.1}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight">
                            Structured Financial Clarity.<br />
                            <span className="text-[#C9A227] italic">Simplified.</span>
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.2} className="w-full max-w-3xl">
                        <p className="text-lg md:text-xl text-gray-300 mb-8 font-light leading-relaxed">
                            Financial understanding should not require a finance degree. Whether you are filing your first income tax return, managing GST for your business, or preparing for structured growth — clarity reduces risk and improves decision-making.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.3} className="w-full">
                        <div className="bg-white/5 border border-white/10 rounded-xl p-6 md:p-8 max-w-2xl mx-auto shadow-lg backdrop-blur-sm">
                            <p className="text-lg text-white font-medium mb-3">
                                The Knowledge Bank is built to explain concepts in a practical, structured format.
                            </p>
                            <p className="text-xl font-serif text-[#C9A227]">
                                No jargon. No noise. Only fundamentals that matter.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>

                {/* Decorative Bottom Divider */}
                <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#C9A227]/30 to-transparent" />
            </section>

            {/* SECTION 2: EXPLORE BY TOPIC */}
            <div className="w-full relative z-20 bg-transparent -mt-8">
                <ExploreSection />
            </div>

            {/* SECTION 3: FEATURED STRUCTURED GUIDES (Magazine Style) */}
            <section className="w-full bg-white py-[120px] px-6 border-t border-gray-100 flex flex-col items-center relative">
                {/* Subtle watermark background for depth */}
                <div className="absolute right-0 top-1/4 opacity-[0.02] text-[200px] font-serif pointer-events-none overflow-hidden select-none">
                    GUIDES
                </div>

                <div className="w-full max-w-[1200px] flex flex-col items-center relative z-10">
                    <ScrollAnimation type="fade" direction="up" className="text-center w-full mb-20 flex flex-col items-center">
                        <span className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4">Deep Dives & Manuals</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-[#0B1F3A] mb-6 text-center">Featured Structured Guides</h2>
                        <p className="text-lg text-gray-600 max-w-2xl font-medium leading-relaxed text-center">
                            Some financial decisions require structured understanding — not surface-level explanations. These guides are comprehensive references built to provide clarity before action.
                        </p>
                    </ScrollAnimation>

                    <div className="space-y-12 w-full max-w-5xl mx-auto">

                        {/* Guide 1 */}
                        <ScrollAnimation type="fade" direction="left" delay={0.1}>
                            <div className="bg-[#F8F9FA] rounded-2xl p-0 shadow-sm border border-gray-100 flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300 group overflow-hidden hover:-translate-y-1">
                                <div className="lg:w-2/5 bg-[#0B1F3A] p-10 flex flex-col relative text-white">
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] mb-6 block relative z-10">TAX FUNDAMENTALS</span>
                                    <h4 className="text-3xl font-serif text-white mb-6 relative z-10">Complete Beginner’s Guide to Income Tax Filing</h4>
                                    <div className="mt-auto relative z-10">
                                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90">
                                            <BookText size={14} className="text-[#C9A227]" /> 18–20 Min Read
                                        </div>
                                    </div>
                                    <BookOpen className="absolute -bottom-10 -right-10 text-white/5 rotate-[-15deg] transition-transform duration-500 group-hover:rotate-0" size={200} />
                                </div>
                                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col bg-white">
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        A step-by-step explanation of how income tax works — ideal for first-time filers and individuals seeking clarity beyond basic form submission.
                                    </p>
                                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#C9A227] mb-10">
                                        <h5 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wide mb-4">Inside This Guide:</h5>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700 font-medium">
                                            <li className="flex gap-2 items-start"><span className="text-[#C9A227]">•</span> How income tax slabs apply</li>
                                            <li className="flex gap-2 items-start"><span className="text-[#C9A227]">•</span> Old vs New regime</li>
                                            <li className="flex gap-2 items-start"><span className="text-[#C9A227]">•</span> Basic deductions overview</li>
                                            <li className="flex gap-2 items-start"><span className="text-[#C9A227]">•</span> Common filing mistakes</li>
                                        </ul>
                                    </div>
                                    <Link href="/knowledge-bank/income-tax-filing" className="mt-auto text-[#0B1F3A] font-bold uppercase tracking-wider text-sm flex items-center gap-2 w-fit group/btn hover:text-[#C9A227] transition-colors">
                                        Read Complete Guide
                                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Guide 2 */}
                        <ScrollAnimation type="fade" direction="right" delay={0.2}>
                            <div className="bg-[#F8F9FA] rounded-2xl p-0 shadow-sm border border-gray-100 flex flex-col lg:flex-row hover:shadow-xl transition-all duration-300 group overflow-hidden hover:-translate-y-1">
                                <div className="lg:w-2/5 bg-[#0B1F3A] p-10 flex flex-col relative text-white lg:order-2">
                                    <div className="absolute inset-0 bg-[url('/noise.png')] opacity-10 mix-blend-overlay pointer-events-none" />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-[#C9A227] mb-6 block relative z-10">BUSINESS STRUCTURING</span>
                                    <h4 className="text-3xl font-serif text-white mb-6 relative z-10">Startup Structuring Blueprint</h4>
                                    <div className="mt-auto relative z-10">
                                        <div className="inline-flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full text-xs font-semibold text-white/90">
                                            <BookText size={14} className="text-[#C9A227]" /> 22–25 Min Read
                                        </div>
                                    </div>
                                    <Compass className="absolute -bottom-10 -left-10 text-white/5 rotate-[15deg] transition-transform duration-500 group-hover:-rotate-[5deg]" size={200} />
                                </div>
                                <div className="lg:w-3/5 p-8 md:p-12 flex flex-col bg-white lg:order-1 border-r border-gray-100">
                                    <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                        Before scaling or raising capital, structural clarity is essential. This blueprint outlines how entity choice, tax positioning, and compliance discipline influence long-term growth.
                                    </p>
                                    <div className="bg-gray-50 rounded-xl p-6 border-l-4 border-[#0B1F3A] mb-10">
                                        <h5 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wide mb-4">Inside This Guide:</h5>
                                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-6 text-sm text-gray-700 font-medium">
                                            <li className="flex gap-2 items-start"><span className="text-[#0B1F3A]">•</span> Entity comparison</li>
                                            <li className="flex gap-2 items-start"><span className="text-[#0B1F3A]">•</span> Compliance cost implications</li>
                                            <li className="flex gap-2 items-start"><span className="text-[#0B1F3A]">•</span> Structuring before fundraising</li>
                                            <li className="flex gap-2 items-start"><span className="text-[#0B1F3A]">•</span> Governance readiness</li>
                                        </ul>
                                    </div>
                                    <Link href="/knowledge-bank/startup-structuring" className="mt-auto text-[#0B1F3A] font-bold uppercase tracking-wider text-sm flex items-center gap-2 w-fit group/btn hover:text-[#C9A227] transition-colors">
                                        Explore Strategy Blueprint
                                        <ArrowRight size={16} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Guide 3 & 4 Mini Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Guide 3 */}
                            <ScrollAnimation type="fade" direction="up" delay={0.3}>
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#F8F9FA] rounded-bl-full -z-10 group-hover:bg-[#C9A227]/5 transition-colors"></div>
                                    <ShieldCheck className="text-[#C9A227] mb-6" size={36} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">GST & COMPLIANCE</span>
                                    <h4 className="text-2xl font-serif text-[#0B1F3A] mb-4">GST Compliance Checklist</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                        A structured checklist to reduce compliance stress and build systematic filing discipline. Designed for business owners who want clarity, not confusion.
                                    </p>
                                    <div className="border-t border-gray-100 pt-6 mt-auto">
                                        <Link href="/knowledge-bank/gst-compliance-sme" className="text-[#0B1F3A] font-bold uppercase tracking-wider text-xs flex items-center gap-2 w-fit group/btn hover:text-[#C9A227] transition-colors">
                                            View The Checklist
                                            <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            {/* Guide 4 */}
                            <ScrollAnimation type="fade" direction="up" delay={0.4}>
                                <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col hover:shadow-lg transition-all duration-300 group hover:-translate-y-1 h-full relative overflow-hidden">
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#0B1F3A]/5 rounded-bl-full -z-10 group-hover:bg-[#0B1F3A]/10 transition-colors"></div>
                                    <TrendingUp className="text-[#0B1F3A] mb-6" size={36} />
                                    <span className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2 block">FINANCIAL INTERPRETATION</span>
                                    <h4 className="text-2xl font-serif text-[#0B1F3A] mb-4">Financial Health Review Framework</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
                                        This guide explains how to interpret financial statements and assess operational stability through structured analysis beyond profit numbers.
                                    </p>
                                    <div className="border-t border-gray-100 pt-6 mt-auto">
                                        <Link href="/knowledge-bank/financial-health-review" className="text-[#0B1F3A] font-bold uppercase tracking-wider text-xs flex items-center gap-2 w-fit group/btn hover:text-[#C9A227] transition-colors">
                                            Review Framework
                                            <ArrowRight size={14} className="transform group-hover/btn:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: STAGE-BASED PATHWAYS */}
            <section className="w-full bg-[#0B1F3A] py-[120px] px-6 flex flex-col items-center relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[radial-gradient(circle_at_center,rgba(201,162,39,0.08),transparent_70%)] pointer-events-none" />
                <div className="w-full max-w-6xl flex flex-col items-center relative z-10">
                    <ScrollAnimation type="fade" direction="up" className="text-center w-full mb-20 flex flex-col items-center">
                        <span className="text-xs tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4 border border-[#C9A227]/30 py-2 px-6 rounded-full w-fit mx-auto bg-[#C9A227]/5">Structured Start</span>
                        <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 text-center">Start With Your Current Stage</h2>
                        <p className="text-xl text-gray-300 font-light max-w-2xl leading-relaxed text-center">
                            Clarity improves when learning follows a sequence. Choose your situation and follow a structured pathway designed to build understanding step by step.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-24 w-full">
                        {/* Path 1 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.1} className="h-full">
                            <div className="group h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-[#C9A227] transition-all duration-300 shadow-lg">
                                <div className="bg-[#C9A227]/20 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <MapPin className="text-[#C9A227]" size={28} />
                                </div>
                                <h4 className="text-2xl font-serif text-white mb-4">I Am Filing My First Income Tax Return</h4>
                                <p className="text-gray-300 mb-8 max-w-sm">If you are salaried or earning independently, this path builds foundational clarity before submission.</p>

                                <div className="bg-black/30 rounded-xl p-6 mt-auto">
                                    <h5 className="font-bold text-xs text-[#C9A227] uppercase tracking-wider mb-4">Learning Sequence:</h5>
                                    <ul className="space-y-3 text-sm text-gray-200">
                                        <li className="flex items-start gap-3"><span className="text-[#C9A227] font-serif">1.</span> Understanding how income tax slabs apply</li>
                                        <li className="flex items-start gap-3"><span className="text-[#C9A227] font-serif">2.</span> Comparing old vs new regime</li>
                                        <li className="flex items-start gap-3"><span className="text-[#C9A227] font-serif">3.</span> Preparing documents before filing</li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Link href="/knowledge-bank/income-tax-filing" className="inline-flex items-center text-white font-bold uppercase tracking-wider text-sm hover:text-[#C9A227] transition-colors border-b border-white/20 hover:border-[#C9A227] pb-1 group/btn">
                                        Begin Tax Basics
                                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Path 2 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} className="h-full">
                            <div className="group h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white transition-all duration-300 shadow-lg">
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <Landmark className="text-white" size={28} />
                                </div>
                                <h4 className="text-2xl font-serif text-white mb-4">I Just Started a Business</h4>
                                <p className="text-gray-300 mb-8 max-w-sm">For early-stage entrepreneurs who want compliance discipline from day one.</p>

                                <div className="bg-black/30 rounded-xl p-6 mt-auto">
                                    <h5 className="font-bold text-xs text-white/50 uppercase tracking-wider mb-4">Learning Sequence:</h5>
                                    <ul className="space-y-3 text-sm text-gray-200">
                                        <li className="flex items-start gap-3"><span className="text-white/50 font-serif">1.</span> Choosing the right entity structure</li>
                                        <li className="flex items-start gap-3"><span className="text-white/50 font-serif">2.</span> Understanding GST registration triggers</li>
                                        <li className="flex items-start gap-3"><span className="text-white/50 font-serif">3.</span> Basic bookkeeping discipline</li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Link href="/knowledge-bank/business-foundations" className="inline-flex items-center text-white font-bold uppercase tracking-wider text-sm hover:text-[#C9A227] transition-colors border-b border-white/20 hover:border-[#C9A227] pb-1 group/btn">
                                        Start Business Foundations
                                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Path 3 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} className="h-full">
                            <div className="group h-full flex flex-col bg-[#C9A227] border border-[#C9A227] rounded-3xl p-10 hover:bg-white hover:border-white transition-all duration-300 shadow-lg text-[#0B1F3A]">
                                <div className="bg-[#0B1F3A]/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <Search className="text-[#0B1F3A]" size={28} />
                                </div>
                                <h4 className="text-2xl font-serif text-[#0B1F3A] mb-4">I Want to Understand GST Properly</h4>
                                <p className="text-[#0B1F3A]/80 mb-8 max-w-sm font-medium">Designed for business owners struggling with fragmented GST information.</p>

                                <div className="bg-white/30 rounded-xl p-6 mt-auto shadow-sm">
                                    <h5 className="font-bold text-xs text-[#0B1F3A]/70 uppercase tracking-wider mb-4">Learning Sequence:</h5>
                                    <ul className="space-y-3 text-sm text-[#0B1F3A] font-semibold">
                                        <li className="flex items-start gap-3"><span className="text-[#0B1F3A]/50 font-serif">1.</span> Registration thresholds explained</li>
                                        <li className="flex items-start gap-3"><span className="text-[#0B1F3A]/50 font-serif">2.</span> Input Tax Credit fundamentals</li>
                                        <li className="flex items-start gap-3"><span className="text-[#0B1F3A]/50 font-serif">3.</span> Monthly reconciliation discipline</li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Link href="/knowledge-bank/gst-compliance-sme" className="inline-flex items-center text-[#0B1F3A] font-bold uppercase tracking-wider text-sm hover:text-black transition-colors border-b border-[#0B1F3A]/30 hover:border-[#0B1F3A] pb-1 group/btn">
                                        Explore GST Path
                                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* Path 4 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} className="h-full">
                            <div className="group h-full flex flex-col bg-white/5 border border-white/10 rounded-3xl p-10 hover:bg-white/10 hover:border-white transition-all duration-300 shadow-lg">
                                <div className="bg-white/10 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                                    <TrendingUp className="text-white" size={28} />
                                </div>
                                <h4 className="text-2xl font-serif text-white mb-4">Review Company Financial Health</h4>
                                <p className="text-gray-300 mb-8 max-w-sm">For business owners moving beyond compliance into performance clarity.</p>

                                <div className="bg-black/30 rounded-xl p-6 mt-auto">
                                    <h5 className="font-bold text-xs text-white/50 uppercase tracking-wider mb-4">Learning Sequence:</h5>
                                    <ul className="space-y-3 text-sm text-gray-200">
                                        <li className="flex items-start gap-3"><span className="text-white/50 font-serif">1.</span> Reading the P&L statement</li>
                                        <li className="flex items-start gap-3"><span className="text-white/50 font-serif">2.</span> Understanding profit vs cash flow</li>
                                        <li className="flex items-start gap-3"><span className="text-white/50 font-serif">3.</span> Evaluating cost structure</li>
                                    </ul>
                                </div>

                                <div className="mt-8">
                                    <Link href="/knowledge-bank/financial-health-review" className="inline-flex items-center text-white font-bold uppercase tracking-wider text-sm hover:text-[#C9A227] transition-colors border-b border-white/20 hover:border-[#C9A227] pb-1 group/btn">
                                        Review Financial Health
                                        <ArrowRight size={16} className="ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Closing Bridge */}
                    <ScrollAnimation type="fade" direction="up" delay={0.5} className="w-full flex flex-col items-center">
                        <div className="text-center w-full max-w-2xl mt-8">
                            <p className="text-xl font-serif text-white mb-6">Not sure which path fits your situation?</p>
                            <Link href="/consultation" className="inline-flex items-center px-8 py-4 bg-white text-[#0B1F3A] rounded shadow-lg font-bold hover:bg-[#C9A227] hover:text-white transition-colors duration-300 group">
                                Schedule a Structured Discussion
                                <ArrowRight className="ml-2 h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

        </main>
    )
}
