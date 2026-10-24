import { useState } from "react";
import { Link } from "react-router-dom";
import {
  ShieldCheck,
  Check,
  Copy,
  ExternalLink,
  Phone,
  Mail,
  MapPin,
  Share2,
  Sparkles,
  ArrowUpRight,
  Heart,
  MessageCircle,
  Repeat,
  Compass,
  ArrowLeft,
  QrCode,
  Info,
} from "lucide-react";
import { SOCIAL_PROFILES } from "@/components/SocialLinks";

// Feed post data structures
interface SocialFeedPost {
  id: string;
  platform: "instagram" | "facebook" | "threads" | "x";
  tag: string;
  date: string;
  title: string;
  content: string;
  engagement: {
    likes?: string;
    shares?: string;
    comments?: string;
  };
  link: string;
}

const FEED_POSTS: SocialFeedPost[] = [
  {
    id: "ig-solar",
    platform: "instagram",
    tag: "Clean Energy EPC",
    date: "Latest Dispatch",
    title: "50kW Commercial Solar Rooftop • Lucknow Logistics Depot",
    content:
      "Enterprise reliability at scale. Commissioning completed for 50kW commercial solar installation in Lucknow, reducing grid reliance by 65% while directing surplus enterprise yields to community electrification.",
    engagement: {
      likes: "248",
      comments: "19",
    },
    link: "https://www.instagram.com/raosewanyas/",
  },
  {
    id: "th-deoria",
    platform: "threads",
    tag: "Field Dispatch",
    date: "Field Notes",
    title: "Deoria Village Microgrid: When Light Transforms Learning",
    content:
      "Field engineers just completed the phase-2 battery storage expansion at our Deoria rural microgrid. Clean power means evening study hours for children and uninterrupted irrigation for farmers. Ground reality in motion.",
    engagement: {
      likes: "184",
      shares: "32",
    },
    link: "https://www.threads.com/@raosewanyas/",
  },
  {
    id: "x-governance",
    platform: "x",
    tag: "Trust Governance",
    date: "Statutory Notice",
    title: "UPNEDA Standards Compliance & Public Credentials Updated",
    content:
      "Full transparency in governance: All audited financials, statutory 12A/80G credentials, and ISO 9001:2015 quality certifications for FY25 are now publicly accessible on our trust portal. Enterprise ethics in public interest.",
    engagement: {
      likes: "127",
      shares: "41",
    },
    link: "https://x.com/raosewanyas/",
  },
  {
    id: "fb-outreach",
    platform: "facebook",
    tag: "Community Health",
    date: "Community Camp",
    title: "Mobile Health Camp & Preventive Screening • Sitapur Road",
    content:
      "Over 350 rural families received preventative primary healthcare screenings and essential medications today during our Sitapur Road medical outreach. 100% self-funded through enterprise service surpluses.",
    engagement: {
      likes: "312",
      shares: "58",
      comments: "27",
    },
    link: "https://www.facebook.com/raosewanyas/",
  },
];

