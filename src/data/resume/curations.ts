// Highlight ids surfaced by the "Feature Ownership" curation. That curation
// ignores each highlight's per-tier `include` flags in positions.ts and uses
// this list alone; the tier still picks the narrative wording and summary.
// Red Rover, QuoteWizard, and Dealer360 use dedicated feature-ownership
// stories; earlier roles still use existing build-or-rebuild highlights until
// their own stories are written.
export const featureOwnershipHighlightIds: ReadonlySet<string> = new Set([
  "independent-mssql-tooling-generalization",
  "independent-contract-first-showcase",
  "independent-dnd-mcp-server",
  "independent-haskell-polyglot-challenge",
  "independent-ai-interviewer-in-progress",
  "red-rover-time-tracking-v2-front-end",
  "red-rover-rule-explainability",
  "red-rover-absence-vacancy-v2-events",
  "red-rover-sftp-import-resilience",
  "red-rover-mcp-diagnostic-pipeline",
  "qw-elm-front-end-ownership",
  "qw-cosmos-ephemeral-quotes",
  "qw-realtime-and-api-gateway",
  "dps-return-full-lifecycle-delivery",
  "bcit-pangea-auto-ownership",
  "bcit-offline-mode-recovery",
  "bcit-live-reporting",
  "county-court-efile-queue-fix",
  "jeffco-strapp-rebuild",
  "jeffco-internal-platform-build",
  "jeffco-strapp-first-build",
  "dps-eep-rebuild",
]);
