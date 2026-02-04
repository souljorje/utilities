# Utilities

## Goal

Reuse optimized zero-deps real-life utilities across projects.

## Stack

- Language: TypeScript (ESM)
- Build: Bun
- Tests: Bun
- Package manager: Bun

## Conventions

- ALWAYS update AGENTS.md file when facing relevant updates
- Follow ESLint rules from [eslint.config.js](./eslint.config.js).
- Prefer functional and declarative programming patterns
- Keep code framework-agnostic and side-effect-free
- Prefix boolean props/variables with is, has (e.g., isLoading, hasError)

## Do

- ALWAYS install latest stable package version initially
- Use tree-style folder structure in .md files

## Don’t

- NEVER use ` in link titles in .md files

## Common Commands (root)

- `pnpm install`
- `pnpm dev`
- `pnpm build`
- `pnpm test`
- `pnpm lint` / `pnpm lintfix`

## Commit & Pull Request Guidelines

Follow the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

- Format: type(scope): summary
- Types: feat, fix, docs, style, refactor, test, chore
- Examples:
  - feat(product): add product detail page
  - fix(auth): handle token refresh edge case
