import SectionHeader from '@/components/ui/SectionHeader';
import { ShieldCheck, Lock, Server, FileText } from 'lucide-react';

export const metadata = {
  title: 'Data Security & QA Standards — Fonedialer',
  description: 'Learn how Fonedialer protects client customer data with encrypted storage, NDA protocols, and CRM security.',
};

export default function DataSecurityPage() {
  return (
    <div className="bg-[#F7F5F0] py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <SectionHeader
          badge="Enterprise Trust"
          title="Data Security & Quality Control Standards"
          subtitle="How Fonedialer safeguards your lead database, customer conversations, and internal brand voice."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white p-8 rounded-2xl border border-[#DCE1E8] shadow-md space-y-4">
            <Lock className="w-8 h-8 text-[#E8A33D]" />
            <h3 className="text-xl font-bold text-[#1A1F26]">Encrypted Lead Storage</h3>
            <p className="text-sm text-[#5C6B7D] leading-relaxed">
              All prospect databases and phone numbers uploaded to Fonedialer are stored in SSL-encrypted cloud environments with strict role-based access controls.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#DCE1E8] shadow-md space-y-4">
            <FileText className="w-8 h-8 text-[#E8A33D]" />
            <h3 className="text-xl font-bold text-[#1A1F26]">Binding Non-Disclosure Agreements</h3>
            <p className="text-sm text-[#5C6B7D] leading-relaxed">
              Every telecaller and Sales Manager signs binding non-disclosure agreements prohibiting unauthorized copying, saving, or exporting of client data.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#DCE1E8] shadow-md space-y-4">
            <Server className="w-8 h-8 text-[#E8A33D]" />
            <h3 className="text-xl font-bold text-[#1A1F26]">Secure CRM Integration</h3>
            <p className="text-sm text-[#5C6B7D] leading-relaxed">
              Our 30-Day plan hooks directly into your CRM (HubSpot, Zoho, Salesforce) via secure API webhooks without exposing master admin credentials.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl border border-[#DCE1E8] shadow-md space-y-4">
            <ShieldCheck className="w-8 h-8 text-[#E8A33D]" />
            <h3 className="text-xl font-bold text-[#1A1F26]">Daily QA Auditing</h3>
            <p className="text-sm text-[#5C6B7D] leading-relaxed">
              Dedicated Sales Managers audit call recordings daily to enforce script compliance, polite caller tone, and accurate disposition tagging.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
