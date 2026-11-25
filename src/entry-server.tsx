// Build-time entry: renders each route to static HTML (see scripts/prerender.mjs),
// so crawlers receive the full page content instead of an empty <div id="root">.
// The browser then hydrates that markup via src/main.tsx.
import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom/server';
import { AppRoutes } from './App';

export { ROUTES, SITE_URL, canonicalUrl, renderHeadTags } from './seo/routeMeta';

export function render(url: string): string {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}>
        <AppRoutes />
      </StaticRouter>
    </StrictMode>
  );
}
