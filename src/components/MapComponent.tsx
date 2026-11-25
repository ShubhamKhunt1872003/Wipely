import { lazy, Suspense, useEffect, useState } from 'react';
import type { MapComponentProps } from './LeafletMap';

// Leaflet reads `window` as soon as it is imported, so it can't run during the
// build-time prerender. The map has no SEO text, so it loads only in the browser:
// the prerendered HTML (and first client render) holds a same-size placeholder.
const LeafletMap = lazy(() => import('./LeafletMap'));

const MapComponent: React.FC<MapComponentProps> = ({ height = '300px', showPopup = true }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const placeholder = (
    <div style={{ height, width: '100%', maxWidth: '100%' }} className="rounded-lg overflow-hidden shadow-lg bg-gray-200" />
  );

  if (!mounted) return placeholder;
  return (
    <Suspense fallback={placeholder}>
      <LeafletMap height={height} showPopup={showPopup} />
    </Suspense>
  );
};

export default MapComponent;
