import clsx from "clsx";
import "./globals.css";
import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { usePathname } from 'next/navigation'

const manrope = Manrope({
  subsets: ["latin"],
  weight: ['400', '700'],
  variable: "--font-manrope",
});

export const metadata: Metadata = {
  title: "Media Streaming App",
  description: "Media Streaming App using Next.js 15",
};

const pathname = usePathname();
const isHomepage = clsx({ homePage: pathname === '/' })

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${manrope.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
