//Variable Query Selector Section
var quizStart = document.querySelector("#startQuizButton");
var highScoreButton = document.querySelector("#highScoreButton");
var timeRemainingEl = document.getElementById("timeRemaining");

//Global Variable Section
var questionNumber = 0;

//Start Timer Function:

function startTimer () {
    var timeRemaining = 60;
    var timeInterval = setInterval(function () {
        if (timeRemaining > 1) {
          timeRemainingEl.textContent = timeRemaining + ' seconds remaining';
          timeRemaining--;
        } else if (timeRemaining === 1) {
          timeRemainingEl.textContent = timeRemaining + ' second remaining';
          timeRemaining--;
        } else {
          timeRemainingEl.textContent = '';
          clearInterval(timeInterval);
        }
      }, 1000);
}

//Start Quiz Function:
function startQuiz() {
    startTimer();
    window.alert("This Worked!");
    // while (i = 0, i < questionBank.length, i++) {
    // }
};


//High Score List Function
function displayHighScores() {

}

//Event Listeners for buttons clicked
quizStart.addEventListener("click", startQuiz);
highScoreButton.addEventListener("click", displayHighScores);