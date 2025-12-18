"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <>
      {/* NAVBAR */}
      <nav className="bg-white shadow-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <div className="flex items-center">
              <div className="shadow-lg rounded-full overflow-hidden">
                <Image
                  src="/logo.png"
                  alt="Sambhav Exporter Logo"
                  width={64}
                  height={64}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-green-700">
                  SAMBHAV
                </div>
                <div className="text-xs text-gray-600 tracking-wider">
                  EXPORTER
                </div>
              </div>
            </div>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-green-600 font-semibold">
                Home
              </a>
              <a href="#about" className="text-gray-700 hover:text-green-600">
                About Us
              </a>
              <a href="#products" className="text-gray-700 hover:text-green-600">
                Products
              </a>
              <a href="#contact" className="text-gray-700 hover:text-green-600">
                Contact Us
              </a>
              <select className="border border-gray-300 rounded px-3 py-1 text-sm">
                <option>English</option>
                <option>Hindi</option>
              </select>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <Menu size={26} />
            </button>
          </div>
        </div>
      </nav>

      {/* BACKGROUND OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${
          mobileMenuOpen
            ? "bg-black/40 backdrop-blur-sm opacity-100"
            : "pointer-events-none opacity-0"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* FULL MOBILE DRAWER (RIGHT) */}
      <div
        className={`fixed top-0 right-0 h-full w-full z-50
        bg-white/95 backdrop-blur-xl
        transform transition-transform duration-500 ease-in-out
        ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 h-20 border-b">
          <div className="flex items-center gap-3">
            <div className="shadow-md rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Sambhav Exporter Logo"
                width={48}
                height={48}
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-bold text-green-700">
                SAMBHAV
              </div>
              <div className="text-xs text-gray-600 tracking-wider">
                EXPORTER
              </div>
            </div>
          </div>

          <button onClick={() => setMobileMenuOpen(false)}>
            <X size={26} />
          </button>
        </div>

        {/* MOBILE MENU LINKS */}
        <div className="flex flex-col px-8 pt-10 gap-8 text-2xl font-medium">
          <a
            href="#home"
            onClick={() => setMobileMenuOpen(false)}
            className="text-green-700"
          >
            Home
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800"
          >
            About Us
          </a>
          <a
            href="#products"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800"
          >
            Products
          </a>
          <a
            href="#contact"
            onClick={() => setMobileMenuOpen(false)}
            className="text-gray-800"
          >
            Contact Us
          </a>
        </div>

        {/* MOBILE FOOTER */}
        <div className="absolute bottom-6 left-0 w-full text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Sambhav Exporter
        </div>
      </div>
    </>
  );
};

export default Navbar;
