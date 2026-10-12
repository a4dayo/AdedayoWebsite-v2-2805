# adedayoawojobi.com

Dayo Awojobi's portfolio site. React + Vite front end, a small Hono/oRPC API for the
Work With Me form, deployed as a single **Cloudflare Worker** with static assets and a
**D1** database (`enquiries` table).

## Commands (from the repo root)

| Command | What it does |
|---|---|
| `bun install` | Install dependencies |
| `bun run dev` | Build, apply migrations to a local D1, serve on http://localhost:8787 |
| `bun run build` | Typecheck + production build into `packages/web/dist` |
| `bun run deploy` | Build and deploy to Cloudflare (`wrangler deploy`) |
| `bun run db:generate` | Generate a SQL migration after editing `src/api/database/schema.ts` |
| `bun run db:migrate:remote` | Apply pending migrations to the production D1 |

## Where things live

- Pages: `packages/web/src/web/pages/` — home, services, experience, portfolio, insights, work-with-me
- Service lines, form options: `packages/web/src/shared/services.ts`
- Worker entry (API + assets, www → apex redirect): `packages/web/src/worker.ts`
- Cloudflare config: `packages/web/wrangler.jsonc`

## Reading enquiries

Cloudflare dashboard → Storage & Databases → D1 → `adedayoawojobi` → Console:

```sql
SELECT created_at, name, email, organisation, engagement, budget, timeline, message
FROM enquiries ORDER BY id DESC;
```

Originally scaffolded on Runable; moved to Cloudflare in October 2026.
