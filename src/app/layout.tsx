import type { Metadata } from "next";
import { Urbanist, Geist_Mono } from "next/font/google";
import "./globals.css";

const urbanist = Urbanist({
  variable: "--font-urbanist",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Wisnu Andika Portfolio",
  description: "Portfolio of Wisnu, a Creative Engineer specializing in modern, high-performance web and mobile development.",
  keywords: ["Wisnu", "Portfolio", "Creative Engineer", "Frontend Developer", "React", "Next.js"],
  authors: [{ name: "Wisnu" }],
  creator: "Wisnu",
  icons: {
    icon: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231B3C53'/><text x='50%' y='65%' font-size='70' text-anchor='middle' fill='%23F9F3EF' font-family='Inter'>W</text></svg>",
    apple: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%231B3C53'/><text x='50%' y='65%' font-size='70' text-anchor='middle' fill='%23F9F3EF' font-family='Inter'>W</text></svg>",
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
      className={`${urbanist.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >


      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
