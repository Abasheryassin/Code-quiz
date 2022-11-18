// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
var startEl = document.getElementById('button');
var timerEl = document.getElementById('timer');
var questionBox = document.getElementById('box');
var displayScore = document.getElementById('high');
var finalScore = document.getElementById('score');
var userInital = document.getElementById('user');
var timer;
var timeLeft;
var shownAnswer;
var shownQuestion;
var answerOptions;
var displayHighscores;
var initalInput;
var highscores;
var check;
var x = 0;
var score = 0;
var allHighscores = [];
var inital;

var questions = [
    {title: "Hoe do you retrive informaiton from local storage?",
    choices: [".getAttribute", ".setAttribute", ".giveAttribute", ".saveAttribute"],
    answer: ".setAttribute"},
    {title: "What does 's' stand for in js",
    choices: ["sample", "save", "sans", "script"],
    answer: "script"},
    {title: "How do you display information on the console",
    choices: ["console.log()", "console.show()", "console.give()", "IDK"],
    answer: "console.log()"},
    {title: "What symbols is used to house an object",
    choices: ["''", "()", "{}", "[]"],
    answer: "{}"}
]

// WHEN I click the start button
// THEN a timer starts and I am presented with a question
function startGame() {
    // Game starts to run
    timeLeft = 60;
    startEl.setAttribute('class','hide');

    startTimer();
    showQuestions();
}

function startTimer() {
    // Timer starters counting down
    timer = setInterval(function() {
        timeLeft--;
        timerEl.textContent = 'Timer: ' + timeLeft;

        if (timeLeft === 0 || score != 0) {
            timerEl.textcontent = 'Timer: 0';
            clearInterval(timer);
            endGame(score);
        }
    }, 1000);
}

function showQuestions() {

    shownQuestion = document.createElement('h1');
    answerOptions = document.createElement('ol');
    shownQuestion.textContent = questions[x].title;
    questionBox.appendChild(shownQuestion);
    questionBox.appendChild(answerOptions);
    
    for (i = 0; i <= 3; i++){
        // add event listener to buttons
        shownAnswer = document.createElement('li');
        shownAnswer.textContent = questions[x].choices[i];
        
        var chosen = document.createElement('button');
        chosen.textContent = ' Answer';
        
        shownAnswer.appendChild(chosen);
        answerOptions.appendChild(shownAnswer);
    }
}

// TODO: WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
function checkAnswer(event) {
    var element = event.target;
    
    if (element.matches('button') === true) {
        var chosenAnswer = element.parentElement.textContent;
        check = chosenAnswer.includes(questions[x].answer);
        if (!check) {
            timeLeft -= 10;
        }
    }
    shownQuestion.remove();
    answerOptions.remove();
    if (x < 3) {
        x++;
        showQuestions(x);
    } else {
        shownQuestion.setAttribute('class', 'hide');
        answerOptions.setAttribute('class', 'hide');
        score = timeLeft;
        endGame(score);
    }
}

// WHEN the game is over
// THEN I can save my initials and my score
function endGame(score) {
    // Display socre and prompt for initals
    displayScore.classList.remove('hide');
    finalScore.textContent = 'Congradulations you scored ' + score;

    userInital.addEventListener('submit', displayHighscores);
    inital = userInital.value;
}
console.log(inital);
function displayHighscores() {

}
// need to add event listener for the button to start the game
startEl.addEventListener('click', startGame);
// need to add event listener for answer buttons
questionBox.addEventListener('click', checkAnswer);