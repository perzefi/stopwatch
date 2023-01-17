const   timeDisplay = document.querySelector("#timeDisplay");

const   startBtn = document.querySelector("#startBtn");
const   pauseBtn = document.querySelector("#pauseBtn");
const   resetBtn = document.querySelector("#resetBtn");



let startTime = 0;
let elapsedTime = 0;
let currentTune = 0;
let paused = true;
let intervalId;
let hrs  = 0;
let mins = 0;
let secs = 0;

startBtn.addEventListener("click", ()=> {
    if(paused){
        paused = false;
        startTime = Date.now() - elapsedTime;
        intervalId = setInterval(updateTime, 100);
    }
});
pauseBtn.addEventListener("click", ()=> {
    clearInterval(intervalId);
    paused = true;
    /*
    if(!paused){
        paused = true;
        elapsedTime = Date.now() - startTime;
        clearInterval(intervalId);
    }
*/
});
resetBtn.addEventListener("click", ()=> {
    paused = true;
    clearInterval(intervalId);
    startTime = 0;
    elapsedTime = 0;
    currentTune = 0;
    hrs  = 0;
    mins = 0;
    secs = 0;
    timeDisplay.textContent = "00:00:00";
});

function updateTime(){
    elapsedTime = Date.now() - startTime;
    secs = Math.floor((elapsedTime / 1000) % 60);
    mins = Math.floor((elapsedTime / (1000 * 60)) % 60);
    hrs = Math.floor((elapsedTime / (1000 * 60 * 60)) % 60);
    
    secs = addZero(secs);
    mins = addZero(mins);
    hrs =  addZero(hrs);
    timeDisplay.textContent = `${hrs}:${mins}:${secs}`;
    /* 
    // Function using length methods
  
    function addZero(unit){
        return (("0") + unit).length > 2 ? unit:"0" + unit
    } */

    function addZero(unit){
        return (unit < 10 ? "0" : "") + unit;
    }

}