// get the guess form value
// generate a random number
// maybe create a function that will compare the guess with the randomn number
// see if you can get the dom to tell you if you got the guess correct or not.
// can I put in a range?


var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');


var guessNumberText = document.querySelector('.guess-a-number');

var submitButton = document.querySelector('#submit-guess-btn');

var clearButton = document.querySelector('#clear-btn');

var resetGameButton = document.querySelector('#reset-game-btn');

var lastGuess = document.querySelector('.last-guess-number');

var tryAgain = document.querySelector('.try-again');

var submitRangeButton = document.querySelector('#submit-range-btn');

var lowNumber;
var highNumber;
var random;
// var random = randoNumber(minNumber, maxNumber);

// document.querySelector('.guess-a-number').innerText = 'Guess a number between ' + lowNumber + ' and ' + highNumber;


function randoNumber(min, max) {
   return Math.floor(Math.random() * (max - min)) + min;
}

function minNumber() {
  return parseInt(minInput.value);
}

function maxNumber() {
  return parseInt(maxInput.value);
}


submitRangeButton.addEventListener('click', function() {
  lowNumber = minNumber();
  highNumber = maxNumber();
  random = randoNumber(lowNumber, highNumber);

  document.querySelector('.guess-a-number').innerText = 'Guess a number between ' + lowNumber + ' and ' + highNumber;
});

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
  else if ( convertedNumber === random ) {
    tryAgain.innerText = 'Correct!'
    //call function set new min and max values

  }
  else {
    tryAgain.innerText = 'Error. You must guess a number.'
  }
  ;

  if ( convertedNumber > maxNumber ) {
    tryAgain.innerText = "Only guess a number between " + minNumber + " and " + maxNumber;
    lastGuess.innerText = "Uh oh!"
  }
  if ( convertedNumber < minNumber ) {
    tryAgain.innerText = "Only guess a number between " + minNumber + " and " + maxNumber;
    lastGuess.innerText = "Uh oh!"
  }
});


clearButton.disabled = true;
resetGameButton.disabled = true;

var inputArea = document.querySelector('#guess');
inputArea.onkeyup = function() {
  clearButton.disabled = false
  resetGameButton.disabled = false
}

clearButton.addEventListener('click', function () {
  document.querySelector('#guess').value = '';
  var inputArea = document.querySelector('#guess').value;
  if ( inputArea === '' ) {
    clearButton.disabled = true;
  }
});

resetGameButton.addEventListener('click', function () {
  location.reload();
});
