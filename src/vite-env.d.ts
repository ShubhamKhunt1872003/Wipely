/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Meta (Facebook) Pixel ID. Public by nature (it's visible in every page's
  // network requests), so it's safe as a VITE_-prefixed client-side var.
  readonly VITE_META_PIXEL_ID?: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
