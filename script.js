const day = document.getElementById("day")
const hour = document.getElementById("hour")
const minute = document.getElementById("minute")
const second = document.getElementById("second")

let lancament = "23 oct 2024"


function countDown() {
    const lancamentDate = new Date(lancament)
    const nowDate = new Date()

    //esta subtação retorna o tempo em milisegundo, para transformar em segundos divido por 1000
    const secondsTotal = (lancamentDate - nowDate) /1000
    
    const finalDays = formatTime(Math.floor(secondsTotal / 60 / 60 / 24));
    const finalHours = formatTime(Math.floor(secondsTotal / 60 / 60 % 24));
    const finalMinutes = formatTime(Math.floor(secondsTotal / 60) % 60);
    const finalSeconds = formatTime(Math.floor(secondsTotal) % 60);

    day.innerHTML = `${finalDays}D`;
    hour.innerHTML = `${finalHours}H`;
    minute.innerHTML = `${finalMinutes}M`;
    second.innerHTML = `${finalSeconds}S`;
}

function formatTime(time) {
    if(time < 10) {
        return `0${time}`
    } else {
        return time;
    }
}

setInterval(countDown, 1000)