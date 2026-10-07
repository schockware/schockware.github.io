import { MenuItem, Stack, TextField } from "@mui/material";
import type { Curation, ResumeFormat } from "../types/resume";

const FORMAT_LABEL: Record<ResumeFormat, string> = {
  "event-focused": "Event Focused",
  classic: "Classic",
};

const CURATION_LABEL: Record<Curation, string> = {
  "advanced-highlights": "Advanced Highlights",
  "feature-ownership": "Feature Ownership",
};

interface ResumeOptionsProps {
  format: ResumeFormat;
  curation: Curation;
  onFormatChange: (format: ResumeFormat) => void;
  onCurationChange: (curation: Curation) => void;
}

export function ResumeOptions({ format, curation, onFormatChange, onCurationChange }: ResumeOptionsProps) {
  return (
    <Stack direction={{ xs: "column", sm: "row" }} spacing={2}>
      <TextField
        select
        id="resume-format"
        label="Format"
        value={format}
        onChange={(event) => onFormatChange(event.target.value as ResumeFormat)}
        sx={{ minWidth: 200 }}
      >
        {Object.entries(FORMAT_LABEL).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
      <TextField
        select
        id="resume-curation"
        label="Curated"
        value={curation}
        onChange={(event) => onCurationChange(event.target.value as Curation)}
        sx={{ minWidth: 220 }}
      >
        {Object.entries(CURATION_LABEL).map(([value, label]) => (
          <MenuItem key={value} value={value}>
            {label}
          </MenuItem>
        ))}
      </TextField>
    </Stack>
  );
}
