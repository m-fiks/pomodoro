const date = Date.now();
let startTime = 25;

// appendage = () => {
//     let poppy = document.getElementById("timer")
//     poppy.append("<p>Text.</p>")
// }

// appendage();

const start = document.getElementById("start-button")

minusAMinute = () => {
    startTime--;
    document.getElementById("timer").innerHTML = startTime;
    console.log(startTime)
}

start.addEventListener('click', () => {
    document.getElementById("timer").innerHTML = startTime;
    setInterval(minusAMinute, 60000);
})



