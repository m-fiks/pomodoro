const date = Date.now();
let startTime = 25;

// appendage = () => {
//     let poppy = document.getElementById("timer")
//     poppy.append("<p>Text.</p>")
// }

// appendage();

minusAMinute = () => {
    if (startTime > 0 ) {
        for(let i=0; i< startTime; i++) {
            startTime--;
        }
    }
}

timefunction = () => {
    setInterval( () => {
        minusAMinute();
        document.getElementById("timer").innerHTML = `${startTime} minutes left`;
    }, 10000);
}

timefunction();