const target = document.querySelector("#date");
const start = document.querySelector('#start');
const daysEl = document.querySelector('#days');
const hoursEl = document.querySelector("#hours");
const minsEl = document.querySelector("#mins");
const secEl = document.querySelector("#sec");
var interval = 0;


start.addEventListener("click", () => {
    const end = new Date(target.value);
    if (interval != 0)
        clearInterval(interval);

    interval = setInterval(function () {
        const today = new Date();
        const totalSec = (end.getTime() - today.getTime()) / 1000;
        const days = Math.floor(totalSec / 3600 / 24);
        const hours = Math.floor(totalSec / 3600) % 24;
        const mins = Math.floor(totalSec / 60) % 60;
        const sec = Math.floor(totalSec % 60);
        // console.log(days, hours, mins, sec);
        daysEl.innerHTML = formatTime(days);
        hoursEl.innerHTML = formatTime(hours);
        minsEl.innerHTML = formatTime(mins);
        secEl.innerHTML = formatTime(sec);
    }, 500);

});
function formatTime(time){
    if(time < 10)
        return '0' + time;
    return time;
}