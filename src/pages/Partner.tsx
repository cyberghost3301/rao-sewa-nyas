import { motion } from "framer-motion";
import { LayoutDashboard, ShieldCheck, RefreshCw, ExternalLink, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: LayoutDashboard,
    title: "Unified Dashboard",
    description:
      "Manage all your metrics and operations from a single pane of glass.",
    accent: "from-saffron to-orange-500",
  },
  {
    icon: ShieldCheck,
    title: "Secure Access",
    description:
      "Enterprise-grade security ensuring your data and communications remain private.",
    accent: "from-india-green to-emerald-600",
  },
  {
    icon: RefreshCw,
    title: "Real-time Sync",
    description:
      "Instant updates between your operations and the central Nyas network.",
    accent: "from-india-navy to-blue-600",
  },
];

function Partner() {
  return (
    <div className="mx-auto w-full max-w-7xl px-6 pt-28 pb-16 md:pt-32 md:pb-24">
      {/* ── Hero ─────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        {/* eyebrow badge */}
        <span className="inline-flex items-center gap-2 rounded-full border border-saffron/30 bg-white/70 px-4 py-1.5 text-xs font-medium text-saffron backdrop-blur">
          <Building2 className="h-3.5 w-3.5" />
          Partner Connect Portal (PCP)
        </span>

        <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy sm:text-5xl lg:text-6xl">
          Partner with{" "}
          <span className="text-india-gradient">Rao Sewa Nyas</span>
        </h1>

        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Access our centralized Partner Connect Portal (PCP) to manage
          operations, track performance, and grow your enterprise seamlessly.
        </p>

        {/* Primary CTA */}
        <div className="mt-8">
          <a href="https://pcp.raosewanyas.org">
            <Button
              size="lg"
              className="rounded-full bg-india-navy px-8 py-3 text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-india-navy/90 hover:shadow-xl"
            >
              Go to Partner Connect Portal
              <ExternalLink className="ml-1 h-4 w-4" />
            </Button>
          </a>
        </div>
      </motion.div>

      {/* ── Feature Cards ──────────────────────────────────────── */}
      <div className="mt-20 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
              className="glass-card flex flex-col gap-4 rounded-2xl p-6 cursor-default"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${feature.accent} text-white shadow-md`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-india-navy">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* ── Onboarding Note ────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="glass-card mt-12 rounded-2xl p-6 sm:p-8"
      >
        <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:gap-5">
          <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-orange-500 text-white shadow-md">
            <Building2 className="h-5 w-5" />
          </div>
          <div>
            <h2 className="text-base font-semibold text-india-navy sm:text-lg">
              New to the network?
            </h2>
            <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
              Click the{" "}
              <a
                href="https://pcp.raosewanyas.org"
                className="font-medium text-saffron underline-offset-4 hover:underline"
              >
                portal link
              </a>{" "}
              above to register your entity and complete your KYC via our secure
              onboarding process.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Partner;
