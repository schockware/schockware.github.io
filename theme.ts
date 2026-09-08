// MUI theme wired to the shared design tokens in tokens.css.
// Read var() values at runtime so a token update in
// standards/base/tokens.css propagates without touching this file.
import { createTheme } from "@mui/material/styles";

const cssVar = (name: string) => `var(${name})`;

export const theme = createTheme({
  palette: {
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
