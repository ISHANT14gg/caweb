'use client';

import { motion } from 'framer-motion';

/* ───────────────────────────────────────────────
   SECTION 5 – TRUST & AUTHORITY
   Part 1: Differentiation Pillars (2x2 Grid)
   Part 2: Horizontal Timeline (4 Steps)
   ─────────────────────────────────────────────── */

const pillars = [
    {
        title: 'Discipline Before Expansion',
        intro: 'Growth without structured compliance creates invisible risk exposure.',
        body: 'We strengthen financial foundations before advising on scaling, funding or expansion.',
        pointsLabel: 'Our approach ensures:',
        points: [
            'Structured compliance calendars with monitoring checkpoints',
            'Identification of historical filing gaps and exposure risks',
            'Documentation discipline across financial operations',
            'Risk assessment before capital deployment',
        ],
        closing: 'Sustainable scale is built on discipline — not shortcuts.',
    },
    {
        title: 'Advisory Beyond Filing',
        intro: 'Compliance execution is a requirement. Strategic interpretation is an advantage.',
        body: 'We analyse financial data beyond statutory submission to identify planning opportunities and exposure areas.',
        pointsLabel: 'Our advisory layer includes:',
        points: [
            'Pre-decision tax impact forecasting',
            'Financial interpretation of statutory data',
            'Risk exposure mapping',
            'Forward-looking financial conversations',
        ],
        closing: 'Compliance keeps you safe. Advisory keeps you prepared.',
    },
    {
        title: 'Data-Driven Financial Thinking',
        intro: 'Financial decisions must be measurable and structured.',
        body: 'We implement reporting frameworks and modelling systems that allow businesses to operate with financial visibility.',
        pointsLabel: 'Our financial thinking framework emphasises:',
        points: [
            'KPI-based performance tracking',
            'Cash flow clarity beyond profit assumptions',
            'Scenario modelling before major decisions',
            'Segment-level profitability visibility',
        ],
        closing: 'Numbers are strategic tools — not just reports.',
    },
    {
        title: 'Education-Oriented Engagement',
        intro: 'Advisory should build understanding — not dependency.',
        body: 'We integrate financial literacy and structured knowledge sharing into our engagement model.',
        pointsLabel: 'Our philosophy includes:',
        points: [
            'Transparent explanation of financial implications',
            'Practical workshops and structured sessions',
            'Simplified breakdown of regulatory updates',
            'Long-term capability building',
        ],
        closing: 'Financial clarity reduces anxiety. Understanding builds confidence.',
    },
];

const steps = [
    {
        num: '01',
        title: 'Understand & Assess',
        body: 'Every engagement begins with structured evaluation. We review existing filings, financial statements, tax exposure and documentation systems to build a complete financial picture.',
        points: [
            'Compliance history analysis',
            'Risk exposure mapping',
            'Cash flow behaviour review',
            'Understanding operational objectives',
        ],
        closing: 'Clarity precedes strategy.',
    },
    {
        num: '02',
        title: 'Structure & Plan',
        body: 'Once the current position is mapped, we design a financial and compliance framework aligned to business objectives.',
        points: [
            'Compliance calendar definition',
            'Tax planning roadmap',
            'Reporting frequency structuring',
            'Capital & cash planning architecture',
        ],
        closing: 'Planning transforms scattered efforts into structured progress.',
    },
    {
        num: '03',
        title: 'Execute & Monitor',
        body: 'Execution builds credibility. We implement statutory filings, reporting systems and performance monitoring with measurable checkpoints.',
        points: [
            'Timely filings',
            'MIS reporting implementation',
            'KPI tracking',
            'Continuous compliance monitoring',
        ],
        closing: 'Structure creates stability.',
    },
    {
        num: '04',
        title: 'Advise & Optimise',
        body: 'Financial systems must evolve with growth. We provide periodic review discussions and strategic inputs to refine processes and optimise decisions.',
        points: [
            'Scenario planning',
            'Risk mitigation',
            'Capital allocation optimisation',
            'Strategic financial support',
        ],
        closing: 'The goal is long-term financial confidence.',
    },
];

