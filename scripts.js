
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');
var submitBox = document.querySelector('.min-max-area');
var guessNumberText = document.querySelector('.guess-a-number');
var submitButton = document.querySelector('#submit-guess-btn');
var clearButton = document.querySelector('#clear-btn');
var resetGameButton = document.querySelector('#reset-game-btn');
var lastGuess = document.querySelector('.last-guess-number');
var tryAgain = document.querySelector('.try-again');
var submitRangeButton = document.querySelector('#submit-range-btn');
var inputArea = document.querySelector('#guess');

var lowNumber;
var highNumber;
var random;
var newLowNum;
var newHighNum;


function randoNumber(min, max) {
   return Math.floor(Math.random() * (lowNumber - highNumber)) + highNumber;
}

function minNumber() {
  return parseInt(minInput.value);
}

function maxNumber() {
  return parseInt(maxInput.value);
}

function increaseMax () {
  newHighNum = highNumber = highNumber + 10;
  return newHighNum;
}

function decreaseMin () {
  newLowNum = lowNumber = lowNumber - 10;
  return newLowNum;
}

guessNumberText.style.visibility = "hidden";
clearButton.disabled = true;
resetGameButton.disabled = true;

submitRangeButton.addEventListener('click', function() {
  lowNumber = minNumber();
  highNumber = maxNumber();
  random = randoNumber(lowNumber, highNumber);

  guessNumberText.innerText = 'Guess a number between ' + lowNumber + ' and ' + highNumber;

  submitBox.style.visibility = "hidden";
  guessNumberText.style.visibility = "visible";
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
    tryAgain.innerText = 'Sorry, that guess is too high. Try a lower number.';
  }
  else if ( convertedNumber === random ) {
    tryAgain.innerText = 'Correct!'
    increaseMax();
    decreaseMin();
    random = randoNumber(lowNumber, highNumber);
    document.querySelector('.guess-a-number').innerText = 'Guess a number between ' + newLowNum + ' and ' + newHighNum
  }
  else {
    tryAgain.innerText = 'Error. You must guess a number.'
  };

  if ( convertedNumber > highNumber ) {
    tryAgain.innerText = "Only guess a number between " + lowNumber + " and " + highNumber;
    lastGuess.innerText = "Uh oh!";
  }
  else if ( convertedNumber < lowNumber ) {
    tryAgain.innerText = "Only guess a number between " + lowNumber + " and " + highNumber;
    lastGuess.innerText = "Uh oh!";
  };
});

inputArea.onkeyup = function() {
  clearButton.disabled = false
  resetGameButton.disabled = false
}

clearButton.addEventListener('click', function () {
  inputArea.value = '';
  if ( inputArea.value === '' ) {
    clearButton.disabled = true;
  }
});

resetGameButton.addEventListener('click', function () {
  location.reload();
});
