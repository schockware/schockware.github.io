import { IconButton, Tooltip } from "@mui/material";
import { useColorScheme } from "../lib/ColorSchemeProvider";

// Sun/moon glyphs inline rather than pulling in @mui/icons-material for
// two icons. currentColor so they follow the button's color prop.
function SunIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="4.5" stroke="currentColor" strokeWidth="2" />
      <g stroke="currentColor" strokeWidth="2" strokeLinecap="round">
        <path d="M12 2.5v2.5" />
        <path d="M12 19v2.5" />
        <path d="M4.2 4.2l1.8 1.8" />
        <path d="M18 18l1.8 1.8" />
        <path d="M2.5 12h2.5" />
        <path d="M19 12h2.5" />
        <path d="M4.2 19.8l1.8-1.8" />
        <path d="M18 6l1.8-1.8" />
      </g>
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M20 14.5A8.5 8.5 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5Z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// Two-state toggle (light/dark), skipping "system" as a third click stop
// -- simpler to operate and understand than a tri-state control, while
// still respecting the system preference by default until the visitor
// makes an explicit choice (see src/lib/colorScheme.ts).
export function ColorSchemeToggle() {
  const { isDark, setPreference } = useColorScheme();
  const label = isDark ? "Switch to light mode" : "Switch to dark mode";

  return (
    <Tooltip title={label}>
      <IconButton
        onClick={() => setPreference(isDark ? "light" : "dark")}
        aria-label={label}
        size="small"
        sx={{
          color: "#ffffff",
          border: "1px solid rgba(255, 255, 255, 0.4)",
          "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.12)" },
          "&:focus-visible": {
            outline: "2px solid #ffffff",
            outlineOffset: "2px",
          },
        }}
      >
        {isDark ? <SunIcon /> : <MoonIcon />}
      </IconButton>
    </Tooltip>
  );
}
