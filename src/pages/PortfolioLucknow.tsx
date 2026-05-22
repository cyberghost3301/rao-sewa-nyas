import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Sun, Zap, Radio, Building, ShieldCheck, Wrench } from "lucide-react";

const marketContext = [
  {
    heading: "The MVVNL Problem",
    body: "Net metering approvals in Lucknow run 45 to 75 days under standard MVVNL timelines. We carry the process maps, the subdivision contacts, and the UPNEDA empanelment to compress that window.",
    span: "md:col-span-2",
  },
  {
    heading: "GCCs Are Arriving. Local Infrastructure Is Not Ready.",
    body: "Lucknow's GCC Policy delivers 50% land subsidies and 100% stamp duty exemptions. Global Capability Centers are relocating faster than local service capacity can absorb them.",
    span: "md:col-span-1",
  },
  {
    heading: "Smart City Rezoning Is Forcing a Digital Transition",
    body: "Industrial plots in Talkatora and Aishbagh are being converted under Smart City mandates. Businesses that physically shrink must digitally expand.",
    span: "md:col-span-1",
  },
  {
    heading: "ESG Compliance Is No Longer Optional",
    body: "Incoming GCCs and established MSMEs face growing pressure on ESG reporting. Solar adoption, green telecom, and documented security compliance are becoming commercial prerequisites. We provide all three.",
    span: "md:col-span-2",
  },
];

const services = [
  { icon: Sun, heading: "Rooftop Solar EPC", body: "Site survey, UPNEDA vendor compliance, MVVNL feasibility application, subdivision coordination, installation, and net meter commissioning.", tags: ["Rooftop Solar", "Net Metering", "MVVNL", "UPNEDA"] },
  { icon: Zap, heading: "Commercial Energy Solutions", body: "Load enhancement applications, UPERC-compliant system design, and energy audits for commercial and institutional clients with high contracted demand.", tags: ["UPERC Compliant", "Load Enhancement", "ESG Energy"] },
  { icon: Radio, heading: "Enterprise Telecom", body: "Business telecom infrastructure, field support, and green telecom deployments for institutions and corporates targeting carbon reduction.", tags: ["Telecom Infrastructure", "Green Telecom"] },
  { icon: Building, heading: "Building and Office Automation", body: "Smart building integration, MSME workflow digitization, and IoT deployments. Especially relevant for businesses under Smart City compliance pressure.", tags: ["Building Automation", "Smart City", "IoT"] },
  { icon: ShieldCheck, heading: "Converged Security", body: "Corporate CCTV, biometric access control, perimeter security, and cyber-physical integration for Lucknow's GCC and commercial base.", tags: ["CCTV", "Biometric Access", "Corporate Security"] },
  { icon: Wrench, heading: "Solar Annual Maintenance", body: "Structured AMC for existing commercial and institutional solar installations under MVVNL jurisdiction. Scheduled inspections and inverter servicing.", tags: ["Solar AMC", "MVVNL", "Inverter Servicing"] },
];

const caseStudies = [
  { heading: "Commercial Rooftop Solar, Lucknow Institution", body: "50kW commercial rooftop. UPERC's 100% connected load cap restricted system size. Load enhancement application filed concurrently with solar design. System commissioned within 68 days." },
  { heading: "MSME Automation, Garment Exporter, Gomti Nagar", body: "Garment export business under Smart City rezoning. Physical floor space reduced 40%. Cloud-based inventory automation deployed. 60% reduction in physical storage without loss of throughput." },
  { heading: "Converged Security, GCC Pre-Occupancy, Hazratganj", body: "Incoming GCC, pre-occupancy phase. No existing security infrastructure. CCTV, biometric access, and cybersecurity baseline deployed in parallel. Move-in ready in 21 days." },
];

function PortfolioLucknow() {
  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* Hero */}
      <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="mx-auto max-w-3xl text-center">
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-white/70 px-3 py-1 text-xs font-medium text-saffron backdrop-blur">Regional Hub -- Lucknow</span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Lucknow Operations: <span className="text-india-gradient">Where GCC Infrastructure Meets MVVNL Reality</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">We operate in Lucknow's commercial and institutional sector. We know the MVVNL approval ladder, UP's GCC incentive framework, and the automation needs of MSMEs being pushed out of Talkatora and Aishbagh by Smart City rezoning.</p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Link to="/contact" className="inline-flex items-center gap-2 rounded-full bg-india-navy px-5 py-2.5 text-sm font-medium text-white shadow-lg transition-transform hover:-translate-y-0.5">Request a Site Assessment <ArrowRight className="h-4 w-4" /></Link>
          <Link to="/operations/for-profit" className="inline-flex items-center gap-2 rounded-full border border-border bg-white/70 px-5 py-2.5 text-sm font-medium text-india-navy backdrop-blur hover:bg-secondary">View All Services</Link>
        </div>
      </motion.div>

      {/* Market Context Bento */}
      <section className="mt-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-2xl font-semibold text-india-navy sm:text-3xl">Market Context</motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {marketContext.map((card, i) => (
            <motion.div key={card.heading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className={`glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8 ${card.span}`}>
              <h3 className="text-lg font-semibold text-india-navy">{card.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{card.body}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Services */}
      <section className="mt-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-2xl font-semibold text-india-navy sm:text-3xl">Services in Lucknow</motion.h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div key={svc.heading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.08 }} className="glass-card flex flex-col gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-orange-500 text-white shadow-md"><Icon className="h-5 w-5" /></div>
                <h3 className="text-base font-semibold text-india-navy">{svc.heading}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{svc.body}</p>
                <div className="mt-auto flex flex-wrap gap-1.5">
                  {svc.tags.map((tag) => (<span key={tag} className="rounded-full border border-saffron/20 bg-white/60 px-2.5 py-0.5 text-[11px] font-medium text-saffron backdrop-blur">{tag}</span>))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Case Studies */}
      <section className="mt-20">
        <motion.h2 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="mb-8 text-2xl font-semibold text-india-navy sm:text-3xl">Project Highlights</motion.h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {caseStudies.map((cs, i) => (
            <motion.div key={cs.heading} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.15 + i * 0.1 }} className="glass-card rounded-2xl p-6 transition-transform hover:-translate-y-1 sm:p-8">
              <h3 className="text-base font-semibold text-india-navy">{cs.heading}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{cs.body}</p>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default PortfolioLucknow;
