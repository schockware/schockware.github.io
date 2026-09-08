# Project conventions

This file is the shared baseline copied into every solution repo by
`standards/scaffold.ps1`. Add project-specific detail below the line
marked for it — don't rewrite the shared sections here; change them
in `standards/base/CLAUDE.md` so future scaffolds pick up the update.

## Structure

- Technical specs and design docs live in `specs/` and `design/` at
  the repo root, next to the code they describe.
- Domain/business detail (career history, private notes) never lives
  in this repo — it stays in the separate, gitignored `history/`
  workspace and is not referenced from here.

## Conventions

- Commit messages: imperative mood, one-line summary under 70 chars,
  body explains *why* not *what*.
- No dead code, no commented-out blocks, no speculative abstractions
  for hypothetical future requirements.
- Comments explain non-obvious *why*, never *what* — well-named code
  should make the *what* self-evident.

## Shared design tokens

CSS custom properties in `tokens.css` (copied from `standards/base/`)
are the single source of truth for color/type/spacing/radius across
both the React+MUI and Vue+Vuetify stacks. Framework theme objects
(MUI `theme.palette`, Vuetify `theme.colors`) should read from these
variables rather than hardcoding values, so a token update in
`standards/base/tokens.css` can be pulled into every solution without
drift.

Tokens are not synced automatically (see the repo structure decision:
copy-once scaffolding, not submodules). Before manually pulling a
`tokens.css` update from `standards/base/` into this repo, read
`standards/base/TOKENS_CHANGELOG.md` — it lists every renamed or
removed variable since the last pull, with the mechanical
find-and-replace needed to apply each one. Do not assume a variable
that disappeared from `tokens.css` was simply deleted without a
replacement; check the changelog first.

<!-- Project-specific detail below this line -->
