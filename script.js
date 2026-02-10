const music = document.getElementById("bg-music");
const savedTime = localStorage.getItem("musicTime");

if (savedTime) {
  music.currentTime = savedTime;
}

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });


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
  const now = new Date();
  let years = now.getFullYear() - firstDate.getFullYear();
  let months = now.getMonth() - firstDate.getMonth();
  let days = now.getDate() - firstDate.getDate();

  if (days < 0) {
    months--;
    const prevMonthDays = new Date(now.getFullYear(), now.getMonth(), 0).getDate();
    days += prevMonthDays;
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  let result = "";

  if (years > 0) {
    result += `${years} year${years > 1 ? "s" : ""}, `;
  }

  if (months > 0) {
    result += `${months} month${months > 1 ? "s" : ""}, `;
  }

  result += `${days} day${days > 1 ? "s" : ""} ❤️`;

  document.getElementById("counter").textContent = result;
}

// Update the counter every second
setInterval(updateCounter, 1000);

// Initial call to display the counter immediately
updateCounter();


window.addEventListener("scroll", () => {
  if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
    document.getElementById("secret").style.opacity = 1;
  }
});
