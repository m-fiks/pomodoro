const date = Date.now();
let startTime = 24;
let startSecond = 60;
let paused = false;
const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
let breakTime = 5;


console.log(moment().format('dddd'))

function minusAMinute() {
    if (paused) {
        document.getElementById("timer").innerHTML = `PAWSEDDD`
    }
    else {
        setInterval(function() {
            if (startTime === 0) {
                //start break time
            }
            else {
                startTime--;
            }
            document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
        }, 60000);
}   ;
};

function minusASecond () {
    if (paused) {
        console.log('paws')
    }
    else {
    setInterval(function() {
            if (startSecond === 1) {
                startSecond = 60;
            }
            startSecond--;
            document.getElementById("timer").innerHTML = `${startTime}:${startSecond < 10 ? '0' : ''}${startSecond}`;
        }, 1000);
    }
}

start.addEventListener('click', () => {
    minusAMinute();
    minusASecond();
    pauseTimer();
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
})

pauseTimer = () => {
    pause.addEventListener("click", () => {
        paused = true;
        minusAMinute();
        minusASecond();
        console.log(paused)
    })
}