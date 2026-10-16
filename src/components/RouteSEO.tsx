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
      "Rao Sewa Nyas | Enterprise Solar, Telecom, IT & Security Services - Lucknow & Deoria, UP",
    description:
      "Rao Sewa Nyas is a registered Trust delivering enterprise-grade solar, telecom, automation, security, IT, and real estate services across Lucknow and Deoria, Uttar Pradesh.",
    canonical: `${BASE_URL}/`,
  },
  "/about": {
    title:
      "About Us | Philosophy of Self-Funded Philanthropy - Rao Sewa Nyas",
    description:
      "Learn about Rao Sewa Nyas - a self-funded philanthropic Trust combining enterprise excellence in solar, telecom, and IT with sustainable community impact across UP.",
    canonical: `${BASE_URL}/about`,
  },
  "/operations/for-profit": {
    title:
      "Commercial Enterprise Verticals | Solar, Telecom & IT - Rao Sewa Nyas",
    description:
      "Explore our seven enterprise divisions: Solar EPC, Telecom Infrastructure, Automation, Security Systems, IT-Enabled Services, and Real Estate across Uttar Pradesh.",
    canonical: `${BASE_URL}/operations/for-profit`,
  },
  "/operations/non-profit": {
    title:
      "Non-Profit & Philanthropic Initiatives | Rao Sewa Nyas",
    description:
      "Community impact programs funded by enterprise profits: primary healthcare camps, rural education, green energy transition, and women empowerment across UP.",
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
      "Credentials, Registration & Legal Dossier | Rao Sewa Nyas",
    description:
      "Verify official trust deed, PAN, TAN, GSTIN, 12A, 80G, ISO certifications, and verified government portal registration details of Rao Sewa Nyas.",
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
