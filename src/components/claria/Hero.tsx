import { ArrowUpRight } from "lucide-react";

const Hero = () => {
  return (
    <section id="top" className="relative pt-36 pb-24 md:pt-48 md:pb-36">
      <div className="container-studio">
        <div className="flex items-center gap-3 animate-fade-up">
          <span className="h-1.5 w-1.5 rounded-full bg-accent" />
          <span className="eyebrow">Studio indépendant — Data & Reporting</span>
        </div>

        <h1 className="mt-8 max-w-4xl text-5xl leading-[1.05] tracking-tight md:text-7xl lg:text-8xl animate-fade-up">
          Des données dispersées, <em className="italic text-muted-foreground">transformées</em> en décisions claires.
        </h1>

        <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl animate-fade-up">
          Claria Studio accompagne les petites entreprises et structures en croissance
          avec des reportings lisibles, des tableaux de bord utiles et des analyses
          réellement exploitables.
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4 animate-fade-up">
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3.5 text-sm text-primary-foreground transition-opacity hover:opacity-90"
          >
            Discuter d’un projet
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
          <a
            href="#projets"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm text-foreground transition-colors hover:border-foreground"
          >
            Voir les projets
          </a>
        </div>

        <div className="mt-24 grid grid-cols-2 gap-8 border-t border-border pt-10 md:grid-cols-4">
          {[
            { k: "Focus", v: "Data, reporting, dashboards" },
            { k: "Stack", v: "SQL · Python · Power BI" },
            { k: "Pour", v: "Petites structures & commerces" },
            { k: "Livraison", v: "Claire, documentée, utile" },
          ].map((s) => (
            <div key={s.k}>
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{s.k}</div>
              <div className="mt-2 text-sm text-foreground md:text-base">{s.v}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
