import React from 'react';
import AboutUsGrid from '../src/components/AboutUsGrid/AboutUsGrid';
import AboutProducts from '../src/components/AboutProducts/AboutProducts';
import TrustedPartner from '../src/components/TrustedPartner/TrustedPartner';
import CoreValues from '../src/components/CoreValues/CoreValues';

// Using a simple header for now to avoid reusing the full Home Slider which might be confusing
const AboutHeader = () => (
  <div className="relative w-full h-[40vh] bg-primary-900 flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0 bg-[url('/about.png')] bg-cover bg-center opacity-40"></div>
    <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-primary-900/60 to-transparent"></div>
    <div className="relative z-10 text-center">
      <h1 className="text-5xl md:text-7xl font-black text-white tracking-tight mb-4">
        About Us
      </h1>
      <p className="text-xl text-primary-100 max-w-2xl mx-auto">
        Your Trusted Partner for Premium Indian Exports
      </p>
    </div>
  </div>
);

const Aboutus = () => {
  return (
    <>
      <AboutHeader />
      <AboutUsGrid />
      <AboutProducts />
      <TrustedPartner />
      <CoreValues />
    </>
  )
}

export default Aboutus