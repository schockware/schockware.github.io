// MUI theme wired to the shared design tokens in tokens.css.
//
// MUI's createTheme computes contrast text and hover/active variants
// from the literal palette values it's given, so it can't accept a
// `var(--color-primary)` string -- it needs the resolved color. This
// reads the *computed* value of each custom property off the root
// element instead, so tokens.css stays the single source of truth
// (a token update there still propagates without touching this
// file), just resolved once at theme-creation time rather than left
// as a live CSS reference.
//
// Call createAppTheme() after tokens.css has been applied to the DOM
// (i.e. from an app entry point after import "./tokens.css", not at
// this module's top level) so getComputedStyle sees real values.
import { createTheme } from "@mui/material/styles";

const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function createAppTheme() {
  const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

  return createTheme({
    palette: {
      mode: prefersDark ? "dark" : "light",
      primary: { main: cssVar("--color-primary") },
      secondary: { main: cssVar("--color-secondary") },
      success: { main: cssVar("--color-success") },
      warning: { main: cssVar("--color-warning") },
      error: { main: cssVar("--color-danger") },
      info: { main: cssVar("--color-info") },
      background: {
        default: cssVar("--color-bg"),
        paper: cssVar("--color-surface"),
      },
      text: {
        primary: cssVar("--color-text"),
        secondary: cssVar("--color-text-muted"),
      },
    },
    typography: {
      fontFamily: cssVar("--font-family-base"),
    },
    shape: {
      borderRadius: 8,
    },
  });
}
