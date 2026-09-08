# Synopsis
`specs/extensions/{STAR,CAR,PAR,SOARA}.md` describe four related bullet-writing frameworks.
This site's resume pages (`/resume/:tier`) use exactly one of them — **STAR** — for every
bullet, rather than switching frameworks per audience or per route. This doc is the decision
record for why, kept deliberately visible rather than folded away, because the reasoning is
itself a small piece of portfolio evidence: it shows a design choice made from real feedback
rather than personal preference, and a willingness to document *why* a critique landed
instead of either dismissing it or complying silently.

# The Decision
**Resume bullets are authored STAR-shaped: a stated Context (Situation+Task), an Action that
carries most of the weight, and a quantified Result.** No CAR/PAR compression pass, no SOARA
Aftermath as a resume-wide requirement, no per-route framework switching.

`StructuredHighlight` (`src/types/resume.ts`) stays the same shape it already is
(`context`/`action`/`result`/`keywords`) — this decision affects how that shape is
*authored*, not the data model.

# Why STAR, Specifically
This resume was reviewed by a human recruiter-level reviewer and critiqued for lacking
STAR-like structure — bullets read as action/result without enough situational context. That
critique is real, first-party evidence about how at least one real gatekeeper reads resumes,
which outweighs any of our own a priori reasoning about which framework is "best":

- Early-stage resume review in EdTech (and many industries) commonly runs through
  non-technical recruiting staff working from a checklist/rubric, often trained on STAR
  specifically because that's the standard behavioral-interview framework taught in
  recruiter onboarding. That rubric gets applied to resume screening even though STAR is
  nominally an interview-answer format, not a resume-bullet format — see
  `specs/extensions/ATS.md`'s note that this first pass is largely bureaucratic/checklist-
  driven, not a nuanced read.
- STAR's Context beat is a superset of CAR's Context and PAR's Problem — a STAR-shaped
  bullet still reads as complete to a CAR- or PAR-trained eye, but a CAR/PAR-compressed
  bullet (Context dropped or reduced to a fragment) can read as *missing* context to a
  STAR-trained eye, which is exactly the failure mode the original critique described. STAR
  is the safer default against an unknown reviewer's rubric because it's the more inclusive
  shape, not because it's objectively superior to its cousins.
- This does not generalize to "the organization prefers STAR" as a standing institutional
  policy — see the discussion this doc is drawn from. It generalizes to "the known first
  gate in this kind of pipeline rewards STAR's fuller shape," which is a narrower and more
  defensible claim.

# What This Doc Explicitly Rejects
Considered and dropped, worth recording so the reasoning isn't re-litigated from scratch
later:

- **Per-audience lens routes** (e.g. `/resume/:tier/scan` for a CAR/PAR-compressed
  recruiter view, `/resume/:tier/deep` for a SOARA-flavored technical-panel view). Dropped
  once real feedback showed the compression direction (CAR/PAR) was the thing actively
  penalized, not merely unnecessary — building a lens whose whole purpose is to be *more*
  compressed than the version that already got critiqued for being under-contextualized
  would be solving the wrong problem.
- **Picking a framework to satisfy a probabilistic "majority preference."** No such majority
  exists to poll — see the discussion this doc is drawn from for why organizations don't
  standardize on a bullet-writing framework the way they standardize on, say, an ATS vendor.
  The actual basis for this decision is the one piece of direct evidence available (the
  critique), not an estimate of aggregate preference.

# Keyword Visibility Stays a Styling Concern, Not a Framework Choice
`ATS.md`'s keyword-matching guidance (`keywords` on `StructuredHighlight`) still applies
regardless of framework — STAR vs. CAR vs. PAR is about bullet *structure*, keyword coverage
is a separate, orthogonal requirement. Practically: keep `keywords` populated per highlight
per `ATS.md`'s guidance, and render them as visible chips (already how `CvPage.tsx` and
`ResumeTemplate.tsx` show `tech`) so a human reviewer can see coverage at a glance without
needing a separate dense-scan rendering mode to surface it.

# CV Stays Separate, Unaffected by This Decision
`/cv` is not in scope here and should not adopt STAR-shaping. A CV's job is comprehensive,
chronological documentation for a reader who wants completeness (search committee,
principal-level technical panel), not persuasive compression for a reader being sold on one
specific role — see `CvPage.tsx`'s existing structure (Summary through Affiliations), which
is already correct for that purpose and needs no framework applied to it. Where an
`aftermath`-style reflective beat (SOARA's distinguishing addition) is naturally authored for
a given highlight, it can render wherever present — CV or resume — without requiring a
dedicated route or lens to gate it; see `SOARA.md`.

# Appendix
## Sources
- `specs/extensions/STAR.md`, `CAR.md`, `PAR.md`, `SOARA.md` — the frameworks compared here.
- `specs/extensions/ATS.md` — keyword-matching guidance, orthogonal to this decision.
- `src/types/resume.ts` — `StructuredHighlight`, the data shape this decision governs the
  authoring of.
