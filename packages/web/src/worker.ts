import app from "./api";

// Full Worker types come from tsconfig.worker.json (@cloudflare/workers-types).

export default {
  fetch(request, env) {
    const url = new URL(request.url);
    // Canonical host: www → apex
    if (url.hostname === "www.adedayoawojobi.com") {
      url.hostname = "adedayoawojobi.com";
      return Response.redirect(url.toString(), 301);
    }
    if (url.pathname.startsWith("/api/")) return app.fetch(request, env);
    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
