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
  metadataBase: new URL("https://your-domain.vercel.app"),

  title: {
    default: "Ari Puja Yuwana",
    template: "%s | Ari Puja Yuwana",
  },

  description:
    "IT System Specialist experienced in Enterprise Infrastructure, Monitoring Systems, Technical Support, and Digital Solutions.",

  keywords: [
    "Ari Puja Yuwana",
    "IT System Specialist",
    "System Administrator",
    "Infrastructure Engineer",
    "IT Support",
    "Monitoring System",
    "Laravel",
    "Next.js",
    "Microsoft Intune",
    "Azure",
  ],

  authors: [
    {
      name: "Ari Puja Yuwana",
    },
  ],

  creator: "Ari Puja Yuwana",

  openGraph: {
    title: "Ari Puja Yuwana",
    description:
      "Enterprise Infrastructure & Digital Solutions",

    url: "https://aripuja.vercel.app/",

    siteName: "Ari Puja Yuwana",

    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
      },
    ],

    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Ari Puja Yuwana",
    description:
      "Enterprise Infrastructure & Digital Solutions",
    images: ["/opengraph-image"],
  },
  icons: {
  icon: "/favicon.svg",
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