export default function SocialProfiles() {
  const [copiedHandle, setCopiedHandle] = useState(false);
  const [copiedUrl, setCopiedUrl] = useState(false);
  const [activeTab, setActiveTab] = useState<"all" | "desks" | "feeds">("all");
  const [showQrModal, setShowQrModal] = useState(false);

  const handleCopyHandle = async () => {
    try {
      await navigator.clipboard.writeText("@raosewanyas");
      setCopiedHandle(true);
      setTimeout(() => setCopiedHandle(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleCopyUrl = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href);
      setCopiedUrl(true);
      setTimeout(() => setCopiedUrl(false), 2000);
    } catch {
      // Fallback
    }
  };

  const handleNativeShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Rao Sewa Nyas | Official Social Channels & Live Desks",
          text: "Connect with Rao Sewa Nyas: verified social profiles, instant WhatsApp desk, and official communications.",
          url: window.location.href,
        });
      } catch {
        // User cancelled or share failed
      }
    } else {
      handleCopyUrl();
    }
  };

  // Filter channels or posts
  const directProfiles = SOCIAL_PROFILES.filter((p) => p.category === "direct");
  const socialFeedProfiles = SOCIAL_PROFILES.filter((p) => p.category === "social");

  return (
    <div className="relative min-h-screen pt-28 pb-16 md:pt-36 md:pb-20 overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 rounded-full bg-saffron/10 blur-[120px]" />
      <div className="pointer-events-none absolute top-1/2 right-0 -z-10 h-[450px] w-[500px] rounded-full bg-india-navy/5 blur-[100px]" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">

        {/* Breadcrumb & Navigation Back */}
        <div className="mb-6 flex items-center justify-between">
          <Link
            to="/"
            className="group inline-flex items-center gap-2 rounded-xl border border-india-navy/10 bg-white/70 px-3.5 py-1.5 text-xs font-semibold text-india-navy backdrop-blur-md transition-all duration-200 hover:border-saffron/40 hover:bg-white hover:text-saffron active:translate-y-0.5"
          >
            <ArrowLeft className="h-3.5 w-3.5 transition-transform group-hover:-translate-x-0.5" />
            <span>Return to Home</span>
          </Link>

          {/* <div className="inline-flex items-center gap-1.5 rounded-full border border-emerald-200/80 bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-800 shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            <span>Live Communication Desk</span>
          </div> */}
        </div>

        {/* ── Main Profile Banner (Tactile Lingo Card) ── */}
        <section className="relative overflow-hidden rounded-3xl border-2 border-india-navy/10 bg-white/85 p-6 sm:p-10 shadow-[0_12px_40px_rgba(15,29,56,0.06)] backdrop-blur-2xl transition-all">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex items-start sm:items-center gap-5">
              {/* Profile Avatar / Logo with tactile 3D ring */}
              <div className="relative shrink-0">
                <div className="flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center rounded-2xl border-2 border-india-navy/10 bg-gradient-to-b from-white to-orange-50/50 p-2 shadow-[0_8px_20px_rgba(0,0,0,0.06)]">
                  <img
                    src="/logo.png"
                    alt="Rao Sewa Nyas emblem"
                    className="h-full w-full object-contain"
                  />
                </div>
                {/* Verified Shield Badge */}
                <div
                  className="absolute -bottom-1 -right-1 flex h-7 w-7 items-center justify-center rounded-full border-2 border-white bg-saffron text-white shadow-md"
                  title="Official Verified Trust Channel"
                >
                  <ShieldCheck className="h-4 w-4" />
                </div>
              </div>

              {/* Identity & Metadata */}
              <div>
                <div className="flex flex-wrap items-center gap-2 sm:gap-3">
                  <h1 className="font-display text-2xl sm:text-3xl font-extrabold tracking-tight text-india-navy">
                    Rao Sewa Nyas
                  </h1>
                  <span className="inline-flex items-center gap-1 rounded-full border border-saffron/30 bg-saffron/10 px-2.5 py-0.5 text-xs font-bold text-saffron">
                    <Sparkles className="h-3 w-3" />
                    Verified Entity
                  </span>
                </div>

                <div className="mt-1 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                  <button
                    onClick={handleCopyHandle}
                    className="group inline-flex items-center gap-1.5 font-semibold text-india-navy hover:text-saffron transition-colors"
                    title="Click to copy official handle"
                  >
                    <span>@raosewanyas</span>
                    {copiedHandle ? (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.2 rounded">
                        <Check className="h-3 w-3" /> Copied!
                      </span>
                    ) : (
                      <Copy className="h-3.5 w-3.5 opacity-60 group-hover:opacity-100" />
                    )}
                  </button>
                  <span>•</span>
                  <span>Lucknow &amp; Deoria, UP</span>
                </div>

                <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                  Official digital media feeds and direct communication desks of Rao Sewa Nyas — combining commercial enterprise excellence with self-funded community development.
                </p>
              </div>
            </div>

            {/* Quick Share / Action Buttons */}
            <div className="flex sm:flex-col items-stretch gap-2.5 shrink-0 pt-2 md:pt-0">
              <button
                onClick={handleNativeShare}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border-b-4 border-india-navy/20 bg-india-navy px-4 py-2.5 text-xs font-bold text-white shadow-md transition-all duration-150 hover:bg-india-navy/95 active:border-b-0 active:translate-y-1"
              >
                <Share2 className="h-3.5 w-3.5" />
                <span>Share Hub</span>
              </button>

              <button
                onClick={() => setShowQrModal(!showQrModal)}
                className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 rounded-xl border border-india-navy/15 bg-white/80 px-4 py-2.5 text-xs font-bold text-india-navy shadow-sm transition-all duration-150 hover:bg-white hover:border-saffron/40 active:translate-y-0.5"
              >
                <QrCode className="h-3.5 w-3.5 text-saffron" />
                <span>QR Access</span>
              </button>
            </div>
          </div>

          {/* QR Code Popout Drawer (Interactive) */}
          {showQrModal && (
            <div className="mt-6 rounded-2xl border border-saffron/30 bg-gradient-to-r from-orange-50/70 to-amber-50/70 p-5 backdrop-blur-md animate-in fade-in slide-in-from-top-2 duration-200">
              <div className="flex flex-col sm:flex-row items-center gap-5 justify-between">
                <div className="flex items-center gap-4">
                  {/* Stylized QR Visual Frame */}
                  <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-xl border-2 border-india-navy/15 bg-white p-2 shadow-inner">
                    <QrCode className="h-16 w-16 text-india-navy" />
                  </div>
                  <div>
                    <h2 className="font-display text-sm font-bold text-india-navy">
                      Scan or Share Universal Portal Link
                    </h2>
                    <p className="mt-1 text-xs text-muted-foreground">
                      Share this verified hub with partners, donors, contractors, or government representatives.
                    </p>
                    <p className="mt-1.5 font-mono text-[11px] text-saffron font-medium">
                      https://raosewanyas.org/social
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2 w-full sm:w-auto">
                  <button
                    onClick={handleCopyUrl}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 rounded-lg border border-india-navy/20 bg-white px-3.5 py-2 text-xs font-semibold text-india-navy shadow-sm transition hover:bg-slate-50"
                  >
                    {copiedUrl ? (
                      <>
                        <Check className="h-3.5 w-3.5 text-emerald-600" />
                        <span>Link Copied</span>
                      </>
                    ) : (
                      <>
                        <Copy className="h-3.5 w-3.5" />
                        <span>Copy URL</span>
                      </>
                    )}
                  </button>
                  <button
                    onClick={() => setShowQrModal(false)}
                    className="rounded-lg border border-transparent px-3 py-2 text-xs font-medium text-muted-foreground hover:text-india-navy"
                  >
                    Dismiss
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* Trust Attributes Bar */}
          <div className="mt-6 pt-5 border-t border-border/60 grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="rounded-xl border border-india-navy/5 bg-slate-50/60 p-2.5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Entity Type</span>
              <span className="font-semibold text-xs text-india-navy">Public Charitable Trust</span>
            </div>
            <div className="rounded-xl border border-india-navy/5 bg-slate-50/60 p-2.5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Registration</span>
              <span className="font-semibold text-xs text-india-navy">Deed No. 24/2024</span>
            </div>
            <div className="rounded-xl border border-india-navy/5 bg-slate-50/60 p-2.5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Clean Energy</span>
              <span className="font-semibold text-xs text-india-navy">UPNEDA EPC (Soon)</span>
            </div>
            <div className="rounded-xl border border-india-navy/5 bg-slate-50/60 p-2.5">
              <span className="block text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Tax Status</span>
              <span className="font-semibold text-xs text-emerald-700">12A &amp; 80G Under Process</span>
            </div>
          </div>
        </section>

        {/* ── Category Navigation Tabs (Tactile Lingo Pills) ── */}
        <div className="mt-8 flex items-center justify-center gap-2">
          <div className="inline-flex rounded-2xl border border-india-navy/10 bg-white/70 p-1.5 backdrop-blur-md shadow-sm">
            <button
              onClick={() => setActiveTab("all")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-150 ${activeTab === "all"
                ? "bg-india-navy text-white shadow-sm"
                : "text-muted-foreground hover:text-india-navy"
                }`}
            >
              All Channels ({SOCIAL_PROFILES.length})
            </button>
            <button
              onClick={() => setActiveTab("desks")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-150 ${activeTab === "desks"
                ? "bg-india-navy text-white shadow-sm"
                : "text-muted-foreground hover:text-india-navy"
                }`}
            >
              Direct Live Desks (3)
            </button>
            <button
              onClick={() => setActiveTab("feeds")}
              className={`rounded-xl px-4 py-2 text-xs font-bold transition-all duration-150 ${activeTab === "feeds"
                ? "bg-india-navy text-white shadow-sm"
                : "text-muted-foreground hover:text-india-navy"
                }`}
            >
              Social Media Feeds ({socialFeedProfiles.length})
            </button>
          </div>
        </div>

        {/* ── Section 1: Rapid Direct Desks ── */}
        {(activeTab === "all" || activeTab === "desks") && (
          <section className="mt-10">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-emerald-100 text-emerald-800">
                  <MessageCircle className="h-3.5 w-3.5" />
                </div>
                <h2 className="font-display text-base font-bold text-india-navy uppercase tracking-wider">
                  Direct Response &amp; Operational Desks
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">Fastest Response</span>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* WhatsApp Instant Desk */}
              <a
                href="https://wa.me/917985454216/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-emerald-500/20 bg-white/90 p-5 shadow-[0_4px_16px_rgba(37,211,102,0.06)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/40 hover:shadow-lg active:translate-y-0"
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-20 w-20 rounded-full bg-emerald-500/10 blur-xl transition-all group-hover:scale-150" />
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#25D366]/10 text-[#25D366] transition-transform group-hover:scale-110">
                      {directProfiles.find((p) => p.name === "WhatsApp")?.icon({ className: "h-6 w-6" })}
                    </div>
                    <span className="inline-flex items-center gap-1 rounded-full border border-emerald-300 bg-emerald-50 px-2 py-0.5 text-[11px] font-bold text-emerald-700">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
                      Instant Chat
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-india-navy">
                    WhatsApp Desk
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-emerald-700">
                    +91 79854 54216
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Project tenders, solar rooftop estimates, vendor registration &amp; CSR consultations.
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-emerald-100/60 pt-3 text-xs font-bold text-emerald-700">
                  <span>Open WhatsApp</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Direct Helpline */}
              <a
                href="tel:917985454216"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-india-navy/10 bg-white/90 p-5 shadow-[0_4px_16px_rgba(15,29,56,0.04)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-lg active:translate-y-0"
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-20 w-20 rounded-full bg-saffron/10 blur-xl transition-all group-hover:scale-150" />
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-saffron/10 text-saffron transition-transform group-hover:scale-110">
                      <Phone className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                      Voice Desk
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-india-navy">
                    Operational Helpline
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-india-navy">
                    +91 79854 54216
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Direct voice connectivity to project managers and district engineers across Uttar Pradesh.
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-bold text-india-navy group-hover:text-saffron transition-colors">
                  <span>Call Helpline</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>

              {/* Official Email */}
              <a
                href="mailto:raosewanyas@gmail.com"
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-india-navy/10 bg-white/90 p-5 shadow-[0_4px_16px_rgba(15,29,56,0.04)] backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-saffron/40 hover:shadow-lg active:translate-y-0"
              >
                <div className="absolute top-0 right-0 -mr-6 -mt-6 h-20 w-20 rounded-full bg-india-navy/10 blur-xl transition-all group-hover:scale-150" />
                <div>
                  <div className="flex items-center justify-between">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-india-navy/10 text-india-navy transition-transform group-hover:scale-110">
                      <Mail className="h-5 w-5" />
                    </div>
                    <span className="rounded-full border border-slate-200 bg-slate-100 px-2 py-0.5 text-[11px] font-semibold text-slate-700">
                      Secretariat
                    </span>
                  </div>

                  <h3 className="mt-4 font-display text-base font-bold text-india-navy">
                    Statutory Email
                  </h3>
                  <p className="mt-1 font-mono text-xs font-semibold text-india-navy truncate">
                    raosewanyas@gmail.com
                  </p>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                    Formal notices, audited financial inquiries, donor certificates, and legal correspondence.
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-border/60 pt-3 text-xs font-bold text-india-navy group-hover:text-saffron transition-colors">
                  <span>Send Email</span>
                  <ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </a>
            </div>
          </section>
        )}

        {/* ── Section 2: Official Social Media Feeds & Profiles ── */}
        {(activeTab === "all" || activeTab === "feeds") && (
          <section className="mt-12">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <div className="flex h-6 w-6 items-center justify-center rounded-lg bg-saffron/15 text-saffron">
                  <Compass className="h-3.5 w-3.5" />
                </div>
                <h2 className="font-display text-base font-bold text-india-navy uppercase tracking-wider">
                  Verified Social Media Platforms
                </h2>
              </div>
              <span className="text-xs text-muted-foreground">Official Channels</span>
            </div>

            {/* Social Platform Profiles Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {socialFeedProfiles.map((channel) => {
                const Icon = channel.icon;
                return (
                  <a
                    key={channel.name}
                    href={channel.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative flex flex-col justify-between rounded-2xl border-2 border-india-navy/10 bg-white/85 p-5 shadow-sm backdrop-blur-md transition-all duration-200 hover:-translate-y-1 hover:border-india-navy/30 hover:shadow-md active:translate-y-0"
                  >
                    <div>
                      <div className="flex items-center justify-between">
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 text-slate-800 transition-colors ${channel.hoverBg} ${channel.hoverColor}`}
                        >
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="inline-flex items-center gap-1 rounded-md border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-bold uppercase text-slate-600">
                          {channel.name}
                        </span>
                      </div>

                      <h3 className="mt-3.5 font-display text-sm font-bold text-india-navy">
                        {channel.name}
                      </h3>
                      <p className="mt-0.5 font-mono text-xs text-muted-foreground">
                        {channel.handle}
                      </p>
                    </div>

                    <div className="mt-4 flex items-center justify-between border-t border-border/50 pt-3 text-xs font-bold text-india-navy group-hover:text-saffron transition-colors">
                      <span>Follow Profile</span>
                      <ExternalLink className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                    </div>
                  </a>
                );
              })}
            </div>

            {/* ── Rich Feed Showcase Cards ── */}
            <div className="mt-8 space-y-4">
              <h3 className="font-display text-xs font-bold uppercase tracking-wider text-muted-foreground">
                Recent Dispatches &amp; Broadcast Feeds
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {FEED_POSTS.map((post) => {
                  const channel = SOCIAL_PROFILES.find((p) => p.name.toLowerCase().includes(post.platform)) || SOCIAL_PROFILES[1];
                  const Icon = channel.icon;

                  return (
                    <div
                      key={post.id}
                      className="group flex flex-col justify-between rounded-2xl border border-india-navy/10 bg-white/80 p-5 shadow-[0_2px_10px_rgba(0,0,0,0.02)] backdrop-blur-md transition-all duration-200 hover:border-india-navy/25 hover:shadow-sm"
                    >
                      <div>
                        {/* Feed Card Header */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-2.5">
                            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-100 text-slate-700">
                              <Icon className="h-4 w-4" />
                            </div>
                            <div>
                              <span className="text-xs font-bold text-india-navy capitalize">
                                {post.platform === "x" ? "X (Twitter)" : post.platform}
                              </span>
                              <span className="block text-[11px] text-muted-foreground">
                                @raosewanyas
                              </span>
                            </div>
                          </div>

                          <span className="rounded-full border border-saffron/20 bg-saffron/10 px-2 py-0.5 text-[10px] font-bold text-saffron">
                            {post.tag}
                          </span>
                        </div>

                        {/* Title & Body */}
                        <h4 className="mt-3.5 font-display text-sm font-bold text-india-navy leading-snug">
                          {post.title}
                        </h4>
                        <p className="mt-2 text-xs leading-relaxed text-muted-foreground line-clamp-3">
                          {post.content}
                        </p>
                      </div>

                      {/* Engagement & Link */}
                      <div className="mt-5 flex items-center justify-between border-t border-border/50 pt-3 text-xs text-muted-foreground">
                        <div className="flex items-center gap-3">
                          {post.engagement.likes && (
                            <span className="inline-flex items-center gap-1">
                              <Heart className="h-3 w-3 text-rose-500" />
                              <span className="text-[11px] font-medium">{post.engagement.likes}</span>
                            </span>
                          )}
                          {post.engagement.shares && (
                            <span className="inline-flex items-center gap-1">
                              <Repeat className="h-3 w-3 text-emerald-600" />
                              <span className="text-[11px] font-medium">{post.engagement.shares}</span>
                            </span>
                          )}
                          {post.engagement.comments && (
                            <span className="inline-flex items-center gap-1">
                              <MessageCircle className="h-3 w-3 text-sky-500" />
                              <span className="text-[11px] font-medium">{post.engagement.comments}</span>
                            </span>
                          )}
                        </div>

                        <a
                          href={post.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-semibold text-india-navy hover:text-saffron transition-colors"
                        >
                          <span>View on Feed</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </section>
        )}

        {/* ── Official Anti-Fraud / Verification Safeguard ── */}
        <section className="mt-12 rounded-2xl border border-amber-200/80 bg-amber-50/60 p-5 backdrop-blur-md">
          <div className="flex items-start gap-3.5">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-amber-200/60 text-amber-900">
              <Info className="h-4 w-4" />
            </div>
            <div>
              <h4 className="font-display text-sm font-bold text-amber-900">
                Official Verification &amp; Security Protocol
              </h4>
              <p className="mt-1 text-xs leading-relaxed text-amber-800">
                Always ensure you are communicating through our verified handle <strong>@raosewanyas</strong>. Rao Sewa Nyas will never ask for bank account PINs, OTPs, or unsolicited cash transfers via social media direct messages.
              </p>
            </div>
          </div>
        </section>

        {/* ── Registered Address & Office Footer Card ── */}
        <div className="mt-8 rounded-2xl border border-india-navy/10 bg-white/60 p-5 backdrop-blur-md">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 text-xs text-muted-foreground">
            <div className="flex items-center gap-2.5">
              <MapPin className="h-4 w-4 text-saffron shrink-0" />
              <span>
                <strong>Registered Office:</strong> 610/586 Keshav Nagar, Sitapur Road, Lucknow, Uttar Pradesh – 226020
              </span>
            </div>
            <div className="flex items-center gap-4">
              <Link to="/contact" className="font-semibold text-india-navy hover:text-saffron transition-colors">
                Contact Desk &rarr;
              </Link>
              <Link to="/credentials" className="font-semibold text-india-navy hover:text-saffron transition-colors">
                View Credentials &rarr;
              </Link>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
