import { UploadCloud, File, X } from 'lucide-react';

export default function AdminUploads() {
    return (
        <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-6">Document Upload</h1>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Upload Form */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Upload New Document</h2>
                    <form className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Select Client</label>
                            <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border">
                                <option>TechStart Solutions</option>
                                <option>Global Exports Ltd</option>
                                <option>Sunrise Cafe</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Document Type</label>
                            <select className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border">
                                <option>GST Return</option>
                                <option>Income Tax Return</option>
                                <option>Balance Sheet</option>
                                <option>Audit Report</option>
                                <option>Other</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">File Upload</label>
                            <div className="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md hover:border-blue-500 transition-colors cursor-pointer bg-gray-50">
                                <div className="space-y-1 text-center">
                                    <UploadCloud className="mx-auto h-12 w-12 text-gray-400" />
                                    <div className="flex text-sm text-gray-600">
                                        <label className="relative cursor-pointer bg-white rounded-md font-medium text-blue-600 hover:text-blue-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-blue-500">
                                            <span>Upload a file</span>
                                            <input type="file" className="sr-only" />
                                        </label>
                                        <p className="pl-1">or drag and drop</p>
                                    </div>
                                    <p className="text-xs text-gray-500">PDF, PNG, JPG up to 10MB</p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Remarks (Optional)</label>
                            <textarea rows={3} className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2 border"></textarea>
                        </div>
                        <button type="button" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
                            Upload Document
                        </button>
                    </form>
                </div>

                {/* Recent Uploads */}
                <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
                    <h2 className="text-lg font-medium text-gray-900 mb-4">Recent Uploads</h2>
                    <ul className="divide-y divide-gray-200">
                        {[1, 2, 3, 4].map((i) => (
                            <li key={i} className="py-3 flex justify-between items-center group">
                                <div className="flex items-center">
                                    <File className="h-5 w-5 text-gray-400" />
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">GSTR-1_March.pdf</p>
                                        <p className="text-xs text-gray-500">TechStart Solutions • 2 mins ago</p>
                                    </div>
                                </div>
                                <button className="text-gray-400 hover:text-red-500 opacity-0 group-hover:opacity-100 transition-opacity">
                                    <X className="h-4 w-4" />
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
