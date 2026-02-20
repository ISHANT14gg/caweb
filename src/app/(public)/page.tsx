'use client';

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, TrendingUp, BarChart3 } from "lucide-react";
import CoreVerticals from "@/components/sections/CoreVerticals";
import WhoWeWorkWith from "@/components/sections/WhoWeWorkWith";
import TrustAuthority from "@/components/sections/TrustAuthority";
import StructureInAction from "@/components/sections/StructureInAction";
import InsightsSection from "@/components/sections/InsightsSection";
import { ScrollProgressBar, AnimatedCounter, TypewriterHeadline, ParallaxSection, AnimatedDivider } from "@/components/ui/animations";

/* ───────────────────────────────────────────────
   HOMEPAGE – Jyoti Thakur Associates
   7 Sections as per Client Content Document
   ─────────────────────────────────────────────── */

export default function Home() {
  return (
    <div className="flex flex-col relative">

      {/* Gold scroll progress bar */}
      <ScrollProgressBar />

      {/* ══════════════════════════════════════════
          SECTION 1 – HERO
          ══════════════════════════════════════════ */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #0B1F3A 0%, #132B50 60%, #0F2B46 100%)',
          height: 'calc(100vh - 64px)',
        }}
      >
        {/* Subtle grid pattern overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.3) 1px, transparent 0)',
            backgroundSize: '40px 40px',
          }}
        />

        <div className="relative z-10 max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 h-full flex items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center w-full">

            {/* LEFT — Text Content */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <TypewriterHeadline
                className="text-2xl sm:text-3xl lg:text-4xl xl:text-[2.75rem] font-bold text-white leading-[1.2] tracking-tight mb-5"
                parts={[
                  { text: 'Compliance That Protects.' },
                  { text: 'Advisory That Builds.', highlight: true },
                  { text: 'Finance That Drives Growth.' },
                ]}
              />

              <p className="text-sm lg:text-base text-gray-200 md:text-gray-300 leading-relaxed mb-6 max-w-xl font-light">
                At Jyoti Thakur Associates, we provide structured GST, Income Tax, and statutory compliance services while partnering with SMEs, startups, professionals, and aspiring entrepreneurs through Virtual CFO support, financial structuring, business advisory, and financial literacy initiatives — enabling informed decisions, disciplined growth, and long-term stability.
              </p>

              {/* Authority Strip */}
              <div className="flex flex-wrap gap-x-4 sm:gap-x-5 gap-y-3 sm:gap-y-2 text-xs text-gray-300 md:text-gray-400 mb-6 tracking-wide leading-relaxed">
                <span>7+ Years of Professional Practice</span>
                <span className="hidden sm:inline text-gold/40">|</span>
                <span>1000+ Clients Served</span>
                <span className="hidden sm:inline text-gold/40">|</span>
                <span>Multi-Industry Experience</span>
                <span className="hidden sm:inline text-gold/40">|</span>
                <span>Serving Clients Across India</span>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 bg-gold text-navy font-semibold rounded-lg hover:brightness-110 transition-all duration-200 shadow-lg hover:shadow-gold/20 hover:-translate-y-0.5 text-sm tracking-wide"
                >
                  Schedule a Consultation
                </Link>
                <Link
                  href="#services"
                  className="inline-flex items-center justify-center px-8 py-4 border border-white/20 text-white font-medium rounded-lg hover:bg-white/5 hover:border-gold/40 transition-all duration-200 text-sm tracking-wide group"
                >
                  Explore Our Services
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </motion.div>

            {/* RIGHT — Financial Growth Visual (sized to match screenshot) */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
              className="hidden lg:flex items-center justify-center"
            >
              <div className="relative w-[380px] h-[290px] bg-[#0D2440] border border-white/10 rounded-xl p-5">
                {/* Growth chart visualization */}
                <svg viewBox="0 0 370 260" className="w-full h-full">
                  {/* Grid lines */}
                  {[0, 1, 2, 3, 4].map((i) => (
                    <motion.line
                      key={`grid-${i}`}
                      x1="30" y1={40 + i * 45}
                      x2="350" y2={40 + i * 45}
                      stroke="rgba(255,255,255,0.06)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    />
                  ))}

                  {/* Main growth line */}
                  <motion.path
                    d="M 40 210 C 80 200, 100 175, 140 155 C 180 135, 200 125, 240 100 C 280 75, 310 55, 340 45"
                    fill="none"
                    stroke="#C9A227"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 2, delay: 0.8, ease: "easeInOut" }}
                  />

                  {/* Area fill under curve */}
                  <motion.path
                    d="M 40 210 C 80 200, 100 175, 140 155 C 180 135, 200 125, 240 100 C 280 75, 310 55, 340 45 L 340 230 L 40 230 Z"
                    fill="url(#goldGradient)"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 2 }}
                  />

                  {/* Data points */}
                  {[
                    { cx: 40, cy: 210 },
                    { cx: 140, cy: 155 },
                    { cx: 240, cy: 100 },
                    { cx: 340, cy: 45 },
                  ].map((point, i) => (
                    <motion.circle
                      key={i}
                      cx={point.cx}
                      cy={point.cy}
                      r="5"
                      fill="#C9A227"
                      stroke="#0D2440"
                      strokeWidth="3"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ scale: 1, opacity: 1 }}
                      transition={{ delay: 1.2 + i * 0.3, duration: 0.4 }}
                    />
                  ))}

                  {/* Gradient definition */}
                  <defs>
                    <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#C9A227" stopOpacity="0.15" />
                      <stop offset="100%" stopColor="#C9A227" stopOpacity="0.02" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Floating stat cards */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.5, duration: 0.5 }}
                  className="absolute -top-4 -right-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <TrendingUp className="h-4 w-4 text-gold" />
                    <span className="text-xs text-gray-400">Growth</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">+42%</p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 2.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-3"
                >
                  <div className="flex items-center gap-2">
                    <BarChart3 className="h-4 w-4 text-gold" />
                    <span className="text-xs text-gray-400">Compliance</span>
                  </div>
                  <p className="text-xl font-bold text-white mt-1">100%</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════
          SECTION 2 – CREDIBILITY STRIP
          ══════════════════════════════════════════ */}
      <section className="py-12 lg:py-20 bg-white border-b border-divider">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12">

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8 lg:mb-16"
          >
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-navy mb-4 tracking-tight">
              Built on Discipline. Backed by Experience. Proven at Scale.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {[
              {
                number: "1000+",
                target: 1000,
                suffix: "+",
                title: "Active Client Relationships",
                desc: "Across businesses, professionals & individual taxpayers",
              },
              {
                number: "7000+",
                target: 7000,
                suffix: "+",
                title: "Compliance Engagements Managed Annually",
                desc: "GST, Income Tax & statutory frameworks executed with discipline",
              },
              {
                number: "7+",
                target: 7,
                suffix: "+",
                title: "Years Ground-Level Professional Practice",
                desc: "Understanding real operational & financial realities",
              },
              {
                number: "Multi-Sector",
                title: "Experience Across Diverse Industries",
                desc: "Trading | Services | Manufacturing | Startups | Independent Professionals",
              },
              {
                number: "India",
                title: "Expanding Advisory Footprint",
                desc: "Serving Clients Beyond Regional Boundaries",
              },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="text-center group"
              >
                <div className="text-2xl sm:text-3xl font-bold text-gold mb-2 tracking-tight">
                  {typeof stat.target === 'number' ? (
                    <AnimatedCounter target={stat.target} suffix={stat.suffix} />
                  ) : (
                    stat.number
                  )}
                </div>
                <h3 className="text-sm font-semibold text-navy mb-2 uppercase tracking-wide leading-snug">
                  {stat.title}
                </h3>
                <p className="text-xs text-label leading-relaxed break-words whitespace-normal px-2 sm:px-0">
                  {stat.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Animated Divider */}
      <AnimatedDivider maxWidth={140} />

      {/* ══════ SECTION 3 – CORE PRACTICE VERTICALS ══════ */}
      <ParallaxSection speed={0.08}>
        <CoreVerticals />
      </ParallaxSection>

      {/* Animated Divider */}
      <AnimatedDivider maxWidth={100} />

      {/* ══════ SECTION 4 – WHO WE WORK WITH ══════ */}
      <WhoWeWorkWith />

      {/* Animated Divider */}
      <AnimatedDivider maxWidth={120} />

      {/* ══════ SECTION 5 – TRUST & AUTHORITY ══════ */}
      <ParallaxSection speed={0.06}>
        <TrustAuthority />
      </ParallaxSection>

      {/* Animated Divider */}
      <AnimatedDivider maxWidth={100} />

      {/* ══════ SECTION 6 – STRUCTURE IN ACTION ══════ */}
      <StructureInAction />

      {/* Animated Divider */}
      <AnimatedDivider maxWidth={140} />

      {/* ══════ SECTION 7 – INSIGHTS & FINAL CTA ══════ */}
      <InsightsSection />

    </div>
  );
}
