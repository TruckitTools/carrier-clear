import type { InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Input({ className, ...props }: InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      suppressHydrationWarning
      className={cn(
        "h-11 w-full rounded-md bg-ink-2 px-3.5 text-base text-paper shadow-[0_0_0_1px_rgb(241_235_225_/_0.14)] placeholder:text-muted transition-[box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-steel)]",
        className,
      )}
      {...props}
    />
  );
}
