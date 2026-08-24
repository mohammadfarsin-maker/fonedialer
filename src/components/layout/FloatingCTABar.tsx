'use client';

import { Phone, MessageSquare } from 'lucide-react';

export default function FloatingCTABar() {
  return (
    <div className="fixed right-6 bottom-6 z-50 flex flex-col gap-3.5 items-center">
      {/* WhatsApp Action */}
      <a
        href="https://wa.me/919876543210?text=Hi%20FoneDialer,%20I'd%20like%20to%20know%20more%20about%20your%20telecalling%20plans"
        target="_blank"
        rel="noreferrer"
        className="w-14 h-14 rounded-full bg-[#20cf6b] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Contact FoneDialer on WhatsApp"
        title="WhatsApp Chat"
      >
        <MessageSquare className="w-7 h-7 fill-white" />
      </a>

      {/* Direct Phone Action */}
      <a
        href="tel:+919876543210"
        className="w-14 h-14 rounded-full bg-[#183454] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
        aria-label="Call FoneDialer"
        title="Call FoneDialer"
      >
        <Phone className="w-6 h-6" />
      </a>
    </div>
  );
}
