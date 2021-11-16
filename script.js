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
(function(){
    function buildQuiz(){
      // variable to store the HTML output
      var output = [];
  
      // for each question...
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          var answers = [];
  
          // and for each available answer...
          for(letter in currentQuestion.answers){
  
            // ...add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="question"> ${currentQuestion.question} </div>
            <div class="answers"> ${answers.join('')} </div>`
          );
        }
      );
  
      // finally combine our output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      
      var answerContainers = quizContainer.querySelectorAll('.answers');
  
      // keep track answers
      let numCorrect = 0;
  
      
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
       
        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=question${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          
          numCorrect++;
  
          
          answerContainers[questionNumber].style.color = 'lightgreen';
        }
        else{
          
          answerContainers[questionNumber].style.color = 'red';
        }
      });
  
      // show number of correct answers 
      resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
    }
  
    var quizContainer = document.getElementById('quiz');
    var resultsContainer = document.getElementById('results');
    var submitButton = document.getElementById('submit');
    var myQuestions = [
      {
        question: "Inside which HTML element do we put the javascript?",
        answers: {
          a: "<scripting>",
          b: "<javascript>",
          c: "<script>"
        },
        correctAnswer: "c"
        },
        {
        question: "Where is the correct place to insert a JavaScript?",
        answers: {
        a: "<head> section",
        b: "<head> and <body> section",
        c: "<body> section"
        },
        correctAnswer: "c"
        },
        {
        question: "How do you create a function in JavaScript?",
        answers: {
        a: "function(myFunction)",
        b: "function = myFunction()",
        c: "function:myFunction()",
        d: "function myFunction()"
        },
        correctAnswer: "d"
        }
  ];

    buildQuiz();
  
    // Event 
    submitButton.addEventListener('click', showResults);
  })();

// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
// ```