"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const BannerSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: "FRESHNESS. PURITY. QUALITY.",
      subtitle: "Delivering Fresh, Pure & Premium",
      description: "Onions, Spices, Pulses, and Seeds Worldwide.",
      image:
        "https://images.unsplash.com/photo-1606914469633-bd39206ea739?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      title: "EXCELLENCE IN EXPORT",
      subtitle: "Global Standards, Local Values",
      description: "Bringing India's Best to Your Doorstep.",
      image:
        "https://images.unsplash.com/photo-1604328698692-f76ea9498e76",
    },
    {
      title: "TRUSTED WORLDWIDE",
      subtitle: "Quality You Can Count On",
      description: "Premium Agricultural Products Since Years.",
      image:
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-150 overflow-hidden">
      {/* Background Image */}
      <div
        key={currentSlide}
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].image})`,
        }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-br from-green-900/70 to-black/40" />

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 h-full flex items-center">
        <div className="text-center w-full text-white">
          <div className="mb-4 font-semibold tracking-wider animate-fade-in">
            {slides[currentSlide].title}
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            {slides[currentSlide].subtitle}
          </h1>
          <p className="text-2xl md:text-3xl mb-8 animate-fade-in">
            {slides[currentSlide].description}
          </p>
          <div className="flex gap-4 justify-center animate-fade-in">
            <button className="bg-primary-600  px-8 py-3 rounded-full font-semibold hover:bg-green-700 shadow-lg transition">
              About
            </button>
            <button className="bg-white text-primary-700 px-8 py-3 rounded-full font-semibold shadow-lg hover:bg-green-50 transition">
              Contact
            </button>
          </div>
        </div>
      </div>

      {/* Slider Controls */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronLeft className="text-green-600" size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/80 p-2 rounded-full shadow-lg hover:bg-white"
      >
        <ChevronRight className="text-green-600" size={24} />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-3 rounded-full transition-all ${
              currentSlide === index
                ? "bg-green-500 w-8"
                : "bg-white/60 w-3"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default BannerSlider;
