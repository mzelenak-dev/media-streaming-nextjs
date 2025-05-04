import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Media Streaming App",
  description: "Media Streaming App using Next.js v15",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className='antialiased'>
        {children}
      </body>
    </html>
  );
}
