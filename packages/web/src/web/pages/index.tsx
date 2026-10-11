import { Link } from "wouter";
import { ArrowRight } from "lucide-react";
import { Reveal, SectionLabel, SerifRun, Stat } from "../components/primitives";

const STATS = [
  { value: "15+", label: "Years in product" },
  { value: "₦500bn+", label: "Transaction value processed" },
  { value: "3,000+", label: "Merchants & agents onboarded" },
  { value: "2", label: "CBN licences secured" },
  { value: "1", label: "Exit — CapitalSage, 2022" },
];

const VENTURES = [
  "payZeep",
  "Bankeasy",
  "ERCAS",
  "Brandie",
  "Kubicu",
  "Motocare",
  "LearnWazobia",
];

const HIGHLIGHTS = [
  {
    name: "payZeep",
    role: "Co-founder · Founding MD, later COO",
    period: "2023 — 2026",
    body: "Built a CBN-licensed payment service provider from incorporation to scale. Led the regulatory engagement, documentation and standards implementation behind its Payment Service Solution licence, then took the company through launch, 3,000+ merchants and agents, and expansion into Botswana via licensed partners.",
  },
  {
    name: "Bankeasy / EasyMFB",
    role: "Co-founder · Executive Director, Business",
    period: "Current",
    body: "A licensed microfinance bank rebranding to Easy Microfinance Bank under CBN guidance. Products span SNAAP QR payments, NCRSS rent support and NEPA utility credit — consumer credit rails built for how Nigerians actually pay.",
  },
  {
    name: "ERCAS",
    role: "Chief Product Officer",
    period: "Exited 2022",
    body: "Oversaw incubation and go-to-market for a revenue collection platform serving government and enterprise. Acquired by CapitalSage Technology in 2022 — a realised exit to a named acquirer.",
  },
];

