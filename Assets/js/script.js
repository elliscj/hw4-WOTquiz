var quizBoxEl = $("#quiz-box");
var timeEl = $("#time-left");
var highScoreEl = $("#high-scores");
var buttonEl = $(".button");
var answerButton = $("#options");
var startButtonEl = $("#start-button");
var currentQuestionIndex = 0;
var questionTextEl = $("#question");
var optionAEl = $("#optionA");
var optionBEl = $("#optionB");
var optionCEl = $("#optionC");
var optionDEl = $("#optionD");

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

//create variable to save info json parse empty array with score and initials
//check local storage pull local storage if not there make empty array the stringify and save
//var index = 0 incriment the index nnumber and call the object
//
var user = {
  initials: userinitials,
  score: userScore,
};
var userinitials;
var userScore = 0;
var secondsLeft = 60;

var highScores = JSON.parse(localStorage.getItem("scores")) || [];
console.log(highScores);

// buttonEl.hide();
// highScoreEl.hide();

answerButton.on("click", function (event) {
  if (quizQuestions[currentQuestionIndex].answer === event.target.outerText) {
    userScore += 5;
    console.log(userScore);
  } else {
    secondsLeft -= 5;
  }

  console.log(event);

  currentQuestionIndex++;

  renderQuestion();
});

function renderQuestion() {
  questionTextEl.text(quizQuestions[currentQuestionIndex].title);
  optionAEl.text(quizQuestions[currentQuestionIndex].userChoices[0]);
  optionBEl.text(quizQuestions[currentQuestionIndex].userChoices[1]);
  optionCEl.text(quizQuestions[currentQuestionIndex].userChoices[2]);
  optionDEl.text(quizQuestions[currentQuestionIndex].userChoices[3]);
}

function startQuiz() {
  renderQuestion();

  timer();
}

buttonEl.on("click", function () {});

function timer() {
  // Sets interval in variable
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timeEl.text(secondsLeft);

    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      timesUp();
    } //else if ((quizQuestions[i] = quizQuestions.length)) {
    //   //prompt for initials and append high scores?
    // }
  }, 1000);
}

function timesUp() {
  timeEl.textContent = "0";
  alert("Times Up!");
  userInitials = prompt(
    "Please enter your initials so you can post your high score."
  );
}

startButtonEl.on("click", startQuiz);
console.log(user);
