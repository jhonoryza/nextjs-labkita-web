import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transition";
import { ThemeProvider } from "@/components/theme-provider";

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://labkita.my.id"),
  title: "Labkita",
  description: "Labkita Web",
  icons: {
    icon: "/favicon.ico",
    apple: "/logo-180.png",
    shortcut: "/logo-32.png",
  },
  openGraph: {
    images: [{ url: "/logo-512.png" }],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const currentYear = new Date().getFullYear();
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('theme');var d=document.documentElement;if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme:dark)').matches)){d.classList.add('dark')}}catch(e){}})()`,
          }}
        />
        {/* Google tag (gtag.js) */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-MLNBBXYMKC" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', 'G-MLNBBXYMKC');`,
          }}
        />
      </head>
      <body
        className={`${openSans.variable} antialiased min-h-screen bg-background flex flex-col`}
      >
        <ThemeProvider>
          <Header />
          <PageTransition>{children}</PageTransition>
          <Footer currentYear={currentYear} />
        </ThemeProvider>
      </body>
    </html>
  );
}
