"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Mail, Send } from "lucide-react";
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
    body: "Urban execution, IT, and enterprise sales base.",
  },
  {
    icon: MapPin,
    title: "Deoria Operations Hub",
    body: "Purvanchal deployment and field operations.",
  },
  {
    icon: Mail,
    title: "Corporate Inquiries",
    body: "enterprise@raosewanyas.org",
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
];

function Contact() {
  const [service, setService] = useState("");

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
          <form
            onSubmit={(e) => e.preventDefault()}
            className="glass-card flex flex-col gap-5 rounded-2xl p-6 sm:p-8"
          >
            {/* Name */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-name" className="text-sm font-medium text-india-navy">
                Full Name
              </Label>
              <Input
                id="contact-name"
                placeholder="Your full name"
                required
                className="bg-white/50"
              />
            </div>

            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-email" className="text-sm font-medium text-india-navy">
                Email
              </Label>
              <Input
                id="contact-email"
                type="email"
                placeholder="you@company.com"
                required
                className="bg-white/50"
              />
            </div>

            {/* Phone */}
            <div className="flex flex-col gap-1.5">
              <Label htmlFor="contact-phone" className="text-sm font-medium text-india-navy">
                Phone
              </Label>
              <Input
                id="contact-phone"
                type="tel"
                placeholder="+91 XXXXX XXXXX"
                className="bg-white/50"
              />
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
                rows={4}
                placeholder="Describe your project requirements..."
                className="resize-none bg-white/50"
              />
            </div>

            {/* Submit */}
            <Button
              type="submit"
              size="lg"
              className="mt-2 w-full rounded-full bg-india-navy text-sm font-semibold text-white shadow-lg transition-all hover:-translate-y-0.5 hover:bg-india-navy/90 hover:shadow-xl"
            >
              Request Technical Consultation
              <Send className="ml-1 h-4 w-4" />
            </Button>
          </form>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
