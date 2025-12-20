import React from "react";
import { Phone, ArrowRight } from "lucide-react";

const ContactCTA: React.FC = () => {
    return (
        <section className="w-full bg-white py-12 border-t border-gray-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Left */}
                <div className="flex flex-col sm:flex-row gap-8 items-center sm:items-start text-center sm:text-left">
                    <div className="relative group">
                        <div className="absolute inset-0 bg-primary-600 rounded-2xl rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-300"></div>
                        <img
                            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                            alt="Support Team"
                            className="relative w-40 h-40 rounded-2xl object-cover shadow-lg border-4 border-white"
                        />
                    </div>

                    <div>
                        <h3 className="text-2xl font-black text-gray-900">
                            Let&apos;s Talk Now.
                        </h3>
                        <p className="mt-2 text-gray-600 font-medium">
                            Need immediate assistance?
                        </p>

                        <div className="mt-4 inline-flex items-center gap-3 text-primary-700 bg-primary-50 px-5 py-3 rounded-xl border border-primary-100 shadow-sm hover:shadow-md transition-shadow">
                            <div className="p-2 bg-white rounded-full text-primary-600 relative">
                                <Phone size={18} fill="currentColor" className="opacity-20" />
                                <Phone size={18} className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
                            </div>
                            <span className="font-bold text-lg tracking-tight">+91-9960492837</span>
                        </div>
                    </div>
                </div>

                {/* Right */}
                <div className="lg:border-l lg:pl-12 border-gray-100">
                    <p className="text-gray-600 leading-relaxed text-lg">
                        Ready to expand globally? Contact us for <span className="text-gray-900 font-semibold">premium products</span>,
                        reliable service, and seamless trade solutions to grow together!
                    </p>

                    <button className="mt-8 group flex items-center justify-center gap-2 bg-gradient-to-r from-primary-600 to-primary-500 text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-lg hover:shadow-primary-900/20 hover:-translate-y-0.5 transition-all duration-300">
                        GET IN TOUCH
                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </button>
                </div>
            </div>
        </section>
    );
};

export default ContactCTA;
