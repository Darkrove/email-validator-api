import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/Toast";
import { fontSans } from "@/lib/fonts";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-stone-50 font-sans text-stone-900 antialiased dark:bg-stone-900 dark:text-stone-50",
          fontSans.variable
        )}
      >
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
