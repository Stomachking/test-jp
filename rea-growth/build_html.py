#!/usr/bin/env python3
"""Render playbook.md + analysis_output.json into one-file playbook.html."""
import json, re, html, os, csv

HERE = os.path.dirname(os.path.abspath(__file__))
md = open(os.path.join(HERE, 'playbook.md'), encoding='utf-8').read()
A = json.load(open(os.path.join(HERE, 'analysis_output.json')))
MONTHS = ['2025-10', '2025-11', '2025-12', '2026-01', '2026-02', '2026-03', '2026-04', '2026-05', '2026-06', '2026-07', '2026-08', '2026-09']
# re-import the SpyFu series from the CSV so the chart draws from the same file as the tables
series = {}
for r in csv.DictReader(open(os.path.join(HERE, 'rea/traffic/spyfu_monthly.csv'))):
    s = series.setdefault(r['brand'], {'organic': [], 'paid': []})
    s['organic'].append(int(r['organic_clicks'])); s['paid'].append(int(r['paid_clicks']))
BRAND_COLOR = {'J.P. Morgan Private Bank': 'var(--c1)', 'Goldman Sachs PWM': 'var(--c2)', 'UBS GWM': 'var(--c3)',
               'HSBC Private Bank': 'var(--c4)', 'Morgan Stanley PWM': 'var(--c5)', 'BlackRock': 'var(--c6)'}
SHORT = {'J.P. Morgan Private Bank': 'J.P. Morgan', 'Goldman Sachs PWM': 'Goldman Sachs', 'UBS GWM': 'UBS',
         'HSBC Private Bank': 'HSBC PB', 'Morgan Stanley PWM': 'Morgan Stanley', 'BlackRock': 'BlackRock'}


def esc(s): return html.escape(s, quote=True)


def inline(s):
    s = esc(s)
    s = re.sub(r'`([^`]+)`', r'<code>\1</code>', s)
    s = re.sub(r'\*\*(.+?)\*\*', r'<strong>\1</strong>', s)
    s = re.sub(r'\[([^\]]+)\]\((https?://[^)\s]+)\)', r'<a href="\2" target="_blank" rel="noopener">\1</a>', s)
    s = re.sub(r'(?<![">])(https?://[^\s<)]+)', r'<a href="\1" target="_blank" rel="noopener">\1</a>', s)
    s = s.replace('**SEEN**', '<span class="tag seen">SEEN</span>')
    s = re.sub(r'\bSEEN\b', '<span class="tag seen">SEEN</span>', s)
    s = re.sub(r'\bINFERRED\b', '<span class="tag inf">INFERRED</span>', s)
    return s


def slug(t): return re.sub(r'[^a-z0-9]+', '-', t.lower()).strip('-')


def render_md(text):
    out, lines, i = [], text.split('\n'), 0
    toc = []
    prompt_n = 0
    while i < len(lines):
        ln = lines[i]
        if ln.startswith('```'):
            buf = []; i += 1
            while i < len(lines) and not lines[i].startswith('```'):
                buf.append(lines[i]); i += 1
            i += 1; prompt_n += 1
            pid = f'prompt-{prompt_n}'
            out.append(f'<div class="prompt"><div class="prompt-bar"><span class="prompt-label">THE PROMPT</span>'
                       f'<button type="button" class="copy" data-target="{pid}">Copy the prompt</button></div>'
                       f'<pre id="{pid}">{esc(chr(10).join(buf))}</pre></div>')
            continue
        m = re.match(r'^(#{1,3}) (.*)', ln)
        if m:
            lvl = len(m.group(1)); t = m.group(2); sid = slug(t)
            if lvl == 2: toc.append((sid, t))
            out.append(f'<h{lvl} id="{sid}">{inline(t)}</h{lvl}>'); i += 1; continue
        if ln.startswith('|'):
            rows = []
            while i < len(lines) and lines[i].startswith('|'):
                rows.append(lines[i]); i += 1
            cells = [[c.strip() for c in r.strip().strip('|').split('|')] for r in rows]
            cells = [c for c in cells if not all(re.match(r'^:?-+:?$', x) for x in c)]
            head, body = cells[0], cells[1:]
            t = '<div class="tablewrap"><table><thead><tr>' + ''.join(f'<th>{inline(c)}</th>' for c in head) + '</tr></thead><tbody>'
            for r in body:
                t += '<tr>' + ''.join(f'<td>{inline(c)}</td>' for c in r) + '</tr>'
            out.append(t + '</tbody></table></div>'); continue
        if ln.startswith('- '):
            items = []
            while i < len(lines) and lines[i].startswith('- '):
                items.append(lines[i][2:]); i += 1
            out.append('<ul>' + ''.join(f'<li>{inline(x)}</li>' for x in items) + '</ul>'); continue
        if ln.strip() == '':
            i += 1; continue
        para = [ln]; i += 1
        while i < len(lines) and lines[i].strip() and not re.match(r'^(#{1,3} |- |\||```)', lines[i]):
            para.append(lines[i]); i += 1
        out.append(f'<p>{inline(" ".join(para))}</p>')
    return '\n'.join(out), toc


