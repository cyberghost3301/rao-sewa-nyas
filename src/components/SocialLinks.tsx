import React from "react";

export interface SocialChannel {
  name: string;
  handle: string;
  url: string;
  ariaLabel: string;
  category: "social" | "direct";
  hoverColor: string;
  hoverBorder: string;
  hoverBg: string;
  badge?: string;
  icon: (props: { className?: string }) => React.JSX.Element;
}

export const SOCIAL_PROFILES: SocialChannel[] = [
  {
    name: "WhatsApp",
    handle: "+91 79854 54216",
    url: "https://wa.me/917985454216/",
    ariaLabel: "Chat with Rao Sewa Nyas on WhatsApp",
    category: "direct",
    hoverColor: "text-[#25D366]",
    hoverBorder: "hover:border-[#25D366]/50",
    hoverBg: "hover:bg-[#25D366]/10",
    badge: "Direct Chat",
    icon: ({ className = "h-5 w-5" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.43 0-2.83-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6-.1.48-.29 1.47-1.2 1.68-1.77.21-.57.21-1.06.14-1.18-.06-.13-.23-.2-.48-.33z" />
      </svg>
    ),
  },
  {
    name: "Instagram",
    handle: "@raosewanyas",
    url: "https://www.instagram.com/raosewanyas/",
    ariaLabel: "Visit Rao Sewa Nyas on Instagram",
    category: "social",
    hoverColor: "text-[#E1306C]",
    hoverBorder: "hover:border-[#E1306C]/50",
    hoverBg: "hover:bg-[#E1306C]/10",
    badge: "Official",
    icon: ({ className = "h-5 w-5" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
  },
  {
    name: "Facebook",
    handle: "@raosewanyas",
    url: "https://www.facebook.com/raosewanyas/",
    ariaLabel: "Visit Rao Sewa Nyas on Facebook",
    category: "social",
    hoverColor: "text-[#1877F2]",
    hoverBorder: "hover:border-[#1877F2]/50",
    hoverBg: "hover:bg-[#1877F2]/10",
    icon: ({ className = "h-5 w-5" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    name: "X (Twitter)",
    handle: "@raosewanyas",
    url: "https://x.com/raosewanyas/",
    ariaLabel: "Visit Rao Sewa Nyas on X",
    category: "social",
    hoverColor: "text-slate-900",
    hoverBorder: "hover:border-slate-900/50",
    hoverBg: "hover:bg-slate-900/10",
    icon: ({ className = "h-5 w-5" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    name: "Threads",
    handle: "@raosewanyas",
    url: "https://www.threads.com/@raosewanyas/",
    ariaLabel: "Visit Rao Sewa Nyas on Threads",
    category: "social",
    hoverColor: "text-slate-900",
    hoverBorder: "hover:border-slate-900/50",
    hoverBg: "hover:bg-slate-900/10",
    icon: ({ className = "h-5 w-5" }) => (
      <svg
        className={className}
        viewBox="0 0 24 24"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.186 24C5.463 24 0 18.601 0 12.012 0 5.424 5.463.025 12.186.025c6.643 0 11.99 5.253 12.012 11.758v1.396c-.027 3.328-1.954 5.679-4.877 5.679-1.748 0-3.328-.862-4.004-2.203-.89 1.401-2.42 2.203-4.331 2.203-3.155 0-5.592-2.39-5.592-5.748 0-3.359 2.437-5.75 5.592-5.75 1.954 0 3.535.845 4.382 2.302.043-.615.119-1.229.239-1.838H12.186c-4.148 0-7.518 3.33-7.518 7.424 0 4.093 3.37 7.424 7.518 7.424 3.013 0 5.65-1.75 6.786-4.321.434.256.918.397 1.428.397 1.835 0 2.981-1.468 2.998-3.693v-1.422C23.377 6.368 18.398 2.025 12.186 2.025 6.574 2.025 2 6.502 2 12.012c0 5.511 4.574 9.988 10.186 9.988 2.87 0 5.524-1.189 7.447-3.235l1.455 1.375C18.835 22.502 15.65 24 12.186 24zm-.985-7.838c-1.974 0-3.592-1.527-3.592-3.75 0-2.223 1.618-3.75 3.592-3.75 1.973 0 3.591 1.527 3.591 3.75 0 2.223-1.618 3.75-3.591 3.75z" />
      </svg>
    ),
  },
];

interface SocialLinksProps {
  variant?: "footer" | "contact-card" | "compact" | "pills";
  className?: string;
}

export function SocialLinks({
  variant = "footer",
  className = "",
}: SocialLinksProps) {
  if (variant === "compact") {
    return (
      <div className={`flex items-center gap-2 ${className}`}>
        {SOCIAL_PROFILES.map((p) => {
          const Icon = p.icon;
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.ariaLabel}
              className={`group relative flex h-9 w-9 items-center justify-center rounded-xl border border-india-navy/10 bg-white/60 text-muted-foreground shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 active:shadow-none ${p.hoverColor} ${p.hoverBorder} ${p.hoverBg}`}
            >
              <Icon className="h-4 w-4 transition-transform duration-200 group-hover:scale-110" />
            </a>
          );
        })}
      </div>
    );
  }

  if (variant === "pills") {
    return (
      <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
        {SOCIAL_PROFILES.map((p) => {
          const Icon = p.icon;
          return (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={p.ariaLabel}
              className={`group inline-flex items-center gap-2 rounded-full border border-india-navy/10 bg-white/70 px-3.5 py-1.5 text-xs font-medium text-india-navy shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-md active:translate-y-0 ${p.hoverColor} ${p.hoverBorder} ${p.hoverBg}`}
            >
              <Icon className="h-3.5 w-3.5 transition-transform duration-200 group-hover:scale-110" />
              <span>{p.name}</span>
            </a>
          );
        })}
      </div>
    );
  }

  // Default: Footer variant (Tactile Lingo buttons with tooltips)
  return (
    <div className={`flex flex-wrap items-center gap-2.5 ${className}`}>
      {SOCIAL_PROFILES.map((p) => {
        const Icon = p.icon;
        return (
          <a
            key={p.name}
            href={p.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={p.ariaLabel}
            title={`${p.name} (${p.handle})`}
            className={`group relative flex h-10 w-10 items-center justify-center rounded-xl border border-india-navy/10 bg-white/80 text-muted-foreground shadow-[0_2px_8px_rgba(0,0,0,0.04)] backdrop-blur-md transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_6px_16px_rgba(0,0,0,0.08)] active:translate-y-0 active:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-saffron ${p.hoverColor} ${p.hoverBorder} ${p.hoverBg}`}
          >
            <Icon className="h-[18px] w-[18px] transition-transform duration-200 group-hover:scale-110" />
            {p.name === "WhatsApp" && (
              <span className="absolute -right-0.5 -top-0.5 flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-[#25D366]" />
              </span>
            )}
          </a>
        );
      })}
    </div>
  );
}
