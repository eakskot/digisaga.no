import { defineConfig } from "vite";

// Plain static site: index.html at the root, everything else served from public/ as-is
// (the Mindscape pages, .well-known for iOS universal links, _headers/_redirects for Netlify).
export default defineConfig({
  server: { host: "::", port: 8080 },
});
