// ВАЖНО! ЗАМЫКАНИЕ

// function counter() {
//     let count = 0;

//     return function(){
//         return ++count;
//     }
// }

// let counter1 = counter();
// let counter2 = counter();

// console.log(counter1());
// console.log(counter1());
// console.log(counter1());
// console.log(counter2());

let holes = document.querySelectorAll('.hole');
let moles = document.querySelectorAll('.mole');
let score = document.querySelector('.score');
let inProgress = true;
let scoreCount = 0;
let startBtn = document.querySelector('.start');

moles.forEach((mole) => mole.addEventListener('click', hitTheMole));

function startGame (){
    callMole();
    inProgress = true;
    scoreCount = 0;
    score.textContent = 0;
    setTimeout(() => {
        inProgress=false;
    }, 30000)
}

function callMole () {
    let hole = getHole(holes);
    let time = getTime(300, 1500);
    hole.classList.add('up');
    setTimeout(()=>{
        hole.classList.remove('up');
        inProgress && callMole ();
    }, time)
}

function getHole(listHoles) {
    let id = Math.floor(Math.random()*listHoles.length);
    return listHoles[id]
}

function getTime(min, max) {
    return Math.round(Math.random() * (max-min) + min)
}

function hitTheMole(e) {
    scoreCount++;
    score.textContent = scoreCount;
    e.target.parentNode.classList.remove('up');
}

function redirectTo() {
    window.location = 'index.html';
}