import React from 'react';
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'About Us | Trust & Financial Architecture | Jyoti Thakur & Associates',
    description: 'We build defensible financial structures. Learn about our philosophy, our partners, and why execution without architecture creates instability.',
};

export default function AboutPage() {
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

            {/* SECTION 1 */}
            <section className="bg-white py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-gray-900 mb-6 max-w-4xl leading-tight">
                            Financial Structure Is a Responsibility, Not a Formality.
                        </h1>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.15} duration={0.8}>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold mb-16">
                            Clarity. Discipline. Continuity.
                        </p>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="max-w-3xl text-lg md:text-xl text-gray-600 space-y-6 leading-relaxed mb-16">
                        <p>Financial systems quietly influence every decision a business or individual makes.</p>
                        <p>Yet, they are often treated as periodic tasks — filed, submitted, forgotten.</p>
                        <p>We approach finance differently.</p>
                        <p className="font-medium text-gray-800 py-4">
                            For us, compliance is not an event.<br />
                            Advisory is not a reaction.<br />
                            And growth is not accidental.
                        </p>
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
                        <p className="font-medium text-gray-800">
                            We do not merely complete filings.<br />
                            We design financial order.
                        </p>
                    </ScrollAnimation>

                    {/* Highlight Strip (Minimal Box) */}
                    <ScrollAnimation type="scale" delay={0.5} duration={0.8} className="w-full max-w-3xl mb-12">
                        <div className="border border-gray-200 bg-gray-50/50 px-8 py-6 rounded-sm w-full transition-colors hover:bg-gray-100/50">
                            <p className="text-xl md:text-2xl font-medium text-gray-800 leading-relaxed">
                                Predictability is engineered. Stability is structured. Growth is aligned.
                            </p>
                        </div>
                    </ScrollAnimation>

                    {/* Micro Line */}
                    <ScrollAnimation type="fade" direction="up" delay={0.7} duration={0.8}>
                        <p className="text-sm tracking-widest text-gray-400 uppercase font-medium">
                            Process-driven. Risk-aware. Long-term oriented.
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 2 */}
            <section className="bg-[#F8F9FB] py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                            Why This Practice Was Built
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold">
                            Observation. Frustration. Intentional Design.
                        </p>
                    </ScrollAnimation>

                    {/* Two-column layout (Desktop) / Stack (Mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 overflow-visible">
                        {/* LEFT COLUMN — Narrative */}
                        <ScrollAnimation type="fade" direction="left" delay={0.2} duration={0.8} className="text-lg text-gray-600 space-y-6 leading-relaxed">
                            <p>Over time, a pattern became visible.</p>
                            <p>
                                Compliance was being treated as a checklist.<br />
                                Advisory was reactive.<br />
                                Financial clarity was rare.
                            </p>
                            <p>
                                Businesses scaled revenue without strengthening structure.<br />
                                Individuals filed returns without understanding implications.<br />
                                Startups prepared pitches without preparing financial systems.
                            </p>
                            <p>
                                The gap was not technical skill.<br />
                                The gap was structured thinking.
                            </p>
                            <p className="text-gray-900 font-medium pt-2">
                                This practice was built to close that gap.
                            </p>
                            <p>
                                Not by adding complexity —<br />
                                but by introducing discipline, transparency, and measurable frameworks into financial decision-making.
                            </p>
                            <p className="pt-2">
                                The objective was simple:<br />
                                <span className="text-gray-900 font-medium">Build systems that outlast deadlines.</span>
                            </p>
                        </ScrollAnimation>

                        {/* RIGHT COLUMN — Structured Insight Points */}
                        <ScrollAnimation type="fade" direction="right" delay={0.3} duration={0.8} className="flex flex-col justify-start pt-2">
                            <h3 className="text-xl font-medium text-gray-900 mb-8 border-b border-gray-200 pb-4">What Needed To Change</h3>
                            <ul className="space-y-6">
                                <li className="flex items-start group">
                                    <span className="text-gray-400 mr-4 mt-1 transition-colors group-hover:text-gray-900">•</span>
                                    <span className="text-lg text-gray-700 leading-relaxed transition-colors group-hover:text-gray-900">Filing had to become integrated into planning</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-gray-400 mr-4 mt-1 transition-colors group-hover:text-gray-900">•</span>
                                    <span className="text-lg text-gray-700 leading-relaxed transition-colors group-hover:text-gray-900">Advisory had to move from reactive to anticipatory</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-gray-400 mr-4 mt-1 transition-colors group-hover:text-gray-900">•</span>
                                    <span className="text-lg text-gray-700 leading-relaxed transition-colors group-hover:text-gray-900">Financial literacy had to accompany execution</span>
                                </li>
                                <li className="flex items-start group">
                                    <span className="text-gray-400 mr-4 mt-1 transition-colors group-hover:text-gray-900">•</span>
                                    <span className="text-lg text-gray-700 leading-relaxed transition-colors group-hover:text-gray-900">Structure had to precede scale</span>
                                </li>
                            </ul>
                        </ScrollAnimation>
                    </div>

                    {/* Closing Line (Centered Below Columns) */}
                    <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8} className="text-center">
                        <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                            Financial order is not accidental.<br />
                            <span className="text-gray-500">It is intentionally designed.</span>
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 3 */}
            <section className="bg-white py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-20 text-center">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">
                            Advisory, Reframed.
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold">
                            Beyond Filing. Beyond Reaction. Beyond Assumptions.
                        </p>
                    </ScrollAnimation>

                    {/* Structured 3-block horizontal layout (Desktop) / Stacked vertical (Mobile) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-20">
                        {/* Block 1 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8}>
                            <div className="flex flex-col h-full group">
                                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100 transition-colors group-hover:border-gray-300">Compliance as Infrastructure</h3>
                                <p className="text-gray-600 mb-4 leading-relaxed text-lg">
                                    Compliance is often viewed as obligation. We treat it as financial infrastructure.
                                </p>
                                <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                                    Well-managed compliance reduces risk exposure, strengthens credibility, and creates operational predictability.
                                </p>
                                <p className="text-gray-900 font-medium text-lg mt-auto">
                                    Without infrastructure, advisory collapses.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Block 2 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8}>
                            <div className="flex flex-col h-full group">
                                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100 transition-colors group-hover:border-gray-300">Advisory as Interpretation</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    Financial data without interpretation creates false confidence.
                                </p>
                                <div className="mb-8">
                                    <p className="text-gray-900 font-medium mb-3 text-lg">Advisory, in our framework, means:</p>
                                    <ul className="space-y-3 text-gray-600 text-lg">
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 transition-colors group-hover:text-gray-500">•</span> Understanding implications before action</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 transition-colors group-hover:text-gray-500">•</span> Mapping risks before exposure</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 transition-colors group-hover:text-gray-500">•</span> Aligning tax and structure before growth</li>
                                    </ul>
                                </div>
                                <p className="text-gray-900 font-medium text-lg mt-auto">
                                    Advice is not opinion.<br />It is structured evaluation.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* Block 3 */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8}>
                            <div className="flex flex-col h-full group">
                                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100 transition-colors group-hover:border-gray-300">Education as Risk Reduction</h3>
                                <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                                    Financial misunderstanding creates avoidable stress. We integrate explanation into execution.
                                </p>
                                <div className="mb-8">
                                    <p className="text-gray-900 font-medium mb-3 text-lg">Because informed clients:</p>
                                    <ul className="space-y-3 text-gray-600 text-lg">
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 transition-colors group-hover:text-gray-500">•</span> Make measured decisions</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 transition-colors group-hover:text-gray-500">•</span> Avoid reactionary mistakes</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 transition-colors group-hover:text-gray-500">•</span> Plan beyond compliance cycles</li>
                                    </ul>
                                </div>
                                <p className="text-gray-900 font-medium text-lg mt-auto">
                                    Clarity reduces dependence.<br />Understanding increases stability.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Closing Statement (Centered Below Blocks) */}
                    <ScrollAnimation type="fade" direction="up" delay={0.6} duration={0.8} className="text-center">
                        <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                            Structure is not a service category.<br />
                            <span className="text-gray-500">It is a mindset applied across everything we do.</span>
                        </p>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 4 */}
            <section className="bg-[#F8F9FB] py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="mb-16">
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4 max-w-2xl leading-tight">
                            Credibility Is Built Through Consistency.
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold">
                            Professional Rigor. Ethical Discipline. Structured Execution.
                        </p>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 mb-24 overflow-visible">
                        {/* LEFT COLUMN — Narrative */}
                        <ScrollAnimation type="fade" direction="left" delay={0.2} duration={0.8} className="text-lg text-gray-600 space-y-6 leading-relaxed pt-2">
                            <p>Professional advisory demands more than qualification.</p>
                            <p className="text-gray-900 font-medium pt-2">It requires:</p>
                            <ul className="space-y-3 mb-6 ml-1">
                                <li className="flex items-start group"><span className="text-gray-400 mr-3 transition-colors group-hover:text-gray-900">•</span> <span className="transition-colors group-hover:text-gray-900">Technical grounding</span></li>
                                <li className="flex items-start group"><span className="text-gray-400 mr-3 transition-colors group-hover:text-gray-900">•</span> <span className="transition-colors group-hover:text-gray-900">Regulatory awareness</span></li>
                                <li className="flex items-start group"><span className="text-gray-400 mr-3 transition-colors group-hover:text-gray-900">•</span> <span className="transition-colors group-hover:text-gray-900">Analytical thinking</span></li>
                                <li className="flex items-start group"><span className="text-gray-400 mr-3 transition-colors group-hover:text-gray-900">•</span> <span className="transition-colors group-hover:text-gray-900">Ethical restraint</span></li>
                            </ul>
                            <p className="pt-2">
                                Every engagement is approached with documentation discipline, regulatory alignment, and structured review systems.
                            </p>
                            <p className="text-gray-900 font-medium text-xl leading-relaxed pt-6">
                                We believe credibility is not demonstrated through claims.<br />
                                <span className="text-gray-500 text-lg">It is demonstrated through consistency.</span>
                            </p>
                        </ScrollAnimation>

                        {/* RIGHT COLUMN — Structured Credibility Indicators */}
                        <div className="space-y-8">
                            <ScrollAnimation type="fade" direction="right" delay={0.3} duration={0.8}>
                                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm transition-all hover:shadow-md hover:-translate-y-1">
                                    <h3 className="text-sm uppercase tracking-widest text-gray-900 font-bold mb-6">Technical Foundation</h3>
                                    <ul className="space-y-4 text-gray-600 text-base">
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Strong grounding in taxation, compliance, and financial interpretation</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Exposure across individuals, SMEs, and startup environments</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Continuous regulatory tracking</li>
                                    </ul>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation type="fade" direction="right" delay={0.4} duration={0.8}>
                                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm transition-all hover:shadow-md hover:-translate-y-1">
                                    <h3 className="text-sm uppercase tracking-widest text-gray-900 font-bold mb-6">Process Discipline</h3>
                                    <ul className="space-y-4 text-gray-600 text-base">
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Internal compliance calendar systems</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Structured engagement documentation</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Periodic review frameworks</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Defined workflow protocols</li>
                                    </ul>
                                </div>
                            </ScrollAnimation>

                            <ScrollAnimation type="fade" direction="right" delay={0.5} duration={0.8}>
                                <div className="bg-white p-8 border border-gray-100 shadow-sm rounded-sm transition-all hover:shadow-md hover:-translate-y-1">
                                    <h3 className="text-sm uppercase tracking-widest text-gray-900 font-bold mb-6">Ethical Positioning</h3>
                                    <ul className="space-y-4 text-gray-600 text-base">
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Conservative risk interpretation</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Transparent communication</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> No aggressive structuring without justification</li>
                                        <li className="flex items-start"><span className="text-gray-300 mr-3 mt-1">—</span> Long-term alignment over short-term gain</li>
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>
                    </div>

                    {/* Closing Line (Centered Below Columns) */}
                    <ScrollAnimation type="fade" direction="up" delay={0.7} duration={0.8}>
                        <div className="text-center pt-8 border-t border-gray-200/60">
                            <p className="text-2xl font-medium text-gray-900 leading-relaxed">
                                Stability is not created by speed.<br />
                                <span className="text-gray-500">It is created by structured responsibility.</span>
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 5 - HOW WE WORK & WHAT WE VALUE */}
            <section className="bg-white py-[120px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" duration={0.8} className="text-center mb-16">
                        <span className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6 block">How We Work & What We Value</span>
                        <h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6 mx-auto max-w-3xl leading-tight">
                            Structured Relationships Create Stable Outcomes.
                        </h2>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold">
                            Clarity in Process. Integrity in Action. Continuity in Engagement.
                        </p>
                    </ScrollAnimation>

                    {/* Centered narrative block */}
                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="max-w-3xl mx-auto text-lg text-gray-600 space-y-6 leading-relaxed text-center mb-24">
                        <p>
                            Advisory is not transactional.<br />
                            It is built on mutual clarity, defined processes, and long-term responsibility.
                        </p>
                        <p>
                            We approach every engagement with structured documentation, transparent communication, and disciplined follow-through.
                        </p>
                        <p className="text-gray-900 font-medium pt-4">
                            Financial systems cannot function without alignment between advisor and client.<br />
                            That alignment begins with clarity.
                        </p>
                    </ScrollAnimation>

                    {/* Principle Framework (3 Structured Columns) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-10 mb-24 lg:mb-32">
                        {/* 01 — Defined Communication */}
                        <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8}>
                            <div className="flex flex-col h-full group">
                                <div className="text-4xl font-light text-gray-200 mb-6 transition-colors group-hover:text-gray-400">01</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100 transition-colors group-hover:border-gray-300">Defined Communication</h3>
                                <ul className="space-y-4 text-gray-600 mb-8 flex-grow text-lg">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Clear documentation of discussions</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Transparent scope definition</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Structured follow-ups</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> No ambiguity in advisory position</li>
                                </ul>
                                <p className="text-gray-900 font-medium text-lg mt-auto border-l-2 border-gray-900 pl-4 py-1 transition-all group-hover:border-gray-600">
                                    Professional clarity prevents operational confusion.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* 02 — Shared Responsibility */}
                        <ScrollAnimation type="fade" direction="up" delay={0.4} duration={0.8}>
                            <div className="flex flex-col h-full group">
                                <div className="text-4xl font-light text-gray-200 mb-6 transition-colors group-hover:text-gray-400">02</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100 transition-colors group-hover:border-gray-300">Shared Responsibility</h3>
                                <ul className="space-y-4 text-gray-600 mb-8 flex-grow text-lg">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Timely information exchange</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Compliance adherence discipline</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Respect for documentation systems</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Long-term alignment over shortcuts</li>
                                </ul>
                                <p className="text-gray-900 font-medium text-lg mt-auto border-l-2 border-gray-900 pl-4 py-1 transition-all group-hover:border-gray-600">
                                    Financial structure requires cooperation.
                                </p>
                            </div>
                        </ScrollAnimation>

                        {/* 03 — Ethical Continuity */}
                        <ScrollAnimation type="fade" direction="up" delay={0.5} duration={0.8}>
                            <div className="flex flex-col h-full group">
                                <div className="text-4xl font-light text-gray-200 mb-6 transition-colors group-hover:text-gray-400">03</div>
                                <h3 className="text-xl font-medium text-gray-900 mb-6 pb-4 border-b border-gray-100 transition-colors group-hover:border-gray-300">Ethical Continuity</h3>
                                <ul className="space-y-4 text-gray-600 mb-8 flex-grow text-lg">
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Conservative interpretation of regulatory risk</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> No aggressive structuring without defensibility</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Advisory grounded in sustainability</li>
                                    <li className="flex items-start"><span className="text-gray-300 mr-3">•</span> Integrity prioritized over convenience</li>
                                </ul>
                                <p className="text-gray-900 font-medium text-lg mt-auto border-l-2 border-gray-900 pl-4 py-1 transition-all group-hover:border-gray-600">
                                    Stability is always preferred over speculation.
                                </p>
                            </div>
                        </ScrollAnimation>
                    </div>

                    {/* Final Closing Statement (Centered, Strong) */}
                    <ScrollAnimation type="fade" direction="up" delay={0.7} duration={0.8}>
                        <div className="text-center pt-16 border-t border-gray-200/60 max-w-4xl mx-auto">
                            <p className="text-2xl md:text-3xl font-medium text-gray-900 leading-tight mb-8">
                                Financial order is not created through urgency.<br />
                                <span className="text-gray-500">It is sustained through discipline.</span>
                            </p>
                            <p className="text-xl text-gray-700 leading-relaxed font-medium">
                                If you value structured thinking, measured growth, and responsible advisory —<br />
                                this practice was built for you.
                            </p>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
