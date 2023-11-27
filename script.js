'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
console.log(secretNumber);
document.querySelector('.number').value = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess);

  if (!guess) {
    document.querySelector('.message').innerHTML = 'please enter a number';
  } else if (guess > secretNumber) {
    document.querySelector('.message').textContent = 'number too High';
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'number too Low';
  } else {
    document.querySelector('.message').textContent = 'hurray correct number';
  }
});


