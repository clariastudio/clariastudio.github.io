import {
  Database,
  LineChart,
  Lightbulb,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  slug: string;
  icon: LucideIcon;
  title: string;
  short: string;
  problem: string;
  action: string;
  deliverable: string;
  includes: string[];
  duration: string;
  pricing: string;
  pricingFrom: number;
  process: { step: string; desc: string }[];
  forWho: string[];
};

export const services: Service[] = [
  {
    slug: "donnees",
    icon: Database,
    title: "Nettoyage & préparation de données",
    short: "Consolider, fiabiliser et structurer vos données pour qu’elles deviennent exploitables.",
    problem:
      "Des fichiers éparpillés, incohérents ou incomplets qui bloquent toute analyse.",
    action:
      "Nous consolidons vos sources, corrigeons les écarts et structurons vos données dans un format fiable et réutilisable.",
    deliverable:
      "Base de données propre, documentation claire, fichiers sources normalisés.",
    includes: [
      "Audit des sources existantes (Excel, exports caisse, CRM, ERP…)",
      "Détection et correction des doublons, incohérences et valeurs manquantes",
      "Modélisation d’un schéma clair et documenté",
      "Scripts de transformation reproductibles (SQL / Python)",
    ],
    duration: "1 à 3 semaines",
    pricing: "À partir de 900 € HT",
    pricingFrom: 900,
    process: [
      { step: "Audit", desc: "Inventaire des sources, écarts et besoins." },
      { step: "Modélisation", desc: "Schéma cible documenté et validé." },
      { step: "Transformation", desc: "Scripts SQL/Python reproductibles." },
      { step: "Recette", desc: "Contrôles qualité et remise documentée." },
    ],
    forWho: ["TPE", "Commerces", "PME en croissance"],
  },
  {
    slug: "dashboard",
    icon: LineChart,
    title: "Dashboard & reporting",
    short:
      "Concevoir des tableaux de bord lisibles et des reportings automatisés centrés sur la décision.",
    problem:
      "Un suivi d’activité flou, fait à la main, chronophage et peu fiable.",
    action:
      "Nous concevons des tableaux de bord lisibles et des reportings automatisés centrés sur les indicateurs qui comptent.",
    deliverable:
      "Dashboard Power BI, reporting périodique, indicateurs de pilotage.",
    includes: [
      "Cadrage des indicateurs clés (CA, marge, panier moyen, rotation…)",
      "Conception graphique sobre, lisible, orientée décision",
      "Connexion aux sources et automatisation des rafraîchissements",
      "Formation à la lecture & courte documentation utilisateur",
    ],
    duration: "2 à 4 semaines",
    pricing: "À partir de 1 500 € HT",
    pricingFrom: 1500,
    process: [
      { step: "Cadrage", desc: "Indicateurs clés et décisions à éclairer." },
      { step: "Maquette", desc: "Wireframes du dashboard validés ensemble." },
      { step: "Construction", desc: "Connexions, calculs, mise en forme." },
      { step: "Mise en service", desc: "Automatisation, formation, doc." },
    ],
    forWho: ["Commerces & restauration", "E-commerce", "PME"],
  },
  {
    slug: "analyse",
    icon: Lightbulb,
    title: "Analyse business & recommandations",
    short:
      "Faire émerger des leviers d’action concrets à partir de vos ventes, clients et performances.",
    problem:
      "Beaucoup de données, peu d’enseignements concrets pour décider.",
    action:
      "Nous analysons vos ventes, clients et performances pour faire émerger des leviers d’action clairs.",
    deliverable:
      "Rapport d’analyse synthétique, recommandations priorisées, restitution.",
    includes: [
      "Analyse des ventes, des clients, des produits ou de la performance opérationnelle",
      "Identification des signaux faibles et des leviers d’action",
      "Rapport synthétique pensé pour la décision (pas pour la décoration)",
      "Restitution orale et plan d’action priorisé",
    ],
    duration: "1 à 2 semaines",
    pricing: "À partir de 1 200 € HT",
    pricingFrom: 1200,
    process: [
      { step: "Question", desc: "Clarifier la décision à éclairer." },
      { step: "Exploration", desc: "Analyses ciblées et croisements." },
      { step: "Synthèse", desc: "Rapport sobre, priorisé, lisible." },
      { step: "Restitution", desc: "Présentation et plan d’action." },
    ],
    forWho: ["E-commerce", "Commerces", "PME en croissance"],
  },
];

export type Project = {
  slug: string;
  tag: string;
  sector: string;
  title: string;
  summary: string;
  tools: string[];
  deliverable: string;
  deliverableType: "Dashboard" | "Analyse" | "Pipeline" | "Base de données";
  context: string;
  challenge: string;
  approach: string;
  outcome: string;
  metrics: string[];
};

