import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { BrowserRouter } from "react-router-dom";
import { createAppTheme } from "../theme";
import "../tokens.css";
import { App } from "./App";

// tokens.css above is applied to the DOM by the time this runs, so
// createAppTheme's getComputedStyle reads resolve real values.
const theme = createAppTheme();

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
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </StrictMode>,
);
