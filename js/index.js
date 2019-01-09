const date = Date.now();
let startTime = 25;
let startSecond = 60;

// appendage = () => {
//     let poppy = document.getElementById("timer")
//     poppy.append("<p>Text.</p>")
// }

// appendage();

console.log(moment().format('dddd'))

const start = document.getElementById("start-button")

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

start.addEventListener('click', () => {
    setInterval(minusAMinute, 60000);
    setInterval(minusSecond, 1000);
})


