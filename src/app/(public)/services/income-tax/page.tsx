'use client';

import React from 'react';
import Link from 'next/link';
import { FileText, CheckCircle, HelpCircle, ArrowRight, Shield, Clock, Award } from 'lucide-react';

export default function IncomeTaxReturnPage() {
    return (
        <main className="bg-gray-50 min-h-screen">
            {/* Hero Section */}
            <section className="relative bg-blue-900 text-white py-20 overflow-hidden">
                <div className="absolute inset-0 bg-blue-800 opacity-50"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-10 md:mb-0 z-10">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                            Income Tax Return (ITR) Filing
                        </h1>
                        <p className="text-xl text-blue-100 mb-8 max-w-lg">
                            Expert-assisted ITR filing services for individuals, businesses, and professionals.
                            Ensure compliance and maximize your refunds with Jyoti Thakur.
                        </p>
                        <div className="flex gap-4">
                            <Link href="/contact" className="px-8 py-3 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded transition-colors shadow-lg">
                                File ITR Now
                            </Link>
                        </div>
                    </div>
                    {/* Abstract Shape/Image Placeholder */}
                    <div className="md:w-1/2 flex justify-center z-10">
                        <div className="w-80 h-80 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/20">
                            <FileText className="w-40 h-40 text-blue-200 opacity-80" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Main Content Areas */}
            <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">

                    {/* Left Column: Content */}
                    <div className="lg:col-span-2 space-y-12">

                        {/* Introduction */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                                <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                                Overview
                            </h2>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Income tax return (ITR) in India is being regulated by the provisions, rules & regulations specified in the Income Tax Act, 1961.
                                These rules & regulations are for every registered income tax payer in India who possesses a valid PAN Card and falls under the Income tax net.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                ITR is a form in which the assessee furnishes information related to their income in the previous year to the Income Tax Department.
                                ITR should be filed before the due date to avoid penalties up to INR 10,000.
                            </p>
                        </div>

                        {/* Documents Required */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                                Documents Required for ITR Filing
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {[
                                    "PAN Card (Ten-digit alphanumeric number)",
                                    "Form 16 (Part-A & Part-B from Employer)",
                                    "Bank Statements & Interest Certificates",
                                    "Form 26AS (Consolidated Tax Credit Statement)",
                                    "Investment Proofs (PPF, NSC, ULIPS, LIC - Sec 80)",
                                    "School Fees Receipts (Children's Tuition Fee)",
                                    "Home Loan Interest Certificate",
                                    "Capital Gains Statements (Stocks/Mutual Funds)"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                        <span className="text-gray-700 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Filing Procedure */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-blue-600 rounded-full"></span>
                                Online ITR Filing Procedure
                            </h2>
                            <div className="space-y-6">
                                {[
                                    { step: 1, title: "Login to e-Filing Portal", desc: "Visit the Income Tax e-Filing website and login with your PAN, Password, and Captcha." },
                                    { step: 2, title: "Select 'Uncome Tax Return'", desc: "Go to the 'e-File' menu and select 'Income Tax Return' link." },
                                    { step: 3, title: "Enter Details", desc: "Select Assessment Year, ITR Form Number, Filing Type (Original/Revised), and Submission Mode (Online)." },
                                    { step: 4, title: "Verify & Submit", desc: "Fill in the required data, validate the form, and click 'Preview and Submit'." },
                                    { step: 5, title: "e-Verification", desc: "Verify your return using Aadhaar OTP, Net Banking, or by sending a signed acknowledgement to CPC Bangalore." }
                                ].map((step) => (
                                    <div key={step.step} className="flex gap-4">
                                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">
                                            {step.step}
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-bold text-gray-900">{step.title}</h3>
                                            <p className="text-gray-600">{step.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQs */}
                        <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
                            <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                                <span className="w-1 h-8 bg-orange-500 rounded-full"></span>
                                Frequently Asked Questions
                            </h2>
                            <div className="space-y-6">
                                <div className="border-b border-gray-100 pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4 text-blue-500" />
                                        Is it necessary to file ITR if I have a loss?
                                    </h3>
                                    <p className="text-gray-600 pl-6">
                                        Yes, if you have sustained a loss which you propose to carry forward to the subsequent year for adjustment against future profits, you must file your return before the due date.
                                    </p>
                                </div>
                                <div className="border-b border-gray-100 pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4 text-blue-500" />
                                        What happens if I don't file ITR?
                                    </h3>
                                    <p className="text-gray-600 pl-6">
                                        You may have to pay a penalty of up to INR 10,000. For income below 5 Lakhs, the penalty is restricted to INR 1,000. It is mandatory if your total income exceeds the basic exemption limit.
                                    </p>
                                </div>
                                <div className="pb-4">
                                    <h3 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
                                        <HelpCircle className="w-4 h-4 text-blue-500" />
                                        How can I check my ITR status?
                                    </h3>
                                    <p className="text-gray-600 pl-6">
                                        You can check your status on the e-Filing portal by clicking on "ITR Status" and entering your PAN and Acknowledgement Number.
                                    </p>
                                </div>
                            </div>
                        </div>

                    </div>

                    {/* Right Column: Sidebar */}
                    <div className="lg:col-span-1 space-y-8">

                        {/* Why Choose Us */}
                        <div className="bg-blue-900 text-white p-6 rounded-xl shadow-lg">
                            <h3 className="text-xl font-bold mb-4 border-b border-blue-700 pb-2">Why Choose Jyoti Thakur?</h3>
                            <ul className="space-y-4">
                                <li className="flex gap-3">
                                    <Shield className="w-6 h-6 text-orange-400 flex-shrink-0" />
                                    <span className="text-blue-100 text-sm">100% Data Security & Confidentiality</span>
                                </li>
                                <li className="flex gap-3">
                                    <Award className="w-6 h-6 text-orange-400 flex-shrink-0" />
                                    <span className="text-blue-100 text-sm">Expert CA Assisted Filing</span>
                                </li>
                                <li className="flex gap-3">
                                    <Clock className="w-6 h-6 text-orange-400 flex-shrink-0" />
                                    <span className="text-blue-100 text-sm">Fast Turnaround Time</span>
                                </li>
                            </ul>
                            <Link href="/contact" className="mt-6 block w-full bg-orange-500 hover:bg-orange-600 text-white text-center font-bold py-3 rounded transition-colors">
                                Get Expert Consultation
                            </Link>
                        </div>

                        {/* Quick Links */}
                        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                            <h3 className="text-lg font-bold text-gray-900 mb-4">Related Services</h3>
                            <ul className="space-y-2">
                                {['GST Registration', 'Company Incorporation', 'Tax Audit', 'TDS Return'].map(service => (
                                    <li key={service}>
                                        <Link href="/services" className="text-gray-600 hover:text-blue-600 flex items-center justify-between group transition-colors">
                                            <span>{service}</span>
                                            <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* Bottom CTA Strip */}
            <section className="bg-orange-500 py-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left gap-4">
                    <div>
                        <h2 className="text-2xl font-bold text-white mb-1">Ready to file your taxes?</h2>
                        <p className="text-orange-100">Don't wait for the last date. Avoid penalties today.</p>
                    </div>
                    <Link href="/contact" className="px-8 py-3 bg-white text-orange-600 font-bold rounded shadow-lg hover:bg-gray-100 transition-colors">
                        Contact Us Now
                    </Link>
                </div>
            </section>

        </main>
    );
}
