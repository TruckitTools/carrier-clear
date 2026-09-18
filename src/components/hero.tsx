import { ArrowDown, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { SITE, STATS } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative isolate min-h-svh overflow-hidden bg-ink pt-20 text-paper"
    >
      <img
        src="/images/road.jpg"
        alt=""
        className="absolute inset-0 size-full object-cover opacity-45"
      />
      <div className="absolute inset-0 bg-linear-to-b from-ink/70 via-ink/55 to-ink" />
      <div className="absolute inset-0 bg-linear-to-r from-ink via-ink/40 to-transparent md:to-ink/20" />

      <div className="relative mx-auto grid min-h-[calc(100svh-5rem)] max-w-6xl items-end gap-6 px-4 pb-0 sm:px-6 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
        <div className="stagger-in flex flex-col justify-end py-10 sm:py-16 lg:pb-20">
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-steel">
            {SITE.region} · {SITE.years} years in freight
          </p>
          <h1 className="mt-4 max-w-xl font-display text-3xl font-semibold leading-[1.12] tracking-tight text-balance sm:text-4xl lg:text-5xl">
            We Verify The Carriers You Hire.
          </h1>
          <p className="mt-5 max-w-lg text-base leading-relaxed text-pretty text-fog sm:text-lg">
            Carrier Clear checks authority, insurance, safety, and identity for freight
            brokers, shippers, and agents — so you know who is actually moving the load.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <Button asChild size="lg">
              <a href={SITE.phoneHref}>
                <Phone className="size-4" aria-hidden />
                Call {SITE.phone}
              </a>
            </Button>
            <Button asChild size="lg" variant="outline">
              <a href={SITE.emailHref}>
                <Mail className="size-4" aria-hidden />
                {SITE.email}
              </a>
            </Button>
          </div>
          <a
            href="#work"
            className="mt-10 inline-flex min-h-11 w-fit items-center gap-2 text-sm text-muted transition-colors duration-150 hover:text-paper"
          >
            <ArrowDown className="size-4" aria-hidden />
            See What We Check
          </a>
        </div>

        <div className="relative z-10 flex min-h-72 items-end justify-center lg:min-h-0 lg:-mb-10">
          <div
            aria-hidden
            className="pointer-events-none absolute inset-x-8 bottom-0 h-1/2 rounded-full bg-teal/15 blur-3xl"
          />
          <img
            src="/images/ashley.png"
            alt="Ashley LaGreca"
            className="relative z-10 h-[min(64vh,34rem)] w-auto max-w-full object-contain object-bottom drop-shadow-[0_24px_40px_rgb(0_0_0_/_0.45)] sm:h-[min(70vh,38rem)]"
          />
        </div>
      </div>

      <div className="relative border-t border-paper/10 bg-ink/80 pb-16">
        <dl className="mx-auto grid max-w-6xl gap-px bg-paper/10 sm:grid-cols-3">
          {STATS.map((stat) => (
            <div key={stat.value} className="bg-ink px-4 py-6 sm:px-8 sm:py-8">
              <dt className="font-display text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {stat.value}
              </dt>
              <dd className="mt-2 text-sm leading-relaxed text-fog">{stat.label}</dd>
              <p className="mt-2 text-xs text-muted">{stat.source}</p>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
