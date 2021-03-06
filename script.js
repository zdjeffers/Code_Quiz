//Variable Query Selector Section
var quizStart = document.querySelector("#startQuizButton");
var highScoreButton = document.querySelector("#highScoreButton");
var timeRemainingEl = document.getElementById("timeRemaining");
var questionSection = document.querySelector(".questionSection");
var introduction = document.querySelector(".introduction");
var titleSection = document.querySelector(".titleSection");
var answerFeedback = document.querySelector(".answerFeedback");
var highScoreSection = document.querySelector(".highScoreSection");
var finalScore = document.getElementById("finalScore");
var submitButton = document.getElementById("submitButton");
var highScoresList = document.querySelector("highScoreList")
var highScoreIndex = document.querySelector(".highScoreIndex");
var homeButton = document.getElementById("homeButton");
var askedQuestion = document.querySelector(".askedQuestion");
var questionsRight = 0;


//Answer Button Selection Section
var answerButton1 = document.getElementById("button1");
var answerButton2 = document.getElementById("button2");
var answerButton3 = document.getElementById("button3");
var answerButton4 = document.getElementById("button4");

//Global Variable Section
var questionNumber = 0;
var answerButtons = [answerButton1, answerButton2, answerButton3, answerButton4];



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
highScoreSection.style.display = "none";
highScoreIndex.style.display = "none";

//Start Quiz Function:
function startQuiz() {
  startTimer();
  hideIntro();
  showQuestion();
};

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
    } else if (questionNumber = questionNumber.length) {}
    else {
      timeRemainingEl.textContent = '';
      clearInterval(timeInterval);
      enterHighScore();
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

//Call the next question
function nextQuestion() {
  if (questionNumber < questions.length) {
    showQuestion();
  } else {
    timeRemainingEl.textContent = '';
    enterHighScore();
  }
}


//Show the question
function showQuestion() {
  askedQuestion.textContent = questions[questionNumber].question;
  for (var i = 0; i < answerButtons.length; i++) {
    answerButtons[i].textContent = questions[questionNumber].answers[i];
  }
};

function checkAnswer(selection) {
  var correct = questions[questionNumber].correctAnswer;
  if (selection === correct) { 
    questionsRight += 1;
    var choice = document.getElementById("answerFeedback");
    var displayText = document.createTextNode("Correct!");
    choice.appendChild(displayText);
  } else {
    timeRemaining -= 10;
    var choice = document.getElementById("answerFeedback");
    var displayText = document.createTextNode("Incorrect...");
    choice.appendChild(displayText);
  };
  setTimeout(function () {
    choice.removeChild(displayText);
    questionNumber++;
    nextQuestion();
  }, 500);
};




//High Score List Function
function enterHighScore() {
  questionSection.style.display = "none";
  highScoreSection.style.display = "block";
  finalScore.textContent = questionsRight

  var highScores = JSON.parse(localStorage.getItem("highScores"));
  if (!highScores) {
    highScores = [];
  }
  submitButton.addEventListener("click", function (event) {
    event.preventDefault();
    var initials = document.getElementById("userName").value;

    var latestScore = {
      score: finalScore,
      initials: initials
    }
    console.log(latestScore);
    highScores.push(latestScore);
    localStorage.setItem("highScores", JSON.stringify(highScores));
  })
}

function displayHighScores() {
  titleSection.style.display = "none";
  introduction.style.display = "none";
  quizStart.style.display = "none";
  questionSection.style.display = "none";
  highScoreIndex.style.display = "block";
  var highScores = JSON.parse(localStorage.getItem("highScores"));
  for (i = 0; i < highScores.length; i++) {
    var listEl = document.createElement("li");
    listEl.textContent = highScores[i].initials + " - " + highScores[i].score;
    highScoresList.appendChild(listEl);
    console.log(highScoresList);
  };

}

//Event Listeners for buttons clicked
quizStart.addEventListener("click", startQuiz);
highScoreButton.addEventListener("click", displayHighScores);
answerButton1.addEventListener("click", function () {
  checkAnswer(0);
});
answerButton2.addEventListener("click", function () {
  checkAnswer(1);
});
answerButton3.addEventListener("click", function () {
  checkAnswer(2);
});
answerButton4.addEventListener("click", function () {
  checkAnswer(3);
}); 
homeButton.addEventListener("click", function () {
  location.reload()
});