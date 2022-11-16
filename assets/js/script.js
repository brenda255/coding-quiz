

var timerEl = document.querySelector(".timer");
var countdownEl = document.getElementById("countdown");
var startingMinutes =2;
var secondsLeft = startingMinutes *60;
var button = document.querySelector(".button");
var question = document.querySelector(".question");
var questionsEl = document.querySelector("#quiz-questions");
var showQuestionsEl = document.querySelector("#show-questions");
var button1El = document.querySelector("#button1");
var button2El = document.querySelector("#button2");
var button3El = document.querySelector("#button3");
var index = 0;
var quizQuestions = [
    {
        question:"Which is a string?", 
        answerOne: "true",
        answerTwo: "22",
        answerThree: "quotation marks",
        correctAnswer: "quotation marks"
    },{
        question:"What is CSS used for?", 
        answerOne: "display a function",
        answerTwo: "for style",
        answerThree: "math equation",
        correctAnswer: "for style",
    },{
        question:"What direction is JavaScript read?", 
        answerOne: "top to bottom",
        answerTwo: "any direction",
        answerThree: "bottom to top",
        correctAnswer: "top to bottom",
    },{
        question:"Do you link your stylesheet in the html page?", 
        answerOne: "yes",
        answerTwo: "no",
        answerThree: "sometimes",
        correctAnswer: "yes",
    }
]


button.addEventListener("click", () => {
    setTime();
question.style.display = "none";
questionsEl.classList.remove("hide")
displayQuestions()
})

function displayQuestions () {
showQuestionsEl.textContent = quizQuestions[index].question
button1El.textContent = quizQuestions[index].answerOne
button2El.textContent = quizQuestions[index].answerTwo
button3El.textContent = quizQuestions[index].answerThree

}
function nextQuestion () {
    if (quizQuestions[index].correctAnswer===this.textContent){
        alert("correct")
    }
    else{
        alert("incorrect")
        secondsLeft = secondsLeft - 10;
    }
index++
displayQuestions();
}
button1El.addEventListener ("click", nextQuestion)
button2El.addEventListener ("click", nextQuestion)
button3El.addEventListener ("click", nextQuestion)
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timerEl.textContent = secondsLeft

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function sendMessage() {
    timerEl.textContent = "Your time is up!";
}

