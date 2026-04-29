import {
  ArrowUpRight,
  Mail,
  MessageCircle,
  Github,
  Linkedin,
  Database,
  LineChart,
  Lightbulb,
  Store,
  Building2,
  Briefcase,
  ShoppingBag,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileText,
  Plus,
} from "lucide-react";
import Nav from "@/components/claria/Nav";
import Hero from "@/components/claria/Hero";
import Seo from "@/components/Seo";
import { SITE } from "@/data/studio";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const services = [
  {
    icon: Database,
    title: "Nettoyage & préparation de données",
    problem: "Des fichiers éparpillés, incohérents ou incomplets qui bloquent toute analyse.",
    action: "Nous consolidons vos sources, corrigeons les écarts et structurons vos données dans un format fiable et réutilisable.",
    deliverable: "Base de données propre, documentation claire, fichiers sources normalisés.",
    includes: [
      "Audit des sources existantes (Excel, exports caisse, CRM, ERP…)",
      "Détection et correction des doublons, incohérences et valeurs manquantes",
      "Modélisation d’un schéma clair et documenté",
      "Scripts de transformation reproductibles (SQL / Python)",
    ],
    duration: "1 à 3 semaines",
    pricing: "À partir de 900 € HT",
  },
  {
    icon: LineChart,
    title: "Dashboard & reporting",
    problem: "Un suivi d’activité flou, fait à la main, chronophage et peu fiable.",
    action: "Nous concevons des tableaux de bord lisibles et des reportings automatisés centrés sur les indicateurs qui comptent.",
    deliverable: "Dashboard Power BI, reporting périodique, indicateurs de pilotage.",
    includes: [
      "Cadrage des indicateurs clés (CA, marge, panier moyen, rotation…)",
      "Conception graphique sobre, lisible, orientée décision",
      "Connexion aux sources et automatisation des rafraîchissements",
      "Formation à la lecture & courte documentation utilisateur",
    ],
    duration: "2 à 4 semaines",
    pricing: "À partir de 1 500 € HT",
  },
  {
    icon: Lightbulb,
    title: "Analyse business & recommandations",
    problem: "Beaucoup de données, peu d’enseignements concrets pour décider.",
    action: "Nous analysons vos ventes, clients et performances pour faire émerger des leviers d’action clairs.",
    deliverable: "Rapport d’analyse synthétique, recommandations priorisées, restitution.",
    includes: [
      "Analyse des ventes, des clients, des produits ou de la performance opérationnelle",
      "Identification des signaux faibles et des leviers d’action",
      "Rapport synthétique pensé pour la décision (pas pour la décoration)",
      "Restitution orale et plan d’action priorisé",
    ],
    duration: "1 à 2 semaines",
    pricing: "À partir de 1 200 € HT",
  },
];

