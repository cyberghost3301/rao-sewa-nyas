import { useEffect } from "react";
import { useLocation } from "react-router-dom";

interface PageMeta {
  title: string;
  description: string;
  canonical: string;
}

const BASE_URL = "https://raosewanyas.org";

const ROUTE_META: Record<string, PageMeta> = {
  "/": {
    title:
      "Rao Sewa Nyas (RSN) | Top Registered NGO, Charitable Trust & Solar EPC – Lucknow & Deoria, UP",
    description:
      "Rao Sewa Nyas (RSN) is Uttar Pradesh's first trust-owned enterprise platform. Operating commercial Solar EPC, CSR project implementation, E2E data analytics, and 360 marketing. 100% of profit legally funds rural health, education, and animal welfare in UP.",
    canonical: `${BASE_URL}/`,
  },
  "/about": {
    title:
      "About Us | Rao Sewa Nyas (RSN) - Top Registered Charitable Trust in UP",
    description:
      "Discover Rao Sewa Nyas (RSN), a registered charitable trust (Deed 24/2024, GST 09AAFTR2172R1ZR) operating self-funded commercial divisions to power rural healthcare, education, and solar transition across Lucknow and Deoria, UP.",
    canonical: `${BASE_URL}/about`,
  },
  "/operations/for-profit": {
    title:
      "Commercial Enterprise Verticals | Solar EPC, Telecom, IT, Data & 360 Marketing – Rao Sewa Nyas",
    description:
      "Commercial enterprise divisions of Rao Sewa Nyas: Commercial Solar EPC, Telecom Infrastructure, Security Grids, IT-Enabled Services, E2E Data Collection, 360 Marketing, and Campaign Management across UP.",
    canonical: `${BASE_URL}/operations/for-profit`,
  },
  "/operations/non-profit": {
    title:
      "Non-Profit Initiatives & Rural Upliftment | Registered NGO in Lucknow & UP – Rao Sewa Nyas",
    description:
      "Explore RSN non-profit and charitable programs: rural mobile health clinics, gaushala & animal welfare, girl child education, and clean solar microgrids across Lucknow, Deoria, and Purvanchal.",
    canonical: `${BASE_URL}/operations/non-profit`,
  },
  "/initiatives/run": {
    title:
      "RUN Initiative | Rural Upliftment Network - Rao Sewa Nyas",
    description:
      "The Rural Upliftment Network (RUN) empowers villages with decentralized solar power, clean water, digital literacy, and community-owned infrastructure.",
    canonical: `${BASE_URL}/initiatives/run`,
  },
  "/portfolio": {
    title:
      "Project Portfolio | Enterprise Infrastructure Deployments - Rao Sewa Nyas",
    description:
      "Verified track record of commercial solar installations, telecom towers, automation grids, and high-security surveillance across Lucknow and Deoria.",
    canonical: `${BASE_URL}/portfolio`,
  },
  "/portfolio/lucknow": {
    title:
      "Lucknow Projects Portfolio | Solar & Enterprise Telecom - Rao Sewa Nyas",
    description:
      "Commercial solar rooftop installations, enterprise surveillance networks, and corporate IT infrastructure projects across Lucknow, Uttar Pradesh.",
    canonical: `${BASE_URL}/portfolio/lucknow`,
  },
  "/portfolio/deoria": {
    title:
      "Deoria Projects Portfolio | Rural Solar & Telecom Grids - Rao Sewa Nyas",
    description:
      "Rural electrification, solar minigrids, community IT centres, and agricultural power solutions engineered and maintained in Deoria, UP.",
    canonical: `${BASE_URL}/portfolio/deoria`,
  },
  "/team": {
    title:
      "Leadership & Engineering Team | Trustees & Specialists - Rao Sewa Nyas",
    description:
      "Meet the trustees, engineers, project managers, and operational specialists driving Rao Sewa Nyas's commercial and philanthropic missions.",
    canonical: `${BASE_URL}/team`,
  },
  "/partner": {
    title:
      "Partner With Us | Vendor, CSR & Enterprise Bidding - Rao Sewa Nyas",
    description:
      "Collaborate with Rao Sewa Nyas for government tenders, enterprise contracts, CSR fund deployment, and technology partnerships in UP.",
    canonical: `${BASE_URL}/partner`,
  },
  "/testimonials": {
    title:
      "Client Testimonials & Enterprise References | Rao Sewa Nyas",
    description:
      "Read feedback and endorsements from government bodies, commercial enterprises, and community partners across Uttar Pradesh.",
    canonical: `${BASE_URL}/testimonials`,
  },
  "/credentials": {
    title:
      "Credentials & Statutory Registrations | Deed 24/2024, GST, NGO Darpan – Rao Sewa Nyas",
    description:
      "Official statutory compliance dossier of Rao Sewa Nyas (RSN): Deed No. 24/2024, GSTIN 09AAFTR2172R1ZR, NGO Darpan UP/2024/0476210, PAN, TAN, Udyam MSME, and GeM portal registrations.",
    canonical: `${BASE_URL}/credentials`,
  },
  "/donations": {
    title:
      "Support Our Mission | Direct Community Donations - Rao Sewa Nyas",
    description:
      "Contribute to our healthcare, educational, and clean energy community programs across Uttar Pradesh. 100% transparent fund utilization.",
    canonical: `${BASE_URL}/donations`,
  },
  "/contact": {
    title:
      "Contact Our Enterprise Teams | Lucknow & Deoria - Rao Sewa Nyas",
    description:
      "Get in touch with our commercial and operational divisions in Lucknow and Deoria. Fast direct access to engineers and project managers.",
    canonical: `${BASE_URL}/contact`,
  },
  "/social": {
    title:
      "Official Social Channels & Live Desks | @raosewanyas - Rao Sewa Nyas",
    description:
      "Verified digital channels, media feeds, WhatsApp instant desk, and official communications for Rao Sewa Nyas across Lucknow and Deoria, Uttar Pradesh.",
    canonical: `${BASE_URL}/social`,
  },
  "/channels": {
    title:
      "Official Social Channels & Live Desks | @raosewanyas - Rao Sewa Nyas",
    description:
      "Verified digital channels, media feeds, WhatsApp instant desk, and official communications for Rao Sewa Nyas across Lucknow and Deoria, Uttar Pradesh.",
    canonical: `${BASE_URL}/social`,
  },
  "/privacy": {
    title: "Privacy Policy | Data Protection & Governance - Rao Sewa Nyas",
    description:
      "Official privacy policy governing data protection, visitor confidentiality, and donor information security at Rao Sewa Nyas.",
    canonical: `${BASE_URL}/privacy`,
  },
  "/terms": {
    title: "Terms of Service | Commercial & Legal Agreements - Rao Sewa Nyas",
    description:
      "Terms and conditions governing the use of the Rao Sewa Nyas website, enterprise service agreements, and digital engagements.",
    canonical: `${BASE_URL}/terms`,
  },
  "/faq": {
    title: "Frequently Asked Questions (FAQ) | Trust & Enterprise - Rao Sewa Nyas",
    description:
      "Answers to common questions about our Trust structure, commercial operations, project bidding, certifications, and community funding.",
    canonical: `${BASE_URL}/faq`,
  },
  "/cookies": {
    title: "Cookie Policy | Analytics & Tracking Standards - Rao Sewa Nyas",
    description:
      "Information on how cookies and privacy-preserving tracking technologies are used on the Rao Sewa Nyas web portal.",
    canonical: `${BASE_URL}/cookies`,
  },
  "/disclaimer": {
    title: "Legal Disclaimer | Enterprise & Statutory Disclosures - Rao Sewa Nyas",
    description:
      "Statutory disclaimers, liability limitations, and regulatory compliance disclosures for Rao Sewa Nyas operations.",
    canonical: `${BASE_URL}/disclaimer`,
  },
};

