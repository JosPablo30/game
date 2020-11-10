const username = document.querySelector('#username')
const saveScoreBtn = document.querySelector('#saveScoreBtn')
const endTxt = document.querySelector('#end-text')
const finalScore = document.querySelector('#finalScore')
const mostRecentScore = localStorage.getItem('mostRecentScore')

const highScores = JSON.parse(localStorage.getItem('highScores')) || []

const MAX_HIGH_SCORES = 5
finalScore.innerText = mostRecentScore
if(mostRecentScore==500){
    endTxt.innerText = '¡Felicidades!'
    let felicidades = ['Felicidades','Magnífico','Increíble','Crack','Qué Pro']
    let i = Math.floor(Math.random() * felicidades.length)
    endTxt.innerText = '¡'+felicidades[i]+'!'
}else if(mostRecentScore>=300){
    endTxt.innerText = '¡Felicidades!'
    let animo = ['Súper','Muy bien','Tú puedes','Bien hecho','Sigue así']
    let j = Math.floor(Math.random() * animo.length)
    endTxt.innerText = '¡'+animo[j]+'!'
}else{
    endTxt.innerText = '¡Felicidades!'
    let consejo = ['Échale más ganas','Puedes mejorar','Puedes dar más','Vamos, puedes mejorar','Bien, pero puedes ser mejor']
    let k = Math.floor(Math.random() * consejo.length)
    endTxt.innerText = '¡'+consejo[k]+'!'
}
