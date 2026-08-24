'use client';

import Link from 'next/link';
import { ArrowRight, Building, GraduationCap, Stethoscope, Car, Briefcase } from 'lucide-react';
import TypewriterHeading from '@/components/animation/TypewriterHeading';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';

const INDUSTRIES = [
  {
    title: 'Real Estate',
    desc: 'Enquiry → Qualification → Site Visit Booking',
    icon: Building,
  },
  {
    title: 'Education',
    desc: 'Course Enquiry → Counselling → Admission Appointment',
    icon: GraduationCap,
  },
  {
    title: 'Healthcare',
    desc: 'Patient Enquiry → Requirement Audit → Consultation',
    icon: Stethoscope,
  },
  {
    title: 'Automotive',
    desc: 'Vehicle Enquiry → Qualification → Showroom Test Drive',
    icon: Car,
  },
  {
    title: 'Professional Services',
    desc: 'Inquiry → Discovery → Client Strategy Consultation',
    icon: Briefcase,
  },
];

export default function IndustriesGrid() {
  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]" id="industries">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#162A45]/10 text-[#162A45] font-mono text-xs font-bold rounded-full uppercase tracking-wider">
            Industry Focus
          </span>
          <TypewriterHeading
            text="Built for Businesses Generating Active Enquiries"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#162A45] tracking-tight block"
          />
          <p className="text-base text-[#475569] font-medium leading-relaxed">
            See how FoneDialer maps lead qualification workflows across key industry sectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {INDUSTRIES.map((ind, idx) => {
            const IconComponent = ind.icon;
            return (
              <ScrollSlideCard key={idx} index={idx}>
                <Link
                  href="/contact"
                  className="bg-white p-7 rounded-2xl border border-[#E2E8F0] shadow-soft hover:border-[#162A45] hover:shadow-elevated transition-all duration-300 flex flex-col justify-between group h-full"
                >
                  <div>
                    <div className="p-3 bg-[#F1F5F9] text-[#162A45] rounded-xl w-fit mb-5 group-hover:bg-[#162A45] group-hover:text-white transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-extrabold text-[#162A45] mb-2 group-hover:text-[#2563EB] transition-colors">
                      {ind.title}
                    </h3>
                    <p className="text-xs text-[#64748B] font-mono font-medium leading-relaxed">
                      {ind.desc}
                    </p>
                  </div>

                  <div className="pt-6 mt-6 border-t border-[#E2E8F0] flex items-center justify-between text-xs font-extrabold text-[#162A45] group-hover:text-[#2563EB]">
                    <span>Discuss Industry Workflow</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              </ScrollSlideCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}
