import { Typography, Stack, Link as MuiLink } from "@mui/material";
import { Link } from "react-router-dom";

export function HomePage() {
  return (
    <Stack spacing={2} sx={{ p: 4, maxWidth: "60ch" }}>
      <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
        Steven Chock
      </Typography>
      <Typography>
        Three resumes, tailored by role level, drawn from one shared work history &mdash;
        plus a searchable skills index across all of them.
      </Typography>
      <Stack component="ul" spacing={1} sx={{ listStyle: "none", p: 0 }}>
        <li>
          <MuiLink component={Link} to="/resume/principal">
            Principal Software Engineer resume
          </MuiLink>
        </li>
        <li>
          <MuiLink component={Link} to="/resume/staff">
            Staff Software Engineer resume
          </MuiLink>
        </li>
        <li>
          <MuiLink component={Link} to="/resume/senior">
            Senior Software Engineer resume
          </MuiLink>
        </li>
        <li>
          <MuiLink component={Link} to="/cv">
            Full CV
          </MuiLink>
        </li>
        <li>
          <MuiLink component={Link} to="/skills">
            Search by skill
          </MuiLink>
        </li>
      </Stack>
    </Stack>
  );
}
