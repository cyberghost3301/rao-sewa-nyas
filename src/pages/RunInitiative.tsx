import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { BatteryCharging, Handshake, TrendingUp, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

function RunInitiative() {
  useEffect(() => {
    document.title = "R.U.N Initiative | Interest-Free E-Rickshaw Batteries UP | Rao Sewa Nyas";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Rao Urja Niti (R.U.N) provides interest-free e-rickshaw battery replacements through associated partners in Lucknow and Deoria. Keeping green transit moving."
      );
    } else {
      const meta = document.createElement("meta");
      meta.name = "description";
      meta.content =
        "Rao Urja Niti (R.U.N) provides interest-free e-rickshaw battery replacements through associated partners in Lucknow and Deoria. Keeping green transit moving.";
      document.head.appendChild(meta);
    }
  }, []);

  return (
    <div className="bg-india-gradient min-h-screen">
      <div className="container mx-auto px-4 pt-28 md:pt-32 pb-16">
        
        {/* Hero Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-4xl mx-auto mb-20"
        >
          <span className="inline-flex items-center rounded-full border border-green-600/30 bg-green-500/10 px-3 py-1 text-xs font-bold text-green-600 uppercase tracking-wider mb-6">
            Featured Green Initiative
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-india-navy mb-6">
            R.U.N: Rao Urja Niti
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-10">
            Empowering daily wage earners and protecting green transit. We provide interest-free e-rickshaw battery replacements through our network of associated partners, ensuring drivers never lose their livelihood to a dead battery.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact">
              <Button className="rounded-full bg-india-navy hover:bg-india-navy/90 text-white px-8 py-6 shadow-lg transition-transform hover:-translate-y-0.5 hover:shadow-xl text-base w-full sm:w-auto">
                Apply for Battery Replacement
              </Button>
            </Link>
            <Link to="/partner">
              <Button variant="outline" className="rounded-full border-2 border-india-navy text-india-navy hover:bg-india-navy/5 px-8 py-6 transition-transform hover:-translate-y-0.5 text-base w-full sm:w-auto">
                Become a Supply Partner
              </Button>
            </Link>
          </div>
        </motion.section>

        {/* The 48k Cliff (Bento Grid) */}
        <section className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-india-navy">The 48k Cliff</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              Understanding the crisis faced by daily wage e-rickshaw drivers.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Card 1 */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-red-100 text-red-600 mb-6">
                <TrendingUp className="h-6 w-6 rotate-180" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Livelihood Trap</h3>
              <p className="text-muted-foreground leading-relaxed">
                An e-rickshaw driver relies entirely on daily mobility. When their battery degrades, the replacement cost of ₹40,000 to ₹48,000 is an impossible upfront expense. Without that capital, the vehicle stops, the income stops, and families fall into predatory high-interest debt traps.
              </p>
            </motion.div>

            {/* Card 2 */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-100 text-orange-600 mb-6">
                <BatteryCharging className="h-6 w-6" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">The Threat to Green Transit</h3>
              <p className="text-muted-foreground leading-relaxed">
                E-rickshaws are the backbone of zero-emission last-mile transport in Uttar Pradesh. When drivers cannot afford new batteries, these green vehicles sit idle, pushing commuters back toward heavily polluting alternatives.
              </p>
            </motion.div>
          </div>
        </section>

        {/* The Product-First Solution */}
        <section className="mb-20">
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center"
          >
            <h2 className="text-3xl font-bold text-india-navy">The Product-First Solution</h2>
            <p className="text-muted-foreground mt-3 max-w-2xl mx-auto">
              How we provide sustainable, direct support to drivers without handling cash.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-blue-600 mb-6">
                <BatteryCharging className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Physical Asset Delivery</h3>
              <p className="text-muted-foreground flex-grow">
                We do not hand out cash loans. Through our trusted associated partners, we procure and install the physical replacement battery directly into the driver's vehicle. This ensures 100% fund utilization and immediate operational uptime.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-green-100 text-green-600 mb-6">
                <TrendingUp className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Interest-Free Financing</h3>
              <p className="text-muted-foreground flex-grow">
                The driver repays the exact cost of the battery in manageable, interest-free installments. By removing predatory interest rates, we allow daily wage earners to rebuild their savings while keeping their rickshaws on the road.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="glass-card p-8 rounded-3xl flex flex-col h-full"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-100 text-purple-600 mb-6">
                <Handshake className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Associated Supply Partners</h3>
              <p className="text-muted-foreground flex-grow">
                We collaborate with authorized battery manufacturers and local distribution partners across Lucknow and Deoria. This ecosystem guarantees warranty protection, technical reliability, and ethical supply chains.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Impact Metrics (4-Column Stat Bar) */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-india-green">
              <div className="text-3xl font-bold text-india-navy mb-1">0%</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Interest Charged to Drivers</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-blue-500">
              <div className="text-3xl font-bold text-india-navy mb-1">100%</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Capital Allocated to Physical Assets</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-orange-500">
              <div className="text-3xl font-bold text-india-navy mb-1">Zero</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Days of Lost Livelihood</div>
            </div>
            <div className="glass-card p-6 rounded-2xl text-center border-l-4 border-l-green-500">
              <div className="text-3xl font-bold text-india-navy mb-1">100%</div>
              <div className="text-xs sm:text-sm font-medium text-muted-foreground">Zero-Emission Transit Supported</div>
            </div>
          </div>
        </motion.section>

      </div>
    </div>
  );
}

export default RunInitiative;
