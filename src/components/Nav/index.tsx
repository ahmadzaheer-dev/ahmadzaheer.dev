"use client";

import { useEffect, useState } from "react";
import Menu from "@/components/Nav/Menu";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { cn } from "@/lib/utils";
import Logo from "@/ui/Logo";

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={cn(
        "sticky h-24 top-0 transition-all z-50 border-b border-dim",
        {
          "bg-bgColor h-20": scrolled,
        }
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between h-full">
        <Logo hideTextOnMobile />
        <Menu />
      </MaxWidthWrapper>
    </div>
  );
};

export default Nav;
