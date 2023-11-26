import { cn } from "@/lib/utils";

export const getHeadingStyles = (variant: "h1" | "h2" | "h3" | "h4") => {
  return cn({
    "text-5xl sm:text-6xl lg:text-7xl mb-5": variant === "h1",
    "text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-wide underline mb-5":
      variant === "h2",
    "text-xl sm:text-2xl lg:text-3xl font-bold mb-3": variant === "h3",
    "text-base sm:text-lg lg:text-xl font-bold mb-3": variant === "h4",
  });
};
