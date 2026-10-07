import { Card, CardContent, Stack, Typography } from "@mui/material";
import type { PositionTierMatch } from "../lib/skillSearch";
import { EarlierExperience } from "./EarlierExperience";
import { KeywordChips } from "./KeywordChips";
import { TechnologySummary } from "./TechnologySummary";

const headingSx = { fontSize: "var(--font-size-lg)" };

// STAR-shaped layout: one card per role, each highlight as context / action /
// result paragraphs followed by its keyword chips.
export function EventFocusedResume({ summary, groups }: { summary: string; groups: PositionTierMatch[] }) {
  const fullGroups = groups.filter((g) => g.detail === "full");
  const briefGroups = groups.filter((g) => g.detail === "brief");
  return (
    <>
      <Typography>{summary}</Typography>
      <Stack spacing={2}>
        {fullGroups.map(({ position, highlights }) => (
          <Card key={position.id} variant="outlined">
            <CardContent>
              <Typography variant="h2" sx={headingSx}>
                {position.title} &middot; {position.employer}
              </Typography>
              <Typography color="text.secondary" sx={{ mb: 1 }}>
                {position.start} &ndash; {position.end}
              </Typography>
              <TechnologySummary technologies={position.technologies} />
              <Stack spacing={1}>
                {highlights.map(({ highlight, narrative }) => (
                  <div key={highlight.id} className="resume-highlight">
                    <Typography sx={{ mb: 1 }}>{narrative.context}</Typography>
                    <Typography sx={{ mb: 1 }}>{narrative.action}</Typography>
                    <Typography sx={{ mb: 1 }}>{narrative.result}</Typography>
                    <KeywordChips keywords={highlight.keywords} />
                  </div>
                ))}
              </Stack>
            </CardContent>
          </Card>
        ))}
      </Stack>
      <EarlierExperience
        positions={briefGroups.map((g) => g.position)}
        title="Earlier Experience"
        headingSx={{ ...headingSx, mb: 1 }}
      />
    </>
  );
}
