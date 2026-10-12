export const SERVICES = [
  {
    name: "Business Clarity Sprint",
    fit: "For founders facing too many possibilities and no clear next move.",
    body: "Turn an idea or a stalled business into a focused decision: who it serves, which problem matters and what to prioritise next.",
    outputs: ["Problem and customer definition", "Business assumptions and constraints", "Prioritised next-step action plan"],
    format: "Focused diagnostic engagement",
  },
  {
    name: "Business Model & Venture Blueprint",
    fit: "For a new venture or a business rethinking how it creates value.",
    body: "Connect the customer proposition to the commercial model. Shape a business that can be tested before you commit to building it.",
    outputs: ["Value proposition and customer segments", "Revenue model and operating assumptions", "Validation roadmap and venture blueprint"],
    format: "Project-based strategy engagement",
  },
  {
    name: "Product-to-Market Blueprint",
    fit: "For teams moving from a product idea to a credible market entry.",
    body: "Bring product scope, positioning and distribution into one plan. Decide what to launch, for whom and how to learn from the market.",
    outputs: ["Product priorities and launch scope", "Positioning and route-to-market", "Launch milestones and success measures"],
    format: "Project-based product and go-to-market engagement",
  },
  {
    name: "Fintech Launch & Regulatory Strategy",
    fit: "For founders and organisations entering regulated financial services.",
    body: "Map the licence or partnership route alongside product and operating requirements. Draw on hands-on experience building CBN-licensed payments and banking businesses.",
    outputs: ["Licence-versus-partnership assessment", "Regulatory readiness and governance priorities", "Sequenced launch and operating roadmap"],
    format: "Specialist strategy engagement",
  },
  {
    name: "Fractional Strategy & Growth Advisory",
    fit: "For businesses needing an experienced strategic partner without a full-time appointment.",
    body: "Work alongside leadership on the decisions that connect strategy to execution: product direction, commercial priorities and the operating model underneath growth.",
    outputs: ["Leadership decision support", "Growth priorities and execution reviews", "Alignment across product, commercial and operations"],
    format: "Ongoing advisory engagement",
  },
  {
    name: "Venture Building Partnership",
    fit: "For founders and partners who need more than a strategy document.",
    body: "Collaborate from venture design into execution, connecting business modelling, product development and go-to-market. The partnership is scoped around the venture and the team.",
    outputs: ["Venture development plan", "Product and commercial execution priorities", "Agreed responsibilities and operating cadence"],
    format: "Selective, individually scoped partnership",
  },
] as const;

export const ENGAGEMENT_TYPES = [
  "Business Clarity Sprint",
  "Business Model & Venture Blueprint",
  "Product-to-Market Blueprint",
  "Fintech Launch & Regulatory Strategy",
  "Fractional Strategy & Growth Advisory",
  "Venture Building Partnership",
  "Not sure yet",
] as const;

export const BUDGET_OPTIONS = ["To be discussed", "Under ₦1m", "₦1m–₦3m", "₦3m–₦5m", "₦5m+", "Prefer to discuss in another currency"] as const;
export const TIMELINE_OPTIONS = ["Exploring / no fixed date", "As soon as possible", "Within 1 month", "Within 3 months", "Later than 3 months"] as const;