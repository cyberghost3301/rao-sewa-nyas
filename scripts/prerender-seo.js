import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, '..');
const distDir = path.resolve(projectRoot, 'dist');
const indexHtmlPath = path.resolve(distDir, 'index.html');

if (!fs.existsSync(indexHtmlPath)) {
  console.error('[prerender-seo] dist/index.html not found. Run vite build first.');
  process.exit(1);
}

const BASE_URL = 'https://raosewanyas.org';

// Comprehensive Route Metadata matching RouteSEO.tsx
const ROUTES = [
  {
    path: '/',
    title: 'Rao Sewa Nyas | Enterprise Solar, Telecom, IT & Security Services - Lucknow & Deoria, UP',
    description: 'Rao Sewa Nyas is a registered Trust delivering enterprise-grade solar, telecom, automation, security, IT, and real estate services across Lucknow and Deoria, Uttar Pradesh.',
    canonical: `${BASE_URL}/`,
  },
  {
    path: '/about',
    title: 'About Us | Philosophy of Self-Funded Philanthropy - Rao Sewa Nyas',
    description: 'Learn about Rao Sewa Nyas - a self-funded philanthropic Trust combining enterprise excellence in solar, telecom, and IT with sustainable community impact across UP.',
    canonical: `${BASE_URL}/about`,
  },
  {
    path: '/operations/for-profit',
    title: 'Commercial Enterprise Verticals | Solar, Telecom & IT - Rao Sewa Nyas',
    description: 'Explore our seven enterprise divisions: Solar EPC, Telecom Infrastructure, Automation, Security Systems, IT-Enabled Services, and Real Estate across Uttar Pradesh.',
    canonical: `${BASE_URL}/operations/for-profit`,
  },
  {
    path: '/operations/non-profit',
    title: 'Non-Profit & Philanthropic Initiatives | Rao Sewa Nyas',
    description: 'Community impact programs funded by enterprise profits: primary healthcare camps, rural education, green energy transition, and women empowerment across UP.',
    canonical: `${BASE_URL}/operations/non-profit`,
  },
  {
    path: '/initiatives/run',
    title: 'RUN Initiative | Rural Upliftment Network - Rao Sewa Nyas',
    description: 'The Rural Upliftment Network (RUN) empowers villages with decentralized solar power, clean water, digital literacy, and community-owned infrastructure.',
    canonical: `${BASE_URL}/initiatives/run`,
  },
  {
    path: '/portfolio',
    title: 'Project Portfolio | Enterprise Infrastructure Deployments - Rao Sewa Nyas',
    description: 'Verified track record of commercial solar installations, telecom towers, automation grids, and high-security surveillance across Lucknow and Deoria.',
    canonical: `${BASE_URL}/portfolio`,
  },
  {
    path: '/portfolio/lucknow',
    title: 'Lucknow Projects Portfolio | Solar & Enterprise Telecom - Rao Sewa Nyas',
    description: 'Commercial solar rooftop installations, enterprise surveillance networks, and corporate IT infrastructure projects across Lucknow, Uttar Pradesh.',
    canonical: `${BASE_URL}/portfolio/lucknow`,
  },
  {
    path: '/portfolio/deoria',
    title: 'Deoria Projects Portfolio | Rural Solar & Telecom Grids - Rao Sewa Nyas',
    description: 'Rural electrification, solar minigrids, community IT centres, and agricultural power solutions engineered and maintained in Deoria, UP.',
    canonical: `${BASE_URL}/portfolio/deoria`,
  },
  {
    path: '/team',
    title: 'Leadership & Engineering Team | Trustees & Specialists - Rao Sewa Nyas',
    description: 'Meet the trustees, engineers, project managers, and operational specialists driving Rao Sewa Nyas\'s commercial and philanthropic missions.',
    canonical: `${BASE_URL}/team`,
  },
  {
    path: '/partner',
    title: 'Partner With Us | Vendor, CSR & Enterprise Bidding - Rao Sewa Nyas',
    description: 'Collaborate with Rao Sewa Nyas for government tenders, enterprise contracts, CSR fund deployment, and technology partnerships in UP.',
    canonical: `${BASE_URL}/partner`,
  },
  {
    path: '/testimonials',
    title: 'Client Testimonials & Enterprise References | Rao Sewa Nyas',
    description: 'Read feedback and endorsements from government bodies, commercial enterprises, and community partners across Uttar Pradesh.',
    canonical: `${BASE_URL}/testimonials`,
  },
  {
    path: '/credentials',
    title: 'Credentials, Registration & Legal Dossier | Rao Sewa Nyas',
    description: 'Verify official trust deed, PAN, TAN, GSTIN, 12A, 80G, ISO certifications, and verified government portal registration details of Rao Sewa Nyas.',
    canonical: `${BASE_URL}/credentials`,
  },
  {
    path: '/donations',
    title: 'Support Our Mission | Direct Community Donations - Rao Sewa Nyas',
    description: 'Contribute to our healthcare, educational, and clean energy community programs across Uttar Pradesh. 100% transparent fund utilization.',
    canonical: `${BASE_URL}/donations`,
  },
  {
    path: '/contact',
    title: 'Contact Our Enterprise Teams | Lucknow & Deoria - Rao Sewa Nyas',
    description: 'Get in touch with our commercial and operational divisions in Lucknow and Deoria. Fast direct access to engineers and project managers.',
    canonical: `${BASE_URL}/contact`,
  },
  {
    path: '/social',
    title: 'Official Social Channels & Live Desks | @raosewanyas - Rao Sewa Nyas',
    description: 'Verified digital channels, media feeds, WhatsApp instant desk, and official communications for Rao Sewa Nyas across Lucknow and Deoria, Uttar Pradesh.',
    canonical: `${BASE_URL}/social`,
  },
  {
    path: '/channels',
    title: 'Official Social Channels & Live Desks | @raosewanyas - Rao Sewa Nyas',
    description: 'Verified digital channels, media feeds, WhatsApp instant desk, and official communications for Rao Sewa Nyas across Lucknow and Deoria, Uttar Pradesh.',
    canonical: `${BASE_URL}/social`,
  },
  {
    path: '/privacy',
    title: 'Privacy Policy | Data Protection & Governance - Rao Sewa Nyas',
    description: 'Official privacy policy governing data protection, visitor confidentiality, and donor information security at Rao Sewa Nyas.',
    canonical: `${BASE_URL}/privacy`,
  },
  {
    path: '/terms',
    title: 'Terms of Service | Commercial & Legal Agreements - Rao Sewa Nyas',
    description: 'Terms and conditions governing the use of the Rao Sewa Nyas website, enterprise service agreements, and digital engagements.',
    canonical: `${BASE_URL}/terms`,
  },
  {
    path: '/faq',
    title: 'Frequently Asked Questions (FAQ) | Trust & Enterprise - Rao Sewa Nyas',
    description: 'Answers to common questions about our Trust structure, commercial operations, project bidding, certifications, and community funding.',
    canonical: `${BASE_URL}/faq`,
  },
  {
    path: '/cookies',
    title: 'Cookie Policy | Analytics & Tracking Standards - Rao Sewa Nyas',
    description: 'Information on how cookies and privacy-preserving tracking technologies are used on the Rao Sewa Nyas web portal.',
    canonical: `${BASE_URL}/cookies`,
  },
  {
    path: '/disclaimer',
    title: 'Legal Disclaimer | Enterprise & Statutory Disclosures - Rao Sewa Nyas',
    description: 'Statutory disclaimers, liability limitations, and regulatory compliance disclosures for Rao Sewa Nyas operations.',
    canonical: `${BASE_URL}/disclaimer`,
  },
];

