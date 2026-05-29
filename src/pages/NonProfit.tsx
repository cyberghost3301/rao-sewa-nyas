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
    <div className="mx-auto max-w-7xl px-6 pb-16 pt-32">
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

      {/* Featured Initiative: B.A.R.C */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="mt-16 mb-16 glass-card overflow-hidden rounded-3xl"
      >
        <div className="grid grid-cols-1 items-center gap-8 p-8 lg:grid-cols-2 lg:p-12">
          {/* Left Column: Copy & CTA */}
          <div className="flex flex-col items-start">
            <span className="inline-flex items-center rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron">
              Featured Initiative
            </span>
            <h2 className="mt-5 text-2xl font-bold text-india-navy sm:text-3xl">
              B.A.R.C: Pawsitive Rescue Hub
            </h2>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              Technology meets compassion. B.A.R.C is our dedicated digital infrastructure for coordinating stray animal rescues, managing shelter operations, and facilitating adoptions across Uttar Pradesh.
            </p>
            <p className="mt-4 text-base leading-relaxed text-muted-foreground">
              By unifying volunteers, veterinarians, and donors on a single platform, we ensure no distress call goes unanswered. This is how we scale grassroots philanthropy through enterprise-grade technology.
            </p>
            <a
              href="https://barc.raosewanyas.org/"
              className="mt-8 inline-flex items-center justify-center rounded-full bg-india-navy px-6 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl"
            >
              Access B.A.R.C Platform
            </a>
          </div>

          {/* Right Column: App Screenshot Placeholder */}
          <div className="relative aspect-video w-full overflow-hidden rounded-xl bg-muted/50 shadow-inner">
            <img
              src="/placeholder.svg"
              alt="B.A.R.C App Interface"
              className="h-full w-full rounded-lg object-cover"
            />
          </div>
        </div>
      </motion.div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
