import { Typography, Stack, Card, CardActionArea, CardContent, Box } from "@mui/material";
import { Link } from "react-router-dom";
import type { Tier } from "../types/resume";

const TIER_CARDS: { tier: Tier; label: string; blurb: string }[] = [
  {
    tier: "principal",
    label: "Principal Software Engineer",
    blurb:
      "Start here if you're evaluating org-wide systemic diagnosis, architectural strategy that survives a growth-stage transition, and technical judgment exercised without waiting for formal authority.",
  },
  {
    tier: "staff",
    label: "Staff Software Engineer",
    blurb:
      "Start here if you're evaluating multi-team technical leadership, crisis response, and force-multiplying diagnostic work that spans beyond a single team's boundaries.",
  },
  {
    tier: "senior",
    label: "Senior Software Engineer",
    blurb:
      "Start here if you're evaluating hands-on ownership of features and systems, technical depth, and delivery you can independently verify.",
  },
];

export function ResumeIndexPage() {
  return (
    <Stack spacing={3} sx={{ p: 4, width: "100%" }}>
      <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
        Resume
      </Typography>
      <Typography sx={{ maxWidth: "70ch" }}>
        I've operated at Principal, Staff, and Senior scope over the course of my career &mdash;
        often without the title catching up to the responsibility. Rather than pick one framing
        and leave the rest out, each level below is its own resume, written for what that scope
        actually looked like. Pick the one closest to the role you're evaluating, or read all
        three for the full range.
      </Typography>
      <Typography sx={{ maxWidth: "70ch" }}>
        <span aria-hidden="true">🥯</span> Most of the organizations I've worked for didn't
        distinguish between these three roles &mdash; you were expected to be "everything,
        everywhere, all at once."
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        {TIER_CARDS.map(({ tier, label, blurb }) => (
          <Card key={tier} variant="outlined" sx={{ flex: 1 }}>
            <CardActionArea component={Link} to={`/resume/${tier}`} sx={{ height: "100%" }}>
              <CardContent>
                <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
                  {label}
                </Typography>
                <Typography color="text.secondary">{blurb}</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        ))}
      </Stack>
      <Box>
        <Typography>
          Prefer one chronological view instead? See the <Link to="/cv">full CV</Link>.
        </Typography>
      </Box>
    </Stack>
  );
}
