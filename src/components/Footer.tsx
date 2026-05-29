import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/50 bg-white/40 pt-16 backdrop-blur-3xl overflow-hidden">
      {/* Decorative ambient glow */}
      <div className="absolute bottom-0 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-saffron/5 blur-[100px]" />
      
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12 lg:gap-8">
          
          {/* Brand & Quick Contact (Col Span 5) */}
          <div className="flex flex-col items-start lg:col-span-5">
            <Link to="/" className="inline-flex items-center gap-3">
              <img src="/logo.png" alt="Rao Sewa Nyas logo" className="h-12 w-auto object-contain drop-shadow-sm" />
              <span className="font-display text-2xl font-bold tracking-tight text-india-navy">Rao Sewa Nyas</span>
            </Link>
            <p className="mt-6 max-w-sm text-base leading-relaxed text-muted-foreground">
              A registered Trust delivering commercial-grade enterprise services across Uttar Pradesh to fund sustainable community infrastructure.
            </p>
            
            <div className="mt-8 space-y-4">
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-india-navy/5 text-india-navy"><Phone className="h-4 w-4" /></div>
                <span>+91 9988776655</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-india-navy/5 text-india-navy"><Mail className="h-4 w-4" /></div>
                <span>enterprise@raosewanyas.org</span>
              </div>
              <div className="flex items-center gap-3 text-sm text-muted-foreground">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-india-navy/5 text-india-navy"><MapPin className="h-4 w-4" /></div>
                <span>Gomti Nagar, Lucknow | Gorakhpur Road, Deoria</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Grid (Col Span 7) */}
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:col-span-7">
            <div>
              <h3 className="font-display text-sm font-semibold tracking-wider text-india-navy uppercase">Operations</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/operations/for-profit" className="transition-colors hover:text-saffron">Enterprise Division</Link></li>
                <li><Link to="/operations/non-profit" className="transition-colors hover:text-saffron">Community Initiatives</Link></li>
                <li><Link to="/portfolio/lucknow" className="transition-colors hover:text-saffron">Lucknow Projects</Link></li>
                <li><Link to="/portfolio/deoria" className="transition-colors hover:text-saffron">Deoria Microgrids</Link></li>
                <li><Link to="/credentials" className="transition-colors hover:text-saffron">Trust Credentials</Link></li>
              </ul>
            </div>
            
            <div>
              <h3 className="font-display text-sm font-semibold tracking-wider text-india-navy uppercase">Organization</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/about" className="transition-colors hover:text-saffron">Our Philosophy</Link></li>
                <li><Link to="/team" className="transition-colors hover:text-saffron">Leadership Team</Link></li>
                <li><Link to="/partner" className="transition-colors hover:text-saffron">Partner Portal</Link></li>
                <li><Link to="/testimonials" className="transition-colors hover:text-saffron">Client Outcomes</Link></li>
                <li><Link to="/contact" className="transition-colors hover:text-saffron">Contact Us</Link></li>
              </ul>
            </div>

            <div>
              <h3 className="font-display text-sm font-semibold tracking-wider text-india-navy uppercase">Legal & Compliance</h3>
              <ul className="mt-6 space-y-3 text-sm text-muted-foreground">
                <li><Link to="/privacy" className="transition-colors hover:text-saffron">Privacy Policy</Link></li>
                <li><Link to="/terms" className="transition-colors hover:text-saffron">Terms of Service</Link></li>
                <li><Link to="/cookies" className="transition-colors hover:text-saffron">Cookie Policy</Link></li>
                <li><Link to="/disclaimer" className="transition-colors hover:text-saffron">Legal Disclaimer</Link></li>
                <li><Link to="/faq" className="transition-colors hover:text-saffron">F.A.Q.</Link></li>
              </ul>
            </div>
          </div>
        </div>

        {/* Massive Typographic Base */}
        <div className="mt-16 border-t border-border/50 pb-12 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <p className="text-xs text-muted-foreground">
              &copy; {new Date().getFullYear()} Rao Sewa Nyas. A Registered Trust operating in Uttar Pradesh.
            </p>
            <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1 rounded-full border border-border/50 bg-white/50 px-3 py-1 backdrop-blur-sm">UPNEDA Approved Vendor</span>
              <span className="flex items-center gap-1 rounded-full border border-border/50 bg-white/50 px-3 py-1 backdrop-blur-sm">CSR Eligible</span>
            </div>
          </div>
          
          <div className="mt-8 overflow-hidden pointer-events-none">
            <h1 className="text-center font-display text-[12vw] font-bold leading-none tracking-tighter text-india-navy/[0.03] select-none">
              RAO SEWA NYAS
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
}
