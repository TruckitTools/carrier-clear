import { SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Logo({
  variant = "dark",
  className,
  showTagline = "sm",
}: {
  variant?: "dark" | "light";
  className?: string;
  showTagline?: "sm" | "always";
}) {
  const onDark = variant === "dark";
  return (
    <span className={cn("flex items-center gap-2.5", className)}>
      <span className="flex size-10 shrink-0 items-center justify-center rounded-md bg-white sm:size-11">
        <img
          src="/images/logo-mark.png"
          alt=""
          className="size-8 object-contain sm:size-9"
        />
      </span>
      <span className="flex min-w-0 flex-col leading-none">
        <span
          className={cn(
            "font-display text-sm font-semibold tracking-[0.12em] sm:text-base",
            onDark ? "text-paper" : "text-navy",
          )}
        >
          CARRIER <span className="text-teal">CLEAR</span>
        </span>
        <span
          className={cn(
            "mt-1 text-xs font-medium uppercase tracking-[0.12em]",
            showTagline === "always" ? "block" : "hidden sm:block",
            onDark ? "text-muted" : "text-navy/45",
          )}
        >
          {SITE.tagline}
        </span>
      </span>
    </span>
  );
}
