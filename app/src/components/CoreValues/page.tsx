import React from 'react';
import { Crown, HeartHandshake, ShieldCheck, Leaf, Lightbulb, Handshake } from 'lucide-react';

const values = [
    {
        icon: Crown,
        title: "Quality First",
        description: "We ensure every product — from premium spices to fresh produce — meets rigorous international quality standards."
    },
    {
        icon: HeartHandshake,
        title: "Customer Commitment",
        description: "Your satisfaction is our priority. We build lasting relationships through transparency, reliability, and excellent service."
    },
    {
        icon: ShieldCheck,
        title: "Integrity & Trust",
        description: "We maintain honest business practices, ensuring fair trade and ethical sourcing from our partner farmers."
    },
    {
        icon: Leaf,
        title: "Sustainability",
        description: "By promoting responsible sourcing and supporting farmers, we ensure ethical and sustainable trade practices."
    },
    {
        icon: Lightbulb,
        title: "Innovation",
        description: "We adopt modern techniques in sourcing, processing, packaging, and logistics to meet the evolving needs of international markets."
    },
    {
        icon: Handshake,
        title: "Partnership",
        description: "We value our strong network of farmers, suppliers, and clients, collaborating to achieve growth and excellence in global exports."
    }
];

const CoreValues = () => {
    return (
        <section className="py-16 bg-primary-50 relative overflow-hidden">
            {/* Decorative Background Pattern */}
            <div className="absolute inset-0 opacity-5" style={{ backgroundImage: 'radial-gradient(#C89A3D 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>

            <div className="max-w-7xl mx-auto px-4 relative">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-black text-gray-900 mb-4">
                        Core Values of <span className="text-primary-700">Sambhav Exporter</span>
                    </h2>
                    <div className="w-40 h-1 bg-gray-200 mx-auto rounded-full overflow-hidden">
                        <div className="w-1/2 h-full bg-primary-500 rounded-full mx-auto"></div>
                    </div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {values.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div key={index} className="bg-white rounded-2xl p-8 shadow-sm border border-primary-100 hover:shadow-xl hover:shadow-primary-900/10 hover:-translate-y-2 transition-all duration-300 group">
                                <div className="w-16 h-16 bg-primary-50 rounded-2xl flex items-center justify-center mb-6 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-colors duration-300 shadow-inner">
                                    <Icon size={32} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {item.description}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default CoreValues;
