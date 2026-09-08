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
  // "brief" positions render as a single title/employer/dates line under an
  // "Earlier Experience" heading on the resume, with no highlight cards --
  // keeps the tier-filtered resume to a printable length instead of showing
  // full STAR detail on every position ever held. Defaults to "full" when
  // omitted. CV ignores this and always shows every position in full.
  resumeDetail?: "full" | "brief";
}

// CV-only content below -- none of this is tier-filtered or STAR-shaped;
// it exists to fill out the "comprehensive record" sections a CV needs
// that a resume deliberately omits (RESUME_FRAMEWORK_CHOICE.md, "CV Stays
// Separate"). Not used by ResumePage.

export type SkillCategory =
  | "Languages"
  | "Frameworks & Libraries"
  | "Data & Reporting"
  | "Cloud & Infrastructure"
  | "Practices & Methodology";

export interface SkillGroup {
  category: SkillCategory;
  skills: string[];
}

export interface Certification {
  name: string;
  year: string;
  note?: string;
}

export interface IndependentProject {
  name: string;
  description: string;
  url: string;
}
