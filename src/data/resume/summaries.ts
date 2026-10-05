import type { Tier } from "../../types/resume";

// One summary per resume tier -- same underlying career, different altitude
// of framing, same pattern as StructuredHighlight.narrative overrides.
// Rendered under the tier title on /resume/:tier; not used by CvPage (see
// cv.ts's own `summary`, a single CV-wide paragraph).
export const tierSummaries: Record<Tier, string> = {
  principal:
    "Software engineer who repeatedly takes on the organizational problem that hasn't yet been diagnosed -- a monolithic-database crisis spanning 13 issues, a recurring-outage root cause proven with query-level evidence, a revenue-critical integration stalled for three months. Pattern: build the evidence to prove the root cause, then drive the remediation, tooling, or standards fix at the level the problem actually lives at, not just the symptom in front of me.",
  staff:
    "Software engineer who operates as a force multiplier across teams, not just within one: unblocking a stalled sister team's revenue-critical integration, fixing vendor-documentation drift for two dependent teams, building a diagnostic pipeline that scales expert-level troubleshooting to an entire team instead of staying bottlenecked on one person. Comfortable moving between deep hands-on diagnosis and the cross-team coordination needed to make a fix stick.",
  senior:
    "Software engineer with 15+ years of hands-on delivery across EdTech and fintech/insurance, including co-leading technical recovery from a company-wide ransomware incident and diagnosing a systemic SQL Server crisis with query-level evidence. Consistently dropped into unfamiliar systems and expected to ramp fast, fix what's broken, and mentor whoever's around me while doing it.",
};
