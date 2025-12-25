import React from "react";
import {
    Tractor,
    ShoppingBasket,
    Headset,
    ThumbsUp,
    Send,
    User,
    Mail,
    PhoneCall,
    MessageSquare,
} from "lucide-react";

const pillars = [
    {
        icon: Tractor,
        title: "Direct Farmer Contact",
    },
    {
        icon: ShoppingBasket,
        title: "Fresh Products",
    },
    {
        icon: Headset,
        title: "After Sales Service",
    },
    {
        icon: ThumbsUp,
        title: "Customer Satisfaction",
    },
];

const OurPillarsAndContact: React.FC = () => {
    return (
        <section className="w-full bg-white py-16 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary-100/50 rounded-full blur-3xl -z-10 translate-x-1/2 -translate-y-1/2"></div>

            <div className="max-w-7xl mx-auto px-6">
                {/* ---------- OUR PILLARS ---------- */}
                <div className="mb-24">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="inline-block py-1 px-3 rounded-full bg-primary-100 text-primary-800 text-xs font-bold tracking-wider uppercase mb-4">
                            Core Values
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 tracking-tight mb-6">
                            Our Pillars <span className="text-primary-600">At Sambhav</span>
                        </h2>
                        <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto" />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                        {pillars.map((pillar, index) => {
                            const Icon = pillar.icon;
                            return (
                                <div
                                    key={index}
                                    className="group relative bg-white border border-gray-100 rounded-2xl p-8 shadow-lg shadow-gray-200/50 hover:shadow-xl hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                                >
                                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 to-primary-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>

                                    <div className="flex flex-col items-center text-center">
                                        <div className="w-16 h-16 rounded-full bg-primary-50 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-8 h-8 text-primary-600" />
                                        </div>
                                        <h3 className="text-2xl font-black text-primary-500 mb-2">
                                            100%
                                        </h3>
                                        <p className="text-gray-700 font-semibold text-lg group-hover:text-primary-800 transition-colors">
                                            {pillar.title}
                                        </p>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* ---------- CONTACT SECTION ---------- */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start bg-primary-50/50 rounded-3xl p-8 lg:p-12 border border-primary-100">
                    {/* Left Content */}
                    <div className="lg:pr-8">
                        <span className="text-primary-600 font-bold tracking-wide uppercase text-sm">
                            Get In Touch
                        </span>
                        <h3 className="text-4xl font-black text-gray-900 leading-tight mt-3 mb-6">
                            Let's Build a <br />
                            <span className="text-primary-700">Great Relationship</span>
                        </h3>

                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            Partner with <span className="font-bold text-gray-900">Sambhav Export</span> to experience the true essence of quality — premium Indian spices, seeds, and produce sourced with care and distributed globally.
                        </p>

                        <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100">
                            <p className="text-gray-700 font-medium italic">
                                "We are committed to building long-term partnerships based on trust, transparency, and consistent excellence in every shipment."
                            </p>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-xl shadow-primary-900/5 border border-primary-100">
                        <form className="space-y-5">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        First Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="John"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>

                                <div>
                                    <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                        Last Name
                                    </label>
                                    <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                        <input
                                            type="text"
                                            placeholder="Doe"
                                            className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all"
                                        />
                                    </div>
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="email"
                                        placeholder="john@example.com"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <PhoneCall className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
                                    <input
                                        type="tel"
                                        placeholder="+1 (555) 000-0000"
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all"
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="text-sm font-semibold text-gray-700 mb-2 block">
                                    Message
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-4 text-gray-400 w-4 h-4" />
                                    <textarea
                                        placeholder="How can we help you?"
                                        rows={4}
                                        className="w-full bg-gray-50 border border-gray-200 rounded-lg pl-10 pr-4 py-3 outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent focus:bg-white transition-all resize-none"
                                    />
                                </div>
                            </div>

                            <button
                                type="submit"
                                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold py-4 rounded-lg shadow-lg shadow-primary-900/20 hover:shadow-xl hover:shadow-primary-900/30 hover:-translate-y-0.5 transition-all duration-300"
                            >
                                <Send className="w-5 h-5" />
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default OurPillarsAndContact;

