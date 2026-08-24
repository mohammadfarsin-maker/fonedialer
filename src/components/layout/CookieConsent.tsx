'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ShieldCheck, X } from 'lucide-react';
import Link from 'next/link';

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('fonedialer_cookie_consent');
    if (!consent) {
      const timer = setTimeout(() => setShowBanner(true), 1500);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem('fonedialer_cookie_consent', 'granted');
    setShowBanner(false);
  };

  const handleDecline = () => {
    localStorage.setItem('fonedialer_cookie_consent', 'denied');
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 50 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-4 left-4 right-4 md:left-6 md:right-auto md:max-w-md z-50 bg-[#16283F] text-white p-5 rounded-2xl border border-[#2C476A] shadow-2xl space-y-3"
        >
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-2 text-[#E8A33D] font-bold text-sm">
              <ShieldCheck className="w-5 h-5" />
              <span>Privacy & Data Security</span>
            </div>
            <button
              onClick={handleDecline}
              className="text-[#5C6B7D] hover:text-white transition-colors"
              aria-label="Close cookie consent"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-[#DCE1E8]/90 leading-relaxed">
            Fonedialer uses essential cookies and analytics to ensure privacy compliance, secure form routing, and optimal site performance. Read our{' '}
            <Link href="/privacy" className="text-[#E8A33D] underline hover:text-white">
              Privacy Policy
            </Link>.
          </p>
          <div className="flex items-center gap-3 pt-1">
            <button
              onClick={handleAccept}
              className="px-4 py-2 bg-[#E8A33D] text-[#111823] font-bold text-xs rounded-lg hover:bg-[#D9922B] transition-colors"
            >
              Accept All
            </button>
            <button
              onClick={handleDecline}
              className="px-4 py-2 border border-[#2C476A] text-[#DCE1E8] font-medium text-xs rounded-lg hover:bg-[#2C476A]/40 transition-colors"
            >
              Essential Only
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
