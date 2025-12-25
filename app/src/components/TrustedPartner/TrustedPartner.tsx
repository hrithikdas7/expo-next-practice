import React from 'react';
import { ArrowRight } from 'lucide-react';

const TrustedPartner = () => {
    return (
        <section className="py-12 bg-white overflow-hidden">
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-16 items-center">

                    {/* Left - Image with decorative elements */}
                    <div className="relative order-2 lg:order-1">
                        <div className="absolute -inset-4 bg-gradient-to-tr from-primary-100 to-transparent rounded-[2rem] -z-10 rotate-3"></div>
                        <div className="absolute -inset-4 bg-primary-50 rounded-[2rem] -z-20 -rotate-3"></div>
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                            <img
                                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop"
                                alt="Professional Business Partner"
                                className="w-full h-[600px] object-cover hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-primary-900/80 to-transparent"></div>
                        </div>
                    </div>

                    {/* Right - Content */}
                    <div className="order-1 lg:order-2 space-y-8">
                        <div>
                            <span className="inline-block py-1 px-3 rounded-full bg-primary-50 border border-primary-100 text-primary-700 text-xs font-bold tracking-wider uppercase mb-4">
                                Reliable & Professional
                            </span>
                            <h2 className="text-4xl lg:text-5xl font-black text-gray-900 leading-tight">
                                Sambhav Export <br />
                                <span className="text-primary-600">Your Trusted Partner</span> in Global Exports
                            </h2>
                            <div className="w-24 h-1.5 bg-gradient-to-r from-primary-500 to-primary-300 rounded-full mt-6"></div>
                        </div>

                        <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                            <p>
                                <span className="font-bold text-gray-900">Sambhav Export</span>, a leading exporter from India, is dedicated to delivering premium <span className="text-primary-700 font-semibold">Onions, Spices, Moringa Powder, Pulses, Cumin Seeds, Turmeric, Black Pepper, and Sesame Seeds</span> to clients worldwide. We work closely with trusted farmers and suppliers to ensure every product meets the highest standards of <span className="text-primary-700 font-semibold">freshness, purity, and authentic Indian quality</span>.
                            </p>
                            <p>
                                With a focus on <span className="font-bold text-gray-900">ethical sourcing, sustainable practices, and modern processing</span>, we provide timely delivery, competitive pricing, and seamless logistics to clients across international markets. Our goal is to be more than just an exporter — we are a <span className="font-bold text-gray-900">reliable partner</span>, bringing the richness, flavor, and natural goodness of India to tables around the world.
                            </p>
                        </div>

                        <button className="group flex items-center gap-2 bg-primary-700 text-white px-8 py-4 rounded-xl font-bold hover:bg-primary-800 transition-colors shadow-lg shadow-primary-900/20 hover:shadow-xl hover:shadow-primary-900/30 hover:-translate-y-1 duration-300">
                            Enquire Now
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default TrustedPartner;
