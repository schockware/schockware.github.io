import { useMemo, useState } from "react";
import { Typography, Stack, Card, CardContent, Chip } from "@mui/material";
import { positions } from "../data/resume/positions";
import { searchAllPositions } from "../lib/skillSearch";
import { KeywordChips } from "../components/KeywordChips";
import { SkillFilterField } from "../components/SkillFilterField";

const TIER_LABEL: Record<string, string> = {
  principal: "Principal",
  staff: "Staff",
  senior: "Senior",
};

export function SkillsPage() {
  const [skillQuery, setSkillQuery] = useState("");
  const matches = useMemo(() => searchAllPositions(positions, skillQuery), [skillQuery]);

  return (
    <Stack spacing={3} sx={{ p: 4, width: "100%" }}>
      <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
        Search by skill
      </Typography>
      <SkillFilterField
        id="skills-page-filter"
        label="Skills"
        value={skillQuery}
        onChange={setSkillQuery}
      />
      {skillQuery.trim() !== "" && matches.length === 0 ? (
        <Typography>No highlights match that skill.</Typography>
      ) : (
        <Stack spacing={2}>
          {matches.map(({ position, highlight }) => (
            <Card key={highlight.id} variant="outlined">
              <CardContent>
                <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
                  {position.title} &middot; {position.employer}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mb: 1 }}>
                  {highlight.tiers
                    .filter((t) => t.include)
                    .map((t) => (
                      <Chip key={t.tier} label={TIER_LABEL[t.tier]} size="small" variant="outlined" />
                    ))}
                </Stack>
                <Typography>{highlight.result}</Typography>
                <KeywordChips keywords={highlight.keywords} />
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
