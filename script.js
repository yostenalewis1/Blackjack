 
let cards = [];
let sum = 0;
let result = document.getElementById("result");
let cards_El = document.getElementById("cards-el");
let sum_EL = document.getElementById("sum-el");
let res = " ";
let isAlive = false;
let hasBlackJack = false

//create Random number
function RandomNumber() {
  let randomCard = Math.floor(Math.random() * 13) + 1;
  return randomCard;
}

// when i start the game it get a 2 random  num
function startGame() {
    isAlive=true
    document.getElementById("new-card").disabled=false
  let firstcard = RandomNumber()
  let secondcard = RandomNumber()
  cards = [firstcard, secondcard]
  sum = firstcard + secondcard;
  probability()
}

// Cards & sum & probabitity

function probability() {
  cards_El.textContent = "Cards : " + " "
  for (let i = 0; i < cards.length; i++) {
    cards_El.textContent += cards[i] + " "
  }
  sum_EL.textContent = "Sum : " + sum

  if (sum <= 20) {
    res = "Do you want to draw a new card?"
  } else if (sum === 21) {
    res = "You've got Blackjack!"
      hasBlackJack = true   
       document.getElementById("new-card").disabled=true

  } else {
    res = "You're out of the game!";
    isAlive = false;
    document.getElementById("new-card").disabled=true

  }
  result.textContent = res;
}

/// add new Card
function newCard() {
  if (isAlive === true ||  hasBlackJack === false) {
    let x = RandomNumber();
    cards.push(x);
    sum += x;
    probability();
   }
}

