var res = JSON.parse(localStorage.getItem("Result"));
var scoreList = document.querySelector('#highscores');
scoreList.appendChild(res);