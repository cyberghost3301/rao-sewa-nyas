import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/70 backdrop-blur">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-10 sm:grid-cols-2">
        <div>
          <Link to="/" className="inline-flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Rao Sewa Nyas logo"
              className="h-10 w-auto object-contain drop-shadow-sm"
            />
            <span className="font-display text-lg font-semibold text-india-navy">Rao Sewa Nyas</span>
          </Link>
          <p className="mt-3 max-w-md text-sm leading-relaxed text-muted-foreground">
            Rao Sewa Nyas is committed to community-first growth through trusted non-profit
            initiatives and high-quality operational services built for lasting impact.
          </p>
        </div>
        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wide text-india-navy">
            Legal &amp; Compliance
          </h3>
          <div className="mt-4 grid grid-cols-1 gap-2 text-sm text-muted-foreground sm:grid-cols-2">
            <Link to="/privacy" className="transition-colors hover:text-india-navy">
              Privacy Policy
            </Link>
            <Link to="/terms" className="transition-colors hover:text-india-navy">
              Terms of Service
            </Link>
            <Link to="/faq" className="transition-colors hover:text-india-navy">
              FAQ
            </Link>
            <Link to="/cookies" className="transition-colors hover:text-india-navy">
              Cookie Policy
            </Link>
            <Link to="/disclaimer" className="transition-colors hover:text-india-navy">
              Disclaimer
            </Link>
          </div>
        </div>
      </div>
      <div className="border-t border-border/70">
        <div className="mx-auto max-w-7xl px-6 py-4 text-xs text-muted-foreground">
          Copyright {new Date().getFullYear()} Rao Sewa Nyas. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
