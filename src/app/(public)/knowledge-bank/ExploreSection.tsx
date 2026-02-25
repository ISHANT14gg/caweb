'use client';

import { useState } from 'react';
import { Search, ArrowRight, Clock } from 'lucide-react';
import Link from 'next/link';
import ScrollAnimation from '@/components/ui/ScrollAnimation';

const categories = [
    'All',
    'Tax Fundamentals',
    'GST & Compliance',
    'Business Structuring',
    'Financial Interpretation',
    'Startup Readiness'
];

const mockArticles = [
    {
        tag: 'Tax Fundamentals',
        title: 'Understanding the New Tax Regime Slabs for FY 2024-25',
        summary: 'A clear breakdown of the updated income tax slabs and how to calculate your effective liability under the new default regime.',
        readTime: '5 min read',
        slug: 'understanding-new-tax-regime-slabs'
    },
    {
        tag: 'GST & Compliance',
        title: 'When is GST Registration Mandatory?',
        summary: 'The specific turnover thresholds and interstate transaction rules that trigger mandatory GST registration for service providers and traders.',
        readTime: '6 min read',
        slug: 'when-is-gst-registration-mandatory'
    },
    {
        tag: 'Business Structuring',
        title: 'Sole Proprietorship vs. Private Limited',
        summary: 'A pragmatic comparison of compliance costs, liability protection, and growth potential when choosing your first business entity.',
        readTime: '8 min read',
        slug: 'sole-proprietorship-vs-private-limited'
    },
    {
        tag: 'Financial Interpretation',
        title: 'Why Profit Does Not Equal Cash Flow',
        summary: 'How to read your P&L statement alongside your cash flow statement to understand if your business is actually generating liquid capital.',
        readTime: '7 min read',
        slug: 'why-profit-does-not-equal-cash-flow'
    },
    {
        tag: 'Startup Readiness',
        title: 'Preparing Your Cap Table for Seed Funding',
        summary: 'The structural foundations founders must implement before issuing equity to early-stage investors or setting up an ESOP pool.',
        readTime: '10 min read',
        slug: 'preparing-cap-table-seed-funding'
    },
    {
        tag: 'Tax Fundamentals',
        title: 'Capital Gains Tax on Equities and Mutual Funds',
        summary: 'How short-term and long-term capital gains are calculated with grandfathering rules on listed securities.',
        readTime: '6 min read',
        slug: 'capital-gains-tax-equities-mutual-funds'
    }
];

export default function ExploreSection() {
    const [activeCategory, setActiveCategory] = useState('All');
    const [searchQuery, setSearchQuery] = useState('');

    const filteredArticles = mockArticles.filter(article => {
        const matchesCategory = activeCategory === 'All' || article.tag === activeCategory;
        const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            article.summary.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    return (
        <section className="w-full px-6 max-w-7xl pt-16 pb-24 flex flex-col items-center mx-auto">

            {/* Search Bar - Elevated over hero line */}
            <ScrollAnimation type="fade" direction="up" delay={0.4} className="w-full max-w-3xl mb-16 relative z-30">
                <div className="absolute inset-y-0 left-6 flex items-center pointer-events-none text-[#C9A227]">
                    <Search size={24} />
                </div>
                <input
                    type="text"
                    placeholder="Search tax terminology, compliance, structuring..."
                    className="w-full pl-[72px] pr-8 py-6 rounded-2xl bg-white border border-gray-100 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] focus:outline-none focus:ring-2 focus:ring-[#0B1F3A]/10 transition-shadow text-[#0B1F3A] font-medium text-lg placeholder:text-gray-400"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </ScrollAnimation>

            <ScrollAnimation type="fade" direction="up" className="text-center w-full mb-10 flex flex-col items-center">
                <h2 className="text-3xl font-serif text-[#0B1F3A] mb-3 text-center">Explore Topic Library</h2>
            </ScrollAnimation>

            {/* Category Filters */}
            <ScrollAnimation type="fade" direction="up" delay={0.1} className="w-full max-w-7xl flex flex-col items-center">
                <div className="flex overflow-x-auto pb-6 -mx-6 px-6 md:mx-0 md:px-0 md:flex-wrap md:justify-center gap-3 mb-12 no-scrollbar w-full max-w-full">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setActiveCategory(cat)}
                            className={`whitespace-nowrap px-6 py-2.5 rounded-full text-sm font-bold tracking-wide transition-all duration-300 border
                                ${activeCategory === cat
                                    ? 'bg-[#0B1F3A] text-white border-[#0B1F3A] shadow-md'
                                    : 'bg-white text-gray-500 border-gray-200 hover:border-[#C9A227] hover:text-[#0B1F3A]'
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>
            </ScrollAnimation>

            {/* Article Grid */}
            <div className="w-full w-full max-w-7xl transition-all duration-300 min-h-[400px]">
                {filteredArticles.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full">
                        {filteredArticles.map((article, idx) => (
                            <ScrollAnimation type="fade" direction="up" delay={0.1 + ((idx % 3) * 0.1)} className="h-full" key={`${activeCategory}-${searchQuery}-${article.title}`}>
                                <Link href={`/knowledge-bank/${article.slug}`} className="group flex flex-col h-full bg-white border border-gray-100 rounded-2xl p-8 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-[#C9A227]/30 transition-all duration-300 hover:-translate-y-2 relative overflow-hidden">

                                    {/* Top Gold Accent */}
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-[#C9A227] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                    <div className="flex items-center justify-between mb-6">
                                        <span className="text-[10px] font-bold uppercase tracking-widest text-gray-500 group-hover:text-[#C9A227] transition-colors bg-[#F8F9FA] px-3 py-1 rounded-sm">
                                            {article.tag}
                                        </span>
                                        <div className="flex items-center text-xs text-gray-400 font-medium">
                                            <Clock size={12} className="mr-1" /> {article.readTime}
                                        </div>
                                    </div>

                                    <h3 className="text-xl font-serif text-[#0B1F3A] mb-4 group-hover:text-[#C9A227] transition-colors leading-snug">
                                        {article.title}
                                    </h3>

                                    <p className="text-gray-600 text-sm mb-8 flex-grow leading-relaxed">
                                        {article.summary}
                                    </p>

                                    <div className="flex items-center mt-auto pt-6 border-t border-gray-50">
                                        <span className="text-xs font-bold uppercase tracking-wider text-[#0B1F3A] group-hover:text-[#C9A227] transition-colors flex items-center">
                                            Read Article
                                            <ArrowRight size={14} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                        </span>
                                    </div>
                                </Link>
                            </ScrollAnimation>
                        ))}
                    </div>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center py-20 bg-white rounded-2xl border border-gray-100 border-dashed">
                        <div className="w-16 h-16 bg-[#F8F9FA] rounded-full flex items-center justify-center mb-4">
                            <Search size={24} className="text-gray-300" />
                        </div>
                        <h3 className="text-xl font-serif text-[#0B1F3A] mb-2">No results found</h3>
                        <p className="text-gray-500 text-center max-w-sm">We couldn't find any guides matching your search criteria. Try a broader term.</p>
                        <button
                            onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
                            className="mt-6 text-sm font-bold text-[#C9A227] uppercase tracking-wider hover:text-[#0B1F3A] transition-colors"
                        >
                            Reset Search
                        </button>
                    </div>
                )}
            </div>
        </section>
    );
}
