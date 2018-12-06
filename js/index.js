const date = Date.now();
const startTime = 25;

appendage = () => {
    //document.getElementById("timer").append(`<p>${startTime}</p>`)
}

appendage();

timefunction = () => {
    setInterval( () => {
        document.getElementById("timer").innerHTML = date;
    }, 5000);
}

timefunction();

minusAMinute = () => {

}