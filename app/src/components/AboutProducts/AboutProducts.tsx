import React from 'react';
import Image from 'next/image';

const ProductItem = ({ name, description, image, align = 'left' }: { name: string; description: string; image: string; align?: 'left' | 'right' }) => (
    <div className={`flex flex-col md:flex-row items-center gap-8 py-12 ${align === 'right' ? 'md:flex-row-reverse' : ''}`}>
        <div className="flex-1 space-y-4">
            <h3 className="text-3xl font-bold text-primary-900">{name}</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
                {description}
            </p>
        </div>
        <div className="flex-1 w-full">
            <div className="relative h-72 md:h-80 w-full rounded-2xl overflow-hidden shadow-xl border-4 border-white">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary-900/30 to-transparent"></div>
            </div>
        </div>
    </div>
);

const AboutProducts = () => {
    return (
        <section className="bg-primary-50 py-16 px-4">
            <div className="max-w-7xl mx-auto">
                {/* Intro */}
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <div className="inline-block px-4 py-2 bg-primary-100 rounded-full text-primary-800 font-semibold text-sm mb-4">
                        Our Offerings
                    </div>
                    <h2 className="text-4xl md:text-5xl font-black text-primary-900 mb-6">
                        Our Products
                    </h2>
                    <p className="text-xl text-gray-700 leading-relaxed">
                        At Sambhav Export, each product we offer is backed by experience, tradition, and careful sourcing. From our long-standing expertise in onions to our expanding range of fresh produce, every crop reflects our journey and commitment to quality.
                    </p>
                </div>

                {/* Product Items */}
                <div className="space-y-4">
                    <ProductItem
                        name="Onions"
                        description="Onions are at the heart of our story. For over 50 years and three generations, our family has been cultivating and trading onions across domestic markets. This deep-rooted experience allows us to deliver onions known for their quality, shelf life, and consistency, now prepared for global markets."
                        image="https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=80"
                    />

                    <ProductItem
                        name="Grapes"
                        description="Sourced from fertile regions known for grape cultivation, our grapes are selected for their freshness, sweetness, and export-grade quality. As we expand globally, grapes represent our step toward offering premium fruits that meet international standards."
                        image="https://images.unsplash.com/photo-1596363805874-4b470bfb04d1?q=80&w=2070&auto=format&fit=crop"
                        align="right"
                    />

                    <ProductItem
                        name="Green Chillies"
                        description="Our green chillies are valued for their vibrant color, strong aroma, and natural heat. Carefully grown and handled, they reflect our commitment to delivering produce that retains its freshness and flavor throughout the supply chain."
                        image="https://images.unsplash.com/photo-1567157567761-9f93ba4f4044?q=80&w=2070&auto=format&fit=crop"
                    />

                    <ProductItem
                        name="Capsicum"
                        description="Capsicum is part of our growing export portfolio, chosen for its crisp texture, uniform size, and rich color. With careful sourcing and quality control, we ensure capsicum that meets the expectations of global buyers."
                        image="https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1974&auto=format&fit=crop"
                        align="right"
                    />
                </div>
            </div>
        </section>
    );
};

export default AboutProducts;
