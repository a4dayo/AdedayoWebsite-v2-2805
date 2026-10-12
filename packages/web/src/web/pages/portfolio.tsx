import { ArrowUpRight } from "lucide-react";
import { PageHeader, ClosingCTA } from "../components/page-parts";
import { Reveal, SectionLabel } from "../components/primitives";
const STARTUPS = [
  {name:"Bankeasy",category:"Banking & financial services",status:"Current",role:"Co-founder · Executive Director, Business",body:"A licensed microfinance bank, rebranding to EasyMFB under CBN guidance. Consumer payments and credit products built around everyday financial needs.",url:null},
  {name:"payZeep",category:"Payments infrastructure",status:"Previous · 2023–2026",role:"Co-founder · Founding MD/CEO, later COO",body:"A CBN-licensed payments business. My operating tenure covered licensing, launch, merchant and agent distribution, and expansion into Botswana through licensed partners.",url:"https://payzeep.com"},
  {name:"Motocare",category:"Mobile car care",status:null,role:null,body:"Mobile car care in Abuja. Wash and detailing, tyre repair and battery servicing delivered wherever the car is parked.",url:"https://www.motocare.ng"},
  {name:"Kub.Icu",category:"Digital venture",status:null,role:null,body:"One of my startup ventures. Explore the product through its website.",url:"https://www.kub.icu"},
  {name:"TabPay",category:"Product venture",status:null,role:null,body:"One of my product ventures, available through the Kub.Icu ecosystem.",url:"https://qrmenu.kub.icu/"},
];
export default function PortfolioPage(){return <>
  <PageHeader label="Portfolio / My startups" title="Ideas I’ve helped" accent="turn into ventures." intro="A portfolio spanning licensed financial services, payments and everyday products. Bankeasy is current; payZeep reflects my previous operating role. Experience and project results are documented separately." />
  <section className="shell section-y"><SectionLabel index="01">Five ventures</SectionLabel><div className="border-t border-hairline">{STARTUPS.map((s,i)=><Reveal key={s.name}><article className="grid gap-6 border-b border-hairline py-12 md:grid-cols-12"><div className="md:col-span-5"><p className="t-label">0{i+1} / {s.category}</p><h2 className="t-section mt-3">{s.name}</h2>{s.status&&<p className="t-label mt-4 text-forest">{s.status}</p>}</div><div className="md:col-span-6 md:col-start-7">{s.role&&<p className="text-sm font-medium text-forest">{s.role}</p>}<p className="t-body mt-3 text-graphite">{s.body}</p>{s.url&&<a href={s.url} target="_blank" rel="noreferrer" className="link-underline mt-6 inline-flex items-center gap-2 text-sm">Visit {s.name} <ArrowUpRight size={15}/></a>}</div></article></Reveal>)}</div></section>
  <ClosingCTA title="Have a venture worth building together?" />
</>}
