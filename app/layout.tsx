import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/theme-provider";
import ScrollProgress from "@/components/layout/ScrollProgress";
import { GoogleAnalytics } from "@next/third-parties/google";

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
  metadataBase: new URL("https://aripuja.vercel.app"),

  title: {
    default: "Ari Puja Yuwana | IT System Specialist",
    template: "%s | Ari Puja Yuwana",
  },

  description:
    "IT System Specialist experienced in enterprise infrastructure, monitoring systems, digital solutions, web development, and operational technology.",

  keywords: [
    "Ari Puja Yuwana",
    "IT System Specialist",
    "Infrastructure Engineer",
    "Monitoring Systems",
    "Next.js Developer",
    "Laravel Developer",
    "Microsoft Intune",
    "Azure",
    "Enterprise IT",
  ],

  authors: [
    {
      name: "Ari Puja Yuwana",
    },
  ],

  creator: "Ari Puja Yuwana",

  openGraph: {
    title: "Ari Puja Yuwana | IT System Specialist",

    description:
      "Experienced in enterprise infrastructure, monitoring systems, digital solutions, and web development.",

    url: "https://aripuja.vercel.app",

    siteName: "Ari Puja Yuwana Portfolio",

    locale: "en_US",

    type: "website",

    images: [
      {
        url: "/opengraph-image",

        width: 1200,
        height: 630,

        alt: "Ari Puja Yuwana",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",

    title: "Ari Puja Yuwana",

    description:
      "IT System Specialist | Infrastructure | Monitoring Systems | Digital Solutions",

    images: ["/opengraph-image"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

const personSchema = {
  "@context": "https://schema.org",

  "@type": "Person",

  name: "Ari Puja Yuwana",

  jobTitle: "IT System Specialist",

  email: "mailto:aripujayuwana@gmail.com",

  telephone: "+6282123925828",

  address: {
    "@type": "PostalAddress",
    addressLocality: "Bekasi",
    addressCountry: "Indonesia",
  },

  alumniOf: {
    "@type": "CollegeOrUniversity",
    name: "Universitas Gunadarma",
  },

  url: "https://aripuja.vercel.app",

  image: "https://aripuja.vercel.app/images/apy1.jpg",

  sameAs: [
    "https://linkedin.com/in/ari-puja-yuwana-a50745161",
  ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(personSchema),
          }}
        />

        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ScrollProgress />

          {children}
        </ThemeProvider>
          <GoogleAnalytics gaId="G-NTV3V8PB6J" />
      </body>
    </html>
  );
}