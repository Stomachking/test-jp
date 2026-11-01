#!/usr/bin/env python3
"""REA growth teardown — data assembly and analysis.

Every number in playbook.md / playbook.html comes from this script's output.
Inputs: treg call results (saved JSON files for the oversized ones, transcribed
values for the rest, with the call date 2026-11-01). Writes CSVs under rea/ and
prints the computed statistics used in the write-up.
"""
import csv, json, math, os, re, datetime as dt
from collections import defaultdict, Counter

HERE = os.path.dirname(os.path.abspath(__file__))
REA = os.path.join(HERE, 'rea')
TR = '/root/.claude/projects/-home-user-test-jp/65e866f8-c450-5587-89d8-364173945a25/tool-results/'
PULLED = '2026-11-01'
os.makedirs(REA, exist_ok=True)
for d in ['linkedin', 'meta-ads', 'google-ads', 'linkedin-ads', 'youtube', 'search', 'traffic',
          'reddit', 'ai-answers', 'site', 'jobs']:
    os.makedirs(os.path.join(REA, d), exist_ok=True)


def write_csv(path, rows, fields=None):
    if not rows:
        return
    fields = fields or list(rows[0].keys())
    with open(os.path.join(REA, path), 'w', newline='') as fh:
        w = csv.DictWriter(fh, fieldnames=fields, extrasaction='ignore')
        w.writeheader(); w.writerows(rows)


BRANDS = ['J.P. Morgan Private Bank', 'Goldman Sachs PWM', 'UBS GWM', 'HSBC Private Bank',
          'Morgan Stanley PWM', 'BlackRock']
DOMAIN = {'J.P. Morgan Private Bank': 'privatebank.jpmorgan.com', 'Goldman Sachs PWM': 'goldmansachs.com',
          'UBS GWM': 'ubs.com', 'HSBC Private Bank': 'privatebanking.hsbc.com',
          'Morgan Stanley PWM': 'morganstanley.com', 'BlackRock': 'blackrock.com'}
SPYFU_DOMAIN = {'J.P. Morgan Private Bank': 'jpmorgan.com (SpyFu resolved the subdomain to the root)',
                'Goldman Sachs PWM': 'goldmansachs.com', 'UBS GWM': 'ubs.com',
                'HSBC Private Bank': 'hsbc.com (SpyFu resolved the subdomain to the root)',
                'Morgan Stanley PWM': 'morganstanley.com', 'BlackRock': 'blackrock.com'}

# ---------------------------------------------------------------- step 3: traffic
# SpyFu getLatestDomainStats, US database, pastNMonths=12, pulled 2026-11-01. One row per month.
MONTHS = ['2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06',
          '2026-07', '2026-08', '2026-09']
SPYFU = {
 'J.P. Morgan Private Bank': dict(
   organic=[920300, 905800, 964400, 994900, 1035000, 931500, 874300, 798600, 799700, 683500, 695900, 649500],
   paid=[1594, 1607, 98880, 117800, 267500, 312400, 393500, 433500, 485300, 522700, 727600, 785000],
   budget=[579800, 1038000, 3109000, 2239000, 2451000, 2293000, 1981000, 1747000, 1651000, 1651000, 1896000, 1912000]),
 'Goldman Sachs PWM': dict(
   organic=[246200, 241600, 232700, 248000, 244700, 214800, 207600, 194500, 190900, 187400, 195500, 196900],
   paid=[416, 491, 19460, 19600, 20950, 21640, 26060, 29910, 30360, 30810, 31180, 34080],
   budget=[184500, 360200, 746100, 436500, 468200, 424900, 379500, 456600, 391000, 391000, 407500, 383900]),
 'UBS GWM': dict(
   organic=[189100, 184600, 172000, 172000, 173700, 184600, 183600, 179400, 175700, 164100, 162700, 162300],
   paid=[9752, 1662, 147100, 150000, 161600, 416300, 463000, 477400, 505400, 509100, 550200, 565800],
   budget=[449100, 764100, 834200, 1083000, 1095000, 981500, 813600, 709800, 684900, 685100, 662800, 627100]),
 'HSBC Private Bank': dict(
   organic=[336000, 322600, 283800, 280000, 319100, 337000, 336300, 355600, 351900, 297800, 300200, 302500],
   paid=[871, 659, 34580, 39520, 43230, 96710, 110300, 124300, 134500, 139100, 226200, 237600],
   budget=[163000, 4167000, 4507000, 1520000, 1223000, 1096000, 927800, 776900, 718900, 719200, 756100, 719100]),
 'Morgan Stanley PWM': dict(
   organic=[439200, 411900, 397900, 408800, 413300, 427900, 421900, 436600, 429900, 436400, 422700, 396700],
   paid=[1312, 1312, 69250, 100400, 105900, 107800, 126300, 130300, 134400, 147400, 151900, 158700],
   budget=[202000, 546800, 2086000, 836600, 834000, 786600, 676500, 568800, 537600, 537300, 523800, 496300]),
 'BlackRock': dict(
   organic=[297900, 290200, 266100, 296500, 303200, 304500, 298800, 300900, 297500, 320000, 319900, 289600],
   paid=[258, 258, 20350, 22510, 25740, 30660, 33150, 39340, 48770, 59260, 77270, 79570],
   budget=[158200, 364500, 669700, 799400, 874400, 917300, 844500, 788100, 755400, 755400, 784200, 797900]),
}
rows = []
for b, s in SPYFU.items():
    for i, m in enumerate(MONTHS):
        rows.append(dict(brand=b, spyfu_domain=SPYFU_DOMAIN[b], month=m, organic_clicks=s['organic'][i],
                         paid_clicks=s['paid'][i], est_monthly_paid_budget_usd=s['budget'][i], pulled=PULLED,
                         source='spyfu.google.domain.overview (US)'))
write_csv('traffic/spyfu_monthly.csv', rows)

# Serpstat getDomainsInfo snapshot (g_us prev_date ~2026-10-16; g_hk prev_date 2026-10-09), pulled 2026-11-01
SERPSTAT = [
 ('J.P. Morgan Private Bank', 'g_us', 2.1605, 25039, 1170559, 118786, 4, 150133, 13742, 2030),
 ('Goldman Sachs PWM', 'g_us', 3.517, 37012, 609221, 51774, 26, 107829, 15732, 3873),
 ('UBS GWM', 'g_us', 1.9018, 37170, 1234404, -87227, 20, 114971, 12226, 3001),
 ('HSBC Private Bank', 'g_us', None, 1438, 137290, 0, 0, None, None, None),
 ('Morgan Stanley PWM', 'g_us', 11.6369, 116531, 2382291, 116021, 21, 286392, 48200, 9875),
 ('BlackRock', 'g_us', 10.9588, 68883, 1606449, -57045, 58, 180926, 37876, 8721),
 ('J.P. Morgan Private Bank', 'g_hk', None, 1421, 58836, 0, None, None, None, None),
 ('Goldman Sachs PWM', 'g_hk', 8.686, 8229, 12905, -1317, 0, 3260, 187, 53),
 ('UBS GWM', 'g_hk', 69.4797, 10193, 51842, 9822, 1, 6242, 441, 135),
 ('HSBC Private Bank', 'g_hk', None, 508, 47954, 0, None, None, None, None),
 ('Morgan Stanley PWM', 'g_hk', 15.8942, 13755, 13928, 1163, 0, 3280, 263, 63),
 ('BlackRock', 'g_hk', 38.0766, 12028, 32247, 5149, 3, 6350, 537, 172),
]
write_csv('search/serpstat_overview.csv', [dict(brand=r[0], domain=DOMAIN[r[0]], database=r[1], visibility=r[2],
    keywords=r[3], est_monthly_traffic=r[4], traffic_change_vs_prev=r[5], ads=r[6], traffic_from_ai_overviews=r[7],
    aio_keywords=r[8], aio_citations=r[9], pulled=PULLED, source='serpstat.google.domain.overview') for r in SERPSTAT])

