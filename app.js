document.addEventListener('DOMContentLoaded', initializeOS);

function initializeOS() {
  updateClock();
  setInterval(updateClock, 1000);
}

function updateClock() {
  const now = new Date();
  const timeString = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateString = now.toLocaleDateString();
  document.getElementById('clock').textContent = `${timeString} ${dateString}`;
}