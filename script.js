const questions = [
    {
        question: "Which language is used for web page structure?",
        options: ["Python", "HTML", "Java", "C++"],
        answer: "HTML"
    },
    {
        question: "Which language is used for styling web pages?",
        options: ["CSS", "Java", "Python", "SQL"],
        answer: "CSS"
    },
    {
        question: "Which language is used for web interactivity?",
        options: ["Java", "JavaScript", "C", "PHP"],
        answer: "JavaScript"
    },
    {
        question: "Which company developed JavaScript?",
        options: ["Microsoft", "Google", "Netscape", "Apple"],
        answer: "Netscape"
    },
    {
        question: "What does CSS stand for?",
        options: [
            "Creative Style Sheets",
            "Cascading Style Sheets",
            "Computer Style Sheets",
            "Colorful Style Sheets"
        ],
        answer: "Cascading Style Sheets"
    }
];

let currentQuestion = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextBtn = document.getElementById("next-btn");

loadQuestion();

function loadQuestion() {
    optionsElement.innerHTML = "";

    let q = questions[currentQuestion];
    questionElement.textContent = q.question;

    q.options.forEach(option => {
        const button = document.createElement("button");
        button.textContent = option;
        button.classList.add("option-btn");

        button.addEventListener("click", () => checkAnswer(button, option));

        optionsElement.appendChild(button);
    });
}

function checkAnswer(button, selectedAnswer) {
    const correctAnswer = questions[currentQuestion].answer;
    const buttons = document.querySelectorAll(".option-btn");

    buttons.forEach(btn => btn.disabled = true);

    if (selectedAnswer === correctAnswer) {
        button.classList.add("correct");
        score++;
    } else {
        button.classList.add("wrong");

        buttons.forEach(btn => {
            if (btn.textContent === correctAnswer) {
                btn.classList.add("correct");
            }
        });
    }
}

nextBtn.addEventListener("click", () => {
    currentQuestion++;

    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResult();
    }
});

function showResult() {
    document.getElementById("quiz").classList.add("hide");
    document.getElementById("result").classList.remove("hide");

    document.getElementById(
        "score"
    ).textContent = `Your Score: ${score} / ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;

    document.getElementById("quiz").classList.remove("hide");
    document.getElementById("result").classList.add("hide");

    loadQuestion();
}
