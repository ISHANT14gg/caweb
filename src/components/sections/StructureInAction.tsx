'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight, Search, ShieldCheck, BarChart3, CalendarCheck, TrendingUp } from 'lucide-react';

/* ───────────────────────────────────────────────
   SECTION 6 – STRUCTURE IN ACTION
   Part 1: Stability Indicators + Before/After
   Part 2: Process Transparency + Impact
   Final CTA Block
   ─────────────────────────────────────────────── */

export default function StructureInAction() {
    return (
        <section className="py-16 lg:py-[80px] bg-white">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-3">
                        Structure in Action
                    </h2>
                    <p className="text-xs font-semibold text-label uppercase tracking-[2px]">
                        Measured Discipline. Visible Clarity. Responsible Advisory.
                    </p>
                </motion.div>

                {/* ─── PART 1: Two-Column Block ─── */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-20">

                    {/* LEFT: Stability + Engagement */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-10"
                    >
                        {/* A. Stability Indicators */}
                        <div>
                            <h3 className="text-lg font-bold text-navy-deep mb-1">
                                Stability Indicators
                            </h3>
                            <div className="w-16 h-[2px] bg-gold-muted mb-4" />
                            <p className="text-sm text-charcoal mb-4 leading-relaxed">
                                We operate through measurable discipline — not reactive execution.
                            </p>
                            <ul className="space-y-2.5">
                                {[
                                    'High on-time compliance adherence across structured engagements',
                                    'Internal compliance calendar eliminating last-minute filing culture',
                                    'Structured quarterly review framework for advisory clients',
                                    'Exposure across professionals, SMEs, and early-stage ventures',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-muted flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-charcoal mt-4 italic">
                                This ensures routine compliance remains stable while strategic advisory evolves.
                            </p>
                        </div>

                        {/* B. What Engagement Feels Like */}
                        <div>
                            <h4 className="text-base font-bold text-navy-deep mb-1">
                                What Engagement Actually Feels Like
                            </h4>
                            <div className="w-12 h-[2px] bg-gold-muted mb-4" />
                            <p className="text-sm text-charcoal mb-4 leading-relaxed">
                                Clients experience clarity — not complexity.
                            </p>
                            <ul className="space-y-2.5">
                                {[
                                    'Structured consultation summaries after advisory discussions',
                                    'Pre-deadline reminders instead of deadline pressure',
                                    'Clear explanation of tax and regulatory implications',
                                    'Cash flow visibility guidance for better financial control',
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-muted flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm text-charcoal mt-4 italic">
                                The objective is informed decision-making, not dependency.
                            </p>
                        </div>
                    </motion.div>

                    {/* RIGHT: Before & After Visual */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-lg font-bold text-navy-deep mb-1">
                            Before & After Structured Financial Thinking
                        </h3>
                        <div className="w-16 h-[2px] bg-gold-muted mb-6" />

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-0 border border-border-soft rounded-lg overflow-hidden">
                            {/* Before */}
                            <div className="bg-[#FDF6F6] p-6 border-b sm:border-b-0 sm:border-r border-border-soft">
                                <h4 className="text-sm font-bold text-[#8B2E2E] uppercase tracking-wider mb-4">
                                    Before Structured Engagement
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        'Compliance treated as obligation',
                                        'Reactive response to notices',
                                        'Limited profitability clarity',
                                        'Cash flow unpredictability',
                                        'Advisory only during crisis',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-charcoal/80">
                                            <span className="text-[#C87777] mt-0.5">✕</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* After */}
                            <div className="bg-[#F2F8F2] p-6">
                                <h4 className="text-sm font-bold text-[#2E5E2E] uppercase tracking-wider mb-4">
                                    After Structured Financial Systems
                                </h4>
                                <ul className="space-y-3">
                                    {[
                                        'Compliance integrated into planning',
                                        'Reduced regulatory stress',
                                        'Measurable profitability tracking',
                                        'Predictable liquidity structure',
                                        'Advisory used for foresight',
                                    ].map((item, idx) => (
                                        <li key={idx} className="flex items-start gap-2 text-sm text-charcoal">
                                            <span className="text-[#4CAF50] mt-0.5">✓</span>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <p className="text-sm text-charcoal mt-4 italic">
                            This shift supports individuals, growing businesses, and expansion-stage ventures alike.
                        </p>
                    </motion.div>
                </div>

                {/* ─── PART 2: Process Transparency ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="bg-soft-grey rounded-xl p-6 sm:p-10 lg:p-[60px] mb-16"
                >
                    <h3 className="text-xl font-bold text-navy-deep mb-2 text-center">
                        What Every Structured Engagement Includes
                    </h3>
                    <p className="text-label text-sm text-center mb-10">
                        No ambiguity. No informal handling.<br />
                        Every engagement follows a defined system.
                    </p>

                    {/* 5-step strip — horizontal on desktop, vertical timeline on mobile */}
                    {(() => {
                        const processSteps = [
                            { icon: Search, title: 'Diagnostic', subtitle: 'Initial Assessment', fullText: 'Diagnostic understanding of current financial position' },
                            { icon: ShieldCheck, title: 'Risk Mapping', subtitle: 'Identifying Gaps', fullText: 'Risk mapping summary' },
                            { icon: BarChart3, title: 'Roadmap', subtitle: 'Strategic Plan', fullText: 'Structured action roadmap' },
                            { icon: CalendarCheck, title: 'Compliance Calendar', subtitle: 'Timeline Setup', fullText: 'Compliance calendar integration' },
                            { icon: TrendingUp, title: 'Review Framework', subtitle: 'Performance Audit', fullText: 'Periodic review framework (where applicable)' },
                        ];
                        return (
                            <>
                                {/* Desktop */}
                                <div className="hidden sm:grid grid-cols-5 gap-6 mb-12 relative">
                                    {/* Connector line */}
                                    <div className="absolute top-7 left-[10%] right-[10%] h-[2px] bg-navy/10 z-0" />
                                    {processSteps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, y: 20 }}
                                            whileInView={{ opacity: 1, y: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.12, duration: 0.5 }}
                                            className="text-center relative z-10"
                                        >
                                            <div className="w-14 h-14 rounded-full border-2 border-navy/20 bg-white flex items-center justify-center mx-auto mb-3 hover:border-gold hover:shadow-md transition-all duration-300">
                                                <step.icon className="h-6 w-6 text-navy" />
                                            </div>
                                            <p className="text-sm font-semibold text-navy-deep mb-0.5">{step.title}</p>
                                            <p className="text-xs text-label">{step.subtitle}</p>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Mobile vertical timeline */}
                                <div className="sm:hidden space-y-0 mb-12">
                                    {processSteps.map((step, idx) => (
                                        <motion.div
                                            key={idx}
                                            initial={{ opacity: 0, x: -15 }}
                                            whileInView={{ opacity: 1, x: 0 }}
                                            viewport={{ once: true }}
                                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                                            className="flex gap-4"
                                        >
                                            <div className="flex flex-col items-center">
                                                <div className="w-12 h-12 rounded-full border-2 border-navy/20 bg-white flex items-center justify-center flex-shrink-0">
                                                    <step.icon className="h-5 w-5 text-navy" />
                                                </div>
                                                {idx < 4 && (
                                                    <div className="w-[2px] flex-1 bg-gold-muted/40 mt-1" />
                                                )}
                                            </div>
                                            <div className="pt-2 pb-6">
                                                <p className="text-sm font-semibold text-navy-deep">{step.title}</p>
                                                <p className="text-xs text-label">{step.subtitle}</p>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </>
                        );
                    })()}

                    {/* Impact Grid */}
                    <h4 className="text-base font-bold text-navy-deep mb-4 text-center">
                        Impact Observed Across Engagements
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {[
                            'Reduced compliance penalties through disciplined calendar systems',
                            'Improved working capital visibility in SME operations',
                            'Stronger investor-readiness preparation for startups',
                            'More confident tax decisions for individuals and professionals',
                            'Lower financial stress through structured communication',
                        ].map((impact, idx) => (
                            <div key={idx} className="flex items-start gap-2.5 text-sm text-charcoal">
                                <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-muted flex-shrink-0" />
                                {impact}
                            </div>
                        ))}
                    </div>
                    <p className="text-xs text-label text-center mt-6 italic">
                        Impact is not promotional. It is procedural.
                    </p>
                </motion.div>

                {/* ─── FINAL CTA BLOCK ─── */}
                <div className="border-t border-divider pt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-charcoal text-base leading-relaxed max-w-2xl mx-auto mb-8">
                            Financial clarity should not depend on deadlines.
                            <br />
                            Structured systems create stability — whether you are filing your first return or preparing for expansion.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:border-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide border-2 border-transparent group"
                        >
                            Start With a Structured Consultation
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