export default function TrustAuthority() {
    return (
        <section className="py-16 lg:py-[80px] bg-soft-grey">
            <div className="max-w-[1140px] mx-auto px-6 sm:px-8 lg:px-12">

                {/* Divider above */}
                <div className="border-t border-[#E6EAEE] mb-16" />

                {/* Section Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-[70px]"
                >
                    <p className="text-xs uppercase tracking-[2px] text-label mb-4">
                        Structured. Measurable. Responsible.
                    </p>
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy-deep mb-4 tracking-tight">
                        Why Work With Us
                    </h2>
                    <p className="text-charcoal text-base max-w-[700px] mx-auto leading-relaxed">
                        A disciplined and insight-driven approach to compliance, advisory and long-term financial capability building.
                    </p>
                </motion.div>

                {/* PART 1: Differentiation Pillars – 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[30px] mb-[100px]">
                    {pillars.map((pillar, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.5 }}
                            className="bg-white p-10 rounded-lg shadow-[0_10px_25px_rgba(0,0,0,0.04)] border-l-[3px] border-l-gold-muted hover:-translate-y-1.5 hover:shadow-[0_15px_35px_rgba(0,0,0,0.07)] transition-all duration-300"
                        >
                            <h3 className="text-lg font-bold text-navy-deep mb-3">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-charcoal italic mb-2 leading-relaxed">
                                {pillar.intro}
                            </p>
                            <p className="text-sm text-charcoal mb-4 leading-relaxed">
                                {pillar.body}
                            </p>
                            <p className="text-xs font-semibold text-label uppercase tracking-wider mb-3">
                                {pillar.pointsLabel}
                            </p>
                            <ul className="space-y-2 mb-4">
                                {pillar.points.map((point, pIdx) => (
                                    <li key={pIdx} className="flex items-start gap-2.5 text-sm text-charcoal">
                                        <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold-muted flex-shrink-0" />
                                        {point}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-sm font-medium text-navy-deep italic">
                                {pillar.closing}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* PART 2: Structured Approach – Horizontal Timeline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-[60px]"
                >
                    <h2 className="text-2xl sm:text-3xl font-bold text-navy-deep mb-3 tracking-tight">
                        Our Structured Approach
                    </h2>
                    <p className="text-charcoal text-base">
                        A clear and continuity-driven engagement framework.
                    </p>
                </motion.div>

                {/* Desktop Timeline */}
                <div className="hidden md:block">
                    {/* Connector line */}
                    <div className="relative mb-12">
                        <div className="absolute top-6 left-[12.5%] right-[12.5%] h-[2px] bg-gold-muted/30" />
                        <div className="grid grid-cols-4 gap-6">
                            {steps.map((step, idx) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: idx * 0.15, duration: 0.5 }}
                                    className="text-center relative"
                                >
                                    {/* Step Number Circle */}
                                    <div className="relative z-10 mx-auto w-12 h-12 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm mb-6 shadow-lg">
                                        {step.num}
                                    </div>

                                    {/* Background faded number */}
                                    <div className="absolute top-0 left-1/2 -translate-x-1/2 text-[80px] font-bold text-navy/[0.04] leading-none pointer-events-none select-none">
                                        {step.num}
                                    </div>

                                    {/* Content */}
                                    <h4 className="text-base font-bold text-navy-deep mb-3">
                                        {step.title}
                                    </h4>
                                    <p className="text-xs text-charcoal leading-relaxed mb-3">
                                        {step.body}
                                    </p>
                                    <ul className="space-y-1 mb-3">
                                        {step.points.map((p, pIdx) => (
                                            <li key={pIdx} className="text-xs text-charcoal/80">
                                                • {p}
                                            </li>
                                        ))}
                                    </ul>
                                    <p className="text-xs font-medium text-navy-deep italic">
                                        {step.closing}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Mobile Timeline – Vertical */}
                <div className="md:hidden space-y-8">
                    {steps.map((step, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: idx * 0.1, duration: 0.4 }}
                            className="flex gap-4"
                        >
                            {/* Vertical connector */}
                            <div className="flex flex-col items-center">
                                <div className="w-10 h-10 rounded-full bg-navy flex items-center justify-center text-white font-bold text-sm flex-shrink-0">
                                    {step.num}
                                </div>
                                {idx < steps.length - 1 && (
                                    <div className="w-[2px] flex-1 bg-gold-muted/30 mt-2" />
                                )}
                            </div>

                            {/* Content */}
                            <div className="pb-6">
                                <h4 className="text-base font-bold text-navy-deep mb-2">
                                    {step.title}
                                </h4>
                                <p className="text-sm text-charcoal leading-relaxed mb-2">
                                    {step.body}
                                </p>
                                <ul className="space-y-1 mb-2">
                                    {step.points.map((p, pIdx) => (
                                        <li key={pIdx} className="text-xs text-charcoal/80">
                                            • {p}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs font-medium text-navy-deep italic">
                                    {step.closing}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
