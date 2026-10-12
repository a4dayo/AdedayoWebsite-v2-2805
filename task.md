# Website restructure — October 2026

Approved six-page architecture, original logo + orange accent, existing editorial typography.

- [x] Read app/web/API skills, current design and affected source files
- [x] Verify Motocare, supplied writing; Kub.Icu / TabPay blocked to automated browsers
- [x] Update design.md with approved direction
- [x] Shared services content and enquiry options
- [x] Logo/header/footer/navigation; route redirects and page metadata
- [x] Home positioning, capabilities, CTA
- [x] Services: six engagement lines, outcomes; no invented duration/pricing
- [x] Experience: preserved career, selected case studies
- [x] Portfolio: five requested startups, known current/previous statuses only
- [x] Insights: outbound TechEconomy article and Substack notes
- [x] Work With Me: seven fields, database/API validation
- [x] Build, desktop/mobile checks, form API test (remove only test record), deliver

Guardrails: preserve analytics/AgentFeedback; badge stays removed. No education, private phone/email, confidential frameworks, deal terms or invented startup metrics. Kub.Icu and TabPay links supplied by owner; avoid unsupported descriptions/results.

## Completed outside Runable — 12 Oct 2026
Runable ran out of credits mid-restructure; finished in a separate session:
- Routes wired for all six pages; /about → /experience, /advisory → /services, /contact → /work-with-me; 404 page; scroll-to-top + #service-N anchors
- Work With Me page: name, email, company, service needed (pre-filled from ?service=), budget, start timeline, project goal
- API + schema: `budget` and `timeline` columns (nullable) — **run `bun run db:push` against the production DB before deploying**
- Old Phase 1 pages (index/about/advisory/contact) removed — content lives in home/experience/services/work-with-me
- index.html title/description/OG updated to the new positioning; og:image absolute
- Verified: lint, typecheck, build; all pages desktop + 390px with no horizontal overflow; form submit end-to-end against a local test DB

## Moved to Cloudflare — 12 Oct 2026
- Single Worker (`packages/web/src/worker.ts`): API on /api/*, static assets + SPA fallback, www → apex 301
- Database: Cloudflare D1 (binding `DB`), migration `packages/web/drizzle/0000_init.sql`
- Removed Runable-only pieces: Bun server, pm2, Turso client, Runable analytics script (would have shown its debug pop-up off-platform), runkit lint → oxlint
- Verified locally on workerd (`wrangler dev`): all pages, redirects, form → D1
- TODO at deploy: create D1 `adedayoawojobi`, put its id in wrangler.jsonc, apply migration, attach adedayoawojobi.com + www as Worker custom domains
