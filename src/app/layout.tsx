import type { Metadata } from "next";
import { Inter, Marcellus } from "next/font/google";
import { SmoothScrollProvider } from "@/components/smooth-scroll-provider";
import "./globals.css";

const brandFont = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-brand",
  display: "swap",
});

const bodyFont = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://zamandevelopers.com",
  ),
  title: "Zaman Developers | Isla Bay",
  description:
    "Zaman Developers introduces Isla Bay, ultra-luxury island living on Dubai Islands.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${brandFont.variable} ${bodyFont.variable} h-full antialiased`}
    >

      <body className="min-h-full flex flex-col">
        <SmoothScrollProvider />
        {children}
      </body>
    </html>
  );
}
