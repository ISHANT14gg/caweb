'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    ShieldCheck,
    Check,
    MessageCircle,
    Star,
    Search,
    FileCheck
} from 'lucide-react';

export default function Contact() {
    const [selectedService, setSelectedService] = useState('');

    const services = [
        { id: 'gst', label: 'GST Advisory', icon: FileCheck },
        { id: 'tax', label: 'Income Tax', icon: Search },
        { id: 'incorporation', label: 'Business Setup', icon: ShieldCheck },
        { id: 'other', label: 'Other', icon: MessageCircle }
    ];

    return (
        <div className="flex flex-col relative">



            {/* ══════════════════════════════════════════
                SECTION 1 – HERO + CONTACT FORM
                ══════════════════════════════════════════ */}
            <section className="relative w-full overflow-hidden bg-navy-deep">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
                        backgroundSize: '40px 40px',
                    }}
                />

                <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-12 lg:py-16">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">

                        {/* LEFT — Text Content */}
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, ease: 'easeOut' }}
                            className="pt-4 lg:pt-0"
                        >
                            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight tracking-tight mb-4">
                                Contact Us
                            </h1>
                            <p className="text-gray-200 md:text-gray-300 text-base lg:text-lg leading-relaxed max-w-md mb-6 font-light">
                                We value integrity, transparency, and fiscal excellence. Partner with
                                Jyoti Thakur Associates to build a sustainable financial legacy.
                            </p>

                            {/* Secure Portal Highlight */}
                            <div className="bg-white/5 border border-white/10 rounded-xl p-3 md:p-4 mb-4 md:mb-6 backdrop-blur-sm max-w-sm">
                                <div className="flex items-start gap-4">
                                    <div className="bg-gold/20 p-2 rounded-lg">
                                        <ShieldCheck className="h-5 w-5 text-gold" />
                                    </div>
                                    <div>
                                        <p className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Secure Document Portal</p>
                                        <p className="text-gray-400 text-xs">Every client gets access to an encrypted portal for safe document sharing.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="h-[2px] w-12 bg-gold" />
                                <span className="text-gold font-medium tracking-widest text-xs uppercase">
                                    Trusted Advisory
                                </span>
                            </div>
                        </motion.div>

                        {/* RIGHT — Contact Form Card */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
                            className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100"
                        >
                            <h2 className="text-xl lg:text-2xl font-bold text-navy-deep mb-5 tracking-tight">
                                Get in Touch
                            </h2>

                            <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                        <label className="text-[10px] font-bold uppercase tracking-widest text-label mb-1.5 block">
                                            First Name
                                        </label>
                                        <input
                                            type="text"
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
                                        placeholder="Tell us how we can help..."
                                        className="w-full bg-transparent border-0 border-b border-border-soft focus:border-gold focus:ring-0 px-0 py-2 text-charcoal text-sm transition-colors resize-none placeholder:text-gray-300 font-medium"
                                    />
                                </div>

                                <div className="flex flex-col gap-3">
                                    <button
                                        type="submit"
                                        className="w-full bg-navy-deep hover:bg-navy-light text-white font-bold py-3 rounded-lg transition-all duration-200 uppercase tracking-widest text-xs flex items-center justify-center gap-2 group shadow-lg hover:shadow-xl"
                                    >
                                        <Send className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                                        Submit Inquiry
                                    </button>

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
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 2 – PROCESS STEPPER
                ══════════════════════════════════════════ */}
            <section className="py-20 bg-white border-y border-border-soft overflow-hidden">
                <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="text-center mb-16">
                        <span className="text-gold font-bold tracking-[0.2em] text-[10px] uppercase mb-3 block">Transparency</span>
                        <h2 className="text-3xl lg:text-4xl font-bold text-navy-deep tracking-tight">The Path to Excellence</h2>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[1px] bg-gradient-to-r from-transparent via-gold/30 to-transparent" />

                        {[
                            { step: '01', title: 'Inquiry', desc: 'Submit your requirements via the secure form.' },
                            { step: '02', title: 'Assessment', desc: 'Our experts review your file within 24 hours.' },
                            { step: '03', title: 'Strategy', desc: 'A dedicated discovery call to align goals.' },
                            { step: '04', title: 'Onboarding', desc: 'Seamless transition to our secure document portal.' }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="relative flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 rounded-2xl bg-soft-grey flex items-center justify-center mb-6 group-hover:bg-gold/10 transition-colors border border-border-soft group-hover:border-gold/30">
                                    <span className="text-xl font-bold text-navy-deep group-hover:text-gold transition-colors">{item.step}</span>
                                </div>
                                <h3 className="text-lg font-bold text-navy-deep mb-2 tracking-tight">{item.title}</h3>
                                <p className="text-sm text-gray-500 max-w-[200px] leading-relaxed font-light">{item.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ══════════════════════════════════════════
                SECTION 3 – INFO CARDS + GOOGLE MAP
                ══════════════════════════════════════════ */}
            <section className="py-20 lg:py-28 bg-soft-grey">
                <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
                        {[
                            { icon: MapPin, label: 'Location', value: 'Mehre, Barsar, Himachal Pradesh 174305' },
                            { icon: Phone, label: 'Phone', value: '+91 98059 31332', href: 'tel:+919805931332' },
                            { icon: Mail, label: 'Email', value: 'info@jyotithakurassociates.com', href: 'mailto:info@jyotithakurassociates.com' },
                            { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 10 AM – 7 PM' },
                        ].map((card, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: idx * 0.1 }}
                                className="bg-white p-7 rounded-xl border border-divider flex items-center gap-5 hover:shadow-md transition-all group"
                            >
                                <div className="bg-soft-grey p-4 rounded-xl group-hover:bg-gold/10 transition-colors">
                                    <card.icon className="h-7 w-7 text-gold" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-label uppercase tracking-widest mb-1">{card.label}</p>
                                    {card.href ? (
                                        <a href={card.href} className="text-lg font-bold text-navy-deep hover:text-gold transition-colors">{card.value}</a>
                                    ) : (
                                        <p className="text-lg font-bold text-navy-deep leading-tight">{card.value}</p>
                                    )}
                                </div>
                            </motion.div>
                        ))}
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="rounded-2xl overflow-hidden border border-divider shadow-sm h-[450px]"
                    >
                        <iframe
                            title="Jyoti Thakur Associates Office Location"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3400!2d76.465444!3d31.5281544!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39052d241e7267d7%3A0x97a4d93a38b6e3b9!2sJyoti%20Thakur!5e0!3m2!1sen!2sin!4v1700000000000"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </motion.div>
                </div>
            </section>
        </div>
    );
}
