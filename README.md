# @souljorje/utils

Reusable zero-dependency TypeScript utilities for real-life projects

- Small, framework-agnostic utility helpers
- ESM-first TypeScript library
- Focus on pure, side-effect-free logic
- Tested with Bun, including DOM-oriented helpers via Happy DOM

## Install

```bash
bun add @souljorje/utils
```

```bash
npm install @souljorje/utils
```

```bash
pnpm add @souljorje/utils
```

## Quick start

```ts
import { binarySearch, getDateDiff, uniq } from '@souljorje/utils'

const index = binarySearch([1, 2, 4, 8], 4) // 2
const relative = getDateDiff(Date.now() - 30_000, { short: true }) // 30 sec ago
const unique = uniq([1, 1, 2, 3]) // [1, 2, 3]
```

## Development

```bash
bun install
bun run build
bun run lint
bun run test
bun run coverage
bun run validate
```

## Commit & Pull Request Guidelines

Follow the [Conventional Commits v1.0.0](https://www.conventionalcommits.org/en/v1.0.0/).

- Format: type(scope): summary
- Types: feat, fix, docs, style, refactor, test, chore
- Examples:
  - feat(product): add product detail page
  - fix(auth): handle token refresh edge case

## License

MIT
