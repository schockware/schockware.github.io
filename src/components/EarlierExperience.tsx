import { Box, Stack, Typography, type SxProps, type Theme } from "@mui/material";
import type { Position } from "../types/resume";

interface EarlierExperienceProps {
  positions: Position[];
  title: string;
  headingSx: SxProps<Theme>;
}

// Single-line entries for positions that don't earn a full card -- see
// Position.resumeDetail. The heading style is the caller's so each resume
// format keeps its own section-heading look.
export function EarlierExperience({ positions, title, headingSx }: EarlierExperienceProps) {
  if (positions.length === 0) return null;
  return (
    <Box>
      <Typography variant="h2" sx={headingSx}>
        {title}
      </Typography>
      <Stack spacing={0.25} className="earlier-experience">
        {positions.map((position) => (
          <Typography key={position.id}>
            {position.title}, {position.employer} ({position.start} &ndash; {position.end})
          </Typography>
        ))}
      </Stack>
    </Box>
  );
}
