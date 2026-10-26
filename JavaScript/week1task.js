// Js Quiz Arena - Week 1 task

const quizQuestions = [
    { question: "Which language runs in a web browser?", options: ["Python", "JavaScript", "C++", "Java"], answer: 1, explanation: "JavaScript is the scripting language supported by all modern web browsers." },
    { question: "What does HTML stand for?", options: ["HyperText Markup Language", "HighText Machine Language", "Hyperlink Text Management Language", "Home Tool Markup Language"], answer: 0, explanation: "HTML means HyperText Markup Language." },
    { question: "Which CSS property changes text color?", options: ["font-style", "text-color", "color", "foreground"], answer: 2, explanation: "The color property sets the foreground color of text." },
    { question: "Which keyword declares a block-scoped constant?", options: ["var", "let", "const", "static"], answer: 2, explanation: "const creates a binding that cannot be reassigned." },
    { question: "Which method adds an item to the end of an array?", options: ["push()", "pop()", "shift()", "join()"], answer: 0, explanation: "push() appends one or more items to the end of an array." },
    { question: "What is the correct way to select an element by id?", options: ["document.id()", "document.getElementById()", "document.query()", "window.getId()"], answer: 1, explanation: "document.getElementById(id) returns the element with the matching id." },
    { question: "Which symbol starts a single-line JavaScript comment?", options: ["<!--", "//", "##", "/*"], answer: 1, explanation: "Two forward slashes start a single-line JavaScript comment." },
    { question: "Which value represents an intentional absence of a value?", options: ["undefined", "empty", "null", "void"], answer: 2, explanation: "null is used to represent an intentional absence of an object value." },
    { question: "Which operator checks both value and type?", options: ["==", "=", "!==", "==="], answer: 3, explanation: "The strict equality operator (===) checks value and type." },
    { question: "What does CSS primarily describe?", options: ["Database structure", "Page presentation", "Server routes", "User passwords"], answer: 1, explanation: "CSS describes how HTML content is presented and laid out." },
    { question: "Which HTML element creates a hyperlink?", options: ["<link>", "<a>", "<href>", "<url>"], answer: 1, explanation: "The anchor element, <a>, creates links using its href attribute." },
    { question: "Which array method creates a new array from matching items?", options: ["filter()", "find()", "every()", "reduce()"], answer: 0, explanation: "filter() returns a new array containing items that pass its test." },
    { question: "What is the default display value of a <div>?", options: ["inline", "flex", "block", "grid"], answer: 2, explanation: "A div is a block-level element by default." },
    { question: "Which event fires when a user clicks an element?", options: ["press", "mouseclick", "click", "tap"], answer: 2, explanation: "The click event is dispatched when an element is clicked." },
    { question: "Which format is commonly used for JavaScript data interchange?", options: ["JSON", "JPEG", "CSV only", "XML only"], answer: 0, explanation: "JSON is a lightweight, widely used data-interchange format." },
    { question: "What does DOM stand for?", options: ["Document Object Model", "Data Object Method", "Digital Ordinance Model", "Document Order Map"], answer: 0, explanation: "DOM stands for Document Object Model." },
    { question: "Which CSS layout system is one-dimensional?", options: ["Grid", "Flexbox", "Table", "Positioning"], answer: 1, explanation: "Flexbox is designed for one-dimensional row or column layouts." },
    { question: "What does NaN mean in JavaScript?", options: ["No assigned Name", "Not a Number", "Null and None", "New array Node"], answer: 1, explanation: "NaN means Not a Number and represents an invalid numeric result." },
    { question: "Which method converts JSON text into a JavaScript value?", options: ["JSON.parse()", "JSON.stringify()", "JSON.convert()", "JSON.read()"], answer: 0, explanation: "JSON.parse() deserializes JSON text into a JavaScript value." },
    { question: "Which HTML attribute provides alternative text for an image?", options: ["title", "src", "alt", "description"], answer: 2, explanation: "The alt attribute describes an image when it cannot be viewed." },
    { question: "Which keyword exits a loop immediately?", options: ["stop", "exit", "break", "return-loop"], answer: 2, explanation: "break immediately terminates the nearest loop or switch statement." },
    { question: "Which CSS unit is relative to the root font size?", options: ["em", "rem", "%", "vh"], answer: 1, explanation: "rem is relative to the root element's font size." },
    { question: "Which function schedules code to run once after a delay?", options: ["setTimeout()", "setInterval()", "delay()", "after()"], answer: 0, explanation: "setTimeout() runs a callback once after the specified delay." },
    { question: "Which HTTP status code means 'Not Found'?", options: ["200", "301", "404", "500"], answer: 2, explanation: "HTTP 404 means that the requested resource was not found." },
    { question: "Which JavaScript structure stores key-value pairs?", options: ["Map", "Set", "Queue", "Stack"], answer: 0, explanation: "A Map stores key-value pairs and supports keys of any type." }
];

