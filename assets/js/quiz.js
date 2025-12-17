// assets/js/quiz.js

const questions = [
    { q: "What is my favorite color?", a: "a" },
    { q: "Where did we have our first date?", a: "a" },
    { q: "What month is our anniversary?", a: "a" },
    { q: "What is my biggest pet peeve?", a: "a" },
    { q: "What is the name of our future dog?", a: "a" },
    { q: "What is the title of 'our song'?", a: "a" },
    { q: "Which fictional city would I most like to visit?", a: "a" },
    { q: "What movie did we watch on our third date?", a: "a" },
    { q: "What is my coffee order?", a: "a" },
    { q: "What is the one thing I love most about you?", a: "a" }
];

let currentQuestionIndex = 0;
const totalQuestions = questions.length;
const quizContainer = document.getElementById('quiz-container');
const progressEl = document.getElementById('progress-text');
const statusEl = document.getElementById('access-status');

function displayQuestion() {
    if (currentQuestionIndex < totalQuestions) {
        const q = questions[currentQuestionIndex];
        
        quizContainer.innerHTML = `
            <h2>Question ${currentQuestionIndex + 1} of ${totalQuestions}</h2>
            <p class="progress-text">${q.q}</p>
            <input type="text" id="answer-input" class="quiz-input" placeholder="Your Answer" />
            <button class="btn" onclick="checkAnswer()">Submit</button>
        `;
        document.getElementById('answer-input').focus();
    } else {
        // Quiz complete!
        grantAccess();
    }
}

function checkAnswer() {
    const input = document.getElementById('answer-input').value.trim();
    const correctAnswer = questions[currentQuestionIndex].a.trim();

    // Simple case-insensitive check
    if (input.toLowerCase() === correctAnswer.toLowerCase()) {
        currentQuestionIndex++;
        displayQuestion();
    } else {
        alert('❌ Incorrect. Think harder, my love! Try again.');
        document.getElementById('answer-input').value = ''; // Clear input
        document.getElementById('answer-input').focus();
    }
}

function grantAccess() {
    quizContainer.innerHTML = `
        <h1 id="access-granted-text">ACCESS GRANTED!</h1>
        <p>Welcome to your birthday surprise, my beautiful love.</p>
        <button class="btn" onclick="window.location.href='home.html'">Enter the Site</button>
    `;

    const grantedText = document.getElementById('access-granted-text');
    grantedText.style.cssText = `
        font-size: 3em;
        color: var(--color-accent);
        text-shadow: 0 0 20px var(--color-accent);
        animation: accessGranted 1.5s ease-out forwards;
    `;

    // Optional: Hide previous progress/status elements
    if (progressEl) progressEl.style.display = 'none';
    if (statusEl) statusEl.style.display = 'none';
}

// Initialize the quiz when the page loads
document.addEventListener('DOMContentLoaded', displayQuestion);