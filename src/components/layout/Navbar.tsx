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
    };

    const navigation: NavigationItem[] = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        {
            name: 'SERVICES',
            href: '/services',
            hasDropdown: true,
            subItems: [
                { name: 'Business Setup', href: '/services/setup' },
                { name: 'Foreign Direct Investment', href: '/services/fdi' },
                { name: 'Audit & Assurance', href: '/services/audit' },
                { name: 'Taxation Services', href: '/services/tax' },
                { name: 'Outsourcing Services', href: '/services/outsourcing' },
                { name: 'Corporate Compliance', href: '/services/compliance' },
            ],
        },
        { name: 'KNOWLEDGE BANK', href: '#' },
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
                                {item.hasDropdown && item.subItems && (
                                    <div className="absolute top-full left-0 w-64 bg-white border border-gray-100 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0 z-50 rounded-b-lg overflow-hidden">
                                        <div className="py-2">
                                            {item.subItems.map((subItem) => (
                                                <Link
                                                    key={subItem.name}
                                                    href={subItem.href}
                                                    className="block px-6 py-3 text-sm font-medium text-gray-700 hover:text-secondary hover:bg-soft-grey transition-colors"
                                                >
                                                    {subItem.name}
                                                </Link>
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
                                {item.hasDropdown && item.subItems && (
                                    <div className="pl-6 bg-gray-50/50 py-2 border-l-2 border-secondary/20 ml-3 my-1 space-y-1 rounded-r border-b border-gray-50">
                                        {item.subItems.map((subItem) => (
                                            <Link
                                                key={subItem.name}
                                                href={subItem.href}
                                                className="block px-3 py-2 text-sm text-gray-600 hover:text-secondary font-medium"
                                                onClick={() => setIsOpen(false)}
                                            >
                                                {subItem.name}
                                            </Link>
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
