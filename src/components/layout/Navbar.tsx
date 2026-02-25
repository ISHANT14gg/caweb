'use client';

import Link from 'next/link';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    type NavigationItem = {
        name: string;
        href: string;
        hasDropdown?: boolean;
        subItems?: { name: string; href: string }[];
        megaMenu?: { category: string; items: { name: string; href: string }[] }[];
    };

    const navigation: NavigationItem[] = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        {
            name: 'SERVICES',
            href: '/services',
            hasDropdown: true,
            megaMenu: [
                {
                    category: 'Indirect & Direct Tax Compliance',
                    items: [
                        { name: 'GST Compliance & Advisory', href: '/services/gst-compliance' },
                        { name: 'Income Tax Compliance & Representation', href: '/services/income-tax' },
                        { name: 'Statutory & Regulatory Registrations', href: '/services/statutory-registrations' },
                    ]
                },
                {
                    category: 'Business Incorporation & Structuring Advisory',
                    items: [
                        { name: 'Entity Incorporation & ROC Compliance', href: '/services/entity-incorporation' },
                        { name: 'Capital & Shareholding Structuring', href: '/services/capital-structuring' },
                        { name: 'Startup Regulatory Framework', href: '/services/startup-regulatory' },
                    ]
                },
                {
                    category: 'Virtual CFO & Financial Strategy',
                    items: [
                        { name: 'Financial Modelling & Forecasting', href: '/services/financial-modelling' },
                        { name: 'MIS & Performance Reporting', href: '/services/mis-reporting' },
                        { name: 'Cash Flow & Working Capital', href: '/services/cash-flow' },
                        { name: 'Fundraising & Strategic Advisory', href: '/services/fundraising' },
                    ]
                },
                {
                    category: 'Financial Literacy & Applied Finance Education',
                    items: [
                        { name: 'Entrepreneur Finance Programs', href: '/services/entrepreneur-finance' },
                        { name: 'Tax Awareness Workshops', href: '/services/tax-workshops' },
                    ]
                }
            ]
        },
        { name: 'KNOWLEDGE BANK', href: '/knowledge-bank' },
        { name: 'CONSULTATION', href: '/consultation' },
        { name: 'CONTACT-US', href: '/contact' },
    ];

    return (
        <nav className="bg-white shadow-sm border-b border-gray-100 flex-none z-50 sticky top-0 font-sans">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo Section */}
                    <div className="flex items-center flex-shrink-0">
                        <Link href="/" className="flex flex-col">
                            <h1 className="text-2xl md:text-3xl font-serif font-bold text-primary tracking-wide mb-0.5">
                                JYOTI THAKUR
                            </h1>
                            <div className="flex items-center gap-3">
                                <div className="hidden md:block h-[1px] bg-secondary w-16"></div>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium whitespace-nowrap">
                                    ASSOCIATES
                                </span>
                                <div className="hidden md:block h-[1px] bg-secondary w-16"></div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex xl:items-center xl:space-x-8">
                        {navigation.map((item) => (
                            <div key={item.name} className="relative group">
                                <Link
                                    href={item.href}
                                    className="text-gray-600 hover:text-secondary px-1 py-6 text-[13px] font-bold uppercase tracking-wide transition-colors flex items-center gap-1"
                                >
                                    {item.name}
                                    {item.hasDropdown && (
                                        <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-secondary transition-transform duration-200 group-hover:rotate-180" />
                                    )}
                                </Link>

                                {/* Dropdown Menu (Desktop) */}
                                {item.hasDropdown && item.megaMenu && (
                                    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[750px] bg-white border border-gray-100 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 rounded-b-xl overflow-hidden p-6 cursor-default">
                                        <div className="grid grid-cols-2 gap-8">
                                            {item.megaMenu.map((group) => (
                                                <div key={group.category} className="space-y-3">
                                                    <h4 className="text-[11px] font-bold uppercase tracking-widest text-[#0B1F3A] border-b border-gray-100 pb-2 mb-3 mt-1 leading-relaxed">
                                                        {group.category}
                                                    </h4>
                                                    <ul className="flex flex-col space-y-2">
                                                        {group.items.map((subItem) => (
                                                            <li key={subItem.name}>
                                                                <Link
                                                                    href={subItem.href}
                                                                    className="text-[13px] font-medium text-gray-600 hover:text-[#C9A227] transition-colors py-1 inline-block"
                                                                >
                                                                    {subItem.name}
                                                                </Link>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                    {/* Right Actions */}
                    <div className="hidden lg:flex items-center gap-6">
                        {/* Search Icon */}
                        <div className="border-r border-gray-300 pr-6">
                            <button className="text-gray-400 hover:text-primary transition-colors">
                                <Search className="h-5 w-5" />
                            </button>
                        </div>

                        {/* Login Button */}
                        <Link
                            href="/login"
                            className={buttonVariants({ className: "font-bold uppercase tracking-wide" })}
                        >
                            Client Login
                        </Link>
                    </div>

                    {/* Mobile menu button */}
                    <div className="flex items-center xl:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
                        >
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? (
                                <X className="block h-6 w-6" aria-hidden="true" />
                            ) : (
                                <Menu className="block h-6 w-6" aria-hidden="true" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-16 shadow-lg max-h-[80vh] overflow-y-auto">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <div key={item.name}>
                                <Link
                                    href={item.href}
                                    className="flex justify-between items-center px-3 py-3 rounded-md text-sm font-bold text-gray-700 hover:text-secondary hover:bg-soft-grey uppercase tracking-wide border-b border-gray-50 last:border-0"
                                    onClick={(e) => {
                                        if (item.hasDropdown) {
                                            // Optional: prevent closing menu immediately if clicking the parent
                                            // e.preventDefault(); 
                                        } else {
                                            setIsOpen(false);
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>

                                {/* Mobile Submenu */}
                                {item.hasDropdown && item.megaMenu && (
                                    <div className="pl-4 bg-gray-50/50 py-3 border-l-2 border-[#C9A227]/30 ml-2 my-1 space-y-5 rounded-r border-b border-gray-50">
                                        {item.megaMenu.map((group) => (
                                            <div key={group.category} className="space-y-2">
                                                <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2 px-3 leading-relaxed">
                                                    {group.category}
                                                </h4>
                                                <div className="flex flex-col space-y-1">
                                                    {group.items.map((subItem) => (
                                                        <Link
                                                            key={subItem.name}
                                                            href={subItem.href}
                                                            className="block px-3 py-1.5 text-sm text-gray-700 hover:text-[#C9A227] font-medium"
                                                            onClick={() => setIsOpen(false)}
                                                        >
                                                            {subItem.name}
                                                        </Link>
                                                    ))}
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                        <div className="mt-6 px-3">
                            <Link
                                href="/login"
                                className={buttonVariants({ className: "w-full font-bold uppercase tracking-wide" })}
                                onClick={() => setIsOpen(false)}
                            >
                                Client Login
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
