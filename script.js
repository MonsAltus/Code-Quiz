// Create array of objects with properties containing question, answer options array, and correct answer index.
var questionsArray = [{
    question: "Which of the following is a Class Selector in CSS?",
    choices: ["container", "#container", ".container", "*container"],
    answerIndex: 2
}, {
    question: "What is the feature by which Javascript allows variables to be called before they are declared?",
    choices: ["Lifting", "Hoisting", "Ordering", "Prioritizing"],
    answerIndex: 1
}, {
    question: "Which HTML element is is used to contain Javascript code?",
    choices: ["javascript", "script", "js", "logic"],
    answerIndex: 1
}, {
    question: "Which of the following is an ID Selector in CSS?",
    choices: ["^image", "image", ".image", "#image"],
    answerIndex: 3
}, {
    question: "Which Javascript method adds a string onto the end of an array?",
    choices: ["push", "unshift", "shift", "pop"],
    answerIndex: 0
}, {
    question: "What is a common name for the CSS file that removes display differences between browsers?",
    choices: ["basic.css", "default.css", "reset.css", "normal.css"],
    answerIndex: 2
}, {
    question: "What HTML element should be used for the largest heading?",
    choices: ["<h6>", "<h1>", "<head>", "<header>"],
    answerIndex: 1
}, {
    question: "Which HTML element makes inner text bold?",
    choices: ["<b>", "<heavy>", "<bold>", "<strong>"],
    answerIndex: 3
}, {
    question: "Which of the following is an HTML Hyperlink?",
    choices: ["<a href=\"http://www.google.com\">google</a>", "<a url=\"http://www.google.com\">google</a>", "<a>http://www.google.com</a>", "<a link=\"http://www.google.com\">google</a>"],
    answerIndex: 0
}, {
    question: "Which character is used to indicate an HTML end tag?",
    choices: ["^", "<", "\\", "/"],
    answerIndex: 3
}, {
    question: "What does CSS stand for?",
    choices: ["Class Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Computing Style Sheets"],
    answerIndex: 1
}, {
    question: "Where should an external style sheet be linked in an HTML document?",
    choices: ["In the <head> section", "At the top of the document", "In the <main> section", "At the bottom of the document"],
    answerIndex: 0
}, {
    question: "Which HTML tag is used to define an internal style sheet?",
    choices: ["<css>", "<script>", "<style>", "<internal>"],
    answerIndex: 2
}, {
    question: "Which of the following is the correct way to link \"script.js\" in an HTML document?",
    choices: ["<script src=\"script.js\">", "<script href=\"script.js\">", "<script name=\"script.js\">", "<script link=\"script.js\">"],
    answerIndex: 0
}, {
    question: "Which of the following is a comment in Javascript?",
    choices: ["<!--comment-->", "/* comment */", "^^comment", "//comment"],
    answerIndex: 3
}
]

// , {
//     question: "",
//     choices: ["", "", "", ""],
//     answerIndex: 
// }

//End of questions array
// ------------------------------------------------------

// Define HTML elements as variables:
var startButton = document.getElementById("start-stop");
var answerButtons = document.getElementsByClassName("btn");
var questionText = document.getElementById("question");
var scoreboardBtn = document.getElementById("highscore-link");
var timer = document.getElementById("timer");
var gameScoreEl = document.getElementById("end-game-score");
var userScore = Number(0);
var timeRemaining = 0;
console.log(answerButtons)

// var currentQuestionIndex = Number([Math.floor(Math.random()*questionsArray.length)])

// When START button is clicked:
// Start timer and display first randomly chosen question.
startButton.addEventListener("click", function(){
    startTimer()
    startQuiz()
    userScore = 0
})

function startTimer() {
    timeRemaining = 45;
    var timerInterval = setInterval(function(){
        timeRemaining--;
        timer.textContent = "Time Remaining: " + timeRemaining;
        if (timeRemaining <=0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000)
}

function startQuiz() {
    gameScoreEl.textContent = ""
    startButton.classList.add("hide");
    questionText.classList.remove("hide");
    for (i=0; i<4; i++) {
        answerButtons[i].classList.remove("hide")
    }

    newQuestion();
    console.log(answerButtons)
}

// Selects random question from array
function newQuestion() {
    // currentQuestionObject = questionsArray[currentQuestionIndex]
    // console.log(currentQuestionIndex)
    currentQuestionObject = questionsArray[Math.floor(Math.random()*questionsArray.length)]
    displayQuestion();
    console.log(currentQuestionObject)
    console.log(currentQuestionObject.question)
    console.log("first choice = "+ currentQuestionObject.choices[0])
    console.log("answer index = "+ currentQuestionObject.answerIndex)
    return;
}

function displayQuestion() {
    questionText.textContent = currentQuestionObject.question;
    for (i=0; i<4; i++) {
        answerButtons[i].textContent = currentQuestionObject.choices[i]
    }
}


Array.from(answerButtons).forEach(function (answerButton) {
    answerButton.addEventListener("click", function (event) {
        // debugger;
        // If answered correctly add to userScore.
        if (this.innerText == currentQuestionObject.choices[currentQuestionObject.answerIndex]) {
            userScore++;
        }
        // If answered incorrectly subtract from remaining time.
        else {
            timeRemaining -= 5
        }
        // Remove current question from questionsArray and load new question.
        // questionsArray.splice(currentQuestionIndex, 1);
        // slash currentQuestionObject from questionsArray ----------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<
        newQuestion()
        console.log("SCORE = " + userScore)
    });
});

// When the time runs out, Game is over.
function gameOver() {
    // debugger;
    // Set timer display to empty string.
    timer.textContent = "";
    // hide question element and answer buttons.
    for (i=0; i<4; i++) {
        answerButtons[i].classList.add("hide")
    }
    questionText.classList.add("hide");

    // Set question and answer button text to empty string.
    // Display how many correct answers out of questions asked.
    if (userScore == 1) {
        gameScoreEl.textContent = "You got " + userScore + " question correct."
    }
    else{
    gameScoreEl.textContent = "You got " + userScore + " questions correct."
    }
    // Display text entry for name with submit button.----------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<
    // enter name and score into scoreboard array.----------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<


    // When name is submitted display start button.
    startButton.classList.remove("hide");
}



// When Highscore button is clicked:
// Display list of highscores on seperate page???----------------------------------------------------<<<<<<<<<<<<<<<<<<<<<<