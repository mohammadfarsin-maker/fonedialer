'use client';

import Image from 'next/image';
import Link from 'next/link';
import TypewriterHeading from '@/components/animation/TypewriterHeading';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center bg-[#F9F9F9] overflow-hidden">
      <div className="absolute inset-0 w-full h-full md:w-1/2 md:right-0 md:left-auto bg-[#EBF1F9]/30 z-0" />

      <div className="max-w-[1280px] mx-auto w-full px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center relative z-10 py-16 md:py-0">
        {/* Text Content */}
        <ScrollSlideCard direction="left" delay={0} className="flex flex-col gap-6 max-w-xl">
          <TypewriterHeading
            text="Connecting Leads. Creating Opportunities."
            as="h1"
            className="font-serif text-[32px] md:text-[64px] leading-tight md:leading-[72px] text-[#133052] font-normal tracking-tight"
          />

          <p className="text-[18px] leading-[28px] text-[#43474e] max-w-lg">
            Fone Dialer - Premium Telecalling Solutions for the Modern Enterprise. We manage your calls, follow-ups, and lead generation so you can focus on growth.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link
              href="/contact"
              className="bg-[#133052] text-white font-medium text-sm px-8 py-4 rounded-full hover:bg-[#133052]/90 transition-all text-center flex items-center justify-center gap-2 shadow-md"
            >
              Get Started
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </Link>

            <Link
              href="/services"
              className="border border-[#133052] text-[#133052] font-medium text-sm px-8 py-4 rounded-full hover:bg-[#EBF1F9] transition-all text-center flex items-center justify-center"
            >
              Explore Services
            </Link>
          </div>
        </ScrollSlideCard>

        {/* Image / Illustration with Animated Floating Icons */}
        <ScrollSlideCard direction="right" delay={0.1} className="relative h-[400px] md:h-[600px] w-full flex items-center justify-center">
          <div className="relative w-full h-full max-h-[500px]">
            <Image
              src="/image1.png"
              alt="Professional Telecaller"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
              className="object-contain drop-shadow-2xl rounded-2xl"
              priority
            />
          </div>

          {/* Floating Icon Badge 1 - Top Left */}
          <div className="absolute top-8 left-2 md:-left-6 glass-panel px-4 py-3 rounded-full soft-shadow border border-white/60 flex items-center gap-3 animate-float-1 z-20">
            <div className="w-9 h-9 rounded-full bg-[#133052] text-white flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
            </div>
            <span className="text-xs font-semibold text-[#133052] pr-1">Active Call Handling</span>
          </div>

          {/* Floating Icon Badge 2 - Top Right */}
          <div className="absolute top-12 right-2 md:-right-6 glass-panel px-4 py-3 rounded-full soft-shadow border border-white/60 flex items-center gap-3 animate-float-2 z-20">
            <div className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">headset_mic</span>
            </div>
            <span className="text-xs font-semibold text-[#133052] pr-1">Dedicated Calling Team</span>
          </div>

          {/* Floating Icon Badge 3 - Bottom Right */}
          <div className="absolute bottom-12 right-2 md:-right-4 glass-panel px-4 py-3 rounded-full soft-shadow border border-white/60 flex items-center gap-3 animate-float-3 z-20">
            <div className="w-9 h-9 rounded-full bg-[#fdcc01] text-[#133052] flex items-center justify-center shadow-sm">
              <span className="material-symbols-outlined text-[20px]">verified</span>
            </div>
            <span className="text-xs font-semibold text-[#133052] pr-1">100% Qualified Leads</span>
          </div>

          {/* Floating Icon Badge 4 - Bottom Left */}
          <div className="absolute bottom-16 left-2 md:-left-4 glass-panel px-4 py-3 rounded-full soft-shadow border border-white/60 flex items-center gap-3 animate-float-4 z-20">
            <div className="w-9 h-9 rounded-full bg-[#EBF1F9] text-[#133052] flex items-center justify-center">
              <span className="material-symbols-outlined text-[20px]">forum</span>
            </div>
            <span className="text-xs font-semibold text-[#133052] pr-1">Instant Follow-up</span>
          </div>
        </ScrollSlideCard>
      </div>
    </section>
  );
}
