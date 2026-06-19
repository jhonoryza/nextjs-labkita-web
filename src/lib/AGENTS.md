# AGENTS.md — src/lib

## Purpose

Core utilities, data fetching helpers, and local product definitions used across the application.

## Ownership

- `utils.ts`: `cn()` class merging utility (clsx + tailwind-merge)
- `products.ts`: `getProducts()` fetches from API with local fallback; `getLocalProduct()` by ID
- `local-products.ts`: 4 hardcoded ProductProps entries (fallback when API unreachable)

## Local Contracts

### `cn(...inputs)`

- Wraps `clsx` + `tailwind-merge` for conditional class merging
- Import pattern: `import { cn } from "@/lib/utils"`

### `getProducts(): Promise<ProductProps[]>`

- Fetches from `${API_URL}/api/products`
- Merges API response `json.data` with `localProducts`
- Falls back to `localProducts` on network error

### `getLocalProduct(id: number): ProductProps | undefined`

- Looks up a product by `id` from `localProducts`
- Used for direct local access (no API call)

### `localProducts`

- Array of 4 products (Bot Chat YouTube, Config Opener, Sublime Supermaven Plugin, Open API)
- IDs 5-8 (API products occupy IDs 1-4)

## Work Guidance

- Keep utility functions pure and side-effect-free
- `cn()` usage is required in all UI components for class merging
- `products.ts` is the single entry point for product data across pages
- When adding local products, follow `ProductProps` type in `@/props/product`
- Do not import API client libraries; use native `fetch`

## Verification

- `npm run lint` from project root
- `npm run build` catches type errors
- Manual: verify product listing/detail pages render correctly with/without API

## Child DOX Index

No child DOX files. Each module is a single file with clear responsibility.
