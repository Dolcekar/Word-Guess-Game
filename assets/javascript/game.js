
document.onkeyup = function(event) {

    // DOM Variables
 
    var placeholders = document.getElementById("placeholders");
    var guessedLetters = document.getElementById("wrongLetters");
    var guessesLeft = document.getElementById("guessesLeft");
    var wins = document.getElementById("wins");
    var losses = document.getElementById("losses");

    //Game Variables
    var words = ["bilbo","fellowship","baggins","halflings","shire"];
    var answerArray =[];
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
           
               answerArray.push('_');
               console.log(answerArray);
           }
       
        remainingAttempts.textContent = remainingAttempts;
        answerArray.textContent = answerArray.join(' ');
        guessesLeft.textContent = guessesLeft;
        pickedWrongLetter.textContent = guessedLetters;
        }

} 