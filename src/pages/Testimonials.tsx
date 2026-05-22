import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const testimonials = [
  {
    quote:
      "We had tried two other vendors for rooftop solar before Rao Sewa Nyas. Neither could navigate the MVVNL application process without stalling for months. RSN handled the subdivision coordination themselves and had the system commissioned in under 70 days. That is the difference.",
    name: "Director of Operations",
    org: "Commercial Institution, Lucknow",
    vertical: "Solar Solutions",
    accent: "from-saffron to-orange-500",
  },
  {
    quote:
      "Our factory in Deoria was running a generator eight hours a day because the PuVVNL grid is that unreliable. The off-grid solar microgrid RSN installed with battery storage has changed that completely. We have not run the generator once since commissioning.",
    name: "Managing Partner",
    org: "Manufacturing Unit, Deoria",
    vertical: "Energy Solutions",
    accent: "from-india-green to-emerald-600",
  },
  {
    quote:
      "When we were setting up our GCC pre-occupancy space in Hazratganj, we needed CCTV, biometric access, and a security baseline ready before the team moved in. RSN delivered across all three from a single scope. One vendor, one timeline, no coordination failures.",
    name: "Head of Infrastructure",
    org: "Global Capability Center, Lucknow",
    vertical: "Security Services",
    accent: "from-india-navy to-blue-700",
  },
  {
    quote:
      "Three previous CCTV installations at our Salempur outlets had failed within 18 months each. RSN came in, audited the electrical wiring before touching any hardware, and replaced the surge protection. That is the step nobody else had bothered with. No failures in 12 months.",
    name: "Operations Manager",
    org: "Retail Chain, Salempur",
    vertical: "Security Services",
    accent: "from-saffron to-orange-500",
  },
  {
    quote:
      "Our telecom infrastructure at the Gauri Bazar cluster went down every monsoon without fail. RSN rebuilt the aerial deployment with armored cabling and a generator-backed point of presence. Two monsoon seasons later we are sitting at 97% uptime.",
    name: "Cluster Coordinator",
    org: "MSME Industrial Cluster, Gauri Bazar",
    vertical: "Telecom Services",
    accent: "from-india-green to-emerald-600",
  },
  {
    quote:
      "Smart City rezoning took 40% of our floor space. We needed to digitize supply chain operations without losing throughput. The automation team at RSN designed a cloud-based inventory system that reduced our physical storage requirement by 60%. They understand what the Smart City mandates actually mean for MSMEs.",
    name: "Director",
    org: "Garment Export Business, Gomti Nagar",
    vertical: "Automation Services",
    accent: "from-india-navy to-blue-700",
  },
];

function Testimonials() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Enterprise Impact{" "}
          <span className="text-india-gradient">and Delivery</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Project outcomes from clients across Lucknow and Deoria. These are
          not brand endorsements. They are documented delivery results from
          enterprise engagements.
        </p>
      </motion.div>

      {/* Testimonials Grid */}
      <div className="mt-16 grid grid-cols-1 gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
            className="glass-card flex flex-col gap-5 rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8"
          >
            {/* Quote icon */}
            <div
              className={`inline-flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br ${t.accent} text-white shadow-md`}
            >
              <Quote className="h-4 w-4" />
            </div>

            {/* Quote text */}
            <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
              "{t.quote}"
            </p>

            {/* Attribution */}
            <div className="border-t border-border pt-4">
              <p className="text-sm font-semibold text-india-navy">{t.name}</p>
              <p className="mt-0.5 text-xs text-muted-foreground">{t.org}</p>
              <span className="mt-2 inline-flex rounded-full border border-saffron/20 bg-white/60 px-2.5 py-0.5 text-[11px] font-medium text-saffron backdrop-blur">
                {t.vertical}
              </span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Closing note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="glass-card mt-14 rounded-2xl p-6 text-center sm:p-10"
      >
        <p className="text-sm font-medium text-india-navy sm:text-base">
          Client references are available on request for all relevant project
          types. We do not publish client names without written consent. Ask
          and we will arrange a direct introduction.
        </p>
      </motion.div>
    </div>
  );
}

export default Testimonials;
