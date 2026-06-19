# AGENTS.md — nextjs-labkita-web

DOX framework is installed. Follow all DOX rules before editing and after changes.

## Purpose

Company website and landing page for Labkita — Indonesian software/IT services brand. Showcases products, apps, engineering team, and contact/sales funnel. Domain: https://labkita.my.id

## Ownership

- **Root**: Project-wide conventions, build config, env vars, deployment
- **`src/app/`**: Next.js App Router pages, layouts, API routes (BFF proxy layer owned by child DOX)
- **`src/components/`**: Feature components (hero, product, apps, engineer, header, footer, page-transition, theme)
- **`src/components/ui/`**: Reusable UI primitive library (owned by child DOX)
- **`src/lib/`**: Utilities, data fetching, local product definitions (owned by child DOX)
- **`src/props/`**: TypeScript type definitions (ProductProps, ProfileProps, PortfolioProps)
- **`src/hooks/`**: Custom React hooks (use-mobile)
- **`public/`**: Static assets (images, favicon, logos)
- **`.env` / `env.example`**: Environment variable definitions

## Local Contracts

### Stack

- Next.js 15.3.1 (App Router), React 19, TypeScript (strict)
- Tailwind CSS v4 + `tailwindcss-animate` + OKLCH custom properties
- Radix UI primitives + class-variance-authority + cn() for UI components
- Framer Motion 12 for page transitions and animations
- Lucide React 0.503 for icons
- iron-session 8 for captcha session storage
- nodemailer 6 for contact form email

### Conventions

- Server components by default; `"use client"` only for interactive parts
- Path alias: `@/*` maps to `./src/*`
- CSS: Tailwind v4 `@theme inline` with OKLCH design tokens in `globals.css`
- UI components: shadcn/ui pattern (Radix + CVA + cn())
- API routes: BFF proxy pattern to `API_URL` external gateway
- Data fetching: `getProducts()` combines API + local fallback
- Env vars: `API_URL`, `COOKIE_*`, `MAIL_*` (see `env.example`)

### Routing

| Path | Type | Description |
|------|------|-------------|
| `/` | SSR | Home: apps, hero grid, stats, CTA |
| `/products` | SSR | Product listing |
| `/products/[slug]` | SSR | Product detail |
| `/about` | SSR | Work with us |
| `/engineers` | SSR | Engineer profile + portfolio |
| `/contacts` | CSR | Contact form with captcha |
| `/policies` | SSR | Privacy Policy |
| `/terms` | SSR | Terms of Service |
| `/cookies` | SSR | Cookie Policy |
| `/alquran` | SSR | Al-Quran app privacy policy (ID) |

### Scripts

- `npm run dev` — dev server
- `npm run build` — production build
- `npm run start` — start production
- `npm run lint` — ESLint

## Work Guidance

- Follow existing component patterns before creating new ones
- Use `cn()` for class merging in all components
- API routes must proxy to external gateway; no direct DB access
- Use `next/font` (Open Sans) for typography
- Light/dark mode via `.dark` class + ThemeProvider context
- Always use `next/link` for client-side navigation

## Verification

- `npm run lint` — ESLint check
- `npm run build` — production build (no TS errors)
- No test framework configured yet

## Child DOX Index

| Path | Scope |
|------|-------|
| `src/app/api/AGENTS.md` | BFF proxy routes: captcha, contact, products, profile |
| `src/components/ui/AGENTS.md` | UI primitive components (shadcn/ui style) |
| `src/lib/AGENTS.md` | Utilities, data fetching, local product data |
