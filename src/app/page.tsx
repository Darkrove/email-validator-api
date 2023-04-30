import Image from "next/image";
import { Inter } from "next/font/google";
import type { Metadata } from "next";

import styles from "./page.module.css";
import Paragraph from "@/components/ui/Paragraph";
import LargeHeading from "@/components/ui/LargeHeading";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Validator API | Home",
  description: "Free and open-source email validator API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading
            size="lg"
            className="three-d text-dark-silver dark:text-light-silver"
          >
            Easily validate <br />
            your email.
          </LargeHeading>
          <Paragraph className="max-w-xl lg:text-left">
            With the Email Validator API, you can easily validate Email <br />
            with a free{" "}
            <Link
              href="/login"
              className="underline underline-offset-2 text-dark-silver dark:text-light-silver"
            >
              API Key
            </Link>
          </Paragraph>
          <div className="relative w-full max-w-lg lg:max-w-3xl lg:left-1/2 aspect-square lg:absolute">
            <Image
              priority
              className=""
              quality={100}
              style={{ objectFit: "contain" }}
              fill
              src="/monkey@hero.png"
              alt="Hero image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
