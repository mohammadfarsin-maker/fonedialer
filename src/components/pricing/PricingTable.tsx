'use client';

import Link from 'next/link';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';
import TypewriterHeading from '@/components/animation/TypewriterHeading';

export default function PricingTable() {
  return (
    <section className="py-24 bg-[#fcf9f8]" id="pricing">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <TypewriterHeading
            text="Simple & Flexible Pricing"
            as="h2"
            className="font-serif text-[32px] md:text-[40px] text-[#133052] mb-4 font-normal"
          />
          <p className="text-[16px] text-[#43474e]">
            Choose the right telecalling plan for your business requirements.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {/* Pricing Card 1: 10 Days Plan (Price First, then Days) */}
          <ScrollSlideCard index={0}>
            <div className="bg-white p-8 rounded-xl ambient-shadow border border-[#E5E7EB]/50 hover:border-[#133052]/30 transition-colors flex flex-col h-full">
              <div className="font-serif text-[56px] text-[#133052] mb-2 font-normal leading-none">
                ₹2,900
              </div>
              <h3 className="font-serif text-[28px] text-[#1b1c1c] mb-6 font-normal">
                10 Days Plan
              </h3>
              <ul className="flex flex-col gap-3.5 mb-8 flex-grow text-[15px] text-[#43474e]">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Working Days:</strong> 10 Working Days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Service Hours:</strong> 10:00 AM – 6:00 PM IST</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Working Days:</strong> Monday – Saturday</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#94a3b8] text-[18px] mt-0.5 shrink-0">remove</span>
                  <span><strong>CRM Access:</strong> —</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Call Recording:</strong> Selected Recordings on Request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Calling Number:</strong> Shared Fone Dialer Number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Call Script:</strong> By Fone Dialer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Sales Manager Monitoring:</strong> Included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Language:</strong> Malayalam</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Holiday Calls:</strong> Carried Forward</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#133052]/10 text-[#133052] hover:bg-[#133052] hover:text-white font-medium text-sm px-6 py-3.5 rounded-full text-center transition-colors w-full"
              >
                Get Started
              </Link>
            </div>
          </ScrollSlideCard>

          {/* Pricing Card 2: 20 Days Plan (Price First, then Days) */}
          <ScrollSlideCard index={1}>
            <div className="bg-white p-8 rounded-xl ambient-shadow border-2 border-[#133052] relative flex flex-col h-full transform md:-translate-y-4 shadow-xl">
              <div className="font-serif text-[56px] text-[#133052] mb-2 font-normal leading-none">
                ₹5,600
              </div>
              <h3 className="font-serif text-[28px] text-[#1b1c1c] mb-6 font-normal">
                20 Days Plan
              </h3>
              <ul className="flex flex-col gap-3.5 mb-8 flex-grow text-[15px] text-[#43474e]">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Working Days:</strong> 20 Working Days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Service Hours:</strong> 10:00 AM – 6:00 PM IST</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Working Days:</strong> Monday – Saturday</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#94a3b8] text-[18px] mt-0.5 shrink-0">remove</span>
                  <span><strong>CRM Access:</strong> —</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Call Recording:</strong> Selected Recordings on Request</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Calling Number:</strong> Shared Fone Dialer Number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Call Script:</strong> By Fone Dialer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Sales Manager Monitoring:</strong> Included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Language:</strong> Malayalam</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Holiday Calls:</strong> Carried Forward</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#133052] text-white hover:bg-[#133052]/90 font-medium text-sm px-6 py-3.5 rounded-full text-center transition-colors w-full shadow-md"
              >
                Get Started
              </Link>
            </div>
          </ScrollSlideCard>

          {/* Pricing Card 3: 30 Days Plan (Price First, then Days) */}
          <ScrollSlideCard index={2}>
            <div className="bg-white p-8 rounded-xl ambient-shadow border border-[#E5E7EB]/50 hover:border-[#133052]/30 transition-colors flex flex-col h-full">
              <div className="font-serif text-[56px] text-[#133052] mb-2 font-normal leading-none">
                ₹8,500
              </div>
              <h3 className="font-serif text-[28px] text-[#1b1c1c] mb-6 font-normal">
                30 Days Plan
              </h3>
              <ul className="flex flex-col gap-3.5 mb-8 flex-grow text-[15px] text-[#43474e]">
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Working Days:</strong> 30 Working Days</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Service Hours:</strong> 10:00 AM – 6:00 PM IST</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Working Days:</strong> Monday – Saturday</span>
                </li>
                <li className="flex items-start gap-3 text-[#133052] font-semibold">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>CRM Access:</strong> Included</span>
                </li>
                <li className="flex items-start gap-3 text-[#133052] font-semibold">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Call Recording:</strong> Full Access via CRM</span>
                </li>
                <li className="flex items-start gap-3 text-[#133052] font-semibold">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Calling Number:</strong> Dedicated Virtual Number</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Call Script:</strong> By Fone Dialer</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Sales Manager Monitoring:</strong> Included</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Language:</strong> Malayalam</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="material-symbols-outlined text-[#133052] text-[18px] mt-0.5 shrink-0">check_circle</span>
                  <span><strong>Holiday Calls:</strong> Carried Forward</span>
                </li>
              </ul>
              <Link
                href="/contact"
                className="bg-[#133052]/10 text-[#133052] hover:bg-[#133052] hover:text-white font-medium text-sm px-6 py-3.5 rounded-full text-center transition-colors w-full"
              >
                Get Started
              </Link>
            </div>
          </ScrollSlideCard>
        </div>

        {/* Footnote */}
        <p className="text-center text-xs text-[#43474e] mt-8">
          *Note: Calls scheduled on holidays will be carried forward to the next working day.
        </p>
      </div>
    </section>
  );
}
