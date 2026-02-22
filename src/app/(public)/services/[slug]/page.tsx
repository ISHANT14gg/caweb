import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Metadata } from "next";

// Data
const services = {
    // PILLAR 1: Indirect & Direct Tax Compliance
    "gst-compliance": {
        title: "GST Compliance & Advisory",
        subtitle: "Indirect Tax Management",
        description: "Comprehensive GST registration, filing, reconciliation, and audit support.",
        longDescription: "Indirect taxation requires structural discipline. We manage the entire GST compliance lifecycle—from registration and monthly filings to Annual Returns. We ensure seamless Input Tax Credit (ITC) reconciliation and minimal risk of assessment notices.",
        features: [
            "GST Registration & Amendments",
            "GSTR-1, GSTR-3B, GSTR-9, GSTR-9C Filing",
            "Input Tax Credit (ITC) Reconciliation",
            "GST Audit Support & E-Way Bill Advisory",
            "Notice Reply Drafting & Litigation Support"
        ]
    },
    "income-tax": {
        title: "Income Tax Compliance & Representation",
        subtitle: "Direct Tax Planning",
        description: "Strategic income tax filing, advance tax planning, and assessment handling.",
        longDescription: "We engineer comprehensive taxation strategies designed to optimise operational liquidity while maintaining uncompromising regulatory alignment. Our teams manage Direct Assessment with precision, ensuring timely ITR filings, tax audits, and representation.",
        features: [
            "ITR Filing (Individuals / Firms / Companies / Trusts)",
            "Tax Audit u/s 44AB",
            "TDS / TCS Returns",
            "Advance Tax Planning",
            "Scrutiny, Rectification & Appeals"
        ]
    },
    "statutory-registrations": {
        title: "Statutory & Regulatory Registrations",
        subtitle: "Foundational Compliance",
        description: "PAN, MSME, Professional Tax, and basic labour compliance processing.",
        longDescription: "Corporate liability often hides in administrative oversight. We handle all initial and recurring statutory business registrations required by local and central authorities, ensuring your business begins and operates on a legally solid foundation.",
        features: [
            "PAN / TAN Processing",
            "MSME (Udyam) Registration & Professional Tax",
            "Shops & Establishment Act",
            "Basic Labour Compliance",
            "Periodic Statutory Filings"
        ]
    },

    // PILLAR 2: Business Incorporation & Structuring Advisory
    "entity-incorporation": {
        title: "Entity Incorporation & ROC",
        subtitle: "Business Setup in India",
        description: "Private Limited, LLP formation, and ongoing MCA/ROC compliance.",
        longDescription: "Structure precedes scale. From choosing the correct entity classification to handling regulatory registration formalities, we ensure your venture begins on defensible, compliant foundations. We manage SPICe+ filings, MOA drafting, and annual ROC compliance.",
        features: [
            "Private Limited / LLP / OPC Formation",
            "DIN & DSC Processing",
            "MOA & AOA Drafting",
            "AOC-4 & MGT-7 Annual Filings",
            "Director & Share Capital Changes"
        ]
    },
    "capital-structuring": {
        title: "Capital & Shareholding Structuring",
        subtitle: "Equity Structuring",
        description: "Founders equity planning, valuation, and convertible instruments advisory.",
        longDescription: "Your capitalization table dictates future control and growth capability. We provide strategic consulting on founders' equity distribution, ESOP formation, and structuring of convertible notes to ensure alignment with long-term growth objectives.",
        features: [
            "Founders Equity Planning",
            "Share Subscription Compliance",
            "ESOP Advisory",
            "Convertible Instruments Structuring",
            "Valuation Coordination"
        ]
    },
    "startup-regulatory": {
        title: "Startup Regulatory Framework",
        subtitle: "DPIIT & Recognition Compliance",
        description: "Startup India recognition, compliance roadmaps, and financial architecture.",
        longDescription: "Scaling requires preparation beyond pitch decks. We guide early-stage ventures through the DPIIT registration process, secure Startup India benefits, and lay down the initial financial architecture required for sustainable venture scale.",
        features: [
            "DPIIT Registration",
            "Startup India Recognition",
            "Compliance Roadmap Implementation",
            "Initial Financial Architecture",
            "Regulatory Advisory for Founders"
        ]
    },

    // PILLAR 3: Virtual CFO & Financial Strategy
    "financial-modelling": {
        title: "Financial Modelling & Forecasting",
        subtitle: "Strategic Projection",
        description: "Cost modelling, revenue projections, and sensitivity testing.",
        longDescription: "Numbers without interpretation limit decision-making. We construct robust 3-to-5 year financial models that simulate revenue growth, operational costs, and capital requirements, equipping management with a predictable framework for expansion.",
        features: [
            "3–5 Year Financial Projections",
            "Revenue & Cost Modelling",
            "Break-even Analysis",
            "Scenario & Sensitivity Testing",
            "Budget Structuring"
        ]
    },
    "mis-reporting": {
        title: "MIS & Performance Reporting",
        subtitle: "Data-Driven Financial Review",
        description: "Monthly MIS, KPI tracking, and departmental profitability monitoring.",
        longDescription: "Delegate operational friction. We establish systematic Management Information System (MIS) reporting that translates raw accounting data into actionable executive insights, monitoring KPI ratios, departmental costs, and gross profitability.",
        features: [
            "Monthly MIS Framework",
            "KPI & Ratio Analysis",
            "Departmental Cost Monitoring",
            "Profitability Tracking",
            "Financial Dashboard Setup"
        ]
    },
    "cash-flow": {
        title: "Cash Flow & Working Capital",
        subtitle: "Liquidity Discipline",
        description: "Working capital optimization and cash flow statement analysis.",
        longDescription: "Revenue is vanity; cash flow is sanity. Our advisory focuses heavily on working capital discipline, helping businesses forecast liquidity requirements, optimize receivables, and construct resilient funding documentation for banking facilities.",
        features: [
            "Cash & Fund Flow Statements",
            "Working Capital Assessment",
            "Banking Documentation Support",
            "Financial Discipline Systems",
            "Liquidity Forecasting"
        ]
    },
    "fundraising": {
        title: "Fundraising & Strategic Advisory",
        subtitle: "Investor Readiness",
        description: "Data room preparation, pitch deck financial inputs, and valuation support.",
        longDescription: "Preparation dictates valuation. We act as your financial co-pilot during funding rounds, organizing pristine due diligence data rooms, validating pitch deck financials, and providing structured advisory during investor negotiations.",
        features: [
            "Investor Readiness Preparation",
            "Data Room Structuring",
            "Pitch Deck Financial Inputs",
            "Valuation Discussion Support",
            "Expansion Strategy Planning"
        ]
    },

    // PILLAR 4: Financial Literacy & Education
    "entrepreneur-finance": {
        title: "Entrepreneur Finance Programs",
        subtitle: "Financial Literacy & Education",
        description: "Finance for non-finance founders, costing basics, and statements.",
        longDescription: "Demystifying corporate finance for founders. Our structured programs are designed to equip non-finance business owners with the ability to read balance sheets, understand cost-drivers, and make data-backed pricing decisions.",
        features: [
            "Finance for Non-Finance Founders",
            "Financial Statement Reading",
            "Costing & Pricing Basics",
            "GST Practical Implementation",
            "Working Capital Cycles"
        ]
    },
    "tax-workshops": {
        title: "Tax Awareness Workshops",
        subtitle: "Financial Literacy & Education",
        description: "Income tax awareness, GST implementation, and record-keeping.",
        longDescription: "A proactive approach to regulatory awareness. We conduct extensive workshops for corporate employees and business teams to cultivate discipline around tax filing, compliance calendars, and essential documentation standards.",
        features: [
            "Income Tax Awareness Sessions",
            "GST Implementation & Compliance Training",
            "Record-Keeping Discipline",
            "Tax Saving Strategies for Salaried Professionals"
        ]
    }
};

