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
var time = 10;

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

// define sound variables and functions 

function playAudioCorrect () {
    var correctAudio = document.querySelector('#audioCorrect');
    correctAudio.play;
};

function playAudioIncorrect () {
     var incorrectAudio = document.querySelector('#audioIncorrect');
     incorrectAudio.play;
};

choicesOutput.addEventListener('click', function () {
    var feedback = document.querySelector('#feedback');
    feedback.removeAttribute("class", "feedback hide");
    if (isCorrect) {

        setTimeout(function () {
            feedback.textContent = 'Correct answer';
            feedback.addAttribute("class", "feedback hide");
        }, 3000);
        correctAudio.play;
    } else {

        setTimeout(function () {
            feedback.textContent = 'Incorrect answer';
            feedback.addAttribute = ("class", "feedback hide");
        }, 3000);
        incorrectAudio.play;
    };

});



setTimeout(function(){
    feedback.textContent = 'Correct answer';
}, 3000);

// currentQuestionIndex += 1;
// currentQuestion = questions[currentQuestionIndex];
// questionTitle.innerHTML = currentQuestion.title;
// choicesOutput.innerHTML = '';



//play sound
//feedback with setinterval add div

// before next question choicesOutput.innerHTML = ''
//move to next quesiton 

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