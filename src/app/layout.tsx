import type { Metadata } from 'next';
import { Hanken_Grotesk, Libre_Caslon_Text } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/animation/SmoothScrollProvider';
import QueryProvider from '@/components/providers/QueryProvider';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import FloatingCTABar from '@/components/layout/FloatingCTABar';
import ContactModalPopup from '@/components/contact/ContactModalPopup';

const hankenGrotesk = Hanken_Grotesk({
  subsets: ['latin'],
  variable: '--font-hanken',
  display: 'swap',
  weight: ['400', '500', '600', '700'],
});

const libreCaslon = Libre_Caslon_Text({
  subsets: ['latin'],
  variable: '--font-caslon',
  display: 'swap',
  weight: ['400', '700'],
});

export const metadata: Metadata = {
  title: 'Fone Dialer - Telecalling Services',
  description:
    'Fone Dialer - Premium Telecalling Solutions for the Modern Enterprise. We manage your calls, follow-ups, and lead generation so you can focus on growth.',
  keywords: [
    'telecalling services',
    'lead follow-up',
    'outbound call handling',
    'appointment scheduling',
    'customer support outsourcing',
  ],
  authors: [{ name: 'Greentiq Innovations Pvt. Ltd.' }],
  openGraph: {
    title: 'Fone Dialer - Telecalling Services',
    description:
      'Connecting Leads. Creating Opportunities. Premium Telecalling Solutions for the Modern Enterprise.',
    url: 'https://fonedialer.com',
    siteName: 'Fone Dialer',
    images: [
      {
        url: '/image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fone Dialer Customer Service Representative',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: '/logo.jpeg',
    shortcut: '/logo.jpeg',
    apple: '/logo.jpeg',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Fone Dialer',
    url: 'https://fonedialer.com',
    logo: 'https://fonedialer.com/logo.jpeg',
    description:
      'Fone Dialer is a managed telecalling service powered by Greentiq Innovations Pvt. Ltd., designed to help businesses efficiently manage lead calling, follow-ups, and customer engagement.',
    telephone: '+919495588907',
    email: 'business@fonedialer.com',
  };

  return (
    <html lang="en" className={`${hankenGrotesk.variable} ${libreCaslon.variable}`}>
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="bg-[#fcf9f8] text-[#1b1c1c] font-sans antialiased overflow-x-hidden selection:bg-[#133052] selection:text-white flex flex-col justify-between min-h-screen">
        <QueryProvider>
          <SmoothScrollProvider>
            <Header />
            <main className="pt-20 flex-grow">{children}</main>
            <Footer />
            <FloatingCTABar />
            <ContactModalPopup />
          </SmoothScrollProvider>
        </QueryProvider>
      </body>
    </html>
  );
}
