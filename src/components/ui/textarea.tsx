import type { TextareaHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

export function Textarea({ className, ...props }: TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      suppressHydrationWarning
      className={cn(
        "min-h-32 w-full rounded-lg bg-ink-2 px-3.5 py-3 text-base text-paper shadow-[0_0_0_1px_rgb(241_235_225_/_0.14)] placeholder:text-muted transition-[box-shadow] duration-150",
        "focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-steel)]",
        className,
      )}
      {...props}
    />
  );
}
