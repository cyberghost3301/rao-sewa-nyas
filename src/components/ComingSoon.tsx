import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Sparkles, ArrowLeft } from "lucide-react";

export function ComingSoon({
  title = "Coming Soon",
  description = "We are crafting something meaningful. Check back shortly.",
}: {
  title?: string;
  description?: string;
}) {
  return (
    <section className="relative mx-auto flex min-h-[70vh] max-w-4xl flex-col items-center justify-center px-6 text-center">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-india-gradient text-white shadow-lg"
      >
        <Sparkles className="h-8 w-8" />
      </motion.div>
      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.15, duration: 0.5 }}
        className="text-4xl font-bold tracking-tight text-india-navy sm:text-5xl"
      >
        {title}
      </motion.h1>
      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.25, duration: 0.5 }}
        className="mt-4 max-w-xl text-base text-muted-foreground sm:text-lg"
      >
        {description}
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-8"
      >
        <Link
          to="/"
          className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-india-navy backdrop-blur transition-colors hover:bg-secondary"
        >
          <ArrowLeft className="h-4 w-4" /> Back home
        </Link>
      </motion.div>
    </section>
  );
}
