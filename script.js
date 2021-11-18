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



// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```