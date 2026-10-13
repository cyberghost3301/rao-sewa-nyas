import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { motion } from "framer-motion";

const navLinks = [
  { to: "/about", label: "About" },
  { to: "/team", label: "Team" },
  { to: "/portfolio", label: "Portfolio" },
  { to: "/testimonials", label: "Testimonials" },
  { to: "/partner", label: "Partner" },
  { to: "/credentials", label: "Credentials" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed left-0 right-0 z-50 mx-auto transition-[box-shadow,background-color] duration-300 ease-in-out top-4 max-w-6xl border border-white/40 bg-white/50 shadow-[0_8px_30px_rgb(0,0,0,0.04)] backdrop-blur-2xl ${
        open ? "rounded-3xl" : "rounded-full"
      }`}
    >
      {/* ── Top bar ─────────────────────────────────────── */}
      <div className="flex items-center h-16 px-6">

        {/* ── Logo (always visible) ───────────────────── */}
        <Link to="/" className="flex items-center gap-3 font-display font-bold shrink-0">
          <img
            src="/logo.png"
            alt="Rao Sewa Nyas logo"
            className="h-10 w-auto object-contain drop-shadow-sm md:h-10 h-9"
          />
          <span className="text-india-navy text-base md:text-lg">Rao Sewa Nyas</span>
        </Link>

        {/* ── Desktop nav (centred) ───────────────────── */}
        <nav className="hidden md:flex flex-1 items-center justify-center gap-1">
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

        {/* ── Donate (desktop, pinned right) ─────────── */}
        <NavLink
          to="/donations"
          className={({ isActive }) =>
            `hidden md:inline-flex shrink-0 ${
              isActive
                ? "rounded-full bg-saffron/80 px-4 py-2 text-sm font-semibold text-white shadow"
                : "rounded-full bg-saffron px-4 py-2 text-sm font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:shadow-md"
            }`
          }
        >
          Donate
        </NavLink>

        {/* ── Hamburger (mobile only) ─────────────────── */}
        <button
          className="ml-auto rounded-md p-2 text-india-navy md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* ── Mobile drawer ───────────────────────────────── */}
      {open && (
        <div className="border-t border-white/40 bg-white/90 backdrop-blur-xl md:hidden rounded-b-3xl overflow-hidden">
          <div className="space-y-1 px-4 py-3">

            {/* Operations section */}
            <div className="px-2 pb-1 pt-2 text-xs font-semibold uppercase text-muted-foreground">
              Operations
            </div>
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

            {/* Separator */}
            <div className="my-2 h-px bg-border" />

            {/* Nav links */}
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

            {/* Separator before Donate */}
            <div className="my-2 h-px bg-border" />

            {/* Donate button */}
            <Link
              to="/donations"
              onClick={() => setOpen(false)}
              className="block rounded-full bg-saffron px-4 py-2.5 text-center text-sm font-semibold text-white shadow mt-2 mb-1"
            >
              Donate
            </Link>
          </div>
        </div>
      )}
    </motion.header>
  );
}
