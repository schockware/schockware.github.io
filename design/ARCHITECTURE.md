# Site architecture

Decision record for `git-hub-website`'s structure, informed by the resume-framework
decision in `specs/extensions/RESUME_FRAMEWORK_CHOICE.md` and the ATS guidance in
`specs/extensions/ATS.md`. This doc covers what those specs don't: the data model, page
structure, skill search, build/deploy target, and accessibility approach.

# Deploy Target
This repo **is** `schockware.github.io` — the GitHub user page, not a project page. That
means:

- Pages serves from this repo's root at the apex URL (`https://schockware.github.io/`),
  no subpath. Vite `base` stays `/` (the default) — no `base: '/git-hub-website/'`
  rewriting needed anywhere.
- Build output (`dist/`) is not committed directly to a served branch by hand; a GitHub
  Actions workflow (`actions/deploy-pages`) builds on push to `main` and publishes `dist/`
  as the Pages artifact. This avoids maintaining a separate `gh-pages` branch with
  committed build output.
- `index.html` at the repo root is the Vite-generated entry point, not a hand-written
  redirect stub — Vite's default build already emits it at the root of `dist/`, and
  because this is a user page at `/` with no subpath, no `404.html`-based SPA-redirect
  trick is needed for the root route itself. It **is** still needed for deep-link
  refreshes on client-side routes (see Routing).

# Data Model
Single shared dataset, not three separate resume datasets. The three tiers (Principal /
Staff / Senior) are **views over the same facts** — same positions, same underlying
highlights — that differ in which highlights they surface and how much of each they show,
not in what happened. This directly serves the skill-search requirement: a skill filter
needs one dataset to search over, not three independently-maintained copies that can drift.

```ts
// src/types/resume.ts

interface StructuredHighlight {
  id: string;                // stable id, used for cross-tier reference & search results
  context: string;           // STAR Situation+Task, per RESUME_FRAMEWORK_CHOICE.md
  action: string;            // STAR Action
  result: string;            // STAR Result, quantified where possible
  keywords: string[];        // ATS-facing terms, rendered as visible chips (ATS.md)
  tiers: TierWeight[];       // which tier(s) surface this highlight, and how
}

interface TierWeight {
  tier: 'principal' | 'staff' | 'senior';
  include: boolean;          // false = this tier omits the highlight entirely
  emphasis?: 'lead' | 'support'; // lead = prioritized/expanded; support = compressed or listed briefly
}

interface Position {
  id: string;
  employer: string;
  title: string;             // actual title held; tier pages may relabel in copy, not here
  start: string;              // ISO date, "YYYY-MM"
  end: string | 'present';
  highlights: StructuredHighlight[];
}

// src/data/resume/positions.ts
export const positions: Position[];
```

A tier page filters `positions` down to highlights where `tiers` includes that tier with
`include: true`, sorts `lead` before `support`, and renders accordingly. Adding a 4th tier
later means adding one more `TierWeight` per highlight, not a new dataset — but no 4th tier
is planned now, so nothing beyond the union type accommodates it.

## Synonym-aware skill search
Skill matching needs to treat e.g. "JS" and "JavaScript" as the same skill, so `keywords`
alone (exact strings) isn't enough for the search/filter feature. A separate synonym map
sits beside the data, not inside each highlight (avoids repeating synonym lists per
highlight):

```ts
// src/data/resume/skillSynonyms.ts
export const skillSynonyms: Record<string, string[]> = {
  javascript: ['js', 'ecmascript'],
  typescript: ['ts'],
  // canonical key -> alternate forms a user might type
};
```

Search normalizes both the query and each highlight's `keywords` through this map to a
canonical form before matching (case-insensitive). A highlight matches a query term if any
of its keywords' canonical forms equal the query term's canonical form.

This map will need real entries for the user's actual skill set — populate it from the
positions data once that's authored, rather than guessing a broad list up front.

# Pages & Routing
- `/` — landing page: brief intro, links to the three resume tiers, CV, and skill search.
- `/resume/:tier` — one of `principal` / `staff` / `senior`. Renders `positions` filtered
  and ordered per that tier's `TierWeight`s. Each page includes the inline skill-filter
  control (see below) scoped to that tier's own content.
- `/cv` — full chronological CV, unaffected by tier weighting per
  `RESUME_FRAMEWORK_CHOICE.md` ("CV Stays Separate"). Shows all positions/highlights
  regardless of `tiers`, in the CV's existing Summary-through-Affiliations structure.
- `/skills` — dedicated skill search page: a text input (comma-separated terms) filtering
  across *all* positions/tiers at once, showing which tier(s) and position each matching
  highlight belongs to, so a visitor can find where a specific skill shows up without
  picking a tier first.

Client-side routing (React Router) means a hard refresh on `/resume/staff` needs the
standard GitHub Pages SPA fallback: `404.html` that redirects to `/index.html` preserving
the path (the well-known `spa-github-pages` redirect snippet), since GitHub Pages has no
server-side rewrite rules of its own.

## Inline per-resume filter vs. `/skills` page
Both consume the same filter function over the same dataset; they differ only in scope and
result presentation:

- Inline (`/resume/:tier`): input already scoped to that tier's filtered highlight set;
  filters what's on screen down further (hide positions/highlights not matching), doesn't
  navigate away.
- `/skills`: input scoped to the full dataset across all tiers; results list which
  position + which tier(s) each hit belongs to, since there's no single tier context.

Implement the matching/normalization logic once (`src/lib/skillSearch.ts`) and use it from
both the inline filter component and the `/skills` page — not two parallel implementations.

# Accessibility (WCAG)
Target WCAG 2.1 AA, MUI's default component behavior gets a large share of this for free
(focus management, ARIA roles on interactive components) but still needs explicit
attention to:

- **Color contrast** — `standards/base/tokens.css` values must be checked against WCAG AA
  contrast ratios (4.5:1 normal text, 3:1 large text/UI components) once real colors are
  chosen, not just copied from the placeholder token values. Check this before final theme
  colors are picked, not after.
- **Keyword chips** are the one custom-ish visual element (per `ATS.md` / the framework
  decision doc, keywords render as visible chips) — ensure they're real text (not
  background-image/icon-only) so they're both screen-reader- and ATS-parser-visible; this
  also happens to serve the ATS parsing goal directly.
- **Skill filter inputs** need a visible, programmatically-associated `<label>` (not
  placeholder-only text), and filtered-out content should be removed from the accessibility
  tree (not just visually hidden) so screen reader users don't have to tab through hidden
  results.
- **Tier navigation** (landing page links to the 3 resumes + CV + skills) should be a real
  `<nav>` with a labelled landmark, keyboard-operable, current-page indicated via
  `aria-current`.
- **Route changes** (React Router) should move focus to the new page's heading on
  navigation and update the document title, so screen reader / keyboard users get the same
  "you've navigated" signal sighted mouse users get from the visual change.
- Run axe DevTools or `@axe-core/react` in dev, and a manual keyboard-only pass (tab
  through every page, operate the skill filter without a mouse), before calling any page
  done.

# Open Items Not Yet Decided
- Exact color palette / token values (currently placeholders in `standards/base/tokens.css`)
  — needs a contrast check per the Accessibility section above once chosen.
- Actual `positions`/highlight content — this doc defines the shape; the content itself is
  domain/career data and gets authored from `history/` material, not written here (per the
  repo-structure decision, `history/` itself is never referenced from or copied into this
  repo — content gets manually transcribed/adapted into `src/data/resume/positions.ts`, not
  pulled programmatically).
- Final `skillSynonyms` entries — populate once real skill keywords are known from authored
  content.
