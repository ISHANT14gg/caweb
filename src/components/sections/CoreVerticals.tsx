'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight } from 'lucide-react';

/* ───────────────────────────────────────────────
   CORE PRACTICE VERTICALS – 2x2 Accordion Grid
   Card → hover shows Level 1 → click expands Level 2
   Only one Level 1 open at a time per card
   ─────────────────────────────────────────────── */

interface SubItem {
    title: string;
    items: string[];
}

interface VerticalCard {
    title: string;
    level1: SubItem[];
}

const verticals: VerticalCard[] = [
    {
        title: 'Indirect & Direct Tax Compliance',
        level1: [
            {
                title: 'GST Compliance & Advisory',
                items: [
                    'GST Registration & Amendments',
                    'GSTR-1, GSTR-3B, GSTR-9, GSTR-9C Filing',
                    'Input Tax Credit (ITC) Reconciliation',
                    'GST Audit Support',
                    'E-Way Bill Advisory',
                    'Notice Reply Drafting',
                    'Assessment & Litigation Support',
                ],
            },
            {
                title: 'Income Tax Compliance & Representation',
                items: [
                    'ITR Filing (Individuals / Firms / Companies / Trusts)',
                    'Tax Audit u/s 44AB',
                    'TDS / TCS Returns',
                    'Advance Tax Planning',
                    'Scrutiny & Assessment Handling',
                    'Rectification & Appeals',
                ],
            },
            {
                title: 'Statutary & Regulatory Registrations',
                items: [
                    'PAN / TAN Processing',
                    'MSME (Udyam) Registration',
                    'Professional Tax',
                    'Shops & Establishment',
                    'Basic Labour Compliance',
                    'Periodic Statutory Filings',
                ],
            },
        ],
    },
    {
        title: 'Business Incorporation & Structuring Advisory',
        level1: [
            {
                title: 'Entity Incorporation & ROC Compliance',
                items: [
                    'Private Limited / LLP / OPC Formation',
                    'DIN & DSC Processing',
                    'MOA & AOA Drafting',
                    'SPICe+ Filing',
                    'AOC-4 & MGT-7 Annual Filings',
                    'Director & Share Capital Changes',
                ],
            },
            {
                title: 'Capital & Shareholding Structuring',
                items: [
                    'Founders Equity Planning',
                    'Share Subscription Compliance',
                    'ESOP Advisory',
                    'Convertible Instruments Structuring',
                    'Valuation Coordination',
                ],
            },
            {
                title: 'Startup Regulatory Framework',
                items: [
                    'DPIIT Registration',
                    'Startup India Recognition',
                    'Compliance Roadmap',
                    'Initial Financial Architecture',
                ],
            },
        ],
    },
    {
        title: 'Virtual CFO & Financial Strategy',
        level1: [
            {
                title: 'Financial Modelling & Forecasting',
                items: [
                    '3–5 Year Financial Projections',
                    'Revenue & Cost Modelling',
                    'Break-even Analysis',
                    'Scenario & Sensitivity Testing',
                    'Budget Structuring',
                ],
            },
            {
                title: 'MIS & Performance Reporting',
                items: [
                    'Monthly MIS Framework',
                    'KPI & Ratio Analysis',
                    'Departmental Cost Monitoring',
                    'Profitability Tracking',
                    'Financial Dashboard Setup',
                ],
            },
            {
                title: 'Cash Flow & Working Capital',
                items: [
                    'Cash & Fund Flow Statements',
                    'Working Capital Assessment',
                    'Banking Documentation Support',
                    'Financial Discipline Systems',
                ],
            },
            {
                title: 'Fundraising & Strategic Advisory',
                items: [
                    'Investor Readiness',
                    'Data Room Structuring',
                    'Pitch Deck Financial Inputs',
                    'Valuation Discussion Support',
                    'Expansion Strategy Planning',
                ],
            },
        ],
    },
    {
        title: 'Financial Literacy & Applied Finance Education',
        level1: [
            {
                title: 'Entrepreneur Finance Programs',
                items: [
                    'Finance for Non-Finance Founders',
                    'Financial Statement Reading',
                    'Costing & Pricing Basics',
                    'GST Practical Implementation',
                ],
            },
            {
                title: 'Tax Awareness Workshops',
                items: [
                    'Income Tax Awareness Sessions',
                    'GST Implementation Sessions',
                    'Compliance Calendar Training',
                    'Record-Keeping Discipline',
                ],
            },
            {
                title: 'Skill Academia Modules',
                items: [
                    'Basics of Accounting',
                    'Practical Bookkeeping Insights',
                    'Understanding Cash vs Profit',
                    'Tax Planning for Salaried Professionals',
                ],
            },
            {
                title: 'Digital Learning & Policy Insights',
                items: [
                    'Budget Analysis Sessions',
                    'Policy Amendment Breakdown',
                    'Structured Video Modules',
                    'Compliance Updates',
                ],
            },
        ],
    },
];

