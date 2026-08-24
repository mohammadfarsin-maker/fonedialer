import { PhoneCall, TrendingUp, ShieldCheck, Users, CheckCircle } from 'lucide-react';

const STATS = [
  { value: '1.2M+', label: 'Total Calls Dialed', desc: 'Outbound & inbound outreach' },
  { value: '3.4x', label: 'Conversion Lift', desc: 'Vs unmanaged cold calling' },
  { value: '98%', label: 'QA Audit Score', desc: 'Sales Manager reviewed' },
  { value: '150+', label: 'Active Clients', desc: 'Regional D2C & B2B brands' },
];

const CLIENT_BRANDS = [
  'Malabar Wellness',
  'Apex Living',
  'Keralam Organics',
  'HealLife Clinics',
  'Cochin Tech Solutions',
  'Vanguard Auto',
];

export default function TrustBar() {
  return (
    <section className="bg-white py-14 border-b border-[#E2E8F0] text-[#0F172A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        {/* Metric Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS.map((stat, idx) => (
            <div
              key={idx}
              className="bg-[#F8FAFC] p-6 rounded-2xl border border-[#E2E8F0] hover:border-[#162A45] hover:shadow-soft transition-all duration-300 group"
            >
              <div className="text-3xl sm:text-4xl font-black text-[#162A45] group-hover:text-[#E8A33D] transition-colors mb-2">
                {stat.value}
              </div>
              <div className="text-sm font-bold text-[#0F172A]">{stat.label}</div>
              <div className="text-xs text-[#64748B] mt-1 font-medium">{stat.desc}</div>
            </div>
          ))}
        </div>

        {/* Client Marquee Strip */}
        <div className="pt-4 border-t border-[#E2E8F0] flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold text-[#162A45] tracking-wider uppercase shrink-0">
            <CheckCircle className="w-4 h-4 text-[#20cf6b]" />
            <span>Trusted By Leading Regional Enterprises:</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            {CLIENT_BRANDS.map((brand, idx) => (
              <span
                key={idx}
                className="text-xs font-bold text-[#475569] bg-[#F8FAFC] px-3.5 py-1.5 rounded-full border border-[#E2E8F0]"
              >
                {brand}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
