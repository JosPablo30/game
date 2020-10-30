const question = document.querySelector("#question");
const choices = Array.from(document.querySelectorAll(".choice-text"));
const progressText = document.querySelector("#progressText");
const scoreText = document.querySelector("#score");
const progressBarFull = document.querySelector("#progressBarFull");

let currentQuestion = {};
let acceptingAnswers = true
let score = 0
let questionCounter = 0
let availableQuestions = []

let questions = [
    {
        question: "La información personal al ser visible, puede ser...",
        choice1: 'Malinterpretada',
        choice2: 'Presumida',
        choice3: 'Valorada',
        choice4: 'Respetada',
        answer: 1
    },
    {
        question: "¿Cuál de los siguientes datos pueden ser utilizados al descargar una app?",
        choice1: 'Dirección IP',
        choice2: 'Ubicación general',
        choice3: 'ID del dispositivo',
        choice4: 'Todos los anteriores',
        answer: 4
    },
    {
        question: "Huella digital que se fomenta cuando compartimos publicaciones",
        choice1: 'Pasiva',
        choice2: 'Inmoral',
        choice3: 'Activa',
        choice4: 'Moral',
        answer: 3
    },
    {
        question: "¿Para qué se puede utilizar tu información?",
        choice1: 'Conocer a candidatos de puestos',
        choice2: 'Conocer mejor a los clientes',
        choice3: 'Generar estrategias de mercado',
        choice4: 'Todas las anteriores',
        answer: 4
    },
    {
        question: "Huella digital que se fomenta cuando otros comparten publicaciones sobre nosotros",
        choice1: 'Inmoral',
        choice2: 'Pasiva',
        choice3: 'Activa',
        choice4: 'Moral',
        answer: 2
    },
    

]

const SCORE_POINTS = 100
const MAX_QUESTIONS = 5

startGame = () => {
    questionCounter = 0
    score = 0
    availableQuestions = [...questions]
    getNewQuestion()
}

getNewQuestion = () => {
    if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS){
        localStorage.setItem('mostRecentScore', score)

        return window.location.assign('end.html');
    }
    questionCounter++
    progressText.innerText = `Pregunta ${questionCounter} de ${MAX_QUESTIONS}`
    progressBarFull.style.width = `${(questionCounter/MAX_QUESTIONS)*100}%`
    const questionsIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionsIndex]
    question.innerText = currentQuestion.question

    choices.forEach(choice => {
        const number = choice.dataset['number']
        choice.innerText = currentQuestion['choice' + number]
    })

    availableQuestions.splice(questionsIndex, 1)
    acceptingAnswers = true
}

choices.forEach(choice => {
    choice.addEventListener('click', e =>{
        if(!acceptingAnswers) return
        acceptingAnswers = false
        const selectedChoice = e.target
        const selectedAnswer = selectedChoice.dataset['number']

        let classToApply = selectedAnswer == currentQuestion.answer ? 'correct' : 'incorrect'
        if(classToApply === 'correct'){
            incrementScore(SCORE_POINTS)
        }

        selectedChoice.parentElement.classList.add(classToApply)

        setTimeout(() => {
            selectedChoice.parentElement.classList.remove(classToApply)
            getNewQuestion()


        }, 1000)
    })
})

incrementScore = num =>{
    score+=num
    scoreText.innerText = score
}

startGame()
