import Image from "next/image";
import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/Button";
import styles from "./page.module.css";
import Paragraph from "@/components/ui/Paragraph";
import LargeHeading from "@/components/ui/LargeHeading";
import Link from "next/link";
import { Icons } from "@/components/Icons";
import {
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading,
} from "@/components/PageHeader";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Email Validator API | Home",
  description: "Free and open-source email validator API",
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-24 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-4 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <PageHeader>
            <PageHeaderHeading className="three-d text-dark-silver dark:text-light-silver">
              Easily validate your email.
            </PageHeaderHeading>
            <PageHeaderDescription className="max-w-xl lg:text-left">
              <Paragraph className="max-w-xl lg:text-left">
                With the Email Validator API, you can easily validate Email with
                a free{" "}
                <Link
                  href="/login"
                  className="underline underline-offset-2 text-dark-silver dark:text-light-silver"
                >
                  API Key
                </Link>
              </Paragraph>
            </PageHeaderDescription>
          </PageHeader>
          <section className="pb-8 md:pb-10">
            <div className="flex w-full items-center justify-between">
              <div className="flex space-x-4">
                <Link
                  href="/documentation"
                  className={cn(buttonVariants({ size: "lg" }))}
                >
                  Get Started
                </Link>
                <Link
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/Darkrove/email-validator-api"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "lg" }),
                    "pl-6"
                  )}
                >
                  <Icons.gitHub className="mr-2 h-4 w-4" />
                  GitHub
                </Link>
              </div>
            </div>
          </section>
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
