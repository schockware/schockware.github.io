import { Box, Typography } from "@mui/material";
import { KeywordChips } from "./KeywordChips";

// Role-level stack summary shown above a position's highlights.
export function TechnologySummary({ technologies }: { technologies: string[] }) {
  if (technologies.length === 0) return null;
  return (
    <Box sx={{ mb: 1.5 }}>
      <Typography color="text.secondary" sx={{ mb: 0.5 }}>
        Technologies
      </Typography>
      <KeywordChips keywords={technologies} label="Technologies" />
    </Box>
  );
}
