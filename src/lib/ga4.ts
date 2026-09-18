// Thin, single-init wrapper around Google Analytics 4 (gtag.js), mirroring
// the Meta Pixel wrapper in metaPixel.ts. Every tracking call funnels through
// pageView()/event() below so there is exactly one place that talks to
// gtag(), and one guarded place that injects the script - no page can
// accidentally double-initialize it or double-count a page_view.
//
// send_page_view is set to false on init: GA4Tracker.tsx fires page_view
// explicitly on every route change (including the first), so gtag's own
// automatic page_view on config never runs alongside it.

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

// Public by nature (visible in every page's network requests), so a
// hardcoded fallback is safe. VITE_GA4_MEASUREMENT_ID can override it
// without a code change if the property ID ever changes.
const GA4_ID = import.meta.env.VITE_GA4_MEASUREMENT_ID || 'G-BJ0L1QYF32';

let initialized = false;

export function initGA4(): void {
  if (initialized || typeof window === 'undefined') return;
  if (!GA4_ID) return;

  initialized = true;

  window.dataLayer = window.dataLayer || [];
  function gtag(...args: unknown[]) {
    window.dataLayer!.push(args);
  }
  window.gtag = gtag;

  const script = document.createElement('script');
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA4_ID}`;
  document.head.appendChild(script);

  gtag('js', new Date());
  gtag('config', GA4_ID, { send_page_view: false });
}

export function pageView(path: string, title?: string): void {
  if (!GA4_ID) return;
  window.gtag?.('event', 'page_view', {
    page_path: path,
    page_title: title,
    page_location: window.location.href,
  });
}

export function event(name: string, params?: Record<string, unknown>): void {
  if (!GA4_ID) return;
  window.gtag?.('event', name, params);
}
