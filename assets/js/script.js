// GIVEN I am taking a code quiz
var startEl = document.getElementById('button');
var timerEl = document.getElementById('timer');
var timeLeft = 60;
// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function startGame() {
    // Game starts to run
    startTimer();
    showQuestions();
    
    endGame();
    console.log("Inside startGame");
}

function startTimer() {
    // Timer starters counting down
    
    console.log("Inside startTimer");
}

function showQuestions() {
    //First random question appers
    
    console.log("Inside showQuestions");
}

// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
function endGame() {
    // Ends game if criteria if all questions answered or timer runs out
    
    console.log('Inside endGame');
}
// TODO: WHEN I answer a question
// THEN I am presented with another question


// WHEN the game is over
// THEN I can save my initials and my score


// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock








// need to add event listener for the button to start the game
startEl.addEventListener('click', startGame);
// need to add event listener for answer buttons