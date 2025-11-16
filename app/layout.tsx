import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const institute = {
  name: "Harvard University",
  location: "Cambridge, Massachusetts",
  link: "https://www.harvard.edu/",
}

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css"/>
      </head>
      <body className={`${inter.variable} antialiased`}>
        <div className="screen">
          <div className="ps-6 pe-6 py-9 bg-[var(--colorA)] h-screen sticky top-0 hidden md:block">
            <p className="text-4xl">
              <b>
                <a href={ institute.link } className="no-underline hover:no-underline" target="_blank">
                  { institute.name }
                </a>
              </b>
              <br/> 
              { institute.location }
            </p>
          </div>
          <div className="ps-6 pe-6 py-9 bg-white">
            <h1>{children}</h1>
          </div>
          <div className="ps-6 pe-6 py-9 bg-white h-screen sticky top-0 hidden lg:block">
          </div>
        </div>
      </body>
    </html>
  );
}
