import { SERVICES, STEPS } from "@/lib/content";

export function Work() {
  return (
    <section id="work" className="bg-paper text-ink">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24">
        <p className="text-xs font-medium uppercase tracking-[0.22em] text-coral">Services</p>
        <h2 className="mt-3 max-w-2xl font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
          What We Check Before You Book A Carrier
        </h2>
        <p className="mt-4 max-w-2xl text-base leading-relaxed text-pretty text-ink/70">
          A packet from last month is not enough. Authority can lapse, insurance can cancel,
          and identities get stolen between onboarding and dispatch. We check the live
          record, then write down what we found.
        </p>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2">
          {SERVICES.map((item) => (
            <li
              key={item.num}
              className="rounded-xl bg-paper-2 p-6 shadow-[0_0_0_1px_rgb(12_18_24_/_0.06)] sm:p-8"
            >
              <p className="font-display text-sm text-coral">{item.num}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight sm:text-2xl">{item.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-ink/70">{item.body}</p>
            </li>
          ))}
        </ul>

        <ol className="mt-16 grid gap-8 border-t border-ink/10 pt-12 sm:grid-cols-3 sm:gap-10">
          {STEPS.map((step) => (
            <li key={step.num}>
              <p className="font-display text-4xl text-ink/20">{step.num}</p>
              <h3 className="mt-3 font-display text-xl font-semibold tracking-tight">{step.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-ink/70">{step.body}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
