import { type FormEvent, type ReactNode, useState } from "react";
import { Check, Mail, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SITE } from "@/lib/content";

const ROLES = ["Broker", "Shipper", "Agent", "Carrier", "Other"] as const;

type Inquiry = {
  name: string;
  company: string;
  role: string;
  phone: string;
  email: string;
  message: string;
  at: string;
};

export function Contact() {
  const [sent, setSent] = useState<Inquiry | null>(null);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const inquiry: Inquiry = {
      name: String(data.get("name") ?? "").trim(),
      company: String(data.get("company") ?? "").trim(),
      role: String(data.get("role") ?? "").trim(),
      phone: String(data.get("phone") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      at: new Date().toISOString(),
    };
    try {
      const prev = JSON.parse(localStorage.getItem("lagreca-inquiries") ?? "[]") as Inquiry[];
      localStorage.setItem("lagreca-inquiries", JSON.stringify([inquiry, ...prev].slice(0, 20)));
    } catch {
      /* ignore quota */
    }
    setSent(inquiry);
  }

  return (
    <section id="contact" className="bg-ink text-paper">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-24 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.22em] text-coral">Contact</p>
          <h2 className="mt-3 font-display text-2xl font-semibold tracking-tight text-balance sm:text-3xl lg:text-4xl">
            Call Or Send A Request
          </h2>
          <p className="mt-4 max-w-md text-base leading-relaxed text-pretty text-fog">
            Every review is handled directly. If a load is covering today, call.
          </p>
          <ul className="mt-8 space-y-3">
            <li>
              <a
                href={SITE.phoneHref}
                className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-paper shadow-[0_0_0_1px_rgb(241_235_225_/_0.1)] transition-colors duration-150 hover:bg-paper/5"
              >
                <Phone className="size-4 text-steel" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted">Phone</span>
                  {SITE.phone}
                </span>
              </a>
            </li>
            <li>
              <a
                href={SITE.emailHref}
                className="flex min-h-12 items-center gap-3 rounded-lg px-3 text-paper shadow-[0_0_0_1px_rgb(241_235_225_/_0.1)] transition-colors duration-150 hover:bg-paper/5"
              >
                <Mail className="size-4 text-steel" aria-hidden />
                <span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted">Email</span>
                  {SITE.email}
                </span>
              </a>
            </li>
          </ul>
        </div>

        <div className="rounded-xl bg-surface p-5 shadow-[0_0_0_1px_rgb(241_235_225_/_0.1)] sm:p-8">
          {sent ? (
            <div className="flex min-h-80 flex-col justify-center">
              <span className="flex size-11 items-center justify-center rounded-full bg-ok/20 text-ok">
                <Check className="size-5" aria-hidden />
              </span>
              <h3 className="mt-5 font-display text-2xl font-semibold tracking-tight">
                Got It. Now Send It So We Have It.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-fog">
                Thanks, {sent.name}. This page saved your note on this device. Tap below so it
                actually reaches us.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Button asChild>
                  <a
                    href={`mailto:${SITE.email}?subject=${encodeURIComponent("Carrier review — " + (sent.company || sent.name))}&body=${encodeURIComponent(
                      `Name: ${sent.name}\nCompany: ${sent.company}\nRole: ${sent.role}\nPhone: ${sent.phone}\n\n${sent.message}`,
                    )}`}
                  >
                    Open in email
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.phoneHref}>Call {SITE.phone}</a>
                </Button>
              </div>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="grid gap-4">
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Name" htmlFor="name">
                  <Input id="name" name="name" required autoComplete="name" />
                </Field>
                <Field label="Company" htmlFor="company">
                  <Input id="company" name="company" autoComplete="organization" />
                </Field>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <Field label="Phone" htmlFor="phone">
                  <Input id="phone" name="phone" type="tel" autoComplete="tel" />
                </Field>
                <Field label="Email" htmlFor="email">
                  <Input id="email" name="email" type="email" required autoComplete="email" />
                </Field>
              </div>
              <Field label="I am a" htmlFor="role">
                <select
                  id="role"
                  name="role"
                  defaultValue="Broker"
                  suppressHydrationWarning
                  className="h-11 w-full rounded-md bg-ink-2 px-3.5 text-base text-paper shadow-[0_0_0_1px_rgb(241_235_225_/_0.14)] focus-visible:outline-none focus-visible:shadow-[0_0_0_2px_var(--color-steel)]"
                >
                  {ROLES.map((role) => (
                    <option key={role} value={role}>
                      {role}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="What needs reviewing" htmlFor="message">
                <Textarea
                  id="message"
                  name="message"
                  required
                  placeholder="MC number, or what you need checked"
                />
              </Field>
              <Button type="submit" size="lg" className="mt-2 w-full sm:w-auto">
                Send request
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: ReactNode;
}) {
  return (
    <div className="grid gap-2">
      <Label htmlFor={htmlFor}>{label}</Label>
      {children}
    </div>
  );
}
