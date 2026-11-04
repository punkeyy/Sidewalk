var NAME="Sidewalk";
document.title=NAME+" — 스트리트 스타일 매거진";
document.getElementById("wm").textContent=NAME;document.getElementById("ft").textContent="© "+NAME;
function fit(){var s=document.getElementById("wm"),h=s.parentNode;h.style.fontSize="100px";var w=h.parentNode.clientWidth-h.parentNode.clientWidth*.01;h.style.fontSize=(100*w/s.offsetWidth)+"px"}
addEventListener("resize",fit);if(document.fonts&&document.fonts.ready)document.fonts.ready.then(fit);fit();

var KW=["새해 레이어드","발렌타인 톤온톤","봄맞이 트렌치","벚꽃 파스텔","오피스 테일러링","초여름 린넨","장마 레인웨어","썸머 비비드","바캉스 리조트","늦더위 쿨톤","가을 니트","시월 코듀로이","한겨울 레이어드","늦겨울 톤온톤","봄맞이 트렌치","벚꽃 파스텔","오피스 테일러링","초여름 린넨","장마 레인웨어","썸머 비비드","늦더위 쿨톤","가을 니트 코듀로이"];
var MN=["January","February","March","April","May","June","July","August","September","October","November","December"];
var T=[["스냅 24 LOOKS","컬러 진단 가이드","거리의 핏 인터뷰"],["이달의 키워드 5","톤온톤 코디법","스트리트 스냅"],["베스트 핏 12","나의 퍼스널 컬러","스타일 Q&amp;A"]];
var SH=["","a","b","c"];
var PAL=[["#1c2063","#f1efe9","#e0d28f"],["#1f4d36","#f1efe9","#e0d28f"],["#4aa3d4","#10193a","#f1efe9"],["#c8223f","#fff","#10193a"],["#e0d28f","#222","#c8223f"],["#222","#f1efe9","#4aa3d4"],["#8f8bdc","#10193a","#e0d28f"],["#d9cfc6","#222","#1c2063"]];
var h="";for(var i=0;i<22;i++){var p=PAL[(i*3)%8],y=2025+Math.floor(i/12),m=i%12;
h+='<div class="cv" style="background:'+p[0]+';color:'+p[1]+'"><div class="mh">'+NAME+'</div><div class="dl"><span>NO.'+String(i+1).padStart(2,"0")+'</span><span>'+MN[m]+' '+y+'</span></div><div class="sh '+SH[i%4]+'"></div><div class="sh2" style="background:'+p[2]+'"></div><div class="hd"><b>'+MN[m]+'</b><i>'+KW[i]+'</i></div><div class="ln">'+T[i%3].join("<br>")+'</div><div class="bc"></div></div>';}
document.getElementById("tr").innerHTML=h+h;

