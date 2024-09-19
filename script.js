const timeElement = document.getElementById("time");
const dayElement = document.getElementById("day");
const toggleFormatButton = document.getElementById("toggleFormat");

let is24HourFormat = true;

function updateClock() {
    const now = new Date();
    
    // Get day of the week
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const day = daysOfWeek[now.getDay()];
    
    // Get current time
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let ampm = '';

    if (!is24HourFormat) {
        ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12 || 12; // convert to 12-hour format
    }

    // Add leading zeros to minutes and seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Display the time and day
    timeElement.innerHTML = `${hours}:${minutes}:${seconds} ${ampm}`;
    dayElement.innerHTML = day;
}

// Toggle between 12-hour and 24-hour format
toggleFormatButton.addEventListener("click", function () {
    is24HourFormat = !is24HourFormat;
    toggleFormatButton.innerHTML = is24HourFormat ? "Switch to 12-hour format" : "Switch to 24-hour format";
    updateClock(); // Update the clock immediately after switching format
});

// Update the clock every second
setInterval(updateClock, 1000);

// Initialize the clock on page load
updateClock();
