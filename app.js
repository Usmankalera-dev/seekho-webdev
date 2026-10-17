/* Shared logic: progress (localStorage), home render, chapter render, quiz engine */
const LS_KEY = "seekho_progress_v1";
function getProgress(){ try{ return JSON.parse(localStorage.getItem(LS_KEY))||{}; }catch(e){ return {}; } }
function saveProgress(p){ localStorage.setItem(LS_KEY, JSON.stringify(p)); }
function isDone(slug){ return !!getProgress()[slug]; }
function markDone(slug){ const p=getProgress(); p[slug]=true; saveProgress(p); }

function trackOf(ch){ return TRACKS.find(t=>t.id===ch.track); }

function renderHome(){
  const box=document.getElementById("tracks");
  const prog=getProgress();
  let total=0, done=0;
  box.innerHTML = TRACKS.map(t=>{
    const chs=CHAPTERS.filter(c=>c.track===t.id);
    total+=chs.length;
    const d=chs.filter(c=>prog[c.slug]).length; done+=d;
    const pct=Math.round(d/chs.length*100);
    const lis=chs.map(c=>`<li><a href="chapter.html?c=${c.slug}">
      <span>${prog[c.slug]?"✅":"⭕"} ${c.title}</span>
      <span class="${prog[c.slug]?'done-badge':'todo-badge'}">${prog[c.slug]?'Done':'Start →'}</span>
    </a></li>`).join("");
    const banner = d===chs.length ? `<div class="complete-banner">🎉 <b>${t.name}</b> complete! Tusi champ ho!</div>` : "";
    return `<div class="track"><h2>${t.icon} ${t.name}</h2><p style="color:var(--mut)">${t.desc}</p>
      <div class="tbar"><div style="width:${pct}%"></div></div>
      <p style="color:var(--mut);font-size:.9rem">${d}/${chs.length} chapters · ${pct}%</p>
      <ul>${lis}</ul>${banner}</div>`;
  }).join("");
  const opct = total? Math.round(done/total*100):0;
  document.getElementById("overallFill").style.width=opct+"%";
  document.getElementById("overallText").textContent=`${done}/${total} chapters · ${opct}% complete`;
}

function renderChapter(){
  const slug=new URLSearchParams(location.search).get("c");
  const ch=CHAPTERS.find(x=>x.slug===slug);
  if(!ch){ document.getElementById("content").innerHTML="<p>Chapter nahi labha. <a href='index.html'>Wapis</a></p>"; return; }
  const t=trackOf(ch);
  const idx=CHAPTERS.filter(c=>c.track===ch.track).findIndex(c=>c.slug===slug);
  const all=CHAPTERS.filter(c=>c.track===ch.track);
  const prev=all[idx-1], next=all[idx+1];
  document.title=ch.title+" — SeekhoWebDev";
  let html=`<div class="crumb"><a href="index.html">Home</a> › <a href="index.html">${t.name}</a> › ${ch.title}</div>
  <div class="lesson"><h1>${t.icon} ${ch.title}</h1><p style="color:var(--mut)">${ch.intro}</p>${ch.body}
  <div style="margin-top:22px;display:flex;gap:10px;flex-wrap:wrap">
    ${prev?`<a class="btn ghost" href="chapter.html?c=${prev.slug}">← ${prev.title}</a>`:`<a class="btn ghost" href="index.html">← Home</a>`}
    <a class="btn ghost" href="playground.html">▶ Playground vich try karo</a>
  </div></div>
  <div class="quiz" id="quiz"><h2>📝 Quiz — ${ch.title}</h2>
  <p style="color:var(--mut)">Submit karo. 60%+ lao te chapter complete!</p><div id="qs"></div>
  <button class="btn" id="submitQuiz">Submit Quiz</button>
  <div class="result" id="qresult"></div>
  <div id="afterQuiz" style="margin-top:16px"></div></div>`;
  document.getElementById("content").innerHTML=html;
  const qs=document.getElementById("qs");
  qs.innerHTML=ch.quiz.map((q,i)=>`<div class="q" id="q${i}"><p>Q${i+1}. ${q.q}</p>
    ${q.opts.map((o,j)=>`<label><input type="radio" name="q${i}" value="${j}"> ${o}</label>`).join("")}
    <p class="exp">💡 ${q.exp}</p></div>`).join("");
  document.getElementById("submitQuiz").onclick=()=>{
    let score=0, answered=0;
    ch.quiz.forEach((q,i)=>{
      const sel=document.querySelector(`input[name=q${i}]:checked`);
      const box=document.getElementById("q"+i);
      box.querySelector(".exp").style.display="block";
      if(sel){ answered++; const v=+sel.value;
        if(v===q.a){ score++; box.classList.add("correct"); } else box.classList.add("wrong");
      } else box.classList.add("wrong");
    });
    const pct=Math.round(score/ch.quiz.length*100);
    const pass=pct>=60;
    const r=document.getElementById("qresult");
    r.style.display="block"; r.className="result "+(pass?"pass":"fail");
    r.innerHTML=`<b>${score}/${ch.quiz.length} (${pct}%)</b><br>${pass?"🎉 Mubarak! Chapter complete!":"😅 60% chahida — dobara try karo!"}`;
    document.getElementById("submitQuiz").disabled=true;
    const aq=document.getElementById("afterQuiz");
    if(pass){ markDone(ch.slug);
      aq.innerHTML=`${next?`<a class="btn" href="chapter.html?c=${next.slug}">Agla Chapter → ${next.title}</a>`:`<a class="btn" href="index.html">🏠 Home — track complete!</a>`}`;
    } else {
      aq.innerHTML=`<button class="btn ghost" onclick="location.reload()">🔁 Dobara Try Karo</button>`;
    }
    window.scrollTo({top:document.getElementById("quiz").offsetTop-80,behavior:"smooth"});
  };
}
