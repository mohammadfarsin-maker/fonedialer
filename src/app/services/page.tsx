import Link from 'next/link';
import Image from 'next/image';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';
import TypewriterHeading from '@/components/animation/TypewriterHeading';

export const metadata = {
  title: 'Services - Fone Dialer',
  description:
    'Managed telecalling, lead qualification, and customer support services tailored for your business.',
};

export default function ServicesPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen py-16 md:py-24">
      <main className="max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <TypewriterHeading
            text="Our Services"
            as="h1"
            className="font-serif text-[32px] md:text-[52px] leading-tight text-[#133052] mb-4 font-normal tracking-tight"
          />
          <p className="text-[16px] text-[#43474e] leading-relaxed">
            Professional telecalling and customer engagement solutions tailored to streamline your business sales funnel.
          </p>
        </div>

        {/* Services Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Service Card 1: Inbound Call Handling */}
          <ScrollSlideCard index={0}>
            <div className="bg-white p-8 rounded-xl ambient-shadow flex flex-col h-full border border-[#E5E7EB]/50 hover:border-[#133052]/20 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[#EBF1F9] text-[#133052] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">call_received</span>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                Inbound Call Handling
              </h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-relaxed">
                Professionally handle incoming enquiries and ensure every customer gets the right response promptly.
              </p>
            </div>
          </ScrollSlideCard>

          {/* Service Card 2: Outbound Call Handling */}
          <ScrollSlideCard index={1}>
            <div className="bg-white p-8 rounded-xl ambient-shadow flex flex-col h-full border border-[#E5E7EB]/50 hover:border-[#133052]/20 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[#EBF1F9] text-[#133052] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">call_made</span>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                Outbound Call Handling
              </h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-relaxed">
                Connect with prospects and customers for follow-ups, reminders, campaigns and vital business updates.
              </p>
            </div>
          </ScrollSlideCard>

          {/* Service Card 3: Sales & Lead Follow-Up (Row Span 2 with sales.png) */}
          <ScrollSlideCard index={2} className="md:row-span-2">
            <div className="bg-white p-8 rounded-xl ambient-shadow flex flex-col h-full border border-[#E5E7EB]/50 hover:border-[#133052]/20 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[#EBF1F9] text-[#133052] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">trending_up</span>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                Sales & Lead Follow-Up
              </h3>
              <p className="text-[16px] text-[#43474e] flex-grow mb-6 leading-relaxed">
                Engage leads, understand their unique needs, and follow up consistently to drive more successful conversions and build relationships.
              </p>
              <div className="mt-auto pt-6 border-t border-[#E5E7EB]">
                <div className="relative w-full h-48 rounded-xl overflow-hidden shadow-sm">
                  <Image
                    src="/sales.png"
                    alt="Sales & Lead Follow-Up"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 400px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Service Card 4: Appointment Scheduling (Col Span 2) */}
          <ScrollSlideCard index={3} className="md:col-span-2">
            <div className="bg-white p-8 rounded-xl ambient-shadow flex flex-col h-full border border-[#E5E7EB]/50 hover:border-[#133052]/20 transition-colors group">
              <div className="flex flex-col md:flex-row gap-6 items-start">
                <div className="w-12 h-12 shrink-0 rounded-lg bg-[#EBF1F9] text-[#133052] flex items-center justify-center group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">event_available</span>
                </div>
                <div>
                  <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                    Appointment Scheduling
                  </h3>
                  <p className="text-[16px] text-[#43474e] leading-relaxed">
                    Qualify interested prospects and seamlessly schedule meetings, consultations, or product demos directly for your sales team, optimizing their time and focus.
                  </p>
                </div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Service Card 5: Chat Handling */}
          <ScrollSlideCard index={4}>
            <div className="bg-white p-8 rounded-xl ambient-shadow flex flex-col h-full border border-[#E5E7EB]/50 hover:border-[#133052]/20 transition-colors group">
              <div className="w-12 h-12 rounded-lg bg-[#EBF1F9] text-[#133052] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <span className="material-symbols-outlined">chat</span>
              </div>
              <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                Chat Handling
              </h3>
              <p className="text-[16px] text-[#43474e] flex-grow leading-relaxed">
                Respond to customer chats quickly, handle enquiries efficiently, and keep conversations moving smoothly.
              </p>
            </div>
          </ScrollSlideCard>

          {/* Service Card 6: Customer Support (Col Span 2) */}
          <ScrollSlideCard index={5} className="md:col-span-2">
            <div className="bg-white p-8 rounded-xl ambient-shadow flex flex-col md:flex-row items-center justify-between gap-6 border border-[#E5E7EB]/50 hover:border-[#133052]/20 transition-colors group">
              <div className="flex-1">
                <div className="w-12 h-12 rounded-lg bg-[#EBF1F9] text-[#133052] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <span className="material-symbols-outlined">support_agent</span>
                </div>
                <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                  Customer Support
                </h3>
                <p className="text-[16px] text-[#43474e] leading-relaxed mb-4">
                  Assist customers with queries, requests, feedback, reminders, and reliable ongoing support.
                </p>
                <Link
                  href="/contact"
                  className="inline-block text-sm font-medium text-[#133052] border border-[#133052] px-6 py-2.5 rounded-full hover:bg-[#EBF1F9] transition-colors"
                >
                  Get Started
                </Link>
              </div>
              <div className="relative w-full md:w-52 h-44 shrink-0 rounded-xl overflow-hidden shadow-sm">
                <Image
                  src="/customer_service.png"
                  alt="Customer Support Representative"
                  fill
                  sizes="(max-width: 768px) 100vw, 208px"
                  className="object-cover"
                />
              </div>
            </div>
          </ScrollSlideCard>
        </div>
      </main>
    </div>
  );
}
