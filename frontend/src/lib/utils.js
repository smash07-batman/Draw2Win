import { cn } from "@/lib/utils";

export function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}
