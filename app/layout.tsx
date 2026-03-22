import type { Metadata } from "next";
import { Orbitron, Space_Grotesk, Inter, JetBrains_Mono } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollToTop from "@/components/ui/ScrollToTop";
import "./globals.css";

const orbitron = Orbitron({
  variable: "--font-orbitron",
  subsets: ["latin"],
  weight: ["700", "900"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["600", "700"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dumindu Damsara | <Dumindu Damsara/> — IT Student & Full Stack Developer",
  description:
    "Personal portfolio of Dumindu Damsara, an IT student at SLIATE, showcasing projects, skills, certifications, and experience in full-stack web development.",
  keywords: [
    "portfolio",
    "web developer",
    "full stack developer",
    "IT student",
    "SLIATE",
    "Next.js",
    "React",
  ],
  authors: [{ name: "Dumindu Damsara" }],
  openGraph: {
    title: "Dumindu Damsara | <Dumindu Damsara/>",
    description: "IT Student & Full Stack Developer",
    type: "website",
    locale: "en_US",
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
      className={`${orbitron.variable} ${spaceGrotesk.variable} ${inter.variable} ${jetbrainsMono.variable} antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-screen bg-base text-text-primary">
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
