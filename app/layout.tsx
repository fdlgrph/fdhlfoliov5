import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import { brand } from "@/lib/data";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const siteUrl = "https://fadhilgraphy.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: `${brand.name} — ${brand.handle} | Creative Director & Visual Producer`,
    template: `%s | ${brand.handle}`,
  },
  description: brand.intro,
  keywords: [
    "Fadhil Graphy",
    "Ahmad Nur Fadhil",
    "Visivine.id",
    "photographer Klaten",
    "videographer Yogyakarta",
    "web developer Solo",
    "brand identity designer",
  ],
  openGraph: {
    title: `${brand.name} — ${brand.handle}`,
    description: brand.intro,
    url: siteUrl,
    siteName: brand.handle,
    images: [{ url: brand.photoUrl, width: 1200, height: 1200 }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${brand.name} — ${brand.handle}`,
    description: brand.intro,
    images: [brand.photoUrl],
  },
  alternates: {
    canonical: siteUrl,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans antialiased bg-ink text-paper">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:bg-accent focus:text-ink focus:px-4 focus:py-2 focus:rounded-md"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
