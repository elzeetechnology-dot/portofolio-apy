import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/layout/ScrollProgress";

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
  title: "Ari Puja Yuwana | IT System Specialist",

  description:
    "Building Reliable Systems, Infrastructure & Digital Solutions",

  keywords: [
    "IT System Specialist",
    "IT Support",
    "System Administrator",
    "Infrastructure Engineer",
    "Portfolio",
    "Ari Puja Yuwana",
  ],

  openGraph: {
    title: "Ari Puja Yuwana | IT System Specialist",
    description:
      "Building Reliable Systems, Infrastructure & Digital Solutions",
    images: ["/og-image.jpg"],
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
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-background text-foreground">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />

          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}