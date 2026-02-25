'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Check, ShieldCheck, ArrowRight, CheckCircle2, X, Clock, Video, Lock, ChevronLeft, ChevronRight, Target } from 'lucide-react';
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

// --- CALENDAR HELPERS ---
const MONTH_NAMES = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
const DAY_LABELS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function getDaysInMonth(year: number, month: number): number {
    return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
    const day = new Date(year, month, 1).getDay();
    return day === 0 ? 6 : day - 1; // Convert to Mon=0 format
}

const TIME_SLOTS = ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM', '4:00 PM'];

export default function ConsultationFormClient() {
    const searchParams = useSearchParams();

    const [activeCategory, setActiveCategory] = useState<CategoryType>('sme');
    const [selectedServices, setSelectedServices] = useState<string[]>([]);

    // Calendar State
    const today = useMemo(() => new Date(), []);
    const [calMonth, setCalMonth] = useState(today.getMonth());
    const [calYear, setCalYear] = useState(today.getFullYear());
    const [selectedDate, setSelectedDate] = useState<number | null>(null);
    const [selectedSlot, setSelectedSlot] = useState<string | null>(null);

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

    // Calendar navigation
    const goToPrevMonth = () => {
        if (calMonth === 0) {
            setCalMonth(11);
            setCalYear(calYear - 1);
        } else {
            setCalMonth(calMonth - 1);
        }
        setSelectedDate(null);
        setSelectedSlot(null);
    };

    const goToNextMonth = () => {
        if (calMonth === 11) {
            setCalMonth(0);
            setCalYear(calYear + 1);
        } else {
            setCalMonth(calMonth + 1);
        }
        setSelectedDate(null);
        setSelectedSlot(null);
    };

    const daysInMonth = getDaysInMonth(calYear, calMonth);
    const firstDay = getFirstDayOfMonth(calYear, calMonth);

    const isDatePast = (day: number): boolean => {
        const checkDate = new Date(calYear, calMonth, day);
        const todayClear = new Date(today.getFullYear(), today.getMonth(), today.getDate());
        return checkDate < todayClear;
    };

    const isWeekend = (day: number): boolean => {
        const d = new Date(calYear, calMonth, day).getDay();
        return d === 0; // Only Sundays blocked
    };

    const handleDateClick = (day: number) => {
        if (!isDatePast(day) && !isWeekend(day)) {
            setSelectedDate(day);
            setSelectedSlot(null);
        }
    };

    const selectedDateObj = selectedDate ? new Date(calYear, calMonth, selectedDate) : null;
    const selectedDayName = selectedDateObj
        ? selectedDateObj.toLocaleDateString('en-US', { weekday: 'short' })
        : '';
    const selectedMonthName = selectedDateObj
        ? selectedDateObj.toLocaleDateString('en-US', { month: 'short' })
        : '';

    const canGoBack = calYear > today.getFullYear() || (calYear === today.getFullYear() && calMonth > today.getMonth());

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

        const payload = {
            category: activeCategory,
            servicesRequired: selectedServices,
            clientInfo: formData,
            selectedDate: selectedDate ? `${calYear}-${String(calMonth + 1).padStart(2, '0')}-${String(selectedDate).padStart(2, '0')}` : null,
            selectedSlot,
            submittedAt: new Date().toISOString()
        };

        console.log("Future Admin Payload:", payload);
        alert("Payment gateway simulation. Proceeding to checkout for ₹2,499.");
    };

    return (
        <>
            {/* ============================================= */}
            {/* SECTION 2 — WHO THIS IS FOR                   */}
            {/* ============================================= */}
            <section className="w-full relative z-20 px-6 -mt-[100px] pb-16">
                <div className="max-w-[900px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8}>
                        <div className="bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden">
                            <div className="h-1.5 bg-gradient-to-r from-[#0B1F3A] via-[#C9A227] to-[#0B1F3A]"></div>
                            <div className="p-8 md:p-10 lg:p-12">
                                <h2 className="text-2xl md:text-3xl font-serif text-[#0B1F3A] mb-8">Who This Is For</h2>

                                {/* Suitable */}
                                <div className="mb-8">
                                    <h3 className="text-xs font-bold text-[#C9A227] uppercase tracking-widest mb-5">This session is suitable if:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'You are filing your return and need clarity beyond basic compliance',
                                            'You recently started a business and want structural validation',
                                            'You are confused about GST applicability or compliance flow',
                                            'You want to review your company\'s financial health before expansion',
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-[#F8F9FA] rounded-xl p-4 border border-gray-100">
                                                <CheckCircle2 className="text-green-600 shrink-0 mt-0.5" size={18} />
                                                <p className="text-sm text-[#0B1F3A] font-medium leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>

                                {/* Not Suitable */}
                                <div className="pt-6 border-t border-gray-100">
                                    <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-5">This session may not be suitable if:</h3>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {[
                                            'You are looking for free advisory',
                                            'You need immediate emergency compliance filing',
                                        ].map((item, idx) => (
                                            <div key={idx} className="flex items-start gap-3 bg-red-50/50 rounded-xl p-4 border border-red-100/50">
                                                <X className="text-red-400 shrink-0 mt-0.5" size={18} />
                                                <p className="text-sm text-gray-500 leading-relaxed">{item}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* ============================================= */}
            {/* SECTION 3 — WHAT HAPPENS DURING THE SESSION   */}
            {/* ============================================= */}
            <section className="w-full px-6 py-16 bg-[#F8F9FA]">
                <div className="max-w-[900px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" delay={0.1}>
                        <div className="text-center mb-12">
                            <h2 className="text-2xl md:text-3xl font-serif text-[#0B1F3A] mb-3">What Happens During the Session</h2>
                            <p className="text-sm text-gray-500">Structured 4-step flow</p>
                        </div>
                    </ScrollAnimation>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {[
                            { step: '1️⃣', title: 'Pre-Session Intake Form', desc: '10–12 targeted questions to provide context before the call.' },
                            { step: '2️⃣', title: 'Document Review', desc: 'Internal review of your provided records before the session begins.' },
                            { step: '3️⃣', title: 'Live Structured Discussion', desc: 'Focused 60-minute video session mapping gaps and next steps.' },
                            { step: '4️⃣', title: 'Summary Email', desc: 'Documented takeaways and structured next-step recommendations.' },
                        ].map((item, idx) => (
                            <ScrollAnimation key={idx} type="fade" direction="up" delay={0.1 + idx * 0.1}>
                                <div className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm text-center h-full flex flex-col items-center hover:shadow-md transition-shadow duration-300">
                                    <span className="text-3xl mb-4">{item.step}</span>
                                    <h3 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-wider mb-3">{item.title}</h3>
                                    <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
                                </div>
                            </ScrollAnimation>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============================================= */}
            {/* SECTION 4 — FEE & FORMAT                      */}
            {/* ============================================= */}
            <section className="w-full px-6 py-16">
                <div className="max-w-[700px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" delay={0.1}>
                        <div className="bg-[#0B1F3A] rounded-2xl overflow-hidden shadow-xl">
                            <div className="h-1 bg-gradient-to-r from-[#C9A227] to-[#0B1F3A]"></div>
                            <div className="p-8 md:p-10">
                                <h2 className="text-2xl font-serif text-white mb-8 text-center">Fee & Format</h2>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
                                    <div className="text-center">
                                        <Clock size={24} className="text-[#C9A227] mx-auto mb-2" />
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Duration</p>
                                        <p className="text-sm font-bold text-white">60 Minutes</p>
                                    </div>
                                    <div className="text-center">
                                        <Video size={24} className="text-[#C9A227] mx-auto mb-2" />
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Mode</p>
                                        <p className="text-sm font-bold text-white">Video Call</p>
                                    </div>
                                    <div className="text-center">
                                        <Target size={24} className="text-[#C9A227] mx-auto mb-2" />
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Fee</p>
                                        <p className="text-lg font-serif font-bold text-[#C9A227]">₹2,499</p>
                                    </div>
                                    <div className="text-center">
                                        <Lock size={24} className="text-[#C9A227] mx-auto mb-2" />
                                        <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Payment</p>
                                        <p className="text-sm font-bold text-white">Before Confirmation</p>
                                    </div>
                                </div>
                                <div className="text-center pt-6 border-t border-white/10">
                                    <p className="text-sm text-gray-300 italic">Consultation fee is adjusted against future engagement if we proceed.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* ============================================= */}
            {/* SECTION 5 — BOOKING MECHANISM                 */}
            {/* ============================================= */}
            <section className="w-full px-6 py-16 bg-[#F8F9FA]">
                <div className="max-w-[1200px] mx-auto">
                    <ScrollAnimation type="fade" direction="up" delay={0.1}>
                        <div className="text-center mb-10">
                            <h2 className="text-2xl md:text-3xl font-serif text-[#0B1F3A] mb-3">Book Your Session</h2>
                            <p className="text-sm text-gray-500">Select your focus, pick a time, and proceed to payment.</p>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8} className="w-full bg-white rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100 overflow-hidden relative">
                        <div className="h-1.5 bg-gradient-to-r from-[#0B1F3A] via-[#C9A227] to-[#0B1F3A]"></div>

                        <div className="flex flex-col lg:flex-row">

                            {/* LEFT COLUMN: Session Overview & What to Prepare */}
                            <div className="w-full lg:w-5/12 bg-[#F8F9FA] border-r border-gray-100 p-8 md:p-10 lg:p-12 flex flex-col">

                                {/* Session Overview */}
                                <div className="mb-10">
                                    <h3 className="text-sm font-bold text-[#C9A227] uppercase tracking-widest mb-5">
                                        Session Overview
                                    </h3>
                                    <div className="space-y-5">
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-[#0B1F3A] rounded-lg flex items-center justify-center">
                                                <Clock size={16} className="text-[#C9A227]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#0B1F3A]">60-Minute Diagnostic Discussion</p>
                                                <p className="text-xs text-gray-500 mt-0.5">Focused, structured, outcome-driven.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-[#0B1F3A] rounded-lg flex items-center justify-center">
                                                <Video size={16} className="text-[#C9A227]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#0B1F3A]">Secure Video Call</p>
                                                <p className="text-xs text-gray-500 mt-0.5">Google Meet or Zoom — link sent on confirmation.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <div className="flex-shrink-0 w-8 h-8 bg-[#0B1F3A] rounded-lg flex items-center justify-center">
                                                <ShieldCheck size={16} className="text-[#C9A227]" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-bold text-[#0B1F3A]">Confidential & Professional</p>
                                                <p className="text-xs text-gray-500 mt-0.5">All information shared remains privileged.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* What You Need to Prepare */}
                                <div className="mb-8">
                                    <h3 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                        What You Need to Prepare
                                    </h3>
                                    <div className="space-y-4 text-sm text-gray-600">
                                        <div className="flex items-start gap-3">
                                            <span className="font-serif text-[#C9A227] font-bold text-base">1.</span>
                                            <p><strong>Your latest ITR or financial statements</strong> (if applicable — even draft versions help).</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="font-serif text-[#C9A227] font-bold text-base">2.</span>
                                            <p><strong>A brief written summary</strong> of your current situation or specific questions you want addressed.</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="font-serif text-[#C9A227] font-bold text-base">3.</span>
                                            <p><strong>Recent notices or correspondence</strong> from tax authorities (if any).</p>
                                        </div>
                                        <div className="flex items-start gap-3">
                                            <span className="font-serif text-[#C9A227] font-bold text-base">4.</span>
                                            <p><strong>Entity documents</strong> (incorporation certificate, partnership deed, etc.) for structuring reviews.</p>
                                        </div>
                                    </div>
                                    <p className="text-xs text-gray-400 mt-4 italic">Documents can be shared securely post-booking via the confirmation email link.</p>
                                </div>

                                {/* Focus Area Selection */}
                                <div className="mb-6">
                                    <h3 className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest mb-4 border-b border-gray-200 pb-2">
                                        Select Your Focus Area
                                    </h3>
                                    <div className="flex flex-col space-y-3 mb-6">
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
                            </div>

                            {/* RIGHT COLUMN: Calendar, Form & Payment */}
                            <div className="w-full lg:w-7/12 p-8 md:p-10 lg:p-12 bg-white flex flex-col">

                                <div className="flex items-center gap-4 text-sm text-gray-500 mb-6 pb-4 border-b border-gray-100 flex-wrap">
                                    <span className="flex items-center gap-1.5"><Clock size={14} className="text-[#C9A227]" /> 60 Minutes</span>
                                    <span className="flex items-center gap-1.5"><Video size={14} className="text-[#C9A227]" /> Video Call</span>
                                    <span className="flex items-center gap-1.5 text-xs bg-[#0B1F3A]/5 px-3 py-1 rounded-full text-[#0B1F3A] font-semibold">
                                        🌍 {Intl.DateTimeFormat().resolvedOptions().timeZone || 'Auto-detected'}
                                    </span>
                                </div>

                                {/* Functional Calendar */}
                                <div className="mb-8">
                                    <h3 className="text-[11px] font-extrabold text-[#0B1F3A] uppercase tracking-widest mb-4">Select Date & Time</h3>
                                    <div className="bg-[#F8F9FA] rounded-xl border border-gray-100 p-5 md:p-6">
                                        {/* Calendar Header with navigation */}
                                        <div className="flex items-center justify-between mb-5">
                                            <button
                                                type="button"
                                                onClick={goToPrevMonth}
                                                disabled={!canGoBack}
                                                className={`w-9 h-9 flex items-center justify-center rounded-full transition-colors
                                                    ${canGoBack ? 'hover:bg-gray-200 text-gray-600 cursor-pointer' : 'text-gray-300 cursor-not-allowed'}`}
                                            >
                                                <ChevronLeft size={18} />
                                            </button>
                                            <span className="text-sm font-bold text-[#0B1F3A]">{MONTH_NAMES[calMonth]} {calYear}</span>
                                            <button
                                                type="button"
                                                onClick={goToNextMonth}
                                                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-200 transition-colors text-gray-600 cursor-pointer"
                                            >
                                                <ChevronRight size={18} />
                                            </button>
                                        </div>

                                        {/* Day headers */}
                                        <div className="grid grid-cols-7 gap-1 mb-2">
                                            {DAY_LABELS.map(d => (
                                                <div key={d} className="text-center text-[10px] font-bold text-gray-400 uppercase py-1">{d}</div>
                                            ))}
                                        </div>

                                        {/* Calendar days */}
                                        <div className="grid grid-cols-7 gap-1">
                                            {/* Empty offset cells */}
                                            {[...Array(firstDay)].map((_, i) => (
                                                <div key={`empty-${i}`} className="h-10"></div>
                                            ))}
                                            {/* Actual days */}
                                            {[...Array(daysInMonth)].map((_, i) => {
                                                const day = i + 1;
                                                const past = isDatePast(day);
                                                const sunday = isWeekend(day);
                                                const disabled = past || sunday;
                                                const selected = selectedDate === day;

                                                return (
                                                    <button
                                                        type="button"
                                                        key={day}
                                                        disabled={disabled}
                                                        onClick={() => handleDateClick(day)}
                                                        className={`h-10 rounded-lg text-xs font-semibold transition-all duration-200
                                                            ${disabled ? 'text-gray-300 cursor-not-allowed' : ''}
                                                            ${selected ? 'bg-[#0B1F3A] text-white shadow-md scale-110' : ''}
                                                            ${!disabled && !selected ? 'text-[#0B1F3A] hover:bg-[#C9A227]/15 cursor-pointer' : ''}
                                                        `}
                                                    >
                                                        {day}
                                                    </button>
                                                );
                                            })}
                                        </div>

                                        {/* Time slots — shown only when a date is selected */}
                                        {selectedDate && (
                                            <div className="mt-5 pt-5 border-t border-gray-200">
                                                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-3">
                                                    Available Slots — {selectedDayName}, {selectedMonthName} {selectedDate}
                                                </p>
                                                <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
                                                    {TIME_SLOTS.map((slot) => (
                                                        <button
                                                            type="button"
                                                            key={slot}
                                                            onClick={() => setSelectedSlot(slot)}
                                                            className={`px-3 py-2.5 rounded-lg text-xs font-semibold transition-all duration-200 border
                                                                ${selectedSlot === slot
                                                                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                                                                    : 'bg-white text-[#0B1F3A] border-gray-200 hover:border-[#C9A227] hover:bg-[#C9A227]/5'
                                                                }`}
                                                        >
                                                            {slot}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}

                                        {!selectedDate && (
                                            <div className="mt-5 pt-5 border-t border-gray-200 text-center">
                                                <p className="text-xs text-gray-400">Select a date above to view available time slots</p>
                                            </div>
                                        )}
                                    </div>
                                </div>

                                {/* Form */}
                                <form onSubmit={handleSubmit} className="w-full flex flex-col gap-y-5">

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5">
                                        <div className="relative group">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">First Name</label>
                                            <input type="text" name="firstName" required value={formData.firstName} onChange={handleInputChange}
                                                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#C9A227] transition-colors focus:bg-white text-sm" placeholder="John" />
                                        </div>
                                        <div className="relative group">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Last Name</label>
                                            <input type="text" name="lastName" required value={formData.lastName} onChange={handleInputChange}
                                                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#C9A227] transition-colors focus:bg-white text-sm" placeholder="Doe" />
                                        </div>
                                        <div className="relative group">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Email Address</label>
                                            <input type="email" name="email" required value={formData.email} onChange={handleInputChange}
                                                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#C9A227] transition-colors focus:bg-white text-sm" placeholder="john@example.com" />
                                        </div>
                                        <div className="relative group">
                                            <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Phone Number</label>
                                            <input type="tel" name="phone" required value={formData.phone} onChange={handleInputChange}
                                                className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#C9A227] transition-colors focus:bg-white text-sm" placeholder="+91" />
                                        </div>
                                    </div>

                                    <div className="relative group w-full">
                                        <label className="text-[10px] font-bold text-gray-400 uppercase tracking-widest block mb-1">Context <span className="normal-case opacity-60 ml-1">(Brief description of your situation)</span></label>
                                        <textarea name="message" value={formData.message} onChange={handleInputChange} rows={2}
                                            className="w-full bg-[#F8F9FA] border border-gray-200 rounded-lg px-4 py-3 text-[#0B1F3A] focus:outline-none focus:border-[#C9A227] transition-colors focus:bg-white resize-none text-sm"
                                            placeholder="Briefly describe your current situation..." />
                                    </div>

                                    {/* Payment Gateway Section */}
                                    <div className="bg-[#0B1F3A] rounded-xl p-6 text-white">
                                        <div className="flex items-center justify-between mb-4">
                                            <div>
                                                <p className="text-sm font-bold">Diagnostic Session Fee</p>
                                                <p className="text-[10px] text-gray-400 uppercase tracking-wider mt-1">Session fee adjusted against future engagement</p>
                                            </div>
                                            <span className="text-2xl font-serif text-[#C9A227]">₹2,499</span>
                                        </div>
                                        <div className="flex items-center gap-3 text-[10px] text-gray-400 uppercase tracking-widest mb-4">
                                            <span className="flex items-center gap-1"><Lock size={12} className="text-[#C9A227]" /> 256-bit Encrypted</span>
                                            <span className="flex items-center gap-1"><ShieldCheck size={12} className="text-[#C9A227]" /> Razorpay Secured</span>
                                        </div>
                                        <button
                                            type="submit"
                                            className="w-full inline-flex items-center justify-center bg-[#C9A227] text-[#0B1F3A] font-bold px-8 py-4 rounded-lg hover:bg-[#d4ad2e] transition-colors duration-300 shadow-lg group text-sm uppercase tracking-wider"
                                        >
                                            <Lock size={16} className="mr-2 opacity-70" />
                                            Proceed to Secure Payment
                                            <ArrowRight size={18} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </button>
                                    </div>

                                </form>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* ============================================= */}
            {/* SECTION 6 — REASSURANCE                       */}
            {/* ============================================= */}
            <section className="w-full px-6 py-20">
                <div className="max-w-[700px] mx-auto text-center">
                    <ScrollAnimation type="fade" direction="up" delay={0.1}>
                        <div className="flex items-center justify-center gap-8 md:gap-12">
                            <div className="flex flex-col items-center">
                                <ShieldCheck size={28} className="text-[#0B1F3A] mb-2" />
                                <p className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Confidential.</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex flex-col items-center">
                                <Check size={28} className="text-[#0B1F3A] mb-2" />
                                <p className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Structured.</p>
                            </div>
                            <div className="w-px h-12 bg-gray-200"></div>
                            <div className="flex flex-col items-center">
                                <Target size={28} className="text-[#0B1F3A] mb-2" />
                                <p className="text-sm font-bold text-[#0B1F3A] uppercase tracking-widest">Outcome-focused.</p>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>
        </>
    );
}
