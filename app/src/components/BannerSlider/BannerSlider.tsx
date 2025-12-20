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
    setTimeout(() => setIsAnimating(false), 500);
  };

  const nextSlide = () => {
    goToSlide((currentSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    goToSlide((currentSlide - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-[650px] overflow-hidden group bg-black">
      {/* SLIDES */}
      {slides.map((slide, index) => {
        const isActive = currentSlide === index;
        return (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${isActive ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
          >
            {/* BACKGROUND */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-[2000ms] ease-out will-change-transform"
              style={{
                backgroundImage: `url(${slide.image})`,
                transform: isActive ? "scale(1.05)" : "scale(1.0)",
              }}
            />

            {/* OVERLAYS */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary-900/80 via-primary-800/60 to-black/70" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

            {/* CONTENT */}
            <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
              <div className="text-center w-full text-white space-y-6">
                <div
                  className={`text-sm md:text-base font-bold tracking-[0.3em] text-primary-200 uppercase transition-all duration-700 delay-300 ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-4"
                    }`}
                >
                  {slide.title}
                </div>

                <h1
                  className={`text-4xl md:text-7xl lg:text-8xl font-black transition-all duration-700 delay-500 ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                  style={{ textShadow: "0 4px 30px rgba(0,0,0,0.5)" }}
                >
                  {slide.subtitle}
                </h1>

                <p
                  className={`text-lg md:text-3xl text-primary-50 max-w-3xl mx-auto transition-all duration-700 delay-700 ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  {slide.description}
                </p>

                <div
                  className={`flex gap-4 justify-center pt-4 transition-all duration-700 delay-900 ${isActive
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                    }`}
                >
                  <button className="px-8 py-3 rounded-full font-bold text-base bg-gradient-to-r from-primary-500 to-primary-600 hover:scale-105 transition shadow-lg hover:shadow-xl">
                    Explore Products
                  </button>
                  <button className="px-8 py-3 rounded-full font-bold text-base bg-white/10 border border-white/30 hover:bg-white/20 transition">
                    Contact Us
                  </button>
                </div>
              </div>
            </div>
          </div>
        );
      })}

      {/* CONTROLS */}
      {/* Mobile: Bottom Center, Desktop: Sides */}
      <div className="absolute z-20 bottom-24 md:bottom-auto w-full md:w-full md:h-full md:top-0 left-0 flex md:block items-center justify-center gap-8 md:gap-0 pointer-events-none">

        {/* Previous Button */}
        <button
          onClick={prevSlide}
          className="pointer-events-auto md:absolute md:left-6 md:top-1/2 md:-translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="pointer-events-auto md:absolute md:right-6 md:top-1/2 md:-translate-y-1/2 w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 backdrop-blur-sm transition-all hover:scale-110 active:scale-95"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>
      </div>

      {/* INDICATORS */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
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