# Top ranked keywords by estimated traffic (serpstat getDomainKeywords, g_us, size 25, pulled 2026-11-01). Top rows only.
KW = [
 ('J.P. Morgan Private Bank', 'chase bank company', 1, 7480000, 1121439, '/nam/en/services/banking/personal-banking', 'brand-spillover'),
 ('J.P. Morgan Private Bank', 'chase jpmorgan chase bank', 5, 7480000, 672863, '/nam/en/home', 'brand-spillover'),
 ('J.P. Morgan Private Bank', 'chase logon login', 2, 2740000, 398470, '/nam/en/login', 'brand-spillover'),
 ('J.P. Morgan Private Bank', 'chase morgan bank login', 2, 550000, 79985, '/apac/en/login', 'brand-spillover'),
 ('J.P. Morgan Private Bank', 'jp morgan', 1, 301000, 45127, '/nam/en/about-us', 'brand'),
 ('J.P. Morgan Private Bank', 'personal banking services', 1, 135000, 20239, '/nam/en/services/banking/online-tools', 'generic'),
 ('Goldman Sachs PWM', 'japan yen dollar', 3, 1000000, 142428, '/insights/goldman-sachs-exchanges/what-the-us-japan-currency-intervention-means...', 'insights'),
 ('Goldman Sachs PWM', 'future of gold', 5, 368000, 33103, '/insights/the-markets/why-gold-is-expected-to-rise-to-record-highs', 'insights'),
 ('Goldman Sachs PWM', 'marcus from goldman sachs', 1, 90500, 13568, '/our-firm/history/moments/2016-marcus', 'brand'),
 ('Goldman Sachs PWM', 'neos', 6, 110000, 8245, '/pressroom/press-releases/2026/goldman-sachs-announces-agreement-to-acquire-NEOS-investments', 'press'),
 ('Goldman Sachs PWM', 'wealth management service', 1, 27100, 4062, '/what-we-do/ayco/for-individuals', 'generic-wealth'),
 ('UBS GWM', 'ubs', 2, 165000, 23995, '/global/en/investment-bank/who-we-serve.html', 'brand'),
 ('UBS GWM', 'ubs', 3, 165000, 23500, '/us/en/wealth-management/insights/ubs-studios/2026/usa-national-charter-approval.html', 'brand'),
 ('UBS GWM', 'union de bancos suizos', 3, 135000, 19227, '/es/es/wealthmanagement.html', 'brand'),
 ('UBS GWM', 'ubs financial login', 1, 110000, 16491, 'onlineservices.ubs.com', 'brand-login'),
 ('HSBC Private Bank', 'bank hsbc', 5, 33100, 2977, '/', 'brand'),
 ('HSBC Private Bank', 'hsbc hsbc login', 5, 14800, 1331, '/banking/online-banking/', 'brand-login'),
 ('HSBC Private Bank', 'career with hsbc', 2, 4400, 639, '/about-us/careers/', 'careers'),
 ('HSBC Private Bank', 'wgc hsbc golf', 15, 60500, 453, '/', 'sponsorship'),
 ('HSBC Private Bank', 'high end collectables', 4, 1900, 242, '/wih/investments-Insights/other-investment-insights/six-of-todays-most-collectible-luxury-items/', 'insights'),
 ('HSBC Private Bank', 'discretionary fund management meaning', 3, 1300, 185, '/investing/discretionary-portfolio-management/', 'generic-wealth'),
 ('HSBC Private Bank', 'open end fund', 1, 1000, 149, '/investing/alternative-investments/open-ended-solutions/', 'generic-wealth'),
 ('HSBC Private Bank', 'what does hsbc bank stands for', 2, 1600, 232, '/wih/beyond-wealth/purpose/pioneers-of-purpose-entrepreneurs-doing-well-by-doing-good/', 'insights'),
 ('Morgan Stanley PWM', 'asset management company near me', 3, 550000, 78335, '/what-we-do/wealth-management', 'generic-wealth'),
 ('Morgan Stanley PWM', 'morgan stanley', 3, 450000, 64092, '/what-we-do/wealth-management/private-wealth-management', 'brand'),
 ('Morgan Stanley PWM', 'tax brackets 2026', 1, 201000, 30134, '/content/dam/msdotcom/en/wealth-general/pdf/tax-tables-2026-edition.pdf', 'utility-content'),
 ('Morgan Stanley PWM', 'newsletter stock market', 4, 201000, 25614, '/newsletter/subscribe', 'utility-content'),
 ('Morgan Stanley PWM', 'market value adjustment', 2, 165000, 23995, '/content/dam/msdotcom/en/wealth-investmentsolutions/pdfs/deferredfixedannuities.pdf', 'utility-content'),
 ('BlackRock', 'slv stock symbol', 2, 450000, 65442, '/us/individual/products/239855/ishares-silver-trust', 'product'),
 ('BlackRock', 's&p 500 stock market index', 17, 7480000, 56071, '/us/individual/products/251378/ishares-s-p-500-index-fund', 'product'),
 ('BlackRock', 'value of silver and gold', 2, 246000, 35775, '/us/financial-professionals/insights/gold-silver-prices-volatility', 'insights'),
 ('BlackRock', 'invest investment', 1, 201000, 30134, '/ae/intermediaries/education/investment-education/what-is-investing', 'education'),
 ('BlackRock', 'ibit stock', 1, 201000, 30134, '/us/financial-professionals/investments/products/bitcoin-investing', 'product'),
]
write_csv('search/top_keywords_g_us.csv', [dict(brand=k[0], keyword=k[1], position=k[2], monthly_volume=k[3],
    est_traffic=k[4], url_path=k[5], intent_family=k[6], pulled=PULLED, source='serpstat.google.domain.ranked_keywords') for k in KW])

# ---------------------------------------------------------------- step 5: ads
# Google Ads Transparency via adyntel (first page of 40, pulled 2026-11-01). Creative text not extractable (image renders).
GADS = [
 ('J.P. Morgan Private Bank', 'privatebank.jpmorgan.com', 0, '', '', 'no ads found for the subdomain; root jpmorgan.com not queried'),
 ('Goldman Sachs PWM', 'goldmansachs.com', 500, 'Goldman Sachs & Co. LLC (text); MightyHive INC (agency, image+video)',
  '2024-07-01;2025-06-17;2025-10-30;2025-11-07;2026-01-01;2026-01-05;2026-03-03;2026-03-16;2026-04-11;2026-04-13;2026-09-02', 'first page: 23 text, 14 image, 3 video'),
 ('UBS GWM', 'ubs.com', 8000, 'UBS Switzerland AG; UBS Business Solutions AG; UBS Europe SE',
  '2022-08-13;2023-01-26;2025-04-01;2025-09-16;2026-04-18;2026-06-20;2026-09-21;2026-09-24;2026-10-07', 'first page: 8 text, 2 image'),
 ('HSBC Private Bank', 'privatebanking.hsbc.com', 0, '', '', 'no ads found for the subdomain; root hsbc.com not queried'),
 ('Morgan Stanley PWM', 'morganstanley.com', 2000, 'Morgan Stanley & Co. LLC; Morgan Stanley & Co Incorporated; Morgan Stanley Smith Barney LLC',
  '2024-10-21;2025-03-11;2025-06-18;2025-07-16;2025-08-10;2026-05-08;2026-06-02;2026-06-16;2026-06-21;2026-08-21;2026-10-01', 'first page: 40 text'),
 ('BlackRock', 'blackrock.com', 2000, 'BLACKROCK, INC; BlackRock, Inc.; Mindshare Media (agency); BlackRock Asset Management North Asia (HK); BlackRock Japan; BlackRock Investment Management (Australia); 貝萊德證券投資信託 (Taiwan)',
  '2024-08-14;2025-05-22;2025-08-01;2025-08-20;2025-08-26;2025-09-03;2025-09-18;2026-03-04;2026-04-16;2026-04-21;2026-04-30;2026-05-15;2026-05-27;2026-05-29;2026-06-01;2026-07-20;2026-08-04;2026-08-10;2026-08-11;2026-08-12;2026-08-14;2026-09-01;2026-09-02;2026-09-07;2026-09-10;2026-09-15;2026-09-22;2026-09-28', 'first page: 40 text; local APAC entities advertise separately'),
]
write_csv('google-ads/transparency.csv', [dict(brand=g[0], domain=g[1], total_ad_count=g[2], advertisers=g[3],
    creative_start_dates_first_page=g[4], note=g[5], pulled=PULLED, source='adyntel.google.ads.transparency') for g in GADS])

