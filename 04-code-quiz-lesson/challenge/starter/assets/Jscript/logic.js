// start the quiz

var startButton = document.querySelector('#start');
var startScreen = document.querySelector('#start-screen');
var questionsScreen = document.querySelector('#questions');
var endScreen = document.querySelector('#end-screen')

startButton.addEventListener('click', function () {
startScreen.setAttribute("class", "hide")
questionsScreen.removeAttribute("class", "hide")

// set timer 

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

// track current question as below:

 var currentQuestionIndex = 0;
 var currentQuestion = questions[currentQuestionIndex];
 var questionWrap = document.querySelector('#questions');
 var questionTitle = document.querySelector("#question-title");
 questionTitle.innerHTML = currentQuestion.title;
 

// load answers , dont change div just change innertext

var choicesOutput = document.querySelector('#choices');
var choices = currentQuestion.choices;

for( var i = 0; i < choices.length; i++ ) {
    var choice = choices[i];
    var isCorrect = currentQuestion.answer === choice;

    choicesOutput.insertAdjacentHTML('beforeend', `<button data-correct=${isCorrect}>${choice}</button`)
}

// define sound variables 

// const audioContext = new AudioContext();
// const element = document.querySelector(audio);
// const source = audioContext.createMediaElementSource(element);
// source.connect(audioContext.destination)
// audio.play();
var corAudio = new Audio("assets/sfx/correct.wav");
var incorAudio = new Audio("assets/sfx/incorrect.wav");


//create function to play sounds:
function playSound (soundname)   
  {
    soundname.play();
  };

choicesOutput.addEventListener('click', function () {
    var feedback = document.querySelector('#feedback');
    feedback.removeAttribute("class", "feedback hide");
    if (isCorrect) {

        setTimeout(function () {
            feedback.textContent = 'Correct answer';
            feedback.addAttribute("class", "feedback hide");
        }, 2000);
        playSound (corAudio);
    } else {setTimeout(function () {
            feedback.textContent = 'Incorrect answer';
            feedback.addAttribute = ("class", "feedback hide"); }, 2000);
            playSound (incorAudio);
    };

});


//move to next quesiton 

// currentQuestionIndex += 1;
// currentQuestion = questions[currentQuestionIndex];
// questionTitle.innerHTML = currentQuestion.title;
// choicesOutput.innerHTML = '';

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

// comment 