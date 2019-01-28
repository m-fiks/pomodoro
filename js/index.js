const date = Date.now();
let startTime = 24;
let startSecond = 60;
let paused;
const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
let breakTime = 5;


console.log(moment().format('dddd'))

function minusAMinute() {
    setInterval(function() {
        if (startTime === 0) {
            //start break time
        }
        else {
            startTime--;
        }
        document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
    }, 60000);
};

function minusASecond () {
    setInterval(function() {
            if (startSecond === 1) {
                startSecond = 60;
            }
            startSecond--;
            document.getElementById("timer").innerHTML = `${startTime}:${startSecond < 10 ? '0' : ''}${startSecond}`;
        }, 1000);
}

start.addEventListener('click', () => {
    paused = false;
    minusAMinute();
    minusASecond();
    pauseTimer();
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
})

function pauseTimer () {
    pause.addEventListener("click", () => {
        console.log('psfdsk')
        onPause();
    })
}

function onPause () {
    paused = true;
    clearInterval(minusASecond)
    clearInterval(minusAMinute)
    document.getElementById("timer").innerHTML = `paused`
}