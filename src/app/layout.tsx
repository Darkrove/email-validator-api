import "@/styles/globals.css";
import { cn } from "@/lib/utils";
import { Inter } from "next/font/google";
import Providers from "@/components/Providers";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Toaster } from "@/components/ui/Toast";

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
