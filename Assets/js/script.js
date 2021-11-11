var quizBoxEl = $("#quiz-box");
var timeEl = $("#time-left");
var highScoreEl = $("#high-scores");
var buttonEl = $(".button");
var quizQuestions = {
  question1: "Who is Rand al Thor's Father?",
  question2: "Who tainted the male half of the One Power?",
  question3: "Which of the following is a Terangreal?",
  question4: "Who's name means 'Betrayer of Hope' in the old tounge?",
  question5: "Who is Rand's half brother?",
  question6: "What is on the Malkieri flag?",
};

var question1options = [
  "Janduin",
  "Tam",
  "Lews Therin Telamon",
  "King Aemon al Caar al Thorin",
];

var question2options = [
  "Lews Therin Telamon",
  "The Dark One",
  "Ishamael",
  "Raolin Darksbane",
];

var question3options = [
  "Callandor",
  "Choedan Kal",
  "Vora's Sa'angreal (the White Rod)",
  "the Access Keys",
];

var question4options = ["Ba'alzamon", "Ishamael", "Balthamel", "Demandred"];

var question5options = ["Gawan", "Galad", "Lan", "Uno"];

var question6options = ["Dragon", "Red Eagle", "Red Hand", "Golden Crane"];

var answers = {
  father: "Janduin",
  tainted: "The Dark One",
  terangreal: "the Acess Keys",
  betrayer: "Ishamael",
  halfBrother: "Galad",
  malkieri: "Golden Crane",
};

var user = {
  father: "",
  tainted: "",
  terangreal: "",
  betrayer: "",
  halfBrother: "",
  malkieri: "",
  initials: "",
  score: "0",
};

var secondsLeft = 60;

buttonEl.hide();
highScoreEl.hide();

function startQuiz() {
  //start timer

  timer();

  user.initials = prompt(
    "Please enter your initials so you can post your high score."
  );
}

buttonEl.on("click", function () {});
console.log(user);
console.log(question3options);

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
}

quizBoxEl.on("click", startQuiz);
