import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="py-12 bg-gradient-to-b from-[#fcf9f8] via-[#EBF1F9]/30 to-white border-t border-[#E5E7EB]">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 flex flex-col md:flex-row items-center justify-between gap-8">
        {/* Brand Logo - Fixed size for dev & production consistency */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Fone Dialer Logo"
            width={180}
            height={48}
            className="h-10 md:h-12 w-auto max-h-12 object-contain mix-blend-multiply"
          />
        </Link>

        {/* Copyright */}
        <p className="text-sm font-medium text-[#43474e] text-center">
          © 2024 Greentiq Innovations Pvt. Ltd. All rights reserved.
        </p>

        {/* Social Media Icons & Legal Links arranged vertically */}
        <div className="flex flex-col items-center md:items-end gap-3">
          {/* Social Media Icons */}
          <div className="flex items-center gap-3">
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133052] hover:to-[#2c476a] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 10.9v8.37H9.25V10.9H6.46M7.86 6.7a1.63 1.63 0 1 0 0 3.26 1.63 1.63 0 0 0 0-3.26Z" />
              </svg>
            </a>

            {/* Twitter / X */}
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
              className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133052] hover:to-[#2c476a] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133052] hover:to-[#2c476a] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H7.5v-3H10V9.5C10 7.01 11.49 5.65 13.75 5.65c1.08 0 2.22.19 2.22.19v2.44h-1.25c-1.23 0-1.61.77-1.61 1.56V12h2.74l-.44 3h-2.3v6.8c4.56-.93 8-4.96 8-9.8z" />
              </svg>
            </a>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133052] hover:to-[#2c476a] hover:text-white transition-all shadow-sm"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
            </a>

            {/* Phone */}
            <a
              href="tel:+919495588907"
              aria-label="Phone"
              className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center hover:bg-gradient-to-r hover:from-[#133052] hover:to-[#2c476a] hover:text-white transition-all shadow-sm"
            >
              <span className="material-symbols-outlined text-[20px]">call</span>
            </a>
          </div>

          {/* Legal Links under Icons */}
          <div className="flex items-center gap-4">
            <Link
              href="/privacy"
              className="text-xs font-semibold text-[#43474e] hover:text-[#133052] transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs font-semibold text-[#43474e] hover:text-[#133052] transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
