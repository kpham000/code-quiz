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

addingScoreNo.addEventListener("click",goToPageStart);

playAgain.addEventListener("click",goToPageStart);

clearScore.addEventListener("click",function(){
  scoreArr = [];
  localStorage.setItem("scoreArr",JSON.stringify(scoreArr));
  scoreboard.setAttribute("style","display:none;")
  clearScoreboard.setAttribute("style","display:inline;")
});

// yes display score
function addButton(option,yes){
  option.addEventListener("click",function(){
      if(question[selQuest].correct==yes){
          console.log("That was correct!");
      } else {
          console.log("That was wrong");
          secondsLeft = secondsLeft - 5;
      }
      if(selQuest < question.length-1){
          nextQuestion();
      } else {
          //highscore page
          endQuiz();
      }
  });
}

function nextQuestion(){
  selQuest++;
  header.textContent = question[selQuest].title;
  option1.textContent = question[selQuest].answerOne;
  option2.textContent = question[selQuest].answerTwo;
  option3.textContent = question[selQuest].answerThree;
  option4.textContent = question[selQuest].answerFour;
}

function goToPageStart(){
  location.reload();
}

function loadScore(){
  for (let i = 0; i < scoreArr.length; i=i+2) {
      let li = document.createElement("li");
      li.textContent = "Name: " + scoreArr[i] + ", Score: " + scoreArr[i+1];
      scoreboard.appendChild(li);
  }
}

function endQuiz(){
  header.textContent = "Input name and press yes to save score";
  options.setAttribute("style","display:none;");
  addingScore.setAttribute("style","display:inline;");
  score = secondsLeft;
  addingScoreScore.textContent = "Your score: " + score;
  console.log("your score is: " + score);
  clearInterval(timer);
}
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```