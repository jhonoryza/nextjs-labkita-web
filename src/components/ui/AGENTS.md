# AGENTS.md — src/components/ui

## Purpose

Reusable UI primitive library following the shadcn/ui pattern. Atomic, unstyled, accessible components built on Radix UI primitives with Tailwind CSS styling via class-variance-authority.

## Ownership

| Component | Radix Primitive | Variants |
|-----------|----------------|----------|
| `alert.tsx` | — | default, destructive |
| `avatar.tsx` | @radix-ui/react-avatar | — |
| `badge.tsx` | — | default, secondary, destructive, outline |
| `breadcrumb.tsx` | — | — |
| `button.tsx` | @radix-ui/react-slot | default, destructive, outline, secondary, ghost, link; sizes: default, sm, lg, icon |
| `card.tsx` | — | — |
| `checkbox.tsx` | @radix-ui/react-checkbox | — |
| `collapsible.tsx` | @radix-ui/react-collapsible | — |
| `dialog.tsx` | @radix-ui/react-dialog | — |
| `dropdown-menu.tsx` | @radix-ui/react-dropdown-menu | — |
| `icon.tsx` | lucide-react | — |
| `input.tsx` | — | — |
| `label.tsx` | @radix-ui/react-label | — |
| `navigation-menu.tsx` | @radix-ui/react-navigation-menu | — |
| `placeholder-pattern.tsx` | — | — |
| `select.tsx` | @radix-ui/react-select | — |
| `separator.tsx` | @radix-ui/react-separator | — |
| `sheet.tsx` | — | — |
| `sidebar.tsx` | — | — |
| `skeleton.tsx` | — | — |
| `toggle-group.tsx` | @radix-ui/react-toggle-group | — |
| `toggle.tsx` | @radix-ui/react-toggle | — |
| `tooltip.tsx` | @radix-ui/react-tooltip | — |

## Local Contracts

- Pattern: Radix primitives + `cva()` variants + `cn()` class merging
- Styling: Tailwind CSS v4 utility classes only; reference CSS vars from `globals.css`
- Each component is a single file with named export(s)
- `data-slot` attribute on root element for scoped styling
- Forward refs via `React.forwardRef` where applicable
- Props extend `React.ComponentProps<Element>` + `VariantProps` when applicable

## Work Guidance

- Follow shadcn/ui conventions: `cn()` for class merging, `cva()` for variants
- Use existing components before creating new ones
- New components: check if a Radix primitive exists for the pattern
- Keep files focused: one component = one file
- Use `asChild` pattern via `@radix-ui/react-slot` for polymorphic components
- Import `cn` from `@/lib/utils`

## Verification

- `npm run lint` from project root
- No test framework — verify manually in browser or via consuming pages

## Child DOX Index

No child DOX files. Each component is a single file.
