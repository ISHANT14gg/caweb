import { Users, FileText, Activity, Search, MoreHorizontal } from 'lucide-react';
import Link from 'next/link';

const clients = [
    { id: 1, name: "TechStart Solutions", contact: "John Doe", email: "john@techstart.com", status: "Active" },
    { id: 2, name: "Global Exports Ltd", contact: "Jane Smith", email: "jane@globalexports.com", status: "Active" },
    { id: 3, name: "Sunrise Cafe", contact: "Rahul Gupta", email: "rahul@sunrisecafe.com", status: "Pending" },
    { id: 4, name: "Creative Minds Agency", contact: "Sarah Lee", email: "sarah@creativeminds.com", status: "Active" },
    { id: 5, name: "BuildRight Construction", contact: "Mike Brown", email: "mike@buildright.com", status: "Overdue" },
];

export default function AdminDashboard() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Admin Dashboard</h1>

            {/* Stats Box */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-blue-100 rounded-full">
                            <Users className="h-6 w-6 text-blue-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Total Clients</p>
                            <p className="text-2xl font-bold text-gray-900">124</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-amber-100 rounded-full">
                            <Activity className="h-6 w-6 text-amber-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Pending Actions</p>
                            <p className="text-2xl font-bold text-gray-900">15</p>
                        </div>
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <div className="flex items-center">
                        <div className="p-3 bg-green-100 rounded-full">
                            <FileText className="h-6 w-6 text-green-600" />
                        </div>
                        <div className="ml-4">
                            <p className="text-sm font-medium text-gray-500">Documents Uploaded</p>
                            <p className="text-2xl font-bold text-gray-900">45 this week</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Client List */}
            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
                    <h2 className="text-lg font-medium text-gray-900">Client Directory</h2>
                    <div className="relative">
                        <input
                            type="text"
                            placeholder="Search clients..."
                            className="pl-10 pr-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-blue-500 focus:border-blue-500"
                        />
                        <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
                    </div>
                </div>
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Client Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Contact Person
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Status
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {clients.map((client) => (
                            <tr key={client.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <div className="h-10 w-10 flex-shrink-0 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 font-bold">
                                            {client.name.charAt(0)}
                                        </div>
                                        <div className="ml-4">
                                            <div className="text-sm font-medium text-gray-900">{client.name}</div>
                                            <div className="text-sm text-gray-500">{client.email}</div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="text-sm text-gray-900">{client.contact}</div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${client.status === 'Active' ? 'bg-green-100 text-green-800' :
                                            client.status === 'Pending' ? 'bg-amber-100 text-amber-800' :
                                                'bg-red-100 text-red-800'
                                        }`}>
                                        {client.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <Link href={`/admin/clients`} className="text-blue-600 hover:text-blue-900">
                                        Manage
                                    </Link>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="bg-gray-50 px-6 py-3 border-t border-gray-200 flex items-center justify-between">
                    <span className="text-sm text-gray-500">Showing 1 to 5 of 124 results</span>
                    <div className="flex space-x-2">
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700 disabled:opacity-50">Previous</button>
                        <button className="px-3 py-1 border border-gray-300 rounded-md text-sm bg-white text-gray-700">Next</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
