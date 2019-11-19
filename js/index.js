class Card {
    constructor(suit, value) {
        this.visible = true;
        this.flipped = false;
        this.suit = suit
        this.value = value
    }
}

const shuffle = (array) =>  {
    array.sort(() => Math.random()-0.5);
    return array 
}

let allCards = [
    new Card("spades", 1),
    new Card("spades", 2),
    new Card("spades", 3),
    new Card("spades", 4),
    new Card("spades", 5),
    new Card("spades", 6),
    new Card("spades", 7),
    new Card("spades", 8),
    new Card("spades", 9),
    new Card("spades", 10),
    new Card("spades", 11),
    new Card("spades", 12),
    new Card("spades", 13),
    new Card("hearts", 1),
    new Card("hearts", 2),
    new Card("hearts", 3),
    new Card("hearts", 4),
    new Card("hearts", 5),
    new Card("hearts", 6),
    new Card("hearts", 7),
    new Card("hearts", 8),
    new Card("hearts", 9),
    new Card("hearts", 10),
    new Card("hearts", 11),
    new Card("hearts", 12),
    new Card("hearts", 13),
    new Card("clubs", 1),
    new Card("clubs", 2),
    new Card("clubs", 3),
    new Card("clubs", 4),
    new Card("clubs", 5),
    new Card("clubs", 6),
    new Card("clubs", 7),
    new Card("clubs", 8),
    new Card("clubs", 9),
    new Card("clubs", 10),
    new Card("clubs", 11),
    new Card("clubs", 12),
    new Card("clubs", 13),
    new Card("diamonds", 1),
    new Card("diamonds", 2),
    new Card("diamonds", 3),
    new Card("diamonds", 4),
    new Card("diamonds", 5),
    new Card("diamonds", 6),
    new Card("diamonds", 7),
    new Card("diamonds", 8),
    new Card("diamonds", 9),
    new Card("diamonds", 10),
    new Card("diamonds", 11),
    new Card("diamonds", 12),
    new Card("diamonds", 13)
]

let deck = shuffle(allCards)
console.log(deck)