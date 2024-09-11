
function updateClock() {
    const now = new Date();
    const seconds = now.getSeconds();
    const minutes = now.getMinutes();
    const hours = now.getHours();

    const secondDegree = ((seconds / 60) * 360) + 90;
    const minuteDegree = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourDegree = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;

    document.getElementById('second').style.transform = `rotate(${secondDegree}deg)`;
    document.getElementById('minute').style.transform = `rotate(${minuteDegree}deg)`;
    document.getElementById('hour').style.transform = `rotate(${hourDegree}deg)`;

    const digitalTime = `${hours < 10 ? '0' + hours : hours}:${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    document.getElementById('date').textContent = digitalTime;
}

document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000);
    updateClock(); 
});
