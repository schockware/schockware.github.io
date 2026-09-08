import { useMemo, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { Typography, Stack, Card, CardContent, Box } from "@mui/material";
import { positions } from "../data/resume/positions";
import { tierSummaries } from "../data/resume/summaries";
import { groupTierHighlightsByPosition } from "../lib/skillSearch";
import { KeywordChips } from "../components/KeywordChips";
import { SkillFilterField } from "../components/SkillFilterField";
import { PrintButton } from "../components/PrintButton";
import { ContactHeader } from "../components/ContactHeader";
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

  const groups = useMemo(
    () => (validTier ? groupTierHighlightsByPosition(positions, validTier, skillQuery) : []),
    [validTier, skillQuery],
  );
  // "brief" groups (older/less-relevant positions) render as a single
  // compressed line under "Earlier Experience" instead of a full card, so
  // the resume stays a printable length rather than showing full STAR
  // detail for every position ever held. See Position.resumeDetail.
  const fullGroups = groups.filter((g) => g.detail === "full");
  const briefGroups = groups.filter((g) => g.detail === "brief");

  if (!validTier) {
    return <Navigate to="/" replace />;
  }

  return (
    <Stack spacing={3} className="print-page" sx={{ p: 4, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
        <Stack spacing={1}>
          <ContactHeader />
          <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
            {TIER_LABEL[validTier]} resume
          </Typography>
        </Stack>
        <PrintButton />
      </Box>
      <Typography>{tierSummaries[validTier]}</Typography>
      <Box className="no-print">
        <SkillFilterField
          id="resume-skill-filter"
          label="Filter by skill"
          value={skillQuery}
          onChange={setSkillQuery}
        />
      </Box>
      {groups.length === 0 ? (
        <Typography>No highlights match that skill filter.</Typography>
      ) : (
        <>
          <Stack spacing={2}>
            {fullGroups.map(({ position, highlights }) => (
              <Card key={position.id} variant="outlined">
                <CardContent>
                  <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
                    {position.title} &middot; {position.employer}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {position.start} &ndash; {position.end}
                  </Typography>
                  <Stack spacing={1}>
                    {highlights.map(({ highlight, narrative }) => (
                      <div key={highlight.id}>
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
          {briefGroups.length > 0 && (
            <Box>
              <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
                Earlier Experience
              </Typography>
              <Stack spacing={0.5}>
                {briefGroups.map(({ position }) => (
                  <Typography key={position.id}>
                    {position.title}, {position.employer} ({position.start} &ndash; {position.end})
                  </Typography>
                ))}
              </Stack>
            </Box>
          )}
        </>
      )}
    </Stack>
  );
}