def chart(kind, title, base_idx, note):
    """Indexed line chart, one line per brand, with month ticks."""
    W, H, L, R, T, B = 760, 300, 48, 16, 22, 44
    xs = [L + (W - L - R) * i / 11 for i in range(12)]
    idx = {b: [v / s[kind][base_idx] * 100 for v in s[kind]] for b, s in series.items()}
    lo = min(min(v) for v in idx.values()); hi = max(max(v) for v in idx.values())
    lo = math_floor(lo, 20); hi = math_ceil(hi, 20)
    def y(v): return T + (H - T - B) * (1 - (v - lo) / (hi - lo))
    g = [f'<svg viewBox="0 0 {W} {H}" role="img" aria-label="{esc(title)}" class="chart">']
    g.append(f'<text x="{L}" y="14" class="ct">{esc(title)}</text>')
    step = 20 if hi - lo <= 200 else 100 if hi - lo <= 1000 else 200
    v = lo
    while v <= hi:
        g.append(f'<line x1="{L}" x2="{W-R}" y1="{y(v):.1f}" y2="{y(v):.1f}" class="grid"/>')
        g.append(f'<text x="{L-6}" y="{y(v)+4:.1f}" class="tick" text-anchor="end">{int(v)}</text>')
        v += step
    for i, m in enumerate(MONTHS):
        if i % 2 == base_idx % 2 or i == 11:
            g.append(f'<text x="{xs[i]:.1f}" y="{H-B+18}" class="tick" text-anchor="middle">{m[2:]}</text>')
    g.append(f'<line x1="{xs[base_idx]:.1f}" x2="{xs[base_idx]:.1f}" y1="{T}" y2="{H-B}" class="base"/>')
    for b, vals in idx.items():
        pts = ' '.join(f'{xs[i]:.1f},{y(v):.1f}' for i, v in enumerate(vals))
        g.append(f'<polyline points="{pts}" fill="none" stroke="{BRAND_COLOR[b]}" stroke-width="2.2" stroke-linejoin="round"><title>{esc(SHORT[b])}</title></polyline>')
        g.append(f'<circle cx="{xs[11]:.1f}" cy="{y(vals[11]):.1f}" r="3.5" fill="{BRAND_COLOR[b]}"/>')
        g.append(f'<text x="{xs[11]+6:.1f}" y="{y(vals[11])+4:.1f}" class="endlab" fill="{BRAND_COLOR[b]}">{int(round(vals[11]))}</text>')
    g.append(f'<text x="{L}" y="{H-6}" class="note">{esc(note)}</text>')
    g.append('</svg>')
    return '\n'.join(g)


