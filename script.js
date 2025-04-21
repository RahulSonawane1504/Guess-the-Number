let secretNumber = Math.floor(Math.random() * 100) + 1;
let score = 10;

const guessInput = document.getElementById("guessInput");
const checkBtn = document.getElementById("checkBtn");
const resetBtn = document.getElementById("resetBtn");
const message = document.getElementById("message");
const scoreDisplay = document.getElementById("score");

function displayMessage(msg) {
  message.textContent = msg;
}

checkBtn.addEventListener("click", () => {
  const guess = Number(guessInput.value);

  if (!guess || guess < 1 || guess > 100) {
    displayMessage("⛔ Enter a number between 1 and 100!");
    return;
  }

  if (guess === secretNumber) {
    displayMessage("🎉 Correct! You guessed it!");
    document.body.style.background =
      "linear-gradient(135deg, #11998e, #38ef7d)";
    checkBtn.disabled = true;
  } else {
    if (score > 1) {
      displayMessage(guess > secretNumber ? "📉 Too high!" : "📈 Too low!");
      score--;
      scoreDisplay.textContent = score;
    } else {
      displayMessage("💥 Game over! You've used all attempts.");
      scoreDisplay.textContent = 0;
      checkBtn.disabled = true;
    }
  }
});

resetBtn.addEventListener("click", () => {
  score = 10;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  scoreDisplay.textContent = score;
  guessInput.value = "";
  displayMessage("Start guessing...");
  checkBtn.disabled = false;
  document.body.style.background =
    "linear-gradient(135deg, #0f2027, #203a43, #2c5364)";
});
