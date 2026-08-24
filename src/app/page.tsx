import Hero from '@/components/home/Hero';
import ServicesSection from '@/components/home/ServicesSection';
import CaseStudiesSection from '@/components/home/CaseStudiesSection';
import PricingTable from '@/components/pricing/PricingTable';
import ContactForm from '@/components/contact/ContactForm';

export default function HomePage() {
  return (
    <>
      {/* 1. Hero Section (Split Screen) */}
      <Hero />

      {/* 2. Core Services (Bento Grid) */}
      <ServicesSection />

      {/* 3. About Us Section */}
      <CaseStudiesSection />

      {/* 4. Simple & Flexible Pricing */}
      <PricingTable />

      {/* 5. Contact Us Section */}
      <ContactForm />
    </>
  );
}
