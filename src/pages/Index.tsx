import { ArrowUpRight, Mail, MessageCircle, Github, Linkedin, Database, LineChart, Lightbulb } from "lucide-react";
import Nav from "@/components/claria/Nav";
import Hero from "@/components/claria/Hero";

const services = [
  {
    icon: Database,
    title: "Nettoyage & préparation de données",
    problem: "Des fichiers éparpillés, incohérents ou incomplets qui bloquent toute analyse.",
    action: "Nous consolidons vos sources, corrigeons les écarts et structurons vos données dans un format fiable et réutilisable.",
    deliverable: "Base de données propre, documentation claire, fichiers sources normalisés.",
  },
  {
    icon: LineChart,
    title: "Dashboard & reporting",
    problem: "Un suivi d’activité flou, fait à la main, chronophage et peu fiable.",
    action: "Nous concevons des tableaux de bord lisibles et des reportings automatisés centrés sur les indicateurs qui comptent.",
    deliverable: "Dashboard Power BI, reporting périodique, indicateurs de pilotage.",
  },
  {
    icon: Lightbulb,
    title: "Analyse business & recommandations",
    problem: "Beaucoup de données, peu d’enseignements concrets pour décider.",
    action: "Nous analysons vos ventes, clients et performances pour faire émerger des leviers d’action clairs.",
    deliverable: "Rapport d’analyse synthétique, recommandations priorisées, restitution.",
  },
];

const projects = [
  {
    tag: "Retail · F&B",
    title: "Coffee Shop Sales Analysis",
    summary: "Analyse des ventes d’un coffee shop pour identifier les heures fortes, les produits moteurs et les opportunités de marge.",
    tools: ["SQL", "Power BI"],
    deliverable: "Dashboard de ventes & recommandations opérationnelles",
  },
  {
    tag: "Santé · Retail",
    title: "Pharmacy Data Analysis",
    summary: "Exploitation des données de caisse d’une pharmacie : rotation produits, saisonnalité et structuration du catalogue.",
    tools: ["Python", "Power BI"],
    deliverable: "Rapport d’analyse & tableau de bord produits",
  },
  {
    tag: "E-commerce",
    title: "E-commerce Revenue & Customer Analysis — Olist",
    summary: "Analyse complète du chiffre d’affaires et du comportement client sur un dataset e-commerce multi-catégories.",
    tools: ["SQL", "Python", "Power BI"],
    deliverable: "Étude revenu, cohortes clients, indicateurs clés",
  },
  {
    tag: "Data Engineering",
    title: "Legacy Data Consolidation into PostgreSQL",
    summary: "Consolidation de données historiques dispersées vers une base PostgreSQL structurée, documentée et requêtable.",
    tools: ["PostgreSQL", "Python"],
    deliverable: "Schéma relationnel, scripts d’ingestion, documentation",
  },
  {
    tag: "Immobilier (anonymisé)",
    title: "Real Estate Data Collection & Structuring Pipeline",
    summary: "Pipeline de collecte et de structuration de données immobilières pour alimenter un socle analytique exploitable.",
    tools: ["Python", "PostgreSQL"],
    deliverable: "Pipeline de collecte, base structurée, jeux prêts à l’analyse",
  },
];

