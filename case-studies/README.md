# Tailored Strategies · Case studies component

An embeddable component that presents **tailored strategies inside case studies** for a
"who we serve" page such as J.P. Morgan Private Bank's Financial Leaders Group
(https://privatebank.jpmorgan.com/apac/en/who-we-serve/financial-leaders-group).

The reference page lists the group's capabilities (banking and treasury, structured lending,
investment access, liquidity) as a general list. This component makes the same point the way
the audience actually reads it: through people like them. Each case study shows one client's
situation, how the four pillars were weighted for them, and what changed.

## Design in one paragraph

Four pillars (Banking, Lending, Investing, Planning) stay constant; the combination changes per
client. The reader first picks the situations that sound like theirs, the component surfaces the
closest case, and the case detail reads as a five-step story: situation, priorities, the tailored
strategy (each strategy explains *why for this client* and *what it unlocked*), outcome, and a
"could this be you" fit check with a contact call to action. A strategy map at the bottom puts all
cases side by side so "tailored" is visible rather than claimed.

## Files

| File | Purpose |
|---|---|
| `case-studies.css` | Styles, scoped under `.cs` so they do not restyle the host page. White / brown / black palette, Fraunces + Inter, matching the Asia Outlook component. |
| `case-studies.js` | Content (`CONTENT`, `SITUATIONS`, `PILLARS`) and renderer. Builds the component into one container. |
| `index.html` | Demo host page (what GitHub Pages serves at `/case-studies/`). |
| `embed-snippet.html` | The three lines to paste into the article page. |

## Embedding

```html
<link rel="stylesheet" href="/case-studies/case-studies.css">
<div id="case-studies"></div>
<script src="/case-studies/case-studies.js" data-target="#case-studies"></script>
```

Or load the script yourself and call `window.CaseStudies.init('#case-studies')`.
Deep links: `#cs-pe`, `#cs-hf`, `#cs-ceo`, `#cs-fo` open a case directly.

## Component structure

1. **Intro** with the disclosure that scenarios are illustrative composites.
2. **Situation matcher**: eight toggle chips (fund launch, carried interest, concentrated position,
   liquidity event, cash & treasury, cross-border family, succession, private-markets access).
   Selecting any of them sorts the case cards by overlap, dims non-matches and opens the best match.
3. **Case rail**: four cards (persona, headline, situation tags, match count). Tabs for the detail.
4. **Case detail**
   - Sticky profile rail: client profile facts, animated *wealth shape* before/after bars, three outcome numbers.
   - Journey: 1 The situation · 2 What mattered most · 3 The tailored strategy (four pillar cards; each
     strategy expands to "why for this client" and "what it unlocked"; pillars not used are shown as
     "already in place" so the weighting is honest) · 4 How it played out (quote) · 5 Could this be you
     (fit check that lights up the situations the reader selected, plus CTA and "next case").
5. **Strategy map**: pillars × clients table. Click a cell to open that case.

## Motion and icons

- Intro: an orbit graphic of the four pillar icons circling "You", slowly rotating.
- Every situation chip, persona, pillar and journey step carries a line icon from the `I` map in `case-studies.js`.
- Pillar weight bars in the case header fill in when a case opens; outcome numbers count up; the
  "after" wealth-shape bar grows from the "before" widths.
- Sections and journey steps reveal on scroll (IntersectionObserver); strategy accordions slide open.
- Long copy is clamped to three lines with a "Read the full story" toggle.
- Everything respects `prefers-reduced-motion`.

## Content

Four illustrative composites: a private equity partner (Hong Kong), a hedge fund founder spinning
out (Singapore), an asset-management CEO after a sale (Tokyo) and a second-generation family-office
principal (Sydney). All copy, figures and quotes are invented to demonstrate the format and must be
replaced with approved material before publication. Edit `CONTENT` in `case-studies.js`; every case
has `facts`, `shape`, `situation`, `priorities`, `strategies` (by pillar), `outcomes`, `quote` and `fit`.

## Not yet done

- Real case material and compliance-approved wording.
- The contact CTA points at `#contact`; wire it to the page's enquiry form.
- Optional: a Simplified / Traditional Chinese and Japanese copy layer, as planned for the Asia Outlook component.
