import Link from 'next/link';
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                    {/* Brand & Inteoduction */}
                    <div className="col-span-1 md:col-span-1">
                        <span className="text-2xl font-bold text-white mb-4 block">Jyoti Thakur</span>
                        <p className="text-gray-400 text-sm mb-4">
                            Providing expert financial services and strategic advice since 1995. Your trusted partner in growth.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Linkedin className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Twitter className="h-5 w-5" />
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors">
                                <Facebook className="h-5 w-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-400 hover:text-white text-sm transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="text-gray-400 hover:text-white text-sm transition-colors">Our Services</Link></li>
                            <li><Link href="/contact" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Support</Link></li>
                            <li><Link href="/login" className="text-gray-400 hover:text-white text-sm transition-colors">Client Portal</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Core Services</h3>
                        <ul className="space-y-2">
                            <li><Link href="/services#tax" className="text-gray-400 hover:text-white text-sm transition-colors">Tax Consultation</Link></li>
                            <li><Link href="/services#audit" className="text-gray-400 hover:text-white text-sm transition-colors">Auditing</Link></li>
                            <li><Link href="/services#gst" className="text-gray-400 hover:text-white text-sm transition-colors">GST Filing</Link></li>
                            <li><Link href="/services#company" className="text-gray-400 hover:text-white text-sm transition-colors">Company Registration</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 tracking-wider uppercase mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start">
                                <MapPin className="h-5 w-5 text-gray-400 mr-2 mt-0.5" />
                                <span className="text-gray-400 text-sm">
                                    123 Business Tower, <br />
                                    Connaught Place, New Delhi - 110001
                                </span>
                            </li>
                            <li className="flex items-center">
                                <Phone className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-gray-400 text-sm">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center">
                                <Mail className="h-5 w-5 text-gray-400 mr-2" />
                                <span className="text-gray-400 text-sm">info@jyotithakur.com</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 mt-8 text-center md:text-left">
                    <p className="text-gray-500 text-sm">
                        &copy; {new Date().getFullYear()} Jyoti Thakur. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
