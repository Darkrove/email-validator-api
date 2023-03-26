import "@/styles/globals.css";
import { cn } from "@/lib/utils";

import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

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
          {/* @ts-expect-error server Component */}
          <Navbar />
        </Providers>
        <div className="h-40 md:hidden" />
      </body>
    </html>
  );
}
