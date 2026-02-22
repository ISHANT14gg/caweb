import React from 'react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';
import { Metadata } from 'next';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    ShieldCheck
} from 'lucide-react';
import ContactFormClient from './ContactFormClient';

export const metadata: Metadata = {
    title: 'Consultation & Inquiries | Jyoti Thakur & Associates',
    description: 'Schedule a discovery call with our partners. Secure document portal access and priority handling for strategic business engagements.',
};

export default function Contact() {
    return (
        <div className="flex flex-col relative w-full overflow-hidden bg-white text-gray-900 font-sans selection:bg-gray-200">




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
                        <div className="pt-4 lg:pt-0">
                            <ScrollAnimation type="fade" direction="up" duration={0.7} className="h-full flex flex-col justify-center">
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
                            </ScrollAnimation>
                        </div>

                        {/* RIGHT — Contact Form Card */}
                        <div className="bg-white rounded-2xl shadow-2xl p-6 md:p-8 border border-gray-100">
                            <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.7}>
                                <h2 className="text-xl lg:text-2xl font-bold text-navy-deep mb-5 tracking-tight">
                                    Get in Touch
                                </h2>
                                <ContactFormClient />
                            </ScrollAnimation>
                        </div>
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
                            { icon: Phone, label: 'Phone', value: '+91 70187 73240', href: 'tel:+917018773240' },
                            { icon: Mail, label: 'Email', value: 'info@jyotithakurassociates.com', href: 'mailto:info@jyotithakurassociates.com' },
                            { icon: Clock, label: 'Working Hours', value: 'Mon–Sat: 10 AM – 7 PM' },
                        ].map((card, idx) => (
                            <ScrollAnimation type="fade" direction="up" delay={idx * 0.1}
                                key={idx}
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
                            </ScrollAnimation>
                        ))}
                    </div>

                    <ScrollAnimation type="fade" direction="up" delay={0.2} duration={0.8}
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
                    </ScrollAnimation>
                </div>
            </section>
        </div>
    );
}
