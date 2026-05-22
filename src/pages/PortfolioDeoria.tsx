import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Battery, Wrench, Radio, ShieldCheck, Cable } from "lucide-react";

const marketContext = [
  {
    heading: "The PuVVNL Problem",
    body: "PuVVNL's distribution grid across Deoria, Barhaj, Gauri Bazar, and Salempur is structurally unstable. Load shedding, voltage spikes, and transformer burnouts are the baseline operating environment. Standard grid-tie solar with no storage is not a solution here.",
    span: "md:col-span-2",
  },
  {
    heading: "The Wiring Problem Nobody Talks About",
    body: "Security cameras, automation hardware, and solar inverters fail early in Deoria because the underlying electrical and ethernet wiring cannot handle PuVVNL-grade voltage surges. We audit the wiring before every deployment.",
    span: "md:col-span-1",
  },
  {
    heading: "Broadband Is Not a Given",
    body: "Fiber penetration in Deoria sits around 31%, and what exists goes down in monsoon season. We design telecom deployments with weather-resistant infrastructure and power-independent contingency architecture.",
    span: "md:col-span-1",
  },
  {
    heading: "The Value Proposition Is Different Here",
    body: "In Lucknow, solar reduces your monthly electricity bill. In Deoria, solar prevents your business from going dark for eight hours a day. That is a different conversation and a different system specification.",
    span: "md:col-span-2",
  },
];

const services = [
  { icon: Sun, heading: "Off-Grid Solar with BESS", body: "Heavy-duty solar microgrids with Battery Energy Storage Systems for commercial and agricultural enterprises. The value is operational continuity when PuVVNL fails for extended periods.", tags: ["Off-Grid Solar", "BESS", "Microgrid", "PuVVNL Independent"] },
  { icon: Battery, heading: "Commercial Solar EPC", body: "Turnkey solar installation for factories, cold storage, retail, and agri-processing units across Deoria, Barhaj, Gauri Bazar, and Salempur.", tags: ["Solar EPC", "Commercial Solar", "Agricultural Solar"] },
  { icon: Wrench, heading: "Solar Annual Maintenance", body: "AMC services for existing solar installations. BESS health checks, inverter servicing, panel performance assessments, and surge protection audits.", tags: ["Solar AMC", "BESS Maintenance", "Deoria Service"] },
  { icon: Radio, heading: "Telecom Deployment", body: "Telecom network installation and field support. Armored aerial infrastructure. Power-independent design where grid access is unstable. Built for monsoon conditions.", tags: ["Telecom Deoria", "Rural Fiber", "Weather-Proof"] },
  { icon: ShieldCheck, heading: "CCTV and Physical Security", body: "Dome and bullet CCTV, infrared night vision, biometric attendance hardware, and burglar alarm systems for commercial establishments and warehouses.", tags: ["CCTV Deoria", "Security Camera", "Biometric"] },
  { icon: Cable, heading: "Electrical and Ethernet Wiring", body: "Foundational electrical panel audits, surge-protection wiring upgrades, and structured ethernet cabling. We fix the base before installing anything on top of it.", tags: ["Wiring Audit", "Surge Protection", "Ethernet Cabling"] },
];

const caseStudies = [
  { heading: "Off-Grid Solar Microgrid, Cold Storage, Deoria", body: "Commercial cold storage with 8-12 hour daily PuVVNL outages. 25kW solar with 50kWh BESS deployed. Result: Uninterrupted refrigeration for 14 hours during grid failure windows." },
  { heading: "Wiring Audit and CCTV, Retail Chain, Salempur", body: "Four-outlet retail chain. Three prior CCTV installations had failed within 18 months each due to wiring faults. Full electrical audit and surge protection upgrade before hardware. Zero hardware failures at 12-month review." },
  { heading: "Telecom Infrastructure, MSME Cluster, Gauri Bazar", body: "Light industrial cluster with no reliable broadband. Monsoon aerial line damage causing monthly outages. Armored aerial deployment with generator-backed point of presence. 97% uptime across two monsoon seasons." },
];

function PortfolioDeoria() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-india-green/30 bg-white/70 px-3 py-1 text-xs font-medium text-india-green backdrop-blur">Regional Hub -- Deoria</span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Deoria Operations: <span className="text-india-gradient">Infrastructure Built for PuVVNL Reality</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">Deoria does not need solutions designed for Lucknow and scaled down. It needs systems engineered for extended grid outages, transformer burnouts, and Purvanchal weather. That is exactly what we build.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-india-navy px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5">Request a Site Audit <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/operations/for-profit" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-india-navy backdrop-blur hover:bg-secondary">View All Services</Link>
        </div>
      </motion.div>

      {/* Market Context Bento */}
      <section className="mt-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-2xl font-semibold text-india-navy sm:text-3xl">Market Context</motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {marketContext.map((card, i) => (
            <motion.div key={card.heading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className={`glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8 ${card.span}`}>
              <h3 className="text-lg font-semibold text-india-navy">{card.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mt-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-2xl font-semibold text-india-navy sm:text-3xl">Services in Deoria</motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={svc.heading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-india-green to-emerald-600 text-white shadow-md"><Icon className="h-5 w-5" /></div>
                <h3 className="text-base font-semibold text-india-navy">{svc.heading}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{svc.body}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (<span key={tag} className="rounded-full border border-india-green/20 bg-white/60 px-2.5 py-0.5 text-[11px] font-medium text-india-green backdrop-blur">{tag}</span>))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mt-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-2xl font-semibold text-india-navy sm:text-3xl">Project Highlights</motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.heading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8">
              <h3 className="text-base font-semibold text-india-navy">{cs.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cs.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PortfolioDeoria;
