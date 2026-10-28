const grid = document.getElementById("grid");
const movesDisplay = document.getElementById("moves");
const pairsDisplay = document.getElementById("pairs");
const message = document.getElementById("message");
const restartBtn = document.getElementById("restartBtn");
const symbols = ["🍎", "🍌", "🍇", "🍒", "🍕", "🚗", "🐱", "⭐"];
let firstCard = null;
let secondCard = null;
let moves = 0;
let matchedPairs = 0;
let lockBoard = false;
// Shuffle the cards
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}
// Create the 16 cards
function createBoard() {
    grid.innerHTML = "";
    const cards = shuffle([...symbols, ...symbols]);
    cards.forEach(function (symbol) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.dataset.symbol = symbol;
        card.textContent = "?";
        grid.appendChild(card);
    });
}
// Handle card clicks using event delegation
grid.addEventListener("click", function (event) {
    const card = event.target.closest(".card");
    if (!card || lockBoard) return;
    if (card === firstCard) return;
    if (card.classList.contains("matched")) return;
    if (card.textContent !== "?") return;
    // Reveal the selected card
    card.textContent = card.dataset.symbol;
    if (firstCard === null) {
        firstCard = card;
        return;
    }
    secondCard = card;
    moves++;
    movesDisplay.textContent = moves;
    // Check whether the two cards match
    if (firstCard.dataset.symbol === secondCard.dataset.symbol) {
        firstCard.classList.add("matched");
        secondCard.classList.add("matched");
        matchedPairs++;
        pairsDisplay.textContent = matchedPairs;
        resetTurn();
        if (matchedPairs === 8) {
            message.textContent =
                `🎉 You won in ${moves} moves!`;
        }
    } else {
        // Lock clicks while mismatched cards flip back
        lockBoard = true;
        setTimeout(function () {
            firstCard.textContent = "?";
            secondCard.textContent = "?";
            resetTurn();
        }, 1000);
    }
});
// Reset the current turn
function resetTurn() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
}
// Restart the game
function restartGame() {
    firstCard = null;
    secondCard = null;
    lockBoard = false;
    moves = 0;
    matchedPairs = 0;
    movesDisplay.textContent = 0;
    pairsDisplay.textContent = 0;
    message.textContent = "Find all 8 matching pairs!";
    createBoard();
}
restartBtn.addEventListener("click", restartGame);
// Initialize the game
createBoard();