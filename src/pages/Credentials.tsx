import { useState } from "react";
import {
  ShieldCheck,
  Check,
  Copy,
  Calendar,
  MapPin,
  Clock,
  Mail,
  Scale,
  Award,
  ExternalLink,
} from "lucide-react";

// ── Official Credential Records Data ──────────────────────────────
interface CredentialRecord {
  idKey: string;
  category: "legal" | "tax" | "central" | "exemption";
  categoryLabel: string;
  title: string;
  codeName: string;
  codeValue: string;
  authority: string;
  jurisdiction: string;
  regDate: string;
  type: string;
  status: "active" | "in-process";
  statusLabel: string;
  verificationPortal?: string;
  verificationUrl?: string;
  notes?: string;
}

const credentialRecords: CredentialRecord[] = [
  {
    idKey: "trust-deed",
    category: "legal",
    categoryLabel: "Statutory Constitution",
    title: "Trust Registration Deed",
    codeName: "Registration No.",
    codeValue: "24/2024",
    authority: "Deputy Registrar Sadar (First)",
    jurisdiction: "Lucknow, Uttar Pradesh, India",
    regDate: "19/01/2024",
    type: "Public Charitable Trust",
    status: "active",
    statusLabel: "Registered & In Good Standing",
    notes: "Primary constitutional instrument establishing legal existence and charitable mandate.",
  },
  {
    idKey: "pan",
    category: "tax",
    categoryLabel: "Direct Taxation",
    title: "Permanent Account Number (PAN)",
    codeName: "PAN",
    codeValue: "AAFTR2172R",
    authority: "Income Tax Department, Govt. of India",
    jurisdiction: "All India Jurisdiction",
    regDate: "Active",
    type: "Trust Entity Assessment",
    status: "active",
    statusLabel: "Active Taxpayer Entity",
    notes: "Statutory direct tax identification for all banking, filings, and audit compliances.",
  },
  {
    idKey: "tan",
    category: "tax",
    categoryLabel: "Direct Taxation",
    title: "Tax Deduction & Collection Account",
    codeName: "TAN",
    codeValue: "LKNR14963E",
    authority: "Income Tax Department, Govt. of India",
    jurisdiction: "Lucknow Region",
    regDate: "Active",
    type: "Tax Deduction at Source (TDS)",
    status: "active",
    statusLabel: "Active TDS Filer",
    verificationPortal: "eportal.incometax.gov.in",
    verificationUrl:
      "https://eportal.incometax.gov.in/iec/foservices/#/pre-login/knowYourTAN",
    notes: "Enables statutory TDS withholding, contractor remittances, and withholding return filings.",
  },
  {
    idKey: "gstin",
    category: "tax",
    categoryLabel: "Indirect Taxation",
    title: "Goods & Services Tax Identification",
    codeName: "GSTIN",
    codeValue: "09AAFTR2172R1ZR",
    authority: "Commercial Tax Dept., Uttar Pradesh & CBIC",
    jurisdiction: "State Code: 09 (Uttar Pradesh)",
    regDate: "Active",
    type: "Regular GST Registration",
    status: "active",
    statusLabel: "Active & GST Compliant",
    verificationPortal: "services.gst.gov.in",
    verificationUrl: "https://services.gst.gov.in/services/searchtp",
    notes: "Compliant for social enterprise activities, procurement, and interstate operations.",
  },
  {
    idKey: "ngo-darpan",
    category: "central",
    categoryLabel: "Central Government Portals",
    title: "NITI Aayog - NGO Darpan",
    codeName: "Darpan Unique ID",
    codeValue: "UP/2024/0476210",
    authority: "NITI Aayog, Government of India",
    jurisdiction: "National NGO Registry",
    regDate: "2024",
    type: "Voluntary Organization / NGO",
    status: "active",
    statusLabel: "Verified on NGO Darpan",
    verificationPortal: "ngodarpan.gov.in",
    verificationUrl: "https://ngodarpan.gov.in/",
    notes: "Enables collaboration with central ministries, access to grants, and institutional validation.",
  },
  {
    idKey: "msme",
    category: "central",
    categoryLabel: "Central Government Portals",
    title: "Ministry of MSME - Udyam Registration",
    codeName: "Udyam Reg. No.",
    codeValue: "UDYAM-UP-50-0130438",
    authority: "Ministry of Micro, Small & Medium Enterprises",
    jurisdiction: "Uttar Pradesh Unit",
    regDate: "2024",
    type: "Micro Social Enterprise / NGO Support",
    status: "active",
    statusLabel: "Udyam Certified",
    verificationPortal: "udyamregistration.gov.in",
    verificationUrl: "https://udyamregistration.gov.in/",
    notes: "Formal MSME accreditation supporting skill training, rural enterprise, and procurement drives.",
  },
  {
    idKey: "gem",
    category: "central",
    categoryLabel: "Central Government Portals",
    title: "Government e-Marketplace (GeM)",
    codeName: "GeM Seller ID",
    codeValue: "WMER250012928713",
    authority: "GeM SPV, Ministry of Commerce & Industry",
    jurisdiction: "Pan-India Procurement",
    regDate: "Active",
    type: "Registered Seller / Service Provider",
    status: "active",
    statusLabel: "Verified GeM Vendor",
    verificationPortal: "gem.gov.in",
    verificationUrl: "https://gem.gov.in/",
    notes: "Authorizes Rao Sewa Nyas to tender and supply social, educational, and agricultural services.",
  },
  {
    idKey: "12a",
    category: "exemption",
    categoryLabel: "Statutory Exemptions",
    title: "Income Tax Act - Section 12A",
    codeName: "Filing Status",
    codeValue: "Under Statutory Process",
    authority: "Office of CIT (Exemptions), Income Tax Dept.",
    jurisdiction: "Uttar Pradesh Region",
    regDate: "Trust Formed Jan 2024",
    type: "Trust Income Tax Exemption",
    status: "in-process",
    statusLabel: "Application in Progress",
    notes: "Following mandatory statutory accounting cycles since our founding in January 2024.",
  },
  {
    idKey: "80g",
    category: "exemption",
    categoryLabel: "Statutory Exemptions",
    title: "Income Tax Act - Section 80G",
    codeName: "Filing Status",
    codeValue: "Under Statutory Process",
    authority: "Office of CIT (Exemptions), Income Tax Dept.",
    jurisdiction: "Uttar Pradesh Region",
    regDate: "Trust Formed Jan 2024",
    type: "Donor Tax Deduction Exemption",
    status: "in-process",
    statusLabel: "Application in Progress",
    notes: "Scheduled in sequence with 12A filing per Income Tax Department prescribed timeline.",
  },
];

