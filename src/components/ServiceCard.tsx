import { motion } from "framer-motion";
import type { Service } from "@/lib/services";
import { ArrowUpRight } from "lucide-react";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const Icon = service.icon;
  return (
    <motion.a
      href={service.url}
      initial={{ opacity: 0, y: 20 }}
      animate={{
        opacity: 1,
        y: [0, -8, 0],
      }}
      transition={{
        opacity: { duration: 0.5, delay: index * 0.08 },
        y: {
          duration: 4 + (index % 3),
          repeat: Infinity,
          ease: "easeInOut",
          delay: index * 0.3,
        },
      }}
      whileHover={{
        scale: 1.05,
        y: 0,
        transition: { duration: 0.25, ease: "easeOut" },
      }}
      className="group glass-card relative flex flex-col gap-4 rounded-2xl p-6 transition-shadow hover:shadow-[0_20px_60px_-15px_rgba(234,88,12,0.35)]"
    >
      <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${service.accent} text-white shadow-md`}>
        <Icon className="h-6 w-6" />
      </div>
      <div>
        <h3 className="text-lg font-semibold text-india-navy">{service.name}</h3>
        <p className="mt-1 text-sm text-muted-foreground">{service.tagline}</p>
      </div>
      <div className="mt-auto inline-flex items-center gap-1 text-sm font-medium text-saffron">
        Visit site
        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </motion.a>
  );
}