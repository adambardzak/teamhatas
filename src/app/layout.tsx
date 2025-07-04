import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Montserrat } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";
import CookieConsent from "../components/CookieConsent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["400", "500", "600", "700", "800"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-barlow-condensed",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Víta Hatas - Osobní trenér & Online Coach",
  description:
    "Profesionální fitness trenér nabízející online coaching, osobní tréninky, jídelníčky a tréninkové plány na míru.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="cs" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${montserrat.variable} ${barlowCondensed.variable} antialiased text-white`}
      >
        {children}
        <CookieConsent />
      </body>
    </html>
  );
}
