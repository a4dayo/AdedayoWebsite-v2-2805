import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { SERVICES } from "../../shared/services";
import { PageHeader, ClosingCTA } from "../components/page-parts";
import { Reveal, SectionLabel } from "../components/primitives";

export default function ServicesPage() {
  return <>
    <PageHeader label="Services" title="From a better question" accent="to a buildable business." intro="Six ways to work together — from a focused clarity engagement to an ongoing venture-building partnership. Choose the decision you need to make, not just the document you want to receive." />
    <section className="shell section-y">
      <SectionLabel index="01">The six engagements</SectionLabel>
      <div className="border-t border-hairline">
        {SERVICES.map((s, i) => <Reveal key={s.name}>
          <article id={`service-${i+1}`} className="grid scroll-mt-24 gap-8 border-b border-hairline py-12 md:grid-cols-12">
            <div className="md:col-span-5"><p className="t-label text-forest">{String(i+1).padStart(2,"0")} / {s.format}</p><h2 className="t-section mt-4">{s.name}</h2><p className="mt-4 text-sm text-graphite">{s.fit}</p></div>
            <div className="md:col-span-6 md:col-start-7"><p className="t-body text-graphite">{s.body}</p><p className="t-label mt-7">Scope can include</p><ul className="mt-3 space-y-3">{s.outputs.map(o => <li key={o} className="flex gap-3 text-sm"><span className="text-forest">—</span>{o}</li>)}</ul><Link to={`/work-with-me?service=${encodeURIComponent(s.name)}`} className="link-underline mt-7 inline-flex items-center gap-2 text-sm">Discuss this engagement <ArrowRight size={14} /></Link></div>
          </article>
        </Reveal>)}
      </div>
    </section>
    <section className="bg-ink text-warm"><div className="shell py-16 md:py-20"><p className="t-label !text-warm/60">A defined scope, not an open-ended promise</p><h2 className="t-section mt-5 max-w-[24ch]">The right engagement starts with the right diagnosis.</h2><p className="t-body mt-6 text-warm/75">Deliverables, timing, fees and responsibilities are agreed before work begins. Regulatory strategy is not a guarantee of a licence; approval rests with the regulator.</p></div></section>
    <section className="shell section-y"><SectionLabel index="02">How we start</SectionLabel><div className="grid gap-10 md:grid-cols-3">{[
      ["Share the context", "Tell me what you are building, the decision ahead and your constraints."],
      ["Choose the right scope", "We identify whether a sprint, blueprint, advisory engagement or partnership is the best fit."],
      ["Agree the work", "A written scope sets the outputs, responsibilities, timeline and commercial terms."],
    ].map(([title,body],i)=><div key={title}><p className="t-label text-forest">0{i+1}</p><h3 className="t-sub mt-3">{title}</h3><p className="mt-4 text-sm text-graphite">{body}</p></div>)}</div></section>
    <ClosingCTA />
  </>;
}
