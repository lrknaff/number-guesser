// get the guess form value
// generate a random number
// maybe create a function that will compare the guess with the randomn number
// see if you can get the dom to tell you if you got the guess correct or not.
// can I put in a range?


var min = 0;
var max = 10;

var random = randoNumber(min,max)

var guessNumberText = document.querySelector('.guess-a-number')

var submitButton = document.querySelector('#submit-guess-btn');

var clearButton = document.querySelector('#clear-btn');

var resetGameButton = document.querySelector('#reset-game-btn')

var lastGuess = document.querySelector('.last-guess-number');

var tryAgain = document.querySelector('.try-again');


document.querySelector('.guess-a-number').innerText = 'Guess a number between ' + min + ' and ' + max;

function randoNumber(min, max){
   return Math.floor(Math.random() * (max - min)) + min;
}

submitButton.addEventListener('click', function () {
  guessNumberText.innerText = "Your last guess was...";
  var inputField = document.querySelector('#guess').value
  var convertedNumber = parseInt(inputField);
  lastGuess.innerText = convertedNumber;

  if ( convertedNumber < random ) {
    tryAgain.innerText = 'Sorry, that guess is too low. Try a higher number.';
  }
  else if ( convertedNumber > random ) {
    tryAgain.innerText = 'Sorry, that guess is too high. Try a lower number.'
  }
  else {
    tryAgain.innerText = "Correct!"
  };

  if ( convertedNumber > max ) {
    tryAgain.innerText = "Only guess a number between " + min + " and " + max;
    lastGuess.innerText = "Uh oh!"
  }
  if ( convertedNumber < min ) {
    tryAgain.innerText = "Only guess a number between " + min + " and " + max;
    lastGuess.innerText = "Uh oh!"
  }
});

clearButton.addEventListener('click', function () {
  location.reload();
});

resetGameButton.addEventListener('click', function () {
  location.reload();
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
