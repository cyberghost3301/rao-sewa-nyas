export default function CookiePolicy() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 max-w-4xl">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16">
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron mb-6">
          Legal & Compliance
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-india-navy sm:text-5xl mb-8">
          Cookie Policy
        </h1>
        <div className="space-y-8 text-muted-foreground leading-relaxed">
          <p className="text-sm border-b border-border/50 pb-4">
            <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
          </p>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">Functional Tracking Only</h2>
            <p>
              Rao Sewa Nyas utilizes cookies strictly to ensure the functionality of our digital platforms, including session management within the Partner Portal and B.A.R.C platform. We do not employ aggressive marketing trackers or cross-site advertising cookies.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">What We Track</h2>
            <ul className="list-disc pl-5 mt-3 space-y-2">
              <li><strong>Session Tokens:</strong> To keep vendors and partners logged into the Partner Portal securely.</li>
              <li><strong>Aggregate Impact Analytics:</strong> Anonymous tracking to measure which of our regional hubs (Lucknow vs. Deoria) are receiving the most enterprise interest, allowing us to allocate our ground teams effectively.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-india-navy mb-4">Managing Preferences</h2>
            <p>
              You can adjust your browser settings to refuse cookies; however, doing so may prevent you from logging into our secured portals or accessing certain enterprise requirement forms.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
