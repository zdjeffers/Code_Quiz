//Variable Query Selector Section
var quizStart = document.querySelector("#startQuizButton");
var highScoreButton = document.querySelector("#highScoreButton");
var timeRemainingEl = document.getElementById("timeRemaining");
var answerChoices = document.querySelector("#answerChoices");

//Global Variable Section
var questionNumber = 0;
var answerButtons = ["A: ", "B: ", "C: ", "D: "];

//Question Section:

var question1 = {
  question: "Is this question 1?",
  answer1: "Yes, Answer 1",
  answer2: "Definitely Not, Answer 2",
  answer3: "Sure! Answer 3",
  answer4: "All of the above! Answer 4"
}


//Start Timer Function:
function startTimer() {
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

function renderQuestion() {
  //answerChoices.innerHTML = "";

  for (var i = 0; i < answerButtons.length; i++) {
    var ansButton = answerButtons[i];

    var li = document.createElement("li");
    li.textContent = ansButton;
    li.setAttribute("data-index", i);


    var button = document.createElement("button");
    button.textContent = "Complete";

    li.appendChild(button);
    answerChoices.appendChild(li);
  }
}

//Start Quiz Function:
function startQuiz() {
  startTimer();
  renderQuestion();
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