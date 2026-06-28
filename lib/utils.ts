import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Shared utility for composing Tailwind class names.
export function cn(...inputs: Array<string | undefined | false | null>) {
  return twMerge(clsx(inputs));
}

