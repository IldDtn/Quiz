// target start button and create event listener, 
// when clicked hide start/ unhide questions and start timer

var startButton = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionsScreen = document.querySelector('#questions');
var endScreen = document.querySelector('#end-screen')

startButton.addEventListener('click', function () {
startScreen.setAttribute("class", "hide")
questionsScreen.removeAttribute("class", "hide")
let timeEl = document.querySelector('#time');
var time = 60;

var timer = setInterval(function() {
    timeEl.innerHTML = time;
    time--;
    if (time < 0) {
        clearTimeout(timer)
    } else if (time === 0) {
        endScreen.removeAttribute("class", "hide")
    }
}, 1000);
});

 var currentQuestionIndex = 0;
 var currentQuestion = questions[currentQuestionIndex];
 var questionWrap = document.querySelector('#questions');
 var questionTitle = document.querySelector("#question-title");
 questionTitle.innerHTML = currentQuestion.title;
// if this does not work target parent and createelement append to the end
// if answer is incorrect substract 10 


// set timer for feedback
// work out logic identify current question, change innertext depending on where we are
// add eventlistener to change question and store values
// what are custom data attributes used for? true/false?
//delegation listener on the parent button whenever button clicked -> feedback check answer sound effect and move to next

// when we get to end of game final score is the same as timerleft





// Localstorage for highscores

var submitButton = document.querySelector('#submit');
// var allResults = [];

var result = {
    Initials: document.querySelector('#initials').value,
    Score: time
};

// allResults.push(result);


submitButton.addEventListener('click', function () {
    localStorage.setItem("Result", JSON.stringify(result));
    window.open("highscores.html");
    });