def math_floor(v, s): return int(v // s * s)
def math_ceil(v, s): return int(-(-v // s) * s)


def pins():
    """Dated moves as a pin strip under the charts, one row per brand."""
    moves = [m for m in A['moves'] if m['date'][:7] in MONTHS]
    W, L, R, rowh = 760, 48, 16, 26
    brands = list(BRAND_COLOR.keys())
    H = 24 + rowh * len(brands) + 10
    xs = {m: L + (W - L - R) * i / 11 for i, m in enumerate(MONTHS)}
    g = [f'<svg viewBox="0 0 {W} {H}" class="chart pins" role="img" aria-label="Dated moves by brand and month">']
    g.append(f'<text x="{L}" y="14" class="ct">Dated moves, Oct 2025 to Sep 2026 (hover a pin for the move and its paid-click lift)</text>')
    for r, b in enumerate(brands):
        yy = 24 + rowh * r + 14
        g.append(f'<text x="{L-6}" y="{yy+4}" class="tick" text-anchor="end">{esc(SHORT[b])}</text>')
        g.append(f'<line x1="{L}" x2="{W-R}" y1="{yy}" y2="{yy}" class="grid"/>')
        bym = {}
        for m in moves:
            if m['brand'] == b:
                bym.setdefault(m['date'][:7], []).append(m)
        for mon, ms in bym.items():
            x = xs[mon]
            lift = ms[0].get('paid_lift_pct')
            lab = f"{len(ms)} move{'s' if len(ms) > 1 else ''}"
            tip = ' | '.join(f"{m['date']} {m['channel']}: {m['move']} (paid lift {m.get('paid_lift_pct')}%, organic {m.get('organic_lift_pct')}%)" for m in ms)
            shape = 'rect' if any(m['channel'] == 'linkedin-ads' for m in ms) else 'circle'
            r_ = 5 + min(len(ms), 3)
            if shape == 'circle':
                g.append(f'<circle cx="{x:.1f}" cy="{yy}" r="{r_}" fill="{BRAND_COLOR[b]}"><title>{esc(tip)}</title></circle>')
            else:
                g.append(f'<rect x="{x-r_:.1f}" y="{yy-r_}" width="{2*r_}" height="{2*r_}" fill="{BRAND_COLOR[b]}"><title>{esc(tip)}</title></rect>')
            if isinstance(lift, (int, float)):
                g.append(f'<text x="{x:.1f}" y="{yy-9}" class="pinlab" text-anchor="middle">{lift:+.0f}%</text>')
    g.append(f'<text x="{L}" y="{H-2}" class="note">circle = Google ads or press, square = LinkedIn ads; label = paid-click lift vs the two prior months</text>')
    g.append('</svg>')
    return '\n'.join(g)


def contact_sheets():
    """Per-channel top vs bottom posts side by side. Images were not read, so titles and links stand in."""
    out = ['<h2 id="contact-sheets">Contact sheets: LinkedIn top quarter vs bottom half</h2>',
           '<p>Thumbnails could not be downloaded from this environment (image CDNs refuse the proxy), so each tile shows the first line and links to the post. Reactions are as pulled on 2026-11-01; posts under seven days old were dropped.</p>']
    rows = list(csv.DictReader(open(os.path.join(HERE, 'rea/linkedin/posts.csv'))))
    for b, st in A['li_stats'].items():
        if st.get('n', 0) < 8:
            out.append(f'<h3>{esc(b)}</h3><p>Too few posts to call a pattern ({st.get("n", 0)} settled posts).</p>'); continue
        sub = sorted([r for r in rows if r['brand'] == b and r['date'] <= st['settled_cutoff']], key=lambda r: -int(r['likes']))
        q = max(1, -(-len(sub) // 4)); top = sub[:q]; bottom = sub[-(len(sub) // 2):][-q:]
        def tile(r):
            return (f'<a class="tile {r["format"]}" href="{esc(r["url"])}" target="_blank" rel="noopener">'
                    f'<span class="tile-meta">{esc(r["date"])} · {esc(r["format"])} · {r["likes"]} reactions · {r["comments"]} comments</span>'
                    f'<span class="tile-text">{esc(r["first_lines"][:140])}</span><span class="tile-img">image not read</span></a>')
        out.append(f'<h3>{esc(b)} <small>{esc(str(st.get("followers") or ""))}, {st["n"]} posts, median {st["median_reactions"]} reactions</small></h3>')
        out.append('<div class="sheet"><div><div class="sheet-h">Top quarter</div>' + ''.join(tile(r) for r in top) + '</div>'
                   '<div><div class="sheet-h">Bottom half (lowest)</div>' + ''.join(tile(r) for r in bottom) + '</div></div>')
    return '\n'.join(out)


body, toc = render_md(md)
# insert charts after the "## 3." heading's first paragraph block: find the h2 id for step 3
chart_block = ('<div class="charts">' + chart('paid', 'Paid clicks, indexed to Jan 2026 = 100 (SpyFu, US)', 3, 'Dec 2025 step excluded by indexing to Jan 2026; the real step-ups are Feb to Mar 2026.')
               + chart('organic', 'Organic clicks, indexed to Oct 2025 = 100 (SpyFu, US)', 0, 'All six fall over twelve months; J.P. Morgan is the group domain jpmorgan.com.')
               + pins() + '<div class="legend">' + ''.join(f'<span><i style="background:{BRAND_COLOR[b]}"></i>{esc(SHORT[b])}</span>' for b in BRAND_COLOR) + '</div></div>')
body = re.sub(r'(<h2 id="3-when-they-grew[^"]*">.*?</h2>\s*<p>.*?</p>)', lambda m: m.group(1) + chart_block, body, count=1, flags=re.S)
body = body.replace('<h2 id="things-to-skip">', contact_sheets() + '\n<h2 id="things-to-skip">', 1)
toc_html = '<nav class="toc" aria-label="Sections"><ol>' + ''.join(f'<li><a href="#{s}">{esc(re.sub(r"^[0-9]+\. ", "", t))}</a></li>' for s, t in toc) + '</ol></nav>'

page = f'''<title>REA Growth Playbook</title>
<meta name="claude:viewport-fit-sides" content="cover">
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Source+Serif+4:opsz,wght@8..60,500;8..60,600&family=Source+Sans+3:wght@400;600&family=Source+Code+Pro:wght@400&display=swap">
<style>
/* Layout: one reading column (68ch) with full-width table and chart bands; a sticky section nav on wide screens. */
:root {{
  --bg:#f6f7f9; --surface:#ffffff; --fg:#1b2230; --muted:#5b6575; --line:#d9dee6; --accent:#1f5f8b; --accent-fg:#ffffff;
  --seen:#1d6b4a; --seen-bg:#e3f3ea; --inf:#8a5a12; --inf-bg:#fbefd9; --code-bg:#eef1f5;
  --c1:#1f5f8b; --c2:#b8862b; --c3:#c0392b; --c4:#8e2a3a; --c5:#2f8f6f; --c6:#5b4b9c;
  --display:"Source Serif 4", Georgia, "Times New Roman", serif; --body:"Source Sans 3", "Helvetica Neue", Arial, sans-serif; --mono:"Source Code Pro", Menlo, Consolas, monospace;
}}
@media (prefers-color-scheme: dark) {{ :root:not([data-theme="light"]) {{
  --bg:#12161d; --surface:#1a2029; --fg:#e6eaf0; --muted:#9aa5b5; --line:#2c3542; --accent:#6fb0dd; --accent-fg:#0e1319;
  --seen:#7fd0a6; --seen-bg:#17352a; --inf:#e6b566; --inf-bg:#3a2c13; --code-bg:#20272f;
  --c1:#6fb0dd; --c2:#e0b05a; --c3:#ef7a6e; --c4:#d97a8c; --c5:#5fc39f; --c6:#a394e0; color-scheme: dark }} }}
:root[data-theme="dark"] {{
  --bg:#12161d; --surface:#1a2029; --fg:#e6eaf0; --muted:#9aa5b5; --line:#2c3542; --accent:#6fb0dd; --accent-fg:#0e1319;
  --seen:#7fd0a6; --seen-bg:#17352a; --inf:#e6b566; --inf-bg:#3a2c13; --code-bg:#20272f;
  --c1:#6fb0dd; --c2:#e0b05a; --c3:#ef7a6e; --c4:#d97a8c; --c5:#5fc39f; --c6:#a394e0; color-scheme: dark }}
body {{ background:var(--bg); color:var(--fg); font-family:var(--body); font-size:16px; line-height:1.55; margin:0;
  padding-block:0 48px; padding-left:max(16px, env(safe-area-inset-left, 0px)); padding-right:max(16px, env(safe-area-inset-right, 0px)); }}
.wrap {{ max-width:1180px; margin:0 auto; display:grid; grid-template-columns:minmax(0,1fr); gap:0 40px; }}
@media (min-width:1000px) {{ .wrap {{ grid-template-columns:220px minmax(0,1fr); }} .toc {{ position:sticky; top:env(safe-area-inset-top, 0px); align-self:start; max-height:100vh; overflow:auto; padding-top:28px; }} }}
main {{ min-width:0; }}
h1,h2,h3 {{ font-family:var(--display); font-weight:600; text-wrap:balance; line-height:1.15; }}
h1 {{ font-size:clamp(28px, 4vw, 40px); margin:28px 0 8px; }}
h2 {{ font-size:clamp(22px, 2.6vw, 28px); margin:48px 0 12px; padding-top:16px; border-top:1px solid var(--line); }}
h3 {{ font-size:19px; margin:28px 0 8px; }}
h3 small {{ font-family:var(--body); font-weight:400; color:var(--muted); font-size:14px; }}
p, li {{ max-width:68ch; }}
p {{ margin:0 0 14px; }}
ul {{ padding-left:20px; margin:0 0 14px; }} li {{ margin-bottom:6px; }}
a {{ color:var(--accent); text-decoration-color:color-mix(in srgb, var(--accent) 45%, transparent); }}
a:focus-visible, button:focus-visible {{ outline:2px solid var(--accent); outline-offset:2px; }}
code {{ font-family:var(--mono); font-size:0.9em; background:var(--code-bg); padding:1px 4px; border-radius:3px; }}
.tag {{ font-family:var(--mono); font-size:11px; letter-spacing:.06em; padding:1px 6px; border-radius:3px; vertical-align:middle; }}
.tag.seen {{ color:var(--seen); background:var(--seen-bg); }} .tag.inf {{ color:var(--inf); background:var(--inf-bg); }}
.tablewrap {{ overflow-x:auto; margin:12px 0 20px; border:1px solid var(--line); border-radius:6px; background:var(--surface); }}
table {{ border-collapse:collapse; width:100%; font-size:14px; min-width:640px; }}
th, td {{ text-align:left; vertical-align:top; padding:8px 10px; border-bottom:1px solid var(--line); font-variant-numeric:tabular-nums; }}
th {{ font-weight:600; color:var(--muted); font-size:12px; letter-spacing:.04em; text-transform:uppercase; background:var(--bg); }}
tbody tr:last-child td {{ border-bottom:0; }}
.prompt {{ background:var(--surface); border:1px solid var(--line); border-left:4px solid var(--accent); border-radius:6px; margin:14px 0 22px; }}
.prompt-bar {{ display:flex; justify-content:space-between; align-items:center; gap:12px; padding:8px 12px; border-bottom:1px solid var(--line); }}
.prompt-label {{ font-family:var(--mono); font-size:11px; letter-spacing:.08em; color:var(--muted); }}
.copy {{ font:inherit; font-size:13px; font-weight:600; color:var(--accent-fg); background:var(--accent); border:0; border-radius:4px; padding:6px 12px; cursor:pointer; }}
.copy.done {{ background:var(--seen); }}
pre {{ margin:0; padding:14px; font-family:var(--mono); font-size:13px; line-height:1.5; white-space:pre-wrap; overflow-wrap:anywhere; max-width:none; }}
.toc {{ font-size:14px; }} .toc ol {{ list-style:none; padding:0; margin:0; }} .toc li {{ margin:0 0 6px; }} .toc a {{ color:var(--muted); text-decoration:none; }} .toc a:hover {{ color:var(--accent); }}
@media (max-width:999px) {{ .toc {{ display:none; }} }}
.charts {{ display:grid; gap:18px; margin:18px 0 26px; }}
.chart {{ width:100%; height:auto; max-width:100%; background:var(--surface); border:1px solid var(--line); border-radius:6px; }}
.chart .grid {{ stroke:var(--line); stroke-width:1; }} .chart .base {{ stroke:var(--muted); stroke-dasharray:3 3; }}
.chart text {{ font-family:var(--body); fill:var(--fg); }} .chart .tick {{ font-size:11px; fill:var(--muted); }} .chart .ct {{ font-size:13px; font-weight:600; }}
.chart .note {{ font-size:11px; fill:var(--muted); }} .chart .endlab {{ font-size:11px; font-weight:600; }} .chart .pinlab {{ font-size:10px; fill:var(--muted); }}
.legend {{ display:flex; flex-wrap:wrap; gap:8px 18px; font-size:13px; color:var(--muted); }} .legend i {{ display:inline-block; width:12px; height:12px; border-radius:2px; margin-right:6px; vertical-align:-2px; }}
.sheet {{ display:grid; grid-template-columns:repeat(auto-fit, minmax(280px, 1fr)); gap:16px; margin:10px 0 24px; }}
.sheet-h {{ font-size:12px; text-transform:uppercase; letter-spacing:.05em; color:var(--muted); margin-bottom:8px; }}
.tile {{ display:grid; grid-template-columns:minmax(0,1fr) 72px; gap:6px 10px; background:var(--surface); border:1px solid var(--line); border-radius:6px; padding:10px; margin-bottom:8px; text-decoration:none; color:var(--fg); }}
.tile-meta {{ grid-column:1 / -1; font-size:12px; color:var(--muted); font-variant-numeric:tabular-nums; }}
.tile-text {{ font-size:14px; min-width:0; }} .tile-img {{ display:flex; align-items:center; justify-content:center; font-size:10px; color:var(--muted); background:var(--code-bg); border-radius:4px; text-align:center; padding:4px; }}
.lede {{ font-size:15px; color:var(--muted); max-width:68ch; }}
@media (prefers-reduced-motion: no-preference) {{ .copy {{ transition:background .2s; }} }}
</style>
<div class="wrap">
{toc_html}
<main>
{body}
</main>
</div>
<script>
document.querySelectorAll('.copy').forEach(function(b) {{
  b.addEventListener('click', function() {{
    var pre = document.getElementById(b.dataset.target); var txt = pre ? pre.textContent : '';
    function done(ok) {{ b.textContent = ok ? 'Copied' : 'Select the text above and copy'; b.classList.toggle('done', ok); setTimeout(function() {{ b.textContent = 'Copy the prompt'; b.classList.remove('done'); }}, 2200); }}
    if (navigator.clipboard && navigator.clipboard.writeText) {{
      navigator.clipboard.writeText(txt).then(function() {{ done(true); }}, function() {{ selectPre(pre); done(false); }});
    }} else {{ selectPre(pre); done(false); }}
  }});
}});
function selectPre(pre) {{ if (!pre) return; var r = document.createRange(); r.selectNodeContents(pre); var s = window.getSelection(); s.removeAllRanges(); s.addRange(r); }}
</script>
'''
open(os.path.join(HERE, 'playbook.html'), 'w', encoding='utf-8').write(page)
print('wrote playbook.html', len(page), 'bytes; toc', len(toc), 'sections')
