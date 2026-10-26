"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Phone, Send, CheckCircle2, AlertCircle, Loader2, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { SocialLinks } from "@/components/SocialLinks";

interface ContactDetail {
  icon: typeof MapPin | typeof Phone | typeof Mail;
  title: string;
  body: string;
  extra?: string;
  href?: string;
  actionText?: string;
}

const details: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Lucknow Headquarters",
    body: "610/586 Keshav Nagar, Sitapur Road, Lucknow, Uttar Pradesh – 226020",
    extra: "+91 79854 54216",
    href: "tel:917985454216",
    actionText: "Call",
  },
  {
    icon: Mail,
    title: "Corporate Inquiries",
    body: "raosewanyas@gmail.com",
    extra:
      "For RFP responses, technical bids, and large-scale deployment consulting.",
    href: "mailto:raosewanyas@gmail.com",
    actionText: "Email",
  },
];

const serviceOptions = [
  "Energy Solutions",
  "Solar Solutions",
  "Telecom Services",
  "Automation Services",
  "Surveillance & Security Services",
  "IT Enabled Services",
  "Real Estate Services",
  "E2E Data Collection & Analysis",
  "Managed 360 Marketing & Sales",
  "Campaign Design & Management",
  "Other (Type Below)",
];

type Status = "idle" | "sending" | "success" | "error";

// 1. Strict Email Format: username@domain.extension (e.g. example@gmail.com)
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// 2. Strict Phone Format: 10 digits starting with 6, 7, 8, or 9
const PHONE_REGEX = /^[6-9]\d{9}$/;