const projects = [
  {
    tag: "Retail · F&B",
    title: "Coffee Shop Sales Analysis",
    summary: "Analyse des ventes d’un coffee shop pour identifier les heures fortes, les produits moteurs et les opportunités de marge.",
    tools: ["SQL", "Power BI"],
    deliverable: "Dashboard de ventes & recommandations opérationnelles",
    context: "Un coffee shop urbain disposant d’un historique de ventes par ticket sur plusieurs mois, sans vision consolidée de la performance.",
    challenge: "Comprendre les heures à forte affluence, les produits qui tirent réellement la marge, et les jours sous-exploités.",
    approach: "Consolidation des exports de caisse en SQL, création d’une base propre, modélisation d’un dashboard Power BI orienté pilotage quotidien.",
    outcome: "Identification de 3 plages horaires sous-staffées et de 5 produits à fort potentiel de mise en avant. Reporting hebdomadaire automatisé.",
    metrics: ["+ Lecture quotidienne du CA", "5 produits prioritaires identifiés", "3 leviers planning"],
  },
  {
    tag: "Santé · Retail",
    title: "Pharmacy Data Analysis",
    summary: "Exploitation des données de caisse d’une pharmacie : rotation produits, saisonnalité et structuration du catalogue.",
    tools: ["Python", "Power BI"],
    deliverable: "Rapport d’analyse & tableau de bord produits",
    context: "Une pharmacie indépendante souhaitant rationaliser son catalogue et mieux comprendre la saisonnalité de ses ventes.",
    challenge: "Faire émerger les produits réellement rentables, les références à faible rotation et les pics de demande.",
    approach: "Traitement des exports de caisse en Python, calcul de la rotation, segmentation produits, restitution sous Power BI.",
    outcome: "Catalogue rationalisé, mise en avant ciblée sur les produits saisonniers, vision claire des références à arbitrer.",
    metrics: ["Catalogue revu", "Saisonnalité cartographiée", "Suivi mensuel en place"],
  },
  {
    tag: "E-commerce",
    title: "E-commerce Revenue & Customer Analysis — Olist",
    summary: "Analyse complète du chiffre d’affaires et du comportement client sur un dataset e-commerce multi-catégories.",
    tools: ["SQL", "Python", "Power BI"],
    deliverable: "Étude revenu, cohortes clients, indicateurs clés",
    context: "Dataset e-commerce multi-catégories (Olist) couvrant ventes, clients, livraisons et avis.",
    challenge: "Comprendre la composition du CA, identifier les catégories porteuses et le comportement de réachat des clients.",
    approach: "Modélisation SQL des tables, analyse Python (cohortes, panier moyen, délais), restitution visuelle Power BI.",
    outcome: "Vue claire du revenu par catégorie, identification des cohortes les plus fidèles et des points de friction logistiques.",
    metrics: ["CA décomposé", "Cohortes clients", "Friction logistique identifiée"],
  },
  {
    tag: "Data Engineering",
    title: "Legacy Data Consolidation into PostgreSQL",
    summary: "Consolidation de données historiques dispersées vers une base PostgreSQL structurée, documentée et requêtable.",
    tools: ["PostgreSQL", "Python"],
    deliverable: "Schéma relationnel, scripts d’ingestion, documentation",
    context: "Plusieurs années d’historique réparties entre fichiers Excel, exports CSV et extractions ponctuelles, sans socle commun.",
    challenge: "Reconstituer un historique fiable, requêtable et exploitable pour les analyses futures.",
    approach: "Conception d’un schéma relationnel PostgreSQL, scripts d’ingestion Python idempotents, contrôles de qualité automatisés.",
    outcome: "Base unique, documentée, prête à alimenter analyses et dashboards sans retraitement manuel.",
    metrics: ["1 base unifiée", "Scripts reproductibles", "Documentation livrée"],
  },
  {
    tag: "Immobilier (anonymisé)",
    title: "Real Estate Data Collection & Structuring Pipeline",
    summary: "Pipeline de collecte et de structuration de données immobilières pour alimenter un socle analytique exploitable.",
    tools: ["Python", "PostgreSQL"],
    deliverable: "Pipeline de collecte, base structurée, jeux prêts à l’analyse",
    context: "Besoin d’un socle analytique alimenté par des données de marché immobilier collectées de manière régulière.",
    challenge: "Mettre en place une collecte fiable, structurée et maintenable dans le temps.",
    approach: "Pipeline Python modulaire, normalisation des champs clés, stockage PostgreSQL, contrôles qualité à chaque étape.",
    outcome: "Socle analytique vivant, alimenté en continu, prêt pour des analyses de marché ou des tableaux de bord.",
    metrics: ["Collecte automatisée", "Données normalisées", "Socle pérenne"],
  },
];

const method = [
  { n: "01", t: "Comprendre le besoin", d: "On clarifie l’objectif business, les décisions à éclairer et les contraintes existantes." },
  { n: "02", t: "Structurer les données", d: "On consolide les sources, on nettoie, on met en forme un socle fiable et documenté." },
  { n: "03", t: "Analyser & visualiser", d: "On construit des indicateurs lisibles, des tableaux de bord utiles et des analyses ciblées." },
  { n: "04", t: "Restituer clairement", d: "On livre une restitution sobre, pédagogique, pensée pour être utilisée au quotidien." },
];

const audiences = [
  {
    icon: Store,
    title: "Commerces & restauration",
    desc: "Coffee shops, restaurants, boutiques : comprendre vos ventes, vos heures fortes, vos produits qui tirent la marge.",
  },
  {
    icon: ShoppingBag,
    title: "E-commerce & DNVB",
    desc: "Suivre le CA, les cohortes clients, le panier moyen et les leviers de fidélisation.",
  },
  {
    icon: Briefcase,
    title: "TPE & professions libérales",
    desc: "Pharmacies, cabinets, agences : un pilotage simple, fiable, sans usine à gaz.",
  },
  {
    icon: Building2,
    title: "PME en croissance",
    desc: "Structurer la donnée existante avant qu’elle ne devienne un frein à la décision.",
  },
];

const reassurance = [
  {
    icon: ShieldCheck,
    title: "Confidentialité par défaut",
    desc: "Données traitées de manière confidentielle, environnement isolé, anonymisation possible sur demande.",
  },
  {
    icon: Clock,
    title: "Délais clairs",
    desc: "Un calendrier annoncé en début de mission, des points d’étape réguliers, des livrables datés.",
  },
  {
    icon: FileText,
    title: "Livrables documentés",
    desc: "Chaque livrable est accompagné d’une documentation simple pour que vous puissiez l’utiliser en autonomie.",
  },
  {
    icon: CheckCircle2,
    title: "Sans dépendance technique",
    desc: "Vous restez propriétaire de vos données, de vos scripts et de vos dashboards. Aucun verrouillage.",
  },
];

