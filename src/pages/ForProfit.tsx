import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, ShieldCheck, BadgeCheck, Landmark, MapPin } from "lucide-react";

const trustSignals = [
  {
    icon: Landmark,
    heading: "Registered Trust",
    body: "Rao Sewa Nyas operates under the legal structure of a registered Trust. Our accounts are audited. Our procurement is documented and traceable.",
  },
  {
    icon: BadgeCheck,
    heading: "CSR-Aligned Operations",
    body: "Enterprise clients can directly attribute their spend to verifiable community infrastructure outcomes in Uttar Pradesh. We produce structured documentation for CSR disclosures.",
  },
  {
    icon: MapPin,
    heading: "No Profit Leaves UP",
    body: "Our Trust deed structurally restricts profit extraction outside the region. Paying us for a solar plant is the same as investing in UP's infrastructure capacity.",
  },
];

const whyOneVendor = [
  {
    heading: "One Audit Trail",
    body: "A single vendor relationship produces unified documentation, one compliance register, and one accountability chain. Fragmented vendors produce fragmented paper trails and nobody who owns the gap between them.",
  },
  {
    heading: "Wiring-First Engineering",
    body: "We audit electrical and network wiring before specifying hardware. Solar failures, CCTV failures, and automation failures in Deoria trace back to the same root cause: wiring that cannot handle PuVVNL-grade surges. We fix that first.",
  },
  {
    heading: "Ground Teams, Not Dispatched Crews",
    body: "Our engineers are based in Lucknow and Deoria. When something needs a site visit in Gauri Bazar or Salempur, we are not booking a flight from Noida. Response times reflect that.",
  },
];

function ForProfit() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* -- Hero ------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-saffron">
          Operations -- For-profit
        </p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Seven Services. One Standard.{" "}
          <span className="text-india-gradient">Zero Compartmentalization.</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Our for-profit verticals run on a unified delivery model. You get the
          same engineering discipline whether you need a solar microgrid in
          Deoria or a converged security system for a GCC in Lucknow.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-india-navy px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
          >
            Request a Site Assessment <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/portfolio"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-india-navy backdrop-blur hover:bg-secondary"
          >
            View Portfolio
          </Link>
        </div>
      </motion.div>

      {/* -- Service Cards (existing 6) -------------------------- */}
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>

      {/* -- Why One Vendor (Bento Grid) ------------------------- */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8 max-w-2xl"
        >
          <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">
            Why Clients Use One Vendor Across All Seven
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {whyOneVendor.map((card, index) => (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
              className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <h3 className="text-lg font-semibold text-india-navy">
                {card.heading}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {card.body}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* -- Trust Signal Strip ---------------------------------- */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-8 max-w-2xl"
        >
          <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">
            Trust Signals
          </h2>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trustSignals.map((signal, index) => {
            const Icon = signal.icon;
            return (
              <motion.div
                key={signal.heading}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.25 + index * 0.1 }}
                className="glass-card flex gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-orange-500 text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-india-navy">
                    {signal.heading}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {signal.body}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* -- Final CTA ------------------------------------------- */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.35 }}
        className="glass-card mt-20 rounded-2xl p-8 text-center sm:p-12"
      >
        <h2 className="text-2xl font-bold text-india-navy sm:text-3xl">
          Ready to Work With a Vendor Who Has a Stake in the Ground?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Our teams are based in Lucknow and Deoria. Not dispatched from a
          national call center.
        </p>
        <Link
          to="/contact"
          className="mt-6 inline-flex items-center gap-2 rounded-full bg-india-navy px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
        >
          Talk to Our Team <ArrowRight className="h-4 w-4" />
        </Link>
      </motion.div>
    </div>
  );
}

export default ForProfit;
