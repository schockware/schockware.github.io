import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base stays "/" -- this repo is the schockware.github.io user page,
// served at the domain root, not a project page under a subpath.
// See design/ARCHITECTURE.md ("Deploy Target").
export default defineConfig({
  plugins: [react()],
});