function Contact() {
  const [service, setService] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [errors, setErrors] = useState<{ email?: string; phone?: string }>({});
  const [form, setForm] = useState({
    name: "",
    organization: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  // Email Validation
  const validateEmail = (val: string): string => {
    const trimmed = val.trim();
    if (!trimmed) {
      return "Email address is required.";
    }
    if (!EMAIL_REGEX.test(trimmed)) {
      return "Please enter a valid email as username@domain.extension (e.g. example@gmail.com)";
    }
    return "";
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setForm((prev) => ({ ...prev, email: val }));
    if (errors.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(val) }));
    }
  };

  const handleEmailBlur = () => {
    if (form.email) {
      setErrors((prev) => ({ ...prev, email: validateEmail(form.email) }));
    }
  };

  // Phone Validation: 10 digits, starting with 6-9
  const validatePhone = (val: string): string => {
    const digits = val.replace(/\D/g, "");
    if (!digits) {
      return "Phone number is required.";
    }
    if (!/^[6-9]/.test(digits)) {
      return "Indian mobile numbers must start with 6, 7, 8, or 9.";
    }
    if (digits.length !== 10) {
      return `Phone number must be exactly 10 digits (currently ${digits.length}/10).`;
    }
    return "";
  };

  const handlePhoneKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    // Allow control/navigation keys
    if (
      e.key === "Backspace" ||
      e.key === "Delete" ||
      e.key === "ArrowLeft" ||
      e.key === "ArrowRight" ||
      e.key === "Tab" ||
      e.key === "Enter" ||
      e.ctrlKey ||
      e.metaKey
    ) {
      return;
    }

    // Reject non-numeric keys
    if (!/^\d$/.test(e.key)) {
      e.preventDefault();
      return;
    }

    // Strictly restrict entry if inserting at the first position and digit is not 6, 7, 8, or 9
    const target = e.target as HTMLInputElement;
    const isAtStart = target.selectionStart === 0;

    if (isAtStart && !/^[6-9]$/.test(e.key)) {
      e.preventDefault();
      setErrors((prev) => ({
        ...prev,
        phone: "First digit must be 6, 7, 8, or 9.",
      }));
    }
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let raw = e.target.value.replace(/\D/g, "");

    // Handle pasted numbers with +91 or leading 0 prefix
    if (raw.startsWith("91") && raw.length > 10) {
      raw = raw.slice(2);
    } else if (raw.startsWith("0")) {
      raw = raw.slice(1);
    }

    // Strictly restrict: if first digit is not 6, 7, 8, or 9, reject entry
    if (raw.length > 0 && !/^[6-9]/.test(raw)) {
      setErrors((prev) => ({
        ...prev,
        phone: "First digit must be 6, 7, 8, or 9.",
      }));
      return;
    }

    const tenDigits = raw.slice(0, 10);
    setForm((prev) => ({ ...prev, phone: tenDigits }));

    if (tenDigits.length === 10) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    } else if (errors.phone && tenDigits.length > 0) {
      setErrors((prev) => ({ ...prev, phone: "" }));
    }
  };

  const handlePhoneBlur = () => {
    if (form.phone) {
      setErrors((prev) => ({ ...prev, phone: validatePhone(form.phone) }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailErr = validateEmail(form.email);
    const phoneErr = validatePhone(form.phone);

    if (emailErr || phoneErr) {
      setErrors({
        email: emailErr,
        phone: phoneErr,
      });
      return;
    }

    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name.trim(),
          organization: form.organization.trim(),
          email: form.email.trim(),
          phone: `+91 ${form.phone.trim()}`,
          service: service || "General Inquiry",
          message: form.message.trim(),
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok || !data.ok) {
        throw new Error(data.error || "Failed to deliver inquiry message.");
      }

      setStatus("success");
      setForm({ name: "", organization: "", email: "", phone: "", message: "" });
      setErrors({});
      setService("");
    } catch (err: any) {
      console.error("Submission error:", err);
      setErrorMessage(
        err?.message ||
        "Failed to send message. Please contact raosewanyas@gmail.com directly."
      );
      setStatus("error");
    }
  };

  return (
    <div className="container mx-auto px-4 pt-28 pb-16 md:pt-32">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <h1 className="text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Engage With Our{" "}
          <span className="text-india-gradient">Enterprise Teams</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Direct access to our commercial and operational divisions. No
          bureaucratic routing. Straight to the engineers and project managers.
        </p>
      </motion.div>

      {/* ── Two-Column Layout ──────────────────────────────────── */}
      <div className="mx-auto mt-14 grid max-w-6xl grid-cols-1 gap-8 lg:grid-cols-2">
        {/* ── Left: Contact Details & Direct Channels ─────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex flex-col gap-6"
        >
          {details.map((detail) => {
            const Icon = detail.icon;
            return (
              <div
                key={detail.title}
                className="glass-card flex gap-4 rounded-2xl p-6 transition-all hover:-translate-y-1"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-orange-500 text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-base font-semibold text-india-navy">
                      {detail.title}
                    </h3>
                    {detail.href && (
                      <a
                        href={detail.href}
                        className="inline-flex items-center gap-1 text-xs font-semibold text-saffron transition-colors hover:text-india-navy"
                      >
                        <span>{detail.actionText}</span>
                        <ArrowUpRight className="h-3 w-3" />
                      </a>
                    )}
                  </div>

                  {detail.href && detail.title === "Corporate Inquiries" ? (
                    <a
                      href={detail.href}
                      className="mt-1 block text-sm font-medium text-india-navy transition-colors hover:text-saffron truncate"
                    >
                      {detail.body}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {detail.body}
                    </p>
                  )}

                  {detail.extra && (
                    <div className="mt-1.5 text-xs text-muted-foreground/90">
                      {detail.href && detail.title === "Lucknow Headquarters" ? (
                        <a
                          href={detail.href}
                          className="inline-flex items-center gap-1.5 font-medium text-india-navy transition-colors hover:text-saffron"
                        >
                          <Phone className="h-3 w-3 text-saffron" />
                          <span>{detail.extra}</span>
                        </a>
                      ) : (
                        <p className="leading-relaxed">{detail.extra}</p>
                      )}
                    </div>
                  )}
                </div>
              </div>
            );
          })}

          {/* ── Direct Channels & Verified Social Desk ───────── */}
          <div className="glass-card flex flex-col gap-5 rounded-2xl p-6 sm:p-7 transition-all">
            <div className="flex items-center justify-between">
              <div>
                <span className="text-xs font-semibold uppercase tracking-wider text-saffron">
                  Direct Communication
                </span>
                <h3 className="text-lg font-bold text-india-navy mt-0.5">
                  Instant Messaging & Official Channels
                </h3>
              </div>
              <span className="inline-flex items-center rounded-full bg-slate-100 border border-slate-200/80 px-2.5 py-1 text-xs font-medium text-slate-700">
                Direct Desk
              </span>
            </div>

            <p className="text-sm text-muted-foreground leading-relaxed">
              Direct access without bureaucratic routing. Connect immediately on WhatsApp, initiate a direct phone call, or follow official operational releases across verified platforms.
            </p>

            {/* Quick Action Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
              {/* WhatsApp Direct */}
              <a
                href="https://wa.me/917985454216/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Direct WhatsApp Chat with Rao Sewa Nyas"
                className="group flex items-center justify-between rounded-xl border border-emerald-500/30 bg-emerald-50/60 p-3.5 text-emerald-950 transition-all duration-200 hover:-translate-y-0.5 hover:bg-emerald-600 hover:text-white hover:shadow-md active:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/15 text-emerald-600 transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <svg className="h-5 w-5 fill-current" viewBox="0 0 24 24"><path d="M12.04 2c-5.46 0-9.91 4.45-9.91 9.91 0 1.75.46 3.45 1.32 4.95L2.05 22l5.25-1.38c1.45.79 3.08 1.21 4.74 1.21 5.46 0 9.91-4.45 9.91-9.91 0-2.65-1.03-5.14-2.9-7.01A9.816 9.816 0 0 0 12.04 2zm.01 1.67c2.2 0 4.26.86 5.82 2.41a8.16 8.16 0 0 1 2.41 5.83c0 4.54-3.7 8.24-8.24 8.24-1.43 0-2.83-.37-4.06-1.08l-.29-.17-3.02.79.81-2.94-.19-.3a8.21 8.21 0 0 1-1.26-4.35c0-4.54 3.7-8.24 8.24-8.24zm4.52 11.59c-.25-.13-1.47-.72-1.7-.81-.23-.08-.39-.13-.56.13-.17.25-.64.81-.79.97-.14.17-.29.19-.54.06-.25-.13-1.06-.39-2.02-1.25-.75-.67-1.26-1.49-1.41-1.74-.14-.25-.02-.39.11-.51.11-.11.25-.29.37-.43.13-.14.17-.25.25-.42.08-.17.04-.31-.02-.44-.06-.13-.56-1.35-.77-1.85-.2-.49-.41-.42-.56-.43h-.48c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1 0 1.24.9 2.44 1.03 2.61.13.17 1.78 2.72 4.31 3.81.6.26 1.07.42 1.44.54.61.19 1.16.16 1.6-.1.48-.29 1.47-1.2 1.68-1.77.21-.57.21-1.06.14-1.18-.06-.13-.23-.2-.48-.33z" /></svg>
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">WhatsApp Chat</div>
                    <div className="text-[11px] opacity-80 mt-0.5">+91 79854 54216</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>

              {/* Direct Call */}
              <a
                href="tel:917985454216"
                aria-label="Direct Phone Helpline"
                className="group flex items-center justify-between rounded-xl border border-india-navy/15 bg-white/70 p-3.5 text-india-navy transition-all duration-200 hover:-translate-y-0.5 hover:bg-india-navy hover:text-white hover:shadow-md active:translate-y-0"
              >
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-india-navy/5 text-india-navy transition-colors group-hover:bg-white/20 group-hover:text-white">
                    <Phone className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="text-xs font-bold leading-tight">Phone Helpline</div>
                    <div className="text-[11px] opacity-80 mt-0.5">+91 79854 54216</div>
                  </div>
                </div>
                <ArrowUpRight className="h-4 w-4 opacity-70 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>
            </div>

            {/* Social Channels Row */}
            <div className="pt-4 border-t border-border/40">
              <div className="flex items-center justify-between mb-3 text-xs">
                <span className="font-semibold uppercase tracking-wider text-india-navy">
                  Verified Social Channels
                </span>
                <span className="font-mono text-[11px] font-semibold text-muted-foreground">
                  @raosewanyas
                </span>
              </div>
              <SocialLinks variant="footer" />
            </div>
          </div>
        </motion.div>

        {/* ── Right: Contact Form ──────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
        >
          {/* ── Success State ── */}
          {status === "success" ? (
            <div className="glass-card flex flex-col items-center justify-center gap-4 rounded-2xl p-10 text-center">
              <CheckCircle2 className="h-14 w-14 text-india-green" />
              <h2 className="text-xl font-bold text-india-navy">Message Sent!</h2>
              <p className="text-sm text-muted-foreground max-w-xs">
                We've received your enquiry and will respond within one business day.
              </p>
              <Button
                variant="outline"
                className="mt-2 rounded-full"
                onClick={() => setStatus("idle")}
              >
                Send Another
              </Button>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="glass-card flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
            >
              {/* Name */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-name" className="text-sm font-medium text-india-navy">
                  Full Name <span className="text-red-500">*</span>
                </Label>
                <Input
                  id="contact-name"
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Your full name"
                  required
                  className="bg-white/50"
                />
              </div>

              {/* Organization */}
              <div className="flex flex-col gap-1.5">
                <Label
                  htmlFor="contact-organization"
                  className="text-sm font-medium text-india-navy"
                >
                  Organization / Entity Name
                </Label>
                <Input
                  id="contact-organization"
                  name="organization"
                  value={form.organization}
                  onChange={handleChange}
                  placeholder="Registered company, trust, NGO, or agency name"
                  className="bg-white/50"
                />
              </div>

              {/* Email */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="contact-email"
                    className="text-sm font-medium text-india-navy"
                  >
                    Email Address <span className="text-red-500">*</span>
                  </Label>
                </div>
                <Input
                  id="contact-email"
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleEmailChange}
                  onBlur={handleEmailBlur}
                  placeholder="username@domain.extension (e.g. example@gmail.com)"
                  required
                  className={`bg-white/50 transition-colors ${errors.email
                    ? "border-red-500 focus-visible:ring-red-400"
                    : ""
                    }`}
                />
                {errors.email ? (
                  <p className="text-xs font-medium text-red-600">
                    {errors.email}
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    Must be in the format: username@domain.extension
                  </p>
                )}
              </div>

              {/* Phone */}
              <div className="flex flex-col gap-1.5">
                <div className="flex items-center justify-between">
                  <Label
                    htmlFor="contact-phone"
                    className="text-sm font-medium text-india-navy"
                  >
                    Phone Number <span className="text-red-500">*</span>
                  </Label>
                  <span className="text-[11px] font-mono text-muted-foreground">
                    {form.phone.length}/10 digits
                  </span>
                </div>
                <div
                  className={`flex items-center rounded-md border bg-white/50 transition-all focus-within:ring-2 ${errors.phone
                    ? "border-red-500 focus-within:ring-red-400"
                    : "border-input focus-within:ring-saffron"
                    }`}
                >
                  <span className="inline-flex items-center px-3.5 py-2 text-sm font-bold text-india-navy bg-india-navy/[0.04] border-r border-input select-none shrink-0">
                    +91
                  </span>
                  <Input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    inputMode="numeric"
                    maxLength={10}
                    value={form.phone}
                    onKeyDown={handlePhoneKeyDown}
                    onChange={handlePhoneChange}
                    onBlur={handlePhoneBlur}
                    placeholder="98765 43210"
                    required
                    className="border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 bg-transparent"
                  />
                </div>
                {errors.phone ? (
                  <p className="text-xs font-medium text-red-600">
                    {errors.phone}
                  </p>
                ) : (
                  <p className="text-[11px] text-muted-foreground">
                    10 digits starting with 6, 7, 8, or 9
                  </p>
                )}
              </div>

              {/* Service Interest */}
              <div className="flex flex-col gap-1.5">
                <Label className="text-sm font-medium text-india-navy">
                  Service Interest
                </Label>
                <Select value={service} onValueChange={setService}>
                  <SelectTrigger id="contact-service" className="bg-white/50">
                    <SelectValue placeholder="Select a vertical" />
                  </SelectTrigger>
                  <SelectContent>
                    {serviceOptions.map((opt) => (
                      <SelectItem key={opt} value={opt}>
                        {opt}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {/* Message */}
              <div className="flex flex-col gap-1.5">
                <Label htmlFor="contact-message" className="text-sm font-medium text-india-navy">
                  Message
                </Label>
                <Textarea
                  id="contact-message"
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Describe your project requirements..."
                  className="resize-none bg-white/50"
                  required
                />
              </div>

              {/* Error banner */}
              {status === "error" && (
                <div className="flex items-center gap-2 rounded-lg bg-red-50 border border-red-200 px-4 py-3 text-sm text-red-700">
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  <span>
                    {errorMessage ||
                      "Something went wrong. Please try again or email us directly at raosewanyas@gmail.com"}
                  </span>
                </div>
              )}

              {/* Submit */}
              <Button
                type="submit"
                size="lg"
                disabled={status === "sending"}
                className="mt-2 w-full rounded-full bg-india-navy text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-india-navy/90 hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {status === "sending" ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Sending…
                  </>
                ) : (
                  <>
                    Submit
                    <Send className="ml-1 h-4 w-4" />
                  </>
                )}
              </Button>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
