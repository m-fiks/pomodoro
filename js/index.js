const start = document.getElementById("start-button");
const pause = document.getElementById("pause-button");
const resume = document.getElementById("resume-button");
const breakTime = document.getElementById("break");

let Clock = {
    totalSeconds: 1500,

    start: function () {
        let self = this;

        this.interval = setInterval (() => {
            self.totalSeconds -= 1;

            $("#min").text(Math.floor(self.totalSeconds / 60));
            $("#sec").text(parseInt(self.totalSeconds % 60));
        }, 1000);
    },

    pause: function () {
        clearInterval(this.interval);
        delete this.interval;
    },

    resume: function () {
        if (!this.interval) this.start();
    },

    break: function () {
        //5 min break
        let self = this;

        this.interval = setInterval(() => {
            self.totalSeconds -= 1;

            $("#min").text((Math.floor(self.totalSeconds / 60) -20));
            $("#sec").text(parseInt(self.totalSeconds % 60));
        },1000);
    }
};

start.addEventListener('click', () => {
    Clock.start();
})

pause.addEventListener('click', () => {
    Clock.pause();
});

resume.addEventListener('click', () => {
    Clock.resume();
})

breakTime.addEventListener('click', () => {
    Clock.break();
})
