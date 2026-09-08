import { skillSynonyms } from "../data/resume/skillSynonyms";
import type { Position, StructuredHighlight, Tier, TierNarrative } from "../types/resume";

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

export interface TierSkillMatch extends SkillMatch {
  emphasis: "lead" | "support";
  narrative: Required<TierNarrative>;
}

/** Highlights for one tier, filtered further by a skill query -- used inline on /resume/:tier. */
export function filterTierHighlights(
  positions: Position[],
  tier: Tier,
  rawQuery: string,
): TierSkillMatch[] {
  const canonicalTerms = parseSkillQuery(rawQuery);
  const matches: TierSkillMatch[] = [];
  for (const position of positions) {
    for (const highlight of position.highlights) {
      const weight = highlight.tiers.find((t) => t.tier === tier);
      if (!weight?.include) continue;
      if (highlightMatches(highlight, canonicalTerms)) {
        matches.push({
          position,
          highlight,
          emphasis: weight.emphasis ?? "support",
          narrative: resolveNarrative(highlight, tier),
        });
      }
    }
  }
  // lead-emphasis highlights surface before support, per
  // design/ARCHITECTURE.md's tier-weighting model.
  return matches.sort((a, b) => (a.emphasis === b.emphasis ? 0 : a.emphasis === "lead" ? -1 : 1));
}