const quizStyle = `
    :root { color-scheme: light; font-family: Inter, system-ui, sans-serif; }
    body { margin: 0; min-height: 100vh; background: #eef2ff; color: #172554; }
    .quiz-app { box-sizing: border-box; width: min(760px, calc(100% - 32px)); margin: 32px auto; padding: 28px; background: #fff; border-radius: 18px; box-shadow: 0 12px 35px #1e3a8a22; }
    .quiz-header, .quiz-meta, .quiz-actions { display: flex; align-items: center; justify-content: space-between; gap: 16px; }
    .quiz-header { margin-bottom: 18px; } h1 { margin: 0; font-size: clamp(1.5rem, 4vw, 2.2rem); } h2 { line-height: 1.35; }
    .score { font-weight: 700; color: #4338ca; white-space: nowrap; }
    .progress-track { height: 9px; overflow: hidden; background: #e0e7ff; border-radius: 99px; } .progress-bar { height: 100%; background: #4f46e5; transition: width .2s ease; }
    .quiz-meta { margin: 16px 0; color: #475569; } .timer { font-weight: 700; color: #dc2626; }
    .option-list { display: grid; gap: 12px; padding: 0; list-style: none; }
    .option { width: 100%; padding: 14px 16px; border: 2px solid #cbd5e1; border-radius: 10px; background: #fff; color: #172554; text-align: left; font: inherit; cursor: pointer; }
    .option:hover:not(:disabled), .option:focus-visible:not(:disabled) { border-color: #6366f1; background: #eef2ff; }
    .option:disabled { cursor: default; } .option.correct { border-color: #16a34a; background: #dcfce7; } .option.wrong { border-color: #dc2626; background: #fee2e2; }
    .explanation { margin: 18px 0; padding: 14px; border-left: 4px solid #6366f1; background: #eef2ff; color: #334155; }
    button.primary, button.secondary { border: 0; border-radius: 9px; padding: 11px 18px; font: inherit; font-weight: 700; cursor: pointer; }
    button.primary { background: #4f46e5; color: white; } button.secondary { background: #e2e8f0; color: #172554; } button:disabled { opacity: .5; cursor: not-allowed; }
    .quiz-actions { margin-top: 20px; } .quiz-actions .right { display: flex; gap: 10px; }
    .summary { text-align: center; } .summary h2 { font-size: 2rem; } .review { margin-top: 24px; text-align: left; }
    .review-item { margin: 14px 0; padding: 16px; border: 1px solid #fecaca; border-radius: 10px; background: #fff7f7; }
    .review-item h3 { margin: 0 0 8px; font-size: 1rem; } .correct-answer { color: #15803d; font-weight: 700; }
    @media (max-width: 520px) { .quiz-app { padding: 20px; } .quiz-header, .quiz-meta, .quiz-actions { align-items: flex-start; flex-direction: column; } .quiz-actions { width: 100%; } .quiz-actions .right { width: 100%; justify-content: space-between; } }
`;

