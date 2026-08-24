import PricingTable from '@/components/pricing/PricingTable';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';
import TypewriterHeading from '@/components/animation/TypewriterHeading';

export const metadata = {
  title: 'Pricing & Plans - Fone Dialer',
  description:
    'Explore Fone Dialer pricing plans: 10-day (₹2,900), 20-day (₹5,600), and 30-day (₹8,500) telecalling services tailored for high-growth businesses.',
};

export default function PricingPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen py-16 md:py-24">
      <main className="max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        {/* Header Section */}
        <header className="mb-12 max-w-3xl">
          <TypewriterHeading
            text="Transparent Telecalling Plans."
            as="h1"
            className="font-serif text-[32px] md:text-[64px] leading-tight md:leading-[72px] text-[#133052] mb-6 font-normal tracking-tight"
          />
          <p className="text-[18px] leading-[28px] text-[#43474e]">
            Choose a plan that fits your campaign cycle. All plans include trained telecallers, sales manager oversight, call scripts, and daily reporting.
          </p>
        </header>

        {/* Pricing Cards Table */}
        <PricingTable />

        {/* Plan Comparison Matrix */}
        <section className="mt-20">
          <TypewriterHeading
            text="Feature Comparison"
            as="h2"
            className="font-serif text-[28px] md:text-[36px] text-[#133052] mb-8 font-normal"
          />

          <ScrollSlideCard index={0}>
            <div className="bg-white rounded-xl shadow-ambient border border-[#E5E7EB]/50 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-[#EBF1F9] text-[#133052] border-b border-[#E5E7EB]">
                      <th className="p-4 md:p-6 font-semibold text-base">Plan Feature</th>
                      <th className="p-4 md:p-6 font-semibold text-base text-center">10 Days (₹2,900)</th>
                      <th className="p-4 md:p-6 font-semibold text-base text-center">20 Days (₹5,600)</th>
                      <th className="p-4 md:p-6 font-semibold text-base text-center">30 Days (₹8,500)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#E5E7EB] text-[#43474e] text-sm md:text-base">
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Working Days Count</td>
                      <td className="p-4 md:p-6 text-center font-semibold">10 Working Days</td>
                      <td className="p-4 md:p-6 text-center font-semibold">20 Working Days</td>
                      <td className="p-4 md:p-6 text-center font-semibold">30 Working Days</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Service Hours</td>
                      <td className="p-4 md:p-6 text-center">10:00 AM – 6:00 PM IST</td>
                      <td className="p-4 md:p-6 text-center">10:00 AM – 6:00 PM IST</td>
                      <td className="p-4 md:p-6 text-center">10:00 AM – 6:00 PM IST</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Working Days Schedule</td>
                      <td className="p-4 md:p-6 text-center">Monday – Saturday</td>
                      <td className="p-4 md:p-6 text-center">Monday – Saturday</td>
                      <td className="p-4 md:p-6 text-center">Monday – Saturday</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">CRM Access</td>
                      <td className="p-4 md:p-6 text-center text-[#94a3b8]">—</td>
                      <td className="p-4 md:p-6 text-center text-[#94a3b8]">—</td>
                      <td className="p-4 md:p-6 text-center font-bold text-[#133052]">Included</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Call Recording Access</td>
                      <td className="p-4 md:p-6 text-center">Selected Recordings on Request</td>
                      <td className="p-4 md:p-6 text-center">Selected Recordings on Request</td>
                      <td className="p-4 md:p-6 text-center font-bold text-[#133052]">Full Access via CRM</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Calling Number</td>
                      <td className="p-4 md:p-6 text-center">Shared Fone Dialer Number</td>
                      <td className="p-4 md:p-6 text-center">Shared Fone Dialer Number</td>
                      <td className="p-4 md:p-6 text-center font-bold text-[#133052]">Dedicated Virtual Number</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Call Script</td>
                      <td className="p-4 md:p-6 text-center">By Fone Dialer</td>
                      <td className="p-4 md:p-6 text-center">By Fone Dialer</td>
                      <td className="p-4 md:p-6 text-center">By Fone Dialer</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Sales Manager Monitoring</td>
                      <td className="p-4 md:p-6 text-center">Included</td>
                      <td className="p-4 md:p-6 text-center">Included</td>
                      <td className="p-4 md:p-6 text-center">Included</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Language</td>
                      <td className="p-4 md:p-6 text-center">Malayalam</td>
                      <td className="p-4 md:p-6 text-center">Malayalam</td>
                      <td className="p-4 md:p-6 text-center">Malayalam</td>
                    </tr>
                    <tr>
                      <td className="p-4 md:p-6 font-medium text-[#1b1c1c]">Holiday Calls</td>
                      <td className="p-4 md:p-6 text-center">Carried Forward</td>
                      <td className="p-4 md:p-6 text-center">Carried Forward</td>
                      <td className="p-4 md:p-6 text-center">Carried Forward</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </ScrollSlideCard>
        </section>
      </main>
    </div>
  );
}
