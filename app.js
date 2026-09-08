const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let deferredPrompt=null, currentSubject=null, currentExam=null;
const drawer=$("#drawer"),overlay=$("#overlay");

function go(id){
 $$(".page").forEach(p=>p.classList.remove("active"));
 $("#"+id).classList.add("active");
 $$(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.go===id));
 drawer.classList.remove("open");overlay.classList.remove("show");
 window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
$("#menuBtn").onclick=()=>{drawer.classList.add("open");overlay.classList.add("show")};
overlay.onclick=()=>{drawer.classList.remove("open");overlay.classList.remove("show")};

function renderSubjects(){
 $("#subjectsGrid").innerHTML=APP_CONTENT.subjects.map(s=>`
 <button class="subject-card" data-subject="${s.id}">
   <span>${s.icon}</span><h3>${s.title}</h3><p>${s.desc}</p>
   ${s.badge?`<i class="badge">${s.badge}</i>`:""}
 </button>`).join("");
 $$("[data-subject]").forEach(b=>b.onclick=()=>openSubject(b.dataset.subject));
}
function openSubject(id){
 currentSubject=APP_CONTENT.subjects.find(x=>x.id===id); if(!currentSubject)return;
 $("#subjectTitle").textContent=currentSubject.title;
 $("#subjectDesc").textContent=currentSubject.desc;
 $$(".tab").forEach(t=>t.classList.toggle("active",t.dataset.tab==="overview"));
 renderSubjectTab("overview");go("subjectDetail");
}
function renderSubjectTab(tab){
 const s=currentSubject;if(!s)return;
 const box=$("#subjectContent");
 if(tab==="overview"){if(s.id==="gpb") box.innerHTML=`<div class="content-card"><h3>${s.title}</h3><p>${s.desc}</p><button class="mini-btn" id="openGenetics">Open Fundamentals of Genetics →</button></div>`+s.topics.map((t,i)=>`<div class="content-card"><h3>${i+1}. ${t}</h3><p>GPB learning module.</p></div>`).join("");else box.innerHTML=`<div class="content-card"><h3>${s.title}</h3><p>${s.desc}</p></div>`+s.topics.map((t,i)=>`<div class="content-card"><h3>${i+1}. ${t}</h3><p>Topic structure ready. Notes, MCQs and videos can be added here.</p></div>`).join("");const og=$("#openGenetics");if(og)og.onclick=openGeneticsCourse;}
 if(tab==="notes") box.innerHTML=`<div class="content-card"><h3>Notes & PDFs</h3><p>Add chapter-wise PDFs for ${s.title} here.</p></div>`;
 if(tab==="mcq") box.innerHTML=`<div class="content-card"><h3>MCQ Practice</h3><p>Subject-specific question sets for ${s.title} can be added here.</p><button class="mini-btn" onclick="go('quiz')">Open Demo Quiz →</button></div>`;
 if(tab==="videos") box.innerHTML=`<div class="content-card"><h3>Video Classes</h3><p>Add YouTube playlists or lecture links for ${s.title}.</p></div>`;
}
$$(".tab").forEach(t=>t.onclick=()=>{$$(".tab").forEach(x=>x.classList.remove("active"));t.classList.add("active");renderSubjectTab(t.dataset.tab)});

function renderExams(){
 $("#examGrid").innerHTML=APP_CONTENT.exams.map(e=>`<button class="exam-card" data-exam="${e.id}"><span>${e.icon}</span><h3>${e.title}</h3><p>${e.desc}</p></button>`).join("");
 $$("[data-exam]").forEach(b=>b.onclick=()=>openExam(b.dataset.exam));
}
function openExam(id){
 currentExam=APP_CONTENT.exams.find(x=>x.id===id);if(!currentExam)return;
 $("#examTitle").textContent=currentExam.title;$("#examDesc").textContent=currentExam.desc;
 $("#examContent").innerHTML=`<div class="content-card"><h3>Preparation Track</h3><p>${currentExam.desc}</p></div>`+
 currentExam.areas.map((x,i)=>`<div class="content-card"><h3>${i+1}. ${x}</h3><p>Notes, PYQ, MCQs and revision modules can be added in this section.</p></div>`).join("");
 go("examDetail");
}

function renderResources(){
 const notes=APP_CONTENT.notes;
 $("#notesList").innerHTML=notes.map(x=>`<div class="resource"><div><h3>${x.title}</h3><p>${x.desc}</p></div><a href="${x.url}" ${x.url==="#"?'onclick="return false"':''}>Open</a></div>`).join("");
 $("#videoList").innerHTML=APP_CONTENT.videos.map(x=>`<div class="resource"><div><h3>${x.title}</h3><p>${x.desc}</p></div><a href="${x.url}" ${x.url==="#"?'onclick="return false"':''}>Watch</a></div>`).join("");
 $("#updatesList").innerHTML=APP_CONTENT.updates.map(x=>`<div class="event"><small>${x.date}</small><h3>${x.title}</h3><p>${x.text}</p></div>`).join("");
 $("#noteSearch").oninput=e=>{
  const q=e.target.value.toLowerCase();
  $("#notesList").innerHTML=notes.filter(x=>(x.title+" "+x.desc).toLowerCase().includes(q)).map(x=>`<div class="resource"><div><h3>${x.title}</h3><p>${x.desc}</p></div><a href="${x.url}" ${x.url==="#"?'onclick="return false"':''}>Open</a></div>`).join("");
 };
}

