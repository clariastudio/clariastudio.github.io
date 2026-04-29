import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import Nav from "@/components/claria/Nav";
import Seo from "@/components/Seo";
import { services, SITE } from "@/data/studio";

const Services = () => {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Services Claria Studio",
    itemListElement: services.map((s, i) => ({
      "@type": "Service",
      position: i + 1,
      name: s.title,
      description: s.short,
      provider: { "@type": "Organization", name: SITE.name, url: SITE.url },
      offers: {
        "@type": "Offer",
        priceCurrency: "EUR",
        price: s.pricingFrom,
        priceSpecification: {
          "@type": "PriceSpecification",
          priceCurrency: "EUR",
          price: s.pricingFrom,
          valueAddedTaxIncluded: false,
        },
      },
    })),
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Services — Analyse de données, dashboards & reporting"
        description="Trois prestations claires : préparation de données, dashboards & reporting, analyse business. Livrables, durées et tarifs à partir de 900 € HT."
        path="/services"
        jsonLd={jsonLd}
      />
      <Nav />
      <main>
        {/* HERO */}
        <section className="border-b border-border pt-36 pb-16 md:pt-44 md:pb-24">
          <div className="container-studio">
            <span className="eyebrow">Services</span>
            <h1 className="mt-6 max-w-4xl text-4xl leading-[1.05] tracking-tight md:text-7xl">
              Trois manières d’éclairer <em className="italic text-muted-foreground">votre activité</em>.
            </h1>
            <p className="mt-8 max-w-2xl text-lg text-muted-foreground md:text-xl">
              Des prestations ciblées, orientées livrables. Un cadrage offert
              avant tout engagement, des délais clairs, et des outils
              documentés que vous pouvez utiliser en autonomie.
            </p>
          </div>
        </section>

        {/* GRILLE TARIFAIRE */}
        <section className="border-b border-border bg-muted/40 py-16 md:py-20">
          <div className="container-studio">
            <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">À partir de</span>
                <h2 className="mt-3 text-2xl md:text-3xl">Grille tarifaire indicative</h2>
              </div>
              <p className="max-w-md text-sm text-muted-foreground">
                Tarifs HT pour mission standard. Chaque devis est calibré après
                un cadrage gratuit de 30 minutes.
              </p>
            </div>
            <div className="mt-10 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {services.map((s) => (
                <a
                  key={s.slug}
                  href={`#${s.slug}`}
                  className="group flex items-end justify-between gap-4 bg-background p-6 transition-colors hover:bg-muted/40"
                >
                  <div>
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      {s.title}
                    </div>
                    <div className="mt-3 font-serif text-3xl text-foreground md:text-4xl">
                      {s.pricingFrom.toLocaleString("fr-FR")} €
                    </div>
                    <div className="mt-1 text-xs text-muted-foreground">HT · à partir de</div>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* DÉTAIL DE CHAQUE SERVICE */}
        {services.map((s, idx) => {
          const Icon = s.icon;
          return (
            <section
              id={s.slug}
              key={s.slug}
              className={`border-b border-border py-24 md:py-32 ${idx % 2 ? "bg-muted/40" : ""}`}
            >
              <div className="container-studio grid gap-12 md:grid-cols-12">
                <div className="md:col-span-4">
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                    Service 0{idx + 1}
                  </div>
                  <Icon className="mt-6 h-7 w-7 text-accent" strokeWidth={1.5} />
                  <h2 className="mt-4 text-3xl leading-tight md:text-4xl">{s.title}</h2>
                  <p className="mt-4 text-muted-foreground">{s.short}</p>

                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-border pt-6 text-sm">
                    <div>
                      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Durée typique
                      </div>
                      <div className="mt-1 text-foreground">{s.duration}</div>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                        Tarif
                      </div>
                      <div className="mt-1 text-foreground">{s.pricing}</div>
                    </div>
                  </div>

                  <div className="mt-6">
                    <div className="text-xs uppercase tracking-[0.16em] text-muted-foreground">
                      Pour qui
                    </div>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {s.forWho.map((f) => (
                        <span key={f} className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground">
                          {f}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="md:col-span-8 md:border-l md:border-border md:pl-12">
                  <div className="grid gap-8 md:grid-cols-2">
                    <div>
                      <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Problème</div>
                      <p className="mt-2 text-muted-foreground">{s.problem}</p>
                    </div>
                    <div>
                      <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Notre approche</div>
                      <p className="mt-2 text-muted-foreground">{s.action}</p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Inclus dans la prestation</div>
                    <ul className="mt-4 grid gap-3 md:grid-cols-2">
                      {s.includes.map((it) => (
                        <li key={it} className="flex gap-3 text-sm text-muted-foreground">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                          <span>{it}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-10">
                    <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Processus</div>
                    <ol className="mt-4 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-4">
                      {s.process.map((p, i) => (
                        <li key={p.step} className="bg-background p-5">
                          <div className="font-serif text-2xl text-muted-foreground">0{i + 1}</div>
                          <div className="mt-2 text-sm font-medium text-foreground">{p.step}</div>
                          <div className="mt-1 text-xs text-muted-foreground">{p.desc}</div>
                        </li>
                      ))}
                    </ol>
                  </div>

                  <div className="mt-10 flex flex-wrap gap-4">
                    <a
                      href="/#contact"
                      className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm text-primary-foreground transition-opacity hover:opacity-90"
                    >
                      Discuter de ce service
                      <ArrowUpRight className="h-4 w-4" />
                    </a>
                    <Link
                      to="/projets"
                      className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm text-foreground transition-colors hover:border-foreground"
                    >
                      Voir des projets liés
                    </Link>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* CTA */}
        <section className="bg-foreground py-20 text-primary-foreground md:py-24">
          <div className="container-studio flex flex-col items-start justify-between gap-8 md:flex-row md:items-end">
            <div>
              <span className="eyebrow text-primary-foreground/60">Parlons-en</span>
              <h2 className="mt-4 max-w-2xl text-3xl leading-tight text-primary-foreground md:text-5xl">
                Un projet en tête&nbsp;? Cadrage offert, devis sous 48 h.
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

export default Services;