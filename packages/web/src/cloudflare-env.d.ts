// Bindings declared in wrangler.jsonc. Kept loose so the browser tsconfig
// (DOM types) can typecheck the shared API types without pulling in
// @cloudflare/workers-types; the worker tsconfig gets the full types.
declare namespace Cloudflare {
  interface Env {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    DB: any;
    ASSETS: { fetch(request: Request): Promise<Response> };
    /** Secrets for enquiry emails — set in the Cloudflare dashboard. */
    RESEND_API_KEY?: string;
    NOTIFY_TO?: string;
    NOTIFY_FROM?: string;
  }
}
interface Env extends Cloudflare.Env {}
declare module "cloudflare:workers" {
  export const env: Cloudflare.Env;
}
