import {
  Database,
  LineChart,
  Lightbulb,
  Store,
  ShoppingBag,
  Briefcase,
  Building2,
  ShieldCheck,
  Clock,
  FileText,
  CheckCircle2,
  type LucideIcon,
} from "lucide-react";
import servicesJson from "@/content/services.json";
import projectsJson from "@/content/projects.json";
import siteJson from "@/content/site.json";
import heroJson from "@/content/hero.json";
import profileJson from "@/content/profile.json";
import audiencesJson from "@/content/audiences.json";
import methodJson from "@/content/method.json";
import reassuranceJson from "@/content/reassurance.json";
import faqJson from "@/content/faq.json";
import contactJson from "@/content/contact.json";

// Map icon names from JSON to Lucide components
export const iconMap: Record<string, LucideIcon> = {
  Database,
  LineChart,
  Lightbulb,
  Store,
  ShoppingBag,
  Briefcase,
  Building2,
  ShieldCheck,
  Clock,
  FileText,
  CheckCircle2,
};

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

export const services: Service[] = (servicesJson.items as any[]).map((s) => ({
  ...s,
  icon: iconMap[s.icon] ?? Database,
}));

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

export const projects: Project[] = projectsJson.items as Project[];

export const sectors = Array.from(new Set(projects.map((p) => p.sector)));
export const deliverableTypes = Array.from(
  new Set(projects.map((p) => p.deliverableType))
);

export const SITE = siteJson;

// Re-export raw content for pages
export const HERO = heroJson;
export const PROFILE = profileJson;
export const AUDIENCES = audiencesJson;
export const METHOD = methodJson;
export const REASSURANCE = reassuranceJson;
export const FAQ = faqJson;
export const CONTACT = contactJson;