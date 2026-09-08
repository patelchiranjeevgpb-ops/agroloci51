const $=s=>document.querySelector(s), $$=s=>document.querySelectorAll(s);
let deferredPrompt=null;
const drawer=$("#drawer"), overlay=$("#overlay");

function go(id){
  $$(".page").forEach(p=>p.classList.remove("active"));
  $("#"+id).classList.add("active");
  $$(".bottom-nav button").forEach(b=>b.classList.toggle("active",b.dataset.go===id));
  drawer.classList.remove("open"); overlay.classList.remove("show");
  window.scrollTo({top:0,behavior:"smooth"});
}
$$("[data-go]").forEach(b=>b.addEventListener("click",()=>go(b.dataset.go)));
$("#menuBtn").onclick=()=>{drawer.classList.add("open");overlay.classList.add("show")};
overlay.onclick=()=>{drawer.classList.remove("open");overlay.classList.remove("show")};

function renderResources(){
  $("#notesList").innerHTML=APP_CONTENT.notes.map(x=>`<div class="resource"><div><h3>${x.title}</h3><p>${x.desc}</p></div><a href="${x.url}" ${x.url==="#"?'onclick="return false"':''}>Open</a></div>`).join("");
  $("#videoList").innerHTML=APP_CONTENT.videos.map(x=>`<div class="resource"><div><h3>${x.title}</h3><p>${x.desc}</p></div><a href="${x.url}" ${x.url==="#"?'onclick="return false"':''}>Watch</a></div>`).join("");
  $("#updatesList").innerHTML=APP_CONTENT.updates.map(x=>`<div class="event"><small>${x.date}</small><h3>${x.title}</h3><p>${x.text}</p></div>`).join("");
}
renderResources();

let qi=0,score=0,locked=false;
function showQ(){
  locked=false; $("#nextBtn").hidden=true; $("#explain").style.display="none";
  if(qi>=QUIZ.length){
    localStorage.setItem("agroloci_best", Math.max(score,+(localStorage.getItem("agroloci_best")||0)));
    $("#qTopic").textContent="RESULT";
    $("#qText").textContent=`Quiz complete — ${score}/${QUIZ.length}`;
    $("#options").innerHTML=`<div class="notice">Best score on this device: ${localStorage.getItem("agroloci_best")}/${QUIZ.length}</div>`;
    $("#qNum").textContent=QUIZ.length; return;
  }
  const x=QUIZ[qi];
  $("#qNum").textContent=qi+1; $("#qTotal").textContent=QUIZ.length; $("#score").textContent=score;
  $("#qTopic").textContent=x.topic; $("#qText").textContent=x.q;
  $("#options").innerHTML=x.o.map((o,i)=>`<button class="option" data-i="${i}">${String.fromCharCode(65+i)}. ${o}</button>`).join("");
  $$(".option").forEach(b=>b.onclick=()=>answer(+b.dataset.i));
}
function answer(i){
  if(locked)return; locked=true;
  const x=QUIZ[qi], buttons=$$(".option");
  buttons[x.a].classList.add("correct");
  if(i===x.a) score++; else buttons[i].classList.add("wrong");
  $("#score").textContent=score;
  $("#explain").textContent="Explanation: "+x.e; $("#explain").style.display="block";
  $("#nextBtn").hidden=false;
}
$("#nextBtn").onclick=()=>{qi++;showQ()};
$("#restartBtn").onclick=()=>{qi=0;score=0;showQ()};
showQ();

window.addEventListener("beforeinstallprompt",e=>{e.preventDefault();deferredPrompt=e;$("#installBtn").hidden=false});
$("#installBtn").onclick=async()=>{if(!deferredPrompt)return;deferredPrompt.prompt();await deferredPrompt.userChoice;deferredPrompt=null;$("#installBtn").hidden=true};

if("serviceWorker" in navigator) window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js"));
