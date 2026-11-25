import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { normalizePath } from './seo/routeMeta';
import App from './App.tsx';
import './index.css';
import { initMetaPixel } from './lib/metaPixel';
import { initGA4 } from './lib/ga4';

// Runs synchronously at module load, before React renders anything - so window.fbq
// exists before MetaPixelTracker's effect (a child of App, which fires before App's
// own effects on mount) ever calls pageView(). Previously this lived in a useEffect
// inside App.tsx, which meant pageView() could run before window.fbq had been created,
// silently dropping the very first PageView on every fresh page load.
initMetaPixel();
initGA4();

const container = document.getElementById('root')!;
const app = (
  <StrictMode>
    <App />
  </StrictMode>
);

// Pages listed in src/seo/routeMeta.ts are prerendered at build time, and the root
// is tagged with the path it was rendered for. Hydrate that markup when it matches
// the current URL. For any other URL (e.g. an unknown path served by the SPA
// fallback rewrite) discard it and render on the client as before.
const prerenderedPath = container.dataset.prerendered;
if (prerenderedPath && prerenderedPath === normalizePath(window.location.pathname)) {
  hydrateRoot(container, app);
} else {
  container.innerHTML = '';
  createRoot(container).render(app);
}
