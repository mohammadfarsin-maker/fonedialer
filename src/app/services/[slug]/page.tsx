import { notFound } from 'next/navigation';
import Link from 'next/link';
import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Illustration from '@/components/ui/Illustration';
import { SERVICES_DATA } from '@/lib/cms/data';
import { CheckCircle2, FileCheck } from 'lucide-react';
import ContactForm from '@/components/contact/ContactForm';

export async function generateStaticParams() {
  return SERVICES_DATA.map((service) => ({
    slug: service.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.title} — Fonedialer`,
    description: service.shortDesc,
  };
}

export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const serviceItem = SERVICES_DATA.find((s) => s.slug === slug);

  if (!serviceItem) {
    notFound();
  }

  const service = serviceItem;

  return (
    <div className="bg-[#F7F5F0]">
      {/* Service Hero Header */}
      <section className="bg-white text-[#1A1F26] py-16 sm:py-24 border-b border-[#DCE1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <Link href="/services" className="text-xs font-bold uppercase tracking-wider text-[#2C476A] hover:underline">
                ← Back to All Services
              </Link>
              <h1 className="text-4xl sm:text-5xl font-black leading-tight text-[#2C476A]">
                {service.title}
              </h1>
              <p className="text-lg text-[#5C6B7D] leading-relaxed max-w-2xl">
                {service.fullDesc}
              </p>

              {/* Metrics strip */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-[#DCE1E8]">
                {service.metrics.map((m, idx) => (
                  <div key={idx}>
                    <div className="text-2xl sm:text-3xl font-extrabold text-[#2C476A]">{m.value}</div>
                    <div className="text-xs text-[#5C6B7D] uppercase font-bold">{m.label}</div>
                  </div>
                ))}
              </div>

              <div className="pt-4 flex flex-wrap gap-4">
                <Button href="#service-contact" variant="accent" size="lg">
                  Request {service.title} Quote
                </Button>
                <Button href="/pricing" variant="outline" size="lg">
                  View 10/20/30-Day Pricing
                </Button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-[#16283F] p-4 rounded-3xl border border-[#2C476A] shadow-2xl">
                <Illustration type={service.slug as any} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Deliverables & Process Section */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        {/* Deliverables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="bg-white p-8 sm:p-10 rounded-3xl border border-[#DCE1E8] shadow-lg space-y-6">
            <h3 className="text-2xl font-bold text-[#2C476A] flex items-center gap-2">
              <FileCheck className="w-6 h-6 text-[#E8A33D]" />
              <span>What Is Included In Every Campaign</span>
            </h3>
            <p className="text-sm text-[#5C6B7D]">
              Fonedialer handles the operational weight of recruiting, training, monitoring, and reporting on your telecalling seat.
            </p>
            <ul className="space-y-4">
              {service.deliverables.map((d, idx) => (
                <li key={idx} className="flex items-start gap-3 text-sm text-[#1A1F26]">
                  <CheckCircle2 className="w-5 h-5 text-[#2C476A] shrink-0 mt-0.5" />
                  <span>{d}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Service Process */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-[#2C476A]">
              Execution Process Specific to {service.title}
            </h3>
            <div className="space-y-4">
              {service.processSteps.map((step, idx) => (
                <div key={idx} className="bg-white p-5 rounded-2xl border border-[#DCE1E8] flex gap-4 shadow-sm">
                  <div className="w-9 h-9 rounded-xl bg-[#2C476A] text-white font-black text-sm flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-[#1A1F26] text-base">{step.title}</h4>
                    <p className="text-xs text-[#5C6B7D] mt-1 leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Form Section */}
        <div id="service-contact" className="pt-10 border-t border-[#DCE1E8]">
          <SectionHeader
            title={`Get Started with ${service.title}`}
            subtitle="Fill out the form below to receive a custom seat allocation, script sample, and pricing breakdown."
          />
          <div className="max-w-3xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
}
