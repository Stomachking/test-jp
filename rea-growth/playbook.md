# REA growth playbook: how five rivals grow in Asia, and what J.P. Morgan Private Bank Asia can copy

Prepared 2026-11-01 for privatebank.jpmorgan.com/apac (the user). Targets: Goldman Sachs Private Wealth Management, UBS Global Wealth Management, HSBC Private Bank, Morgan Stanley Private Wealth Management, BlackRock (wealth channel). Stage assumed: scaling. Budget cap: the team's treg balance of 0.90 USD. Country lens: APAC (Hong Kong, Singapore) with US databases where only those exist. No affiliation with any brand studied.

Every finding is marked **SEEN** (a call result shows it, linked) or **INFERRED** (reasoned from what was seen). Images could not be downloaded from this environment, so every thumbnail is "not read".

## The answer in one paragraph

Across the five rivals the growth machine is the same three parts, run at different intensities. First, a **proof-led brand**: awards, a named CEO and headline numbers sit in the hero of the site and in the footnote of every ad (SEEN on all five home pages and in J.P. Morgan's own LinkedIn ads). Second, **one proprietary report per year turned into a quarter of paid and organic content**: HSBC's Global Entrepreneurial Wealth Report 2026 produced 169 LinkedIn ads in APAC, the site hero, organic stat posts and press within three weeks (SEEN). Third, **search and AI answers won with concrete facts on product pages**: ChatGPT ranks J.P. Morgan second for alternatives in Hong Kong because the APAC alternatives page states "nearly 300 specialists" and "US$227bn client commitments" (SEEN), while third-party guides, not banks, define the "minimum to open an account" answer (SEEN). Paid search clicks grew for all six brands between December 2025 and September 2026 while organic clicks fell for all six (SEEN, SpyFu US), so nobody is winning on organic traffic. The fastest copyable moves for J.P. Morgan Asia are: run the 2026 Family Office Report the way HSBC ran its entrepreneur report, publish fact-dense eligibility and family-office pages for AI answers, and replace event-recap posts (58 to 68 reactions) with the question-led explainer videos that already outperform them (248 to 288 reactions).

## 0. Setup and what was adapted

- **Inputs.** Mode: full. User: J.P. Morgan Private Bank Asia, privatebank.jpmorgan.com/apac. Targets: five brands (the skill assumes one; every step was run per brand). Stage: scaling (assumed from 3.5K advisors and US$2.7T client assets on the APAC home page, SEEN). Cap: 0.90 USD balance (skill default is 3 USD). Country: APAC, with Serpstat g_us and g_hk and SpyFu US as the only databases available.
- **Skill access.** treg.to is blocked by this environment's network policy, so the skill text was pasted in by the user and followed from there. The treg MCP server itself worked.
- **Not run.** Step 2 (tech stack, news, financing via PredictLeads) was skipped to stay under the cap: six brands at 0.04 USD per call per report would have used most of it. TikTok, Instagram and X pulls were skipped; none of the six links a TikTok account from its wealth site, and the X handles are group-level (SEEN on the J.P. Morgan footer). Backlinks (step 8) were pulled but the referring-domain lists are dominated by link-seller and news-aggregator domains, so no product loop was read from them.

## 1. The sites (SEEN, treg.web.extract, 2026-11-01)

| Brand | Hero | Proof shown | Sign-up path | Segments named |
|---|---|---|---|---|
| J.P. Morgan PB Asia | AI data-privacy article; 2026 Asia Mid-Year Outlook; "Trending Topics: see what clients are reading" | 2025 World's Best Private Bank; 75+ offices; 3.5K advisors; $2.7T client assets (as of 30 Jun 2024); 4 award badges | "Contact us" flow (#contactus-flow), sign-in split US / non-US | Business owners, family office, financial leaders, innovation economy, institutional families, next generation, women and wealth |
| HSBC Private Bank | "In a world full of connections, we help you make the right ones"; Global Entrepreneurial Wealth Report 2026 | None on home | "Become HSBC Private Banking client" form | Entrepreneurs: passing on, selling, life after exit; family enterprise succession |
| Goldman Sachs PWM | "Powering Global Wealth: internationally recognized as the best private bank for UHNW" | 1:25 advisor-to-client ratio; Euromoney 2026 World's Best for UHNW (incl. Asia's Best for UHNW and Alternatives); Global Finance 2026 Best for Net Worth over $25M | "Start the Conversation" form | Family office, Apex family office coverage, institutional client solutions, sports and entertainment |
| Morgan Stanley PWM | "With exceptional wealth comes exceptional complexity" + team video with five named leaders | Formed 1977; alternatives platform incl. digital assets | "Contact / Find a Private Wealth Advisor" | Business owners, entrepreneurs, single family offices, next generation; Lifestyle Advisory concierge; exclusive events |
| UBS GWM | "Pursue what matters to you most"; UBS Wealth Way | Best Global Private Bank and Best CIO (PWM/The Banker 2025); "largest truly global wealth manager" | "Let's talk / Connect with us" | Individuals and families, women's wealth, entrepreneurs |
| BlackRock HK | Q4 2026 outlook "Scarcity vs. abundance"; featured funds | iShares 1600+ ETFs, US$5.4T | Fund search; intermediaries site | Intermediaries; institutional link |

Handles found on the sites (SEEN): J.P. Morgan PB links linkedin.com/company/jpmorganprivatebank-us, instagram.com/jpmorganprivatebank, the group X and Facebook accounts and WeChat; HSBC PB links youtube.com/user/HSBC and linkedin.com/company/hsbc-private-bank; Morgan Stanley links a LinkedIn showcase page for PWM. Goldman Sachs, UBS and BlackRock show no handles on the pages read.

Pages that returned 404 (blocked list): goldmansachs.com/what-we-do/wealth-management/private-wealth-management (the live page is privatewealth.goldmansachs.com), ubs.com/hk/en/wealth-management.html, blackrock.com/hk/en/intermediaries.

## 3. When they grew (SEEN, SpyFu US, Oct 2025 to Sep 2026; CSV: rea/traffic/spyfu_monthly.csv)

SpyFu resolved privatebank.jpmorgan.com to jpmorgan.com and privatebanking.hsbc.com to hsbc.com, so those two rows describe the whole group domain, not the private bank. Every row is the US Google database.

| Brand (SpyFu domain) | Organic clicks Oct 25 | Organic peak | Organic Sep 26 | Organic change Oct 25 to Sep 26 | Paid clicks Dec 25 | Paid clicks Sep 26 | Paid multiple | Largest paid step |
|---|---|---|---|---|---|---|---|---|
| J.P. Morgan (jpmorgan.com) | 920,300 | 1,035,000 (Feb 26) | 649,500 | -29.4% (-37.2% from peak) | 98,880 | 785,000 | 7.9x | Feb 26, +127% |
| Goldman Sachs | 246,200 | 248,000 (Jan 26) | 196,900 | -20.0% | 19,460 | 34,080 | 1.8x | Apr 26, +20% |
| UBS | 189,100 | 189,100 (Oct 25) | 162,300 | -14.2% | 147,100 | 565,800 | 3.8x | Mar 26, +158% |
| HSBC (hsbc.com) | 336,000 | 355,600 (May 26) | 302,500 | -10.0% | 34,580 | 237,600 | 6.9x | Mar 26, +124% |
| Morgan Stanley | 439,200 | 439,200 (Oct 25) | 396,700 | -9.7% | 69,250 | 158,700 | 2.3x | Jan 26, +45% |
| BlackRock | 297,900 | 320,000 (Jul 26) | 289,600 | -2.8% | 20,350 | 79,570 | 3.9x | Aug 26, +30% |

