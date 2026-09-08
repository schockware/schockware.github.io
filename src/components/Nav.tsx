import { NavLink } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import { ColorSchemeToggle } from "./ColorSchemeToggle";

const linkStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: isActive ? "var(--font-weight-bold)" : "var(--font-weight-regular)",
  color: "#ffffff",
  opacity: isActive ? 1 : 0.85,
  textDecoration: "none",
});

const homeLinkStyle = ({ isActive }: { isActive: boolean }) => ({
  fontWeight: "var(--font-weight-bold)",
  fontSize: "var(--font-size-lg)",
  color: "#ffffff",
  opacity: isActive ? 1 : 0.85,
  textDecoration: "none",
});

export function Nav() {
  return (
    <Box
      component="nav"
      aria-label="Main"
      className="no-print"
      sx={{
        px: 3,
        py: 2,
        backgroundColor: "var(--color-primary)",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Stack direction="row" spacing={4} alignItems="center">
        <NavLink to="/" end style={homeLinkStyle}>
          Steven Chock
        </NavLink>
        <Stack direction="row" spacing={3} component="ul" sx={{ listStyle: "none", m: 0, p: 0 }}>
          <li>
            <NavLink to="/resume" style={linkStyle}>
              Resume
            </NavLink>
          </li>
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
      </Stack>
      <ColorSchemeToggle />
    </Box>
  );
}
