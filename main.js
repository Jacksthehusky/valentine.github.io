let noClickCount = 0;

function displayMessage(message) {
  const gif = document.getElementById('gif');
  const messageElement = document.getElementById('message');
  gif.src = "images/bear-kiss-bear-kisses.gif"; // Change the GIF
  messageElement.textContent = message; // Display the message
  document.getElementById('buttons').innerHTML = ''; // Remove the buttons

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
    noButton.textContent = "FUCK YOU🤫";
  }

  noClickCount++;
  yesButton.style.fontSize = (16 + noClickCount * 10) + "px"; // Increase font size
}