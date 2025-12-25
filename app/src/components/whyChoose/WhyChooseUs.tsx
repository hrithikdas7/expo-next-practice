
"use client"
import { useState } from "react";

type Item = {
    title: string;
    description?: string;
};

const items: Item[] = [
    {
        title: "Uncompromising Quality Standards",
        description:
            "At Sambhav Export, quality is our promise. From sourcing to final packaging, every product is handled with care to ensure purity, freshness, and export-grade standards.",
    },
    { title: "Authentic and Natural Products" },
    { title: "Reliable Global Distribution" },
    { title: "Customer-Centric Approach" },
    { title: "Ethical and Sustainable Practices" },
    { title: "Expertise & Commitment" },
    { title: "Transparent Business Operations" },
    { title: "Continuous Improvement" },
];

export default function WhyChooseUs() {
    const [openIndex, setOpenIndex] = useState<number>(0);

    return (
        <section className="relative w-full bg-primary-50 py-12 px-4 overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-100/40 rounded-full blur-3xl -z-10 translate-x-1/3 -translate-y-1/3"></div>
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl -z-10 -translate-x-1/3 translate-y-1/3"></div>

            <div className="max-w-7xl mx-auto">
                {/* Header */}
                <div className="mb-12 text-center lg:text-left">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary-100 border border-primary-200 mb-4">
                        <span className="text-xs font-bold text-primary-800 tracking-wider uppercase">Why Choose Us</span>
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary-900 mb-2 tracking-tight">
                        Why Choose
                    </h2>
                    <h3 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">
                        Sambhav Export?
                    </h3>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 rounded-full mx-auto lg:mx-0" />
                </div>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
                    {/* Left – Accordion */}
                    <div className="space-y-4">
                        {items.map((item, index) => {
                            const isOpen = openIndex === index;

                            return (
                                <div
                                    key={index}
                                    className={`group rounded-xl border transition-all duration-300 overflow-hidden ${isOpen
                                        ? "bg-white border-primary-200 shadow-lg shadow-primary-900/5"
                                        : "bg-white/60 border-transparent hover:bg-white hover:border-primary-100"
                                        }`}
                                >
                                    <button
                                        onClick={() => setOpenIndex(isOpen ? -1 : index)}
                                        className="w-full flex items-center justify-between p-5 text-left"
                                    >
                                        <span className={`font-bold text-lg transition-colors duration-300 ${isOpen ? "text-primary-800" : "text-gray-700 group-hover:text-primary-700"
                                            }`}>
                                            {item.title}
                                        </span>
                                        <div className={`flex items-center justify-center w-8 h-8 rounded-full transition-all duration-300 ${isOpen ? "bg-primary-100 text-primary-600 rotate-90" : "bg-gray-100 text-gray-500 group-hover:bg-primary-50 group-hover:text-primary-500"
                                            }`}>
                                            <svg width="10" height="16" viewBox="0 0 10 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 fill-current">
                                                <path d="M1.5 15L8.5 8L1.5 1" />
                                                <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M1.5 15L8.5 8L1.5 1" />
                                            </svg>
                                        </div>
                                    </button>

                                    <div
                                        className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-48 opacity-100" : "max-h-0 opacity-0"
                                            }`}
                                    >
                                        <div className="p-5 pt-0 text-gray-600 leading-relaxed border-t border-dashed border-primary-100/50">
                                            {item.description || "We are dedicated to providing the best service in the industry with a focus on quality, reliability, and customer satisfaction."}
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>

                    {/* Right – Image */}
                    <div className="relative lg:sticky lg:top-8">
                        <div className="absolute inset-0 bg-primary-600 rounded-3xl rotate-3 opacity-10 blur-lg transform scale-95"></div>
                        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white aspect-[4/5] group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent z-10 opactiy-60"></div>
                            <img
                                src="https://images.unsplash.com/vector-1761644984492-4fd9e56858d2?q=80&w=1212&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Why Choose Sambhav Export"
                                className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105"
                            />

                            {/* Floating Badge */}
                            <div className="absolute bottom-8 left-8 right-8 z-20">
                                <div className="bg-white/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl border border-primary-100">
                                    <div className="flex items-center gap-4">
                                        <div className="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center text-2xl">
                                            🌟
                                        </div>
                                        <div>
                                            <p className="font-bold text-primary-900 text-lg">Excellence Guaranteed</p>
                                            <p className="text-primary-700 text-sm">Premium Quality Spices</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Decorative Dots */}
                        <div className="absolute -bottom-6 -right-6 w-24 h-24 text-primary-200 z-0">
                            <svg width="100%" height="100%" viewBox="0 0 100 100" fill="currentColor">
                                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                                    <circle cx="2" cy="2" r="2" />
                                </pattern>
                                <rect width="100" height="100" fill="url(#dots)" />
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