const faqs = [
  {
    q: "Faut-il déjà avoir une base de données ?",
    a: "Non. La plupart de nos clients démarrent avec des fichiers Excel, des exports de caisse ou de CRM. Notre rôle est justement de structurer ce qui existe avant d’aller plus loin.",
  },
  {
    q: "Travaillez-vous avec de petites structures ?",
    a: "Oui, c’est même notre cœur de cible. Commerces, TPE, PME en croissance, professions libérales : nous calibrons systématiquement la mission à votre taille et à votre maturité data.",
  },
  {
    q: "Combien de temps prend une mission type ?",
    a: "Une analyse ciblée : 1 à 2 semaines. Un dashboard de pilotage : 2 à 4 semaines. Une consolidation de données : 1 à 3 semaines. Chaque devis précise un calendrier engageant.",
  },
  {
    q: "Que se passe-t-il après la livraison ?",
    a: "Vous repartez avec des livrables documentés, utilisables en autonomie. Un accompagnement continu (suivi mensuel, évolutions) est possible mais jamais imposé.",
  },
  {
    q: "Quels outils utilisez-vous ?",
    a: "Principalement SQL, Python, PostgreSQL et Power BI. Nous nous adaptons à votre environnement existant lorsque c’est pertinent (Looker Studio, Metabase, Excel avancé).",
  },
  {
    q: "À qui appartiennent les données et les livrables ?",
    a: "À vous, intégralement. Scripts, modèles, dashboards et documentation vous sont remis. Aucun verrouillage technique, aucune dépendance.",
  },
];

