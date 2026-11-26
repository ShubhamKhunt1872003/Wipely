import { useEffect, useLayoutEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    /** Defined by the inline intro script in index.html. */
    wipelyIntro?: () => void;
  }
}

// useLayoutEffect so the overlay is back on screen before the browser paints the new
// page; plain useEffect during the build-time prerender, where layout effects can't run.
const useIsomorphicLayoutEffect = typeof window === 'undefined' ? useEffect : useLayoutEffect;

// Replays the brand intro from index.html on every in-app page change. The first page
// load is handled by the inline script itself, so the initial render is skipped.
const IntroReplay: React.FC = () => {
  const { pathname } = useLocation();
  const isFirstRender = useRef(true);

  useIsomorphicLayoutEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    window.wipelyIntro?.();
  }, [pathname]);

  return null;
};

export default IntroReplay;
