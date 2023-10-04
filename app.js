let shouldCountdown = false; // Flag to control the timer
let timeLeft = 60;
let currentQuestionIndex = 0;
let timer;
let correctAnswers = 0;
let wrongAnswers = 0;

// Get elements
const startButton = document.getElementById('start-button');
const quizContainer = document.getElementById('quiz-container');
const startScreen = document.getElementById('start-screen');
const timerElement = document.getElementById('timer');
const scoreElement = document.getElementById('score');
const questionElement = document.getElementById('question');
const answersElement = document.getElementById('answers');
const saveScoreButton = document.getElementById('save-score');
const finalScoreElement = document.getElementById('final-score');
const initialsInput = document.getElementById('initials');
const resetMyScoresButton = document.getElementById('reset-my-scores');
const resetTopScoresButton = document.getElementById('reset-top-scores');

// Event listeners
startButton.addEventListener('click', startQuiz);
saveScoreButton.addEventListener('click', saveScore);
document.getElementById('my-scores-button').addEventListener('click', showMyScoresPage);
document.getElementById('top-scores-button').addEventListener('click', showTopScoresPage);
document.getElementById('go-back-from-save').addEventListener('click', () => switchPage('main-page'));
document.getElementById('go-back-from-my-scores').addEventListener('click', () => switchPage('main-page'));
document.getElementById('go-back-from-top-scores').addEventListener('click', () => switchPage('main-page'));
document.getElementById('restart-quiz').addEventListener('click', restartQuiz);



function startQuiz() {
    document.getElementById('restart-quiz').classList.remove('hidden');
    document.getElementById('instruction-text').textContent = "You can restart the quiz anytime by clicking on the 'Restart Quiz' button.";
    startScreen.classList.add('hidden');
    quizContainer.classList.remove('hidden');
    correctAnswers = 0;
    wrongAnswers = 0;
    updateScoreBox();
    showQuestion();
    startTimer();
}

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (shouldCountdown) {
        timeLeft--;
    }
    timerElement.textContent = timeLeft;

    if (timeLeft <= 0) {
        clearInterval(timer);
        endQuiz();
    }
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionElement.textContent = question.question;
    answersElement.innerHTML = '';

    question.answers.forEach((answer, index) => {
        const button = document.createElement('button');
        button.textContent = answer;
        button.addEventListener('click', () => selectAnswer(index));
        answersElement.appendChild(button);
    });
}

function selectAnswer(selectedIndex) {
    const correctIndex = questions[currentQuestionIndex].correct;

    if (selectedIndex === correctIndex) {
        correctAnswers++;
        shouldCountdown = false;
    } else {
        wrongAnswers++;
        shouldCountdown = true;
    }

    updateScoreBox();
    nextQuestion();
}

function updateScoreBox() {
    scoreElement.textContent = `Correct: ${correctAnswers} | Wrong: ${wrongAnswers}`;
}

function nextQuestion() {
    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        clearInterval(timer);
        endQuiz();
    }
}

function endQuiz() {
    quizContainer.classList.add('hidden');
    document.getElementById('main-page').classList.add('hidden'); // Hide the main page
    document.getElementById('instruction-text').textContent = "Press the 'Start Quiz' button to begin!";
    document.getElementById('save-score-page').classList.remove('hidden'); // Show the save score page
    finalScoreElement.textContent = 'Your final score is: ' + correctAnswers;
}


// function saveScore() {
//     const initials = initialsInput.value;
//     const scores = JSON.parse(localStorage.getItem('scores')) || [];
//     scores.push({ initials, score: correctAnswers });
//     localStorage.setItem('scores', JSON.stringify(scores));
//     alert('Score saved!');
//     document.getElementById('save-score-page').classList.add('hidden');
//     document.getElementById('main-page').classList.remove('hidden');

function saveScore() {
    const initials = initialsInput.value;
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.push({ initials, score: correctAnswers });
    localStorage.setItem('scores', JSON.stringify(scores));

    alert('Score saved!');

    // Refresh the page to go back to the main screen
    location.reload();
}


function showMyScoresPage() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    document.getElementById('my-scores-list').innerHTML = scores.map(s => s.initials + ': ' + s.score).join('<br>');
    switchPage('my-scores-page');
}

function showTopScoresPage() {
    const scores = JSON.parse(localStorage.getItem('scores')) || [];
    scores.sort((a, b) => b.score - a.score);
    const topScores = scores.slice(0, 10);
    document.getElementById('top-scores-list').innerHTML = topScores.map(s => s.initials + ': ' + s.score).join('<br>');
    switchPage('top-scores-page');
}

function switchPage(pageId) {
    ['main-page', 'save-score-page', 'my-scores-page', 'top-scores-page'].forEach(id => {
        document.getElementById(id).classList.add('hidden');
    });
    document.getElementById(pageId).classList.remove('hidden');
}

// This function is updated to remove 'scores' from local storage
resetMyScoresButton.addEventListener('click', function() {
    localStorage.removeItem('scores');
    document.getElementById('my-scores-list').innerHTML = '';
});

// This function is updated to remove 'scores' from local storage
resetTopScoresButton.addEventListener('click', function() {
    localStorage.removeItem('scores');
    document.getElementById('top-scores-list').innerHTML = '';
});

function restartQuiz() {
    // Reset all relevant variables
    questionElement.textContent = ""; // Clear the question
    answersElement.innerHTML = "";    // Clear the choices
    shouldCountdown = false;
    timeLeft = 60;
    currentQuestionIndex = 0;
    correctAnswers = 0;
    wrongAnswers = 0;
    

    // Clear timer
    clearInterval(timer);

    // Show start screen and hide all other screens
    switchPage('main-page');
    startScreen.classList.remove('hidden');
    quizContainer.classList.add('hidden');

    // Reset score and timer displays
    scoreElement.textContent = "Correct: 0 | Wrong: 0";
    timerElement.textContent = "60";
}