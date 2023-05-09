import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/Toast";
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Validator API | Home",
  description: "Free and open-source email validator API",
  keywords: [
    "Next.js",
    "React",
    "Tailwind CSS",
    "Server Components",
    "Radix UI",
  ],
  authors: [
    {
      name: "sajjad shaikh",
      url: "https://github.com/Darkrove",
    },
  ],
  creator: "sajjad",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" },
  ],
  manifest: `${siteConfig.url}/site.webmanifest`,
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={cn("bg-white text-stone-900 antialiased ", inter.className)}
    >
      <body className="min-h-screen bg-stone-50 dark:bg-stone-900 antialiased">
        <Providers>
          {children}
          <Toaster position="bottom-right" />
          {/* @ts-expect-error server Component */}
          <Navbar />
          <Footer />
        </Providers>
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
