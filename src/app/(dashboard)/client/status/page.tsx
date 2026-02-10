import { CheckCircle, Clock, AlertCircle } from 'lucide-react';

const statuses = [
    {
        id: 1,
        service: "GST Filing (April 2024)",
        status: "In Progress",
        date: "Started 2 days ago",
        icon: Clock,
        color: "text-amber-500",
        bg: "bg-amber-50"
    },
    {
        id: 2,
        service: "Income Tax Return (AY 2024-25)",
        status: "Information Requested",
        date: "Waiting for bank statements",
        icon: AlertCircle,
        color: "text-red-500",
        bg: "bg-red-50"
    },
    {
        id: 3,
        service: "TDS Return (Q4)",
        status: "Completed",
        date: "Filed on May 15, 2024",
        icon: CheckCircle,
        color: "text-green-500",
        bg: "bg-green-50"
    },
];

export default function ClientStatus() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Work Status</h1>

            <div className="space-y-4">
                {statuses.map((item) => (
                    <div key={item.id} className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 flex items-center justify-between">
                        <div className="flex items-center">
                            <div className={`p-3 rounded-full ${item.bg} mr-4`}>
                                <item.icon className={`h-6 w-6 ${item.color}`} />
                            </div>
                            <div>
                                <h3 className="text-lg font-medium text-gray-900">{item.service}</h3>
                                <p className={`text-sm font-medium ${item.color}`}>{item.status}</p>
                            </div>
                        </div>
                        <div className="text-sm text-gray-500">
                            {item.date}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
