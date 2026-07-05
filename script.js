/* ---------------- STATE ---------------- */
let activeLeague = "worldcup";
let activeView = "matches";
let mlsTableGroup = "Overall";

/* ---------------- HELPERS ---------------- */
function matchClock(m){
  const now = Date.now();
  const start = new Date(m.start).getTime();
  if(m.status === "final") return {state:"FT"};
  const diffMin = (now - start) / 60000;
  if(diffMin < 0) return {state:"UPCOMING", start};
  if(diffMin <= 100) return {state:"LIVE", minute: Math.max(1,Math.min(Math.floor(diffMin),90))};
  return {state:"UPCOMING_PAST", start}; // kicked off long ago but no final data supplied
}
function countdownStr(ms){
  if(ms<0) return "Kicking off";
  const d=Math.floor(ms/86400000), h=Math.floor(ms%86400000/3600000), mnt=Math.floor(ms%3600000/60000), s=Math.floor(ms%60000/1000);
  if(d>0) return `${d}d ${h}h ${mnt}m`;
  if(h>0) return `${h}h ${mnt}m ${s}s`;
  return `${mnt}m ${s}s`;
}
function localKickoff(iso){
  const d = new Date(iso);
  return d.toLocaleString(undefined,{weekday:'short',month:'short',day:'numeric',hour:'2-digit',minute:'2-digit'});
}
function countLive(league){
  return league.matches.filter(m=>matchClock(m).state==="LIVE").length;
}

/* ---------------- RENDER: TABS ---------------- */
function renderLeagueTabs(){
  const el = document.getElementById("leagueTabs");
  el.innerHTML = "";
  Object.entries(DATA).forEach(([key,lg])=>{
    const live = countLive(lg);
    const btn = document.createElement("div");
    btn.className = "league-tab" + (key===activeLeague?" active":"");
    btn.innerHTML = `<span class="flag">${lg.icon}</span><span>${lg.short}</span>` + (live>0?`<span class="live-badge">${live} LIVE</span>`:"");
    btn.onclick = ()=>{ activeLeague=key; render(); };
    el.appendChild(btn);
  });
}

/* ---------------- RENDER: MATCH CARD ---------------- */
function renderMatchCard(m){
  const clock = matchClock(m);
  const isLive = clock.state==="LIVE";
  const isFT = clock.state==="FT";
  const homeName = m.names[m.home], awayName = m.names[m.away];
  const homeScore = isFT ? m.score[m.home] : (isLive ? (m.score? m.score[m.home]:0) : null);
  const awayScore = isFT ? m.score[m.away] : (isLive ? (m.score? m.score[m.away]:0) : null);

  let chip = "";
  if(isFT) chip = `<span class="status-chip ft">FULL TIME</span>`;
  else if(isLive) chip = `<span class="status-chip live"><span class="liveDot"></span>${clock.minute}'</span>`;
  else chip = `<span class="status-chip upcoming">UPCOMING</span>`;

  const scoreHtml = (isFT || isLive)
    ? `<div class="score-box"><span class="digit">${homeScore}</span><span class="sep">–</span><span class="digit">${awayScore}</span></div>`
    : `<div class="score-box"><span class="digit">–</span><span class="sep">vs</span><span class="digit">–</span></div>`;

  let wp = "";
  if(m.winProb && !isFT){
    wp = `<div class="win-prob">
      <div class="win-prob-bar">
        <div style="width:${m.winProb[m.home]}%;background:var(--turf)"></div>
        <div style="width:${m.winProb.draw}%;background:var(--muted)"></div>
        <div style="width:${m.winProb[m.away]}%;background:var(--loss)"></div>
      </div>
      <div class="win-prob-labels"><span>${m.home} ${m.winProb[m.home]}%</span><span>Draw ${m.winProb.draw}%</span><span>${m.away} ${m.winProb[m.away]}%</span></div>
    </div>`;
  }

  let kickoffLine = "";
  if(clock.state==="UPCOMING"){
    kickoffLine = `<div class="kickoff-line">Kicks off ${localKickoff(m.start)} · <span class="countdown" data-countdown="${m.start}">--</span></div>`;
  } else {
    kickoffLine = `<div class="kickoff-line">${localKickoff(m.start)}</div>`;
  }

  return `<div class="match-card ${isLive?'is-live':''}">
    <div class="match-meta">${chip}<span class="group-tag">${m.round||""}</span></div>
    <div class="teams-row">
      <div class="team home"><span class="flag">${flagFor(m.home)}</span><span class="name">${homeName}</span></div>
      ${scoreHtml}
      <div class="team away"><span class="flag">${flagFor(m.away)}</span><span class="name">${awayName}</span></div>
    </div>
    ${wp}
    ${kickoffLine}
  </div>`;
}

/* ---------------- RENDER: VIEWS ---------------- */
function renderMatchesView(lg){
  const played = lg.matches.filter(m=>{const c=matchClock(m).state; return c==="FT"||c==="LIVE";}).sort((a,b)=>new Date(b.start)-new Date(a.start));
  const html = played.length
    ? `<div class="matches-grid">${played.map(renderMatchCard).join("")}</div>`
    : `<div class="empty-note"><strong>No live or completed matches yet.</strong><br>Check the Fixtures tab for upcoming kickoffs.</div>`;
  return `<div class="section-label"><h2>Results &amp; Live</h2><div class="rule"></div><span class="section-note">${played.length} match${played.length!==1?'es':''}</span></div>${html}`;
}

