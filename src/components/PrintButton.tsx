import { Button } from "@mui/material";

// window.print() opens the browser's native print dialog, which on
// every major browser offers "Save as PDF" as a destination -- no PDF
// library needed. Hidden at print time via the .no-print rule in
// index.css, alongside the rest of the page chrome (nav, skill filter).
export function PrintButton() {
  return (
    <Button variant="outlined" onClick={() => window.print()} className="no-print">
      Print / Save as PDF
    </Button>
  );
}
