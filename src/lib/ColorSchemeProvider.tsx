import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { ThemeProvider } from "@mui/material";
import { createAppTheme } from "../../theme";
import {
  applyDataTheme,
  getStoredPreference,
  resolveIsDark,
  storePreference,
  systemPrefersDark,
  type ColorSchemePreference,
} from "./colorScheme";

interface ColorSchemeContextValue {
  preference: ColorSchemePreference;
  isDark: boolean;
  setPreference: (preference: ColorSchemePreference) => void;
}

const ColorSchemeContext = createContext<ColorSchemeContextValue | null>(null);

// Owns the light/dark/system choice, keeps <html data-theme> (tokens.css's
// override hook) and the MUI theme's palette.mode in sync with it, and
// re-renders both on toggle or on a system-preference change while in
// "system" mode. See src/lib/colorScheme.ts for the persistence/resolution
// logic this wraps, and index.html for the pre-hydration flash-of-wrong-
// theme guard using the same localStorage key.
export function ColorSchemeProvider({ children }: { children: ReactNode }) {
  const [preference, setPreferenceState] = useState<ColorSchemePreference>(getStoredPreference);
  const [isDark, setIsDark] = useState(() => resolveIsDark(preference));

  useEffect(() => {
    applyDataTheme(preference);
    setIsDark(resolveIsDark(preference));
  }, [preference]);

  useEffect(() => {
    if (preference !== "system") return;
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const onChange = () => setIsDark(systemPrefersDark());
    media.addEventListener("change", onChange);
    return () => media.removeEventListener("change", onChange);
  }, [preference]);

  const setPreference = useCallback((next: ColorSchemePreference) => {
    storePreference(next);
    setPreferenceState(next);
  }, []);

  const theme = useMemo(() => createAppTheme(isDark), [isDark]);
  const value = useMemo(() => ({ preference, isDark, setPreference }), [preference, isDark, setPreference]);

  return (
    <ColorSchemeContext.Provider value={value}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorSchemeContext.Provider>
  );
}

export function useColorScheme(): ColorSchemeContextValue {
  const ctx = useContext(ColorSchemeContext);
  if (!ctx) throw new Error("useColorScheme must be used within a ColorSchemeProvider");
  return ctx;
}
