'use strict';

//
const startBtn = document.querySelector('.js-startBtn');
const cardsInput = document.querySelectorAll('.js-form__radio');
const cardsList = document.querySelector('.js-cards-list');

//DEFAULT GAME DIFFICULTY
let cardsNumber = 4;
localStorage.setItem('gameDifficulty', cardsNumber);

//CREATE LISTENER IN EVERY RADIUS OF THE ARRAY
function selectCards () {
  for (const input of cardsInput) {
    input.addEventListener('click', chooseDifficulty);
  }
}
selectCards();

//SELECT CLICKED RADIUS AS DIFFICULTY
function chooseDifficulty (event) {
  cardsNumber = parseInt(event.currentTarget.value);
  localStorage.setItem('gameDifficulty', cardsNumber);
}

//GAME FUNCTION WITH API
function game () {
  const endpoint = `https://raw.githubusercontent.com/Adalab/cards-data/master/${cardsNumber}.json`;
  fetch(endpoint)
    .then(response => response.json())
    .then(data => {
      let card = '';
      for (const item of data) {
        let cardUrlBack = 'https://via.placeholder.com/160x195/30d9c4/ffffff/?text=ADALAB';
        let cardNameBack = 'Cara trasera de la carta';
        let cardUrlFront = item.image;
        let cardName = item.name;
        let cardPair = item.pair;

        card += `<li>
                  <img class="card__img hidden"
                  src="${cardUrlFront}"
                  alt="${cardName}"
                  data-pair="${cardPair}">
                  </img>
                  <img class="card__img"
                  src="${cardUrlBack}"
                  alt="${cardNameBack}"
                  data-pair="${cardPair}">
                  </img>
                </li>`;
      }
      cardsList.innerHTML = card;
    });
}

//LISTENERS
startBtn.addEventListener('click', game);
