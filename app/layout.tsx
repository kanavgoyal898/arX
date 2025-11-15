import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "arX Courserooms",
  description: "arX Courserooms",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <div className="screen">
          <div className="ps-6 pe-3 pt-9 bg-red-300 hidden md:block">
            <h1>Column 1</h1>
          </div>
          <div className="ps-3 pe-3 pt-9 bg-blue-300">
            <h1>Column 2</h1>
          </div>
          <div className="ps-3 pe-6 pt-9 bg-yellow-300 hidden lg:block">
            <h1>Column 3</h1>
          </div>
        </div>
      </body>
    </html>
  );
}
