import React from "react";
import { Award, ShieldCheck, Globe, FileCheck, BadgeCheck } from "lucide-react";

const certifications = [
    {
        name: "Ministry of Commerce",
        description: "Govt. Recognized",
        icon: Award
    },
    {
        name: "MSME Certified",
        description: "Small & Medium Enterprise",
        icon: ShieldCheck
    },
    {
        name: "GST Registered",
        description: "Tax Compliant",
        icon: FileCheck
    },
    {
        name: "DGFT Member",
        description: "Foreign Trade",
        icon: Globe
    },
    {
        name: "APEDA Certified",
        description: "Agricultural Export",
        icon: BadgeCheck
    },
];

const Certifications: React.FC = () => {
    return (
        <section className="w-full bg-primary-50 py-20 border-t border-primary-100">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <span className="inline-block py-1 px-3 rounded-full bg-white border border-primary-100 text-primary-700 text-xs font-bold tracking-wider uppercase mb-3">
                        Trust & Verified
                    </span>
                    <h2 className="text-3xl font-black text-gray-900">
                        Our Certifications
                    </h2>
                    <div className="mx-auto mt-4 h-1 w-16 bg-primary-400 rounded-full" />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                    {certifications.map((item, index) => {
                        const Icon = item.icon;
                        return (
                            <div
                                key={index}
                                className="flex flex-col items-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:border-primary-200 hover:shadow-lg hover:shadow-primary-900/5 hover:-translate-y-1 transition-all duration-300"
                            >
                                <div className="w-14 h-14 bg-primary-50 rounded-full flex items-center justify-center mb-4 text-primary-600">
                                    <Icon size={28} strokeWidth={1.5} />
                                </div>
                                <h3 className="text-sm font-bold text-gray-900 text-center leading-tight mb-1">
                                    {item.name}
                                </h3>
                                <p className="text-xs text-gray-500 text-center">
                                    {item.description}
                                </p>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