# LinkedIn Ad Library via harvestapi, countries HK,SG,AU,JP,IN,TW,CN, dateOption current-year, first page of 24, pulled 2026-11-01
LADS = [
 ('J.P. Morgan Private Bank', 'J.P. Morgan Private Bank', 492, 'Fixed income: "Portfolio diversification. Reliable income. Stability among volatility." / "Explore fixed income strategies at the World\'s Best Private Bank* *Global Finance Magazine, 2026."', 'single image 1200x1200 and 1200x628, EN + Simplified Chinese', '2026-05-26', 'https://www.linkedin.com/ad-library/detail/1420632406'),
 ('J.P. Morgan Private Bank', 'J.P. Morgan Private Bank', 492, 'Mobility: "Planning your next chapter abroad? Navigate next steps with the tried and tested advice of our wealth advisors." / "Start a conversation with the World\'s Best Private Bank*"', 'single image; variants ByYourSide, Borderless, Global, WithYou; EN + 简体 (筹划海外人生新篇章)', '2026-05-26', 'https://www.linkedin.com/ad-library/detail/1420438566'),
 ('Goldman Sachs PWM', 'Goldman Sachs; Goldman Sachs Asset Management', 30, '"Goldman Sachs 10,000 Women India" (IIMA/IIMB/IIML) x16; "Join the Leaders of Goldman Sachs" (Fortune MPW); "Explore Industry-Leading AI Analysis" video; "Choose Excellence" analyst class video; GSAM "How are Insurers Using AI in 2026?"', 'image + video; no wealth-management ad in the APAC filter', '2026-04-15;2026-09-30', 'https://www.linkedin.com/ad-library/detail/1218780033'),
 ('UBS GWM', 'UBS; UBS Asset Management', 1237, 'UBS AM: "Opportunity in a changing world" (EM), "Discover a broader range of income opportunities", "Build resilience for changing markets", "Is it time to rethink diversification?", "Investing is our craft"; UBS: 3Q26 earnings video, AI & Transformation Factory doc, Singapore awards post, campus/graduate docs', 'image, video, native document; no GWM client-acquisition ad on the first page', '2026-09-30;2026-10-16;2026-10-28', 'https://www.linkedin.com/ad-library/detail/1584730263'),
 ('HSBC Private Bank', 'HSBC Private Bank', 169, '"Global Entrepreneurial Wealth Report 2026": "AI is now the #1 reason entrepreneurs feel bullish" / "$367bn in planned AI investment, according to 3,000+ business owners" / "64% of entrepreneurs are considering a local acquisition or merger" / "Entrepreneurs trust AI - but it varies"; document ads "Wealth has a way of getting more complex the longer it lasts"', 'stat-card images (1_optimism, 2_investment, 3_MA, 4_trust) + native document carousels', '2026-10-06', 'https://www.linkedin.com/ad-library/detail/1596041404'),
 ('Morgan Stanley PWM', 'Morgan Stanley Investment Management', 85, '"The right alternatives platform is closer than you think." institutional and intermediary variants for SG and AU', 'single image 1200x1200; no PWM Asia ad in the filter', '2026-07-31', 'https://www.linkedin.com/ad-library/detail/1578489884'),
 ('BlackRock', 'BlackRock', 155, '"Closer than you think." / "This is Asia\'s moment." ASEAN campaign (image, video, carousel); "New angles on portfolio construction" (hedge fund, multi-asset, ETF sets); "Built for bumps: Three ways to navigate volatility" True or False video with Gargi Chaudhuri; "Investment Directions September 2026" video; "Asian fixed income\'s role in global portfolios" video; Japan careers', 'image, video, carousel', '2026-08-20;2026-09-30;2026-10-12;2026-10-14;2026-10-18;2026-10-27;2026-10-28', 'https://www.linkedin.com/ad-library/detail/1578892164'),
]
write_csv('linkedin-ads/ads.csv', [dict(brand=l[0], advertiser=l[1], ads_in_filter=l[2], hook_and_offer=l[3], formats=l[4],
    creative_dates_from_image_timestamps=l[5], example=l[6], pulled=PULLED, source='harvestapi.linkedin.ads.search') for l in LADS])

# Meta ad library via scrapecreators (companyName lookup, ACTIVE, trim), pulled 2026-11-01
META_FILES = {'Goldman Sachs PWM': 'mcp-Treg-call-1793548934229.txt', 'UBS GWM': 'mcp-Treg-call-1793548938317.txt',
              'Morgan Stanley PWM': 'mcp-Treg-call-1793548942748.txt', 'BlackRock': 'mcp-Treg-call-1793548946112.txt'}
mrows = []
meta_summary = {}
for brand, f in META_FILES.items():
    d = json.load(open(TR + f))['body']
    for r in d['results']:
        s = r.get('snapshot') or {}
        body = ((s.get('body') or {}).get('text')) or ''
        cards = s.get('cards') or []
        link = s.get('link_url') or (cards[0].get('link_url') if cards else '') or ''
        title = s.get('title') or (cards[0].get('title') if cards else '') or ''
        mrows.append(dict(brand=brand, page_name=r.get('page_name'), start=(r.get('start_date_string') or '')[:10],
                          platforms='|'.join(r.get('publisher_platform') or []), cta=s.get('cta_text') or '',
                          title=title[:120], body=body.replace('\n', ' ')[:200], link=link[:160],
                          total_active=d.get('searchResultsCount'), pulled=PULLED))
    sub = [x for x in mrows if x['brand'] == brand]
    meta_summary[brand] = dict(active=d.get('searchResultsCount'), pages=sorted(set(x['page_name'] for x in sub)),
                               oldest=min(x['start'] for x in sub if x['start']),
                               domains=Counter(re.sub(r'^https?://([^/]+).*', r'\1', x['link']) for x in sub if x['link']).most_common(5),
                               titles=Counter(x['title'] for x in sub if x['title']).most_common(4))
mrows.append(dict(brand='J.P. Morgan Private Bank', page_name='', start='', platforms='', cta='', title='', body='',
                  link='', total_active=0, pulled=PULLED))
mrows.append(dict(brand='HSBC Private Bank', page_name='', start='', platforms='', cta='', title='', body='',
                  link='', total_active='no pageId found for "HSBC Private Banking"', pulled=PULLED))
write_csv('meta-ads/ads.csv', mrows)

