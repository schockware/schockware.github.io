import { skillSynonyms } from "../data/resume/skillSynonyms";
import type { Position, StructuredHighlight, Tier } from "../types/resume";

const canonicalByAlias = new Map<string, string>();
for (const [canonical, aliases] of Object.entries(skillSynonyms)) {
  canonicalByAlias.set(canonical, canonical);
  for (const alias of aliases) {
    canonicalByAlias.set(alias.toLowerCase(), canonical);
  }
}

export function canonicalizeSkill(term: string): string {
  const normalized = term.trim().toLowerCase();
  return canonicalByAlias.get(normalized) ?? normalized;
}

export function parseSkillQuery(raw: string): string[] {
  return raw
    .split(",")
    .map((term) => term.trim())
    .filter(Boolean)
    .map(canonicalizeSkill);
}

function highlightMatches(highlight: StructuredHighlight, canonicalTerms: string[]): boolean {
  if (canonicalTerms.length === 0) return true;
  const highlightTerms = new Set(highlight.keywords.map(canonicalizeSkill));
  return canonicalTerms.every((term) => highlightTerms.has(term));
}

export interface SkillMatch {
  position: Position;
  highlight: StructuredHighlight;
}

/** Every highlight (any tier) whose keywords cover all query terms -- used by the /skills page. */
export function searchAllPositions(positions: Position[], rawQuery: string): SkillMatch[] {
  const canonicalTerms = parseSkillQuery(rawQuery);
  const matches: SkillMatch[] = [];
  for (const position of positions) {
    for (const highlight of position.highlights) {
      if (highlightMatches(highlight, canonicalTerms)) {
        matches.push({ position, highlight });
      }
    }
  }
  return matches;
}

/** Highlights for one tier, filtered further by a skill query -- used inline on /resume/:tier. */
export function filterTierHighlights(
  positions: Position[],
  tier: Tier,
  rawQuery: string,
): SkillMatch[] {
  const canonicalTerms = parseSkillQuery(rawQuery);
  const matches: (SkillMatch & { emphasis: "lead" | "support" })[] = [];
  for (const position of positions) {
    for (const highlight of position.highlights) {
      const weight = highlight.tiers.find((t) => t.tier === tier);
      if (!weight?.include) continue;
      if (highlightMatches(highlight, canonicalTerms)) {
        matches.push({ position, highlight, emphasis: weight.emphasis ?? "support" });
      }
    }
  }
  // lead-emphasis highlights surface before support, per
  // design/ARCHITECTURE.md's tier-weighting model.
  return matches.sort((a, b) => (a.emphasis === b.emphasis ? 0 : a.emphasis === "lead" ? -1 : 1));
}
