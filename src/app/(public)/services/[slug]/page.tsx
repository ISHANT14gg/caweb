import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import { Metadata } from "next";

// Data
const services = {
    "setup": {
        title: "Business Setup in India",
        subtitle: "Incorporation & Structuring",
        description: "Complete support for company incorporation, LLP registration, and startup structuring.",
        longDescription: "We provide end-to-end support for setting up your business in India. Structure precedes scale. From choosing the correct entity classification to handling regulatory registration formalities, we ensure your venture begins on defensible, compliant foundations.",
        features: [
            "Company Incorporation (Pvt Ltd, PLC)",
            "LLP Registration & Structuring",
            "One Person Company (OPC) Registration",
            "Partnership Firm Legalities",
            "Startup India Recognition & Tax Benefits"
        ]
    },
    "fdi": {
        title: "Foreign Direct Investment",
        subtitle: "Cross-Border Structuring",
        description: "Expert guidance on FDI regulations, RBI compliance, and setting up Indian subsidiaries.",
        longDescription: "Navigating India's FDI regulations requires extreme precision. We offer expert strategic advisory to international businesses seeking to invest in India, ensuring airtight compliance with all RBI, FEMA, and cross-border taxation frameworks.",
        features: [
            "FDI Inbound Structuring",
            "RBI & FEMA Regulatory Compliance",
            "Liaison & Branch Office Setup",
            "Foreign Subsidiary Incorporation",
            "Fund Repatriation Strategy"
        ]
    },
    "audit": {
        title: "Audit & Assurance",
        subtitle: "Verification & Transparency",
        description: "Statutory audit, internal audit, and risk advisory services for corporate excellence.",
        longDescription: "Our assurance methodology looks beyond standard verification. We perform independent, rigorous evaluation of your financial architecture—identifying exposure points, strengthening internal controls, and ensuring absolute statutory compliance.",
        features: [
            "Statutory Corporate Audit",
            "Internal Process & Risk Audit",
            "Tax Audit Compliance",
            "Forensic & Investigative Audit",
            "Inventory & Systems Audit"
        ]
    },
    "tax": {
        title: "Taxation Services",
        subtitle: "Direct & Indirect Liability Strategy",
        description: "Comprehensive direct (Income Tax) and indirect (GST) tax planning and compliance.",
        longDescription: "We engineer comprehensive taxation strategies designed to optimise operational liquidity while maintaining uncompromising regulatory alignment. Our teams manage both Direct Assessment (Income Tax) and Indirect Exposure (GST) with precision.",
        features: [
            "Corporate & Individual Tax Filing",
            "GST Implementation & Reconciliations",
            "Advance Tax Positioning",
            "TDS / TCS Withholding Compliance",
            "Assessment & Litigation Representation"
        ]
    },
    "outsourcing": {
        title: "Outsourcing Services",
        subtitle: "Virtual CFO & Operations",
        description: "Virtual CFO, payroll processing, and accounting outsourcing services.",
        longDescription: "Delegate operational friction. We assume control of your internal financial mechanics—delivering Fortune-500 level accounting, rigorous payroll discipline, and Virtual CFO advisory without the overhead of an internal department.",
        features: [
            "End-to-end Bookkeeping",
            "Payroll & Labour Compliance",
            "Virtual CFO Strategic Advisory",
            "Receivables & Payables Automation",
            "Board-level Financial Reporting"
        ]
    },
    "compliance": {
        title: "Corporate Compliance",
        subtitle: "Secretarial & Regulatory",
        description: "Secretarial services, ROC filings, and regulatory compliance management.",
        longDescription: "Corporate liability often hides in administrative oversight. We manage the entirety of your secretarial and regulatory calendar, ensuring flawless MCA submissions, documented board governance, and zero default penalties.",
        features: [
            "Annual ROC Filings & xBRL",
            "Director & Shareholder Structuring",
            "Board Meeting & Minutes Governance",
            "Capital Alteration & Share Transfers",
            "Due Diligence Preparation"
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
                                        <a href="tel:+919805931332" className="block text-gray-600 hover:text-gray-900 transition-colors">
                                            +91 98059 31332
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
