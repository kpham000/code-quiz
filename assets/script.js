const navBar = document.querySelector('nav');
const highscoresLink = document.getElementById('highscores-link');
const container = document.getElementById('container');
const timerDisplay = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const title = document.getElementById('title');
const text = document.getElementById('text');
const quizAnswers = document.getElementById('quiz-answers');
const answerButtons = document.getElementsByClassName('answer-button');
const answerMessage = document.getElementById('answer-message');
const inputField = document.getElementById('input-field');
const names = document.getElementById('names');
const submitButton = document.getElementById('submit-button');
// GIVEN I am taking a code quiz

// WHEN I click the start button

// THEN a timer starts and I am presented with a question
// startTime.onclick('');
var startingMinutes = 2;
let time = startingMinutes * 60;

var countdownEl = document.getElementById('countdown');


setInterval(updateCountdown,1000);

function updateCountdown() {
    var minutes = Math.floor(time/ 60);
    let seconds = time % 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    countdownEl.innerHTML = `${minutes}:${seconds}`;
    time--;
}
 

// quiz part

const questions = [
  {
    question: "Inside which HTML element do we put the javascript?",
    answers: ["<scripting>", "<javascript>", "<script>"],
    correctAnswer: "<script>"
  },

  {
    question: "Where is the correct place to insert a JavaScript?",
    answers: ["<head> section", "<head> and <body> section", "<body> section"],
    correctAnswer: "<body> section"
  },

  {
    question: "How do you create a function in JavaScript?",
    answers: ["function(myFunction)", "function = myFunction()", "function:myFunction()","function myFunction()"],
    correctAnswer: "function myFunction()"
  },
];

// timer countdown
let timerSecs = 0;
let currentQuestion = 0
let score = 0;
let scoreArray = [];
let timerInterval = false;

timerSecs = 60;
timerDisplay.textContent = timerSecs;

countdown();

nextQuestion();

startButton.style.display = 'none';
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