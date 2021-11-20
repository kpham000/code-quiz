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




function nextQuestion() {

  container.className = 'results-page mt-5'
  title.textContent = 'Question ' + (currentQuestion + 1);
  title.setAttribute('class', 'h2')
  text.textContent = questions[currentQuestion].question;
  text.className = 'h4';
  text.setAttribute('style', 'border-top: 1px double #ba251a; padding-top: 20px;')

  quizAnswers.style.display = 'block';

  answerButtons[0].textContent = questions[currentQuestion].answers[0];
  answerButtons[1].textContent = questions[currentQuestion].answers[1];
  answerButtons[2].textContent = questions[currentQuestion].answers[2];
  answerButtons[3].textContent = questions[currentQuestion].answers[3];

  for (i = 0; i < answerButtons.length; i++) {
      answerButtons[i].addEventListener('click', checkAnswer);
  }
}

function checkAnswer(event) {
  console.log('User chose: ' + event.target.textContent);
  console.log('Correct answer: ' + questions[currentQuestion].correctAnswer);

  if (event.target.textContent === questions[currentQuestion].correctAnswer) {
      answerMessage.style.display = 'block';
      answerMessage.textContent = 'Correct!';
      answerMessage.className = 'answer-message';
      currentQuestion ++;
      score ++;

      setTimeout(function() {
          answerMessage.style.display = 'none';
      }, 800);

      if (currentQuestion === questions.length) {
          endGame();

      } else {
          nextQuestion();
      };

  } else {
      currentQuestion ++;
      answerMessage.style.display = 'block';
      answerMessage.textContent = 'Incorrect!';
      answerMessage.className = 'answer-message';

      setTimeout(function() {
          answerMessage.style.display = 'none';
      }, 800);

      if (timerSecs < 10) {
          timerSecs -= 10;
          endGame();

      } else if (currentQuestion === 5) {
          endGame();

      } else {
          timerSecs -= 10;
          nextQuestion();
      };
  }
};

function endGame() {
  quizAnswers.style.display = 'none';
  container.className = 'quiz-page mt-5'
  title.setAttribute('class', 'h2');
  text.setAttribute('style', 'border-top: 0');
  text.removeAttribute('class');
  text.textContent = 'Your final score is ' + score + '. Enter your initials to see the high scores!';
  inputField.style.display = 'block';

  if (timerSecs <= 0) {
      title.textContent = 'You ran out of time!';
  } else {
      title.textContent = 'All done!';
  }

  submitButton.addEventListener('click', storeHighScore);
}
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```