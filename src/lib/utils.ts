import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const STATS = {
  experience: { value: "+10", label: "Years Experience" },
  subscribed_students: { value: "+137", label: "Subscribed students" },
  improvement: { value: "+96%", label: "Grade Improvement" }
}

export const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Pricing", href: "#pricing" },
  { label: "Testimonials", href: "#testimonials" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
