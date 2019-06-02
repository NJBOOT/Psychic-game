var letters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];

var userGuesses = document.getElementById("guesses")
var userLosses = document.getElementById("loss-count")
var userGuessesLeft = document.getElementById("guesses-left")

function updateWins() {
    document.getElementById("win-count").innerHTML = wins;
  }

function restartGame () {
}
var computerGuess = letters[Math.floor(Math.random() * letters.length)]

document.onkeyup = function(event) {

var userGuess = event.key;

if (letters.indexOf(userGuess) > -1)
    if ((userGuess === computerGuess) && (guessesLeft > 0)) {
        wins++;
        updateWins();
        computerGuess = letters[Math.floor(Math.random() * letters.length)];
        
    } else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
        guessesLeft--;
        userGuessesLeft.innerHTML = guessesLeft;
        guessed.push(userGuess);
        console.log(guessed);
    }
    else {
        losses++;
        userLosses.innerHTML = losses
        guessesLeft = 9;
        guessed = [];
        computerGuess = letters[Math.floor(Math.random() * letters.length)]
    }
}





