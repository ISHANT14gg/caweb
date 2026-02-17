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

import { ClerkProvider } from '@clerk/nextjs'
import FloatingActions from '@/components/ui/FloatingActions';

// ... existing imports

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${poppins.variable} ${geistMono.variable} ${merriweather.variable} antialiased relative font-sans`}
        >
          {children}

          <FloatingActions />
        </body>
      </html>
    </ClerkProvider>
  );
}