const Index = () => {
  const jsonLd = [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SITE.name,
      url: SITE.url,
      description: SITE.baseDescription,
      founder: { "@type": "Person", name: "Haitham Taous" },
      areaServed: "Europe",
      email: "contact@claria.studio",
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SITE.name,
      url: SITE.url,
    },
  ];

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Seo
        title="Claria Studio — Analyse de données, reporting et tableaux de bord"
        description="Studio indépendant : reportings clairs, dashboards utiles et analyses exploitables pour petites entreprises et commerces. Cadrage offert."
        path="/"
        jsonLd={jsonLd}
      />
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
                <p>
                  Nous croyons qu’une donnée n’a de valeur que si elle se transforme en décision.
                  C’est ce qui guide chacune de nos missions&nbsp;: livrer des outils sobres,
                  pédagogiques et réellement utilisés au quotidien — pas des rapports qu’on
                  ouvre une fois.
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
                <div>
                  <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Disponibilité</div>
                  <div className="mt-1 text-foreground">Missions ponctuelles & continues</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* POUR QUI */}
        <section id="pour-qui" className="border-t border-border py-24 md:py-32">
          <div className="container-studio">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Pour qui</span>
                <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                  Pensé pour les structures qui veulent décider mieux, pas plus.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Nous travaillons avec des organisations à taille humaine, où chaque
                indicateur compte et où la clarté prime sur la complexité.
              </p>
            </div>
            <div className="mt-16 grid gap-px overflow-hidden rounded-sm border border-border bg-border md:grid-cols-2 lg:grid-cols-4">
              {audiences.map((a) => {
                const Icon = a.icon;
                return (
                  <div key={a.title} className="flex flex-col gap-4 bg-background p-8">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    <h3 className="text-xl leading-tight">{a.title}</h3>
                    <p className="text-sm text-muted-foreground">{a.desc}</p>
                  </div>
                );
              })}
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
                      <div>
                        <div className="text-xs uppercase tracking-[0.16em] text-foreground/70">Inclus</div>
                        <ul className="mt-2 space-y-1.5">
                          {s.includes.map((it) => (
                            <li key={it} className="flex gap-2">
                              <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0 text-accent" strokeWidth={1.75} />
                              <span>{it}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                    <div className="mt-auto grid grid-cols-2 gap-4 border-t border-border pt-5 text-xs">
                      <div>
                        <div className="uppercase tracking-[0.16em] text-muted-foreground">Durée</div>
                        <div className="mt-1 text-foreground">{s.duration}</div>
                      </div>
                      <div>
                        <div className="uppercase tracking-[0.16em] text-muted-foreground">Tarif</div>
                        <div className="mt-1 text-foreground">{s.pricing}</div>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
            <p className="mt-6 text-xs text-muted-foreground">
              Tarifs indicatifs. Chaque mission fait l’objet d’un devis détaillé après cadrage.
            </p>
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
                <li key={p.title}>
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
                <div className="mt-8 space-y-3 text-sm text-muted-foreground">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                    <span>Cadrage offert avant tout engagement.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                    <span>Devis détaillé, calendrier engageant.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent" strokeWidth={1.75} />
                    <span>Livrables documentés, autonomie garantie.</span>
                  </div>
                </div>
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

        {/* REASSURANCE */}
        <section id="engagements" className="border-t border-border py-24 md:py-32">
          <div className="container-studio">
            <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow">Engagements</span>
                <h2 className="mt-4 max-w-2xl text-3xl leading-tight md:text-5xl">
                  Ce sur quoi vous pouvez compter.
                </h2>
              </div>
              <p className="max-w-md text-muted-foreground">
                Une relation de travail saine repose sur des règles claires.
                Voici les nôtres, valables sur chaque mission.
              </p>
            </div>
            <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {reassurance.map((r) => {
                const Icon = r.icon;
                return (
                  <div key={r.title} className="flex flex-col gap-4 border-t border-border pt-6">
                    <Icon className="h-6 w-6 text-accent" strokeWidth={1.5} />
                    <h3 className="text-xl leading-tight">{r.title}</h3>
                    <p className="text-sm text-muted-foreground">{r.desc}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="border-t border-border bg-muted/40 py-24 md:py-32">
          <div className="container-studio grid gap-16 md:grid-cols-12">
            <div className="md:col-span-4">
              <span className="eyebrow">FAQ</span>
              <h2 className="mt-4 text-3xl leading-tight md:text-5xl">
                Questions fréquentes.
              </h2>
              <p className="mt-6 text-muted-foreground">
                Une question qui n’est pas listée&nbsp;?{" "}
                <a href="#contact" className="text-foreground underline underline-offset-4">
                  Écrivez-nous directement
                </a>
                .
              </p>
            </div>
            <div className="md:col-span-8">
              <Accordion type="single" collapsible className="border-t border-border">
                {faqs.map((f, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border-b border-border">
                    <AccordionTrigger className="py-6 text-left text-lg font-normal hover:no-underline md:text-xl">
                      {f.q}
                    </AccordionTrigger>
                    <AccordionContent className="pb-6 text-base text-muted-foreground">
                      {f.a}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
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

            <div className="mt-12 grid gap-6 border-y border-primary-foreground/15 py-8 md:grid-cols-3">
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Cadrage initial</div>
                <div className="mt-2 text-primary-foreground">Offert · 30 min</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Réponse</div>
                <div className="mt-2 text-primary-foreground">Sous 48 h ouvrées</div>
              </div>
              <div>
                <div className="text-xs uppercase tracking-[0.18em] text-primary-foreground/60">Zone d’intervention</div>
                <div className="mt-2 text-primary-foreground">À distance · Europe</div>
              </div>
            </div>

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
        <div className="container-studio">
          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="flex items-baseline gap-1.5">
                <span className="font-serif text-2xl text-foreground">Claria</span>
                <span className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Studio</span>
              </div>
              <p className="mt-4 max-w-sm text-sm text-muted-foreground">
                Studio indépendant spécialisé en analyse de données, reporting et
                tableaux de bord pour petites structures.
              </p>
            </div>
            <div className="md:col-span-3">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Navigation</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="#studio" className="text-foreground hover:text-accent">Studio</a></li>
                <li><a href="#services" className="text-foreground hover:text-accent">Services</a></li>
                <li><a href="#projets" className="text-foreground hover:text-accent">Projets</a></li>
                <li><a href="#methode" className="text-foreground hover:text-accent">Méthode</a></li>
                <li><a href="#faq" className="text-foreground hover:text-accent">FAQ</a></li>
              </ul>
            </div>
            <div className="md:col-span-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">Contact</div>
              <ul className="mt-4 space-y-2 text-sm">
                <li><a href="mailto:contact@claria.studio" className="text-foreground hover:text-accent">contact@claria.studio</a></li>
                <li className="text-muted-foreground">Réponse sous 48 h ouvrées</li>
                <li className="text-muted-foreground">À distance · Europe</li>
              </ul>
            </div>
          </div>
          <div className="mt-12 flex flex-col items-start justify-between gap-2 border-t border-border pt-6 text-xs text-muted-foreground md:flex-row md:items-center">
            <div>© {new Date().getFullYear()} Claria Studio — Tous droits réservés.</div>
            <div>Conçu avec rigueur, livré avec clarté.</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
