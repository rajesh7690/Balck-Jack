let cards = []
let message=""
let sum = 0;
let hasBlackJack = false
let isAlive = false

let player ={
 name: "Rajesh",
 money: 100
}
let playerCredit=document.getElementById("credit")
let sumEl=document.querySelector("#sum-el")
let card=document.querySelector("#cardsEl")
playerCredit.textContent=player.name+" : $"+player.money
function startGame(){
    isAlive = true
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    cards=[firstCard,secondCard]
    sum = firstCard + secondCard
    renderGame();
}
function renderGame(){
    card.textContent="cards : "
    for(let i=0;i<cards.length;i++){
        card.textContent+=cards[i] + " "
    } 
    if (sum <= 20) {
        sumEl.textContent="sum:" +sum
        
        message = "Do you want to draw a new card? 🙂"
    } else if (sum === 21) {
        sumEl.textContent="sum:" +sum
        message = "Wohoo! You've got Blackjack! 🥳"
        hasBlackJack = true
    } else {
        sumEl.textContent="sum:" +sum
        message = "You're out of the game! 😭"
        isAlive = false
    }
    document.getElementById("message-el").textContent=message
}

function newCard(){
    if(isAlive===true && hasBlackJack===false){
        let newca=getRandomCard()
        sum += newca
        cards.push(newca)
        renderGame();
    }
}
function getRandomCard(){
    let ran= Math.floor(Math.random()*13)+1
    if(ran===1){
        return 11;
    }
    else if(ran>10){
        return 10;
    }
    else{
        return ran;
    }
}