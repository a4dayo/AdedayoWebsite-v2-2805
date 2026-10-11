import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel } from "../components/primitives";

const PRIMARY = [
  {
    index: "01",
    title: "Advisory retainer",
    who: "Founders building in regulated payments",
    body: "Ongoing counsel on licensing strategy, regulator engagement, product sequencing and governance. Typically a standing monthly session with the founder plus asynchronous access when something time-sensitive lands — a CBN query, a partner bank demand, a board paper due Friday.",
    fit: "Best before you apply for a licence, or in the first year after you receive one.",
  },
  {
    index: "02",
    title: "Fractional COO / CPO",
    who: "Companies with a product but no operating spine",
    body: "Embedded part-time leadership: organisational design, departmental coordination, operational policy, regulatory correspondence and go-to-market. The work I did at payZeep, done inside your company at a fraction of a full-time hire.",
    fit: "Best for post-licence companies scaling past their founding team.",
  },
  {
    index: "03",
    title: "Board & non-executive director",
    who: "Boards that need payments and regulatory literacy",
    body: "Independent oversight with genuine domain knowledge — someone who has sat on the operator's side of a CBN examination and written the governance frameworks a board is meant to be assuring itself against.",
    fit: "Best for licensed institutions and companies preparing for one.",
  },
];

const SECONDARY = [
  {
    title: "Corporate consulting",
    body: "For established organisations entering payments — banks, MFBs, labour associations, enterprises wanting to own their collections. Market entry assessment, licence route selection, build-versus-partner analysis, and the operating model underneath it.",
  },
  {
    title: "Speaking",
    body: "On licensing, governance and product in African fintech. Conferences, boardrooms, accelerator cohorts and closed founder sessions. I speak to what I have actually done, which makes for specific talks rather than general ones.",
  },
];

const PROCESS = [
  {
    step: "01",
    title: "A short call",
    body: "Thirty minutes. You describe where you are; I tell you plainly whether I am the right person. I turn down more than I take.",
  },
  {
    step: "02",
    title: "A written scope",
    body: "What I will do, what I will not, what it costs, and how we both exit. No open-ended arrangements.",
  },
  {
    step: "03",
    title: "The work",
    body: "Retainers run monthly. Fractional mandates run in quarters. Board seats run to the term. Everything is reviewed at the end of each period.",
  },
];

export default function AdvisoryPage() {
  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="shell pt-14 pb-4 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-8">
            <Reveal>
              <p className="t-label mb-6">Advisory</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="t-hero">
                Payment companies
                <br />
                that survive
                <br />
                <span className="text-forest">their regulator.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-8 text-graphite">
                Since August 2026 I have worked independently. Most of what I am asked for falls
                into three shapes — a retainer, a fractional seat, or a board seat. Below is what
                each actually involves, so you can tell before you write whether there is a fit.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Primary engagements ---------- */}
      <section className="shell section-y">
        <SectionLabel index="01">Principal engagements</SectionLabel>

        <div className="border-t border-hairline">
          {PRIMARY.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <article className="grid gap-5 border-b border-hairline py-10 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <span className="t-label">{item.index}</span>
                  <h3 className="t-sub mt-2">{item.title}</h3>
                  <p className="mt-2 text-sm text-forest">{item.who}</p>
                </div>
                <div className="md:col-span-7 md:col-start-6">
                  <p className="t-body text-graphite">{item.body}</p>
                  <p className="t-label mt-4 !normal-case !tracking-normal">{item.fit}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Secondary ---------- */}
      <section className="shell section-y pt-0">
        <SectionLabel index="02">Also available for</SectionLabel>
        <div className="grid gap-10 md:grid-cols-2 md:gap-16">
          {SECONDARY.map((item, i) => (
            <Reveal key={item.title} delay={i * 80}>
              <div className="border-t border-hairline pt-6">
                <h3 className="t-sub">{item.title}</h3>
                <p className="t-body mt-4 text-graphite">{item.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Full-time: the quiet line ---------- */}
      <section className="bg-ink text-warm">
        <div className="shell py-16 md:py-20">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-8">
              <p className="t-sub max-w-[40ch]">
                I am also open to the right full-time executive role — operator-side, in payments or
                banking, where the licence and the governance matter.
              </p>
            </div>
            <div className="md:col-span-3 md:col-start-10 md:text-right">
              <Link
                to="/contact"
                className="link-underline !text-warm inline-block text-sm"
              >
                Make the case
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Process ---------- */}
      <section className="shell section-y">
        <SectionLabel index="03">How engagements start</SectionLabel>
        <div className="grid gap-10 md:grid-cols-3 md:gap-12">
          {PROCESS.map((p, i) => (
            <Reveal key={p.step} delay={i * 70}>
              <div className="border-t border-hairline pt-6">
                <span className="t-label">{p.step}</span>
                <h3 className="t-sub mt-2">{p.title}</h3>
                <p className="mt-3 text-sm text-graphite">{p.body}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="shell pb-24 md:pb-32">
        <hr className="rule" />
        <div className="grid gap-8 pt-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 className="t-section max-w-[18ch]">
              Tell me where you are, and I will tell you if I can help.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/contact" className="btn-solid">
              Start a conversation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
