import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Reveal } from "./primitives";

export function PageHeader({ label, title, accent, intro }: { label: string; title: string; accent: string; intro: string }) {
  return <section className="shell pt-14 md:pt-24">
    <Reveal><p className="t-label mb-6">{label}</p></Reveal>
    <Reveal delay={60}><h1 className="t-hero max-w-[19ch]">{title} <span className="text-forest">{accent}</span></h1></Reveal>
    <Reveal delay={120}><p className="t-lead mt-8 text-graphite">{intro}</p></Reveal>
  </section>;
}

export function ClosingCTA({ title = "Good ideas deserve a clear next move." }: { title?: string }) {
  return <section className="shell pb-24 md:pb-32"><hr className="rule" />
    <div className="grid gap-8 pt-14 md:grid-cols-12 md:items-end">
      <h2 className="t-section max-w-[22ch] md:col-span-8">{title}</h2>
      <div className="md:col-span-4 md:text-right"><Link to="/work-with-me" className="btn-solid">Work With Me <ArrowRight size={16} /></Link></div>
    </div>
  </section>;
}