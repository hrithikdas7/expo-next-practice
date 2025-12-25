import React from 'react';
import Image from 'next/image';
import { products } from '../../data/products';

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
                    {products.map((product, index) => (
                        <ProductItem
                            key={index}
                            name={product.name}
                            description={product.description}
                            image={product.image}
                            align={index % 2 === 1 ? 'right' : 'left'}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AboutProducts;
