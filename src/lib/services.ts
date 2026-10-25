import {
  Cpu,
  Monitor,
  Radio,
  ShieldCheck,
  Sun,
  Zap,
  Building2,
  BarChart3,
  TrendingUp,
  Megaphone,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type Service = {
  name: string;
  tagline: string;
  url: string;
  icon: LucideIcon;
  accent: string; // tailwind classes for icon bg
};

export const services: Service[] = [
  {
    name: "Energy Solutions",
    tagline:
      "Comprehensive energy solutions including inverters and batteries for residential and commercial needs.",
    url: "https://es.raosewanyas.org/",
    icon: Zap,
    accent: "from-orange-400 to-amber-500",
  },
  {
    name: "Solar Solutions",
    tagline:
      "Advanced solar power systems and deep cycle batteries for sustainable and off-grid energy generation.",
    url: "https://ss.raosewanyas.org/",
    icon: Sun,
    accent: "from-amber-400 to-orange-500",
  },
  {
    name: "Telecom Services",
    tagline:
      "Reliable telecommunication infrastructure and connectivity services for modern enterprises.",
    url: "https://ts.raosewanyas.org/",
    icon: Radio,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Automation Services",
    tagline:
      "Smart home and industrial automation systems designed for efficiency and seamless control.",
    url: "https://as.raosewanyas.org/",
    icon: Cpu,
    accent: "from-violet-400 to-indigo-600",
  },
  {
    name: "Surveilance & Security Services",
    tagline:
      "State of the art surveillance and security solutions to protect your physical and digital assets.",
    url: "https://sss.raosewanyas.org/",
    icon: ShieldCheck,
    accent: "from-rose-400 to-red-500",
  },
  {
    name: "IT Enabled Services",
    tagline:
      "Custom software development, digital infrastructure, and IT consulting to drive business growth.",
    url: "https://ites.raosewanyas.org/",
    icon: Monitor,
    accent: "from-emerald-400 to-teal-500",
  },
  {
    name: "Real Estate Services",
    tagline:
      "Verified properties across Residential, Commercial, and Industrial sectors for purchase, lease, and rent.",
    url: "https://res.raosewanyas.org/",
    icon: Building2,
    accent: "from-sky-400 to-blue-600",
  },
  {
    name: "E2E Data Collection & Analysis",
    tagline:
      "Field surveying, IoT telemetry ingestion, automated data pipelines, and predictive analytical intelligence.",
    url: "https://dss.raosewanyas.org/",
    icon: BarChart3,
    accent: "from-indigo-500 to-blue-600",
  },
  {
    name: "Managed 360 Marketing & Sales",
    tagline:
      "Full-funnel digital presence, enterprise lead generation pipelines, outreach execution, and commercial revenue acceleration.",
    url: "https://ms.raosewanyas.org/",
    icon: TrendingUp,
    accent: "from-fuchsia-500 to-rose-600",
  },
  {
    name: "Campaign Design & Management",
    tagline:
      "End-to-end creative concept development, multi-platform ad operations, public communications, and lifecycle tracking.",
    url: "https://cdm.raosewanyas.org/",
    icon: Megaphone,
    accent: "from-teal-500 to-emerald-600",
  },
];
