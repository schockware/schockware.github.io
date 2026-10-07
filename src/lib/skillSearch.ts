import { skillSynonyms } from "../data/resume/skillSynonyms";
import { featureOwnershipHighlightIds } from "../data/resume/curations";
import type { Curation, Position, StructuredHighlight, Tier, TierNarrative } from "../types/resume";

// Every lookup in canonicalizeSkill lowercases its input first, so the
// canonical form must be registered under its lowercased spelling too --
// otherwise a keyword that literally matches the canonical string (e.g.
// "SQL Server" in positions.ts) resolves to a different canonical value
// than an alias like "mssql" does, and the two never match each other.
const canonicalByAlias = new Map<string, string>();
for (const [canonical, aliases] of Object.entries(skillSynonyms)) {
  canonicalByAlias.set(canonical.toLowerCase(), canonical);
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

/**
 * Resolves the context/action/result a given tier should actually see,
 * falling back field-by-field to the highlight's default narrative when a
 * tier has no override -- so a highlight can override just e.g. `action`
 * without having to restate `context`/`result` too.
 */
export function resolveNarrative(highlight: StructuredHighlight, tier: Tier): Required<TierNarrative> {
  const override = highlight.narrative?.[tier];
  return {
    context: override?.context ?? highlight.context,
    action: override?.action ?? highlight.action,
    result: override?.result ?? highlight.result,
  };
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

export interface PositionTierMatch {
  position: Position;
  // "brief" positions render as a single Earlier-Experience line with no
  // highlight cards, so `highlights` is always empty for them -- kept on
  // the match (rather than filtered out) so a brief position still shows
  // up on the resume at all, just compressed. See Position.resumeDetail.
  detail: "full" | "brief";
  highlights: Array<{
    highlight: StructuredHighlight;
    emphasis: "lead" | "support";
    narrative: Required<TierNarrative>;
  }>;
}

function curatedEmphasis(
  highlight: StructuredHighlight,
  tier: Tier,
  curation: Curation,
): "lead" | "support" | null {
  if (curation === "feature-ownership") {
    return featureOwnershipHighlightIds.has(highlight.id) ? "lead" : null;
  }
  const weight = highlight.tiers.find((t) => t.tier === tier);
  return weight?.include ? (weight.emphasis ?? "support") : null;
}

/**
 * Groups a tier's highlights under one card per Position (in positions.ts's
 * chronological order) instead of one card per highlight -- so
 * title/employer/dates render once per role, not once per highlight.
 * Lead-before-support ordering is scoped within each position's own
 * highlights rather than flattened across the whole tier, so a support-tier
 * highlight at someone's current role doesn't get displaced behind a
 * lead-tier highlight from an older one.
 *
 * Positions marked `resumeDetail: "brief"` skip highlight filtering
 * entirely and always surface (unless a skill query is active, in which
 * case they're skipped -- a skill search should only surface positions
 * that actually demonstrate the queried skill, not every older role by
 * default) so the resume stays printable instead of showing full STAR
 * detail for a 15+ year career. The "feature-ownership" curation promotes a
 * brief position to full when it has a curated highlight, since those
 * stories are the point of that view.
 */
export function groupTierHighlightsByPosition(
  positions: Position[],
  tier: Tier,
  rawQuery: string,
  curation: Curation = "advanced-highlights",
): PositionTierMatch[] {
  const canonicalTerms = parseSkillQuery(rawQuery);
  const groups: PositionTierMatch[] = [];
  for (const position of positions) {
    const highlights: PositionTierMatch["highlights"] = [];
    for (const highlight of position.highlights) {
      const emphasis = curatedEmphasis(highlight, tier, curation);
      if (!emphasis) continue;
      if (!highlightMatches(highlight, canonicalTerms)) continue;
      highlights.push({ highlight, emphasis, narrative: resolveNarrative(highlight, tier) });
    }
    const isBrief = (position.resumeDetail ?? "full") === "brief";
    if (isBrief && (curation === "advanced-highlights" || highlights.length === 0)) {
      const hasIncludedHighlight = position.highlights.some((h) => h.tiers.find((t) => t.tier === tier && t.include));
      if (!hasIncludedHighlight || canonicalTerms.length > 0) continue;
      groups.push({ position, detail: "brief", highlights: [] });
      continue;
    }
    if (highlights.length === 0) continue;
    highlights.sort((a, b) => (a.emphasis === b.emphasis ? 0 : a.emphasis === "lead" ? -1 : 1));
    groups.push({ position, detail: "full", highlights });
  }
  return groups;
}
