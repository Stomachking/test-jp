/* Financial Leaders Group — Strategy Map. Embeddable component.
   Usage: <link rel="stylesheet" href="flg-strategies.css">
          <div id="flg-strategies"></div>
          <script src="flg-strategies.js" data-target="#flg-strategies"></script>
   Or call window.FLGStrategies.init("#flg-strategies") yourself. */
(function(){
"use strict";

/* ===================== CONTENT =====================
   PILLARS use the service copy from the Financial Leaders Group page.
   CASES marked status:'published' summarise client experiences J.P. Morgan Private Bank has published
   (link in `source`). CASES marked status:'illustrative' are hypothetical and exist to show how a
   Financial Leaders Group case reads in this layout; replace them with approved client cases. */
const PAGE_URL='https://privatebank.jpmorgan.com/apac/en/who-we-serve/financial-leaders-group';

const PILLARS=[
  {id:'lending', name:'Banking and lending', short:'Banking & lending',
   one:'Liquidity shaped to the assets you already hold.',
   copy:'Our dedicated service model and expert lending specialists provide structured lending facilities customized for the private equity community, alongside securities-based lending and cash management.'},
  {id:'investing', name:'Investing and risk', short:'Investing & risk',
   one:'Portfolios built around a concentrated career.',
   copy:'Benefit from our disciplined asset allocation, manager due diligence and bespoke risk hedging strategies.'},
  {id:'equity', name:'Workplace equity', short:'Workplace equity',
   one:'Share plans and cap tables run by Global Shares.',
   copy:'Access comprehensive workplace solutions, including Global Shares for share plan and cap table administration, tailored for both public and private companies.'},
  {id:'transfer', name:'Wealth transfer and planning', short:'Wealth transfer',
   one:'Structures for the next transaction and the next generation.',
   copy:'We help with succession and estate plans and holding structures, including onshore and offshore trusts and companies, and provide guidance on substantial assets arising from an IPO, inheritance, cash-out from a business or other transaction.'}
];

const FIRM=['Private Bank','Investment Bank','Commercial Bank','Global Shares'];

const ROLES=[
  {id:'all', label:'Everyone'},
  {id:'pe', label:'Private equity'},
  {id:'hf', label:'Hedge funds & asset managers'},
  {id:'exec', label:'Senior executives'},
  {id:'founder', label:'Founders'}
];

const CASES=[
  {id:'liquidity', status:'published', roles:['founder','exec'], who:'Founder, private company',
   title:'Funding a new market without raising capital',
   one:'Company equity that could not be turned into cash, and an expansion that could not wait for a capital raise.',
   situation:'Jeanne founded a fast-growing private company. Most of her wealth sat in its equity, which is hard to turn into cash, and she wanted to expand into a new market segment without a time-consuming debt or equity raise.',
   need:'Cash on a short timeline, with her company equity and investment portfolio left intact.',
   pillars:['lending'],
   moves:[
     {pillar:'lending', text:'A securities-based line of credit, borrowing against the value of her investment portfolio instead of selling it. The line was in place in two to three days and she drew on it only as funds were required.'}
   ],
   outcome:'She funded entry into the new segment on her own schedule, repaid earlier than anticipated and in one case refinanced with traditional corporate debt once the business could carry it.',
   tailored:'The line was sized and timed to the expansion, so she borrowed only what each step needed.',
   fact:{value:'2 to 3 days', label:'from conversation to a usable line of credit'},
   firm:['Private Bank'],
   source:{label:'Case studies: Ready liquidity for life goals and investment opportunities', url:'https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/case-studies-ready-liquidity-for-life-goals-and-investment-opportunities'}
  },
  {id:'relocation', status:'published', roles:['exec'], who:'Senior executive, relocating',
   title:'Buying a home abroad without selling down',
   one:'A move to Switzerland and a house to buy, with a portfolio she did not want to unwind.',
   situation:'Anneliese relocated to Switzerland and wanted to buy a home there. Selling investments to fund the purchase would have unwound an allocation she had built carefully over years.',
   need:'Liquidity for the purchase, in a new country, with the portfolio left as it was.',
   pillars:['lending','investing'],
   moves:[
     {pillar:'lending', text:'A securities-based loan secured on her existing portfolio, so the purchase could proceed without selling holdings.'},
     {pillar:'investing', text:'The allocation stayed in place through the move, so the portfolio kept doing its job while the loan did the purchase.'}
   ],
   outcome:'She accessed the liquidity she needed without selling any investments or altering her balanced allocation.',
   tailored:'The loan was built around the portfolio she already had, rather than asking her to rebuild it for the purchase.',
   firm:['Private Bank'],
   source:{label:'Case studies: Ready liquidity for life goals and investment opportunities', url:'https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/case-studies-ready-liquidity-for-life-goals-and-investment-opportunities'}
  },
  {id:'concentrated', status:'published', roles:['exec','hf'], who:'Senior executive, listed company',
   title:'Reducing the risk of a concentrated stock position',
   one:'One company’s stock dominated the portfolio, so one company’s volatility did too.',
   situation:'A senior executive held a large part of their wealth in a single company stock. When one position dominates a portfolio, the whole portfolio is exposed to that company’s volatility. The published case study draws on close to 45 years of market history on single-company risk.',
   need:'A portfolio that could absorb a bad year for one company without a bad year for the family.',
   pillars:['investing'],
   moves:[
     {pillar:'investing', text:'A resilient portfolio built around the position: disciplined asset allocation to bring the stake to a deliberate weight, and bespoke hedging strategies to manage the risk while it is worked down.'}
   ],
   outcome:'A portfolio tailored to the executive’s situation and less exposed to the fortunes of one company.',
   tailored:'The approach starts from the position the client already holds, then decides how far and how fast to diversify.',
   fact:{value:'~45 yrs', label:'of market history behind the case for diversifying'},
   firm:['Private Bank'],
   source:{label:'Case studies on building a resilient portfolio for uncertain times', url:'https://privatebank.jpmorgan.com/apac/en/insights/markets-and-investing/case-studies-on-building-a-resilient-portfolio-for-uncertain-times'}
  },
  {id:'windfall', status:'published', roles:['founder','exec','pe'], who:'Client after a liquidity event',
   title:'Putting a large liquidity event to work',
   one:'A large inflow of cash arrived, and with it the question of what to do first.',
   situation:'Hao received a large inflow of funds from a liquidity event and was unsure how to allocate it.',
   need:'A plan for the cash before the moment to set it passes.',
   pillars:['investing','transfer'],
   moves:[
     {pillar:'investing', text:'A goals-based approach: separate the money by purpose and time horizon, then allocate each part using our disciplined asset allocation and manager due diligence.'},
     {pillar:'transfer', text:'Guidance on substantial assets arising from a transaction, including the holding structures that keep the next step simple.'}
   ],
   outcome:'The published client experience walks through how the team structured the conversation and the allocation that followed.',
   tailored:'The plan starts from what the money is for, and only then from where it should sit.',
   firm:['Private Bank'],
   source:{label:'Advising a client on a large liquidity event', url:'https://privatebank.jpmorgan.com/apac/en/services/banking/banking-client-experiences/advising-a-client-on-a-large-liquidity-event'}
  },
  {id:'gp', status:'illustrative', roles:['pe'], who:'Partner, private equity firm',
   title:'Meeting GP commitments while carry is unrealised',
   one:'Capital calls arrive on the fund’s timetable. The partner’s wealth pays out on a different one.',
   situation:'A partner at a private equity firm is asked to commit personal capital to each new fund. Her net worth is largely carried interest and fund stakes that will not pay out for years, and capital calls arrive on the fund’s schedule, not hers.',
   need:'Capital for each call without selling liquid holdings or missing a close.',
   pillars:['lending','transfer'],
   moves:[
     {pillar:'lending', text:'A structured lending facility customised for the private equity community, secured against fund interests and sized around the capital-call schedule.'},
     {pillar:'transfer', text:'Holding structures for carried interest and fund stakes, set up before the carry crystallises so later transfers are simpler.'}
   ],
   outcome:'Commitments met on time, liquid holdings untouched, and the structure in place before the first exit.',
   tailored:'The facility follows the fund’s drawdown profile, so borrowing rises and falls with the calls.',
   firm:['Private Bank','Commercial Bank'],
   source:null
  },
  {id:'shareplan', status:'illustrative', roles:['hf','founder'], who:'Founder, asset management firm',
   title:'Setting up an employee share plan before a listing',
   one:'Senior staff promised equity, a cap table in spreadsheets, and a listing on the horizon.',
   situation:'The founder of an asset management firm wants to give senior staff equity ahead of a possible listing. The cap table lives in spreadsheets, grants have been made inconsistently, and the firm’s own treasury sits in cash.',
   need:'One accurate record of ownership, a plan that survives the listing, and treasury put to work.',
   pillars:['equity','investing'],
   moves:[
     {pillar:'equity', text:'Global Shares takes over share plan and cap table administration, for the private company now and the public one later.'},
     {pillar:'investing', text:'Manager due diligence and asset allocation for the firm’s treasury, kept separate from the founder’s personal holdings.'}
   ],
   outcome:'One record of who owns what, a plan ready for the listing, and treasury cash allocated instead of idle.',
   tailored:'The plan is built for the company the firm will be after listing, not only the one it is today.',
   firm:['Private Bank','Global Shares','Investment Bank'],
   source:null
  }
];

/* ===================== STATE + HELPERS ===================== */
let root=null;
const state={role:'all', pillar:null, caseId:CASES[0].id};
const $=(s,el)=>(el||root).querySelector(s);
const $$=(s,el)=>Array.from((el||root).querySelectorAll(s));
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const byId=id=>CASES.find(c=>c.id===id);
const pillarById=id=>PILLARS.find(p=>p.id===id);
const reduced=()=>window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function visibleCases(){
  return CASES.filter(c=>(state.role==='all'||c.roles.includes(state.role))&&(!state.pillar||c.pillars.includes(state.pillar)));
}

/* ===================== RENDER ===================== */
function shellHTML(){
  return `
  <div class="wrap">
    <header class="head">
      <p class="eyebrow">Case studies</p>
      <h2>See the strategy behind each case</h2>
      <p class="lede">Pick a situation close to your own, or start from one of our four strategy areas. Each case shows what the client needed, how the strategy was tailored to them, and which parts of J.P. Morgan were involved.</p>
      <div class="filter" role="group" aria-label="Show situations for">
        <span class="lbl">Show situations for</span>
        ${ROLES.map(r=>`<button type="button" class="chip" data-role="${r.id}" aria-pressed="${state.role===r.id}">${esc(r.label)}</button>`).join('')}
      </div>
    </header>
    <div class="map">
      <aside class="cases" aria-label="Client situations">
        <div class="count" id="flgCount"></div>
        <div class="caselist" id="flgList" role="list"></div>
      </aside>
      <section class="detail">
        <div class="pillars" id="flgPillars" role="group" aria-label="Strategy areas">
          ${PILLARS.map(p=>`<button type="button" class="pillar" data-pillar="${p.id}" aria-pressed="false">
            <span class="nm">${esc(p.short)}<i aria-hidden="true"></i></span>
            <span class="one">${esc(p.one)}</span>
            <span class="state"></span>
          </button>`).join('')}
        </div>
        <svg class="links" id="flgLinks" aria-hidden="true" preserveAspectRatio="none"></svg>
        <div class="sitnode" id="flgSit"></div>
        <div id="flgDrawer" hidden></div>
        <article class="story" id="flgStory" aria-live="polite"></article>
      </section>
    </div>
    <footer class="foot">
      <p>Cases marked <b>Published</b> summarise client experiences published by J.P. Morgan Private Bank; names and details are as published, and each links to the original. Cases marked <b>Illustrative</b> are hypothetical, show how a Financial Leaders Group case reads in this format, and should be replaced with approved client cases before launch.</p>
      <p>Strategy area descriptions use the service copy from the <a href="${PAGE_URL}" target="_blank" rel="noopener">Financial Leaders Group page</a>. For information purposes only; nothing here is investment, legal or tax advice.</p>
    </footer>
  </div>`;
}

function listHTML(){
  const vis=visibleCases();
  if(!vis.length)return `<div class="empty">No cases match that combination yet. Clear the strategy area or choose another audience.</div>`;
  return vis.map(c=>`
    <button type="button" class="case" role="listitem" data-case="${c.id}" aria-current="${state.caseId===c.id}" id="case-${c.id}">
      <span class="top"><span class="who">${esc(c.who)}</span><span class="tag ${c.status==='published'?'pub':'illus'}">${c.status==='published'?'Published':'Illustrative'}</span></span>
      <span class="ttl">${esc(c.title)}</span>
      <span class="one">${esc(c.one)}</span>
      <span class="dots" aria-label="Strategy areas used: ${c.pillars.map(id=>pillarById(id).short).join(', ')}">${PILLARS.map(p=>`<i class="${c.pillars.includes(p.id)?'on':''}" title="${esc(p.short)}"></i>`).join('')}</span>
    </button>`).join('');
}

function storyHTML(c){
  const src=c.source;
  return `
    <div class="hd">
      <div class="meta">
        <span class="tag ${c.status==='published'?'pub':'illus'}">${c.status==='published'?'Published case study':'Illustrative scenario'}</span>
        <span class="small">${esc(c.who)}</span>
      </div>
      <h3>${esc(c.title)}</h3>
      <p class="need"><b>What mattered:</b> ${esc(c.need)}</p>
    </div>
    <div class="stages">
      <div class="stage">
        <span class="k">The situation</span>
        <p>${esc(c.situation)}</p>
      </div>
      <div class="stage mid">
        <span class="k">The tailored strategy</span>
        <div class="moves">
          ${c.moves.map(m=>`<div class="move"><span class="pl">${esc(pillarById(m.pillar).name)}</span><p>${esc(m.text)}</p></div>`).join('')}
        </div>
      </div>
      <div class="stage">
        <span class="k">The outcome</span>
        <p>${esc(c.outcome)}</p>
        ${c.fact?`<div class="fact"><span class="v">${esc(c.fact.value)}</span><span class="l">${esc(c.fact.label)}</span></div>`:''}
      </div>
    </div>
    <div class="quote"><span class="k">What made it tailored</span><p>${esc(c.tailored)}</p></div>
    <div class="firm"><span class="k">Across J.P. Morgan</span>${FIRM.map(u=>`<span class="unit ${c.firm.includes(u)?'on':''}">${esc(u)}</span>`).join('')}</div>
    <div class="cta">
      <div class="ctas">
        <a class="btn" href="${PAGE_URL}" target="_blank" rel="noopener">Talk to the Financial Leaders Group</a>
        ${src?`<a class="btn ghost" href="${esc(src.url)}" target="_blank" rel="noopener">Read the published case study</a>`:''}
      </div>
      ${src?`<span class="small">Source: ${esc(src.label)}</span>`:`<span class="small">Hypothetical scenario for layout review</span>`}
    </div>`;
}

function drawerHTML(p){
  const n=CASES.filter(c=>c.pillars.includes(p.id)).length;
  return `<div class="drawer">
    <div class="row"><p class="eyebrow">Strategy area</p><button type="button" class="linkbtn" id="flgClearPillar">Show all strategy areas</button></div>
    <h3>${esc(p.name)}</h3>
    <p>${esc(p.copy)}</p>
    <p class="small">Used in ${n} of ${CASES.length} cases. The list on the left now shows only those.</p>
  </div>`;
}

function renderList(){
  $('#flgList').innerHTML=listHTML();
  const vis=visibleCases();
  const role=ROLES.find(r=>r.id===state.role).label;
  const pl=state.pillar?` using ${pillarById(state.pillar).short}`:'';
  $('#flgCount').innerHTML=`<span><b>${vis.length}</b> ${vis.length===1?'case':'cases'}${esc(pl)}</span><span>${state.role==='all'?'All audiences':esc(role)}</span>`;
  $$('#flgList .case').forEach(b=>b.onclick=()=>selectCase(b.dataset.case,true));
  // If the current case was filtered out, move to the first visible one.
  if(vis.length&&!vis.some(c=>c.id===state.caseId))selectCase(vis[0].id,false);
}

function renderPillars(){
  const c=byId(state.caseId);
  $$('.pillar').forEach(b=>{
    const id=b.dataset.pillar, used=!!c&&c.pillars.includes(id);
    b.classList.toggle('on',used);
    b.classList.toggle('dim',!!state.pillar&&state.pillar!==id);
    b.setAttribute('aria-pressed',state.pillar===id);
    $('.state',b).textContent=state.pillar===id?'Filtering cases':(used?'Used in this case':'See cases');
  });
  const d=$('#flgDrawer');
  if(state.pillar){d.innerHTML=drawerHTML(pillarById(state.pillar));d.hidden=false;$('#flgClearPillar').onclick=()=>setPillar(null);}
  else{d.hidden=true;d.innerHTML='';}
}

function renderStory(animate){
  const c=byId(state.caseId);
  const s=$('#flgStory');
  s.innerHTML=storyHTML(c);
  s.classList.remove('swap');
  if(animate&&!reduced()){void s.offsetWidth;s.classList.add('swap');}
  $('#flgSit').innerHTML=`<span><b>This case</b>${esc(c.title)}</span>`;
}

/* Connector lines from the strategy areas used in the current case down to the case node. */
function drawLinks(animate){
  const svg=$('#flgLinks');
  if(!svg||getComputedStyle(svg).display==='none')return;
  const c=byId(state.caseId);
  const box=svg.getBoundingClientRect();
  const w=box.width,h=box.height;
  if(!w||!h){svg.innerHTML='';return;}
  svg.setAttribute('viewBox',`0 0 ${w} ${h}`);
  const cx=w/2;
  const paths=$$('.pillar').filter(b=>c.pillars.includes(b.dataset.pillar)).map(b=>{
    const r=b.getBoundingClientRect();
    const x=r.left-box.left+r.width/2;
    return `<path class="${animate&&!reduced()?'anim':''}" d="M ${x.toFixed(1)} 0 C ${x.toFixed(1)} ${(h*0.55).toFixed(1)}, ${cx.toFixed(1)} ${(h*0.45).toFixed(1)}, ${cx.toFixed(1)} ${h.toFixed(1)}"/>`;
  });
  svg.innerHTML=paths.join('');
}

/* ===================== ACTIONS ===================== */
function selectCase(id,fromUser){
  if(!byId(id))return;
  state.caseId=id;
  $$('#flgList .case').forEach(b=>b.setAttribute('aria-current',b.dataset.case===id));
  renderPillars();
  renderStory(fromUser);
  drawLinks(fromUser);
  if(fromUser&&history.replaceState){try{history.replaceState(null,'','#case-'+id);}catch(e){}}
  if(fromUser&&window.innerWidth<960){$('#flgStory').scrollIntoView({behavior:reduced()?'auto':'smooth',block:'start'});}
}
function setRole(id){state.role=id;$$('.filter .chip').forEach(b=>b.setAttribute('aria-pressed',b.dataset.role===id));renderList();renderPillars();drawLinks(false);}
function setPillar(id){state.pillar=(state.pillar===id)?null:id;renderList();renderPillars();drawLinks(false);}

function wire(){
  $$('.filter .chip').forEach(b=>b.onclick=()=>setRole(b.dataset.role));
  $$('.pillar').forEach(b=>b.onclick=()=>setPillar(b.dataset.pillar));
  let t=null;
  window.addEventListener('resize',()=>{clearTimeout(t);t=setTimeout(()=>drawLinks(false),80);});
  if(document.fonts&&document.fonts.ready)document.fonts.ready.then(()=>drawLinks(false));
}

/* ===================== BOOT ===================== */
function init(container){
  root=typeof container==='string'?document.querySelector(container):container;
  if(!root){console.warn('FLGStrategies: container not found');return;}
  root.classList.add('flg');
  const m=/^#case-([a-z0-9-]+)$/i.exec(location.hash||'');
  if(m&&byId(m[1]))state.caseId=m[1];
  root.innerHTML=shellHTML();
  wire();
  renderList();
  renderPillars();
  renderStory(false);
  requestAnimationFrame(()=>drawLinks(true));
  if(m){const el=root.querySelector('#flgStory');if(el)setTimeout(()=>el.scrollIntoView({block:'start'}),50);}
}
window.FLGStrategies={init,CASES,PILLARS,ROLES};
if(document.currentScript&&document.currentScript.dataset.target){
  const sel=document.currentScript.dataset.target;
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',()=>init(sel));else init(sel);
}
})();
