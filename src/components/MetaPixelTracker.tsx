import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { pageView, track } from '../lib/metaPixel';

// Path -> ViewContent params for every cleaning-service marketing page.
// Keeping this map here (rather than adding tracking code to each of the 10
// service page components) means every service page gets ViewContent for
// free, and adding a new service page later needs one line here, not a new
// useEffect scattered across the codebase.
const SERVICE_CONTENT: Record<string, { name: string; id: string }> = {
  '/services/regular-cleaning': { name: 'Regular House Cleaning', id: 'regular_cleaning' },
  '/services/end-of-lease': { name: 'End of Lease Cleaning', id: 'end_of_lease' },
  '/services/spring-cleaning': { name: 'Hourly Spring Cleaning', id: 'spring_cleaning' },
  '/services/custom-cleaning': { name: 'Custom Cleaning', id: 'custom_cleaning' },
  '/services/carpet-cleaning': { name: 'Carpet Cleaning', id: 'carpet_cleaning' },
  '/services/upholstery-cleaning': { name: 'Upholstery Cleaning', id: 'upholstery_cleaning' },
  '/services/oven-cleaning': { name: 'Oven Cleaning', id: 'oven_cleaning' },
  '/services/bbq-cleaning': { name: 'BBQ Cleaning', id: 'bbq_cleaning' },
  '/services/staircase-cleaning': { name: 'Staircase Cleaning', id: 'staircase_cleaning' },
  '/services/commercial-cleaning': { name: 'Commercial Cleaning', id: 'commercial_cleaning' },
};

// Mounted once at the router root (see App.tsx), outside <Layout>, so it
// covers every route including /review. Fires PageView on every route change
// and, for service pages, a ViewContent alongside it.
const MetaPixelTracker: React.FC = () => {
  const location = useLocation();
  const lastPath = useRef<string | null>(null);

  useEffect(() => {
    if (lastPath.current === location.pathname) return;
    lastPath.current = location.pathname;

    pageView();

    const service = SERVICE_CONTENT[location.pathname];
    if (service) {
      track('ViewContent', {
        content_name: service.name,
        content_category: 'cleaning_service',
        content_ids: [service.id],
        content_type: 'product',
      });
    }
  }, [location.pathname]);

  return null;
};

export default MetaPixelTracker;
