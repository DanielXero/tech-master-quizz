const quizData = [
    {
        question: "¿Qué modelo organizacional permite compartir grandes volúmenes de datos sin necesidad de transmisión explícita entre subsistemas?",
        options: ["Modelo de capas", "Modelo cliente-servidor", "Modelo de repositorio", "Modelo peer-to-peer"],
        correctAnswer: 2,
        explanation: "Permite compartir datos sin transmisión explícita mediante un almacén central",
        difficulty: "Fácil"
    },
    {
        question: "En un sistema de gestión hospitalaria, los módulos de \"Consulta Médica\" y \"Historial Clínico\" necesitan compartir información constantemente sin duplicar datos. ¿Cuál sería la mejor solución arquitectónica para manejar esto?",
        options: ["Implementar un modelo de repositorio centralizado", "Separar completamente ambos módulos sin relación", "Usar una arquitectura en capas para dividir sus funciones", "Aplicar un modelo peer-to-peer para descentralizar el control"],
        correctAnswer: 0,
        explanation: "Evita duplicación y facilita acceso compartido a datos clínicos",
        difficulty: "Media"
    },
    {
        question: "Una empresa de software está desarrollando un sistema de reservas de vuelos. Se ha identificado que las consultas de disponibilidad y las reservas deben ejecutarse en módulos separados para mejorar la eficiencia. ¿Qué estrategia de diseño debe aplicarse?",
        options: ["Separar las funcionalidades en módulos independientes con baja dependencia", "Unificar todas las funciones en un único módulo central", "Diseñar su modularización para reducir la cantidad de componentes", "Aplicar un modelo de repositorio para evitar llamadas entre módulos"],
        correctAnswer: 0,
        explanation: "Patrón de diseño modular para alta cohesión y bajo acoplamiento",
        difficulty: "Fácil"
    },
    {
        question: "Un sistema financiero necesita asegurar que los datos de cuentas bancarias y transacciones sean correctamente validados. Para garantizar que una cuenta solo sea insuficiente y no se procese un retiro, ¿qué mecanismo debe emplearse?",
        options: ["Definir reglas de negocio en el esquema conceptual", "Eliminar la relación entre cuenta y transacción", "Permitir la transacción y corregirla manualmente", "Usar cardinalidades mínimas y máximas en la entidad Cuenta"],
        correctAnswer: 0,
        explanation: "Validaciones como \"saldo >= monto retiro\" deben estar en la lógica del negocio o base de datos",
        difficulty: "Difícil"
    },
    {
        question: "¿Qué técnica de verificación y validación se considera estática?",
        options: ["Pruebas de integración", "Inspecciones de software", "Pruebas de caja negra", "Pruebas funcionales"],
        correctAnswer: 1,
        explanation: "Técnica estática: revisión manual o con herramientas sin ejecutar el código",
        difficulty: "Media"
    },
    {
        question: "En un sistema de control de tráfico aéreo, los desarrolladores necesitan asegurar que el programa reacciona adecuadamente ante condiciones extremas de congestión. ¿Qué prueba debe realizarse para verificar esto?",
        options: ["Pruebas de integración", "Pruebas de validación", "Pruebas de rendimiento", "Inspecciones de código"],
        correctAnswer: 2,
        explanation: "Evalúan comportamiento bajo carga extrema, como congestión en tráfico aéreo",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es una ventaja del modelo cliente-servidor en los sistemas distribuidos?",
        options: ["Eliminación de la comunicación entre clientes", "Facilidad para escalar el sistema", "Reducción de la seguridad del sistema", "Dependencia total de un único servidor"],
        correctAnswer: 1,
        explanation: "El modelo cliente-servidor permite escalar horizontal o verticalmente, adaptándose a cargas crecientes.",
        difficulty: "Fácil"
    },
    {
        question: "Un equipo de desarrollo diseña un sistema de control de tráfico aéreo. Para garantizar la reacción rápida ante emergencias, el sistema debe responder inmediatamente a eventos inesperados. ¿Qué modelo de control sería más efectivo en este caso?",
        options: ["Modelo basado en interrupciones", "Modelo de repositorio", "Modelo de capas", "Modelo de llamada-retorno"],
        correctAnswer: 0,
        explanation: "El modelo basado en interrupciones responde a eventos externos de forma inmediata, ideal para emergencias.",
        difficulty: "Media"
    },
    {
        question: "Según Morville (2004), ¿cuáles son los tres elementos que condicionan el proceso de diseño?",
        options: ["Tecnología, marketing y pruebas", "Usuarios, contexto y contenidos", "Rendimiento, estética y código", "Modelado, programación y pruebas"],
        correctAnswer: 1,
        explanation: "Usuarios (necesidades), contexto (entorno) y contenidos (información) son los pilares del diseño según Morville.",
        difficulty: "Fácil"
    },
    {
        question: "Un analista diseña un modelo de datos para un sistema de gestión de pedidos. Se encuentra con una regla que indica que un proveedor no se puede dar de baja si tiene pedidos pendientes. ¿Cómo se clasificaría esta regla dentro del modelo de datos?",
        options: ["Regla de negocio", "Cardinalidad", "Dependencia funcional", "Jerarquía de generalización"],
        correctAnswer: 0,
        explanation: "Las reglas de negocio definen restricciones operativas que deben validarse en la base de datos o lógica del sistema.",
        difficulty: "Difícil"
    },
    {
        question: "Un equipo de desarrollo está construyendo un sistema financiero. Se detecta un problema en el código que permite operaciones sin restricciones en horarios no hábiles. ¿Qué tipo de prueba sería más adecuada para detectar este problema?",
        options: ["Pruebas de integración", "Pruebas de validación", "Pruebas de defectos", "Pruebas estáticas"],
        correctAnswer: 3,
        explanation: "Las pruebas estáticas (ej.: revisiones de código) identifican errores lógicos sin ejecutar el sistema.",
        difficulty: "Media"
    },
    {
        question: "¿Cuál es una ventaja clave de las inspecciones de software sobre las pruebas?",
        options: ["Se pueden realizar sin ejecutar el software", "Reducen la necesidad de pruebas", "Son aplicables solo en la fase de desarrollo", "No requieren documentación previa"],
        correctAnswer: 0,
        explanation: "Las inspecciones son técnicas estáticas que revisan documentos o código sin necesidad de ejecutar el sistema.",
        difficulty: "Media"
    }
];

