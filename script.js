//Variable Query Selector Section
var quizStart = document.querySelector("#startQuizButton");
var highScoreButton = document.querySelector("#highScoreButton");
var timeRemainingEl = document.getElementById("timeRemaining");
var answerChoices = document.querySelector("#answerChoices");
var questionSection = document.querySelector(".questionSection");
var introduction = document.querySelector(".introduction");
var titleSection = document.querySelector(".titleSection");


//Answer Button Selection Section
var answerButton1 = document.getElementById("button1");
var answerButton2 = document.getElementById("button2");
var answerButton3 = document.getElementById("button3");
var answerButton4 = document.getElementById("button4");

//Global Variable Section
var questionNumber = 0;
var answerButtons = [];
answerButtons.push(answerButton1);
answerButtons.push(answerButton2);
answerButtons.push(answerButton3);
answerButtons.push(answerButton4);


//Question Section:
var questions = [
  {
    question: "Is this question 1?",
    answers: ["Yes, Answer 1", "Definitely Not, Answer 2", "Sure! Answer 3", "All of the above! Answer 4"],
    correctAnswer: 0,
  },
  {
    question: "Is this question 2?",
    answers: ["Yes, Answer 1", "Definitely Not, Answer 2", "Sure! Answer 3", "All of the above! Answer 4"],
    correctAnswer: 1,
  },
  {
    question: "Is this question 3?",
    answers: ["Yes, Answer 1", "Definitely Not, Answer 2", "Sure! Answer 3", "All of the above! Answer 4"],
    correctAnswer: 2,
  },
  {
    question: "Is this question 4?",
    answers: ["Yes, Answer 1", "Definitely Not, Answer 2", "Sure! Answer 3", "All of the above! Answer 4"],
    correctAnswer: 3,
  },
]

questionSection.style.display = "none";

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

//Hides the introduction and title section, renders question section
function hideIntro() {
  titleSection.style.display = "none";
  introduction.style.display = "none";
  quizStart.style.display = "none";
  questionSection.style.display = "block";
}

//Question Generate Section
function nextQuestion () {
  if (questionNumber < questions.length) {
    questionList();
  } else {
    displayHighScores();
  }
}

function showQuestion() {
  questionSection.textContent = questions[questionNumber].question;
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = questions[questionNumber].answers[i];
    console.log(i);
  }
}

//Start Quiz Function:
function startQuiz() {
  startTimer();
  hideIntro();
  showQuestion();
  console.log("This Worked!");
  // while (i = 0, i < questionBank.length, i++) {
  // }
};


//High Score List Function
function displayHighScores() {

}

//Event Listeners for buttons clicked
quizStart.addEventListener("click", startQuiz);
highScoreButton.addEventListener("click", displayHighScores);