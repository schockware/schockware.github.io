import { Typography, Stack, Link } from "@mui/material";
import { contact } from "../data/resume/contact";

// Name/region/email/profile links shown at the top of every printable
// resume/CV page, so a "Save as PDF" export carries contact details on its
// own. Link text is the URL itself (not a label) because printed pages
// can't be clicked.
export function ContactHeader({ centered = false }: { centered?: boolean }) {
  return (
    <Stack spacing={0.5} sx={centered ? { textAlign: "center" } : undefined}>
      <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
        {contact.name}
      </Typography>
      <Typography color="text.secondary">
        {contact.region} &middot; {contact.email}
      </Typography>
      <Typography color="text.secondary">
        {contact.links.map((url, i) => (
          <span key={url}>
            {i > 0 && " · "}
            <Link href={url} color="inherit">
              {url.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
            </Link>
          </span>
        ))}
      </Typography>
    </Stack>
  );
}
