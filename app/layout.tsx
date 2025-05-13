import type { Metadata } from "next";

import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

import { Inter } from "next/font/google";

import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "Calculator for all your needs",
  title: "Kalkulator",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
