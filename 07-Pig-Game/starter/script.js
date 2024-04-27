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


let scores, currentScore, playing, currentPlayer;

const init = function () {
  //starting conditions
  diceElement.classList.add('hidden');
  scores = [0, 0];
  currentScore = 0;
  currentPlayer = 0;
  playing = true;

  score0Element.textContent = 0;
  score1Element.textContent = 0;
  current0Element.textContent = 0;
  current1Element.textContent = 0;

  player0Element.classList.remove('player--winner');
  player1Element.classList.remove('player--winner');
  player0Element.classList.add('player--active');
  player1Element.classList.remove('player--active');
}
init();

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
    if (scores[currentPlayer] >= 100) {
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

// my solution 
/*
btnNew.addEventListener('click', function () {
  playing = true;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore = 0;
  playing = true;
  for (let i = 0; i < scores.length; i += 1) {
    scores[i] = 0;
    currentPlayer = i;
    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--winner');
    document.querySelector(`.player--${currentPlayer}`).classList.remove('player--active');
    document.getElementById(`current--${currentPlayer}`).textContent = currentScore;
  }
  currentPlayer = 0;
  player0Element.classList.add('player--active');
})*/
btnNew.addEventListener('click', init);