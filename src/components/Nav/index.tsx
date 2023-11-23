"use client";

import { useEffect, useState } from "react";
import Menu from "@/components/Nav/Menu";
import MaxWidthWrapper from "@/ui/MaxWidthWrapper";
import { cn } from "@/lib/utils";

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
        "sticky h-24 top-0 border-b border-dim transition-all z-50",
        {
          "bg-bgColor/95 h-20": scrolled,
        }
      )}
    >
      <MaxWidthWrapper className="flex items-center justify-between h-full">
        <div className="text-2xl font-semibold">
          <span className="text-transparent bg-gradient-to-r from-primary to-primary-light bg-clip-text">
            ahmadzaheer
          </span>
          .dev
        </div>
        <Menu />
      </MaxWidthWrapper>
    </div>
  );
};

export default Nav;
