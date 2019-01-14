const date = Date.now();
let startTime = 25;
let startSecond = 60;
const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
let breakTime = 5;

console.log(moment().format('dddd'))

minusAMinute = () => {
    if (startTime === 0) {
        //start break time
    }
    else {
        startTime--;
        document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
    }
}

minusSecond = () => {
    if (startSecond === 1) {
        startSecond = 60;
    }
    else {
        startSecond--;
    }
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
}

pauseTimer = () => {
    pause.addEventListener("click", () => {
        console.log('pause')
    })
}

start.addEventListener('click', () => {
    setInterval(minusSecond, 1000);
    setInterval(minusAMinute, 60000);
    pauseTimer();
})


