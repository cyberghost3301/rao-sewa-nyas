import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Tractor } from "lucide-react";

const hubs = [
  {
    icon: Building2,
    title: "Urban Tech and Infrastructure",
    description:
      "GCC corridors, MVVNL net metering, Smart City compliance, and commercial automation across Lucknow's enterprise sector.",
    to: "/portfolio/lucknow",
    accent: "from-saffron to-orange-500",
    label: "Lucknow",
  },
  {
    icon: Tractor,
    title: "Purvanchal Field Operations",
    description:
      "Off-grid solar microgrids, PuVVNL-proof BESS deployments, armored telecom, and wiring-first engineering across Deoria.",
    to: "/portfolio/deoria",
    accent: "from-india-green to-emerald-600",
    label: "Deoria",
  },
];

function Portfolio() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* -- Hero ------------------------------------------------ */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Two Markets.{" "}
          <span className="text-india-gradient">One Standard.</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          We operate in two distinct geographies with different infrastructure
          realities. The engineering standard does not adjust for geography.
        </p>
      </motion.div>

      {/* -- Split Hub ------------------------------------------- */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {hubs.map((hub, index) => {
          const Icon = hub.icon;
          return (
            <motion.div
              key={hub.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 + index * 0.12 }}
            >
              <Link
                to={hub.to}
                className="group glass-card flex flex-col gap-5 rounded-2xl p-8 transition-all hover:-translate-y-1 hover:scale-[1.02] hover:shadow-[0_20px_60px_-15px_rgba(234,88,12,0.3)] sm:p-10"
              >
                <div
                  className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${hub.accent} text-white shadow-md`}
                >
                  <Icon className="h-6 w-6" />
                </div>
                <div>
                  <span className="text-xs font-medium uppercase tracking-wider text-saffron">
                    {hub.label}
                  </span>
                  <h2 className="mt-1 text-xl font-bold text-india-navy sm:text-2xl">
                    {hub.title}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {hub.description}
                  </p>
                </div>
                <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-saffron">
                  Explore {hub.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default Portfolio;
