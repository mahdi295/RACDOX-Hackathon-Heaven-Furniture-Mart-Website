import { fileURLToPath } from "node:url";
import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsConfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";
import { nitro } from "nitro/vite";

const srcDir = fileURLToPath(new URL("./src", import.meta.url));

export default defineConfig({
  css: { transformer: "lightningcss" },
  resolve: {
    alias: { "@": srcDir },
    dedupe: [
      "react",
      "react-dom",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
      "@tanstack/react-query",
      "@tanstack/query-core",
    ],
  },
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-dom/client",
      "react/jsx-runtime",
      "react/jsx-dev-runtime",
    ],
  },
  plugins: [
    tailwindcss(),
    tsConfigPaths({ projects: ["./tsconfig.json"] }),
    tanstackStart({
      server: { entry: "server" },
      importProtection: {
        behavior: "error",
        client: { files: ["**/server/**"], specifiers: ["server-only"] },
      },
    }),
    // Cloudflare Workers build target — free tier, always-on. See docs/DEPLOYMENT.md
    // for how to switch presets (e.g. "vercel", "netlify") if you deploy elsewhere.
    // compatibilityDate is pinned on purpose: nitro otherwise defaults it to the
    // BUILD MACHINE'S system clock date. If that clock is wrong (set ahead, or a
    // VM/container with drift), the generated date lands in the future and
    // Cloudflare rejects the deploy with "Can't set compatibility date in the
    // future" (error 10021). A fixed, known-good past date avoids that entirely.
    // Safe to bump forward periodically (see docs/DEPLOYMENT.md).
    nitro({ preset: "cloudflare-module", compatibilityDate: "2025-01-01" }),
    viteReact(),
  ],
});
