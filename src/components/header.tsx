import { useEffect, useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Menu, Phone, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/logo";
import { NAV, SITE } from "@/lib/content";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-[background-color,box-shadow] duration-200",
        scrolled ? "bg-ink/92 shadow-[0_1px_0_0_rgb(241_235_225_/_0.08)]" : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-6xl items-center justify-between px-4 sm:px-6">
        <a href="#top" className="min-h-11 min-w-11 content-center" aria-label={`${SITE.name} home`}>
          <Logo />
        </a>
        <nav className="hidden items-center gap-8 md:flex" aria-label="Primary">
          {NAV.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-fog transition-colors duration-150 hover:text-paper"
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-2 md:flex">
          <Button asChild variant="outline" size="sm">
            <a href={SITE.phoneHref}>
              <Phone className="size-4" aria-hidden />
              {SITE.phone}
            </a>
          </Button>
          <Button asChild size="sm">
            <a href="#contact">Get A Review</a>
          </Button>
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Trigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
              <Menu className="size-5" />
            </Button>
          </Dialog.Trigger>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-ink/70" />
            <Dialog.Content
              className="fixed inset-y-0 right-0 z-50 flex w-[min(100%,20rem)] flex-col bg-ink-2 p-6 shadow-[0_0_0_1px_rgb(241_235_225_/_0.1)]"
              aria-describedby={undefined}
            >
              <div className="flex items-center justify-between">
                <Dialog.Title className="font-display text-lg text-paper">Menu</Dialog.Title>
                <Dialog.Close asChild>
                  <Button variant="ghost" size="icon" aria-label="Close menu">
                    <X className="size-5" />
                  </Button>
                </Dialog.Close>
              </div>
              <nav className="mt-8 flex flex-col gap-1" aria-label="Mobile">
                {NAV.map((item) => (
                  <Dialog.Close asChild key={item.href}>
                    <a
                      href={item.href}
                      className="flex min-h-12 items-center rounded-md px-2 text-lg text-paper hover:bg-paper/5"
                    >
                      {item.label}
                    </a>
                  </Dialog.Close>
                ))}
              </nav>
              <div className="mt-auto flex flex-col gap-3">
                <Button asChild>
                  <a href={SITE.phoneHref}>
                    <Phone className="size-4" aria-hidden />
                    Call now
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.emailHref}>Email</a>
                </Button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}
