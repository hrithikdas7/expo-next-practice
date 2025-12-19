import React from 'react';
import { Users, Leaf, CheckCircle } from 'lucide-react';

const AboutUsGrid = () => {
    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8">

                    {/* Who We Are */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-700 group-hover:scale-110 transition-transform duration-300">
                            <Users size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                            Who We Are
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            At Sambhav Exporter, we are a trusted Indian exporter of premium Onions, Spices, Moringa Powder, Pulses, Cumin Seeds, Turmeric, Black Pepper, and Sesame Seeds, dedicated to delivering freshness, purity, and authentic quality in every shipment.
                        </p>
                    </div>

                    {/* What We Do */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-700 group-hover:scale-110 transition-transform duration-300">
                            <Leaf size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                            What We Do
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            We source, process, and export the finest agricultural products from India, following strict quality, hygiene, and international standards. Each product is carefully handled to ensure freshness, purity, and genuine Indian flavor reaches our customers worldwide.
                        </p>
                    </div>

                    {/* Why Choose Us */}
                    <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-xl shadow-gray-200/50 hover:shadow-2xl hover:shadow-primary-900/10 hover:-translate-y-2 transition-all duration-300 group">
                        <div className="w-14 h-14 bg-primary-100 rounded-xl flex items-center justify-center mb-6 text-primary-700 group-hover:scale-110 transition-transform duration-300">
                            <CheckCircle size={28} strokeWidth={2} />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors">
                            Why Choose Us
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-6">
                            With a focus on quality, sustainability, timely delivery, and customer satisfaction, Sambhav Exporter is your reliable partner for exporting authentic, high-quality Indian agro products to markets across the globe.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AboutUsGrid;
