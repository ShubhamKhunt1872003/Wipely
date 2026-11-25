// Single source of truth for every public route's SEO metadata.
// Used at build time by the prerender step (scripts/prerender.mjs, via
// entry-server.tsx) to write per-route <head> tags, sitemap.xml and robots.txt,
// and at runtime by <RouteMeta /> to keep the tags in sync on client-side navigation.

export const SITE_URL = 'https://www.wipely.au';
export const OG_IMAGE = `${SITE_URL}/images/wipely-profile-green-1080.png`;

export interface RouteMeta {
  path: string;
  title: string;
  description: string;
  /** Keep out of search results and the sitemap (e.g. the private review-request page). */
  noindex?: boolean;
}

export const ROUTES: RouteMeta[] = [
  {
    path: '/',
    title: 'Wipely | House & End of Lease Cleaning Melbourne',
    description:
      'Wipely provides professional home and office cleaning services across Melbourne, VIC. Book reliable and affordable cleaners online with Wipely.au.',
  },
  {
    path: '/services',
    title: 'Cleaning Services Melbourne | Wipely',
    description:
      'Regular house cleaning, end of lease, spring, carpet, upholstery, oven, BBQ, staircase and commercial cleaning across Melbourne.',
  },
  {
    path: '/services/regular-cleaning',
    title: 'Regular House Cleaning Melbourne | Wipely',
    description: 'Weekly, fortnightly or monthly house cleaning across Melbourne by trusted, insured Wipely cleaners.',
  },
  {
    path: '/services/end-of-lease',
    title: 'End of Lease Cleaning Melbourne | Wipely',
    description:
      'End of lease cleaning in Melbourne covering kitchens, bathrooms, floors and final detailing for an inspection-ready result.',
  },
  {
    path: '/services/spring-cleaning',
    title: 'Hourly Spring Cleaning Melbourne | Wipely',
    description: 'Book hourly spring and deep cleaning in Melbourne. Our cleaners focus on the areas that matter most to you.',
  },
  {
    path: '/services/custom-cleaning',
    title: 'Custom Cleaning Melbourne | Wipely',
    description:
      'Specialised cleaning in Melbourne: carpet, upholstery, oven, BBQ, staircase and commercial cleaning from Wipely.',
  },
  {
    path: '/services/carpet-cleaning',
    title: 'Carpet Cleaning Melbourne | Wipely',
    description: 'Professional carpet steam cleaning across Melbourne homes and rentals by Wipely.',
  },
  {
    path: '/services/upholstery-cleaning',
    title: 'Upholstery Cleaning Melbourne | Wipely',
    description: 'Couch and upholstery cleaning across Melbourne by Wipely’s professional cleaners.',
  },
  {
    path: '/services/oven-cleaning',
    title: 'Oven Cleaning Melbourne | Wipely',
    description: 'Professional oven cleaning in Melbourne that removes grease and baked-on grime.',
  },
  {
    path: '/services/bbq-cleaning',
    title: 'BBQ Cleaning Melbourne | Wipely',
    description: 'Professional BBQ cleaning in Melbourne: grills, plates and hoods cleaned and degreased.',
  },
  {
    path: '/services/staircase-cleaning',
    title: 'Staircase Cleaning Melbourne | Wipely',
    description: 'Staircase and stair carpet cleaning for Melbourne homes and buildings by Wipely.',
  },
  {
    path: '/services/commercial-cleaning',
    title: 'Commercial Cleaning Melbourne | Wipely',
    description: 'Office, commercial property and small business cleaning across Melbourne by Wipely.',
  },
  {
    path: '/book',
    title: 'Book a Cleaner Online | Wipely Melbourne',
    description: 'Choose your service, enter your property details and request a Wipely clean online in a few minutes.',
  },
  {
    path: '/reviews',
    title: 'Customer Reviews | Wipely Melbourne',
    description: 'Read what Melbourne customers say about Wipely’s house, end of lease and commercial cleaning.',
  },
  {
    path: '/blog',
    title: 'Cleaning Tips & Blog | Wipely Melbourne',
    description: 'Cleaning tips, guides and news from the Wipely team in Melbourne.',
  },
  {
    path: '/about',
    title: 'About Wipely | Melbourne Cleaning Company',
    description: 'Meet Wipely, Melbourne’s trusted cleaning experts delivering spotless homes and offices.',
  },
  {
    path: '/faq',
    title: 'Cleaning FAQs | Wipely Melbourne',
    description: 'Answers to common questions about Wipely’s cleaning services, pricing, booking and service areas.',
  },
  {
    path: '/contact',
    title: 'Contact Wipely | Melbourne Cleaners',
    description: 'Call +61 435 137 936 or email info@wipely.au to book or ask about Wipely cleaning in Melbourne.',
  },
  {
    path: '/review',
    title: 'Leave a Review | Wipely',
    description: 'Tell us how your Wipely clean went.',
    noindex: true,
  },
];

const FALLBACK: RouteMeta = ROUTES[0];

export function normalizePath(pathname: string): string {
  return pathname.replace(/\/+$/, '') || '/';
}

export function getRouteMeta(pathname: string): RouteMeta {
  const path = normalizePath(pathname);
  return ROUTES.find((r) => r.path === path) ?? FALLBACK;
}

export function canonicalUrl(path: string): string {
  return path === '/' ? `${SITE_URL}/` : `${SITE_URL}${path}`;
}

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** The route-specific <head> tags; replaces the <!--route-meta--> block in index.html at build time. */
export function renderHeadTags(meta: RouteMeta): string {
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const url = escapeHtml(canonicalUrl(meta.path));
  return [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noindex ? 'noindex, follow' : 'index, follow'}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
  ].join('\n    ');
}
