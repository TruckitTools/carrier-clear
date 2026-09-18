import { ArrowUpRight } from "lucide-react";
import { CASES, type CaseFile } from "@/lib/content";
import { cn } from "@/lib/utils";

const kindLabel: Record<CaseFile["kind"], string> = {
  doj: "Justice Dept.",
  oig: "DOT OIG",
  press: "Indictment",
  court: "Supreme Court",
  industry: "Industry report",
};

function CaseCard({ item, featured }: { item: CaseFile; featured?: boolean }) {
  const social = item.kind === "industry";

  return (
    <article
      className={cn(
        "flex flex-col rounded-xl p-5 shadow-[0_0_0_1px_rgb(241_235_225_/_0.1)] sm:p-6",
        featured ? "bg-surface sm:p-8" : "bg-ink-2",
        social && "bg-ink",
      )}
    >
      <header className="flex items-start justify-between gap-3">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.18em] text-steel">
            File {item.id} · {kindLabel[item.kind]}
          </p>
          <p className="mt-1 text-xs text-muted">
            {item.date} · {item.kicker}
          </p>
        </div>
        <span
          className={cn(
            "shrink-0 rounded-full px-2.5 py-1 text-xs font-medium uppercase tracking-wider",
            item.kind === "court"
              ? "bg-paper/10 text-paper"
              : "bg-coral/15 text-coral",
          )}
        >
          {item.stamp}
        </span>
      </header>
      <h3
        className={cn(
          "mt-4 font-display font-semibold tracking-tight text-balance",
          featured ? "text-xl sm:text-2xl" : "text-lg sm:text-xl",
        )}
      >
        {item.title}
      </h3>
      <p className="mt-3 flex-1 text-sm leading-relaxed text-pretty text-fog">{item.body}</p>
      <p className="mt-4 border-l-2 border-coral/70 pl-3 text-sm leading-relaxed text-paper/80">
        {item.flag}
      </p>
      <a
        href={item.sourceUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex min-h-11 items-center gap-1.5 self-start text-sm font-medium text-steel transition-colors duration-150 hover:text-paper"
      >
        {item.sourceLabel}
        <ArrowUpRight className="size-4" aria-hidden />
      </a>
    </article>
  );
}

export function Cases() {
  const [lead, ...rest] = CASES;
  return (
    <section id="cases" className="bg-ink text-paper">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-coral">Cases</p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
          Real Fraud Cases — And Why A Carrier Check Matters
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-fog">
          These are public cases: prosecutions, an indictment, a Supreme Court ruling, and an
          arrest. They show what happens when the name on the paperwork is not the truck that
          shows up.
        </p>

        <div className="mt-12 grid gap-4 lg:grid-cols-2">
          {lead ? <CaseCard item={lead} featured /> : null}
          <div className="grid gap-4">
            {rest.slice(0, 2).map((item) => (
              <CaseCard key={item.id} item={item} />
            ))}
          </div>
        </div>
        <div className="mt-4 grid gap-4 lg:grid-cols-2">
          {rest.slice(2).map((item) => (
            <CaseCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}
