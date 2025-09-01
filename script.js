document.addEventListener('DOMContentLoaded', () => {
  const preloader = document.getElementById('preloader');

  // Wait until the whole page (images, assets) is loaded
  window.addEventListener('load', () => {
    // Add a class to trigger CSS fade-out animation
    preloader.classList.add('preloader--hide');

    // Remove the preloader from DOM after animation ends (1s fadeOut duration)
    preloader.addEventListener('animationend', () => {
      preloader.remove();
    });
  });
});


// Countdown Timer for 24 Sept 2025, 10:00 AM
const countdownElement = document.getElementById('countdown');
const targetDate = new Date("September 24, 2025 10:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  if(distance < 0) {
    countdownElement.innerHTML = "Event Started!";
    clearInterval(interval);
    return;
  }

  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000*60*60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000*60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  countdownElement.innerHTML = `
    <span>${days}d</span> :
    <span>${hours}h</span> :
    <span>${minutes}m</span> :
    <span>${seconds}s</span>
  `;
}

const interval = setInterval(updateCountdown, 1000);
updateCountdown();