# ---------------------------------------------------------------- step 6: who talks about them
YT = [
 ('J.P. Morgan Private Bank', 'When JPMorgan CEO Jamie Dimon Speaks, the World Listens | The Circuit', 'Bloomberg Originals', 4249766, 'press', 'https://www.youtube.com/watch?v=9Kl-wO_j5GM'),
 ('J.P. Morgan Private Bank', 'Unboxing The $10 Million Dollar Invite-Only Credit Card: The JP Morgan Reserve', 'Graham Stephan', 3797572, 'creator', 'https://www.youtube.com/watch?v=4l9nmLfFQpM'),
 ('J.P. Morgan Private Bank', 'Ex-Banquera De JP Morgan Revela El Secreto De Los Ricos | Marta Echarri', 'Adrián Sáenz', 2354289, 'creator (ex-employee)', 'https://www.youtube.com/watch?v=qLQB7d26jco'),
 ('J.P. Morgan Private Bank', 'Meet J.P. Morgan Advisor Tammia | J.P. Morgan', 'jpmorgan', 885291, 'brand (Short, 1:01)', 'https://www.youtube.com/watch?v=ZGxSVnHPR9A'),
 ('J.P. Morgan Private Bank', 'Meet J.P. Morgan Advisor Shaakira | J.P. Morgan', 'jpmorgan', 354280, 'brand (Short, 1:02)', 'https://www.youtube.com/watch?v=6lb41qdPxps'),
 ('J.P. Morgan Private Bank', 'Bloomberg Wealth: J.P. Morgan\'s Mary Erdoes', 'David Rubenstein', 237743, 'press', 'https://www.youtube.com/watch?v=Tme1uEfM8Fg'),
 ('J.P. Morgan Private Bank', 'Day in the Life of a Private Client Advisor | Wealth Management | J.P. Morgan', 'jpmorgan', 211490, 'brand', 'https://www.youtube.com/watch?v=jLpN8ay3Fow'),
 ('J.P. Morgan Private Bank', 'Difference Between JP Morgan Private Bank vs JP Morgan Chase', 'Simon Katz - Ideal Media', 57751, 'creator', 'https://www.youtube.com/watch?v=gHqIGoh626Y'),
 ('Goldman Sachs PWM', '"Are You Destined to Deal?" With Goldman Sachs Managing Director Jim Donovan', 'University of Virginia School of Law', 3707300, 'talk (employee)', 'https://www.youtube.com/watch?v=RpUJfW4WTKw'),
 ('Goldman Sachs PWM', 'Tucker York, Global Head of Goldman Sachs Wealth Management', 'New to The Street TV', 2466039, 'press', 'https://www.youtube.com/watch?v=oFzQfZwMFrg'),
 ('Goldman Sachs PWM', 'Ex-Goldman Sachs Wealth Manager Reveals Top 3 Investments To Build Wealth | Ayesha Ofori', 'Building Wealth Without Borders', 1567794, 'creator (ex-employee)', 'https://www.youtube.com/watch?v=04KBRpzn2Yk'),
 ('Goldman Sachs PWM', 'Everything They Teach You at Goldman Sachs in 36 Minutes', 'jayhoovy', 1398425, 'creator', 'https://www.youtube.com/watch?v=WoG5s4txMsI'),
 ('Goldman Sachs PWM', '2021 Investment Outlook: "US Resilient"', 'Goldman Sachs', 278157, 'brand', 'https://www.youtube.com/watch?v=SO7iJmWi4-8'),
 ('UBS GWM', 'UBS - The Bank of Dirty Money | Full Documentary', 'FINAiUS', 1008260, 'creator (negative)', 'https://www.youtube.com/watch?v=aw5i2EB0zg0'),
 ('UBS GWM', 'Inside UBS\' $3b-a-day Sydney trading floor', 'Madison Malone', 779427, 'creator', 'https://www.youtube.com/watch?v=xU-2DRUZBn4'),
 ('UBS GWM', 'Why Wealthy Americans Love UBS, The Secretive Swiss Banking Giant', 'CNBC', 717439, 'press', 'https://www.youtube.com/watch?v=YXTXNzyOMCk'),
 ('UBS GWM', 'Jin Yee Young of UBS applies gymnastic discipline to market insights', 'South China Morning Post', 130538, 'press/partner (1 month ago)', 'https://www.youtube.com/watch?v=5Eskh2OcQlQ'),
 ('UBS GWM', 'LH Koh of UBS learns how to build trust with clients through painting', 'South China Morning Post', 125705, 'press/partner (5 months ago)', 'https://www.youtube.com/watch?v=NA8DZGPPi_E'),
 ('HSBC Private Bank', 'Redefining premium banking with #HSBCPremier', 'HSBC India', 26013902, 'brand (paid Short)', 'https://www.youtube.com/watch?v=VH8-PN6SxpM'),
 ('HSBC Private Bank', 'Sneak Peek into HSBC\'s Global Private Banking launch', 'HSBC India', 184666, 'brand', 'https://www.youtube.com/watch?v=CzqeKFtibEQ'),
 ('HSBC Private Bank', 'High Yield vs. High Risk: Understanding Private Credit Returns | Navigate with HSBC Ep. 1 (Part 2)', 'HSBC India', 179071, 'brand (podcast)', 'https://www.youtube.com/watch?v=LWHecxZe6tk'),
 ('HSBC Private Bank', 'Investing In India As An NRI - Navigate With HSBC Podcast', 'CNBC-TV18', 102163, 'press/partner (podcast)', 'https://www.youtube.com/watch?v=HzT7krWN-ao'),
 ('HSBC Private Bank', 'HLB Private Bank - Generations Ahead', 'Hong Leong Bank Malaysia', 6435693, 'competitor ad', 'https://www.youtube.com/watch?v=mX0YYhMF9_Q'),
 ('Morgan Stanley PWM', 'The Twisted History of Morgan Stanley | A Wall Street Documentary', 'FINAiUS', 1114743, 'creator', 'https://www.youtube.com/watch?v=qUxQug5gfdY'),
 ('Morgan Stanley PWM', 'Blackstone\'s Jon Gray: Stay Calm, Stay Positive, Never Give Up', 'Morgan Stanley and Blackstone', 149679, 'brand', 'https://www.youtube.com/watch?v=dPjQe_n2JKI'),
 ('Morgan Stanley PWM', 'Morgan Stanley\'s Chris Toomey: We\'re concerned about stagflation', 'CNBC Television', 71799, 'press', 'https://www.youtube.com/watch?v=I_f7XmtkIkw'),
 ('Morgan Stanley PWM', 'The History of Morgan Stanley', 'Morgan Stanley', 69228, 'brand', 'https://www.youtube.com/watch?v=l5LJCoYaUSs'),
 ('BlackRock', 'The Chilling Reason BlackRock... Chose Korea as the Asia-Pacific AI Capital', '돈의 질서', 74692, 'creator', 'https://www.youtube.com/watch?v=hEFBdiNKrhU'),
 ('BlackRock', 'BlackRock ETF Chief Reveals The Next Big AI & Crypto Opportunity! ETF Master Class', 'Ian Dunlap', 14017, 'creator', 'https://www.youtube.com/watch?v=pq9yw3_JSjw'),
 ('BlackRock', 'BlackRock\'s Global Outlook 2026 | Ben Powell', 'JioBlackRock Mutual Fund', 7715, 'brand (JV)', 'https://www.youtube.com/watch?v=T2jBFWFXEUY'),
 ('BlackRock', 'BlackRock: 1% of Asian Wealth Could Trigger $2T Crypto Boom', 'CoinDesk', 7599, 'press', 'https://www.youtube.com/watch?v=l8Mf4nIRAfQ'),
]
write_csv('youtube/search_popular.csv', [dict(brand=y[0], title=y[1], channel=y[2], views=y[3], label=y[4], url=y[5],
    pulled=PULLED, source='anyapi.youtube.search sortBy=popular') for y in YT])

REDDIT = [
 ('J.P. Morgan Private Bank', 'JP Morgan Flagged New Orleans as a Thawing Housing Market in 2026. Here\'s What Our Own Data Shows.', 'NewOrleansRealEstate', 10, 5, '2026-07-07', 'intermediary re-sharing a JPM PB presentation slide', 'https://www.reddit.com/r/NewOrleansRealEstate/comments/1upuvz9/'),
 ('J.P. Morgan Private Bank', 'Private Bank w/ Balance Sheet Credit Facility?', 'fatFIRE', 9, 6, '2026-08-01', 'complaint: "JP Morgan Private Bank ... no longer do holistic lending - just 50% of portfolio value"', 'https://www.reddit.com/r/fatFIRE/comments/1vcrqz5/'),
 ('J.P. Morgan Private Bank', 'Private Bank w/ Balance Sheet Credit Facility', 'Rich', 5, 13, '2026-08-01', 'same complaint cross-posted', 'https://www.reddit.com/r/Rich/comments/1vcrs6z/'),
 ('J.P. Morgan Private Bank', 'Why mainland Chinese company use Hong Kong bank JP Morgan to trade', 'Alibaba', 3, 18, '2026-09-14', 'user question', 'https://www.reddit.com/r/Alibaba/comments/1wgrdmx/'),
]
write_csv('reddit/mentions.csv', [dict(brand=r[0], title=r[1], subreddit=r[2], score=r[3], comments=r[4], date=r[5], label=r[6], url=r[7],
    pulled=PULLED, source='scrapecreators.reddit.search.posts sort=relevance; sort=top returned sitewide posts unrelated to the query') for r in REDDIT])

