import { useState } from "react";
import { Link } from "wouter";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Reveal, SectionLabel } from "../components/primitives";

const OPERATING = [
  {
    org: "Independent",
    role: "Strategy · Product · Venture Building",
    period: "Aug 2026 — present",
    place: "Abuja, Nigeria",
    notes: [
      "Helping founders and organisations with business clarity, product-to-market strategy, fintech launch and venture building.",
    ],
  },
  {
    org: "Bankeasy / EasyMFB",
    role: "Co-founder · Executive Director, Business",
    period: "Current",
    place: "Nigeria",
    notes: [
      "Co-founded a licensed microfinance bank, now rebranding to Easy Microfinance Bank under CBN guidance.",
      "Product lines span SNAAP QR payments, NCRSS rent support and NEPA utility credit.",
    ],
  },
  {
    org: "payZeep (Paymi Solutions)",
    role: "Co-founder · Founding MD/CEO, later Chief Operating Officer",
    period: "Jan 2023 — Aug 2026",
    place: "Lagos, Nigeria",
    notes: [
      "Co-founded payZeep and served as founding MD/CEO through incubation, stepping down to COO in January 2026.",
      "Led regulator engagement, documentation and standards implementation to attain the Payment Service Solution (PSS) licence.",
      "Coordinated technology partnerships, operational policies, regulatory correspondence, product management and go-to-market.",
      "Expanded sales operations to Botswana through partnerships with licensed partners.",
      "Delivered merchant acquiring relationships with private companies, banks, microfinance banks and labour associations — transaction value over ₦100bn annually.",
    ],
  },
  {
    org: "Smade and Smight Ltd",
    role: "Managing Partner",
    period: "Jan 2022 — Jun 2026",
    place: "Abuja, Nigeria",
    notes: [
      "Product leadership and organisational management across a startup studio, from ideation and incorporation through market assurance, product development and go-to-market.",
      "Ventures delivered include Bankeasy Microfinance Bank, Bankeasy Technologies, Paymi Solutions (payZeep), ERCAS, LearnWazobia and Kub.icu.",
      "Oversaw ERCAS incubation and go-to-market as Chief Product Officer, through its acquisition by CapitalSage in 2022.",
    ],
  },
  {
    org: "BrandMobile Africa / Bancore Group",
    role: "Head of Product · Group Product Manager, Fintech Services",
    period: "Jul 2020 — Feb 2022",
    place: "Nigeria",
    notes: [
      "Led product strategy and delivery across gamification and fintech suites, managing product and engineering managers.",
      "Owned the fintech portfolio: Monny.me (P2P payments), Monnyremit (B2B collections) and Cardservices (virtual cards).",
      "Product-led content strategy that landed enterprise campaigns with Nestlé, Nigerian Breweries and Chrisland Schools.",
    ],
  },
  {
    org: "Hatixa Solutions",
    role: "Business Analyst · Product Marketing · User Experience",
    period: "Jul 2018 — Mar 2020",
    place: "Lekki, Lagos",
    notes: [
      "Matched technology to client needs without compromising business or customer experience, and oversaw delivery.",
    ],
  },
  {
    org: "GQbuzz.com",
    role: "First employee · Content Development, Product Management, Media Strategy",
    period: "Jul 2012 — Mar 2020",
    place: "Lekki-Ajah, Lagos",
    notes: [
      "Joined as the first employee in 2012; played a major role in growing GQbuzz to 20 million monthly visitors.",
      "Contributed to GQbuzz entering Nigeria's top 20 most-visited websites in 2018.",
      "Led recruitment of developers and designers to transform the platform into a social earning product.",
    ],
  },
  {
    org: "Airtel Nigeria",
    role: "Customer Service Representative → Manager, Customer Profile Resolution",
    period: "Jun 2011 — Jul 2012",
    place: "Lagos",
    notes: [
      "Joined as a KYC representative for NCC-mandated customer registration; promoted to manage Customer Profile Retrieval and Resolution at Alimosho.",
    ],
  },
];

const CONTRACT = [
  {
    org: "Dapsey Digitals",
    role: "Marketing Manager",
    period: "Jun 2017 — Jun 2018",
    note: "Increased sales 50% by redesigning the business model around a subscription-as-a-service offering, extending the customer base from photographers to families and individuals.",
  },
  {
    org: "Cuddlecircle.com",
    role: "Digital Product Manager · Customer Onboarding",
    period: "May 2018 — Aug 2018",
    note: "Managed product uploads, web content and seller financial reporting on the e-commerce platform.",
  },
  {
    org: "Software Business Solutions Consulting (SBSC)",
    role: "Senior Content Writer",
    period: "Jul 2015 — Dec 2015",
    note: "Led the team building educational content for the Etisalat Easycliq high school curriculum platform.",
  },
  {
    org: "Interactive Media S.A.S",
    role: "Freelance Copywriter",
    period: "May 2013 — Jun 2015",
    note: "Foundational brand copy: identity materials, website copy and corporate communication collateral.",
  },
];

