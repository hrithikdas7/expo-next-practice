import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { products } from "../../data/products";

export default function ProductsCategory() {
    return (
        <section className="py-12 pb-20 px-6 bg-gradient-to-b from-white to-primary-50">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-primary-900 mb-4 font-serif">
                        Our Products Category
                    </h2>
                    <div className="h-1 w-20 bg-primary-400 mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((category, index) => (
                        <div
                            key={index}
                            className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-primary-100"
                        >
                            {/* Image Container with Overlay */}
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors z-10" />
                                <Image
                                    src={category.image}
                                    alt={category.name}
                                    fill
                                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6 text-center">
                                <h3 className="text-xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                                    {category.name}
                                </h3>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                                    {category.description}
                                </p>
                                <div className="flex justify-center">
                                    <span className="inline-flex items-center text-xs font-semibold text-primary-600 uppercase tracking-wider group-hover:text-primary-800 transition-colors">
                                        Explore <ArrowRight className="ml-1 w-3 h-3 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                </div>
                            </div>

                            {/* Bottom colored bar */}
                            <div className="h-1.5 w-full bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                        </div>
                    ))}
                </div>

                {/* Helper chat / Extra Action (as per reference image sometimes) */}
                <div className="fixed bottom-8 right-8 z-40 hidden md:block">
                    <div className="bg-white rounded-full p-4 shadow-xl text-primary-600 hover:text-primary-800 transition-colors cursor-pointer border border-primary-100">
                        <span className="sr-only">Help</span>
                        {/* Using a placeholder SVG or just a chat icon logic if needed later */}
                    </div>
                </div>
            </div>
        </section>
    );
}
