const date = Date.now();
let startTime = 25;

// appendage = () => {
//     let poppy = document.getElementById("timer")
//     poppy.append("<p>Text.</p>")
// }

// appendage();

const start = document.getElementById("start-button")

start.addEventListener('click', () => {
    document.getElementById("timer").innerHTML = startTime;
})

minusAMinute = () => {
    for (let i=0; i<startTime; i--) {

    }
}

setInterval(minusAMinute, 6000);