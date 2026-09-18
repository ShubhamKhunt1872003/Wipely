import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView } from '../lib/ga4';

// Mounted once at the router root (see App.tsx), outside <Layout>, so it
// covers every route including /review. Fires page_view on every route
// change - gtag's own automatic page_view is disabled in ga4.ts so this is
// the single source of page_view events, avoiding duplicates.
const GA4Tracker: React.FC = () => {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;

    pageView(location.pathname + location.search, document.title);
  }, [location.pathname, location.search]);

  return null;
};

export default GA4Tracker;
