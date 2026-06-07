import type { Metadata } from "next";
import "./globals.css";

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
    <html lang="en" data-scroll-behavior="smooth" className="h-full antialiased">

      <body className="min-h-full flex flex-col">
        {children}
      </body>
    </html>
  );
}
