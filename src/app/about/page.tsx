import Image from 'next/image';
import TypewriterHeading from '@/components/animation/TypewriterHeading';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';

export const metadata = {
  title: 'About Us - Fone Dialer',
  description:
    'By choosing Fone Dialer, you are partnering with a team that values your success and strives to provide the best tools to help you achieve it.',
};

export default function AboutPage() {
  return (
    <div className="bg-[#fcf9f8] min-h-screen py-12 md:py-20">
      <main className="max-w-[1280px] mx-auto px-4 md:px-16 w-full">
        {/* Hero Section */}
        <section className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24 md:mb-32">
          <ScrollSlideCard direction="left" index={0} className="space-y-8 pr-0 lg:pr-12">
            <span className="inline-block px-4 py-2 bg-[#EBF1F9] text-[#133052] text-[12px] font-bold rounded-full tracking-wider uppercase">
              Our Story
            </span>
            <TypewriterHeading
              text="About Us"
              as="h1"
              className="font-serif text-[32px] md:text-[64px] leading-tight md:leading-[72px] text-[#133052] font-normal tracking-tight block"
            />
            <p className="text-[18px] leading-[28px] text-[#43474e] max-w-2xl">
              By choosing Fone Dialer, you are partnering with a team that values your success and strives to provide the best tools to help you achieve it.
            </p>
          </ScrollSlideCard>

          <ScrollSlideCard direction="right" index={1} className="relative w-full aspect-[1.24] rounded-xl overflow-hidden soft-shadow bg-white p-4">
            <Image
              src="/image1.png"
              alt="Professional support representative"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center p-4 rounded-xl"
              priority
            />
          </ScrollSlideCard>
        </section>

        {/* Fone Dialer Tilted Light Blue BG Section */}
        <section className="mb-28 md:mb-36 relative py-16 md:py-20 my-12 isolate">
          {/* Tilted Light Blue Background Layer */}
          <div className="absolute inset-0 bg-[#EBF1F9] rounded-[2.5rem] transform -skew-y-2 origin-top-left z-0 shadow-sm border border-[#133052]/10 pointer-events-none" />

          <div className="px-6 sm:px-10 md:px-16 grid grid-cols-1 md:grid-cols-12 gap-8 items-center relative z-10">
            {/* Left Side Header */}
            <ScrollSlideCard direction="left" index={0} className="md:col-span-4 space-y-6">
              <TypewriterHeading
                text="Fone Dialer"
                as="h2"
                className="font-serif text-[32px] md:text-[48px] leading-tight text-[#133052] font-normal block"
              />
              <p className="text-[16px] leading-[24px] text-[#43474e] border-l-4 border-[#133052] pl-4 font-medium">
                A leader in communications software, dedicated to empowering businesses worldwide.
              </p>
            </ScrollSlideCard>

            {/* Right Side Cards */}
            <div className="md:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-8">
              {/* Core Value Card 1 */}
              <ScrollSlideCard direction="right" index={0}>
                <div className="bg-white p-8 rounded-xl soft-shadow glass-panel hover:-translate-y-1 transition-transform duration-300 border border-white/60 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1F9] flex items-center justify-center mb-6 text-[#133052]">
                    <span className="material-symbols-outlined text-2xl">groups</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                    Our Team
                  </h3>
                  <p className="text-[16px] leading-[24px] text-[#43474e]">
                    Our team is dedicated to continuous improvement and innovation, ensuring that Fone Dialer remains at the forefront of communications technology.
                  </p>
                </div>
              </ScrollSlideCard>

              {/* Core Value Card 2 */}
              <ScrollSlideCard direction="right" index={1}>
                <div className="bg-white p-8 rounded-xl soft-shadow glass-panel hover:-translate-y-1 transition-transform duration-300 border border-white/60 h-full">
                  <div className="w-12 h-12 rounded-full bg-[#EBF1F9] flex items-center justify-center mb-6 text-[#133052]">
                    <span className="material-symbols-outlined text-2xl">trending_up</span>
                  </div>
                  <h3 className="text-[20px] font-semibold text-[#1b1c1c] mb-3">
                    Your Success
                  </h3>
                  <p className="text-[16px] leading-[24px] text-[#43474e]">
                    We value your success and strive to provide the best tools to help you achieve it. Your growth is our primary metric for achievement.
                  </p>
                </div>
              </ScrollSlideCard>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
