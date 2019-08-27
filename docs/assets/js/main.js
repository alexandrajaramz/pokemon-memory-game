"use strict";const startBtn=document.querySelector(".js-startBtn"),cardsInput=document.querySelectorAll(".js-form__radio"),cardsList=document.querySelector(".js-cards-list");let cardsNumber=4;function selectCards(){for(const t of cardsInput)t.addEventListener("click",chooseDifficulty)}function chooseDifficulty(t){cardsNumber=parseInt(t.currentTarget.value),localStorage.setItem("gameDifficulty",cardsNumber)}function game(){fetch(`https://raw.githubusercontent.com/Adalab/cards-data/master/${cardsNumber}.json`).then(t=>t.json()).then(t=>{let e="";for(const c of t){let t="https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB",a="Cara trasera de la carta",r=c.image,s=c.name,n=c.pair;e+=`<li class="cards__list-card js-card">\n                  <img class="card__img js-card-img hidden"\n                  src="${r}"\n                  alt="${s}"\n                  data-pair="${n}">\n                  </img>\n                  <img class="card__img js-card-img"\n                  src="${t}"\n                  alt="${a}"\n                  data-pair="${n}">\n                  </img>\n                </li>`}cardsList.innerHTML=e;const c=document.querySelectorAll(".js-card");for(const t of c)t.addEventListener("click",changeImg)})}function changeImg(t){const e=t.currentTarget.querySelectorAll(".js-card-img");for(const t of e)t.classList.toggle("hidden")}localStorage.setItem("gameDifficulty",cardsNumber),selectCards(),startBtn.addEventListener("click",game);