/* Asia Outlook Explorer — embeddable component.
   Usage: <link rel="stylesheet" href="asia-outlook.css">
          <div id="asia-outlook"></div>
          <script src="asia-outlook.js" data-target="#asia-outlook"></script>
   Or call window.AsiaOutlook.init("#asia-outlook") yourself. */
(function(){
"use strict";
/* ===================== CONTENT =====================
   All copy lives here. Paragraphs in `copy` are the article text shown on the page;
   `poll` is the test-yourself moment; `takeaway` is the one-line summary. */
const SOURCE = {
  name:'J.P. Morgan Private Bank, Asia Strategy Focus: “2026 Asia Outlook”',
  date:'18 December 2025',
  url:'https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/asf/2026-asia-outlook'
};

const CONTENT = {
  region: {
    id:'region', flag:'🌏', name:'The big picture', status:'ready',
    one:'Central banks hand the baton to fiscal policy, and AI capex keeps the exporters busy.',
    intro:[
      'Asian economies outperformed in 2025, helped by a broadly weaker U.S. dollar. Asian central banks have been steadily implementing monetary policy easing through the year, and they look poised to enter the final legs of the easing cycle in the coming months. This means fiscal policy would play a bigger role in supporting growth in 2026.',
      'Looking ahead to 2026, we are optimistic about global AI tailwinds continuing to support tech exporters like Taiwan and South Korea. India presents a compelling entry point with a robust mix of cyclical tailwinds. China will likely continue to grapple with structural economic challenges, though its impressive pace of tech innovation can yield select winners in some sectors. Japan’s macro outlook is complicated by stubborn inflation and a behind-the-curve central bank, though its equities still offer medium-term opportunities.'
    ],
    steps:[
      {
        q:'Who carries Asian growth in 2026: central banks or governments?',
        poll:{ q:'Your guess: which lever does more for Asian growth in 2026?', opts:['Rate cuts (monetary policy)','Government spending (fiscal policy)','Neither, growth is export-led'], house:1,
          verdict:'Asian central banks are entering the final legs of their easing cycle, so fiscal policy has to do more in 2026.' },
        copy:[
          'Through 2025 most Asian central banks were steadily cutting rates, and we expect the last of those cuts to land in the coming months. Once that runs out, the burden of supporting growth shifts to budgets. That is the single biggest change in the regional policy mix going into 2026.',
          'Indonesia exemplifies this pro-growth stance. The new administration has outlined a suite of fiscal policies aimed at boosting liquidity, accelerating state spending, and supporting key sectors such as agriculture, energy and infrastructure.'
        ],
        points:['Asian central banks eased steadily through 2025 and look poised to finish the cycle in the coming months.','With less room to cut, governments step in: Indonesia is the clearest example.','A broadly weaker U.S. dollar helped Asian economies outperform in 2025.'],
        viz:'baton',
        takeaway:'Monetary easing is almost done in Asia; watch budgets, not rate decisions, in 2026.'
      },
      {
        q:'How much of the global AI build-out lands in Asia?',
        poll:{ q:'Roughly what share of global AI capex flows to Taiwan and South Korea?', opts:['About 10%','About 30%','About 60%'], house:1,
          verdict:'We estimate close to 30% of total AI capex makes its way to these two economies.' },
        copy:[
          'Global AI spending has been a tailwind for growth amid trade uncertainty across Asia. We estimate that close to 30% of total AI capex makes its way to Taiwan and South Korea, the two economies that sit on the critical bottlenecks of the supply chain: advanced chip fabrication in Taiwan, and memory in Korea, whose role in AI applications and workloads keeps growing.',
          'This is consequential enough to drive an earnings upgrade cycle in Asia ex-Japan that could keep earnings growth elevated at 12–13% in 2026, and 10–11% in 2027.'
        ],
        points:['AI spending has been a tailwind for growth amid trade uncertainty.','Enough to keep Asia ex-Japan earnings growth at 12–13% in 2026 and 10–11% in 2027.','Korea leads the world in memory for AI; Taiwan dominates advanced fabrication.'],
        viz:'aicapex',
        takeaway:'Roughly 30% of global AI capex reaches Taiwan and Korea, powering 12–13% Asia ex-Japan earnings growth in 2026.'
      },
      {
        q:'Where does the outlook see the best entry point in Asia?',
        poll:{ q:'Which market is called a top implementation idea outside the U.S.?', opts:['Japan','China','India'], house:2,
          verdict:'India, on a mix of cyclical tailwinds and valuations one standard deviation below their 10-year average relative to the S&P 500.' },
        copy:[
          'Taken market by market: India presents a compelling entry point with a robust mix of cyclical tailwinds and remains one of our top implementation ideas outside the U.S. despite export headwinds. Taiwan and Korea ride the AI capex cycle. China will likely continue to grapple with structural economic challenges, though its impressive pace of tech innovation can yield select winners in some sectors. Japan’s macro outlook is complicated by stubborn inflation and a behind-the-curve central bank, though its equities still offer medium-term opportunities, much of which the market has already priced in.'
        ],
        points:['India: 7.5% GDP growth, earnings re-accelerating to 13–14%, relative valuations near a 10-year low.','China: structural challenges persist, but fast tech innovation can yield select winners.','Japan: constructive, but a lot of the optimism is priced in.'],
        viz:'scorecard',
        takeaway:'India is the preferred entry point; Taiwan and Korea for AI; China and Japan need selectivity.'
      }
    ]
  },
  china: {
    id:'china', flag:'🇨🇳', name:'China', status:'ready',
    one:'Exports carry the economy while consumption and property lag. Growth of 4.3%, a managed yuan, and selective equity winners.',
    intro:[
      'China will likely continue to grapple with structural economic challenges in 2026. The economy remains unbalanced, with exports driving most of the growth while consumption stays weak and investment fades alongside a still-contracting property sector. Yet the pace of technological innovation is impressive, and that is where we look for winners.',
      'Below we address the four questions we hear most often on China: whether the growth model can persist, whether consumption recovers, what the industrial build-out means for the rest of the world, and why we do not expect the yuan to appreciate significantly. We close with how we approach Chinese equities.'
    ],
    steps:[
      {
        q:'Can China’s growth model persist in 2026?',
        poll:{ q:'Your call: China’s real GDP growth in 2026 will be…', opts:['Below 4%','Around 4.3%','5% or higher'], house:1,
          verdict:'We forecast 4.3% (range 4.1–4.6%), moderating from 2025 because of the high base for export growth.' },
        copy:[
          'The Chinese economy remains unbalanced with exports driving most of the growth. We expect that imbalance to persist: the trends of weak consumption and disappearing investment amid a historic export boom are likely to continue into 2026, with the property sector still weak and weighing on investment.',
          'On that basis we expect real GDP growth of 4.3% (range: 4.1–4.6%) in 2026, moderating from 2025 due to the high base for export growth. Growth holds up, but it is carried by one engine.'
        ],
        points:['Real GDP growth of 4.3% expected in 2026 (range 4.1–4.6%), a step down from 2025.','Weak consumption and disappearing investment amid a historic export boom are likely to persist.','The property sector remains weak and continues to weigh on investment.'],
        viz:'engine',
        takeaway:'China grows about 4.3% in 2026, but exports do almost all the work.'
      },
      {
        q:'Will consumption recover?',
        poll:{ q:'What is holding Chinese consumers back most?', opts:['A weak labour market and slowing incomes','Not enough subsidies','High interest rates'], house:0,
          verdict:'Weak consumption is linked to a weak labour market and slowing income growth. Subsidies help at the margin but do not fix that.' },
        copy:[
          'We do not expect a meaningful consumption recovery in 2026. The weakness traces back to a weak labour market and slowing income growth rather than to a lack of stimulus, which is why support programmes have had a limited effect on overall spending.',
          'The major consumer-stimulus policy in 2025, trade-in subsidies for some durable goods, is set to continue in 2026. It helps the categories it targets, but it does not change the income picture that drives household behaviour. We expect further support to come mainly through faster deployment of existing fiscal resources rather than a new consumption programme.'
        ],
        points:['Consumption weakness traces back to jobs and incomes, not to a lack of stimulus.','Trade-in subsidies for durable goods are set to continue in 2026.','Expect support through faster deployment of fiscal resources rather than a new programme.'],
        viz:'chain',
        takeaway:'Chinese consumption stays weak in 2026; the constraint is jobs and incomes, and subsidies only cushion it.'
      },
      {
        q:'What does China’s industrial build-out mean from a global perspective?',
        poll:{ q:'China’s share of total global exports is now closest to…', opts:['5%','15%','30%'], house:1,
          verdict:'China’s market share now stands at about 15% of total global exports, after a year in which exports added over $1tn to the trade surplus.' },
        copy:[
          'China’s industrial build-out has translated into rising market share abroad, now about 15% of total global exports, even as the trade surplus swelled by more than $1tn year-to-date. That success invites pushback from trading partners, and these developments are a key reason why we anticipate Chinese export growth to moderate heading into 2026.',
          'Not all sectors look alike. While U.S. technology credits may face supply pressures in 2026 due to heavy AI-related capex, China’s tech sector is less exposed, as its investment is more measured and fundamentals could improve if “anti-involution” measures to curb destructive price competition become more effective.'
        ],
        points:['China’s market share has risen to roughly 15% of total global exports.','A key reason we expect export growth to moderate heading into 2026.','Tech is less exposed: measured investment, and “anti-involution” could help fundamentals.'],
        viz:'waffle',
        takeaway:'China holds about 15% of global exports; expect export growth to cool in 2026, with tech the least exposed sector.'
      },
      {
        q:'Why is the yuan less likely to appreciate significantly?',
        poll:{ q:'With a trade surplus above $1tn, what did the yuan do in 2025 on a trade-weighted basis?', opts:['Rose sharply','Stayed flat','Fell about 4%'], house:2,
          verdict:'Despite the record surplus, the yuan weakened about 4% on a trade-weighted basis. The bar for significant appreciation is high.' },
        copy:[
          'Despite China’s export outperformance adding over $1tn to the trade surplus year-to-date, the yuan has weakened by 4% on a trade-weighted basis. We think the bar for significant appreciation is high. The recent strength could be largely driven by seasonality.',
          'The yuan is a heavily managed currency by the central bank under a low-vol FX management framework, which makes the U.S. dollar the main driver of USD/CNH. While momentum could drive USD/CNH below 7 in the near term, over the medium term we expect a stable, range-bound trajectory for the pair. As for whether the policy stance could shift toward favouring a stronger yuan, we caution about potential repercussions on export competitiveness and the entrenched deflationary pressure.'
        ],
        points:['Exports added over $1tn to the surplus, yet the yuan weakened 4% trade-weighted.','USD/CNH could dip below 7 near term; range-bound over the medium term.','A stronger-yuan policy would risk export competitiveness and entrench deflation.'],
        viz:'cnh',
        takeaway:'Do not bank on a strong yuan: range-bound USD/CNH is the base case despite a $1tn+ surplus.'
      },
      {
        q:'How should investors approach Chinese equities?',
        poll:{ q:'What is the stance on Chinese equities?', opts:['Broadly bullish on the index','Constructive but selective, innovation-led','Avoid altogether'], house:1,
          verdict:'The medium-term view has become more constructive, but the emphasis is on selective stock picking around innovation-related themes.' },
        copy:[
          'The outlook for Chinese equities has become more constructive over the medium-term, and we view pullbacks as opportunities to add exposure for investors who are underweight (Chinese equities make up around 3% of a globally-diversified equity allocation) or enter tactical trades on specific stocks. Moderately pro-growth policies that establish a floor on economic growth, increasing recognition of technological advancements, improving U.S.–China relations, and domestic investors seeking alternative assets to property ownership are all potentially supportive for the Chinese equity market.',
          'Negative earnings revisions in 2025 imply recent gains have been largely multiple-driven. Due to this unevenness, we prefer a highly selective approach with an emphasis on our China Tech Innovator Basket: AI and “super apps”, new electric vehicles and autonomous driving, and semiconductor localisation. In addition, high-quality dividend names with resilient earnings continue to offer attractive yields, and an increasing number of consumer companies valued at depressed valuations could offer attractive risk/reward.'
        ],
        points:['Structural challenges persist, so the macro story is not the reason to own China.','China’s pace of tech innovation can yield select winners in some sectors.','Prioritise stock picking and innovation-related themes over broad beta.'],
        viz:'lens',
        takeaway:'In Chinese equities, be selective and follow innovation; the index is not the trade.'
      }
    ]
  },
  japan: {
    id:'japan', flag:'🇯🇵', name:'Japan', status:'preview',
    one:'Stubborn inflation and a behind-the-curve BoJ. Equities constructive, but already priced in.',
    intro:[
      'Japan’s macro outlook is complicated by stubborn inflation and a behind-the-curve central bank. In our base case we expect inflation to gradually moderate and stabilise near 2% over the course of 2026, but achieving this outcome will likely require several critical policy conditions to be met: rice prices peaking in the fourth quarter, authorities preventing excessive yen depreciation, and the new administration’s expansionary fiscal programme not adding demand-driven price pressure. We expect Shunto wage gains broadly in line with 2025’s outcome of around 5.5%, and the yen to remain weak in the near term before potentially grinding towards the 146–150 range by end-2026.',
      'The new administration’s moderately expansionary fiscal program that balances increased social welfare with investing in new technologies/defense supports the market outlook. Furthermore, monetary policy remains relatively dovish, which could result in USDJPY staying in a higher range for longer, which is supportive for earnings. However, markets appear to have priced a lot of that optimism in, and modest upside to our December 2026 TOPIX outlook of 3,350–3,400 keeps us tactically neutral on Japanese equities. We prefer select opportunities in the financial, industrial, consumer discretionary, and technology sectors; meaningful pullbacks present buying opportunities to build a long-term neutral allocation of around 5% within a globally-diversified equity portfolio.'
    ],
    preview:{
      stats:[['~2%','Inflation stabilising near target over 2026 (base case)'],['3,350–3,400','December 2026 TOPIX outlook, tactically neutral'],['~5.5%','Expected Shunto wage gains, in line with 2025'],['146–150','USD/JPY by end-2026, after near-term yen weakness']],
      points:['Rice prices are expected to peak in Q4, and authorities need to prevent excessive yen depreciation.','A proposed two-year suspension of the 8% consumption tax on food could add demand-driven price pressure.','Preferred sectors: financials, industrials, consumer discretionary and technology.']
    }
  },
  india: {
    id:'india', flag:'🇮🇳', name:'India', status:'preview',
    one:'Top implementation idea outside the U.S. Cyclical tailwinds plus valuations near a 10-year low relative to the S&P 500.',
    intro:[
      'India presents a compelling entry point with a robust mix of cyclical tailwinds and remains one of our top implementation ideas outside the U.S. despite export headwinds. Inflation has been low at around 2%, a 47-year low, which gave the Reserve Bank of India room to cut rates by 125bp from 6.50% to 5.25%. Together with direct and indirect tax cuts from the recent budget and infrastructure projects, this underpins a 2026 GDP growth projection of 7.5%. The main headwind is trade: the Liberation Day tariffs hit India at a 36% effective rate, which persists in the absence of a trade deal.',
      'We re-iterate our positive outlook on Indian equities with a December 2026 MSCI India outlook of 3,350–3,450, implying an expected low-mid teens total return from current levels. We expect the tailwinds for the economy to translate into tailwinds for earnings recovery, since India’s earnings growth is strongly correlated to GDP growth historically. The current earnings downgrade cycle has been extended at 14 months vs a 9–10 month historical average, but estimates seem to have stopped drifting lower and the September earnings season saw growth accelerate to 13% YoY, 4% better than expected. We expect earnings growth to re-accelerate at 13–14% p.a. in both 2026 and 2027, versus about 11% in 2025.'
    ],
    preview:{
      stats:[['7.5%','2026 GDP growth forecast'],['13–14%','Earnings growth p.a. in 2026 and 2027, vs ~11% in 2025'],['125bp','RBI cuts from 6.50% to 5.25% as inflation hit a 47-year low near 2%'],['3,350–3,450','December 2026 MSCI India outlook, low-to-mid-teens total return']],
      points:['Relative P/E of MSCI India vs the S&P 500 sits one standard deviation below its 10-year average.','Active EM fund positioning in Indian equities is near the 0–1st percentile.','The 36% effective U.S. tariff rate persists in the absence of a trade deal and is the main export headwind.']
    }
  },
  twkr: {
    id:'twkr', flag:'🇹🇼🇰🇷', name:'Taiwan & Korea', status:'preview',
    one:'The AI exporters. Close to 30% of global AI capex lands here, and Korea leads the world in memory.',
    intro:[
      'Looking ahead to 2026, we are optimistic about global AI tailwinds continuing to support tech exporters like Taiwan and South Korea. We estimate that close to 30% of total AI capex makes its way to these two economies, which has been a tailwind for growth amidst trade uncertainty across Asia. This is consequential enough to drive an earnings upgrade cycle in Asia ex-Japan that could keep earnings growth elevated at 12–13% in 2026 and 10–11% in 2027.',
      'Korea is leading the world in the increasingly important role of memory in AI applications and workloads, while authorities continue to push companies to improve valuation multiples through shareholder-friendly measures. Taiwan dominates advanced chip fabrication, the other critical bottleneck in the AI supply chain. The risks are concentration in a handful of large companies, any slowdown in AI capex, and geopolitics.'
    ],
    preview:{
      stats:[['~30%','Share of total AI capex flowing to Taiwan and Korea'],['12–13%','Asia ex-Japan earnings growth, 2026'],['10–11%','Asia ex-Japan earnings growth, 2027'],['Value-up','Korean authorities pushing shareholder-friendly steps to lift multiples']],
      points:['Korea leads the world in memory for AI applications and workloads.','Taiwan dominates advanced chip fabrication.','Risks: index concentration, any slowdown in AI capex, and geopolitics.']
    }
  },
  asean: {
    id:'asean', flag:'🇮🇩🇸🇬', name:'ASEAN', status:'preview',
    one:'Fiscal policy steps up as rate cuts run out. Indonesia is the clearest pro-growth example.',
    intro:[
      'Asian central banks have been steadily implementing monetary policy easing in 2025, and they look poised to enter the final legs of the easing cycle in the coming months. This means fiscal policy would play a bigger role in supporting growth in 2026 across Southeast Asia.',
      'Indonesia exemplifies this pro-growth stance. The new administration has outlined a suite of fiscal policies aimed at boosting liquidity, accelerating state spending, and supporting key sectors such as agriculture, energy, and infrastructure. Indonesia is also a major nickel supplier for AI-related supply chains.'
    ],
    preview:{
      stats:[['Final legs','Where the regional easing cycle stands'],['Fiscal','The lever that supports growth in 2026'],['Nickel','Indonesia’s role as a key supplier to AI-related supply chains'],['3 sectors','Agriculture, energy and infrastructure targeted by Indonesia’s package']],
      points:['Indonesia’s new administration is boosting liquidity and accelerating state spending.','A broadly weaker U.S. dollar helped Asian economies outperform in 2025.','Market-level ASEAN views to follow once the China chapter format is approved.']
    }
  }
};
const ORDER = ['region','china','japan','india','twkr','asean'];
/* ===================== INFOGRAPHICS ===================== */
const svgIcon = {
  up:'<svg viewBox="0 0 24 24"><path d="M12 19V5M5 12l7-7 7 7"/></svg>',
  down:'<svg viewBox="0 0 24 24"><path d="M12 5v14M5 12l7 7 7-7"/></svg>',
  flat:'<svg viewBox="0 0 24 24"><path d="M4 12h16"/></svg>',
  arrow:'<svg viewBox="0 0 24 24"><path d="M12 5v14M6 13l6 6 6-6"/></svg>'
};
const VIZ = {
  engine(){
    return `<div class="viz anim">
      <div class="vt">China’s growth engine in 2026</div>
      <div class="board">
        <div class="row pop"><div class="ic up">${svgIcon.up}</div><div><div class="name">Exports</div><div class="desc">Historic boom; drives most of the growth</div></div><div class="tag">Strong</div></div>
        <div class="row pop" style="animation-delay:.1s"><div class="ic down">${svgIcon.down}</div><div><div class="name">Consumption</div><div class="desc">Weak labour market, slowing incomes</div></div><div class="tag">Weak</div></div>
        <div class="row pop" style="animation-delay:.2s"><div class="ic down">${svgIcon.down}</div><div><div class="name">Investment</div><div class="desc">“Disappearing” outside the export sector</div></div><div class="tag">Fading</div></div>
        <div class="row pop" style="animation-delay:.3s"><div class="ic down">${svgIcon.down}</div><div><div class="name">Property</div><div class="desc">Still contracting</div></div><div class="tag">Contracting</div></div>
      </div>
      <div class="vt" style="margin-top:6px">Real GDP growth forecast, 2026</div>
      <svg viewBox="0 0 360 86" role="img" aria-label="China 2026 GDP forecast 4.3 percent, range 4.1 to 4.6 percent, shown on a scale from 3.5 to 5.5 percent">
        <line x1="20" y1="48" x2="340" y2="48" class="grid"/>
        ${[3.5,4,4.5,5,5.5].map(v=>{const x=20+(v-3.5)/2*320;return `<line x1="${x}" y1="44" x2="${x}" y2="52" class="grid"/><text x="${x}" y="70" font-size="11" text-anchor="middle" class="t3">${v}%</text>`}).join('')}
        <rect class="s1 grow" x="${20+(4.1-3.5)/2*320}" y="40" width="${(0.5)/2*320}" height="16" rx="4" opacity=".35"/>
        <circle class="s1" cx="${20+(4.3-3.5)/2*320}" cy="48" r="7"/><circle class="surf" cx="${20+(4.3-3.5)/2*320}" cy="48" r="3"/>
        <text x="${20+(4.3-3.5)/2*320}" y="24" font-size="14" font-weight="700" text-anchor="middle">4.3%</text>
        <text x="${20+(4.1-3.5)/2*320}" y="24" font-size="11" text-anchor="end" class="t3">4.1</text>
        <text x="${20+(4.6-3.5)/2*320}" y="24" font-size="11" text-anchor="start" class="t3">4.6</text>
      </svg>
      <div class="vs">Dot is the point forecast; the band is the stated range. Moderating from 2025 on a high export base.</div>
    </div>`;
  },
  chain(){
    const node=(n,b,s,soft='')=>`<div class="node ${soft} pop"><div class="num">${n}</div><div><b>${b}</b><span>${s}</span></div></div>`;
    const arrow=`<div class="arrow">${svgIcon.arrow}</div>`;
    return `<div class="viz anim">
      <div class="vt">Why consumption stays weak</div>
      <div class="chain">
        ${node(1,'Weak labour market','Hiring and job security under pressure')}${arrow}
        ${node(2,'Slowing income growth','Household earnings expand more slowly')}${arrow}
        ${node(3,'Cautious households','Spending stays subdued despite support')}${arrow}
        ${node('+','Trade-in subsidies continue in 2026','A cushion for targeted durable goods, not a cure','soft')}
      </div>
      <div class="vs">The outlook links consumption weakness to jobs and incomes. Stimulus is set to continue but does not change that chain.</div>
    </div>`;
  },
  waffle(){
    let cells='';
    for(let i=0;i<100;i++){const r=Math.floor(i/10),c=i%10;const on=i<15;cells+=`<rect x="${c*22}" y="${r*22}" width="18" height="18" rx="4" class="${on?'s1 pop':'track'}" style="animation-delay:${on?i*0.03:0}s"/>`;}
    return `<div class="viz anim">
      <div class="vt">China’s share of total global exports</div>
      <div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center">
        <svg viewBox="-2 -2 222 222" style="max-width:190px" role="img" aria-label="Waffle chart: 15 of 100 squares filled, China holds about 15 percent of global exports">${cells}</svg>
        <div>
          <div style="font-size:44px;font-weight:700;letter-spacing:-.03em;line-height:1">~15%</div>
          <div class="vs" style="margin-top:6px">of world exports now come from China, after exports added over <b>$1tn</b> to the trade surplus this year.</div>
          <div class="legend" style="margin-top:10px"><span><i style="background:var(--series-1)"></i>China</span><span><i style="background:var(--track)"></i>Rest of world</span></div>
        </div>
      </div>
      <div class="board" style="margin-top:4px">
        <div class="row"><div class="ic flat">${svgIcon.flat}</div><div><div class="name">Export growth heading into 2026</div><div class="desc">Expected to moderate from a high base</div></div><div class="tag">Slower</div></div>
        <div class="row"><div class="ic up">${svgIcon.up}</div><div><div class="name">Tech sector</div><div class="desc">Less exposed; measured investment; helped if “anti-involution” works</div></div><div class="tag">Less exposed</div></div>
      </div>
    </div>`;
  },
  cnh(){
    return `<div class="viz anim">
      <div class="vt">Two facts that do not add up, until you know the yuan is managed</div>
      <div class="board" style="grid-template-columns:1fr 1fr;gap:10px">
        <div class="row pop" style="grid-template-columns:28px 1fr;align-items:start"><div class="ic up">${svgIcon.up}</div><div><div style="font-size:24px;font-weight:700;letter-spacing:-.02em;line-height:1.1">+$1tn</div><div class="desc" style="margin-top:4px">added to the trade surplus year-to-date by export outperformance</div></div></div>
        <div class="row pop" style="grid-template-columns:28px 1fr;align-items:start;animation-delay:.15s"><div class="ic down">${svgIcon.down}</div><div><div style="font-size:24px;font-weight:700;letter-spacing:-.02em;line-height:1.1">−4%</div><div class="desc" style="margin-top:4px">trade-weighted yuan over the same period, despite the surplus</div></div></div>
      </div>
      <div class="vt" style="margin-top:4px">USD/CNH path the outlook expects (schematic, not data)</div>
      <svg viewBox="0 0 360 130" role="img" aria-label="Schematic: USD/CNH may dip below 7 in the near term then trade in a stable range over the medium term">
        <rect x="190" y="30" width="150" height="40" rx="6" class="s1" opacity=".14"/>
        <line x1="44" y1="50" x2="340" y2="50" class="grid"/>
        <text x="38" y="54" font-size="11" text-anchor="end" class="t3">7.00</text>
        <path d="M44 40 C 90 40, 110 66, 150 62 S 205 44, 240 50 S 300 54, 340 50" fill="none" class="s1l" stroke-width="2" stroke-linecap="round" stroke-dasharray="420" stroke-dashoffset="420" style="animation:dash 1.4s ease forwards"/>
        <style>@keyframes dash{to{stroke-dashoffset:0}}</style>
        <text x="110" y="92" font-size="11" text-anchor="middle" class="t2">Near term</text>
        <text x="110" y="106" font-size="11" text-anchor="middle" class="t3">momentum could push below 7</text>
        <text x="265" y="92" font-size="11" text-anchor="middle" class="t2">Medium term</text>
        <text x="265" y="106" font-size="11" text-anchor="middle" class="t3">stable, range-bound</text>
        <text x="190" y="126" font-size="11" text-anchor="middle" class="t3">Heavily managed, low-vol framework · USD is the main driver</text>
      </svg>
    </div>`;
  },
  lens(){
    return `<div class="viz anim">
      <div class="vt">How to look at Chinese equities</div>
      <svg viewBox="0 0 360 170" role="img" aria-label="Diagram: broad index is not the trade; the focus narrows to innovation-related themes and select winners">
        <rect x="16" y="20" width="328" height="130" rx="14" class="track"/>
        <text x="180" y="44" font-size="12" text-anchor="middle" class="t3">Broad market: structural challenges persist</text>
        <rect x="60" y="58" width="240" height="78" rx="12" class="s1" opacity=".18"/>
        <text x="180" y="80" font-size="12" text-anchor="middle" class="t2">Medium term: more constructive</text>
        <rect x="110" y="92" width="140" height="34" rx="10" class="s1 pop"/>
        <text x="180" y="114" font-size="13" font-weight="700" text-anchor="middle" style="fill:#fff">Innovation-led winners</text>
      </svg>
      <div class="legend"><span><i style="background:var(--track)"></i>Avoid broad beta</span><span><i style="background:var(--series-1);opacity:.4"></i>Constructive over the medium term</span><span><i style="background:var(--series-1)"></i>Where to pick stocks</span></div>
    </div>`;
  },
  baton(){
    return `<div class="viz anim">
      <div class="vt">The policy hand-off</div>
      <svg viewBox="0 0 360 100" role="img" aria-label="Monetary easing in 2025 hands over to fiscal policy in 2026">
        <text x="20" y="22" font-size="12" class="t2">2025</text><text x="340" y="22" font-size="12" text-anchor="end" class="t2">2026</text>
        <rect x="20" y="34" width="150" height="22" rx="4" class="s1 grow" opacity=".9"/>
        <text x="28" y="49" font-size="12" font-weight="600" style="fill:#fff">Monetary easing</text>
        <rect x="172" y="34" width="68" height="22" rx="4" class="s1 grow" opacity=".35" style="animation-delay:.3s"/>
        <text x="206" y="49" font-size="10" text-anchor="middle" class="t2">final legs</text>
        <rect x="150" y="70" width="190" height="22" rx="4" class="acc grow" style="animation-delay:.5s"/>
        <text x="160" y="85" font-size="12" font-weight="600" style="fill:#fff">Fiscal policy does more</text>
        <text x="20" y="85" font-size="11" class="t3">Budgets step in</text>
      </svg>
      <div class="vs">Example: Indonesia’s package to boost liquidity, accelerate state spending and support agriculture, energy and infrastructure.</div>
    </div>`;
  },
  aicapex(){
    const r=52,c=2*Math.PI*r,share=.3;
    return `<div class="viz anim">
      <div class="vt">Where AI capex goes, and what it does to earnings</div>
      <div style="display:grid;grid-template-columns:auto 1fr;gap:16px;align-items:center">
        <svg viewBox="0 0 140 140" style="max-width:150px" role="img" aria-label="Donut: about 30 percent of global AI capex flows to Taiwan and Korea">
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--track)" stroke-width="16"/>
          <circle cx="70" cy="70" r="${r}" fill="none" stroke="var(--series-1)" stroke-width="16" stroke-linecap="butt" stroke-dasharray="${c*share} ${c}" transform="rotate(-90 70 70)" style="stroke-dashoffset:${c*share};animation:dashD 1.1s ease forwards"/>
          <style>@keyframes dashD{to{stroke-dashoffset:0}}</style>
          <text x="70" y="66" font-size="22" font-weight="700" text-anchor="middle">~30%</text>
          <text x="70" y="84" font-size="10" text-anchor="middle" class="t3">to TW + KR</text>
        </svg>
        <svg viewBox="0 0 220 120" role="img" aria-label="Asia ex-Japan earnings growth forecast: 12 to 13 percent in 2026, 10 to 11 percent in 2027">
          <text x="0" y="14" font-size="11" class="t2">Asia ex-Japan earnings growth</text>
          <line x1="0" y1="100" x2="220" y2="100" class="grid"/>
          <rect class="s1 growy" x="40" y="${100-12.5*5}" width="24" height="${12.5*5}" rx="4" style="animation-delay:.2s"/>
          <text x="52" y="${100-12.5*5-6}" font-size="12" font-weight="700" text-anchor="middle">12–13%</text>
          <text x="52" y="116" font-size="11" text-anchor="middle" class="t3">2026</text>
          <rect class="s1 growy" x="130" y="${100-10.5*5}" width="24" height="${10.5*5}" rx="4" opacity=".6" style="animation-delay:.4s"/>
          <text x="142" y="${100-10.5*5-6}" font-size="12" font-weight="700" text-anchor="middle">10–11%</text>
          <text x="142" y="116" font-size="11" text-anchor="middle" class="t3">2027</text>
        </svg>
      </div>
      <div class="vs">Bars drawn at the midpoint of each stated range.</div>
    </div>`;
  },
  scorecard(){
    const rows=[['🇮🇳','India','Compelling entry point','top'],['🇹🇼🇰🇷','Taiwan & Korea','AI tailwinds continue','top'],['🇨🇳','China','Selective winners from innovation','mid'],['🇯🇵','Japan','Opportunities, already priced in','mid']];
    return `<div class="viz anim"><div class="vt">The outlook’s stance by market</div><div class="board">${rows.map((r,i)=>`<div class="row pop" style="animation-delay:${i*.1}s"><div style="font-size:20px">${r[0]}</div><div><div class="name">${r[1]}</div><div class="desc">${r[2]}</div></div><div class="tag">${r[3]==='top'?'Preferred':'Selective'}</div></div>`).join('')}</div></div>`;
  }
};

/* ===================== IMPLEMENTATION IDEAS ===================== */
const IMPL = [
  {
    id:'cn', flag:'🇨🇳', name:'Chinese equities', title:'Picking the winners is paramount',
    stance:'Selective · add on pullbacks', tone:'', weight:3,
    lede:'The medium-term outlook has become more constructive. Pullbacks are opportunities to add for investors who are underweight, or to enter tactical trades in specific stocks. But recent gains were largely multiple-driven, so selection matters more than beta.',
    supports:['Moderately pro-growth policies that put a floor under economic growth','Increasing recognition of China’s technological advancements','Improving U.S.–China relations','Domestic investors seeking alternatives to property ownership'],
    watch:['Negative earnings revisions in 2025 mean recent gains have been largely multiple-driven','Domestic consumption remains soft','Unevenness across sectors argues against broad index exposure'],
    how:['Core: the China Tech Innovator Basket across three themes (below)','Income: high-quality dividend names with resilient earnings and attractive yields','Value: consumer companies trading at depressed valuations offer attractive risk/reward','Size: Chinese equities are around 3% of a globally diversified equity allocation'],
    viz:'implCn',
    full:['The outlook for Chinese equities has become more constructive over the medium-term, and we view pullbacks as opportunities to add exposure for investors who are underweight (Chinese equities make up around 3% of a globally-diversified equity allocation) or enter tactical trades on specific stocks. Moderately pro-growth policies that establish a floor on economic growth, increasing recognition of technological advancements, improving U.S.–China relations, and domestic investors seeking alternative assets to property ownership are all potentially supportive for the Chinese equity market.','Negative earnings revisions in 2025 imply recent gains have been largely multiple-driven. Due to this unevenness, we prefer a highly selective approach regarding Chinese equities with an emphasis on our China Tech Innovator Basket. This group focuses on three key areas: AI & “super apps” driving digital efficiency and monetization, new electric vehicles (NEV) & autonomous driving reshaping mobility and expanding beyond China, and semiconductor localization strengthening domestic supply chains amid technological export controls. In addition, high-quality dividend names with resilient earnings continue to offer attractive yields. While we acknowledge domestic consumption remains soft, an increasing number of consumer companies being valued at depressed valuations could offer attractive risk/reward.']
  },
  {
    id:'jp', flag:'🇯🇵', name:'Japanese equities', title:'A constructive outlook that markets have already priced in',
    stance:'Tactically neutral · buy meaningful pullbacks', tone:'outline', weight:5,
    lede:'Fiscal support, a still-dovish Bank of Japan and a firmer global backdrop are all constructive. But the market has priced much of it: modest upside to the December 2026 TOPIX outlook of 3,350–3,400 keeps the stance tactically neutral.',
    supports:['A moderately expansionary fiscal programme balancing social welfare with investment in new technologies and defence','Relatively dovish monetary policy, which could keep USD/JPY in a higher range for longer, supportive for earnings','Increased support for consumption','Rising expectations of a re-acceleration in global growth'],
    watch:['Markets appear to have priced a lot of the optimism in','Upside to the December 2026 TOPIX outlook of 3,350–3,400 is modest','Wait for meaningful pullbacks rather than chasing'],
    how:['Prefer select opportunities in financials, industrials, consumer discretionary and technology','Use meaningful pullbacks to build a long-term neutral allocation of around 5% within a globally diversified equity portfolio'],
    viz:'implJp',
    full:['The new administration’s moderately expansionary fiscal program that balances increased social welfare with investing in new technologies/defense supports the market outlook. Furthermore, monetary policy remains relatively dovish, which could result in USDJPY staying in a higher range for longer, which is supportive for earnings. With increased support for consumption, and rising expectations of a re-acceleration in global growth, the domestic and global backdrop is constructive for Japanese equities.','However, markets appear to have priced a lot of that optimism in, and modest upside to our December 2026 TOPIX outlook of 3,350-3,400 keeps us tactically neutral on Japanese equities. We prefer select opportunities in the financial, industrial, consumer discretionary, and technology sectors. Meaningful pullbacks present buying opportunities for investors to build a long-term neutral allocation of around 5% within a globally-diversified equity portfolio.']
  },
  {
    id:'in', flag:'🇮🇳', name:'Indian equities', title:'Attractive entry point for long-term performance',
    stance:'Positive · build a long-term allocation', tone:'', weight:3,
    lede:'A December 2026 MSCI India outlook of 3,350–3,450 implies a low-to-mid-teens total return. Earnings are turning, valuations are reasonable and active EM funds hold almost no India, so the risk/reward is attractive.',
    supports:['Economic tailwinds translate into earnings: India’s earnings growth is strongly correlated with GDP growth','September season: earnings growth accelerated to 13% YoY, 4% better than expected at the start of reporting','Earnings estimates seem to have stopped drifting lower; growth expected to re-accelerate to 13–14% p.a. in 2026 and 2027 (vs ~11% in 2025)','Relative P/E vs the S&P 500 one standard deviation below the 10-year average; in line with the average premium vs MSCI Asia ex-Japan','Active EM fund positioning in Indian equities near the 0–1st percentile'],
    watch:['The current earnings downgrade cycle has run 14 months, versus a 9–10 month historical average since 2000','Return expectations are for low-to-mid teens, not a re-rating boom'],
    how:['Use the current entry point to build a long-term allocation','India makes up close to 3% of a globally diversified equity portfolio'],
    viz:'implIn',
    full:['We re-iterate our positive outlook on Indian equities with a December 2026 MSCI India outlook of 3,350-3,450, implying an expected low-mid teens total return from current levels. We expect the tailwinds for the economy to translate into tailwinds for earnings recovery (India’s earnings growth is strongly correlated to GDP growth historically). The current earnings downgrade cycle has been extended at 14 months vs 9-10 month historical average (since 2000). In addition to earnings estimates that seem to have stopped drifting lower, the September earnings season also witnessed earnings growth accelerating to 13% YoY, 4% better than expectations at the start of the reporting period. This bodes well for upside to earnings estimates in the coming quarters, and we expect earnings growth to re-accelerate at 13-14% p.a. (vs ~11% in 2025) in both 2026 and 2027.','Valuations are also reasonable with the relative price-to-earnings ratio (P/E) for MSCI India vs the S&P 500 at one standard deviation below the 10-year average, and in-line with the 10-year average premium relative vs MSCI Asia ex. Japan. With positioning by active emerging markets funds near the 0-1st percentile in terms of Indian equity exposure, we find the risk/reward attractive. Investors can take this opportunity to build a long-term allocation to this market, which makes up close to 3% of a globally-diversified equity portfolio.']
  },
  {
    id:'fi', flag:'💵', name:'Asia fixed income', title:'Opportunities if you know where to look',
    stance:'Constructive IG · selective HY', tone:'brown', weight:null,
    lede:'Asia investment grade stays constructive on short duration, restrained supply and a 40%-plus sovereign weighting. High yield had another strong year, but tight valuations mean credit selection is paramount: BB with healthy leverage over low-quality single B.',
    supports:['Asia IG: all-in yields in the high 4% range with duration near 4.5 years, appealing for income and capital preservation','Over 40% of the Asia IG index is sovereign and quasi-sovereign, reinforcing credit quality; it trades at a lower spread than U.S. IG','Short duration profile and restrained net supply underpin stability','High yield default rates have trended lower since 2022'],
    watch:['China tech credit valuations remain elevated vs U.S. peers: stay patient for better entry points','Recent credit events in Hong Kong and China property continue to test confidence in high yield','Scarce new supply has pushed HY valuations to relatively tight levels versus history'],
    how:['IG relative value: subordinated capital issued by Japanese insurers and global banks in the region','HY quality: prefer BB companies with healthy leverage over low-quality single B names','HY themes: Indian high yield on its long-term growth trajectory; Macau gaming credits on improving profiles and successful 2025 refinancing'],
    viz:'implFi',
    full:['The outlook for Asia’s high grade fixed income market remains constructive in 2026, with stability underpinned by its short duration profile and restrained net supply. The Asia investment grade (IG) index has been trading at a lower spread than its U.S. counterpart, due to its over 40% allocation to sovereign and quasi-sovereign issuers, which reinforces its overall credit quality and resilience. With all-in yields hovering in the high 4% range and a duration near 4.5 years, Asia IG remains an appealing proposition for local investors seeking both income and capital preservation. From a relative value perspective, we maintain a preference for subordinated capital issued by Japanese insurers and global banks in the region, supported by solid fundamentals. While U.S. technology credits may face supply pressures in 2026 due to heavy AI-related capex, China’s tech sector is less exposed, as its investment is more measured and fundamentals could improve if “anti-involution” measures become more effective. However, since current valuations remain elevated compared to U.S. peers, we prefer to stay patient and wait for better entry points as market conditions evolve.','Turning to high yield, the sector has delivered another year of strong performance, yet disciplined credit selection remains paramount. While default rates have trended lower, recent credit events in Hong Kong and China’s property markets continue to test investor confidence and may have broader implications for the high yield space. The scarcity of new supply has driven valuations to relatively tight levels versus historical norms, and thus we find better value in BB companies with healthy leverage over low-quality single B names. We see opportunities in Indian high yield, underpinned by its long-term growth trajectory; and Macau gaming credits, which benefit from improving credit profile and successful refinancing activities in 2025.']
  }
];

/* chart data hooks: paste the series here when available and the schematic frames become real charts */
const SERIES = { indiaVsAsiaPacYoY: [], indiaRelPE: [], asiaHyDefaults: [] };

function schematic(title, sub, svg, source){
  return `<div class="schematic"><div class="vt">${title}</div><div class="small">${sub}</div>${svg}<div class="src">Source as cited in the outlook: ${source}</div><div class="need">Schematic. Underlying series not included in the text supplied; add it to SERIES in the script to render the actual chart.</div></div>`;
}
const IMPLVIZ = {
  implCn(){
    const pillars=[['AI & “super apps”','Digital efficiency and monetisation','Platforms using AI to lift engagement, efficiency and monetisation across their ecosystems.'],['NEV & autonomous driving','Reshaping mobility, expanding beyond China','New electric vehicles and autonomous driving, with leaders now scaling outside China.'],['Semiconductor localisation','Strengthening domestic supply chains','Domestic chip supply chains being built out amid technology export controls.']];
    return `<div class="viz anim">
      <div class="vt">China Tech Innovator Basket: three themes (tap to expand)</div>
      <div class="pillars">${pillars.map((p,i)=>`<button class="pillar pop" aria-expanded="false" style="animation-delay:${i*.1}s"><b>${p[0]}</b><span>${p[1]}</span><div class="more">${p[2]}</div></button>`).join('')}</div>
      <div class="vt" style="margin-top:6px">Why selection beats beta</div>
      <div class="board">
        <div class="row"><div class="ic up">${svgIcon.up}</div><div><div class="name">Valuation multiples</div><div class="desc">Drove most of the recent gains</div></div><div class="tag">Up</div></div>
        <div class="row"><div class="ic down">${svgIcon.down}</div><div><div class="name">Earnings revisions, 2025</div><div class="desc">Negative, so fundamentals have not yet caught up</div></div><div class="tag">Down</div></div>
      </div>
      <div class="vt" style="margin-top:6px">Beyond the basket</div>
      <div class="chips"><span>High-quality dividend names</span><span>Depressed-valuation consumer names</span><span class="soft">Broad index exposure</span></div>
    </div>`;
  },
  implJp(){
    return `<div class="viz anim">
      <div class="vt">December 2026 TOPIX outlook</div>
      <svg viewBox="0 0 360 80" role="img" aria-label="TOPIX outlook range 3,350 to 3,400 for December 2026, described as modest upside">
        <line x1="20" y1="44" x2="340" y2="44" class="grid"/>
        <rect class="s1 grow" x="230" y="36" width="60" height="16" rx="4"/>
        <text x="260" y="26" font-size="13" font-weight="700" text-anchor="middle">3,350–3,400</text>
        <text x="260" y="68" font-size="11" text-anchor="middle" class="t3">Dec 2026 outlook</text>
        <text x="20" y="32" font-size="11" class="t3">Current levels → modest upside</text>
      </svg>
      <div class="vs">Modest upside from current levels keeps the stance tactically neutral.</div>
      <div class="vt">Preferred sectors</div>
      <div class="chips"><span>Financials</span><span>Industrials</span><span>Consumer discretionary</span><span>Technology</span></div>
      <div class="vt" style="margin-top:6px">What is doing the supporting</div>
      <div class="board">
        <div class="row"><div class="ic up">${svgIcon.up}</div><div><div class="name">Fiscal programme</div><div class="desc">Social welfare plus technology and defence investment</div></div><div class="tag">Support</div></div>
        <div class="row"><div class="ic up">${svgIcon.up}</div><div><div class="name">Dovish BoJ → higher USD/JPY for longer</div><div class="desc">Supportive for exporter earnings</div></div><div class="tag">Support</div></div>
        <div class="row"><div class="ic flat">${svgIcon.flat}</div><div><div class="name">Already priced in</div><div class="desc">Wait for meaningful pullbacks to build toward ~5%</div></div><div class="tag">Neutral</div></div>
      </div>
    </div>`;
  },
  implIn(){
    const bar=(x,v,lab,op=1,delay=0)=>`<rect class="s1 growy" x="${x}" y="${100-v*5}" width="24" height="${v*5}" rx="4" opacity="${op}" style="animation-delay:${delay}s"/><text x="${x+12}" y="${100-v*5-6}" font-size="12" font-weight="700" text-anchor="middle">${lab}</text>`;
    const relPE = schematic('Relative to the S&P 500, India is still trading at a discount to averages','Relative P/E to the S&P 500, x',
      `<svg viewBox="0 0 360 120" role="img" aria-label="Schematic: current relative P/E sits one standard deviation below the 10-year average">
        <line x1="40" y1="40" x2="340" y2="40" class="grid"/><text x="36" y="44" font-size="10" text-anchor="end" class="t3">10y avg</text>
        <line x1="40" y1="76" x2="340" y2="76" stroke="var(--line-2)" stroke-dasharray="4 4"/><text x="36" y="80" font-size="10" text-anchor="end" class="t3">−1 SD</text>
        <circle cx="330" cy="76" r="6" class="acc"/><text x="318" y="100" font-size="11" text-anchor="end" class="t2">Now: one standard deviation below the 10-year average</text>
      </svg>`,'J.P. Morgan Private Bank, Bloomberg Finance L.P. Data as of November 2025.');
    const vsAp = schematic('MSCI India rarely underperforms MSCI Asia Pacific by more than 20%','Year-on-year price growth, relative, %',
      `<svg viewBox="0 0 360 110" role="img" aria-label="Schematic: relative year-on-year performance with a floor near minus 20 percent that is rarely breached">
        <line x1="40" y1="40" x2="340" y2="40" class="grid"/><text x="36" y="44" font-size="10" text-anchor="end" class="t3">0%</text>
        <rect x="40" y="80" width="300" height="20" class="acc" opacity=".12"/>
        <line x1="40" y1="80" x2="340" y2="80" stroke="var(--accent)" stroke-dasharray="4 4"/><text x="36" y="84" font-size="10" text-anchor="end" class="t3">−20%</text>
        <text x="190" y="95" font-size="11" text-anchor="middle" class="t2">Rarely breached</text>
      </svg>`,'J.P. Morgan Private Bank, Bloomberg Finance L.P. Data as of November 2025.');
    return `<div class="viz anim">
      <div class="vt">Earnings growth, % p.a.</div>
      <svg viewBox="0 0 360 120" role="img" aria-label="Earnings growth about 11 percent in 2025, 13 to 14 percent in 2026 and 2027">
        <line x1="20" y1="100" x2="340" y2="100" class="grid"/>
        ${bar(60,11,'~11%',.5)}${bar(168,13.5,'13–14%',1,.15)}${bar(276,13.5,'13–14%',1,.3)}
        <text x="72" y="116" font-size="11" text-anchor="middle" class="t3">2025</text><text x="180" y="116" font-size="11" text-anchor="middle" class="t3">2026E</text><text x="288" y="116" font-size="11" text-anchor="middle" class="t3">2027E</text>
      </svg>
      <div class="twocol">
        <div>
          <div class="vt">Downgrade cycle length, months</div>
          <svg viewBox="0 0 240 84" role="img" aria-label="Current downgrade cycle 14 months versus 9 to 10 month historical average">
            <text x="0" y="17" font-size="11" class="t2">Current</text><rect class="s1 grow" x="92" y="6" width="${14*7}" height="14" rx="4"/><text x="${92+14*7+6}" y="17" font-size="12" font-weight="700">14</text>
            <text x="0" y="47" font-size="11" class="t2">Avg since 2000</text><rect class="s1 grow" x="92" y="36" width="${9.5*7}" height="14" rx="4" opacity=".45"/><text x="${92+9.5*7+6}" y="47" font-size="12" font-weight="700">9–10</text>
            <text x="0" y="76" font-size="10" class="t3">Extended, but estimates have stopped falling</text>
          </svg>
        </div>
        <div>
          <div class="vt">September quarter earnings, % YoY</div>
          <svg viewBox="0 0 240 84" role="img" aria-label="September earnings grew 13 percent year on year versus 9 percent expected">
            <text x="0" y="17" font-size="11" class="t2">Reported</text><rect class="s1 grow" x="92" y="6" width="${13*7}" height="14" rx="4"/><text x="${92+13*7+6}" y="17" font-size="12" font-weight="700">13%</text>
            <text x="0" y="47" font-size="11" class="t2">Expected</text><rect class="s1 grow" x="92" y="36" width="${9*7}" height="14" rx="4" opacity=".45"/><text x="${92+9*7+6}" y="47" font-size="12" font-weight="700">9%</text>
            <text x="0" y="76" font-size="10" class="t3">4 points above the start-of-season estimate</text>
          </svg>
        </div>
      </div>
      <div class="vt">Active EM fund positioning in Indian equities</div>
      <div class="meter"><div class="bar"><i style="width:1%"></i><b style="left:1%"></b></div><div class="ticks"><span>0th percentile</span><span>50th</span><span>100th</span></div><div class="small">Near the 0–1st percentile: almost nobody is positioned for it.</div></div>
      ${relPE}${vsAp}
    </div>`;
  },
  implFi(){
    const r=44,c=2*Math.PI*r;
    const hy = schematic('Asia high yield default rates have trended lower since 2022','Asia High Yield Default Rates, %',
      `<svg viewBox="0 0 360 100" role="img" aria-label="Schematic: default rates declining from 2022 to 2025">
        <line x1="40" y1="80" x2="340" y2="80" class="grid"/>
        <path d="M60 22 L150 46 L240 60 L330 70" fill="none" class="s1l" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        ${[[60,22,'2022'],[150,46,'2023'],[240,60,'2024'],[330,70,'2025']].map(p=>`<circle cx="${p[0]}" cy="${p[1]}" r="5" class="s1"/><circle cx="${p[0]}" cy="${p[1]}" r="2" class="surf"/><text x="${p[0]}" y="96" font-size="11" text-anchor="middle" class="t3">${p[2]}</text>`).join('')}
      </svg>`,'J.P. Morgan Private Bank. As of December 2025.');
    return `<div class="viz anim">
      <div class="vt">Asia investment grade at a glance</div>
      <div class="preview"><div class="stats">
        <div class="stat"><b>High 4%</b><span>All-in yields</span></div>
        <div class="stat"><b>~4.5 yrs</b><span>Duration</span></div>
        <div class="stat"><b>Lower</b><span>Spread vs U.S. IG</span></div>
      </div></div>
      <div style="display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:center">
        <svg viewBox="0 0 120 120" style="max-width:120px" role="img" aria-label="Donut: over 40 percent of the Asia IG index is sovereign and quasi-sovereign">
          <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--track)" stroke-width="14"/>
          <circle cx="60" cy="60" r="${r}" fill="none" stroke="var(--series-1)" stroke-width="14" stroke-dasharray="${c*.42} ${c}" transform="rotate(-90 60 60)"/>
          <text x="60" y="58" font-size="18" font-weight="700" text-anchor="middle">40%+</text><text x="60" y="74" font-size="9" text-anchor="middle" class="t3">sov. &amp; quasi-sov.</text>
        </svg>
        <div class="small">Over 40% of the Asia IG index is sovereign and quasi-sovereign issuers, which reinforces credit quality and is why it trades at a lower spread than U.S. IG.</div>
      </div>
      <div class="vt">High yield: where the value sits</div>
      <div class="board">
        <div class="row"><div class="ic up">${svgIcon.up}</div><div><div class="name">BB with healthy leverage</div><div class="desc">Better value at today’s tight valuations</div></div><div class="tag">Prefer</div></div>
        <div class="row"><div class="ic down">${svgIcon.down}</div><div><div class="name">Low-quality single B</div><div class="desc">Not compensated after the rally</div></div><div class="tag">Avoid</div></div>
        <div class="row"><div class="ic up">${svgIcon.up}</div><div><div class="name">Indian HY · Macau gaming</div><div class="desc">Long-term growth; improving profiles and 2025 refinancing</div></div><div class="tag">Themes</div></div>
      </div>
      ${hy}
    </div>`;
  }
};


/* ===================== RENDER ===================== */
const ICON_ARROW='<svg viewBox="0 0 24 24" style="width:16px;height:16px;stroke:currentColor;fill:none;stroke-width:2.2;stroke-linecap:round;stroke-linejoin:round"><path d="M5 12h14M13 6l6 6-6 6"/></svg>';
const state={show:new Set([...ORDER,'ideas']),answers:{},right:0,total:0};
let root;
const $=(s,el=root)=>el.querySelector(s);
const $$=(s,el=root)=>Array.from(el.querySelectorAll(s));
function toast(msg){const t=$('.toast');t.textContent=msg;t.classList.add('show');setTimeout(()=>t.classList.remove('show'),1800);}

function pollHTML(key,p){
  const ans=state.answers[key];
  return `<div class="poll ${ans!==undefined?'answered':''}" data-key="${key}">
    <div class="ptag">Test yourself</div>
    <div class="pq">${p.q}</div>
    <div class="opts">${p.opts.map((o,i)=>`<button class="opt ${ans!==undefined&&i===p.house?'house':''} ${ans===i?'picked':''}" data-i="${i}"><span class="k">${'ABC'[i]}</span>${o}</button>`).join('')}</div>
    <div class="verdict"><b>${ans===p.house?'You matched the house view.':'Different call.'}</b> ${p.verdict}</div>
  </div>`;
}
function questionHTML(ch,s,i){
  const key=`${ch.id}:${i}`;
  return `<div class="q" id="${ch.id}-q${i+1}">
    <div class="q-head"><div class="eyebrow">${ch.name} · Question ${i+1} of ${ch.steps.length}</div><h3>${s.q}</h3></div>
    <div class="grid">
      <div style="display:grid;gap:18px">
        <div class="copy">${s.copy.map(p=>`<p>${p}</p>`).join('')}</div>
        <ol class="points">${s.points.map((p,k)=>`<li><span class="n">${k+1}</span><span>${p}</span></li>`).join('')}</ol>
        <div class="takeaway"><div class="lbl">Takeaway</div><div class="txt">${s.takeaway}</div></div>
      </div>
      <div class="side">${pollHTML(key,s.poll)}${VIZ[s.viz]()}</div>
    </div>
  </div>`;
}
function sectionHTML(ch){
  const ready=ch.status==='ready';
  let body='';
  if(ready) body=ch.steps.map((s,i)=>questionHTML(ch,s,i)).join('');
  else body=`<div class="q"><div class="grid"><div style="display:grid;gap:18px">
      <ol class="points">${ch.preview.points.map((p,k)=>`<li><span class="n">${k+1}</span><span>${p}</span></li>`).join('')}</ol>
      <p class="small">Full question-by-question chapter with polls and infographics to follow in the same format as the China chapter.</p>
    </div><div class="side"><div class="viz"><div class="vt">${ch.name} in numbers</div><div class="stats">${ch.preview.stats.map(s=>`<div class="stat"><b>${s[0]}</b><span>${s[1]}</span></div>`).join('')}</div></div></div></div></div>`;
  return `<section class="section" id="${ch.id}" data-market="${ch.id}">
    <div class="sec-head">
      <div class="title"><span class="flag">${ch.flag}</span><h2>${ch.name}</h2><span class="pill ${ready?'brown':''}">${ready?(ch.steps.length+' questions'):'Preview'}</span></div>
      <p class="muted" style="font-size:17px;max-width:62ch">${ch.one}</p>
      <div class="copy">${ch.intro.map(p=>`<p>${p}</p>`).join('')}</div>
    </div>
    ${body}
  </section>`;
}
function ideaHTML(i){
  return `<div class="idea" id="idea-${i.id}">
    <div class="idea-head"><div class="eyebrow">${i.flag} ${i.name}</div><h3>${i.title}</h3><span class="stance ${i.tone}">${i.stance}</span></div>
    <div class="lead">
      <div class="takeaway"><div class="lbl">The call</div><div class="txt">${i.lede}</div></div>
      <div class="copy">${i.full.map(p=>`<p>${p}</p>`).join('')}</div>
    </div>
    <div class="q" style="padding:20px 0 0;border:0">
      <div class="grid">
        ${IMPLVIZ[i.viz]()}
        <div class="boxes">
          <div class="box"><h4>What supports it</h4><ul>${i.supports.map(x=>`<li>${x}</li>`).join('')}</ul></div>
          <div class="box watch"><h4>What to watch</h4><ul>${i.watch.map(x=>`<li>${x}</li>`).join('')}</ul></div>
          <div class="box"><h4>How to implement</h4><ul>${i.how.map(x=>`<li>${x}</li>`).join('')}</ul></div>
        </div>
      </div>
    </div>
  </div>`;
}
function ideasHTML(){
  const w=IMPL.filter(i=>i.weight);const col=k=>k===1?'var(--ao-ink)':k===2?'var(--ao-series-1-soft)':'var(--ao-series-1)';
  return `<section class="section" id="ideas" data-market="ideas">
    <div class="sec-head">
      <div class="title"><span class="flag">🧭</span><h2>Cross-asset implementation ideas</h2><span class="pill brown">4 ideas</span></div>
      <p class="muted" style="font-size:17px;max-width:62ch">How the views translate into positioning across Chinese, Japanese and Indian equities, and Asia fixed income.</p>
    </div>
    <div class="alloc"><div class="vt">Where these markets sit in a globally diversified equity portfolio</div>
      <div class="stack">${w.map((i,k)=>`<i style="width:${i.weight}%;background:${col(k)}" title="${i.name} ~${i.weight}%"></i>`).join('')}<i style="width:${100-w.reduce((a,i)=>a+i.weight,0)}%;background:var(--ao-track)"></i></div>
      <div class="legend">${w.map((i,k)=>`<span><i style="background:${col(k)}"></i>${i.name} ~${i.weight}%</span>`).join('')}<span><i style="background:var(--ao-track)"></i>Rest of world</span></div></div>
    <div class="chips-row" style="padding:6px 0 10px">${IMPL.map(i=>`<a class="chip" href="#idea-${i.id}">${i.flag} ${i.name}</a>`).join('')}</div>
    ${IMPL.map(ideaHTML).join('')}
  </section>`;
}
function scoreHTML(){
  const explored=[];ORDER.filter(id=>state.show.has(id)).forEach(id=>{const c=CONTENT[id];if(c.status==='ready')c.steps.forEach(s=>explored.push(`${c.name}: ${s.takeaway}`));else explored.push(`${c.name}: ${c.one}`);});
  return `<div class="score"><div class="wrap"><div class="card">
    <div class="eyebrow">Your scorecard</div>
    <h2>${state.total?`You matched the house view on ${state.right} of ${state.total} calls`:'Answer the “test yourself” questions as you read'}</h2>
    <p class="muted">The takeaways from the sections you chose, in one place.</p>
    <ol class="points" style="margin-top:8px">${explored.map((t,k)=>`<li><span class="n">${k+1}</span><span>${t}</span></li>`).join('')}</ol>
    <div style="display:flex;gap:10px;flex-wrap:wrap;margin-top:10px"><button class="btn ghost" id="copyBtn">Copy takeaways</button><a class="btn" href="#top">Back to top ${ICON_ARROW}</a></div>
  </div></div></div>`;
}

function render(){
  root.innerHTML=`
  <div id="top"></div>
  <div class="mast"><div class="wrap">
    <div class="eyebrow">2026 Asia Outlook · Interactive edition</div>
    <h1>Asia in 2026: the questions that matter, market by market</h1>
    <p class="lede">The outlook is written as a set of questions, country by country. This edition keeps that shape and adds a way to test your own view before you read ours, with an infographic for every answer.</p>
    <div class="meta"><span>Based on ${SOURCE.name} (${SOURCE.date})</span><span>About 12 minutes, or 2 per market</span></div>
    <div class="tiles">
      <div class="tile"><div class="label">Share of global AI capex that flows to Taiwan + Korea</div><div class="value">~30<small>%</small></div><div class="bar"><i data-w="30"></i></div><div class="sub">The region’s biggest tailwind going into 2026</div></div>
      <div class="tile"><div class="label">Asia ex-Japan earnings growth, 2026 forecast</div><div class="value">12–13<small>%</small></div><div class="bar"><i data-w="13"></i></div><div class="sub">Then 10–11% in 2027</div></div>
      <div class="tile"><div class="label">China real GDP growth, 2026 forecast</div><div class="value">4.3<small>%</small></div><div class="bar"><i data-w="43"></i></div><div class="sub">Range 4.1–4.6%, moderating from 2025</div></div>
      <div class="tile"><div class="label">India GDP growth, 2026 forecast</div><div class="value">7.5<small>%</small></div><div class="bar"><i data-w="75"></i></div><div class="sub">Top implementation idea outside the U.S.</div></div>
    </div>
    <p class="small">Bars are drawn to a common 0–100% scale for comparison only.</p>
  </div></div>

  <div class="wrap filter">
    <div class="eyebrow">Choose what to explore</div>
    <div class="chips-row" style="margin-top:8px;flex-wrap:wrap" id="filters">
      ${ORDER.map(id=>`<button class="chip" aria-pressed="true" data-m="${id}">${CONTENT[id].flag} ${CONTENT[id].name}${CONTENT[id].status==='preview'?' <span style="opacity:.6;font-weight:500">· preview</span>':''}</button>`).join('')}
      <button class="chip" aria-pressed="true" data-m="ideas">🧭 Implementation ideas</button>
      <button class="chip soft" id="toggleAll">Only the ready chapters</button>
    </div>
    <div class="hint">Tap to show or hide a market. Preview chapters show the headline view and figures only.</div>
  </div>

  <div class="navbar"><div class="wrap"><span class="lbl">Jump to</span><div class="chips-row" id="jump">
    ${ORDER.map(id=>`<a class="chip" href="#${id}" data-m="${id}">${CONTENT[id].flag} ${CONTENT[id].name}</a>`).join('')}<a class="chip" href="#ideas" data-m="ideas">🧭 Ideas</a>
  </div></div></div>

  <div class="wrap" id="sections">${ORDER.map(id=>sectionHTML(CONTENT[id])).join('')}${ideasHTML()}<div class="empty" hidden id="empty">Nothing selected. Tap a market above to show it.</div></div>
  <div id="scoreHost">${scoreHTML()}</div>
  <div class="wrap foot">
    <p><strong>Source.</strong> All views, forecasts and figures are from ${SOURCE.name}, ${SOURCE.date}. Read the original at <a href="${SOURCE.url}" target="_blank" rel="noopener">privatebank.jpmorgan.com</a>.</p>
    <p>Forecasts reflect the authors’ views at the time of publication and may have changed since. Interactive edition for educational purposes; not investment advice.</p>
  </div>
  <div class="toast"></div>`;
  wire();applyFilter();
  requestAnimationFrame(()=>$$('.tile .bar i').forEach(i=>i.style.width=i.dataset.w+'%'));
}
function wire(){
  $$('.poll').forEach(p=>{
    if(p.classList.contains('answered'))return;
    const key=p.dataset.key;const [cid,si]=key.split(':');const s=CONTENT[cid].steps[+si];
    p.querySelectorAll('.opt').forEach(b=>b.onclick=()=>{
      if(state.answers[key]!==undefined)return;
      const i=+b.dataset.i;state.answers[key]=i;state.total++;if(i===s.poll.house)state.right++;
      p.outerHTML=pollHTML(key,s.poll);$('#scoreHost').innerHTML=scoreHTML();wireScore();
    });
  });
  $$('#filters .chip[data-m]').forEach(b=>b.onclick=()=>{const m=b.dataset.m;state.show.has(m)?state.show.delete(m):state.show.add(m);applyFilter();});
  $('#toggleAll').onclick=()=>{
    const onlyReady=$('#toggleAll').textContent.startsWith('Only');
    state.show=new Set(onlyReady?[...ORDER.filter(id=>CONTENT[id].status==='ready'),'ideas']:[...ORDER,'ideas']);
    $('#toggleAll').textContent=onlyReady?'Show everything':'Only the ready chapters';applyFilter();
  };
  $$('.pillar').forEach(b=>b.onclick=()=>b.setAttribute('aria-expanded',b.getAttribute('aria-expanded')!=='true'));
  wireScore();
  // highlight current section in the jump bar
  if('IntersectionObserver' in window){
    const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){$$('#jump .chip').forEach(c=>c.setAttribute('aria-current',c.dataset.m===e.target.dataset.market));}});},{rootMargin:'-20% 0px -70% 0px'});
    $$('.section').forEach(s=>io.observe(s));
  }
}
function wireScore(){
  const b=$('#copyBtn');if(!b)return;
  b.onclick=()=>{const txt=$$('#scoreHost .points li span:last-child').map(e=>e.textContent).join('\n')+`\n\nSource: ${SOURCE.name}, ${SOURCE.date}`;(navigator.clipboard?navigator.clipboard.writeText(txt):Promise.reject()).then(()=>toast('Copied'),()=>toast('Copy not available'));};
}
function applyFilter(){
  $$('#filters .chip[data-m]').forEach(b=>b.setAttribute('aria-pressed',state.show.has(b.dataset.m)));
  $$('.section').forEach(s=>s.hidden=!state.show.has(s.dataset.market));
  $$('#jump .chip').forEach(c=>c.style.display=state.show.has(c.dataset.m)?'':'none');
  $('#empty').hidden=state.show.size>0;
  $('#scoreHost').innerHTML=scoreHTML();wireScore();
}

/* ===================== BOOT ===================== */
function init(container){
  root=typeof container==='string'?document.querySelector(container):container;
  if(!root){console.warn('AsiaOutlook: container not found');return;}
  root.classList.add('ao');
  const qp=new URLSearchParams(location.search);
  if(qp.get('market')&&CONTENT[qp.get('market')]){state.show=new Set([qp.get('market')]);}
  render();
  if(location.hash){const el=root.querySelector(location.hash);if(el)setTimeout(()=>el.scrollIntoView({block:'start'}),50);}
}
window.AsiaOutlook={init,CONTENT,IMPL,SERIES};
if(document.currentScript&&document.currentScript.dataset.target){
  const sel=document.currentScript.dataset.target;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init(sel));else init(sel);
}
})();
