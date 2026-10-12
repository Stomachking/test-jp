# Asia Outlook Explorer (2026)

Interactive, question-led walkthrough of the key takeaways in J.P. Morgan Private Bank's
Asia Strategy Focus "2026 Asia Outlook" (18 Dec 2025).

Source article: https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/asf/2026-asia-outlook

## Files

- `index.html` — the web experience. Single file, no build step, no dependencies beyond Google Fonts.
  Works offline except for the fonts (falls back to system fonts).

## How it works

1. **Hero** with four headline numbers from the report.
2. **Market selector** — pick one or more of: The big picture, China, Japan, India, Taiwan & Korea, ASEAN.
3. **Journey** — one card per question (the report's own Q&A headings). Each card:
   - a "your call" poll (guess before you read),
   - the house view in one sentence,
   - an infographic built from the figures in that answer,
   - three key points, plus a collapsible fuller answer.
4. **Takeaways** — one line per question explored, with a copy button and a score
   of how often the reader matched the house view.
5. **Cross-asset implementation ideas** — a separate section (top-right button, or the
   cards at the bottom of the start page) with four ideas: Chinese equities, Japanese
   equities, Indian equities, Asia fixed income. Each shows the call, allocation size,
   what supports it, what to watch, how to implement, an infographic, and the full text.
   Three charts from the original (MSCI India vs Asia Pacific, relative P/E vs S&P 500,
   Asia HY default rates) are drawn as labelled schematics because the series data was
   not supplied; paste the series into `SERIES` in the script to replace them.

Deep links: `index.html?market=china` jumps straight into a chapter; `index.html?ideas=in` opens an implementation idea.

Theme: white background, black ink, brown accent. No dark mode.

## Status

| Chapter          | Status  |
|------------------|---------|
| The big picture  | Ready (3 questions, 3 infographics) |
| China            | Ready (5 questions, 5 infographics) — the pilot chapter for approval |
| Japan            | Preview (headline, 4 stats, 3 points) |
| India            | Preview |
| Taiwan & Korea   | Preview |
| ASEAN            | Preview |

Once the China format is approved, the preview chapters get the same treatment.
All content lives in the `CONTENT` object at the top of the script, so adding a
chapter means adding questions and picking or writing an infographic in `VIZ`.

## WeChat H5 plan (next phase)

The WeChat version reuses the same `CONTENT` data but is a separate page tuned for
WeChat's in-app browser:

- Pure vertical scroll, one question per screen, swipe or tap to advance; no multi-select.
- No Google Fonts (blocked in mainland China); system fonts, `PingFang SC` / `Noto Sans SC`.
- Simplified Chinese copy alongside English, with a language toggle.
- WeChat JS-SDK share card (title, thumbnail, description) so the page is shareable.
- Poll results stored locally only; no accounts.
- Infographics drawn as inline SVG at 390px-first so nothing depends on viewport scaling.
- Lightweight: single file, < 150 KB, no external scripts.

## Disclaimer

Independent educational summary. Not affiliated with or endorsed by J.P. Morgan. Not investment advice.
