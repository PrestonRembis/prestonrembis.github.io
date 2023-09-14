function updateClock() {
    var now = new Date();
    var time = now.getHours() + ':' + formatMinutes(now.getMinutes()) + ':' + formatSeconds(now.getSeconds());
    document.getElementById('clock').textContent = time;
    setTimeout(updateClock, 1000); // Update every second
}

function formatMinutes(minutes) {
    return minutes < 10 ? '0' + minutes : minutes;
}

function formatSeconds(seconds) {
    return seconds < 10 ? '0' + seconds : seconds;
}

updateClock();
