const date = Date.now();

timefunction = () => {
    setInterval( () => {
        document.getElementById("timer").innerHTML = date;
    }, 5000);
}

timefunction();