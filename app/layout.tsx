import "./globals.css";
import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Manrope } from "next/font/google";

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "StreamVibe",
  description: "StreamVibe Media Streaming",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased h-screen`}>
        <Header />
        
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
