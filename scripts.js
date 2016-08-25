
var minInput = document.querySelector('#min-input');
var maxInput = document.querySelector('#max-input');
var guessNumberText = document.querySelector('.guess-a-number');
var submitButton = document.querySelector('#submit-guess-btn');
var clearButton = document.querySelector('#clear-btn');
var resetGameButton = document.querySelector('#reset-game-btn');
var lastGuess = document.querySelector('.last-guess-number');
var tryAgain = document.querySelector('.try-again');
var submitRangeButton = document.querySelector('#submit-range-btn');
var inputArea = document.querySelector('#guess');

var convertedInput;
var lowNumber;
var highNumber;
var random;
var newLowNum;
var newHighNum;
var newRandomNum;


clearButton.disabled = true;
resetGameButton.disabled = true;

function randoNumber(min, max) {
   return Math.floor(Math.random() * (max - min)) + max;
}

function convertInputGuess() {
  return parseInt(inputArea.value);
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



submitRangeButton.addEventListener('click', function() {
  lowNumber = minNumber();
  highNumber = maxNumber();
  random = randoNumber(lowNumber, highNumber);

  guessNumberText.innerText = 'Guess a number between ' + lowNumber + ' and ' + highNumber;
});

submitButton.addEventListener('click', function () {
  guessNumberText.innerText = "Your last guess was...";
  convertedNumber = convertInputGuess();
  lastGuess.innerText = convertedNumber;

  if ( convertedNumber < random ) {
    tryAgain.innerText = 'Sorry, that guess is too low. Try a higher number.';
  }
  else if ( convertedNumber > random ) {
    tryAgain.innerText = 'Sorry, that guess is too high. Try a lower number.'
  }
  else if ( convertedNumber === random ) {
    tryAgain.innerText = 'Correct!';
    increaseMax();
    decreaseMin();
    guessNumberText.innerText = 'Guess a number between ' + newLowNum + ' and ' + newHighNum;
    newRandomNum = randoNumber(newLowNum, newHighNum);
    console.log(newRandomNum);
  }
  else {
    tryAgain.innerText = 'Error. You must guess a number.'
  };

  if ( convertedNumber > maxNumber ) {
    tryAgain.innerText = "Only guess a number between " + minNumber + " and " + maxNumber;
    lastGuess.innerText = "Uh oh!"
  }
  if ( convertedNumber < minNumber ) {
    tryAgain.innerText = "Only guess a number between " + minNumber + " and " + maxNumber;
    lastGuess.innerText = "Uh oh!"
  }
});



inputArea.onkeyup = function() {
  clearButton.disabled = false
  resetGameButton.disabled = false
}

clearButton.addEventListener('click', function () {
  document.querySelector('#guess').value = '';
  if ( inputArea.value === '' ) {
    clearButton.disabled = true;
  }
});

resetGameButton.addEventListener('click', function () {
  location.reload();
});
