// Build step 3 of 3 (see "build" in package.json):
//   1. vite build                      -> dist/ (client bundle + index.html template)
//   2. vite build --ssr entry-server   -> dist-ssr/entry-server.js
//   3. this script                     -> renders every route in src/seo/routeMeta.ts into
//                                         dist/<route>.html, plus sitemap.xml and robots.txt
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const rootDir = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const distDir = path.join(rootDir, 'dist');
const serverEntry = path.join(rootDir, 'dist-ssr', 'entry-server.js');

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf-8');
const { render, ROUTES, SITE_URL, canonicalUrl, renderHeadTags } = await import(pathToFileURL(serverEntry).href);

const META_BLOCK = /<!--route-meta-->[\s\S]*?<!--\/route-meta-->/;
const ROOT_DIV = '<div id="root"></div>';
if (!META_BLOCK.test(template) || !template.includes(ROOT_DIV)) {
  throw new Error('dist/index.html is missing the <!--route-meta--> block or an empty <div id="root"></div>');
}

for (const route of ROUTES) {
  const appHtml = render(route.path);
  const page = template
    .replace(META_BLOCK, () => renderHeadTags(route))
    .replace(ROOT_DIV, () => `<div id="root" data-prerendered="${route.path}">${appHtml}</div>`);

  // "/" -> index.html, "/services/oven-cleaning" -> services/oven-cleaning.html
  // (served at the extension-less URL via "cleanUrls" in vercel.json).
  const file = route.path === '/' ? 'index.html' : `${route.path.slice(1)}.html`;
  const outPath = path.join(distDir, file);
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  fs.writeFileSync(outPath, page);
  console.log(`prerendered ${route.path.padEnd(34)} -> dist/${file}`);
}

const today = new Date().toISOString().slice(0, 10);
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${ROUTES.filter((r) => !r.noindex)
  .map((r) => `  <url><loc>${canonicalUrl(r.path)}</loc><lastmod>${today}</lastmod></url>`)
  .join('\n')}
</urlset>
`;
fs.writeFileSync(path.join(distDir, 'sitemap.xml'), sitemap);
fs.writeFileSync(path.join(distDir, 'robots.txt'), `User-agent: *\nAllow: /\n\nSitemap: ${SITE_URL}/sitemap.xml\n`);
console.log('wrote dist/sitemap.xml and dist/robots.txt');
