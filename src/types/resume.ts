export type Tier = "principal" | "staff" | "senior";

export interface TierWeight {
  tier: Tier;
  include: boolean;
  emphasis?: "lead" | "support";
}

export interface StructuredHighlight {
  id: string;
  context: string;
  action: string;
  result: string;
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
