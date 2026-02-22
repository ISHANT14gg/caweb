import type { Metadata } from "next";
import { Poppins, Geist_Mono, Merriweather } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const merriweather = Merriweather({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
});

export const metadata: Metadata = {
  title: "Jyoti Thakur Associates | GST, Tax & Business Advisory",
  description: "Structured GST, Income Tax, and statutory compliance services. Virtual CFO support, financial structuring, business advisory, and financial literacy initiatives.",
};


import FloatingActions from '@/components/ui/FloatingActions';

// ... existing imports

import { headers } from 'next/headers'

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nonceList = await headers();
  const nonce = nonceList.get('x-nonce') ?? undefined;

  return (
    <html lang="en" suppressHydrationWarning nonce={nonce}>
      <head>
        <meta property="csp-nonce" content={nonce} />
      </head>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} ${geistMono.variable} ${merriweather.variable} antialiased relative font-sans`}
      >
        {children}

        <FloatingActions /> {/* Vercel Access Retry */}
      </body>
    </html>
  );
}
