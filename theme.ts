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
//
// isDark is passed in rather than re-detected here, because the caller
// (src/App.tsx, via src/lib/colorScheme.ts) resolves it from either the
// user's explicit toggle choice or the system preference -- this stays
// a pure function of that single resolved value so re-creating the
// theme on toggle re-reads the [data-theme]-overridden CSS vars.
import { createTheme } from "@mui/material/styles";

const cssVar = (name: string) =>
  getComputedStyle(document.documentElement).getPropertyValue(name).trim();

export function createAppTheme(isDark: boolean) {
  return createTheme({
    palette: {
      mode: isDark ? "dark" : "light",
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
