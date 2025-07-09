
const questions = [
    { question: "¿En qué año cayó el Imperio Romano de Occidente?", options: ["476 d.C.", "1492 d.C.", "1453 d.C.", "410 d.C."], answer: "476 d.C." },
    { question: "¿Cuál es la fórmula química de la glucosa?", options: ["C6H12O6", "H2O", "CO2", "NaCl"], answer: "C6H12O6" },
    { question: "¿Quién es el autor de 'Cien años de soledad'?", options: ["Mario Vargas Llosa", "Pablo Neruda", "Gabriel García Márquez", "Julio Cortázar"], answer: "Gabriel García Márquez" },
    { question: "¿Qué planeta tiene el día más largo del sistema solar?", options: ["Venus", "Marte", "Mercurio", "Júpiter"], answer: "Venus" },
    { question: "¿Cuál es la capital de Canadá?", options: ["Toronto", "Vancouver", "Montreal", "Ottawa"], answer: "Ottawa" },
    { question: "¿Quién formuló la Ley de Gravitación Universal?", options: ["Albert Einstein", "Galileo Galilei", "Isaac Newton", "Nikola Tesla"], answer: "Isaac Newton" },
    { question: "¿En qué país se encuentra la Torre de Pisa?", options: ["Francia", "Italia", "España", "Grecia"], answer: "Italia" },
    { question: "¿Cuál es el elemento químico con símbolo Fe?", options: ["Flúor", "Francio", "Hierro", "Fermio"], answer: "Hierro" },
    { question: "¿Quién escribió 'La Ilíada' y 'La Odisea'?", options: ["Homero", "Sófocles", "Aristóteles", "Platón"], answer: "Homero" },
    { question: "¿Cuántos elementos tiene la tabla periódica actualmente?", options: ["106", "118", "112", "120"], answer: "118" },
    { question: "¿Cuál es el río más largo del mundo?", options: ["Amazonas", "Yangtsé", "Nilo", "Misisipi"], answer: "Nilo" },
    { question: "¿Quién propuso la teoría de la relatividad?", options: ["Isaac Newton", "Galileo Galilei", "Albert Einstein", "Stephen Hawking"], answer: "Albert Einstein" },
    { question: "¿Cuál es la capital de Australia?", options: ["Sídney", "Melbourne", "Canberra", "Perth"], answer: "Canberra" },
    { question: "¿Cuántos huesos tiene el cuerpo humano adulto?", options: ["196", "206", "216", "226"], answer: "206" },
    { question: "¿En qué año comenzó la Segunda Guerra Mundial?", options: ["1914", "1939", "1945", "1929"], answer: "1939" },
    { question: "¿Cuál es el idioma más hablado en el mundo?", options: ["Inglés", "Hindi", "Chino Mandarín", "Español"], answer: "Chino Mandarín" },
    { question: "¿Cuál es la unidad de medida de la resistencia eléctrica?", options: ["Amperio", "Voltio", "Ohmio", "Watt"], answer: "Ohmio" },
    { question: "¿Quién pintó 'La noche estrellada'?", options: ["Picasso", "Leonardo da Vinci", "Vincent van Gogh", "Monet"], answer: "Vincent van Gogh" },
    { question: "¿Cuál es la capital de Noruega?", options: ["Oslo", "Estocolmo", "Copenhague", "Helsinki"], answer: "Oslo" },
    { question: "¿Cuál es la fórmula del área de un círculo?", options: ["πr²", "2πr", "l × a", "b × h"], answer: "πr²" },
    { question: "¿Quién pintó la Mona Lisa?", options: ["Miguel Ángel", "Donatello", "Leonardo da Vinci", "Rafael"], answer: "Leonardo da Vinci" },
    { question: "¿Cuánto es 12 x 12?", options: ["124", "144", "112", "132"], answer: "144" },
    { question: "¿Capital de Francia?", options: ["Madrid", "París", "Roma", "Berlín"], answer: "París" },
    { question: "¿Raíz cuadrada de 81?", options: ["9", "8", "7", "6"], answer: "9" },
    { question: "¿Símbolo químico del Agua?", options: ["CO2", "O2", "H2O", "Na"], answer: "H2O" },
    { question: "¿Idioma oficial de Brasil?", options: ["Español", "Inglés", "Portugués", "Francés"], answer: "Portugués" },
    { question: "¿Planeta más grande?", options: ["Marte", "Tierra", "Júpiter", "Saturno"], answer: "Júpiter" },
    { question: "¿En qué continente está Egipto?", options: ["Asia", "África", "Europa", "Oceanía"], answer: "África" },
    { question: "¿Creador de Microsoft?", options: ["Steve Jobs", "Bill Gates", "Mark Zuckerberg", "Elon Musk"], answer: "Bill Gates" },
    { question: "¿Velocidad de la luz?", options: ["300,000 km/s", "150,000 km/s", "100,000 km/s", "50,000 km/s"], answer: "300,000 km/s" },
    { question: "¿Quién escribió 'La Divina Comedia'?", options: ["Shakespeare", "Dante Alighieri", "Homer", "Goethe"], answer: "Dante Alighieri" },
    { question: "¿Elemento químico con símbolo Fe?", options: ["Flúor", "Hierro", "Francio", "Fermio"], answer: "Hierro" },
    { question: "¿Teorema de Pitágoras?", options: ["a² + b² = c²", "E=mc²", "F=ma", "V=IR"], answer: "a² + b² = c²" },
    { question: "¿Planeta más cercano al Sol?", options: ["Venus", "Mercurio", "Marte", "Tierra"], answer: "Mercurio" },
    { question: "¿Lengua más hablada en India?", options: ["Hindi", "Inglés", "Bengalí", "Panyabí"], answer: "Hindi" },
    { question: "¿Año de la caída de Constantinopla?", options: ["1453", "1492", "1517", "1610"], answer: "1453" },
    { question: "¿Primer hombre en el espacio?", options: ["Neil Armstrong", "Yuri Gagarin", "Buzz Aldrin", "Laika"], answer: "Yuri Gagarin" },
    { question: "¿Capital de Nueva Zelanda?", options: ["Auckland", "Wellington", "Christchurch", "Hamilton"], answer: "Wellington" },
    { question: "¿Quién pintó 'El Grito'?", options: ["Dalí", "Munch", "Monet", "Manet"], answer: "Munch" },
    { question: "¿Qué mide un barómetro?", options: ["Temperatura", "Presión atmosférica", "Humedad", "Velocidad"], answer: "Presión atmosférica" },
    { question: "¿Teoría de la relatividad?", options: ["Newton", "Einstein", "Tesla", "Bohr"], answer: "Einstein" },
    { question: "¿Creador del psicoanálisis?", options: ["Piaget", "Freud", "Pavlov", "Skinner"], answer: "Freud" },
    { question: "¿Obra famosa de Cervantes?", options: ["Fausto", "Don Quijote", "Hamlet", "Edipo Rey"], answer: "Don Quijote" },
    { question: "¿Capital de Kazajistán?", options: ["Astana", "Tashkent", "Bishkek", "Bakú"], answer: "Astana" },
    { question: "¿Primer elemento de la tabla periódica?", options: ["Helio", "Hidrógeno", "Litio", "Oxígeno"], answer: "Hidrógeno" },
    { question: "¿En qué país nació Nietzsche?", options: ["Austria", "Suiza", "Alemania", "Francia"], answer: "Alemania" },
    { question: "¿Capital de Islandia?", options: ["Reikiavik", "Oslo", "Helsinki", "Estocolmo"], answer: "Reikiavik" },
    { question: "¿Año de independencia de EE.UU.?", options: ["1776", "1789", "1812", "1492"], answer: "1776" },
    { question: "¿Quién escribió '1984'?", options: ["Aldous Huxley", "George Orwell", "Ray Bradbury", "Isaac Asimov"], answer: "George Orwell" },
    { question: "¿Fundador de Facebook?", options: ["Elon Musk", "Steve Jobs", "Bill Gates", "Mark Zuckerberg"], answer: "Mark Zuckerberg" },
    { question: "¿Qué estudia la ontología?", options: ["Lenguaje", "Ser", "Número", "Sociedad"], answer: "Ser" },
    { question: "¿Padre de la filosofía?", options: ["Platón", "Sócrates", "Aristóteles", "Epicuro"], answer: "Sócrates" },
    { question: "¿Capital de Mongolia?", options: ["Hanoi", "Katmandú", "Ulán Bator", "Tashkent"], answer: "Ulán Bator" },
    { question: "¿Dónde se encuentra la Torre de Pisa?", options: ["Roma", "Venecia", "Florencia", "Pisa"], answer: "Pisa" },
    { question: "¿Río más largo del mundo?", options: ["Nilo", "Amazonas", "Yangtsé", "Misisipi"], answer: "Nilo" },
    { question: "¿Quién descubrió la penicilina?", options: ["Pasteur", "Newton", "Darwin", "Fleming"], answer: "Fleming" },
    { question: "¿Capital de Uzbekistán?", options: ["Astana", "Tashkent", "Bishkek", "Bakú"], answer: "Tashkent" },
    { question: "¿Teorema central de la biología?", options: ["ADN->ARN->Proteína", "F=ma", "E=mc²", "P=VI"], answer: "ADN->ARN->Proteína" },
    { question: "¿Escritor de 'Hamlet'?", options: ["Goethe", "Molière", "Shakespeare", "Homer"], answer: "Shakespeare" },
    { question: "¿Capital de Madagascar?", options: ["Maputo", "Kigali", "Antananarivo", "Dodoma"], answer: "Antananarivo" },
    { question: "¿Dónde se celebraron los primeros JJ.OO. modernos?", options: ["Atenas", "Roma", "París", "Londres"], answer: "Atenas" },
    { question: "¿Cuál es el metal más ligero?", options: ["Hierro", "Litio", "Plomo", "Cobre"], answer: "Litio" },
    { question: "¿Autor de 'Crimen y castigo'?", options: ["Tolstói", "Chejov", "Gógol", "Dostoyevski"], answer: "Dostoyevski" },
    { question: "¿Capital de Sri Lanka?", options: ["Colombo", "Dhaka", "Katmandú", "Male"], answer: "Colombo" },
    { question: "¿En qué país está Transilvania?", options: ["Hungría", "Serbia", "Rumania", "Polonia"], answer: "Rumania" },
    { question: "¿Padre de la teoría evolutiva?", options: ["Darwin", "Mendel", "Lamarck", "Wallace"], answer: "Darwin" },
    { question: "¿Quién pintó 'Guernica'?", options: ["Dalí", "Miró", "Picasso", "Velázquez"], answer: "Picasso" },
    { question: "¿Capital de Albania?", options: ["Tirana", "Sofía", "Belgrado", "Podgorica"], answer: "Tirana" },
    { question: "¿Dios principal del panteón griego?", options: ["Zeus", "Hades", "Poseidón", "Ares"], answer: "Zeus" },
    { question: "¿Quién descubrió América?", options: ["Magallanes", "Colón", "Vespucci", "Pizarro"], answer: "Colón" },
    { question: "¿Elemento más abundante del universo?", options: ["Oxígeno", "Hidrógeno", "Helio", "Carbono"], answer: "Hidrógeno" },
    { question: "¿Qué estudia la astronomía?", options: ["Animales", "Plantas", "Cuerpos celestes", "Rocas"], answer: "Cuerpos celestes" },
    { question: "¿Dónde nació Van Gogh?", options: ["España", "Francia", "Países Bajos", "Alemania"], answer: "Países Bajos" },
    { question: "¿Capital de Qatar?", options: ["Riad", "Doha", "Abu Dabi", "Kuwait"], answer: "Doha" },
    { question: "¿Qué significa ONU?", options: ["Organización Nacional Unida", "Organización de Naciones Unidas", "Orden Nacional Universal", "Órgano Neutral Unido"], answer: "Organización de Naciones Unidas" },
    { question: "¿Cuál es el satélite natural de la Tierra?", options: ["Sol", "Luna", "Marte", "Venus"], answer: "Luna" },
    { question: "¿Quién escribió 'Fausto'?", options: ["Goethe", "Kafka", "Hesse", "Nietzsche"], answer: "Goethe" },
    { question: "¿Capital de Jordania?", options: ["Ammán", "Beirut", "Damasco", "Bagdad"], answer: "Ammán" },
    { question: "¿En qué país está Machu Picchu?", options: ["Bolivia", "Chile", "México", "Perú"], answer: "Perú" },
    { question: "¿Qué es la mitosis?", options: ["División celular", "Fermentación", "Fotosíntesis", "Síntesis de proteínas"], answer: "División celular" },
    { question: "¿Qué descubrió Newton?", options: ["Relatividad", "Evolución", "Ley de gravedad", "Electromagnetismo"], answer: "Ley de gravedad" },
    { question: "¿Quién pintó 'La noche estrellada'?", options: ["Monet", "Picasso", "Goya", "Van Gogh"], answer: "Van Gogh" },
    { question: "¿Capital de Etiopía?", options: ["Nairobi", "Jartum", "Adís Abeba", "Kampala"], answer: "Adís Abeba" },
    { question: "¿Qué estudia la genética?", options: ["Energía", "Genes", "Minerales", "Virus"], answer: "Genes" },
    { question: "¿En qué mar está Chipre?", options: ["Báltico", "Adriático", "Mediterráneo", "Rojo"], answer: "Mediterráneo" },
    { question: "¿Qué planeta tiene anillos visibles?", options: ["Júpiter", "Urano", "Neptuno", "Saturno"], answer: "Saturno" }
];

let currentQuestion = 0;
let score = 0;
let selectedQuestions = [];
let timer;
let timeLeft = 30;

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
    selectedQuestions = shuffled.slice(0, 10);
    currentQuestion = 0;
    score = 0;
    timeLeft = 30;
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
