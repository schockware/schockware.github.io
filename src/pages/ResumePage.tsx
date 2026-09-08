import { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Typography, Stack, Card, CardContent, Box } from "@mui/material";
import { positions } from "../data/resume/positions";
import { filterTierHighlights } from "../lib/skillSearch";
import { KeywordChips } from "../components/KeywordChips";
import { SkillFilterField } from "../components/SkillFilterField";
import { PrintButton } from "../components/PrintButton";
import type { Tier } from "../types/resume";

const VALID_TIERS: Tier[] = ["principal", "staff", "senior"];
const TIER_LABEL: Record<Tier, string> = {
  principal: "Principal Software Engineer",
  staff: "Staff Software Engineer",
  senior: "Senior Software Engineer",
};

export function ResumePage() {
  const { tier } = useParams<{ tier: string }>();
  const [skillQuery, setSkillQuery] = useState("");
  const validTier = tier && VALID_TIERS.includes(tier as Tier) ? (tier as Tier) : null;

  const matches = useMemo(
    () => (validTier ? filterTierHighlights(positions, validTier, skillQuery) : []),
    [validTier, skillQuery],
  );

  if (!validTier) {
    return <Navigate to="/" replace />;
  }

  return (
    <Stack spacing={3} sx={{ p: 4, maxWidth: "70ch" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
        <Typography variant="h1" sx={{ fontSize: "var(--font-size-2xl)" }}>
          {TIER_LABEL[validTier]} resume
        </Typography>
        <PrintButton />
      </Box>
      <Box className="no-print">
        <SkillFilterField
          id="resume-skill-filter"
          label="Filter by skill"
          value={skillQuery}
          onChange={setSkillQuery}
        />
      </Box>
      {matches.length === 0 ? (
        <Typography>No highlights match that skill filter.</Typography>
      ) : (
        <Stack spacing={2}>
          {matches.map(({ position, highlight, narrative }) => (
            <Card key={highlight.id} variant="outlined">
              <CardContent>
                <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
                  {position.title} &middot; {position.employer}
                </Typography>
                <Typography color="text.secondary" sx={{ mb: 1 }}>
                  {position.start} &ndash; {position.end}
                </Typography>
                <Typography>{narrative.context}</Typography>
                <Typography>{narrative.action}</Typography>
                <Typography sx={{ mb: 1 }}>{narrative.result}</Typography>
                <KeywordChips keywords={highlight.keywords} />
              </CardContent>
            </Card>
          ))}
        </Stack>
      )}
    </Stack>
  );
}
