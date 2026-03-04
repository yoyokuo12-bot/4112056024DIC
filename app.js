function updateClock() {
    const now = new Date();
    
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    
    // Pad with zeroes
    hours = hours.toString().padStart(2, '0');
    minutes = minutes.toString().padStart(2, '0');
    seconds = seconds.toString().padStart(2, '0');
    
    const clockEl = document.getElementById('clock');
    
    if (clockEl) {
        clockEl.innerHTML = `${hours}:${minutes}:${seconds} <span class="time-meridiem">${ampm}</span>`;
    }
    
    requestAnimationFrame(updateClock);
}

// Ensure first paint sync then continuous updates
document.addEventListener("DOMContentLoaded", () => {
    requestAnimationFrame(updateClock);
});
