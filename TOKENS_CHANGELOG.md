# Token changelog

Every change to `tokens.css` that renames, removes, or repurposes a
variable gets an entry here — newest first. This is what an AI agent
or a junior dev should check when a solution repo's copy of
`tokens.css` is older than `standards/base/tokens.css` and a rename
would otherwise look like a silent breaking change.

Rules for editing `tokens.css`:

1. Never delete a variable outright in the same change that a
   consumer might still reference. Rename or remove it, and add an
   entry below in the same commit.
2. Every entry must give the **old name**, the **new name** (or
   `removed` with no replacement), the **reason**, and the **date**.
3. When renaming, keep the old variable as an alias for one release
   cycle where practical (`--color-danger: var(--color-error);`),
   and mark it deprecated in a comment in `tokens.css` pointing back
   to this file.
4. To apply an update to an existing solution repo: diff your local
   `tokens.css` against `standards/base/tokens.css`, then walk the
   entries below between your last-pulled date and now, applying
   each rename as a find-and-replace across the repo before deleting
   the deprecated alias.

## Format

```
### YYYY-MM-DD — <old-token-name>
- Replacement: <new-token-name> | removed, no replacement
- Reason: <why>
- Migration: <mechanical steps, e.g. "find-and-replace var(--old) with var(--new)">
```

## Log

<!-- No changes yet. Add entries above this line, newest first, as tokens.css evolves. -->
