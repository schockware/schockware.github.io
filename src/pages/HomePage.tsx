import { Typography, Stack, Card, CardActionArea, CardContent } from "@mui/material";
import { Link } from "react-router-dom";

const LINK_CARDS = [
  {
    to: "/resume",
    label: "Resume",
    blurb: "Principal, Staff, and Senior resumes tailored by role level, drawn from one shared work history.",
  },
  {
    to: "/cv",
    label: "Full CV",
    blurb: "Every position and highlight, laid out chronologically, regardless of tier.",
  },
  {
    to: "/skills",
    label: "Search by skill",
    blurb: "A searchable skills index across every resume tier.",
  },
];

export function HomePage() {
  return (
    <Stack spacing={3} sx={{ p: 4, width: "100%" }}>
      <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
        Steven Chock
      </Typography>
      <Typography sx={{ maxWidth: "70ch" }}>
        Resumes tailored by role level, drawn from one shared work history &mdash; plus a
        searchable skills index across all of them.
      </Typography>
      <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
        {LINK_CARDS.map(({ to, label, blurb }) => (
          <Card key={to} variant="outlined" sx={{ flex: 1 }}>
            <CardActionArea component={Link} to={to} sx={{ height: "100%" }}>
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
    </Stack>
  );
}