export default function Credentials() {
  const [filter, setFilter] = useState<"all" | "legal" | "tax" | "central" | "exemption">("all");
  const [copiedId, setCopiedId] = useState<string | null>(null);

  const handleCopy = (idKey: string, text: string) => {
    if (text === "Under Statutory Process") return;
    navigator.clipboard.writeText(text);
    setCopiedId(idKey);
    setTimeout(() => {
      setCopiedId((curr) => (curr === idKey ? null : curr));
    }, 2000);
  };

  const filtered =
    filter === "all" ? credentialRecords : credentialRecords.filter((r) => r.category === filter);

  return (
    <div className="min-h-screen pb-20 pt-28 md:pt-32">
      {/* ── Page Header ────────────────────────────────────────── */}
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-india-navy/15 bg-white/80 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-india-navy shadow-xs backdrop-blur-sm">
            <Scale className="h-3.5 w-3.5 text-saffron" />
            <span>Public Compliance &amp; Institutional Registry</span>
          </div>

          <h1 className="mt-4 text-3xl font-bold tracking-tight text-india-navy sm:text-4xl md:text-5xl lg:text-6xl">
            Legal Constitution &amp;{" "}
            <span className="text-india-gradient">Government Registrations</span>
          </h1>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-muted-foreground sm:text-base">
            Official government registrations, statutory tax filings, and institutional identifiers
            of Rao Sewa Nyas (Registered Public Charitable Trust, Lucknow).
          </p>
        </div>
      </div>

      {/* ── Split Dossier Layout ──────────────────────────────── */}
      <div className="container mx-auto mt-12 max-w-6xl px-4">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* ── Left Column: Institutional Factsheet ───────────── */}
          <div className="lg:col-span-4 lg:sticky lg:top-36 space-y-6">
            <div className="rounded-2xl border border-india-navy/15 bg-white p-6 shadow-sm">
              <div className="flex items-center gap-3.5 border-b border-india-navy/10 pb-5">
                <img
                  src="/favicon.svg"
                  alt="Rao Sewa Nyas Official Emblem"
                  className="h-13 w-13 object-contain rounded-xl p-1 bg-white border border-india-navy/10 shadow-xs shrink-0"
                />
                <div>
                  <h2 className="font-bold text-india-navy text-lg leading-tight">Rao Sewa Nyas</h2>
                  <p className="text-xs font-medium text-muted-foreground mt-0.5">Trust Reg. No. 24/2024</p>
                </div>
              </div>

              <div className="mt-5 space-y-3.5 text-xs">
                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Constitution Type
                  </span>
                  <p className="font-semibold text-india-navy mt-0.5">Public Charitable Trust</p>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Registration Date
                  </span>
                  <p className="font-semibold text-india-navy mt-0.5">19 January 2024</p>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Registering Body
                  </span>
                  <p className="font-semibold text-india-navy mt-0.5">
                    Deputy Registrar Sadar (First), Lucknow
                  </p>
                </div>

                <div>
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Registered District &amp; State
                  </span>
                  <p className="font-semibold text-india-navy mt-0.5">Lucknow, Uttar Pradesh, India</p>
                </div>

                <div className="border-t border-india-navy/10 pt-3">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-muted-foreground">
                    Operational Status
                  </span>
                  <div className="mt-1 flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-india-green" />
                    <span className="font-bold text-india-green">Active &amp; Compliant</span>
                  </div>
                </div>
              </div>

              <div className="mt-6 rounded-xl bg-india-navy/[0.04] p-3.5 text-[11px] text-muted-foreground leading-relaxed border border-india-navy/8">
                <p>
                  Rao Sewa Nyas is incorporated as an irrevocable public charitable trust for healthcare,
                  education, rural livelihood, and environmental stewardship across Uttar Pradesh and India.
                </p>
              </div>
            </div>
          </div>

          {/* ── Right Column: Interactive Registry ─────────────── */}
          <div className="lg:col-span-8 space-y-6">
            {/* Category Filter Pills */}
            <div className="flex flex-wrap gap-1.5 border-b border-india-navy/10 pb-3">
              {[
                { key: "all", label: "All Identifiers" },
                { key: "legal", label: "Legal Deed" },
                { key: "tax", label: "PAN / TAN / GST" },
                { key: "central", label: "Govt. Portals" },
                { key: "exemption", label: "12A / 80G" },
              ].map((tab) => (
                <button
                  key={tab.key}
                  type="button"
                  onClick={() => setFilter(tab.key as any)}
                  className={`rounded-xl px-3 py-1.5 text-xs font-semibold transition-all cursor-pointer ${filter === tab.key
                      ? "bg-india-navy text-white shadow-2xs"
                      : "bg-white text-india-navy/70 hover:bg-india-navy/5 border border-india-navy/10"
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Cards List */}
            <div className="space-y-4">
              {filtered.map((item) => {
                const isPending = item.status === "in-process";

                return (
                  <div
                    key={item.idKey}
                    className={`rounded-2xl border bg-white p-5 shadow-2xs transition-all hover:border-india-navy/30 ${isPending
                        ? "border-dashed border-india-navy/20 bg-india-navy/[0.01]"
                        : "border-india-navy/12"
                      }`}
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                      <div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-saffron">
                          {item.categoryLabel}
                        </span>
                        <h3 className="text-base font-bold text-india-navy">
                          {item.title}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{item.authority}</p>
                      </div>

                      <div className="flex items-center gap-2 shrink-0">
                        <div className="rounded-xl border border-india-navy/15 bg-white px-3.5 py-1.5 shadow-2xs">
                          <span className="block text-[9px] font-semibold uppercase tracking-wider text-muted-foreground">
                            {item.codeName}
                          </span>
                          <span className="font-mono text-sm sm:text-base font-bold tracking-wider text-india-navy select-all">
                            {item.codeValue}
                          </span>
                        </div>

                        {!isPending && (
                          <button
                            type="button"
                            onClick={() => handleCopy(item.idKey, item.codeValue)}
                            className="flex items-center gap-1.5 rounded-xl border border-india-navy/15 bg-white px-3 py-2 text-xs font-semibold text-india-navy hover:bg-india-navy hover:text-white transition-colors cursor-pointer"
                            title={`Copy ${item.codeName}`}
                          >
                            {copiedId === item.idKey ? (
                              <>
                                <Check className="h-3.5 w-3.5 text-india-green" />
                                <span className="text-india-green font-bold text-[11px]">Copied</span>
                              </>
                            ) : (
                              <>
                                <Copy className="h-3.5 w-3.5 text-muted-foreground" />
                                <span className="text-[11px]">Copy</span>
                              </>
                            )}
                          </button>
                        )}
                      </div>
                    </div>

                    <div className="mt-3 flex flex-wrap items-center gap-4 text-[11px] text-muted-foreground/80 border-t border-india-navy/6 pt-3">
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3 text-india-navy/40" />
                        {item.jurisdiction}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3 text-india-navy/40" />
                        {item.regDate}
                      </span>
                      {item.verificationUrl && (
                        <a
                          href={item.verificationUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-india-navy/70 hover:text-saffron transition-colors ml-auto"
                        >
                          <span>Verify Portal</span>
                          <ExternalLink className="h-3 w-3" />
                        </a>
                      )}
                    </div>

                    <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
                      {item.notes}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Exemption notice when viewing Exemption or All */}
            {(filter === "all" || filter === "exemption") && (
              <div className="rounded-2xl border border-india-navy/10 bg-india-navy/[0.02] p-5">
                <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-india-navy/70">
                  <Clock className="h-3.5 w-3.5 text-saffron" />
                  <span>Statutory Compliance Timeline</span>
                </div>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Rao Sewa Nyas was registered on 19 January 2024. As prescribed under the Income Tax Act
                  for newly constituted trusts, Section 12A and 80G applications are processed in sequence
                  following statutory accounting schedules.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* ── Institutional Verification Footer ─────────────────── */}
      <div className="container mx-auto mt-16 px-4">
        <div className="mx-auto max-w-6xl rounded-2xl border border-india-navy/10 bg-white/70 p-6 md:p-8 backdrop-blur-md">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="space-y-1.5">
              <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-saffron">
                <ShieldCheck className="h-4 w-4" />
                <span>Auditor &amp; CSR Due Diligence</span>
              </div>
              <h2 className="text-lg font-bold text-india-navy">
                Need Certified True Copies or Verification Packets?
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground max-w-xl">
                Certified signed/sealed copies of Trust Deed, PAN, GST, and audit financials
                are available on formal request for institutional grants, CSR partnerships, and statutory bodies.
              </p>
            </div>
            <a
              href="/contact"
              className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-india-navy px-5 py-3 text-xs font-semibold text-white shadow-xs transition-colors hover:bg-india-navy/90"
            >
              <Mail className="h-4 w-4 text-saffron" />
              <span>Request Due Diligence Dossier</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
