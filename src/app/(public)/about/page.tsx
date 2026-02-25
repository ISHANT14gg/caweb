import React from 'react';
import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    ShieldCheck,
    TrendingUp,
    GraduationCap,
    Layers,
    Scale,
    Eye,
    CheckCircle2,
    Users,
    Scale3d,
    Banknote
} from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Trust & Financial Architecture | Jyoti Thakur & Associates',
    description: 'We build defensible financial structures. Learn about our philosophy, our partners, and why execution without architecture creates instability.',
};

export default function AboutPage() {
    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-[#C9A227]/20 overflow-hidden">

            {/* SECTION 1 - HERO (Gradient matching homepage, responsive padding) */}
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

                <div className="max-w-[1200px] mx-auto flex flex-col items-center text-center relative z-10">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <div className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-5 py-2 mb-8 backdrop-blur-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] animate-pulse"></span>
                            <span className="text-[10px] md:text-xs uppercase tracking-widest text-slate-300 font-medium">Clarity. Discipline. Continuity.</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.15} duration={0.8}>
                        <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-light text-white mb-6 md:mb-8 max-w-5xl leading-tight">
                            Financial Structure Is a <span className="text-[#C9A227] italic">Responsibility</span>, Not a Formality.
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="max-w-2xl md:max-w-3xl text-base md:text-xl text-slate-300 space-y-6 leading-relaxed mb-12 md:mb-16 font-light">
                        <p>Financial systems quietly influence every decision a business or individual makes.</p>
                        <p>Yet, they are often treated as periodic tasks — filed, submitted, forgotten.</p>
                        <p className="text-white font-medium">We approach finance differently.</p>

                        <div className="py-8 md:py-10 border-y border-white/5 my-8">
                            <p className="font-serif text-xl md:text-3xl text-white/90 leading-relaxed font-light">
                                For us, compliance is not an event.<br />
                                Advisory is not a reaction.<br />
                                And growth is not accidental.
                            </p>
                        </div>

                        <p>
                            Financial clarity is built through structure.<br />
                            Structure is built through discipline.<br />
                            And discipline requires intent.
                        </p>
                        <p className="py-4">
                            This practice exists to bring that intent into financial decision-making —<br />
                            for individuals seeking stability,<br />
                            for startups preparing to scale responsibly,<br />
                            and for businesses that want measured progress instead of unpredictable expansion.
                        </p>
                        <p className="font-serif text-xl md:text-2xl text-[#C9A227]">
                            We do not merely complete filings.<br />
                            We design financial order.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8}>
                        <p className="text-[10px] md:text-xs tracking-widest text-[#C9A227]/80 uppercase font-semibold">
                            Process-driven. Risk-aware. Long-term oriented.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 2 - WHY THIS PRACTICE WAS BUILT (Softer Narrative Section) */}
            <section className="bg-slate-50 py-20 md:py-[120px] px-6 w-full relative">
                <div className="max-w-[1200px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-12 md:mb-16 md:text-center">
                        <span className="text-xs md:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4">
                            Observation. Frustration. Intentional Design.
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3A] mb-4">
                            Why This Practice Was Built
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                        {/* LEFT COLUMN — Narrative */}
                        <ScrollAnimation type="fade" direction="left" delay={0.2} duration={0.8} className="text-base md:text-lg text-slate-600 space-y-6 leading-relaxed bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-[0.03] pointer-events-none">
                                <Eye size={120} />
                            </div>

                            <p className="relative z-10 font-medium text-[#0B1F3A] text-lg md:text-xl">Over time, a pattern became visible.</p>
                            <p className="relative z-10 font-light">
                                Compliance was being treated as a checklist.<br />
                                Advisory was reactive.<br />
                                Financial clarity was rare.
                            </p>
                            <p className="relative z-10 font-light">
                                Businesses scaled revenue without strengthening structure.<br />
                                Individuals filed returns without understanding implications.<br />
                                Startups prepared pitches without preparing financial systems.
                            </p>
                            <div className="bg-slate-50 p-6 md:p-8 rounded-2xl border border-slate-100 my-8 relative z-10 flex items-center shadow-sm">
                                <div className="w-1 h-12 bg-[#C9A227] rounded-full mr-6 shrink-0"></div>
                                <p className="font-serif italic text-lg md:text-xl text-[#0B1F3A] leading-relaxed">
                                    The gap was not technical skill.<br />
                                    The gap was structured thinking.
                                </p>
                            </div>
                            <p className="text-[#0B1F3A] font-medium pt-2 relative z-10">
                                This practice was built to close that gap.
                            </p>
                            <p className="relative z-10 font-light">
                                Not by adding complexity —<br />
                                but by introducing discipline, transparency, and measurable frameworks into financial decision-making.
                            </p>
                            <p className="pt-4 relative z-10 text-lg md:text-xl font-light">
                                The objective was simple:<br />
                                <span className="text-[#0B1F3A] font-serif font-medium block mt-2">Build systems that outlast deadlines.</span>
                            </p>
                        </ScrollAnimation>

                        {/* RIGHT COLUMN — Structured Insight Points */}
                        <ScrollAnimation type="fade" direction="right" delay={0.3} duration={0.8}>
                            <h3 className="text-[10px] md:text-xs font-bold text-slate-400 uppercase tracking-widest mb-8 md:mb-10 text-center lg:text-left">What Needed To Change</h3>
                            <div className="space-y-4 md:space-y-5">
                                {[
                                    { text: "Filing had to become integrated into planning", icon: <Layers className="text-[#C9A227]" size={22} /> },
                                    { text: "Advisory had to move from reactive to anticipatory", icon: <TrendingUp className="text-[#C9A227]" size={22} /> },
                                    { text: "Financial literacy had to accompany execution", icon: <BookOpen className="text-[#C9A227]" size={22} /> },
                                    { text: "Structure had to precede scale", icon: <Scale className="text-[#C9A227]" size={22} /> },
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center p-5 md:p-6 bg-white border border-slate-100 rounded-2xl shadow-sm hover:shadow-md transition-all hover:-translate-y-1 hover:border-[#C9A227]/20 group">
                                        <div className="bg-slate-50 p-3.5 rounded-xl mr-5 group-hover:bg-[#C9A227]/10 transition-colors">
                                            {item.icon}
                                        </div>
                                        <span className="text-base md:text-lg text-slate-700 font-medium leading-relaxed">{item.text}</span>
                                    </div>
                                ))}
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8} className="mt-16 md:mt-24">
                        <div className="bg-[#0A1628] text-white p-10 md:p-16 rounded-[2rem] text-center shadow-xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/10 rounded-full blur-[80px]" />
                            <p className="text-xl md:text-3xl font-serif font-light leading-relaxed relative z-10 max-w-2xl mx-auto">
                                Financial order is not accidental.<br />
                                <span className="text-[#C9A227] italic">It is intentionally designed.</span>
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 3 - ADVISORY REFRAMED (Clean Minimal Cards) */}
            <section className="bg-white py-20 md:py-[120px] px-6 w-full border-t border-slate-100 relative">
                <div className="max-w-[1200px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-16 md:mb-20 text-center">
                        <span className="text-xs md:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4">
                            Beyond Filing. Beyond Reaction. Beyond Assumptions.
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3A]">
                            Advisory, Reframed.
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                        {/* Card 1 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#C9A227]/10 transition-colors">
                                    <ShieldCheck className="text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors" size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Compliance as Infrastructure</h3>
                                <p className="text-slate-600 mb-8 leading-relaxed font-light text-sm md:text-base flex-grow">
                                    Compliance is often viewed as obligation. We treat it as financial infrastructure. Well-managed compliance reduces risk exposure, strengthens credibility, and creates operational predictability.
                                </p>
                                <p className="text-[#0B1F3A] font-medium text-sm md:text-base bg-slate-50 p-5 rounded-xl border-l-2 border-[#0B1F3A] mt-auto">
                                    Without infrastructure, advisory collapses.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Card 2 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#0B1F3A]/20 via-[#0B1F3A] to-[#0B1F3A]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#0B1F3A]/5 transition-colors">
                                    <Scale3d className="text-[#0B1F3A] transition-colors" size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Advisory as Interpretation</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-light text-sm md:text-base">
                                    Financial data without interpretation creates false confidence. Advisory, in our framework, means:
                                </p>
                                <ul className="space-y-4 text-slate-600 text-sm md:text-base mb-8 flex-grow font-light">
                                    <li className="flex items-start"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Understanding implications before action</li>
                                    <li className="flex items-start"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Mapping risks before exposure</li>
                                    <li className="flex items-start"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Aligning tax and structure before growth</li>
                                </ul>
                                <p className="text-[#0B1F3A] font-medium text-sm md:text-base bg-slate-50 p-5 rounded-xl border-l-2 border-[#0B1F3A] mt-auto">
                                    Advice is not opinion. It is structured evaluation.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Card 3 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8} className="h-full">
                            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] transition-all h-full flex flex-col group relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#C9A227]/20 via-[#C9A227] to-[#C9A227]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                <div className="bg-slate-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-8 group-hover:bg-[#C9A227]/10 transition-colors">
                                    <GraduationCap className="text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors" size={30} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl md:text-2xl font-serif text-[#0B1F3A] mb-4">Education as Risk Reduction</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed font-light text-sm md:text-base">
                                    Financial misunderstanding creates avoidable stress. We integrate explanation into execution. Because informed clients:
                                </p>
                                <ul className="space-y-4 text-slate-600 text-sm md:text-base mb-8 flex-grow font-light">
                                    <li className="flex items-start"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Make measured decisions</li>
                                    <li className="flex items-start"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Avoid reactionary mistakes</li>
                                    <li className="flex items-start"><CheckCircle2 className="text-[#C9A227] mr-3 shrink-0" size={18} /> Plan beyond compliance cycles</li>
                                </ul>
                                <p className="text-[#0B1F3A] font-medium text-sm md:text-base bg-slate-50 p-5 rounded-xl border-l-2 border-[#0B1F3A] mt-auto">
                                    Clarity reduces dependence. Understanding increases stability.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation type="fade" direction="up" delay={0.6} duration={0.8} className="text-center pt-8 border-t border-slate-100 max-w-3xl mx-auto">
                        <p className="text-xl md:text-3xl font-serif text-[#0B1F3A] leading-relaxed">
                            Structure is not a service category.<br />
                            <span className="text-slate-500 italic font-light">It is a mindset applied across everything we do.</span>
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 4 - CREDIBILITY (Human-Touch Professionalism) */}
            <section className="bg-slate-50 py-20 md:py-[120px] px-6 w-full">
                <div className="max-w-[1200px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-12 md:mb-16 md:text-center">
                        <span className="text-xs md:text-sm tracking-[0.2em] text-[#C9A227] uppercase font-bold block mb-4">
                            Professional Rigor. Ethical Discipline. Structured Execution.
                        </span>
                        <h2 className="text-3xl md:text-5xl font-serif text-[#0B1F3A]">
                            Credibility Is Built Through Consistency.
                        </h2>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 mb-16 lg:items-center">
                        {/* LEFT COLUMN */}
                        <ScrollAnimation type="fade" direction="left" delay={0.2} duration={0.8} className="text-base md:text-lg text-slate-600 space-y-6 md:space-y-8 leading-relaxed">
                            <p className="text-2xl md:text-3xl font-serif text-[#0B1F3A] leading-tight">Professional advisory demands more than qualification.</p>

                            <div>
                                <p className="font-semibold text-slate-400 uppercase tracking-widest text-[10px] md:text-xs mb-4">It requires:</p>
                                <div className="flex flex-wrap gap-2 md:gap-3 mb-8">
                                    <span className="bg-white border border-slate-200 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium text-slate-700 shadow-sm">Technical grounding</span>
                                    <span className="bg-white border border-slate-200 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium text-slate-700 shadow-sm">Regulatory awareness</span>
                                    <span className="bg-white border border-slate-200 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium text-slate-700 shadow-sm">Analytical thinking</span>
                                    <span className="bg-white border border-slate-200 px-4 md:px-5 py-2 md:py-2.5 rounded-full text-xs md:text-sm font-medium text-slate-700 shadow-sm">Ethical restraint</span>
                                </div>
                            </div>

                            <p className="p-6 md:p-8 bg-white border border-slate-100 rounded-2xl shadow-sm text-slate-600 font-light text-base md:text-lg">
                                Every engagement is approached with documentation discipline, regulatory alignment, and structured review systems.
                            </p>

                            <div className="pt-4 md:pt-6">
                                <p className="text-[#0B1F3A] font-serif text-xl md:text-2xl leading-relaxed">
                                    We believe credibility is not demonstrated through claims.<br />
                                    <span className="text-[#C9A227] italic">It is demonstrated through consistency.</span>
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* RIGHT COLUMN — Grid Cards */}
                        <div className="space-y-5 md:space-y-6">
                            <ScrollAnimation type="fade" direction="right" delay={0.3} duration={0.8}>
                                <div className="bg-white p-6 md:p-8 border border-slate-100 rounded-2xl transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] flex items-start gap-5 md:gap-6 group">
                                    <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-[#0B1F3A] transition-colors shrink-0">
                                        <Banknote className="text-[#0B1F3A] group-hover:text-white" size={26} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base uppercase tracking-widest text-[#0B1F3A] font-bold mb-3 md:mb-4">Technical Foundation</h3>
                                        <ul className="space-y-2 text-slate-500 font-light text-sm md:text-base">
                                            <li>— Strong grounding in taxation, compliance, and financial interpretation</li>
                                            <li>— Exposure across individuals, SMEs, and startup environments</li>
                                            <li>— Continuous regulatory tracking</li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation type="fade" direction="right" delay={0.4} duration={0.8}>
                                <div className="bg-white p-6 md:p-8 border border-slate-100 rounded-2xl transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] flex items-start gap-5 md:gap-6 group">
                                    <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-[#0B1F3A] transition-colors shrink-0">
                                        <Layers className="text-[#0B1F3A] group-hover:text-white" size={26} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base uppercase tracking-widest text-[#0B1F3A] font-bold mb-3 md:mb-4">Process Discipline</h3>
                                        <ul className="space-y-2 text-slate-500 font-light text-sm md:text-base">
                                            <li>— Internal compliance calendar systems</li>
                                            <li>— Structured engagement documentation</li>
                                            <li>— Periodic review frameworks</li>
                                            <li>— Defined workflow protocols</li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation type="fade" direction="right" delay={0.5} duration={0.8}>
                                <div className="bg-white p-6 md:p-8 border border-slate-100 rounded-2xl transition-all hover:shadow-[0_10px_30px_rgb(0,0,0,0.06)] flex items-start gap-5 md:gap-6 group">
                                    <div className="bg-slate-50 p-4 rounded-xl group-hover:bg-[#0B1F3A] transition-colors shrink-0">
                                        <Users className="text-[#0B1F3A] group-hover:text-white" size={26} strokeWidth={1.5} />
                                    </div>
                                    <div>
                                        <h3 className="text-sm md:text-base uppercase tracking-widest text-[#0B1F3A] font-bold mb-3 md:mb-4">Ethical Positioning</h3>
                                        <ul className="space-y-2 text-slate-500 font-light text-sm md:text-base">
                                            <li>— Conservative risk interpretation</li>
                                            <li>— Transparent communication</li>
                                            <li>— No aggressive structuring without justification</li>
                                            <li>— Long-term alignment over short-term gain</li>
                                        </ul>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5 - HOW WE WORK (Refined Navy Aesthetic) */}
            <section className="bg-[#0A1628] text-white py-20 md:py-[140px] px-6 w-full relative">
                {/* Visual Ambient Glows */}
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C9A227]/5 rounded-full blur-[100px] pointer-events-none transform translate-x-1/2 -translate-y-1/2" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/5 rounded-full blur-[100px] pointer-events-none transform -translate-x-1/2 translate-y-1/2" />

                <div className="max-w-[1200px] mx-auto relative z-10">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="text-center mb-12 md:mb-16">
                        <span className="text-[10px] md:text-xs uppercase tracking-widest text-[#C9A227] font-bold mb-6 block border border-[#C9A227]/20 py-2.5 px-6 rounded-full w-fit mx-auto bg-[#C9A227]/5 backdrop-blur-sm">How We Work & What We Value</span>
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif mb-6 mx-auto leading-tight max-w-4xl">
                            Structured Relationships Create Stable Outcomes.
                        </h2>
                        <p className="text-xs md:text-sm tracking-[0.2em] text-slate-400 uppercase font-semibold">
                            Clarity in Process. Integrity in Action. Continuity in Engagement.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="max-w-3xl mx-auto text-base md:text-lg text-slate-300 space-y-6 leading-relaxed text-center mb-16 md:mb-24 font-light">
                        <p>Advisory is not transactional.<br className="hidden md:block" />It is built on mutual clarity, defined processes, and long-term responsibility.</p>
                        <p>We approach every engagement with structured documentation, transparent communication, and disciplined follow-through.</p>
                        <div className="p-6 md:p-8 border border-white/10 rounded-2xl bg-white/5 mt-8 backdrop-blur-sm shadow-xl">
                            <p className="text-white font-serif text-xl md:text-2xl leading-relaxed">
                                Financial systems cannot function without alignment between advisor and client.<br />
                                <span className="text-[#C9A227] italic font-light">That alignment begins with clarity.</span>
                            </p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-16 md:mb-24">
                        {/* 01 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="h-full">
                            <div className="bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-3xl h-full flex flex-col hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 relative overflow-hidden group shadow-lg">
                                <div className="absolute right-6 top-6 leading-none text-[80px] md:text-[100px] font-bold text-white/[0.02] group-hover:text-[#C9A227]/5 transition-colors duration-500 pointer-events-none select-none z-0">01</div>
                                <h3 className="text-xl md:text-2xl font-serif text-white mb-6 relative z-10">Defined Communication</h3>
                                <ul className="space-y-4 text-slate-400 mb-8 flex-grow relative z-10 font-light text-sm md:text-base">
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Clear documentation of discussions</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Transparent scope definition</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Structured follow-ups</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> No ambiguity in advisory position</li>
                                </ul>
                                <div className="bg-black/20 p-5 rounded-2xl border border-white/5 relative z-10">
                                    <p className="text-[#E2E8F0] text-sm font-medium">
                                        Professional clarity prevents operational confusion.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* 02 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8} className="h-full">
                            <div className="bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-3xl h-full flex flex-col hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 relative overflow-hidden group shadow-lg">
                                <div className="absolute right-6 top-6 leading-none text-[80px] md:text-[100px] font-bold text-white/[0.02] group-hover:text-[#C9A227]/5 transition-colors duration-500 pointer-events-none select-none z-0">02</div>
                                <h3 className="text-xl md:text-2xl font-serif text-white mb-6 relative z-10">Shared Responsibility</h3>
                                <ul className="space-y-4 text-slate-400 mb-8 flex-grow relative z-10 font-light text-sm md:text-base">
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Timely information exchange</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Compliance adherence discipline</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Respect for documentation systems</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Long-term alignment over shortcuts</li>
                                </ul>
                                <div className="bg-black/20 p-5 rounded-2xl border border-white/5 relative z-10">
                                    <p className="text-[#E2E8F0] text-sm font-medium">
                                        Financial structure requires cooperation.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>

                        {/* 03 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8} className="h-full">
                            <div className="bg-white/[0.03] border border-white/5 p-8 md:p-10 rounded-3xl h-full flex flex-col hover:bg-white/[0.05] hover:border-white/10 transition-all duration-300 relative overflow-hidden group shadow-lg">
                                <div className="absolute right-6 top-6 leading-none text-[80px] md:text-[100px] font-bold text-white/[0.02] group-hover:text-[#C9A227]/5 transition-colors duration-500 pointer-events-none select-none z-0">03</div>
                                <h3 className="text-xl md:text-2xl font-serif text-white mb-6 relative z-10">Ethical Continuity</h3>
                                <ul className="space-y-4 text-slate-400 mb-8 flex-grow relative z-10 font-light text-sm md:text-base">
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Conservative interpretation of regulatory risk</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> No aggressive structuring without defensibility</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Advisory grounded in sustainability</li>
                                    <li className="flex items-start"><span className="text-[#C9A227] mr-3 font-bold">•</span> Integrity prioritized over convenience</li>
                                </ul>
                                <div className="bg-black/20 p-5 rounded-2xl border border-white/5 relative z-10">
                                    <p className="text-[#E2E8F0] text-sm font-medium">
                                        Stability is always preferred over speculation.
                                    </p>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>

                    <ScrollAnimation type="fade" direction="up" delay={0.7} duration={0.8}>
                        <div className="text-center pt-16 md:pt-20 mt-10 md:mt-16 border-t border-white/10 max-w-4xl mx-auto">
                            <p className="text-2xl md:text-4xl font-serif text-white mb-6 md:mb-8 leading-relaxed">
                                Financial order is not created through urgency.<br />
                                <span className="text-[#C9A227] italic font-light cursor-text">It is sustained through discipline.</span>
                            </p>
                            <p className="text-base md:text-xl text-slate-400 font-light mb-10 md:mb-12 max-w-2xl mx-auto leading-relaxed">
                                If you value structured thinking, measured growth, and responsible advisory —<br className="hidden md:block" />
                                this practice was built for you.
                            </p>
                            <Link href="/consultation" className="inline-flex items-center justify-center px-8 md:px-10 py-4 md:py-5 bg-white text-[#0B1F3A] font-medium text-base md:text-lg rounded-xl hover:bg-[#C9A227] hover:text-white transition-all duration-300 shadow-xl hover:-translate-y-1">
                                Begin Structured Advisory
                                <ArrowRight className="ml-3 h-5 w-5" />
                            </Link>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
