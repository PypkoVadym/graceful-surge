
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' &&
    componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      input: {
        // Default language file (no subfolder)
        main: path.resolve(__dirname, 'index.html'),
        
        // Language-specific files (subfolders)
        ru: path.resolve(__dirname, 'index-ru.html'),
      },
      output: {
        // Default index.html (at the root level)
        entryFileNames: (chunk) => {
          return chunk.name === 'main' ? 'index.html' : `${chunk.name}/index.html`;
          },
        dir: 'dist', // All files go into the dist folder
      },
    },
  },
  // Ensure static assets like robots.txt and sitemap.xml are copied to the dist folder
  publicDir: 'public',
}));
