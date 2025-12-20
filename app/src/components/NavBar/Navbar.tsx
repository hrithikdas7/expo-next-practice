"use client";

import { Globe, X } from "lucide-react";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { NavLink } from "../Navlink/Navlink";
import { MobileNavLink } from "../MobNavLink/MobNav";

const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-white ${scrolled
          ? "shadow-lg backdrop-blur-md"
          : "shadow-sm"
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex justify-between items-center h-20">
            {/* LOGO */}
            <Link href="/" className="flex items-center group">
              <div className="relative shadow-lg rounded-full overflow-hidden transform transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/logo.png"
                  alt="Sambhav Exporter Logo"
                  width={56}
                  height={56}
                  className="object-cover"
                  priority
                />
              </div>
              <div className="ml-3">
                <div className="text-xl font-bold text-primary-800">
                  SAMBHAV
                </div>
                <div className="text-xs text-primary-600 tracking-[0.2em] font-medium">
                  EXPORTER
                </div>
              </div>
            </Link>

            {/* DESKTOP MENU */}
            <div className="hidden md:flex items-center gap-1">
              <NavLink href="/">Home</NavLink>
              <NavLink href="/about-us">About Us</NavLink>
              <NavLink href="/products">Products</NavLink>
              <NavLink href="/contact-us">Contact Us</NavLink>

              <div className="ml-4">
                <button className="flex items-center gap-2 px-4 py-2 rounded-full text-foreground hover:text-primary-600 hover:bg-primary-50 transition">
                  <Globe size={18} />
                  <span className="text-sm font-medium">EN</span>
                </button>
              </div>
            </div>

            {/* MOBILE MENU BUTTON */}
            <button
              className="md:hidden p-2 rounded-lg text-primary-800 hover:bg-primary-100 hover:text-primary-900 transition-all hover:scale-105"
              onClick={() => setMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <span className="w-6 h-6 flex flex-col justify-center gap-1">
                <span className="w-6 h-0.5 bg-current rounded-full" />
                <span className="w-6 h-0.5 bg-current rounded-full" />
                <span className="w-6 h-0.5 bg-current rounded-full" />
              </span>
            </button>
          </div>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        className={`fixed inset-0 z-40 transition-all duration-300 ${mobileMenuOpen
          ? "bg-black/50 backdrop-blur-sm opacity-100"
          : "pointer-events-none opacity-0"
          }`}
        onClick={() => setMobileMenuOpen(false)}
      />

      {/* MOBILE DRAWER */}
      <div
        className={`fixed inset-0 z-50 bg-white transform transition-transform duration-300 ease-out ${mobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        {/* MOBILE HEADER */}
        <div className="flex items-center justify-between px-6 h-20 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <div className="shadow-md rounded-full overflow-hidden">
              <Image
                src="/logo.png"
                alt="Sambhav Exporter Logo"
                width={44}
                height={44}
                className="object-cover"
              />
            </div>
            <div>
              <div className="text-lg font-bold text-primary-800">
                SAMBHAV
              </div>
              <div className="text-xs text-primary-600 tracking-wider">
                EXPORTER
              </div>
            </div>
          </div>

          {/* CLOSE BUTTON */}
          <button
            onClick={() => setMobileMenuOpen(false)}
            className="p-2 rounded-lg text-foreground/70 text-primary-800 hover:bg-primary-100  transition"
            aria-label="Close menu"
          >
            <X size={26} />
          </button>
        </div>

        {/* MOBILE LINKS */}
        <div className="flex flex-col px-6 pt-8 gap-2">
          <MobileNavLink href="/" onClick={() => setMobileMenuOpen(false)}>
            Home
          </MobileNavLink>
          <MobileNavLink
            href="/about-us"
            onClick={() => setMobileMenuOpen(false)}
          >
            About Us
          </MobileNavLink>
          <MobileNavLink
            href="/products"
            onClick={() => setMobileMenuOpen(false)}
          >
            Products
          </MobileNavLink>
          <MobileNavLink
            href="/contact-us"
            onClick={() => setMobileMenuOpen(false)}
          >
            Contact Us
          </MobileNavLink>
        </div>

        {/* MOBILE FOOTER */}
        <div className="absolute bottom-6 left-0 w-full px-6 text-center text-xs text-gray-500 border-t border-gray-100 pt-4">
          © {new Date().getFullYear()} Sambhav Exporter
          <div className="mt-1 text-gray-400">All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
