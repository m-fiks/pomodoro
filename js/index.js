const date = Date.now();
let startTime = 25;
let startSecond = 60;

// appendage = () => {
//     let poppy = document.getElementById("timer")
//     poppy.append("<p>Text.</p>")
// }

// appendage();

const start = document.getElementById("start-button")

minusAMinute = () => {
    startTime--;
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
}

minusSecond = () => {
    startSecond--;
    document.getElementById("timer").innerHTML = `${startTime}:${startSecond}`;
}

start.addEventListener('click', () => {
    setInterval(minusAMinute, 60000);
    setInterval(minusSecond, 1000);
})