const LICENCES = [
  {
    title: "Payment Service Solution (PSS) — CBN",
    org: "payZeep",
    body: "Active. I led the regulator engagement, documentation and standards implementation to attain it. payZeep also operates as PSSP, PTSP and Super Agent.",
  },
  {
    title: "Microfinance banking licence — CBN",
    org: "Bankeasy / EasyMFB",
    body: "Working licence. Co-founder and Executive Director, Business.",
  },
  {
    title: "Corporate Governance Framework",
    org: "Authored",
    body: "Board composition, committee structure, fiduciary duties and disclosure — aligned to the CBN's July 2023 guidelines for a licensed PSP.",
  },
  {
    title: "Enterprise Risk Management Framework",
    org: "Authored",
    body: "Risk taxonomy, three-lines-of-defence model, appetite thresholds and escalation.",
  },
  {
    title: "Risk Appetite Statement",
    org: "Authored",
    body: "Quantified tolerance across credit, operational, liquidity, compliance and reputational risk.",
  },
];

const EXPERTISE = [
  "Regulatory strategy & CBN licensing",
  "Payments product — POS, gateway, QR, agency",
  "Corporate governance & enterprise risk",
  "Startup studio operations & incubation",
  "Merchant acquiring & distribution",
  "Go-to-market across Nigeria & Botswana",
  "Product organisation design",
  "Board & executive reporting",
];

