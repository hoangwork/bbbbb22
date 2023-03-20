let cards =[]
let sum = 0
let hasBlackJack = false
let isAlive = true
let message = ""
let messageEl=document.getElementById('message-el')
let sumEl=document.getElementById("sum-el")
let cardsEl=document.getElementById("cards-el")
let player={
    name:"Per",
    chips:145

}


let playerEl=document.getElementById("player-el")

playerEl.textContent=player["name"]+": $"+player["chips"]




// let sumEl=document.querySelector("#sum-el")
function getRandomCard(){

    let randomNumber = Math.floor(Math.random()*13+1)
    if (randomNumber === 1){
        return 11
    }else if (randomNumber > 10){
        return 10
    }else {
        return randomNumber
    }


}
function startGame(){
    isAlive=true
    let firstCard =getRandomCard()
    let secondCard=getRandomCard()
    cards =[firstCard,secondCard]
    sum = firstCard + secondCard

    renderGame()
}
function renderGame(){
    cardsEl.textContent = "Cards: "
    for (var i = 0; i < cards.length; i++) {
        cardsEl.textContent+=cards[i]+" "
    }

    sumEl.textContent="Sum: " + sum
    if (sum < 21){
        
        message = "do you want to draw a new card?😀"
    }else if (sum === 21){
        
        message = "you have got blackjack🤣"
        hasBlackJack=true
    }else {
        
        message="you are out of game!😭"
        isAlive=false
    }
    messageEl.textContent=message

}
function newCard(){
    if (isAlive ===true && hasBlackJack===false){
        let card = getRandomCard()
        sum +=card

        cards.push(card)
        console.log(cards)
        renderGame()
    }
    
}



