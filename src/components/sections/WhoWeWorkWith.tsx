'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

/* ───────────────────────────────────────────────
   SECTION 4 – WHO WE WORK WITH
   Vertical Segmented Navigation + Content Panel
   ─────────────────────────────────────────────── */

interface Segment {
    label: string;
    title: string;
    description: string;
    areas: string[];
    cta: string;
    ctaHref: string;
}

const segments: Segment[] = [
    {
        label: 'Individual Taxpayers & Retail Clients',
        title: 'Individual Taxpayers & Retail Clients',
        description: 'For salaried professionals, traders and small business owners seeking clarity, compliance and disciplined tax management.',
        areas: [
            'Accurate & timely Income Tax Return filing',
            'GST compliance for small businesses',
            'Advance tax planning & optimisation',
            'Notice handling & regulatory guidance',
            'Documentation discipline & advisory clarity',
        ],
        cta: 'Explore Individual Solutions',
        ctaHref: '/services',
    },
    {
        label: 'Startups & Emerging Businesses',
        title: 'Startups & Emerging Businesses',
        description: 'For founders building scalable ventures requiring structured incorporation, compliance discipline and financial architecture from day one.',
        areas: [
            'Private Limited / LLP Incorporation & ROC compliance',
            'Compliance calendar structuring',
            'Financial modelling & projections',
            'Capital structuring & founder equity planning',
            'Investor readiness preparation',
        ],
        cta: 'Explore Startup Solutions',
        ctaHref: '/services',
    },
    {
        label: 'Established Businesses & Growing Enterprises',
        title: 'Established & Growing Enterprises',
        description: 'For businesses strengthening systems, performance visibility and financial strategy.',
        areas: [
            'Advanced GST & Income Tax management',
            'Monthly MIS & KPI reporting',
            'Working capital & cash flow structuring',
            'Profitability & cost control analysis',
            'Virtual CFO advisory',
        ],
        cta: 'Explore Enterprise Solutions',
        ctaHref: '/services',
    },
    {
        label: 'Incubators, Investors & Professional Platforms',
        title: 'Incubators & Professional Platforms',
        description: 'For institutional ecosystems supporting entrepreneurs and early-stage ventures.',
        areas: [
            'Startup financial evaluation',
            'Compliance workshops & sessions',
            'Investor deck financial inputs',
            'Due diligence support',
            'Advisory partnerships',
        ],
        cta: 'Explore Collaboration',
        ctaHref: '/contact',
    },
    {
        label: 'Aspiring Entrepreneurs & Financial Learners',
        title: 'Aspiring Entrepreneurs & Financial Learners',
        description: 'For individuals building financial awareness and entrepreneurial capability.',
        areas: [
            'Practical finance programs',
            'GST & Income Tax workshops',
            'Skill academia modules',
            'Policy & budget breakdown sessions',
            'Structured digital learning content',
        ],
        cta: 'Explore Learning Programs',
        ctaHref: '/services',
    },
];

export default function WhoWeWorkWith() {
    const [activeIndex, setActiveIndex] = useState(0);
    const active = segments[activeIndex];

    return (
        <section className="py-16 lg:py-[80px] bg-white">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

                {/* Divider */}
                <div className="border-t border-divider mb-16" />

                {/* Heading Block */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-8 lg:mb-[60px]"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                        Who We Work With
                    </h2>
                    <p className="text-sm font-semibold text-gold uppercase tracking-widest mb-4">
                        Structured Solutions for Diverse Financial Journeys
                    </p>
                    <p className="text-charcoal text-base max-w-3xl mx-auto leading-relaxed">
                        We serve individuals, startups, enterprises, institutions and financially aware learners through disciplined compliance and strategic financial advisory.
                    </p>
                </motion.div>

                {/* Main Layout – Desktop: 2 columns, Mobile: stacked */}
                <div className="flex flex-col lg:flex-row gap-0 lg:gap-0">

                    {/* LEFT – Segment Navigation: horizontal scroll on mobile, vertical on desktop */}
                    <div className="w-full lg:w-[35%] border border-divider rounded-lg lg:rounded-r-none overflow-hidden">
                        <div className="flex lg:flex-col overflow-x-auto lg:overflow-x-visible scrollbar-hide">
                            {segments.map((seg, idx) => (
                                <button
                                    key={idx}
                                    onClick={() => setActiveIndex(idx)}
                                    className={`flex-shrink-0 lg:flex-shrink lg:w-full flex items-center justify-between text-left px-4 lg:px-5 py-3 lg:py-[18px] text-xs lg:text-sm transition-all duration-200 border-b lg:border-b border-divider last:border-b-0 whitespace-nowrap lg:whitespace-normal group ${activeIndex === idx
                                        ? 'bg-white text-navy font-semibold border-l-0 lg:border-l-[3px] lg:border-l-gold border-b-[3px] lg:border-b-0 border-b-gold'
                                        : 'text-charcoal hover:bg-[#F8F9FB] border-l-0 lg:border-l-[3px] lg:border-l-transparent'
                                        }`}
                                >
                                    <span className="leading-snug">{seg.label}</span>
                                    <ChevronRight
                                        className={`h-4 w-4 flex-shrink-0 transition-transform duration-200 hidden lg:block ${activeIndex === idx
                                            ? 'text-gold translate-x-1'
                                            : 'text-label group-hover:translate-x-0.5'
                                            }`}
                                    />
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* RIGHT – Content Display Panel (65%) */}
                    <div className="w-full lg:w-[65%] bg-[#F9FAFB] border border-divider lg:border-l-0 rounded-lg lg:rounded-l-none p-8 lg:p-10 border-l-2 border-l-gold-muted shadow-sm min-h-[380px] flex flex-col justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeIndex}
                                initial={{ opacity: 0, x: 10 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.3 }}
                            >
                                <h3 className="text-xl font-bold text-navy mb-3">
                                    {active.title}
                                </h3>
                                <p className="text-charcoal text-sm leading-relaxed mb-6">
                                    {active.description}
                                </p>
                                <p className="text-xs font-semibold text-label uppercase tracking-widest mb-4">
                                    Core Support Areas:
                                </p>
                                <ul className="space-y-2.5 mb-8">
                                    {active.areas.map((area, idx) => (
                                        <li key={idx} className="flex items-start gap-2.5 text-sm text-charcoal">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                                            {area}
                                        </li>
                                    ))}
                                </ul>
                                <Link
                                    href={active.ctaHref}
                                    className="inline-flex items-center text-sm font-semibold text-navy hover:text-gold transition-colors group"
                                >
                                    {active.cta}
                                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
