import { motion } from "framer-motion";

const cards = [
  {
    heading: "Why We Built The Enterprise Division",
    body: "Our Trust operates primary healthcare and educational initiatives across UP. To fund these infinitely, without donor fatigue, we established our six for-profit verticals. They compete on merit and fund our mission directly.",
    span: "",
  },
  {
    heading: "Zero Donor Dependency",
    body: "When you hire us for enterprise IT or solar infrastructure, you pay fair market value for top-tier execution. The margin from your invoice doesn't go to shareholders -- it goes to our non-profit Trust. You get commercial delivery; UP gets the capital.",
    span: "",
  },
  {
    heading: "Operational Supremacy",
    body: "We operate out of Lucknow and Deoria, managing teams of engineers, technicians, and project managers. We do not ask for charity contracts. We bid for enterprise RFPs, and we win on technical specifications.",
    span: "md:col-span-2",
  },
];

function About() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          The Philosophy of{" "}
          <span className="text-india-gradient">Self-Funded Philanthropy</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Rao Sewa Nyas is built on a single, uncompromising principle:
          sustainable community impact cannot rely on donations. It requires
          corporate execution.
        </p>
      </motion.div>

      {/* ── Content Grid ───────────────────────────────────────── */}
      <div className="mx-auto mt-14 grid max-w-5xl grid-cols-1 gap-8 md:grid-cols-2">
        {cards.map((card, index) => (
          <motion.div
            key={card.heading}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 + index * 0.1 }}
            className={`glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8 ${card.span}`}
          >
            <h2 className="text-lg font-semibold text-india-navy sm:text-xl">
              {card.heading}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {card.body}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default About;
