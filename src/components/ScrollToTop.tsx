import { useEffect, useLayoutEffect } from 'react';
import { useLocation } from 'react-router-dom';

// useLayoutEffect warns during the build-time prerender (no DOM there), so
// fall back to useEffect on the server.
const useIsomorphicLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : useEffect;

// React Router keeps the window's scroll position when the route changes, so
// clicking a footer link opened the next page already scrolled to its footer.
// Reset to the top on every pathname change (instant, not smooth, so the user
// never sees the old scroll position). Mounted once at the router root in App.tsx.
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useIsomorphicLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, [pathname]);

  return null;
};

export default ScrollToTop;
