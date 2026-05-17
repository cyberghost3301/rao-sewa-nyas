import { motion } from "framer-motion";
import { services } from "@/lib/services";
import { ServiceCard } from "@/components/ServiceCard";

function ForProfit() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-saffron">Operations - For-profit</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-india-navy sm:text-5xl">
          Six ventures. <span className="text-india-gradient">One mission.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Each business below operates independently with its own team and P and L. Surpluses flow back into the trust to fund our non-profit work.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, index) => (
          <ServiceCard key={service.name} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}

export default ForProfit;
