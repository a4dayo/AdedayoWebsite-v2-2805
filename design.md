# adedayoawojobi.com — Design System

**Direction:** "Quiet Authority"
**Subject:** Adedayo (Dayo) Awojobi — Nigerian fintech operator, independent since Aug 2026
**Audiences:** VCs, tech founders, corporate organisations, boards
**Structural reference:** the "Augustine" editorial portfolio template — structure adopted, palette rejected

---

## 1. Principle

The site's entire mechanism is **verifiability**. Every claim on it is checkable in one search. The design must therefore read *institutional*, not *expressive* — a visitor should feel they are reading a record, not a pitch.

Consequences that override normal portfolio instincts:

- **No superlatives, no hype typography, no gradients, no glow.** His existing posters say "THE MASTERMIND" — that copy is dropped. Self-applied superlatives break the verification mechanism in front of a VC.
- **Hairline rules, never boxes.** Cards with borders and rounded corners read as template. Rules read as document.
- **Whitespace is the primary design element.** Density is reserved for the résumé block, where density signals substance.
- **Motion is near-absent.** One staggered page-load reveal. Nothing that draws attention to itself.

---

## 2. Colour

```css
--ink:        #0F1B14;  /* headings, body copy */
--warm-white: #FAF9F6;  /* page base */
--forest:     #1C4A2A;  /* links, interactive states, accent rules */
--graphite:   #4A5551;  /* secondary text, labels, meta */
--hairline:   #E3E0D9;  /* rules, dividers, borders */
```

**Deviation from the reference template — deliberate.** Augustine sits on a mint/duck-egg ground. That reads editorial-designer. Warm white `#FAF9F6` reads institutional, which is what a governance credibility claim needs. Locked.

Forest `#1C4A2A` is drawn from the Bankeasy palette, used only as accent. This gives continuity with his existing brand without making the personal site read as a Bankeasy sub-brand. The base palette stays neutral so the site reads as *his*.

**Usage rules**
- Accent is for emphasis and interaction only — never decoration, never large fills.
- No pure black (`#000`) and no pure white (`#FFF`) anywhere.
- Inverted sections (ink ground, warm-white type) are permitted **once per page maximum**, reserved for the single highest-value block.

---

## 3. Typography

| Role | Family | Notes |
|---|---|---|
| Display | **Instrument Serif** | High-contrast editorial serif. Echoes the "DAYO" lockup in his own poster. |
| Body / UI | **Instrument Sans** | Same foundry as the display face — pairs cleanly by design. |

**Deviation from plan, noted:** the plan locked Inter for body. Swapped to Instrument Sans — Inter is heavily overused and reads as default-SaaS, which undercuts the institutional tone. Instrument Sans is its superfamily partner, so the pairing is tighter than Instrument Serif + Inter would have been.

**Scale**

```
Hero claim      clamp(2.75rem, 7vw, 6rem)    Instrument Serif, 400, tracking -0.02em, leading 0.95
Section head    clamp(2rem, 4vw, 3.25rem)    Instrument Serif, 400, leading 1.05
Sub-head        clamp(1.25rem, 2vw, 1.75rem) Instrument Serif, 400
Lead paragraph  1.125–1.25rem                Instrument Sans, 400, leading 1.7, max 62ch
Body            1rem                         Instrument Sans, 400, leading 1.75, max 68ch
Meta / label    0.75rem                      Instrument Sans, 500, UPPERCASE, tracking 0.14em, graphite
Numeral (strip) clamp(1.5rem, 3vw, 2.25rem)  Instrument Serif, 400
```

**Section labels** are the template's strongest device: small letterspaced uppercase, preceded by an index numeral (`01 — ABOUT`), sitting above a hairline rule. Use throughout.

---

## 4. Layout

- **Grid:** 12 columns, gutter 24px, max content width 1240px. Text blocks never exceed 68ch regardless of column span.
- **Asymmetry is the default.** Content sits on columns 1–7 or 6–12, not centred. Centring is reserved for the nav and the closing CTA.
- **Vertical rhythm:** section padding `clamp(5rem, 12vh, 9rem)` top and bottom. Generous — crowding reads as anxious.
- **Rules:** 1px `--hairline`. A section-opening rule spans full width; a list-item rule spans its column only.

