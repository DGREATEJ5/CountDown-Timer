const daysEl = document.getElementById("days")
const hoursEl = document.getElementById("hours")
const minsEl = document.getElementById("mins")
const secsEl = document.getElementById("secs")

const newYears = '1 Jan 2023'

function countDown(){
    const newYearsDate = new Date(newYears)
    const currentDate = new Date()

    const totalSeconds = (newYearsDate - currentDate) / 1000
    const days = Math.floor(totalSeconds / 3600 / 24)
    const hours = Math.floor(totalSeconds / 3600) % 24
    const mins = Math.floor(totalSeconds / 60) % 60
    const seconds = Math.floor(totalSeconds) % 60

    daysEl.innerHTML = days
    hoursEl.innerHTML = formatTime(hours)
    minsEl.innerHTML = formatTime(mins)
    secs.innerHTML = formatTime(seconds)
}

function formatTime(time){
    if(time < 10){
        return (`0${time}`)
    }
    else{
        return time
    }
}

countDown()

setInterval(countDown, 1000)