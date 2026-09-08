export type Tier = "principal" | "staff" | "senior";

export interface TierWeight {
  tier: Tier;
  include: boolean;
  emphasis?: "lead" | "support";
}

export interface TierNarrative {
  context?: string;
  action?: string;
  result?: string;
}

export interface StructuredHighlight {
  id: string;
  // Fallback/default narrative, used when a tier has no entry in `narrative`.
  context: string;
  action: string;
  result: string;
  // Per-tier overrides -- lets the same underlying achievement read at the
  // altitude each audience actually scans for (org-level lever vs. task
  // completion) instead of sharing one paragraph across all three filters.
  narrative?: Partial<Record<Tier, TierNarrative>>;
  keywords: string[];
  tiers: TierWeight[];
}

export interface Position {
  id: string;
  employer: string;
  title: string;
  start: string;
  end: string | "present";
  highlights: StructuredHighlight[];
}
