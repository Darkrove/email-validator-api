import { getServerSession } from "next-auth";
import Link from "next/link";
import { FC } from "react";
import MobileNavWrapper from "@/components/MobileNavWrapper";
import SignInButton from "@/ui/SignInButton";
import SignOutButton from "@/ui/SignOutButton";
import { Button, buttonVariants } from "@/ui/Button";
import { UserNav } from "@/components/UserNav";
import { authOptions } from "@/lib/auth";
import { navConfig } from "@/config/nav";
import { siteConfig } from "@/config/site";
import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/ui/Avatar";

const Navbar = async () => {
  const session = await getServerSession(authOptions);
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-stone-900 z-50 top-0 left-0 right-0 h-20 border-b border-stone-300 dark:border-stone-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-between items-center">
        <div className="md:hidden">
          <MobileNavWrapper items={navConfig.mainNav} />
        </div>
        <div className="hidden md:block">
          <Link href="/" className={buttonVariants({ variant: "link" })}>
            <div className="flex items-center space-x-2">
              <Icons.logo />
              <span className="font-bold">{siteConfig.name}</span>
            </div>
          </Link>
        </div>

        <div className="md:hidden items-center justify-center flex">
          {session ? <UserNav session={session} /> : <SignInButton />}
        </div>

        <div className="hidden md:flex justify-between items-center gap-4">
          {navConfig.mainNav.map((item, index) => (
            <Link
              key={index}
              href={item.disabled ? "#" : item.href}
              className={buttonVariants({ variant: "ghost" })}
            >
              {item.title}
            </Link>
          ))}
          {session ? (
            <>
              <UserNav session={session} />
            </>
          ) : (
            <SignInButton />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
