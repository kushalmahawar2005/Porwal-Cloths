import type { Metadata } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Porwal Clothes — Wholesale Men's Readymade Garments",
  description:
    "Porwal Clothes — premium wholesale supplier of men's shirts, t-shirts, lowers, jeans and readymade garments. Pan-India delivery, flexible MOQ, manufacturer-direct pricing.",
  keywords: [
    "wholesale garments",
    "men's readymade",
    "wholesale shirts",
    "wholesale jeans",
    "bulk clothing",
    "Porwal Clothes",
    "Rajasthan wholesale",
  ],
  openGraph: {
    title: "Porwal Clothes — Wholesale Men's Readymade Garments",
    description:
      "Premium wholesale supplier of men's shirts, t-shirts, lowers, jeans and readymade garments.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} antialiased`}
    >
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