// Next.js 13+ dynamic metadata Generation
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        return { title: 'Service Not Found | Jyoti Thakur & Associates' };
    }

    return {
        title: `${service.title} | Financial Structuring & Compliance | Jyoti Thakur & Co.`,
        description: service.description,
    };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        return notFound();
    }

    return (
        <div className="bg-white text-gray-900 font-sans selection:bg-gray-200 overflow-hidden">

            {/* SECTION 1 — HEADER */}
            <section className="bg-white pt-[140px] pb-[80px] px-6 md:px-12 w-full border-b border-gray-100">
                <div className="max-w-[1000px] mx-auto">
                    <Link href="/services" className="inline-flex items-center text-xs tracking-widest uppercase font-bold text-gray-400 hover:text-gray-900 transition-colors mb-12 group">
                        <ArrowLeft className="h-4 w-4 mr-3 transform group-hover:-translate-x-1 transition-transform" />
                        Return to All Services
                    </Link>

                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <p className="text-sm md:text-base tracking-[0.2em] text-gray-500 uppercase font-semibold mb-4">
                            {service.subtitle}
                        </p>
                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-medium tracking-tight text-gray-900 mb-8 max-w-4xl leading-tight">
                            {service.title}.
                        </h1>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTION 2 — CONTENT GRID */}
            <section className="bg-white py-[100px] px-6 md:px-12 w-full">
                <div className="max-w-[1000px] mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24">

                        {/* LEFT: Core Narrative (7 Cols) */}
                        <div className="md:col-span-7">
                            <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8}>
                                <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-6">Execution Overview</h2>
                                <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-16">
                                    {service.longDescription}
                                </p>

                                <div className="border-t border-gray-100 pt-10">
                                    <h2 className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-8">Structural Scope</h2>
                                    <ul className="space-y-6">
                                        {service.features.map((feature, index) => (
                                            <li key={index} className="flex items-start group">
                                                <span className="text-gray-300 mr-4 mt-1 font-light tracking-tighter">0{index + 1}</span>
                                                <span className="text-gray-800 font-medium text-lg border-b border-transparent group-hover:border-gray-300 transition-colors">
                                                    {feature}
                                                </span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </ScrollAnimation>
                        </div>

                        {/* RIGHT: Engagement Block (5 Cols) */}
                        <div className="md:col-span-5">
                            <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8}>
                                <div className="bg-[#F8F9FB] p-10 border border-gray-100 sticky top-32">
                                    <h3 className="text-xl font-medium text-gray-900 mb-4">Engage This Service</h3>
                                    <p className="text-gray-600 mb-10 leading-relaxed text-sm">
                                        All engagements begin with a structured diagnostic session to align on requirements and map exact deliverables.
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="w-full flex items-center justify-between px-6 py-5 bg-[#1F2A37] text-white font-medium hover:bg-black transition-colors rounded-sm group"
                                    >
                                        Schedule Consultation
                                        <ArrowRight className="h-5 w-5 transform group-hover:translate-x-1 transition-transform" />
                                    </Link>

                                    <div className="mt-8 pt-8 border-t border-gray-200">
                                        <p className="text-xs uppercase tracking-widest text-gray-400 font-bold mb-3">Direct Connect</p>
                                        <a href="mailto:info@jyotithakurassociates.com" className="block text-gray-900 font-medium hover:text-blue-600 transition-colors mb-1">
                                            info@jyotithakurassociates.com
                                        </a>
                                        <a href="tel:+917018773240" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                            +91 70187 73240
                                        </a>
                                    </div>
                                </div>
                            </ScrollAnimation>
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
