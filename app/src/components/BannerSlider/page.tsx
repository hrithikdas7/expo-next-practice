"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState, useEffect } from "react";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const slides = [
    {
      title: "FRESHNESS. PURITY. QUALITY.",
      subtitle: "Delivering Fresh, Pure & Premium",
      description: "Onions, Spices, Pulses, and Seeds Worldwide.",
      image:
        "https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=1470",
    },
    {
      title: "EXCELLENCE IN EXPORT",
      subtitle: "Global Standards, Local Values",
      description: "Bringing India's Best to Your Doorstep.",
      image:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=1470",
    },
    {
      title: "TRUSTED WORLDWIDE",
      subtitle: "Quality You Can Count On",
      description: "Premium Agricultural Products Since Years.",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?q=80&w=1470",
    },
  ];

  /* ✅ PRELOAD IMAGES */
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.image;
    });
  }, []);

  const goToSlide = (index: number) => {
    if (index === currentSlide || isAnimating) return;
    setIsAnimating(true);
    setCurrentSlide(index);
    setTimeout(() => setIsAnimating(false), 400);
  };

  return (
    <div className="relative h-[650px] overflow-hidden group">
      {/* BACKGROUND */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-1000 ease-out will-change-transform"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
          transform: 'scale(1.05)'
        }}
      />

      {/* OVERLAYS */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/60 to-black/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* CONTENT */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-center w-full text-white space-y-6">
          <div
            className={`text-sm md:text-base font-bold tracking-[0.3em] text-primary-200 uppercase transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-3" : "opacity-100"
              }`}
          >
            {slides[currentSlide].title}
          </div>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-black transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-6" : "opacity-100"
              }`}
            style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
          >
            {slides[currentSlide].subtitle}
          </h1>

          <p
            className={`text-xl md:text-3xl text-primary-50 max-w-3xl mx-auto transition-all duration-300 ${isAnimating ? "opacity-0 translate-y-4" : "opacity-100"
              }`}
          >
            {slides[currentSlide].description}
          </p>

          <div className="flex gap-4 justify-center pt-4">
            <button className="px-10 py-4 rounded-full font-bold text-lg bg-gradient-to-r from-primary-500 to-primary-600 hover:scale-105 transition shadow-xl hover:shadow-2xl">
              Explore Products
            </button>
            <button className="px-10 py-4 rounded-full font-bold text-lg bg-white/10 border border-white/30 hover:bg-white/20 transition">
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* CONTROLS */}
      <button
        onClick={() => goToSlide((currentSlide - 1 + slides.length) % slides.length)}
        className="absolute left-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="Previous slide"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={() => goToSlide((currentSlide + 1) % slides.length)}
        className="absolute right-6 top-1/2 -translate-y-1/2 w-14 h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-all hover:scale-110"
        aria-label="Next slide"
      >
        <ChevronRight size={28} />
      </button>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`h-2 rounded-full transition-all duration-300 ${currentSlide === index
              ? "bg-white w-10 shadow-lg"
              : "bg-white/40 w-2 hover:bg-white/60 hover:w-6"
              }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
