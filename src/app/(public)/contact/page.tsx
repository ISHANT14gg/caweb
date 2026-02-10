import { Mail, Phone, MapPin, Clock } from 'lucide-react';

export default function Contact() {
    return (
        <div className="bg-white min-h-screen">
            {/* Hero Section */}
            <div className="bg-blue-900 text-white py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                        Get in touch with us for expert financial advice and support.
                    </p>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Contact Information */}
                    <div>
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Get In Touch</h2>
                        <div className="space-y-8">
                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <MapPin className="h-6 w-6 text-blue-600 mt-1" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Our Office</h3>
                                    <p className="text-gray-600 mt-1">
                                        123 Business Tower, Connaught Place,<br />
                                        New Delhi - 110001, India
                                    </p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Phone className="h-6 w-6 text-blue-600 mt-1" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Phone</h3>
                                    <p className="text-gray-600 mt-1">+91 98765 43210</p>
                                    <p className="text-gray-500 text-sm">(Mon-Fri, 10am - 6pm)</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Mail className="h-6 w-6 text-blue-600 mt-1" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Email</h3>
                                    <p className="text-gray-600 mt-1">info@jyotithakur.com</p>
                                    <p className="text-gray-600 mt-1">support@jyotithakur.com</p>
                                </div>
                            </div>

                            <div className="flex items-start">
                                <div className="flex-shrink-0">
                                    <Clock className="h-6 w-6 text-blue-600 mt-1" />
                                </div>
                                <div className="ml-4">
                                    <h3 className="text-lg font-medium text-gray-900">Working Hours</h3>
                                    <p className="text-gray-600 mt-1">Monday - Friday: 10:00 AM - 7:00 PM</p>
                                    <p className="text-gray-600 mt-1">Saturday: 10:00 AM - 2:00 PM</p>
                                    <p className="text-red-500 mt-1">Sunday: Closed</p>
                                </div>
                            </div>
                        </div>

                        {/* Map Placeholder */}
                        <div className="mt-10 h-64 bg-gray-200 rounded-lg overflow-hidden relative">
                            <div className="absolute inset-0 flex items-center justify-center text-gray-500">
                                <MapPin className="h-12 w-12 mb-2" />
                                <span className="block w-full text-center font-medium">Map Integration</span>
                            </div>
                            {/* In a real app, embed Google Maps iframe here */}
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send us a Message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">First name</label>
                                    <input type="text" id="first-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-900" />
                                </div>
                                <div>
                                    <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">Last name</label>
                                    <input type="text" id="last-name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-900" />
                                </div>
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-900" />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone number</label>
                                <input type="tel" id="phone" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-900" />
                            </div>

                            <div>
                                <label htmlFor="service" className="block text-sm font-medium text-gray-700">Service Interest</label>
                                <select id="service" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-900">
                                    <option>Taxation Services</option>
                                    <option>Audit & Assurance</option>
                                    <option>Company Registration</option>
                                    <option>Financial Advisory</option>
                                    <option>Other</option>
                                </select>
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                <textarea id="message" rows={4} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm p-2 border text-gray-900"></textarea>
                            </div>

                            <div>
                                <button type="submit" className="w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