const method = [
  { n: "01", t: "Comprendre le besoin", d: "On clarifie l’objectif business, les décisions à éclairer et les contraintes existantes." },
  { n: "02", t: "Structurer les données", d: "On consolide les sources, on nettoie, on met en forme un socle fiable et documenté." },
  { n: "03", t: "Analyser & visualiser", d: "On construit des indicateurs lisibles, des tableaux de bord utiles et des analyses ciblées." },
  { n: "04", t: "Restituer clairement", d: "On livre une restitution sobre, pédagogique, pensée pour être utilisée au quotidien." },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />

        {/* STUDIO */}
        <section id="studio" className="border-t border-border py-24 md:py-32">
          <div className="container-studio grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">Le studio</span>
            </div>
            <div className="md:col-span-8">
              <h2 className="text-3xl leading-tight md:text-5xl">
                Un studio indépendant dédié à la lisibilité de l’activité.
              </h2>
              <div className="mt-8 space-y-5 text-lg text-muted-foreground">
                <p>
                  Claria Studio est un studio indépendant spécialisé en analyse de données,
                  reporting et tableaux de bord. Nous intervenons auprès de petites entreprises,
                  commerces et structures en croissance qui disposent de données, mais peinent
                  à les exploiter.
                </p>
                <p>
                  Notre approche reste simple&nbsp;: comprendre l’activité, structurer les
                  données existantes et livrer des outils clairs pour décider. Sans jargon
                  inutile, sans surcouche technique, et avec un souci constant de rigueur.
                </p>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-10 gap-y-4 border-t border-border pt-6">
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Founder</div>
                  <div className="mt-1 text-foreground">Haitham Taous</div>
                </div>
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Outils</div>
                  <div className="mt-1 text-foreground">SQL · Python · PostgreSQL · Power BI</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="border-t border-border bg-muted/40 py-24 md:py-32">
          <div className="container-studio">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Services</span>
                <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                  Trois manières d’éclairer votre activité.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Des prestations ciblées, orientées livrables, pensées pour des équipes
                qui ont besoin de clarté — pas d’une usine à gaz.
              </p>
            </div>

            <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-3">
              {services.map((s) => {
                const Icon = s.icon;
                return (
                  <article key={s.title} className="flex flex-col gap-6 bg-background p-8 md:p-10">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    <h3 className="text-2xl leading-tight">{s.title}</h3>
                    <div className="space-y-4 text-sm text-muted-foreground">
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Problème</div>
                        <p className="mt-1.5">{s.problem}</p>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Ce que nous faisons</div>
                        <p className="mt-1.5">{s.action}</p>
                      </div>
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Livrable</div>
                        <p className="mt-1.5">{s.deliverable}</p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* PROJETS */}
        <section id="projets" className="border-t border-border py-24 md:py-32">
          <div className="container-studio">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Études de cas</span>
                <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                  Des projets concrets, des livrables utiles.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Extraits d’interventions réalisées — du commerce de proximité à la
                consolidation de données historiques.
              </p>
            </div>

            <ol className="mt-16 divide-y divide-border border-y border-border">
              {projects.map((p, i) => (
                <li key={p.title} className="group">
                  <a
                    href="#contact"
                    className="grid grid-cols-12 gap-6 py-8 transition-colors hover:bg-muted/40 md:py-10"
                  >
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
                      <ArrowUpRight className="h-5 w-5 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-foreground" />
                    </div>
                  </a>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* METHODE */}
        <section id="methode" className="border-t border-border bg-muted/40 py-24 md:py-32">
          <div className="container-studio">
            <div className="grid gap-16 md:grid-cols-12">
              <div className="md:col-span-4">
                <span className="eyebrow">Méthode</span>
                <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                  Une démarche simple, rigoureuse, documentée.
                </h2>
                <p className="mt-6 text-muted-foreground">
                  Quatre étapes pour passer de données dispersées à des décisions
                  éclairées, sans surcharge ni promesse creuse.
                </p>
              </div>
              <ol className="md:col-span-8 md:border-l md:border-border md:pl-10">
                {method.map((m) => (
                  <li key={m.n} className="grid grid-cols-12 gap-6 border-b border-border py-8 last:border-b-0">
                    <div className="col-span-3 font-serif text-3xl text-muted-foreground md:col-span-2">{m.n}</div>
                    <div className="col-span-9 md:col-span-10">
                      <h3 className="text-xl md:text-2xl">{m.t}</h3>
                      <p className="mt-2 text-muted-foreground">{m.d}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* CONTACT */}
        <section id="contact" className="border-t border-border bg-foreground py-24 text-primary-foreground md:py-32">
          <div className="container-studio">
            <span className="eyebrow text-primary-foreground/60">Contact</span>
            <h2 className="mt-4 max-w-3xl text-4xl leading-tight text-primary-foreground md:text-6xl">
              Parlons de vos données, de vos indicateurs, et de ce qu’il reste à clarifier.
            </h2>
            <p className="mt-6 max-w-xl text-primary-foreground/70">
              Un projet, une question, un besoin de cadrage&nbsp;? Écrivez-nous —
              nous revenons vers vous rapidement.
            </p>

            <div className="mt-12 grid gap-4 md:grid-cols-2">
              <a
                href="mailto:contact@claria.studio"
                className="group flex items-center justify-between gap-4 rounded-sm border border-primary-foreground/15 p-6 transition-colors hover:border-primary-foreground/40"
              >
                <div className="flex items-center gap-4">
                  <Mail className="h-5 w-5 text-primary-foreground/70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Email</div>
                    <div className="mt-1">contact@claria.studio</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/0000000000"
                className="group flex items-center justify-between gap-4 rounded-sm border border-primary-foreground/15 p-6 transition-colors hover:border-primary-foreground/40"
              >
                <div className="flex items-center gap-4">
                  <MessageCircle className="h-5 w-5 text-primary-foreground/70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">WhatsApp</div>
                    <div className="mt-1">Message direct</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://github.com/"
                className="group flex items-center justify-between gap-4 rounded-sm border border-primary-foreground/15 p-6 transition-colors hover:border-primary-foreground/40"
              >
                <div className="flex items-center gap-4">
                  <Github className="h-5 w-5 text-primary-foreground/70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">GitHub</div>
                    <div className="mt-1">Projets & code</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://linkedin.com/"
                className="group flex items-center justify-between gap-4 rounded-sm border border-primary-foreground/15 p-6 transition-colors hover:border-primary-foreground/40"
              >
                <div className="flex items-center gap-4">
                  <Linkedin className="h-5 w-5 text-primary-foreground/70" strokeWidth={1.5} />
                  <div>
                    <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">LinkedIn</div>
                    <div className="mt-1">Réseau professionnel</div>
                  </div>
                </div>
                <ArrowUpRight className="h-5 w-5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-border py-10">
        <div className="container-studio flex flex-col items-start justify-between gap-4 text-sm text-muted-foreground md:flex-row md:items-center">
          <div className="flex items-baseline gap-1.5">
            <span className="font-serif text-xl text-foreground">Claria</span>
            <span className="text-xs uppercase tracking-[0.22em]">Studio</span>
          </div>
          <div>© {new Date().getFullYear()} Claria Studio — Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
