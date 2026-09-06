// Thin, single-init wrapper around the Meta (Facebook) Pixel base code.
// Every tracking call in the app funnels through track()/trackCustom() below
// so there is exactly one place that talks to fbq(), and one guarded place
// that injects the script - no page can accidentally double-initialize it.
//
// Deliberately never send personal data (name/email/phone/address) as event
// parameters here - only non-identifying context like service name/category/
// price. Meta's own Advanced Matching (configured in Events Manager) is the
// correct way to add hashed customer data later, if the business chooses to.

declare global {
  interface Window {
    fbq?: {
      (...args: unknown[]): void;
      callMethod?: (...args: unknown[]) => void;
      queue?: unknown[];
      loaded?: boolean;
      version?: string;
    };
    _fbq?: Window['fbq'];
  }
}

const PIXEL_ID = import.meta.env.VITE_META_PIXEL_ID;

let initialized = false;

export function initMetaPixel(): void {
  if (initialized || typeof window === 'undefined') return;

  if (!PIXEL_ID) {
    if (import.meta.env.DEV) {
      console.warn('[metaPixel] VITE_META_PIXEL_ID is not set - Meta Pixel will not load.');
    }
    return;
  }

  initialized = true;

  if (!window.fbq) {
    const fbq: Window['fbq'] = function (...args: unknown[]) {
      if (fbq!.callMethod) {
        fbq!.callMethod(...args);
      } else {
        fbq!.queue!.push(args);
      }
    };
    fbq.queue = [] as unknown[];
    fbq.loaded = true;
    fbq.version = '2.0';
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  window.fbq('init', PIXEL_ID);
}

export function pageView(): void {
  if (!PIXEL_ID) return;
  window.fbq?.('track', 'PageView');
}

export function track(event: string, params?: Record<string, unknown>): void {
  if (!PIXEL_ID) return;
  window.fbq?.('track', event, params);
}

export function trackCustom(event: string, params?: Record<string, unknown>): void {
  if (!PIXEL_ID) return;
  window.fbq?.('trackCustom', event, params);
}

export function trackContactClick(method: 'call' | 'email'): void {
  track('Contact', { content_category: method === 'call' ? 'phone_click' : 'email_click' });
}