# ---------------------------------------------------------------- step 4b: AI answers (cloro ChatGPT, country SG, 2026-11-01)
AI = [
 dict(prompt='Which private bank is best in Asia for an ultra high net worth family with over 50 million USD? Compare J.P. Morgan, UBS, Goldman Sachs, HSBC and Morgan Stanley.',
      brands_in_order='J.P. Morgan; UBS; Goldman Sachs; HSBC; Morgan Stanley', shortlist='J.P. Morgan (family office); UBS; Goldman Sachs',
      jpm_pages_cited='privatebank.jpmorgan.com/apac/en/services/wealth-planning-and-advice/family-office-services; /apac/en/who-we-serve/family-office; /apac/en/about-us/awards; /apac/en',
      other_cited='euromoney.com awards 2026 results; morganstanley.com PWM Asia page; ubs.com/global/en/wealthmanagement; goldmansachs.com/what-we-do/wealth-management; hsbcprivatebank.com'),
 dict(prompt='I am setting up a single family office in Singapore. Which private banks should I talk to and why?',
      brands_in_order='DBS; Bank of Singapore; UBS; J.P. Morgan; Citi; HSBC; Julius Baer; Pictet (Goldman Sachs and Morgan Stanley not named)',
      shortlist='DBS; Bank of Singapore; UBS; J.P. Morgan; Citi; HSBC', jpm_pages_cited='privatebank.jpmorgan.com/ (footnote only); indicative minimum quoted "US$10-25m+"',
      other_cited='vccsingapore.com (4 pages); wealthmanagement.sg (4 pages); chambers.com; mas.gov.sg; bankofsingapore.com media release; ubs.com/sg/en/wealthmanagement/about-us'),
 dict(prompt='What is the minimum to open an account with a private bank in Hong Kong and which banks have the best investment platform for alternatives and private markets?',
      brands_in_order='UBS (1); J.P. Morgan (2); HSBC (3); Citi (4); Endowus (5) (Goldman Sachs and Morgan Stanley not named)', shortlist='UBS; J.P. Morgan; HSBC',
      jpm_pages_cited='privatebank.jpmorgan.com/apac/en/services/investing/alternative-investments (quoted: "nearly 300 specialists", "US$227bn client commitments (March 2026)", PWM/The Banker 2025 award); minimum quoted "Generally US$10 million"',
      other_cited='ubs.com/hk alternative-investments + unified-global-alternatives; asia.privatebanking.hsbc.com.hk alternatives; privatebank.citibank.com; endowus.com/en-hk; chmfia.org, clearmoneyguide.com, wiki.private.law (third-party minimum guides)'),
]
for a in AI:
    a.update(pulled=PULLED, source='cloro.ai-search.chatgpt.scrape country=SG')
write_csv('ai-answers/chatgpt.csv', AI)

# ---------------------------------------------------------------- step 1: site reads (treg.web.extract, 2026-11-01)
SITE = [
 dict(brand='J.P. Morgan Private Bank', url='https://privatebank.jpmorgan.com/apac/en/home', hero='"Have you shared information without knowing it?" (AI data-privacy article); 2026 Asia Mid-Year Outlook; 2026 Mid-Year Outlook; Trending Topics ("See what clients are reading"); Number to watch $2.5T robotics',
      trust_bar='2025 World\'s Best Private Bank; 75+ offices; 2025 World\'s Best for Digital Solutions; 3.5K advisors; Best Global Private Bank; $2.7T client assets (as of June 30 2024); World\'s Best for Alternative Investments',
      cta='#contactus-flow (no form fields shown); Sign in US / non-US client', segments='business owners; family office; financial leaders group; innovation economy group; institutional families; next generation; women and wealth',
      content_hubs='insights/markets-and-investing/asf (Asia strategy); eotm; global-investment-strategy-view; market-thoughts; tmt; reports/2026-family-office-report; principal-discussions; audio-and-webcasts; the-client-experience/nextlist; summer-reading-list; sponsorships-and-partnerships; security-hub',
      handles='linkedin.com/company/jpmorganprivatebank-us; instagram.com/jpmorganprivatebank; twitter.com/jpmorgan; facebook.com/jpmorgan; web.wechat.com/jpmorgan', languages='EN, 简体, 繁體'),
 dict(brand='HSBC Private Bank', url='https://www.privatebanking.hsbc.com/', hero='"In a world full of connections, we help you make the right ones"; Global Entrepreneurial Wealth Report 2026 ("Unleashing the Fire Horse: Mainland China\'s Growing Global Imprint")',
      trust_bar='none on home', cta='"Get in touch" -> Become HSBC Private Banking client form (/contact-us-is-easy/become-hsbc-private-banking-client/)',
      segments='entrepreneurs (passing on / selling your business / what next after exit); family enterprise succession', content_hubs='Wealth Insights Hub (/wih/); Q4 2026 Investment Outlook "AI-celeration"; Monthly View video (Global CIO Willem Sels); Think Wealth Visionaries (episode with Larry Fink and Ida Liu)',
      handles='youtube.com/user/HSBC; linkedin.com/company/hsbc-private-bank', languages='EN'),
 dict(brand='Goldman Sachs PWM', url='https://privatewealth.goldmansachs.com/', hero='"Powering Global Wealth" - "Internationally recognized as the best private bank for ultra-high net worth individuals and families"',
      trust_bar='1:25 advisor-to-client ratio; Euromoney 2026 World\'s Best for UHNW (incl. Asia\'s Best for UHNW, Asia\'s Best for Alternative Investments); Global Finance 2026 Best Private Bank for Net Worth over $25M',
      cta='"Start the Conversation" form', segments='Goldman Sachs Family Office; Apex Family Office Coverage; Institutional Client Solutions; Sports and Entertainment Solutions',
      content_hubs='Events & Community "Celebrating Global Leaders" (In the Lead); Playing for Scale: Future of Sports Investing report; wealth planning articles (jewelry & watches, wire fraud, business exit/IPO)', handles='not shown on page', languages='EN'),
 dict(brand='Morgan Stanley PWM', url='https://www.morganstanley.com/what-we-do/wealth-management/private-wealth-management', hero='"With exceptional wealth comes exceptional complexity" + team video (five named leaders); "first-class business in a first-class way"',
      trust_bar='formed 1977; alternatives platform incl. digital assets', cta='"Contact a Private Wealth Advisor" / "Find a Private Wealth Advisor" (#fa-pwm)',
      segments='wealth planning professionals; business owners; entrepreneurs; single family offices; next generation', content_hubs='Lifestyle Advisory (concierge); Exclusive Events & Networking; PWM Leadership Insights; Architecting a Family Office; SFO Compensation Insights',
      handles='linkedin.com/showcase/morgan-stanley-private-wealth-management', languages='EN (Asia page at /private-wealth-management/asia/en cited by ChatGPT)'),
 dict(brand='UBS GWM', url='https://www.ubs.com/global/en/wealth-management.html', hero='"Our crafted wealth management services and insights will help you pursue what matters to you most"; UBS Wealth Way',
      trust_bar='Best Global Private Bank and Best CIO (PWM/The Banker 2025); "largest truly global wealth manager"; 160 years', cta='"Let\'s talk / Connect with us"',
      segments='individuals and families; women\'s wealth; entrepreneurs', content_hubs='CIO insights; UBS Wealth Way', handles='not shown on page', languages='EN'),
 dict(brand='BlackRock', url='https://www.blackrock.com/hk/en', hero='Q4 2026 Global Investment Outlook "Scarcity vs. abundance"; Investment Directions "Navigator: Reading the road"; weekly commentary',
      trust_bar='iShares 1600+ ETFs, US$5.4T (31 Dec 2025)', cta='fund search; contact us; sign in', segments='intermediaries (HK site), institutional link',
      content_hubs='featured funds (Systematic Global Equity High Income, Asian Multi-Asset Income, Global Bond Income); themes: income, iShares, systematic, thematic; BlackRock Investment Institute', handles='not shown on page', languages='EN, 繁體'),
]
for s in SITE:
    s.update(pulled=PULLED, source='treg.web.extract')
