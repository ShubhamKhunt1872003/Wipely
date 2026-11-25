import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react', 'react-leaflet'],
  },
  ssr: {
    // Bundle dependencies into the prerender build (dist-ssr) so Node never has to
    // resolve their CSS imports or CJS/ESM interop at prerender time.
    noExternal: true,
  },
});
