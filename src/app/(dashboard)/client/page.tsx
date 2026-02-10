'use client';

import { FileText, Clock, AlertCircle, CheckCircle, IndianRupee, TrendingUp } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function ClientDashboard() {
    const [profile, setProfile] = useState<'individual' | 'firm'>('individual');

    // Listen for storage changes to update profile (Simulating context)
    useEffect(() => {
        const checkProfile = () => {
            const stored = window.localStorage.getItem('demoProfileType') as 'individual' | 'firm';
            if (stored) setProfile(stored);
        };

        checkProfile();
        window.addEventListener('storage', checkProfile);
        // Interval check for demo purposes as storage event only fires on other tabs
        const interval = setInterval(checkProfile, 1000);

        return () => {
            window.removeEventListener('storage', checkProfile);
            clearInterval(interval);
        }
    }, []);

    const data = {
        individual: {
            pendingDocs: 2,
            inProgress: "ITR Filing",
            completed: "Tax Audit",
            fees: "₹ 15,000",
            taxes: "₹ 2,500"
        },
        firm: {
            pendingDocs: 5,
            inProgress: "GST Audit",
            completed: "Company Incorp",
            fees: "₹ 45,000",
            taxes: "₹ 1,20,000"
        }
    };

    const currentData = data[profile];

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">
                    Welcome back, {profile === 'individual' ? 'Rahul Verma' : 'TechStart Solutions'}
                </h1>
                <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium capitalize">
                    {profile} Profile
                </span>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <FileText className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Pending Docs</p>
                            <p className="text-xl font-bold text-gray-900">{currentData.pendingDocs}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-amber-100 rounded-full">
                            <Clock className="h-6 w-6 text-amber-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">In Progress</p>
                            <p className="text-xl font-bold text-gray-900 truncate" title={currentData.inProgress}>{currentData.inProgress}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-full">
                            <CheckCircle className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Completed</p>
                            <p className="text-xl font-bold text-gray-900 truncate" title={currentData.completed}>{currentData.completed}</p>
                        </div>
                    </div>
                </div>

                {/* New Widgets */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-red-100 rounded-full">
                            <IndianRupee className="h-6 w-6 text-red-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Payable Fees</p>
                            <p className="text-xl font-bold text-gray-900">{currentData.fees}</p>
                        </div>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-purple-100 rounded-full">
                            <TrendingUp className="h-6 w-6 text-purple-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Tax Liability</p>
                            <p className="text-xl font-bold text-gray-900">{currentData.taxes}</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg shadow-sm border border-gray-200">
                <div className="px-6 py-4 border-b border-gray-200">
                    <h2 className="text-lg font-medium text-gray-900">Recent Activity ({profile})</h2>
                </div>
                <ul className="divide-y divide-gray-200">
                    <li className="p-6 flex items-start">
                        <div className="flex-shrink-0">
                            <AlertCircle className="h-5 w-5 text-amber-500" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">Document Request: Bank Statement</p>
                            <p className="text-sm text-gray-500">Please upload your bank statement for March 2025.</p>
                            <p className="text-xs text-gray-400 mt-1">2 hours ago</p>
                        </div>
                        <div className="ml-auto">
                            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Upload</button>
                        </div>
                    </li>
                    <li className="p-6 flex items-start">
                        <div className="flex-shrink-0">
                            <CheckCircle className="h-5 w-5 text-green-500" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">Filing Completed</p>
                            <p className="text-sm text-gray-500">Your {profile === 'individual' ? 'ITR' : 'GSTR-1'} has been successfully filed.</p>
                            <p className="text-xs text-gray-400 mt-1">Yesterday</p>
                        </div>
                        <div className="ml-auto">
                            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">View</button>
                        </div>
                    </li>
                    <li className="p-6 flex items-start">
                        <div className="flex-shrink-0">
                            <FileText className="h-5 w-5 text-blue-500" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-900">New Document: Tax Invoice</p>
                            <p className="text-sm text-gray-500">Invoice #INV-2025-001 has been generated.</p>
                            <p className="text-xs text-gray-400 mt-1">3 days ago</p>
                        </div>
                        <div className="ml-auto">
                            <button className="text-blue-600 text-sm font-medium hover:text-blue-800">Download</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    );
}
