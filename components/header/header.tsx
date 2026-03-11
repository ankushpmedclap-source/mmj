"use client";
import { useState } from "react";
import { Phone, Menu, X } from "lucide-react";
import Image from "next/image";
import logo from "@/public/assets/logo (2) 1.png";

const navLinks = ["Process", "Conditions", "Pricing", "FAQ"];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full border-b border-gray-100 bg-white shadow-sm relative z-50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3 min-w-fit">
          {/* <div className="w-11 h-11 rounded-full border-2 border-green-600 flex items-center justify-center bg-white">
            <svg viewBox="0 0 40 40" className="w-8 h-8" fill="none">
              <circle cx="20" cy="20" r="18" fill="#f0fdf4" stroke="#16a34a" strokeWidth="2" />
              <rect x="17" y="10" width="6" height="20" rx="2" fill="#16a34a" />
              <rect x="10" y="17" width="20" height="6" rx="2" fill="#16a34a" />
            </svg>
          </div>
          <div className="leading-tight">
            <p className="text-green-600 font-semibold text-sm tracking-wide">Pennsylvania</p>
            <p className="text-gray-800 font-bold text-sm tracking-tight">Medical Marijuana Card</p>
          </div> */}
          <Image src={logo} alt="Logo" className="main_logo" />
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((item) => (
            <a
              key={item}
              href="#"
              className="text-gray-600 text-sm font-medium hover:text-green-600 transition-colors duration-200"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* Desktop Right Side */}
        <div className="hidden md:flex items-center gap-5">
          <a
            href="tel:800-123-4567"
            className="flex items-center gap-2 text-gray-700 text-sm font-medium hover:text-green-600 transition-colors duration-200"
          >
            <Phone className="w-4 h-4 text-green-600" strokeWidth={2} />
            800-123-4567
          </a>
          <a
            href="#"
            className="get_started"
          >
            Get Started
          </a>
        </div>

        {/* Mobile: Hamburger */}
        <button
          className="md:hidden flex items-center justify-center w-10 h-10 rounded-md text-gray-700 hover:bg-gray-100 transition-colors duration-200"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white border-t border-gray-100 shadow-lg z-50">
          <nav className="flex flex-col px-6 py-4 gap-1">
            {navLinks.map((item) => (
              <a
                key={item}
                href="#"
                onClick={() => setMenuOpen(false)}
                className="text-gray-700 text-sm font-medium py-3 border-b border-gray-50 hover:text-green-600 transition-colors duration-200"
              >
                {item}
              </a>
            ))}

            {/* Phone */}
            <a
              href="tel:800-123-4567"
              className="flex items-center gap-2 text-gray-700 text-sm font-medium py-3 border-b border-gray-50 hover:text-green-600 transition-colors duration-200"
            >
              <Phone className="w-4 h-4 text-green-600" strokeWidth={2} />
              800-123-4567
            </a>

            {/* CTA */}
            <a
              href="#"
              className="mt-3 bg-gray-900 hover:bg-gray-700 text-white text-sm font-semibold px-5 py-3 rounded-md text-center transition-colors duration-200"
            >
              Get Started
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}