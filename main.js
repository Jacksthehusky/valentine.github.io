let noClickCount = 0;

function displayMessage(message) {
  const gif = document.getElementById('gif');
  const messageElement = document.getElementById('message');
  gif.src = "images/bear-kiss-bear-kisses.gif"; // Change the GIF
  messageElement.textContent = message; // Display the message
  document.getElementById('buttons').innerHTML = ''; // Remove the buttons

   // Save music time
  const music = document.getElementById("bg-music");
  localStorage.setItem("musicTime", music.currentTime);
  
// Trigger confetti
confetti({
  particleCount: 100,
  spread: 70,
  origin: { y: 0.6 }
});
  // Redirect to index.html after 1 second
  setTimeout(() => {
    window.location.href = "nour.html"; // Redirect to the main website
  }, 1000); // 3000 milliseconds = 3 seconds
}

function handleNoClick() {
  const noButton = document.getElementById('no');
  const yesButton = document.getElementById('yes');
  const messages = [
    "Are you sure?🥺", 
    "Really Sure?😢", 
    "Think again 😛", 
    "Last chance 😜", 
    "Absolutely Positive? 🤗",
    "Final Decision? 🤔",
    "Still Thinking? 🤨",
    "Just Say YES 🤐"
  ];

  if (noClickCount < messages.length) {
    noButton.textContent = messages[noClickCount];
  } else {
    noButton.textContent = "Nice try 😏";
  }

   const x = Math.random() * 200 - 100;
  const y = Math.random() * 200 - 100;

  noButton.style.transform = `translate(${x}px, ${y}px)`;

  noClickCount++;
  yesButton.style.fontSize = (16 + noClickCount * 8) + "px"; // Increase font size

  confetti({
  particleCount: 30,
  spread: 120,
  origin: { x: Math.random(), y: 0.6 }
});

}

const music = document.getElementById("bg-music");

document.body.addEventListener("click", () => {
  music.play();
}, { once: true });
