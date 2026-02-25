import React from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, Share2, BookmarkPlus } from 'lucide-react';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    // Await the params to resolve Next.js 15+ promise-based params warning
    const resolvedParams = await params;
    const { slug } = resolvedParams;

    // Convert slug to human-readable title for the placeholder
    const formattedTitle = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <main className="min-h-screen bg-white text-gray-900 pt-32 pb-24 font-sans selection:bg-[#C9A227]/20 flex flex-col items-center">

            {/* Top Navigation Bar */}
            <div className="w-full max-w-4xl px-6 mb-12">
                <Link href="/knowledge-bank" className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-[#0B1F3A] transition-colors">
                    <ArrowLeft className="h-4 w-4 mr-2" />
                    Back to Knowledge Bank
                </Link>
            </div>

            {/* Article Header */}
            <header className="w-full max-w-4xl px-6 text-center mb-16">
                <ScrollAnimation direction="up">
                    <div className="flex items-center justify-center gap-4 mb-6">
                        <span className="text-xs font-bold uppercase tracking-widest text-[#C9A227]">
                            Structured Guide
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs font-medium text-gray-500">
                            15 min read
                        </span>
                    </div>

                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#0B1F3A] font-light leading-tight mb-8">
                        {formattedTitle}
                    </h1>

                    <div className="flex items-center justify-center gap-6 pt-6 border-t border-gray-100">
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1F3A] transition-colors">
                            <Share2 className="h-4 w-4" />
                            Share
                        </button>
                        <button className="flex items-center gap-2 text-sm text-gray-500 hover:text-[#0B1F3A] transition-colors">
                            <BookmarkPlus className="h-4 w-4" />
                            Save
                        </button>
                    </div>
                </ScrollAnimation>
            </header>

            {/* Content Wrapper */}
            <article className="w-full max-w-3xl px-6">

                {/* Executive Summary */}
                <ScrollAnimation direction="up" delay={0.1}>
                    <div className="bg-gray-50 border-l-4 border-[#0B1F3A] p-6 md:p-8 rounded-r-xl mb-12">
                        <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">Executive Summary</h3>
                        <p className="text-gray-700 leading-relaxed font-medium">
                            This is a placeholder for the "{formattedTitle}" article. In a production environment, this space would contain the high-level takeaway of the financial concept to provide immediate clarity before diving into the details.
                        </p>
                    </div>
                </ScrollAnimation>

                {/* Article Body Placeholder */}
                <ScrollAnimation direction="up" delay={0.2} className="prose prose-lg prose-gray max-w-none mb-16">
                    <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4">Understanding the Core Concept</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Financial clarity requires a structured approach. The concept of {formattedTitle.toLowerCase()} is often misunderstood due to fragmented information online. By understanding the core mechanics rather than just the surface-level rules, you can make more predictable, risk-adjusted decisions.
                    </p>

                    <h2 className="text-2xl font-bold text-[#0B1F3A] mb-4 mt-10">Structural Impact on Operations</h2>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                        Whether you are an individual evaluating personal tax liabilities or a business owner looking at structuring, {formattedTitle.toLowerCase()} dictates certain compliance requirements that cannot be ignored. Setting up an internal calendar and diagnostic review process is essential to maintain baseline stability.
                    </p>

                    <div className="my-10 p-6 bg-[#0B1F3A]/5 rounded-xl border border-[#0B1F3A]/10">
                        <h4 className="text-base font-bold text-[#0B1F3A] mb-2">Key Takeaway</h4>
                        <p className="text-gray-700 text-sm">
                            Always ensure structural alignment precedes tactical execution. Reactive compliance results in penalties, while structured compliance creates visibility.
                        </p>
                    </div>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                        If you represent a growing venture, establishing these protocols early will heavily reduce diligence friction during funding rounds or structural audits.
                    </p>
                </ScrollAnimation>

                {/* Bottom CTA Block */}
                <ScrollAnimation direction="up" delay={0.3}>
                    <div className="bg-[#0B1F3A] text-white rounded-2xl p-10 md:p-14 text-center mt-20 relative overflow-hidden">
                        <div className="absolute inset-0 bg-[#C9A227]/5" />
                        <div className="relative z-10">
                            <h3 className="text-2xl font-serif mb-4">Need personalized clarity on this topic?</h3>
                            <p className="text-gray-300 mb-8 max-w-lg mx-auto leading-relaxed">
                                Depending on your financial structure, different rules may apply. Schedule a diagnostic conversation to understand your specific exposure.
                            </p>
                            <Link
                                href="/consultation"
                                className="inline-flex items-center justify-center px-8 py-4 bg-white text-[#0B1F3A] font-semibold rounded hover:bg-[#C9A227] hover:text-white transition-colors duration-300"
                            >
                                Schedule a Consultation
                                <ArrowRight className="ml-2 h-4 w-4" />
                            </Link>
                        </div>
                    </div>
                </ScrollAnimation>

            </article>
        </main>
    );
}
