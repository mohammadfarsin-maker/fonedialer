'use client';

export default function ContactForm() {
  return (
    <section className="py-24 bg-[#EBF1F9]/30" id="contact">
      <div className="max-w-[1280px] mx-auto px-4 md:px-16 text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-[32px] md:text-[40px] text-[#133052] mb-6 font-normal">
            Contact Us
          </h2>
          <p className="text-[18px] leading-[28px] text-[#43474e] mb-10">
            Looking for reliable telecalling support for your business? Get in touch with our team and discover how Fone Dialer can help manage your calls, follow-ups, and customer conversations.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a
              href="tel:+919495588907"
              className="bg-[#133052] text-white font-medium text-sm px-8 py-4 rounded-full hover:bg-[#133052]/90 transition-all flex items-center gap-3 shadow-md w-full sm:w-auto justify-center"
            >
              <span className="material-symbols-outlined">call</span>
              +91 9495588907
            </a>
            <a
              href="mailto:business@fonedialer.com"
              className="bg-white text-[#133052] font-medium text-sm px-8 py-4 rounded-full border border-[#E5E7EB] hover:border-[#133052]/50 transition-all flex items-center gap-3 shadow-sm w-full sm:w-auto justify-center"
            >
              <span className="material-symbols-outlined">mail</span>
              business@fonedialer.com
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
