export default function Terms() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 max-w-4xl">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16">
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron mb-6">
          Legal & Compliance
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-india-navy sm:text-5xl mb-8">
          Terms of Service
        </h1>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-sm border-b border-border/50 pb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">1. Enterprise SLAs vs. Web Platform Use</h2>
            <p>
              These Terms of Service govern your use of the Rao Sewa Nyas digital platform and Partner Portal. <strong>Note:</strong> Commercial services (Solar EPC, IT, Security, Automation, Telecom) procured from Rao Sewa Nyas are governed by distinct, project-specific Service Level Agreements (SLAs) signed prior to deployment.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">2. Partner Portal Operations</h2>
            <p>
              Vendors and partners utilizing the Rao Sewa Nyas Partner Portal agree to submit accurate operational histories, GST details, and UPNEDA certifications where applicable. Any falsification of compliance documents will result in immediate disqualification from our procurement chain.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">3. Regulatory Acknowledgement</h2>
            <p>
              Rao Sewa Nyas operates under the legal framework of a registered Trust. All commercial revenues generated via our seven verticals are legally bound to be reinvested into our community infrastructure and philanthropic initiatives within Uttar Pradesh, in compliance with our Trust deed.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">4. Governing Law</h2>
            <p>
              These terms, and any disputes arising from the use of this digital platform, shall be governed by and construed in accordance with the laws of India. Exclusive jurisdiction for any disputes resides with the competent courts of Lucknow, Uttar Pradesh.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
