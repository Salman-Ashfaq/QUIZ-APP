import './style.css'
const startBtn = document.querySelector('.start-btn');
const popupInfo = document.querySelector('.popup-info');
const exitBtn = document.querySelector('.exit-btn');
const continueBtn = document.querySelector('.continue-btn');
const mainDiv = document.querySelector('.main')

startBtn.addEventListener('click', ()=>{
    popupInfo.classList.add('active')
    mainDiv.classList.add('active')
})

exitBtn.addEventListener('click', ()=>{
    popupInfo.classList.remove('active')
    mainDiv.classList.remove('active')
})

