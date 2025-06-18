import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { HeroWrapper } from "@/components/HeroWrapper";
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
  title: "Gordon's Home Page",
  description: "Developed by Gordon Wong",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <HeroWrapper>{children}</HeroWrapper>
      </body>
    </html>
  );
}
