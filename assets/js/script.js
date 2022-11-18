
var timerEl = document.querySelector(".timer");
var countdownEl = document.getElementById("countdown");
var startingMinutes = 2;
var secondsLeft = startingMinutes * 60;
var button = document.querySelector(".button");
var question = document.querySelector(".question");
var questionsEl = document.querySelector("#quiz-questions");
var showQuestionsEl = document.querySelector("#show-questions");
var button1El = document.querySelector("#button1");
var button2El = document.querySelector("#button2");
var button3El = document.querySelector("#button3");
var index = 0;
var initialsEl = document.querySelector(".initials")
var highscoresEl = document.querySelector(".highscores")
var remainingTime;
var quizQuestionsEl = [
    {
        question: "Which is a string?",
        answerOne: "true",
        answerTwo: "22",
        answerThree: "quotation marks",
        correctAnswer: "quotation marks"
    }, {
        question: "What is CSS used for?",
        answerOne: "display a function",
        answerTwo: "for style",
        answerThree: "math equation",
        correctAnswer: "for style",
    }, {
        question: "What direction is JavaScript read?",
        answerOne: "top to bottom",
        answerTwo: "any direction",
        answerThree: "bottom to top",
        correctAnswer: "top to bottom",
    }, {
        question: "Do you link your stylesheet in the html page?",
        answerOne: "yes",
        answerTwo: "no",
        answerThree: "sometimes",
        correctAnswer: "yes",
    }
]

var timerInterval;

function setTime() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timerEl.textContent = secondsLeft

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

//moves from question to question
button.addEventListener("click", () => {
    setTime();
    question.style.display = "none";
    questionsEl.classList.remove("hide")
    displayQuestions()
})

//displaying our quiz questions
function displayQuestions() {
    showQuestionsEl.textContent = quizQuestionsEl[index].question
    button1El.textContent = quizQuestionsEl[index].answerOne
    button2El.textContent = quizQuestionsEl[index].answerTwo
    button3El.textContent = quizQuestionsEl[index].answerThree

}
//alerting user if question was correct or incorrect
function nextQuestion() {

    if (quizQuestionsEl[index].correctAnswer === this.textContent) {
        alert("correct")
    }
    else {
        alert("incorrect")
        secondsLeft = secondsLeft - 10;
    }
    index++
    if (quizQuestionsEl[index] === quizQuestionsEl[3]) {
        clearInterval(timerInterval);
        initialsEl.classList.remove("hide")
    }

    if (quizQuestionsEl[index] === quizQuestionsEl[3]) {
        clearInterval(timerInterval);
        initialsEl.classList.remove("hide")
        questionsEl.classList.add("hide")
        return;
    }


    displayQuestions();
}

button1El.addEventListener("click", nextQuestion)
button2El.addEventListener("click", nextQuestion)
button3El.addEventListener("click", nextQuestion)


//letting the user know the time is up
function sendMessage() {
    timerEl.textContent = "Your time is up!";
}

