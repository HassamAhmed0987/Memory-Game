const emojis = ['🍔', '🍔', '🍧', '🍧', '🍕', '🍕', '🍉', '🍉', '🍗', '🍗', '🍓', '🍓', '🍒', '🍒', '🥧', '🥧', '🌺', '🌺', '🍡', '🍡']
let flippedCards = []
let matchedCards = 0
let movesCount = 20
let timerSecond = 60
let timerminute = 1

const container = document.querySelector("#grid-game")
const startBtn = document.querySelector(".start-game")
const movesElement = document.querySelector(".moves-count")
const timerSecELe = document.querySelector(".timer-second")
const timerMintELe = document.querySelector(".timer-minute")


// let timer = setInterval(() => {
//     timerSecond--
//     if (timerSecond === 0 && timerminute !== 0) {
//         timerSecond = 60
//         timerminute--
//     }
//     if (timerminute > 0) {
//         // console.log("hello");
//         // console.log(timerminute);
//     } else {
//         alert('Time Over! Try Again!')
//         clearInterval(timer)
//     }
//     // console.log(timerminute,timerSecond);
//     timerSecELe.textContent = timerSecond
//     timerMintELe.textContent = timerminute
// }, 1000)
movesElement.textContent = movesCount
startBtn.addEventListener("click", restartGame)

function startGame() {
    flippedCards = []
    matchedCards = 0

    let shufflecards = emojis.sort(() => 0.5 - Math.random())
    // console.log(shufflecards);

    container.innerHTML = ""

    shufflecards.forEach((emoji) => {
        let card = document.createElement("div")
        card.classList.add("card")
        card.dataset.name = emoji
        card.textContent = emoji
        container.appendChild(card)
        card.addEventListener("click", flipcard)
    })
    // timerSecond = 60
    // timerminute = 1
    // let timer = setInterval(() => {
        // if(timerminute !== -1){
        //     timerSecond--
        //     if (timerSecond === 0) {
        //         timerSecond = 60
        //         timerminute--
        //     }
        //     // if (timerminute > -1) { 
        //     // } 
        //     // else {
        //     //     alert('Time Over! Try Again!')
        //     //     clearInterval(timer)
        //     //     restartGame()
        //     // }
        // } else{
        //     alert('Time Over')
        //     restartGame()
        // }
            // console.log(timerminute,timerSecond);
    //     timerSecELe.textContent = timerSecond
    //     timerMintELe.textContent = timerminute
    // }, 1000)
    movesCount = 20
    movesElement.textContent = movesCount
}
function flipcard() {
    if (flippedCards.length < 2 && !this.classList.contains("flipped") && !this.classList.contains('matched')) {
        this.classList.add("flipped")
        flippedCards.push(this)
    }
    if (flippedCards.length === 2) {
        setTimeout(matchCheck, 600)
    }
}
function matchCheck() {
    const [card1, card2] = flippedCards
    movesCount--
    movesElement.textContent = movesCount
    if (movesCount === 0) {
        alert("Game Over! Try Again")
        movesCount = 20
        startGame()
    }
    if (card1.dataset.name === card2.dataset.name) {
        card1.classList.add('matched')
        setTimeout(() => {
            card1.classList.add('fly')
            card1.classList.add('gaiab')
        }, 500)
        card2.classList.add('matched')
        setTimeout(() => {
            card2.classList.add('fly')
            card2.classList.add('gaiab')
        }, 500)
        matchedCards += 2
        if (matchedCards === emojis.length) {
            alert("You Win")
        }
    } else {
        card1.classList.remove('flipped')
        card2.classList.remove('flipped')
    }
    flippedCards = []
}

function restartGame() {
    startGame()
}


startGame()