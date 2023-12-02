import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";
import { BREAK_POINTS } from "@/constants";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getDateFormatted = (date: Date) => {
  const monthName = date.toLocaleString("default", {
    month: "short",
  });
  return `${monthName} ${date.getFullYear()}`;
};

export const widthGreaterThanBreakpoint = (
  width: number | null,
  breakpoint: keyof typeof BREAK_POINTS
) => {
  return width && width > BREAK_POINTS[breakpoint];
};
