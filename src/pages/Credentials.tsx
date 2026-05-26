import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileText,
  Award,
  Building2,
  BadgeCheck,
  Store,
  Landmark,
  Clock,
} from "lucide-react";

interface Credential {
  icon: React.ReactNode;
  title: string;
  description: string;
  status?: "active" | "coming-soon";
  ref?: string;
}

const credentials: Credential[] = [
  {
    icon: <FileText className="h-7 w-7 text-saffron" />,
    title: "Trust Registration Deed",
    description:
      "Rao Sewa Nyas is a duly registered charitable Trust under the applicable Trust Act of Uttar Pradesh, establishing our legal standing as a non-profit entity.",
    status: "active",
    ref: "Registered Trust",
  },
  {
    icon: <ShieldCheck className="h-7 w-7 text-saffron" />,
    title: "NITI Aayog (NGO Darpan)",
    description:
      "Registered on the Government of India's NGO Darpan portal, maintained by NITI Aayog, verifying our credibility and enabling access to government schemes.",
    status: "active",
    ref: "NGO Darpan Portal",
  },
  {
    icon: <Landmark className="h-7 w-7 text-saffron" />,
    title: "GST Registration",
    description:
      "Holding a valid Goods and Services Tax registration number, ensuring full compliance with India's indirect tax framework for our commercial verticals.",
    status: "active",
    ref: "GST Compliant",
  },
  {
    icon: <BadgeCheck className="h-7 w-7 text-saffron" />,
    title: "PAN & TAN",
    description:
      "Permanent Account Number (PAN) and Tax Deduction Account Number (TAN) issued by the Income Tax Department of India for all financial and tax purposes.",
    status: "active",
    ref: "Income Tax Dept.",
  },
  {
    icon: <Building2 className="h-7 w-7 text-saffron" />,
    title: "MSME Udyam Registration",
    description:
      "Registered under the Ministry of MSME's Udyam portal, qualifying Rao Sewa Nyas for government schemes, priority sector benefits, and preferential procurement.",
    status: "active",
    ref: "Ministry of MSME",
  },
  {
    icon: <Store className="h-7 w-7 text-saffron" />,
    title: "GeM Portal Registration",
    description:
      "Registered seller on the Government e-Marketplace (GeM), enabling our enterprise verticals to participate in central and state government procurement tenders.",
    status: "active",
    ref: "GeM Portal",
  },
  {
    icon: <Award className="h-7 w-7 text-india-green" />,
    title: "12A Certificate",
    description:
      "Income Tax Act Section 12A registration, granting tax exemption on the Trust's income and enabling our enterprise profits to directly fund our non-profit mission.",
    status: "coming-soon",
    ref: "Income Tax Dept.",
  },
  {
    icon: <Award className="h-7 w-7 text-india-green" />,
    title: "80G Certificate",
    description:
      "Section 80G certification from the Income Tax Department, which will allow our donors to claim deductions on their taxable income for contributions to Rao Sewa Nyas.",
    status: "coming-soon",
    ref: "Income Tax Dept.",
  },
];

function Credentials() {
  return (
    <div className="container mx-auto px-4 pt-28 md:pt-32 pb-16">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-white/70 px-3 py-1 text-xs font-medium text-saffron backdrop-blur">
          Verified &amp; Compliant
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Official Credentials &amp;{" "}
          <span className="text-india-gradient">Recognitions</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Transparency and compliance are the foundation of our operations.
          Explore our official registrations and government recognitions.
        </p>
      </motion.div>

      {/* ── Credentials Grid ───────────────────────────────────── */}
      <div className="mx-auto mt-16 max-w-6xl grid grid-cols-1 gap-6 md:grid-cols-3 lg:grid-cols-4">
        {credentials.map((cred, index) => (
          <motion.div
            key={cred.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.07 }}
            className="glass-card relative rounded-2xl p-6 transition-transform hover:-translate-y-1 cursor-default"
          >
            {cred.status === "coming-soon" && (
              <span className="absolute top-4 right-4 inline-flex items-center gap-1 rounded-full bg-india-navy/10 px-2.5 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-india-navy">
                <Clock className="h-3 w-3" />
                Coming Soon
              </span>
            )}
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-saffron/10">
              {cred.icon}
            </div>
            <h2 className="text-base font-semibold text-india-navy sm:text-lg leading-snug">
              {cred.title}
            </h2>
            {cred.ref && (
              <p className="mt-1 text-[11px] font-medium uppercase tracking-wide text-saffron">
                {cred.ref}
              </p>
            )}
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {cred.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ── Trust Note ─────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="mx-auto mt-14 max-w-2xl text-center"
      >
        <p className="text-sm text-muted-foreground">
          All documents are available for inspection by government bodies,
          grant-making institutions, and serious enterprise partners. Reach out
          via our{" "}
          <a
            href="/contact"
            className="font-medium text-saffron underline-offset-4 hover:underline"
          >
            Contact page
          </a>{" "}
          to request certified copies.
        </p>
      </motion.div>
    </div>
  );
}

export default Credentials;
