import { twMerge } from "tailwind-merge";
import { clsx, ClassValue } from "clsx";

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs));

export const getDateFormatted = (date: Date) => {
  const monthName = date.toLocaleString("default", {
    month: "short",
  });
  return `${monthName} ${date.getFullYear()}`;
};
