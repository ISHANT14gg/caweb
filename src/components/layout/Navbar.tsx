'use client';

import Link from 'next/link';
import { Menu, X, Search, ChevronDown } from 'lucide-react';
import { useState } from 'react';
import { buttonVariants } from '@/components/ui/button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const navigation = [
        { name: 'HOME', href: '/' },
        { name: 'ABOUT US', href: '/about' },
        { name: 'SERVICES', href: '/services', hasDropdown: true },
        { name: 'INDUSTRIES', href: '#', hasDropdown: true },
        { name: 'KNOWLEDGE BANK', href: '#', hasDropdown: true },
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
                                <div className="h-[1px] bg-secondary w-16"></div>
                                <span className="text-[10px] md:text-xs uppercase tracking-[0.2em] text-gray-500 font-medium whitespace-nowrap">
                                    CHARTERED ACCOUNTANTS
                                </span>
                                <div className="h-[1px] bg-secondary w-16"></div>
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden xl:flex xl:items-center xl:space-x-8">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="text-gray-600 hover:text-secondary px-1 py-2 text-[13px] font-bold uppercase tracking-wide transition-colors flex items-center gap-1 group"
                            >
                                {item.name}
                                {item.hasDropdown && (
                                    <ChevronDown className="h-3 w-3 text-gray-400 group-hover:text-secondary" />
                                )}
                            </Link>
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
                <div className="xl:hidden bg-white border-t border-gray-100 absolute w-full left-0 top-16 shadow-lg">
                    <div className="px-4 pt-2 pb-6 space-y-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="block px-3 py-3 rounded-md text-sm font-bold text-gray-700 hover:text-secondary hover:bg-blue-50 uppercase tracking-wide border-b border-gray-50 last:border-0"
                                onClick={() => setIsOpen(false)}
                            >
                                <div className="flex justify-between items-center">
                                    {item.name}
                                    {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                                </div>
                            </Link>
                        ))}
                        <div className="mt-4 px-3">
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
