"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";
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
// Contact form submits directly to Vercel Serverless Function (/api/contact)
// which sends email via Gmail SMTP using environment variables (SMTP_USER, SMTP_PASS).

interface ContactDetail {
  icon: typeof MapPin;
  title: string;
  body: string;
  extra?: string;
}

const details: ContactDetail[] = [
  {
    icon: MapPin,
    title: "Lucknow Headquarters",
    body: "610/586 Keshav Nagar, Sitapur Road, Lucknow, Uttar Pradesh – 226020",
    extra: "+91 79854 54216",
  },
  {
    icon: MapPin,
    title: "Deoria Operations Hub",
    body: "Purvanchal deployment and field operations.",
  },
  {
    icon: Mail,
    title: "Corporate Inquiries",
    body: "raosewanyas@gmail.com",
    extra:
      "For RFP responses, technical bids, and large-scale deployment consulting.",
  },
];

const serviceOptions = [
  "Energy Solutions",
  "Solar Solutions",
  "Telecom Services",
  "Automation Services",
  "Security Services",
  "IT Enabled Services",
  "Real Estate Services",
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
        {/* ── Left: Contact Details ────────────────────────────── */}
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
                className="glass-card flex gap-4 rounded-2xl p-6 transition-transform hover:-translate-y-1"
              >
                <div className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-saffron to-orange-500 text-white shadow-md">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="text-base font-semibold text-india-navy">
                    {detail.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {detail.body}
                  </p>
                  {detail.extra && (
                    <p className="mt-1 text-xs leading-relaxed text-muted-foreground/80">
                      {detail.extra}
                    </p>
                  )}
                </div>
              </div>
            );
          })}
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
                    Request Technical Consultation
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