let qi=0,score=0,locked=false;
function showQ(){
 locked=false;$("#nextBtn").hidden=true;$("#explain").style.display="none";
 if(qi>=QUIZ.length){
  localStorage.setItem("agroloci_best",Math.max(score,+(localStorage.getItem("agroloci_best")||0)));
  $("#qTopic").textContent="RESULT";$("#qText").textContent=`Quiz complete — ${score}/${QUIZ.length}`;
  $("#options").innerHTML=`<div class="content-card">Best score on this device: <b>${localStorage.getItem("agroloci_best")}/${QUIZ.length}</b></div>`;
  $("#qNum").textContent=QUIZ.length;return;
 }
 const x=QUIZ[qi];
 $("#qNum").textContent=qi+1;$("#qTotal").textContent=QUIZ.length;$("#score").textContent=score;
 $("#qTopic").textContent=x.topic;$("#qText").textContent=x.q;
 $("#options").innerHTML=x.o.map((o,i)=>`<button class="option" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
 $$(".option").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
 if(locked)return;locked=true;const x=QUIZ[qi],bs=$$(".option");
 bs[x.a].classList.add("correct");if(i===x.a)score++;else bs[i].classList.add("wrong");
 $("#score").textContent=score;$("#explain").textContent="Explanation: "+x.e;$("#explain").style.display="block";$("#nextBtn").hidden=false;
}
$("#nextBtn").onclick=()=>{qi++;showQ()};$("#restartBtn").onclick=()=>{qi=0;score=0;showQ()};

let currentChapter=null;
function openGeneticsCourse(){renderChapters();go("geneticsCourse")}
function renderChapters(){const opened=JSON.parse(localStorage.getItem("agroloci_chapters")||"[]");$("#chapterList").innerHTML=GENETICS_COURSE.map((c,i)=>`<button class="chapter-card" data-chapter="${c.id}"><span class="chapter-num">${i+1}</span><div><h3>${c.title}</h3><p>${c.desc}</p></div><span class="arrow">›</span></button>`).join("");$$("[data-chapter]").forEach(b=>b.onclick=()=>openChapter(b.dataset.chapter));$("#progressText").textContent=`${opened.length} of ${GENETICS_COURSE.length} chapters opened`;$("#progressBar").style.width=`${opened.length/GENETICS_COURSE.length*100}%`}
function openChapter(id){currentChapter=GENETICS_COURSE.find(x=>x.id===id);if(!currentChapter)return;let opened=JSON.parse(localStorage.getItem("agroloci_chapters")||"[]");if(!opened.includes(id)){opened.push(id);localStorage.setItem("agroloci_chapters",JSON.stringify(opened))}$("#chapterTitle").textContent=currentChapter.title;$$(".ctab").forEach(x=>x.classList.toggle("active",x.dataset.ctab==="learn"));renderChapter("learn");go("chapterDetail")}
function renderChapter(tab){const c=currentChapter;if(!c)return;if(tab==="learn")$("#chapterBody").innerHTML=c.learn.map(x=>`<div class="lesson-card"><h3>${x[0]}</h3><p>${x[1]}</p></div>`).join("")+(c.id==="mendel"?`<div class="lesson-card"><h3>Monohybrid Cross</h3><div class="cross">P:  AA × aa
       ↓
F1:     Aa
       ↓ selfing
F2 genotype: 1 AA : 2 Aa : 1 aa
F2 phenotype: 3 Dominant : 1 Recessive</div><div class="keybox"><b>Exam Key:</b> Phenotype 3:1 • Genotype 1:2:1</div></div>`:"");if(tab==="revision")$("#chapterBody").innerHTML=`<div class="lesson-card"><h3>Quick Revision</h3><ul>${c.revision.map(x=>`<li>${x}</li>`).join("")}</ul></div>`;if(tab==="practice")$("#chapterBody").innerHTML=c.qs.map((q,i)=>`<div class="practice-q"><b>Q${i+1}. ${q[0]}</b><small>Answer: ${q[1]}</small></div>`).join("")+`<button class="primary full" onclick="go('quiz')">Open Full MCQ Practice →</button>`}
$$(".ctab").forEach(t=>t.onclick=()=>{$$(".ctab").forEach(x=>x.classList.remove("active"));t.classList.add("active");renderChapter(t.dataset.ctab)});

renderSubjects();renderExams();renderResources();showQ();

window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").hidden=true};
if("serviceWorker"in navigator)window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
