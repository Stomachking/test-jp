# Asia Outlook Explorer (2026)

An embeddable, question-led interactive edition of J.P. Morgan Private Bank's
Asia Strategy Focus "2026 Asia Outlook" (18 Dec 2025). Article copy, "test yourself"
polls and an infographic for every answer, market by market, plus a cross-asset
implementation ideas section.

Source article: https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/asf/2026-asia-outlook

## Files

| File | Purpose |
|---|---|
| `asia-outlook.css` | Component styles. Everything is scoped under `.ao`, so it will not restyle the host page. |
| `asia-outlook.js` | Content + infographics + renderer. Builds the whole component into one container. |
| `index.html` | Demo host page (what GitHub Pages serves). |
| `embed-snippet.html` | The three lines to paste into an article page. |

## Embedding on a web page

```html
<link rel="stylesheet" href="/asia-outlook-2026/asia-outlook.css">
<div id="asia-outlook"></div>
<script src="/asia-outlook-2026/asia-outlook.js" data-target="#asia-outlook"></script>
```

Or, if you load the script yourself, call `window.AsiaOutlook.init('#asia-outlook')`.
Fonts: the component uses Fraunces (headings) and Inter (body) when available and
falls back to Georgia / system sans. Load them from Google Fonts or the host's own
font stack; the demo page shows the Google Fonts link.

## Page structure

1. **Masthead** with four headline numbers from the report.
2. **Choose what to explore** — toggle chips for The big picture, China, Japan, India,
   Taiwan & Korea, ASEAN and Implementation ideas. Hidden sections are removed from the
   jump bar and the scorecard. "Only the ready chapters" hides previews.
3. **Sticky jump bar** that tracks the section in view.
4. **One section per market.** Section intro copy, then one block per question with:
   - the question heading and the article copy (always visible),
   - three key points and a one-line takeaway,
   - a "Test yourself" poll (guess, then see the house view),
   - an infographic built from that answer's figures.
5. **Cross-asset implementation ideas** — allocation overview, then four ideas
   (Chinese, Japanese, Indian equities, Asia fixed income). Each shows the call, the
   full copy, an infographic, and what supports it / what to watch / how to implement.
6. **Scorecard** — how often the reader matched the house view, plus every takeaway from
   the sections they chose, with a copy button.

Deep links: `?market=china` shows only that section; `#china-q3`, `#ideas`, `#idea-fi`
jump to a block.

## Status

| Section | Status |
|---|---|
| The big picture | Ready (intro copy, 3 questions, 3 infographics) |
| China | Ready (intro copy, 5 questions, 5 infographics) — pilot chapter |
| Japan, India, Taiwan & Korea, ASEAN | Preview (intro copy, key figures, 3 points) |
| Implementation ideas | Ready (4 ideas with full copy) |

Three charts named in the original (MSCI India vs Asia Pacific, relative P/E vs S&P 500,
Asia HY default rates) are drawn as labelled schematics because the series were not
supplied; paste the series into `SERIES` in `asia-outlook.js` to replace them.

## Editing copy

All text lives in `CONTENT` (markets) and `IMPL` (ideas) at the top of `asia-outlook.js`.
Each question has `copy` (article paragraphs), `points`, `takeaway`, `poll` and `viz`.
Copy for the preview chapters was reconstructed from the published article and should be
replaced with the final text.

## WeChat H5 plan (next phase)

Same `CONTENT` data, separate page tuned for WeChat's in-app browser: one question per
screen, vertical swipe, no Google Fonts (system `PingFang SC`), Simplified Chinese copy
with a language toggle, WeChat JS-SDK share card, single file under 150 KB.

## Disclaimer

Interactive edition for educational purposes. Not investment advice.

## Design boards

`design/` holds the seven artboards from the Claude Design canvas (visual direction v1) and an
`index.html` that previews them. The live, editable canvas is at https://claude.ai/artifact/BBaqivgrPnRVcQA1GRoKzF.