function AccordionCard({ card }: { card: VerticalCard }) {
    const [isHovered, setIsHovered] = useState(false);
    const [isExpanded, setIsExpanded] = useState(false);
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const handleLevel1Click = (e: React.MouseEvent, index: number) => {
        e.stopPropagation();
        setOpenIndex(openIndex === index ? null : index);
    };

    const showContent = isHovered || isExpanded;

    return (
        <motion.div
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => {
                setIsHovered(false);
                setOpenIndex(null);
            }}
            onClick={() => setIsExpanded(!isExpanded)}
            className="bg-white border border-border-soft rounded-lg p-6 sm:p-8 transition-all duration-300 hover:-translate-y-[5px] hover:shadow-lg hover:border-l-[3px] hover:border-l-gold cursor-pointer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
        >
            {/* Card Title */}
            <h3 className="text-lg font-bold text-navy-deep mb-4 leading-snug">
                {card.title}
            </h3>

            {/* Level 1 – Visible on Hover */}
            <AnimatePresence>
                {showContent && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                    >
                        <div className="space-y-1 pt-2" onClick={(e) => e.stopPropagation()}>
                            {card.level1.map((item, idx) => (
                                <div key={idx}>
                                    {/* Level 1 Head */}
                                    <button
                                        onClick={(e) => handleLevel1Click(e, idx)}
                                        className={`w-full flex items-center gap-2 text-left px-3 py-2.5 text-sm font-semibold rounded transition-colors ${openIndex === idx
                                            ? 'text-navy bg-soft-grey border-l-[3px] border-l-gold'
                                            : 'text-charcoal hover:bg-soft-grey/50'
                                            }`}
                                    >
                                        <ChevronRight
                                            className={`h-4 w-4 text-gold flex-shrink-0 transition-transform duration-200 ${openIndex === idx ? 'rotate-90' : ''
                                                }`}
                                        />
                                        <span>{item.title}</span>
                                    </button>

                                    {/* Level 2 – Sub-items */}
                                    <AnimatePresence>
                                        {openIndex === idx && (
                                            <motion.ul
                                                initial={{ opacity: 0, height: 0 }}
                                                animate={{ opacity: 1, height: 'auto' }}
                                                exit={{ opacity: 0, height: 0 }}
                                                transition={{ duration: 0.25 }}
                                                className="overflow-hidden pl-9 pr-2 pb-2"
                                            >
                                                {item.items.map((sub, sIdx) => (
                                                    <li
                                                        key={sIdx}
                                                        className="text-xs text-charcoal/80 py-1.5 border-b border-divider last:border-b-0 leading-relaxed"
                                                    >
                                                        – {sub}
                                                    </li>
                                                ))}
                                            </motion.ul>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
}

export default function CoreVerticals() {
    return (
        <section id="services" className="py-16 lg:py-[80px] bg-soft-grey">
            <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

                {/* Section Header */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy tracking-tight mb-4">
                        Structured Compliance. Strategic Advisory. Financial Capability Building.
                    </h2>
                </motion.div>

                {/* 2x2 Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {verticals.map((card, index) => (
                        <AccordionCard key={index} card={card} />
                    ))}
                </div>
            </div>
        </section>
    );
}