var Q=[
{t:"01 · Warm vs Cool",q:"오늘 같은 날씨에 입었을 때, 내 얼굴빛을 확 살려주는 상의 컬러는?",o:[
["따뜻한 아이보리 & 웜 베이지","웜톤 계열입니다. 노란 기가 도는 색이 피부의 생기와 따뜻한 인상을 살려줍니다. 아이보리, 카멜, 올리브가 잘 어울리는 편이에요.","w"],
["깨끗한 쿨 화이트 & 챠콜 그레이","쿨톤 계열입니다. 푸른 기가 도는 선명한 색이 피부를 맑고 깨끗해 보이게 합니다. 블루 화이트, 그레이, 네이비와 잘 맞아요.","c"]]},
{t:"02 · Gold vs Silver",q:"평소 손이 더 잘 가는 주얼리·시계·버클 포인트는?",o:[
["클래식하고 은은한 골드/브론즈","골드 메탈에 손이 간다면 웜 베이스일 가능성이 높습니다. 부드럽고 클래식한 무드를 완성해주는 포인트예요.","w"],
["세련되고 시원해 보이는 실버/블랙 메탈","실버나 블랙 메탈을 고른다면 쿨 베이스일 가능성이 높습니다. 모던하고 시크한 인상을 만들어줘요.","c"]]},
{t:"03 · Soft vs Vivid",q:"내 피부 톤이 더 깔끔해 보이는 느낌은?",o:[
["파스텔/뮤트 톤의 은은한 톤온톤","톤온톤은 비슷한 명도와 채도를 겹쳐 입는 방식입니다. 부드럽고 차분한 분위기를 원할 때 좋아요.",""],
["비비드 & 대비감이 큰 톤인톤","대비가 큰 조합은 존재감과 에너지를 줍니다. 한 가지 포인트 컬러만 써도 인상이 또렷해져요.",""]]},
{t:"04 · First Impression",q:"'오늘 분위기 있네!'라는 말을 들을 때 가장 듣고 싶은 키워드는?",o:[
["모던 & 시크","군더더기 없는 실루엣과 모노톤이 핵심. 도회적이고 단정한 인상을 줍니다.",""],
["내추럴 & 코지","부드러운 소재와 어스 컬러 중심. 편안하고 따뜻한 첫인상을 만들어요.",""],
["클래식 & 엘레강스","오래 입어도 질리지 않는 정제된 스타일. 품위와 신뢰감을 줍니다.",""],
["스포티 & 힙","활동적인 아이템과 스트리트 감성의 믹스. 젊고 에너지 있는 인상이에요.",""]]},
{t:"05 · Fit & Silhouette",q:"현재 내 이미지와 체형을 가장 장점화해준다고 느끼는 핏은?",o:[
["오버핏 / 드롭숄더","여유 있는 라인으로 편안하고 트렌디한 무드. 체형 커버에도 좋아요.",""],
["테일러드 / 정핏","몸의 선에 맞춘 단정한 핏. 신뢰감과 전문성이 돋보입니다.",""],
["크롭 / 하이웨스트","비율을 끌어올려 다리가 길어 보이는 효과. 경쾌하고 감각적인 인상이에요.",""]]},
{t:"06 · Wanna-be Aura",q:"컨설팅을 통해 가장 보완하거나 새로 연출해보고 싶은 아우라는?",o:[
["신뢰감 & 전문성","면접, 미팅, 발표처럼 믿음을 줘야 하는 자리에 어울리는 이미지 설계입니다.",""],
["세련미 & 트렌디","지금의 유행을 내 스타일로 소화하는 방향. 감각적인 인상을 만듭니다.",""],
["부드러움 & 친근함","처음 만나도 편안한 사람이라는 느낌. 관계에서 호감을 높여줘요.",""]]},
{t:"07 · Shoes (New)",q:"한 켤레만 고른다면, 내 스타일을 완성하는 신발은?",o:[
["데일리 스니커즈","캐주얼과 스트리트의 기본. 어떤 하의에도 편하게 맞추고 활동적인 인상을 줘요.",""],
["클래식 로퍼 / 구두","룩 전체의 격을 올려주는 아이템. 단정함과 세련된 무드를 완성합니다.",""]]}
];
var i=0,pk=[],sel=-1,quiz=document.getElementById("quiz"),bar=document.getElementById("bar");
function show(){
 bar.style.width=(i/Q.length*100)+"%";
 var d=Q[i],s='<small>'+d.t+'</small><h3>'+d.q+'</h3><div class="opts'+(d.o.length>2?" three":"")+'">';
 d.o.forEach(function(o,n){s+='<button class="opt" data-n="'+n+'"><em>'+String.fromCharCode(65+n)+'</em>'+o[0]+'</button>'});
 s+='</div><div class="exp" id="exp" hidden></div><button class="nx" id="nx" hidden>'+(i==Q.length-1?"결과 보기":"다음 질문")+'</button>';
 quiz.innerHTML=s;
 quiz.querySelectorAll(".opt").forEach(function(el){el.onclick=function(){
  sel=+el.dataset.n;quiz.querySelectorAll(".opt").forEach(function(x){x.classList.remove("on")});el.classList.add("on");
  var e=document.getElementById("exp");e.hidden=false;e.textContent=d.o[sel][1];document.getElementById("nx").hidden=false}});
 document.getElementById("nx").onclick=function(){pk[i]=sel;sel=-1;i++;i<Q.length?show():done()};
}
function done(){
 bar.style.width="100%";var w=0,c=0;
 [0,1].forEach(function(n){Q[n].o[pk[n]][2]=="w"?w++:c++});
 var b=w>c?"웜 베이스":(c>w?"쿨 베이스":"웜·쿨 중간");
 var s='<div class="res"><small style="color:var(--mut);letter-spacing:.08em">YOUR KEYWORDS</small><p class="sum">컬러는 '+b+' 성향, 첫인상 무드는 “'+Q[3].o[pk[3]][0]+'”.</p><ul>';
 Q.forEach(function(d,n){s+='<li>'+d.t.split(" · ")[1]+'<span>'+d.o[pk[n]][0]+'</span></li>'});
 s+='</ul><div class="cta">여기에 무료 진단 예약 QR 코드를 넣어주세요.</div><button class="nx" id="re">다시 하기</button></div>';
 quiz.innerHTML=s;document.getElementById("re").onclick=function(){i=0;pk=[];show()};
}
var MO=["롱패딩 레이어드,울 코트 모노톤,니트 비니 조합,와이드 데님,머플러 스타일링|롱코트,퍼 트리밍 아우터,니트 원피스,부츠컷 데님,숏패딩","카멜 코트,후드 레이어드,코듀로이 팬츠,윈터 로퍼,터틀넥|울 스커트,롱부츠,가디건 레이어드,트렌치 라이너,니트 조끼","트렌치코트,블루종,치노 팬츠,스웨트셔츠,러닝 스니커즈|트렌치 룩,버터옐로 니트,와이드 슬랙스,플랫 슈즈,크롭 재킷","파스텔 셔츠,린넨 재킷,데님 셋업,가디건,캔버스 스니커즈|플라워 원피스,라일락 컬러,셔츠 레이어드,미디 스커트,리본 디테일","테일러드 셋업,오픈칼라 셔츠,쿨 슬랙스,로퍼 코디,폴로 니트|테일러드 재킷,뉴트럴 셋업,포플린 셔츠,와이드 팬츠,샌들 힐","린넨 셔츠,반바지,반팔 니트,샌들 스타일,와이드 쇼츠|린넨 원피스,스트라이프 셔츠,슬립 스커트,버뮤다 팬츠,슬링백","윈드브레이커,쿨링 소재,아웃도어 쇼츠,방수 샌들,그래픽 티|레인부츠,바람막이,나일론 스커트,고프코어,비치 웨어","비비드 티셔츠,하와이안 셔츠,서프 쇼츠,볼캡,리조트 룩|비비드 컬러,홀터넥,리조트 원피스,커버업,스포티 샌들","세미오버 셔츠,데님 재킷,카고 팬츠,스웨트 레이어드,그레이 톤|니트 베스트,셔츠 원피스,가죽 재킷,플리츠 스커트,메리제인","코듀로이 재킷,니트 가디건,어스톤 코디,부츠 스타일,워크웨어|가을 니트,트위드 재킷,스웨이드 부츠,가죽 스커트,퍼플 포인트"];
function pin(m,k,g,v){return "https://www.pinterest.com/search/pins/?q="+encodeURIComponent("2026 "+m+"월 "+k+" "+g+" "+v)}
var tb="";for(var n=0;n<10;n++)tb+='<button>2026 '+(n+1)+'월</button>';
document.getElementById("mo").innerHTML=tb;
document.querySelectorAll("#mo button").forEach(function(b,j){b.onclick=function(){openM(j)}});
var CUR=0;
var VW={home:[".wm",".tag",".rail",".cap"],issues:["#mo","#pn"],test:["#test"],about:["#about"]};
function showView(v){Object.keys(VW).forEach(function(k){VW[k].forEach(function(s){var e=document.querySelector(s);if(e)e.style.display=k==v?"":"none"})});window.scrollTo(0,0);if(v=="home")fit()}
var MAP={top:"home",issues:"issues",test:"test",about:"about"};
document.querySelectorAll(".nav a").forEach(function(a){a.onclick=function(e){e.preventDefault();showView(MAP[a.getAttribute("href").slice(1)]||"home")}});
document.getElementById("tr").onclick=function(e){var c=e.target.closest(".cv");if(!c)return;var k=[].indexOf.call(this.children,c)%22;if(k>=12){showView("issues");openM(k-12)}};
var EXT=["jpg","jpeg","png","webp"];
function probe(base,i,ok){if(i>=EXT.length)return;var im=new Image();im.onload=function(){ok(base+"."+EXT[i])};im.onerror=function(){probe(base,i+1,ok)};im.src=base+"."+EXT[i]}
function openM(n){CUR=n;var d=MO[n].split("|"),mn=n+1,mm=String(mn).padStart(2,"0");
 document.querySelectorAll("#mo button").forEach(function(b,j){b.className=j==n?"on":""});
 var h='<h3>2026.'+mm+' \u00b7 '+KW[12+n]+'</h3><p>\uc0ac\uc9c4\uc740 images/2026-'+mm+'/ \ud3f4\ub354\uc5d0 \ub123\uc73c\uba74 \uc790\ub3d9\uc73c\ub85c \ud45c\uc2dc\ub429\ub2c8\ub2e4. \uc0ac\uc9c4\uc774 \uc5c6\ub294 \uce78\uc740 Pinterest \uac80\uc0c9 \ub9c1\ud06c\ub85c \uc5f4\ub9bd\ub2c8\ub2e4.</p>';
 [["MEN 10","\ub0a8\uc790","men",d[0].split(",")],["WOMEN 10","\uc5ec\uc790","women",d[1].split(",")]].forEach(function(g){
  h+='<h4>'+g[0]+'</h4><div class="sl">';
  g[3].forEach(function(k,j){["\ucf54\ub514","\ub8e9\ubd81"].forEach(function(v,t){var s=j*2+t,no=String(s+1).padStart(2,"0");
   h+='<a data-b="images/2026-'+mm+'/'+g[2]+'-'+no+'" data-k="'+k+'" href="'+pin(mn,k,g[1],v)+'" target="_blank" rel="noopener"><b>'+no+'</b><span>'+k+'<br><small>'+v+' \u00b7 Pinterest \u2197</small></span></a>'})});h+='</div>'});
 document.getElementById("pn").innerHTML=h;
 document.querySelectorAll("#pn .sl a").forEach(function(a){probe(a.dataset.b,0,function(src){a.className="ph";a.innerHTML='<img src="'+src+'" alt="'+a.dataset.k+'" loading="lazy"><span>'+a.dataset.k+'</span>'})})}
showView("home");
openM(0);
show();
