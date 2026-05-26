import { motion } from "framer-motion";
import { useState, type FormEvent } from "react";
import {
  Landmark,
  Smartphone,
  QrCode,
  CreditCard,
  Upload,
  CheckCircle2,
  HeartHandshake,
} from "lucide-react";

function Donations() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <div className="container mx-auto px-4 pt-28 md:pt-32 pb-16">
      {/* ── Hero ───────────────────────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="mx-auto max-w-3xl text-center"
      >
        <span className="inline-flex items-center gap-1.5 rounded-full border border-saffron/30 bg-white/70 px-3 py-1 text-xs font-medium text-saffron backdrop-blur">
          <HeartHandshake className="h-3.5 w-3.5" />
          Support Our Mission
        </span>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-india-navy drop-shadow-[0_2px_2px_rgba(0,0,0,0.25)] sm:text-5xl lg:text-6xl">
          Support Our{" "}
          <span className="text-india-gradient">Community Initiatives</span>
        </h1>
        <p className="mt-5 text-base text-muted-foreground sm:text-lg">
          Your contributions form the vital backbone of our non-profit
          operations. Combined with our commercial revenues, every rupee you
          donate directly funds community upliftment across Uttar Pradesh.
        </p>
      </motion.div>

      {/* ── 2-Column Split ─────────────────────────────────────── */}
      <div className="mx-auto mt-14 max-w-5xl grid grid-cols-1 gap-12 md:grid-cols-2">

        {/* ── Left: Payment Methods ──────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="glass-card rounded-2xl p-6 sm:p-8 space-y-8"
        >
          <h2 className="text-xl font-semibold text-india-navy">
            Payment Methods
          </h2>

          {/* Razorpay dummy button */}
          <div className="rounded-xl border border-border/60 bg-white/60 p-5 space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-india-navy">
              <CreditCard className="h-4 w-4 text-saffron" />
              Online Payment Gateway
            </div>
            <p className="text-xs text-muted-foreground">
              Secure payments via cards, net banking, wallets & UPI.
            </p>
            <button
              type="button"
              className="w-full rounded-xl bg-[#2563EB] px-5 py-3 text-sm font-semibold text-white shadow transition-all hover:-translate-y-0.5 hover:shadow-md cursor-pointer"
              onClick={() => alert("Razorpay gateway integration coming soon.")}
            >
              Pay via Razorpay
            </button>
          </div>

          {/* Bank Details */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-india-navy">
              <Landmark className="h-4 w-4 text-saffron" />
              Bank Transfer (NEFT / RTGS / IMPS)
            </div>
            <dl className="divide-y divide-border/50 rounded-xl border border-border/60 bg-white/60 text-sm overflow-hidden">
              {[
                ["Account Name", "Rao Sewa Nyas"],
                ["Account Number", "XXXXXXXXX"],
                ["IFSC Code", "XXXX0000000"],
                ["Bank", "Sample Bank"],
              ].map(([label, value]) => (
                <div key={label} className="flex items-center justify-between px-4 py-3">
                  <dt className="text-muted-foreground">{label}</dt>
                  <dd className="font-medium text-india-navy font-mono tracking-wide">
                    {value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          {/* UPI */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-india-navy">
              <Smartphone className="h-4 w-4 text-saffron" />
              UPI Transfer
            </div>
            <div className="flex items-center justify-between rounded-xl border border-border/60 bg-white/60 px-4 py-3">
              <span className="text-sm text-muted-foreground">UPI ID</span>
              <span className="font-mono text-sm font-semibold text-india-navy">
                donate@raosewanyas
              </span>
            </div>
          </div>

          {/* QR Code mockup */}
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm font-medium text-india-navy">
              <QrCode className="h-4 w-4 text-saffron" />
              Scan &amp; Pay
            </div>
            <div className="flex flex-col items-center gap-3">
              <div className="h-44 w-44 rounded-xl border-2 border-dashed border-saffron/40 bg-gray-100/80 flex flex-col items-center justify-center gap-2">
                <QrCode className="h-12 w-12 text-india-navy/30" />
                <span className="text-[11px] text-muted-foreground">QR Code</span>
              </div>
              <p className="text-xs text-muted-foreground text-center">
                Scan with any UPI app to donate instantly
              </p>
            </div>
          </div>
        </motion.div>

        {/* ── Right: Payment Confirmation Form ───────────────── */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="glass-card rounded-2xl p-6 sm:p-8"
        >
          <h2 className="text-xl font-semibold text-india-navy mb-6">
            Confirm Your Payment
          </h2>

          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35 }}
              className="flex flex-col items-center justify-center gap-4 py-16 text-center"
            >
              <CheckCircle2 className="h-14 w-14 text-india-green" />
              <h3 className="text-lg font-semibold text-india-navy">
                Thank you for your contribution!
              </h3>
              <p className="text-sm text-muted-foreground max-w-xs">
                We have received your payment details. Our team will verify and
                acknowledge your donation within 48 hours.
              </p>
              <button
                type="button"
                onClick={() => setSubmitted(false)}
                className="mt-2 rounded-full border border-border px-5 py-2 text-sm font-medium text-india-navy hover:bg-secondary transition-colors cursor-pointer"
              >
                Submit Another
              </button>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5" noValidate={false}>

              {/* Full Name */}
              <div className="space-y-1.5">
                <label
                  htmlFor="donor-name"
                  className="block text-sm font-medium text-india-navy"
                >
                  Full Name <span className="text-destructive">*</span>
                </label>
                <input
                  id="donor-name"
                  name="fullName"
                  type="text"
                  required
                  placeholder="e.g. Ramesh Kumar Singh"
                  className="w-full rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm text-india-navy placeholder:text-muted-foreground/60 outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                />
              </div>

              {/* Donation Amount */}
              <div className="space-y-1.5">
                <label
                  htmlFor="donation-amount"
                  className="block text-sm font-medium text-india-navy"
                >
                  Donation Amount (₹){" "}
                  <span className="text-destructive">*</span>
                </label>
                <div className="relative">
                  <span className="absolute left-4 top-1/2 -translate-y-1/2 text-sm font-semibold text-muted-foreground">
                    ₹
                  </span>
                  <input
                    id="donation-amount"
                    name="amount"
                    type="number"
                    min={1}
                    required
                    placeholder="500"
                    className="w-full rounded-xl border border-border bg-white/80 pl-8 pr-4 py-2.5 text-sm text-india-navy placeholder:text-muted-foreground/60 outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                  />
                </div>
              </div>

              {/* UTR / Payment Reference */}
              <div className="space-y-1.5">
                <label
                  htmlFor="utr-number"
                  className="block text-sm font-medium text-india-navy"
                >
                  UTR / Payment Reference Number{" "}
                  <span className="text-destructive">*</span>
                </label>
                <input
                  id="utr-number"
                  name="utr"
                  type="text"
                  required
                  placeholder="e.g. 123456789012"
                  className="w-full rounded-xl border border-border bg-white/80 px-4 py-2.5 text-sm font-mono text-india-navy placeholder:text-muted-foreground/60 outline-none focus:border-saffron focus:ring-2 focus:ring-saffron/20 transition-all"
                />
                <p className="text-[11px] text-muted-foreground">
                  Find this in your bank app, SMS, or payment confirmation email.
                </p>
              </div>

              {/* Payment Screenshot */}
              <div className="space-y-1.5">
                <label
                  htmlFor="payment-screenshot"
                  className="block text-sm font-medium text-india-navy"
                >
                  Attach Payment Screenshot{" "}
                  <span className="text-destructive">*</span>
                </label>
                <label
                  htmlFor="payment-screenshot"
                  className="flex flex-col items-center justify-center gap-2 w-full rounded-xl border-2 border-dashed border-border/70 bg-white/60 py-8 cursor-pointer hover:border-saffron/50 hover:bg-saffron/5 transition-all"
                >
                  <Upload className="h-7 w-7 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Click to upload screenshot
                  </span>
                  <span className="text-xs text-muted-foreground/70">
                    PNG, JPG, PDF up to 5 MB
                  </span>
                  <input
                    id="payment-screenshot"
                    name="screenshot"
                    type="file"
                    accept="image/*,application/pdf"
                    required
                    className="sr-only"
                  />
                </label>
              </div>

              {/* Submit */}
              <button
                id="submit-donation"
                type="submit"
                className="w-full rounded-xl bg-saffron px-5 py-3 text-sm font-semibold text-white shadow-md transition-all hover:-translate-y-0.5 hover:shadow-lg cursor-pointer"
              >
                Submit Payment Details
              </button>

              <p className="text-center text-xs text-muted-foreground">
                All submissions are reviewed within 48 hours. You will receive
                an acknowledgement upon verification.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </div>
  );
}

export default Donations;
