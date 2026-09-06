// Captures ad-click attribution (UTM params + click IDs) from the landing
// URL so it can be attached to the booking webhook payload - this is what
// lets the business cross-reference a completed booking in their sheet
// against the exact Meta/Google campaign that generated it. Meta's own Pixel
// already handles ad attribution internally via the _fbc/_fbp cookies below;
// this module exists for the business's own record-keeping, not for Meta.

const STORAGE_KEY = 'wipely_attribution';

const UTM_KEYS = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_term',
  'utm_content',
  'fbclid',
  'gclid',
] as const;

type UtmKey = (typeof UTM_KEYS)[number];

export type Attribution = Partial<Record<UtmKey, string>> & {
  landing_page?: string;
  first_seen?: string;
};

// First-touch attribution: keep the first campaign that brought the visitor
// in, even if they browse for days across multiple sessions before booking.
export function captureAttribution(): void {
  if (typeof window === 'undefined') return;
  if (localStorage.getItem(STORAGE_KEY)) return;

  const params = new URLSearchParams(window.location.search);
  const found: Partial<Record<UtmKey, string>> = {};
  UTM_KEYS.forEach((key) => {
    const value = params.get(key);
    if (value) found[key] = value;
  });

  if (Object.keys(found).length === 0) return;

  const attribution: Attribution = {
    ...found,
    landing_page: window.location.pathname,
    first_seen: new Date().toISOString(),
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(attribution));
}

export function getAttribution(): Attribution {
  if (typeof window === 'undefined') return {};
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    return raw ? (JSON.parse(raw) as Attribution) : {};
  } catch {
    return {};
  }
}

function getCookie(name: string): string | undefined {
  if (typeof document === 'undefined') return undefined;
  const match = document.cookie.match(new RegExp(`(?:^|; )${name}=([^;]*)`));
  return match ? decodeURIComponent(match[1]) : undefined;
}

// Meta's own click/browser IDs, set automatically once the Pixel loads.
// Passing these to the booking backend allows later server-side matching
// (e.g. Conversions API) without sending any personal data.
export function getMetaCookies(): { fbc?: string; fbp?: string } {
  return { fbc: getCookie('_fbc'), fbp: getCookie('_fbp') };
}
