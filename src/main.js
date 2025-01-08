import './style.css'
import { questions } from './questions.js';
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn');
const mainDiv = document.querySelector('.main')
const quizInfo = document.querySelector('.quiz-info')
const quizSec = document.querySelector('.quiz-section')

startBtn.addEventListener('click', ()=>{
    popupInfo.classList.add('active')
    mainDiv.classList.add('active')
})

exitBtn.addEventListener('click', ()=>{
    popupInfo.classList.remove('active')
    mainDiv.classList.remove('active')
})

continueBtn.addEventListener('click', ()=>{
    quizInfo.classList.add('active')
    quizSec.classList.add('active')
    popupInfo.classList.remove('active')
    mainDiv.classList.remove('active')
    showQues(0)
})

let quesCount = 0;

const nextBtn = document.querySelector('.next-ques')

nextBtn.addEventListener('click', ()=>{
    quesCount++
    showQues(quesCount)
})


function showQues (index) {
  const quesText=document.querySelector('.ques-statment')
  quesText.innerText = `${questions[index].numb}. ${questions[index].statment}`
}


