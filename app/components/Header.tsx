'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/focus-areas', label: 'Focus Areas' },
    { href: '/impact', label: 'Impact' },
    { href: '/get-involved', label: 'Get Involved' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-2 sm:px-4 lg:px-6 py-3 sm:py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 sm:gap-3">
          <div className="relative w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20">
            <Image
              src="/images/Logo.png"
              alt="Azariah Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          <div className="flex flex-col">
            <span className="text-black font-bold text-lg sm:text-xl md:text-2xl">
              AZARIAH
            </span>
            <span className="text-black text-xs sm:text-sm font-medium">
              Life Care Foundation
            </span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-gray-700 hover:text-primary font-medium text-xl xl:text-2xl hover:font-bold transition"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Donate CTA */}
        <Link
          href="/get-involved"
          className="hidden lg:inline-flex bg-pink-500 hover:bg-pink-600 hover:scale-105 hover:shadow-lg text-white px-4 xl:px-6 py-2 xl:py-3 rounded-lg font-semibold text-base xl:text-lg transition-all duration-200 cursor-pointer"
        >
          Donate Now
        </Link>

        {/* Mobile Menu Button */}
        <button
          onClick={toggleMenu}
          className="lg:hidden text-white bg-primary hover:bg-primary/90 p-3 rounded-lg shadow-md transition-all"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
          <nav className="container mx-auto px-4 py-6 flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="text-gray-700 hover:text-primary font-medium text-xl py-3 hover:bg-gray-50 px-4 rounded transition"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/get-involved"
              onClick={() => setIsMenuOpen(false)}
              className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-4 rounded-lg font-semibold text-xl text-center transition-all duration-200 mt-2"
            >
              Donate Now
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}