export const projects: Project[] = [
  {
    slug: "coffee-shop-sales",
    tag: "Retail · F&B",
    sector: "Retail & F&B",
    title: "Coffee Shop Sales Analysis",
    summary:
      "Analyse des ventes d’un coffee shop pour identifier les heures fortes, les produits moteurs et les opportunités de marge.",
    tools: ["SQL", "Power BI"],
    deliverable: "Dashboard de ventes & recommandations opérationnelles",
    deliverableType: "Dashboard",
    context:
      "Un coffee shop urbain disposant d’un historique de ventes par ticket sur plusieurs mois, sans vision consolidée de la performance.",
    challenge:
      "Comprendre les heures à forte affluence, les produits qui tirent réellement la marge, et les jours sous-exploités.",
    approach:
      "Consolidation des exports de caisse en SQL, création d’une base propre, modélisation d’un dashboard Power BI orienté pilotage quotidien.",
    outcome:
      "Identification de 3 plages horaires sous-staffées et de 5 produits à fort potentiel de mise en avant. Reporting hebdomadaire automatisé.",
    metrics: ["+ Lecture quotidienne du CA", "5 produits prioritaires identifiés", "3 leviers planning"],
  },
  {
    slug: "pharmacy-data",
    tag: "Santé · Retail",
    sector: "Santé",
    title: "Pharmacy Data Analysis",
    summary:
      "Exploitation des données de caisse d’une pharmacie : rotation produits, saisonnalité et structuration du catalogue.",
    tools: ["Python", "Power BI"],
    deliverable: "Rapport d’analyse & tableau de bord produits",
    deliverableType: "Analyse",
    context:
      "Une pharmacie indépendante souhaitant rationaliser son catalogue et mieux comprendre la saisonnalité de ses ventes.",
    challenge:
      "Faire émerger les produits réellement rentables, les références à faible rotation et les pics de demande.",
    approach:
      "Traitement des exports de caisse en Python, calcul de la rotation, segmentation produits, restitution sous Power BI.",
    outcome:
      "Catalogue rationalisé, mise en avant ciblée sur les produits saisonniers, vision claire des références à arbitrer.",
    metrics: ["Catalogue revu", "Saisonnalité cartographiée", "Suivi mensuel en place"],
  },
  {
    slug: "olist-ecommerce",
    tag: "E-commerce",
    sector: "E-commerce",
    title: "E-commerce Revenue & Customer Analysis — Olist",
    summary:
      "Analyse complète du chiffre d’affaires et du comportement client sur un dataset e-commerce multi-catégories.",
    tools: ["SQL", "Python", "Power BI"],
    deliverable: "Étude revenu, cohortes clients, indicateurs clés",
    deliverableType: "Analyse",
    context:
      "Dataset e-commerce multi-catégories (Olist) couvrant ventes, clients, livraisons et avis.",
    challenge:
      "Comprendre la composition du CA, identifier les catégories porteuses et le comportement de réachat des clients.",
    approach:
      "Modélisation SQL des tables, analyse Python (cohortes, panier moyen, délais), restitution visuelle Power BI.",
    outcome:
      "Vue claire du revenu par catégorie, identification des cohortes les plus fidèles et des points de friction logistiques.",
    metrics: ["CA décomposé", "Cohortes clients", "Friction logistique identifiée"],
  },
  {
    slug: "legacy-postgres",
    tag: "Data Engineering",
    sector: "Data Engineering",
    title: "Legacy Data Consolidation into PostgreSQL",
    summary:
      "Consolidation de données historiques dispersées vers une base PostgreSQL structurée, documentée et requêtable.",
    tools: ["PostgreSQL", "Python"],
    deliverable: "Schéma relationnel, scripts d’ingestion, documentation",
    deliverableType: "Base de données",
    context:
      "Plusieurs années d’historique réparties entre fichiers Excel, exports CSV et extractions ponctuelles, sans socle commun.",
    challenge:
      "Reconstituer un historique fiable, requêtable et exploitable pour les analyses futures.",
    approach:
      "Conception d’un schéma relationnel PostgreSQL, scripts d’ingestion Python idempotents, contrôles de qualité automatisés.",
    outcome:
      "Base unique, documentée, prête à alimenter analyses et dashboards sans retraitement manuel.",
    metrics: ["1 base unifiée", "Scripts reproductibles", "Documentation livrée"],
  },
  {
    slug: "real-estate-pipeline",
    tag: "Immobilier",
    sector: "Immobilier",
    title: "Real Estate Data Collection & Structuring Pipeline",
    summary:
      "Pipeline de collecte et de structuration de données immobilières pour alimenter un socle analytique exploitable.",
    tools: ["Python", "PostgreSQL"],
    deliverable: "Pipeline de collecte, base structurée, jeux prêts à l’analyse",
    deliverableType: "Pipeline",
    context:
      "Besoin d’un socle analytique alimenté par des données de marché immobilier collectées de manière régulière.",
    challenge:
      "Mettre en place une collecte fiable, structurée et maintenable dans le temps.",
    approach:
      "Pipeline Python modulaire, normalisation des champs clés, stockage PostgreSQL, contrôles qualité à chaque étape.",
    outcome:
      "Socle analytique vivant, alimenté en continu, prêt pour des analyses de marché ou des tableaux de bord.",
    metrics: ["Collecte automatisée", "Données normalisées", "Socle pérenne"],
  },
];

export const sectors = Array.from(new Set(projects.map((p) => p.sector)));
export const deliverableTypes = Array.from(
  new Set(projects.map((p) => p.deliverableType))
);

export const SITE = {
  name: "Claria Studio",
  url: "https://claria.studio",
  baseDescription:
    "Studio indépendant spécialisé en analyse de données, reporting et tableaux de bord pour petites entreprises.",
};