- **Inflection.** All six paid-click series jump in December 2025 (for example J.P. Morgan 1,607 to 98,880). A step of that size in the same month for six unrelated advertisers is a SpyFu methodology change, not a market event (INFERRED). The real, sustained step-ups are February to March 2026: J.P. Morgan +127% (Feb), UBS +158% (Mar), HSBC +124% (Mar). That is the inflection the rest of this report compares before and after.
- **Organic falls everywhere.** All six lose organic clicks over the twelve months, most steeply after February 2026. Serpstat shows every brand now receiving six-figure monthly traffic "from AI Overviews" and thousands of AI Overview citations (SEEN, rea/search/serpstat_overview.csv), so the fall is consistent with answers being served on the results page (INFERRED).
- **Hong Kong database.** Serpstat g_hk visibility: UBS 69.5, BlackRock 38.1, Morgan Stanley 15.9, Goldman Sachs 8.7; J.P. Morgan PB and HSBC PB subdomains have no visibility score and 1,421 and 508 keywords respectively (SEEN). UBS is the only wealth brand with a strong Hong Kong search footprint.

## 4. Search and AI answers

**What the traffic actually is (SEEN, Serpstat g_us ranked keywords, rea/search/top_keywords_g_us.csv).**

- J.P. Morgan PB: the subdomain's estimated 1.17M monthly US visits are Chase retail spillover. The top six keywords are "chase bank company", "chase jpmorgan chase bank", "chase logon login", "chase morgan bank login" (landing on /apac/en/login), "jp morgan" and "personal banking services". None is a wealth-intent query.
- Goldman Sachs: insights pages carry the traffic ("japan yen dollar" 142k est. clicks, "future of gold" 33k); the Ayco page ranks #1 for "wealth management service" (27,100 searches a month).
- Morgan Stanley: utility content wins generic intent. The 2026 tax-tables PDF ranks #1 for "tax brackets 2026" (201,000 searches), /newsletter/subscribe ranks #4 for "newsletter stock market" (201,000), and the wealth-management page ranks #3 for "asset management company near me" (550,000).
- HSBC PB: the Wealth Insights Hub ranks for educational terms ("discretionary fund management meaning" #3, "open end fund" #1, "high end collectables" #4) and the brand ranks for its golf sponsorship ("wgc hsbc golf").
- UBS: brand and login terms only on the first page of 25; one wealth insight page ranks for "ubs".
- BlackRock: ETF tickers and product pages, plus an education page at #1 for "invest investment" (201,000).

**AI answers (SEEN, ChatGPT via cloro, country Singapore, 2026-11-01, rea/ai-answers/chatgpt.csv).**

| Buyer question | Order brands are named | J.P. Morgan pages cited | Who else is cited |
|---|---|---|---|
| Best private bank in Asia for a family above US$50M (five named) | J.P. Morgan, UBS, Goldman Sachs, HSBC, Morgan Stanley; shortlist J.P. Morgan (family office), UBS, Goldman Sachs | /apac/en/services/wealth-planning-and-advice/family-office-services; /apac/en/who-we-serve/family-office; /apac/en/about-us/awards | Euromoney 2026 results page; Morgan Stanley PWM Asia page |
| Setting up a single family office in Singapore: which banks to talk to | DBS, Bank of Singapore, UBS, J.P. Morgan, Citi, HSBC, Julius Baer, Pictet (Goldman Sachs and Morgan Stanley absent); J.P. Morgan minimum quoted "US$10 to 25m+" | privatebank.jpmorgan.com (footnote only) | vccsingapore.com (4 pages), wealthmanagement.sg (4 pages), chambers.com, mas.gov.sg, Bank of Singapore media release, ubs.com/sg about-us |
| Minimum to open a private bank account in Hong Kong and best platform for alternatives | UBS 1, J.P. Morgan 2, HSBC 3, Citi 4, Endowus 5 (Goldman Sachs and Morgan Stanley absent) | /apac/en/services/investing/alternative-investments, quoted for "nearly 300 specialists", "US$227bn client commitments (March 2026)" and the 2025 PWM/The Banker award | ubs.com/hk alternatives and Unified Global Alternatives pages; asia.privatebanking.hsbc.com.hk alternatives; third-party minimum guides (chmfia.org, clearmoneyguide.com, wiki.private.law) |

- **What works (INFERRED from the three answers).** Pages with explicit numbers, named teams and dated awards get quoted verbatim. The Singapore family-office answer is built from third-party guides because no bank publishes a page that answers "13O/13U, minimum, how to open" in plain terms. Goldman Sachs and Morgan Stanley are absent from two of three answers; UBS is present in all three.

## 5. Ads (SEEN, 2026-11-01; CSVs in rea/google-ads, rea/linkedin-ads, rea/meta-ads)

**Google Ads Transparency (adyntel, first page of 40 per brand).**

| Brand | Creatives in library | Advertisers | Oldest still running | Flights in the last 12 months |
|---|---|---|---|---|
| J.P. Morgan PB (subdomain) | 0 | none | none | none (root jpmorgan.com not queried) |
| Goldman Sachs | 500 | Goldman Sachs & Co. LLC (text) + MightyHive (agency display and video) | 2024-07-01 | Oct 30, Nov 7 2025; Jan 1, Jan 5, Mar 3, Mar 16, Apr 11, Apr 13, Sep 2 2026 |
| UBS | 8,000 | UBS Switzerland AG, UBS Business Solutions AG, UBS Europe SE | 2022-08-13 | Sep 16 2025; Apr 18, Jun 20, Sep 21, Sep 24, Oct 7 2026 |
| HSBC PB (subdomain) | 0 | none | none | none (root hsbc.com not queried) |
| Morgan Stanley | 2,000 | three Morgan Stanley entities | 2024-10-21 | Jun 18, Jul 16, Aug 10 2025; May 8, Jun 2, Jun 16, Jun 21, Aug 21, Oct 1 2026 |
| BlackRock | 2,000 | BlackRock Inc. (two accounts), Mindshare (agency), plus Hong Kong, Japan, Australia and Taiwan entities | 2024-08-14 | 28 start dates from Mar 4 to Sep 28 2026, most by Mindshare and the local entities |

Creative text is served as images in the library and could not be read (not read). A creative running since 2022 (UBS) or mid-2024 (Goldman Sachs, Morgan Stanley, BlackRock) is a 60-day-plus winner by the skill's rule (SEEN start dates).

**LinkedIn Ad Library (harvestapi, APAC country filter HK, SG, AU, JP, IN, TW, CN, current year).**

| Brand | Ads in filter | What runs | Format | Creative date |
|---|---|---|---|---|
| J.P. Morgan Private Bank | 492 | Fixed income: "Portfolio diversification. Reliable income. Stability among volatility. Explore fixed income strategies at the World's Best Private Bank* (Global Finance 2026)". Mobility: "Planning your next chapter abroad? Navigate next steps with the tried and tested advice of our wealth advisors." EN and Simplified Chinese variants (筹划海外人生新篇章, 多元配置，稳享收益，驾驭波动) | Single image 1200x1200 and 1200x628 | 2026-05-26 (image timestamp) |
| HSBC Private Bank | 169 | Global Entrepreneurial Wealth Report 2026 stat cards: "AI is now the #1 reason entrepreneurs feel bullish", "$367bn in planned AI investment, according to 3,000+ business owners", "64% of entrepreneurs are considering a local acquisition or merger", "Entrepreneurs trust AI, but it varies"; document ads "Wealth has a way of getting more complex the longer it lasts" | Stat-card images + native document carousels | 2026-10-06 |
| UBS | 1,237 | UBS Asset Management emerging-markets and income campaign ("Opportunity in a changing world", "Build resilience for changing markets", "Is it time to rethink diversification?"); group earnings video; AI Factory documents; campus posts. No wealth client-acquisition ad on the first page | Image, video, document | 2026-09-30 to 2026-10-28 |
| BlackRock | 155 | "Closer than you think / This is Asia's moment" ASEAN campaign (image, video, carousel); "New angles on portfolio construction" (hedge fund, multi-asset, ETF sets); "Built for bumps: three ways to navigate volatility" video with the Global Chief Investment Strategist; Asian fixed income video | Image, video, carousel | 2026-08-20 to 2026-10-28 |
| Morgan Stanley | 85 | Investment Management only: "The right alternatives platform is closer than you think" for Singapore and Australia, institutional and intermediary variants. No PWM Asia ad | Single image | 2026-07-31 |
| Goldman Sachs | 30 | 10,000 Women India (16 variants), Fortune Most Powerful Women post, AI analysis video, analyst-class video, GSAM insurer survey. No wealth ad | Image, video | 2026-04-15, 2026-09-30 |

J.P. Morgan is the only one of the six running private-bank client-acquisition ads on LinkedIn in APAC, and the only one running them in Chinese (SEEN).

**Meta Ad Library (scrapecreators, active ads, 2026-11-01).**

| Brand | Active ads | What runs |
|---|---|---|
| UBS | 698 | Localized wealth campaigns: Japanese "UBSのCraftとは？" and next-generation pages ("資産の未来を、再定義する", "世代を超えて、価値をつなぐ" linking to /jp/ja/wealthmanagement/who-we-serve/next-generation); English "With you, wherever your legacy leads"; Spanish and Portuguese "Hable con un Asesor / Fale com um Client Advisor" with a Contact-us button; German and Italian "UBS My Way" mandates. Oldest active 2026-08-05 |
| Morgan Stanley | 58 | Content series: "Hard Lessons" (iconic investors on two out-of-consensus calls; episode with Jean Eric Salata, Chair of EQT), "The Morgan Stanley Blueprint: Bloom Energy", "Exceptional Leaders: Hinge Health", "Morgan Stanley Institute: The Signal newsletter" |
| Goldman Sachs | 40 | 10,000 Small Businesses program (brand, not wealth) |
| BlackRock | 15 | Taiwan ETF ads in Traditional Chinese (009834 gold miners, 009835 critical resources, 2026-10-28) and a Barron's partnership article "Half of Models Now Hold Active ETFs" |
| J.P. Morgan Private Bank | 0 | No page found under the name |
| HSBC Private Banking | not found | No page id found under the name |

## 6. Who talks about them (SEEN, 2026-11-01; rea/youtube, rea/reddit)

- **YouTube, most-viewed results.** Third parties dominate every brand. J.P. Morgan: Bloomberg's Jamie Dimon profile 4.25M, Graham Stephan's "$10 Million Dollar Invite-Only Credit Card: The JP Morgan Reserve" 3.80M, a Spanish ex-banker interview 2.35M; the brand's own best are two one-minute Shorts, "Meet J.P. Morgan Advisor Tammia" 885k and "Meet J.P. Morgan Advisor Shaakira" 354k, and "Day in the Life of a Private Client Advisor" 211k. A creator explainer "Difference Between JP Morgan Private Bank vs JP Morgan Chase" has 58k views, which says the brand-confusion seen in search also shows up in video (INFERRED). UBS: two South China Morning Post profiles of UBS Asia wealth leaders ("Jin Yee Young of UBS applies gymnastic discipline to market insights" 131k, one month old; "LH Koh of UBS learns how to build trust with clients through painting" 126k, five months old) read as a sponsored series (INFERRED from identical format and cadence; the label was not read). HSBC: a "Navigate with HSBC" podcast on private credit (179k) and an NRI episode on CNBC-TV18 (102k). Morgan Stanley: CNBC clips of its wealth strategists (63k to 72k) and its own "History of Morgan Stanley" (69k). Goldman Sachs: a four-year-old interview with its global head of wealth management has 2.47M views on a third-party channel.
- **Reddit.** The provider's "top" sort returned sitewide posts unrelated to the query for all six brands (no signal). A relevance search for "JP Morgan Private Bank" over the past year found three items of note: a realtor re-sharing a J.P. Morgan Private Bank presentation slide to two local subreddits (scores 10 and 5), and a cross-posted complaint in r/fatFIRE and r/Rich (scores 9 and 5, 19 comments) that the bank "no longer do holistic lending, just 50% of portfolio value". That is the only complaint signal found anywhere in this run.

## 7. Their own LinkedIn content (SEEN, harvestapi company posts, posts dated Oct 1 to Oct 30 2026, posts under 7 days old dropped; CSV rea/linkedin/posts.csv)

Images, covers and video frames were not downloadable from this environment, so every "look" item is not read. Patterns below are counted on format, first lines and reactions only.

| Page | Followers | Posts in month | Posts per week | Median reactions | Top-quarter formats | Bottom-half formats |
|---|---|---|---|---|---|---|
| J.P. Morgan Private Bank (jpmorganprivatebank-us) | 324,856 | 14 | 3.5 | 97 | video 2, image 1, document 1 | multi-image 4, document 2, video 1 |
| Goldman Sachs | 6,204,516 | 20 | 5.0 | 376 | image 3, multi-image 1, video 1 | video 7, document 2, article 1 |
| UBS | 2,298,369 | 40 | 10.0 | 134 | image 5, video 3, document 2 | document 14, video 3, image 2, article 1 |
| HSBC Private Bank | 178,837 | 22 | 5.5 | 64 | image 5, video 1 | image 5, multi-image 2, video 2, text 1, article 1 |
| Morgan Stanley | 4,579,419 | 25 | 6.2 | 195 | image 3, multi-image 2, video 1, article 1 | video 5, document 4, image 1, article 1, text 1 |
| BlackRock (global page) | 3,274,227 | 6 | 1.5 | 32 | too few posts to call a pattern; all six are BlackRock Brasil posts | |

**J.P. Morgan Private Bank (14 posts).** Top quarter: Mary Erdoes named Most Powerful Woman in Finance (3,534 reactions, 56 comments), Maya Prabhu appointed Head of Wealth Advisory and Family Governance for Asia as a document post (507 reactions, 93 comments, the most comments of any post), an explainer video opening with a question ("What's the most important investment decision you'll make?", 288) and a family-office day video (248). Bottom half (median 58): event recaps that open with "We were honored/proud/delighted to join" (AmCham HK luncheon 154, SuperReturn Asia 68, Forbes Global CEO Conference 62, Fixed Income Playbook events 58, Parag Khanna client dinner 21) and a regional economy document (Australia, 12). Pattern: 2 of 4 top posts are video versus 1 of 7 bottom posts; 1 of 4 top posts opens with a question versus 0 of 7; 0 of 4 top posts carry a number in the first line versus 3 of 7 bottom posts. Formula behind the top: "[Named leader] + [external recognition or new role]" and "[Question a principal actually asks] + short video answer". The sponsorship-recap formula ("We were proud to sponsor the [event]") does not travel.

**HSBC Private Bank (22 posts).** Top quarter: 3Q results (2,032), CEO Ida Liu's Financial News op-ed on private banking's turning point (732), Ida Liu named to the FN 100 Most Influential Women (662), the 3Q CEO video (362), a discretionary-management explainer (217) and the Larry Fink "Think Wealth Visionaries" clip (169). People posts: 4 of 6 top versus 6 of 11 bottom. The entrepreneur-report stat posts that run as ads score only 37 to 49 organically, so the report reaches people through paid, not organic, distribution (INFERRED). House style from first lines: a question or a thesis in line one, "Our CEO" or a named regional head in line two, events framed as "What will shape the next chapter of private wealth in Asia?" rather than "we attended".

**UBS (40 posts, 10 a week).** Documents are 19 of 40 posts but 14 of the 20 bottom posts and only 2 of the 10 top posts; images with a named person or a market claim are 5 of the 10 top posts. Top: Chairman award (1,796), "The US, alongside Asia Pacific, is a key growth market for UBS. Home to 40% of the world's millionaires" (1,151), Formula 1 Singapore Grand Prix hospitality video (683), Art Basel and UBS collector survey teaser (576). People in first line: 8 of 10 top versus 10 of 20 bottom.

**Goldman Sachs (20 posts).** Video is 10 of 20 posts but 7 of the 10 bottom posts and 1 of the 5 top; images with awards or money commitments win (Most Powerful Women 2,470; $500 million Small Business AI Institute 2,182; 10,000 Women India impact numbers 807). Question openers: 0 of 5 top, 5 of 10 bottom.

**Morgan Stanley (25 posts).** Earnings and CEO posts lead (1,787; 1,362; CEO on CNBC video 1,059), then an alumni-network carousel (629) and The Signal newsletter launch as an article (377, 29 comments). Documents are 0 of 7 top and 4 of 12 bottom.

**Across the five.** Named people plus external recognition is the top format on every page with enough posts. Document carousels are the bottom format on three of four pages. Event recaps sit in the bottom half unless the first line is the idea from the stage, not the sponsorship.

## 9. What they scale next (SEEN, LinkedIn job index via blitzapi, HK and SG, titles filtered, 30 most recent per brand, 2026-11-01; rea/jobs/openings_summary.csv)

| Brand | Matching postings | Frontline advisors or RMs in top 30 | Marketing roles | Standout roles |
|---|---|---|---|---|
| HSBC | 455 | 15 (China team HK, Hong Kong team, Singapore, Indonesia, Global India, Greater China, Australia and International, Premier offshore) | 2 (VP Private Bank Marketing South Asia, 2026-10-15; VP Marketing South Asia HSBC Private Bank, 2026-09-20) | Wealth Sales Director Offshore Banking (cross-border acquisition and partnerships) |
| J.P. Morgan (jpmorganchase) | 310 | 9 (UHNW Client Advisors for Thailand, SEA, Australia, Taiwan, China markets, mostly Singapore-based) | 0 | Asia Solutions Product Development for discretionary, funds and alternatives (VP, 2026-10-05); Digital trading-experience product manager (VP, 2026-09-11) |
| Goldman Sachs | 120 | 1 (Private Wealth Advisor ED Singapore) | 0 | Alternative Capital Markets Group ED Hong Kong: "source and structure alternative investment solutions ... organize roadshows and fundraising for private equity, co-investment, real estate, private credit and hedge fund products" for UHNW and family offices; Private Bank Deposits ED |
| BlackRock | 92 | 4 wealth sales (Thailand Wealth Business VP, Emerging SEA sales VP, SEA institutional) | 2 (marketing graduate and intern, Hong Kong) | Aladdin Wealth Tech graduates and interns in HK and SG (4); APAC alternatives client service |
| UBS | 85 | 6 Client Advisors (Singapore, Hong Kong, European clients in SG, financial intermediaries, Global Family and Institutional Wealth) | 3 (GWM Marketing Strategist APAC, HK, 2026-06-17; graduate and intern marketing roles SG) | 10 Client Account Manager roles for Global Family and Institutional Wealth (family-office servicing capacity); Wealth Planners HK and SG; Lombard and mortgage team lead SEA |
| Morgan Stanley | 59 | 3 (PWM Asia Relationship Manager, Greater China team, HK and SG) | 0 | 9 Client Service Manager roles; private-funds product specialist; advisory portfolio management |

Reading: HSBC is adding country desks and a marketing layer in Singapore at the same time (INFERRED from 15 RM roles across seven markets plus two South Asia marketing VPs). UBS is scaling family-office servicing (ten account-manager roles) and has put a marketing strategist in Hong Kong. Goldman Sachs is hiring to distribute alternatives to UHNW clients, which matches its Euromoney "Asia's Best for Alternatives" positioning. J.P. Morgan's own postings are heaviest on frontline advisors by market and on product and digital, with no marketing role in the sample.

## 10. Moves against growth (Python, rea/moves-vs-growth.csv)

Growth here is SpyFu US monthly paid and organic clicks, the only monthly series available. Lift = average of the move month and two after, minus the average of the two months before. Moves under a month apart are one cluster. With exactly twelve months of data and most channels under five dated moves, only two Spearman tests could be run and both are fragile.

| Brand, date, channel | Move | Paid-click lift | Organic lift |
|---|---|---|---|
| UBS, 2026-04-18, Google ads | New UBS Switzerland AG text creative | +66.8% | +0.2% |
| J.P. Morgan, 2026-05-26, LinkedIn ads | Fixed income + Mobility APAC campaign (492 ads) | +36.1% (jpmorgan.com root, US; not caused by an APAC LinkedIn campaign, INFERRED) | -15.8% |
| Goldman Sachs, 2026-04-11, Google ads | New text creative + MightyHive image flight | +35.1% | -14.0% |
| Goldman Sachs, 2026-03-03, Google ads + press | MightyHive display/video flight; Euromoney 2026 awards (Mar 20) | +27.6% | -16.5% |
| BlackRock, 2026-06-01, Google ads | Mindshare text creatives (cluster May 15 to Jun 1) | +70.4% | +4.2% |
| BlackRock, 2026-07-20, Google ads | BlackRock Inc. creative | +63.5% | +3.6% |
| Morgan Stanley, 2026-05-08, Google ads | New text creative | +17.4% | +2.2% |
| Morgan Stanley, 2026-07-31, LinkedIn ads | MSIM alternatives campaign SG/AU | +15.4% | -3.4% |
| HSBC, 2026-10-06, LinkedIn ads | Entrepreneur report campaign | outside the SpyFu window | |

- **Largest lifts.** BlackRock's May to July Google flights (+63% to +70% paid) and UBS's April creative (+67%) line up with the largest paid steps in their series. Goldman Sachs's March cluster (display flight plus the Euromoney awards) lines up with +28% paid but -16.5% organic. Each lift is SEEN as numbers; that the move caused it is INFERRED, because paid clicks were rising for all six brands in the same months and the SpyFu series is US-only.
- **Correlations.** Goldman Sachs Google ads: 6 moves, 10 months, Spearman at one-month lag 0.81 on paid clicks (0.12 at lag 0, 0.00 at lag 2). BlackRock Google ads: 7 moves, 10 months, 0.12 to 0.18 at all lags. One strong value at one lag on ten points is not a finding; it is listed, not called. Every other brand-channel pair had under five dated moves and is listed only.
- **Fast spreaders that moved nothing.** Goldman Sachs's 10,000 Women India LinkedIn campaign (16 variants, April 2026) and Morgan Stanley's MSIM campaign reached APAC feeds but neither touches the wealth funnel measured here.

## 11. The path a UHNW prospect takes

| Stage | What was seen | Marker |
|---|---|---|
| Get noticed | Awards and CEO recognition posts carry the top organic engagement on every page; proprietary reports become paid stat cards (HSBC); CIO video series (BlackRock, HSBC monthly view); sponsored leader profiles in regional press (UBS on SCMP); ChatGPT names J.P. Morgan first for the "best in Asia above $50M" question and second for alternatives | SEEN |
| Sign up | Every bank gates behind a contact form or "find an advisor" flow with no fields or minimums shown on the page. Minimums are therefore defined by third-party guides and quoted back by ChatGPT ("US$10 to 25m+" for J.P. Morgan) | SEEN; the consequence is INFERRED |
| First win | Not observable publicly for a private bank. The nearest proxy is the first piece of content the prospect receives: outlooks (all six), the Family Office Report (J.P. Morgan), the entrepreneur report (HSBC) | INFERRED |
| Pay | Fee pages do not exist on any of the six sites read | SEEN (absence) |
| Share | Events are the sharing surface: Formula 1 Singapore (UBS), Next Generation Wealth Bangkok and China Wealth Forum (HSBC), SuperReturn Asia and Forbes Global CEO Conference (J.P. Morgan). A realtor re-posting a J.P. Morgan slide deck to Reddit is the only organic re-share found | SEEN |

## 12. The playbook: ten plays for J.P. Morgan Private Bank Asia

Ordered by evidence, timing (started before the February to March 2026 inflection), lift, and fit for a scaling business. Each prompt is paste-ready for the user's agent.

### Play 1. Run the 2026 Family Office Report the way HSBC ran its entrepreneur report (stage: Get noticed)

- **Evidence.** SEEN: HSBC's report sits in the site hero, produced 169 LinkedIn ads in the APAC filter within three weeks of 2026-10-06, each a single statistic with the sample size ("3,000+ business owners"), plus organic stat posts and a Spear's story. J.P. Morgan's 2026 Family Office Report is already linked from the APAC home page but did not appear in the ad library or in the month's organic posts. INFERRED: the report format converts a research budget into a quarter of creative without new production.
- **Effort.** Two weeks. **Time to first result.** Four weeks; metric: LinkedIn ad click-through rate versus the Mobility campaign baseline and report downloads. **Cost to try.** Media only; creative is a template.
- **THE PROMPT.**

```
You are a content strategist for J.P. Morgan Private Bank Asia. Take the 2026 Family Office Report (privatebank.jpmorgan.com/apac/en/insights/reports/2026-family-office-report) and build a six-week campaign modeled on HSBC Private Bank's Global Entrepreneurial Wealth Report 2026 LinkedIn ads.
1. Extract eight single statistics from the report, each with its sample size ("of N family offices surveyed").
2. For each, write a LinkedIn sponsored post: line 1 is the statistic as a claim, line 2 names the report and sample, line 3 is a question to the reader, then "Download the report". Keep every line under 90 characters. Produce English, Simplified Chinese and Traditional Chinese versions.
3. Specify a stat-card image for each: one number large, one sentence, the report title, the J.P. Morgan Private Bank mark bottom right, square 1200x1200 and 1200x628 crops.
4. Write four native-document carousel outlines (8 slides each) that walk through one theme per carousel, last slide asks for the download.
5. Draft the organic calendar: two posts a week for six weeks, alternating a stat card and a named-leader quote from the report launch team.
6. List the three trade publications that covered HSBC's report (Spear's, Asian Private Banker, Financial News) and draft a 150-word pitch per outlet with the single most surprising finding.
```

### Play 2. Make named leaders the face of the page (stage: Get noticed)

- **Evidence.** SEEN: the top post on every page with enough data is a named leader plus external recognition: Erdoes 3,534 reactions (J.P. Morgan), Ida Liu op-ed 732 and FN100 662 (HSBC, a page one-sixth the size), UBS Chairman 1,796, Morgan Stanley CEO on CNBC 1,059, Goldman Sachs Most Powerful Women 2,470. On J.P. Morgan's own page the Maya Prabhu appointment drew 93 comments, the most of any post. HSBC pairs its CEO with Larry Fink in a video series.
- **Effort.** One week to set up; ongoing. **Time to first result.** Two weeks; metric: median reactions of leader posts versus the page median of 97. **Cost.** None.
- **THE PROMPT.**

```
Build a 90-day leader-visibility plan for J.P. Morgan Private Bank Asia on LinkedIn. Inputs: the APAC leadership page (privatebank.jpmorgan.com/apac/en/about-us#leaders) and the last 30 days of page posts in rea/linkedin/posts.csv.
1. For each APAC leader with an external role (speaking slot, award, op-ed, new appointment), draft a post using the formula that scored highest on the page: line 1 "[Outlet or body] has named/published [Leader], [title], on [topic]"; line 2 one sentence of their view in quotes; line 3 a link. Single image of the person, no collage.
2. Draft one op-ed pitch per leader for Financial News, Asian Private Banker and Nikkei Asia, each on a turning point they can own (succession in Asia, mobility of families, AI and family security).
3. Propose a two-person video series in the style of HSBC's "Think Wealth Visionaries": a J.P. Morgan Asia leader plus an external investor or founder per episode, 90 seconds, question-led opening line.
4. Rewrite the five lowest-scoring event posts of the last month (SuperReturn Asia, Forbes Global CEO Conference, Fixed Income Playbook, Parag Khanna dinner, AmCham HK) so line 1 is the idea said on stage, attributed to the named J.P. Morgan speaker, and the sponsorship is the last line.
```

### Play 3. Win the AI answers with fact-dense pages (stage: Get noticed and Sign up)

- **Evidence.** SEEN: ChatGPT quoted the APAC alternatives page's exact figures ("nearly 300 specialists", "US$227bn client commitments (March 2026)") and ranked J.P. Morgan second for alternatives in Hong Kong; the Singapore family-office answer named DBS and Bank of Singapore first and built its minimums table from vccsingapore.com and wealthmanagement.sg because no bank publishes those facts; J.P. Morgan was cited only as a footnote there. Goldman Sachs and Morgan Stanley were absent from two of three answers.
- **Effort.** Two to three weeks. **Time to first result.** Six to eight weeks; metric: re-run the same three prompts monthly and count J.P. Morgan citations and rank. **Cost.** Under 0.01 USD per prompt check through treg (cloro.ai-search.chatgpt.scrape).
- **THE PROMPT.**

```
Act as an AI-answer optimization lead for privatebank.jpmorgan.com/apac. Goal: be cited by ChatGPT, Perplexity and Google AI Overviews for Asia private-banking buyer questions.
1. Audit these pages for concrete, quotable facts (numbers with dates, team sizes, named awards with year and awarding body, geographic coverage): /apac/en/services/investing/alternative-investments (the benchmark; it was quoted verbatim), /apac/en/who-we-serve/family-office, /apac/en/services/wealth-planning-and-advice/family-office-services, /apac/en/services/lending/securities-based-lending, /apac/en/about-us/awards.
2. Draft three new pages that answer the questions third-party guides currently answer for us: "Becoming a client of J.P. Morgan Private Bank in Asia: how it works" (process, documentation, timeline, who we serve, with a clear statement of relationship size in the bank's approved language); "Banking a Singapore single family office: 13O, 13OA and 13U, custody, Lombard lending, reporting" (facts from MAS, no advice); "Hong Kong Professional Investor status and what it unlocks on our platform".
3. For every page, add an FAQ block of five questions phrased as a buyer would type them, each answered in two sentences with a dated fact.
4. Produce a monthly check script: the three prompts in rea/ai-answers/chatgpt.csv run through treg's cloro.ai-search.chatgpt.scrape with country SG and country HK alternates, logging brands named in order and J.P. Morgan URLs cited.
```

### Play 4. Publish utility content that ranks for generic intent (stage: Get noticed)

- **Evidence.** SEEN: Morgan Stanley's 2026 tax-tables PDF is #1 for "tax brackets 2026" (201,000 US searches a month) and its newsletter subscribe page ranks for "newsletter stock market" (201,000); HSBC's Wealth Insights Hub ranks for "discretionary fund management meaning" and "open end fund"; BlackRock's education page is #1 for "invest investment" (201,000). J.P. Morgan PB's subdomain traffic is Chase navigational spillover with no wealth-intent term in the top 25.
- **Effort.** One quarter. **Time to first result.** Eight to twelve weeks; metric: Serpstat g_hk and g_sg ranked keywords with wealth intent (today 1,421 keywords in g_hk, no visibility score). **Cost.** Writing time; Serpstat checks cost 0.0005 USD per keyword row.
- **THE PROMPT.**

```
Design a utility-content program for J.P. Morgan Private Bank Asia that copies Morgan Stanley's tax-tables play for Asian UHNW families. Produce the editorial spec for ten evergreen reference pages, each a table or checklist a family office or its adviser searches for every year: Hong Kong and Singapore personal and corporate tax reference tables for the current year; Singapore family-office incentive thresholds (13O, 13OA, 13U) with the published MAS criteria; Hong Kong Professional Investor thresholds; a Lombard lending explainer with worked loan-to-value examples; cross-border mobility checklists for Hong Kong to Singapore, mainland China to Hong Kong, and Australia to Singapore; a trust and succession glossary for Asia; a quarterly "numbers to watch" page. For each page give: target query cluster, title under 60 characters, H2 outline, the facts to source and from where, the PDF or HTML format, an update cadence, and the internal link into the matching service page. Add a newsletter subscribe page titled for the query "wealth newsletter Asia", modeled on morganstanley.com/newsletter/subscribe.
```

### Play 5. Replace event recaps with question-led explainer videos (stage: Get noticed)

- **Evidence.** SEEN on J.P. Morgan's own page: the two explainer videos scored 288 and 248 reactions; the five event recaps scored 21 to 154 with a median under the page median of 97. Video is 2 of 4 top posts versus 1 of 7 bottom posts. BlackRock runs the same format as paid video ("Built for bumps: three ways to navigate volatility", "True or False?" with a named strategist).
- **Effort.** One day per video. **Time to first result.** Two weeks; metric: reactions per video versus 97. **Cost.** In-house filming.
- **THE PROMPT.**

```
Write six 60-to-90-second LinkedIn explainer video scripts for J.P. Morgan Private Bank Asia using the house formula that outperformed on the page: line 1 on screen and in the caption is a question a principal actually asks; the answer is one idea, one chart, one named specialist on camera; the last line is what to do this quarter. Topics: "What's the one decision that matters more than the next stock you buy?" (portfolio construction), "Is your family's data already in an AI model?" (security hub), "Why are Asian families moving cash into fixed income now?" (Fixed Income Playbook 2027), "What does a family office actually need from a bank in Singapore?", "Mobility: what changes when a family moves from Hong Kong to Singapore?", "Alternatives: what does 'US$227 billion in client commitments' buy a client?". Give each script a caption under 200 characters that repeats the question and names the speaker, and a thumbnail spec: the speaker's face, the question in four words or fewer, one brand color block.
```

### Play 6. Localized paid social in APAC languages, extended to Meta (stage: Get noticed)

- **Evidence.** SEEN: J.P. Morgan is the only one of the six running private-bank acquisition ads on LinkedIn in APAC and already runs Simplified Chinese variants (492 ads). UBS runs 698 active Meta ads, including Japanese next-generation pages and localized "talk to an advisor" creatives with a Contact-us button; J.P. Morgan Private Bank has no Meta ad page. INFERRED: the Mobility creative is a strong fit for Traditional Chinese (Hong Kong, Taiwan) and Japanese audiences that UBS is already addressing.
- **Effort.** Two weeks. **Time to first result.** Four weeks; metric: cost per qualified inquiry by language. **Cost.** Media plus translation.
- **THE PROMPT.**

```
Extend J.P. Morgan Private Bank Asia's LinkedIn campaign (Fixed income: "Portfolio diversification. Reliable income. Stability among volatility." and Mobility: "Planning your next chapter abroad? Navigate next steps with the tried and tested advice of our wealth advisors.", footnote "World's Best Private Bank, Global Finance 2026") into a localized paid-social plan.
1. Produce Traditional Chinese (Hong Kong and Taiwan registers), Japanese and Bahasa Indonesia versions of both headline sets, each with a native-speaker review note on tone for UHNW readers.
2. Map each language to LinkedIn country targeting and to a Meta test (Facebook and Instagram) modeled on UBS's Japanese next-generation ads that link to a who-we-serve page: pick the J.P. Morgan page per language, write the Learn-more and Contact-us variants.
3. Write a measurement plan: one landing page per language, UTM scheme, and the qualified-inquiry definition the APAC team already uses.
4. Flag every claim that needs a compliance footnote and where the award disclosure (privatebank.jpmorgan.com/apac/en/disclosures/award-disclosures) must appear.
```

### Play 7. A named interview series with Asian founders and investors, distributed as paid video and partner media (stage: Get noticed)

- **Evidence.** SEEN: Morgan Stanley runs "Hard Lessons" (iconic investors on two out-of-consensus calls; the first episode features Jean Eric Salata of EQT, an Asia-based investor) and "The Morgan Stanley Blueprint" as Meta video ads; UBS's leader profiles on the South China Morning Post channel drew 131k and 126k views; HSBC's Larry Fink episode drew 169 reactions organically. J.P. Morgan already has "Principal Discussions" on the APAC site but it did not appear as a series in any ad library or on YouTube.
- **Effort.** One quarter. **Time to first result.** Eight weeks; metric: views per episode on sponsored LinkedIn video and the partner channel. **Cost.** Production plus a media partnership.
- **THE PROMPT.**

```
Turn J.P. Morgan Private Bank Asia's "Principal Discussions" into a named video series that can run as paid social and on a regional media partner's channel, modeled on Morgan Stanley's "Hard Lessons" and UBS's SCMP leader profiles. Deliver: a series name and one-line premise in the "two calls, one lesson" style; a guest list of twelve Asia-based founders, family principals and investors with the public reason each fits; a fixed six-question interview spine; a 90-second cut-down structure for LinkedIn and a 20-minute long form for YouTube; a partner brief for South China Morning Post or Nikkei Asia stating what the partner produces, what J.P. Morgan supplies, and the disclosure line; and a six-month release calendar with one episode a month and three cut-downs per episode.
```

### Play 8. Pair every new country desk with a content and event track (stage: Get noticed and Share)

- **Evidence.** SEEN: HSBC is hiring 15 relationship managers across China, Hong Kong, Singapore, Indonesia, India and Australia desks and two Private Bank marketing VPs for South Asia in Singapore in the same quarter; its organic posts show a Next Generation Wealth event in Bangkok and a China Wealth Forum. J.P. Morgan is hiring UHNW client advisors for Thailand, Southeast Asia, Australia, Taiwan and China markets, all Singapore-based, with no marketing role in the sample.
- **Effort.** One week per desk. **Time to first result.** One quarter; metric: inquiries attributed to the desk's event or content. **Cost.** Event budget already exists.
- **THE PROMPT.**

```
For each market desk J.P. Morgan Private Bank Asia is staffing from Singapore (Thailand, Southeast Asia, Australia, Taiwan, China; see rea/jobs/openings_summary.csv), draft a one-page go-to-market track that marketing can run alongside the new advisor: the one proprietary data point about that market's wealthy families that J.P. Morgan can publish (from the Family Office Report or Asia Strategy Focus); a half-day Next Generation or Mobility event in the market's capital with a working title, two session topics and the external co-host type; the LinkedIn targeting for that market in the local language; two local trade or business outlets for a leader interview; and the one KPI the desk head signs up to for the quarter.
```

### Play 9. A branded search program for the private bank in Hong Kong and Singapore (stage: Get noticed and Sign up)

- **Evidence.** SEEN: the J.P. Morgan PB subdomain has zero creatives in the Google Ads library while UBS, Morgan Stanley and Goldman Sachs have run text ads continuously since 2022 to 2024; J.P. Morgan PB's own branded traffic is Chase spillover, including "chase morgan bank login" landing on /apac/en/login. UBS has the only strong Hong Kong search visibility (69.5). INFERRED: a small branded and category search program with award sitelinks would catch the private-bank intent that currently lands on login pages.
- **Effort.** One week. **Time to first result.** Two weeks; metric: contact-flow starts from search in HK and SG. **Cost.** Low; branded terms.
- **THE PROMPT.**

```
Build a Google Ads plan for J.P. Morgan Private Bank in Hong Kong and Singapore. Keyword sets: branded ("jp morgan private bank hong kong", "jp morgan private bank singapore", Chinese variants), category ("private bank hong kong minimum", "private bank singapore family office", "ultra high net worth bank asia"), and competitor-comparison informational queries. For each ad group write three responsive search ad headline sets that use the proof already in the LinkedIn ads ("World's Best Private Bank, Global Finance 2026", "3.5K advisors", "75+ offices") and sitelinks to the family office page, alternatives page, awards page and the contact flow. Specify negative keywords to exclude Chase retail and login intent. Define the landing page per group (never /apac/en/login) and a weekly check of impression share against UBS, HSBC and Goldman Sachs in each city.
```

### Play 10. Package the next-generation program as a public, applied-for experience (stage: Share)

- **Evidence.** SEEN: HSBC's plan for a global education programme for heirs was reported by Spear's and re-posted twice (87 reactions each); UBS runs Japanese next-generation ads to a dedicated page; Goldman Sachs and Morgan Stanley list next-generation segments on their PWM pages. J.P. Morgan has NextList on the APAC site and a next-generation segment, but NextList did not surface in any ad, answer or post in this run.
- **Effort.** One quarter. **Time to first result.** One cohort; metric: applications and re-shares by participants. **Cost.** Existing program.
- **THE PROMPT.**

```
Reposition J.P. Morgan Private Bank Asia's NextList (privatebank.jpmorgan.com/apac/en/about-us/an-elevated-experience/nextlist) as an applied-for program that creates its own distribution, using HSBC's heir-education announcement coverage and UBS's next-generation ads as the benchmark. Deliver: a public program page outline with eligibility stated in plain terms, the curriculum in five modules, faculty named by role, dates and cities (Hong Kong, Singapore), and an application form spec; an announcement plan with an exclusive to Spear's or Asian Private Banker and a LinkedIn post from the APAC head using the leader formula; a participant-sharing kit (a badge, a one-line credential for LinkedIn profiles, a cohort photo policy); and the Traditional Chinese, Simplified Chinese and Japanese ad copy that mirrors UBS's "資産の未来を、再定義する" framing for a J.P. Morgan audience.
```

## Things to skip

- **A Reddit program.** The only private-bank discussion found in a year is a lending complaint (scores 5 and 9) and a realtor re-sharing slides. Monitor the complaint theme; do not build a channel.
- **Chasing organic traffic as a KPI.** All six brands lost organic clicks over the twelve months and the J.P. Morgan PB subdomain's volume is Chase spillover. Measure AI citations, wealth-intent rankings in g_hk and g_sg, and inquiries instead.
- **Copying the programmatic display flights (MightyHive for Goldman Sachs, Mindshare for BlackRock) for UHNW acquisition.** Goldman Sachs's paid clicks rose 1.8x against 3.8x to 7.9x for peers, and the only correlation that looked strong (0.81 at one-month lag) rests on ten months and six moves. These are brand and asset-management flights, not private-bank funnels.
- **Mass philanthropy campaigns as growth plays.** 10,000 Women and 10,000 Small Businesses dominate Goldman Sachs's LinkedIn and Meta ads in APAC and earn strong organic engagement, but they are corporate brand programs with no wealth funnel.

## Timeline of dated moves against the traffic curve

Traffic figures are SpyFu US monthly clicks for the SpyFu domain in brackets; lifts are from rea/moves-vs-growth.csv.

| Date | Brand | Channel | Move | Paid lift | Organic lift |
|---|---|---|---|---|---|
| 2022-08-13 | UBS | Google ads | Oldest UBS Switzerland AG text creative still running | outside window | |
| 2024-07-01 | Goldman Sachs | Google ads | Oldest text creative still running | outside window | |
| 2024-08-14 | BlackRock | Google ads | Oldest BlackRock Inc. creative still running | outside window | |
| 2024-10-21 | Morgan Stanley | Google ads | Oldest Morgan Stanley & Co. LLC creatives still running | outside window | |
| 2024 (year) | J.P. Morgan | hiring | Asia RM headcount +35% (+86) to 330 per Asian Private Banker league tables | outside window | |
| 2025-06-18 | Morgan Stanley | Google ads | 13-creative text wave | outside window | |
| 2025-10-30 | Goldman Sachs | Google ads | New text creatives | window incomplete | |
| 2025-11-07 | Goldman Sachs | Google ads | New text creative | +3,069% (Dec data step, artefact) | -2.2% |
| 2025-12 | all six | data | SpyFu paid-click series step up for every brand (methodology, INFERRED) | | |
| 2026-01-01 | Goldman Sachs | Google ads | New text creatives (Jan 1, Jan 5) | +107.8% | -0.6% |
| 2026-02 | J.P. Morgan | traffic | Organic peak 1,035,000; paid +127% month on month | | |
| 2026-03-03 | Goldman Sachs | Google ads | MightyHive display and video flight starts | +27.6% | -16.5% |
| 2026-03-04 | BlackRock | Google ads | Mindshare text flight starts | +42.5% | +0.5% |
| 2026-03 | UBS, HSBC | traffic | Paid +158% and +124% month on month | | |
| 2026-03-20 | Goldman Sachs, J.P. Morgan | press | Euromoney Private Banking Awards 2026 | +27.6% / +97.1% | -16.5% / -14.5% |
| 2026-04-11 | Goldman Sachs | Google ads | New text creative + MightyHive image flight (Apr 13) | +35.1% | -14.0% |
| 2026-04-15 | Goldman Sachs | LinkedIn ads | 10,000 Women India campaign | +35.1% | -14.0% |
| 2026-04-16 | BlackRock | Google ads | Mindshare + BlackRock Inc creatives (Apr 16, 21, 30) | +43.3% | -1.6% |
| 2026-04-18 | UBS | Google ads | New UBS Switzerland AG text creative | +66.8% | +0.2% |
| 2026-05-08 | Morgan Stanley | Google ads | New text creative | +17.4% | +2.2% |
| 2026-05-15 | BlackRock | Google ads | Australia entity + BlackRock Inc creatives | +54.0% | +1.5% |
| 2026-05-26 | J.P. Morgan | LinkedIn ads | Fixed income + Mobility APAC campaign, EN and Simplified Chinese | +36.1% (US root, not attributable) | -15.8% |
| 2026-06-01 | BlackRock | Google ads | Mindshare text creatives | +70.4% | +4.2% |
| 2026-06-02 | Morgan Stanley | Google ads | New text creatives (Jun 2, 16, 21) | +12.7% | +0.1% |
| 2026-06-17 | UBS | hiring | GWM Marketing Strategist APAC posted (Hong Kong) | | |
| 2026-06-20 | UBS | Google ads | UBS Business Solutions AG image creative | +10.9% | -7.7% |
| 2026-07-20 | BlackRock | Google ads | BlackRock Inc. text creative | +63.5% | +3.6% |
| 2026-07-31 | Morgan Stanley | LinkedIn ads | MSIM alternatives campaign SG/AU | +15.4% | -3.4% |
| 2026-08-04 | BlackRock | Google ads | Mindshare + Taiwan entity flights (Aug 4 to 14) | +45.2% | -1.3% |
| 2026-08-05 | UBS | Meta ads | Oldest active Meta creative ("Fale com um Client Advisor") | | |
| 2026-08-20 | BlackRock | LinkedIn ads | "New angles on portfolio construction" | +45.2% | -1.3% |
| 2026-08-21 | Morgan Stanley | Google ads | New text creative | +10.2% | -5.4% |
| 2026-08-27 | UBS | Meta ads | Japanese "UBSのCraftとは？" campaign | | |
| 2026-09-01 | BlackRock | Google ads | Mindshare + BlackRock text flights (Sep 1 to 28) | +16.6% | -9.5% |
| 2026-09-02 | Goldman Sachs | Google ads, Meta ads | New text creative; 10,000 Small Businesses Meta ads start | +10.0% | +2.8% |
| 2026-09-20 | HSBC | hiring | VP Marketing South Asia, HSBC Private Bank posted | | |
| 2026-09-21 | UBS | Google ads | New image + text creatives (Sep 21, 24) | +6.8% | -0.7% |
| 2026-09-30 | BlackRock | LinkedIn ads | "Closer than you think / This is Asia's moment" ASEAN campaign | +16.6% | -9.5% |
| 2026-10-01 | Morgan Stanley | Meta ads | "Hard Lessons", "Blueprint", "Exceptional Leaders" series start | outside window | |
| 2026-10-06 | HSBC | LinkedIn ads | Global Entrepreneurial Wealth Report 2026 campaign (169 ads) | outside window | |
| 2026-10-07 | HSBC | LinkedIn organic | Ida Liu Financial News op-ed post (732 reactions) | | |
| 2026-10-11 | UBS | Meta ads | Japanese next-generation ads and English "legacy" ads | | |
| 2026-10-15 | HSBC | hiring | VP Private Bank Marketing South Asia posted | | |
| 2026-10-16 | UBS | LinkedIn ads | UBS AM emerging-markets and income campaign in APAC | outside window | |
| 2026-10-22 | HSBC | LinkedIn organic | Larry Fink "Think Wealth Visionaries" clip (169 reactions) | | |
| 2026-10-28 | BlackRock | Meta ads, LinkedIn ads | Taiwan ETF ads; ASEAN carousel | outside window | |

## By channel: what each rival did, what worked, what did not

- **LinkedIn organic.** Worked: named leader plus recognition on every page (3,534 J.P. Morgan; 2,470 Goldman Sachs; 1,796 UBS; 1,787 Morgan Stanley; 732 HSBC). Did not: document carousels (14 of UBS's 20 bottom posts, 4 of Morgan Stanley's 12), event recaps opening with "we were proud" (J.P. Morgan 21 to 154), stat posts from the HSBC report organically (37 to 49). House styles: UBS posts ten times a week and tags #ShareUBS; HSBC opens with a question or a thesis then "Our CEO"; Goldman Sachs leads with money commitments and award lists.
- **LinkedIn ads.** J.P. Morgan is the only private bank running acquisition ads in APAC (492) and the only one in Chinese. HSBC turned one report into 169 ads in three weeks. BlackRock and UBS run asset-management campaigns at wealth intermediaries. Morgan Stanley and Goldman Sachs show no wealth ads in APAC.
- **Google ads.** Continuous text programs since 2022 to 2024 at UBS, Morgan Stanley, Goldman Sachs and BlackRock; agency display flights at Goldman Sachs and BlackRock from March 2026; local APAC entities advertise separately at BlackRock. Zero on the J.P. Morgan PB and HSBC PB subdomains.
- **Meta.** UBS runs 698 localized ads with contact buttons; Morgan Stanley runs content series; BlackRock runs Taiwan ETF ads; Goldman Sachs runs philanthropy; J.P. Morgan PB and HSBC PB have no page.
- **Search and AI answers.** Morgan Stanley and HSBC win generic intent with utility and educational pages; UBS owns Hong Kong search visibility; J.P. Morgan wins the alternatives AI answer with a fact-dense page and is named first for the "best in Asia above $50M" question, but third-party guides define minimums and the Singapore family-office shortlist.
- **YouTube.** Brand channels lose to creators and press on every brand; the exceptions are J.P. Morgan's advisor Shorts (885k, 354k) and UBS's leader profiles on SCMP (131k, 126k).
- **Reddit.** No channel; one lending complaint about J.P. Morgan Private Bank to monitor.
- **Product loop.** Events and reports are the sharing surfaces. No "Powered by" style loop exists for a private bank; the nearest is a participant badge for programs such as NextList (Play 10).
- **Hiring.** HSBC: country desks plus marketing in Singapore. UBS: family-office servicing plus a Hong Kong marketing strategist. Goldman Sachs: alternatives distribution to UHNW. J.P. Morgan: market-desk advisors plus product and digital, no marketing role seen.

## 14-day plan for the channels J.P. Morgan Asia should use

| Day | LinkedIn organic and ads | Search and AI answers | Video and series | Events and desks |
|---|---|---|---|---|
| 1 | Pull the Family Office Report; extract eight statistics (Play 1) | Audit the five pages for quotable facts (Play 3) | Script video 1: "What's the one decision that matters more than the next stock?" (Play 5) | List the quarter's events and the named speaker for each |
| 2 | Draft eight stat-card posts in EN, 简体, 繁體 | Draft the "Becoming a client in Asia" page outline | Film videos 1 and 2 | Rewrite the five lowest event posts with the idea-first formula (Play 2) |
| 3 | Post leader item 1 (any recognition or appointment this week) | Draft the Singapore family-office facts page | Edit video 1 | Brief the Thailand and Australia desks on their one data point (Play 8) |
| 4 | Submit stat-card ads for compliance review | Draft the Hong Kong Professional Investor page | Publish video 1 (Tuesday 9am HKT) | Draft the NextList public-page outline (Play 10) |
| 5 | Post stat card 1 organically | Add FAQ blocks to the alternatives and family-office pages | Film videos 3 and 4 | Pitch one leader op-ed to Financial News or Asian Private Banker |
| 6 to 7 | Weekend: schedule next week | | | |
| 8 | Launch stat-card ads in HK and SG, EN and Chinese (Play 1) | Set up the Google branded search groups with negatives for Chase and login intent (Play 9) | Publish video 2 | Lock the first Next Generation or Mobility event date |
| 9 | Post leader item 2 | Run the three ChatGPT prompts through treg and log citations (0.01 USD) | Draft the interview-series premise and guest list (Play 7) | Choose the media partner for the series |
| 10 | Post stat card 2 and the first document carousel | Publish the "Becoming a client" page | Edit videos 3 and 4 | Translate the Mobility ads into Traditional Chinese and Japanese (Play 6) |
| 11 | Review ad click-through versus the Mobility baseline | Publish the Singapore family-office facts page | Publish video 3 | Submit localized ads for compliance |
| 12 | Post the family-office day video style recap of any event, idea first | Publish the Professional Investor page | Film the first series interview | Confirm the NextList announcement outlet |
| 13 to 14 | Day 14 check: median reactions of the last 10 posts versus 97, and ad CTR versus baseline | Day 14 check: J.P. Morgan URLs cited per prompt versus today (3 of 3 prompts, rank 1, footnote, rank 2) | Day 14 check: views on videos 1 to 3 versus 288 | Day 14 check: inquiries tagged to a desk event or page |

## Method notes

- **Endpoints called (treg).** serpstat.google.domain.overview (g_us, g_hk), serpstat.google.domain.ranked_keywords (g_us, 25 rows per brand), spyfu.google.domain.overview (12 months, US), adyntel.google.ads.transparency, harvestapi.linkedin.ads.search, harvestapi.linkedin.company.posts, scrapecreators.x.v1-facebook-adlibrary-company-ads, anyapi.youtube.search, scrapecreators.reddit.search.posts, cloro.ai-search.chatgpt.scrape (country SG), seranking.web.linking_domains.list, blitzapi.jobs.company, treg.web.extract. Every count is dated 2026-11-01 unless the table says otherwise.
- **Blocked or failed.** treg.to (network policy; skill text pasted by the user). Image CDNs media.licdn.com and tpc.googlesyndication.com return 403 through this environment's proxy, so no thumbnail, cover or ad image was read; the contact sheets in playbook.html list titles and links instead. cloro ChatGPT calls time out at 60 seconds and were recovered with idempotency keys (charged once). The HSBC Private Banking Meta page was not found by name. The J.P. Morgan PB and HSBC PB Google Ads lookups were run on the subdomains and returned zero. Reddit "top" sort returned unrelated sitewide posts; a relevance sort was used instead. Step 2 (PredictLeads) was not run for budget. TikTok, Instagram and X were not pulled.
- **Interpretations marked INFERRED.** The December 2025 SpyFu step as a methodology change; AI Overviews as the cause of the organic decline; the SCMP UBS videos as a paid series; the Mobility campaign's suitability for Traditional Chinese and Japanese audiences; HSBC's paid-versus-organic distribution of its report; all move-to-growth attributions.
- **Data caveats.** SpyFu and Serpstat keyword data are US; only the Serpstat overview was run on g_hk. SpyFu resolved the two private-bank subdomains to their group roots. LinkedIn post samples cover one month per page; BlackRock's global page carried only Brasil posts and was not patterned. Job counts are the index's "total matching" for the title filter and the first 30 postings.
- **The bill.** Balance before 0.90488 USD, after 0.49567 USD: 0.409 USD in total. By step: step 1 site reads 0.001; step 3 traffic 0.102 (SpyFu 0.072, Serpstat 0.030); step 4 search and AI answers 0.083 (Serpstat keywords 0.075, ChatGPT 0.008); step 5 ads 0.056 (Google 0.044, LinkedIn 0.005, Meta 0.008); step 6 mentions 0.022 (YouTube 0.007, Reddit 0.015); step 7 LinkedIn posts 0.024; step 8 backlinks 0.027; step 9 jobs 0.089.
- **Files.** rea/traffic/spyfu_monthly.csv, rea/search/serpstat_overview.csv, rea/search/top_keywords_g_us.csv, rea/google-ads/transparency.csv, rea/linkedin-ads/ads.csv, rea/meta-ads/ads.csv, rea/youtube/search_popular.csv, rea/reddit/mentions.csv, rea/ai-answers/chatgpt.csv, rea/site/pages.csv, rea/jobs/openings_summary.csv, rea/linkedin/posts.csv, rea/moves-vs-growth.csv, analysis_output.json, build_data.py.

## The first play to run this week

Play 1. The 2026 Family Office Report already exists and is linked from the APAC home page. Eight statistics, three languages, two crops and a six-week calendar is a two-week job, and HSBC has shown the format produces a quarter of paid creative from one piece of research. Pair it with Play 2 on day 3 so a named Asia leader launches it.
