'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import {
    LayoutDashboard,
    FileText,
    Users,
    Settings,
    LogOut,
    PieChart,
    Building2,
    User,
    ChevronDown
} from 'lucide-react';

const Sidebar = ({ role }: { role: 'admin' | 'client' }) => {
    const pathname = usePathname();
    const [profileType, setProfileType] = useState<'individual' | 'firm'>('individual');
    const [isProfileMenuOpen, setIsProfileMenuOpen] = useState(false);

    const clientLinks = [
        { name: 'Dashboard', href: '/client', icon: LayoutDashboard },
        { name: 'My Documents', href: '/client/documents', icon: FileText },
        { name: 'Status', href: '/client/status', icon: PieChart },
        { name: 'Settings', href: '/client/settings', icon: Settings },
    ];

    const adminLinks = [
        { name: 'Dashboard', href: '/admin', icon: LayoutDashboard },
        { name: 'Clients', href: '/admin/clients', icon: Users },
        { name: 'Uploads', href: '/admin/uploads', icon: FileText },
        { name: 'Settings', href: '/admin/settings', icon: Settings },
    ];

    const links = role === 'admin' ? adminLinks : clientLinks;

    const toggleProfile = (type: 'individual' | 'firm') => {
        setProfileType(type);
        setIsProfileMenuOpen(false);
        // In a real app, this would trigger a context update or API call
        // For demo, we rely on the URL query param or local storage, 
        // but here we just update state which resets on navigation (simple demo limitation)
        // To make it persist for the demo, we could use localStorage, but visual toggle is enough for UI demo.
        if (typeof window !== 'undefined') {
            window.localStorage.setItem('demoProfileType', type);
            window.dispatchEvent(new Event('storage')); // Trigger update in other components
        }
    };

    return (
        <div className="flex flex-col w-64 bg-blue-900 min-h-screen text-white">
            <div className="flex items-center justify-center h-20 border-b border-blue-800">
                <h1 className="text-2xl font-bold">Jyoti Thakur</h1>
            </div>

            {/* Profile Switcher (Only for Client) */}
            {role === 'client' && (
                <div className="px-4 py-4 border-b border-blue-800 relative">
                    <button
                        onClick={() => setIsProfileMenuOpen(!isProfileMenuOpen)}
                        className="w-full flex items-center justify-between px-3 py-2 bg-blue-800 rounded-md hover:bg-blue-700 transition-colors"
                    >
                        <div className="flex items-center">
                            {profileType === 'individual' ? <User className="h-4 w-4 mr-2" /> : <Building2 className="h-4 w-4 mr-2" />}
                            <span className="text-sm font-medium capitalize">{profileType} View</span>
                        </div>
                        <ChevronDown className="h-4 w-4" />
                    </button>

                    {isProfileMenuOpen && (
                        <div className="absolute top-full left-4 right-4 mt-1 bg-white rounded-md shadow-lg py-1 z-20 text-gray-800 text-sm">
                            <button
                                onClick={() => toggleProfile('individual')}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            >
                                <User className="h-4 w-4 mr-2 text-gray-500" /> Individual
                            </button>
                            <button
                                onClick={() => toggleProfile('firm')}
                                className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center"
                            >
                                <Building2 className="h-4 w-4 mr-2 text-gray-500" /> Firm / LLP
                            </button>
                        </div>
                    )}
                </div>
            )}

            <div className="flex-grow py-6">
                <nav className="space-y-1 px-4">
                    {links.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.name}
                                href={link.href}
                                className={`flex items-center px-4 py-3 text-sm font-medium rounded-md transition-colors ${isActive
                                    ? 'bg-blue-800 text-white'
                                    : 'text-blue-100 hover:bg-blue-800 hover:text-white'
                                    }`}
                            >
                                <link.icon className="mr-3 h-5 w-5" aria-hidden="true" />
                                {link.name}
                            </Link>
                        );
                    })}
                </nav>
            </div>
            <div className="p-4 border-t border-blue-800">
                <Link
                    href="/login"
                    className="flex items-center px-4 py-3 text-sm font-medium text-blue-100 rounded-md hover:bg-blue-800 hover:text-white transition-colors"
                >
                    <LogOut className="mr-3 h-5 w-5" />
                    Logout
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;
