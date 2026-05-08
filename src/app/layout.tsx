import type { Metadata } from "next";
import { Outfit, Source_Sans_3, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-display",
  weight: ["400", "500", "600", "700", "800"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
  weight: ["300", "400", "500", "600", "700"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-mono",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Pratik Bargal | Competitive Programmer & Developer",
  description:
    "Portfolio of Pratik Bargal, a B.Tech CSE-AI student at VIT Pune focused on DSA, Competitive Programming, and modern web development.",
  keywords: [
    "Pratik Bargal",
    "Competitive Programmer",
    "Developer",
    "VIT Pune",
    "DSA",
    "Web Developer",
    "React Developer",
    "Next.js Developer",
  ],
  authors: [{ name: "Pratik Bargal" }],
  openGraph: {
    title: "Pratik Bargal | Competitive Programmer & Developer",
    description:
      "Portfolio of Pratik Bargal, a B.Tech CSE-AI student at VIT Pune focused on DSA, Competitive Programming, and modern web development.",
    url: "https://pratikbargal.dev",
    siteName: "Pratik Bargal Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Pratik Bargal | Competitive Programmer & Developer",
    description:
      "Portfolio of Pratik Bargal, a B.Tech CSE-AI student at VIT Pune focused on DSA, Competitive Programming, and modern web development.",
    creator: "@dev_pratik144",
  },
  robots: {
    index: true,
    follow: true,
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
      className={`dark ${outfit.variable} ${sourceSans.variable} ${jetbrainsMono.variable}`}
    >
      <body className="min-h-screen bg-background antialiased">{children}</body>
    </html>
  );
}
