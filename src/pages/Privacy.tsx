export default function Privacy() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 max-w-4xl">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16">
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron mb-6">
          Legal & Compliance
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-india-navy sm:text-5xl mb-8">
          Privacy Policy
        </h1>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-sm border-b border-border/50 pb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()} <br />
            <strong>Entity:</strong> Rao Sewa Nyas (Registered Trust)
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">1. Information Collection</h2>
            <p>
              Rao Sewa Nyas operates dual-engine infrastructure consisting of commercial enterprise services and community non-profit operations. We collect information necessary to fulfill commercial Service Level Agreements (SLAs), process vendor applications via our Partner Portal, and manage community outreach (e.g., B.A.R.C platform). 
            </p>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Enterprise Clients:</strong> GSTIN, corporate billing details, operational site data (e.g., electrical schematics for automation or solar deployment).</li>
              <li><strong>Partner Portal:</strong> UPNEDA credentials, vendor history, and financial verification documents.</li>
              <li><strong>B.A.R.C Users:</strong> Contact information for rescue coordination and verified volunteer databases.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">2. Data Usage & Capital Retention</h2>
            <p>
              We do not monetize your data through third-party advertising. All operational data collected across Lucknow and Deoria is utilized strictly for service execution, regulatory compliance (UPERC/MVVNL/PuVVNL), and internal auditing.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">3. Data Security & Storage</h2>
            <p>
              Our ITeS and security divisions manage our internal data compliance. We utilize enterprise-grade encryption and access-control protocols to ensure that all submitted schematics, vendor bids, and personnel details are secured against unauthorized extraction.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">4. Your Rights</h2>
            <p>
              Under applicable Indian laws, you reserve the right to request access, correction, or deletion of your personal data stored within our systems. Enterprise SLA data retention is subject to statutory audit requirements and may be retained as legally mandated.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">5. Contact Us</h2>
            <p>
              For privacy-related inquiries or data deletion requests, please contact our compliance officer at: <br />
              <strong>Email:</strong> compliance@raosewanyas.org
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
