import { useMemo, useState } from "react";
import { Navigate, useParams, useSearchParams } from "react-router-dom";
import { Typography, Stack, Box } from "@mui/material";
import { positions } from "../data/resume/positions";
import { tierSummaries } from "../data/resume/summaries";
import { groupTierHighlightsByPosition } from "../lib/skillSearch";
import { ClassicResume } from "../components/ClassicResume";
import { EventFocusedResume } from "../components/EventFocusedResume";
import { ResumeOptions } from "../components/ResumeOptions";
import { SkillFilterField } from "../components/SkillFilterField";
import { PrintButton } from "../components/PrintButton";
import { ContactHeader } from "../components/ContactHeader";
import type { Curation, ResumeFormat, Tier } from "../types/resume";

const VALID_TIERS: Tier[] = ["principal", "staff", "senior"];
const TIER_LABEL: Record<Tier, string> = {
  principal: "Principal Software Engineer",
  staff: "Staff Software Engineer",
  senior: "Senior Software Engineer",
};

const FORMATS: ResumeFormat[] = ["event-focused", "classic"];
const CURATIONS: Curation[] = ["advanced-highlights", "feature-ownership"];

export function ResumePage() {
  const { tier } = useParams<{ tier: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  const [skillQuery, setSkillQuery] = useState("");
  const validTier = tier && VALID_TIERS.includes(tier as Tier) ? (tier as Tier) : null;

  // Held in the URL (defaults omitted) so a chosen variant survives refresh
  // and can be linked to directly.
  const formatParam = searchParams.get("format") as ResumeFormat;
  const curationParam = searchParams.get("curated") as Curation;
  const format = FORMATS.includes(formatParam) ? formatParam : FORMATS[0];
  const curation = CURATIONS.includes(curationParam) ? curationParam : CURATIONS[0];

  const setOption = (key: "format" | "curated", value: string, fallback: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (value === fallback) next.delete(key);
        else next.set(key, value);
        return next;
      },
      { replace: true },
    );
  };

  const groups = useMemo(
    () => (validTier ? groupTierHighlightsByPosition(positions, validTier, skillQuery, curation) : []),
    [validTier, skillQuery, curation],
  );

  if (!validTier) {
    return <Navigate to="/" replace />;
  }

  const isClassic = format === "classic";
  const Body = isClassic ? ClassicResume : EventFocusedResume;

  return (
    <Stack spacing={3} className="print-page" sx={{ p: 4, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
        <Stack spacing={1} sx={isClassic ? { flex: 1, alignItems: "center" } : undefined}>
          <ContactHeader centered={isClassic} />
          <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
            {TIER_LABEL[validTier]} resume
          </Typography>
        </Stack>
        <PrintButton />
      </Box>
      <Box className="no-print">
        <Stack spacing={2}>
          <ResumeOptions
            format={format}
            curation={curation}
            onFormatChange={(value) => setOption("format", value, FORMATS[0])}
            onCurationChange={(value) => setOption("curated", value, CURATIONS[0])}
          />
          <SkillFilterField
            id="resume-skill-filter"
            label="Filter by skill"
            value={skillQuery}
            onChange={setSkillQuery}
          />
        </Stack>
      </Box>
      {groups.length === 0 ? (
        <Typography>No highlights match that skill filter.</Typography>
      ) : (
        <Body summary={tierSummaries[validTier]} groups={groups} />
      )}
    </Stack>
  );
}
