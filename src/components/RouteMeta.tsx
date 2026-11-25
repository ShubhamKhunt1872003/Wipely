import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { canonicalUrl, getRouteMeta } from '../seo/routeMeta';

function setAttr(selector: string, attr: string, value: string) {
  document.head.querySelector(selector)?.setAttribute(attr, value);
}

// Each prerendered page already ships the right <head> tags. This keeps them
// correct after client-side navigation. It is mounted before the analytics trackers
// in App.tsx so that their page_view events read the new document.title.
const RouteMeta: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const meta = getRouteMeta(pathname);
    const url = canonicalUrl(meta.path);

    document.title = meta.title;
    setAttr('meta[name="description"]', 'content', meta.description);
    setAttr('meta[name="robots"]', 'content', meta.noindex ? 'noindex, follow' : 'index, follow');
    setAttr('link[rel="canonical"]', 'href', url);
    setAttr('meta[property="og:url"]', 'content', url);
    setAttr('meta[property="og:title"]', 'content', meta.title);
    setAttr('meta[property="og:description"]', 'content', meta.description);
    setAttr('meta[name="twitter:title"]', 'content', meta.title);
    setAttr('meta[name="twitter:description"]', 'content', meta.description);
  }, [pathname]);

  return null;
};

export default RouteMeta;