**Breakpoints:** 640 / 900 / 1240. Below 900 everything collapses to a single column and the résumé block's two tracks stack.

---

## 5. Signature components

### Hero
**Claim leads, name subordinate** — confirmed decision, and a departure from the reference template. Augustine makes the name the hero, which is correct for a designer selling taste and wrong for an executive selling a verifiable track record.

```
ADEDAYO AWOJOBI          ← meta label, uppercase, letterspaced, graphite
Fifteen years shipping product.        ← Instrument Serif, ink
Five inside Africa's hardest           ← line 2, forest accent optional on "hardest"
regulatory environment.
[lead paragraph, 62ch]
[closing line — forest, medium weight]
[CTA: Start a conversation]
```

Portrait (`/images/dayo-hero.jpg`) sits right, columns 8–12, slightly overlapping the credibility strip below. The overlap is the one grid-breaking move on the page.

### Credibility strip
Five facts, hairline-separated, horizontally scrolling on mobile. Numerals in Instrument Serif, labels in uppercase meta.

`15+ years` · `₦500bn+ processed` · `3,000+ merchants & agents` · `2 CBN licences secured` · `1 exit — CapitalSage, 2022`

### Selected Ventures — giant serif run
Lifted directly from the template's "Selected Clients" block: venture names set as **large Instrument Serif, slash-separated, wrapping across 2–3 lines**. This is why no logo files are needed — set type instead of logos. Sharper, no scraped PNGs, no asset dependency.

`payZeep / Bankeasy / ERCAS / Brandie / Kubicu / Motocare / LearnWazobia`

### Résumé block — two tracks, not Experience + Education
The template's two-column block is Experience + Education. **He has no education section** (attended Unilorin, no degree — omit entirely, absent is cleaner than vague). That column becomes **Licences & Governance**, which converts the gap into the differentiator.

Left column — **Operating roles** (primary spine).
Right column — **Licences & Governance**.
His contract/freelance history has heavy date overlap (GQbuzz 2012–2020 runs concurrent with five other roles). Render as a **secondary collapsible track**, not inline — a naive vertical timeline reads as padding to a diligence-minded reader.

### Advisory tiers
He selected all six engagement types. A page that reads "I'll do anything" converts worse than one with a front door, so the page is **tiered, not filtered**:
- **Primary:** advisory retainers · fractional exec (COO/CPO) · board & NED
- **Secondary:** corporate consulting for payments entry · speaking
- **Quiet line:** open to the right full-time executive role — one sentence, not a headline.

---

## 6. Imagery

| Asset | Use |
|---|---|
| `/images/dayo-hero.jpg` | Hero. Seated, brown turtleneck, warm direct expression. |
| `/images/dayo-full.jpg` | About page side-column figure. |
| `/images/dayo-avatar.jpg` | Byline, avatar, small contexts only — softens above ~400px. |
| `/images/og.jpg` | Social card. |

**Watermarks removed by crop, not by cloning.** Both studio frames carried a "Saan Studio" mark top-right; the top ~8% / ~6% of each frame is cropped away, which removes the mark entirely and yields a tighter face-at-scale hero. No pixels were altered. Licensing with Saan Studio should still be settled before Phase 2.

Photography is always **full-bleed within its column, never in a rounded card**, and never overlaid with text except in the one hero overlap.

---

## 7. Motion

One page-load reveal: opacity 0→1, translateY 12px→0, 500ms, `cubic-bezier(.2,.6,.2,1)`, staggered 60ms by element. Scroll reveals use the same values, triggered once. Links transition colour 150ms. **Nothing else moves.** No parallax, no counters, no marquees.

`prefers-reduced-motion` disables all of it.

---

## 8. Anti-patterns for this site specifically

- Rounded card grids — reads template, kills the document feel
- Any purple, any gradient, any drop shadow
- Icon sets used decoratively (icons only where they carry meaning)
- Stock photography of any kind
- Superlatives in copy: "mastermind", "visionary", "guru", "brain behind"
- Stating deal terms or valuation for the ERCAS exit — none are public
- Writing ERCAS's full legal entity name — sources conflict, so **"ERCAS"** unqualified
- Overstating licence status — wording must be defensible in a CBN meeting
