import React from 'react';
import { Metadata } from 'next';
import ConsultationFormClient from './ConsultationFormClient';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export const metadata: Metadata = {
    title: 'Structured Consultation | Jyoti Thakur & Associates',
    description: 'Select the services relevant to your business structure and schedule a comprehensive consultation with our advisory team.',
};

export default function ConsultationPage() {
    return (
        <main className="flex flex-col relative w-full overflow-hidden bg-[#F8F9FA] text-[#0B1F3A] font-sans selection:bg-[#C9A227]/20">

            {/* SECTION 1 — HERO */}
            <section
                className="w-full relative pt-[160px] pb-[200px] px-6 text-white overflow-hidden"
                style={{
                    background: 'linear-gradient(135deg, #0B1F3A 0%, #132B50 60%, #0F2B46 100%)',
                }}
            >
                {/* Subtle grid pattern overlay matching homepage */}
                <div
                    className="absolute inset-0 opacity-[0.03] pointer-events-none"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="max-w-[1000px] mx-auto flex flex-col items-center text-center relative z-10">
                    <ScrollAnimation type="fade" direction="up" duration={0.8}>
                        <div className="inline-flex items-center justify-center space-x-2 bg-white/5 border border-white/10 rounded-full px-4 py-1.5 mb-8">
                            <span className="w-2 h-2 rounded-full bg-[#C9A227]"></span>
                            <span className="text-xs uppercase tracking-widest text-gray-300 font-bold">Diagnostic Approach</span>
                        </div>
                    </ScrollAnimation>

                    <ScrollAnimation type="fade" direction="up" delay={0.1}>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif text-white mb-6 tracking-tight leading-tight">
                            Structured Financial<br />Clarity Session
                        </h1>
                    </ScrollAnimation>
                    <ScrollAnimation type="fade" direction="up" delay={0.2}>
                        <p className="text-lg md:text-xl text-[#C9A227] font-medium max-w-2xl leading-relaxed mx-auto mb-6">
                            A Focused 60-Minute Diagnostic Conversation
                        </p>
                        <p className="text-base text-gray-300 font-light max-w-3xl leading-relaxed mx-auto mb-8">
                            This session is designed for individuals and business owners who have reviewed our Knowledge Bank and now require structured direction.
                            It is not a casual discovery call. It is a focused diagnostic discussion to:
                        </p>
                        <div className="flex flex-col items-center gap-3 max-w-md mx-auto">
                            <div className="flex items-center gap-3 text-gray-200 text-[15px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0"></span>
                                <span>Identify structural gaps</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200 text-[15px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0"></span>
                                <span>Clarify compliance exposure</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200 text-[15px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0"></span>
                                <span>Evaluate current financial positioning</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-200 text-[15px]">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#C9A227] flex-shrink-0"></span>
                                <span>Recommend next structured steps</span>
                            </div>
                        </div>
                    </ScrollAnimation>
                </div>
            </section>

            {/* SECTIONS 2–6 — Handled inside the Client Component */}
            <ConsultationFormClient />

        </main>
    );
}
