'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <header
        id="main-nav"
        className={`fixed top-0 w-full z-50 bg-gradient-to-r from-[#fcf9f8]/95 via-[#EBF1F9]/60 to-[#fcf9f8]/95 backdrop-blur-md transition-all duration-300 ${isScrolled ? 'shadow-md border-b border-[#133052]/10 py-1' : 'shadow-sm py-2'
          }`}
      >
        <div className="flex justify-between items-center max-w-[1280px] mx-auto px-4 md:px-16 h-22 md:h-24">
          {/* Brand Logo - Fixed src to /logo.png */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Fone Dialer Logo"
              width={250}
              height={90}
              className="h-14 md:h-28 max-h-[250px] w-auto object-contain mix-blend-multiply"
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/services"
              className="text-[#43474e] hover:text-[#133052] font-semibold text-base transition-colors duration-300"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              className="text-[#43474e] hover:text-[#133052] font-semibold text-base transition-colors duration-300"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              className="text-[#43474e] hover:text-[#133052] font-semibold text-base transition-colors duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-[#43474e] hover:text-[#133052] font-semibold text-base transition-colors duration-300"
            >
              Contact Us
            </Link>
          </nav>

          {/* Actions */}
          <div className="hidden md:flex items-center gap-4">
            <a
              href="tel:+919495588907"
              className="text-[#133052] hover:text-[#133052]/80 font-bold text-sm transition-colors flex items-center gap-2"
            >
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
              Call Us
            </a>
            <Link
              href="/contact"
              className="bg-gradient-to-r from-[#133052] to-[#2c476a] text-white font-medium text-sm px-8 py-3.5 rounded-full hover:opacity-95 transition-all shadow-md"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
            className="md:hidden text-[#1b1c1c]"
          >
            <span className="material-symbols-outlined text-[32px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 bg-[#fcf9f8] z-40 flex flex-col pt-28 px-6">
          <nav className="flex flex-col gap-6 text-center">
            <Link
              href="/services"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[20px] font-semibold text-[#133052]"
            >
              Services
            </Link>
            <Link
              href="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[20px] font-semibold text-[#133052]"
            >
              Pricing
            </Link>
            <Link
              href="/about"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[20px] font-semibold text-[#133052]"
            >
              About
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="text-[20px] font-semibold text-[#133052]"
            >
              Contact Us
            </Link>
            <Link
              href="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-8 bg-gradient-to-r from-[#133052] to-[#2c476a] text-white font-medium text-sm px-8 py-4 rounded-full mx-auto inline-block shadow-md"
            >
              Get Started
            </Link>
          </nav>
        </div>
      )}
    </>
  );
}
