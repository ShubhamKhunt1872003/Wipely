/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Meta (Facebook) Pixel ID. Public by nature (it's visible in every page's
  // network requests), so it's safe as a VITE_-prefixed client-side var.
  readonly VITE_META_PIXEL_ID?: string;
  // Google Analytics 4 Measurement ID. Also public by nature. Falls back to
  // a hardcoded default in src/lib/ga4.ts if unset, so it's optional here.
  readonly VITE_GA4_MEASUREMENT_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
