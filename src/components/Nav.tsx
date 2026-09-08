import { NavLink } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import type { Tier } from "../types/resume";

const TIERS: Tier[] = ["principal", "staff", "senior"];

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "var(--font-weight-bold)" : "var(--font-weight-regular)",
  color: "var(--color-text)",
  textDecoration: "none",
});

export function Nav() {
  return (
    <Box component="nav" aria-label="Main" sx={{ p: 2, borderBottom: "1px solid var(--color-border)" }}>
      <Stack direction="row" spacing={3} component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
        {TIERS.map((tier) => (
          <li key={tier}>
            <NavLink to={`/resume/${tier}`} style={linkStyle}>
              {tier[0].toUpperCase() + tier.slice(1)} resume
            </NavLink>
          </li>
        ))}
        <li>
          <NavLink to="/cv" style={linkStyle}>
            CV
          </NavLink>
        </li>
        <li>
          <NavLink to="/skills" style={linkStyle}>
            Skills
          </NavLink>
        </li>
      </Stack>
    </Box>
  );
}
