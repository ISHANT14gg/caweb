import { notFound } from "next/navigation";
import Link from "next/link";
import {
    Calculator,
    Shield,
    TrendingUp,
    FileText,
    Building2,
    Landmark,
    CheckCircle,
    ArrowLeft,
    Globe
} from "lucide-react";

// Updated to match services/page.tsx IDs
const services = {
    "setup": {
        title: "Business Setup in India",
        description: "Complete support for company incorporation, LLP registration, and startup structuring.",
        icon: Building2,
        longDescription: "We provide end-to-end support for setting up your business in India. From choosing the right entity structure to handling all registration formalities, we ensure a smooth start for your venture.",
        features: [
            "Company Incorporation (Pvt Ltd, PLC)",
            "LLP Registration",
            "One Person Company (OPC) Registration",
            "Partnership Firm Registration",
            "Startup India Recognition"
        ]
    },
    "fdi": {
        title: "Foreign Direct Investment (FDI)",
        description: "Expert guidance on FDI regulations, RBI compliance, and setting up Indian subsidiaries.",
        icon: Globe,
        longDescription: "Navigating India's FDI regulations can be complex. We offer expert advisory services to international businesses looking to invest in India, ensuring full compliance with RBI and FEMA guidelines.",
        features: [
            "FDI Advisory & Structuring",
            "RBI & FEMA Compliance",
            "Setting up Liaison / Branch Offices",
            "Foreign Subsidiary Incorporation",
            "Repatriation of Funds"
        ]
    },
    "audit": {
        title: "Audit & Assurance Services",
        description: "Statutory audit, internal audit, and risk advisory services for corporate excellence.",
        icon: Shield,
        longDescription: "Our audit services go beyond just numbers. We provide independent verification of your financial records, ensuring accuracy, transparency, and compliance with statutory requirements.",
        features: [
            "Statutory Audit",
            "Internal Audit",
            "Tax Audit",
            "Forensic Audit",
            "Stock & Receivable Audit"
        ]
    },
    "tax": {
        title: "Taxation Services",
        description: "Comprehensive direct (Income Tax) and indirect (GST) tax planning and compliance.",
        icon: Calculator,
        longDescription: "We provide comprehensive taxation services to help you minimize liabilities and stay compliant. Our team handles both Direct Tax (Income Tax) and Indirect Tax (GST) matters efficiently.",
        features: [
            "Income Tax Return Filing",
            "GST Registration & Returns",
            "Tax Planning & Advisory",
            "TDS / TCS Compliance",
            "Litigation Support"
        ]
    },
    "outsourcing": {
        title: "Outsourcing Services",
        description: "Virtual CFO, payroll processing, and accounting outsourcing services.",
        icon: FileText,
        longDescription: "Focus on your core business while we handle your financial operations. Our outsourcing services include bookkeeping, payroll, and virtual CFO support tailored to your needs.",
        features: [
            "Accounting & Bookkeeping",
            "Payroll Processing",
            "Virtual CFO Services",
            "Accounts Payable/Receivable Management",
            "Financial Reporting"
        ]
    },
    "compliance": {
        title: "Corporate Compliance",
        description: "Secretarial services, ROC filings, and regulatory compliance management.",
        icon: Landmark,
        longDescription: "Stay compliant with India's ever-evolving corporate laws. We handle all your secretarial and regulatory compliance needs, from ROC filings to annual returns.",
        features: [
            "Annual ROC Filing",
            "Director Identification Number (DIN)",
            "Board Meeting Minutes",
            "Share Transfer & Allotment",
            "Corporate Governance Advisory"
        ]
    }
};

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params;
    const service = services[slug as keyof typeof services];

    if (!service) {
        return (
            <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
                <h1 className="text-2xl font-bold text-gray-900 mb-4">Service Not Found</h1>
                <p className="text-gray-600 mb-6">The service you are looking for does not exist.</p>
                <Link href="/services" className="text-gold hover:underline flex items-center">
                    <ArrowLeft className="h-4 w-4 mr-2" /> Back to Services
                </Link>
            </div>
        )
    }

    const Icon = service.icon;

    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-navy-deep text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <Link href="/services" className="inline-flex items-center text-gray-300 hover:text-white mb-6 transition-colors">
                        <ArrowLeft className="h-4 w-4 mr-2" /> Back to All Services
                    </Link>
                    <div className="flex items-center">
                        <div className="p-4 bg-white/10 rounded-lg mr-6">
                            <Icon className="h-10 w-10 text-white" />
                        </div>
                        <h1 className="text-4xl font-bold">{service.title}</h1>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Main Details */}
                    <div className="lg:col-span-2">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            {service.longDescription}
                        </p>

                        <h2 className="text-2xl font-bold text-gray-900 mb-6">What We Offer</h2>
                        <div className="bg-gray-50 rounded-xl p-8 border border-gray-100">
                            <ul className="space-y-4">
                                {service.features.map((feature, index) => (
                                    <li key={index} className="flex items-start">
                                        <CheckCircle className="h-6 w-6 text-green-500 mr-3 flex-shrink-0" />
                                        <span className="text-gray-700 font-medium">{feature}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                    {/* Sidebar CTA */}
                    <div className="lg:col-span-1">
                        <div className="bg-soft-grey p-6 rounded-xl border border-border-soft sticky top-24">
                            <h3 className="text-xl font-bold text-navy-deep mb-4">Interested in this service?</h3>
                            <p className="text-charcoal mb-6 text-sm">
                                Get a customized quote or schedule a consultation with our experts.
                            </p>
                            <Link href="/contact" className="block w-full py-3 px-4 bg-navy-deep text-white font-bold rounded-lg text-center hover:bg-navy-light transition-colors shadow-md">
                                Contact Us Now
                            </Link>
                            <div className="mt-6 pt-6 border-t border-divider">
                                <p className="text-sm text-charcoal font-medium mb-2">Need urgent help?</p>
                                <p className="text-lg font-bold text-navy-deep">+91 98059 31332</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
