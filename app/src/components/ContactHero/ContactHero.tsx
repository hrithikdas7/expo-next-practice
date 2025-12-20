import Link from "next/link";
import { ArrowDown } from "lucide-react";

export default function ContactHero() {
    return (
        <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1423666639041-f14d70fa4c5d?q=80&w=2070&auto=format&fit=crop')" // Professional/Contact theme
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 tracking-tight">
                    Get in Touch
                </h1>
                <div className="h-1 w-24 bg-primary-500 mx-auto mb-6 rounded-full"></div>
                <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto font-light leading-relaxed">
                    Have a question or want to discuss a partnership? We'd love to hear from you.
                </p>
            </div>
        </section>
    );
}