export default function ExperiencePage() {
  const [showContract, setShowContract] = useState(false);

  return (
    <>
      {/* ---------- Header ---------- */}
      <section className="shell pt-14 pb-4 md:pt-24">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-7">
            <Reveal>
              <p className="t-label mb-6">Experience &amp; Case Studies</p>
            </Reveal>
            <Reveal delay={60}>
              <h1 className="t-hero">
                A record of building.
                <br />
                <span className="text-forest">Not just advising.</span>
              </h1>
            </Reveal>
            <Reveal delay={120}>
              <p className="t-lead mt-8 text-graphite">
                I started in customer service at Airtel in 2011 and became the first employee at a
                media startup a year later. For the first decade the work was product: growing
                GQbuzz to 20 million monthly visitors, running fintech portfolios at BrandMobile,
                turning ideas into companies inside a startup studio.
              </p>
            </Reveal>
            <Reveal delay={160}>
              <p className="t-body mt-5 text-graphite">
                The last five years were different. Building payZeep meant learning that in Nigerian
                payments the product is only half the problem — the other half is a licence, and
                the governance apparatus that keeps it. I led that work from application to active
                licence, then wrote the frameworks underneath it. That is the capability I now bring
                to other people's companies.
              </p>
            </Reveal>
          </div>

          <div className="md:col-span-4 md:col-start-9">
            <Reveal delay={140}>
              <img
                src="/images/dayo-full.jpg"
                alt="Adedayo Awojobi"
                className="w-full object-cover"
              />
            </Reveal>
          </div>
        </div>
      </section>

      <section className="shell section-y">
        <SectionLabel index="01">Selected case studies</SectionLabel>
        <div className="border-t border-hairline">{[
          {name:"payZeep",context:"Payments / 2023–2026",challenge:"Build a payments company with the licence, operating foundations and distribution to launch and scale.",work:"As co-founder and founding MD/CEO, later COO, I led regulator engagement, documentation and standards implementation; coordinated product, partnerships and go-to-market.",result:"Active CBN PSS licence; ₦500bn+ cumulative transaction value since 2023; 3,000+ merchants and agents; Botswana expansion through licensed partners."},
          {name:"ERCAS",context:"Revenue collection / Acquired in 2022",challenge:"Take a revenue collection venture from incubation into the market.",work:"As Chief Product Officer, I oversaw incubation, product direction and go-to-market within the startup studio.",result:"Acquired by CapitalSage in 2022. Deal terms and valuation are not stated."},
          {name:"GQbuzz",context:"Digital media / 2012–2020",challenge:"Grow a young media platform into a substantial digital audience.",work:"As the first employee, I worked across content development, product management and media strategy.",result:"Contributed to growth to 20 million monthly visitors and a place among Nigeria’s top 20 most-visited websites in 2018."},
          {name:"Dapsey Digitals",context:"Business model / 2017–2018",challenge:"Extend a photography business beyond its existing customer base.",work:"Redesigned the business model around a subscription-as-a-service offering, reaching families and individuals alongside photographers.",result:"Increased sales by 50%."},
        ].map(c=><Reveal key={c.name}><article className="grid gap-8 border-b border-hairline py-10 md:grid-cols-12"><div className="md:col-span-4"><p className="t-label">{c.context}</p><h2 className="t-section mt-3">{c.name}</h2></div><dl className="space-y-5 md:col-span-8">{[["The challenge",c.challenge],["My contribution",c.work],["The result",c.result]].map(([label,text])=><div key={label}><dt className="t-label text-forest">{label}</dt><dd className="mt-2 text-sm text-graphite">{text}</dd></div>)}</dl></article></Reveal>)}</div>
        <p className="mt-5 text-xs text-graphite">Company results reflect team efforts; each case states my specific role and contribution.</p>
      </section>

      {/* ---------- Résumé: two tracks ---------- */}
      <section className="shell section-y">
        <div className="grid gap-14 md:grid-cols-12 md:gap-10">
          {/* Operating roles */}
          <div className="md:col-span-7">
            <SectionLabel index="02">Operating roles</SectionLabel>

            <div className="border-t border-hairline">
              {OPERATING.map((job, i) => (
                <Reveal key={`${job.org}-${job.period}`} delay={Math.min(i * 50, 200)}>
                  <article className="border-b border-hairline py-8">
                    <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                      <h3 className="t-sub">{job.org}</h3>
                      <span className="t-label">{job.period}</span>
                    </div>
                    <p className="mt-2 text-sm font-medium text-forest">{job.role}</p>
                    <p className="t-label mt-1 !tracking-[0.1em] !normal-case">{job.place}</p>
                    <ul className="mt-4 space-y-2">
                      {job.notes.map((n) => (
                        <li key={n} className="flex gap-3 text-sm text-graphite">
                          <span className="mt-[0.6em] h-px w-3 shrink-0 bg-hairline" />
                          <span className="max-w-[62ch]">{n}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </Reveal>
              ))}
            </div>

            {/* Contract & freelance — secondary collapsible track */}
            <div className="mt-10">
              <button
                type="button"
                onClick={() => setShowContract((v) => !v)}
                className="t-label flex items-center gap-3 hover:text-ink"
                aria-expanded={showContract}
              >
                <ChevronDown
                  size={14}
                  className={`transition-transform duration-200 ${showContract ? "rotate-180" : ""}`}
                />
                Contract &amp; freelance, 2013—2018 ({CONTRACT.length})
              </button>

              {showContract && (
                <div className="mt-6 border-t border-hairline">
                  {CONTRACT.map((job) => (
                    <article key={job.org} className="border-b border-hairline py-6">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
                        <h4 className="text-base font-medium text-ink">{job.org}</h4>
                        <span className="t-label">{job.period}</span>
                      </div>
                      <p className="mt-1 text-sm text-forest">{job.role}</p>
                      <p className="mt-2 max-w-[62ch] text-sm text-graphite">{job.note}</p>
                    </article>
                  ))}
                  <p className="t-label mt-5 !normal-case !tracking-normal">
                    These ran concurrently with the operating roles above — listed separately so the
                    primary track reads honestly.
                  </p>
                </div>
              )}
            </div>
          </div>

          {/* Licences & governance */}
          <div className="md:col-span-4 md:col-start-9">
            <SectionLabel index="03">Licences &amp; governance</SectionLabel>

            <div className="border-t border-hairline">
              {LICENCES.map((l, i) => (
                <Reveal key={l.title} delay={Math.min(i * 60, 240)}>
                  <div className="border-b border-hairline py-6">
                    <h3 className="text-base font-medium text-ink">{l.title}</h3>
                    <p className="t-label mt-1">{l.org}</p>
                    <p className="mt-3 text-sm text-graphite">{l.body}</p>
                  </div>
                </Reveal>
              ))}
            </div>

            <p className="t-label mt-6 !normal-case !tracking-normal leading-relaxed">
              Governance frameworks were authored for a licensed operator and remain that company's
              confidential property. They are described here, never published.
            </p>
          </div>
        </div>
      </section>

      {/* ---------- Expertise ---------- */}
      <section className="shell section-y pt-0">
        <SectionLabel index="04">Expertise</SectionLabel>
        <div className="grid gap-x-10 border-t border-hairline md:grid-cols-2">
          {EXPERTISE.map((skill, i) => (
            <div
              key={skill}
              className="flex items-baseline gap-5 border-b border-hairline py-5"
            >
              <span className="t-label w-6 shrink-0">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-base text-ink">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Closing ---------- */}
      <section className="shell pb-24 md:pb-32">
        <hr className="rule" />
        <div className="grid gap-8 pt-14 md:grid-cols-12 md:items-end">
          <div className="md:col-span-8">
            <h2 className="t-section max-w-[18ch]">
              Business strategy, informed by the experience of building and operating.
            </h2>
          </div>
          <div className="md:col-span-4 md:text-right">
            <Link to="/services" className="btn-solid">
              How I work <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
