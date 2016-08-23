// get the guess form value
// generate a random number
// maybe create a function that will compare the guess with the randomn number
// see if you can get the dom to tell you if you got the guess correct or not.
// can I put in a range?

var inputField = document.querySelector('#guess').value

var convertedNumber = parseInt(inputField);

var min = 0;
var max = 10;

var random = randoNumber(min,max)

var submitButton = document.querySelector('#submit-guess-btn');

var lastGuess = document.querySelector('last-guess-number');

var tryAgain = document.querySelector('.try-again');


function randoNumber(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}

submitButton.addEventListener('click', function () {
  if ( convertedNumber < random ) {
    tryAgain.innerText = 'That number was too low. Guess again.';
  }
  else if ( convertedNumber > random ) {
    tryAgain.innerText = 'That number was too high. Guess again.'
  }
  else {
    tryAgain.innerText = "Correct!"
  };
});


// if ( convertedNumber < random ) {
//   tryAgain.innerText = 'That number was too low. Guess again.';
// }
// else if ( convertedNumber > random ) {
//   tryAgain.innerText = 'That number was too high. Guess again.'
// }
// else {
//   tryAgain.innerText = "Correct!"
// };








// function randomNumber(min, max) { return Math.floor((Math.random() * max) + min);
// }
//
// function getRandomNumber(min, max) {
//
// }
