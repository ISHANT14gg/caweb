'use client';

import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, ShieldCheck, ArrowRight } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

// --- DATA STRUCTURES ---

const serviceChecklists = {
    individual: {
        title: "Individual Tax & Compliance",
        items: [
            "Income Tax Return (ITR) Filing",
            "Capital Gains Advisory",
            "Freelancer / Professional Setup (44ADA)",
            "HNI Wealth & Taxation Structuring",
            "NRI Tax Compliance",
            "Notice Reply & Assessment Support"
        ]
    },
    sme: {
        title: "SME & MSME Solutions",
        items: [
            "GST Registration & Monthly Compliance",
            "Bookkeeping & Accounting Setup",
            "Financial Statement Preparation (P&L)",
            "Payroll & TDS Compliance",
            "Company / LLP Registration",
            "MSME / Udyam Registration"
        ]
    },
    startup: {
        title: "Startup & Scaling Advisory",
        items: [
            "Entity Structuring & Incorporation",
            "Founders Agreement & Cap Table Advisory",
            "DPIIT (Startup India) Recognition",
            "Valuation Certificates",
            "Investor Readiness & Due Diligence",
            "Virtual CFO Services"
        ]
    }
};

type CategoryType = 'individual' | 'sme' | 'startup';

export default function ConsultationFormClient() {
    const searchParams = useSearchParams();

    // Default to SME if no valid type is provided in URL
    const [activeCategory, setActiveCategory] = useState<CategoryType>('sme');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // Form State
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        company: '',
        message: ''
    });

    // Mount Logic - read URL params
    useEffect(() => {
        const typeParam = searchParams.get('type');
        if (typeParam === 'individual' || typeParam === 'sme' || typeParam === 'startup') {
            setActiveCategory(typeParam);
        }
    }, [searchParams]);

    // Handle Checklist Checkbox toggles
    const toggleService = (service: string) => {
        setSelectedServices(prev =>
            prev.includes(service)
                ? prev.filter(s => s !== service)
                : [...prev, service]
        );
    };

    // Handle string inputs
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    // Handle Submission
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        // Structure payload to send to Admin system later
        const payload = {
            category: activeCategory,
            servicesRequired: selectedServices,
            clientInfo: formData,
            submittedAt: new Date().toISOString()
        };

        console.log("Future Admin Payload:", payload);
        alert("Thank you. Our team will review your structured request and respond within 24-48 hours.");

        // Reset form visually
        setSelectedServices([]);
        setFormData({ firstName: '', lastName: '', email: '', phone: '', company: '', message: '' });
    };

    return (
        <section className="w-full relative z-20 px-6 pb-[120px] -mt-[120px]">
            <div className="max-w-[1000px] mx-auto">
                <ScrollAnimation type="fade" direction="up" delay={0.3} duration={0.8} className="w-full bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden relative">

                    {/* TOP ACCENT LINE */}
                    <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#0B1F3A] via-[#0B1F3A] to-[#C9A227]"></div>

                    {/* TWO COLUMN GRID CONTEXT */}
                    <div className="flex flex-col lg:flex-row">

                        {/* LEFT COLUMN: Service Selection */}
                        <div className="w-full lg:w-5/12 bg-[#F8F9FA] border-r border-gray-100 p-8 md:p-12">

                            {/* Toggle Premium Buttons */}
                            <div className="flex flex-col space-y-3 mb-10">
                                {(Object.entries(serviceChecklists) as [CategoryType, any][]).map(([key, data]) => (
                                    <button
                                        key={key}
                                        onClick={() => setActiveCategory(key)}
                                        className={`text-left px-5 py-3 rounded-lg text-sm font-bold uppercase tracking-wider transition-all duration-300 border
                                            ${activeCategory === key
                                                ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                                                : 'bg-white text-gray-500 border-gray-200 hover:border-[#C9A227] hover:text-[#0B1F3A]'
                                            }`}
                                    >
                                        {data.title}
                                    </button>
                                ))}
                            </div>

                            <h3 className="text-xs font-bold text-[#0B1F3A] uppercase tracking-widest mb-6 border-b border-gray-200 pb-2">
                                Required Services:
                            </h3>

                            <div className="flex flex-col gap-y-4">
                                {serviceChecklists[activeCategory].items.map((item: string) => {
                                    const isSelected = selectedServices.includes(item);
                                    return (
                                        <label
                                            key={item}
                                            className="flex items-start gap-4 cursor-pointer group"
                                            onClick={() => toggleService(item)}
                                        >
                                            <div className={`mt-0.5 flex-shrink-0 w-5 h-5 border rounded flex items-center justify-center transition-colors duration-200
                                                ${isSelected
                                                    ? 'bg-[#C9A227] border-[#C9A227]'
                                                    : 'bg-white border-gray-300 group-hover:border-[#C9A227]'
                                                }`}
                                            >
                                                {isSelected && <Check size={14} className="text-white stroke-[3]" />}
                                            </div>
                                            <span className={`text-sm leading-snug transition-colors
                                                ${isSelected ? 'text-[#0B1F3A] font-semibold' : 'text-gray-600'}
                                            `}>
                                                {item}
                                            </span>
                                        </label>
                                    );
                                })}
                            </div>

                        </div>

                        {/* RIGHT COLUMN: Client Details */}
                        <div className="w-full lg:w-7/12 p-8 md:p-12 bg-white">

                            <h2 className="text-2xl font-serif text-[#0B1F3A] mb-8 border-b border-gray-100 pb-4">Client Information</h2>

                            <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-8">

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-8">
                                    {/* First Name */}
                                    <div className="relative group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">First Name</label>
                                        <input
                                            type="text"
                                            name="firstName"
                                            required
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#F8F9FA] border border-gray-200 rounded px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors focus:bg-white"
                                            placeholder="John"
                                        />
                                    </div>

                                    {/* Last Name */}
                                    <div className="relative group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Last Name</label>
                                        <input
                                            type="text"
                                            name="lastName"
                                            required
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#F8F9FA] border border-gray-200 rounded px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors focus:bg-white"
                                            placeholder="Doe"
                                        />
                                    </div>

                                    {/* Email */}
                                    <div className="relative group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
                                        <input
                                            type="email"
                                            name="email"
                                            required
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#F8F9FA] border border-gray-200 rounded px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors focus:bg-white"
                                            placeholder="john@example.com"
                                        />
                                    </div>

                                    {/* Phone */}
                                    <div className="relative group">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Phone Number</label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            required
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full bg-[#F8F9FA] border border-gray-200 rounded px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors focus:bg-white"
                                            placeholder="+91"
                                        />
                                    </div>
                                </div>

                                {/* Company */}
                                <div className="relative group w-full">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Company / Entity Name <span className="normal-case opacity-60 ml-1">(Optional)</span></label>
                                    <input
                                        type="text"
                                        name="company"
                                        value={formData.company}
                                        onChange={handleInputChange}
                                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors focus:bg-white"
                                        placeholder="Business Name"
                                    />
                                </div>

                                {/* Context */}
                                <div className="relative group w-full">
                                    <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Context</label>
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        rows={4}
                                        className="w-full bg-[#F8F9FA] border border-gray-200 rounded px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#0B1F3A] transition-colors focus:bg-white resize-none"
                                        placeholder="Briefly describe your current situation..."
                                    />
                                </div>

                                {/* Submit Context */}
                                <div className="pt-4 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6">
                                    <div className="flex items-center gap-2 text-xs text-gray-500 max-w-[200px]">
                                        <ShieldCheck size={28} className="text-gray-300 shrink-0" />
                                        <span>Confidential assessment. No binding commitment.</span>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full md:w-auto inline-flex items-center justify-center bg-[#0B1F3A] text-white font-medium px-8 py-4 rounded hover:bg-[#C9A227] transition-colors duration-300 shadow-md group"
                                    >
                                        Submit Request
                                        <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </ScrollAnimation>
            </div>
        </section>
    );
}
