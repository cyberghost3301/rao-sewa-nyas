import { motion } from "framer-motion";
import { User } from "lucide-react";

const leadership = [
  {
    name: "Rao Sewa Nyas Trust",
    title: "Board of Trustees",
    bio: "The governing body that oversees all enterprise and non-profit operations. Every major capital allocation decision is made here and documented for statutory audit.",
  },
  {
    name: "Operations Director",
    title: "Lucknow HQ",
    bio: "Leads the Lucknow commercial office. Manages GCC onboarding, MVVNL coordination, and the project pipeline across solar, telecom, and IT verticals.",
  },
  {
    name: "Field Operations Lead",
    title: "Deoria Hub",
    bio: "Resident in Deoria. Manages all Purvanchal deployments including off-grid solar, wiring audits, CCTV, and telecom field operations across Barhaj, Gauri Bazar, and Salempur.",
  },
];

const departments = [
  {
    name: "Solar and Energy Team",
    title: "EPC and AMC",
    bio: "UPNEDA-compliant engineers handling site surveys, MVVNL/PuVVNL applications, installation, and annual maintenance across both jurisdictions.",
  },
  {
    name: "Telecom Infrastructure",
    title: "Network and Field Ops",
    bio: "Deploys enterprise telecom and rural connectivity with armored aerial builds designed for UP's monsoon conditions and voltage instability.",
  },
  {
    name: "Security Division",
    title: "CCTV, Access and Cyber-Physical",
    bio: "Handles commercial CCTV, biometric access, and converged physical-cyber security. No subcontracted teams. Trained in-house personnel on every deployment.",
  },
  {
    name: "Automation and IT Team",
    title: "Automation, ITeS and BMS",
    bio: "Runs wiring-first automation deployments and Lucknow-based back-office operations. Every automation project starts with an electrical panel audit.",
  },
  {
    name: "Compliance and Finance",
    title: "Statutory and Trust Governance",
    bio: "Manages Trust deed compliance, statutory audits, UPERC documentation, and CSR impact reporting for enterprise partners.",
  },
  {
    name: "Partnerships Desk",
    title: "B2B and CSR Programs",
    bio: "Manages the Partner Control Panel, handles discovery calls, NDA execution, and structures enterprise and CSR collaboration agreements.",
  },
];

function Team() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* Hero */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Our{" "}
          <span className="text-india-gradient">Execution Engine</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Rao Sewa Nyas is staffed by engineers, project managers, and field
          technicians who are resident in UP. We do not dispatch teams from
          outside the state when a site call comes in from Deoria.
        </p>
      </motion.div>

      {/* Leadership */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">
            Leadership
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            The governing and operational principals behind Rao Sewa Nyas.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {leadership.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }}
              className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-br from-saffron to-orange-500 text-white shadow-md">
                <User className="h-6 w-6" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-india-navy">
                  {member.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-saffron">
                  {member.title}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {member.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Department Heads */}
      <section className="mt-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-8"
        >
          <h2 className="text-2xl font-semibold text-india-navy sm:text-3xl">
            Department Structure
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Seven departments. Each one aligned to a commercial vertical.
          </p>
        </motion.div>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {departments.map((dept, i) => (
            <motion.div
              key={dept.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }}
              className="glass-card flex flex-col gap-3 rounded-2xl p-6 transition-transform hover:-translate-y-1"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-india-navy to-blue-700 text-white shadow-md">
                <User className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base font-semibold text-india-navy">
                  {dept.name}
                </h3>
                <p className="text-xs font-medium uppercase tracking-wider text-saffron">
                  {dept.title}
                </p>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {dept.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Hiring Note */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="glass-card mt-16 rounded-2xl p-6 text-center sm:p-10"
      >
        <h2 className="text-xl font-bold text-india-navy sm:text-2xl">
          We Hire From UP. We Deploy In UP.
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Our engineering and field teams are sourced from Lucknow, Deoria, and
          surrounding districts. We do not hire talent from outside the state
          and route it back in. Local hiring is part of our capital retention
          mandate, not a PR strategy.
        </p>
      </motion.div>
    </div>
  );
}

export default Team;
