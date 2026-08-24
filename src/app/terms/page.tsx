import TypewriterHeading from '@/components/animation/TypewriterHeading';

export const metadata = {
  title: 'Terms of Service - Fone Dialer',
  description:
    'Terms of Service for Fone Dialer, operated by Greentiq Innovations Pvt. Ltd. Terms governing telecalling plans, campaign cycles, and service agreements.',
};

export default function TermsPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen py-16 md:py-24">
      <main className="max-w-[1000px] mx-auto px-4 md:px-16 w-full">
        {/* Header */}
        <header className="mb-12">
          <TypewriterHeading
            text="Terms of Service"
            as="h1"
            className="font-serif text-[32px] md:text-[52px] leading-tight text-[#133052] mb-4 font-normal tracking-tight"
          />
          <p className="text-sm font-semibold text-[#43474e] uppercase tracking-wider">
            Greentiq Innovations Pvt. Ltd. (Fone Dialer) • Effective Date: January 2024
          </p>
        </header>

        {/* Content Card */}
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E5E7EB] space-y-8 text-[#43474e] leading-relaxed text-[16px]">
          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              1. Acceptance of Terms
            </h2>
            <p>
              By accessing our website or purchasing telecalling plans from <strong>Fone Dialer</strong> (a service by <strong>Greentiq Innovations Pvt. Ltd.</strong>), you agree to be bound by these Terms of Service.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              2. Scope of Services & Operating Hours
            </h2>
            <p>
              Fone Dialer provides inbound and outbound call handling, sales follow-up, and telemarketing services according to your selected plan (10 Days, 20 Days, or 30 Days). Standard working hours are <strong>10:00 AM – 6:00 PM IST (Monday through Saturday)</strong>. Calls scheduled on public holidays are carried forward to the next working day.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              3. Payments & Plan Terms
            </h2>
            <p>
              All campaign plan fees (₹2,900 for 10 Days, ₹5,600 for 20 Days, and ₹8,500 for 30 Days) must be paid prior to service activation. The 30-Day plan includes dedicated virtual number setup and full CRM access.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              4. Client Responsibilities & Compliance
            </h2>
            <p>
              Clients must ensure that lead data provided for telecalling outreach complies with applicable telecommunication regulations. Fone Dialer formulates scripts and conducts calls based on information provided by the client.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              5. Contact & Support
            </h2>
            <p>
              For inquiries regarding service agreements, billing, or general terms, please contact our support team:
            </p>
            <div className="bg-[#EBF1F9]/50 p-4 rounded-xl text-sm space-y-1 text-[#133052] font-medium">
              <p><strong>Company:</strong> Greentiq Innovations Pvt. Ltd. (Fone Dialer)</p>
              <p><strong>Email:</strong> <a href="mailto:business@fonedialer.com" className="underline">business@fonedialer.com</a></p>
              <p><strong>Phone:</strong> <a href="tel:+919495588907" className="underline">+91 9495588907</a></p>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
