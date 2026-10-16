import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Alex Morgan — Full-Stack Developer & Digital Creator",
  description:
    "Responsive sample personal portfolio website engineered with Next.js, TypeScript, and modern cloud technologies. Built for K-Youth Development Programme 2026.",
  keywords: ["Full-Stack Developer", "Next.js", "React", "TypeScript", "Tailwind CSS", "Portfolio"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${plusJakartaSans.variable} ${jetbrainsMono.variable} h-full antialiased`}
    >
      <body className="bg-surface font-body-md text-body-md text-on-surface antialiased relative min-h-screen selection:bg-primary-container selection:text-on-primary-container flex flex-col">
        <a
          href="#main-content"
          className="fixed left-4 top-3 z-[100] -translate-y-20 rounded-lg bg-primary-container px-4 py-2 font-title-md text-body-sm text-on-primary-container shadow-lg transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 focus:ring-offset-surface"
        >
          Skip to content
        </a>
        {/* Ambient Cyan Luminescence Mesh */}
        <div
          className="pointer-events-none fixed inset-0 z-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(34,211,238,0.12),transparent_70%)]"
          aria-hidden="true"
        />

        {/* Global Shared Header */}
        <Header />

        {/* Dynamic Route Content */}
        <main id="main-content" tabIndex={-1} className="relative z-10 w-full pt-20 bg-transparent min-h-screen flex flex-col flex-1 focus:outline-none">
          {children}
        </main>

        {/* Global Shared Footer */}
        <Footer />
      </body>
    </html>
  );
}
