const grid = document.getElementById("grid");
const scoreDisplay = document.getElementById("score");
const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("startBtn");
const message = document.getElementById("message");
let score = 0;
let timeLeft = 30;
let gameRunning = false;
let activeCell = null;
let spawnInterval;
let timerInterval;
// Create the 3x3 grid using a for loop
for (let i = 0; i < 9; i++) {
    const cell = document.createElement("div");
    cell.classList.add("cell");
    grid.appendChild(cell);
}
// Show a mole in a random cell
function spawnMole() {
    if (activeCell) {
        activeCell.textContent = "";
        activeCell.classList.remove("active");
    }
    const cells = grid.children;
    const randomIndex = Math.floor(Math.random() * cells.length);
    activeCell = cells[randomIndex];
    activeCell.textContent = "🐶";
    activeCell.classList.add("active");
}
// Event delegation
grid.addEventListener("click", function (event) {
    if (!gameRunning) return;
    const cell = event.target.closest(".cell");
    if (cell && cell === activeCell) {
        score++;
        scoreDisplay.textContent = score;
        cell.textContent = "";
        cell.classList.remove("active");
        activeCell = null;
    }
});
// End the game
function endGame() {
    gameRunning = false;
    clearInterval(spawnInterval);
    clearInterval(timerInterval);
    if (activeCell) {
        activeCell.textContent = "";
        activeCell.classList.remove("active");
        activeCell = null;
    }
    message.textContent = `Game Over! Your score: ${score}`;
    startBtn.disabled = false;
}
// Start the game
function startGame() {
    if (gameRunning) return;
    score = 0;
    timeLeft = 30;
    gameRunning = true;
    scoreDisplay.textContent = score;
    timeDisplay.textContent = timeLeft;
    message.textContent = "Whack the mole!";
    startBtn.disabled = true;
    spawnMole();
    spawnInterval = setInterval(spawnMole, 800);
    timerInterval = setInterval(function () {
        timeLeft--;
        timeDisplay.textContent = timeLeft;
        if (timeLeft <= 0) {
            endGame();
        }
    }, 1000);
}
startBtn.addEventListener("click", startGame);