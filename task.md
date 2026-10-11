# adedayoawojobi.com — build log

## Status: Phase 1 built, verifying visually

App root: `/home/user/adedayoawojobi` · web port **4200** · dev server running in tmux session `web`

## Decisions locked this turn
- Palette: warm white `#FAF9F6` (rejected template's mint ground)
- Hero: claim leads, name subordinate
- Template's Education column → **Licences & Governance**
- Ventures set as giant serif type run, not logos (solves missing SVGs)
- Body font: **Instrument Sans**, not Inter (skill flags Inter as overused; Instrument Sans is the superfamily partner of Instrument Serif)
- Advisory: all six engagement types kept but **tiered**, not filtered
- Closing line (his words): "Good ideas deserve the operating system to become real."

## Done
- [x] Watermarks removed by crop (hero -8% top, full-length -6%) — verified visually, no pixel cloning
- [x] Assets → `packages/web/public/images/` (dayo-hero, dayo-full, dayo-avatar, og)
- [x] `design.md` written at app root
- [x] Design tokens in `styles.css`
- [x] `components/primitives.tsx` (Reveal, SectionLabel, SerifRun, Stat)
- [x] `components/layout.tsx` (nav + footer)
- [x] Home, About, Advisory, Contact
- [x] Contact form → oRPC `enquiries.create` → Turso. `db:push` applied. **Verified: POST returned `{id:1,received:true}`**
- [x] `bun run build` passes
- [x] Dev server up on 4200

- [x] Fixed home-page horizontal overflow — `SerifRun` wrapped each venture name + its slash in one `<span>`, so the run could not break. Now `flex flex-wrap items-baseline` with the slash as its own child. All four pages measure 1009/1009 (sw/cw); 390px screenshot clean.
- [x] Test enquiry row id=1 deleted — `enquiries` table now empty

## Cleanup needed
- none open

## Deferred (Phase 2)
- `/ventures`, `/work`, `/governance`, `/writing`, `/speaking` — removed from nav so nothing dead-ends
- Testimonials (3–5 named; CapitalSage-side contacts strongest)
- Saan Studio licensing conversation
- Re-check `motocare.ng` vs `motocare.com.ng` before linking
- GrowMoney held back until launch

## Copy guardrails (do not violate)
- No superlatives. No "mastermind" / "brain behind".
- ERCAS unqualified — never the full legal entity name (sources conflict)
- Never state ERCAS deal terms or valuation — none public
- Licence wording must survive a CBN meeting
- Governance frameworks described, never published (PayZeep confidential)
- No education section
- Personal mobile + gmail never on the site
