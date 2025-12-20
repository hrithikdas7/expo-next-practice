"use client";

import { Globe, Menu, X } from "lucide-react";
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
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {mobileMenuOpen ? (
                <X size={28} />
              ) : (
                <Menu size={28} />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* MOBILE DROPDOWN MENU */}
      <div
        className={`fixed top-20 left-0 w-full bottom-0 z-40 bg-white shadow-xl border-t border-gray-100 flex flex-col justify-between transform transition-all duration-300 ease-out origin-top ${mobileMenuOpen
          ? "translate-y-0 opacity-100 visible"
          : "-translate-y-4 opacity-0 invisible"
          }`}
      >
        <div className="flex flex-col px-6 py-6 gap-2 overflow-y-auto">
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
        <div className="px-6 pb-6 text-center text-xs text-gray-500 border-t border-gray-100 pt-4 bg-white">
          © {new Date().getFullYear()} Sambhav Exporter
          <div className="mt-1 text-gray-400">All Rights Reserved</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
