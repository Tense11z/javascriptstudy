'use strict';
 /*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent='🎉 Correct Number!'

document.querySelector('.number').textContent =13; // get content
document.querySelector('.score').textContent =10;


document.querySelector('.guess').value = 23;  // set content

console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random()*20) + 1;

let score = 20;
let highScore = 0;



document.querySelector('.check').addEventListener('click', function() {
    const guess = Number(document.querySelector('.guess').value);
    if(score>1){
        
        if(!guess) { // incorrect value
            document.querySelector('.message').textContent = '⛔ No number!';
       
        } else if (secretNumber === guess){ // win condition
            document.querySelector('.message').textContent ='🎉 Correct Number!';
            document.querySelector('.number').textContent = secretNumber;
            document.querySelector('body').style.backgroundColor = '#60b347';
            document.querySelector('.number').style.width = '30rem';
            if (highScore < score){ highScore = score;
            document.querySelector('.highscore').textContent = highScore;}

        } else if (secretNumber !== guess){
            document.querySelector('.message').textContent= guess > secretNumber ? '📈 Too High!' : '📉 Too Low!';
            document.querySelector('body').style.backgroundColor = '#222';
            score -=1;
            document.querySelector('.score').textContent = score;
        }/*
         else if (secretNumber < guess){ // when guess is higher
            score -=1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent='📈 Too High!';
            document.querySelector('body').style.backgroundColor = '#222';
        
        } else if (secretNumber > guess){ // when guess is lower
            score -=1;
            document.querySelector('.score').textContent = score;
            document.querySelector('.message').textContent='📉 Too Low!';
            document.querySelector('body').style.backgroundColor = '#222';
        }*/
    } else { // game is lost
        score -=1;
        document.querySelector('.score').textContent = score;
        document.querySelector('.message').textContent='☠ You Lost!';
        document.querySelector('body').style.backgroundColor = '#b34747';
    }
})

document.querySelector('.again').addEventListener('click', function(){
    score=20;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('.message').textContent = 'Start guessing...';
    document.querySelector('body').style.backgroundColor = '#222';
    document.querySelector('.number').style.width = '15rem';
    secretNumber = Math.trunc(Math.random()*20) + 1;
})