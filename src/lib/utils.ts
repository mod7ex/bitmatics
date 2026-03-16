import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export const STATS = {
  experience: { value: "+10", label: "Years Experience" },
  subscribed_students: { value: "+137", label: "Subscribed students" },
  improvement: { value: "+96%", label: "Grade Improvement" }
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
