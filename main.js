let noClickCount = 0;

  function displayMessage(message) {
    const gif = document.getElementById('gif');
    const messageElement = document.getElementById('message');
    gif.src = "images/bear-kiss-bear-kisses.gif";
    messageElement.textContent = message;
    document.getElementById('buttons').innerHTML = '';
  }

  function handleNoClick() {
    const noButton = document.getElementById('no');
    const yesButton = document.getElementById('yes');
    const messages = ["Are you sure?🥺", "Really Sure?😢", "Think again 😛", "Last chance 😜", "You might regret this 😒","Absolutely Positive? 🤗","No Doubt? 😇","Final Decision? 🤔","Still Thinking? 🤨","Any Second Thoughts? 🧐","Just Say YES 🤐"];
    if (noClickCount < messages.length) {
      noButton.textContent = messages[noClickCount];
    } else {
      noButton.textContent = "FUCK YOU🤫";
    }
    noClickCount++;
    yesButton.style.fontSize = (16 + noClickCount * 10) + "px"; // Increasing font size more significantly
  }