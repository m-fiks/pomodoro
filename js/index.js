const date = Date.now();
let startTime = 25;
let startSecond = 60;
const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
let breakTime = 5;

console.log(moment().format('dddd'))

let minusAMinute = setInterval(function() {
    if (startTime === 0) {
        //start break time
    }
    else {
        startTime--;
    }
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
}, 60000);

let minusASecond = setInterval(function() {
    if (startSecond === 1) {
        startSecond = 60;
    }
    else {
        startSecond--;
    }
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
}, 1000);

start.addEventListener('click', () => {
    minusAMinute;
    minusASecond;
    pauseTimer();
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
})

pauseTimer = () => {
    pause.addEventListener("click", () => {
        console.log(`${startTime} : ${startSecond}`)
    })
}