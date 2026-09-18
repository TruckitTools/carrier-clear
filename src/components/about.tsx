import { SITE } from "@/lib/content";

export function About() {
  return (
    <section id="about" className="bg-paper text-ink">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div className="relative mx-auto w-full max-w-sm">
          <div className="overflow-hidden rounded-xl bg-ink shadow-[0_0_0_1px_rgb(12_18_24_/_0.08)]">
            <div className="relative aspect-[3/4] overflow-hidden bg-ink-2">
              <img
                src="/images/ashley.png"
                alt="Ashley LaGreca"
                className="absolute inset-x-0 top-0 h-[125%] w-full object-cover object-[center_8%]"
              />
            </div>
          </div>
          <p className="mt-3 text-center text-xs uppercase tracking-[0.18em] text-ink/45">
            {SITE.person} · {SITE.region}
          </p>
        </div>

        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-coral">About</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            Ten Years In Freight. Carriers Checked In Person, Not Just In Software.
          </h2>
          <div className="mt-6 space-y-4 text-base leading-relaxed text-pretty text-ink/75">
            <p>
              {SITE.person} founded Carrier Clear after a decade in the freight industry.
              The work is the same whether you are a broker, shipper, or agent: who is under
              the MC, whether the insurance is still on file, and whether the person on the
              phone is the company they claim to be.
            </p>
            <p>
              After a 2026 Supreme Court ruling, brokers can be sued for the carriers they
              choose. Software can watch a feed. Someone still has to read the mismatch and
              write it down.
            </p>
            <p>If you want a person who will look at the file, get in touch.</p>
          </div>
          <dl className="mt-8 grid grid-cols-2 gap-6 sm:grid-cols-3">
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Experience</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">{SITE.years} years</dd>
            </div>
            <div>
              <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Based</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">{SITE.region}</dd>
            </div>
            <div className="col-span-2 sm:col-span-1">
              <dt className="text-xs uppercase tracking-[0.16em] text-ink/45">Direct line</dt>
              <dd className="mt-1 font-display text-2xl font-semibold">
                <a href={SITE.phoneHref} className="underline-offset-4 hover:underline">
                  {SITE.phone}
                </a>
              </dd>
            </div>
          </dl>
        </div>
      </div>
    </section>
  );
}
