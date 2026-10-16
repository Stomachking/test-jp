/* Tailored Strategies case studies — embeddable component.
   Usage: <link rel="stylesheet" href="case-studies.css">
          <div id="case-studies"></div>
          <script src="case-studies.js" data-target="#case-studies"></script>
   Or call window.CaseStudies.init("#case-studies") yourself.
   All copy lives in CONTENT below. The scenarios are illustrative composites, not real clients. */
(function(){
"use strict";

/* ===================== CONTENT ===================== */
const SITUATIONS = [
  {id:'launch',   name:'Launching or spinning out a fund'},
  {id:'carry',    name:'Carried interest & fund equity'},
  {id:'conc',     name:'Concentrated position'},
  {id:'liquidity',name:'Liquidity event'},
  {id:'cash',     name:'Operating cash & treasury'},
  {id:'xborder',  name:'Family across borders'},
  {id:'succession',name:'Succession & next generation'},
  {id:'access',   name:'Access to private markets'}
];

const PILLARS = [
  {id:'banking',  name:'Banking',  sub:'Onboarding, cash, treasury',
   icon:'<svg viewBox="0 0 24 24"><path d="M3 10h18M5 10v8M9 10v8M15 10v8M19 10v8M3 18h18M12 3l9 6H3z"/></svg>'},
  {id:'lending',  name:'Lending',  sub:'Liquidity without selling',
   icon:'<svg viewBox="0 0 24 24"><path d="M4 17l5-5 4 4 7-8M15 8h5v5"/></svg>'},
  {id:'investing',name:'Investing',sub:'Portfolio around the business',
   icon:'<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 3v9l6 4"/></svg>'},
  {id:'planning', name:'Planning', sub:'Structure, family, legacy',
   icon:'<svg viewBox="0 0 24 24"><path d="M12 3v6M12 9l-6 4M12 9l6 4M6 13v6M18 13v6"/></svg>'}
];

/* Wealth shape keys shown in the before/after bars */
const SHAPE_KEYS = ['Firm & fund interests','Concentrated holdings','Diversified portfolio','Cash & liquidity'];

const CONTENT = [
  {
    id:'pe', initials:'PE', role:'Private equity partner', where:'Hong Kong · three fund vintages',
    headline:'Turning carry on paper into a balance sheet that works',
    one:'A partner with most of their wealth in unrealised carried interest and fund equity, uneven cash flows and a family split between Hong Kong and Singapore.',
    tags:['carry','cash','xborder','succession'],
    facts:[['Wealth shape','~70% in firm equity and carry'],['Cash flow','Capital calls vs. lumpy distributions'],['Family','Two children, Hong Kong and Singapore'],['Horizon','Exits expected over 4–7 years']],
    shape:{before:[70,0,18,12],after:[48,0,38,14]},
    delta:'Firm and fund exposure fell from <b>70% to 48%</b> without selling a single fund interest early.',
    situation:'The partner’s wealth looked large on paper but behaved like an illiquid private asset: capital calls arrived on the fund’s schedule, distributions came in bursts, and personal spending, school fees in two cities and a planned property purchase all needed cash that was not reliably there. Three vintages of carry made the picture more complex, not simpler.',
    priorities:['Meet every capital call without being a forced seller.','Build a portfolio that does not simply replicate private-equity risk.','Put the carry into a structure the next generation can inherit cleanly.'],
    strategies:{
      banking:[{name:'Multi-currency cash hub',why:'Hong Kong and Singapore outgoings in two currencies, with distributions arriving in U.S. dollars.',unlock:'One view of household cash, automated sweeps into a short-duration ladder.'}],
      lending:[{name:'Capital-call facility secured on fund interests',why:'Calls landed between distributions; selling listed holdings each time would have broken the long-term portfolio.',unlock:'Calls met on the fund’s timetable; repaid from the next distribution.'},
               {name:'Securities-based line for the property purchase',why:'A one-off need that would otherwise have forced a sale at a poor moment.',unlock:'Purchase completed; line repaid over eighteen months.'}],
      investing:[{name:'Core portfolio built around the carry',why:'The partner already carried buyout risk at work, so the public portfolio tilts to quality equities, duration and income rather than more private equity.',unlock:'Diversified sleeve grew from 18% to 38% of net worth.'},
                 {name:'Private credit as a complement',why:'Income to smooth the gap between distributions, with lower correlation to the fund’s own exits.',unlock:'Predictable quarterly income covering fixed outgoings.'}],
      planning:[{name:'Trust structure for carry across vintages',why:'Carry is most valuable to transfer before it is realised; three vintages meant three different timings.',unlock:'Future carry held for the children with governance the partner set.'},
                {name:'Cross-border family planning',why:'Two residencies, two sets of rules, one family.',unlock:'A single plan the advisers in both cities work from.'}]
    },
    outcomes:[['70→48%','firm & fund share of net worth'],['0','forced sales to meet calls'],['3','vintages of carry structured']],
    quote:{txt:'The calls stopped being a monthly scramble. For the first time the carry felt like family wealth rather than a bet on my own fund.',by:'Composite client voice, illustrative'},
    fit:['carry','cash','xborder','succession']
  },
  {
    id:'hf', initials:'HF', role:'Hedge fund founder', where:'Singapore · spinning out, day one',
    headline:'Launching the firm without betting the household on it',
    one:'A portfolio manager leaving a large platform to launch their own fund, with firm capital, a GP commitment and eighteen months of personal liquidity all drawing on the same pool.',
    tags:['launch','cash','conc','liquidity'],
    facts:[['Wealth shape','Deferred compensation plus personal portfolio'],['Commitment','Meaningful GP stake in the new fund'],['Runway','Eighteen months before fees cover costs'],['Risk','Personal wealth highly correlated with the strategy']],
    shape:{before:[25,35,25,15],after:[42,8,32,18]},
    delta:'The founder’s own strategy became the main concentration, by design, while <b>legacy concentrated stock fell from 35% to 8%</b> to fund it.',
    situation:'The spin-out was the opportunity of a career, and everything about it pulled on personal liquidity: the management company needed working capital, investors expected a visible GP commitment, and deferred compensation from the old platform would not vest for two more years. The founder’s personal portfolio was heavy in the same names the new fund would trade.',
    priorities:['Open the management company and fund accounts quickly, with treasury that scales.','Fund the GP commitment without liquidating everything personal.','Make the personal portfolio a counterweight to the fund, not a copy of it.'],
    strategies:{
      banking:[{name:'Entity onboarding for the management company and GP',why:'Launch dates do not move; the accounts had to be live before the first subscription.',unlock:'Operating, payroll and fee accounts open ahead of launch.'},
               {name:'Operating treasury for the firm',why:'Working capital sitting idle during the runway period.',unlock:'Surplus swept into government money-market funds and a short ladder.'}],
      lending:[{name:'Securities-based line for the GP commitment',why:'A loan against the diversified personal portfolio rather than selling it in a hurry.',unlock:'Commitment met on day one; repaid as deferred compensation vested.'}],
      investing:[{name:'Personal portfolio rebuilt as a counterweight',why:'The founder now owned one large, deliberate concentration: their own fund. Everything else should look different.',unlock:'Low-overlap mandate with fixed income, real assets and non-overlapping equity.'},
                 {name:'Staged sale of legacy concentrated stock',why:'Three positions overlapped with the fund’s book and crowded the risk budget.',unlock:'Concentration reduced from 35% to 8% over six quarters.'}],
      planning:[{name:'Key-person and family protection',why:'The household’s income and wealth now depended on one person and one strategy.',unlock:'Protection sized to the runway and the GP stake.'}]
    },
    outcomes:[['Day 1','accounts live before first close'],['35→8%','legacy concentrated stock'],['6 qtrs','to complete the staged sale']],
    quote:{txt:'I wanted my investors to see conviction and my family to see prudence. Those two things turned out to be the same plan.',by:'Composite client voice, illustrative'},
    fit:['launch','cash','conc','liquidity']
  },
  {
    id:'ceo', initials:'AM', role:'Asset management CEO', where:'Tokyo · after the sale of the firm',
    headline:'A liquidity event, a lock-up and a family in three countries',
    one:'A chief executive who sold their firm to a listed acquirer for cash and shares, leaving a large, restricted position in a single stock and a family spread between Tokyo, London and New York.',
    tags:['liquidity','conc','xborder','succession'],
    facts:[['Wealth shape','Majority in acquirer stock under lock-up'],['Timing','Lock-up releases in four tranches over two years'],['Family','Three adult children in three countries'],['Intent','Philanthropy in Japan and a family foundation']],
    shape:{before:[0,72,16,12],after:[0,30,52,18]},
    delta:'Concentration in the acquirer fell from <b>72% to 30%</b> across the lock-up schedule, with the rest moved to a diversified core and philanthropy.',
    situation:'Selling the firm removed one concentration and created another. Most of the proceeds were shares under lock-up, so the CEO could not simply diversify, yet the position was large enough that every earnings call moved the family’s net worth. Three children in three tax jurisdictions and a long-held wish to fund education in Japan added planning decisions that could not wait for the lock-ups to end.',
    priorities:['Reduce single-stock risk inside the rules of the lock-up.','Fund life and philanthropy now, not in two years.','Settle how wealth passes to children in three countries before any shares are sold.'],
    strategies:{
      banking:[{name:'Consolidated custody and reporting',why:'Shares, cash from the sale and legacy accounts sat in four places.',unlock:'One statement across jurisdictions, one set of numbers for the family.'}],
      lending:[{name:'Lending against the restricted shares',why:'Liquidity was needed during the lock-up; selling was not possible.',unlock:'Living costs, a home and the first foundation grant funded without a sale.'}],
      investing:[{name:'Hedging the position through the lock-up',why:'A collar on the unrestricted portion capped the downside the family could not afford.',unlock:'Downside protected while keeping some upside through the release schedule.'},
                 {name:'Diversification programme by tranche',why:'Each lock-up release had a plan before it arrived, so decisions were not made on the day.',unlock:'Four tranches moved into a diversified core on schedule.'}],
      planning:[{name:'Multi-jurisdiction estate and gifting plan',why:'Rules in Japan, the U.K. and the U.S. interact; sequencing matters.',unlock:'Transfers timed to the share releases and each child’s residency.'},
                {name:'Family foundation for education in Japan',why:'A wish that had waited years because the firm always came first.',unlock:'Foundation funded with shares, grants starting in year one.'}]
    },
    outcomes:[['72→30%','single-stock exposure'],['4/4','lock-up releases executed to plan'],['Yr 1','first foundation grants made']],
    quote:{txt:'Selling the company was supposed to simplify things. It took a plan for all three countries to actually make that true.',by:'Composite client voice, illustrative'},
    fit:['liquidity','conc','xborder','succession']
  },
  {
    id:'fo', initials:'FO', role:'Second-generation principal', where:'Sydney · family office that runs a fund',
    headline:'Giving a family office the toolkit of an institution',
    one:'A second-generation principal who took over a family office with its own credit fund, wanting institutional access and reporting while bringing a third generation into decisions.',
    tags:['access','cash','succession','xborder'],
    facts:[['Wealth shape','Operating fund plus direct holdings'],['Gap','Alternatives access and manager due diligence'],['Family','Five next-generation members, two overseas'],['Governance','No investment committee until now']],
    shape:{before:[40,15,25,20],after:[36,10,44,10]},
    delta:'Idle cash fell from <b>20% to 10%</b> as the diversified and alternatives sleeve grew to 44%, run through a new investment committee.',
    situation:'The first generation had built the family office around what they knew best: credit. The second generation inherited an operating fund, a handful of direct holdings and more cash than anyone intended, with no common view across managers and no forum where the next generation could learn to decide. Co-investment opportunities were arriving faster than the office could evaluate them.',
    priorities:['Get institutional-quality access to private markets and the due diligence to use it.','Put cash to work and consolidate reporting across the fund and the family.','Build governance a third generation can grow into.'],
    strategies:{
      banking:[{name:'Fund banking for the credit vehicle',why:'The family’s fund needed the same subscription-line and treasury tooling as any sponsor.',unlock:'Capital calls bridged and operating cash managed in one place.'},
               {name:'Reporting across the office',why:'Managers, direct holdings and the fund each reported differently.',unlock:'One consolidated book the committee reviews quarterly.'}],
      lending:[{name:'Co-investment facility',why:'Good opportunities arrived on short deadlines; cash was committed elsewhere.',unlock:'Three co-investments completed without disturbing the core.'}],
      investing:[{name:'Alternatives access with manager due diligence',why:'Private equity, infrastructure and hedge fund exposure the office could not source alone.',unlock:'Alternatives sleeve built over two years from a vetted shortlist.'},
                 {name:'Cash put to work by tenor',why:'A fifth of the balance sheet was earning almost nothing.',unlock:'Idle cash halved; tiered by when the family needs it.'}],
      planning:[{name:'Investment committee and next-generation seats',why:'Decisions lived with one person; the family wanted a process.',unlock:'Charter, quarterly cycle and two rotating next-generation seats.'},
                {name:'Education programme for the third generation',why:'Five family members, two overseas, at different stages.',unlock:'Structured curriculum tied to committee attendance.'}]
    },
    outcomes:[['20→10%','idle cash'],['3','co-investments completed'],['2','next-generation committee seats']],
    quote:{txt:'My parents built the fund. What we needed was a way for my children to learn to run it with us, not after us.',by:'Composite client voice, illustrative'},
    fit:['access','cash','succession','xborder']
  }
];

/* ===================== ICONS (inline SVG, stroke-based) ===================== */
const I={
  launch:'<path d="M5 19l3-3M14 4c3 0 6 3 6 6l-8 8-6-6zM9 15l-3 5 5-3"/><circle cx="15" cy="9" r="1.5"/>',
  carry:'<path d="M12 3v18M7 7c0-2 2-3 5-3s5 1 5 3-2 3-5 3-5 1-5 3 2 3 5 3 5-1 5-3"/>',
  conc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="5"/><circle cx="12" cy="12" r="1.5"/>',
  liquidity:'<path d="M12 3s6 7 6 11a6 6 0 0 1-12 0c0-4 6-11 6-11z"/>',
  cash:'<rect x="3" y="7" width="18" height="12" rx="2"/><path d="M3 11h18M16 15h2"/>',
  xborder:'<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18"/>',
  succession:'<circle cx="12" cy="6" r="2.5"/><circle cx="6" cy="17" r="2.5"/><circle cx="18" cy="17" r="2.5"/><path d="M12 8.5V12M12 12l-6 2.5M12 12l6 2.5"/>',
  access:'<rect x="4" y="10" width="16" height="11" rx="2"/><path d="M8 10V7a4 4 0 0 1 8 0v3M12 14v3"/>',
  pe:'<rect x="3" y="7" width="18" height="13" rx="2"/><path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2M3 12h18"/>',
  hf:'<path d="M3 17l5-6 4 4 5-7 4 3M17 8h4v4"/>',
  ceo:'<path d="M4 21V5l8-3 8 3v16M9 9h2M13 9h2M9 13h2M13 13h2M10 21v-4h4v4"/>',
  fo:'<path d="M3 11l9-7 9 7M5 10v10h14V10M10 20v-5h4v5"/>',
  compass:'<circle cx="12" cy="12" r="9"/><path d="M15 9l-2 5-5 2 2-5z"/>',
  flag:'<path d="M5 21V4M5 4h12l-2 4 2 4H5"/>',
  layers:'<path d="M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.5l9 5 9-5"/>',
  spark:'<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2 2M16 16l2 2M6 18l2-2M16 8l2-2"/>',
  check:'<circle cx="9" cy="8" r="3.5"/><path d="M3 20c0-3 3-5 6-5s6 2 6 5M15 11l2 2 4-4"/>',
  quote:'<path d="M7 7h4v6H7zM13 7h4v6h-4zM7 13c0 3 2 4 4 4M13 13c0 3 2 4 4 4"/>',
  arrow:'<path d="M5 12h14M13 6l6 6-6 6"/>'
};
const icon=(k,cls='')=>`<svg class="ico ${cls}" viewBox="0 0 24 24" aria-hidden="true">${I[k]||''}</svg>`;
SITUATIONS.forEach(s=>{s.icon=s.id;});
CONTENT[0].persona='pe'; CONTENT[1].persona='hf'; CONTENT[2].persona='ceo'; CONTENT[3].persona='fo';

/* ===================== HELPERS ===================== */
const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
const $=(s,r=document)=>r.querySelector(s), $$=(s,r=document)=>Array.from(r.querySelectorAll(s));
const sitName=id=>(SITUATIONS.find(s=>s.id===id)||{}).name||id;
const CHEV='<svg viewBox="0 0 24 24"><path d="M6 9l6 6 6-6"/></svg>';
const TICK='<svg viewBox="0 0 24 24"><path d="M5 12l5 5L20 7"/></svg>';

/* ===================== MOTION ===================== */
const reduce=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
function observeReveal(scope){
  const els=$$('.reveal',scope);
  if(reduce||!('IntersectionObserver' in window)){els.forEach(e=>e.classList.add('in'));return;}
  const io=new IntersectionObserver(es=>{es.forEach(e=>{if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target);}});},{rootMargin:'0px 0px -8% 0px',threshold:.15});
  els.forEach(e=>io.observe(e));
}
function countUp(scope){
  if(reduce) return;
  $$('.count',scope).forEach(el=>{
    const txt=el.dataset.v; const m=txt.match(/^(\D*)(\d+)(.*)$/); if(!m) return;
    const target=+m[2]; const start=performance.now(); const dur=900;
    const tick=t=>{const k=Math.min(1,(t-start)/dur); const v=Math.round(target*(1-Math.pow(1-k,3))); el.textContent=m[1]+v+m[3]; if(k<1) requestAnimationFrame(tick);};
    requestAnimationFrame(tick);
  });
}

