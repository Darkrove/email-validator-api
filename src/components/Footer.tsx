import { FC } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";

const Footer = () => {
  return (
    <div className="fixed backdrop-blur-sm bg-white/75 dark:bg-stone-900 z-50 bottom-0 left-0 right-0 h-20 border-t border-stone-300 dark:border-stone-700 shadow-sm flex items-center justify-between">
      <div className="container max-w-7xl mx-auto w-full flex justify-center items-center">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default Footer;
