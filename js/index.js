const date = Date.now();
let startTime = 25;
let startSecond = 60;
const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
// appendage = () => {
//     let poppy = document.getElementById("timer")
//     poppy.append("<p>Text.</p>")
// }

// appendage();

console.log(moment().format('dddd'))



minusAMinute = () => {
    startTime--;
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
}

minusSecond = () => {
    if (startSecond === 0) {
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
    setInterval(minusAMinute, 60000);
    setInterval(minusSecond, 1000);
    pauseTimer();
})


