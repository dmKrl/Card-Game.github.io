(()=>{"use strict";const e=document.querySelector("header"),t=["./static/image/sixHearts.png","./static/image/sevenHearts.png","./static/image/eightHearts.png","./static/image/nineHearts.png","./static/image/tenHearts.png","./static/image/jackHearts.png","./static/image/queenHearts.png","./static/image/kingHearts.png","./static/image/aceOfHearts.png","./static/image/sixClubs.png","./static/image/sevenClubs.png","./static/image/eightClubs.png","./static/image/nineClubs.png","./static/image/tenClubs.png","./static/image/jackClubs.png","./static/image/queenClubs.png","./static/image/kingClubs.png","./static/image/aceOfClubs.png","./static/image/sixDiamonds.png","./static/image/sevenDiamonds.png","./static/image/eightDiamonds.png","./static/image/nineDiamond.png","./static/image/tenDiamonds.png","./static/image/jackDiamond.png","./static/image/queenDiamonds.png","./static/image/kingDiamonds.png","./static/image/aceOfDiamonds.png","./static/image/sixSpades.png","./static/image/sevenSpades.png","./static/image/eightSpades.png","./static/image/nineSpades.png","./static/image/tenSpades.png","./static/image/jackSpades.png","./static/image/queenSpades.png","./static/image/kingSpades.png","./static/image/aceOfSpades.png"],a=function(){const e=Math.floor(35*Math.random());return t[e]},n=document.querySelector(".game");function i(e){const t=[],n=[];setTimeout((()=>{var a;0===(a=t).filter(((e,t)=>a.indexOf(e)!==t)).length&&i(e)}),100),e.map((e=>{e.classList.toggle("level-open");const i=a();!function(e,t){t.push(e)}(i,t),e.style.backgroundImage=`url(${i})`,setTimeout((()=>{e.classList.toggle("level-open"),e.style.backgroundImage="url(/static/image/cardShirt.png)"}),5e3),e.addEventListener("click",(()=>{e.classList.toggle("level-open"),e.style.backgroundImage=`url(${i})`,n.push(e.style.backgroundImage),setTimeout((()=>{2===n.length&&n[0]===n[1]&&alert("Ты выиграл"),2===n.length&&n[0]!==n[1]&&alert("Ты проиграл")}),100)}))}))}const s=function(e,t,a){e.innerHTML='\n  <div class="level">      \n    <div class="level-value">\n    </div>\n  </div>';const s=document.querySelector(".level-value");s.classList.add(`level-${a}`);let c=0;do{const e=n.content.cloneNode(!0);e.querySelector(".level-card").classList.add("level-card-shirt"),s.appendChild(e),c++}while(c<t);const l=document.querySelectorAll(".level-card");i(Array.from(l))},c=document.querySelector(".app"),l=function(t){e.innerHTML='\n  <div class="header">\n  <div class="header-box">\n  <div>\n    <p class="header-text header-text-count">00<span>min</span>.00<span>sec</span></p>\n  </div>\n    <button class="button-start button-start-again">Начать заново</button>\n  </div>\n  </div>\n\n  ',document.querySelector(".button-start-again").addEventListener("click",(()=>{e.innerHTML="",r()})),function(e){c.innerHTML="";const t=[6,12,18];switch(e){case"easy":s(c,t[0],e);break;case"medium":s(c,t[1],e);break;case"hard":s(c,t[2],e)}}(t)},g=document.querySelector(".app"),o=document.querySelector("header");function r(){o.innerHTML="",g.innerHTML='\n<div class="container">\n  <div class="main">\n    <p class="main-text">Выберите сложность</p>\n    <div class="main-checbox">\n        <input type="radio" id="easy" name="difficulty"/><label\n          for="easy"\n          class="main-checbox-text"\n          >1</label\n        >\n        <input type="radio" id="medium" name="difficulty" /><label\n          for="medium"\n          class="main-checbox-text"\n          >2</label\n        >\n        <input type="radio" id="hard" name="difficulty" /><label\n          for="hard"\n          class="main-checbox-text"\n          >3</label\n        >\n    </div>\n    <button class="button-start">Старт</button>\n  </div>\n</div>\n\n',document.querySelector(".main").addEventListener("click",(e=>{const t=e.target;if(t.closest(".main-checbox-text")&&localStorage.setItem("checked",t.getAttribute("for")),t.closest(".button-start")){let e=localStorage.getItem("checked");l(e)}}))}r()})();