import promptSync from 'prompt-sync';
const prompt = promptSync();
let deck = new Array
let playerList = new Array
let playerNum = 5
//when migrate to p5js just use shuffle(deck) without this
function shuffle(array) {
  let currentIndex = array.length,  randomIndex;
  // While there remain elements to shuffle...
  while (currentIndex != 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    // And swap it with the current element.
    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex], array[currentIndex]];
    }
  return array;
}

class Card{
  constructor(suit,value){
    //0, 1, 2 , 3 = Clubs, Hearts, Spades, Diamonds
    this.suit = suit;
    this.value = value;
  }
}
//create your 52 cards (start at value 1 for ace to value 13 for king)
for (let i = 0; i<4; i++){
  for (let j = 0; j<13;j++){
    deck.push(new Card(i,j+1))
  }
}
shuffle(deck);

class Players{
  constructor(hand,id){
    this.hand = hand;
    this.id = id;
  }
}
//create players and deal them cards
for (let i = 0; i<playerNum; i++){
  let newHand = [];
  for (let j = 0; j<5; j++){
    newHand.push(deck.pop());
  }
  playerList.push(new Players(newHand,i));
}
//start game
let stack = [];
stack.push(deck.pop());
let activeCard = stack[stack.length-1];
function setActive(){
  activeCard = stack[stack.length-1];
}
function checkDeck(){
  if (deck.length == 0){
    console.log("Shuffling deck...");
    let temp = stack.pop();
    deck = stack.shuffle();
    stack = [];
    stack.push(temp.pop());
  }
}
function readCard(card){
  let cardsuit = ""
  let cardvalue = ""
  switch(card.suit){
    case 0:
      cardsuit = "Clubs"
      break;
    case 1:
      cardsuit = "Hearts"
      break;
    case 2:
      cardsuit = "Spades"
      break;
    case 3:
      cardsuit = "Diamonds"
      break;
  }
  switch(card.value){
    case 0:
      return("Joker")
    case 1:
      cardvalue = "Ace"
      break;
    case 2:
      cardvalue = "Two"
      break;
    case 3:
      cardvalue = "Three"
      break;
    case 4:
      cardvalue = "Four"
      break;
    case 5:
      cardvalue = "Five"
      break;
    case 6:
      cardvalue = "Six"
      break;
    case 7:
      cardvalue = "Seven"
      break;
    case 8:
      cardvalue = "Eight"
      break;
    case 9:
      cardvalue = "Nine"
      break;
    case 10:
      cardvalue = "Ten"
      break;
    case 11:
      cardvalue = "Jack"
      break;
    case 12:
      cardvalue = "Queen"
      break;
    case 13:
      cardvalue = "King"
      break;
  }
  return(cardvalue + " of " + cardsuit);
}
function shortReadCard(card){
  let cardsuit = ""
  let cardvalue = ""
  switch(card.suit){
    case 0:
      cardsuit = "♣"
      break;
    case 1:
      cardsuit = "♥"
      break;
    case 2:
      cardsuit = "♠"
      break;
    case 3:
      cardsuit = "♦"
      break;
  }
  switch(card.value){
    case 0:
      return("Joker")
    case 1:
      cardvalue = "A"
      break;
    case 2:
      cardvalue = "2"
      break;
    case 3:
      cardvalue = "3"
      break;
    case 4:
      cardvalue = "4"
      break;
    case 5:
      cardvalue = "5"
      break;
    case 6:
      cardvalue = "6"
      break;
    case 7:
      cardvalue = "7"
      break;
    case 8:
      cardvalue = "8"
      break;
    case 9:
      cardvalue = "9"
      break;
    case 10:
      cardvalue = "10"
      break;
    case 11:
      cardvalue = "11"
      break;
    case 12:
      cardvalue = "12"
      break;
    case 13:
      cardvalue = "13"
      break;
  }
  return(cardvalue+cardsuit);
}
console.log("The Game of Mao begins now. The starting card is " + readCard(activeCard) + ".");
//creating draw function
function draw (playerid, number){
  for (let i = 0; i<number; i++){
    playerList[playerid].hand.push(deck.pop());
  }
}
//how does a turn work
function turn (playerid){
  console.log("The top card is now the " + readCard(activeCard) + ".");
  console.log("Player " + (playerid+1) + ", Start your turn");
  prompt("Type anything to start: ");
  function readHand(playerid){
    for (let i = 0; i<playerList[playerid].hand.length;i++){
      console.log(i+1 + ": " + shortReadCard(playerList[playerid].hand[i]));
    }
  }
  readHand(playerid)
  
  let toPlay = prompt("Play a card from your hand (type draw to draw a card): ");
  //check if the card was legal (by standard UNO rules)
  switch(toPlay){
    //unless they want to draw a card in which case go ahead
    case "draw": 
      checkDeck();
      draw (playerid,1);
      checkDeck();
      readHand(playerid);
      break;
    default:
      //if they don't want to draw, then we check if it's legal  
      if(((parseInt(toPlay))==undefined) || parseInt(toPlay)>playerList[playerid].hand.length) {
        // if it's not, force them to draw a card
        console.log("Illegal play.");
        draw (playerid,1);
        checkDeck();
        readHand(playerid);
      }
        //if it is, push it to the active stack and set it as the top card
      else if ((playerList[playerid].hand[toPlay-1].suit==activeCard.suit) || playerList[playerid].hand[toPlay-1].value==activeCard.value){
        stack.push(playerList[playerid].hand[toPlay-1])
        playerList[playerid].hand.splice(toPlay-1,1);
        readHand(playerid);
        setActive();
      }     
  }
  console.clear(); 
  console.log("Please pass the device to Player " + parseInt(playerid+2));
}
let winner = "";
rungame:{
  while(true){
    for (let i = 0; i<playerList.length;i++){
      turn(playerList[i].id);
      if (playerList[i].hand.length==0){
        winner = playerList[i].id;
        break rungame;
      }
    }
  }
}
console.log("The winner of this game is player " + winner);