write_csv('site/pages.csv', SITE)

# ---------------------------------------------------------------- step 9: jobs (blitzapi LinkedIn jobs, HK+SG, title filters, 30 rows each, 2026-11-01)
JOBS = [
 dict(brand='J.P. Morgan Private Bank', linkedin_page='jpmorganchase', filter='title: Private Bank|Private Banker|Wealth; HK,SG', total_matching=310,
      frontline_advisors_bankers=9, banker_support_professionals=7, client_service=3, marketing=0, product_platform=2, ops_tech_audit=6, grad_programs=2,
      markets_named='SEA; Thailand; Australia; Taiwan; China; Indonesia; Hong Kong', examples='UHNW Client Advisor VP Thailand Market (2026-10-22); UHNW Client Advisor ED SEA (2026-10-07); Private Banker Australia Market ED (2026-09-24); Asia Solutions Product Dev (Discretionary, Funds & Alternatives) VP (2026-10-05); Digital & Data Transformation trading-experience PM VP (2026-09-11)'),
 dict(brand='Goldman Sachs PWM', linkedin_page='goldman-sachs', filter='title: Private Wealth|Wealth Management; HK,SG', total_matching=120,
      frontline_advisors_bankers=1, banker_support_professionals=4, client_service=0, marketing=0, product_platform=8, ops_tech_audit=11, grad_programs=0,
      markets_named='Greater China; Korea; Southeast Asia', examples='Private Wealth Advisor ED Singapore (2026-10-08); PWM Alternative Capital Markets Group ED HK (2026-09-23, fundraising alts to UHNW/family offices); PWM Portfolio Management Group VP HK (2026-10-29); Private Bank Deposits ED (2026-10-06)'),
 dict(brand='UBS GWM', linkedin_page='ubs', filter='title: Wealth|Client Advisor|Private Bank; HK,SG', total_matching=85,
      frontline_advisors_bankers=6, banker_support_professionals=11, client_service=0, marketing=3, product_platform=1, ops_tech_audit=1, grad_programs=6,
      markets_named='Singapore; Hong Kong; European SG market; Global Family & Institutional Wealth; EAM/financial intermediaries', examples='Client Advisor GWM Hong Kong (2026-07-21); Client Account Manager GFIW x10 (Jul-Sep 2026); Wealth Planner HK (2026-10-29) and SG; Team Lead Lombard & Mortgage SEA (2026-10-29); GWM Marketing Strategist APAC HK (2026-06-17); Graduate Talent Program GWM Marketing SG (2026-08-17)'),
 dict(brand='HSBC Private Bank', linkedin_page='hsbc', filter='title: Private Bank|Private Banking|Wealth; HK,SG', total_matching=455,
      frontline_advisors_bankers=15, banker_support_professionals=0, client_service=1, marketing=2, product_platform=2, ops_tech_audit=3, grad_programs=0,
      markets_named='China team HK; Hong Kong team; Singapore market; Indonesia; Global India; Greater China; Australia & International; Premier offshore', examples='Relationship Manager China Team - Private Banking HK (2026-11-01); RM Indonesia Market GPB SG (2026-10-23); RM Global India Market (2026-10-22); VP Private Bank Marketing South Asia SG (2026-10-15); VP Marketing South Asia HSBC Private Bank (2026-09-20); Wealth Sales Director Offshore Banking (2026-09-25)'),
 dict(brand='Morgan Stanley PWM', linkedin_page='morgan-stanley', filter='title: Private Wealth|Wealth Management; HK,SG', total_matching=59,
      frontline_advisors_bankers=3, banker_support_professionals=9, client_service=0, marketing=0, product_platform=6, ops_tech_audit=8, grad_programs=0,
      markets_named='Greater China', examples='PWM Asia Relationship Manager Greater China Team HK/SG (2026-06-23, 2026-07-04); Client Service Manager x9; Advisory Portfolio Management VP HK (2026-08-11); Product Specialist private funds sourcing SG (2026-05-23); Head of GFC Advisory PWM Asia (2026-08-18)'),
 dict(brand='BlackRock', linkedin_page='blackrock', filter='title: Wealth|Distribution|Marketing|Client; HK,SG', total_matching=92,
      frontline_advisors_bankers=4, banker_support_professionals=0, client_service=5, marketing=2, product_platform=11, ops_tech_audit=0, grad_programs=8,
      markets_named='Thailand; Emerging SEA / Philippines; Greater China; Japan; SEA institutional', examples='VP Thailand Wealth Business (SG-based, 2026-09-12); Emerging Southeast Asia Sales, Wealth Business VP (2026-07-23); Aladdin Wealth Tech grads/interns x4; Marketing grad + intern (2026-08-24/27); APAC Alternatives (GIP) Client Service VP (2026-09-23)'),
]
for j in JOBS:
    j.update(pulled=PULLED, source='blitzapi.jobs.company (LinkedIn jobs index)', window='postings dated 2026-05 to 2026-11-01 in first 30 rows')
write_csv('jobs/openings_summary.csv', JOBS)

# ---------------------------------------------------------------- step 7: LinkedIn own content (harvestapi company posts, last month)
LI_FILES = {'Goldman Sachs PWM': 'mcp-Treg-call-1793548795274.txt', 'UBS GWM': 'mcp-Treg-call-1793548801458.txt',
            'Morgan Stanley PWM': 'mcp-Treg-call-1793548809505.txt', 'HSBC Private Bank': 'mcp-Treg-call-1793549203545.txt',
            'J.P. Morgan Private Bank': 'mcp-Treg-call-1793549435363.txt'}
# BlackRock's page result was small and returned inline (8 posts, all BlackRock Brasil / LatAm in the month).
BLACKROCK_INLINE = [
 ('2026-10-29', 'https://www.linkedin.com/posts/blackrock_blackrockbrasil-previdaeancia-investimentos-activity-7521541351885160448-QDVb', 'multi-image', 20, 1, 0, 'Durante a semana do 47º Congresso Brasileiro de Previdência Privada, a BlackRock Brasil promoveu um jantar em São Paulo'),
 ('2026-10-27', 'https://www.linkedin.com/posts/blackrock_blackrockbrasil-investimentos-gestaetodeportfaejlios-activity-7520816577223614464-ydbS', 'multi-image', 11, 0, 0, 'A BlackRock Brasil participou do X Encontros PPS'),
 ('2026-10-23', 'https://www.linkedin.com/posts/blackrock_blackrock-ishares-etfs-activity-7519415342788440064-ZtNL', 'image', 24, 1, 0, 'O SMAL11, ETF de small caps da iShares, alcança um novo patamar: R$ 8,5 bilhões'),
 ('2026-10-22', 'https://www.linkedin.com/posts/blackrock_a-blackrock-brasil-estar%C3%A1-presente-no-encontro-activity-7519073389177815041-rPNQ', 'multi-image', 18, 0, 0, 'A BlackRock Brasil estará presente no Encontro Anual sobre Índices e ETFs no Brasil 2026'),
 ('2026-10-22', 'https://www.linkedin.com/posts/blackrock_outubrorosa-blackrockbrasil-activity-7519004636842803200-RxgW', 'image', 62, 0, 0, 'O time da BlackRock Brasil participou de uma caminhada pelo Parque do Povo (Outubro Rosa)'),
 ('2026-10-21', 'https://www.linkedin.com/posts/blackrock_bruno-barino-country-manager-da-blackrock-activity-7518642272364830721-F1nJ', 'multi-image', 62, 2, 0, 'Bruno Barino, Country Manager da BlackRock no Brasil, participou de uma entrevista à GloboNews'),
 ('2026-10-20', 'https://www.linkedin.com/posts/blackrock_recebemos-representantes-de-single-family-activity-7518333512802816001-c37u', 'multi-image', 18, 0, 0, 'Recebemos representantes de Single Family Offices brasileiros em nosso escritório em Nova York'),
 ('2026-10-01', 'https://www.linkedin.com/posts/blackrock_blackrockbrasil-etfs-investimentos-activity-7511485098240745472-c2Hl', 'multi-image', 32, 1, 1, 'A BlackRock Brasil participou da B3 Week 2026'),
]
li_rows = []
followers = {}
for brand, f in LI_FILES.items():
    d = json.load(open(TR + f))['body']
    for e in d['elements']:
        txt = (e.get('content') or '').replace('\n', ' ').strip()
        eng = e.get('engagement') or {}
        if e.get('postVideo'): fmt = 'video'
        elif e.get('document'): fmt = 'document'
        elif e.get('article'): fmt = 'article'
        elif e.get('postImages'): fmt = 'image' if len(e['postImages']) == 1 else 'multi-image'
        else: fmt = 'text'
        repost = bool(e.get('repost') or e.get('repostedBy') or e.get('repostId'))
        followers[brand] = (e.get('author') or {}).get('info')
        li_rows.append(dict(brand=brand, date=e['postedAt']['date'][:10], url=e.get('linkedinUrl'), format=fmt,
                            likes=eng.get('likes', 0) or 0, comments=eng.get('comments', 0) or 0, shares=eng.get('shares', 0) or 0,
                            repost=repost, first_lines=txt[:200], image_count=len(e.get('postImages') or []),
                            image_read='not read (image CDN blocked from this environment)'))
