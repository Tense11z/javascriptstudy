'use strict';

// selecting elements
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.getElementById('score--1');
const current0Element = document.getElementById('current--0');
const current1Element = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//starting conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
const scores = [0, 0];
let currentScore = 0;
let currentPlayer = 0;
let playing = true;

const switchPlayer = function () {
  document.getElementById(`current--${currentPlayer}`).textContent = 0;
  currentScore = 0;
  currentPlayer = currentPlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
}


// Rolling dice fucntionality
btnRoll.addEventListener('click', function () {
  if (playing) {
    // 1. Generating a random dice roll
    const dice = Math.trunc(Math.random() * 6) + 1;

    // 2. Display dice
    diceElement.classList.remove('hidden');
    diceElement.src = `dice-${dice}.png`;

    // 3. Check for rolled 1: if true, switch to next player
    if (dice !== 1) {
      // add dice to current score
      currentScore += dice;
      document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
    } else {
      // switch to next score
      switchPlayer();
    }
  }

});

btnHold.addEventListener('click', function () {
  if (playing) {
    // 1. Add current score to active player's score
    scores[currentPlayer] += currentScore;
    document.getElementById(`score--${currentPlayer}`).textContent = scores[currentPlayer];

    // 2. Check if score is >=100
    if (scores[currentPlayer] >= 20) {
      playing = false;
      document.querySelector(`.player--${currentPlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
      diceElement.classList.add('hidden');
    } else {
      // switch to the next player
      switchPlayer();
    }
  }
})