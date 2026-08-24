'use client';

import { useState, useEffect } from 'react';
import SendMessageForm from './SendMessageForm';

export default function ContactModalPopup() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Show pop-up on initial load after 800ms
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  const handleClose = () => {
    setIsOpen(false);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="w-full max-w-xl max-h-[90vh] overflow-y-auto rounded-2xl shadow-2xl">
        <SendMessageForm
          showCloseButton
          onClose={handleClose}
          title="Get in Touch with Fone Dialer"
        />
      </div>
    </div>
  );
}