function updateMetaTag(
  selector: string,
  attributeName: string,
  attributeValue: string,
  content: string
) {
  let element = document.querySelector(selector);
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attributeName, attributeValue);
    document.head.appendChild(element);
  }
  element.setAttribute("content", content);
}

export function RouteSEO() {
  const { pathname } = useLocation();

  useEffect(() => {
    // Normalize path by removing trailing slash (unless root)
    const normalizedPath =
      pathname.length > 1 && pathname.endsWith("/")
        ? pathname.slice(0, -1)
        : pathname;

    const meta = ROUTE_META[normalizedPath] || {
      title: "Rao Sewa Nyas | Enterprise Services & Community Impact",
      description:
        "Trust-owned enterprise platform delivering solar, telecom, automation, security, IT and real estate across Uttar Pradesh.",
      canonical: `${BASE_URL}${normalizedPath}`,
    };

    // 1. Update Title
    document.title = meta.title;

    // 2. Update Canonical Link (CRITICAL FOR GSC INDEXING)
    let canonicalLink = document.querySelector<HTMLLinkElement>(
      'link[rel="canonical"]'
    );
    if (!canonicalLink) {
      canonicalLink = document.createElement("link");
      canonicalLink.rel = "canonical";
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.href = meta.canonical;

    // 3. Update Meta Description
    updateMetaTag(
      'meta[name="description"]',
      "name",
      "description",
      meta.description
    );

    // 4. Update OpenGraph Tags
    updateMetaTag('meta[property="og:title"]', "property", "og:title", meta.title);
    updateMetaTag(
      'meta[property="og:description"]',
      "property",
      "og:description",
      meta.description
    );
    updateMetaTag(
      'meta[property="og:url"]',
      "property",
      "og:url",
      meta.canonical
    );

    // 5. Update Twitter Card Tags
    updateMetaTag(
      'meta[name="twitter:title"]',
      "name",
      "twitter:title",
      meta.title
    );
    updateMetaTag(
      'meta[name="twitter:description"]',
      "name",
      "twitter:description",
      meta.description
    );
  }, [pathname]);

  return null;
}
