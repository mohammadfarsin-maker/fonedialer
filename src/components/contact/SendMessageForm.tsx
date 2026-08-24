'use client';

import { useState } from 'react';

interface SendMessageFormProps {
  showCloseButton?: boolean;
  onClose?: () => void;
  title?: string;
}

export default function SendMessageForm({
  showCloseButton = false,
  onClose,
  title = 'Send a Message',
}: SendMessageFormProps) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-white rounded-2xl p-6 md:p-10 shadow-2xl border border-[#e5e2e1] relative w-full max-w-xl mx-auto">
      {/* Close Button if requested */}
      {showCloseButton && (
        <button
          onClick={onClose}
          type="button"
          aria-label="Close modal"
          className="absolute top-4 right-4 text-[#43474e] hover:text-[#133052] w-9 h-9 rounded-full bg-[#f6f3f2] flex items-center justify-center transition-colors z-10"
        >
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      )}

      <h2 className="font-serif text-[28px] md:text-[36px] text-[#133052] mb-6 font-normal pr-8">
        {title}
      </h2>

      {submitted ? (
        <div className="bg-[#EBF1F9] p-8 rounded-xl text-center space-y-4 my-4">
          <div className="w-12 h-12 rounded-full bg-[#133052] text-white flex items-center justify-center mx-auto text-xl font-bold">
            ✓
          </div>
          <h3 className="font-serif text-[24px] text-[#133052]">Thank You!</h3>
          <p className="text-[15px] text-[#43474e]">
            Your inquiry has been received. Our team will get back to you within 24 hours.
          </p>
          {showCloseButton && (
            <button
              onClick={onClose}
              className="mt-4 bg-[#133052] text-white text-xs font-semibold px-6 py-2.5 rounded hover:bg-[#2c476a] transition-colors"
            >
              Close Window
            </button>
          )}
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="relative border-b border-[#dcd9d9] pb-1">
              <input
                required
                type="text"
                id="firstName"
                placeholder="First Name *"
                className="w-full bg-transparent border-none p-2 text-[15px] text-[#1b1c1c] focus:outline-none focus:ring-0"
              />
            </div>
            <div className="relative border-b border-[#dcd9d9] pb-1">
              <input
                required
                type="text"
                id="lastName"
                placeholder="Last Name *"
                className="w-full bg-transparent border-none p-2 text-[15px] text-[#1b1c1c] focus:outline-none focus:ring-0"
              />
            </div>
          </div>

          <div className="relative border-b border-[#dcd9d9] pb-1">
            <input
              required
              type="email"
              id="email"
              placeholder="Business Email *"
              className="w-full bg-transparent border-none p-2 text-[15px] text-[#1b1c1c] focus:outline-none focus:ring-0"
            />
          </div>

          <div className="relative border-b border-[#dcd9d9] pb-1">
            <select
              required
              defaultValue=""
              id="topic"
              className="w-full bg-transparent border-none p-2 text-[15px] text-[#1b1c1c] focus:outline-none focus:ring-0"
            >
              <option value="" disabled>
                Select a Topic *
              </option>
              <option value="sales">Sales Inquiry</option>
              <option value="support">Technical Support</option>
              <option value="partnership">Partnership</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="relative border-b border-[#dcd9d9] pb-1">
            <textarea
              required
              rows={3}
              id="message"
              placeholder="How can we help you? *"
              className="w-full bg-transparent border-none p-2 text-[15px] text-[#1b1c1c] focus:outline-none focus:ring-0 resize-none"
            />
          </div>

          <div className="pt-2 flex justify-end">
            <button
              type="submit"
              className="bg-[#133052] text-white font-medium text-sm px-8 py-3.5 rounded-full hover:bg-[#2c476a] transition-colors duration-300 flex items-center shadow-md"
            >
              Send Inquiry
              <span className="material-symbols-outlined ml-2 text-[18px]">
                arrow_forward
              </span>
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
