import { Typography, Stack, Card, CardContent, Box } from "@mui/material";
import { positions } from "../data/resume/positions";
import { KeywordChips } from "../components/KeywordChips";
import { PrintButton } from "../components/PrintButton";

// Full chronological CV, all positions and highlights regardless of
// tier weighting -- see specs/extensions/RESUME_FRAMEWORK_CHOICE.md
// ("CV Stays Separate").
export function CvPage() {
  return (
    <Stack spacing={3} sx={{ p: 4, maxWidth: "70ch" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
        <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
          Curriculum Vitae
        </Typography>
        <PrintButton />
      </Box>
      {positions.length === 0 ? (
        <Typography>No positions yet.</Typography>
      ) : (
        <Stack spacing={2}>
          {positions.map((position) => (
            <Card key={position.id} variant="outlined">
              <CardContent>
                <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
                  {position.title} &middot; {position.employer}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  {position.start} &ndash; {position.end}
                </Typography>
                <Stack spacing={1}>
                  {position.highlights.map((highlight) => (
                    <div key={highlight.id}>
                      <Typography>{highlight.context}</Typography>
                      <Typography>{highlight.action}</Typography>
                      <Typography sx={{ mb: 1 }}>{highlight.result}</Typography>
                      <KeywordChips keywords={highlight.keywords} />
                    </div>
                  ))}
                </Stack>
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
