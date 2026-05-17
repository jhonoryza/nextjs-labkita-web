import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Labkita",
  description: "Labkita Web",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${openSans.variable} antialiased min-h-screen bg-background flex flex-col`}
      >
        <Header />
        <PageTransition>{children}</PageTransition>
        <Footer currentYear={currentYear} />
      </body>
    </html>
  );
}
