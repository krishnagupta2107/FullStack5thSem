const reactionBox = document.getElementById("reactionBox");
const startBtn = document.getElementById("startBtn");
const result = document.getElementById("result");
const bestTimeDisplay = document.getElementById("bestTime");
const message = document.getElementById("message");
let timeoutId;
let startTime;
let gameRunning = false;
let waitingForGreen = false;
let bestTime = localStorage.getItem("bestTime");
if (bestTime !== null) {
    bestTimeDisplay.textContent = `Best time: ${bestTime} ms`;
}
// Start the reaction test
function startGame() {
    clearTimeout(timeoutId);
    gameRunning = true;
    waitingForGreen = true;
    reactionBox.style.background = "#ef4444";
    reactionBox.textContent = "Wait for Green!";
    result.textContent = "Your time: -- ms";
    message.textContent = "";
    startBtn.disabled = true;
    // Random delay between 2 and 5 seconds
    const delay = Math.floor(Math.random() * 3000) + 2000;
    timeoutId = setTimeout(function () {
        if (!gameRunning) return;
        reactionBox.style.background = "#22c55e";
        reactionBox.textContent = "CLICK NOW!";
        startTime = Date.now();
        waitingForGreen = false;
    }, delay);
}
// Handle clicks on the reaction box
reactionBox.addEventListener("click", function () {
    if (!gameRunning) return;
    if (waitingForGreen) {
        // Clicked before the box turned green
        clearTimeout(timeoutId);
        gameRunning = false;
        waitingForGreen = false;
        reactionBox.style.background = "#ef4444";
        reactionBox.textContent = "Too Early!";
        message.textContent = "False start! Try again.";
        startBtn.disabled = false;
        return;
    }
    // Calculate reaction time in milliseconds
    const reactionTime = Date.now() - startTime;
    result.textContent = `Your time: ${reactionTime} ms`;
    reactionBox.textContent = "Well Done!";
    reactionBox.style.background = "#2563eb";
    gameRunning = false;
    startBtn.disabled = false;
    // Save the best reaction time
    if (bestTime === null || reactionTime < Number(bestTime)) {
        bestTime = reactionTime;
        localStorage.setItem("bestTime", bestTime);
        bestTimeDisplay.textContent = `Best time: ${bestTime} ms`;
        message.textContent = "🎉 New personal best!";
    }
});
startBtn.addEventListener("click", startGame);