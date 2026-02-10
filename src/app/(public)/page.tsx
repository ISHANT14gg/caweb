'use client';

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle, TrendingUp, Users, Globe, Play, MessageSquare, Building2, Briefcase, IndianRupee, FileText, Scale, Calculator, BookOpen, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import ScrollAnimation from "@/components/ui/ScrollAnimation";
import TypewriterText from "@/components/ui/TypewriterText";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">

      {/* 1. Hero Section - Team Background */}
      <section className="relative h-[600px] w-full overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
          alt="Team of Chartered Accountants"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/50"></div> {/* Dark Overlay */}

        {/* Green Geometric Shape (Left Bottom) */}
        <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[200px] border-b-lime-500 border-r-[200px] border-r-transparent opacity-90 z-10"></div>
        <ScrollAnimation direction="up" delay={0.5} className="absolute bottom-8 left-8 z-20">
          <div className="bg-white p-2 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
            <MessageSquare className="h-6 w-6 text-green-600" />
          </div>
        </ScrollAnimation>

        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="max-w-3xl text-white">

            <ScrollAnimation direction="right" delay={0.2}>
              <h1 className="text-4xl md:text-6xl font-serif font-bold leading-tight mb-6">
                <TypewriterText text="Manage Your" delay={0.5} /> <br className="hidden md:block" />
                <TypewriterText text="Financial Statements" className="text-lime-400" delay={1.5} /><br />
                <TypewriterText text="The Right Way" delay={3.0} />
              </h1>
              <p className="text-lg md:text-xl text-gray-200 mb-8 max-w-xl">
                Empowering Excellence, Every Step of the Way. Jyoti Thakur is a Certified Public Accounting Firm committed to serving our clients as a Trusted Advisor.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/services" className="px-8 py-3 bg-white text-gray-900 font-bold rounded hover:bg-gray-100 transition-colors text-center shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
                  Our Services
                </Link>
                <Link href="/contact" className="px-8 py-3 border-2 border-white text-white font-bold rounded hover:bg-white hover:text-gray-900 transition-colors text-center hover:shadow-lg transform hover:-translate-y-1 duration-200">
                  Let's Talk
                </Link>
              </div>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 2. Trusted Experts & Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation direction="up" className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-4">
              Trusted experts. Proven results.<br />
              It’s kind of our thing.
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl mx-auto">
              Jyoti Thakur is a Certified Public Accounting Firm committed to serving our clients as a Trusted Advisor.
            </p>
          </ScrollAnimation>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-t border-gray-100 pt-12 relative">
            {/* Background Line Graph (Simulated) */}
            {/* Background Line Graph (Animated) */}
            <div className="absolute top-0 left-0 right-0 bottom-0 pointer-events-none hidden md:block z-0">
              <svg viewBox="0 0 100 20" preserveAspectRatio="none" className="w-full h-full">
                <motion.path
                  d="M 10 18 L 30 14 L 50 10 L 70 6 L 90 2"
                  fill="none"
                  stroke="#3b82f6"
                  strokeWidth="0.5"
                  initial={{ pathLength: 0, opacity: 0 }}
                  whileInView={{ pathLength: 1, opacity: 0.3 }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                />
                {/* Optional: Add circles at points */}
                {[
                  { cx: 10, cy: 18 },
                  { cx: 30, cy: 14 },
                  { cx: 50, cy: 10 },
                  { cx: 70, cy: 6 },
                  { cx: 90, cy: 2 }
                ].map((point, i) => (
                  <motion.circle
                    key={i}
                    cx={point.cx}
                    cy={point.cy}
                    r="0.5"
                    fill="#3b82f6"
                    initial={{ scale: 0, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 0.5 }}
                    transition={{ delay: i * 0.3, duration: 0.5 }}
                  />
                ))}
              </svg>
            </div>

            {[
              { number: "29+", label: "Years of experience", icon: <CheckCircle className="h-10 w-10 text-blue-800 mb-4" /> },
              { number: "100+", label: "Services We Offers", icon: <Globe className="h-10 w-10 text-blue-800 mb-4" /> },
              { number: "5+", label: "Countries Operations", icon: <TrendingUp className="h-10 w-10 text-blue-800 mb-4" /> },
              { number: "100+", label: "Professionals", icon: <Users className="h-10 w-10 text-blue-800 mb-4" /> },
              { number: "1500+", label: "Happy Clients", icon: <Briefcase className="h-10 w-10 text-blue-800 mb-4" /> }
            ].map((stat, index) => (
              <ScrollAnimation key={index} delay={index * 0.1} type="scale" className="flex flex-col items-center text-center relative z-10 group hover:-translate-y-2 transition-transform duration-300">
                <div className="p-4 bg-white rounded-full mb-2 group-hover:shadow-lg transition-shadow">
                  {stat.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-blue-500 mb-2">{stat.number}</h3>
                <p className="text-sm font-bold text-gray-900 uppercase tracking-wide">{stat.label}</p>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <ScrollAnimation direction="right">
              <span className="text-orange-500 font-bold tracking-widest text-sm uppercase mb-4 block">MEET THE EXPERTS</span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-6 leading-tight">
                Discover Our Team Of <br />
                Head Business <br />
                Consultant Experts
              </h2>
              <p className="text-gray-500 text-lg mb-8 leading-relaxed">
                We bring together a diverse team of certified accountants, financial analysts, and business strategists with over 29 years of experience. Our experts are dedicated to providing personalized solutions that drive growth and ensure compliance.
              </p>

              <Link href="/about" className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white transition-all duration-200 bg-orange-500 border border-transparent rounded-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-600 shadow-md hover:shadow-lg">
                Discover Team <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </ScrollAnimation>

            <ScrollAnimation direction="left" className="relative h-[500px] w-full rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Team Meeting"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </ScrollAnimation>
          </div>
        </div>
      </section>

      {/* 3. Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="text-center mb-16 px-4">
          <ScrollAnimation direction="down">
            <span className="text-blue-600 font-bold uppercase tracking-widest text-sm mb-2 block">Our Services</span>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900">
              Solutions Tailored to Your Needs, Service Perfected
            </h2>
            <p className="mt-4 text-gray-600 max-w-3xl mx-auto">
              We provide real-world solutions to complex business issues through audit and assurance functions, taxation-international and domestic, startup in India, company formation in India and foreign investment in India etc.
            </p>
          </ScrollAnimation>
        </div>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {/* Service 1 */}
            <ScrollAnimation type="scale" delay={0.1}>
              <div className="relative h-80 group overflow-hidden rounded shadow-lg cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Start Business"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold text-center">Business Setup in India</h3>
                </div>
              </div>
            </ScrollAnimation>

            {/* Service 2 */}
            <ScrollAnimation type="scale" delay={0.2}>
              <div className="relative h-80 group overflow-hidden rounded shadow-lg cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="FDI"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold text-center">Foreign Direct Investment (FDI)</h3>
                </div>
              </div>
            </ScrollAnimation>

            {/* Service 3 */}
            <ScrollAnimation type="scale" delay={0.3}>
              <div className="relative h-80 group overflow-hidden rounded shadow-lg cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Audit"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold text-center">Audit & Assurance Services</h3>
                </div>
              </div>
            </ScrollAnimation>

            {/* Service 4 */}
            <ScrollAnimation type="scale" delay={0.1}>
              <div className="relative h-80 group overflow-hidden rounded shadow-lg cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Taxation"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold text-center">Taxation Services</h3>
                </div>
              </div>
            </ScrollAnimation>

            {/* Service 5 */}
            <ScrollAnimation type="scale" delay={0.2}>
              <div className="relative h-80 group overflow-hidden rounded shadow-lg cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1554224154-26032ffc0d07?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Outsourcing"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold text-center">Outsourcing Services</h3>
                </div>
              </div>
            </ScrollAnimation>

            {/* Service 6 */}
            <ScrollAnimation type="scale" delay={0.3}>
              <div className="relative h-80 group overflow-hidden rounded shadow-lg cursor-pointer">
                <Image
                  src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="Compliance"
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-blue-900/90 to-transparent p-6 pt-20">
                  <h3 className="text-white text-xl font-bold text-center">Corporate Compliance</h3>
                </div>
              </div>
            </ScrollAnimation>

          </div>
        </div>
      </section>

      {/* 4. Video Section */}
      <section className="py-20 bg-white">
        <ScrollAnimation className="text-center mb-12" direction="up">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-gray-900 mb-4">Our Video</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Unlike most accounting companies, Jyoti Thakur is an integrated finance management team. From the start, we see ourselves as your partner.
          </p>
        </ScrollAnimation>

        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <ScrollAnimation key={i} delay={0.2 * i} type="fade">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg group cursor-pointer bg-gray-100 border border-gray-200">
                  {/* Using a placeholder image for video thumb */}
                  <Image
                    src={`https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80`}
                    alt={`Video Thumbnail ${i}`}
                    fill
                    className="object-cover group-hover:opacity-90 transition-opacity"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-red-600 text-white rounded-full p-3 shadow-xl group-hover:scale-110 transition-transform">
                      <Play className="h-8 w-8 fill-current" />
                    </div>
                  </div>
                </div>
              </ScrollAnimation>
            ))}
          </div>

          <div className="text-center mt-12">
            <ScrollAnimation direction="up" delay={0.6}>
              <Link href="#" className="px-8 py-3 bg-blue-600 text-white font-bold rounded hover:bg-blue-700 transition-colors shadow-md">
                View All Videos
              </Link>
            </ScrollAnimation>
          </div>
        </div>
      </section>

      <Testimonials />

      {/* 5. Tools Preview */}
      <section className="py-16 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollAnimation className="text-center mb-10" direction="down">
            <h2 className="text-3xl font-serif font-bold text-gray-900">Financial Tools</h2>
            <p className="mt-2 text-gray-600">Plan your finances with our easy-to-use calculators</p>
          </ScrollAnimation>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { name: "SIP Calculator", href: "/tools" },
              { name: "GST Calculator", href: "/tools" },
              { name: "Income Tax", href: "/tools" },
              { name: "EMI Calculator", href: "/tools" },
            ].map((tool, idx) => (
              <ScrollAnimation key={tool.name} delay={0.1 * idx} type="scale">
                <Link href={tool.href} className="block group bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow text-center border border-gray-100 h-full">
                  <div className="h-12 w-12 bg-lime-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-lime-200 transition-colors">
                    <TrendingUp className="h-6 w-6 text-lime-700" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{tool.name}</h3>
                  <p className="text-sm text-blue-600 font-medium group-hover:underline">Try Now &rarr;</p>
                </Link>
              </ScrollAnimation>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
