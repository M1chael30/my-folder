let cardArray = [];
let sum = 0;
let hasBlackJack = false;
let isAlive = false;
let message = "";

let messageEl = document.getElementById("message-el");
let sumEl = document.getElementById("sum-el");
let cardsEl = document.getElementById("cards-el");

let myScore = document.querySelector("#myScore");


//this starts the game
function startGame(){
  isAlive = true;
  let firstCard = getRandomCard();
  let secondCard = getRandomCard();
  
  cardArray = [firstCard,secondCard];
  sum = firstCard + secondCard;
  renderGame();
};
//this starts the game

//generating random cards
function getRandomCard(){
  let randomNumber = Math.floor(Math.random() * 13) + 1

  if(randomNumber > 10){
    return 10
  }else if (randomNumber === 1){
    return 11
  }else{
    return randomNumber
  }
};
//generating random cards


//controls the game
function renderGame(){
  cardsEl.textContent = "Cards: ";
  
  for (let i = 0; i < cardArray.length; i++){
    cardsEl.textContent += cardArray[i] +' '; 
  };

  sumEl.textContent =  "Sum: " +sum;

  if(sum <= 20){
    message = "Do you want to draw a new card?";
  }else if(sum === 21){
    message = "You got Black Jack!";
    hasBlackJack = true;
  }else{
    message = "You're out of the game";
    isAlive = false;
  }
  messageEl.textContent = message;
};

function newCard(){
  if (isAlive === true && hasBlackJack === false){
    let thirdCard = getRandomCard();
    sum += thirdCard;
    cardArray.push(thirdCard);
    renderGame();
  }
};
//controls the game


//
