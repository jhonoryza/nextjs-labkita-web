# AGENTS.md — src/app/api

## Purpose

BFF (Backend For Frontend) proxy layer between the Next.js frontend and the external Labkita API gateway at `API_URL`. Handles captcha generation, contact form email, product data proxy, and engineer profile proxy.

## Ownership

- **`captcha/route.tsx`**: GET — math captcha, stored via iron-session
- **`contact/route.tsx`**: POST — validates captcha, sends email via nodemailer
- **`products/route.tsx`**: GET — proxies product list from external API
- **`products/[slug]/route.tsx`**: GET — proxies single product by slug
- **`profile/route.tsx`**: GET — proxies engineer profile from external API

## Local Contracts

- iron-session for captcha state (cookies); password + cookie name from env
- nodemailer SMTP transport for contact email (settings from env)
- All proxy routes forward to `${API_URL}/api/{path}`
- No direct database access; no internal state beyond session

### Env Dependencies

| Var | Used By |
|-----|---------|
| `API_URL` | products, profile |
| `COOKIE_SECRET`, `COOKIE_NAME` | captcha, contact |
| `MAIL_HOST`, `MAIL_PORT`, `MAIL_TLS` | contact |
| `MAIL_USERNAME`, `MAIL_PASSWORD` | contact |
| `MAIL_FROM_NAME`, `MAIL_FROM_ADDRESS`, `MAIL_TO` | contact |

## Work Guidance

- Route files use `.tsx` extension (Next.js convention for this project)
- Return `Response.json()` for all responses
- Proxy routes: catch errors, log, return undefined (no error response sent to client on API failure — client handles fallback)
- Captcha: generate math question, store answer in session, return question text
- Contact: validate captcha first, then compose HTML email, send via nodemailer
- Do not expose env secrets in responses or logs

## Verification

- `npm run lint` from project root
- Manual: hit each route and verify response shape

## Child DOX Index

No child DOX files. Each route is a single file with clear purpose.
