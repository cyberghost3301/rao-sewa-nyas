export default function Disclaimer() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 max-w-4xl">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16">
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron mb-6">
          Legal & Compliance
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-india-navy sm:text-5xl mb-8">
          Legal Disclaimer
        </h1>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-sm border-b border-border/50 pb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">1. Entity Structure & Liability</h2>
            <p>
              Rao Sewa Nyas is a registered Trust operating six commercial verticals. While we utilize our enterprise revenues to fund social impact projects, our commercial contracts are executed purely as B2B service agreements. The Trust structure does not absolve us of commercial liability, nor does it grant our clients any tax exemptions unless explicitly defined under CSR project documentation.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">2. Grid & Infrastructure Volatility</h2>
            <p>
              For solar, telecom, and automation deployments in regions governed by MVVNL or PuVVNL, Rao Sewa Nyas designs infrastructure to withstand documented grid volatility. However, we are not liable for total system failures caused by extreme utility surges that exceed our specified fail-safes (e.g., beyond the capacity of our installed Battery Energy Storage Systems or surge arrestors).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">3. Third-Party Equipment Warranties</h2>
            <p>
              Rao Sewa Nyas acts as the primary EPC and integration vendor. Warranties on raw hardware (e.g., solar panels, CCTV cameras, biometric scanners) are passed directly from the original equipment manufacturer (OEM). Our SLA covers the deployment, wiring architecture, and ongoing maintenance AMC, not the fundamental manufacturing of the third-party hardware.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
