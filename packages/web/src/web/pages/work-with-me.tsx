import { useState, type FormEvent } from "react";
import { useSearch } from "wouter";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Reveal, SectionLabel } from "../components/primitives";
import { useCreateEnquiry } from "../queries/enquiries";
import { BUDGET_OPTIONS, ENGAGEMENT_TYPES, TIMELINE_OPTIONS } from "../../shared/services";

type Engagement = (typeof ENGAGEMENT_TYPES)[number];
type Budget = (typeof BUDGET_OPTIONS)[number];
type Timeline = (typeof TIMELINE_OPTIONS)[number];

function initialEngagement(search: string): Engagement {
  const requested = new URLSearchParams(search).get("service");
  return (ENGAGEMENT_TYPES as readonly string[]).includes(requested ?? "")
    ? (requested as Engagement)
    : "Not sure yet";
}

const STEPS = [
  ["I read it myself", "Every enquiry comes to me directly, not to a sales team."],
  ["A first reply", "Usually within a few working days, with questions or a suggested next step."],
  ["A short call", "If there is a fit, we talk through the context and agree the right scope."],
] as const;

export default function WorkWithMePage() {
  const search = useSearch();
  const createEnquiry = useCreateEnquiry();
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [form, setForm] = useState({
    name: "",
    email: "",
    organisation: "",
    engagement: initialEngagement(search),
    message: "",
    budget: "To be discussed" as Budget,
    timeline: "Exploring / no fixed date" as Timeline,
  });

  function update<K extends keyof typeof form>(key: K, value: (typeof form)[K]) {
    setForm((f) => ({ ...f, [key]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setError(null);

    if (form.message.trim().length < 20) {
      setError("Tell me a little more about the goal — two or three sentences is enough.");
      return;
    }

    try {
      await createEnquiry.mutateAsync({
        name: form.name,
        email: form.email,
        organisation: form.organisation || undefined,
        engagement: form.engagement,
        message: form.message,
        budget: form.budget,
        timeline: form.timeline,
      });
      setSent(true);
    } catch {
      setError("That didn't send. Email hello@adedayoawojobi.com directly and I'll pick it up.");
    }
  }

  return (
    <>
      <section className="shell pt-14 md:pt-24">
        <Reveal>
          <p className="t-label mb-6">Work With Me</p>
        </Reveal>
        <Reveal delay={60}>
          <h1 className="t-hero max-w-[16ch]">
            Tell me what you're <span className="text-forest">building.</span>
          </h1>
        </Reveal>
        <Reveal delay={120}>
          <p className="t-lead mt-8 text-graphite">
            A few details help me understand where you are and which engagement fits. If you are
            not sure yet, choose "Not sure yet" — working that out is part of the first
            conversation.
          </p>
        </Reveal>
      </section>

      <section className="shell section-y">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          <div className="md:col-span-7">
            <SectionLabel index="01">Your enquiry</SectionLabel>

            {sent ? (
              <output className="block border-t border-hairline py-12">
                <div className="flex items-center gap-3 text-forest">
                  <Check size={20} />
                  <h2 className="t-sub">Received — thank you.</h2>
                </div>
                <p className="t-body mt-4 text-graphite">
                  I'll read it and reply, usually within a few working days. If it is
                  time-sensitive, follow up at{" "}
                  <a href="mailto:hello@adedayoawojobi.com" className="link-underline">
                    hello@adedayoawojobi.com
                  </a>
                  .
                </p>
              </output>
            ) : (
              <form onSubmit={handleSubmit} className="border-t border-hairline pt-8">
                <div className="grid gap-8 md:grid-cols-2">
                  <div>
                    <label htmlFor="name" className="t-label mb-2 block">Name</label>
                    <input id="name" aria-label="Name" required autoComplete="name" className="field" placeholder="Your name"
                      value={form.name} onChange={(e) => update("name", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="email" className="t-label mb-2 block">Email</label>
                    <input id="email" aria-label="Email" type="email" required autoComplete="email" className="field"
                      placeholder="you@company.com" value={form.email}
                      onChange={(e) => update("email", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="organisation" className="t-label mb-2 block">
                      Company <span className="normal-case tracking-normal">(optional)</span>
                    </label>
                    <input id="organisation" aria-label="Company (optional)" autoComplete="organization" className="field"
                      placeholder="Company or project name" value={form.organisation}
                      onChange={(e) => update("organisation", e.target.value)} />
                  </div>
                  <div>
                    <label htmlFor="engagement" className="t-label mb-2 block">Service needed</label>
                    <select id="engagement" className="field" value={form.engagement}
                      onChange={(e) => update("engagement", e.target.value as Engagement)}>
                      {ENGAGEMENT_TYPES.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="budget" className="t-label mb-2 block">Budget range</label>
                    <select id="budget" className="field" value={form.budget}
                      onChange={(e) => update("budget", e.target.value as Budget)}>
                      {BUDGET_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="timeline" className="t-label mb-2 block">When would you like to start?</label>
                    <select id="timeline" className="field" value={form.timeline}
                      onChange={(e) => update("timeline", e.target.value as Timeline)}>
                      {TIMELINE_OPTIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                    </select>
                  </div>
                </div>

                <div className="mt-8">
                  <label htmlFor="message" className="t-label mb-2 block">Project goal</label>
                  <textarea id="message" aria-label="Project goal" required rows={6} className="field resize-none"
                    placeholder="What you're building, the stage you're at, and the decision or outcome you need help with."
                    value={form.message} onChange={(e) => update("message", e.target.value)} />
                </div>

                {error && <p className="mt-5 text-sm text-destructive" role="alert">{error}</p>}

                <button type="submit" className="btn-solid mt-9 disabled:opacity-60" disabled={createEnquiry.isPending}>
                  {createEnquiry.isPending
                    ? <><Loader2 size={16} className="animate-spin" /> Sending</>
                    : <>Send enquiry <ArrowRight size={16} /></>}
                </button>
              </form>
            )}
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <SectionLabel index="02">What happens next</SectionLabel>
            <div className="border-t border-hairline">
              {STEPS.map(([title, body], i) => (
                <div key={title} className="border-b border-hairline py-6">
                  <p className="t-label text-forest">0{i + 1}</p>
                  <h3 className="mt-2 text-base font-medium text-ink">{title}</h3>
                  <p className="mt-2 text-sm text-graphite">{body}</p>
                </div>
              ))}
              <div className="border-b border-hairline py-6">
                <div className="t-label">Direct</div>
                <a href="mailto:hello@adedayoawojobi.com" className="link-underline mt-2 inline-block text-sm">
                  hello@adedayoawojobi.com
                </a>
                <br />
                <a href="https://linkedin.com/in/adedayo-awojobi-8107b8166" target="_blank" rel="noreferrer"
                  className="link-underline mt-3 inline-block text-sm">
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