let currentQuestionIndex = 0;
let userAnswers = [];
let score = 0;
let timeElapsed = 0;
let timerInterval;
let shuffledQuestions = [];

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const questionNumber = document.getElementById('question-number');
const currentQuestionSpan = document.getElementById('current-question');
const totalQuestionsSpan = document.getElementById('total-questions');
const totalQuestionsSpan2 = document.getElementById('total-questions-2');
const progressBar = document.getElementById('progress');
const progressPercent = document.getElementById('progress-percent');
const nextBtn = document.getElementById('next-btn');
const prevBtn = document.getElementById('prev-btn');
const finishBtn = document.getElementById('finish-btn');
const difficultySpan = document.getElementById('difficulty');
const explanationText = document.getElementById('explanation-text');
const explanationDiv = document.getElementById('explanation');
const explanationToggle = document.getElementById('explanation-toggle');
const resultsModal = document.getElementById('results-modal');
const scoreSpan = document.getElementById('score');
const correctAnswersSpan = document.getElementById('correct-answers');
const finalTimeSpan = document.getElementById('final-time');
const percentageSpan = document.getElementById('percentage');
const scoreRing = document.getElementById('score-ring');
const restartBtn = document.getElementById('restart-btn');
const closeBtn = document.getElementById('close-btn');
const timerDisplay = document.getElementById('time');
const answeredCount = document.getElementById('answered-count');

function shuffleArray(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
}

function initQuiz() {
    shuffledQuestions = shuffleArray(quizData);
    userAnswers = Array(shuffledQuestions.length).fill(null);
    
    totalQuestionsSpan.textContent = shuffledQuestions.length;
    totalQuestionsSpan2.textContent = shuffledQuestions.length;
    loadQuestion(currentQuestionIndex);
    startTimer();
    
    explanationToggle.addEventListener('click', toggleExplanation);
}

