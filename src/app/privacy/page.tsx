import TypewriterHeading from '@/components/animation/TypewriterHeading';

export const metadata = {
  title: 'Privacy Policy - Fone Dialer',
  description:
    'Privacy Policy for Fone Dialer, powered by Greentiq Innovations Pvt. Ltd. Learn how we collect, use, and protect your data.',
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen py-16 md:py-24">
      <main className="max-w-[1000px] mx-auto px-4 md:px-16 w-full">
        {/* Header */}
        <header className="mb-12">
          <TypewriterHeading
            text="Privacy Policy"
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
              1. Overview & Commitment
            </h2>
            <p>
              At <strong>Fone Dialer</strong> (operated by <strong>Greentiq Innovations Pvt. Ltd.</strong>), we respect your privacy and are committed to protecting the personal data and lead lists entrusted to us. This Privacy Policy outlines how we collect, use, and safeguard information when you use our telecalling services and website.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              2. Information We Collect
            </h2>
            <p>
              We collect information provided directly by clients and prospective customers during campaign setup and inquiry submissions:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Contact Information:</strong> Name, phone number, email address, and business name.</li>
              <li><strong>Campaign Data:</strong> Call logs, lead lists, call scripts, and selected call recordings collected for service execution and quality assurance.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              3. How We Use Your Data
            </h2>
            <p>
              Your data is strictly used to deliver contracted telecalling services, provide customer support, generate campaign reports, and process payments. <strong>Greentiq Innovations Pvt. Ltd. never sells, rents, or shares lead data with third parties.</strong>
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              4. Data Protection & Security
            </h2>
            <p>
              We implement industry-standard encryption, strict access controls, and administrative safeguards to protect your campaign details and customer logs against unauthorized access or disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-[22px] text-[#133052] font-semibold">
              5. Contact Us
            </h2>
            <p>
              If you have any questions regarding this Privacy Policy or wish to exercise your data protection rights, please contact us:
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
