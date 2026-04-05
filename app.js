const emojis = ['🍔', '🍔', '🍧', '🍧', '🍕', '🍕', '🍉', '🍉', '🍗', '🍗', '🍓', '🍓', '🍒', '🍒', '🥧', '🥧', '🌺', '🌺', '🍡', '🍡']
let flippedCards = []
let matchedCards = 0

const container = document.querySelector("#grid-game")
const startBtn = document.querySelector(".start-game")

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
}
function flipcard() {
    if(flippedCards.length < 2 && !this.classList.contains("flipped") && !this.classList.contains('matched')){
        this.classList.add("flipped")
        flippedCards.push(this)
    } 
    if(flippedCards.length === 2){
        setTimeout(matchCheck, 600)
    }
}
function matchCheck() {
    const [card1, card2] = flippedCards

    if(card1.dataset.name === card2.dataset.name){
        card1.classList.add('matched')
        card2.classList.add('matched')
        matchedCards += 2
        if(matchedCards === emojis.length){
            alert("You Win")
        }
    }else{
        card1.classList.remove('flipped')
        card2.classList.remove('flipped')
    }
    flippedCards = []
}

function restartGame() {
    startGame()
}


startGame()