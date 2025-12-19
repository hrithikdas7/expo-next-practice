"use client";

import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";

export default function ContactContent() {
    return (
        <section className="py-20 px-6 bg-white relative -mt-20 z-20">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

                    {/* Left Column: Contact Information */}
                    <div className="bg-primary-900 p-10 md:p-14 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative circles */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-primary-800 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -mr-16 -mt-16"></div>
                        <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary-700 rounded-full mix-blend-multiply filter blur-3xl opacity-50 -ml-16 -mb-16"></div>

                        <div className="relative z-10">
                            <h3 className="text-2xl font-bold mb-2 text-primary-50">Contact Information</h3>
                            <p className="text-primary-200 mb-10">Fill up the form and our team will get back to you within 24 hours.</p>

                            <div className="space-y-8">
                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary-800 rounded-xl group-hover:bg-primary-700 transition-colors">
                                        <Phone className="w-6 h-6 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-300 font-medium mb-1">Phone</p>
                                        <p className="text-lg font-semibold">+91 9960492837</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary-800 rounded-xl group-hover:bg-primary-700 transition-colors">
                                        <Mail className="w-6 h-6 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-300 font-medium mb-1">Email</p>
                                        <p className="text-lg font-semibold">info@sambhavexporter.com</p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary-800 rounded-xl group-hover:bg-primary-700 transition-colors">
                                        <MapPin className="w-6 h-6 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-300 font-medium mb-1">Address</p>
                                        <p className="text-lg font-semibold leading-relaxed">
                                            Flat No. 4, Asawari Appt.,<br />
                                            Hirawadi Road, Panchavati,<br />
                                            Nashik - 422003, Maharashtra, India
                                        </p>
                                    </div>
                                </div>

                                <div className="flex items-start gap-4 group">
                                    <div className="p-3 bg-primary-800 rounded-xl group-hover:bg-primary-700 transition-colors">
                                        <Clock className="w-6 h-6 text-primary-300" />
                                    </div>
                                    <div>
                                        <p className="text-sm text-primary-300 font-medium mb-1">Opening Hours</p>
                                        <p className="text-lg font-semibold">Mon - Sat: 9am - 6pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Social Links could go here */}
                    </div>

                    {/* Right Column: Contact Form */}
                    <div className="p-10 md:p-14 bg-white">
                        <h3 className="text-2xl font-bold text-primary-900 mb-6">Send us a Message</h3>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="firstName" className="text-sm font-medium text-gray-700">First Name</label>
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="John"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="lastName" className="text-sm font-medium text-gray-700">Last Name</label>
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                                    <input
                                        type="email"
                                        id="email"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="john@example.com"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                                    <input
                                        type="tel"
                                        id="phone"
                                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400"
                                        placeholder="+91 98765 43210"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                                <select id="subject" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all text-gray-600">
                                    <option value="">Select a topic</option>
                                    <option value="inquiry">Product Inquiry</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="support">General Support</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    rows={4}
                                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-primary-500 focus:ring-2 focus:ring-primary-100 outline-none transition-all placeholder:text-gray-400 resize-none"
                                    placeholder="Write your message here..."
                                ></textarea>
                            </div>

                            <button
                                type="button"
                                className="w-full py-4 px-6 bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
                            >
                                Send Message <Send className="w-4 h-4" />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
