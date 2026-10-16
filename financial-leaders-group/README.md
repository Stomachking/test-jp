# Financial Leaders Group · Strategy Map

An embeddable case-study component for the J.P. Morgan Private Bank APAC
[Financial Leaders Group](https://privatebank.jpmorgan.com/apac/en/who-we-serve/financial-leaders-group)
page. Today the page lists four strategy areas in one place and links to case studies in another, so a
reader never sees which strategy a client actually got, or why. This component joins the two: every
case lights up the strategy areas it drew on, and every strategy area can be used as a filter to find
the cases that used it.

## Files

| File | Purpose |
|---|---|
| `flg-strategies.css` | Component styles. Everything is scoped under `.flg`, so it will not restyle the host page. |
| `flg-strategies.js` | Content + renderer. Builds the whole component into one container. |
| `index.html` | Demo host page (what GitHub Pages serves). |
| `embed-snippet.html` | The three lines to paste into the page. |

## Embedding on a web page

```html
<link rel="stylesheet" href="/financial-leaders-group/flg-strategies.css">
<div id="flg-strategies"></div>
<script src="/financial-leaders-group/flg-strategies.js" data-target="#flg-strategies"></script>
```

Or, if you load the script yourself, call `window.FLGStrategies.init('#flg-strategies')`.
Fonts: the component uses Fraunces (headings) and Inter (body) when available and falls back to
Georgia / system sans. If the host page defines `--bg`, `--fg`, `--accent` and related tokens
(for example for a dark theme), the component picks them up; otherwise it renders white, brown and black.

## How the experience works

1. **Audience filter.** "Show situations for": Everyone, Private equity, Hedge funds & asset managers,
   Senior executives, Founders. Filters the case list.
2. **Case list** (left on desktop, a horizontal shelf on phones). Each card carries the client type,
   a one-line situation, a Published / Illustrative tag, and four dots showing which strategy areas
   the case used.
3. **Strategy map.** The four strategy areas from the page sit across the top. The ones used in the
   selected case fill in and connect down to the case with drawn lines. Clicking a strategy area
   opens its description (the page's own service copy) and filters the list to cases that used it.
4. **The story.** Situation, tailored strategy (one move per strategy area), outcome, plus a
   "What made it tailored" line, a key figure where the published case gives one, and an
   "Across J.P. Morgan" strip showing which parts of the firm were involved.
5. **Calls to action.** Talk to the Financial Leaders Group, and read the published case study.

Deep links: `#case-liquidity`, `#case-relocation`, `#case-concentrated`, `#case-windfall`,
`#case-gp`, `#case-shareplan` open that case.

## Content status

| Case | Status | Source |
|---|---|---|
| Funding a new market without raising capital (Jeanne) | Published | Case studies: Ready liquidity for life goals and investment opportunities |
| Buying a home abroad without selling down (Anneliese) | Published | Case studies: Ready liquidity for life goals and investment opportunities |
| Reducing the risk of a concentrated stock position | Published | Case studies on building a resilient portfolio for uncertain times |
| Putting a large liquidity event to work (Hao) | Published | Advising a client on a large liquidity event |
| Meeting GP commitments while carry is unrealised | Illustrative | Hypothetical; replace with an approved client case |
| Setting up an employee share plan before a listing | Illustrative | Hypothetical; replace with an approved client case |

Published cases are summarised from the linked articles and should be checked against the final
text before launch. Strategy area descriptions use the service copy from the Financial Leaders Group
page. The two illustrative scenarios are labelled as such in the UI and exist to show how a
Financial Leaders Group case (private equity, asset management) reads in this layout.

## Editing copy

All text lives in `PILLARS`, `ROLES` and `CASES` at the top of `flg-strategies.js`. Each case has
`situation`, `need`, `moves` (one per strategy area), `outcome`, `tailored`, an optional `fact`,
`firm` (which parts of J.P. Morgan were involved) and `source`. Set `status` to `published` or
`illustrative`; the tag, footnote and source link follow from it.

## Disclaimer

For information purposes only. Not investment, legal or tax advice.
