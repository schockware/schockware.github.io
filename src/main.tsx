import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { ColorSchemeProvider } from "./lib/ColorSchemeProvider";
import "../tokens.css";
import "./index.css";
import { App } from "./App";

// Companion to public/404.html's redirect stash -- restore the real
// path before the router mounts so the first render lands on the
// route the visitor actually asked for.
const redirectPath = sessionStorage.getItem("spa-redirect-path");
if (redirectPath) {
  sessionStorage.removeItem("spa-redirect-path");
  window.history.replaceState(null, "", redirectPath);
}

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ColorSchemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ColorSchemeProvider>
  </StrictMode>,
);
