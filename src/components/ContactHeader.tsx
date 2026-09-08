import { Typography, Stack } from "@mui/material";
import { contact } from "../data/resume/contact";

// Name/region/email shown at the top of every printable resume/CV page,
// so a "Save as PDF" export carries contact details on its own.
export function ContactHeader() {
  return (
    <Stack spacing={0.5}>
      <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
        {contact.name}
      </Typography>
      <Typography color="text.secondary">
        {contact.region} &middot; {contact.email}
      </Typography>
    </Stack>
  );
}
