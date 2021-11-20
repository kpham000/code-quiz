// define varibles
var header = document.querySelector(".header");
var start = document.querySelector("#intro");
var addingScore = document.querySelector("#adding-score");
var scoreEl = document.querySelector("#score");
var main = document.querySelector(".main");
var startBtn = document.querySelector("#start-btn");
var options = document.querySelector("#options");
var option1 = document.querySelector("#option1");
var option2 = document.querySelector("#option2");
var option3 = document.querySelector("#option3");
var option4 = document.querySelector("#option4");
var addingScoreYes = document.querySelector("#adding-score-yes");
var addingScoreScore = document.querySelector("#your-score");
var scoreName = document.querySelector("#score-name");
var timerEl = document.querySelector("#timer");
var playAgain = document.querySelector("#play-again");
var scoreboard = document.querySelector("#scoreboard");
var clearScore = document.querySelector("#clear-score");
var clearScoreboard = document.querySelector("#clear-scoreboard");

// scoping
var selQuest = -1;
var timeNotRunning = true;
var secondsLeft;
var score;
var timer;
var scoreArr;

// GIVEN I am taking a code quiz

// WHEN I click the start button

options.setAttribute("style","display:none;");
addingScore.setAttribute("style","display:none;");
scoreEl.setAttribute("style","display:none;");

// THEN a timer starts and I am presented with a question
// startTime.onclick('');

 
// questions
var question = [
{
title: "Inside which HTML element do we put the javascript?",
  answerOne: "<scripting>",
  answerTwo: "<javascript>",
  answerThree: "<script>",
  answerFour: "I don't know",
  correct: 3
},
{
title: "Where is the correct place to insert a JavaScript?",
  answerOne: "<head> section",
  answerTwo: "<head> and <body> section",
  answerThree: "<body> section",
  answerFour: "I don't know",
  correct: 3
},
{
title: "How do you create a function in JavaScript?",
  answerOne: "function(myFunction)",
  answerTwo: "function = myFunction()",
  answerThree: "function myFunction()",
  answerFour: "I don't know",
  correct: 3
},
{
title: "Select no",
  answerOne: "no",
  answerTwo: "yes",
  answerThree: "ok",
  answerFour: "I don't know",
  correct: 1
},
{
title: "Select yes",
  answerOne: "no",
  answerTwo: "yes",
  answerThree: "false",
  answerFour: "I don't know",
  correct: 2
}
];

// start btn
startBtn.addEventListener("click",function(){

  selQuest = -1;
  let quizLength = 45;
  startTimer(quizLength);

  start.setAttribute("style","display:none;");
  options.setAttribute("style","display:inline;");

  nextQuestion();

  addButton(option1,1);
  addButton(option2,2);
  addButton(option3,3);
  addButton(option4,4);
});

// timer countdown
function startTimer(quizTime) {
  timeNotRunning = false;
  secondsLeft = quizTime;
  timer = setInterval(function(){
    secondsLeft--;
    console.log(secondsLeft);
    timerEl.textContent = secondsLeft + " seconds left in the quiz";

    if(secondsLeft <= 0){
      clearInterval(timer);
      timeNotRunning = true;
      endQuiz();
    }
  },1000);
}

// your score
addingScoreYes.addEventListener("click",function(){

  if(scoreName.value != ""){
      header.textContent = "Scores:";
      addingScore.setAttribute("style","display:none;");
      scoreEl.setAttribute("style","display:inline;");

      if(localStorage.getItem("scoreArr")!==null){
          scoreArr = JSON.parse(localStorage.getItem("scoreArr"));
          scoreArr.push(scoreName.value,score);
          localStorage.setItem("scoreArr",JSON.stringify(scoreArr));
      } else {
          scoreArr = [scoreName.value,score];
          localStorage.setItem("scoreArr",JSON.stringify(scoreArr));
      }

      loadScore();
  }
});


// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```