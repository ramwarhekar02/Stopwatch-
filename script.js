let stopBtn = document.querySelector("#stop");
let startBtn = document.querySelector("#start");
let resetBtn = document.querySelector("#reset");
let msecElement = document.querySelector(".msec h1");
let secsElement = document.querySelector(".secs h1");
let minsElement = document.querySelector(".mins h1");


let msec = 0;
let secs = 0;
let mins = 0;

let timer = null;

startBtn.addEventListener('click', () => {
    clearInterval(timer);
    timer = setInterval(runtimer, 10);
})

stopBtn.addEventListener('click', () => {
    clearInterval(timer);
})

resetBtn.addEventListener('click', ()=> { 
    clearInterval(timer);
    mins = 0;
    msec = 0;
    secs = 0;
    msecElement.textContent = `00`;
    secsElement.textContent = `00`;
    minsElement.textContent = `00`;
})

function runtimer() { 
    msec++;
    if(msec === 100) { 
        msec = 0;
        secs++;
    } 
    if (secs === 60) { 
        secs = 0;
        mins++;
    }

    msecElement.textContent = msec < 10 ? `0` + msec : msec;
    secsElement.textContent = secs < 10 ? `0` + secs : secs;
    minsElement.textContent = mins < 10 ? `0` + mins : mins;
}