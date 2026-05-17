import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/partner", label: "Partner" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/40 bg-white/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link to="/" className="hidden items-center gap-3 font-display text-lg font-bold md:flex">
          <img
            src="/logo.png"
            alt="Rao Sewa Nyas logo"
            className="h-10 w-auto object-contain drop-shadow-sm"
          />
          <span className="text-india-navy">Rao Sewa Nyas</span>
        </Link>
        <Link to="/" className="flex items-center gap-3 font-display text-base font-bold md:hidden">
          <img
            src="/logo.png"
            alt="Rao Sewa Nyas logo"
            className="h-9 w-auto object-contain drop-shadow-sm"
          />
          <span className="text-india-navy">Rao Sewa Nyas</span>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          <DropdownMenu>
            <DropdownMenuTrigger className="inline-flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium text-india-navy outline-none transition-colors hover:bg-secondary">
              Operations <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-48">
              <DropdownMenuItem asChild>
                <Link to="/operations/for-profit" className="cursor-pointer">
                  For-profit
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/operations/non-profit" className="cursor-pointer">
                  Non-profit
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) =>
                isActive
                  ? "rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-saffron"
                  : "rounded-md px-3 py-2 text-sm font-medium text-india-navy transition-colors hover:bg-secondary"
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="rounded-md p-2 text-india-navy md:hidden"
          onClick={() => setOpen((value) => !value)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <div className="border-t border-white/40 bg-white/90 backdrop-blur-xl md:hidden">
          <div className="space-y-1 px-4 py-3">
            <div className="mb-2 border-b border-border/60 pb-3">
              <Link to="/" onClick={() => setOpen(false)} className="inline-flex items-center gap-3">
                <img
                  src="/logo.png"
                  alt="Rao Sewa Nyas logo"
                  className="h-10 w-auto object-contain drop-shadow-sm"
                />
                <span className="font-display text-base font-semibold text-india-navy">
                  Rao Sewa Nyas
                </span>
              </Link>
            </div>
            <div className="px-2 pb-1 pt-2 text-xs font-semibold uppercase text-muted-foreground">Operations</div>
            <Link
              to="/operations/for-profit"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-india-navy hover:bg-secondary"
            >
              For-profit
            </Link>
            <Link
              to="/operations/non-profit"
              onClick={() => setOpen(false)}
              className="block rounded-md px-3 py-2 text-sm text-india-navy hover:bg-secondary"
            >
              Non-profit
            </Link>
            <div className="my-2 h-px bg-border" />
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setOpen(false)}
                className="block rounded-md px-3 py-2 text-sm text-india-navy hover:bg-secondary"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
