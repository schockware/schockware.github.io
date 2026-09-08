# schockware.github.io

Steven Chock's resume site — three role-level-tailored resumes (Principal, Staff, Senior
Software Engineer), a full CV, and a skill search across all of them. Built with React,
TypeScript, and MUI; deployed as a static site to GitHub Pages via GitHub Actions.

See [design/ARCHITECTURE.md](design/ARCHITECTURE.md) for the data model, routing, and
accessibility approach, and [specs/extensions/](specs/extensions/) for the resume
bullet-writing framework decision (STAR) and ATS formatting guidance.

## Stack

- React 18 + TypeScript, scaffolded from `standards/react-mui`
- MUI (Material UI) themed from shared CSS custom properties in `tokens.css`
- React Router (client-side routing, GitHub Pages 404-redirect for deep links)
- Vite (build), ESLint + TypeScript strict mode, Vitest

## Development

```bash
npm install
npm run dev       # local dev server
npm run lint
npm run build      # typecheck + production build to dist/
```

## Content

Resume content lives in `src/data/resume/positions.ts` as a single shared dataset (see
`src/types/resume.ts`) — each highlight declares which tier(s) surface it and how much
emphasis it gets, rather than maintaining three separate resume datasets. Skill synonyms
for search live in `src/data/resume/skillSynonyms.ts`.

Domain/career source material (interview notes, per-role writeups) is **not** in this
repo — it stays in a separate, private, gitignored `history/` workspace and gets manually
synthesized into `positions.ts`, never referenced or copied in programmatically.

## Deployment

Pushing to `main` triggers `.github/workflows/deploy.yml`, which builds the site and
publishes `dist/` to GitHub Pages. This repo *is* the `schockware.github.io` user page, so
it serves at the domain root — no subpath configuration needed.
