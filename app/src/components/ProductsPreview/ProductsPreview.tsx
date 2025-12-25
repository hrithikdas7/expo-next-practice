"use client";

import { useState, useRef } from "react";
import { Sparkles, Star, ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

export default function ProductsPreview() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const cardWidth = 340 + 24; // width + gap
      const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const cardWidth = 340 + 24;
      const index = Math.round(scrollContainerRef.current.scrollLeft / cardWidth);
      setActiveIndex(index);
    }
  };

  const products = [
    {
      name: 'Red Onions',
      category: 'Vegetables',
      description: 'Farm-fresh red onions known for quality and consistency.',
      img: 'https://images.unsplash.com/photo-1618512496248-a07fe83aa8cb?w=800&q=80',
      featured: true
    },
    {
      name: 'Fresh Grapes',
      category: 'Fruits',
      description: 'Sweet, export-grade grapes from fertile regions.',
      img: 'https://images.unsplash.com/photo-1631299106224-aae61c217164?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: true
    },
    {
      name: 'Green Chillies',
      category: 'Vegetables',
      description: 'Vibrant, spicy green chillies with strong aroma.',
      img: 'https://images.unsplash.com/photo-1524593410820-38510f580a77?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      featured: false
    },
    {
      name: 'Capsicum',
      category: 'Vegetables',
      description: 'Crisp, rich-colored capsicums of uniform size.',
      img: 'https://images.unsplash.com/photo-1563565375-f3fdfdbefa83?q=80&w=1974&auto=format&fit=crop',
      featured: false
    }
  ];

  return (
    <section className="relative py-12 px-4 bg-gradient-to-b from-white via-primary-50 to-primary-100 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-primary-300/20 rounded-full blur-3xl"></div>

      <div className="max-w-7xl mx-auto relative">
        {/* Header Section */}
        <div className="mb-10 text-center">
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

        {/* Products Grid with Modern Carousel Controls */}
        <div className="relative group/carousel">
          {/* Navigation Buttons (Visible on Hover) */}
          <button
            onClick={() => scroll('left')}
            className="hidden md:flex absolute left-0 top-1/2 -translate-y-1/2 -ml-5 z-20 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-primary-100 text-primary-800 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white disabled:opacity-0 disabled:cursor-not-allowed"
            disabled={activeIndex === 0}
            aria-label="Scroll left"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={() => scroll('right')}
            className="hidden md:flex absolute right-0 top-1/2 -translate-y-1/2 -mr-5 z-20 p-3 rounded-full bg-white/80 backdrop-blur-md shadow-lg border border-primary-100 text-primary-800 opacity-0 group-hover/carousel:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white disabled:opacity-0 disabled:cursor-not-allowed"
            disabled={activeIndex >= products.length - 2} // Disable when near end
            aria-label="Scroll right"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div
            ref={scrollContainerRef}
            onScroll={handleScroll}
            className="flex gap-6 overflow-x-auto pb-12 pt-4 snap-x snap-mandatory scrollbar-hide px-4 scroll-smooth"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-none w-[340px] snap-center group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                <div className={`relative h-[440px] rounded-3xl overflow-hidden transition-all duration-500 hover:-translate-y-2 ${activeIndex === index ? 'scale-100 opacity-100' : 'scale-95 opacity-90'}`}>
                  {/* Glow Effect */}
                  <div className="absolute -inset-1 bg-gradient-to-br from-primary-300 via-primary-500 to-primary-600 rounded-3xl opacity-0 group-hover:opacity-40 blur-lg transition-opacity duration-500"></div>

                  <div className="relative h-full bg-white rounded-3xl shadow-lg group-hover:shadow-2xl overflow-hidden border border-primary-100 group-hover:border-primary-300/50 transition-all duration-500 flex flex-col">
                    {/* Image Container */}
                    <div className="relative h-56 overflow-hidden shrink-0">
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
                        <button
                          className={`
                            w-full py-3 px-5 rounded-xl font-bold text-sm tracking-wide
                            transition-all duration-300 transform shadow-sm flex items-center justify-center gap-2
                            ${hoveredIndex === index
                              ? 'bg-gradient-to-r from-primary-600 to-primary-700 text-white shadow-lg shadow-primary-900/20 scale-[1.03]'
                              : 'bg-primary-50 text-primary-800 border border-primary-200 hover:bg-primary-100'
                            }
                          `}
                        >
                          {hoveredIndex === index ? (
                            <>Explore Details <ArrowRight className="w-4 h-4" /></>
                          ) : 'View Product'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced Smart Indicators */}
          <div className="flex justify-center gap-3 mt-8">
            {products.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  if (scrollContainerRef.current) {
                    const cardWidth = 340 + 24; // width + gap
                    scrollContainerRef.current.scrollTo({
                      left: index * cardWidth,
                      behavior: 'smooth'
                    });
                  }
                }}
                className={`
                  h-1.5 rounded-full transition-all duration-500 ease-out
                  ${activeIndex === index
                    ? 'bg-primary-600 w-12'
                    : 'bg-primary-200 w-2 hover:bg-primary-300 hover:w-4'
                  }
                `}
                aria-label={`Go to product ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center">
          <button className="group px-8 py-3.5 rounded-full font-bold text-base bg-gradient-to-r from-primary-700 to-primary-800 text-white shadow-xl hover:shadow-2xl hover:shadow-primary-900/30 transform hover:scale-105 transition-all duration-300 ring-4 ring-primary-100 overflow-hidden relative">
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
