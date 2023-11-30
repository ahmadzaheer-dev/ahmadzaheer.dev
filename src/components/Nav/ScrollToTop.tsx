"use client";

import { MoveUp } from "lucide-react";

const ScrollToTop = () => {
  const scrollToTop = () => {
    if (typeof window !== "undefined")
      window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="fixed z-10 h-10 w-10 bg-dim right-5 bottom-5 lg:right-10 lg:bottom-10 shadow-md text-white flex items-center justify-center rounded-md hover:bg-white transition-all cursor-pointer hover:text-bgColor"
      onClick={scrollToTop}
    >
      <MoveUp />
    </div>
  );
};

export default ScrollToTop;