export default function Index() {
  return (
    <>
      {/* ---------- Hero ---------- */}
      <section className="shell pt-14 pb-4 md:pt-24">
        <div className="grid items-end gap-10 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-7">
            <Reveal>
              <p className="t-label mb-6">Adedayo Awojobi — Abuja, Nigeria</p>
            </Reveal>

            <Reveal delay={60}>
              <h1 className="t-hero">
                Fifteen years
                <br />
                shipping product.
                <br />
                <span className="text-forest">Five inside Africa's</span>
                <br />
                <span className="text-forest">hardest regulator.</span>
              </h1>
            </Reveal>

            <Reveal delay={120}>
              <p className="t-lead mt-8 text-graphite">
                I co-founded payZeep and led it as founding MD through CBN licensing, launch, and
                expansion into Botswana — later serving as COO. Co-founder and Executive Director of
                Bankeasy, a licensed microfinance bank. Chief Product Officer through ERCAS's
                acquisition by CapitalSage.
              </p>
            </Reveal>

            <Reveal delay={180}>
              <p className="t-sub mt-8 max-w-[26ch] text-ink">
                Good ideas deserve the operating system to become real.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-9 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-solid">
                  Start a conversation <ArrowRight size={16} />
                </Link>
                <Link to="/advisory" className="btn-ghost">
                  How I work
                </Link>
              </div>
            </Reveal>
          </div>

          <div className="md:col-span-5">
            <Reveal delay={140}>
              <img
                src="/images/dayo-hero.jpg"
                alt="Adedayo Awojobi"
                className="w-full object-cover md:translate-y-8"
                loading="eager"
              />
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Credibility strip ---------- */}
      <section className="shell">
        <hr className="rule" />
        <div className="-mx-1 flex gap-10 overflow-x-auto py-8 md:grid md:grid-cols-5 md:gap-6 md:overflow-visible">
          {STATS.map((s, i) => (
            <Reveal key={s.label} delay={i * 60}>
              <Stat value={s.value} label={s.label} />
            </Reveal>
          ))}
        </div>
        <hr className="rule" />
      </section>

      {/* ---------- 01 What I do ---------- */}
      <section className="shell section-y">
        <SectionLabel index="01">What I do</SectionLabel>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <h2 className="t-section">
              I build licensed payment companies — and the governance that keeps them licensed.
            </h2>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <p className="t-body text-graphite">
              Most operators can build a product. Fewer can get it licensed. Very few can keep it
              licensed once it scales, because that requires a governance apparatus most fintechs
              only build after a regulator asks for it.
            </p>
            <p className="t-body mt-5 text-graphite">
              I have done all three, twice. That is the whole of what I offer, and every claim on
              this site is checkable.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- 02 Selected ventures ---------- */}
      <section className="shell section-y pt-0">
        <SectionLabel index="02">Selected ventures</SectionLabel>
        <Reveal>
          <SerifRun items={VENTURES} />
        </Reveal>

        <div className="mt-16 grid gap-px border-t border-hairline md:mt-24">
          {HIGHLIGHTS.map((v, i) => (
            <Reveal key={v.name} delay={i * 80}>
              <article className="grid gap-4 border-b border-hairline py-9 md:grid-cols-12 md:gap-8">
                <div className="md:col-span-4">
                  <h3 className="t-sub">{v.name}</h3>
                  <p className="t-label mt-2">{v.period}</p>
                </div>
                <div className="md:col-span-8">
                  <p className="text-sm font-medium text-forest">{v.role}</p>
                  <p className="t-body mt-3 text-graphite">{v.body}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

      </section>

      {/* ---------- 03 Licences & governance ---------- */}
      <section className="bg-ink text-warm">
        <div className="shell section-y">
          <div className="mb-10 md:mb-14">
            <hr className="rule !border-warm/20 mb-4" />
            <div className="t-label !text-warm/55 flex items-baseline gap-4">
              <span>03</span>
              <span>Licences &amp; governance</span>
            </div>
          </div>

          <div className="grid gap-10 md:grid-cols-12">
            <div className="md:col-span-6">
              <Reveal>
                <h2 className="t-section">
                  The part most founders discover too late.
                </h2>
                <p className="t-body mt-6 text-warm/70">
                  I have taken two CBN licences from application to active, and authored the
                  governance stack that sits behind a licensed PSP — corporate governance framework,
                  enterprise risk management framework, and risk appetite statement, all aligned to
                  the CBN's 2023 guidelines.
                </p>
                <p className="t-body mt-5 text-warm/70">
                  That work is the difference between a payments company that launches and one that
                  survives its first examination.
                </p>
              </Reveal>
            </div>

            <div className="md:col-span-5 md:col-start-8">
              <Reveal delay={80}>
                <dl className="space-y-7">
                  <div>
                    <dt className="t-label !text-warm/55">payZeep</dt>
                    <dd className="mt-2 text-sm text-warm/85">
                      Active CBN Payment Service Solution licence. I led the regulator engagement,
                      documentation and standards implementation to obtain it. Also operates as
                      PSSP, PTSP and Super Agent.
                    </dd>
                  </div>
                  <div>
                    <dt className="t-label !text-warm/55">Bankeasy / EasyMFB</dt>
                    <dd className="mt-2 text-sm text-warm/85">
                      Working microfinance banking licence. Co-founder and Executive Director,
                      Business.
                    </dd>
                  </div>
                  <div>
                    <dt className="t-label !text-warm/55">Frameworks authored</dt>
                    <dd className="mt-2 text-sm text-warm/85">
                      Corporate Governance Framework · Enterprise Risk Management Framework · Risk
                      Appetite Statement. Client-confidential — described, never published.
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- 04 Advisory ---------- */}
      <section className="shell section-y">
        <SectionLabel index="04">Working together</SectionLabel>
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-6">
            <Reveal>
              <h2 className="t-section max-w-[16ch]">
                Now advising founders, boards and corporates.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <Reveal delay={60}>
              <p className="t-body text-graphite">
                Since August 2026 I have been independent — taking on advisory retainers, fractional
                COO and CPO mandates, and board and NED seats with companies building in regulated
                payments. I also consult for corporates entering the payments market, and speak on
                licensing, governance and product in African fintech.
              </p>
              <Link to="/advisory" className="link-underline mt-6 inline-block">
                What that looks like in practice
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="shell pb-24 md:pb-32">
        <hr className="rule" />
        <div className="grid gap-8 pt-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <Reveal>
              <h2 className="t-section max-w-[18ch]">
                If you are building something that needs to survive a regulator, let's talk.
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Reveal delay={80}>
              <Link to="/contact" className="btn-solid">
                Start a conversation <ArrowRight size={16} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>
    </>
  );
}
