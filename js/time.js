function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';

    // Convert to 12-hour format
    hours = hours % 12;
    hours = hours ? hours : 12; // If hour is 0, set to 12

    const formattedHours = hours.toString().padStart(2, '0');
    document.getElementById('time').textContent = `${formattedHours}:${minutes} ${ampm}`;
  }

  // Update the time every second
  setInterval(updateTime, 1000);

  // Set the time immediately on page load
  updateTime();