
document.onkeyup = function(event) {

    // DOM Variables
    var newGameButton = document.getElementById("newGameButton");
    var placeholders = document.getElementById("placeholders");
    var guessedLetters = document.getElementById("guessedLetters");
    var guessesLeft = document.getElementById("guessesLeft");
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");

    //Game Variables
    var words = ["bilbo","fellowship","baggins","halflings","shire"];
    var guessesLeft = 6;
    var wins = 0;
    var losses = 0;
    var gameRunning = false;
    var pickedWord = ' ';
    var answerArray = [];
    var pickedRightLetter = [];
    var pickedWrongLetter = [];
    
    
   function newGame () {
       gameRunning = true;
       guessesLeft = 6;
       pickedRightLetter = [];
       pickedWrongLetter = [];
       answerArray = [];
       

       pickedWord = words[Math.floor(Math.random() * words.length)];
       
       for (var i = 0; i < pickedWord.length; i++) {
           if (pickedWord[i] === ' ') {
            answerArray.push(' ');

           } else {
              answerArray.push('_'); 
                }
               console.log(answerArray);
           }
       
        guessesLeft.textContent = guessesLeft;
        placeholders.textContent = answerArray.join(' ');
        guessedLetters.textContent = pickedWrongLetter;
        }


    function letterGuess(letter) {
        if (gameRunning === true && pickedRightLetter.indexOf(letter) === -1) {
            pickedRightLetter.push(letter);
            for (var i = 0; i < pickedWord.length; i++) {
                if (pickedWord[i].toLowerCase() === letter.toLowerCase()) {
                    answerArray[i] = pickedWord[i];
                }
            }
            placeholders.textContent = answerArray.join('');

            checkIncorrect(letter);
        }
        else {
            if (!gameRunning) {
                alert("The game is not running, click the START button to begin.");
            } 
        else {
            alert( "You've already guessed this letter, try a new one");
            }
        }
     }
 
    function checkIncorrect(letter) {
        if (answerArray.indexOf(letter.toLowerCase()) === -1 && answerArray.indexOf(letter.toUpperCase()) === -1) {
            guessesLeft--;
            pickedWrongLetter.push(letter);
            guessedLetters.textContent = pickedWrongLetter.join('');
            guessesLeft.textContent = guessesLeft;
        }
        checkLoss();
    }
    function checkLoss() {
        if ( guessesLeft === 0) {
            losses++;
            gameRunning = false;
            losses.textContent = losses;
        }
        checkWin();
    }
    function checkWin() {
        if (pickedWord.toLowerCase() === answerArray.join('').toLowerCase()) {
            wins++;
            gameRunning = false;
            wins.textContent = wins;
        }     
    }
newGameButton.addEventListener("click", newGame);

// These instructions trigger letter guess on the keyboard to be acceptable characters.
document.onkeyup = function(event) {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
        letterGuess(event.key);
    }
}

}

