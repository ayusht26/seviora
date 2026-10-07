import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import { Header, Footer } from "@/components/site";

export const metadata: Metadata = {
  metadataBase: new URL("https://seviorapharma.com"),
  title: "Seviora Pharma — Quality Medicines & Medical Supplies, Lucknow",
  description:
    "Seviora Pharma is a trusted Lucknow-based pharmaceutical company delivering quality medicines, medical goods and solutions to healthcare providers.",
  keywords:
    "Seviora Pharma, quality medicines, medical consumables, diagnostics, institutional supply, Lucknow, ISO 9001:2015",
  openGraph: {
    title: "Seviora Pharma — Trusted Pharmaceutical Partner",
    description:
      "Quality medicines, medical goods and solutions for healthcare providers, from Lucknow.",
    type: "website",
    siteName: "Seviora Pharma",
  },
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400..700&family=Sora:wght@400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-N37SYQ2NCE"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-N37SYQ2NCE');
          `}
        </Script>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
