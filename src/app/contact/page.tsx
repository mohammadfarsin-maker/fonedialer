import SendMessageForm from '@/components/contact/SendMessageForm';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';
import TypewriterHeading from '@/components/animation/TypewriterHeading';

export const metadata = {
  title: 'Contact Us - Fone Dialer',
  description:
    'Get in touch with Fone Dialer. We are available Monday to Saturday, 9:00 AM to 6:00 PM IST to assist you with call handling, lead follow-up, and telecalling support.',
};

export default function ContactPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen py-16 md:py-24">
      <main className="max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        {/* Header Section */}
        <header className="mb-16 md:mb-24 max-w-3xl">
          <TypewriterHeading
            text="Get in Touch."
            as="h1"
            className="font-serif text-[32px] md:text-[64px] leading-tight md:leading-[72px] text-[#133052] mb-6 font-normal tracking-tight"
          />
          <p className="text-[18px] leading-[28px] text-[#43474e]">
            Our team is available Monday to Saturday, 9:00 AM to 6:00 PM IST. Reach out to discuss how Fone Dialer can handle your calls, follow-ups, and lead generation seamlessly.
          </p>
        </header>

        {/* Contact Layout Grid */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Direct Channels Column */}
          <ScrollSlideCard index={0} className="lg:col-span-5">
            <div className="bg-white rounded-xl p-8 md:p-10 soft-shadow border border-[#E5E7EB]/50 space-y-8">
              <h2 className="font-serif text-[24px] md:text-[28px] text-[#133052] font-normal">
                Direct Channels
              </h2>

              <div className="space-y-6">
                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1F9] flex items-center justify-center shrink-0 text-[#133052]">
                    <span className="material-symbols-outlined text-2xl">call</span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-[#43474e] tracking-wider mb-1">
                      Phone Number
                    </h3>
                    <a
                      href="tel:+919495588907"
                      className="text-[18px] font-semibold text-[#133052] hover:underline"
                    >
                      +91 9495588907
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1F9] flex items-center justify-center shrink-0 text-[#133052]">
                    <span className="material-symbols-outlined text-2xl">mail</span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-[#43474e] tracking-wider mb-1">
                      Email Address
                    </h3>
                    <a
                      href="mailto:business@fonedialer.com"
                      className="text-[18px] font-semibold text-[#133052] hover:underline"
                    >
                      business@fonedialer.com
                    </a>
                  </div>
                </div>

                {/* Operating Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1F9] flex items-center justify-center shrink-0 text-[#133052]">
                    <span className="material-symbols-outlined text-2xl">schedule</span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-[#43474e] tracking-wider mb-1">
                      Working Hours
                    </h3>
                    <p className="text-[16px] font-medium text-[#1b1c1c]">
                      Mon – Sat: 9:00 AM – 6:00 PM (IST)
                    </p>
                  </div>
                </div>

                {/* Office Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1F9] flex items-center justify-center shrink-0 text-[#133052]">
                    <span className="material-symbols-outlined text-2xl">location_on</span>
                  </div>
                  <div>
                    <h3 className="text-xs uppercase font-bold text-[#43474e] tracking-wider mb-1">
                      Head Office
                    </h3>
                    <p className="text-[16px] font-medium text-[#1b1c1c]">
                      Greentiq Innovations Pvt. Ltd.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollSlideCard>

          {/* Form Column */}
          <ScrollSlideCard index={1} className="lg:col-span-7">
            <div className="bg-white rounded-xl p-8 md:p-10 soft-shadow border border-[#E5E7EB]/50">
              {/* <h2 className="font-serif text-[24px] md:text-[28px] text-[#133052] font-normal mb-6">
                Send a Message
              </h2> */}
              <SendMessageForm />
            </div>
          </ScrollSlideCard>
        </section>
      </main>
    </div>
  );
}
