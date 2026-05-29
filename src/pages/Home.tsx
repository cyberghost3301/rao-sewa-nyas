import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight, ShieldCheck, MapPin, Landmark, ArrowUpRight } from "lucide-react";

const bentoCards = [
  {
    icon: Landmark,
    heading: "Powered by Community and Commerce",
    body: "Rao Sewa Nyas is a registered Trust powered by a dual financial engine. While public donations form a crucial backbone for our philanthropic missions, our six for-profit enterprise verticals compete on technical merit to ensure our community initiatives remain sustainably and heavily funded.",
    span: "md:col-span-2",
    accent: "text-saffron",
  },
  {
    icon: ShieldCheck,
    heading: "Pure Enterprise Delivery",
    body: "Commercial SLAs. Corporate accountability. No excuses. When you hire us for security or telecom, you are hiring a technical vendor, not doing a good deed.",
    span: "md:col-span-1",
    accent: "text-india-navy",
  },
  {
    icon: MapPin,
    heading: "UP Focused Capital Retention",
    body: "When you hire a multinational for IT or solar, the margin leaves the state. When you hire Rao Sewa Nyas, the margin builds local infrastructure, funds local education, and directly subsidizes our non-profit operations right here in Uttar Pradesh.",
    span: "md:col-span-3",
    accent: "text-india-green",
  },
];

function Home() {
  return (
    <div className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-32">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <section className="relative mx-auto w-full max-w-7xl px-6 py-8 sm:py-10">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_40%_at_50%_0%,rgba(234,88,12,0.18),transparent),radial-gradient(50%_40%_at_100%_100%,rgba(16,185,129,0.18),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-saffron/30 bg-white/70 px-3 py-1 text-xs font-medium text-saffron backdrop-blur">
            Est. for Bharat &ndash; Trust and Enterprise
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-6xl">
            UP&rsquo;s First{" "}
            <span className="text-india-gradient">Trust-Owned</span> Enterprise
            Platform
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            We run a for-profit, six-vertical commercial operation across
            Lucknow and Deoria. We charge market rates because subsidized work
            breaks down. Every rupee of profit stays inside Uttar Pradesh.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/operations/for-profit"
              className="inline-flex items-center gap-2 rounded-full bg-india-navy px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Explore Our Services <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-india-navy backdrop-blur hover:bg-secondary"
            >
              Partner With Us
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ── Bento Grid - Dual-Engine Model ─────────────────────── */}
      <section className="mx-auto mt-16 w-full max-w-7xl px-6 md:mt-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="mb-8 max-w-2xl"
        >
          <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">
            The Dual-Engine Model
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Enterprise revenue funds community impact no donations required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {bentoCards.map((card, index) => {
            const Icon = card.icon;
            return (
            <motion.div
              key={card.heading}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className={`group relative overflow-hidden glass-card rounded-[2rem] p-8 sm:p-10 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(234,88,12,0.15)] hover:border-saffron/30 ${card.span}`}
            >
              <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-saffron/10 blur-3xl transition-opacity duration-500 opacity-0 group-hover:opacity-100" />
              
              <div className="flex h-full flex-col justify-between gap-8 relative z-10">
                <div className="flex items-start justify-between">
                  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/60 shadow-sm border border-white/40 backdrop-blur-md ${card.accent}`}>
                    <Icon className="h-6 w-6" />
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/50 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:text-saffron" />
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight text-india-navy sm:text-2xl">
                    {card.heading}
                  </h3>
                  <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                    {card.body}
                  </p>
                </div>
              </div>
            </motion.div>
          )})}
        </div>
      </section>

      {/* ── 6 Core Verticals (existing floating cards) ─────────── */}
      <section className="mx-auto mt-24 w-full max-w-7xl px-6 py-8 sm:py-10 md:mt-16">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">
              Our 6 Core Verticals
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Six independent businesses, one shared mission.
            </p>
          </div>
          <Link
            to="/operations/for-profit"
            className="hidden text-sm font-medium text-saffron hover:underline sm:inline"
          >
            View all &rarr;
          </Link>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={service.name} service={service} index={index} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
