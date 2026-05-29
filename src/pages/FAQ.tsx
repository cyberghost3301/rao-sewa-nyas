import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Are your commercial services subsidized because you are a Trust?",
    answer: "No. Subsidized work produces subsidized maintenance. We charge competitive, premium market rates for our enterprise services (Solar, IT, Security, etc.). This ensures we can hire top-tier engineering talent and maintain your infrastructure for 25 years. The difference is that our profit margin is deployed into Uttar Pradesh community projects instead of corporate dividends."
  },
  {
    question: "How does the Dual-Engine model actually work?",
    answer: "It is a closed-loop system. We bid for enterprise contracts in regions like Lucknow (GCCs) and Deoria (manufacturing). When we execute a CCTV or Solar EPC contract, the revenue covers operational costs, and the profit margin is legally mandated by our Trust deed to fund our non-profit operations (like the B.A.R.C platform or rural clinics)."
  },
  {
    question: "Can we claim our invoices as CSR expenditure?",
    answer: "Invoices for standard commercial services (e.g., wiring your factory) are standard business expenses. However, if your corporation wishes to partner with us specifically to fund a community infrastructure project, we can structure that engagement with full CSR compliance documentation and traceability."
  },
  {
    question: "Do you subcontract your ground teams?",
    answer: "We do not rely on dispatched crews from national call centers. Our engineers and technicians are based in Lucknow and Deoria. For specialized deployments, we may partner with vetted vendors through our Partner Portal, but Rao Sewa Nyas maintains strict oversight and single-point accountability."
  },
  {
    question: "How do I become a vendor or partner?",
    answer: "You can apply through our Partner Portal. We require verifiable operational history, GST details, and relevant compliance certifications (e.g., UPNEDA empanelment for solar contractors). We evaluate on technical merit, not lowest-bidder dynamics."
  }
];

export default function FAQ() {
  return (
    <div className="container mx-auto px-4 pb-24 pt-32 max-w-4xl">
      <div className="glass-card rounded-3xl p-8 sm:p-12 md:p-16">
        <span className="inline-flex items-center rounded-full border border-saffron/30 bg-saffron/10 px-3 py-1 text-xs font-medium text-saffron mb-6">
          Support & Compliance
        </span>
        <h1 className="text-4xl font-bold tracking-tight text-india-navy sm:text-5xl mb-8">
          Frequently Asked Questions
        </h1>
        
        <div className="mt-12">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border/50 bg-white/40 px-6 rounded-xl backdrop-blur-sm">
                <AccordionTrigger className="text-left text-base font-semibold text-india-navy hover:no-underline hover:text-saffron transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pt-2 pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  );
}
