"use client";

import Link from "next/link";
import { MainNavItem } from "@/types";
import React from "react";
import { MobileNav } from "@/components/MobileNav";
import { Icons } from "@/components/Icons";
import { siteConfig } from "@/config/site";
interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

const MobileNavWrapper = ({ items, children }: MainNavProps) => {
  const [showMobileMenu, setShowMobileMenu] = React.useState<boolean>(false);
  return (
    <div>
      <button
        className="flex items-center space-x-2 md:hidden text-stone-900 dark:text-stone-100"
        onClick={() => setShowMobileMenu(!showMobileMenu)}
      >
        {showMobileMenu ? <Icons.close /> : <Icons.logo />}
        <span className="font-bold">{siteConfig.name}</span>
      </button>
      {showMobileMenu && items && (
        <MobileNav items={items}>{children}</MobileNav>
      )}
    </div>
  );
};

export default MobileNavWrapper;