for r in BLACKROCK_INLINE:
    li_rows.append(dict(brand='BlackRock', date=r[0], url=r[1], format=r[2], likes=r[3], comments=r[4], shares=r[5], repost=False,
                        first_lines=r[6], image_count=0, image_read='not read'))
followers['BlackRock'] = '3,274,227 followers'
for r in li_rows:
    r['reactions'] = r['likes']; r['pulled'] = PULLED; r['window'] = 'scrapePostedLimit=month (page 1)'
write_csv('linkedin/posts.csv', li_rows)

# rank within channel: drop posts under 7 days old, top quarter / bottom half
cut = dt.date(2026, 10, 25)
li_stats = {}
for b in BRANDS:
    sub = [r for r in li_rows if r['brand'] == b and dt.date.fromisoformat(r['date']) <= cut]
    sub.sort(key=lambda r: -r['reactions'])
    n = len(sub)
    if n == 0:
        li_stats[b] = dict(n=0); continue
    q = max(1, math.ceil(n / 4)); h = n // 2
    top = sub[:q]; bottom = sub[-h:] if h else []
    def share(rows, pred): return (sum(1 for r in rows if pred(r)), len(rows))
    fmt_top = Counter(r['format'] for r in top); fmt_bot = Counter(r['format'] for r in bottom); fmt_all = Counter(r['format'] for r in sub)
    li_stats[b] = dict(n=n, settled_cutoff=str(cut), followers=followers.get(b), median_reactions=sorted(r['reactions'] for r in sub)[n // 2],
                       top_quarter=[(r['date'], r['format'], r['reactions'], r['comments'], r['first_lines'][:110], r['url']) for r in top],
                       bottom_half_median=sorted(r['reactions'] for r in bottom)[len(bottom) // 2] if bottom else None,
                       fmt_all=dict(fmt_all), fmt_top=dict(fmt_top), fmt_bottom=dict(fmt_bot),
                       video_top=share(top, lambda r: r['format'] == 'video'), video_bot=share(bottom, lambda r: r['format'] == 'video'),
                       doc_top=share(top, lambda r: r['format'] == 'document'), doc_bot=share(bottom, lambda r: r['format'] == 'document'),
                       people_top=share(top, lambda r: re.search(r'\b(our|meet|congratulat|colleague|team|CEO|Chief|welcome|proud|joined|celebrat)\w*', r['first_lines'], re.I) is not None),
                       people_bot=share(bottom, lambda r: re.search(r'\b(our|meet|congratulat|colleague|team|CEO|Chief|welcome|proud|joined|celebrat)\w*', r['first_lines'], re.I) is not None),
                       question_top=share(top, lambda r: '?' in r['first_lines'][:120]), question_bot=share(bottom, lambda r: '?' in r['first_lines'][:120]),
                       number_top=share(top, lambda r: re.search(r'\d', r['first_lines'][:120]) is not None), number_bot=share(bottom, lambda r: re.search(r'\d', r['first_lines'][:120]) is not None),
                       posts_per_week=round(n / 4.0, 1), repost_share=share(sub, lambda r: r['repost']))

# ---------------------------------------------------------------- step 10: moves vs growth
MOVES = [
 # brand, date, channel, move, link, reach
 ('Goldman Sachs PWM', '2025-10-30', 'google-ads', 'new Google text creatives (Goldman Sachs & Co. LLC)', 'https://adstransparency.google.com/advertiser/AR12684134775619846145', None),
 ('Goldman Sachs PWM', '2025-11-07', 'google-ads', 'new Google text creative', 'https://adstransparency.google.com/advertiser/AR12684134775619846145', None),
 ('Goldman Sachs PWM', '2026-01-01', 'google-ads', 'new Google text creatives (Jan 1 and Jan 5)', 'https://adstransparency.google.com/advertiser/AR12684134775619846145', None),
 ('Goldman Sachs PWM', '2026-03-03', 'google-ads', 'MightyHive display/video flight starts (Mar 3, Mar 16) + new text creatives', 'https://adstransparency.google.com/advertiser/AR09806350161511710721', None),
 ('Goldman Sachs PWM', '2026-03-20', 'press', 'Euromoney Private Banking Awards 2026: World\'s Best for UHNW, Asia\'s Best for UHNW and Alternatives', 'https://www.euromoney.com/awards/private-banking-awards/pb-2026-results/', None),
 ('Goldman Sachs PWM', '2026-04-11', 'google-ads', 'new text creative + MightyHive image flight (Apr 13)', 'https://adstransparency.google.com/advertiser/AR13815301222900432897', None),
 ('Goldman Sachs PWM', '2026-04-15', 'linkedin-ads', '10,000 Women India LinkedIn campaign (16 variants)', 'https://www.linkedin.com/ad-library/detail/1218780033', None),
 ('Goldman Sachs PWM', '2026-09-02', 'google-ads', 'new Google text creative', 'https://adstransparency.google.com/advertiser/AR12684134775619846145', None),
 ('UBS GWM', '2025-09-16', 'google-ads', 'new UBS Switzerland AG text creative', 'https://adstransparency.google.com/advertiser/AR16219291845509775361', None),
 ('UBS GWM', '2026-04-18', 'google-ads', 'new UBS Switzerland AG text creative', 'https://adstransparency.google.com/advertiser/AR16219291845509775361', None),
 ('UBS GWM', '2026-06-20', 'google-ads', 'UBS Business Solutions AG image creative', 'https://adstransparency.google.com/advertiser/AR15402754928304717825', None),
 ('UBS GWM', '2026-09-21', 'google-ads', 'new image + text creatives (Sep 21, Sep 24)', 'https://adstransparency.google.com/advertiser/AR16219291845509775361', None),
 ('UBS GWM', '2026-10-16', 'linkedin-ads', 'UBS AM "Opportunity in a changing world" EM and income campaign in APAC', 'https://www.linkedin.com/ad-library/detail/1584730263', None),
 ('Morgan Stanley PWM', '2025-06-18', 'google-ads', 'Morgan Stanley & Co Incorporated text wave (13+ creatives)', 'https://adstransparency.google.com/advertiser/AR03008790754542747649', None),
 ('Morgan Stanley PWM', '2025-07-16', 'google-ads', 'new Morgan Stanley & Co. LLC text creatives', 'https://adstransparency.google.com/advertiser/AR15948927588416618497', None),
 ('Morgan Stanley PWM', '2026-05-08', 'google-ads', 'new text creative', 'https://adstransparency.google.com/advertiser/AR03008790754542747649', None),
 ('Morgan Stanley PWM', '2026-06-02', 'google-ads', 'new text creatives (Jun 2, Jun 16, Jun 21)', 'https://adstransparency.google.com/advertiser/AR15948927588416618497', None),
 ('Morgan Stanley PWM', '2026-07-31', 'linkedin-ads', 'MSIM "The right alternatives platform is closer than you think" SG/AU campaign', 'https://www.linkedin.com/ad-library/detail/1578489884', None),
 ('Morgan Stanley PWM', '2026-08-21', 'google-ads', 'new text creative', 'https://adstransparency.google.com/advertiser/AR03008790754542747649', None),
 ('BlackRock', '2026-03-04', 'google-ads', 'Mindshare Media text flight starts', 'https://adstransparency.google.com/advertiser/AR11545421847461888001', None),
 ('BlackRock', '2026-04-16', 'google-ads', 'Mindshare + BLACKROCK INC creatives (Apr 16, 21, 30)', 'https://adstransparency.google.com/advertiser/AR09961582030619672577', None),
 ('BlackRock', '2026-05-15', 'google-ads', 'Australia entity + BLACKROCK INC creatives (May 15, 27, 29)', 'https://adstransparency.google.com/advertiser/AR05832621465492520961', None),
 ('BlackRock', '2026-06-01', 'google-ads', 'Mindshare text creatives', 'https://adstransparency.google.com/advertiser/AR11545421847461888001', None),
 ('BlackRock', '2026-07-20', 'google-ads', 'BlackRock, Inc. text creative', 'https://adstransparency.google.com/advertiser/AR17709583924570619905', None),
 ('BlackRock', '2026-08-04', 'google-ads', 'Mindshare + Taiwan entity flights (Aug 4-14)', 'https://adstransparency.google.com/advertiser/AR13697326786335997953', None),
 ('BlackRock', '2026-08-20', 'linkedin-ads', '"New angles on portfolio construction" LinkedIn set', 'https://www.linkedin.com/ad-library/detail/1644734066', None),
 ('BlackRock', '2026-09-01', 'google-ads', 'Mindshare + BlackRock text flights (Sep 1-28)', 'https://adstransparency.google.com/advertiser/AR11545421847461888001', None),
 ('BlackRock', '2026-09-30', 'linkedin-ads', '"Closer than you think / This is Asia\'s moment" ASEAN campaign', 'https://www.linkedin.com/ad-library/detail/1578892164', None),
 ('HSBC Private Bank', '2026-10-06', 'linkedin-ads', 'Global Entrepreneurial Wealth Report 2026 LinkedIn campaign (169 ads in APAC filter)', 'https://www.linkedin.com/ad-library/detail/1596041404', None),
 ('J.P. Morgan Private Bank', '2026-05-26', 'linkedin-ads', 'Fixed income + Mobility LinkedIn campaign, EN + Simplified Chinese (492 ads in APAC filter)', 'https://www.linkedin.com/ad-library/detail/1420632406', None),
 ('J.P. Morgan Private Bank', '2026-03-20', 'press', 'Euromoney 2026: Asia\'s Best for Next Generation (per ChatGPT citation of results page)', 'https://www.euromoney.com/awards/private-banking-awards/pb-2026-results/', None),
 ('J.P. Morgan Private Bank', '2025-01-01', 'hiring', '2024: RM headcount in Asia +35% (+86) to 330 (Asian Private Banker league tables); 1H25 most active senior hirer', 'https://asianprivatebanker.com/people-news/movers-shakers-decoding-j-p-morgan-private-banks-hiring-spree/', None),
]
mv_rows = []
def midx(m): return MONTHS.index(m) if m in MONTHS else None
def pct(a, b): return None if (a in (None, 0) or b is None) else round((b - a) / a * 100, 1)
for brand, date, channel, move, link, reach in MOVES:
    m = date[:7]; i = midx(m)
    rec = dict(brand=brand, date=date, channel=channel, move=move, link=link, reach=reach)
    if i is not None and brand in SPYFU:
        for series in ('organic', 'paid'):
            s = SPYFU[brand][series]
            before = [s[j] for j in (i - 2, i - 1) if 0 <= j < 12]
            after = [s[j] for j in (i, i + 1, i + 2) if 0 <= j < 12]
            if before and after:
                b = sum(before) / len(before); a = sum(after) / len(after)
                rec[f'{series}_before_avg'] = round(b); rec[f'{series}_after_avg'] = round(a); rec[f'{series}_lift_pct'] = pct(b, a)
            else:
                rec[f'{series}_lift_pct'] = 'window incomplete'
    else:
        rec['organic_lift_pct'] = rec['paid_lift_pct'] = 'outside SpyFu window'
    mv_rows.append(rec)
write_csv('moves-vs-growth.csv', mv_rows)

# Spearman per channel: monthly count of moves vs growth 0,1,2 months later (paid clicks mom %)
def rank(v):
    s = sorted((x, i) for i, x in enumerate(v)); r = [0] * len(v); i = 0
    while i < len(s):
        j = i
        while j + 1 < len(s) and s[j + 1][0] == s[i][0]: j += 1
        for k in range(i, j + 1): r[s[k][1]] = (i + j) / 2 + 1
        i = j + 1
    return r
def spearman(x, y):
    if len(x) < 3: return None
    rx, ry = rank(x), rank(y); mx, my = sum(rx) / len(rx), sum(ry) / len(ry)
    num = sum((a - mx) * (b - my) for a, b in zip(rx, ry)); den = math.sqrt(sum((a - mx) ** 2 for a in rx) * sum((b - my) ** 2 for b in ry))
    return None if den == 0 else round(num / den, 2)
corr = {}
for brand in SPYFU:
    paid = SPYFU[brand]['paid']; org = SPYFU[brand]['organic']
    growth_paid = [None] + [pct(paid[i - 1], paid[i]) for i in range(1, 12)]
    growth_org = [None] + [pct(org[i - 1], org[i]) for i in range(1, 12)]
    for channel in ('google-ads', 'linkedin-ads'):
        counts = [0] * 12
        n_moves = 0
        for b, date, ch, *_ in MOVES:
            if b == brand and ch == channel and midx(date[:7]) is not None:
                counts[midx(date[:7])] += 1; n_moves += 1
        if n_moves < 5:
            corr[(brand, channel)] = dict(moves=n_moves, note='under 5 moves in window: rows listed, no correlation called'); continue
        res = dict(moves=n_moves)
        for lag in (0, 1, 2):
            xs, ys, yo = [], [], []
            for i in range(12):
                j = i + lag
                if j < 12 and growth_paid[j] is not None:
                    xs.append(counts[i]); ys.append(growth_paid[j]); yo.append(growth_org[j])
            res[f'lag{lag}_paid'] = spearman(xs, ys); res[f'lag{lag}_organic'] = spearman(xs, yo); res['months'] = len(xs)
        corr[(brand, channel)] = res

# growth summary
summary = {}
for b, s in SPYFU.items():
    o, p = s['organic'], s['paid']
    summary[b] = dict(organic_oct25=o[0], organic_peak=(MONTHS[o.index(max(o))], max(o)), organic_sep26=o[-1],
                      organic_change_pct=pct(o[0], o[-1]), organic_peak_to_sep_pct=pct(max(o), o[-1]),
                      paid_dec25=p[2], paid_sep26=p[-1], paid_x_dec_to_sep=round(p[-1] / p[2], 1),
                      paid_biggest_step=max(((MONTHS[i], pct(p[i - 1], p[i])) for i in range(3, 12)), key=lambda t: t[1]),
                      budget_sep26=s['budget'][-1])

out = dict(pulled=PULLED, traffic_summary=summary, li_stats=li_stats, meta=meta_summary, moves=mv_rows,
           spearman={f'{k[0]} | {k[1]}': v for k, v in corr.items()}, followers=followers)
json.dump(out, open(os.path.join(HERE, 'analysis_output.json'), 'w'), indent=1, default=str)
print(json.dumps(out, indent=1, default=str))
