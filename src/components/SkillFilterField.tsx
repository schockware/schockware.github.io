import { TextField } from "@mui/material";

interface SkillFilterFieldProps {
  id: string;
  label: string;
  value: string;
  onChange: (value: string) => void;
}

// Real <label>, not placeholder-only text -- see
// design/ARCHITECTURE.md ("Accessibility (WCAG)").
export function SkillFilterField({ id, label, value, onChange }: SkillFilterFieldProps) {
  const helperId = `${id}-helper`;
  return (
    <TextField
      id={id}
      label={label}
      value={value}
      onChange={(event) => onChange(event.target.value)}
      helperText="Comma-separated, e.g. TypeScript, React"
      FormHelperTextProps={{ id: helperId }}
      inputProps={{ "aria-describedby": helperId }}
      fullWidth
    />
  );
}
