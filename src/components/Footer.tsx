import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight } from "lucide-react";
import { SocialLinks } from "@/components/SocialLinks";

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

            <div className="mt-8 space-y-3.5 w-full max-w-sm">
              <a
                href="tel:917985454216"
                aria-label="Call Rao Sewa Nyas at +91 79854 54216"
                className="group flex items-center justify-between rounded-xl border border-india-navy/10 bg-white/60 p-2.5 pr-4 text-sm text-muted-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-saffron/40 hover:bg-white hover:text-india-navy hover:shadow-sm active:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-india-navy/5 text-india-navy transition-colors group-hover:bg-saffron/10 group-hover:text-saffron">
                    <Phone className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-india-navy">+91 79854 54216</span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron opacity-0 transition-opacity group-hover:opacity-100">
                  Call &rarr;
                </span>
              </a>

              <a
                href="mailto:raosewanyas@gmail.com"
                aria-label="Email Rao Sewa Nyas at raosewanyas@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-india-navy/10 bg-white/60 p-2.5 pr-4 text-sm text-muted-foreground backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:border-saffron/40 hover:bg-white hover:text-india-navy hover:shadow-sm active:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-india-navy/5 text-india-navy transition-colors group-hover:bg-saffron/10 group-hover:text-saffron">
                    <Mail className="h-4 w-4" />
                  </div>
                  <span className="font-medium text-india-navy">raosewanyas@gmail.com</span>
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-wider text-saffron opacity-0 transition-opacity group-hover:opacity-100">
                  Email &rarr;
                </span>
              </a>

              <div className="flex items-start gap-3 rounded-xl border border-transparent p-2.5 text-sm text-muted-foreground">
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-india-navy/5 text-india-navy">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="leading-snug pt-1">610/586 Keshav Nagar, Sitapur Road, Lucknow – 226020</span>
              </div>
            </div>
          </div>

          {/* Navigation Links Grid & Live Desk Hub (Col Span 7) */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div className="grid grid-cols-2 gap-8 sm:grid-cols-3">
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
                  <li>
                    <Link to="/social" className="inline-flex items-center gap-1 font-medium text-india-navy transition-colors hover:text-saffron">
                      Social Channels
                      <span className="rounded bg-saffron/10 border border-saffron/20 px-1.5 py-0.2 text-[10px] font-semibold text-saffron">Hub</span>
                    </Link>
                  </li>
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

            {/* Official Channels / Live Desk Banner (Placed below navigation links on desktop) */}
            <div className="mt-10 rounded-2xl border border-india-navy/10 bg-white/70 p-5 backdrop-blur-md shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all hover:border-india-navy/20">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
                <div className="space-y-1">
                  <div className="flex items-center gap-2.5">
                    <span className="font-display text-xs font-bold uppercase tracking-wider text-india-navy">
                      Official Channels
                    </span>
                    <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-2.5 py-0.5 text-[11px] font-semibold text-emerald-700 shadow-sm">
                      <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                      Live Desk
                    </span>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Connect directly with our desk or explore our verified social media feeds.
                  </p>
                </div>

                <div className="flex flex-wrap items-center gap-3">
                  <SocialLinks variant="footer" />
                  <Link
                    to="/social"
                    className="inline-flex items-center gap-1.5 rounded-xl border border-saffron/30 bg-saffron/10 px-3.5 py-2 text-xs font-bold text-saffron transition-all duration-200 hover:bg-saffron hover:text-white hover:shadow-md active:translate-y-0.5"
                    aria-label="Visit dedicated Social Profiles and Media Feeds page"
                  >
                    <span>Channels Hub</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright & credit */}
        <div className="mt-16 border-t border-border/50 pb-4 pt-8">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-3 text-xs text-muted-foreground text-center sm:text-left">
              <p>
                &copy; {new Date().getFullYear()} Rao Sewa Nyas. Registered Trust in Uttar Pradesh.
              </p>
              <span className="hidden sm:inline text-border">•</span>
              <Link
                to="/social"
                className="group inline-flex items-center gap-1.5 font-medium text-india-navy transition-colors hover:text-saffron"
                aria-label="View Rao Sewa Nyas Official Social Media Profiles and Feeds"
              >
                <span>@raosewanyas</span>
              </Link>
            </div>
            {/* <div className="flex items-center gap-4 text-xs font-medium text-muted-foreground">
              <span className="flex items-center gap-1 rounded-full border border-border/50 bg-white/50 px-3 py-1 backdrop-blur-sm">UPNEDA Approved Vendor</span>
              <span className="flex items-center gap-1 rounded-full border border-border/50 bg-white/50 px-3 py-1 backdrop-blur-sm">CSR Eligible</span>
            </div> */}

            {/* Developer credit */}
            {/*<p className="font-body text-[11px] text-[#8c5a6d] text-center md:text-right">
              Crafted by{" "}
              <a
                href="https://spirecrest.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="group ml-0.5 inline-flex items-center gap-1.5 align-middle font-semibold uppercase tracking-[0.18em] text-[#9B8AAA] transition-colors hover:text-foreground"
              >
                <span aria-hidden className="text-syka-gold transition-transform duration-300 group-hover:rotate-90">
                  ✦
                </span>
                Spirecrest Solutions
              </a>
            </p>*/}
          </div>
        </div>
      </div>

      {/* ── Full-width typographic accent - outside max-w-7xl so it spans the viewport ── */}
      <div className="w-full pointer-events-none select-none flex justify-center overflow-hidden pb-6 pt-2">
        <span className="font-display text-[13.5vw] font-bold leading-none tracking-tighter text-india-navy/[0.03] whitespace-nowrap">
          RAO SEWA NYAS
        </span>
      </div>
    </footer>
  );
}
