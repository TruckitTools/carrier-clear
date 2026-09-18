import { Logo } from "@/components/logo";
import { SITE } from "@/lib/content";

export function Footer() {
  return (
    <footer className="border-t border-paper/10 bg-ink text-fog">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 pb-20 sm:flex-row sm:items-end sm:justify-between sm:px-6">
        <Logo showTagline="always" />
        <div className="flex flex-col gap-1 text-sm sm:text-right">
          <a href={SITE.phoneHref} className="min-h-11 content-center hover:text-paper">
            {SITE.phone}
          </a>
          <a href={SITE.emailHref} className="min-h-11 content-center hover:text-paper">
            {SITE.email}
          </a>
        </div>
      </div>
    </footer>
  );
}