function renderFixturesView(lg){
  const upcoming = lg.matches.filter(m=>matchClock(m).state==="UPCOMING").sort((a,b)=>new Date(a.start)-new Date(b.start));
  const html = upcoming.length
    ? `<div class="matches-grid">${upcoming.map(renderMatchCard).join("")}</div>`
    : `<div class="empty-note"><strong>No fixtures scheduled right now.</strong></div>`;
  return `<div class="section-label"><h2>Fixtures</h2><div class="rule"></div><span class="section-note">${upcoming.length} upcoming</span></div>${html}`;
}

function tableRows(rows){
  return rows.map(r=>`<tr class="${r.rank<=3 && r.group ? 'qualify':''}">
    <td class="pos">${r.rank}</td>
    <td class="name">${flagFor(r.code)||""} ${r.team}</td>
    <td class="num">${r.w}</td><td class="num">${r.l}</td><td class="num">${r.d}</td>
    <td class="pts">${r.pts}</td>
  </tr>`).join("");
}
function tableBlock(title, rows){
  return `<div class="table-block">
    <h3>${title}</h3>
    <table><thead><tr><th></th><th>Team</th><th>W</th><th>L</th><th>D</th><th>Pts</th></tr></thead>
    <tbody>${tableRows(rows)}</tbody></table>
  </div>`;
}

function renderTableView(key, lg){
  if(lg.standingsMode === "groups"){
    const groups = [...new Set(lg.standings.map(s=>s.group))];
    const blocks = groups.map(g => tableBlock("Group "+g, lg.standings.filter(s=>s.group===g))).join("");
    return `<div class="section-label"><h2>Group Standings</h2><div class="rule"></div><span class="section-note">Top 2 advance</span></div><div class="tables-wrap">${blocks}</div>`;
  }
  if(lg.standingsMode === "toggle"){
    const toggles = lg.standingsGroups.map(g=>`<button class="${g===mlsTableGroup?'active':''}" data-group="${g}">${g}</button>`).join("");
    const rows = lg.standings.filter(s=>s.group===mlsTableGroup);
    return `<div class="section-label"><h2>Standings</h2><div class="rule"></div></div>
      <div class="table-toggle" id="mlsToggle">${toggles}</div>
      <div class="tables-wrap">${tableBlock(mlsTableGroup, rows)}</div>`;
  }
  if(lg.standingsMode === "preseason"){
    return `<div class="section-label"><h2>Table</h2><div class="rule"></div><span class="section-note">Season starts ${new Date(lg.seasonStarts).toDateString()}</span></div>
      <div class="empty-note" style="margin-bottom:16px;"><strong>New season hasn't kicked off yet.</strong><br>All clubs sit level on points — check back after matchday 1.</div>
      <div class="tables-wrap">${tableBlock(lg.label+" 26/27", lg.standings)}</div>`;
  }
  return "";
}

/* ---------------- MAIN RENDER ---------------- */
function render(){
  renderLeagueTabs();
  const lg = DATA[activeLeague];
  document.querySelectorAll("#subNav button").forEach(b=>b.classList.toggle("active", b.dataset.view===activeView));
  const content = document.getElementById("content");
  if(activeView==="matches") content.innerHTML = renderMatchesView(lg);
  else if(activeView==="fixtures") content.innerHTML = renderFixturesView(lg);
  else content.innerHTML = renderTableView(activeLeague, lg);

  if(activeView==="table" && lg.standingsMode==="toggle"){
    document.querySelectorAll("#mlsToggle button").forEach(b=>{
      b.onclick = ()=>{ mlsTableGroup=b.dataset.group; render(); };
    });
  }
  document.getElementById("footNote").textContent = "Showing: " + lg.label + " · " + new Date().toLocaleDateString(undefined,{year:'numeric',month:'long',day:'numeric'});
}

document.getElementById("subNav").addEventListener("click", e=>{
  if(e.target.tagName==="BUTTON"){ activeView = e.target.dataset.view; render(); }
});

/* pick the league with a live match as the default active one */
(function pickDefaultLeague(){
  let best=null, bestLive=-1;
  Object.entries(DATA).forEach(([key,lg])=>{
    const live = countLive(lg);
    if(live>bestLive){ bestLive=live; best=key; }
  });
  if(bestLive>0) activeLeague = best; else activeLeague = "worldcup";
})();

/* live clock + countdowns */
function tick(){
  document.getElementById("liveClock").textContent = new Date().toLocaleTimeString();
  document.querySelectorAll("[data-countdown]").forEach(el=>{
    const start = new Date(el.dataset.countdown).getTime();
    el.textContent = countdownStr(start - Date.now());
  });
}
setInterval(()=>{ tick(); }, 1000);
setInterval(()=>{ render(); }, 30000); // periodic re-render to flip live/FT states automatically

render();
tick();
