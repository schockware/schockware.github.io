export type ColorSchemePreference = "light" | "dark" | "system";

const STORAGE_KEY = "color-scheme-preference";

export function getStoredPreference(): ColorSchemePreference {
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored === "light" || stored === "dark" || stored === "system") return stored;
  } catch {
    // localStorage unavailable (private browsing, disabled storage) -- fall through to default.
  }
  return "system";
}

export function storePreference(preference: ColorSchemePreference): void {
  try {
    if (preference === "system") {
      localStorage.removeItem(STORAGE_KEY);
    } else {
      localStorage.setItem(STORAGE_KEY, preference);
    }
  } catch {
    // Ignore -- preference just won't persist across reloads.
  }
}

export function systemPrefersDark(): boolean {
  return window.matchMedia("(prefers-color-scheme: dark)").matches;
}

export function resolveIsDark(preference: ColorSchemePreference): boolean {
  return preference === "system" ? systemPrefersDark() : preference === "dark";
}

// Stamps data-theme on <html> so the tokens.css [data-theme] override
// blocks apply before React hydrates/re-renders (avoids a flash of the
// wrong theme). "system" removes the attribute so the prefers-color-scheme
// media query in tokens.css takes over.
export function applyDataTheme(preference: ColorSchemePreference): void {
  const root = document.documentElement;
  if (preference === "system") {
    root.removeAttribute("data-theme");
  } else {
    root.setAttribute("data-theme", preference);
  }
}
