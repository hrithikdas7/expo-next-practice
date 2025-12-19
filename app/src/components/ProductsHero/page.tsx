import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function ProductsHero() {
    return (
        <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
                style={{
                    backgroundImage: "url('https://images.unsplash.com/photo-1494412574643-35d324698420?q=80&w=2064&auto=format&fit=crop')" // Shipping/Port image
                }}
            >
                <div className="absolute inset-0 bg-black/60"></div>
            </div>

            <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Our Products
                </h1>
                <div className="h-1 w-24 bg-primary-500 mx-auto mb-8 rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
                    Your trusted global partner for <span className="text-primary-400 font-semibold">Onions, Spices, Pulses & Seeds</span> — delivering quality and freshness worldwide.
                </p>

                <Link
                    href="/contact-us"
                    className="inline-flex items-center gap-2 px-8 py-4 bg-primary-600 hover:bg-primary-700 text-white text-lg font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-primary-900/30"
                >
                    Get Enquiry <ArrowRight size={20} />
                </Link>
            </div>
        </section>
    );
}
