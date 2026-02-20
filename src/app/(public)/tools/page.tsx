import Link from "next/link";
import { Calculator, Percent, DollarSign, Calendar } from "lucide-react";

const tools = [
    {
        id: "sip-calculator",
        title: "SIP Calculator",
        description: "Calculate the future value of your Systematic Investment Plan.",
        icon: Calendar,
        color: "bg-soft-grey text-gold",
    },
    {
        id: "gst-calculator",
        title: "GST Calculator",
        description: "Easily calculate GST amount for your goods or services.",
        icon: Percent,
        color: "bg-green-100 text-green-600",
    },
    {
        id: "income-tax",
        title: "Income Tax Calculator",
        description: "Estimate your tax liability for the current financial year.",
        icon: Calculator,
        color: "bg-amber-100 text-amber-600",
    },
    {
        id: "emi-calculator",
        title: "Loan EMI Calculator",
        description: "Calculate your monthly EMI for Home, Car, or Personal loans.",
        icon: DollarSign,
        color: "bg-purple-100 text-purple-600",
    },
];

export default function ToolsPage() {
    return (
        <div className="bg-white">
            {/* Hero Section */}
            <div className="bg-navy-deep text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Financial Tools</h1>
                    <p className="text-xl text-gray-300 max-w-2xl mx-auto">
                        Handy calculators to help you plan your finances better.
                    </p>
                </div>
            </div>

            {/* Tools Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {tools.map((tool) => (
                        <div key={tool.id} className="bg-gray-50 rounded-xl p-6 hover:shadow-lg transition-shadow border border-gray-100 group cursor-pointer">
                            <div className={`w-12 h-12 ${tool.color} rounded-lg flex items-center justify-center mb-4`}>
                                <tool.icon className="h-6 w-6" />
                            </div>
                            <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.title}</h3>
                            <p className="text-gray-600 text-sm mb-4">{tool.description}</p>
                            <div className="mt-auto">
                                <span className="text-gold text-sm font-medium group-hover:underline">Open Calculator &rarr;</span>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 p-6 bg-soft-grey rounded-lg border border-border-soft text-center">
                    <h3 className="text-lg font-semibold text-navy-deep mb-2">Need a Custom Financial Plan?</h3>
                    <p className="text-charcoal mb-4">Calculators provide estimates. For precise financial planning, consult our experts.</p>
                    <Link href="/contact" className="inline-block px-6 py-2 bg-navy-deep text-white rounded-md hover:bg-navy-light transition-colors">
                        Book Consultation
                    </Link>
                </div>
            </div>
        </div>
    );
}
