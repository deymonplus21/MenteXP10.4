
const questions = [
    { question: "Pregunta difícil #1", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #2", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #3", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #4", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #5", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #6", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #7", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #8", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #9", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #10", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #11", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #12", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #13", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #14", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #15", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #16", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #17", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #18", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #19", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #20", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #21", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #22", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #23", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #24", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #25", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #26", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #27", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #28", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #29", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #30", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #31", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #32", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #33", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #34", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #35", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #36", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #37", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #38", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #39", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #40", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #41", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #42", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #43", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #44", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #45", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #46", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #47", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #48", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #49", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #50", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #51", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #52", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #53", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #54", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #55", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #56", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #57", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #58", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #59", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #60", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #61", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #62", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #63", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #64", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #65", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #66", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #67", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #68", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #69", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #70", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #71", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #72", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #73", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #74", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #75", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #76", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #77", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #78", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #79", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #80", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #81", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #82", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #83", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #84", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #85", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #86", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #87", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #88", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #89", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #90", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #91", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #92", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #93", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #94", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #95", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #96", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #97", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #98", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #99", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },
    { question: "Pregunta difícil #100", options: ["Opción A", "Opción B", "Opción C", "Opción D"], answer: "Opción A" },

];

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let timer;
let timeLeft = 120; // 2 minutos

const loginDiv = document.getElementById('login');
const gameDiv = document.getElementById('game');
const questionDiv = document.getElementById('question');
const optionsDiv = document.getElementById('options');
const nextBtn = document.getElementById('nextBtn');
const resultDiv = document.getElementById('result');
const scoreDiv = document.getElementById('score');
const timerDiv = document.getElementById('timer');
const restartBtn = document.getElementById('restartBtn');
const startBtn = document.getElementById('startBtn');
const usernameInput = document.getElementById('username');

const clickSound = new Audio('sounds/click.mp3');
const correctSound = new Audio('sounds/correct.mp3');
const wrongSound = new Audio('sounds/wrong.mp3');

startBtn.onclick = () => {
    const username = usernameInput.value.trim();
    if (username === "") {
        alert("Ingresa tu nombre para jugar.");
        return;
    }
    alert(`¡${username}, recuerda: "El conocimiento es el poder para cambiar tu mundo." ¡A jugar!`);
    loginDiv.style.display = 'none';
    gameDiv.style.display = 'block';
    startGame();
};

function startGame() {
    selectedQuestions = [];
    let shuffled = questions.sort(() => Math.random() - 0.5);
    selectedQuestions = shuffled.slice(0, 10); // 10 preguntas aleatorias sin repetir
    currentQuestion = 0;
    score = 0;
    timeLeft = 120;
    startTimer();
    showQuestion();
}

function startTimer() {
    timerDiv.innerText = `Tiempo: ${timeLeft}s`;
    timer = setInterval(() => {
        timeLeft--;
        timerDiv.innerText = `Tiempo: ${timeLeft}s`;
        if (timeLeft <= 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}

function showQuestion() {
    resetState();
    const question = selectedQuestions[currentQuestion];
    questionDiv.innerText = question.question;
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option;
        button.onclick = selectAnswer;
        optionsDiv.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    optionsDiv.innerHTML = '';
    resultDiv.innerText = '';
}

function selectAnswer(e) {
    clickSound.play();
    const selectedBtn = e.target;
    const answer = selectedQuestions[currentQuestion].answer;
    Array.from(optionsDiv.children).forEach(button => {
        button.disabled = true;
        if (button.innerText === answer) {
            button.classList.add('correct');
        } else if (button !== selectedBtn) {
            button.classList.add('wrong');
        }
    });
    if (selectedBtn.innerText === answer) {
        score++;
        resultDiv.innerText = "¡Correcto!";
        correctSound.play();
    } else {
        selectedBtn.classList.add('wrong');
        resultDiv.innerText = "Incorrecto.";
        wrongSound.play();
    }
    nextBtn.style.display = 'block';
}

nextBtn.onclick = () => {
    currentQuestion++;
    if (currentQuestion < selectedQuestions.length) {
        showQuestion();
    } else {
        endGame();
    }
};

function endGame() {
    clearInterval(timer);
    questionDiv.innerText = "Juego terminado";
    optionsDiv.innerHTML = '';
    resultDiv.innerText = '';
    scoreDiv.innerText = `Puntuación: ${score}/${selectedQuestions.length}`;
    nextBtn.style.display = 'none';
    restartBtn.style.display = 'block';
}

restartBtn.onclick = () => {
    startGame();
    scoreDiv.innerText = '';
    restartBtn.style.display = 'none';
};
