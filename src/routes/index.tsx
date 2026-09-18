import { createFileRoute } from "@tanstack/react-router";
import { About } from "@/components/about";
import { Cases } from "@/components/cases";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Work } from "@/components/work";

export const Route = createFileRoute("/")({ component: Home });

function Home() {
  return (
    <div className="min-h-svh bg-ink">
      <a
        href="#work"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-paper focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <Header />
      <main>
        <Hero />
        <Work />
        <Cases />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