function startQuizArena(root = document.body) {
    let currentQuestion = 0;
    let score = 0;
    let selected = false;
    let timerId = null;
    const wrongAnswers = [];

    const style = document.createElement("style");
    style.textContent = quizStyle;
    document.head.append(style);

    const app = root.querySelector("#quiz-app");
    if (!app) {
        throw new Error("Quiz container #quiz-app was not found.");
    }
    const quizScreen = app.querySelector("#quiz-screen");
    const summaryScreen = app.querySelector("#summary-screen");
    const questionTitle = app.querySelector("#question-title");
    const optionList = app.querySelector("#option-list");
    const explanation = app.querySelector("#explanation");
    const progressBar = app.querySelector("#progress-bar");
    const questionNumber = app.querySelector("#question-number");
    const timerText = app.querySelector("#timer");
    const scoreText = app.querySelector("#score");
    const nextButton = app.querySelector("#next-button");
    const restartButton = app.querySelector("#restart-button");
    const reviewButton = app.querySelector("#review-button");
    const review = app.querySelector("#review");

    if ([quizScreen, summaryScreen, questionTitle, optionList, explanation, progressBar,
        questionNumber, timerText, scoreText, nextButton, restartButton, reviewButton, review]
        .some((element) => !element)) {
        throw new Error("Quiz HTML is missing a required element.");
    }

    function stopTimer() {
        if (timerId !== null) {
            window.clearInterval(timerId);
            timerId = null;
        }
    }

    function renderQuestion() {
        stopTimer();
        selected = false;
        const item = quizQuestions[currentQuestion];
        const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
        quizScreen.hidden = false;
        summaryScreen.hidden = true;
        questionTitle.textContent = item.question;
        questionNumber.textContent = `Question ${currentQuestion + 1}/${quizQuestions.length}`;
        scoreText.textContent = `Score: ${score}`;
        progressBar.style.width = `${progress}%`;
        explanation.hidden = true;
        explanation.textContent = "";
        nextButton.disabled = true;
        nextButton.textContent = currentQuestion === quizQuestions.length - 1 ? "Finish" : "Next";
        optionList.replaceChildren();
        item.options.forEach((option, index) => {
            const button = document.createElement("button");
            button.className = "option";
            button.type = "button";
            button.textContent = option;
            button.addEventListener("click", () => answerQuestion(index, false));
            optionList.append(button);
        });
        let remaining = 30;
        timerId = window.setInterval(() => {
            remaining -= 1;
            timerText.textContent = `Time: ${remaining}s`;
            if (remaining <= 0) answerQuestion(null, true);
        }, 1000);
    }

    function answerQuestion(choice, timedOut) {
        if (selected) return;
        selected = true;
        stopTimer();
        const item = quizQuestions[currentQuestion];
        const buttons = [...optionList.querySelectorAll(".option")];
        buttons.forEach((button, index) => {
            button.disabled = true;
            if (index === item.answer) button.classList.add("correct");
            if (index === choice && choice !== item.answer) button.classList.add("wrong");
        });
        if (choice === item.answer) score += 1;
        else wrongAnswers.push({ item, choice, timedOut });
        explanation.hidden = false;
        explanation.textContent = timedOut ? `Time's up. ${item.explanation}` : item.explanation;
        scoreText.textContent = `Score: ${score}`;
        nextButton.disabled = false;
    }

    function nextQuestion() {
        if (!selected) return;
        if (currentQuestion === quizQuestions.length - 1) renderSummary();
        else {
            currentQuestion += 1;
            renderQuestion();
        }
    }

    function renderSummary() {
        stopTimer();
        const percentage = Math.round((score / quizQuestions.length) * 100);
        const rating = percentage >= 80 ? "Excellent work!" : percentage >= 50 ? "Good effort—keep practising!" : "Keep learning and try again!";
        quizScreen.hidden = true;
        summaryScreen.hidden = false;
        app.querySelector("#final-score").textContent = `${score}/${quizQuestions.length} (${percentage}%)`;
        app.querySelector("#rating").textContent = rating;
        reviewButton.textContent = `Review wrong answers (${wrongAnswers.length})`;
        reviewButton.disabled = false;
        review.hidden = true;
        review.replaceChildren();
        reviewButton.onclick = () => {
            review.hidden = false;
            review.replaceChildren();
            const heading = document.createElement("h2");
            heading.textContent = wrongAnswers.length ? "Wrong answers" : "Perfect score!";
            review.append(heading);
            if (!wrongAnswers.length) {
                const message = document.createElement("p");
                message.textContent = "There are no wrong answers to review.";
                review.append(message);
            }
            wrongAnswers.forEach(({ item, choice, timedOut }, index) => {
                const entry = document.createElement("article");
                entry.className = "review-item";
                const title = document.createElement("h3");
                title.textContent = `${index + 1}. ${item.question}`;
                entry.append(title);
                const result = document.createElement("p");
                result.textContent = timedOut ? "Your answer: Time expired" : `Your answer: ${item.options[choice]}`;
                entry.append(result);
                const correct = document.createElement("p");
                correct.className = "correct-answer";
                correct.textContent = `Correct answer: ${item.options[item.answer]}`;
                entry.append(correct);
                const explanation = document.createElement("p");
                explanation.textContent = item.explanation;
                entry.append(explanation);
                review.append(entry);
            });
            reviewButton.disabled = true;
        };
    }

    function resetQuiz() {
        currentQuestion = 0;
        score = 0;
        wrongAnswers.length = 0;
        renderQuestion();
    }

    nextButton.addEventListener("click", nextQuestion);
    restartButton.addEventListener("click", resetQuiz);
    renderQuestion();
    return { reset: resetQuiz };
}

if (typeof document !== "undefined") {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", () => startQuizArena());
    else startQuizArena();
}