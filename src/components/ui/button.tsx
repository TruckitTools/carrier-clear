import { cva, type VariantProps } from "class-variance-authority";
import { Slot } from "@radix-ui/react-slot";
import type { ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 font-sans text-sm font-medium tracking-wide transition-[opacity,transform,background-color,color,box-shadow] duration-150 ease-out focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-steel disabled:pointer-events-none disabled:opacity-40 active:not-disabled:scale-[0.96]",
  {
    variants: {
      variant: {
        solid:
          "bg-paper text-ink hover:bg-paper-2 shadow-[0_0_0_1px_rgb(241_235_225_/_0.08)]",
        ink: "bg-ink text-paper hover:bg-ink-2 shadow-[0_0_0_1px_rgb(12_18_24_/_0.2)]",
        outline:
          "bg-transparent text-paper shadow-[0_0_0_1px_rgb(241_235_225_/_0.22)] hover:bg-paper/5",
        ghost: "bg-transparent text-paper hover:bg-paper/8",
        coral: "bg-coral text-paper hover:opacity-90",
      },
      size: {
        default: "h-11 min-h-11 rounded-md px-5",
        lg: "h-12 min-h-12 rounded-lg px-6 text-sm",
        sm: "h-10 min-h-10 rounded-md px-4 text-sm",
        icon: "size-11 min-h-11 rounded-md",
      },
    },
    defaultVariants: {
      variant: "solid",
      size: "default",
    },
  },
);

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

export function Button({ className, variant, size, asChild, ...props }: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  return <Comp className={cn(buttonVariants({ variant, size }), className)} {...props} />;
}
