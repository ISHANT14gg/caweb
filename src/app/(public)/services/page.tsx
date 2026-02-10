import Link from "next/link";
import Image from "next/image";
import {
    Calculator,
    Shield,
    TrendingUp,
    FileText,
    Globe,
    Building2,
    Landmark,
    ArrowRight,
    Phone
} from "lucide-react";
import ScrollAnimation from "@/components/ui/ScrollAnimation";

const services = [
    {
        id: "setup",
        title: "Business Setup in India",
        description: "Complete support for company incorporation, LLP registration, and startup structuring.",
        icon: Building2,
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "fdi",
        title: "Foreign Direct Investment (FDI)",
        description: "Expert guidance on FDI regulations, RBI compliance, and setting up Indian subsidiaries.",
        icon: Globe,
        image: "https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "audit",
        title: "Audit & Assurance Services",
        description: "Statutory audit, internal audit, and risk advisory services for corporate excellence.",
        icon: Shield,
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "tax",
        title: "Taxation Services",
        description: "Comprehensive direct (Income Tax) and indirect (GST) tax planning and compliance.",
        icon: Calculator,
        image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "outsourcing",
        title: "Outsourcing Services",
        description: "Virtual CFO, payroll processing, and accounting outsourcing services.",
        icon: FileText,
        image: "https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
        id: "compliance",
        title: "Corporate Compliance",
        description: "Secretarial services, ROC filings, and regulatory compliance management.",
        icon: Landmark,
        image: "https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
];

export default function Services() {
    return (
        <div className="bg-white">
            {/* Header Section */}
            <div className="pt-20 pb-10 text-center">
                <ScrollAnimation direction="up">
                    <h1 className="text-4xl md:text-5xl font-serif font-bold text-blue-900 mb-4">Our Services</h1>
                    <p className="text-gray-500 max-w-2xl mx-auto px-4">
                        Expert solutions tailored to meet the diverse financial needs of modern businesses. We provide a full range of accounting and financial services.
                    </p>
                </ScrollAnimation>
            </div>

            {/* Services Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ScrollAnimation key={service.id} delay={index * 0.1} type="scale">
                            <div className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden flex flex-col h-full">
                                {/* Image Container */}
                                <div className="relative h-56 w-full overflow-hidden">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                                    />
                                    {/* Overlay/Icon */}
                                    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg z-10">
                                        <service.icon className="h-8 w-8 text-blue-600" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="pt-12 pb-8 px-6 text-center flex-grow flex flex-col">
                                    <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                                    <p className="text-gray-500 text-sm mb-6 flex-grow leading-relaxed">
                                        {service.description}
                                    </p>
                                    <Link
                                        href={`/services/${service.id}`}
                                        className="text-blue-600 font-semibold text-sm uppercase tracking-wide hover:underline inline-flex items-center justify-center gap-1"
                                    >
                                        View Service <ArrowRight className="h-4 w-4" />
                                    </Link>
                                </div>
                            </div>
                        </ScrollAnimation>
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-blue-800 relative overflow-hidden py-20">
                {/* Background Details */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-blue-700/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-700/20 rounded-full blur-2xl translate-y-1/2 -translate-x-1/3"></div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <ScrollAnimation className="flex flex-col md:flex-row items-center justify-between gap-12" direction="up">
                        {/* Text Content */}
                        <div className="md:w-1/2 text-left text-white">
                            <h2 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                                Let's Discuss Your Business Goals & Schedule A Free Consultation Today
                            </h2>
                            <p className="text-blue-100 mb-8 max-w-lg text-lg">
                                Unlock your business potential with expert financial guidance. We provide the strategies you need to grow securely and efficiently.
                            </p>
                            <Link
                                href="/contact"
                                className="inline-flex items-center px-8 py-4 bg-orange-500 text-white font-bold rounded-sm shadow-lg hover:bg-orange-600 transition-colors"
                            >
                                Get A Quote <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </div>

                        {/* Visual Icon/Circle */}
                        <div className="md:w-1/2 flex justify-center md:justify-end">
                            <div className="w-64 h-64 border border-blue-400/30 rounded-full flex items-center justify-center relative bg-blue-900/50 backdrop-blur-sm">
                                <div className="w-48 h-48 bg-blue-700 rounded-full flex items-center justify-center shadow-inner hover:scale-105 transition-transform duration-500">
                                    <ArrowRight className="h-16 w-16 text-white -rotate-45" />
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </div>

            {/* Bottom Consult Strip */}
            <div className="bg-blue-900 py-8 border-t border-blue-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div>
                        <h3 className="text-2xl font-bold text-white uppercase tracking-wider mb-1">CONSULT</h3>
                        <p className="text-blue-200 text-sm">Expert financial advice for your business growth.</p>
                    </div>
                    <Link href="/contact" className="group flex items-center text-white mt-4 md:mt-0">
                        <span className="text-lg mr-3">Explore</span>
                        <div className="bg-white rounded-full p-1 transition-transform group-hover:translate-x-1">
                            <ArrowRight className="h-5 w-5 text-blue-900" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
