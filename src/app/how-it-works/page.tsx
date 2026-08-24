import SectionHeader from '@/components/ui/SectionHeader';
import Button from '@/components/ui/Button';
import Badge from '@/components/ui/Badge';
import Illustration from '@/components/ui/Illustration';
import { UserCheck, FileText, Rocket, BarChart3, ShieldCheck, Lock, Eye, Headphones } from 'lucide-react';

export const metadata = {
  title: 'How It Works & Quality Assurance Process',
  description: 'Learn how Fonedialer handles telecaller onboarding, script formulation, active sales manager QA, and real-time CRM reporting.',
};

export default function HowItWorksPage() {
  return (
    <div className="bg-[#F7F5F0]">
      {/* Header */}
      <section className="bg-white text-[#1A1F26] py-16 sm:py-24 border-b border-[#DCE1E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <Badge variant="primary">Transparent Tele-calling Operations</Badge>
          <h1 className="text-4xl sm:text-5xl font-black text-[#2C476A]">
            How Fonedialer Guarantees Quality & Conversions
          </h1>
          <p className="text-base sm:text-lg text-[#5C6B7D] max-w-3xl mx-auto leading-relaxed font-normal">
            We don’t just hand over phone numbers to unmonitored callers. Fonedialer provides a structured, 4-phase campaign lifecycle with active Sales Manager oversight and complete data privacy.
          </p>
        </div>
      </section>

      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Step-by-Step Lifecycle Deep Dive */}
        <div className="space-y-12">
          <SectionHeader
            badge="Campaign Lifecycle"
            title="Step-by-Step From Intake to Live Dialing"
            subtitle="How we get your telecalling team live in under 48 hours."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-[#DCE1E8] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2C476A] text-white font-black text-lg flex items-center justify-center">
                01
              </div>
              <h3 className="text-xl font-bold text-[#2C476A]">1. Discovery & Customer Persona Intake</h3>
              <p className="text-sm text-[#5C6B7D] leading-relaxed">
                We conduct a structured onboarding intake to define your Ideal Customer Profile (ICP), target geographic region, key value statements, common objections, and disposition tags.
              </p>
              <div className="text-xs text-[#2C476A] font-semibold bg-[#2C476A]/10 p-3 rounded-xl">
                Output: Campaign Blueprint & Caller Persona Brief
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DCE1E8] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2C476A] text-white font-black text-lg flex items-center justify-center">
                02
              </div>
              <h3 className="text-xl font-bold text-[#2C476A]">2. Scripting, Objection Prep & Agent Pairing</h3>
              <p className="text-sm text-[#5C6B7D] leading-relaxed">
                Our operations team writes high-converting conversational call flows in Malayalam or English. We assign callers trained in your specific industry.
              </p>
              <div className="text-xs text-[#2C476A] font-semibold bg-[#2C476A]/10 p-3 rounded-xl">
                Output: Approved Call Flow Script & Objection Matrix
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DCE1E8] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2C476A] text-white font-black text-lg flex items-center justify-center">
                03
              </div>
              <h3 className="text-xl font-bold text-[#2C476A]">3. Live Campaign Dialing & QA Monitoring</h3>
              <p className="text-sm text-[#5C6B7D] leading-relaxed">
                Dialing commences between 10:00 AM – 6:00 PM IST (Mon–Sat). Active Sales Managers monitor live calls, verify disposition accuracy, and provide real-time agent feedback.
              </p>
              <div className="text-xs text-[#2C476A] font-semibold bg-[#2C476A]/10 p-3 rounded-xl">
                Output: Daily Disposition Logs & Call Recordings
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-[#DCE1E8] shadow-md space-y-4">
              <div className="w-12 h-12 rounded-2xl bg-[#2C476A] text-white font-black text-lg flex items-center justify-center">
                04
              </div>
              <h3 className="text-xl font-bold text-[#2C476A]">4. CRM Sync & Weekly Strategy Reviews</h3>
              <p className="text-sm text-[#5C6B7D] leading-relaxed">
                On 30-Day plans, call dispositions, notes, and qualified lead status sync directly to your CRM. Weekly meetings review conversion rates and refine campaign pitch hooks.
              </p>
              <div className="text-xs text-[#2C476A] font-semibold bg-[#2C476A]/10 p-3 rounded-xl">
                Output: Weekly Performance Audit & Conversion Lift
              </div>
            </div>
          </div>
        </div>

        {/* Quality Assurance & Call Monitoring Standards */}
        <div className="bg-white text-[#1A1F26] rounded-3xl p-8 sm:p-12 border border-[#DCE1E8] shadow-xl space-y-8">
          <div className="max-w-3xl">
            <span className="text-xs font-bold text-[#2C476A] uppercase tracking-wider bg-[#2C476A]/10 px-3 py-1 rounded-full">
              Management Oversight
            </span>
            <h2 className="text-3xl font-black text-[#2C476A] mt-3">
              Our 3-Tier Quality Assurance System
            </h2>
            <p className="text-sm text-[#5C6B7D] mt-2">
              Why Fonedialer clients consistently see higher conversion rates than unmanaged call centers:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#DCE1E8] space-y-3">
              <Eye className="w-8 h-8 text-[#2C476A]" />
              <h4 className="font-bold text-[#2C476A] text-base">Active Manager Supervision</h4>
              <p className="text-xs text-[#5C6B7D] leading-relaxed">
                Sales managers monitor random live calls and review call duration benchmarks to prevent script deviations.
              </p>
            </div>
            <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#DCE1E8] space-y-3">
              <Headphones className="w-8 h-8 text-[#2C476A]" />
              <h4 className="font-bold text-[#2C476A] text-base">100% Call Recording Audit</h4>
              <p className="text-xs text-[#5C6B7D] leading-relaxed">
                Every call audio is recorded and sampled for QA scoring on professionalism, clarity, and objection resolution.
              </p>
            </div>
            <div className="bg-[#F7F5F0] p-6 rounded-2xl border border-[#DCE1E8] space-y-3">
              <Lock className="w-8 h-8 text-[#2C476A]" />
              <h4 className="font-bold text-[#2C476A] text-base">Enterprise Data Protection</h4>
              <p className="text-xs text-[#5C6B7D] leading-relaxed">
                Strict NDA, encrypted lead storage, and no unauthorized copying or sharing of your customer contacts.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
