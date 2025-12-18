"use client";

import { useState } from "react";
import { Sparkles, Star } from "lucide-react";

export default function ProductsPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const products = [
    {
      name: 'Assorted Spices',
      category: 'Spices',
      description: 'Premium blend of aromatic spices',
      img: 'https://images.unsplash.com/photo-1578428295193-be8ecc768ea5?q=80&w=735&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: true
    },
    {
      name: 'Fresh Turmeric',
      category: 'Spices',
      description: 'Organic, golden turmeric roots',
      img: 'https://plus.unsplash.com/premium_photo-1726862790171-0d6208559224?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: true
    },
    {
      name: 'Red Onions',
      category: 'Vegetables',
      description: 'Farm-fresh red onions',
      img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=80',
      featured: false
    },
    {
      name: 'Coriander Seeds',
      category: 'Seeds',
      description: 'Handpicked coriander seeds',
      img: 'https://images.unsplash.com/photo-1508748169069-82590c9f26e6?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    },
    {
      name: 'Black Pepper',
      category: 'Spices',
      description: 'Bold and aromatic flavor',
      img: 'https://images.unsplash.com/photo-1655662844262-7bb61527c0d8?q=80&w=627&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    },
    {
      name: 'Cumin Seeds',
      category: 'Seeds',
      description: 'Pure, earthy cumin',
      img: 'https://images.unsplash.com/photo-1676619357571-b4f086f81299?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    },
    {
      name: 'Sesame Seeds',
      category: 'Seeds',
      description: 'Premium quality sesame',
      img: 'https://plus.unsplash.com/premium_photo-1674654419404-667fcdd0fe13?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    },
    {
      name: 'Pulses',
      category: 'Grains',
      description: 'Nutritious mixed pulses',
      img: 'https://plus.unsplash.com/premium_photo-1664007711018-d7cb92e664b1?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    }
  ];

  return (
    <section className="relative py-24 px-4 bg-gradient-to-b from-white via-primary-50 to-primary-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-100 border border-primary-300 mb-6">
            <Sparkles className="w-4 h-4 text-primary-600" />
            <span className="text-sm font-semibold text-primary-800 tracking-wide">PREMIUM EXPORTS</span>
          </div>

          <h2 className="text-5xl md:text-6xl font-black text-primary-900 mb-4 tracking-tight">
            Our Premium Range of
            <span className="block text-primary-600 mt-2">Global Exports</span>
          </h2>

          <p className="text-xl text-gray-700 max-w-2xl mx-auto mb-6 font-medium">
            Discover our carefully curated selection of the finest spices, seeds, and agricultural products
          </p>

          <div className="flex items-center justify-center gap-3">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent to-primary-400 rounded-full"></div>
            <div className="h-1.5 w-32 bg-gradient-to-r from-primary-400 via-primary-600 to-primary-400 rounded-full"></div>
            <div className="h-1 w-20 bg-gradient-to-r from-primary-400 to-transparent rounded-full"></div>
          </div>
        </div>

        {/* Products Grid with Horizontal Scroll */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-none w-80 snap-start group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className="relative h-[440px] rounded-3xl overflow-hidden transition-all duration-500 hover:scale-[1.02] hover:-translate-y-1">
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>

                  <div className="relative h-full bg-white rounded-3xl shadow-lg group-hover:shadow-2xl overflow-hidden border border-primary-100 group-hover:border-primary-300/50 transition-all duration-500 flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-60 overflow-hidden shrink-0">
                      <img
                        src={product.img}
                        alt={product.name}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />

                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 to-transparent opacity-60"></div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4 z-10">
                        <span className="px-3 py-1.5 rounded-full text-xs font-bold bg-white/95 text-primary-900 backdrop-blur-md shadow-md border border-primary-100">
                          {product.category}
                        </span>
                      </div>

                      {/* Featured Badge */}
                      {product.featured && (
                        <div className="absolute top-4 right-4 z-10">
                          <div className="p-2 rounded-full bg-primary-500 shadow-md border border-white/20">
                            <Star className="w-4 h-4 text-white fill-white" />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Content Section */}
                    <div className="relative p-6 bg-white flex flex-col grow">
                      <h3 className="text-2xl font-bold text-primary-900 mb-2 group-hover:text-primary-700 transition-colors">
                        {product.name}
                      </h3>

                      <p className="text-sm text-gray-600 mb-6 line-clamp-2 font-medium leading-relaxed">
                        {product.description}
                      </p>

                      <div className="mt-auto">
                        {/* Interactive Button */}
                        <button
                          className={`
                            w-full py-3.5 px-6 rounded-xl font-bold text-sm tracking-wide
                            transition-all duration-300 transform shadow-sm
                            ${hoveredIndex === index
                              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-900/20 scale-[1.03]'
                              : 'bg-primary-50 text-primary-800 border border-primary-200 hover:bg-primary-100'
                            }
                          `}
                        >
                          {hoveredIndex === index ? 'Explore Details →' : 'View Product'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Scroll Indicators */}
          <div className="flex justify-center gap-2.5 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                className={`
                  h-2 rounded-full transition-all duration-300
                  ${index === 0
                    ? 'bg-gradient-to-r from-primary-600 to-primary-700 w-12 shadow-md'
                    : 'bg-primary-300 w-2 hover:bg-primary-400 hover:w-6'
                  }
                `}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <button className="group px-10 py-5 rounded-full font-bold text-lg bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-xl hover:shadow-2xl hover:shadow-primary-900/30 transform hover:scale-105 transition-all duration-300 ring-4 ring-primary-100 overflow-hidden relative">
            <span className="relative z-10 flex items-center gap-3">
              View All Products
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </span>
            {/* Shimmer effect */}
            <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12"></span>
          </button>
        </div>
      </div>
    </section>
  );
}
