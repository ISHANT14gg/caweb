'use client';

import React, { useState } from 'react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { motion } from 'framer-motion';
import { ShieldCheck, Check, MessageCircle, Star, Search, FileCheck, Send } from 'lucide-react';

export default function ContactFormClient() {
    const [selectedService, setSelectedService] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const services = [
        { id: 'gst', label: 'GST Advisory', icon: FileCheck },
        { id: 'tax', label: 'Income Tax', icon: Search },
        { id: 'incorporation', label: 'Business Setup', icon: ShieldCheck },
        { id: 'other', label: 'Other', icon: MessageCircle }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            setTimeout(() => setSubmitted(false), 5000);
        }, 1200);
    };

    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-1.5 block">
                        First Name
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Your first name"
                        className="w-full bg-transparent border-0 border-b border-border-soft focus:border-gold focus:ring-0 px-0 py-2 text-charcoal text-sm transition-colors placeholder:text-gray-300 font-medium"
                    />
                </div>
                <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-1.5 block">
                        Last Name
                    </label>
                    <input
                        type="text"
                        required
                        placeholder="Your last name"
                        className="w-full bg-transparent border-0 border-b border-border-soft focus:border-gold focus:ring-0 px-0 py-2 text-charcoal text-sm transition-colors placeholder:text-gray-300 font-medium"
                    />
                </div>
            </div>

            <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-2.5 block">
                    Service Interest
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
                    {services.map((service) => (
                        <button
                            key={service.id}
                            type="button"
                            onClick={() => setSelectedService(service.id)}
                            className={`relative flex flex-row sm:flex-col items-center justify-start sm:justify-center gap-3 sm:gap-1.5 p-3 sm:p-2.5 rounded-xl border transition-all duration-200 ${selectedService === service.id
                                ? 'border-gold bg-gold/5 text-navy-deep ring-1 ring-gold shadow-md'
                                : 'border-border-soft bg-soft-grey/30 text-charcoal hover:border-gold/30'
                                }`}
                        >
                            <service.icon className={`h-4 w-4 ${selectedService === service.id ? 'text-gold' : 'text-gray-400'}`} />
                            <span className="text-xs sm:text-[9px] font-bold uppercase tracking-tight">{service.label}</span>
                            {selectedService === service.id && (
                                <motion.div layoutId="check" className="absolute top-1/2 right-3 -translate-y-1/2 sm:translate-y-0 sm:-top-1.5 sm:right-auto sm:-translate-x-0 sm:left-auto sm:-right-1.5 disabled bg-gold rounded-full p-0.5 shadow-sm z-10 hidden sm:block">
                                    <Check className="h-2 w-2 text-white" strokeWidth={4} />
                                </motion.div>
                            )}
                        </button>
                    ))}
                </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-1.5 block">
                        Email Address
                    </label>
                    <input
                        type="email"
                        required
                        placeholder="you@example.com"
                        className="w-full bg-transparent border-0 border-b border-border-soft focus:border-gold focus:ring-0 px-0 py-2 text-charcoal text-sm transition-colors placeholder:text-gray-300"
                    />
                </div>
                <div>
                    <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-1.5 block">
                        Phone
                    </label>
                    <input
                        type="tel"
                        placeholder="+91 00000 00000"
                        className="w-full bg-transparent border-0 border-b border-border-soft focus:border-gold focus:ring-0 px-0 py-2 text-charcoal text-sm transition-colors placeholder:text-gray-300 font-medium"
                    />
                </div>
            </div>

            <div>
                <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-1.5 block">
                    Message
                </label>
                <textarea
                    rows={2}
                    required
                    placeholder="Tell us how we can help..."
                    className="w-full bg-transparent border-0 border-b border-border-soft focus:border-gold focus:ring-0 px-0 py-2 text-charcoal text-sm transition-colors resize-none placeholder:text-gray-300 font-medium"
                />
            </div>

            <div className="flex flex-col gap-3">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-navy-deep hover:bg-navy-light text-white font-bold py-3 rounded-lg transition-all duration-200 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl disabled:bg-gray-400 disabled:cursor-not-allowed"
                >
                    {isSubmitting ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-3 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Processing...
                        </span>
                    ) : submitted ? (
                        'Inquiry Received'
                    ) : (
                        <>
                            <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                            Submit Inquiry
                        </>
                    )}
                </button>
                {submitted && (
                    <p className="text-green-600 text-sm mt-2 text-center font-medium">
                        Thank you. Your inquiry has been received.
                    </p>
                )}

                {/* Google Review Spotlight */}
                <div className="flex flex-col items-center justify-center gap-1.5 p-3 bg-soft-grey/30 rounded-lg border border-border-soft">
                    <div className="flex">
                        {[...Array(5)].map((_, i) => (
                            <Star key={i} className="h-3 w-3 text-[#fbbc05] fill-[#fbbc05]" />
                        ))}
                    </div>
                    <p className="text-[10px] text-label font-bold tracking-widest text-center leading-relaxed">
                        &ldquo;All thank&apos;s to jyoti mam and raman sir... G.s.t service is excellent.....&rdquo; <br /> &mdash; Arun Rajput
                    </p>
                </div>
            </div>
        </form>
    );
}
