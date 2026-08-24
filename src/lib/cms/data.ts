import { createClient } from '@sanity/client';

export const sanityClient = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || 'fonedialer',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  useCdn: true,
  apiVersion: '2026-08-24',
});

export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  benefits: string[];
  deliverables: string[];
  metrics: { label: string; value: string }[];
  processSteps: { title: string; desc: string }[];
}

export interface PricingTier {
  id: string;
  name: string;
  price: string;
  period: string;
  workingDays: string;
  serviceHours: string;
  workingDaysWeek: string;
  crmAccess: boolean;
  callRecordingAccess: string;
  callingNumber: string;
  scriptProvidedBy: string;
  salesManagerMonitoring: boolean;
  language: string;
  holidayPolicy: string;
  isPopular?: boolean;
  ctaText: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  title: string;
  client: string;
  industry: string;
  metricHighlight: string;
  metricLabel: string;
  challenge: string;
  approach: string;
  result: string;
  testimonialQuote?: string;
  testimonialAuthor?: string;
  testimonialRole?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  industry: string;
  metric: string;
}

// Fallback Structured Data (Sanity Ready)
export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'outbound-telecalling',
    slug: 'outbound-telecalling',
    title: 'Outbound Telecalling & Telesales',
    shortDesc: 'Dedicated outbound sales agents driving high-intent lead qualification, prospect outreach, and deal closure.',
    fullDesc: 'Transform cold/warm prospect lists into active sales pipelines with trained outbound telecalling specialists. We handle prospect qualification, pitch delivery, objections management, and meeting scheduling.',
    iconName: 'PhoneCall',
    benefits: [
      'Dedicated trained sales caller seats',
      'Daily call logs and disposition reporting',
      'Custom pitch script design & objection handling',
      'Strict quality assurance & sales manager monitoring',
    ],
    deliverables: [
      'Direct call outreach (100–150 calls/agent/day)',
      'Verified lead qualification & tag assignment',
      'Daily CRM sync / structured report',
      'Weekly performance optimization reviews',
    ],
    metrics: [
      { label: 'Avg Lead Conversion Lift', value: '3.4x' },
      { label: 'Call Connect Rate', value: '68%' },
      { label: 'Weekly Call Volume', value: '10k+' },
    ],
    processSteps: [
      { title: 'Onboarding & Knowledge Transfer', desc: 'We absorb your product specifications, target customer persona, and key value props.' },
      { title: 'Scripting & QA Framework', desc: 'Crafting high-converting conversational scripts and setting baseline quality metrics.' },
      { title: 'Agent Assignment & Pilot', desc: 'Deploying dedicated Malayalam/English telecallers under active sales manager supervision.' },
      { title: 'Daily Reporting & Optimization', desc: 'Live reporting on dispositions, conversion rates, and script refinements.' },
    ],
  },
  {
    id: 'inbound-support',
    slug: 'inbound-support',
    title: 'Inbound Customer Support',
    shortDesc: 'Responsive inbound support handling customer inquiries, order updates, and technical troubleshooting.',
    fullDesc: 'Deliver professional, warm, and outcome-oriented customer service that boosts customer retention and lifetime value. Our agents handle call inquiries, WhatsApp support, and issue resolution with SLA tracking.',
    iconName: 'Headphones',
    benefits: [
      'Zero missed incoming customer calls',
      'Empathetic ticket resolution & escalation protocol',
      'CRM integration for instant customer lookup',
      'Bilingual support (Malayalam & English)',
    ],
    deliverables: [
      'Inbound voice support (10:00 AM – 6:00 PM IST)',
      'WhatsApp Business query resolution',
      'Call recording & QA monitoring',
      'Monthly customer satisfaction (CSAT) analytics',
    ],
    metrics: [
      { label: 'First Call Resolution', value: '91%' },
      { label: 'Average Response Time', value: '< 15s' },
      { label: 'Customer CSAT Score', value: '4.8/5' },
    ],
    processSteps: [
      { title: 'SLA Definition & SOP Mapping', desc: 'Documenting resolution workflows, escalation matrices, and FAQs.' },
      { title: 'Telecaller Training & Simulation', desc: 'Training agents on product policies, tone, and empathy benchmarks.' },
      { title: 'Channel Integration', desc: 'Hooking up virtual phone numbers and CRM support desks.' },
      { title: 'Continuous Quality Monitoring', desc: 'Sales managers sample recordings and optimize support efficiency.' },
    ],
  },
  {
    id: 'lead-generation',
    slug: 'lead-generation',
    title: 'Lead Generation & Appointment Setting',
    shortDesc: 'Fill your sales team’s calendars with qualified, high-intent B2B prospect meetings.',
    fullDesc: 'Stop wasting your senior sales executives time on cold outreach. Fonedialer pre-qualifies prospect interest and books confirmed discovery calls directly into your team calendars.',
    iconName: 'Target',
    benefits: [
      'Pre-qualified high-intent prospect appointments',
      'Customized B2B prospect targeting',
      'Calendar booking integration (Calendly/HubSpot)',
      'No-show reduction follow-up sequences',
    ],
    deliverables: [
      'B2B decision-maker outreach',
      'Prospect interest validation & budget checks',
      'Direct calendar invitation booking',
      'Briefing notes prior to booked call',
    ],
    metrics: [
      { label: 'Qualified Meetings / Mo', value: '120+' },
      { label: 'Meeting Attendance Rate', value: '88%' },
      { label: 'Cost Per Qualified Demo', value: '-45%' },
    ],
    processSteps: [
      { title: 'Ideal Customer Profile (ICP) Setup', desc: 'Defining decision-maker titles, company size, and geographic target.' },
      { title: 'Outreach & Prospecting', desc: 'Telecallers engage leads, pitch key value statements, and validate budget.' },
      { title: 'Calendar Slot Booking', desc: 'Booking confirmed meetings directly onto your sales team calendar.' },
      { title: 'Pre-Call Reminder Sequence', desc: 'WhatsApp & call confirmation 24h before meeting to ensure high attendance.' },
    ],
  },
  {
    id: 'telemarketing-campaigns',
    slug: 'telemarketing-campaigns',
    title: 'Telemarketing & Seasonal Campaigns',
    shortDesc: 'High-volume promotional outreach for product launches, event invites, and offer announcements.',
    fullDesc: 'Execute targeted, high-impact telephone campaigns to announce new product offers, drive festival sales, invite attendees to events, or re-engage dormant customer databases.',
    iconName: 'Megaphone',
    benefits: [
      'Rapid campaign setup & execution',
      'Bulk call handling with clear analytics',
      'Segmented customer database outreach',
      'WhatsApp campaign follow-up link',
    ],
    deliverables: [
      'High-volume outbound campaign calls',
      'Real-time customer interest tracking',
      'Automated WhatsApp offer messaging',
      'Post-campaign conversion analytics',
    ],
    metrics: [
      { label: 'Campaign Reach / Week', value: '25k+' },
      { label: 'Immediate Offer Take-up', value: '22%' },
      { label: 'Dormant Lead Reactivation', value: '18%' },
    ],
    processSteps: [
      { title: 'Campaign Objective & Offer Setup', desc: 'Formulating clear campaign hooks, timing, and audience segment.' },
      { title: 'Rapid Execution Launch', desc: 'Mobilizing telecallers for intensive campaign outreach.' },
      { title: 'Real-time Disposition Tracking', desc: 'Categorizing responses into immediate buyers, follow-ups, and opt-outs.' },
      { title: 'Final Campaign Audit', desc: 'Comprehensive report on total reach, conversion cost, and ROI.' },
    ],
  },
];

