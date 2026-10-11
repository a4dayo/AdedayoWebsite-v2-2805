import { useState, type FormEvent } from "react";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Reveal, SectionLabel } from "../components/primitives";
import { useCreateEnquiry } from "../queries/enquiries";

const ENGAGEMENTS = [
  "Advisory retainer",
  "Fractional COO / CPO",
  "Board or NED seat",
  "Corporate consulting",
  "Speaking engagement",
  "Full-time executive role",
  "Something else",
] as const;

type Engagement = (typeof ENGAGEMENTS)[number];

export default function ContactPage() {
  const createEnquiry = useCreateEnquiry();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    engagement: "Advisory retainer" as Engagement,
    message: "",
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (form.message.trim().length < 10) {
      setError("Tell me a little more — a couple of sentences is enough.");
      return;
    }

    try {
      await createEnquiry.mutateAsync({
        name: form.name,
        email: form.email,
        organisation: form.organisation || undefined,
        engagement: form.engagement,
        message: form.message,
      });
      setSent(true);
    } catch {
      setError("That didn't send. Email hello@adedayoawojobi.com directly and I'll pick it up.");
    }
  }

  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="shell pt-14 pb-4 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <p className="t-label mb-6">Contact</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="t-hero">
                Start a
                <br />
                <span className="text-forest">conversation.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-8 text-graphite">
                The more specific you are about where your company is — pre-licence, post-licence,
                scaling, or entering payments from another industry — the more useful my first reply
                will be.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Form ---------- */}
      <section className="shell section-y">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <SectionLabel index="01">Send a note</SectionLabel>

            {sent ? (
              <div className="border-t border-hairline py-12">
                <div className="flex items-center gap-3 text-forest">
                  <Check size={20} />
                  <h2 className="t-sub">Received.</h2>
                </div>
                <p className="t-body mt-4 text-graphite">
                  Thank you — I read everything myself and reply to anything with a clear ask,
                  usually within a few working days. If it is time-sensitive, follow up directly at{" "}
                  <a href="mailto:hello@adedayoawojobi.com" className="link-underline">
                    hello@adedayoawojobi.com
                  </a>
                  .
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border-t border-hairline pt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="t-label mb-2 block">
                      Name
                    </label>
                    <input
                      id="name"
                      required
                      className="field"
                      placeholder="Your name"
                      value={form.name}
                      onChange={(e) => update("name", e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="t-label mb-2 block">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      className="field"
                      placeholder="you@company.com"
                      value={form.email}
                      onChange={(e) => update("email", e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="organisation" className="t-label mb-2 block">
                      Company <span className="normal-case tracking-normal">(optional)</span>
                    </label>
                    <input
                      id="organisation"
                      className="field"
                      placeholder="Where you're writing from"
                      value={form.organisation}
                      onChange={(e) => update("organisation", e.target.value)}
                    />
                  </div>

                  <div>
                    <label htmlFor="engagement" className="t-label mb-2 block">
                      What this is about
                    </label>
                    <select
                      id="engagement"
                      className="field"
                      value={form.engagement}
                      onChange={(e) => update("engagement", e.target.value as Engagement)}
                    >
                      {ENGAGEMENTS.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <label htmlFor="message" className="t-label mb-2 block">
                    Where you are, and what you need
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={6}
                    className="field resize-none"
                    placeholder="Stage of the company, the licence position, and the decision you're facing."
                    value={form.message}
                    onChange={(e) => update("message", e.target.value)}
                  />
                </div>

                {error && <p className="mt-5 text-sm text-destructive">{error}</p>}

                <button
                  type="submit"
                  className="btn-solid mt-9 disabled:opacity-60"
                  disabled={createEnquiry.isPending}
                >
                  {createEnquiry.isPending ? (
                    <>
                      <Loader2 size={16} className="animate-spin" /> Sending
                    </>
                  ) : (
                    <>
                      Send <ArrowRight size={16} />
                    </>
                  )}
                </button>
              </form>
            )}
          </div>

          {/* Sidebar */}
          <div className="md:col-span-4 md:col-start-9">
            <SectionLabel index="02">Direct</SectionLabel>
            <div className="border-t border-hairline">
              <div className="border-b border-hairline py-6">
                <div className="t-label">Email</div>
                <a href="mailto:hello@adedayoawojobi.com" className="link-underline mt-2 inline-block">
                  hello@adedayoawojobi.com
                </a>
              </div>
              <div className="border-b border-hairline py-6">
                <div className="t-label">LinkedIn</div>
                <a
                  href="https://linkedin.com/in/adedayo-awojobi-8107b8166"
                  target="_blank"
                  rel="noreferrer"
                  className="link-underline mt-2 inline-block"
                >
                  adedayo-awojobi
                </a>
              </div>
              <div className="border-b border-hairline py-6">
                <div className="t-label">Based in</div>
                <p className="mt-2 text-sm text-graphite">
                  Abuja, Nigeria
                  <br />
                  Working across Nigeria &amp; Botswana
                </p>
              </div>
            </div>

            <p className="t-label mt-8 !normal-case !tracking-normal leading-relaxed">
              I turn down more work than I take, so a clear ask gets a faster and more honest answer
              than a general introduction.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
