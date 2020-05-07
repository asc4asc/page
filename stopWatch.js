var startTimerButton = document.querySelector('.startTimer');
var startTimerButton1 = document.querySelector('.startTimer1');
var pauseTimerButton = document.querySelector('.pauseTimer');
var pauseTimerButton1 = document.querySelector('.pauseTimer1');
var timerDisplay = document.querySelector('.timer');
var timerDisplay1 = document.querySelector('.timer1');

var startTime;
var startTime1;
var updatedTime;
var updatedTime1;
var difference;
var difference1;
var tInterval;
var tInterval1;
var savedTime;
var savedTime1;
var paused = 0;
var paused1 = 0;
var running = 0;
var running1 = 0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
    paused = 0;
    running = 1;
    timerDisplay.style.background = "#FF0000";
    timerDisplay.style.cursor = "auto";
    timerDisplay.style.color = "yellow";
    startTimerButton.classList.add('lighter');
    pauseTimerButton.classList.remove('lighter');
    startTimerButton.style.cursor = "auto";
    pauseTimerButton.style.cursor = "pointer";
  }
}

function startTimer1(){
  if(!running1){
    startTime1 = new Date().getTime();
    tInterval1 = setInterval(getShowTime1, 1);
    paused1 = 0;
    running1 = 1;
    timerDisplay1.style.background = "#FF0000";
    timerDisplay1.style.cursor = "auto";
    timerDisplay1.style.color = "yellow";
    startTimerButton1.classList.add('lighter');
    pauseTimerButton1.classList.remove('lighter');
    startTimerButton1.style.cursor = "auto";
    pauseTimerButton1.style.cursor = "pointer";
  }
}

function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;
    timerDisplay.style.background = "#A90000";
    timerDisplay.style.color = "#690000";
    timerDisplay.style.cursor = "pointer";
    startTimerButton.classList.remove('lighter');
    pauseTimerButton.classList.add('lighter');
    startTimerButton.style.cursor = "pointer";
    pauseTimerButton.style.cursor = "auto";
  } else {
    startTimer();
  }
}

function pauseTimer1(){
  if (!difference1){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused1) {
    clearInterval(tInterval1);
    savedTime1 = difference1;
    paused1 = 1;
    running1 = 0;
    timerDisplay1.style.background = "#A90000";
    timerDisplay1.style.color = "#690000";
    timerDisplay1.style.cursor = "pointer";
    startTimerButton1.classList.remove('lighter');
    pauseTimerButton1.classList.add('lighter');
    startTimerButton1.style.cursor = "pointer";
    pauseTimerButton1.style.cursor = "auto";
  } else {
    startTimer1();
  }
}

function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = '3:00';
  timerDisplay.style.background = "#A90000";
  timerDisplay.style.color = "#fff";
  timerDisplay.style.cursor = "pointer";
  startTimerButton.classList.remove('lighter');
  pauseTimerButton.classList.remove('lighter');
  startTimerButton.style.cursor = "pointer";
  pauseTimerButton.style.cursor = "auto";
}

function resetTimer1(){
  clearInterval(tInterval1);
  savedTime1 = 0;
  difference1 = 0;
  paused1 = 0;
  running1 = 0;
  timerDisplay1.innerHTML = '1:00';
  timerDisplay1.style.background = "#A90000";
  timerDisplay1.style.color = "#fff";
  timerDisplay1.style.cursor = "pointer";
  startTimerButton1.classList.remove('lighter');
  pauseTimerButton1.classList.remove('lighter');
  startTimerButton1.style.cursor = "pointer";
  pauseTimerButton1.style.cursor = "auto";
}



function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
  if (minutes >2 ) { pauseTimer(); pauseTimer1(); };
  minutes = 2-1*minutes; 
  minutes = (minutes < 10) ?  minutes : minutes;
  
  seconds = 59-1*seconds;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  // milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = minutes + ':' + seconds; // + ':' + milliseconds;
}


function getShowTime1(){
  updatedTime1 = new Date().getTime();
  if (savedTime1){
    difference1 = (updatedTime1 - startTime1) + savedTime1;
  } else {
    difference1 =  updatedTime1 - startTime1;
  }
  var minutes1 = Math.floor((difference1 % (1000 * 60 * 60)) / (1000 * 60));
  var seconds1 = Math.floor((difference1 % (1000 * 60)) / 1000);
  var milliseconds1 = Math.floor((difference1 % (100 * 60)));
  
  if (minutes1 > 0) { pauseTimer1(); };
  minutes1 = 0;
  seconds1 = 59-1*seconds1;
  seconds1 = (seconds1 < 10) ? "0" + seconds1 : seconds1;
  timerDisplay1.innerHTML = minutes1 + ':' + seconds1;
}
