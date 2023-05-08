import { Icons } from "@/components/Icons";
import { buttonVariants } from "@/components/ui/Button";
import LargeHeading from "@/components/ui/LargeHeading";
import Paragraph from "@/components/ui/Paragraph";
import UserAuthForm from "@/components/UserAuthForm";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

const page: FC = () => {
  return (
    <>
      <div className="absolute inset-0 mx-auto container flex h-screen flex-col items-center justify-center">
        <div className="mx-auto flex w-full flex-col justify-center space-y-6 max-w-lg">
          <div className="flex flex-col items-center gap-6 text-center">
            <Link
              className={buttonVariants({
                variant: "ghost",
                className:
                  "before:absolute left-4 top-4 md:left-8 md:top-8 w-fit",
              })}
              href="/"
            >
              <Icons.chevronLeft className="mr-2 h-4 w-4" />
              Back to home
            </Link>
            <Icons.logo className="text-black dark:text-white h-16 w-16" />
            <LargeHeading>Welcome back!</LargeHeading>
            <Paragraph>Please sign in using your Google account.</Paragraph>
          </div>
          <UserAuthForm />
        </div>
      </div>
    </>
  );
};

export default page;
