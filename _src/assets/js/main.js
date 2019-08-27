'use strict';

const startBtn = document.querySelector('.js-startBtn');
const cardsInput = document.querySelectorAll('.js-form__radio');
const endpoint = `https://raw.githubusercontent.com/Adalab/cards-data/master/:NUMERO.json`;

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

}

//LISTENERS
startBtn.addEventListener('click', game);