function loadQuestion(index) {
    const question = shuffledQuestions[index];
    questionText.textContent = question.question;
    questionNumber.textContent = index + 1;
    currentQuestionSpan.textContent = index + 1;
    
    const progress = ((index + 1) / shuffledQuestions.length) * 100;
    progressBar.style.width = `${progress}%`;
    progressPercent.textContent = `${Math.round(progress)}%`;
    
    const answered = userAnswers.filter(answer => answer !== null).length;
    answeredCount.textContent = answered;
    
    difficultySpan.textContent = question.difficulty;
    difficultySpan.className = 'difficulty-chip ';
    
    switch(question.difficulty) {
        case 'Fácil':
            difficultySpan.classList.add('difficulty-easy');
            break;
        case 'Media':
            difficultySpan.classList.add('difficulty-medium');
            break;
        case 'Difícil':
            difficultySpan.classList.add('difficulty-hard');
            break;
    }
    
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, i) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option-card p-4 bg-white rounded-lg cursor-pointer border border-gray-100 shadow-sm';
        optionElement.innerHTML = `
            <div class="flex items-center">
                <span class="flex items-center justify-center w-6 h-6 rounded-full bg-indigo-50 text-indigo-600 font-medium text-sm mr-3">${String.fromCharCode(65 + i)}</span>
                <span class="text-gray-800">${option}</span>
            </div>
        `;
        
        if (userAnswers[index] === i) {
            optionElement.classList.add('selected');
        }
        
        optionElement.addEventListener('click', () => selectOption(i, optionElement));
        optionsContainer.appendChild(optionElement);
    });
    
    prevBtn.disabled = index === 0;
    
    if (index === shuffledQuestions.length - 1) {
        nextBtn.classList.add('hidden');
        finishBtn.classList.remove('hidden');
    } else {
        nextBtn.classList.remove('hidden');
        finishBtn.classList.add('hidden');
    }
    
    explanationDiv.classList.remove('open');
    explanationToggle.querySelector('i').style.transform = 'rotate(0deg)';
    
    questionText.style.opacity = 0;
    optionsContainer.style.opacity = 0;
    setTimeout(() => {
        questionText.style.opacity = 1;
        optionsContainer.style.opacity = 1;
    }, 50);
}

function toggleExplanation() {
    explanationDiv.classList.toggle('open');
    const icon = explanationToggle.querySelector('i');
    icon.style.transform = explanationDiv.classList.contains('open') ? 'rotate(180deg)' : 'rotate(0deg)';
}

function selectOption(optionIndex, optionElement) {
    const currentQuestion = shuffledQuestions[currentQuestionIndex];
    
    document.querySelectorAll('.option-card').forEach(opt => {
        opt.classList.remove('selected', 'correct', 'incorrect');
    });
    
    optionElement.classList.add('selected');
    userAnswers[currentQuestionIndex] = optionIndex;
    
    if (optionIndex === currentQuestion.correctAnswer) {
        optionElement.classList.add('correct');
    } else {
        optionElement.classList.add('incorrect');
        document.querySelectorAll('.option-card')[currentQuestion.correctAnswer].classList.add('correct');
    }
    
    explanationText.textContent = currentQuestion.explanation;
    if (!explanationDiv.classList.contains('open')) {
        toggleExplanation();
    }
    
    const answered = userAnswers.filter(answer => answer !== null).length;
    answeredCount.textContent = answered;
}

nextBtn.addEventListener('click', () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
        currentQuestionIndex++;
        loadQuestion(currentQuestionIndex);
    }
});

prevBtn.addEventListener('click', () => {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        loadQuestion(currentQuestionIndex);
    }
});

finishBtn.addEventListener('click', () => {
    calculateScore();
    showResults();
    stopTimer();
});

function calculateScore() {
    score = 0;
    for (let i = 0; i < shuffledQuestions.length; i++) {
        if (userAnswers[i] === shuffledQuestions[i].correctAnswer) {
            score++;
        }
    }
}

function showResults() {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    
    scoreSpan.textContent = score;
    correctAnswersSpan.textContent = score;
    finalTimeSpan.textContent = timerDisplay.textContent;
    percentageSpan.textContent = percentage;
    
    // Animate score ring
    const circumference = 283;
    const offset = circumference - (percentage / 100) * circumference;
    setTimeout(() => {
        scoreRing.style.strokeDashoffset = offset;
    }, 100);
    
    resultsModal.classList.remove('hidden');
}

function startTimer() {
    timerInterval = setInterval(() => {
        timeElapsed++;
        const minutes = Math.floor(timeElapsed / 60);
        const seconds = timeElapsed % 60;
        timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

restartBtn.addEventListener('click', () => {
    currentQuestionIndex = 0;
    userAnswers = Array(shuffledQuestions.length).fill(null);
    timeElapsed = 0;
    timerDisplay.textContent = '00:00';
    
    shuffledQuestions = shuffleArray(quizData);
    
    resultsModal.classList.add('hidden');
    loadQuestion(currentQuestionIndex);
    startTimer();
});

closeBtn.addEventListener('click', () => {
    resultsModal.classList.add('hidden');
});

window.addEventListener('DOMContentLoaded', initQuiz);