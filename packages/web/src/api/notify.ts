import { env } from "cloudflare:workers";

export interface EnquiryNotice {
  id: number | null;
  name: string;
  email: string;
  organisation: string | null;
  engagement: string;
  budget: string;
  timeline: string;
  message: string;
}

const escape = (s: string) =>
  s.replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" })[c]!);

/**
 * Emails a new Work With Me enquiry via Resend.
 * Needs two Worker secrets (set in the Cloudflare dashboard, never in the repo):
 *   RESEND_API_KEY — a Resend API key with sending access
 *   NOTIFY_TO      — where enquiries are delivered
 * Optional NOTIFY_FROM overrides the sender (must be on a Resend-verified domain).
 * Never throws: a failed email must not lose or fail the submission, which is
 * already saved in D1.
 */
export async function notifyEnquiry(e: EnquiryNotice): Promise<void> {
  const apiKey = env.RESEND_API_KEY;
  const to = env.NOTIFY_TO;
  if (!apiKey || !to) {
    console.warn("[notify] RESEND_API_KEY or NOTIFY_TO not set — enquiry saved but not emailed");
    return;
  }
  const from = env.NOTIFY_FROM || "adedayoawojobi.com <enquiries@contact.adedayoawojobi.com>";

  const rows: [string, string][] = [
    ["Name", e.name],
    ["Email", e.email],
    ["Company", e.organisation || "—"],
    ["Service", e.engagement],
    ["Budget", e.budget],
    ["Start", e.timeline],
  ];
  const html = `<div style="font-family:Arial,sans-serif;font-size:14px;color:#0f1b14">
<p style="margin:0 0 12px">New enquiry from the Work With Me form${e.id ? ` (#${e.id})` : ""}.</p>
<table cellpadding="6" style="border-collapse:collapse">${rows
    .map(([k, v]) => `<tr><td style="color:#4a5551;vertical-align:top">${k}</td><td>${escape(v)}</td></tr>`)
    .join("")}</table>
<p style="margin:16px 0 4px;color:#4a5551">Project goal</p>
<p style="margin:0;white-space:pre-wrap">${escape(e.message)}</p>
<p style="margin:20px 0 0;color:#4a5551;font-size:12px">Reply to this email to answer ${escape(e.name)} directly.</p>
</div>`;
  const text = `New enquiry from the Work With Me form${e.id ? ` (#${e.id})` : ""}\n\n${rows
    .map(([k, v]) => `${k}: ${v}`)
    .join("\n")}\n\nProject goal:\n${e.message}\n`;

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: e.email,
        subject: `New enquiry: ${e.name} — ${e.engagement}`,
        html,
        text,
      }),
    });
    if (!res.ok) console.error("[notify] Resend error", res.status, await res.text());
  } catch (err) {
    console.error("[notify] Resend request failed", err);
  }
}