export const PRICING_TIERS_DATA: PricingTier[] = [
  {
    id: 'plan-10-days',
    name: '10 Days Plan',
    price: '₹2,900',
    period: '10 working days',
    workingDays: '10 working days',
    serviceHours: '10:00 AM – 6:00 PM IST',
    workingDaysWeek: 'Monday – Saturday',
    crmAccess: false,
    callRecordingAccess: 'Selected recordings on request',
    callingNumber: 'Shared Fonedialer number',
    scriptProvidedBy: 'By Fonedialer',
    salesManagerMonitoring: true,
    language: 'Malayalam',
    holidayPolicy: 'Carried forward to next working day',
    ctaText: 'Get Started with 10 Days',
  },
  {
    id: 'plan-20-days',
    name: '20 Days Plan',
    price: '₹5,600',
    period: '20 working days',
    workingDays: '20 working days',
    serviceHours: '10:00 AM – 6:00 PM IST',
    workingDaysWeek: 'Monday – Saturday',
    crmAccess: false,
    callRecordingAccess: 'Selected recordings on request',
    callingNumber: 'Shared Fonedialer number',
    scriptProvidedBy: 'By Fonedialer',
    salesManagerMonitoring: true,
    language: 'Malayalam',
    holidayPolicy: 'Carried forward to next working day',
    ctaText: 'Get Started with 20 Days',
  },
  {
    id: 'plan-30-days',
    name: '30 Days Plan',
    price: '₹8,500',
    period: '30 working days',
    workingDays: '30 working days',
    serviceHours: '10:00 AM – 6:00 PM IST',
    workingDaysWeek: 'Monday – Saturday',
    crmAccess: true,
    callRecordingAccess: 'Full access via CRM',
    callingNumber: 'Dedicated virtual number',
    scriptProvidedBy: 'By Fonedialer',
    salesManagerMonitoring: true,
    language: 'Malayalam',
    holidayPolicy: 'Carried forward to next working day',
    isPopular: true,
    ctaText: 'Start 30-Day Plan (Recommended)',
  },
];

