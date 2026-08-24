import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import Badge from '@/components/ui/Badge';

export const metadata = {
  title: 'Case Studies & Client Results',
  description: 'Explore real case studies showing how Fonedialer delivered 3.4x lead conversion lift and 140+ booked site visits for clients.',
};

export default function CaseStudiesPage() {
  return (
    <div className="bg-white">
      <section className="bg-[#F7F5F0] text-[#1A1F26] py-16 sm:py-20 border-b border-[#DCE1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="primary">Proven Proof Points</Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-[#2C476A]">
            Client Success Stories & Performance Metrics
          </h1>
          <p className="text-base sm:text-lg text-[#5C6B7D] max-w-3xl mx-auto leading-relaxed">
            See how regional D2C brands, real estate developers, and healthcare clinics scale their tele-sales and support operations with Fonedialer.
          </p>
        </div>
      </section>

      <CaseStudiesSection />
    </div>
  );
}