const templateHtml = fs.readFileSync(indexHtmlPath, 'utf-8');

function escapeRegex(string) {
  return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function injectMetadata(html, route) {
  let modified = html;

  // 1. Update <title>
  modified = modified.replace(/<title>.*?<\/title>/is, `<title>${route.title}</title>`);

  // 2. Update <link rel="canonical">
  if (modified.includes('rel="canonical"')) {
    modified = modified.replace(
      /<link\s+[^>]*rel=["']canonical["'][^>]*>/i,
      `<link rel="canonical" href="${route.canonical}" id="canonical-tag" />`
    );
  } else {
    modified = modified.replace('</head>', `  <link rel="canonical" href="${route.canonical}" id="canonical-tag" />\n</head>`);
  }

  // 3. Update meta description
  if (/name=["']description["']/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']description["'][^>]*>/i,
      `<meta name="description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
  }

  // 4. Update og:title, og:description, og:url
  if (/property=["']og:title["']/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:title["'][^>]*>/i,
      `<meta property="og:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
  }
  if (/property=["']og:description["']/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:description["'][^>]*>/i,
      `<meta property="og:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
  }
  if (/property=["']og:url["']/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*property=["']og:url["'][^>]*>/i,
      `<meta property="og:url" content="${route.canonical}" />`
    );
  }

  // 5. Update twitter:title, twitter:description
  if (/name=["']twitter:title["']/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']twitter:title["'][^>]*>/i,
      `<meta name="twitter:title" content="${route.title.replace(/"/g, '&quot;')}" />`
    );
  }
  if (/name=["']twitter:description["']/i.test(modified)) {
    modified = modified.replace(
      /<meta\s+[^>]*name=["']twitter:description["'][^>]*>/i,
      `<meta name="twitter:description" content="${route.description.replace(/"/g, '&quot;')}" />`
    );
  }

  return modified;
}

let generatedCount = 0;

for (const route of ROUTES) {
  const customizedHtml = injectMetadata(templateHtml, route);

  if (route.path === '/') {
    // Overwrite root dist/index.html with verified root canonical metadata
    fs.writeFileSync(indexHtmlPath, customizedHtml, 'utf-8');
    generatedCount++;
    continue;
  }

  // For subroutes e.g. /contact -> dist/contact/index.html
  const cleanPath = route.path.replace(/^\//, '');
  const targetDir = path.resolve(distDir, cleanPath);

  if (!fs.existsSync(targetDir)) {
    fs.mkdirSync(targetDir, { recursive: true });
  }

  const targetFile = path.resolve(targetDir, 'index.html');
  fs.writeFileSync(targetFile, customizedHtml, 'utf-8');
  generatedCount++;
}

console.log(`[prerender-seo] Successfully prerendered ${generatedCount} route HTML files with self-canonical tags & SEO metadata.`);
