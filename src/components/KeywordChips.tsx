import { Chip, Stack } from "@mui/material";

interface KeywordChipsProps {
  keywords: string[];
  label?: string;
}

// Rendered as real text (never icon/background-image only) so
// keywords stay visible to both screen readers and ATS parsers.
// See specs/extensions/ATS.md and design/ARCHITECTURE.md.
export function KeywordChips({ keywords, label = "Keywords" }: KeywordChipsProps) {
  if (keywords.length === 0) return null;
  return (
    <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap aria-label={label}>
      {keywords.map((keyword) => (
        <Chip key={keyword} label={keyword} size="small" />
      ))}
    </Stack>
  );
}
