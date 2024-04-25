'use strict';
 /*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎉 Correct Number!'

document.querySelector('.number').textContent =13; // get content
document.querySelector('.score').textContent =10;


document.querySelector('.guess').value = 23;  // set content

console.log(document.querySelector('.guess').value);
*/

const secretNumber = Math.trunc(Math.random()*20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    console.log(typeof guess, guess);
    if(score){
        if(!guess) {
            document.querySelector('.message').textContent = '⛔ No number!';
        } else if (secretNumber === guess){
            document.querySelector('.message').textContent='🎉 Correct Number!';
        } else if (secretNumber < guess){
            score -=1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent='📈 Too High!';
        } else if (secretNumber > guess){
            score -=1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent='📉 Too Low!';
        }
    } else {
        document.querySelector('.message').textContent='☠ You Lost!';
    }
})