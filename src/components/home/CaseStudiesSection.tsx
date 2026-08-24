'use client';

import Image from 'next/image';
import TypewriterHeading from '@/components/animation/TypewriterHeading';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';

export default function CaseStudiesSection() {
  return (
    <section className="py-24 bg-[#f6f3f2]" id="about">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <ScrollSlideCard direction="left" index={0}>
          <TypewriterHeading
            text="About Us"
            as="h2"
            className="font-serif text-[32px] md:text-[40px] text-[#133052] mb-6 font-normal block"
          />
          <p className="text-[18px] leading-[28px] text-[#43474e] leading-relaxed">
            Fone Dialer is a managed telecalling service powered by Greentiq Innovations Pvt. Ltd., designed to help businesses efficiently manage lead calling, follow-ups, and customer engagement. Many businesses spend heavily on marketing and lead generation but struggle to consistently follow up with every enquiry. Hiring and managing an internal telecalling team can also increase operational costs and management workload. Fone Dialer bridges this gap by providing businesses with dedicated telecalling support backed by structured processes and technology.
          </p>
        </ScrollSlideCard>

        <ScrollSlideCard direction="right" index={1}>
          <div className="rounded-2xl overflow-hidden relative h-[400px] shadow-lg">
            <Image
              src="/image2.png"
              alt="Customer Support Representative"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </ScrollSlideCard>
      </div>
    </section>
  );
}
