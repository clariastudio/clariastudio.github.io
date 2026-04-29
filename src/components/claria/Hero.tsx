import { ArrowUpRight } from "lucide-react";
import { HERO } from "@/data/studio";

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="container-studio">
        <div className="flex items-center gap-3 animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="eyebrow">{HERO.eyebrow}</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl animate-fade-up">
          {HERO.titleStart} <em className="italic text-muted-foreground">{HERO.titleEm}</em> {HERO.titleEnd}
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-up">
          {HERO.subtitle}
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            {HERO.ctaPrimary}
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm text-foreground transition-colors hover:border-foreground"
          >
            {HERO.ctaSecondary}
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {HERO.highlights.map((s) => (
            <div key={s.label}>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.label}</div>
              <div className="mt-2 text-sm text-foreground md:text-base">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