export const CASE_STUDIES_DATA: CaseStudy[] = [
  {
    id: 'd2c-e-commerce-tele-sales',
    slug: 'd2c-e-commerce-tele-sales',
    title: '3.4x Revenue Lift for Regional D2C Brand via Outbound Telesales',
    client: 'Malabar Wellness D2C',
    industry: 'Retail & E-commerce',
    metricHighlight: '+240%',
    metricLabel: 'Monthly Telesales Revenue',
    challenge: 'High abandoned cart rates and low repeat order frequency on digital ads alone. In-house staff lacked systematic call follow-up capabilities.',
    approach: 'Fonedialer deployed a dedicated 30-day outbound team with CRM access to follow up with high-intent cart abandoners within 30 minutes of drop-off.',
    result: 'Achieved a 68% call connect rate and converted 28% of abandoned cart calls into completed sales, generating ₹4.2L additional monthly revenue.',
    testimonialQuote: 'Fonedialer transformed our abandoned carts from lost leads into our single highest ROI sales channel. The dedicated Virtual Number and CRM recording access gave us complete visibility.',
    testimonialAuthor: 'Rajesh Nair',
    testimonialRole: 'Founder & Managing Director',
  },
  {
    id: 'real-estate-appointment-setting',
    slug: 'real-estate-appointment-setting',
    title: '140+ Site Visit Appointments Booked Monthly for Builder',
    client: 'Apex Living Projects',
    industry: 'Real Estate',
    metricHighlight: '140+',
    metricLabel: 'Qualified Site Visits / Mo',
    challenge: 'Digital lead campaigns generated hundreds of inquiries, but internal sales agents spent 80% of their day dialing unvetted leads instead of showing properties.',
    approach: 'Fonedialer handled all initial inquiry vetting, qualification against buyer budget, and calendar booking for on-site property tours.',
    result: 'Increased site visit attendance by 88% and freed up internal sales leads to close 14 premium apartment sales in 60 days.',
    testimonialQuote: 'Our sales team went from spending hours cold calling to walking qualified buyers through site visits every day. Fonedialer paid for itself within week two.',
    testimonialAuthor: 'Anil Kumar',
    testimonialRole: 'VP Sales & Growth',
  },
  {
    id: 'healthcare-inbound-support',
    slug: 'healthcare-inbound-support',
    title: 'Zero Missed Appointments & 98% CSAT for Medical Clinic Chain',
    client: 'HealLife Care Clinics',
    industry: 'Healthcare & Wellness',
    metricHighlight: '98%',
    metricLabel: 'Customer CSAT Score',
    challenge: 'Reception staff overwhelmed during peak morning hours resulting in 35% unanswered patient inquiry calls.',
    approach: 'Fonedialer integrated inbound support & WhatsApp helpline handling appointment booking, doctor availability checks, and diagnostic report follow-ups.',
    result: 'Reduced patient wait times to under 15 seconds, eliminated missed calls completely, and boosted clinic appointment bookings by 42%.',
    testimonialQuote: 'Patient satisfaction jumped immediately. Having Malayalam-speaking callers who are patient and structured created immense trust with our patients.',
    testimonialAuthor: 'Dr. Priya Menon',
    testimonialRole: 'Operations Lead',
  },
];

export const TESTIMONIALS_DATA: Testimonial[] = [
  {
    id: 't1',
    quote: 'Fonedialer handles our customer outreach with complete professionalism. Their daily reporting and sales manager supervision give us absolute confidence.',
    author: 'Siddharth V.',
    role: 'Co-Founder',
    company: 'Keralam Organics',
    industry: 'D2C Retail',
    metric: '3.2x Conversion Boost',
  },
  {
    id: 't2',
    quote: 'The 30-Day plan with CRM access and dedicated virtual number gave us enterprise-grade reporting at a fraction of in-house team costs.',
    author: 'Deepak Pillai',
    role: 'Head of Marketing',
    company: 'Vanguard Auto',
    industry: 'Automotive & Fleet',
    metric: '100% Call Recording Access',
  },
  {
    id: 't3',
    quote: 'Reliable, transparent, and outcome-focused. Their telecallers speak fluent Malayalam and understand regional customer dynamics.',
    author: 'Kavitha Nambiar',
    role: 'Operations Director',
    company: 'Cochin Tech Solutions',
    industry: 'B2B Services',
    metric: '40% Lead Lift',
  },
];
