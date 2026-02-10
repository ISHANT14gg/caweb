'use client';

import Sidebar from '@/components/layout/Sidebar';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const isClient = pathname?.startsWith('/client');
    const role = isClient ? 'client' : 'admin';

    return (
        <div className="flex min-h-screen bg-gray-100">
            <div className="hidden md:flex md:w-64 md:flex-col">
                <Sidebar role={role} />
            </div>
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Mobile Header could go here */}
                <main className="flex-1 overflow-y-auto p-4 md:p-8">
                    {children}
                </main>
            </div>
        </div>
    );
}
