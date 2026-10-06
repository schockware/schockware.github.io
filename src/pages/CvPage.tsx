import { Typography, Stack, Card, CardContent, Box, List, ListItem } from "@mui/material";
import { positions } from "../data/resume/positions";
import { summary, skillGroups, certifications, independentProjects } from "../data/resume/cv";
import { KeywordChips } from "../components/KeywordChips";
import { TechnologySummary } from "../components/TechnologySummary";
import { PrintButton } from "../components/PrintButton";
import { ContactHeader } from "../components/ContactHeader";

// Full chronological CV -- comprehensive record for a reader who wants
// completeness, not persuasive compression for one specific role. Distinct
// in both content (Summary, Core Skills, Certifications, Independent
// Projects -- none of which the tier-filtered resume has) and density
// (one condensed line per highlight instead of full STAR paragraphs).
// See specs/extensions/RESUME_FRAMEWORK_CHOICE.md ("CV Stays Separate")
// and design/ARCHITECTURE.md.
export function CvPage() {
  return (
    <Stack spacing={4} className="print-page" sx={{ p: 4, width: "100%" }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 2 }}>
        <Stack spacing={1}>
          <ContactHeader />
          <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)" }}>
            Curriculum Vitae
          </Typography>
        </Stack>
        <PrintButton />
      </Box>

      <Box component="section">
        <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
          Summary
        </Typography>
        <Typography>{summary}</Typography>
      </Box>

      <Box component="section">
        <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
          Core Skills
        </Typography>
        <Stack spacing={1.5}>
          {skillGroups.map((group) => (
            <Box key={group.category}>
              <Typography color="text.secondary" sx={{ mb: 0.5 }}>
                {group.category}
              </Typography>
              <KeywordChips keywords={group.skills} />
            </Box>
          ))}
        </Stack>
      </Box>

      <Box component="section">
        <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
          Experience
        </Typography>
        {positions.length === 0 ? (
          <Typography>No positions yet.</Typography>
        ) : (
          <Stack spacing={2}>
            {positions.map((position) => (
              <Card key={position.id} variant="outlined">
                <CardContent>
                  <Typography variant="h3" sx={{ fontSize: "var(--font-size-md)" }}>
                    {position.title} &middot; {position.employer}
                  </Typography>
                  <Typography color="text.secondary" sx={{ mb: 1 }}>
                    {position.start} &ndash; {position.end}
                  </Typography>
                  <TechnologySummary technologies={position.technologies} />
                  <List dense sx={{ listStyleType: "disc", pl: 2 }}>
                    {position.highlights.map((highlight) => (
                      <ListItem key={highlight.id} sx={{ display: "list-item", p: 0 }}>
                        <Typography component="span">{highlight.result}</Typography>
                      </ListItem>
                    ))}
                  </List>
                </CardContent>
              </Card>
            ))}
          </Stack>
        )}
      </Box>

      {certifications.length > 0 && (
        <Box component="section">
          <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
            Certifications
          </Typography>
          <Stack spacing={0.5}>
            {certifications.map((cert) => (
              <Typography key={cert.name}>
                {cert.name} ({cert.year}){cert.note ? ` — ${cert.note}` : ""}
              </Typography>
            ))}
          </Stack>
        </Box>
      )}

      {independentProjects.length > 0 && (
        <Box component="section">
          <Typography variant="h2" sx={{ fontSize: "var(--font-size-lg)", mb: 1 }}>
            Independent Projects
          </Typography>
          <Stack spacing={1}>
            {independentProjects.map((project) => (
              <Typography key={project.name}>
                <strong>{project.name}</strong> &mdash; {project.description}{" "}
                <Box component="span" color="text.secondary">
                  {project.url}
                </Box>
              </Typography>
            ))}
          </Stack>
        </Box>
      )}
    </Stack>
  );
}
