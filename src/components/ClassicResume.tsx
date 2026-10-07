import { Box, Divider, List, ListItem, Stack, Typography } from "@mui/material";
import { education, skillGroups } from "../data/resume/cv";
import type { PositionTierMatch } from "../lib/skillSearch";
import { EarlierExperience } from "./EarlierExperience";

const font = { fontFamily: 'Cambria, Georgia, "Times New Roman", serif' };
const sectionHeadingSx = { ...font, fontSize: "1.1rem", fontWeight: 700, textTransform: "uppercase", mb: 1 } as const;

const allSkills = skillGroups.flatMap((g) => g.skills).join(", ");

// Conventional layout: uppercase section headings, a flat skills line, and
// per-role bullets (action then result) under an employer/dates row. Context
// and keyword chips are left to the event-focused format.
export function ClassicResume({ summary, groups }: { summary: string; groups: PositionTierMatch[] }) {
  const fullGroups = groups.filter((g) => g.detail === "full");
  const briefGroups = groups.filter((g) => g.detail === "brief");
  return (
    <Stack spacing={2} sx={font}>
      <Divider />
      <Box component="section">
        <Typography variant="h2" sx={sectionHeadingSx}>
          Profile Summary
        </Typography>
        <Typography sx={font}>{summary}</Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" sx={sectionHeadingSx}>
          Skills
        </Typography>
        <Typography sx={font}>{allSkills}</Typography>
      </Box>
      <Box component="section">
        <Typography variant="h2" sx={sectionHeadingSx}>
          Professional Experience
        </Typography>
        <Stack spacing={2}>
          {fullGroups.map(({ position, highlights }) => (
            <Box key={position.id}>
              <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
                <Typography variant="h3" sx={{ ...font, fontSize: "1rem", fontWeight: 700, textTransform: "uppercase" }}>
                  {position.employer}
                </Typography>
                <Typography sx={{ ...font, fontWeight: 700 }}>
                  {position.start} &ndash; {position.end}
                </Typography>
              </Box>
              <Typography sx={{ ...font, fontWeight: 700 }}>{position.title}</Typography>
              <List dense sx={{ listStyleType: "disc", pl: 3 }}>
                {highlights.flatMap(({ highlight, narrative }) =>
                  [narrative.action, narrative.result].map((text, i) => (
                    <ListItem key={`${highlight.id}-${i}`} sx={{ display: "list-item", p: 0 }}>
                      <Typography component="span" sx={font}>
                        {text}
                      </Typography>
                    </ListItem>
                  )),
                )}
              </List>
            </Box>
          ))}
        </Stack>
      </Box>
      <EarlierExperience
        positions={briefGroups.map((g) => g.position)}
        title="Earlier Experience"
        headingSx={sectionHeadingSx}
      />
      <Box component="section">
        <Typography variant="h2" sx={sectionHeadingSx}>
          Education
        </Typography>
        {education.map(({ degree, institution, years }) => (
          <Box key={degree} sx={{ display: "flex", justifyContent: "space-between", gap: 2, flexWrap: "wrap" }}>
            <Box>
              <Typography sx={{ ...font, fontWeight: 700 }}>{institution}</Typography>
              <Typography sx={{ ...font, fontStyle: "italic" }}>{degree}</Typography>
            </Box>
            <Typography sx={font}>{years}</Typography>
          </Box>
        ))}
      </Box>
    </Stack>
  );
}
