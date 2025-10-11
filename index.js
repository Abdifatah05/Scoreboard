let resultHome = document.getElementById("result-Home")
let scoreHome = 0

function add1Home() {
    scoreHome += 1
    resultHome.textContent = scoreHome
}

function add2Home() {
    scoreHome += 2
    resultHome.textContent = scoreHome
}

function add3Home() {
    scoreHome += 3
    resultHome.textContent = scoreHome
}

let resultGuest = document.getElementById("result-Guest")
let ScoreGuest = 0

function add1Guest() {
    ScoreGuest += 1
    resultGuest.textContent = ScoreGuest
}

function add2Guest() {
    ScoreGuest += 2
    resultGuest.textContent = ScoreGuest
}

function add3Guest() {
    ScoreGuest += 3
    resultGuest.textContent = ScoreGuest
}

function restart(){
    scoreHome = 0
    ScoreGuest= 0
    resultHome.textContent = 0
    resultGuest.textContent =0
}

