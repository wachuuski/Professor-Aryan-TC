function gameStart(playerNum){
    let deck = ["AceofHearts","TwoofHearts","ThreeofHearts","FourofHearts","FiveofHearts","SixofHearts","SevenofHearts","EightofHearts","NineofHearts","TenofHearts","JackofHearts","QueenofHearts","KingofHearts","AceofSpades","TwoofSpades","ThreeofSpades","FourofSpades","FiveofSpades","SixofSpades","SevenofSpades","EightofSpades","NineofSpades","TenofSpades","JackofSpades","QueenofSpades","KingofSpades","AceofDiamonds","TwoofDiamonds","ThreeofDiamonds","FourofDiamonds","FiveofDiamonds","SixofDiamonds","SevenofDiamonds","EightofDiamonds","NineofDiamonds","TenofDiamonds","JackofDiamonds","QueenofDiamonds","KingofDiamonds","AceofClubs","TwoofClubs","ThreeofClubs","FourofClubs","FiveofClubs","SixofClubs","SevenofClubs","EightofClubs","NineofClubs","TenofClubs","JackofClubs","QueenofClubs","KingofClubs"];
    shuffle(deck);
    class Players{
        constructor(hand,id)
    }
}
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