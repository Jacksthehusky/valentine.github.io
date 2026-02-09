// 11:11 Wish Button
const wishBtn = document.getElementById('wish-btn');
const wishMessage = document.getElementById('wish-message');

wishBtn.addEventListener('click', () => {
  wishMessage.style.display = 'block';
  wishBtn.style.display = 'none';
  wishMessage.classList.add('slideIn');
});

// Falling Hearts Animation
const heartContainer = document.createElement('div');
heartContainer.classList.add('heart-container');
document.body.appendChild(heartContainer);

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.innerHTML = '💖';
  heart.style.left = Math.random() * 100 + 'vw';
  heart.style.animationDuration = Math.random() * 3 + 2 + 's';
  heartContainer.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

setInterval(createHeart, 300);

// Live Counter for First Date
const firstDate = new Date('2026-02-01 20:00:00'); // Your first date
const yearsEl = document.getElementById('years');
const monthsEl = document.getElementById('months');
const daysEl = document.getElementById('days');

function updateCounter() {
  const currentDate = new Date();
  const diffInTime = currentDate - firstDate; // Difference in milliseconds

  // Convert time difference to years, months, and days
  const diffInDays = Math.floor(diffInTime / (1000 * 60 * 60 * 24));
  const years = Math.floor(diffInDays / 365);
  const months = Math.floor((diffInDays % 365) / 30);
  const days = diffInDays % 30;

  // Update the counter
  yearsEl.textContent = years;
  monthsEl.textContent = months;
  daysEl.textContent = days;
}

// Update the counter every second
setInterval(updateCounter, 1000);

// Initial call to display the counter immediately
updateCounter();