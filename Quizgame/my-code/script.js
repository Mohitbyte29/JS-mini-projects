// Dom Elements

const startScreen = document.getElementById("start-screen");
const quizScreen = document.getElementById("quiz-screen");
const resultScreen = document.getElementById("result-screen");
const startButton = document.getElementById("start-btn");
const questionText = document.getElementById("question-text");
const answersContainer = document.getElementById("answers-container");
const currentQuestionSpan = document.getElementById("current-question");
const totalQuestionsSpan = document.getElementById("total-questions");
const scoreSpan = document.getElementById("quiz-score");
const finalScoreSpan = document.getElementById("result-score");
const maxScoreSpan = document.getElementById("result-total");
const resultMessage = document.getElementById("result-message");
const restartButton = document.getElementById("restart-btn");
const progressBar = document.getElementById("progress");

const quizQuestions = [
  {
    question: "What is the capital of France?",
    answers: [
      { text: "London", correct: false },
      { text: "Berlin", correct: false },
      { text: "Paris", correct: true },
      { text: "Madrid", correct: false },
    ],
  },
  {
    question: "Which planet is known as the Red Planet?",
    answers: [
      { text: "Venus", correct: false },
      { text: "Mars", correct: true },
      { text: "Jupiter", correct: false },
      { text: "Saturn", correct: false },
    ],
  },
  {
    question: "What is the largest ocean on Earth?",
    answers: [
      { text: "Atlantic Ocean", correct: false },
      { text: "Indian Ocean", correct: false },
      { text: "Arctic Ocean", correct: false },
      { text: "Pacific Ocean", correct: true },
    ],
  },
  {
    question: "Which of these is NOT a programming language?",
    answers: [
      { text: "Java", correct: false },
      { text: "Python", correct: false },
      { text: "Banana", correct: true },
      { text: "JavaScript", correct: false },
    ],
  },
  {
    question: "What is the chemical symbol for gold?",
    answers: [
      { text: "Go", correct: false },
      { text: "Gd", correct: false },
      { text: "Au", correct: true },
      { text: "Ag", correct: false },
    ],
  },
];

// Quiz State Vars
let currentQuestionIndex = 0;
let score = 0;
let answersDisabled = false // Prevents clicking multiple answers for one question.

totalQuestionsSpan.textContent = quizQuestions.length;
maxScoreSpan.textContent = quizQuestions.length;

// event Listeners
startButton.addEventListener("click", startQuiz);
restartButton.addEventListener("click", restartQuiz);

function startQuiz(){
    // reset vars
    currentQuestionIndex = 0;
    score = 0;
    scoreSpan.textContent = 0;

    // console.log("quiz started");
    startScreen.classList.remove("active"); // Hides the start screen
    quizScreen.classList.add("active"); // Shows the quiz screen.

    showQuestion()
}


function showQuestion(){
  // reset state
    answersDisabled = false;
    const currentQuestion = quizQuestions[currentQuestionIndex]
    currentQuestionSpan.textContent = currentQuestionIndex + 1;
    const progressPercent = ((currentQuestionIndex + 1) / quizQuestions.length) * 100;
    progressBar.style.width = progressPercent + "%"

    questionText.textContent = currentQuestion.question

    answersContainer.innerHTML = "";
    
    currentQuestion.answers.forEach(answers => {
      const button = document.createElement("button")
      button.textContent = answers.text
      button.classList.add("answers-btn")
      
      // Dataset is the property of the button element that allows you to store custom data
      button.dataset.correct = answers.correct;
      button.addEventListener("click", selectAnswer);
      answersContainer.appendChild(button);
    });
}

function selectAnswer(event){
  //Optimization check 
    if(answersDisabled == true) return
    answersDisabled = true;

    const selectedButton = event.target;//Here, event is the click event object (passed automatically when you add an event listener)..target gives you the element that was actually clicked.
// Example: If you clicked on a button <button data-correct="true">Option 1</button>, then selectedButton will be that <button> element.

    const isCorrect = selectedButton.dataset.correct === "true"
    
    // todo: explain this in a second
    // we cannot use for each without Array from it gives error
    Array.from(answersContainer.children).forEach(button => {
      if(button.dataset.correct === "true"){
        button.classList.add("correct")
      } else if(button === selectedButton) {
        button.classList.add("incorrect")
      }
    });

    if(isCorrect){
      score++;
      scoreSpan.textContent = score;
    }
    setTimeout(() => {
      currentQuestionIndex++;
      if(currentQuestionIndex < quizQuestions.length){
        showQuestion()
      }
      else{
        showResults()
      }
      // check if there more questiobs or if the quiz is over
    }, 1000)
}

function showResults(){
  quizScreen.classList.remove("active")
  resultScreen.classList.add("active")

  finalScoreSpan.textContent = score;

  const percentage = (score/quizQuestions.length) * 100;

  if (percentage === 100) {
    resultMessage.textContent = "Perfect! You're a genius!";
  } else if (percentage >= 80) {
    resultMessage.textContent = "Great job! You know your stuff!";
  } else if (percentage >= 60) {
    resultMessage.textContent = "Good effort! Keep learning!";
  } else if (percentage >= 40) {
    resultMessage.textContent = "Not bad! Try again to improve!";
  } else {
    resultMessage.textContent = "Keep studying! You'll get better!";
  }
}

function restartQuiz(){
    resultScreen.classList.remove("active");

    startQuiz();
}


