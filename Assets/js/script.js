var quizBoxEl = $("#quiz-box");
var timeEl = $("#time-left");
var highScoreUl = $("#high-scores");
var highScoreEl = $(".high-scores");
var buttonEl = $(".button");
var answerButton = $(".answer-button");
var startButtonEl = $("#start-button");
var currentQuestionIndex = 0;
var questionTextEl = $("#question");
var optionAEl = $("#optionA");
var optionBEl = $("#optionB");
var optionCEl = $("#optionC");
var optionDEl = $("#optionD");
var timerInterval = "";
var restartButton = $("#restart-button");
//array of objects title question key value pairs for querstion and answers
var quizQuestions = [
  {
    title: "Who is Rand al Thor's Father?",
    userChoices: [
      "Janduin",
      "Tam",
      "Lews Therin Telamon",
      "King Aemon al Caar al Thorin",
    ],
    answer: "Janduin",
  },

  {
    title: "Who tainted the male half of the One Power?",
    userChoices: [
      "Lews Therin Telamon",
      "The Dark One",
      "Ishamael",
      "Raolin Darksbane",
    ],
    answer: "The Dark One",
  },

  {
    title: "Which of the following is a Terangreal?",
    userChoices: [
      "Callandor",
      "Choedan Kal",
      "Vora's Sa'angreal (the White Rod)",
      "the Access Keys",
    ],
    answer: "the Access Keys",
  },

  {
    title: "Who's name means 'Betrayer of Hope' in the old tounge?",
    userChoices: ["Ba'alzamon", "Ishamael", "Balthamel", "Demandred"],
    answer: "Ishamael",
  },

  {
    title: "Who is Rand's half brother?",
    userChoices: ["Gawan", "Galad", "Lan", "Uno"],
    answer: "Galad",
  },

  {
    title: "What is on the Malkieri flag?",
    userChoices: ["Dragon", "Red Eagle", "Red Hand", "Golden Crane"],
    answer: "Golden Crane",
  },
];

var userInitials = "";
var userScore = 0;
var secondsLeft = 60;

function finalScore() {
  const allData = JSON.parse(localStorage.getItem("data")) || [];
  const userDataEntry = { initials: userInitials, score: userScore };
  allData.push(userDataEntry);
  localStorage.setItem("data", JSON.stringify(allData));
  highScoreEl.show();
  console.log(userDataEntry);
  let template = "";
  for (let i = 0; i < allData.length; i++) {
    template += `<li> - ${allData[i].initials}
    ${allData[i].score}</li>`;
  }
  $("#high-scores").append(template);
  currentQuestionIndex = 0;

  restartButton.show();
}

function gameOver() {
  clearInterval(timerInterval);
  alert("Game Over!");
  userInitials = prompt(
    "Please enter your initials so you can post your high score."
  );
  console.log(userScore);
  console.log(userInitials);
  finalScore();
}

answerButton.hide();
highScoreEl.hide();
restartButton.hide();
console.log(quizQuestions.length);

answerButton.on("click", function (event) {
  if (quizQuestions[currentQuestionIndex].answer === event.target.outerText) {
    userScore += 5;
    console.log(userScore);
  } else {
    secondsLeft -= 5;
  }
  currentQuestionIndex++;

  renderQuestion();
});

function renderQuestion() {
  if (currentQuestionIndex < quizQuestions.length) {
    questionTextEl.text(quizQuestions[currentQuestionIndex].title);
    optionAEl.text(quizQuestions[currentQuestionIndex].userChoices[0]);
    optionBEl.text(quizQuestions[currentQuestionIndex].userChoices[1]);
    optionCEl.text(quizQuestions[currentQuestionIndex].userChoices[2]);
    optionDEl.text(quizQuestions[currentQuestionIndex].userChoices[3]);
  } else {
    gameOver();
  }
}

function startQuiz() {
  answerButton.show();
  startButtonEl.hide();
  restartButton.hide();
  secondsLeft = 60;
  userScore = 0;
  userInitials = "";
  renderQuestion();

  timer();
  highScoreEl.hide();
}

function timer() {
  // Sets interval in variable
  timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text(secondsLeft);

    if (secondsLeft <= 0) {
      clearInterval(timerInterval);
      gameOver();
      return;
    }
  }, 1000);
}

startButtonEl.on("click", startQuiz);
restartButton.on("click", startQuiz);
