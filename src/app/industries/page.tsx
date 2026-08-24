import IndustriesGrid from '@/components/home/IndustriesGrid';
import Badge from '@/components/ui/Badge';
import Button from '@/components/ui/Button';

export const metadata = {
  title: 'Industries We Serve — Fonedialer',
  description: 'Specialized telecalling solutions for D2C e-commerce, real estate, healthcare, B2B SaaS, and automotive sectors.',
};

export default function IndustriesPage() {
  return (
    <div className="bg-[#F7F5F0]">
      <section className="bg-[#16283F] text-white py-16 sm:py-20 border-b border-[#2C476A]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="accent">Domain Expertise</Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-white">
            Tele-calling Tailored to Your Industry Dynamics
          </h1>
          <p className="text-base sm:text-lg text-[#DCE1E8]/90 max-w-3xl mx-auto leading-relaxed">
            Every sector has unique customer objections and sales lifecycles. Our callers are trained on industry-specific vocabulary and compliance requirements.
          </p>
        </div>
      </section>

      <IndustriesGrid />

      <section className="py-16 bg-[#111823] text-white text-center">
        <div className="max-w-3xl mx-auto px-4 space-y-6">
          <h2 className="text-3xl font-bold">Don't See Your Industry Listed?</h2>
          <p className="text-sm text-[#DCE1E8]/80">
            We customize telecalling workflows, pitch scripts, and caller training for unique niche markets across India and globally.
          </p>
          <Button href="/contact" variant="accent" size="lg">
            Discuss Your Custom Industry Campaign
          </Button>
        </div>
      </section>
    </div>
  );
}