/* ===================== RENDER ===================== */
function render(root){
  const state={selected:new Set(), active:CONTENT[0].id};
  const hash=location.hash.replace('#cs-','');
  if(CONTENT.some(c=>c.id===hash)) state.active=hash;

  root.classList.add('cs','anim');
  root.innerHTML=`
  <div class="wrap">
    <header class="intro">
      <div class="intro-text">
        <div class="eyebrow">Case studies</div>
        <h2>Tailored strategies for financial leaders</h2>
        <p class="lede">Four pillars. Combined differently for every client. Pick the situation closest to yours.</p>
        <p class="note"><i></i><span>Illustrative composites, not actual clients. Not advice.</span></p>
      </div>
      <div class="orbit" aria-hidden="true">
        <div class="ring r1"></div><div class="ring r2"></div>
        <div class="core"><span>You</span></div>
        ${PILLARS.map((p,i)=>`<div class="sat s${i+1}"><span class="sat-ic">${p.icon}</span><b>${esc(p.name)}</b></div>`).join('')}
      </div>
    </header>

    <section class="matcher reveal" aria-labelledby="cs-match-h">
      <div class="head"><h3 id="cs-match-h">Which of these sound like you?</h3><div class="count" id="cs-count"></div></div>
      <div class="chips" id="cs-sit" role="group" aria-label="Situations">
        ${SITUATIONS.map(s=>`<button class="chip" type="button" aria-pressed="false" data-sit="${s.id}">${icon(s.icon)}${esc(s.name)}</button>`).join('')}
        <button class="chip reset" type="button" id="cs-reset" hidden>Clear</button>
      </div>
    </section>

    <div class="rail" id="cs-rail" role="tablist" aria-label="Case studies"></div>
    <section class="detail" id="cs-detail" role="tabpanel"></section>

    <section class="map reveal" aria-labelledby="cs-map-h">
      <div class="eyebrow">Strategy map</div>
      <h3 id="cs-map-h">Same pillars, different combinations</h3>
      <p class="sub">One column per client. Dots show how heavily each pillar was used. Hover for the strategies; select a cell to open the case.</p>
      <div class="matrix" id="cs-matrix"></div>
    </section>

    <footer class="foot">
      <div>Illustrative scenarios for a website component prototype. Not investment, legal or tax advice. Lending, investment and planning services are subject to eligibility, jurisdiction and credit approval.</div>
    </footer>
  </div>`;

  /* --- situation chips --- */
  $('#cs-sit',root).addEventListener('click',e=>{
    const b=e.target.closest('.chip'); if(!b) return;
    if(b.id==='cs-reset'){state.selected.clear();}
    else{const id=b.dataset.sit; state.selected.has(id)?state.selected.delete(id):state.selected.add(id);}
    $$('#cs-sit .chip[data-sit]',root).forEach(c=>c.setAttribute('aria-pressed',state.selected.has(c.dataset.sit)));
    $('#cs-reset',root).hidden=state.selected.size===0;
    // auto-open the best match when the user narrows
    if(state.selected.size){
      const best=CONTENT.map(c=>({c,n:c.tags.filter(t=>state.selected.has(t)).length})).sort((a,b)=>b.n-a.n)[0];
      if(best.n>0) state.active=best.c.id;
    }
    renderRail(); renderDetail(); renderMatrix();
  });

  /* --- rail --- */
  function matchCount(c){return c.tags.filter(t=>state.selected.has(t)).length;}
  function renderRail(){
    const rail=$('#cs-rail',root);
    const sel=state.selected.size;
    rail.innerHTML=CONTENT.map(c=>{
      const n=matchCount(c);
      return `<button class="case-card pop ${sel&&n===0?'dim':''}" type="button" role="tab" aria-selected="${c.id===state.active}" data-case="${c.id}" id="cs-tab-${c.id}">
        <div class="who"><span class="avatar">${icon(c.persona)}</span><div><div class="role">${esc(c.role)}</div><div class="where">${esc(c.where)}</div></div></div>
        <h3>${esc(c.headline)}</h3>
        <div class="tags">${c.tags.map(t=>`<span class="tag ${state.selected.has(t)?'hit':''}">${esc(sitName(t))}</span>`).join('')}</div>
        <div class="match">${sel?(n?`Matches ${n} of your ${sel}`:'No overlap'):''}</div>
      </button>`;}).join('');
    const matched=CONTENT.filter(c=>matchCount(c)>0).length;
    $('#cs-count',root).innerHTML=sel?`<b>${matched}</b> of ${CONTENT.length} case studies match`:`Select one or more to find the closest case`;
  }
  $('#cs-rail',root).addEventListener('click',e=>{
    const b=e.target.closest('.case-card'); if(!b) return;
    state.active=b.dataset.case; renderRail(); renderDetail(); renderMatrix();
    history.replaceState(null,'','#cs-'+state.active);
  });

  /* --- detail --- */
  function shapeBar(vals){return `<div class="stack">${vals.map((v,i)=>v?`<i class="k${i+1}" style="width:${v}%" title="${esc(SHAPE_KEYS[i])} ${v}%"></i>`:'').join('')}</div>`;}
  function renderDetail(){
    const c=CONTENT.find(x=>x.id===state.active);
    const d=$('#cs-detail',root);
    d.setAttribute('aria-labelledby','cs-tab-'+c.id);
    const weights=PILLARS.map(p=>(c.strategies[p.id]||[]).length); const wmax=Math.max(...weights,1);
    d.innerHTML=`
    <div class="detail-head">
      <div class="title"><span class="avatar big">${icon(c.persona)}</span><div><span class="pill">${esc(c.role)}</span> <span class="small">${esc(c.where)}</span><h3>${esc(c.headline)}</h3></div></div>
      <p class="one">${esc(c.one)}</p>
      <div class="weights" aria-label="How the four pillars were weighted">${PILLARS.map((p,i)=>`<div class="w"><span class="w-ic">${p.icon}</span><div class="w-bar"><i style="--w:${weights[i]/wmax*100}%"></i></div><b>${esc(p.name)}</b><span class="w-n">${weights[i]||'–'}</span></div>`).join('')}</div>
    </div>
    <div class="detail-body">
      <aside class="profile">
        <div class="pcard reveal">
          <div class="lbl">${icon('check','lbl-ic')}Client profile</div>
          <ul class="facts">${c.facts.map(f=>`<li><span>${esc(f[0])}</span><b>${esc(f[1])}</b></li>`).join('')}</ul>
        </div>
        <div class="pcard shape reveal">
          <div class="lbl">${icon('layers','lbl-ic')}Wealth shape</div>
          <div class="bars">
            <div class="row"><div class="cap"><b>Before</b><span>share of net worth</span></div>${shapeBar(c.shape.before)}</div>
            <div class="row"><div class="cap"><b>After</b><span>end of engagement</span></div>${shapeBar(c.shape.after)}</div>
          </div>
          <div class="legend">${SHAPE_KEYS.map((k,i)=>`<span><i class="k${i+1}"></i>${esc(k)}</span>`).join('')}</div>
          <div class="delta">${c.delta}</div>
        </div>
        <div class="pcard reveal">
          <div class="lbl">${icon('spark','lbl-ic')}Outcome</div>
          <div class="outcomes">${c.outcomes.map(o=>`<div class="outcome"><b class="count" data-v="${esc(o[0])}">${esc(o[0])}</b><span>${esc(o[1])}</span></div>`).join('')}</div>
        </div>
      </aside>
      <div class="journey">
        <div class="step reveal"><div class="n">${icon('compass')}</div><div class="body"><h4>The situation</h4>
          <p class="clamp" id="cs-sit-p">${esc(c.situation)}</p><button class="more" type="button" data-for="cs-sit-p">Read the full story ${icon('arrow')}</button></div></div>
        <div class="step reveal"><div class="n">${icon('flag')}</div><div class="body"><h4>What mattered most</h4><ul class="prior">${c.priorities.map((p,i)=>`<li><span class="pn">${i+1}</span>${esc(p)}</li>`).join('')}</ul></div></div>
        <div class="step reveal"><div class="n">${icon('layers')}</div><div class="body"><h4>The tailored strategy</h4><p class="hint">Open a strategy to see why it was chosen and what it unlocked.</p>
          <div class="stack-grid">${PILLARS.map((p,pi)=>{const list=c.strategies[p.id]||[];return `<div class="pillar ${list.length?'':'off'} reveal">
            <div class="ph"><span class="ic">${p.icon}</span><b>${esc(p.name)}</b><span class="dots">${[0,1,2].map(k=>`<i class="${k<list.length?'on':''}"></i>`).join('')}</span></div>
            ${list.length?list.map((s,i)=>`<button class="strat" type="button" aria-expanded="false"><span class="sname">${esc(s.name)}${CHEV}</span><div class="why"><div><b>Why for this client</b><br>${esc(s.why)}</div><div><b>What it unlocked</b><br>${esc(s.unlock)}</div></div></button>`).join(''):`<div class="none">Already in place</div>`}
          </div>`;}).join('')}</div></div></div>
        <div class="step reveal"><div class="n">${icon('quote')}</div><div class="body"><h4>How it played out</h4>
          <div class="quote"><div class="txt">“${esc(c.quote.txt)}”</div><div class="by">${esc(c.quote.by)}</div></div></div></div>
        <div class="step reveal"><div class="n">${icon('check')}</div><div class="body"><h4>Could this be you?</h4>
          <div class="fit"><div class="lbl">This case fits if</div>
            <ul>${c.fit.map(t=>`<li class="${state.selected.has(t)?'on':''}"><span class="tick">${TICK}</span>${icon(t)}${esc(sitName(t))}</li>`).join('')}</ul>
            <div class="cta"><a class="btn" href="#contact">Talk to the Financial Leaders Group ${icon('arrow')}</a><button class="btn ghost" type="button" id="cs-next">Next case ${icon('arrow')}</button></div>
          </div></div></div>
      </div>
    </div>`;
    d.classList.remove('swap'); void d.offsetWidth; d.classList.add('swap');
    observeReveal(d);
    countUp(d);
    // animate the "after" bars from the "before" widths
    const stacks=$$('.shape .row .stack',d);
    if(stacks[1]){ $$('i',stacks[1]).forEach(el=>{ const i=+el.className.slice(1)-1; const to=el.style.width; el.style.width=(c.shape.before[i]||0)+'%'; requestAnimationFrame(()=>requestAnimationFrame(()=>{el.style.width=to;})); }); }
    d.addEventListener('click',e=>{
      const s=e.target.closest('.strat'); if(s){s.setAttribute('aria-expanded',s.getAttribute('aria-expanded')!=='true'); return;}
      const m=e.target.closest('.more'); if(m){const p=$('#'+m.dataset.for,d); p.classList.toggle('clamp'); m.innerHTML=(p.classList.contains('clamp')?'Read the full story ':'Show less ')+icon('arrow'); return;}
      if(e.target.closest('#cs-next')){const i=CONTENT.findIndex(x=>x.id===state.active); state.active=CONTENT[(i+1)%CONTENT.length].id; renderRail(); renderDetail(); renderMatrix(); $('#cs-rail',root).scrollIntoView({behavior:'smooth',block:'start'});}
    });
  }

  /* --- matrix --- */
  function renderMatrix(){
    const m=$('#cs-matrix',root);
    m.innerHTML=`<table><thead><tr><th scope="col">Pillar</th>${CONTENT.map(c=>`<th scope="col"><span class="avatar sm">${icon(c.persona)}</span>${esc(c.role)}<br><span style="font-weight:400;text-transform:none;letter-spacing:0">${esc(c.where.split(' · ')[0])}</span></th>`).join('')}</tr></thead>
    <tbody>${PILLARS.map(p=>`<tr><th scope="row"><span class="ic sm">${p.icon}</span>${esc(p.name)}<span>${esc(p.sub)}</span></th>${CONTENT.map(c=>{const list=c.strategies[p.id]||[];return `<td class="${c.id===state.active?'cur':''}" data-case="${c.id}" tabindex="0" role="button" aria-label="Open ${esc(c.role)}"><div class="cell" title="${esc(list.map(s=>s.name).join(' · ')||'Already in place')}"><span class="dots">${[0,1,2].map(k=>`<i class="${k<list.length?'on':''}"></i>`).join('')}</span>${list.length?`<span>${esc(list[0].name)}${list.length>1?` <em>+${list.length-1}</em>`:''}</span>`:'<span class="no">Already in place</span>'}</div></td>`;}).join('')}</tr>`).join('')}</tbody></table>`;
    const open=t=>{const td=t.closest('td[data-case]'); if(!td) return; state.active=td.dataset.case; renderRail(); renderDetail(); renderMatrix(); $('#cs-detail',root).scrollIntoView({behavior:'smooth',block:'start'});};
    m.onclick=e=>open(e.target);
    m.onkeydown=e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open(e.target);}};
  }

  renderRail(); renderDetail(); renderMatrix();
  observeReveal(root);
}

function init(container){
  const root=typeof container==='string'?document.querySelector(container):container;
  if(!root) return console.warn('CaseStudies: container not found',container);
  render(root);
  return root;
}
window.CaseStudies={init,CONTENT,SITUATIONS,PILLARS};
const me=document.currentScript, sel=me&&me.dataset.target;
if(sel){ if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init(sel)); else init(sel); }
})();
