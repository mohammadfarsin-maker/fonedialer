'use client';

import { useState } from 'react';
import { UserCheck, FileText, Rocket, BarChart3, ShieldCheck } from 'lucide-react';
import TypewriterHeading from '@/components/animation/TypewriterHeading';
import ScrollSlideCard from '@/components/animation/ScrollSlideCard';

const PROCESS_STEPS = [
  {
    num: '01',
    title: 'Intake & Campaign Setup',
    desc: 'We map your target customer persona, key pitch statements, objection matrix, and lead intake rules in a structured 60-minute session.',
    icon: UserCheck,
    badge: 'Phase 1 • Intake',
    detail: 'Output: Approved Call Flow Brief & Script Baseline',
  },
  {
    num: '02',
    title: 'Scripting & Caller Training',
    desc: 'Our operations team drafts high-converting scripts in Malayalam or English and pairs dedicated telecallers trained in your industry.',
    icon: FileText,
    badge: 'Phase 2 • Training',
    detail: 'Output: Script Roleplay Audit & Agent Certification',
  },
  {
    num: '03',
    title: 'Live Dialing & QA Oversight',
    desc: 'Dialing commences (10:00 AM – 6:00 PM IST, Mon–Sat) with active Sales Manager monitoring, call recordings, and disposition logging.',
    icon: Rocket,
    badge: 'Phase 3 • Execution',
    detail: 'Output: Real-Time Dialing & 100% QA Audio Auditing',
  },
  {
    num: '04',
    title: 'CRM Lead Sync & ROI Auditing',
    desc: 'On 30-Day plans, leads and audio recordings sync directly to your CRM dashboard. Weekly strategy sessions refine conversion hooks.',
    icon: BarChart3,
    badge: 'Phase 4 • Optimization',
    detail: 'Output: Daily Disposition Reports & Weekly ROI Audit',
  },
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);
  const currentStep = PROCESS_STEPS[activeStep];
  const IconComponent = currentStep.icon;

  return (
    <section className="py-20 sm:py-28 bg-[#F8FAFC] border-b border-[#E2E8F0]" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="inline-block px-3.5 py-1 bg-[#162A45]/10 text-[#162A45] font-mono text-xs font-bold rounded-full uppercase tracking-wider">
            Structured 4-Phase Lifecycle
          </span>
          <TypewriterHeading
            text="How FoneDialer Manages Your Tele-calling Engine"
            as="h2"
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#162A45] tracking-tight block"
          />
          <p className="text-base text-[#475569] font-medium leading-relaxed">
            From initial script formulation to live dialing and daily disposition reports, we make outsourcing your phone sales predictable and transparent.
          </p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Interactive Step Selector */}
          <ScrollSlideCard direction="left" index={0} className="lg:col-span-6 space-y-4">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  onMouseEnter={() => setActiveStep(idx)}
                  className={`p-6 rounded-2xl border transition-all duration-300 cursor-pointer flex items-center justify-between ${
                    isActive
                      ? 'bg-white border-[#162A45] shadow-soft scale-[1.02]'
                      : 'bg-white/60 border-[#E2E8F0] hover:bg-white'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-10 h-10 rounded-xl font-mono text-sm font-extrabold flex items-center justify-center transition-colors ${
                        isActive ? 'bg-[#162A45] text-white' : 'bg-[#F1F5F9] text-[#162A45]'
                      }`}
                    >
                      {step.num}
                    </div>
                    <div>
                      <h3 className="text-base font-extrabold text-[#162A45]">{step.title}</h3>
                      <div className="text-xs text-[#64748B] mt-0.5 font-medium">{step.badge}</div>
                    </div>
                  </div>

                  <span className={`text-xs font-mono font-bold ${isActive ? 'text-[#E8A33D]' : 'text-[#94A3B8]'}`}>
                    {isActive ? 'Active Phase →' : 'View'}
                  </span>
                </div>
              );
            })}
          </ScrollSlideCard>

          {/* Right Column: Dynamic Phase Preview Display */}
          <ScrollSlideCard direction="right" index={1} className="lg:col-span-6 bg-white p-8 rounded-3xl border border-[#E2E8F0] shadow-elevated space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F1F5F9]">
              <div className="flex items-center gap-3">
                <div className="p-3 bg-[#162A45] text-white rounded-xl">
                  <IconComponent className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-[#E8A33D] uppercase block">
                    {currentStep.badge}
                  </span>
                  <h4 className="text-xl font-extrabold text-[#162A45]">{currentStep.title}</h4>
                </div>
              </div>
              <span className="text-2xl font-black font-mono text-[#162A45]">{currentStep.num}</span>
            </div>

            <p className="text-sm text-[#475569] leading-relaxed font-medium">
              {currentStep.desc}
            </p>

            <div className="bg-[#F8FAFC] p-4 rounded-2xl border border-[#E2E8F0] text-xs font-bold text-[#162A45]">
              {currentStep.detail}
            </div>

            <div className="pt-2 flex items-center justify-between text-xs text-[#64748B] font-mono">
              <span className="flex items-center gap-1.5 text-[#20cf6b] font-bold">
                <ShieldCheck className="w-4 h-4" /> Manager Monitored
              </span>
              <span>10:00 AM – 6:00 PM IST (Mon–Sat)</span>
            </div>
          </ScrollSlideCard>
        </div>
      </div>
    </section>
  );
}
