import { useMemo, useState } from "react";
import { ArrowUpRight, Plus } from "lucide-react";
import Nav from "@/components/claria/Nav";
import Seo from "@/components/Seo";
import { projects, sectors, deliverableTypes, SITE } from "@/data/studio";

const ALL = "Tous";

const Projets = () => {
  const [sector, setSector] = useState<string>(ALL);
  const [deliverable, setDeliverable] = useState<string>(ALL);

  const filtered = useMemo(
    () =>
      projects.filter(
        (p) =>
          (sector === ALL || p.sector === sector) &&
          (deliverable === ALL || p.deliverableType === deliverable),
      ),
    [sector, deliverable],
  );

  // Sommaire par livrable
  const byDeliverable = useMemo(() => {
    const map = new Map<string, typeof projects>();
    for (const p of projects) {
      const arr = map.get(p.deliverableType) ?? [];
      arr.push(p);
      map.set(p.deliverableType, arr);
    }
    return Array.from(map.entries());
  }, []);

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Projets — Claria Studio",
    description:
      "Études de cas en analyse de données, dashboards et data engineering.",
    url: `${SITE.url}/projets`,
    hasPart: projects.map((p) => ({
      "@type": "CreativeWork",
      name: p.title,
      about: p.sector,
      description: p.summary,
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Projets — Études de cas data, dashboards & analyses"
        description="Études de cas complètes : retail, santé, e-commerce, data engineering. Filtrez par secteur ou par type de livrable."
        path="/projets"
        jsonLd={jsonLd}
      />
      <Nav />
      <main>
        {/* HERO */}
        <section className="border-b border-border pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="container-studio">
            <span className="eyebrow">Projets</span>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-7xl">
              Des projets concrets, <em className="italic text-muted-foreground">des livrables utiles</em>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Sélection d’interventions menées pour des commerces, des PME et
              des structures qui voulaient passer d’une donnée brute à une
              décision éclairée.
            </p>
          </div>
        </section>

        {/* SOMMAIRE PAR LIVRABLE */}
        <section className="border-b border-border bg-muted/40 py-16">
          <div className="container-studio">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Sommaire</span>
                <h2 className="mt-3 text-2xl md:text-3xl">Par type de livrable</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Accédez directement à un type de mission selon le format de
                livrable attendu.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
              {byDeliverable.map(([type, list]) => (
                <a
                  key={type}
                  href={`#deliv-${type.toLowerCase().replace(/\s+/g, "-")}`}
                  className="group flex flex-col gap-3 bg-background p-6 transition-colors hover:bg-muted/40"
                >
                  <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {type}
                  </div>
                  <div className="font-serif text-3xl text-foreground">
                    {list.length}
                  </div>
                  <div className="text-xs text-muted-foreground">
                    {list.length > 1 ? "projets" : "projet"}
                  </div>
                  <ArrowUpRight className="mt-2 h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* FILTRES */}
        <section className="border-b border-border py-12">
          <div className="container-studio space-y-6">
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Filtrer par secteur
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[ALL, ...sectors].map((s) => (
                  <button
                    key={s}
                    onClick={() => setSector(s)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                      sector === s
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                Filtrer par livrable
              </div>
              <div className="mt-3 flex flex-wrap gap-2">
                {[ALL, ...deliverableTypes].map((d) => (
                  <button
                    key={d}
                    onClick={() => setDeliverable(d)}
                    className={`rounded-full border px-3.5 py-1.5 text-xs transition-colors ${
                      deliverable === d
                        ? "border-foreground bg-foreground text-primary-foreground"
                        : "border-border text-muted-foreground hover:border-foreground hover:text-foreground"
                    }`}
                  >
                    {d}
                  </button>
                ))}
              </div>
            </div>
            <div className="text-xs text-muted-foreground">
              {filtered.length} projet{filtered.length > 1 ? "s" : ""} affiché
              {filtered.length > 1 ? "s" : ""}
            </div>
          </div>
        </section>

        {/* LISTE PROJETS */}
        <section className="py-16 md:py-20">
          <div className="container-studio">
            {byDeliverable.map(([type, list]) => {
              const visible = list.filter((p) => filtered.includes(p));
              if (visible.length === 0) return null;
              return (
                <div
                  key={type}
                  id={`deliv-${type.toLowerCase().replace(/\s+/g, "-")}`}
                  className="mb-16 scroll-mt-24"
                >
                  <div className="mb-6 flex items-baseline justify-between border-b border-border pb-3">
                    <h2 className="text-xl md:text-2xl">{type}</h2>
                    <span className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {visible.length} projet{visible.length > 1 ? "s" : ""}
                    </span>
                  </div>
                  <ol className="divide-y divide-border border-y border-border">
                    {visible.map((p, i) => (
                      <li key={p.slug}>
                        <details className="group py-8 md:py-10">
                          <summary className="grid cursor-pointer list-none grid-cols-12 gap-6 [&::-webkit-details-marker]:hidden">
                            <div className="col-span-12 flex items-center gap-4 text-xs uppercase tracking-[0.18em] text-muted-foreground md:col-span-2">
                              <span>0{i + 1}</span>
                              <span className="hidden md:inline">{p.tag}</span>
                            </div>
                            <div className="col-span-12 md:col-span-6">
                              <h3 className="text-2xl leading-tight md:text-3xl">{p.title}</h3>
                              <p className="mt-3 text-muted-foreground">{p.summary}</p>
                            </div>
                            <div className="col-span-12 md:col-span-3">
                              <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Livrable</div>
                              <p className="mt-1.5 text-sm text-muted-foreground">{p.deliverable}</p>
                              <div className="mt-4 flex flex-wrap gap-1.5">
                                {p.tools.map((t) => (
                                  <span key={t} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                                    {t}
                                  </span>
                                ))}
                              </div>
                            </div>
                            <div className="col-span-12 flex items-start justify-end md:col-span-1">
                              <Plus className="h-5 w-5 text-muted-foreground transition-transform group-open:rotate-45" strokeWidth={1.5} />
                            </div>
                          </summary>
                          <div className="mt-8 grid grid-cols-12 gap-6 border-t border-border pt-8">
                            <div className="col-span-12 md:col-span-2" />
                            <div className="col-span-12 grid gap-6 md:col-span-9 md:grid-cols-2">
                              <div>
                                <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Contexte</div>
                                <p className="mt-2 text-sm text-muted-foreground">{p.context}</p>
                              </div>
                              <div>
                                <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Enjeu</div>
                                <p className="mt-2 text-sm text-muted-foreground">{p.challenge}</p>
                              </div>
                              <div>
                                <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Approche</div>
                                <p className="mt-2 text-sm text-muted-foreground">{p.approach}</p>
                              </div>
                              <div>
                                <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Résultat</div>
                                <p className="mt-2 text-sm text-muted-foreground">{p.outcome}</p>
                              </div>
                              <div className="md:col-span-2">
                                <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Indicateurs clés</div>
                                <div className="mt-3 flex flex-wrap gap-2">
                                  {p.metrics.map((m) => (
                                    <span key={m} className="rounded-full bg-muted px-3 py-1 text-xs text-foreground">
                                      {m}
                                    </span>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </details>
                      </li>
                    ))}
                  </ol>
                </div>
              );
            })}

            {filtered.length === 0 && (
              <div className="rounded-sm border border-border p-10 text-center text-muted-foreground">
                Aucun projet ne correspond à ces filtres.
              </div>
            )}
          </div>
        </section>

        {/* CTA */}
        <section className="bg-foreground py-20 text-primary-foreground md:py-24">
          <div className="container-studio flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-primary-foreground/60">Votre projet</span>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-primary-foreground md:text-5xl">
                Un cas similaire au vôtre&nbsp;? Discutons-en.
              </h2>
            </div>
            <a
              href="/#contact"
              className="inline-flex items-center gap-2 rounded-full border border-primary-foreground/30 bg-primary-foreground px-6 py-3.5 text-sm text-foreground transition-opacity hover:opacity-90"
            >
              Prendre contact
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </section>
      </main>
      <footer className="border-t border-border py-10">
        <div className="container-studio text-xs text-muted-foreground">
          © {new Date().getFullYear()} Claria Studio
        </div>
      </footer>
    </div>
  );
};

export default Projets;