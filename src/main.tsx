import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import { initMetaPixel } from './lib/metaPixel';

// Runs synchronously at module load, before React renders anything - so window.fbq
// exists before MetaPixelTracker's effect (a child of App, which fires before App's
// own effects on mount) ever calls pageView(). Previously this lived in a useEffect
// inside App.tsx, which meant pageView() could run before window.fbq had been created,
// silently dropping the very first PageView on every fresh page load.
initMetaPixel();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
