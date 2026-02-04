# Utilities

## Goal

Reuse optimized zero-deps real-life typescript utilities across projects.

## Stack

- Language: TypeScript (ESM)
- Build/Test: Bun
- Package manager: Bun

## Conventions

- ALWAYS update AGENTS.md file when facing relevant updates
- Follow ESLint rules from [eslint.config.js](./eslint.config.js).
- Prefer functional and declarative programming patterns
- Keep code framework-agnostic and side-effect-free
- Prefix boolean props/variables with is, has (e.g., isLoading, hasError)
- Finished task must surpass `validate` script

## Do

- ALWAYS install latest stable package version initially
- Use tree-style folder structure in .md files

## Don’t

- NEVER use ` in link titles in .md files
- NEVER change tests coverage threshhold

## Common Commands (root)

- `bun install`
- `bun run build`
- `bun test`
- `bun run coverage`
- `bun run docs`
- `bun run lint` / `bun run lintfix`
- `bun run validate`

## Validation & Hooks

- Coverage, reporter format, and thresholds are configured in `bunfig.toml`
- Browser-like tests use Happy DOM preload from `happydom.ts` via Bun test config
- Documentation uses nested folders in `/docs` for navigation (e.g. `/docs/guides`, `/docs/api`)

## Commit & Pull Request Guidelines

Follow the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

- Format: type(scope): summary
- Types: feat, fix, docs, style, refactor, test, chore
- Examples:
  - feat(product): add product detail page
  - fix(auth): handle token refresh edge case
