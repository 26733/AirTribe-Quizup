const questions = [
    {
        text: "Which language is primarily used for web app development?",
        options: ["C#", "Python", "JavaScript", "Swift"],
        correct: 2
    },
    {
        text: "Which of the following is a relational database management system?",
        options: ["Oracle", "Scala", "Perl", "Java"],
        correct: 0
    },
    {
        text: "What does HTML stand for?",
        options: ["Hyperlink and Text Markup Language", "High Technology Modern Language", "Hyper Text Markup Language", "Home Tool Markup Language"],
        correct: 2
    },
    {
        text: "What does CSS stand for?",
        options: ["Cascading Stylesheets", "Cascading Styling Styles", "Cascading Sheets for Stylings", "Cascaded Stylesheets"],
        correct: 0
    },
    {
        text: "Which of the following is not an object-oriented programming language?",
        options: ["Java", "C#", "Scala", "C"],
        correct: 3
    },
    {
        text: "Which tool is used to ensure code quality in JavaScript?",
        options: ["JSLint", "TypeScript", "Babel", "Webpack"],
        correct: 0
    },
    {
        text: "What is the primary use of the Git command 'clone'?",
        options: ["To stage changes", "To copy a repository", "To switch to a different branch", "To list all the files in a repository"],
        correct: 1
    },
    {
        text: "What does API stand for in the context of programming?",
        options: ["Apple Pie Interface", "Application Programming Interface", "Advanced Peripheral Integration", "Application Process Integration"],
        correct: 1
    },
    {
        text: "Javascript is a single threaded programming language",
        options: ["True", "False"],
        correct: 0
    },
    {
        text: "API calls in Javascript can be done using the following method",
        options: ["setTimeout()", "setInterval()", "fetch()", "get()"],
        correct: 2
    },
];

let currentQuestionIndex = 0;
let selectedAnswer = null;

function loadQuestion() {
    const question = questions[currentQuestionIndex];
    const questionTextElement = document.getElementById('question');
    const optionsContainer = document.getElementById('answer-list');

    // Set the question text
    questionTextElement.textContent = question.text;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Generate new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('li');

        const label = document.createElement('label');
        const radio = document.createElement('input');
        radio.type = 'radio';
        radio.name = 'option';
        radio.value = index;

        radio.addEventListener('click', () => {
            selectedAnswer = index;
        });
        
        label.appendChild(radio);
        label.appendChild(document.createTextNode(option));
        optionElement.appendChild(label);
        optionsContainer.appendChild(optionElement);
    });
}


function disableOption() {
    document.querySelectorAll('input[name="option"]').forEach(radio => {
        radio.disabled = true;
    })
}

document.getElementById('submit').addEventListener('click', () => {
    if (selectedAnswer === null) {
        alert('Please select an option.');
        return;
    }

    const correctAnswer = questions[currentQuestionIndex].correct;
    const options = document.querySelectorAll('input[name="option"]');

    options.forEach((option,index) => {
        if (index === correctAnswer) {
            if (option.value == correctAnswer) {
                option.parentNode.classList.add('correct');
            } 
            
            if(index===selectedAnswer && selectedAnswer!==correctAnswer){
                option.parentNode.classList.add('incorrect');
            }
        }
    });

    disableOption();
});

document.getElementById('next').addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        loadQuestion();
    } else {
        alert('Quiz completed!');
        
        currentQuestionIndex = 0;
        loadQuestion();
    }
    // Reset selected answer for the next question
    selectedAnswer = null;
});

// Load the first question on startup
loadQuestion();
