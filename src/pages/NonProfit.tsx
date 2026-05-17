import { motion } from "framer-motion";
import { BookOpen, HandHeart, Sprout, Users, Droplets, HeartPulse } from "lucide-react";

const initiatives = [
  {
    name: "Pathshala",
    desc: "Free after-school learning centers in tier-3 towns.",
    icon: BookOpen,
    accent: "from-amber-400 to-orange-500",
  },
  {
    name: "Arogya",
    desc: "Mobile clinics for rural maternal and child health.",
    icon: HeartPulse,
    accent: "from-rose-400 to-red-500",
  },
  {
    name: "Hariyali",
    desc: "Reforestation and watershed restoration drives.",
    icon: Sprout,
    accent: "from-green-400 to-emerald-600",
  },
  {
    name: "Jal Mitra",
    desc: "Clean drinking water systems for villages.",
    icon: Droplets,
    accent: "from-cyan-400 to-blue-500",
  },
  {
    name: "Saathi",
    desc: "Skilling and job placement for rural women.",
    icon: Users,
    accent: "from-fuchsia-400 to-purple-500",
  },
  {
    name: "Daan Setu",
    desc: "Disaster relief and emergency response.",
    icon: HandHeart,
    accent: "from-yellow-400 to-amber-500",
  },
];

function NonProfit() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-2xl"
      >
        <p className="text-sm font-medium uppercase tracking-wider text-india-green">Operations - Non-profit</p>
        <h1 className="mt-3 text-4xl font-bold tracking-tight text-india-navy sm:text-5xl">
          Seva in action, <span className="text-india-gradient">across Bharat.</span>
        </h1>
        <p className="mt-4 text-muted-foreground">
          Funded entirely by our ventures, these initiatives reach communities that markets often forget.
        </p>
      </motion.div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {initiatives.map((initiative, index) => {
          const Icon = initiative.icon;

          return (
            <motion.div
              key={initiative.name}
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
              whileHover={{ scale: 1.05, y: 0, transition: { duration: 0.25 } }}
              className="glass-card flex flex-col gap-4 rounded-2xl p-6"
            >
              <div
                className={`inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${initiative.accent} text-white shadow-md`}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="text-lg font-semibold text-india-navy">{initiative.name}</h3>
              <p className="text-sm text-muted-foreground">{initiative.desc}</p>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default NonProfit;
