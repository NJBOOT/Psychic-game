var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessed = [];
var computerGuess = letters[Math.floor(Math.random() * letters.length)];
console.log(computerGuess);

var userGuesses = document.getElementById("guesses")
var userWins = document.getElementById("win-count")
var userLosses = document.getElementById("loss-count")
var userGuessesLeft = document.getElementById("guesses-left")

function restartGame() {
    computerGuess = letters[Math.floor(Math.random() * letters.length)];
    guessesLeft = 9;
    guessed = [];
}

function display() {
    userGuessesLeft.innerHTML = guessesLeft;
    userWins.innerHTML = wins;
    userLosses.innerHTML = losses;
}

display();
document.onkeyup = function (event) {

    var userGuess = event.key;

    if (letters.indexOf(userGuess) > -1)
        if ((userGuess === computerGuess) && (guessesLeft > 0)) {
            wins++;
            userWins.innerHTML = wins;
            restartGame();


        } else if ((userGuess !== computerGuess) && (guessesLeft > 0)) {
            guessesLeft--;
            userGuessesLeft.innerHTML = guessesLeft;
            guessed.push(userGuess);
            userGuesses.innerHTML = guessed;
        }
        else {
            losses++;
            userLosses.innerHTML = losses;
            restartGame();
        }
}





