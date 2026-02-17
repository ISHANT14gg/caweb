'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

/* ───────────────────────────────────────────────
   SECTION 7 – INSIGHT, CLARITY, CONTINUOUS LEARNING
   Part 1: Knowledge Platform (3 Blocks)
   Part 2: Why Knowledge Matters (2 Columns)
   Part 3: Final Conversion Bridge
   ─────────────────────────────────────────────── */

const blocks = [
    {
        title: 'Financial Literacy Simplified',
        description: 'Complex regulations explained with clarity.',
        points: [
            'Income tax fundamentals',
            'GST applicability & compliance clarity',
            'Basic financial statement understanding',
            'Regulatory awareness updates',
        ],
        closing: 'Designed for individuals and business owners seeking confidence in financial decisions.',
        cta: 'Explore Articles',
        ctaHref: '/insights',
    },
    {
        title: 'Startup & Growth Advisory Insights',
        description: 'Strategic thinking beyond compliance.',
        points: [
            'Entity structuring concepts',
            'Fundraising preparedness',
            'Cash flow strategy frameworks',
            'Cost structure optimisation thinking',
        ],
        closing: 'Built for founders and growing businesses.',
        cta: 'Read Strategic Notes',
        ctaHref: '/insights',
    },
    {
        title: 'Skill Academia & Professional Development',
        description: 'Continuous learning for finance-conscious professionals.',
        points: [
            'Practical financial interpretation',
            'Compliance management frameworks',
            'Business finance understanding',
            'Advisory thinking fundamentals',
        ],
        closing: 'Structured knowledge to bridge theory and execution.',
        cta: 'View Learning Modules',
        ctaHref: '/insights',
    },
];

export default function InsightsSection() {
    return (
        <section className="py-16 lg:py-[80px] bg-[#F8F9FB]">
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
                        Insight. Clarity. Continuous Learning.
                    </h2>
                    <p className="text-xs font-semibold text-label uppercase tracking-[2px]">
                        Financial Literacy. Strategic Thinking. Informed Decisions.
                    </p>
                </motion.div>

                {/* ─── PART 1: 3 Knowledge Blocks ─── */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-20 lg:mb-24">
                    {blocks.map((block, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-10 rounded-lg shadow-sm border-t-[3px] border-t-gold-muted hover:shadow-md transition-shadow duration-300"
                        >
                            <h3 className="text-lg font-bold text-navy-deep mb-2">
                                {block.title}
                            </h3>
                            <p className="text-sm text-charcoal mb-4 leading-relaxed">
                                {block.description}
                            </p>
                            <ul className="space-y-2 mb-5">
                                {block.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-charcoal">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-muted flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-xs text-label italic mb-5">
                                {block.closing}
                            </p>
                            <Link
                                href={block.ctaHref}
                                className="inline-flex items-center text-sm font-semibold text-navy hover:text-gold transition-colors group"
                            >
                                {block.cta}
                                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </motion.div>
                    ))}
                </div>

                {/* ─── PART 2: Why Knowledge Matters ─── */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 lg:mb-24"
                >
                    {/* Left – Narrative */}
                    <div>
                        <h3 className="text-xl font-bold text-navy-deep mb-4">
                            Why Knowledge Matters in Financial Decision-Making
                        </h3>
                        <div className="space-y-4 text-sm text-charcoal leading-relaxed">
                            <p>
                                Financial clarity does not come from occasional filing. It comes from understanding the structure behind decisions.
                            </p>
                            <p>
                                Whether you are a salaried individual, a startup founder, or a growing enterprise — informed thinking reduces risk and improves long-term outcomes.
                            </p>
                            <p className="font-medium text-navy-deep italic">
                                We believe advisory should empower, not obscure.
                            </p>
                        </div>
                    </div>

                    {/* Right – Impact Points */}
                    <div className="flex items-center">
                        <ul className="space-y-4">
                            {[
                                'Better tax planning through understanding',
                                'Reduced dependency on reactive consultation',
                                'Smarter business structuring decisions',
                                'Improved confidence in regulatory environments',
                                'Long-term financial discipline',
                            ].map((point, idx) => (
                                <li key={idx} className="flex items-start gap-3 text-sm text-charcoal">
                                    <span className="mt-1.5 h-2 w-2 rounded-full bg-gold flex-shrink-0" />
                                    {point}
                                </li>
                            ))}
                        </ul>
                    </div>
                </motion.div>

                {/* ─── PART 3: Final Conversion Bridge ─── */}
                <div className="border-t border-divider pt-16 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <p className="text-charcoal text-base leading-relaxed max-w-2xl mx-auto mb-3">
                            Structured financial systems are built through informed decisions.
                        </p>
                        <p className="text-charcoal text-base leading-relaxed max-w-2xl mx-auto mb-8">
                            If you are looking for clarity — start with a structured conversation.
                        </p>
                        <Link
                            href="/contact"
                            className="inline-flex items-center justify-center w-full sm:w-auto px-8 py-4 bg-navy text-white font-semibold rounded-lg hover:border-gold hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200 text-sm tracking-wide border-2 border-transparent group"
                        >
                            Schedule a Consultation
                            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
