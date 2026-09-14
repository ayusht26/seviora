import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Seviora Pharma Private Limited | Quality Pharmaceuticals & Medical Goods",
  description:
    "Seviora Pharma Private Limited – A trusted name in pharmaceuticals, medical & orthopaedic goods. Committed to health, innovation, and quality. Based in Lucknow, India.",
  keywords: "Seviora Pharma, pharmaceuticals, medical goods, orthopaedic, Lucknow, India, healthcare",
  openGraph: {
    title: "Seviora Pharma Private Limited",
    description: "Trusted pharmaceuticals and medical goods provider in India.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${outfit.variable} ${inter.variable}`} suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
