import { FileText, Download, Eye } from 'lucide-react';

const documents = [
    { id: 1, name: "ITR-V AY 2024-25.pdf", type: "Tax Return", date: "2024-07-31", size: "1.2 MB" },
    { id: 2, name: "GSTR-1 Mar 2024.pdf", type: "GST Return", date: "2024-04-10", size: "850 KB" },
    { id: 3, name: "GSTR-3B Mar 2024.pdf", type: "GST Return", date: "2024-04-20", size: "620 KB" },
    { id: 4, name: "Balance Sheet 2023-24.pdf", type: "Financials", date: "2024-09-30", size: "2.4 MB" },
    { id: 5, name: "Profit & Loss 2023-24.pdf", type: "Financials", date: "2024-09-30", size: "1.8 MB" },
];

export default function ClientDocuments() {
    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-gray-900">My Documents</h1>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-blue-700 transition-colors">
                    Upload Document
                </button>
            </div>

            <div className="bg-white shadow-sm rounded-lg border border-gray-200 overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Document Name
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Type
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Date
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Size
                            </th>
                            <th scope="col" className="relative px-6 py-3">
                                <span className="sr-only">Actions</span>
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {documents.map((doc) => (
                            <tr key={doc.id} className="hover:bg-gray-50">
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        <FileText className="flex-shrink-0 h-5 w-5 text-gray-400" />
                                        <span className="ml-4 text-sm font-medium text-gray-900">{doc.name}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-blue-100 text-blue-800">
                                        {doc.type}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {doc.date}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {doc.size}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                    <div className="flex justify-end space-x-3">
                                        <button className="text-blue-600 hover:text-blue-900" title="View">
                                            <Eye className="h-4 w-4" />
                                        </button>
                                        <button className="text-gray-600 hover:text-gray-900" title="Download">
                                            <Download className="h-4 w-4" />
                                        </button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
