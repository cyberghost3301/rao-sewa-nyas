import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";
import { ArrowRight } from "lucide-react";

function Home() {
  return (
    <div className="relative overflow-hidden">
      <section className="relative mx-auto max-w-7xl px-6 pb-10 pt-16 sm:pb-16 sm:pt-24">
        <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [background:radial-gradient(60%_40%_at_50%_0%,rgba(234,88,12,0.18),transparent),radial-gradient(50%_40%_at_100%_100%,rgba(16,185,129,0.18),transparent)]" />
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-3xl text-center"
        >
          <span className="inline-flex items-center rounded-full border border-saffron/30 bg-white/70 px-3 py-1 text-xs font-medium text-saffron backdrop-blur">
            Est. for Bharat - Trust and Enterprise
          </span>
          <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy sm:text-6xl">
            Where <span className="text-india-gradient">enterprise</span> meets <span className="text-india-gradient">seva</span>.
          </h1>
          <p className="mt-5 text-base text-muted-foreground sm:text-lg">
            Rao Sewa Nyas is a trust running six for-profit ventures and parallel non-profit initiatives - channeling every rupee of growth back into community impact.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            <Link
              to="/operations/for-profit"
              className="inline-flex items-center gap-2 rounded-full bg-india-navy px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5"
            >
              Explore Operations <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              to="/partner"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-india-navy backdrop-blur hover:bg-secondary"
            >
              Partner with us
            </Link>
          </div>
        </motion.div>
      </section>

      <section className="mx-auto max-w-7xl px-6 pb-24">
        <div className="mb-8 flex items-end justify-between">
          <div>
            <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">Our For-profit Ventures</h2>
            <p className="mt-2 text-sm text-muted-foreground">Six independent businesses, one shared mission.</p>
          </div>
          <Link to="/operations/for-profit" className="hidden text-sm font-medium text-saffron hover:underline sm:inline">
            View all -&gt;
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
